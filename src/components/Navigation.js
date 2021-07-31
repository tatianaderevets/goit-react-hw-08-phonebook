import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

import { Typography, CssBaseline } from '@material-ui/core';
import { Home } from '@material-ui/icons';

// const styles = {
//     link: {
//         display: 'inline-block',
//         textDecoration: 'none',
//         padding: 12,
//         fontWeight: 700,
//         color: '#2A363B',
//     },
//     activeLink: {
//         color: '#E84A5F',
//     },
// };
const styles = {
    navigation :{
  display: "flex",
},

navigationItem: {
  marginRight: "20px",
  color: "white",
}
}
const Navigation = ({isAuthenticated}) => (
    <nav style={styles.navigation}>
        <CssBaseline />
        <NavLink style={styles.navigationItem} exact to="/">
        <Home fontSize="large" style={{ color: 'white' }} />
      </NavLink>

        {isAuthenticated && (
            <Typography variant="h6">
          <NavLink style={styles.navigationItem} exact to="/contacts">
            Phonebook
          </NavLink>
        </Typography>)}
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
