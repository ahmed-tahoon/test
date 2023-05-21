import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetFlightBasedCompanyData: null,
  errors:[]
};

export const GetFlightBasedCompanyRedux = createSlice({
  name: 'GetFlightBasedCompanyRedux',
  initialState,
  reducers: {
    GetFlightBasedCompanyInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetFlightBasedCompanyData = action.payload;
      console.log(state.GetFlightBasedCompanyData);
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
export const { GetFlightBasedCompanyInfo ,errors} = GetFlightBasedCompanyRedux.actions;

export default GetFlightBasedCompanyRedux.reducer;