import { useState } from "react";
import axios from "axios";
function Registeruser(){
  
  return(<>
  <RegForm/>
  </>)

}

function RegForm(){
  const[inputs, setInputs] = useState({});
  function handleChange(event){
    const name= event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values, [name]:value}))}
    function handleSubmit(event) {event.preventDefault();
      console.log(inputs);

      axios
      .post("http://localhost:5000/register",inputs)
      .then(response=>{
        console.log('Promise was fullfilled')
        console.log(response)
        window.location='./stafflist'
    })
    
    }

   return(<>
   <form onSubmit={handleSubmit}>
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>

    <label><b>First Name</b></label>
    <input type="text" name="Fname" value={inputs.Fname|| ""} onChange={handleChange} required/>

    <label><b>Last Name :</b></label>
    <input type="text" name="Lname" value={inputs.Lname|| ""} onChange={handleChange} required/>

    <label><b>Age:</b></label>
    <input type="number" name="age" value={inputs.age|| ""} onChange={handleChange} required/>

    <label><b>Address:</b></label>
    <input type="text" name="address"  value={inputs.address|| ""} onChange={handleChange} required/>
    
    <label><b>Phone Number :</b></label>
    <input type="text" name="phone" value={inputs.phone|| ""} onChange={handleChange} required/>
    
     <label><b>Password :</b></label>
    <input type="password" name="pwd" value={inputs.pwd|| ""} onChange={handleChange} required/>
    <label><b> Confirm Password :</b></label>
    <input type="password" name="cfmpwd" value={inputs.cfmpwd|| ""} onChange={handleChange} required/>
   
      <hr/>
    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login">Login</a>.</p>
  </div>
    </form>
  </>)

}





export default Registeruser;