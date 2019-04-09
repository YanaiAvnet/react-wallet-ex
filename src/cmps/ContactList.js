import React from 'react'
import ContactPrev from './ContactPrev'

export default ({contacts}) => {
    const contactsForRender = contacts.map(contact => <ContactPrev contact={contact} key={contact._id} />)
    return (
        <ul className="contact-list">
            <h1>Contact List</h1>
            {contactsForRender}
        </ul>
    )
}