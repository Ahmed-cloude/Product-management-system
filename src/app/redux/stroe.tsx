
import { createStore } from "@reduxjs/toolkit";

// type Prod ={
//     type:string,
//     ele:{
//         Title:string,
//         Price:number,
//         Tex:number;
//         ADS:number,
//         Discount:number,
//         Total:number,
//         ProductAmount:number,
//         Category:string,
//     }
    
// }
const reducer = (state={products:[]} , action )=>{
    if(action.type==='create'){
        return {
            ...state,
            products:[...state.products, action.ele]
        }
    }
    return state
}

export const AhmadStore = createStore(reducer)