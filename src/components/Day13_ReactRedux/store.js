import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";
import ProfileReducer from "./profileSlice";

const store = configureStore({
  reducer: { counter: CounterReducer, profile: ProfileReducer },
});

export default store;
