import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { Collapse, CardBody, CardText } from 'reactstrap';
import '../App.css';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="header" style={{justifyContent: "left"}}>
            <div className="nav">
                <div><Link to="/loginform">Log In</Link></div>
                <div><Link to="/signup">Sign Up</Link></div>
            </div>
            <h1 className="head">Med Cabinet</h1>
        </div>
)}