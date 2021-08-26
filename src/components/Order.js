import { Card, Button, Form, Alert } from 'react-bootstrap';
import OrderDetailPopup from './OrderDetailPopup';
import React, { useState } from 'react';

const Order = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [status, setStatus] = useState(props.order.pack.currentPackageDelivery.status);
    const [showAlert, setShowAlert] = useState(false);

    let itemString = "";
    let items = props.order.cart.cartItemList
    items.forEach((item, index) => {
        if (index === items.length - 1) {
            itemString += " " + item.item.name + " x" + item.quantity
        } else {
            itemString += " " + item.item.name + " x" + item.quantity + ","
        }
    })

    function statusChange(event) {
        //alert("status changed!"+event.target.value)
        setStatus(event.target.value)
    }


    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px", height: "100%" }}>
                <Card.Body>
                    {showAlert &&
                        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                            Status Saved!
                        </Alert>
                    }
                    <Card.Subtitle>Items:</Card.Subtitle>
                    <Card.Text>{itemString}</Card.Text>
                    <Card.Subtitle>Date: </Card.Subtitle>
                    <Card.Text>{props.order.updatedAt}</Card.Text>
                    <Card.Subtitle>Total: </Card.Subtitle>
                    <Card.Text>{props.order.total}</Card.Text>
                    <Card.Subtitle>Restaurant Status: </Card.Subtitle>
                    <Card.Text>{props.order.status}</Card.Text>
                    <Card.Subtitle>Delivery Status: </Card.Subtitle>
                    <Card.Text>{status}</Card.Text>
                    {
                        props.showStatusDropdown &&
                        <Form.Select aria-label="Default select example" onChange={statusChange}>
                            <option>Change Status</option>
                            {
                                props.order.pack.currentPackageDelivery.next?.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </Form.Select>
                    }
                    {
                        props.showSave &&
                        <Button variant="primary" onClick={() => {props.onSave(props.order.pack.currentPackageDelivery.id, status) }}>save</Button>
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