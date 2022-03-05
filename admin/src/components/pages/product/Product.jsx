import React from 'react'
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Chart from "../../chart/Chart"
import {ProductData} from "../../../DummyData";
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct" className='link'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={ProductData} dataKey="sales" title= "Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://i3-prod-assets.indiaistore.com/files/uploads/products/iphone-13-pro/img-md-1632290372_5484.png" alt="" className="productInfoImg" />
                    <span className="productName">iphone</span>
                </div>
                <div className="productInfoButtom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">001</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">78000</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productButtom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label >Product Name</label>
                    <input type="text" placeholder='Apple iphone'/>
                    <label>In Stock</label>
                    <select name="inStock" id="instock">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://i3-prod-assets.indiaistore.com/files/uploads/products/iphone-13-pro/img-md-1632290372_5484.png" alt="" className="productUploadImg" />
                        <label for="file">
                        <FontAwesomeIcon icon={faUpload} className="productUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/> 
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product