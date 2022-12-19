import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Badge, FormControl, Nav } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from './context/Context'
import {AiFillDelete} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'

const Header = () => {

  const{state: {cart}, dispatch, productDispatch} = CartState()

  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
          <Navbar.Brand href="#home">
            <Link className='shopping_Cart' to='/'>Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>

            <FormControl placeholder='Search a Product' className='m-auto'
             onChange={(e)=>{
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              });
             }}

            />
          </Navbar.Text>

          <Nav>
          <Dropdown alignRight>
              <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px'/>
              <Badge>{cart.length}</Badge>
              <Dropdown.Menu style={{minWidth: 370}}>

{cart.length>0 ? (
  <>
    {cart.map((prod)=>(
      <span className='cartitem' key={prod.id}>
<img 
src={prod.image}
className='cartItemImg'
alt={prod.name}
 />
 <div className='cartItemDetail'>
<span>{prod.name}</span>
<span>₹ {prod.price.split('.')[0]}</span>
 </div>
 <AiFillDelete fontSize='20px' style={{cursor: 'pointere'}}
  onClick = {()=>dispatch({
    type: 'REMOVE_FROM_CART',
    payload: prod,
  })}
 />
 </span>
    ))}
    <Link to='/cart'>
    <Button style={{white: '95%', margin: '0 10px'}}>Go To Cart</Button>
    </Link>
  </>
) : (<span style={{padding: 10}}>Cart is Empty</span>)}

              </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
