import React from 'react';

import WelcomeComponent1 from './WelcomeComponent1';
import WelcomeComponent2 from './WelcomeComponent2';
import WelcomeComponent3 from './WelcomeComponent3';
import WelcomeComponent4 from './WelcomeComponent4';
import WelcomeComponent5 from './WelcomeComponent5';
import {Link} from 'react-router-dom';

const Demo1 = () => {
    return (
        <div>
            <WelcomeComponent1 name='4finance Developers'/>
            <WelcomeComponent2 name='4finance Developers'/>
            <WelcomeComponent3 name='4finance Developers'/>
            <WelcomeComponent4 name='4finance Developers'/>
            <WelcomeComponent5 name='4finance Developers'/>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

export default Demo1;
