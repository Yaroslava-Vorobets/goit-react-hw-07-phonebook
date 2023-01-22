
import { Input, Label } from './Filter.Styled';

import {statusFilter} from 'redux/FilterSlise';
import {useDispatch} from 'react-redux';

const Filter = () => {

    const dispatch = useDispatch();
    const query = e => e.target.value;
console.log(query)

    return (
         <>
            <Label htmlFor="fname">Fined contacts by name</Label>       
            <Input
                onChange={e => dispatch(statusFilter(e.target.value))}           
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </>

    )
}


    export default Filter;