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
              <img src={food} alt="food" width="300"/>
            </div>
      </div>
      <AppFooter />

      </div>
    )
  }
}

