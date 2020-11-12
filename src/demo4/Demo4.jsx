import React from 'react';
import {Link} from 'react-router-dom';
import FunctionalComponentState from './FunctionalComponentState';

const Demo4 = () => {
    return (
        <div>
            <FunctionalComponentState/>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default Demo4;
