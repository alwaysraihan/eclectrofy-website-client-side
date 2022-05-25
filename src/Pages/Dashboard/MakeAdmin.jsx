import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UserRow from "./UserRow";

const MakeAdmin = () => {
    const navigate = useNavigate();
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <p className="text-center text-blue-500">Loding....</p>;
    }

    return (
        <>
            <h2 className="text-2xl my-2 mx-10 text-gray-800 font-semibold">
                Total Users: {users?.length}
            </h2>
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Users</th>
                            <th>Make admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <UserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default MakeAdmin;
