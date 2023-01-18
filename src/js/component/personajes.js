import React, {useState,useEffect} from 'react'
import PersonajeCard from './personajecard'

export default function Characters() {
const [personName, setPersonName] = useState([])

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
     
      <div className="d-flex scrollable">
      {personName.map((personaje)=>{return(<PersonajeCard characterName={personaje.name} key={personaje.url} id={personaje.uid}/>)})}
      </div>
      
    </div>
  )
}
