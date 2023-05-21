import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletCityData: null,
  errors:[]
};

export const DeletCityRedux = createSlice({
    name: 'DeletCityRedux',
    initialState,
    reducers: {
        DeletCityInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletCityData = action.payload;
        console.log(state.DeletCityData);
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
export const { DeletCityInfo ,errors} = DeletCityRedux.actions;

export default DeletCityRedux.reducer;
