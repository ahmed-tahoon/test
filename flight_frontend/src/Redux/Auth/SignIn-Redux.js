import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SignInData: null,
    isSuccses:false,
  error:[]
};

export const SignInRedux = createSlice({
    name: 'SignIn',
    initialState,
    reducers: {
      SignInDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.SignInData = action.payload;
        console.log(state.SignInData);

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
export const { SignInDataInfo ,errors} = SignInRedux.actions;

export default SignInRedux.reducer;
