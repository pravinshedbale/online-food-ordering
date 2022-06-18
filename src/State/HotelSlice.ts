import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IHotel from "../Interfaces/Hotels";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: Array<IHotel>(),
  reducers: {
    setHotels(state: IHotel[], action: PayloadAction<IHotel[]>) {
      state.concat(action.payload);
    },
  },
});

export default hotelSlice.reducer;
export const { setHotels } = hotelSlice.actions;
