import React, { useContext } from 'react';
import Trace from './trace';
import RecupPos from './position';
import {TrackContext} from './Tracking';



const Maps = () => {
 

  const {matt, date1, date2} = useContext(TrackContext);
 
  console.log(matt);
  if (matt == undefined) { 
    alert("Aucune voiture sélectionnée, la page va s'actualiser afin que vous puissiez effectuer une nouvelle requête.")
    window.location.reload();
    } 
  else {
  const tabpos = RecupPos(matt,date1,date2);
  console.log(tabpos.length)
 

  return (
    <div className="Maps">
      <Trace tabpos ={tabpos}/>
    </div>
  );}
}

export default Maps;