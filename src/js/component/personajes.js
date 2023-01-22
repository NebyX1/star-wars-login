import React, {useState,useEffect, useContext} from 'react'
import PersonajeCard from './personajecard'
import {Context} from '../store/appContext';

export default function Characters() {
const [personName, setPersonName] = useState([])
const {store, actions} = useContext(Context);

function buscarPersonajes (){
  fetch("https://www.swapi.tech/api/people/")
.then(res => res.json())
.then(data => setPersonName(data.results))
.catch(err => console.error(err))
}

useEffect(() => {
 buscarPersonajes()
},[])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Characters</h2>
      </div>
     
      <div className="d-flex scrollable charaSize">
      {personName.map((personaje)=>{return(<PersonajeCard characterName={personaje.name} key={personaje.url} id={personaje.uid}/>)})}
      </div>
      
    </div>
  )
}
