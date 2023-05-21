import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateFlightData: null,
    isSuccses:false,
  error:[]
};

export const CreateFlightRedux = createSlice({
    name: 'CreateFlightRedux',
    initialState,
    reducers: {
        CreateFlightInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateFlightData = action.payload;
        console.log(state.CreateFlightData);

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
export const { CreateFlightInfo ,errors} = CreateFlightRedux.actions;

export default CreateFlightRedux.reducer;