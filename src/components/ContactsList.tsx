import React from 'react'
import { Contact } from '../types/Contact';
import ContactItem from './ContactItem';
import '../styles/contactsList.scss'

type Props = {
    contactsDisplayed: Contact[],
    contactsData: Contact[],
    setContactsData: (contactsData: Contact[]) => void
}

const ContactsList: React.FC<Props> = ({contactsDisplayed, contactsData, setContactsData}) => {

    return(
        <table className='contacts-list-table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {contactsDisplayed.map((contact) => 
                    <ContactItem key={contact.id} contact={contact} contactsData={contactsData} setContactsData={setContactsData}/>
                )}
            </tbody>
        </table>
    )
}

export default ContactsList;