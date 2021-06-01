import React, { KeyboardEvent } from 'react';
import { Contact } from '../types/Contact';
import '../styles/contactItem.scss'
import { FaUserAlt } from 'react-icons/fa';
import { BsCheck } from "react-icons/bs";

type Props = {
    contact: Contact,
    contactsData: Contact[],
    setContactsData: (contactsData: Contact[]) => void
}

const ContactItem: React.FC<Props> = ({contact, contactsData, setContactsData}) => {

    const handleSelectClick = () => {
        const updatedContactsData = contactsData.map((contactItem) => (
            contactItem.id === contact.id? {...contact, selected: !contact.selected} : contactItem
        ));
        console.log('--Selected Contacts--');
        updatedContactsData.filter(contact => contact.selected).forEach((contact) => console.log(contact.id));

        setContactsData(updatedContactsData);
    }

    const handleSelectEnter = (event: KeyboardEvent<HTMLTableRowElement>) => {
        if(event.key === 'Enter'){
            const updatedContactsData = contactsData.map((contactItem) => (
                contactItem.id === contact.id? {...contact, selected: !contact.selected} : contactItem
            ));
            console.log('--Selected Contacts--');
            updatedContactsData.filter(contact => contact.selected).forEach((contact) => console.log(contact.id));
            
            setContactsData(updatedContactsData);
        }
    }

    return(
        <tr className='contact-item-row' onClick={handleSelectClick} onKeyDown={handleSelectEnter} tabIndex={1}>
            <td className='avatar'>
                {contact.avatar ? 
                    <div className='avatar-wrapper'>
                        <img src={contact.avatar} alt={`avatar-${contact.last_name}`} className='avatar-img' />
                    </div>
                    :
                    <div className='avatar-wrapper'>
                        <FaUserAlt />
                    </div>
                }
            </td>
            <td className='name'>{contact.first_name} {contact.last_name}</td>
            <td className='select-contact'><span className='checkbox' title='select contact'>{contact.selected && <BsCheck />}</span></td>
        </tr>
    )
}

export default ContactItem;