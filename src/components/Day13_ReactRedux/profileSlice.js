import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { name: "Maria", age: 25 },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    resetProfile: (state) => {
      state.name = "Maria";
      state.age = 25;
    },
  },
});

export const { setName, setAge, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
