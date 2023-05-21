import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   EditesupplierData: null,
  errors:[]
};

export const EditesupplierRedux = createSlice({
  name: 'EditeCarePlanDataSlice',
  initialState,
  reducers: {
    EditesupplierInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.EditesupplierData = action.payload;
      console.log(state.EditesupplierData);
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
export const { EditesupplierInfo ,errors} = EditesupplierRedux.actions;

export default EditesupplierRedux.reducer;
