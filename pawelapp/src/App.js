import React, {Component} from 'react';

import './App.css';
import AppHeader from "./AppHeader";
import AppIntro from "./AppIntro";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader name={this.props.type}/>
                <AppIntro path="WTF?!"/>
            </div>
        );
    }
}

export default App;

