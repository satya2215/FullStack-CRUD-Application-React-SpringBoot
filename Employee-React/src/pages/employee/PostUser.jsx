import React from 'react'
import './PostUser.css'


import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PostUser() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    })
    // handel input change when user type some thing
    const handelInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, })
    }
    // this will navigate after complition of code
    const navigate = useNavigate();

    //  api to handel when submit the data store in database
    const handelSubmit = async (e) => { // asynchronious function
        e.preventDefault();

        console.log(formData)

        try {
            const response = await fetch("http://localhost:8080/api/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log("Employee created:", data)
            
            navigate("/")

        } catch (error) {
            console.log("error create", error.message)
        }

    }



    return (
        <>
            <div className="center-form">
                <h1>Post New Employee</h1>
                <Form onSubmit={handelSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="enter name"
                            value={formData.name}
                            onChange={handelInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="enter email"
                            value={formData.email}
                            onChange={handelInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="number"
                            name="phone"
                            placeholder="enter phone number"
                            value={formData.phone}
                            onChange={handelInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="department"
                            placeholder="enter department name"
                            value={formData.department}
                            onChange={handelInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Post Employee</Button>

                </Form>
            </div>
        </>
    )
}
