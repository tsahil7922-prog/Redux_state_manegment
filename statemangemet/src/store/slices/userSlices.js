import { createSlice } from '@reduxjs/toolkit';
import { clearAllUserImport } from '../../actions';
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

        // 1st step
        clearAllUser: (state, action) => {
            return []
        },

    },
    // advacned version 
    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.clearAllUser, () => {
    //         return []
    //     })
    // },


    // Advance pro max 
    // same reducer used multiple slice used create action
    extraReducers(builder) {
        builder.addCase(clearAllUserImport, () => {
            return []

        })
    }



})


// export these where u need to use 

// shows all the actions we made for useSlice
// console.log(userSlice.actions)

export default userSlice.reducer
export const { addUser, removeUser, clearAllUser } = userSlice.actions

