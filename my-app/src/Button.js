import React from 'react';
export default class ButtonToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    toggle = () => {
        this.setState({ toggle: !(this.state.toggle) });
    }


    render() {
        return (
            <div>
                <button onClick={this.toggle}>Click</button>

                Toggle Status: { this.state.toggle ? "ON" : "OFF"}
            </div>
        )
    }
}