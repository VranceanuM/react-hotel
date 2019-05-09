import React from "react";
// import components & pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='mt-4'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rooms' component={Rooms} />
            <Route exact path='/rooms/:slug' component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
