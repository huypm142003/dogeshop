import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        userInfo: {},
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload.userInfo;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userInfo = {};
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;