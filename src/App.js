import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css'
import PastOrders from './components/PastOrders';
import PresentOrders from './components/PresentOrders';
import SignIn from './components/SignIn';
import { signInUser } from './axios/Service';


const App = () => {

  const [token, setToken] = useState();

  function signIn(email, password) {
    signInUser(email, password, (response) => {
      setToken(response.data.token)
    })
  }

  if (!token) {
    return <SignIn setToken={setToken} signIn={signIn} />
  }

  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/past-orders">
          <PastOrders></PastOrders>
        </Route>
        <Route path="/present-orders">
          <PresentOrders></PresentOrders>
        </Route>
        <Route path="/sign-in">
          <SignIn></SignIn>
        </Route>
      </main>
    </div>
  )

};

export default App;
