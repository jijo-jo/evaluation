import { useState } from "react";
import axios from "axios";
import './reg.css'
function AddAssets(){

    const[inputs, setAssets] = useState({});
  function handleChange(event){
    const name= event.target.name;
    const value= event.target.value;
    setAssets(values=>({...values, [name]:value}))}
    function handleSubmit(event) {event.preventDefault();
      console.log(inputs);

      axios
      .post("http://localhost:3002/assets",inputs)
      .then(response=>{
        console.log('Promise was fullfilled')
        console.log(response)
        window.location='./assets'
    })
    
    }

   return(<>
   
   <form onSubmit={handleSubmit}>
    <div className="container">
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
    <input type="date" name="pdate" value={inputs.pdate|| ""} onChange={handleChange} required/>
    <label><b>Warranty:</b></label>
    <input type="text" name="waranty" value={inputs.waranty|| ""} onChange={handleChange} required/>
    <label><b>From Date :</b></label>
    <input type="date" name="from" value={inputs.from|| ""} onChange={handleChange} required/>
    <label><b>To Date :</b></label>
    <input type="date" name="to" value={inputs.to|| ""} onChange={handleChange} required/>
   <hr/>
    <button type="submit" className="registerbtn">ADD ASSET</button>
  </div>

 
    </form>
  </>)

}

export default AddAssets;