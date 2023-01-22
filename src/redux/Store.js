
import { configureStore, } from "@reduxjs/toolkit";
import { filtersReducer } from './FilterSlise';
// import {contactsApi} from 'redux/ContactSlise'

import { ContactReduser } from './ContactSlise';

export const store = configureStore({
    reducer: {
        //  [contactsApi.reducerPath]: contactsApi.reducer,
        contacts:ContactReduser,
        filter: filtersReducer,
    },   

    //  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(contactsApi.middleware),
});


 

