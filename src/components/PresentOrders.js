import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Spinner, Alert } from "react-bootstrap"
import Order from "./Order"

const PresentOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [presentOrders, setPresentOrders] = useState([])
    const [errorOccured, setErrorOccured] = useState(false)

    function getOrders(successCB) {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/delivery_boy/package")
            .then(successCB)
            .catch((err) => {
                setIsLoading(false)
                setErrorOccured(true)
            })
    }

    useEffect(() => {
        getOrders(resp => {
            let presentOrders = resp.data.filter(order => {
                return order.pack.currentPackageDelivery.status !== "DELIVERED" && order.pack.currentPackageDelivery.status !== "CANCELED"
            })
            setPresentOrders(presentOrders)
            setIsLoading(false)
            console.log(resp);
        })
    }, [])

    function onSave(id, status) {
        axios.patch("https://food-app-timesinternet.herokuapp.com/api/delivery_boy/package/status",
            {
                packageDeliveryId: id,
                packageDeliveryStatus: status
            }
        )
    }

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    else if (errorOccured) {
        return <Alert variant="danger">
            Error Occured! (Get Request Failed)
        </Alert>
    }
    else {
        return (
            <div>
                <CardGroup style={{ justifyContent: "center" }}>

                    {
                        presentOrders.map((order, index) => {
                            return <Order onSave={onSave} order={order} key={index} showStatusDropdown={true} showSave={true}></Order>
                        })
                    }
                </CardGroup>
            </div>
        )
    }

}

export default PresentOrders