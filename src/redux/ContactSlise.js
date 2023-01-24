import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from 'redux/operations'

const extraActions = [fetchContacts, addContact, deleteContact]
export const ContactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder =>
    builder
  
    .addCase(fetchContacts.fulfilled,(state, action)=>{    
        state.items = action.payload;   
      })
  
    .addCase(addContact.fulfilled,(state, action) =>{    
      state.items.push(action.payload);
    })

   .addCase(deleteContact.fulfilled,(state, action)=> {    
      const index = state.items.findIndex(
        contacts => contacts.id === action.payload.id);
      state.items.splice(index, 1);
   }) 
  .addMatcher(isAnyOf(...extraActions.map(action => action.pending)), (state) => { state.isLoading = true })
 
  .addMatcher(isAnyOf(...extraActions.map(action => action.rejected)), (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
  })
        .addMatcher(isAnyOf(...extraActions.map(action => action.fulfilled)), (state) => {
          state.isLoading = false;
          state.error = null;
        })
  
  })


export const ContactReduser = ContactSlise.reducer;
