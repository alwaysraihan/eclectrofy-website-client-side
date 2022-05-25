import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase-Setup/firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <>
            <div class="container mx-auto my-5 p-5">
                <div class="md:flex no-wrap md:-mx-2  ">
                    {/* <!-- Left Side --> */}
                    <div class="w-full md:w-2/12 md:mx-2">
                        {/* <!-- Profile Card --> */}

                        <div class="bg-white p-3 border-t-4 border-green-400">
                            <div className="flex items-center justify-center">
                                <div class="image w-full overflow-hidden">
                                    {user.photoURL ? (
                                        <img
                                            className="h-auto w-full"
                                            src={user.photoURL}
                                            alt="profile"
                                        />
                                    ) : (
                                        <img
                                            className="h-auto w-full mx-auto"
                                            src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                                            alt="profile"
                                        />
                                    )}
                                </div>
                            </div>
                            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                                {user?.displayName}
                            </h1>

                            <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li class="flex items-center py-3">
                                    <span className="md:hidden lg:block">
                                        Status
                                    </span>
                                    <span class="ml-auto">
                                        <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                            Active
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- End of profile card --> */}
                        <div class="my-4"></div>

                        {/* <!-- End of friends card --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div class="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}
                        <div class="bg-white p-3 shadow-sm rounded-sm">
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg
                                        class="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                <span class="tracking-wide">About</span>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Name
                                        </div>
                                        <div class="px-4 py-2">
                                            {user.displayName}
                                        </div>
                                    </div>
                                    {/* <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Last Name
                                        </div>
                                        <div class="px-4 py-2">Doe</div>
                                    </div> */}
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Gender
                                        </div>
                                        <div class="px-4 py-2">Female</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <div class="px-4 py-2">
                                            +11 998001001
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Current Address
                                        </div>
                                        <div class="px-4 py-2">
                                            Beech Creek, PA, Pennsylvania
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Permanant Address
                                        </div>
                                        <div class="px-4 py-2">
                                            Arlington Heights, IL, Illinois
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Email
                                        </div>
                                        <div class="px-4 py-2">
                                            <a
                                                class="text-blue-800"
                                                href="mailto:jane@example.com"
                                            >
                                                {user.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">
                                            Birthday
                                        </div>
                                        <div class="px-4 py-2">
                                            Feb 06, 1998
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button class="block   bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    Edit
                                </button>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div class="my-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
