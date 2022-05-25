import React from "react";

const OrderDeleteModal = ({ setOrder, order }) => {
    const handleDeletOrder = async (id) => {};
    return (
        <>
            <input type="checkbox" id="order-delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className=" text-xs md:text-sm font-semibold text-gray-600 ">
                        Product Name:{" "}
                        <span className="font-bold">{order?.productName}</span>
                    </h1>
                    <h1 className="text-sm md:text-xl font-bold">
                        Are you sure? You want to Delete the Order ?
                    </h1>

                    <div className="flex gap-5 justify-end mt-5">
                        <button
                            onClick={() => setOrder(null)}
                            className="btn btn-accent text-white"
                        >
                            Cancel
                        </button>
                        <button className="btn btn-warning bg-red-500 text-white">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;
