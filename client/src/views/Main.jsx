import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pet,setPets] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[])

    return(
        <table className="table table-danger">
            <thead>
                <tr>
                    <th>Pet Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    pet.map((c,i)=> {
                        return <tr key={i}>
                                    <td>{c.petName}</td>
                                    <td>{c.petType}</td>
                                    <td>{c.petDescription}</td>
                                    <td>
                                        <Link to= {`/edit/${c._id}`}>Edit</Link>
                                        <Link to= {`/pet/${c._id}`}>Details</Link>
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Main;