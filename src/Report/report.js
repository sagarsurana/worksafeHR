import React, { Component } from 'react';
import './report.css';
import Header from '../Header/header.js';

export default class Report extends Component {

    render() {
        return(
            <div>
                <Header></Header>
                <SingleReport></SingleReport>
            </div>
        );
    }
}

class SingleReport extends Component {
    render() {
        return(
            <div>
                <Form></Form>
            </div>
        );
    }
}

class Form extends Component {
    render() {
        return(
            <div className="form">
                <div id="header">
                    <h3>
                    Report Name
                    </h3>
                    <div>
                        <select>
                            <option selected="selected" value="validated">Validated</option>
                            <option value="tbd">TBD</option>
                        </select>
                    </div>
                </div>
                <div className="reponse"> Name:
                    <p> response </p>
                </div>
                <div className="reponse"> <p> Date: </p>
                    <p> response </p>
                </div>
                <div className="reponse"> Type: 
                    <p> response </p>
                </div>
                <div className="reponse"> Description:
                    <p> response </p>
                </div>
                <div className="reponse"> Your Response:
                    <p> response </p>
                </div>
            </div>
        );
    }
}