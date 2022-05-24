import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, setCardErr] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardErr(error?.message || "");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    disabled={!stripe}
                    className="h-16 w-full rounded-sm bg-indigo-600 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
                >
                    Pay
                </button>
            </form>
            <p className="text-warning">{cardErr}</p>
        </>
    );
};

export default CheckoutForm;
