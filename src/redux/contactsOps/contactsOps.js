import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsOpsSlice = createSlice({
  name: "contactsOpsSlice",
  initialState: INITIAL_STATE.contacts,

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsOpsSlice.actions;

export const contactsReducer = contactsOpsSlice.reducer;
