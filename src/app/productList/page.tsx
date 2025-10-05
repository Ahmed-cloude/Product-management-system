'use client'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function ProductList(){
    const Productss = useSelector(state=>state)
    const patcher = useDispatch()
    
    const [allProducts, setAllProducts] = useState([]);
    const [FilteredProduct, setFilteredProduct] = useState([]);
    useEffect(()=>{
        // {localStorage.clear()}
        const prods =JSON.parse(localStorage.getItem('productsDB') ||null)
        const xx = JSON.parse(localStorage.getItem('filteredProductsDB'||null) )
        // console.log(prods);
        setAllProducts(prods || [])
        setFilteredProduct(xx||[])
    },[Productss])



    const crateList =()=>{
        return (
            allProducts.length!==0?
            allProducts.map((ele:any,id:number)=>{
                return (
                    <div key={id} className="flex justify-between my-2 text-center">
                        <div className=" w-[3%] truncate ">{id+1}</div>
                        <div className=" w-[9%] truncate ">{ele.Title||"unknown"}</div>
                        <div className=" w-[9%] truncate ">{ele.Price || 0}</div>
                        <div className=" w-[9%] truncate ">{ele.Tex || 0}</div>
                        <div className=" w-[9%] truncate ">{ele.ADS ||0}</div>
                        <div className=" w-[9%] truncate ">{ele.Discount || 0}</div>
                        <div className=" w-[9%] truncate ">{ele.Total}</div>
                        <div className=" w-[6%] truncate ">{ele.ProductAmount || 0}</div>
                        <div className=" w-[9%] truncate ">{ele.Category}</div>
                        <div onClick={()=>patcher({type:'update', ele:ele})} className="bg-blue-800 w-[9%] truncate text-center rounded-full ">
                            <Link href='/update' >Update</Link>
                        </div>
                        <div onClick={()=>patcher({type:'delete', ele:ele})} className="bg-red-800 w-[9%] truncate text-center rounded-full ">Delete</div>
                    </div>
                )
            })
            :''
        )
    }

    const createFilteredList =()=>{
        // return (

        // )

        if(Productss.SBT ){
            return (
                FilteredProduct.map((ele:any,id:number)=>{
                    return (
                        <div key={id} className="flex justify-between my-2 text-center">
                            <div className=" w-[3%] truncate ">{id+1}</div>
                            <div className=" w-[9%] truncate ">{ele.Title||"unknown"}</div>
                            <div className=" w-[9%] truncate ">{ele.Price || 0}</div>
                            <div className=" w-[9%] truncate ">{ele.Tex || 0}</div>
                            <div className=" w-[9%] truncate ">{ele.ADS ||0}</div>
                            <div className=" w-[9%] truncate ">{ele.Discount || 0}</div>
                            <div className=" w-[9%] truncate ">{ele.Total}</div>
                            <div className=" w-[6%] truncate ">{ele.ProductAmount || 0}</div>
                            <div className=" w-[9%] truncate ">{ele.Category}</div>
                            <div onClick={()=>patcher({type:'update', ele:ele})} className="bg-blue-800 w-[9%] truncate text-center rounded-full ">
                                <Link href='/update' >Update</Link>
                            </div>
                            <div onClick={()=>patcher({type:'delete', ele:ele})} className="bg-red-800 w-[9%] truncate text-center rounded-full ">Delete</div>
                        </div>
                        )
                    })
            )
        }
        else if(Productss.SBC){
            return (
                FilteredProduct.map((ele:any,id:number)=>{
                    return (
                        <div key={id} className="flex justify-between my-2 text-center">
                            <div className="w-[3%] truncate ">{id+1}</div>
                            <div className="w-[9%] truncate ">{ele.Title}</div>
                            <div className="w-[9%] truncate ">{ele.Price || 0}</div>
                            <div className="w-[9%] truncate ">{ele.Tex || 0}</div>
                            <div className="w-[9%] truncate ">{ele.ADS ||0}</div>
                            <div className="w-[9%] truncate ">{ele.Discount || 0}</div>
                            <div className="w-[9%] truncate ">{ele.Total}</div>
                            <div className="w-[6%] truncate ">{ele.ProductAmount || 0}</div>
                            <div className="w-[9%] truncate ">{ele.Category}</div>
                            <div onClick={()=>patcher({type:'update', ele:ele})} className="bg-blue-800 w-[9%] truncate text-center rounded-full ">
                            <Link href='/update' >Update</Link>
                        </div>
                            <div onClick={()=>patcher({type:'delete', ele:ele})} className="bg-red-800 w-[9%] truncate text-center rounded-full ">Delete</div>
                        </div>
                        )
                    })
            )
        }
        else return crateList()
    }

    return (
        <div className=" m-auto w-[1000px] pb-[200px] pt-[20px]">
            <div className="flex justify-between my-2 text-center">
                <div className=" bg-neutral-800 rounded-full w-[3%] truncate ">ID</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">TITLE</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">PRICE</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">TEX</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">ADS</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">DISCOUNT</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">TOTAL</div>
                <div className=" bg-neutral-800 rounded-full w-[6%] truncate ">Amount</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">CATEGORY</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">UPDATE</div>
                <div className=" bg-neutral-800 rounded-full w-[9%] truncate ">DELETE</div>
            </div>
            
            {createFilteredList()}
        </div>
    )
}