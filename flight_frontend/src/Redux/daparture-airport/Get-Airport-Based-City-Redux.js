import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetAirPortBasecCityData: null,
  errors:[]
};

export const GetAirPortBasecCityRedux = createSlice({
  name: 'GetAirPortBasecCityRedux',
  initialState,
  reducers: {
    GetAirPortBasecCityInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetAirPortBasecCityData = action.payload;
      console.log(state.GetAirPortBasecCityData);
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
export const { GetAirPortBasecCityInfo ,errors} = GetAirPortBasecCityRedux.actions;

export default GetAirPortBasecCityRedux.reducer;
