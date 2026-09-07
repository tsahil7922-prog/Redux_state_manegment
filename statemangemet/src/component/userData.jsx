import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlices";

const UserData = () => {
    const data = useSelector((state) => state.users);
    const dispatch = useDispatch();

    console.log(data);

    return (
        <div>
            {data.length === 0 ? (
                <h3 style={{ textAlign: "center" }}>
                    No User Added
                </h3>
            ) : (
                data.map((user, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            margin: "10px"
                        }}
                    >
                        <span>
                            {index + 1}. {user}
                        </span>

                        <button
                            onClick={() => dispatch(removeUser(index))}
                        >
                            Delete Me
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default UserData;