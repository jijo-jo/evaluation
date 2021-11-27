import React from "react"
import {useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router";
import './list.css'



function AssetDelete(){
    const {id}=useParams()
    useEffect(()=>{
        axios
        .delete(`http://localhost:3002/assets/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
        })},[])
        

        return(<>
        <h2> deleted</h2>
        <button className="button"><a href="/assets">Go Back</a></button>

        
    </>);
   
   }

export default AssetDelete;