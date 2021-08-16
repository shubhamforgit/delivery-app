import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


function SignIn(props) {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function signIn(email, password) {
        event.preventDefault()
        props.signIn(email, password)
    }

    return (
        <div style={{ width: "300px", margin: "auto" }}>
            <Form onSubmit={() => signIn(formValues.email, formValues.password)}>
                <h3>Sign In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} value={formValues.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange} value={formValues.password} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ float: 'right' }} >
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

export default SignIn;