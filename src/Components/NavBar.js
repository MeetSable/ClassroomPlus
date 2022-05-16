import React from "react";
import burger from '../svg/burger.png';
import logo from '../svg/logo.png';
import {bool, func} from 'prop-types';
import { Link } from "react-router-dom";
import './styles/navbar.css'



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
                    <Link to='/'><img src={logo} alt="ClassroomPlus" style={{
                    width: '11rem',
                    }}/></Link>
                    <Link to='/profile' className="profile-pic shadow-dark">M</Link>

                </div>
            </>
        )
    }
    
    export default NavBar;