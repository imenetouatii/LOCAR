
import React from "react";
import Login from './Login/Login.js';
import Signup from './SignUp/Signup.js';
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Auth/PrivateRoute";
import Tracking from './components/Pages/Tracking/Tracking';
import Voitures from './components/Pages/Voitures/Voitures';
import Aide from './components/Pages/Aide/Aide';
import Profil from './components/Pages/Profil/Profil';
import Supprimer from "./components/Pages/Voitures/Supprimer.js";
import Ajouter from "./components/Pages/Voitures/Ajouter.js";

const App = () => {
    return (
        <AuthProvider>
          <Router>
            <div className='a'>   
              <Route exact path="/home" component={Home} />
              <PrivateRoute exact path="/" exact component={Tracking}/>
              <Route exact path="/connexion" component={Login} />
              <Route exact path="/inscription" component={Signup} />
              <PrivateRoute path='/tracking' exact component={Tracking}/>
              <PrivateRoute path='/voitures' exact component={Voitures}/>
              <PrivateRoute path='/supprimer' exact component={Supprimer}/>
              <PrivateRoute path='/ajouter' exact component={Ajouter}/>
              <Route path='/aide' exact component={Aide}/>
              <PrivateRoute path='/profil' exact component={Profil}/>
            </div>
          </Router>
        </AuthProvider>
    );
};

export default App;