import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetdapartureData: null,
  errors:[]
};

export const GetdapartureRedux = createSlice({
  name: 'GetdapartureRedux',
  initialState,
  reducers: {
    GetdapartureInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.GetdapartureData = action.payload;
      console.log(state.GetdapartureData);
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
export const { GetdapartureInfo ,errors} = GetdapartureRedux.actions;

export default GetdapartureRedux.reducer;
