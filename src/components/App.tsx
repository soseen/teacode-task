import React, { useEffect, useMemo, useState } from 'react';
import '../styles/app.scss';
import Header from './Header';
import ContactsList from './ContactsList';
import ContactsNavigation from './ContactsNavigation';
import { axios } from '../axios/axios';
import { css } from "@emotion/react";
import { ContactsResponse } from '../types/ContactsResponse';
import {Contact } from '../types/Contact';
import BarLoader from "react-spinners/BarLoader";

const USERS_PER_PAGE = 10;

const override = css`
  width: 100%;
`;

const App: React.FC = () => {

  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const [contactsData, setContactsData] = useState<Contact[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadUsers = async () => {
  
    try {
      setIsFetchingData(true);
      const { data }: ContactsResponse = await axios.get('/users.json');
      const newContacts = data.map((contact) => ({...contact, selected: false}))
      setContactsData(newContacts)
      setIsFetchingData(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const [ pageCount, filteredContacts ]: [number, Contact[]] = useMemo(() => {
    
    const filteredContacts = contactsData.filter(contact => contact.last_name.includes(searchQuery) || contact.first_name.includes(searchQuery)).sort((a,b) => a.last_name.localeCompare(b.last_name))
    const pageCount = filteredContacts.length > 0 ? Math.ceil(filteredContacts.length / USERS_PER_PAGE) : 1;

    if (currentPage <= pageCount) {
      const contactsToDisplay = filteredContacts.slice(USERS_PER_PAGE * (currentPage - 1), USERS_PER_PAGE * currentPage)
      return [pageCount, contactsToDisplay]
    } else {
      return [pageCount, filteredContacts]
    }

  }, [contactsData, searchQuery, currentPage])

  return (
    <div className="app">
      <Header />
      <div className='app-content'>
        <BarLoader loading={isFetchingData} css={override} color='#00754e'/>
        <ContactsNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} searchQuery={searchQuery} setSearchQuery={setSearchQuery} pageCount={pageCount}/>
        <ContactsList contactsDisplayed={[...filteredContacts]} contactsData={contactsData} setContactsData={setContactsData} />
      </div>
    </div>
  );
}

export default App;