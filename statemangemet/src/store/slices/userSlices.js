import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => { },
        removeUser: (state, action) => { },
        clearAllUser: (state, action) => { },
    }
})


// export these where u need to use 
// export const { addUser, removeUser, clearAllUser } = userSlice()

// shows all the actions we made for useSlice
console.log(userSlice.actions)

export default userSlice.reducer