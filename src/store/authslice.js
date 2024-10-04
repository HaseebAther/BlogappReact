import { createSlice  } from "@reduxjs/toolkit";

const initstate ={
    status:false,
    userData: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initstate,
    reducers:{
        login(state, action){
            state.status= true;
            state.userData = action.payload.userData;
        },
        logout(state){
            state.status=false;
            state.userData=null;
        }
        
    }
})


export const {login, logout } = authSlice.actions

export default  authSlice.reducer
