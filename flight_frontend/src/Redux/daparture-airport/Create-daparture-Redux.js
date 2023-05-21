import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreatedapartureData: null,
    isSuccses:false,
  error:[]
};

export const CreatedapartureRedux = createSlice({
    name: 'CreatedapartureRedux',
    initialState,
    reducers: {
        CreatedapartureInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreatedapartureData = action.payload;
        console.log(state.CreatedapartureData);

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
export const { CreatedapartureInfo ,errors} = CreatedapartureRedux.actions;

export default CreatedapartureRedux.reducer;
