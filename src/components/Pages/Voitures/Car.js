import React, { useState, useContext } from "react";
import firebase from "../../../firebase";
import "./Car.css";
import Car from "../../../images/car.png";
import { AuthContext } from "../../../Auth/Auth";
import { FaCheck } from 'react-icons/fa';



const CarItem = () => {
    const { currentUser } = useContext(AuthContext);
    const [maison, setMaison] = useState("");
    const [modele, setModele] = useState("");
    const [couleur, setCouleur] = useState("");
    const [matircule, setMatricule] = useState("");
  
    
    const onSubmit = e => {
    
      e.preventDefault();
      firebase
        .firestore()
        .collection("voitures")
        .add({
          Maison: maison,
          Modele: modele,
          Couleur: couleur,
          Matricule: matircule,
          uid: currentUser.uid,
        })
        //.then will reset the form to nothing
        .then(() => setMaison(""), setModele(""), setCouleur(""), setMatricule(""));
    };



  return (
    <div className='carrr'>
    <form onSubmit={onSubmit}>
    <div className="wraperrr">
      <div>
        
            <div>
              <ul className="item">
                <li className="lii">
                  <h10 className="h10">
                    {" "}
                    Maison <h11 className="h11"> <input className='input' placeholder='Maison' value={maison}
                   name="maison" onChange={e => setMaison(e.currentTarget.value)} type="text"></input> </h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Modèle <h11 className="h11"><input className='input' placeholder='Modèle' value={modele}
                 name="modele"  onChange={e => setModele(e.currentTarget.value)} type="text"></input>  </h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Couleur <h11 className="h11"><input className='input' placeholder='Couleur' value={couleur}
                    name="couleur" onChange={e => setCouleur(e.currentTarget.value)} type="text"></input> </h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h12">
                    {" "}
                    Matricule<h11 className="h11"> <input className='input' placeholder='Matricule' value={matircule}
                 name="matricule" onChange={e => setMatricule(e.currentTarget.value)} type="text"></input> </h11>{" "}
                  </h10>
                </li>
              </ul>
              <div className="row">
                <img
                  src={Car}
                  className="car"
                  alt=""
                  height="100px"
                  width="auto"
                />
              </div>   
               <div className='divbtn'>
               <button className='slc'><p className='textbut'>Confimer </p> <FaCheck/></button>
               </div>
            </div>
      </div>

    </div>

    </form>
    </div>
    
  );
};
export default CarItem;