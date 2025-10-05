'use client'
import React from 'react'
import { FaHome,FaTimes, FaList } from 'react-icons/fa'
import Link from 'next/link'
const page = () => {
    const hideHandler =()=>{
        document.getElementById('sidebar').style.display='none'
        document.getElementById('listSidbar').style.display='block'

    }
    const appearHandler =()=>{
        document.getElementById('listSidbar').style.display='none'
        document.getElementById('sidebar').style.display='block'

    }
    return (
        <div className=' relative top-0 w-[75px] inline-block'>
            <div onClick={appearHandler} id='listSidbar' className='hidden sticky top-2 left-2 w-fit'>
                <div className='text-fuchsia-500  w-fit p-3 hover:text-white cursor-pointer '>  <FaList className='text-2xl ' /> </div>
            </div>
            <div id='sidebar' className='w-[75px] bg-neutral-800/50 h-[100%] text-center '>
                <div className='h-[100vh]  w-fit m-auto pt-4 sticky top-0'>
                    <div onClick={hideHandler} className='text-fuchsia-500/60 p-3 my-1 hover:bg-fuchsia-500 hover:text-white cursor-pointer rounded-[20px]'><FaTimes className='text-3xl ' /></div>
                    <div className='text-fuchsia-500 p-3 my-1  hover:bg-fuchsia-500/60 hover:text-white cursor-pointer rounded-[20px]'> <Link href="/"><FaHome className='text-3xl' /></Link> </div>
                    <div className='text-fuchsia-500 py-3 my-1 hover:bg-fuchsia-500/60 hover:text-white cursor-pointer rounded-[20px]'> <Link href='/loan'>Loan</Link> </div>
                    <div className='text-fuchsia-500 py-3 my-1 hover:bg-fuchsia-500/60 hover:text-white cursor-pointer rounded-[20px]'> <Link href="/sold">Sold</Link> </div>
                </div>
            </div>
        </div>

    )
}

export default page
