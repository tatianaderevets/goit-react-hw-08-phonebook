import React from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'

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
    authItem: {
        marginRight: "10px",
        color: 'white'
},

authNav: {
  display: "flex",
  listStyle: "none",
}
}

const AuthNav = () => (
    <>
        <div style={styles.authNav}>
        <Typography variant="h6">
        <NavLink
            to="/register"
            exact
                    style={styles.authItem}
                    
            // activeStyle={styles.activeLink}
        >
           Registration
                </NavLink>
            </Typography>
            
                <NavLink
                    // style={styles.authItem}
            to="/login"
            exact
            // style={{ color: 'white' }}
            // activeStyle={styles.activeLink}
        >
           <LockIcon fontSize="large" style={{ color: 'white' }} />
                </NavLink>
            
            </div>
    </>
);

export default AuthNav;