const demo3 = () => {

    /**
     * Do Not Modify State Directly
     */

    // Wrong
    this.state.clickCount = 10;

    // Correct
    this.setState({clickCount: 10});


    /**
     * State Updates May Be Asynchronous
     */

    // Wrong
    this.setState({
        visitorsCount: this.state.visitorsCount + this.props.visits,
    });

    // Correct
    this.setState((state, props) => ({
        visitorsCount: state.visitorsCount + props.visits
    }));


    /**
     * State Updates are Merged
     */

    this.state = {
        firstName: 'Илона',
        lastName: 'НейроТП',
        link: 'https://www.instagram.com/neural_tp'
    };

    const componentDidMount = () => {
        this.setState({firstName: 'Витя', lastName: 'Камушки'});
    };
    componentDidMount();
};

export default demo3;


