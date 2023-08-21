import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';

import { getContacts } from '../redux/selectors';
import { v4 as uuidv4 } from 'uuid';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => getContacts(state));

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    if (name.trim() === '') {
      alert('Please enter a name');
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contact_from}>
      <p className={css.contact_from__text}>Name</p>
      <input
        className={css.contact_from__input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <p className={css.contact_from__text}>Number</p>
      <input
        className={css.contact_from__input}
        type="tel"
        name="number"
        pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={css.contact_from__Submit_btn}>
        Add contact
      </button>
    </form>
  );
};
