import React from "react"
import {useState,useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import './list.css'


function AssetDetails(){
    const[assets, setAssets]=useState([]);
    const {id}=useParams()
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:3002/assets/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setAssets(response.data)
        })},[])
        

        return(<>
        <h2>AssetDetails Details</h2>
        
       <div className="column">
       <div style={{alignItems:'center'}}>
       <div className="card" >
           
       <div className="container">
       <h3>{assets.type}</h3>
       
   
        
        <h3>Vendor Name :{assets.vendor}</h3>
        <h3>Asset Class :{assets.class} </h3>
        <h3>Model :{assets.model} </h3>
        <h3>S Number:{assets.snumber} </h3>
        <h3>Manufacture Year :{assets.myyear} </h3>
        <h3>Production Date :{assets.pdate} </h3>
        <h3>Waranty:{assets.waranty} </h3>
        <h3>From Date:{assets.from} </h3>
        <h3>To Date:{assets.to} </h3>
        <button className="button" onClick={()=>navigate(`/deleteassets/${assets.id}`)}>DELETE</button>
        <button className="button" onClick={()=>navigate(`/editassets/${assets.id}`)}>EDIT</button>
        <button className="button"><a href="/assets">Go Back</a></button>
        </div>
        </div>
        </div>
        </div>
        
        
        </>)}

   
export default AssetDetails;