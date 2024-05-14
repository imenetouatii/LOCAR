import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const Carre = styled.div`
  height: 100%;
  display: block;
  color: #707070;
  z-index: 1;
`;
export const SelectedBouton = styled(LinkR)`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 20px;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 2px 4px 10px lightgray;
  border: none;
  height: 50px;
  width: 24vw; /** **/
  background: #ebebeb;
  transition: all 0.7s ease;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 2px 4px 10px lightgray;
    border: none;
    height: 50px;
    width: 50px;
    background: #ebebeb;
    transition: all 0.7s ease;
    z-index: 2;
    text-decoration: none;
  }
`;
export const Bouton = styled(LinkR)`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 20px;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 2px 4px 10px lightgray;
  border: none;
  height: 50px;
  width: 20vw; /** **/
  background: white;
  transition: all 0.7s ease;
  z-index: 2;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #ebebeb;
    width: 24vw;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 2px 4px 10px lightgray;
    border: none;
    height: 50px;
    width: 50px;
    text-decoration: none;
    background: white;
    transition: all 0.7s ease;
    z-index: 2;
    &:hover {
      background: #ebebeb;
      width: 50px;
    }
  }
`;

export const Ecriture = styled.h2`
  display: flex;
  text-align: center;
  align-items: center;
  margin: 10px;
  margin-left: 60px;
  align-self: center;
  font-family: 'Montserrat';
  font-weight: normal;
  font-size: 15px;
  color: black;
  z-index: 3;
  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 10px;
    vertical-align: baseline;
    font-weight: normal;
    color: transparent;
    z-index: 3;
  }
`;

export const Ecriture2 = styled.h2`
  display: block;
  text-align: center;
  margin: 8px;
  font-size: 1.7em;
 
  color: black;
  align-self: center;
  z-index: 3;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  vertical-align: baseline;
  align-items: center;
  margin-left: 5px;
  width: 30px;
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  bottom: 5px;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-left: 1px;
    transition: all 0.7s ease;
  }
`;

export const Box = styled.div`
  display: block;
  z-index: 10;

`;



export const Tableau = styled.table`
  height: 55px;
  border: 1px solid black;
  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;



export const container = styled.div`
  position: relative;
`;


export const Wrapp = styled.div`
  position: relative;
  top: 0px;
  left: 100px;
  background: "#fff";
  margin-top : 5%;
`;

export const Text = styled.div`
  font-size: 20px;
  color:#707070;
  
`;