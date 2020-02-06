import React from 'react';
import LoginForm from './LoginForm';
import Signup from './signup';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <h1>Welcome</h1>
            <div><Link to="/login">Log In</Link></div>
            <div><Link to="/signup">Sign Up</Link></div>
        </div>
)}