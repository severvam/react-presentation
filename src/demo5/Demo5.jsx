import './Demo5.css';

import React from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {showLogin, showLogout} from '../js/action/DemoAction';


const onClickHandler = (dispatch, login) => {
    if (!login) {
        dispatch(showLogin());
    } else {
        dispatch(showLogout());
    }
};

const Demo5 = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <p>User Login Status: {props.is_login ? 'Logged In' : 'Anonymous'}</p>
            <div className='fancy-button-margin'>
                <button onClick={(event) => onClickHandler(dispatch, props.is_login)}>Change state</button>
            </div>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {DemoReducer: {is_login}} = state;

    return {
        is_login
    };
};

export default connect(mapStateToProps)(Demo5);
