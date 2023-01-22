import PropTypes from 'prop-types';
import { ListEl, Text, TextEl, Button } from './ContactElement.Styled';
import {useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

  
const ContactElement = ({ id, name, number }) => {
const dispatch = useDispatch();

    return (
           <ListEl key={id}>
            <Text>
                 <TextEl >{name}:</TextEl >
                <TextEl > {number}</TextEl >
            </Text>               
                <Button onClick={() => dispatch(deleteContact(id))} type="button">Delete</Button>
            </ListEl> 
    )
} 
   

ContactElement.propTypes = {
    id:  PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   
}

export default ContactElement; 