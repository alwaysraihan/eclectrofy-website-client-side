import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import axiosSecret from "../../axiosSecret/axiosSecret";
import auth from "../../Firebase-Setup/firebase.init";
import { signOut } from "firebase/auth";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axiosSecret.get(
                    `http://localhost:5000/order?email=${user.email}`
                );

                setOrders(data);
            } catch (err) {
                console.log(err.message);
                console.log(err);
                if (
                    err.response.status === 403 ||
                    err.response.status === 401
                ) {
                    handleSignOut();
                    navigate("/login");
                }
            }
        };
        loadData();
    }, [navigate, user]);
    return (
        <>
            <div className="overflow-x-auto md:px-5">
                <table className="table  w-full">
                    <thead>
                        <tr className="w-full">
                            <th></th>
                            <th>Tools Name</th>
                            <th className="text-center hidden md:table-cell">
                                Quantity
                            </th>
                            <th className="text-center  hidden md:table-cell">
                                Sub-Total
                            </th>
                            <th className="text-center">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <p className="font-semibold">
                                        {order.productName}
                                    </p>
                                    <div className="md:hidden">
                                        <p>Quantity: {order.quantity}</p>
                                        <p>SubTotal: {order.subTotal}</p>
                                    </div>
                                </td>
                                <td className="text-center hidden md:table-cell ">
                                    {order.quantity}
                                </td>
                                <td className="text-center hidden md:table-cell">
                                    {order.subTotal}
                                </td>

                                <td className="text-center">
                                    {order.subTotal && order.paid ? (
                                        <div>
                                            <p>
                                                <span className="text-success">
                                                    Paid
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-success hidden lg:block">
                                                    Transaction ID
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                        </div>
                                    ) : (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button className="btn btn-xs btn-success">
                                                Pay Now
                                            </button>
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrders;
