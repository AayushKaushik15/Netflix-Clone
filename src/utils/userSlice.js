import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice ({
    name : "user",
    initialState : null,
    reducers  : {
        addUser : (action,state) => {
            return state.payload;
        },
        removeUser : (state, action) => {
            return null;
        }
    }

})

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions