import { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";


const AddStaffDetail = () => {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
    })
    const [showAlert, setShowAlert] = useState(false);

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function addStaff(event) {
        event.preventDefault();
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            role: '',
        })
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 1500);
    }


    return (
        <div>
            <h1>Add Staff</h1>
            {showAlert &&
                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                    Staff Added!
                </Alert>
            }
            <Form onSubmit={addStaff}>
                <Row className="mb-3">
                    <Col>
                        <Form.Control required name="firstName" placeholder="First name" onChange={handleInputChange} value={formValues.firstName} />
                    </Col>
                    <Col>
                        <Form.Control required name="lastName" placeholder="Last name" onChange={handleInputChange} value={formValues.lastName} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" onChange={handleInputChange} value={formValues.email} />
                </Row>
                <Row className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select required="required" name="role" className="me-sm-2" id="inlineFormCustomSelect" onChange={handleInputChange}>
                        <option>Select...</option>
                        <option value="ROLE_MANAGER">Manager</option>
                    </Form.Select>
                </Row>
                <Button variant="primary" type="submit" style={{ float: 'right' }} >
                    Add Staff
                </Button>
            </Form>
        </div>
    )
}

export default AddStaffDetail