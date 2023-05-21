import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditeTowWayData: null,
  errors:[]
};

export const EditeTowWayRedux = createSlice({
  name: 'EditeCarePlanDataSlice',
  initialState,
  reducers: {
    EditeTowWayInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditeTowWayData = action.payload;
      console.log(state.EditeTowWayData);
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
export const { EditeTowWayInfo ,errors} = EditeTowWayRedux.actions;

export default EditeTowWayRedux.reducer;
