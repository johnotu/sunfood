import React from 'react'
import {
  Card, Container, Name, Img
} from './styles'

const FoodCard = ({
  size, img, key, text
}) => {
  return (
    <Card key={key} size={size}>
      <Container key={key}>
        <Img src={img} size={size} />
        <Name key={key}>
          {text}
        </Name>
      </Container>
    </Card>
  )
}

export default FoodCard
