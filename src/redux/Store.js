
import { configureStore, } from "@reduxjs/toolkit";
import { filtersReducer } from './FilterSlise';


import { ContactReduser } from './ContactSlise';

export const store = configureStore({
    reducer: {
      
        contacts:ContactReduser,
        filter: filtersReducer,
    },   

});


 

