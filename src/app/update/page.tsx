'use client'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import Link from "next/link";
const page = () => {
    const product=useSelector(state=>state);
    const patcher = useDispatch();

    const [data,setData]=useState({Title:''})
    const [totalPrice,setTotal]=useState(0)

    const [itemData , setItemData]=useState({
            Title:'',
            Price:0,
            Tex:0,
            ADS:0,
            Discount:0,
            Total:0,
            ProductAmount:0,
            Category:'',
    })

    const onChangeHandler =()=>{
        const inputs = document.querySelectorAll('form input');
        setTotal(
            (parseInt(inputs[1].value)||0) 
            + (parseInt(inputs[2].value)||0)
            + (parseInt(inputs[3].value)||0) 
            - (parseInt(inputs[4].value)||0)
        )
        
    }

    useEffect(()=>{
        const elementMustUpdate =JSON.parse(localStorage.getItem('elementUpdated')|| null ) 
        setData(elementMustUpdate)
        setItemData({
            Title:elementMustUpdate.Title,
            Price:elementMustUpdate.Price,
            Tex:elementMustUpdate.Tex,
            ADS:elementMustUpdate.ADS,
            Discount:elementMustUpdate.Discount,
            Total:elementMustUpdate.Total,
            ProductAmount:elementMustUpdate.ProuductAmount,
            Category:elementMustUpdate.Category,
        })
    },[])

    const createProduct =()=>{
        const inputs = document.querySelectorAll('div input')
        const  xx = JSON.parse(localStorage.getItem('productsDB')||null )
        localStorage.setItem('productsDB',JSON.stringify(xx||[] ))
        console.log(inputs)
        const ele={
            Title:inputs[0].value||"unknowen",
            Price:inputs[1].value||0,
            Tex:inputs[2].value||0,
            ADS:inputs[3].value||0,
            Discount:inputs[4].value||0,
            Total:totalPrice||0,
            ProductAmount:inputs[5].value||0,
            Category:inputs[6].value||"shitt",

        }
        patcher({type:'create',ele })
        console.log(ele)
    }
    return (
        <div className=' bg-slate-800 min-h-screen pt-[40px] font-mono pb-[200px]'>
            <div>
                <p className='text-fuchsia-500 w-fit m-auto text-5xl font-bold'><i>Updating</i> </p>
                <p className='text-white w-fit m-auto text-center my-4'>Enter your update also enter your old<br/>
                    info that wroten by <i className='text-fuchsia-500'>FUCHIA</i><br/>
                    if you do not need to update it
                </p>
            </div>
            <form className='flex flex-wrap justify-between  text-white w-[70%]  m-auto'>

                <div className='w-[48%]    m-2 '>
                    <label  className='w-[100%]  m-2 '>Previos Title <i className='text-fuchsia-500'>{itemData.Title}</i></label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2   focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%]'>Previos Price <i className='text-fuchsia-500'>{itemData.Price}</i></label><br/>
                    <input onChange={onChangeHandler} className='bg-neutral-800 w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>Previos Tex <i className='text-fuchsia-500'>{itemData.Tex}</i></label><br/>
                    <input onChange={onChangeHandler} className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 'type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>Previos ADS<i className='text-fuchsia-500'> {itemData.ADS}</i></label><br/>
                    <input onChange={onChangeHandler} className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>
                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>Previos Discount<i className='text-fuchsia-500'> {itemData.Discount}</i></label><br/>
                    <input onChange={onChangeHandler} className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]   m-2 '>
                    <label className='w-[100%] m-2'>Previos Amount <i className='text-fuchsia-500'>{itemData.ProductAmount}</i></label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>Previos Category <i className='text-fuchsia-500'>{itemData.Category}</i></label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>The reason of Updating</label><br/>
                    <select className='bg-neutral-800 w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500'>
                        <option>sale all</option>
                        <option>sale some</option>
                        <option>wrong entered</option>
                    </select>
                </div>

                

            </form>
            <div className=' w-[70%] m-auto mt-5'>
                <button 
                    onClick={createProduct} 
                    className='rounded-full bg-neutral-900 text-fuchsia-500 py-[20px] px-[25px]  '
                > <Link href='/'>DONE</Link> </button>
            </div>
        </div>
    )
}

export default page
