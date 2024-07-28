import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant"

const initialState={
    restaurants:[],
}

//initial store and action as parameters
export const restaurantReducer=(state=initialState,action)=>{
    switch(action.type){//dispatched as type in actionrestautrant
        case ALL_RESTAURANTS_REQUEST:
            return {...state,
                loading:true,
                error:null,
            }; 
        case ALL_RESTAURANTS_SUCCESS:
            return {...state,
                loading:false,//data has been updated
                count:action.payload.count, //payload has data
                restaurants: action.payload,
            };
        default:
            return state;

        }
}