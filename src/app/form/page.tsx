'use client'
import {  useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
export default function formPage(){
    // localStorage.setItem('elementUpdated',{})
    const [totalPrice,setTotal]=useState(0)

    const Productss = useSelector(state => state);
    const patcher = useDispatch();
    // useEffect(()=>{
    //     if(Productss.update){
    //         const permisionToUpdate=localStorage.getItem('updatePermision');
    //         const elementMustUpdate =JSON.parse(localStorage.getItem('elementUpdated')|| null ) 
    //         if(permisionToUpdate===true) 
    //             setUpdatingItem({...elementMustUpdate})
    //         // localStorage.setItem('updatePermision',"false");
    //         // localStorage.setItem("elementUpdated")
    //         console.log(updatingItem)
    //     }
    // },[Productss])

    const onChangeHandler =()=>{
        const inputs = document.querySelectorAll('form input');
        setTotal(
            (parseInt(inputs[1].value)||0) 
            + (parseInt(inputs[2].value)||0)
            + (parseInt(inputs[3].value)||0) 
            - (parseInt(inputs[4].value)||0)
        )
        
    }
    const createProduct =()=>{
        const inputs = document.querySelectorAll('form input')
        const  xx = JSON.parse(localStorage.getItem('productsDB')||null )
        localStorage.setItem('productsDB',JSON.stringify(xx||[] ))
        console.log(inputs)
        const ele={
            Title:inputs[0].value||"unknowen",
            Price:inputs[1].value,
            Tex:inputs[2].value,
            ADS:inputs[3].value,
            Discount:inputs[4].value,
            Total:totalPrice,
            ProductAmount:inputs[5].value,
            Category:inputs[6].value,
        }
        patcher({type:'create',ele })
        console.log(ele)
    }

    const deleteAllHandler=()=>{
        if (confirm("ARE SURE YOU NEED TO DELETE ALL ITEMS ???")) {
            patcher({type:'deleteALL'})
        }
    }
    return (
        <div className=" w-[1000px] h-auto  m-auto max-[1000px]:w-[80%]">
            
            <form >
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" type="text" placeholder="Title" />
                <div className="flex flex-wrap" >
                    <input onChange={onChangeHandler} className="bg-neutral-800 p-2 m-2 w-[180px] "  type="" placeholder="Price"/>
                    <input onChange={onChangeHandler} className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="Tex"/>
                    <input onChange={onChangeHandler} className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="ADS"/>
                    <input onChange={onChangeHandler} className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="Discount"/>
                    {
                        totalPrice ===0 ?
                            <div id="total" className="inline-block w-fit bg-red-800 p-2 m-2">total :{totalPrice}</div>:
                            <div id="total" className="inline-block w-fit bg-green-700 p-2 m-2">total :{totalPrice}</div>
                    }
                </div>
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" placeholder="Product amount"/>
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" placeholder="Category"/>

                <div onClick={createProduct} className="bg-fuchsia-500 p-2 m-2 w-[97%] rounded-full text-center cursor-pointer" > Create </div>
                <input onChange={(e)=>patcher( {type:'search' , search:e.target.value})}  className="bg-neutral-800 p-2 m-2 w-[97%]" type="text" placeholder="Search" />
                <div className="flex justify-evenly flex-wrap">
                    <div onClick={()=>patcher({type:'SBT'})} className="bg-fuchsia-500 w-[400px] rounded-full text-center py-[10px] font-bold my-2 cursor-pointer">Search by Title</div>
                    <div onClick={()=>patcher({type:'SBC'})} className="bg-fuchsia-500 w-[400px] rounded-full text-center py-[10px] font-bold my-2 cursor-pointer">Search by Category</div>
                </div>
                <div onClick={deleteAllHandler}  className="bg-fuchsia-500 p-2 m-2 w-[97%] rounded-full text-center cursor-pointer" > Delete All </div>
                
            </form>
        </div>
    ); 
}