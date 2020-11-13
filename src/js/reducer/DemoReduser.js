import {USER_LOGIN, USER_LOGOUT} from '../action/DemoAction';

const DEFAULT_LOGIN_STATE = {
    is_login: false,
    username: ''
};

const reducer = () => {
    return (state = DEFAULT_LOGIN_STATE, action) => {
        switch (action.type) {
            case USER_LOGIN:
                return {is_login: true, username: action.username};
            case USER_LOGOUT:
                return {is_login: false, username: ''};
            default:
                return state;
        }
    };
};

export default reducer();
