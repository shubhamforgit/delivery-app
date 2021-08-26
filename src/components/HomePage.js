import { Redirect, Route } from "react-router-dom"
import MainHeader from "./MainHeader"
import PastOrders from "./PastOrders"
import PresentOrders from "./PresentOrders"
import SignIn from "./SignIn"

const HomePage = (props) => {
    return (
        <div>
          <MainHeader signOut={props.signOut} name={props.user}></MainHeader>
          <main>
            <Route path="/past-orders">
              <PastOrders></PastOrders>
            </Route>
            <Route path="/present-orders">
              <PresentOrders></PresentOrders>
            </Route>
            <Route exact path="/">
              <Redirect to="/present-orders" />
            </Route>
            <Route  path="*">
              <Redirect to="/present-orders" />
            </Route>
          </main>
        </div>
      )
}

export default HomePage