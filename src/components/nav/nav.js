import React, { useState, useEffect } from "react";
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiFillMessage} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';

const Nav = ()=>{
    const [activeNav, setActiveNav] = useState("#");
    const [popNav, setPopNav] = useState("");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    useEffect(()=>{
        sleep(400).then(()=>{
            setPopNav("pop");   
        }); 
        }, [])

    return(
        <nav className={popNav}>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav=="#"?'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav=="#about"?'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav=="#experience"?'active':''}><MdWorkOutline/></a>
            <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav=="#projects"?'active':''}><BiBookOpen/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav=="#contact"?'active':''}><AiFillMessage/></a>
        </nav> 
    );
}

export default Nav;