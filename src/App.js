import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import AppBar from './components/AppBar';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginViev';
import { authOperations } from './redux/auth'
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

    render() {
        return (
            <Container>
                <AppBar />

                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/contacts" component={ContactsView} />
                </Switch>
            </Container>
        );
    }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
