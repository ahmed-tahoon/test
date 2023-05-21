import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetcountryNavBarData: null,
  errors:[]
};

export const GetcountryNavBarRedux = createSlice({
  name: 'GetcountryNavBarRedux',
  initialState,
  reducers: {
    GetcountryNavBarInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetcountryNavBarData = action.payload;
      console.log(state.GetcountryNavBarData);
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
export const { GetcountryNavBarInfo ,errors} = GetcountryNavBarRedux.actions;

export default GetcountryNavBarRedux.reducer;
