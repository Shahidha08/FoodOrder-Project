import React from 'react'
import { useEffect } from 'react';
import { getRestaurants } from '../../actions/restaurantAction'
import { useDispatch,useSelector } from 'react-redux'

export default function CountRestaurant() {
const dispatch=useDispatch();
const{loading,error,count}=useSelector((state)=>state.restaurants)
  useEffect(()=>{
    dispatch(getRestaurants())
  },[])
  return (
    <div>
      {loading ? (<p>Loading Restaurant count...</p>):error ?(<p>Error: {error}</p>):
      (<p className="NumOfRestro">
        8 <span className="Restro">Restaurants</span>
      </p>)}
      
      <br/>
    </div>
  )
}
