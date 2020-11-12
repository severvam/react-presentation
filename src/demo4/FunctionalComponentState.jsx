import React, {useEffect, useState} from 'react';

const FunctionalComponentState = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(
            () => setDate(new Date()),
            1000
        );

        return () => clearInterval(timer);
    });

    return <h1>Time is { date.toLocaleTimeString() }</h1>;
};

export default FunctionalComponentState;
