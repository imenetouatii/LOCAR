import styled from 'styled-components';

export const Carre = styled.div`
  background : white;
  border-radius: 20px;
  box-shadow: 2px 4px 10px lightgray;
  width:75vw;
  height:72%;
  margin:50px;
  margin-top:100px;
  
  justify-content: center;
  align-items: center;
  display: block;
  position: relative;
  float: right;
  color: #707070;
  z-index: 1;
  

`;


export const Bouton = styled.button`
    display:block;
    position: relative;
    align-items: center;
    bottom: 500px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
    font-family: 'Montserrat';
    box-shadow: 2px 4px 10px lightgray;
    border: none;
    height: 50px;
    width: 20vw;/** **/
    background: white;
    transition: all .7s ease;
    z-index: 2;
    cursor: pointer;

    &:hover {
      background: #EBEBEB;
      width: 24vw;
      
    }
    @media screen and (max-width: 960px) {
      display:block;
      position: relative;
      cursor: pointer;
      bottom: 500px;
      margin-left: 20px;
      margin-top: 20px;
      border-radius: 10px;
      box-shadow: 2px 4px 10px lightgray;
      border: none;
      height: 50px;
      width: 50px;
      background: white;
      transition: all .7s ease;
      z-index: 2;

      &:hover {
      background: #EBEBEB;
      width: 50px;
      
    }


    }
`;

export const Ecriture = styled.h2`
  display: block;
  font-family: 'Montserrat';
  text-align: center;
  margin: 10px;
  font-weight: normal;
  font-size: 16px;
  color: black;
  z-index: 3;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 10px;
    font-family: 'Montserrat';
    vertical-align: baseline;
    font-weight: normal;
    color: transparent;
    z-index: 3;
      
    }
`;

export const Ecriture2 = styled.h2`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 2em;
  color: #B5D6FC;
  font-family: 'Montserrat';
  z-index: 3;

`;

export const Image = styled.img`
  vertical-align: baseline;
  margin-left: 25px;
  width: 35px;
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  bottom:10px;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-left: 1px;
    transition: all .7s ease;
    }
`;

export const Avatar = styled.img`
  vertical-align: baseline;
  margin-left: 50px;
  top : 30px;
  width: 20%;
  display: table-cell;
  vertical-align: middle;
  position: relative;

  @media screen and (max-width: 960px) {
    top : 30px;
    width: 20%;
    display: block;
    vertical-align: middle;
    position: relative;
    }

`;

export const Box = styled.div`
      display: block;
      height:250px;
      width:400px;
      z-index: 10;
`;

export const Fond = styled.div`
  background-image: url('../../images/map2.png');
  height:auto;
  width:100%;

`;

export const Tableau = styled.table`
  height : 55px;
  border: 1px solid black;

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


export const container = styled.div`
  position: relative;

`;

export const image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
  z-index: 0;
  top: 0;
  left: 0;
`;

export const content = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 2;
  display: block;
  top: 0;
  left: 0;
`