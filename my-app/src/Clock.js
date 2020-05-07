import React from 'react';

class ClockDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div>
                <h1>This is the time</h1>
                <p>This is the time {this.state.date.toLocaleTimeString()}</p>
            </div>

        );
    }

}

export default ClockDetail;