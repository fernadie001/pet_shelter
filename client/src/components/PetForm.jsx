import React from 'react';


const PetForm = props => {
    const {inputs,errors,handleInputChange,handleSubmit,submitValue} = props;
    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="petName"> Pet Name:</label>
                <input type="text" name="petName" value={inputs.petName} onChange= {handleInputChange}className="form-control"/>
                <span className="text-danger">{errors.petName.message ? errors.petName.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="petType"> Pet Type:</label>
                <input type="text" name="petType" value={inputs.petType} onChange= {handleInputChange}className="form-control"/>
                <span className="text-danger">{errors.petType.message ? errors.petType.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="petDescription"> Pet Description:</label>
                <input type="text" name="petDescription" value={inputs.petDescription} onChange= {handleInputChange}className="form-control"/>
                <span className="text-danger">{errors.petDescription.message ? errors.petDescription.message : ""}</span>
            </div>
            <p>(Optional Skills to add)</p>
            <div className="form-group">
                <label htmlFor="skillOne"> skill 1:</label>
                <input type="text" name="skillOne" value={inputs.skillOne} onChange= {handleInputChange}className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="skillTwo"> skill 2:</label>
                <input type="text" name="skillTwo" value={inputs.skillTwo} onChange= {handleInputChange}className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="skillThree"> skill 3:</label>
                <input type="text" name="skillThree" value={inputs.skillThree} onChange= {handleInputChange}className="form-control"/>
            </div>
            <input type="submit" value={submitValue} className="btn btn-warning"/>
        </form>
    );
}

export default PetForm;