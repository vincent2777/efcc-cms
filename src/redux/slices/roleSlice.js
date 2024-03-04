import { createSlice } from "@reduxjs/toolkit";
import { cases, departments, roles } from "../../data/mock";


const initialState = {
  roles,
  departments,
  cases
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,

  reducers: {
    addRole: (state, {payload}) => {
      state.roles = [payload, ...state.roles];
    },
    addDepartment: (state, {payload}) => {
      state.departments = [payload, ...state.departments];
    },
    addCase: (state, {payload}) => {
      state.cases = [payload, ...state.cases];
    },
  },
});

export default rolesSlice.reducer;
export const { addRole, addDepartment, addCase } = rolesSlice.actions;
