import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
const DashboardSlider = () => {
    const { id } = useParams();
    const routes = [
        {
            path: "/dashboard",
            name: "Dashboad",
            icon: <FaHome />,
        },
        {
            path: `${id ? `/dashboard/my-item` : "my-item"}`,
            name: "My Items",
            icon: <FaUser />,
        },

        {
            path: `/dashboard/${id ? `inventory/${id}` : "manage-inventory"}`,
            name: `${id ? "Update Inventory" : "Manage Inventory"}`,
            icon: <BsCartCheck />,
        },
        {
            path: `${
                id ? `/dashboard/add-inventory-item` : "add-inventory-item"
            }`,
            name: "Add New Item",
            icon: <AiTwotoneFileExclamation />,
        },
        {
            path: `${id ? `/dashboard/anlaysetic` : "anlaysetic"}`,
            name: "Analysetic",
            icon: <BiAnalyse />,
        },
        {
            path: `${id ? `/dashboard/admin-chat` : "admin-chat"}`,
            name: "Messages",
            icon: <MdMessage />,
        },
        {
            path: `${id ? `/dashboard/settings` : "settings"}`,
            name: "Settings",
            icon: <BiCog />,
            exact: true,
        },
        {
            path: `${id ? `/dashboard/saved` : "saved"}`,
            name: "Saved",
            icon: <AiFillHeart />,
        },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{ width: isOpen ? "200px" : "50px" }}
                    className="bg-[rgb(0,7,61)] p-2 text-white min-h-[100vh] "
                >
                    <div
                        className={` mt-6 flex mb-8 items-center ${
                            isOpen ? "justify-between" : "justify-center"
                        }`}
                    >
                        {isOpen ? (
                            <h1 className="text-sm font-bold ">
                                Mange your warehouse
                            </h1>
                        ) : (
                            ""
                        )}
                        <FaBars onClick={toggle} />
                    </div>

                    <section className="routes">
                        <nav>
                            {routes.map((route) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-yellow-500 flex gap-3 px-3 py-2  transition-all rounded-md  hover:bg-[rgb(45,51,89)]    items-center justify-start mt-3"
                                            : "flex gap-3 px-3 py-2  transition-all rounded-md  hover:bg-[rgb(45,51,89)]  da items-center justify-start mt-3"
                                    }
                                    key={route.name}
                                    to={route.path}
                                >
                                    <div className="">{route.icon}</div>
                                    {isOpen ? <div>{route.name}</div> : ""}
                                </NavLink>
                            ))}
                        </nav>
                    </section>
                </motion.div>
            </div>
        </>
    );
};

export default DashboardSlider;
