import { createContext, useContext,useEffect,useState } from "react";
import { useReducer } from "react";
import { cartReducer,filterReducer } from './red';
import axios from 'axios'

const CartP = createContext()

export const Context = ({children}) => {
    const [products,setProducts] = useState([])

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
    //  console.log(products)
     
   

    const [state, dispatch] = useReducer(cartReducer,{
        products,
        cart:[]
    })

 

    
    return <CartP.Provider value={{state,dispatch}}> {children} </CartP.Provider>
    

}

export const StateProvider = () =>{
    return useContext(CartP)   
}

