import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   DeletFlightData: null,
  errors:[]
};

export const DeletFlightRedux = createSlice({
    name: 'DeletFlightRedux',
    initialState,
    reducers: {
        DeletFlightInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.DeletFlightData = action.payload;
        console.log(state.DeletFlightData);
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
export const { DeletFlightInfo ,errors} = DeletFlightRedux.actions;

export default DeletFlightRedux.reducer;