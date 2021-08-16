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
      const bearerToken = response.data.token.replace("Bearer ", "")
      setToken(bearerToken)
    })
  }

  function signOut() {
    if (confirm("Are you sure you want to sign out?")) {
      setToken()
    }
  }

  if (!token) {
    return <SignIn signIn={signIn} />
  }

  return (
    <div>
      <MainHeader signOut={signOut}></MainHeader>
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
