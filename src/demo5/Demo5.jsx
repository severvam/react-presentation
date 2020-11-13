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
    const {is_login, username} = props;
    return (
        <div>
            <p>User Login Status: {is_login ? 'Logged In as ' + username : 'Anonymous'}</p>
            <div className='fancy-button-margin'>
                <button onClick={(event) => onClickHandler(dispatch, is_login)}>Change state</button>
            </div>
            <Link to='/'>Back to main page</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {DemoReducer: {is_login, username}} = state;

    return {
        is_login,
        username
    };
};

export default connect(mapStateToProps)(Demo5);
