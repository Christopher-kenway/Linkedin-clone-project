import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../../firebase';
import {logout, selectUser} from '../../features/userSlice';

function Header() {
  const user = useSelector(selectUser);
 const dispatch = useDispatch();
 
  const logoutOfApp = () => {
    dispatch (logout());
    auth.signOut();

  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className='header__search'>
          <SearchIcon /> 
          <input type="text" placeholder = "Search"/>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        />
        
         <div className='headerRight__right'>
          <HeaderOption Icon={AppsIcon} title = "For Business"/>

          <span> <a className='header__premium' href='#'>Try Premium for free</a> </span>
          
        </div>
    </div>
      </div>
       
  );
}

export default Header;
