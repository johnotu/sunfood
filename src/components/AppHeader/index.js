import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo02.png'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <div>
    <div
      style={{
        background: '#ea5455',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          height: '100%',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <a href="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Logo" title="SunFoodApp" className="logo-img" />
          </a>
        </h1>
      </div>
    </div>
    <div
      style={{
        background: '#2d4059',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          height: '100%',
        }}
      >
        <ul className="top-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Search Food</a></li>
          <li><a href="/gallery">View Food Collections</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default AppHeader
