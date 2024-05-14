import React, { useState, useEffect, useContext, createContext} from "react";
import {IdContext} from './Tracking';
import firebase from '../../../firebase';
import './Tracking.css'
import Car from '../../../images/car.png'
export const TrackContext = React.createContext();
//export const MatContext = React.createContext;

 

const useCars = () => {
  const [cars, setCars] = useState([]); //useState() hook, sets initial state to an empty array
  const { currentUser } = useContext(AuthContext);
  console.log('id est :');
  console.log(currentUser.uid);

  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("voitures") //access "items" collection
      .where("id", "==", currentUser.uid)
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listCars = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }));
        setCars(listCars); //items is equal to listItems
        
      });
  }, []);
  return cars;
};

const CarList = () => {

  const listCar = useCars();
  const [mat, setMat ] = useState();
  console.log(mat);
  matt = mat;
  return (
    <div className='track'>
    <div className = "wrapper">
      {listCar.map(car => (
        <div key={car.id}>
          <div > 
       <ul className = "item">
       <li className = "lii"> 
        < h10 className = "h10"> Maison      < h11 className = "h11"> {car.Maison}</h11> </h10> 
          </li> 
         <li className = "li"> 
         <h10 className = "h10"> Modele      < h11 className = "h11"> {car.Modele} </h11> </h10>
           </li> 
          <li className = "li"> 
         <h10 className = "h10"> Couleur     < h11 className = "h11"> {car.Couleur}</h11> </h10>
           </li> 
          <li className = "li"> 
         <h10 className = "h10"> Matricule   < h11 className = "h11"> {car.Matricule} </h11> </h10>
          </li> 
         </ul>
         <div className ="row">
         <img  src = {Car} className = "car" alt="" height ="74px" width ="auto"  />
         <button className='slc' onClick={() => setMat(car.Matricule)}>Sélectionner</button>
         </div>
          </div>
        </div>
      ))}
    </div>
 </div>
  );
};

export default CarList;