import React from "react";
import { Link } from "react-router-dom";


function DogList({dogs}){
    return(
    <div>
        <div className="row">
            <div className="col text-center">
                <h1>Click on the dog for more info!</h1>
            </div>
        </div>
        <div className="row">
            {dogs.map(dog => (
                <div key={dog.name} className="col text-center">
                    <img src={dog.src} alt={dog.name}/>
                    <h2><Link to={`/dogs/${dog.name.toLowerCase()}`}>
                        {dog.name}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    </div>
    );
}
export default DogList;
