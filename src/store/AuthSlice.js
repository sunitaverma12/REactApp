import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn:false,
  data:[1,2,3,4,5,6],

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn=!state.isLoggedIn;
    },
    logout:(state)=>{
        state.isLoggedIn=!state.isLoggedIn;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = authSlice.actions

export default authSlice.reducer;