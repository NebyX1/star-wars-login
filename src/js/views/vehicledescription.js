import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";



export const VehicleDescription = props => {
    const [id, setId] = useState("")
    const [infoVehicle, setInfoVehicle] = useState({});
    const params = useParams();
    
    function functVehicle(id) {
        fetch("https://www.swapi.tech/api/vehicles/"+ id)
		.then(res => res.json())
		.then(data => setInfoVehicle(data.result))
		.catch(err => console.error(err))
        setId(id)
    }

    useEffect(() => {
        functVehicle(params.id)
    }, [])

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 containMe me-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} height={"400px"} width={"auto"} alt="" />
            </div>
            <div className='col-6 containMe text-center ms-2'>
                <h1 className='mt-3'>{infoVehicle.properties?.name}</h1>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Character Name</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.name}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Cargo Capacity</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.cargo_capacity}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Consumables</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.consumables}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Cost in Credits</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.cost_in_credits}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Crew Capacity</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.crew}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Manufacturer</h4>
                    <h6 className='text-danger'>{infoVehicle.properties?.manufacturer}</h6></div>
                </div>
            </div>
        </div>
    )
}
VehicleDescription.propTypes = {
    match: PropTypes.object
};