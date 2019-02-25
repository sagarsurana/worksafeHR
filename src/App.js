import React, { Component } from 'react';
import './App.css';
import HRPage from './HRPage/HRPage'
import Report from './Report/report';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HRPage></HRPage>
    );
  }
}

export default App;
