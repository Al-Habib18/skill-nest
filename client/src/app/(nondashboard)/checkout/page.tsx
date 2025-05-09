/** @format */
"use client";
import React from "react";
import Loading from "@/components/Loading";
import { useUser } from "@clerk/nextjs";
import WizardStepper from "@/components/WizardStepper";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import CheckoutDetailsPage from "./details/index";
import PaymentPage from "./payment";
import CompletionPage from "./completion";

const CheckoutWizard = () => {
    const { isLoaded } = useUser();
    const { checkoutStep } = useCheckoutNavigation();
    if (!isLoaded) return <Loading />;

    const renderStep = () => {
        switch (checkoutStep) {
            case 1:
                return <CheckoutDetailsPage />;
            case 2:
                return <PaymentPage />;
            case 3:
                return <CompletionPage />;
            default:
                return <CheckoutDetailsPage />;
        }
    };

    return (
        <div className="w-full px-4 h-full flex flex-col items-center py-12">
            <WizardStepper currentStep={checkoutStep} />
            <div className="w-full max-w-screen-lg flex flex-col items-center mt-10">
                {renderStep()}
            </div>
        </div>
    );
};

export default CheckoutWizard;
