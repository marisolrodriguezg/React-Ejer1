import React from 'react';
import Contactstate from './Contactstate';
import { Contact } from './Contact';

const ContactList = () => {
    const newContact = new Contact('Marisol', 'Rodriguez', false, 'solymar:g.com') 
    return (
        <div>
            <Contactstate contact={newContact}></Contactstate> 
        </div>
    );
};

export default ContactList;
