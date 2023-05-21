import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetcountryData: null,
  errors:[]
};

export const GetcountryRedux = createSlice({
  name: 'GetcountryRedux',
  initialState,
  reducers: {
    GetcountryInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetcountryData = action.payload;
      console.log(state.GetcountryData);
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
export const { GetcountryInfo ,errors} = GetcountryRedux.actions;

export default GetcountryRedux.reducer;
