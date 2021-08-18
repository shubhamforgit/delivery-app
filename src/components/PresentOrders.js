import { useEffect, useState } from "react"
import { Alert, CardGroup, Spinner } from "react-bootstrap"
import { getOrders, updateStatus } from "../axios/Service"
import Order from "../components/Order"


const PresentOrders = (props) => {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {

        getOrders(orders => {
            let PRESENT_ORDERS = orders.data.filter(order => (order.status !== "Delivered") && (order.status !== "Cancel"))
            setOrders(PRESENT_ORDERS)
            setIsLoading(false)
        }, () => {
            console.log("error!");
            setErrorOccured(true)
            setIsLoading(false)
        })
    }, [])

    function changeStatus(id, status) {
        updateStatus(id, status, () => {
            let index = orders.findIndex(order => order.id === id)
            let tempOrders = [...orders]
            tempOrders[index].status = status
            setOrders([...tempOrders])
        }, () => {
            alert("Could not update the status!")
        })
    }


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
                No Orders Assigned            
            </Alert>
        )
    }
    return (
        <div>
            <CardGroup style={{ justifyContent: "center" }}>
                {
                    orders.map((order, index) => {
                        return <Order order={order} onSave={changeStatus} key={index} showSave={true} showStatusDropdown={true} />
                    })
                }
            </CardGroup>
        </div>

    )
}

export default PresentOrders