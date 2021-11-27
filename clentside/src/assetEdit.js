import { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
function AssetEdit(){
    const {id}=useParams()
  return(<>
  <EditForm id={id}/>
  </>)

}

function EditForm(props){
  const[inputs, setInputs] = useState({});

  useEffect(()=>{
    axios
    .get(`http://localhost:3002/assets/${props.id}`)
    .then(response=>{
        console.log('Promise was fullfilled')
        console.log(response)
        setInputs(response.data)
    })},[])

  function handleChange(event){
    const name= event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values, [name]:value}))}
    function handleSubmit(event) {event.preventDefault();
      console.log(inputs);

      axios
      .put(`http://localhost:3002/assets/${props.id}`,inputs)
      .then(response=>{
        console.log('Promise was fullfilled')
        console.log(response)
        alert("User details updated")
    })
    
    }

   return(
   <>
       <form onSubmit={handleSubmit}>
    <div class="container">
      <h1>Add Assets</h1>
      <hr/>

    <label><b>Type :</b></label>
    <input type="text" name="type" value={inputs.type|| ""} onChange={handleChange} required/>

    <label><b>Vendor :</b></label>
    <input type="text" name="vendor" value={inputs.vendor|| ""} onChange={handleChange} required/>

    <label><b>Class:</b></label>
    <input type="text" name="class" value={inputs.class|| ""} onChange={handleChange} required/>  
    <label><b>Model:</b></label>
    <input type="text" name="model" value={inputs.model|| ""} onChange={handleChange} required/> 
    <label><b>SNumber:</b></label>
    <input type="text" name="snumber" value={inputs.snumber|| ""} onChange={handleChange} required/> 
    <label><b>Manufacture Year:</b></label>
    <input type="text" name="myyear" value={inputs.myyear|| ""} onChange={handleChange} required/> 
    <label><b>Production Date :</b></label>
    <input type="text" name="pdate"   onFocus={
    (e)=> {
      e.currentTarget.type = "date";
      e.currentTarget.focus();
     }
   } 
   value={inputs.pdate|| ""} onChange={handleChange} required/>
    <label><b>Warranty:</b></label>
    <input type="text" name="waranty" value={inputs.waranty|| ""} onChange={handleChange} required/>
    <label><b>From Date :</b></label>
    <input type="text" name="from"  
     onFocus={
    (e)=> {
      e.currentTarget.type = "date";
      e.currentTarget.focus();
     }
   }
    value={inputs.from|| ""} onChange={handleChange} required/>
    <label><b>To Date :</b></label>
    <input type="text" name="to" 
     onFocus={
    (e)=> {
      e.currentTarget.type = "date";
      e.currentTarget.focus();
     }
   }
    value={inputs.to|| ""} onChange={handleChange} required/>
   <hr/>
    <button type="submit" class="registerbtn">Save</button>
  </div>

 
    </form>
  </>)

}





export default AssetEdit;