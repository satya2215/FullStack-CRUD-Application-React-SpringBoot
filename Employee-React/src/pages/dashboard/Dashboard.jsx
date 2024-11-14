import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [employees, setEmployees] = useState([]);
  const navigate=useNavigate();


/// it run when browser open 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("error :", error.meessage)
      }
    }

    fetchEmployees();

  }, [])

///  employee data delete based on id
  const handleDelete = async (empId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${empId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setEmployees((prevEmployee) => {
          return prevEmployee.filter((employee) => employee.id !== empId)
        })
      }

      console.log(`employee id ${empId} deleted`)
    } catch (error) {
      console.log("error", error.meessage)
    }
  }

  // employee data update logic
  const handelUpdate=(employeeId)=>{

    navigate(`/employee/${employeeId}`)

  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className='text-center'> Employees</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  employees.map((employee) => {
                    console.log(" id is", employee.id)
                    return (
                      <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.department}</td>
                        <td>
                          <Button variant='outline-secondary' 
                          onClick={()=>{handelUpdate(employee.id)}}
                          >Update</Button> {" "}
                          <Button variant='outline-danger'
                            onClick={() => {
                              handleDelete(employee.id)
                            }}>Delete</Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
