import styled from "styled-components";
import Button from "../button/Button.component";




export const CheckoutEmptyDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
// border: solid 2px;
padding: 15px;
`

export const EmptyCartImg = styled.img`
height: 40%;
width: 60%;
margin: 5% 0 10% 0;
`

export const EmptyCartButton = styled(Button)`
background-color: orange;
color: black;
`