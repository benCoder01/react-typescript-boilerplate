import * as React from "react";

export class Hello extends React.Component {
    state = {
        number: 1
    }

    handleButton = () => {
        this.setState({number: this.state.number + 1 });
    }

    render() {
        return(
            <div>
                <h1>Addition</h1>
                <button onClick={this.handleButton}>Click Me</button>
                <p>{this.state.number}</p>
            </div>
        );
    }
}