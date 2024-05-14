import React from "react";
import {
  Carre,
  Bouton,
  SelectedBouton,
  Ecriture,
  Image,
  Box,
  Wrapp,
} from "./Elements.js";


import Voit from "../../../images/voiture.png";
import Supp from "../../../images/supprimer.png";
import Ajout from "../../../images/ajouter.jpg";
import "./Voitures.css";
import CarItem from "./Car.js";
import './Cars.css'
import Navbar from "../../Navbar/index.js";

function Ajouter() {
    return (
            <div className='carrs'>
            <Navbar/>
            <div className="container">
              <div className='fond'>
               <div className="menu">
                <Box>
                  <Bouton to='/voitures'>
                    
                    <Ecriture>Mes voitures</Ecriture>
                    <Image src={Voit} className="Prof" alt="" />
                  </Bouton>
        
                  <SelectedBouton to='/ajouter'>
                    <Ecriture>Ajouter une voiture</Ecriture>
                    <Image src={Ajout} className="Prof" alt="" />
                  </SelectedBouton>
        
                  <Bouton to='/supprimer'>
                    <Ecriture>Supprimer une voiture</Ecriture>
                    <Image src={Supp} className="Prof" alt="" />
                  </Bouton>
                </Box>
               </div>
              </div>
              <div className="voitures">
                <Carre>
                  <Wrapp>
                    <CarItem/>
                  </Wrapp>
                </Carre>
              </div>
            </div>
            </div>
    )
}

export default Ajouter
