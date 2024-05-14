import React from 'react'
import Maps from './components/Pages/Tracking/maps';
import triangle from './images/triangle2.png'
import trian from './images/triangle.png'
import Homme from './images/photo3.png'
import PlayStore from './images/playstore.png'
import Logo from './images/log.png'
import './Home.css'
import { Link } from "react-router-dom";
import Login from './Login/Login'
import Signup from './SignUp/Signup'

const Home = () => {
    return (
        <div className="container2">
            <div className="content">
                <img src= {triangle} className="image" alt=""/>
                    <div className="conte">
                        <div className="trian">
                            <img src= {trian} className="ima" alt=""/>
                            <img src= {Homme} className="homme" alt=""/>
                        </div>
                        
                        
                        <div className="log">
                            
                            <img src= {Logo} className="logo" alt=""/>
                            <Link to='./connexion' className="connexion" onClick={Login}>
                                <p className="conn">Connexion</p>
                            </Link>

                            <button className="acceuil2">
                                <p className="acc">LOCAR</p>
                            </button>

                            <button className="acceuil">
                                <p className="acc">Accueil</p>
                            </button>

                            <button className="acceuil">
                                <p className="acc">Aide</p>
                            </button>
                        </div>
                        

                        <div className="titre">
                            <div className="title">
                                <p className='ecriture1' >Trackez </p>
                                <p className='ecriture' >votre véhicule</p>
                            </div>
                            <Link to='/inscription' className="bouton">
                                <p className="bout">Inscrivez-vous</p>
                            </Link>
                        </div>

                        <div className="bottom">
                                <p className="play">Notre application est disponible sur</p>
                                <img src= {PlayStore} className="playstore" alt=""/>
                        </div>
                    </div>
            
            </div>

        </div>
    )
}

export default Home;