import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeCityData: null,
  errors:[]
};

export const EditeCityRedux = createSlice({
  name: 'EditeCarePlanDataSlice',
  initialState,
  reducers: {
    EditeCityInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeCityData = action.payload;
      console.log(state.EditeCityData);
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
export const { EditeCityInfo ,errors} = EditeCityRedux.actions;

export default EditeCityRedux.reducer;
