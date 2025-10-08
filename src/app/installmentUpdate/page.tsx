'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'

const page = () => {
    const [UpdateEle,setEle]=useState({})
    useEffect(()=>{
        const ele = JSON.parse(localStorage.getItem('updateInstallment')||null);
        setEle(ele)
    },[])
    // لازم نجيب المصفوفة اللي فيها ديون ونجيب العنصر اللي بدنا نعدلو ونسندلو القيم اللي تعدلت ونرجع نبعتا 
    const clickUpdateHandler =()=>{
        const inputs = document.querySelectorAll('form input')
        const itemUpdated = JSON.parse(localStorage.getItem('updateInstallment')||null);
        const arrayOfAllInstallments = JSON.parse(localStorage.getItem('installmentPaid')||null);

        const Items = arrayOfAllInstallments.filter((element)=>{
            if(element.Title !== itemUpdated.Title)return element;
        })
        const itemAfterUpdate = {
            ...itemUpdated,
            firstInstallment:inputs[0].value || itemUpdated.firstInstallment,
        }
        const help=[
            ...Items,
            itemAfterUpdate
        ];
        localStorage.setItem('installmentPaid',JSON.stringify(help))
    }
    return (
        <div className='bg-slate-800 min-h-screen pt-[40px] font-mono pb-[200px]'>
        {/* {console.log(UpdateEle)} */}
            <p className='text-fuchsia-500 w-fit m-auto text-5xl font-bold'><i>Updating</i> </p>

            <form className='flex flex-wrap justify-between pt-20 text-white w-[70%]  m-auto'>
                <div className='w-[48%] m-2 '>
                    <label className='w-[100%]  m-2 '>Paid</label><br/>
                    <input className='bg-neutral-800  w-[95%] p-2 m-2   focus:outline-none border-b-[2px] border-fuchsia-500 '/><br/>
                </div>
            </form>

            <div className=' w-[70%] m-auto mt-5'>
                <button 
                    onClick={clickUpdateHandler}
                    className='rounded-full bg-neutral-900 text-fuchsia-500 py-[20px]   '
                > <Link className='py-[20px] px-[25px]' href='/loan'>DONE</Link> </button>
            </div>
        </div>
    )
}

export default page
