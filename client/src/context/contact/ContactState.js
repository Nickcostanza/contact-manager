import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '324-343-2353',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Rick Davis',
                email: 'bigrick@gmail.com',
                phone: '702-554-2103',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Harry Smith',
                email: 'HarryS@gmail.com',
                phone: '555-555-555',
                type: 'personal'
            }
        ]
    };
const [state, dispatch] = useReducer(contactReducer, initialState);

//Add Contact
const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
}
//Delete Contact

//Set Current Contact

//Clear Current Contact

//Update Contact

//Filter Contacts

//Clear Filter

return (
    <ContactContext.Provider
    value={{
        contacts: state.contacts,
        addContact
    }}>
        { props.children }
    </ContactContext.Provider>
)

};



export default ContactState;