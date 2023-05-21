import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreatesupplierData: null,
    isSuccses:false,
  error:[]
};

export const CreatesupplierRedux = createSlice({
    name: 'CreatesupplierRedux',
    initialState,
    reducers: {
        CreatesupplierInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreatesupplierData = action.payload;
        console.log(state.CreatesupplierData);

      },
      errors: (state, action) => {
        state.error = action.payload;
        console.log(state.error);

          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
        },
    
    }
  });

  // Action creators are generated for each case reducer function
export const { CreatesupplierInfo ,errors} = CreatesupplierRedux.actions;

export default CreatesupplierRedux.reducer;
