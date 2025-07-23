import React from "react";
import {Link} from "react-router-dom";
import Register from "./register";

function Login() {
    return (
        <div className="login-page">
            <h2>Welcome to EduFlux</h2>
            <p>Enter your credentials to login</p>
            <form>
                <input type="text" placeholder="Enter your username"></input>
                <input type="text" placeholder="Enter your email"></input>
                <input type="password" placeholder="Enter your password"></input>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register" element={<Register/>}>Register</Link></p>
        </div>
    )
}

export default Login;