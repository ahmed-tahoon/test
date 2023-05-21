import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletflightCompanyData: null,
  errors:[]
};

export const DeletflightCompanyRedux = createSlice({
    name: 'DeletflightCompanyRedux',
    initialState,
    reducers: {
        DeletflightCompanyInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletflightCompanyData = action.payload;
        console.log(state.DeletflightCompanyData);
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
export const { DeletflightCompanyInfo ,errors} = DeletflightCompanyRedux.actions;

export default DeletflightCompanyRedux.reducer;
