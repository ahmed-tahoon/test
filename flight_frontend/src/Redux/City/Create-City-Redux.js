import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateCityData: null,
    isSuccses:false,
  error:[]
};

export const CreateCityRedux = createSlice({
    name: 'CreateCityRedux',
    initialState,
    reducers: {
        CreateCityInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateCityData = action.payload;
        console.log(state.CreateCityData);

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
export const { CreateCityInfo ,errors} = CreateCityRedux.actions;

export default CreateCityRedux.reducer;
