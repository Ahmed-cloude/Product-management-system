'use client'
import React,{useState,useEffect} from 'react'

const page = () => {
    
    // const unPaidProducts = JSON.parse(localStorage.getItem('productsDB')||null);
    const [dataOfAll,setDataOfAll] = useState({
        Cash:0,
        Installment:0,
        Stayed:0,
        Unpaid:0,

        
        })
        useEffect(()=>{
            const InstallmentPaid = JSON.parse(localStorage.getItem('InstallmentPaid')||null);
            const stayedMoney = JSON.parse(localStorage.getItem('stayedMoney')||null);
            const allPriceOfCash = JSON.parse(localStorage.getItem('allPriceOfCash')||null);
            const productsDB = JSON.parse(localStorage.getItem('productsDB')||null);
            let xx:number=0;
            
            
            productsDB.map((element)=>{
              xx=parseInt(xx) + (parseInt(element.Total) * parseInt(element.ProductAmount))
              
            })
            setDataOfAll({
              ...dataOfAll,
              Cash:parseInt(allPriceOfCash),
              Installment :parseInt(InstallmentPaid),
              Stayed : parseInt(stayedMoney),
              Unpaid:parseInt(xx) 
            })
        },[])
        return (
            <div>
              
              <div >
                <div className='text-white flex bg-blue-300 w-fit m-auto'>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>Cash*</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>Installment*</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>Income</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full '>Stayed</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>Unpaid*</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>Loss</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>All</div>
                  
                </div>
                <div className='text-white flex bg-blue-300 w-fit m-auto'>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Cash} $</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Installment} $</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Cash + dataOfAll.Installment} $</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full '>{dataOfAll.Stayed}</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Unpaid}</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Stayed + dataOfAll.Unpaid}</div>
                  <div className='bg-red-300 p-2 m-2 w-[100px] rounded-full'>{dataOfAll.Cash + dataOfAll.Installment + dataOfAll.Stayed + dataOfAll.Unpaid}</div>
                  
                </div> 
              </div>
            </div>
          )
}

export default page
