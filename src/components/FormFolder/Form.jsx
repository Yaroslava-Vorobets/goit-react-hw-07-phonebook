
import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import {Form, Label, Input,  Button, } from './Form.Styled';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {selectContact} from 'redux/selectors'




export default function ContactForm () {  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectContact);
    const dispatch = useDispatch();
     console.log(contacts)
   

  const  handleChange = e => {
      const { name, value } = e.target;
      console.log(name,value)
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;            
            default:
                return;   
       }      
    } 
   
    const reset = () =>{  
    setName('');
    setNumber('');}
    
  const  handleSubmit = e => {            
      e.preventDefault();
      if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
         toast(`${name} is alredy in contacts`);
      return;
      }
       if (contacts.find(contact => contact.number === number)) {
         toast(`${number} is alredy in contacts`);
      return;
    }
 
      dispatch(addContact({ name, phone:number}))
    reset ()
        
    } 
   
       
        return (
            <>
                <Form onSubmit = {handleSubmit}>
                    <Label  htmlFor="fname">Name </Label>
                    < Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />               
                    <Label  htmlFor="fname">Number</Label > 
                        < Input
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />                    
                        < Button type = "submit" >add contact</ Button>                
                </Form>            
            </>
        )
    }
 

