import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css'
import PastOrders from './components/PastOrders';
import PresentOrders from './components/PresentOrders';
import SignIn from './components/SignIn';
import { signInUser } from './axios/Service';
import AddStaffDetail from './components/AddStaffDetail';
import StaffDetail from './components/StaffDetail';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import HomePage from './components/HomePage';
import axios from 'axios';

if (typeof window !== 'undefined' && localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}

const App = () => {

  const [token, setToken] = useState();
  const [user, setUser] = useState("");

  useEffect(() => {
    setToken(getToken())
  }, [])

  function getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("token")
    } else {
      return undefined
    }
  }

  function signIn(email, password) {
    signInUser(email, password, (response) => {
      console.log(response);
      const bearerToken = response.data.token
      localStorage.setItem("token", bearerToken)
      setToken(bearerToken)
      setUser(response.data.user.firstName)
    }, () => {
      alert("Could Not Sign In!!")
    })
  }

  function signOut() {
    if (confirm("Are you sure you want to sign out?")) {
      if (typeof window !== undefined) {
        localStorage.removeItem('token')
      }
      setToken()
    }
  }

  if (!token) {
    return <SignIn signIn={signIn} />
  } else {
    return <HomePage signOut={signOut} user={user}></HomePage>
  }

};

export default App;
