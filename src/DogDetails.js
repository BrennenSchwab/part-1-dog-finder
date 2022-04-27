import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogDetails({dog}) {
    // need to render individual dog, so a function choosing hte approprate dog is needed.

    if (!dog) return <Redirect to="/dogs"/>;

    return(
        <div className="row">
            <div className="col align-items-center">
                <img src={dog.src} alt={dog.name}/>
                <h2>{dog.name}</h2>
                <h2>Age: {dog.age} yrs</h2>
                <ul>
                    {dog.facts.map((fact, i) =>(
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to ="/dogs">Back</Link>
            </div>
        </div>
    );
}

export default DogDetails;