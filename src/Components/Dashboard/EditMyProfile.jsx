import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";

const EditMyProfile = ({ refetch, setEdit }) => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();

    const onFormSubmit = async (data) => {
        const rivew = {
            education: data.education,
            address: data.address,
            phone: data.phone,
            linkedin: data.linkedin,
        };

        axios
            .put(`https://elctrofy.herokuapp.com/user/${user.email}`, rivew, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {});
        refetch();
        toast.success("Your Data Successfull Updated", {
            toastId: "addProfile",
        });
        setEdit(null);

        reset();
    };

    return (
        <>
            <div class="p-5">
                <div class="mx-4 p-4">
                    <div class="flex items-center">
                        <div class="flex items-center text-teal-600 relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-bookmark "
                                >
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                                Personal
                            </div>
                        </div>
                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                        <div class="flex items-center text-white relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-user-plus "
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line
                                        x1="23"
                                        y1="11"
                                        x2="17"
                                        y2="11"
                                    ></line>
                                </svg>
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                                Account
                            </div>
                        </div>

                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div class="flex items-center text-gray-500 relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-database "
                                >
                                    <ellipse
                                        cx="12"
                                        cy="5"
                                        rx="9"
                                        ry="3"
                                    ></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                Confirm
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
                    <div class="mt-8 p-4">
                        <div>
                            <div class="flex flex-col md:flex-row">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Eductaion
                                    </div>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="text"
                                            placeholder="Yor Education Info"
                                            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="education"
                                            {...register("education", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.education && (
                                        <span className="text-red-500">
                                            Education is required
                                        </span>
                                    )}
                                </div>
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Your Address
                                    </div>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            placeholder="Enter Your Address"
                                            type="text"
                                            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="address"
                                            {...register("address", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.address && (
                                        <span className="text-red-500">
                                            Address is required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row">
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Phone
                                    </div>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="tel"
                                            placeholder="Your Phone Nubmer"
                                            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="phone"
                                            {...register("phone", {
                                                minLength: 11,
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.phone && (
                                        <span className="text-red-500">
                                            Enter a vaild number
                                        </span>
                                    )}
                                </div>
                                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        LinkedIn Profile
                                    </div>
                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="url"
                                            placeholder="Your Linkedin  Address "
                                            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="linkedin"
                                            {...register("linkedin", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.linkedin && (
                                        <span className="text-red-500">
                                            Linkedin url is required
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="flex p-2 mt-4">
                            <button
                                type="button"
                                class=" hidden text-base hover:scale-110 focus:outline-none md:flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out  border-gray-600 transition"
                            >
                                Previous
                            </button>
                            <div class="flex-auto flex flex-row-reverse">
                                <button
                                    type="submit"
                                    class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600  bg-teal-600  text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEdit(null)}
                                    class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer     hover:bg-teal-200   bg-teal-100   text-teal-700    border duration-200 ease-in-out  border-teal-600 transition"
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditMyProfile;