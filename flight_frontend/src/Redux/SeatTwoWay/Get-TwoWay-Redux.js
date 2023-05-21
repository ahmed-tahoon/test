import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetSeatTwoWayData: null,
  errors:[]
};

export const GetSeatTwoWayRedux = createSlice({
  name: 'GetSeatTwoWayRedux',
  initialState,
  reducers: {
    GetSeatTwoWayInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetSeatTwoWayData = action.payload;
      console.log(state.GetSeatTwoWayData);
    },
    errors: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.errors = action.payload;
      },
  
  }
});

// Action creators are generated for each case reducer function
export const { GetSeatTwoWayInfo ,errors} = GetSeatTwoWayRedux.actions;

export default GetSeatTwoWayRedux.reducer;
