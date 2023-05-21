import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetFlightData: null,
  errors:[]
};

export const GetFlightRedux = createSlice({
  name: 'GetFlightRedux',
  initialState,
  reducers: {
    GetFlightInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetFlightData = action.payload;
      console.log(state.GetFlightData);
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
export const { GetFlightInfo ,errors} = GetFlightRedux.actions;

export default GetFlightRedux.reducer;