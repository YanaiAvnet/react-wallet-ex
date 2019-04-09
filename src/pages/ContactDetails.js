import React, {Component} from 'react'
import ContactService from '../services/ContactService'

export default class ContactDetails extends Component {
    state = {
        contact: null
    }
    async componentDidMount() {
        const contact = await ContactService.getContactById('5a56640243427b8f8445231e')
        this.setState({contact})
    }
    render() {
        const contact = this.state.contact
        return (contact) ? (
            <section className="contact-details">
                <h1>Contact Details Page</h1>
                    <h3>{contact.name}</h3>
                    <h5>{contact.email}</h5>
                    <h5>{contact.phone}</h5>
                    <img src={`https://api.adorable.io/avatars/${contact._id}`} />
                <hr />
            </section>
        ) : null
    }
}