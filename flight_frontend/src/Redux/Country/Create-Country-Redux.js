import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreatecountryData: null,
    isSuccses:false,
  error:[]
};

export const CreatecountryRedux = createSlice({
    name: 'CreatecountryRedux',
    initialState,
    reducers: {
        CreatecountryInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreatecountryData = action.payload;
        console.log(state.CreatecountryData);

      },
      errors: (state, action) => {
        state.error = action.payload;
        console.log(state.error);

          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
        },
    
    }
  });

  // Action creators are generated for each case reducer function
export const { CreatecountryInfo ,errors} = CreatecountryRedux.actions;

export default CreatecountryRedux.reducer;
