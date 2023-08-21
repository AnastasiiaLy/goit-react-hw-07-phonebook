import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/operations';

import { getContacts, getFilter } from '../redux/selectors';
import css from './ContactsList.module.css';
export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); //
  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactsId => {
    dispatch(deleteContact(contactsId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          {contact.name}: {contact.phone}
          <button
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
            className={css.contactList__delete_btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
