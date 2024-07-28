import axios from "axios"
import { ALL_RESTAURANTS_REQUEST,ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant"

export const getRestaurant = ()=>{
    //aysnc,axios,await coz taking the data from outside source
    return async(dispatch)=>
    {
        try
        {
            dispatch({type:ALL_RESTAURANTS_REQUEST})
            let link = `/api/v1/eats/stores`
            const {data}= await axios.get(link)
            console.log(data)
            const {restaurants,count}= data
            dispatch({
                type:ALL_RESTAURANTS_SUCCESS,
                payload:{restaurants,count}, //data sent to the store
            })
        } catch (err){
            console.log(err)
        }

    } 
}