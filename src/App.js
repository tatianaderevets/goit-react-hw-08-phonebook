import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth'
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginViev'));
const ContactsView = lazy(() => import('./views/ContactsView'));



  class App extends Component {
    componentDidMount() {
      this.props.onGetCurretnUser();
    }

    render() {
      return (
        <Container>
          <AppBar />
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegisterView} />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginView} />
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactsView}
                
              />
            </Switch>
          </Suspense>
        </Container>
      );
    }
  }

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
