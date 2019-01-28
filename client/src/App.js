import React, { Component } from 'react'

import Header from "./containers/header"
import Main from "./containers/main"
import { BrowserRouter as Router} from "react-router-dom";

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Main />
                </div>
            </Router>
        )
    }
}