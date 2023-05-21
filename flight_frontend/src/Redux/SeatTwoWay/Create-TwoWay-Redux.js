import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateTwoWayData: null,
    isSuccses:false,
  error:[]
};

export const CreateTwoWayRedux = createSlice({
    name: 'CreateTwoWayRedux',
    initialState,
    reducers: {
        CreateTwoWayInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateTwoWayData = action.payload;
        console.log(state.CreateTwoWayData);

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
export const { CreateTwoWayInfo ,errors} = CreateTwoWayRedux.actions;

export default CreateTwoWayRedux.reducer;
