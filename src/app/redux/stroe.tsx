'use client'
import { createStore } from "@reduxjs/toolkit";

const  reducer =  (state={products:[],SBT:false,SBC:false,update:false} , action )=>{
    if(action.type==='create'){
        localStorage.setItem('updatePermision',"false");
        localStorage.setItem("elementUpdated",{})
        const  xx = JSON.parse(localStorage.getItem('productsDB')||null )

        const addingItem = [...xx,action.ele]
        
        localStorage.setItem('productsDB', JSON.stringify(addingItem));
        const newState ={
            ...state,
            update:false,
            products:[...state.products, action.ele]
        }
        return newState
    }
    else if(action.type==='delete'){
        const  xx = JSON.parse(localStorage.getItem('productsDB') )
        const  xx1 = JSON.parse(localStorage.getItem('filteredProductsDB') )
        let FilteredProduct=xx.filter((element)=>{
            if(element.Title !== action.ele.Title ){
                return element
            }
        })
        let FilteredProduct2=xx1.filter((element)=>{
            if(element.Title !== action.ele.Title ){
                return element
            }
        })
        localStorage.setItem('productsDB', JSON.stringify(FilteredProduct));
        localStorage.setItem('filteredProductsDB', JSON.stringify(FilteredProduct2));
        const newState ={
            ...state,
            products:[...FilteredProduct]
        }
        return newState
        
    }
    else if (action.type === 'deleteALL'){
        localStorage.setItem('productsDB', JSON.stringify([]))
        return {
            ...state,
            products:[]
        }
    }

    else if(action.type==='SBT'){
        const newState={
            ...state,
            products:[...state.products],
            SBT:true,
            SBC:false
        }
        return newState
    }
    else if(action.type==='SBC'){
        const newState={
            ...state,
            products:[...state.products],
            SBT:false,
            SBC:true
        }
        return newState
    }
    else if(action.type==='search'){
        const  xx = JSON.parse(localStorage.getItem('productsDB') )
        if(state.SBT){
            const filterdData= xx.filter((element)=>{
                if(((element.Title).toLowerCase()) === ((action.search).toLowerCase()) )
                    return element
            })
            localStorage.setItem('filteredProductsDB', JSON.stringify(filterdData ))
        }
        else {
            const filterdData= xx.filter((element)=>{
                if(((element.Category).toLowerCase()) === ((action.search).toLowerCase()) )
                    return element
            })
            localStorage.setItem('filteredProductsDB', JSON.stringify(filterdData ))
        }
        if(action.search!==""){
            return {
                ...state,
                products:[...state.products],
                SearchAbout:action.search
            }
        }
        return {
            ...state,
            products:[...state.products],
            SearchAbout:action.search,
            SBT:false,
            SBC:false
        }
    }
    else if(action.type==='update'){
        console.log(action.ele)
        const  xx = JSON.parse(localStorage.getItem('productsDB')||null )
        const deleteItemWhoNeedUpdate= xx.filter((element)=>{
            if(element.Title !== action.ele.Title)
                return element;
        })
        localStorage.setItem('productsDB', JSON.stringify(deleteItemWhoNeedUpdate));

        localStorage.setItem('elementUpdated',JSON.stringify(action.ele))
        localStorage.setItem('updatePermision','true')

        return {
            ...state,
            update:true,
            products:[...deleteItemWhoNeedUpdate]
        }
    }
    return state
}

export const AhmadStore = createStore(reducer)