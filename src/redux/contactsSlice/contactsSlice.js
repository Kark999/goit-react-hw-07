import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../contactsOps/contactsOps";

const contactsSlice = createSlice({
  name: "contactsSlice",
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

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
