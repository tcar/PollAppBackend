import React, { Component } from 'react'

import Header from "./containers/header"
import Main from "./containers/main"

export default class App extends Component{
    render(){
        return(
            <div>
                <h1>
                    <Header />
                    <Main />
                </h1>
            </div>
        )
    }
}