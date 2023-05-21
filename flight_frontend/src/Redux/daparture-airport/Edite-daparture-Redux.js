import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditedapartureData: null,
  errors:[]
};

export const EditedapartureRedux = createSlice({
  name: 'EditeCarePlanDataSlice',
  initialState,
  reducers: {
    EditedapartureInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditedapartureData = action.payload;
      console.log(state.EditedapartureData);
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
export const { EditedapartureInfo ,errors} = EditedapartureRedux.actions;

export default EditedapartureRedux.reducer;
