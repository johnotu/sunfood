import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import styles from './Contact.css' // eslint-disable-line
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'


const Contact = (props) => {
  return (
    <AppHeader />
    <div
    style={{
      background: '#2d4059',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '20px',
      }}
    >
      <p style={{ margin: 0,  color: '#bab7b7', }}>
      © 2018 Copyright <a 
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > SunFoodApp
        </a>
      </p>
    </div>
  </div>
  <AppFooter />
  )
}

export default Contact
