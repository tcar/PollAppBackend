import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link} from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/login" style={{ textDecoration: 'none', color:"white"}}>
                        <Button color="inherit">Login</Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none', color:"white"}}>
                        <Button color="inherit">Register</Button>
                        
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}