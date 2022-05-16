import {bool} from 'prop-types';
import { StyledSideBar} from './SideBar.styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/SideBar.css';
import { Pages } from '../App';

const listItem = (x)=>{
    return(
        <NavLink to={x.path} key={x.id} className='list-item'>{x.name}</NavLink>
    )
}

function SideBar({open}) {
    SideBar.propTypes = {
        open: bool.isRequired,
    }

    return (
        <>
        <StyledSideBar open={open} className='list'>
            {Pages.map(listItem)}
            <NavLink to='/logout' id='log-out' className='list-item'>Log Out</NavLink>
        </StyledSideBar>
        </>
    )
}

export default SideBar