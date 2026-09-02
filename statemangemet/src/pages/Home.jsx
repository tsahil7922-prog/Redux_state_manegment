import React from 'react'
import UserData from "../component/userData.jsx"

const Home = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", padding: "20px" }}>
                <span style={{ fontWeight: "bold" }}>USER DATA</span>
                <button>Add User</button>
            </div>

            {/* <UserData /> */}
        </>
    )
}

export default Home