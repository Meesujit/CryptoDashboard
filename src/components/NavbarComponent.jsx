import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaNewspaper } from "react-icons/fa";
import { MdCurrencyBitcoin, MdCurrencyExchange, MdOutlineMenu } from "react-icons/md";

import { NavContainer, LogoContainer, Menu, MenuItem, MenuControlButton } from '../styles/StyledNavbar'; // Import the styled components
import icon from '../assets/cryptocurrency.png'; // Import the icon image

const NavbarComponent = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  },[]);


  useEffect(() => {
    if(screenSize < 800){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
    <NavContainer className='nav-container'>
        <LogoContainer className="logo-container">
            <img src={icon} alt="icon" />
            <Link to='/'>Crypto News</Link>
            <MenuControlButton className='Menu-control-container' 
            onClick={() => setActiveMenu(prev => !prev)}>
            <MdOutlineMenu />
            </MenuControlButton>
        </LogoContainer>
        {activeMenu && (
        <Menu className='menu'>
          <MenuItem className='menu-item'>
            <Link to='/' >
            <FaHome />
                Home
            </Link>
          </MenuItem>
          <MenuItem className='menu-item'>
            <Link to='/cryptocurrencies' >
            <MdCurrencyBitcoin />
                Cryptocurrencies 
            </Link>
          </MenuItem>
          <MenuItem className='menu-item'>
            <Link to='/exchanges' >
            <MdCurrencyExchange />
                Exchanges 
            </Link>
          </MenuItem>
          <MenuItem className='menu-item'>
            <Link to='/news' >
            <FaNewspaper />
                News
            </Link>
          </MenuItem>
        </Menu>

        )}
    </NavContainer>
  )
}

export default NavbarComponent