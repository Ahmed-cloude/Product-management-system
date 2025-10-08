'use client'
import React from 'react'
import SideBar from '../sideBar/page';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const page = () => {
    const Productss = useSelector(state=>state)
    const patcher =useDispatch();
    const [data ,setData] =useState([])
    useEffect(()=>{
        const cashPaidProd= JSON.parse(localStorage.getItem("installmentPaid")||null)
        setData(cashPaidProd)
    },[Productss])

    const updateHandler =(element)=>{
        console.log(element)
        localStorage.setItem('updateInstallment',JSON.stringify(element))
    }
    const cancelLoanHandler =(element)=>{
        localStorage.setItem('cancelLoan',JSON.stringify(element));
        patcher({type:'cancelLoan'})
    }
    return (
        <div className='flex bg-slate-800'>
            <SideBar />
            <div className='  min-h-screen text-white w-[100%] p-5 pt-10'>
                <div className='w-fit text-3xl m-auto my-4 '><i>Paid By installments</i> </div>
                <div className='flex w-fit  my-2 m-auto'>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500' >Title</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Amout</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Total</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Paid</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Steal</div>
                    <div className='bg-neutral-800 text-center w-[120px] rounded-full p-2 m-2  text-fuchsia-500'>Cudtomer name</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Time</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Date</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Update</div>
                    <div className='bg-neutral-800 text-center w-[80px] rounded-full p-2 m-2  text-fuchsia-500'>Cancel</div>
                </div>
                {
                    // console.log(data.length )
                    data !==null ?
                    data.map((element,index)=>{
                        return(

                            <div className='flex bg-neutral-800 w-fit my-2 m-auto rounded-full border-fuchsia-500 border-1' key={index}>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2 ' >{element.Title ||""}</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2 '>{element.AmoutOfSoldProducts||""}</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2  '>{element.Total} $</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2  '>{element.firstInstallment||""}$</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2  '>{(element.Total - element.firstInstallment)||""}$</div>
                                <div className='bg-slate-800 text-center w-[120px] rounded-full p-2 m-2  '>{element.nameOfCredit||""}</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2  '>{element.Time.Hours}:{element.Time.Minutes||""}</div>
                                <div className='bg-slate-800 text-center w-[80px] rounded-full p-2 m-2  '>{element.Time.Day||""}/{element.Time.Month||""}/{element.Time.Year||""}</div>
                                <Link href='/installmentUpdate' onClick={()=>updateHandler(element)}> <div className='bg-green-800 text-center w-[80px] rounded-full p-2 m-2  '>Update</div> </Link>
                                <div onClick={()=>cancelLoanHandler(element)} className='bg-fuchsia-800 text-center w-[80px] rounded-full p-2 m-2 cursor-pointer '>CANCEL</div> 
                            </div>
                        )
                    }):<p className='text-3xl text-white w-fit m-auto pt-10'>Empty</p>
                        
                }
            </div>

        </div>
    )
}

export default page
