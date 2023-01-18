import React from "react";
import {BsFillHeartFill} from "react-icons/bs";
import {Link} from "react-router-dom";


function PlanetCard(props) {
    return (
        <div className="card m-2"
            style={
                {
                    minWidth: "300px",
                    maxHeight: '350px'
                }
        }>
            
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {
                    props.planetName
                }</h5>
                
                <div className='d-flex'>
                    <div className='col-6'>
                        <Link to={"/planeta/detalles/" + props.id}
                            className="btn btn-primary">More Info!</Link>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <button className="btn btn-outline-warning">
                            <BsFillHeartFill/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlanetCard;