

import 'modern-normalize';
import ContactForm from './FormFolder/Form';
import Filter from './FilterFolder/Filter';
import ContactList from './ContactListFolder/ContactList';
import { ToastContainer } from 'react-toastify';
import { Wrap } from 'Global.Styles'
import { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchContacts} from "redux/operations";
import { selectContact, selectError, selectIsLoading, } from "redux/selectors";
import { Spinner } from './Spinner/Spinner.jsx';
// import { useGetContactsQuery } from 'redux/ContactSlise'


export default function App() {
 const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContact);


  useEffect(() => {     
    dispatch (fetchContacts ())
},[dispatch])

 

   
    return (
        <>
        <Wrap>
          <h1>
            Phonebook
          </h1>
          <ContactForm        
          />     
          <h2>
            Contacts
          </h2> 
          {isLoading && !error && <Spinner />}
          {contacts.length > 0 &&  <ContactList         
          />}         
          <Filter          
          />     
        </Wrap>
        <ToastContainer autoClose={2000} />   
        </>
      )   
    }


         



  // const { data:contacts, error, isLoading } = useGetContactsQuery();
  // console.log(contacts)
  // console.log(error)
  // console.log(isLoading)
  // const state = useSelector(state => state)
  //  console.log(state)