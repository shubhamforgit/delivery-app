import { Button, Modal } from 'react-bootstrap';
const OrderDetailPopup = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order Summary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.order.restaurantName}</h4>
                <p>{props.order.restaurantAddress}</p>
                <p>Status: {props.order.status}</p>
                <h4>Order</h4>
                <ul>
                    {
                        props.order.items.map((item, index) => {
                            return (<div key={index}>
                                <li>{item.name}</li>
                                <ul>
                                    <li>Price: {item.price}</li>
                                    <li>Quantity: {item.quantity}</li>
                                </ul>
                            </div>)
                        })
                    }
                </ul>
                <p>Total: {props.order.total}</p>
                <h4>Order Details</h4>
                <p>Order Number: {props.order.orderNumber}</p>
                <p>Date: {props.order.date}</p>
                <p>Phone Number: {props.order.phoneNumber}</p>
                <p>Address: {props.order.address}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderDetailPopup