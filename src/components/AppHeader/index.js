import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo02.png'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line
import Gallery from '../Gallery/Gallery'
//import Home from '../Home/Home'

import { NavLink, Switch, Route } from 'react-router-dom'

const AppHeader = (props) => {
  return <div>
      <div style={{ background: "#ea5455" }}>
        <div style={{ margin: "0 auto", maxWidth: 960, height: "100%" }}>
          <h1 style={{ margin: 0 }}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              <img src={logo} alt="Logo" title="SunFoodApp" className="logo-img" />
            </a>
          </h1>
        </div>
      </div>
      <div style={{ background: "#2d4059" }}>
        <div style={{ margin: "0 auto", maxWidth: 960, height: "100%" }}>
          <ul className="top-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="/">Search Food</a>
            </li>
            <li>
              <NavLink to="/gallery">View Food Collections</NavLink>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <Main />
    </div>;
}

export default AppHeader

const Main = () => (
  <Switch>
    {/* <Route path='/' component={Home}></Route> */}
    <Route exact path='/gallery' component={Gallery}></Route>
  </Switch>
);