import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactHello from './ReactHello';
import Demo1 from './demo1/Demo1';
import Demo2 from './demo2/Demo2';
import Demo4 from './demo4/Demo4';
import Demo5 from './demo5/Demo5';
import store from './js/store';
import {Provider} from 'react-redux';


function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo'/>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' component={ReactHello} exact/>
                            <Route path='/demo1' component={Demo1}/>
                            <Route path='/demo2' component={Demo2}/>
                            <Route path='/demo4' component={Demo4}/>
                            <Route state={store.getState()} path='/demo5' component={Demo5}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </header>
        </div>
    );
}

export default App;
