import React, { Component } from "react";
import api from "../../utils/api";
import isLocalHost from "../../utils/isLocalHost";


import styled from 'styled-components'
import FoodCard from '../foodCard'

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border: 2px solid #CCCCCC;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

export default class Gallery extends Component {
    state = {
      cardWidth: 200,
      food: []
    }
  componentDidMount() {
    // Fetch all todos
    api.readAll().then((food) => {
      if (food.message === 'unauthorized') {
        if (isLocalHost()) {
          alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
        } else {
          alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SECRET` set in Netlify enviroment variables is correct')
        }
        return false
      }

      console.log('all food', food)
      this.setState({
        food: food
      })
    })
  }
  
  
    render() {
      const { cardWidth, food } = this.state
      console.log('*** foods: ', food)
    return (
      <div className="app">
        <Container>
          {
            food.map((item, i) => {
              return <FoodCard key={i} size={cardWidth} img={item.data.image} text={item.data.name} />;
            })
          }
        </Container>
        
      </div>
    );
  }
}