import React from "react";
import Banner from "../../../Components/HomePage/Banner/Banner";
import ManufacturerTools from "../../../Components/HomePage/ManufacturerTools/ManufacturerTools";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="bg-gray-100">
                <ManufacturerTools />
            </div>
        </>
    );
};

export default Home;
