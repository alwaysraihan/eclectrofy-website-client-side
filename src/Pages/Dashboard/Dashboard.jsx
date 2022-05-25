import React from "react";
import { Link, Outlet } from "react-router-dom";

import DashboardTopHeader from "../../Components/Dashboard/DashboardTopHeader";

const Dashboard = () => {
    return (
        <>
            <DashboardTopHeader />
            <div className="drawer drawer-mobile ">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content ">
                    <Outlet />
                </div>

                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu shadow-md bg-[rgb(0,7,61)] p-4 overflow-y-auto w-48 font-semibold  text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/myOrders">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addReview">Add a Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
