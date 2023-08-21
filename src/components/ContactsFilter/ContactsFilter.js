import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

import { getFilter } from '../redux/selectors';
import css from './ContactsFilter.module.css';
export const ContactsFilter = () => {
  const filter = useSelector(state => getFilter(state));

  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.searchBar__container}>
      <p className={css.searchBar__text}>Find contact</p>
      <input
        className={css.searchBar__input}
        type="text"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};
