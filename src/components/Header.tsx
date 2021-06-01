import { MdImportContacts } from 'react-icons/md';
import '../styles/header.scss';

const Header: React.FC = () => {
    return(
        <div className='header-wrapper'>
            <i className='header-icon'><MdImportContacts /></i> 
            <h2 className='header-title'>Contacts</h2>
        </div>
    )

}

export default Header;