import React, { Component } from 'react'
import ContentEditable from './components/ContentEditable'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import SettingsMenu from './components/SettingsMenu'
import SettingsIcon from './components/SettingsIcon'
import api from './utils/api'
import sortByDate from './utils/sortByDate'
import isLocalHost from './utils/isLocalHost'
import './App.css'
import food from './assets/food.png'


export default class App extends Component {
  state = {
    todos: [],
    showMenu: false
  }
  componentDidMount() {
    // Fetch all todos
    api.readAll().then((todos) => {
      if (todos.message === 'unauthorized') {
        if (isLocalHost()) {
          alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
        } else {
          alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SECRET` set in Netlify enviroment variables is correct')
        }
        return false
      }

      console.log('all todos', todos)
      this.setState({
        todos: todos
      })
    })
  }
  saveTodo = (e) => {
    e.preventDefault()
    const { todos } = this.state
    const todoValue = this.inputElement.value

    if (!todoValue) {
      alert('Please add Todo title')
      this.inputElement.focus()
      return false
    }

    // reset input to empty
    this.inputElement.value = ''

    const todoInfo = {
      title: todoValue,
      completed: false,
    }
    // Optimistically add todo to UI
    const newTodoArray = [{
      data: todoInfo,
      ts: new Date().getTime() * 10000
    }]

    const optimisticTodoState = newTodoArray.concat(todos)

    this.setState({
      todos: optimisticTodoState
    })
    // Make API request to create new todo
    api.create(todoInfo).then((response) => {
      console.log(response)
      // remove temporaryValue from state and persist API response
      const persistedState = removeOptimisticTodo(todos).concat(response)
      // Set persisted value to state
      this.setState({
        todos: persistedState
      })
    }).catch((e) => {
      console.log('An API error occurred', e)
      const revertedState = removeOptimisticTodo(todos)
      // Reset to original state
      this.setState({
        todos: revertedState
      })
    })
  }
  deleteTodo = (e) => {
    const { todos } = this.state
    const todoId = e.target.dataset.id

    // Optimistically remove todo from UI
    const filteredTodos = todos.reduce((acc, current) => {
      const currentId = getTodoId(current)
      if (currentId === todoId) {
        // save item being removed for rollback
        acc.rollbackTodo = current
        return acc
      }
      // filter deleted todo out of the todos list
      acc.optimisticState = acc.optimisticState.concat(current)
      return acc
    }, {
      rollbackTodo: {},
      optimisticState: []
    })

    this.setState({
      todos: filteredTodos.optimisticState
    })

    // Make API request to delete todo
    api.delete(todoId).then(() => {
      console.log(`deleted todo id ${todoId}`)
    }).catch((e) => {
      console.log(`There was an error removing ${todoId}`, e)
      // Add item removed back to list
      this.setState({
        todos: filteredTodos.optimisticState.concat(filteredTodos.rollbackTodo)
      })
    })
  }
  handleTodoCheckbox = (event) => {
    const { todos } = this.state
    const { target } = event
    const todoCompleted = target.checked
    const todoId = target.dataset.id

    const updatedTodos = todos.map((todo, i) => {
      const { data } = todo
      const id = getTodoId(todo)
      if (id === todoId && data.completed !== todoCompleted) {
        data.completed = todoCompleted
      }
      return todo
    })

    this.setState({
      todos: updatedTodos
    }, () => {
      api.update(todoId, {
        completed: todoCompleted
      }).then(() => {
        console.log(`update todo ${todoId}`, todoCompleted)
      }).catch((e) => {
        console.log('An API error occurred', e)
      })
    })
  }
  updateTodoTitle = (event, currentValue) => {
    let isDifferent = false
    const todoId = event.target.dataset.key

    const updatedTodos = this.state.todos.map((todo, i) => {
      const id = getTodoId(todo)
      if (id === todoId && todo.data.title !== currentValue) {
        todo.data.title = currentValue
        isDifferent = true
      }
      return todo
    })

    // only set state if input different
    if (isDifferent) {
      this.setState({
        todos: updatedTodos
      }, () => {
        api.update(todoId, {
          title: currentValue
        }).then(() => {
          console.log(`update todo ${todoId}`, currentValue)
        }).catch((e) => {
          console.log('An API error occurred', e)
        })
      })
    }
  }
  clearCompleted = () => {
    const { todos } = this.state

    // Optimistically remove todos from UI
    const data = todos.reduce((acc, current) => {
      if (current.data.completed) {
        // save item being removed for rollback
        acc.completedTodoIds = acc.completedTodoIds.concat(getTodoId(current))
        return acc
      }
      // filter deleted todo out of the todos list
      acc.optimisticState = acc.optimisticState.concat(current)
      return acc
    }, {
      completedTodoIds: [],
      optimisticState: []
    })

    // only set state if completed todos exist
    if (!data.completedTodoIds.length) {
      alert('Please check off some todos to batch remove them')
      this.closeModal()
      return false
    }

    this.setState({
      todos: data.optimisticState
    }, () => {
      setTimeout(() => {
        this.closeModal()
      }, 600)

      api.batchDelete(data.completedTodoIds).then(() => {
        console.log(`Batch removal complete`, data.completedTodoIds)
      }).catch((e) => {
        console.log('An API error occurred', e)
      })
    })

  }
  closeModal = (e) => {
    this.setState({
      showMenu: false
    })
  }
  openModal = () => {
    this.setState({
      showMenu: true
    })
  }
  renderTodos() {
    const { todos } = this.state

    if (!todos || !todos.length) {
      // Loading State here
      return null
    }

    const timeStampKey = 'ts'
    const orderBy = 'desc' // or `asc`
    const sortOrder = sortByDate(timeStampKey, orderBy)
    const todosByDate = todos.sort(sortOrder)

    return todosByDate.map((todo, i) => {
      const { data, ref } = todo
      const id = getTodoId(todo)
      // only show delete button after create API response returns
      let deleteButton
      if (ref) {
        deleteButton = (
          <button data-id={id} onClick={this.deleteTodo}>
            delete
          </button>
        )
      }
      const boxIcon = (data.completed) ? '#todo__box__done' : '#todo__box'
      return (
        <div key={i} className='todo-item'>
          <label className="todo">
            <input
              data-id={id}
              className="todo__state"
              type="checkbox"
              onChange={this.handleTodoCheckbox}
              checked={data.completed}
            />

            <div className='todo-list-title'>
              <ContentEditable
                tagName='span'
                editKey={id}
                onBlur={this.updateTodoTitle} // save on enter/blur
                html={data.title}
                // onChange={this.handleDataChange} // save on change
              />
            </div>
          </label>
          {deleteButton}
        </div>
      )
    })
  }
  render() {
    return (
      <div className='app'>

        <AppHeader />
        <div  className="main-home">

            <h2><span>Sun</span>Code<span>Flower</span> presents..</h2>
            <p>We all love tasty food and eat well. But sometimes we lack the imagination or words to describe what we want for dinner.</p>
            <p>We present you a mega application using the latest technologies that can solve all the above problems.</p>
            <p>In our great app we use only modern API such as Fauna (for call the db and receive data), Clarify (to detect food image), Formspree (for collecting delivery address), Pilon (because it's interesting to try). And many, many others.</p>
            <p>Our goal is to get acquainted with the above mentioned API, to determine the possibilities of their further application in our future projects, to find git  for ourselves API's strengths and weaknesses.</p>
            <p>Meet ...</p>
            <h1 style={{ textAlign:'center', }}><a href=""><span>Sun</span>Food<span>App</span></a></h1>
            <div style={{ maxWidth: '100%', margin: 'auto', textAlign:'center', }}>
              <img src={food} alt="Logo" />
            </div>
      </div>
      <AppFooter />
    <SettingsMenu
          showMenu={this.state.showMenu}
          handleModalClose={this.closeModal}
          handleClearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

function removeOptimisticTodo(todos) {
  // return all 'real' todos
  return todos.filter((todo) => {
    return todo.ref
  })
}

function getTodoId(todo) {
  if (!todo.ref) {
    return null
  }
  console.log(todo)
  return todo.ref['@ref'].id.split('/').pop()
}
