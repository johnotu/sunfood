import React from 'react'
import food from '../../assets/food.png'


const MainPage = (props) => {
  return (
    <div>
    <h2><span>Sun</span>Code<span>Flower</span> presents..</h2>
    <p>We all love tasty food and eat well. But sometimes we lack the imagination or words to describe what we want for dinner.</p>
    <p>We present you a mega application using the latest technologies that can solve all the above problems.</p>
    <p>In our great app we use only modern API such as Fauna (for call the db and receive data), Clarify (to detect food image), Formspree (for collecting delivery address), Pilon (because it's interesting to try). And many, many others.</p>
    <p>Our goal is to get acquainted with the above mentioned API, to determine the possibilities of their further application in our future projects, to find git  for ourselves API's strengths and weaknesses.</p>
    <p>Meet ...</p>
    <h1 style={{ textAlign:'center', }}><a href=""><span>Sun</span>Food<span>App</span></a></h1>
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign:'center', }}>  <img src={food} alt="Logo" alt="SunCodeFlower" title="SunCodeFlower"/>  </div>
    </div>
)
  }

export default MainPage