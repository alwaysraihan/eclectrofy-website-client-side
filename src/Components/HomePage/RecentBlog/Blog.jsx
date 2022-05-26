import React from "react";

const Blog = () => {
    return (
        <>
            <div className="bg-white">
                <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
                    <div class="border-b mb-5 flex justify-between text-sm">
                        <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                            <span class="font-semibold inline-block">
                                Recent Blogs
                            </span>
                        </div>
                        <button>See All</button>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                            <a href="/">
                                <img
                                    class="w-full"
                                    src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Sunset in the mountains"
                                />
                            </a>
                            <div class="px-6 py-4 mb-auto">
                                <div class="mb-3">
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Cooking
                                    </a>
                                    ,{" "}
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Recipe
                                    </a>
                                </div>
                                <a
                                    href="/"
                                    class="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                                >
                                    Simplest Salad Recipe ever
                                </a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                            <div class="flex items-center px-6 pb-4">
                                <a href="/">
                                    <img
                                        class="w-12 h-12 rounded-full mr-2"
                                        src="https://tailwindcss.com/img/jonathan.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                </a>
                                <div class="text-sm">
                                    <a
                                        href="/"
                                        class="text-gray-900 font-medium leading-none hover:text-indigo-600"
                                    >
                                        Jonathan Reinink
                                    </a>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                            <a href="/">
                                <img
                                    class="w-full"
                                    src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Sunset in the mountains"
                                />
                            </a>
                            <div class="px-6 py-4 mb-auto">
                                <div class="mb-3">
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Cooking
                                    </a>
                                    ,{" "}
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Recipe
                                    </a>
                                </div>
                                <a
                                    href="/"
                                    class="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 capitalize"
                                >
                                    Salad Ideas of asian chefs
                                </a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                            <div class="flex items-center px-6 pb-4">
                                <a href="/">
                                    <img
                                        class="w-12 h-12 rounded-full mr-2"
                                        src="https://tailwindcss.com/img/jonathan.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                </a>
                                <div class="text-sm">
                                    <a
                                        href="/"
                                        class="text-gray-900 font-medium leading-none hover:text-indigo-600"
                                    >
                                        Jonathan Reinink
                                    </a>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded overflow-hidden shadow-lg flex flex-col">
                            <a href="/">
                                <img
                                    class="w-full"
                                    src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Sunset in the mountains"
                                />
                            </a>
                            <div class="px-6 py-4 mb-auto">
                                <div class="mb-3">
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Cooking
                                    </a>
                                    ,{" "}
                                    <a
                                        href="/"
                                        class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Recipe
                                    </a>
                                </div>
                                <a
                                    href="/"
                                    class="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                                >
                                    Best Pizza in Town
                                </a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                            <div class="flex items-center px-6 pb-4">
                                <a href="/">
                                    <img
                                        class="w-12 h-12 rounded-full mr-2"
                                        src="https://tailwindcss.com/img/jonathan.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                </a>
                                <div class="text-sm">
                                    <a
                                        href="/"
                                        class="text-gray-900 font-medium leading-none hover:text-indigo-600"
                                    >
                                        Jonathan Reinink
                                    </a>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
