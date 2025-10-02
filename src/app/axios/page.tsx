"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'

const page = () => {
    const [dataAPI, setDataAPI]=useState([{name:"", id:null}])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res =>{
                setDataAPI(res.data)
            })
    },[])

    const postHandler=(event)=>{
        event.preventDefault()
        const newPost ={
            name:"Ahmed",
            id:11
        }
        axios.post("https://jsonplaceholder.typicode.com/users/",newPost).
            then(res=>{
                console.log(res.data)
            })
    }
    const puttHandler=(event)=>{
        event.preventDefault()
        const newPost ={
            name:"Ahmed",
            id:11
        }
        axios.put("https://jsonplaceholder.typicode.com/users/1",newPost).
        then(res=>{
            console.log(res.data)
        })
    }
    const deletetHandler=(event)=>{
        event.preventDefault()
        
        axios.delete("https://jsonplaceholder.typicode.com/users/1").
        then(res=>{
            console.log(res.data)
        })
        console.log(dataAPI)
    }
    return (
        <div>
            {
                dataAPI.map((ele)=>{
                    return(
                        <div key={ele.id}>
                            <div>{ele.name}</div>
                        </div>
                    )
                })
            }
            <button className="cursor-pointer bg-red-300" onClick={(e)=>postHandler(e)} >post </button><br/>
            <button className="cursor-pointer bg-red-300" onClick={(e)=>puttHandler(e)} >Put </button><br/>
            <button className="cursor-pointer bg-red-300" onClick={(e)=>deletetHandler(e)} >Delete </button>
        </div>
    )
}

export default page
