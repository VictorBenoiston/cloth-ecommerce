import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Button from './components/button/Button.component'


const Cart = () => {
  return (
    <div style={{border: '2px solid black',
    width: '400px', height: '300px',
    display: 'flex', alignItems: 'center', 
    flexDirection: 'column'}}>
      <h1>This is the Cart page.</h1>
      <Button className='buttonCart' buttonType='inverted'>Hello</Button>
    </div>
  )
}

const Checkout = () => {
  return (
    <h1>This is the Checkout page.</h1>
  )
}



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>  {/* The '/' is the raw url. */}
        <Route index element={<Home />} />  {/* /home/cart */}
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
