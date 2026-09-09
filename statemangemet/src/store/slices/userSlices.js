import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => {

            state.push(action.payload)

            // console.log(action.payload,"redux state store");

        },
        removeUser: (state, action) => {
            state.splice(action.payload, 1)
        },
        // if action handle by one reducer , use reducers
        // if action handle by multiple reeducers use extrareducer
        clearAllUser: (state, action) => {
            return []
        },

    },
    
    extraReducers(builder) {
        builder.addCase(userSlice.actions.clearAllUser, () => {
            return []
        })
    }
})


// export these where u need to use 

// shows all the actions we made for useSlice
// console.log(userSlice.actions)

export default userSlice.reducer
export const { addUser, removeUser, clearAllUser } = userSlice.actions

