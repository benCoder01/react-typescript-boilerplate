import * as React from "react";

export class World extends React.Component {
    state = {
        number: 1
    }

    handleButton = () => {
        this.setState({number: this.state.number - 1 });
    }

    render() {
        return(
            <div>
                <h1>Subtraction</h1>
                <button onClick={this.handleButton}>Click Me</button>
                <p>{this.state.number}</p>
            </div>
        );
    }
}