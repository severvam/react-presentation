export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function showLogin() {
    return {type: USER_LOGIN, username: '4finance-developer'};
}

export function showLogout() {
    return {type: USER_LOGOUT};
}
