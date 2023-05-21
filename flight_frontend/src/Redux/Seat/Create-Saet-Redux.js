import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateSeatData: null,
    isSuccses:false,
  error:[]
};

export const CreateSeatRedux = createSlice({
    name: 'CreateSeatRedux',
    initialState,
    reducers: {
        CreateSeatInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateSeatData = action.payload;
        console.log(state.CreateSeatData);

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
export const { CreateSeatInfo ,errors} = CreateSeatRedux.actions;

export default CreateSeatRedux.reducer;
