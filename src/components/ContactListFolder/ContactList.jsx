import {useSelector}from 'react-redux';
import ContactElement from '../ContactElementFolder/ContactElement'
import { List } from './List.Styled';
import { selectContact, selectFilter} from 'redux/selectors';


const ContactList = () => {
  const contacts = useSelector(selectContact);
console.log( contacts)
  const query = useSelector(selectFilter);
  console.log(query)


   const normalizedFilter = query.toLowerCase().trim();
  const visibleContacts = query
    ? contacts.filter(({ name })  =>
      name.toLowerCase().includes(normalizedFilter))
    :  contacts
 
  

  return (
     <List>
        {visibleContacts.map(({ id, name, number }) =>      
                <ContactElement key={id}    
                       
                      name={name}
                      id={id}
                      number={number} /> 
        )}                 
    </List>
  )
  
}
  
   

//  ContactList.PropTypespropTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

 export default ContactList;              