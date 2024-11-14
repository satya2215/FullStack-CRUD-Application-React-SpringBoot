import React, { useEffect, useState } from 'react'
import './UpdateUser.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateUser() {

    const { id } = useParams();
    const navigate = useNavigate();
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

    useEffect(() => {
        const fetchEmployee = async (id) => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);
            }
            catch (error) {
                console.error("error message", error.message)
            }
        }
        fetchEmployee(id);
    }, [id])


    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/employee/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to update employee');
            }


            const data = await response.json();
            navigate('/')

        }
        catch (error) {
            console.log(error.message);

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
                    <Button variant="primary" type="submit" className="w-100">Edit Employee</Button>

                </Form>
            </div>
        </>
    )
}
