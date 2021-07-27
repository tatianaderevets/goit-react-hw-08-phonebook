// import './App.css';
import { Component } from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import Form from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import { contactsOperation, contactsSelectors } from '../redux/contacts'


// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };


class ContactsView extends Component {

  state = {

  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {


    return (
      <Container>
        <div >
          <h1>Phonebook</h1>
          <Form />

          <h2>Contacts</h2>
          <Filter />
          {this.props.isLoadingcontacts && <h2>Loading...</h2>}

          <ContactsList />

        </div>
      </Container>

    );
  }
}

const mapStateToProps = state => ({
  isLoadingcontacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
