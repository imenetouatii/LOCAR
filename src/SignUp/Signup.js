import React, { useCallback, useState } from 'react'
import './Signup.css'
import forme from '../images/Tracé 1.png';
import deco1 from '../images/deco1.png';
import deco2 from '../images/deco2.png';
import { withRouter } from "react-router";
import firebase from "../firebase";

const Signup = ({ history }) =>  {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, mdp } = event.target.elements;
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, mdp.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

      const [nom, setNom] = useState(''); 
      const [prenom, setPrenom] = useState(''); 
      const [email, setEmail] = useState(''); 
      const [num, setNum] = useState(''); 
      
      const Adduser = () => {
       firebase
      .firestore()
      .collection("utilisateurs")
      .add({
            Nom : nom,
            Prenom : prenom,
            AdresseEmail: email,
            Numero: num,
            })
      .then(ref => {
          console.log("Added document")
          })
        } 

    return (
  
    <div className='signuppage'>
    
   
       <section className = 'Containersignuppage'>
            <img src= {forme} className = 'formesignuppage' alt = 'forme' />
            <p className = 'greetsignuppage' >Bienvenue</p>
            <p className = 'greet1signuppage' >parmis nous !</p>
            <p className = 'text1signuppage'> Entrez vos informations</p>
            <p className = 'text2signuppage'> afin de créer un compte </p>
            </section>
            <div className = 'possignuppage'>
            <h1 className = 'titlesignuppage' > Créer un compte </h1>
            <form onSubmit={handleSignUp}>
            <div className = 'formsignuppage'>
                
                <input className = 'input1signuppage' type="nom" name="nom" placeholder='Nom' onChange={event => setNom(event.target.value)} required></input>
                <input className = 'input1signuppage' type="prenom" name="prenom" placeholder='Prénom' onChange={event => setPrenom(event.target.value)} required></input>
                <input className = 'input2signuppage' type="email" name="email" placeholder = 'Adresse E-mail' onChange={event => setEmail(event.target.value)} required></input>
                <input className = 'input3signuppage' type="num" name="num" placeholder = 'Numéro de téléphone' onChange={event => setNum(event.target.value)} required></input>
                <input className = 'input4signuppage' type="password" name="mdp" placeholder = 'Mot de passe' required></input>
            </div>
                <button className = "btnsignuppage" type="submit" onClick={Adduser}> S'inscrire </button>
            </form>
            <img src= {deco1} className = 'deco1signuppage' alt = 'forme' />
            <img src= {deco2} className = 'deco2signuppage' alt = 'forme' />

        
        </div>
  
     </div>
  
    );
    
}

export default withRouter(Signup);
