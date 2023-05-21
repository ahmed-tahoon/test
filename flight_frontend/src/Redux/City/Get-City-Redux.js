import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetCityData: null,
  errors:[]
};

export const GetCityRedux = createSlice({
  name: 'GetCityRedux',
  initialState,
  reducers: {
    GetCityInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetCityData = action.payload;
      console.log(state.GetCityData);
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
export const { GetCityInfo ,errors} = GetCityRedux.actions;

export default GetCityRedux.reducer;
