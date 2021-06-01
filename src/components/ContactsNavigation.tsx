import React, { ChangeEvent } from 'react';
import '../styles/contactsNavigation.scss';
import { AiOutlineSearch } from 'react-icons/ai'
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri'

type Props = {
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
    pageCount: number
}


const ContactsNavigation: React.FC<Props> = ({currentPage, setCurrentPage, searchQuery, setSearchQuery, pageCount}) => {

    const handleChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(value)
        setCurrentPage(1);
    }

    const switchPage = (desiredPage: number) => {
        if (1 <= desiredPage && desiredPage <= pageCount) {
            setCurrentPage(desiredPage);
        }
    }
    
    return(
        <div className='contacts-navigation-wrapper'>
            <div className='search-input-wrapper'>
                <i className='search-input-icon'><AiOutlineSearch /></i>
                <input type='text' value={searchQuery} onChange={handleChange} className='search-input'></input>
            </div>
            <div className='pagination-wrapper'>
                    <button disabled={currentPage === 1 ? true : false} className='prev-page-button' title='previous page' onClick={() => switchPage(currentPage - 1)}><i className='button-icon'><RiArrowLeftSFill /></i></button>
                    <button disabled={currentPage === pageCount ? true : false} className='next-page-button' title='next page' onClick={() => switchPage(currentPage + 1)}><i className='button-icon'><RiArrowRightSFill /></i></button>
            </div>
        </div>
    )
}

export default ContactsNavigation;