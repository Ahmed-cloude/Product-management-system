'use client'
import React,{useEffect, useState} from 'react'
import  Assistant  from './assistant/page'
const page = () => {
  const [data , setDate] = useState ('')

  const calcPriceOfInstallment = ()=>{
    const Products = JSON.parse(localStorage.getItem('installmentPaid')||null)
    let allPrice =0;
    let paidMoney=0;
    let stayedMoney=0;
    Products.map(element=>{
      allPrice = parseInt(allPrice)+ parseInt(element.Total);
      paidMoney = parseInt(paidMoney)+ parseInt(element.firstInstallment);
      stayedMoney = parseInt(stayedMoney)+ ( parseInt(element.Total) -parseInt(element.firstInstallment) );
    })
    localStorage.setItem('InstallmentPaid',JSON.stringify(paidMoney))
    localStorage.setItem('stayedMoney',JSON.stringify(stayedMoney))
    localStorage.setItem('allPriceOfInsatllment',JSON.stringify(allPrice))
    
    return (
      <div className='pt-5'>
        <div className='bg-slate-900  flex text-fuchsia-500 pb-3'>
          <p className='bg-neutral-700 rounded-full w-[130px] m-[1.5px] ml-[10px] '>Total</p>
          <p className='bg-neutral-700 rounded-full  w-[130px] m-[1.5px]'>Paid</p>
          <p className='bg-neutral-700 rounded-full w-[130px] m-[1.5px]'>Stayed</p>
        </div>
        <div className='bg-neutral-700 flex rounded-full text-white'>
          <p className='bg-slate-900 w-[130px] m-[1.5px] ml-[10px] '>{allPrice} $</p>
          <p className='bg-slate-900 w-[130px] m-[1.5px]'>{paidMoney} $</p>
          <p className='bg-slate-900 w-[130px] m-[1.5px]'>{stayedMoney} $</p>
        </div>
      </div>
    )
  }
  const InventoryOfInstallment =()=>{
    const Products = JSON.parse(localStorage.getItem('installmentPaid')||null)
    // localStorage.setItem('InstallmentPaid',JSON.stringify())
    return (
      <div className='my-20 w-fit m-auto text-center'>
        <p className='text-white'>Installment</p>
        <div className='max-h-[150px] w-fit  overflow-auto text-center text-white  '>
          
          <div className='flex bg-neutral-700 text-fuchsia-500'>
            <div className='bg-slate-900  w-[100px] m-[1.5px] '>Title</div>
            <div className='bg-slate-900 w-[100px] m-[1.5px] '>Total</div>
            <div className='bg-slate-900 w-[100px] m-[1.5px] '>Paid</div>
            <div className='bg-slate-900 w-[100px] m-[1.5px] '>Stayed</div>
          </div>
          {
            Products !== null ?
              Products.map((element,index)=>{
                return <div key={index} className='flex bg-neutral-700'>
                  <div className='bg-slate-900 w-[100px] m-[1.5px]'>{element.Title}</div>
                  <div className='bg-slate-900 w-[100px] m-[1.5px]'>{element.Total} $</div>
                  <div className='bg-slate-900 w-[100px] m-[1.5px]'>{element.firstInstallment}$</div>
                  <div className='bg-slate-900 w-[100px] m-[1.5px]'>{ parseInt(element.Total) -parseInt(element.firstInstallment)  }$</div>
                </div>
              }):null
          }
        </div>
        <div >{calcPriceOfInstallment()}</div>
      </div>
    )
  }

  const calcPriceOfCash = ()=>{
    const Products = JSON.parse(localStorage.getItem('paidCash')||null)
    let allPrice =0;
    Products.map(element=>{
      allPrice = parseInt(allPrice)+ parseInt(element.Total);
    })
    localStorage.setItem('allPriceOfCash',JSON.stringify(allPrice))
    return (
      <div className='pt-5 '>
        <div className='bg-slate-900  flex text-fuchsia-500 pb-3 flex justify-center'>
          <p className='bg-neutral-700 rounded-full w-[130px] m-[1.5px]  '>Total</p>
          <p className='bg-neutral-700 rounded-full  w-[130px] m-[1.5px]'>Paid</p>
        </div>
        <div className='bg-neutral-700 flex rounded-full text-white flex justify-center'>
          <p className='bg-slate-900 w-[130px] m-[1.5px]  '>{allPrice} $</p>
          <p className='bg-slate-900 w-[130px] m-[1.5px]'>{allPrice} $</p>
        </div>
      </div>
    )
  }
  const InventoryOfCash=()=>{
    const Products = JSON.parse(localStorage.getItem('paidCash')||null)
    return (
      <div className=' w-fit m-auto text-center my-20'>
        <p className='text-white'>Cash</p>
        <div className=' max-h-[150px] w-fit  overflow-auto text-center text-white  '>
          <div className='flex bg-neutral-700 text-fuchsia-500'>
            <div className='bg-slate-900  w-[150px] m-[1.5px] '>Title</div>
            <div className='bg-slate-900 w-[150px] m-[1.5px] '>Total</div>
          </div>
          {
            Products !== null ?
              Products.map((element,index)=>{
                return <div key={index} className='flex bg-neutral-700'>
                  <div className='bg-slate-900 w-[150px] m-[1.5px]'>{element.Title}</div>
                  <div className='bg-slate-900 w-[150px] m-[1.5px]'>{element.Total}$</div>
                  
                </div>
              }):null
          }
        </div>
        <div >{calcPriceOfCash()}</div>
      </div>
    )
  }
  const InventoryOfAll =()=>{
    
    return (
      <div>
        <div className='flex gap-25 w-fit m-auto'>
                  <div>{InventoryOfInstallment()}</div>
                  <div>{InventoryOfCash()}</div>
              </div>
      <Assistant />
      </div>


      // هون لازم اضيف ديف فيه مجموع كلشي طبعا المدفوع والديون ب مستطيل جرد

    )
  }

  const clickHandler = ()=>{

    if(data=== 'installment'){
      return InventoryOfInstallment()
    }
    else if(data==='Cash'){
      return InventoryOfCash()
    }
    else if(data=== 'All'){
      return InventoryOfAll()
    }
  }

  return (
    <div className='min-h-screen bg-slate-900 pb-20'>
      <div className='w-fit m-auto py-6 text-3xl text-white'>Inventory of Goods</div>
      <div className='w-fit  m-auto'>
        <button onClick={()=>setDate('installment')} className='bg-fuchsia-500 w-[200px] p-3 m-3 text-white hover:bg-fuchsia-200 hover:text-fuchsia-700 rounded-full cursor-pointer'>Inventory of installment</button>
        <button onClick={()=>setDate('Cash')}  className='bg-fuchsia-500 w-[200px] p-3 m-3 text-white hover:bg-fuchsia-200 hover:text-fuchsia-700 rounded-full cursor-pointer'>Inventory of Cash</button>
        <button onClick={()=>setDate('All')}  className='bg-fuchsia-500 w-[200px] p-3 m-3 text-white hover:bg-fuchsia-200 hover:text-fuchsia-700 rounded-full cursor-pointer'>Inventory of All</button>
      </div>
      <div className='text-center'>
        {clickHandler()}
      </div>
    </div>
  )
}

export default page
