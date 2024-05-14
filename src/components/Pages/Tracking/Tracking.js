import React, {useState, createContext, useContext, useEffect} from 'react'
import './Tracking.css';
import firebase from '../../../firebase';
import {Sec, Title, ListP, IconCal, IconTime, IconText, Icon, Input, Wrapper, Txt, Line} from './Elements';
import {GoCalendar} from 'react-icons/go';
import {AiOutlineClockCircle} from 'react-icons/ai';
import Car from '../../../images/car.png'
import Maps from './maps';
//import CarList from './Cars.js'
import {AuthContext} from '../../../Auth/Auth';
import Navbar from '../../Navbar';
export const TrackContext = React.createContext();



var GLOBALUID;
    const user = firebase.auth().currentUser;
    if (user) {
      GLOBALUID = user.uid;
      console.log(GLOBALUID);
    } else {
      console.log('rien');
    }
    console.log(GLOBALUID);

var matt;


const useCars = () => {
  const [cars, setCars] = useState([]); //useState() hook, sets initial state to an empty array
  const { currentUser } = useContext(AuthContext);
  console.log('id est :');
  console.log(currentUser.uid);

  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("voitures") //access "items" collection
      .where("uid", "==", currentUser.uid)
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
  if (listCar.length == 0){return (
    <>
     <div className='rien'></div>
     <div className='wrap' > 
       <ul className = "item">
       <li className = "lii"> 
        < h10 className = "h10"> Vous n'avez pas encore de voitures </h10> 
          </li> 
         
         </ul>
         <div className ="row">
         <img  src = {Car} className = "car" alt="" height ="74px" width ="auto"  />
     
         </div>
          </div>
    </>
  )}
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


function Tracking() {

    const [jour1, setJour1] = useState(""); 
    const [jour2, setJour2] = useState(""); 
    const [heure1, setHeure1] = useState("");
    const [heure2, setHeure2] = useState("");
    const [tabb, setTabb] = useState([]);
    const [afficher, setAfficher] = useState(false);
    const matricule = matt;
    
    var date1 = String(jour1).concat(' ',String(heure1));
    var date2 = String(jour2).concat(' ',String(heure2));
    
    //console.log(date1);
    //console.log(date2);
    var GLOBALUID;
    const user = firebase.auth().currentUser;
    if (user) {
      GLOBALUID = user.uid;
      console.log(GLOBALUID);
    } else {
      console.log('rien');
    }
    console.log(GLOBALUID);


    return (
        <>
        <TrackContext.Provider value={{matt, date1, date2, afficher, setAfficher}}>
        <Navbar/>
        <div className='backtrack'>
        <Sec>
          <Title>Intervalle de recherche</Title>
          <ListP>
            <IconCal>
             <Icon><GoCalendar/></Icon>
             <IconText>Date</IconText>
            </IconCal>
            <IconTime>
             <Icon><AiOutlineClockCircle/></Icon>
            <IconText>Heure</IconText>
            </IconTime>
          </ListP>
        <Txt>De :</Txt>
        <Wrapper>
        <Input className placeholder='MM-JJ-AAAA' onChange={event => setJour1(event.target.value)}></Input>
        <Input placeholder='00:00:00' onChange={event => setHeure1(event.target.value)}></Input>
        </Wrapper>
        <Line/>
        <Txt>A :</Txt>
        <Wrapper>
        <Input placeholder='MM-JJ-AAAA' onChange={event => setJour2(event.target.value)}></Input>
        <Input placeholder='00:00:00' onChange={event => setHeure2(event.target.value)}></Input>
        </Wrapper>
        
        <button className='affmap' onClick={() =>  setAfficher(true)} >Afficher</button>
        <p className='rem'>Veuillez entrer les deux dates de l'intervalle.</p>
        <p className='rem2'>Format de la date : MOIS/JOUR/ANNEE</p>
        


        </Sec>
        <CarList/> 
        </div>
      
        {afficher? (
        <div>
          <div className='mappp'> <Maps/></div>
       
        <div className='plcbtn'>
        <button className='btnaff' onClick={() =>  setAfficher(false)}>Femer la carte</button>
        </div>
        </div>)
         : (<h1>.</h1>)}
  
        </TrackContext.Provider>
        </>
    )
}

export default Tracking;