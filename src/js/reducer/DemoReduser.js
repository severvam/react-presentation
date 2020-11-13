import {USER_LOGIN, USER_LOGOUT} from '../action/DemoAction';

const DEFAULT_LOGIN_STATE = {
    is_login: false
};

const reducer = () => {
    return (state = DEFAULT_LOGIN_STATE, action) => {
        switch (action.type) {
            case USER_LOGIN:
                return {is_login: true};
            case USER_LOGOUT:
                return {is_login: false};
            default:
                return state;
        }
    };
};

export default reducer();
