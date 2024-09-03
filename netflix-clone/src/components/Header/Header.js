import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/Netflix_Logo.png'


function Header() {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><a href='/Netflix-Clone'><img src={logo} alt='Netflix Logo' width="100"/></a></li>
                    <li><a href='/Netflix-Clone'>Home</a></li>
                    <li>TV shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                    <li>Languages</li>                    
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>                      
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header