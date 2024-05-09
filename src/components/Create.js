import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Create (){
    const [values,setValues] = useState({
        name:'',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event)=> {
        event.preventDefault();
        // Check if any of the input fields are empty
        if (!values.name || !values.email || !values.phone) {
            alert("Please enter all fields");
            return;
        }
        axios.post('http://localhost:3000/users',values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch( err => console.log(err));
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Your Name"
                        onChange={e => setValues({...values, name: e.target.value})}/>
                        
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email"
                        onChange={e => setValues({...values, email: e.target.value})}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="number" name="phone" className="form-control" placeholder="Enter Your Mobile"
                        onChange={e => setValues({...values, phone: e.target.value})}/>

                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-primary ms-4">Back</Link>
                </form>
            </div>
       </div>
    );
}

export default Create;
