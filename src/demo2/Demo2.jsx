import React from 'react';
import ClassComponentState from './ClassComponentState';
import {Link} from 'react-router-dom';

const Demo2 = () => {
    return (
        <div>
            <ClassComponentState/>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default Demo2;
