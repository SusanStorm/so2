import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Globe from  '../../assets/Globe.svg'

const LeftSidebar = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => (state?.currentUserReducer))
   
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                    
                    <NavLink to='/chatbot' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}><p>ChatBot</p></NavLink>
                    <NavLink to='/fbclone' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}><p>SocialWeb</p></NavLink>
                
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
