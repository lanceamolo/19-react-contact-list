import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import css from "./main.css"
import usersJSON from "./users.json"
import Home from "./Home.js"
import UserInfo from "./UserInfo.js"

// READ ME
// Using the images below as a template/guide - build a simple contact list
// On your "home" view, show a list of all of the users in your user array.
// When I click on any of the users, I'm routed to a view with that user's info.
// There should be a back button or icon to take me back to the home (list) view.
// The URL should also change to reflect the current resource I'm viewing.

// TO DO List
// import Router, useState: DONE
// create Custom Component of home page showing contact list: DONE
// create h1 saying my peeps: DONE
// import users thumbnail picture and their names: DONE

// create Custom Component to display contact info
// import users large picture, name, email, phone number and locations

// set up Router with Switch
// set contact list as <Route exact path="/"></Route>
// set each user with <Route path="/user/:id">

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/UserInfo/:id">
          <UserInfo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
