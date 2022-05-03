import React from "react";
import burger from '../svg/burger.svg';
import {bool, func} from 'prop-types';
import logo from '../svg/logo.svg';
import './navbar.css'



function NavBar({open, setOpen}){       
    NavBar.propTypes = {
        open: bool.isRequired,
        setOpen: func.isRequired,
    } 
    const isExpanded = open ? true : false;
    return(
            <>
                <div className='navbar'>
                    <img className='burger' src={burger} alt="burger" style={{
                    height:'2rem',
                    }}  onClick={()=> setOpen(!open)}/>
                <img src={logo} alt="ClassroomPlus" style={{
                    width: '11rem',
                }}/>
                </div>
            </>
        )
    }
    
    export default NavBar;