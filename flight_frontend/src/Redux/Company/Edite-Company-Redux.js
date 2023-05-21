import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeflightCompanyData: null,
  errors:[]
};

export const EditeflightCompanyRedux = createSlice({
  name: 'EditeCarePlanDataSlice',
  initialState,
  reducers: {
    EditeflightCompanyInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeflightCompanyData = action.payload;
      console.log(state.EditeflightCompanyData);
    },
    errors: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.errors = action.payload;
      },
    
  },

  


});

// Action creators are generated for each case reducer function
export const { EditeflightCompanyInfo ,errors} = EditeflightCompanyRedux.actions;

export default EditeflightCompanyRedux.reducer;
