import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetflightCompanyData: null,
  errors:[]
};

export const GetflightCompanyRedux = createSlice({
  name: 'GetflightCompanyRedux',
  initialState,
  reducers: {
    GetflightCompanyInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetflightCompanyData = action.payload;
      console.log(state.GetflightCompanyData);
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
export const { GetflightCompanyInfo ,errors} = GetflightCompanyRedux.actions;

export default GetflightCompanyRedux.reducer;
