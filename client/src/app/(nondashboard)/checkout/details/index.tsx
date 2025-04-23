/** @format */
"use client";
import React from "react";
import Loading from "@/components/Loading";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import { useSearchParams } from "next/navigation";
import CoursePreview from "@/components/CoursePreview";
import { GuestFormData, guestSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import SignUpComponent from "@/components/SignUp";
import SignInComponent from "@/components/SignIn";

function CheckoutDetailsPage() {
    const { course: selectedCourse, isLoading, isError } = useCurrentCourse();
    const searchParams = useSearchParams();
    const showSignUp = searchParams.get("showSignUp") === "true";

    const methods = useForm<GuestFormData>({
        resolver: zodResolver(guestSchema),
        defaultValues: {
            email: "",
        },
    });

    if (isLoading) return <Loading />;
    if (isError) return <div>Failded to fetch course</div>;
    if (!selectedCourse) return <div>Course not found</div>;

    return (
        <div className="w-full h-fit gap-10">
            <div className="sm:flex gap-10">
                <div className="basis-1/2 rounded-lg">
                    <CoursePreview course={selectedCourse} />
                </div>
                {/* Step 2 */}
                <div className="basis-1/2 flex-1 h-auto flex flex-col gap-10">
                    <div className="w-full bg-gray-800 py-12 px-24 rounded-lg">
                        <h2 className=" text-3xl font-bold text-center mb-2">
                            Guest Checkout
                        </h2>
                        <p className=" mb-6 text-sm text-center text-gray-400 mx-auto">
                            Enter email to receive course access details and
                            order confirmation. You can create an account after
                            purchase.
                        </p>
                        <Form {...methods}>
                            <form
                                onSubmit={methods.handleSubmit((data) => {
                                    console.log(data);
                                })}
                                className="space-y-8"
                            >
                                <CustomFormField
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    className="w-full rounded mt-4"
                                    labelClassName="font-normal text-white-50"
                                    inputClassName="py-3 bg-gray-400  border-1 border-blue-50 w-full p-2 rounded text-gray-900"
                                />
                                <Button
                                    type="submit"
                                    className="w-full my-6 py-3 bg-blue-700 hover:bg-blue-600 text-white-100 rounded shadow text-sm font-semibold"
                                >
                                    Continue as Guest
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="flex items-center justify-between">
                        <hr className="w-full border-customgreys-dirtyGrey" />{" "}
                        <span className=" px-4 text-sm text-gray-400 whitespace-nowrap">
                            or
                        </span>
                        <hr className="w-full border-customgreys-dirtyGrey" />
                    </div>{" "}
                    {/* Step 3 */}
                    <div className="w-full bg-customgreys-secondarybg flex justify-center items-center rounded-lg">
                        {showSignUp ? <SignUpComponent /> : <SignInComponent />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutDetailsPage;
