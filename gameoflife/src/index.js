import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component() {

    render() {
        return (
            <div>
                <p>Grid</p>
            </div>
        )
    }
}

// Main class
class Main extends React.Component() { 
    
    constructor() {
        super();
        this.state = {
            generation: 0,
        }
    }
    
    render() {
        return (
            <div>
                <h1>The Game Of Life</h1>
                <Grid />
                <h2>Generations: {this.state.generation} </h2>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));