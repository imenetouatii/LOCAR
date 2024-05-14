//import './App.css';
//import firebase from "./firebase";
import React from 'react';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tracking from './components/Pages/Tracking/Tracking';
import Voitures from './components/Pages/Voitures/Voitures';
import Aide from './components/Pages/Aide/Aide';
import Profil from './components/Pages/Profil/Profil';
import Securite from './components/Pages/Securite/Securite';
import Maps from './components/Pages/Tracking/maps';
import firebase from 'firebase';
import { AuthProvider } from "./Auth/Auth";
//import PrivateRoute from './Auth/PrivateRoute';


function IndexS() {
  


  return (
    <AuthProvider>
    <Router> 
      <Navbar/>
      <Switch>
        <Route path='/tracking' exact component={Tracking}/>
        <Route path='/' exact component={Tracking}/>
        <Route path='/voitures' exact component={Voitures}/>
        <Route path='/aide' exact component={Aide}/>
        <Route path='/profil' exact component={Profil}/>
        <Route path='/sécurité' exact component={Securite}/>
        <Route path='/map' exact component={Maps}/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default IndexS;
