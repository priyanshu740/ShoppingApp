import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Singleitem from './SingleItem'
import '../style/home.css'
import Filter from './Filter'
import { StateProvider } from '../context/context'

const Home = () => {


  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
      

            <Singleitem />
       
      </div>
    </div>
  )
}

export default Home