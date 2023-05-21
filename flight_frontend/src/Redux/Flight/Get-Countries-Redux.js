import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetCountriesData: [],
  errors:[]
};

export const GetCountriesRedux = createSlice({
  name: 'GetCountriesRedux',
  initialState,
  reducers: {
    GetCountriesInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload,"action.payload")
      state.GetCountriesData = action.payload;
      console.log(state.GetCountriesData);
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
export const { GetCountriesInfo ,errors} = GetCountriesRedux.actions;

export default GetCountriesRedux.reducer;