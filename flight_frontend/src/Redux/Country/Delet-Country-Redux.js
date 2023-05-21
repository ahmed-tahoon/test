import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletcountryData: null,
  errors:[]
};

export const DeletcountryRedux = createSlice({
    name: 'DeletcountryRedux',
    initialState,
    reducers: {
        DeletcountryInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletcountryData = action.payload;
        console.log(state.DeletcountryData);
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
export const { DeletcountryInfo ,errors} = DeletcountryRedux.actions;

export default DeletcountryRedux.reducer;
