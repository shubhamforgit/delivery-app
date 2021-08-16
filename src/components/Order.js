import { Card, Button, Form, Alert } from 'react-bootstrap';
import OrderDetailPopup from './OrderDetailPopup';
import React, { useState } from 'react';

const Order = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [status, setStatus] = useState(props.order.status);
    const [showAlert, setShowAlert] = useState(false);

    let itemString = "";
    let items = props.order.items
    items.forEach((item, index) => {
        if (index === items.length - 1) {
            itemString += " " + item.name + " x" + item.quantity
        } else {
            itemString += " " + item.name + " x" + item.quantity + ","
        }
    })

    function statusChange(event) {
        setStatus(event.target.value)
    }


    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Body>
                    {showAlert &&
                        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                            Status Saved!
                        </Alert>
                    }

                    <Card.Subtitle>{props.order.restaurantName}</Card.Subtitle>
                    <Card.Text>{props.order.restaurantAddress}</Card.Text>
                    <Card.Subtitle>Items:</Card.Subtitle>
                    <Card.Text>{itemString}</Card.Text>
                    <Card.Subtitle>Date: </Card.Subtitle>
                    <Card.Text>{props.order.date}</Card.Text>
                    <Card.Subtitle>Total: </Card.Subtitle>
                    <Card.Text>{props.order.total}</Card.Text>
                    <Card.Subtitle>Status: </Card.Subtitle>
                    <Card.Text>{status}</Card.Text>
                    {
                        props.showStatusDropdown &&
                        <Form.Select aria-label="Default select example" onChange={statusChange}>
                            <option>Change Status</option>
                            <option value="Assigned">Assigned</option>
                            <option value="Reaching Restaurant">Reaching Restaurant</option>
                            <option value="Picked Up">Picked Up</option>
                            <option value="On The Way">On The Way</option>
                            <option value="Delivered" >Delivered</option>
                            <option value="Cancel">Cancel</option>
                        </Form.Select>
                    }
                    {
                        props.showSave &&
                        <Button variant="primary" onClick={() => { setShowAlert(true); props.onSave(props.order.id, status) }}>save</Button>
                    }
                    <Button variant="primary" onClick={() => setModalShow(true)}>Expand</Button>
                </Card.Body>
            </Card>
            <OrderDetailPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
                order={props.order}
            />
        </div>
    )
}

export default Order