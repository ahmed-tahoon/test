import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletdapartureData: null,
  errors:[]
};

export const DeletdapartureRedux = createSlice({
    name: 'DeletdapartureRedux',
    initialState,
    reducers: {
        DeletdapartureInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletdapartureData = action.payload;
        console.log(state.DeletdapartureData);
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
export const { DeletdapartureInfo ,errors} = DeletdapartureRedux.actions;

export default DeletdapartureRedux.reducer;
