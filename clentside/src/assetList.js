import {useState,useEffect} from "react"
import axios from "axios";
import Assets from './listAssets'
import './list.css'
import { useNavigate } from "react-router-dom";



function Listall(){
    const[assets, setAssets]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get("http://localhost:3002/assets")
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setAssets(response.data)
        })},[])
        

        return(<>
        <h2>ASSETS</h2>
                 <div>{assets.map(asset=><div key={asset.id}> <Assets details= {asset}/></div>)}</div>
                 <button type="button" className="registerbtn" onClick={()=>navigate(`/addassets`)}>ADD ASSET</button></>);
   
   }

export default Listall;