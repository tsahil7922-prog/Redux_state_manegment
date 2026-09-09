import React from "react";
import UserData from "../component/userData.jsx";
import { useDispatch } from "react-redux";
import { fakeData } from "../api/index.js";
import { addUser, clearAllUser } from "../store/slices/userSlices"
import { clearAllUserImport } from "../actions/index.jsx";

const Home = () => {
    const dispatch = useDispatch();

    const handleAddUser = () => {
        const user = fakeData();
        dispatch(addUser(user))

        // console.log(user);

        // later:
        // dispatch(addUserAction(user));
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    padding: "20px"
                }}
            >
                <span style={{ fontWeight: "bold" }}>USER DATA</span>

                <button onClick={handleAddUser}>
                    Add User
                </button>
            </div>

            <UserData />


            <button onClick={() => dispatch(clearAllUserImport())}>Clear All</button>
        </>
    );
};

export default Home;