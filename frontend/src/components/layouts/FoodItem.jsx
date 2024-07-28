import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
export default function FoodItem() {
  return (
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounder">
            <img src="https://b.zmtcdn.com/data/pictures/chains/1/3000091/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" 
            alt="Pizza"
            className='card-img-top mx-auto'/>

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Veg Loaded Pizza</h5>
                <p className="fooditem_des">Crunchy and Cheesy Pizza served with happiness</p>
                <p className="card-text">
                <FaRupeeSign /> 100
                <br/>
                </p>
                <button type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4">Add to Cart</button>
                <p>
                    Status:
                    <span id="stock_status" className={10>5?"greenColor":"redColor"}>
                    {10>5 ? "In Stock" : "Out of Stock"}
                    </span>
                </p>
            </div>
        </div>
      </div>
  )
}