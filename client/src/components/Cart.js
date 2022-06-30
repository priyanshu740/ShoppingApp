import React,{useState,useEffect} from 'react'
import '../style/cart.css'
import {AiFillStar, AiTwotoneAlert,AiFillDelete} from 'react-icons/ai'
import { StateProvider } from '../context/context'

const Cart = () => {

  const {state:{cart},dispatch} = StateProvider()
  // console.log(cart)

  // const total =() => {
  //     let total = 0
  //     cart.map((i) => {

  //      return total = Number(total) + Number(i.price) 
  //     })
  //     return total
  //   }
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

 

  return (
    <div className='i-cart'>
      <div className='main'>
      {
          cart.map((i) => (
            <div className='c-items' key={i.id}>
          
              <img src={i.img} alt='' />
              <span>{i.title}</span>
              <span>${i.price}</span>
              <span>{i.ratings}<AiFillStar style={{padding:'2px'}}/></span>
              <select 
               value={i.qty}
               onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: i.id,
                    qty: e.target.value,
                  },
                })
              }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <button onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: i
                })
              }>
                  <AiFillDelete />
              </button>
              
            
            </div>
          ))
        }
       
      </div>
      <div className='i-right i'>
        <span>Total Items :- <b style={{fontSize:'20px'}}>{cart.length}</b></span>
        <span>Subtotal :-  ${total}</span>
        <button>Checkout</button>
      </div>
    </div>

  )
}

export default Cart