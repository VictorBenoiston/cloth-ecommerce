import { BaseButton, InvertedButton, GoogleSignInButton } from '../button/button.styles'


import styled from 'styled-components'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  top: 90px; // Top and right set the position.
  right: 40px;
  z-index: 5;
  align-items: center;

  ${ BaseButton }, 
  ${ InvertedButton },
  ${ GoogleSignInButton } {
    margin-top: auto;
    font-size: 70%;
    width: 80%;
    margin-bottom: 20px;
  }

`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
`

export const CartItems = styled.div`
height: 73%;
display: flex;
flex-direction: column;
overflow-y: scroll;
position: absolute;
width: 100%;
padding: 20px;
`
