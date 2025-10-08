'use client'
import React, { useEffect, useState } from 'react'
import SideBar from'../sideBar/page';
import { useDispatch, useSelector } from 'react-redux';
const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Productss = useSelector(state=>state)
    const patcher =useDispatch();
    const [data ,setData] =useState([])
    useEffect(()=>{
        const cashPaidProd= JSON.parse(localStorage.getItem("paidCash")||null)
        setData(cashPaidProd)
    },[Productss])
    return (
        <div className='flex bg-slate-800'>
            <SideBar />
            <div className='  min-h-screen text-white w-[100%] p-5 pt-10'> 
                <div className='w-fit text-3xl m-auto my-4 '><i>Paid By Cash</i> </div>
                <div className='flex w-fit  my-2 m-auto'>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500' >Title</div>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500'>Amout</div>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500'>Total</div>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500'>loan</div>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500'>Time</div>
                    <div className='bg-neutral-800 text-center w-[110px] rounded-full p-2 m-2  text-fuchsia-500'>Date</div>
                </div>
                {
                    // console.log(data.length )
                    data !==null ?
                    data.map((element,index)=>{
                        return(

                            <div className='flex bg-neutral-800 w-fit my-2 m-auto' key={index}>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2 ' >{element.Title ||""}</div>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2 '>{element.AmoutOfSoldProducts||""}</div>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2  '>{element.Total} $</div>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2  '>{element.Loan||""}</div>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2  '>{element.Time.Hours}:{element.Time.Minutes||""}</div>
                                <div className='bg-slate-800 text-center w-[110px] rounded-full p-2 m-2  '>{element.Time.Day||""}/{element.Time.Month||""}/{element.Time.Year||""}</div>
                            </div>
                        )
                    }):<p className='text-3xl text-white w-fit m-auto pt-10'>Empty</p>
                        
                }
            </div>
        </div>
    )
}

export default page