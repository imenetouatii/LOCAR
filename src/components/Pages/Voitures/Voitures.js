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
import CarList from "./Cars.js";
import './Cars.css'
import { AuthProvider } from "../../../Auth/Auth";
import Navbar from '../../Navbar';



function Voitures() {

  return (
    <AuthProvider>
      <Navbar/>
    <div className='carrs'>
    <div className="container">
      <div className='fond'>
       <div className="menu">
        <Box>
          <SelectedBouton to='/voitures'>
            <Image src={Voit} className="Prof" alt="" />
            <Ecriture>Mes voitures</Ecriture>
          </SelectedBouton>

          <Bouton to='/ajouter'>
            <Ecriture>Ajouter une voiture</Ecriture>
            <Image src={Ajout} className="Prof" alt="" />
          </Bouton>
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
          <CarList/>
          </Wrapp>
        </Carre>
      </div>
    </div>
    </div>
    </AuthProvider>
  );
}

export default Voitures;