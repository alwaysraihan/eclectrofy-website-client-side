import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase-Setup/firebase.init";

const DashboardTopHeader = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className=" w-[100%] flex items-center justify-between px-2 md:px-5 shadow-md bg-white py-2 bg-opacity-50">
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-semibold ">
                        Admin Pannel
                    </h1>
                </div>
                <div className="w-16 h-16 relative">
                    <div>
                        <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full"></span>
                        <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full animate-ping"></span>
                    </div>
                    <div className="antialiased">
                        <div className="relative cursor-pointer group">
                            {user?.photoURL ? (
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-blue-600"
                                    src={user.photoURL}
                                    alt="profile"
                                />
                            ) : (
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-blue-600"
                                    src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                                    alt="profile"
                                />
                            )}

                            <div className="absolute   hidden right-0 top-0 mt-10 bg-white rounded-md shadow-lg  group-hover:block hover:block">
                                <div>
                                    <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                                        <span className="text-gray-800">
                                            {user.displayName
                                                ? user.displayName
                                                : "User"}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {user.email
                                                ? user.email
                                                : "dealer@example.com"}
                                        </span>
                                    </div>
                                    <ul className="flex flex-col p-2 my-2 space-y-1">
                                        <li>
                                            <Link
                                                to="/"
                                                className="block px-2 py-1 text-teal-600  transition rounded-md hover:bg-gray-100"
                                            >
                                                Home Page
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="manage-inventory"
                                                className="block px-2 py-1  text-teal-600 transition rounded-md hover:bg-gray-100"
                                            >
                                                Manage Inventory
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="flex items-center text-xl justify-center p-4 text-blue-600 underline border-t">
                                        <span onClick={handleSignOut}>
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardTopHeader;
