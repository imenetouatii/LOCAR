import React, { useState, useEffect, useContext } from "react";
import firebase from "../../../firebase";
//import "./Cars.css";
import Car from "../../../images/car.png";
import { AuthContext } from "../../../Auth/Auth";
import './Cars.css'
import {TiDelete} from 'react-icons/ti';



const useCars = () => {
  const [cars, setCars] = useState([]); //useState() hook, sets initial state to an empty array
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("voitures") //access "items" collection
      .where("uid", "==", currentUser.uid)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listCars = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        setCars(listCars); //items is equal to listItems
      });
  }, []);
  return cars;
};

const CarList = () => {
  const listCar = useCars();

  const secondColumnStart = Math.floor(listCar.length / 2);
  return (
    <div className='car'>
    <div className="wraper">
      <div>
        {listCar.slice(0, secondColumnStart).map((car) => (
          <div key={car.id}>
            <div>
              <ul className="item">
                <li className="lii">
                  <h10 className="h10">
                    {" "}
                    Maison <h11 className="h11"> {car.Maison}</h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Modele <h11 className="h11"> {car.Modele} </h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Couleur <h11 className="h11"> {car.Couleur}</h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Matricule <h11 className="h11"> {car.Matricule} </h11>{" "}
                  </h10>
                </li>
              </ul>
              <div className="row">
                <img
                  src={Car}
                  className="car"
                  alt=""
                  height="74px"
                  width="auto"
                />
                <button className='suppp'><TiDelete/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {listCar.slice(secondColumnStart).map((car) => (
          <div key={car.id}>
            <div>
              <ul className="item">
                <li className="lii">
                  <h10 className="h10">
                    {" "}
                    Maison <h11 className="h11"> {car.Maison}</h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Modele <h11 className="h11"> {car.Modele} </h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Couleur <h11 className="h11"> {car.Couleur}</h11>{" "}
                  </h10>
                </li>
                <li className="li">
                  <h10 className="h10">
                    {" "}
                    Matricule <h11 className="h11"> {car.Matricule} </h11>{" "}
                  </h10>
                </li>
              </ul>
              <div className="row">
                <img
                  src={Car}
                  className="car"
                  alt=""
                  height="74px"
                  width="auto"
                />
                <button className='suppp'><TiDelete/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default CarList;