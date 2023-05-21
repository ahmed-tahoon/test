import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetOnecountryData: null,
  errors:[]
};

export const GetOnecountryRedux = createSlice({
  name: 'GetOnecountryRedux',
  initialState,
  reducers: {
    GetOnecountryInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetOnecountryData = action.payload;
      console.log(state.GetOnecountryData);
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
export const { GetOnecountryInfo ,errors} = GetOnecountryRedux.actions;

export default GetOnecountryRedux.reducer;
