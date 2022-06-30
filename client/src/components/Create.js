import { useContext, useState } from "react";
import {AiFillPlusCircle} from 'react-icons/ai'

import axios from 'axios'
import '../style/create.css';

 function Create() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  // const [file, setFile] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault()

    const newProduct = {
      price,
      title,
      desc,
      image
    }
    try {
    const newProductData =  await axios.post("http://localhost:5000/api/products/",newProduct)
    window.location.replace("/")
    } catch (error) {
      console.log(error);
    }

    
   
  
  }
  return (

    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <span>enter below details to add a product</span>
          
          {/* <label htmlFor="fileInput">
            <i><AiFillPlusCircle size={37}/></i>
          </label>      */}
          <input
            className="writeInput"
            placeholder="Enter Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
           <input
            className="writeInput"
            placeholder="Enter Price"
            type="text"
            autoFocus={true}
            onChange={e => setPrice(e.target.value)}
          />
        <input
        className="writeFile"
              type='file'
              onChange={e=> setImage(e.target.files[0])}
            />
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e => setDesc(e.target.value)}
          />
          
        <button className="writeSubmit" type="submit">
          Add
        </button>
        </div>
        
  
      </form>
    </div>
  );
}

export default Create