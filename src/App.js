import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ReactHello from './ReactHello';
import Demo1 from './demo1/Demo1';
import Demo2 from './demo2/Demo2';
import Demo4 from './demo4/Demo4';

function App() {
    return (
        <main>
            <Switch>
                <Route path='/' component={ReactHello} exact/>
                <Route path='/demo1' component={Demo1}/>
                <Route path='/demo2' component={Demo2}/>
                <Route path='/demo4' component={Demo4}/>
            </Switch>
        </main>
    );
}

export default App;
