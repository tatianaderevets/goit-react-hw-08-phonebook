const getIsAuthenticated = state => state.auth.token;

const getUsername = state => state.auth.user.name;


export default {
    getIsAuthenticated,
    getUsername,
};