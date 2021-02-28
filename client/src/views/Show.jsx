import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
const Show = props => {
    const [pet,setPet] =useState({
        petName: "",
        petType: "",
        petDescription: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [props])
    const destroyPet = () => {
        Axios.delete(`http://localhost:8000/api/destroy/pets/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto p-5 col-6 bg-dark text-warning">
            <h2>Pet Shelter</h2>
            <h3>Details about {pet.petName}</h3>
            <ul className="list-group text-danger">
                <li className="list-group-item">Pet Type: {pet.petType}</li>
                <li className="list-group-item">{pet.petDescription}</li>
                <li className="list-group-item">{pet.skillOne}</li>
                <li className="list-group-item">{pet.skillTwo}</li>
                <li className="list-group-item">{pet.skillThree}</li>

            </ul>
            <button className="btn btn-Light link btn-outline-warning m-5"onClick={destroyPet}> Adopt {pet.petName} Now!</button>
        </div>
    );

}

export default Show;