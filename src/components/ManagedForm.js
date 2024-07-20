import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ManagedForm() {

const [ formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
});

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted data: ", formData);
    }

    function handleChange (event){
        const {name, value} = event.target;
        setFormData((prevState) => ( 
            {...prevState,
        [name]: value,
    }));
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" 
                   name="name"
                   value={formData.name}
                   onChange={handleChange} 
            />
            <br />
            <label>Email: </label>
            <input type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange} 
                    
            />
            <br />
            <label>Password: </label>
            <input type="password" 
                    id="password"
                    value={formData.password}
                    onChange={handleChange}         
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ManagedForm;