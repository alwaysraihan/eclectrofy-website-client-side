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
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Sub-Total</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.subTotal}</td>

                                {order.subTotal && !order.paid && (
                                    <td>
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button className="btn btn-xs btn-success">
                                                Pay Now
                                            </button>
                                        </Link>
                                    </td>
                                )}

                                {order.subTotal && order.paid && (
                                    <td>
                                        <span className="text-success">
                                            Paid
                                        </span>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrders;
