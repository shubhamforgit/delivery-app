import { Card } from "react-bootstrap"

const StaffDetail = (props) => {
    return (
        <div>
            <h1>Staff Detail</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Staff Detail</Card.Title>
                    <Card.Subtitle>First Name:</Card.Subtitle>
                    <Card.Text>{props.staff.firstName}</Card.Text>
                    <Card.Subtitle>Last Name: </Card.Subtitle>
                    <Card.Text>{props.staff.firstName}</Card.Text>
                    <Card.Subtitle>Email: </Card.Subtitle>
                    <Card.Text>{props.staff.email}</Card.Text>
                    <Card.Subtitle>Role: </Card.Subtitle>
                    <Card.Text>{props.staff.role}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default StaffDetail