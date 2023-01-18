import React, {useState,useEffect} from 'react'
import PlanetCard from './planetcard'

export default function Planetas() {
const [planetName, setPlanetName] = useState([])

function buscarPlanetas (){
  fetch("https://www.swapi.tech/api/planets/")
.then(res => res.json())
.then(data => setPlanetName(data.results))
.catch(err => console.error(err))
}

useEffect(() => {
  buscarPlanetas()
},[])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Planets</h2>
      </div>
     
      <div className="d-flex scrollable">
      {planetName.map((planet)=>{return(<PlanetCard planetName={planet.name} key={planet.url} id={planet.uid} />)})}
      </div>
      
    </div>
  )
}