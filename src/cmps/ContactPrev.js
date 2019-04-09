import React from 'react'

export default ({contact}) => {
    return (
        <li className="contact-prev">
            <h3>{contact.name}</h3>
            <h5>{contact.email}</h5>
            <h5>{contact.phone}</h5>
            <img src={`https://api.adorable.io/avatars/${contact._id}`} />
        </li>
    )
}