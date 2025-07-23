import React from "react";
import {Link} from "react-router-dom";
import Login from "./login";

function Register() {
    return (
        <div className="register-page">
            <h2>Welcome to EduFlux</h2>
            <p>Enter your credentials to Register</p>
            <form>
                <input type="text" placeholder="Enter your username"></input>
                <input type="text" placeholder="Enter your email"></input>
                <input type="password" placeholder="Enter your password"></input>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account?<Link to='/login' element={<Login/>}>Login</Link></p>
        </div>
    )
}

export default Register;