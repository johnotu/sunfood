import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Gallery from './components/Gallery/Gallery.js'
import Contact from './components/Contact'
import MainPage from './components/MainPage'


import logo from './assets/logo02.png'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const AppRouter = () => (
  <Router>
    <div>
    <AppHeader />


      <AppFooter />
      </div>
  </Router>
);

export default AppRouter;