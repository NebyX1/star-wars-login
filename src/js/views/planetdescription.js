import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";
import PlanetInfo from "/workspace/react-hello-webapp/src/resourses/planetas.json";



export const PlanetDescription = props => {
    const [id, setId] = useState("")
    const [infoPlanetas, setInfoPlanetas] = useState({});
    const params = useParams();


    function functPlanetas(id) {
        fetch("https://www.swapi.tech/api/planets/"+id)
		.then(res => res.json())
		.then(data => setInfoPlanetas(data.result))
       
		.catch(err => console.error(err))
        setId(id)
    }

    useEffect(() => {
        functPlanetas(params.id)
console.log(params.id)
    }, [])


    let posicion = params.id -1;

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 containMe me-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} height={"400px"} width={"auto"} alt="" />
            </div>
            <div className='col-6 containMe text-center ms-2'>
                <h1 className='mt-3'>{infoPlanetas.properties?.name}</h1>
                <p>{PlanetInfo[posicion].description}</p>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Planet Name</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.name}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Climate</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.climate}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Population</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.population}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Orbital Period</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.orbital_period}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Rotation Period</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.rotation_period}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Diameter</h4>
                    <h6 className='text-danger'>{infoPlanetas.properties?.diameter}</h6></div>
                </div>
            </div>
        </div>
    )
}
PlanetDescription.propTypes = {
    match: PropTypes.object
};