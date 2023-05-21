import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CreateflightCompanyData: null,
    isSuccses:false,
  error:[]
};

export const CreateflightCompanyRedux = createSlice({
    name: 'CreateflightCompanyRedux',
    initialState,
    reducers: {
        CreateflightCompanyInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.CreateflightCompanyData = action.payload;
        console.log(state.CreateflightCompanyData);

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
export const { CreateflightCompanyInfo ,errors} = CreateflightCompanyRedux.actions;

export default CreateflightCompanyRedux.reducer;
