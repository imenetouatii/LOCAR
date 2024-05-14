import React, {useState, createContext, useContext, useEffect} from 'react'
import Navbar from '../../Navbar/index';
import { Carre , Bouton , Ecriture , Ecriture2 , Image , Box , Avatar } from './ProfilEl'
import Prof from '../../../images/profil.png'
import Modif from '../../../images/modifier.png'
import Ava from '../../../images/avatar.png'
import './General.css';
import firebase from '../../../firebase';
import { AuthContext } from '../../../Auth/Auth';


const useItems = () => {
    const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array


    
    useEffect(() => {
       firebase
        .firestore() //access firestore
        .collection("utilisateurs") //access "items" collection
        .onSnapshot(snapshot => {
          //You can "listen" to a document with the onSnapshot() method.
          const listItems = snapshot.docs.map(doc => ({
            //map each document into snapshot
            id: doc.id, //id and data pushed into items array
            ...doc.data() //spread operator merges data to id.
          }));
          setItems(listItems); //items is equal to listItems
        });
    }, []);
    return items;
  };

const UserList = () => {
    const listItem = useItems();
    console.log(listItem);

    //const { currentUser } = useContext(AuthContext);
    var user = firebase.auth().currentUser;
    console.log(user.uid);
    console.log(user.email);


    var item = listItem.find(item => item.AdresseEmail === user.email);
    console.log(item);
    
        return (
            <div className="container">
                {Object.entries(listItem).map(([key, val], id) => (
                <div key={id} className="content">
                <Carre>
                    <Ecriture2>Mes informations personelles</Ecriture2>
                    <Avatar src= {Ava} className="ava" alt=""/>
                    
                    <div className="alignement">
                    <table className="table">
                    <tbody>
                        <tr>
                        <td className="bleu">Nom</td>
                        <td className="blanc">{item.Nom}</td>
                        </tr>
    
                        <tr>
                        <td className="bleu">Prénom</td>
                        <td className="blanc">{item.Prenom}</td>
                        </tr>
    
                        <tr>
                        <td className="bleu">E-mail</td>
                        <td className="blanc">{item.AdresseEmail}</td>
                        </tr>
    
                        <tr>
                        <td className="bleu">N° Téléphone</td>
                        <td className="blanc">{item.Numero}</td>
                        </tr>
                    </tbody>
                    
                    </table>
                    </div>
                </Carre>
    
                <Box>
                    <Bouton >
                        <Ecriture>Mon compte</Ecriture>
                        <Image src= {Prof} className="Prof" alt=""/>
                    </Bouton>
    
                </Box>
            
                </div>
                ))}
            </div>
        )
};

function Profil() {
    return (
        <>
        <Navbar/>
        <UserList/>
        </>
    )
}

export default Profil