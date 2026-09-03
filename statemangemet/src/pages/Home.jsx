import React from "react";
import UserData from "../component/userData.jsx";
import { useDispatch } from "react-redux";
import { fakeData } from "../api/index.js";

const Home = () => {
    const dispatch = useDispatch();

    const addUser = () => {
        const user = fakeData();
        console.log(user);

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

                <button onClick={addUser}>
                    Add User
                </button>
            </div>

            <UserData />
        </>
    );
};

export default Home;