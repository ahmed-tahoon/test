import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetOneFlightData: null,
  errors:[]
};

export const GetOneFlightRedux = createSlice({
  name: 'GetOneFlightRedux',
  initialState,
  reducers: {
    GetOneFlightInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetOneFlightData = action.payload;
      console.log(state.GetOneFlightData);
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
export const { GetOneFlightInfo ,errors} = GetOneFlightRedux.actions;

export default GetOneFlightRedux.reducer;