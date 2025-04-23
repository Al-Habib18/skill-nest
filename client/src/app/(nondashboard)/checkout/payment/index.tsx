/** @format */

import React from "react";
import StripeProvider from "./StripeProvider";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import { useCreateTransactionMutation } from "@/state/api";
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { useClerk, useUser } from "@clerk/nextjs";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import CoursePreview from "@/components/CoursePreview";
import { CreditCardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PaymentPageContent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [createTransaction] = useCreateTransactionMutation();
    const { course, courseId } = useCurrentCourse();
    const { navigateToStep } = useCheckoutNavigation();
    const { user } = useUser();
    const { signOut } = useClerk();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) {
            toast.error("Stripe sevvice is not available");
            return;
        }

        const baseUrl = process.env.NEXT_PUBLIC_LOCAL_URL
            ? `http://${process.env.NEXT_PUBLIC_LOCAL_URL}`
            : process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : undefined;

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${baseUrl}/checkout?step=3&id=${courseId}`,
            },
            redirect: "if_required",
        });

        if (result.paymentIntent?.status === "succeeded") {
            const transactionData: Partial<Transaction> = {
                userId: user?.id as string,
                transactionId: result.paymentIntent.id,
                courseId: courseId as string,
                paymentProvider: "stripe",
                amount: course?.price || 0,
            };
            await createTransaction(transactionData);
            navigateToStep(3);
        } else {
            if (result.error?.message) {
                toast.error(result.error.message);
            }
        }
    };

    const handleSignOutAndNavigate = async () => {
        await signOut();
        navigateToStep(1);
    };

    if (!course) return null;

    return (
        <div className="flex flex-col w-full">
            {" "}
            <div className="sm:flex gap-10 mb-6">
                {/* order summary */}
                <div className="basis-1/2 rounded-lg">
                    <CoursePreview course={course} />
                </div>

                {/* payment form */}
                <div className=" basis-1/2">
                    <form
                        action=""
                        id="payment-form"
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4 bg-customgreys-secondarybg px-10 py-10 rounded-lg">
                            <h1 className="text-2xl font-bold">Checkout</h1>
                            <p className=" text-sm text-gray-400">
                                Fuill out the payment below to compolete your
                                purchase
                            </p>

                            <div className="flex flex-col gap-2 w-full mt-6">
                                <h3 className="text-md">Payment Method</h3>
                                <div
                                    className="flex flex-col border-[2px] border-white-100/5 rounded-lg;
"
                                >
                                    {" "}
                                    <div className="flex items-center gap-2 bg-white-50/5 py-2 px-2">
                                        {" "}
                                        <CreditCardIcon size={24} />
                                        <span>Credit/Debit Card</span>
                                    </div>
                                    <div className=" px-4 py-6">
                                        <PaymentElement />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Nanivation Buttons */}
            <div className="w-full mx-auto flex justify-between items-center  mt-6">
                <Button
                    type="button"
                    onClick={handleSignOutAndNavigate}
                    className="hover:bg-blue-500 bg-blue-700 duration-300"
                >
                    Switch Account
                </Button>
                <Button
                    form="payment-form"
                    type="submit"
                    className="hover:bg-blue-500 bg-blue-700 duration-300"
                >
                    Pay with Credit Card
                </Button>
            </div>
        </div>
    );
};

const PaymentPage = () => (
    <StripeProvider>
        <PaymentPageContent />
    </StripeProvider>
);
export default PaymentPage;
