import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contactsSlice/contactsSlice";

const ContactList = () => {
  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.filters.name);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact
            contact={contact}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
