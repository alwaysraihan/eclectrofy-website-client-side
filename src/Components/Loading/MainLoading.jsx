import React from "react";

const MainLoading = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold text-blue-500">Loading....</h1>
                <p className=" xl:w-1/3 text-center text-white">
                    This may take a few seconds, please don't close this page.
                </p>
            </div>
        </>
    );
};

export default MainLoading;
