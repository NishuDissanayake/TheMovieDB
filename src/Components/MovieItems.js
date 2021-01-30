import React from 'react'
import "./Movicard.css";

function MovieItems({item}) {
    const baseurl=""
    return (
        <div className="card col-lg-3 moviecard">
            <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img inside"/>
            <div className="card-body">
                <h3>Rating:{item.vote_average}</h3>
            </div> 
        </div>
    )
}

export default MovieItems
