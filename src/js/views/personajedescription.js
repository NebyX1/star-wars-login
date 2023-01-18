import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";



export const CharacterDescription = props => {
    const [id, setId] = useState("")
    const [infoCharacter, setInfoCharacter] = useState({});
    const params = useParams();
    
    function functCharacter(id) {
        fetch("https://www.swapi.tech/api/people/"+ id)
		.then(res => res.json())
		.then(data => setInfoCharacter(data.result))
		.catch(err => console.error(err))
        setId(id)
    }

    useEffect(() => {
        functCharacter(params.id)
    }, [])

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 containMe me-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} height={"400px"} width={"auto"} alt="" />
            </div>
            <div className='col-6 containMe text-center ms-2'>
                <h1 className='mt-3'>{infoCharacter.properties?.name}</h1>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Character Name</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.name}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Eye Color</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.eye_color}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Gender</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.gender}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Hair Color</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.hair_color}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Height</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.height}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Skin Color</h4>
                    <h6 className='text-danger'>{infoCharacter.properties?.skin_color}</h6></div>
                </div>
            </div>
        </div>
    )
}

CharacterDescription.propTypes = {
    match: PropTypes.object
};