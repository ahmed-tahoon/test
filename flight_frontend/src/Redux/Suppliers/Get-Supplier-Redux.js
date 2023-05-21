import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetsupplierData: null,
  errors:[]
};

export const GetsupplierRedux = createSlice({
  name: 'GetsupplierRedux',
  initialState,
  reducers: {
    GetsupplierInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetsupplierData = action.payload;
      console.log(state.GetsupplierData);
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
export const { GetsupplierInfo ,errors} = GetsupplierRedux.actions;

export default GetsupplierRedux.reducer;
