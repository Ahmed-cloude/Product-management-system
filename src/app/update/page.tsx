'use client'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import Link from "next/link";
const page = () => {
    const product=useSelector(state=>state);
    const patcher = useDispatch();

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    
    // const [reasonToUpdate, setReson]=useState('')

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
            ProductAmount:elementMustUpdate.ProductAmount,
            Category:elementMustUpdate.Category,
        })
    },[])

    const createProduct =()=>{
        const inputs = document.querySelectorAll('div input')
        console.log( itemData.ProductAmount -inputs[7].value )
        console.log(itemData)
        const  xx = JSON.parse(localStorage.getItem('productsDB')||null )
        localStorage.setItem('productsDB',JSON.stringify(xx||[] ))
        const totalPrice=parseInt(inputs[1].value||itemData.Price) + parseInt(inputs[2].value||itemData.Tex) +parseInt(inputs[3].value||itemData.ADS) -parseInt(inputs[4].value||itemData.Discount)
        let ele={
            Title:inputs[0].value||itemData.Title,
            Price:inputs[1].value||itemData.Price,
            Tex:inputs[2].value||itemData.Tex,
            ADS:inputs[3].value||itemData.ADS,
            Discount:inputs[4].value||itemData.Discount,
            Total:totalPrice||0,
            ProductAmount:inputs[5].value||itemData.ProductAmount,
            Category:inputs[6].value||itemData.Category,

        }
        
        // if( (input[5].value - input[7].value) <0) patcher({type:'create',itemData })
        if( (itemData.ProductAmount -inputs[7].value) <0 ) {
            ele=itemData
            patcher({type:'create',ele })
        }
        
        else if(inputs[5].value !== '0') {
            ele.ProductAmount= itemData.ProductAmount -inputs[7].value 
            if((itemData.ProductAmount -inputs[7].value) !== 0)
            patcher({type:'create',ele })
        }
        console.log(ele)
    }

    const reasonOfUpdating=()=>{
        const selects =document.querySelectorAll('div select')
        const value =selects[0].value
        console.log(selects[0].value)

        if(value === 'sale all'){
            document.getElementById('selectPayingWay').style.display='block';
            document.getElementById('amountSold').style.display='none';
            document.getElementById('amoutID').style.display = 'none'
            (document.querySelectorAll('div input'))[5].value=0;

        }
        else if(value === 'sale some'){
            document.getElementById('amountSold').style.display='block';
            document.getElementById('selectPayingWay').style.display='block'
            document.getElementById('amoutID').style.display = 'none'
        }
        else if(value === 'wrong entered'){
            document.getElementById('amoutID').style.display = 'block'
        }
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

                <div id='amoutID' className='hidden w-[48%] m-2 '>
                    <label className='w-[100%] m-2'>Previos Amount <i className='text-fuchsia-500'>{itemData.ProductAmount}</i></label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>Previos Category <i className='text-fuchsia-500'>{itemData.Category}</i></label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>

                <div id='selectReason' className='w-[48%]    m-2 '>
                    <label className='w-[100%] m-2'>The reason of Updating</label><br/>
                    <select onClick={()=>reasonOfUpdating()} className='bg-neutral-800 w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500'>
                        <option></option>
                        <option >sale all</option>
                        <option >sale some</option>
                        <option >wrong entered</option>
                    </select>
                </div>
                
                <div id='selectPayingWay' className='hidden w-[48%] m-2 '>
                    <label className='w-[100%] m-2'>Paying by </label><br/>
                    <select onClick={()=>reasonOfUpdating()} className='bg-neutral-800 w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500'>
                        <option></option>
                        <option >Cach</option>
                        <option >Installments</option>
                    </select>
                </div>
                
                <div id='amountSold' className='hidden w-[48%]  m-2 '>
                    <label className='w-[100%] m-2'><i className='text-fuchsia-500'>Enter Amout of sold </i></label><br/>
                    <input id='amountSoldIn'  className='bg-neutral-800  w-[95%] p-2 m-2  focus:outline-none border-b-[2px] border-fuchsia-500 ' type=''/><br/>
                </div>
            </form>
            <div className=' w-[70%] m-auto mt-5'>
                <button 
                    onClick={createProduct} 
                    className='rounded-full bg-neutral-900 text-fuchsia-500 py-[20px]   '
                > <Link className='py-[20px] px-[25px]' href='/'>DONE</Link> </button>
            </div>
        </div>
    )
}

export default page
