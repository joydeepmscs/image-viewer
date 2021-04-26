import React, {Component, Fragment} from 'react'
import {Route, Switch} from "react-router-dom"; // For redirection
import Login from "./login/Login";
import Home from './home/Home';
import Profile from './profile/Profile';

class ImageViewerController extends Component {

    constructor() {
        super();
        this.baseUrl = "https://graph.instagram.com/";
    }

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' render={(props) => <Login {...props} />}/>
                    <Route exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl}/>}/>
                    <Route exact path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl}/>}/>
                </Switch>
            </Fragment>
        )
    }
}

export default ImageViewerController;