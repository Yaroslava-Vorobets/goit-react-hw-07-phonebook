import { createSelector } from "@reduxjs/toolkit";


export const selectContact = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectContact, selectFilter],
    (contacts, query) => {     
        const normalizedFilter = query.toLowerCase().trim();
        return contacts.filter(({ name})  =>
      name.toLowerCase().includes(normalizedFilter))
})

