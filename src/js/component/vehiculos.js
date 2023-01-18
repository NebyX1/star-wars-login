import React, {useState,useEffect} from 'react'
import VehicleCard from './vehiclecard'

export default function Vehiculos() {
const [vehicleName, setVehicleName] = useState([])

function buscarVehiculos (){
  fetch("https://www.swapi.tech/api/vehicles/")
.then(res => res.json())
.then(data => setVehicleName(data.results))
.catch(err => console.error(err))
}

useEffect(() => {
  buscarVehiculos()
},[])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Vehicle</h2>
      </div>
     
      <div className="d-flex scrollable">
      {vehicleName.map((vehicle)=>{return(<VehicleCard vehicleName={vehicle.name} key={vehicle.url} id={vehicle.uid}/>)})}
      </div>
      
    </div>
  )
}