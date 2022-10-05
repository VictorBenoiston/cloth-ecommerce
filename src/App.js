import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'

const Shop = () => {
  return (
    <h1>This is the shop page.</h1>
  )
}
const Cart = () => {
  return (
    <h1>This is the Cart page.</h1>
  )
}

const Checkout = () => {
  return(
    <h1>This is the Checkout page.</h1>
  )
}

const Logout = () => {
  return (
    <h1>You have loged out!</h1>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>  {/* The '/' is the raw url. */}
        <Route index element={<Home />} />  {/* /home/cart */}
        <Route path='shop' element={<Shop />} /> 
        <Route path='cart' element={<Cart />} /> 
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='logout' element={<Logout/>} />
        <Route path='signIn' element={<SignIn/>} />
      </Route>
    </Routes>
  )
}

export default App
