import React from "react";

const MangeProduct = ({ set }) => {
    return (
        <>
            <div className=" my-5 px-4  lg:px-12 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
                <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col">
                    <section className="bg-slate-100 p-4 shadow">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                                Add a new Product
                            </h2>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default MangeProduct;
