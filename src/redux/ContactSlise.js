import { createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://63cd80640f1d5967f0319ba6.mockapi.io'}),
//   tagTypes:['Contact'],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact']
//     }),
//   }),
// })


// export const { useGetContactsQuery } = contactsApi;
import {fetchContacts, addContact, deleteContact} from 'redux/operations'

const handlePending = state => {
  state.isLoading = true;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

export const ContactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
      
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contacts => contacts.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]:handleRejected,
  }
})



export const ContactReduser = ContactSlise.reducer;
