import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   AddFlightByCheckBoxtData: null,
  errors:[]
};

export const AddFlightByCheckBoxtRedux = createSlice({
  name: 'flightcheckSlice',
  initialState,
  reducers: {
    AddFlightByCheckBoxtInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.AddFlightByCheckBoxtData = action.payload;
      console.log(state.AddFlightByCheckBoxtData);
    },
    errors: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.errors = action.payload;
      },
    
  },

  


});

// Action creators are generated for each case reducer function
export const { AddFlightByCheckBoxtInfo ,errors} = AddFlightByCheckBoxtRedux.actions;

export default AddFlightByCheckBoxtRedux.reducer;
