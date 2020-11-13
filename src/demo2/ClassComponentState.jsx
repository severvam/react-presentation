import React from 'react';

class ClassComponentState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <h1>Time is { this.state.date.toLocaleTimeString() }</h1>;
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

}

export default ClassComponentState;
