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
          <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }} 
           className="main-content"
        >
      <Route path="/main/" exact component={MainPage} />
      <Route path="/about/" component={About} />
      <Route path="/gallery/" component={Gallery} />
      <Route path="/contact/" component={Contact} />
      </div>
      <AppFooter />
      </div>
  </Router>
);

export default AppRouter;