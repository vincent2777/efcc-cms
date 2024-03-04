import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/mock";


const initialState = {
  users,
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, {payload}) => {
      state.users = [payload, ...state.users];
    },
  },
});

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;
