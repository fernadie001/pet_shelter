import React, {useState,useEffects, useEffect} from "react";
import Axios from 'axios';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm'

const Edit = props => {
    const initialPet = {
        petName: "",
        petType: "",
        petDescription: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    }
    const [edit,setEdit] = useState(initialPet);

    const [errors,setErrors] = useState(initialPet);

    useEffect(()=> {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    },[props])
    
    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/pets/${edit._id}`, edit)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div>
            <h2>Edit our pet:</h2>
            <PetForm
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Pet"
            />
        </div>
    );
}

export default Edit;