import React, { Component } from 'react';
import './HRPage.css';
import Header from '../Header/header.js'
import Report from '../Report/report.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import FirebaseService from '../Firebase/firebaseService';

export default class HRPage extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/report-page" component={Report}></Route>
                </Switch>
                <Header></Header>
                <ReportTable></ReportTable>
                <ResolvedTable></ResolvedTable>
            </div>
        )
    }
}

class ReportTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false
        };
        this.firebase = new FirebaseService();
    }

    handleClick() {
        this.setState({shouldRedirect: true});
    };

    render() {
        let statuses = ["Awaiting Review", "Validated", "Mediation", "Formal Consequences", "Final Investigative Report Submitted"];
        let rows = [];
        for(var j = 0; j < statuses.length; j++) {
            let data = this.firebase.getByStatus(statuses[j]);
            console.log(data.length);
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                var rowid = "row" + i
                rows.push(
                    <button key={rowid} onClick={() => this.handleClick()}> 
                        <div className="rows">
                            <div className="content">
                                <div className="head">
                                    <h2> Report Name </h2>
                                    <p className="status"> Awaiting Response </p>
                                </div>
                                    <p className="date"> 02/22/19 </p>
                                    <p className="reporters"> Sagar Surana </p>
                            </div>
                        </div>
                    </button>
                )
                if (this.state.shouldRedirect) {
                    return <Redirect push to={'/report-page'} />
                }
            }
        }
        return (
            <div id="table1">
                {rows}
            </div>
        );
    }
}

class ResolvedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false
        };
        this.firebase = new FirebaseService();
    }

    handleClick() {
        this.setState({shouldRedirect: true});
    };

    render() {
        let rows = [];
        let resData = this.firebase.getByStatus("Resolved");
        console.log(resData);
        console.log(resData.length);
        for (var i = 0; i < 11; i++) {
            var rowid = "row" + i
            rows.push(
                <button key={rowid} onClick={() => this.handleClick()}>
                    <div className="rows">
                        <div className="content">
                            <div className="head">
                                <h2> Sagar Surana </h2>
                                <p className="status2"> Resolved </p>
                            </div>
                                <p className="date"> 02/22/19 </p>
                                <p className="validators"> Sagar Surana </p>
                        </div>
                    </div>
                </button>
            )
            if (this.state.shouldRedirect) {
                return <Redirect push to={'/report-page'} />
            }
        }
        return (
            <div id="table2">
                {rows}
            </div>
        );
    }
}