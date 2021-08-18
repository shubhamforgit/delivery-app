import { useEffect, useState } from "react"
import { Alert, CardGroup, Spinner } from "react-bootstrap"
import { getOrders } from "../axios/Service"
import Order from "./Order"

const PastOrders = () => {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {
        getOrders(orders => {
            let PAST_ORDERS = orders.data.filter(order => (order.status === "Delivered") || (order.status === "Cancel"))
            setOrders(PAST_ORDERS)
            setIsLoading(false)
        }, () => {
            console.log("error!");
            setErrorOccured(true)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else if (errorOccured) {
        return (
            <Alert variant="danger">
                Error Occured! (Get Request Failed)            
            </Alert>
        )
    } else if (orders.length === 0) {
        return (
            <Alert variant="info">
                No History Available            
            </Alert>
        )
    }

    return (

        <CardGroup style={{ justifyContent: "center" }}>
            {
                orders.map((order, index) => {
                    return <Order order={order} key={index} showSave={false} showStatusDropdown={false} />
                })
            }
        </CardGroup>
    )
}

export default PastOrders