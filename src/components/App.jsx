import { ContactList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

export const App = () => {
  return (
    <div>
      <ContactForm />
      <ContactsFilter />
      <ContactList />
    </div>
  );
};
