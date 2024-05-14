
import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, UserItem, Drop, NavItemRes,Logo } from './NavbarEl';
import  LogoApp  from '../../images/logohd.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri';
import UserLogo from '../../images/userlogo.png';
import DropDown from './dropdown'

function Navbar() {

    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      }

    return (
        <>
        <Nav>
            <NavbarContainer>
              <Logo>
                <img src= {LogoApp} className = 'logoapp' alt = '' width="auto" height="50px"/>
                <NavLogo to='/'>LOCAR</NavLogo>
              </Logo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>  
              <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='tracking' onClick={closeMobileMenu}>Tracking</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='voitures' onClick={closeMobileMenu}>Voitures</NavLinks>
                    </NavItem>
                    <NavItemRes>
                        <NavLinks to='profil' onClick={closeMobileMenu}>Profil</NavLinks>
                    </NavItemRes>
                    <NavItemRes>
                        <NavLinks to='/' onClick={closeMobileMenu}>Déconnexion</NavLinks>
                    </NavItemRes>
                    <NavItem>
                        <NavLinks to='aide' onClick={closeMobileMenu}>Aide</NavLinks>
                    </NavItem>
                  </NavMenu>
                
                 <UserItem
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                           <NavLinks 
                             to='aide'
                             onClick={closeMobileMenu} >
                                 Utilisateur
                              <Drop><RiArrowDropDownLine/></Drop>
                           </NavLinks>
                        {dropdown && <DropDown />}
                        <img src= {UserLogo} className = 'userlogo' alt = '' width="auto" height="40px"/>
                  </UserItem> 
               
            </NavbarContainer>
        </Nav>
        </>
       
    )
}

export default Navbar

