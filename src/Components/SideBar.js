import React from 'react'
import {bool} from 'prop-types';
import { StyledSideBar } from './SideBar.styled';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function SideBar({open}) {
    SideBar.propTypes = {
        open: bool.isRequired,
    }

    const LiStyle={
        padding: '2rem',
    }
    const TextStyle={
        color: '#4492E6',
        fontWeight: '600',
        fontSize: '2rem',
        fontStyle: 'normal',

    }

    return (
        <>
        <StyledSideBar open={open} aria-hidden={!open}>
        <div style={{
            margin: '6rem 0 0 0',
            justifyContent: 'center',
        }}>

            <div  style={LiStyle}><NavLink to="/" style={TextStyle}>Study Hall</NavLink></div>
            <div  style={LiStyle}><NavLink to="/facultyblock" style={TextStyle}>Faculty Block</NavLink></div>
            <div  style={LiStyle}><NavLink to="/adminblock"  style={TextStyle}>Admin Block</NavLink></div>
            <div  style={LiStyle}><NavLink to="/students" style={TextStyle}>Students</NavLink></div>
        </div>
        </StyledSideBar>
        </>
    )
}

export default SideBar