import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletSeatData: null,
  errors:[]
};

export const DeletSeatRedux = createSlice({
    name: 'DeletSeatRedux',
    initialState,
    reducers: {
        DeletSeatInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletSeatData = action.payload;
        console.log(state.DeletSeatData);
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
export const { DeletSeatInfo ,errors} = DeletSeatRedux.actions;

export default DeletSeatRedux.reducer;
