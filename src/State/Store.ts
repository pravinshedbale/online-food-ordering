import { combineReducers, createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import HotelSlice from "./HotelSlice";

export const rootReducer = combineReducers({
  hotelSlice: HotelSlice,
});

export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () =>
  createStore(rootReducer, {}, devToolsEnhancer({}));
