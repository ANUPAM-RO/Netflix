import React from 'react'
import "./newproduct.css"
const NewProduct = () => {
  return (
    <div className='newProduct'>
        <h1 className="newProductTitle">New Product</h1>
        <div className="newProductItemList">
        <form className="newProductForm">
            <div className="newProductItem">
            <label>Image</label>
            <input type="file" id="file" />

            </div>
            <div className="newProductItem">
                    <label >Product Name</label>
                    <input type="text" placeholder='Apple iphone'/>
                    
            </div>
            <div className="newProductItem">

                    <label>In Stock</label>
                    <select name="inStock" id="instock">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
            </div>

            <div className="newProductItem">
                
                    <label>Active</label>
                    <select name="active" id="active">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
            </div>
           
        </form>
        </div>
        <button className="newProductCreate">Create</button>
    </div>
  )
}

export default NewProduct