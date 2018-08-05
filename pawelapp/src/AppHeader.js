import React, {} from 'react';
import logo from './logo.svg';

function AppHeader(props) {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to {props.name}</h1>
    </header>;
}

export default AppHeader;