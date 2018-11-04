import React, { Component } from "react";
//import ContentEditable from "./components/ContentEditable";
import AppHeader from "../AppHeader";
//import SettingsMenu from "./components/SettingsMenu";
//import SettingsIcon from "./components/SettingsIcon";
//import api from "./utils/api";
//import sortByDate from "./utils/sortByDate";
//import isLocalHost from "./utils/isLocalHost";
//import "./App.css";


import styled from 'styled-components'
import FoodCard from '../foodCard'
//import Layout from '../components/layout'
import arrozConPollo from '../../assets/images/arroz-pollo.png'
import ceviche from '../../assets/images/ceviche.jpg'
import papaALaHuancaina from '../../assets/images/papa-huancaina.jpg'

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
      cardWidth: 200
    }
    render() {
        const { cardWidth } = this.state
    return (
      <div className="app">
        <Container>
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={papaALaHuancaina} text="Papa a la huancaina" />
          <FoodCard size={cardWidth} img={arrozConPollo} text="Arroz con pollo" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
          <FoodCard size={cardWidth} img={ceviche} text="Ceviche" />
        </Container>
        
      </div>
    );
  }
}