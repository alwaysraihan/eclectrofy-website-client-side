import React from "react";
import DashboardSlider from "../../Components/Dashboard/DashboardSlider";
import DashboardTopHeader from "../../Components/Dashboard/DashboardTopHeader";

const Dashboard = () => {
    return (
        <>
            <div className="flex relative lg:static">
                <div>
                    <DashboardSlider />
                </div>
                <div className="w-[100%]">
                    <DashboardTopHeader />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
