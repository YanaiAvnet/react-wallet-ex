import React, {Component} from 'react'
import ContactService from '../services/ContactService'
import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'


export default class ContactPage extends Component {
    state = {
        contactList: null
    }
    async componentDidMount() {
        const contactList = await ContactService.getContacts()
        this.setState({contactList})
    }
    onFilter = async (term) => {
        const contactList = await ContactService.getContacts({term})
        this.setState({contactList})
    }
    render() {
        const contacts = this.state.contactList
        return (
            <section className="contact-page">
            <h1>Contact Page</h1>
            <ContactFilter onFilter={this.onFilter} />
            {contacts && <ContactList contacts={this.state.contactList} />}
            <hr />
            </section>
        )
    }
}