import {useState} from 'react';
import axios from 'axios';

function UserLogin(){
    localStorage.clear(); 
    return (
        <>
        <h2 style={{textAlign:'center'}}>Please Login</h2>
        <MyForm/>
        </>
    );
}

function MyForm(props){
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);
        
        axios.post(`http://localhost:5000/login`, inputs)
            .then(response => {
                localStorage.setItem('mytoken', response.data.accessToken)
                window.location = '/assets'             
            })
            .catch(error =>{
                localStorage.clear();
                if(error.response){
                    alert(error.response.data) 
                }
            })
    };

    return(
        <>
        <center>
        <form onSubmit = {handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td>
                    <label>User Id :</label>
                    </td>
                    <td>
                    <input type = "email" name = "email"
                    value = {inputs.email || ''} onChange = {handleChange} 
                    required></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    <lable>Password :</lable>
                    </td>
                    <td>
                    <input type = "password" name = "password"
                    value = {inputs.password || ''} onChange = {handleChange}
                    required></input>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                    <button type = 'submit'  onClick={()=>window.location ='/'}>SUBMIT</button> &nbsp;
                    <button type = 'button'  value = 'Cancel'>CANCEL</button>
                    </td>
                </tr>
                <tr>
                    <td><a onClick={()=>window.location ='/register'}>Register User</a></td>
                </tr>
                </tbody>
            </table>
        </form>
        </center>
        </>
    );

};

export default UserLogin;