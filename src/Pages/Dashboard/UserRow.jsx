import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("You are not an admin !");
                }
                return res.json();
            })
            .then((data) => {
                toast.success("Successfully made an admin");
                if (data.modifiedCount > 0) {
                    refetch();
                }
            });
    };
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>{user.email}</th>
                <td>
                    {user.role !== "admin" && (
                        <button
                            onClick={makeAdmin}
                            className="btn btn-xs bg-teal-500 text-white border-teal-500"
                        >
                            Make Admin
                        </button>
                    )}
                </td>
                <td>
                    <button className="btn btn-xs border-red-500 bg-red-500 text-white">
                        Remove User
                    </button>
                </td>
            </tr>
            <ToastContainer />
        </>
    );
};

export default UserRow;
