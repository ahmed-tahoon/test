import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetSeatData: null,
  errors:[]
};

export const GetSeatRedux = createSlice({
  name: 'GetSeatRedux',
  initialState,
  reducers: {
    GetSeatInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetSeatData = action.payload;
      console.log(state.GetSeatData);
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
export const { GetSeatInfo ,errors} = GetSeatRedux.actions;

export default GetSeatRedux.reducer;
