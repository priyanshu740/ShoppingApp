import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import {IoIosCreate} from 'react-icons/io'
import { useSelector } from 'react-redux';
import { StateProvider } from '../context/context';


const Navbar = () => {
  const { state: { cart }, dispatch } = StateProvider()
  // console.log(filterstate);


  return (
    <div className='nav'>
      <div className='right'>
        EcommerceApp
      </div>
      <div className='left'>
      
        <Link to='/' >
          <AiFillHome size={33} color='white'/>
        </Link>
        <Link to='/create' >
        <IoIosCreate size={33} color='white'/>
\        </Link>
        <Link to='/cart' >
          <FaShoppingCart color='white' className='cart' size={33} />
          <div className='cart-len'>
            {cart.length}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar