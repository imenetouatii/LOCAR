import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as NavLink } from 'react-router-dom';



export const Nav = styled.nav`
  background : white;
  border-bottom: 0.5px solid lightgray;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top : 0;
  color: #707070;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0px ;

`;

export const NavLogo = styled(LinkR)`
  color: #427AEE;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 0px ;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Montserrat';

`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      cursor: pointer;
      font-size: 20px;
      color: black;
      align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 91vh;
    position: absolute;
    top: 39px;
    left: ${({ click }) => (click ? 0 : '-110%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #EFF4FB;
    }
`;

export const NavItem = styled.li`
  height : 55px;
  
  &:hover{
    border-bottom: 2px solid blue ;
  }

  &:active {
    border-bottom: 1px solid blue ;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;

export const NavItemRes = styled.li`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: flex;
    height : 65px;
    color: #707070;

    &:hover {
      border: none;
    }
  }
`;

export const Deco = styled.button`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    border-radius: 10px;
    font-size: 18px;
    border: none;
    color: #707070;
    height: 50px;
    background: lightblue;
    align-items: center;

    &:hover {
      background: darkblue;
      
    }
  }
`;

export const NavLinks = styled(NavLink)`
  color: #707070;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  padding-bottom: 0px;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 1px solid blue ;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 18px;
    padding: 2rem;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;



export const MenuUser = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
      display: none;
    }
`;

export const UserItem = styled.li`
  color: #707070;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    display: none;
    }
  
`;

export const Drop = styled.div`
display: block;
cursor: pointer;
height: 50%;
font-size: 30px;
`;

