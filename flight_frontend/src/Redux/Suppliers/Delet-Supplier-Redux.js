import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletsupplierData: null,
  errors:[]
};

export const DeletsupplierRedux = createSlice({
    name: 'DeletsupplierRedux',
    initialState,
    reducers: {
        DeletsupplierInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletsupplierData = action.payload;
        console.log(state.DeletsupplierData);
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
export const { DeletsupplierInfo ,errors} = DeletsupplierRedux.actions;

export default DeletsupplierRedux.reducer;
