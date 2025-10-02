'use client'
import {  useDispatch, useSelector } from "react-redux"

export default function formPage(){
    const Store = useSelector(state => state);
    const patcher = useDispatch();

    const createProduct =()=>{
        const inputs = document.querySelectorAll('form input')
        const ele={
            Title:inputs[0].value,
            Price:inputs[1].value,
            Tex:inputs[2].value,
            ADS:inputs[3].value,
            Discount:inputs[4].value,
            Total:0,
            ProductAmount:inputs[5].value,
            Category:inputs[6].value,
        }
        patcher({type:'create',ele })
    }

    return (
        <div className="bg-red-200 w-[1000px] h-auto  m-auto max-[1000px]:w-[80%]">
            <form >
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" type="text" placeholder="Title" />
                <div className="flex flex-wrap" >
                    <input className="bg-neutral-800 p-2 m-2 w-[180px] "  type="" placeholder="Price"/>
                    <input className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="Tex"/>
                    <input className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="ADS"/>
                    <input className="bg-neutral-800 p-2 m-2 w-[180px]"  type="" placeholder="Discount"/>
                    <div className="inline-block w-[180px] bg-blue-300 p-2 m-2">total</div>
                </div>
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" placeholder="Product amount"/>
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" placeholder="Category"/>
                <div onClick={createProduct} className="bg-fuchsia-500 p-2 m-2 w-[97%] rounded-full text-center cursor-pointer" > Create </div>
                <input className="bg-neutral-800 p-2 m-2 w-[97%]" type="text" placeholder="Search" />
                <div className="flex justify-evenly flex-wrap">
                    <div className="bg-fuchsia-500 w-[400px] rounded-full text-center py-[10px] font-bold my-2 cursor-pointer">Search by Title</div>
                    <div className="bg-fuchsia-500 w-[400px] rounded-full text-center py-[10px] font-bold my-2 cursor-pointer">Search by Category</div>
                </div>
                <div className="bg-fuchsia-500 p-2 m-2 w-[97%] rounded-full text-center cursor-pointer" > Delete All </div>

            </form>
        </div>
    ); 
}