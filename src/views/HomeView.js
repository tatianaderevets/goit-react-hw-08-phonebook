import React from 'react';
import img from '../images/happy_woman.png'
import { CssBaseline, Typography, Container } from '@material-ui/core';


// const styles = {
//     container: {
//         minHeight: 'calc(100vh - 50px)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontWeight: 500,
//         fontSize: 48,
//         textAlign: 'center',
//     },
// };

const HomeView = () => (
    <Container maxWidth="sm">
         <CssBaseline />
        <>
           <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            style={{ marginTop: '60px' }}
          >
            Phonebook
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hi there!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            My name is Tania and this is my first application! 
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
                Try to use it, but first register!
                
            </Typography>
            <img src={img} alt="happy girl"width="280px" />

        {/* <h1 style={styles.title}>
            Приветственная страница нашего сервиса{' '}
            <img src={img} width="180px" /> */}
            {/* <span role="img" aria-label="Иконка приветствия">
                💁‍♀️
            </span> */}
        {/* </h1> */}
        </>
        </Container>
);

export default HomeView;
