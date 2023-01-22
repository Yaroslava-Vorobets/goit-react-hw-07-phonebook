import { createSlice } from '@reduxjs/toolkit';


 const FilterSlise = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        statusFilter(state, action) {
            return (state = action.payload);
        },
    }
})

export const { statusFilter } = FilterSlise.actions;
export const filtersReducer = FilterSlise.reducer;