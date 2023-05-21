import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SignUpData: null,
    isSuccses:false,
  error:[]
};

export const SignUpRedux = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
      SignUpDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.SignUpData = action.payload;
        console.log(state.SignUpData);

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
export const { SignUpDataInfo ,errors} = SignUpRedux.actions;

export default SignUpRedux.reducer;
