import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const OrderDetailPopup = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.order.cart.cartItemList)
    }, [])

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
                <h4>Restaurant Contact Details</h4>
                <p><span style={{fontWeight: "500"}}>Name</span>: {props.order.restaurant.restaurantDetail.name}</p>
                <p><span style={{fontWeight: "500"}}>Address</span>: {props.order.restaurant.restaurantDetail.address.line1},{props.order.restaurant.restaurantDetail.address.line2},{props.order.restaurant.restaurantDetail.address.city},{props.order.restaurant.restaurantDetail.address.state}-{props.order.restaurant.restaurantDetail.address.pincode}</p>
                <h4>Order Items</h4>
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <div>
                                    <li><span style={{fontWeight: "500"}}>{item.item.name}</span></li>
                                    <ul>
                                        <li><span style={{fontWeight: "500"}}>Price</span>: {item.price}</li>
                                        <li><span style={{fontWeight: "500"}}>Quantity</span>: {item.quantity}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </ul>
                <p><span style={{fontWeight: "500"}}>Order Total</span>: &#8377;{props.order.total}</p>
                <h4>Order Details</h4>
                <p><span style={{fontWeight: "500"}}>Order Number</span>: {props.order.id}</p>
                <p><span style={{fontWeight: "500"}}>Date</span>: {props.order.updatedAt}</p>
                <h4>Customer Contact Details</h4>
                <p><span style={{fontWeight: "500"}}>Customer Name</span>: {props.order.contact.contactFirstName} {props.order.contact.contactLastName}</p>
                <p><span style={{fontWeight: "500"}}>Mobile</span>: {props.order.contact.contactNumber}</p>
                <p><span style={{fontWeight: "500"}}>Address</span>: {props.order.address.line1},{props.order.address.line2},{props.order.address.city},{props.order.address.state}-{props.order.address.pincode}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderDetailPopup