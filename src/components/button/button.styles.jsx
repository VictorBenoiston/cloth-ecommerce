import styled from 'styled-components'


export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
// font-family: 'Open Sans Condensed';
font-family: 'Open Sans', sans-serif;
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
background-color: #4285f4;
color: white;
align-items: center;
padding: 0 10px 0 20px;

img {
  margin: 0px 10px 0px -15px;
  width: 45px;
  height: 45px;
  display: flex;
}


  &:hover {
    background-color: #357ae8;
    border: none;
}
`

export const InvertedButton = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`