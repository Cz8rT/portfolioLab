import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/rejestracja' component={Register}/>
            </Switch>
        </Router>
    );
}

export default App;
