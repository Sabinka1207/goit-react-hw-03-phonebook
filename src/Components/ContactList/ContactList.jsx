import css from './ContactList.module.css';
import PropTypes from 'prop-types'

function ContactList({ contacts, onDeleteContact }) {

    return (
        <ul className={ css.allContacts}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contact}>
                    <span>{contact.name}: {contact.number}</span>
                    <button className={css.delete} type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList
