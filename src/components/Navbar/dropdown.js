import React, { useState } from 'react';
import './dropdown.css';
import { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

function DropDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <>
        <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
            
          );
        })}
        <li>
        <button className='btndeco' onClick={() => firebase.auth().signOut()}>Déconnexion</button></li>
      </ul>
      
        </>
    )

}

export default DropDown;

