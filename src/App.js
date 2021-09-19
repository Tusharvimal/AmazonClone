import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe('pk_test_51JZtqlSJn2iS15DsSWgLxxRStHdzezDAgemxYNrX1XdFbzId6TLSdauc1dGDbnP4wpwO8kC3yjgAigjwtCR3Ehxr00WY1ENbqd');

function App() {
  const[{},dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>> " ,authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user just logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
