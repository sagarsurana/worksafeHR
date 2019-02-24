import React, { Component } from 'react';
import './HRPage.css';
import Header from '../Header/header.js'

export default class HRPage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ReportTable></ReportTable>
                <ValidatedTable></ValidatedTable>
            </div>
        )
    }
}

class ReportTable extends Component {
    render() {
        let rows = [];
        for (var i = 1; i < 11; i++) {
            var rowid = "row" + i
            rows.push(
                <button key={rowid}>
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
        }
        return (
            <div id="table1">
                {rows}
            </div>
        );
    }
}

class ValidatedTable extends Component {
    render() {
        let rows = [];
        for (var i = 1; i < 11; i++) {
            var rowid = "row" + i
            rows.push(
                <button key={rowid}>
                    <div className="rows">
                        <div className="content">
                            <div className="head">
                                <h2> Report Name </h2>
                                <p className="status2"> Validated </p>
                            </div>
                                <p className="date"> 02/22/19 </p>
                                <p className="validators"> Sagar Surana </p>
                        </div>
                    </div>
                </button>
            )
        }
        return (
            <div id="table2">
                {rows}
            </div>
        );
    }
}