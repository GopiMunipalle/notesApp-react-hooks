// Style your elements here
import styled from 'styled-components'

export const ItemContainer = styled.li`
  background-color: #ffffff;
  border: solid 1.4px #aab8c8;
  border-radius: 5px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 200px;
  padding: 10px;
`
export const Title = styled.h1`
  font-family: roboto;
  font-size: 15px;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const Desc = styled.p`
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
