import React, { Component } from 'react'
import { Route} from "react-router-dom";

import Home from "../components/pages/home"
import Login from "../components/pages/login"
import Register from "../components/pages/register"

export default class Main extends Component{
    render(){
        return(
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/login/" component={Login} />
                    <Route path="/register/" component={Register} />
                </div>
        )
    }
}