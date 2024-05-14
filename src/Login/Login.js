import React, { useCallback, useContext, useState} from 'react'
import './Login.css'
import forme from '../images/Tracé 19.png';
import deco1 from '../images/deco1.png';
import deco2 from '../images/deco2.png';
//import { Link as LinkS } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import { AuthContext } from "../Auth/Auth";


const Login = ({ history }) => {

    const [mail, setMail] = useState(''); 
    console.log(mail);

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, mdp } = event.target.elements;
          try {
            await firebase
              .auth()
              .signInWithEmailAndPassword(email.value, mdp.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
  //const k = 12;
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/" />;
      }

      const Passreset = () => {
        firebase.auth().sendPasswordResetEmail(mail)
        .then(() => {
          console.log('Email envoyé avec succès');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      
            } 
      

    return (
    <div className='loginpage'>
    <body className="fondloginpage">
    <section className = 'Containerloginpage'>
            <img src= {forme} className = 'formeloginpage' alt = 'forme' />
            <p className = 'greetloginpage' >Ravis</p>
            <p className = 'greet1loginpage' >de vous</p>
            <p className = 'greet2loginpage' >revoir ! </p>
            <p className = 'text1loginpage'> Connectez-vous afin</p>
            <p className = 'text2loginpage'> d'accéder à nos services</p>
            </section>
            <div className = 'posloginpage'>
            <h1 className = 'titleloginpage' > Connexion </h1>
            <p className = 'textloginpage' > Vous ne disposez pas encore d'un compte ? 
            <a className='linkloginpage' href='inscription'> Inscrivez-vous ! </a> </p>

            <form onSubmit={handleLogin}>
            <div className = 'formloginpage'>
                <input className = 'inputloginpage' onChange={event => setMail(event.target.value)} type="text" name="email" placeholder='Adresse E-mail' required></input>
                <input className = 'inputloginpage' type="password" minlength="8" name="mdp" placeholder='Mot de passe' required></input>
                <button className = 'mdpoubloginpage' onClick={Passreset}> Mot de passe oublié ? </button>
            </div>
                <button className = "loginloginpage" type="submit"> Se connecter </button>
            </form>
            <img src= {deco1} className = 'deco1loginpage' alt = 'forme' />
            <img src= {deco2} className = 'deco2loginpage' alt = 'forme' />

        
        </div>
    </body>
    </div>
 
  
    );
    
}

export default withRouter(Login);
