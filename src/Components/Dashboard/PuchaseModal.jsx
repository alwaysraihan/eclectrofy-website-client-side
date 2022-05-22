import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";

const PurchaseModal = ({
    purchaseData,
    setPurchaseData,
    quantity,
    subTotal,
}) => {
    const { _id, name } = purchaseData;

    const [user] = useAuthState(auth);
    const handleBooking = (event) => {
        event.preventDefault();
        // const slot = event.target.slot.value;
        // const booking = {
        //     treatmentId: _id,
        //     treatment: name,
        //     slot,
        //     patient: user.email,
        //     patientName: user.displayName,
        //     phone: event.target.phone.value,
        // };
        // fetch("http://localhost:5000/booking", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(booking),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data?.success) {
        //             toast(`Appointment is set, at ${slot} `);
        //         } else if (!data.success) {
        //             toast.error(
        //                 `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
        //             );
        //         }

        // for closeing the modal
        //     setPurchaseData(null);
        // });
    };
    return (
        <>
            <input
                type="checkbox"
                id="purchase-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="purchase-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg mt-3 font-bold text-primary">
                        Order Info for {name}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 my-5  justify-items-center"
                    >
                        <input
                            type="text"
                            name="productName"
                            value={`Product: ${name}`}
                            className="input w-full max-w-xs"
                            required
                            disabled
                        />
                        <input
                            type="text"
                            name="productInfo"
                            value={`Quantity: ${quantity}`}
                            className="input w-full max-w-xs"
                            required
                            disabled
                        />
                        <input
                            type="text"
                            name="productInfo"
                            value={`Sub-Total: $ ${subTotal} have to pay`}
                            className="input w-full max-w-xs"
                            required
                            disabled
                        />
                        <input
                            type="text"
                            name="name"
                            value={user.displayName}
                            className="input w-full max-w-xs"
                            required
                            disabled
                        />

                        <input
                            type="email"
                            name="email"
                            disabled
                            value={user.email}
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            name="address"
                            type="text"
                            placeholder="Your Address"
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="submit"
                            value="Place Order"
                            className="btn btn-secondary w-full max-w-xs"
                            required
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchaseModal;
