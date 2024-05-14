import { useState, useEffect, useContext } from 'react';
import firebase from "../../../firebase";
import {TrackContext} from './Tracking';


const RecupPos = (matricule, date1, date2) => {
    if ( (date1 == "") || (date2 == "")){
        alert("Requête incorrecte, veuillez entrez les dates manquantes");
        setAfficher(false);
    }
    const [tabpos, setTabpos] = useState([]);
    const { afficher, setAfficher} = useContext(TrackContext);
    const datereq1 = new Date(date1);
    const datereq2 = new Date(date2);

    async function getTabpos() {
        const items = [];

        const docs = await firebase
            .firestore() //Accès à Firestore
            .collection("position")
            .orderBy("date", "asc") //Accèes à la collection "positions"
            .where("matricule", "==", matricule) //Recherche des document ayant un champs "matricule" égal à celui passé en paramètre
            .where("date", ">=", datereq1) //Recherche selon la date 
            .where("date", "<=", datereq2)
            .get()
            //Obtenir les documents ciblés par la recherche
            
        docs.forEach(doc => { //Pour chaque document trouvé
            const t = doc.data().position;
            //console.log(doc.data());
            if (typeof t != 'undefined' &&
                t.hasOwnProperty('_lat') &&
                t.hasOwnProperty('_long')) {
                //console.log([t._lat, t._long]);
                items.push([t._lat, t._long]); //Mettre les coordonnées (objet Geopoint) dans un tableau
            }
        });
        //console.log(items.slice(0, 2));
        setTabpos(items);
        console.log(items.length);
        if (items.length == 0){
            setAfficher(false);
            alert("Les positions de ce véhicule sont inexistantes dans l'inervalle souhaité, la page va s'actualiser afin que vous puissez faire une nouvelle requête.");
            window.location.reload();
            
        } else{ alert('Scrollez vers le bas afin de pouvoir fermer la carte.')};

    }

    useEffect(() => {
        getTabpos();
    }, []);

    return tabpos;

}

const UploadPos = (latlngs) => {
    for (var i = 0; i < latlngs.length; i++) {
        var doc = {
            matricule: "11111-111-11",
            position: new firebase.firestore.GeoPoint(latlngs[i][0], latlngs[i][1]),
            date: new firebase.firestore.Timestamp.fromDate(new Date())
        };
        firebase.firestore().collection("position").add(doc);



        var input = window.prompt('What is your search term?'); //Juste pour perdre du temps entre les 2 uploads 
        alert(input); //pour qu 'ils ne soient pas en meme temps donc on pourrait pas les ordonner

        console.log(`${i+1} from ${latlngs.length}`);

    }

}

export default RecupPos;