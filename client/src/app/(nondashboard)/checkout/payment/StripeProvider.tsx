/** @format */

import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
    loadStripe,
    Appearance,
    StripeElementsOptions,
} from "@stripe/stripe-js";
import { useCreateStripePaymentIntentMutation } from "@/state/api";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import Loading from "@/components/Loading";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Missing Stripe Publishable Key");
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const appearance: Appearance = {
    theme: "stripe",
    variables: {
        colorPrimary: "#0570de",
        colorBackground: "#18181b",
        colorText: "#d2d2d2",
        colorDanger: "#df1b41",
        colorTextPlaceholder: "#6e6e6e",
        fontFamily: "Arial, sans-serif",
        fontSizeBase: "16px",
        spacingUnit: "4px",
        borderRadius: "10px",
    },
};

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
    const [clientSecret, setClientSecret] = React.useState<string | "">("");
    const [createStripePaymentIntent] = useCreateStripePaymentIntentMutation();
    const { course } = useCurrentCourse();

    useEffect(() => {
        if (!course) return;
        const fetchePaymentIntent = async () => {
            const response = await createStripePaymentIntent({
                amount: course?.price ?? 999999,
            }).unwrap();
            setClientSecret(response?.clientSecret);
        };
        fetchePaymentIntent();
    }, [createStripePaymentIntent, course, course?.price]);

    const options: StripeElementsOptions = {
        clientSecret,
        appearance,
    };

    if (!clientSecret) {
        return <Loading />;
    }

    return (
        <Elements stripe={stripePromise} options={options}>
            {children}
        </Elements>
    );
};

export default StripeProvider;
