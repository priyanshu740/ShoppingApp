import React,{useState,useEffect} from 'react'
import '../style/singleitem.css'
import axios from 'axios'

import { StateProvider } from '../context/context'

const SingleItem = () => {
   
  const [products,setProducts] = useState([])
  const [qty,setqty] = useState([])
  const [isDisabled, setDisabled] = useState(false);

  const {
    state: { cart },
    dispatch,
  } = StateProvider();

  useEffect(() => {
     const getItems = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/products/")
          setProducts(res.data)
        } catch (error) {
          console.log(error)
        }
     } 
     getItems()
  })
  // console.log(products)
  
const handleClick = () => {
 
}

  return (
    <div className="item">
      {
        products.map((i) => (
          <div className='products'>
            <div className='product'>
            <img variant="top" src={i.img} alt={i.name} />
          <div className='items'>
            <span className='name'> {i.title}</span>
            <span>{i.price}</span> 
            <span>{qty}</span>     
            <button
             className='a-btn'
             onClick= {()=>dispatch({
                    type:'ADD_TO_CART',
                    payload:i
             })}
            >
              Add to Cart
            </button>  
            <button
          
              className='r-btn'
              onClick={() => dispatch({
                type:"REMOVE_FROM_CART",
                payload:i
              })}
            >
              Remove from Cart
            </button>
          </div>

            </div>
         
          </div>
        ))
      }
     
    </div>
  )
}

export default SingleItem