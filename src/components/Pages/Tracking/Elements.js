import styled from 'styled-components';

export const Back = styled.div`
  
    background-image: url("../../images/map22.png");
    background-size: cover;
    width: 100%;
    height: auto;
    z-index: 2;
    display: block;
    
`;

export const Sec = styled.div`
  position: absolute;
  top : 70px;
  left: 40px;
  background-color: #ffff;
  box-shadow: 0px 3px 10px #a7a7a7;
  border-radius: 45px;
  height: 55% ;
  width: 25%;
  background-color: white;
`;

export const Title = styled.p`
  color: #4F8EF2;
  text-align: center;
`;

export const ListP = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: -13px;
  align-items: center;
`;

export const IconCal = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const IconTime = styled.div`
  display: flex;
  align-items: center;
  margin-left: 90px;
`;

export const Icon = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;


export const IconText = styled.p`
  color: #4F8EF2;
`;

export const Input = styled.input`
  height: 30px;
  width: 33%;
  border-radius: 10px;
  margin : 5px;
  margin-top: 0px;
  margin-left: 33px;
  text-align: center;
  border: 1px #707070 solid;
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
`;

export const Txt = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

export const Line = styled.hr`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  background-color: #EBEBEB;
  opacity: 0.5;
`;

export const Wrapp = styled.div`
 position: relative;
 top: 0px;
 left: 40px;
`;