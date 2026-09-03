import React from 'react'
import UserData from "../component/userData.jsx"
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const addUser=()=>{
         
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", padding: "20px" }}>
                <span style={{ fontWeight: "bold" }}>USER DATA</span>
                <button onClick={()=>addUser()}>Add User</button>
            </div>

            {/* <UserData /> */}
        </>
    )
}

export default Home