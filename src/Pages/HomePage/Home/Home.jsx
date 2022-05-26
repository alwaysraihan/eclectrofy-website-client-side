import React from "react";
import Banner from "../../../Components/HomePage/Banner/Banner";
import BusinessSummary from "../../../Components/HomePage/BusinessSumarry/BusinessSummary";
import Employe from "../../../Components/HomePage/Employe/Employe";
import ManufacturerTools from "../../../Components/HomePage/ManufacturerTools/ManufacturerTools";
import Review from "../../../Components/HomePage/Testimonial/Review";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="bg-gray-100">
                <ManufacturerTools />
                <Employe />
                <BusinessSummary />
                <Review />
            </div>
        </>
    );
};

export default Home;
