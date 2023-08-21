import React, { useState } from "react";

const Login = () => {

    const [loginData, setloginData]=useState({email:'',password:''});

const handleChange = event =>{
    const {name, value} = event.target;
    setloginData({...loginData,[name]: value});
};
const handleSubmit = event =>{
    event.preventDefault();
    console.log(loginData.email, loginData.password);
};
    return (
        <div>

             <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={loginData.email} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={loginData.password} onChange={handleChange}/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
            
        </div>
    )
}

export default Login
