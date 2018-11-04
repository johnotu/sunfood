import styled from 'styled-components'

const Card = styled.div`
  width: ${({ size }) => size || '50'}px;
  border-radius: 10px;
  border: 1px solid #b2f4fb;
  background-color: #dbfafd;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const Img = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100px;
  margin: 0;
  transition: all .2s;
  :hover {
    width: 110%;
  }
`

const Name = styled.label`
  display: flex;
  color: ${({ color }) => color || '#626262'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  margin: ${({ margin }) => margin || '0'};
  cursor: pointer;
`

export {
  Card,
  Container,
  Img,
  Name
}
