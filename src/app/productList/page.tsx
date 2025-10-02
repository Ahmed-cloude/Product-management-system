'use client'
import { useSelector } from "react-redux";

export default function ProductList(){
    const Products = useSelector(state=>state.products)
    console.log(Products.length)
    
    return (
        <div className="bg-red-300 m-auto w-[1000px] ">
            <div className="flex justify-between my-2">
                <div className="bg-pink-800 w-[3%] truncate ">ID</div>
                <div className="bg-pink-800 w-[11%] truncate ">TITLE</div>
                <div className="bg-pink-800 w-[11%] truncate ">PRICE</div>
                <div className="bg-pink-800 w-[9%] truncate ">TEX</div>
                <div className="bg-pink-800 w-[9%] truncate ">ADS</div>
                <div className="bg-pink-800 w-[9%] truncate ">DISCOUNT</div>
                <div className="bg-pink-800 w-[11%] truncate ">TOTAL</div>
                <div className="bg-pink-800 w-[11%] truncate ">CATEGORY</div>
                <div className="bg-pink-800 w-[9%] truncate ">UPDATE</div>
                <div className="bg-pink-800 w-[9%] truncate ">DELETE</div>
            </div>
            <div className="flex justify-between my-2">
                <div className="bg-pink-800 w-[3%] truncate ">1</div>
                <div className="bg-pink-800 w-[11%] truncate ">Iphone</div>
                <div className="bg-pink-800 w-[11%] truncate ">25000</div>
                <div className="bg-pink-800 w-[9%] truncate ">300</div>
                <div className="bg-pink-800 w-[9%] truncate ">200</div>
                <div className="bg-pink-800 w-[9%] truncate ">0</div>
                <div className="bg-pink-800 w-[11%] truncate ">TOTAL</div>
                <div className="bg-pink-800 w-[11%] truncate ">phone</div>
                <div className="bg-blue-800 w-[9%] truncate text-center rounded-full ">Update</div>
                <div className="bg-red-800 w-[9%] truncate text-center rounded-full ">Delete</div>
            </div>
            
            {
                Products.length !== 0 ?
                    
                        Products.map((ele:any,id:number)=>{
                            return (
                                <div key={id} className="flex justify-between my-2">
                                    <div className="bg-pink-800 w-[3%] truncate ">{id}</div>
                                    <div className="bg-pink-800 w-[11%] truncate ">{ele.Title}</div>
                                    <div className="bg-pink-800 w-[11%] truncate ">{ele.Price}</div>
                                    <div className="bg-pink-800 w-[9%] truncate ">{ele.Tex}</div>
                                    <div className="bg-pink-800 w-[9%] truncate ">{ele.ADS}</div>
                                    <div className="bg-pink-800 w-[9%] truncate ">{ele.Discount}</div>
                                    <div className="bg-pink-800 w-[11%] truncate ">{ele.Total}</div>
                                    <div className="bg-pink-800 w-[11%] truncate ">{ele.Category}</div>
                                    <div className="bg-blue-800 w-[9%] truncate text-center rounded-full ">Update</div>
                                    <div className="bg-red-800 w-[9%] truncate text-center rounded-full ">Delete</div>
                                </div>
                            )
                        })
                    
                    :null
            }

        </div>
    )
}