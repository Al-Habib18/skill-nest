/** @format */

"use client";

import {
    NotificationSettingsFormData,
    notificationSettingsSchema,
} from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation } from "@/state/api";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "./CustomFormField";
import { Button } from "@/components/ui/button";

const SharedNotificationSettings = ({
    title = "Notification Settings",
    subtitle = "Manage your notification settings",
}: SharedNotificationSettingsProps) => {
    const { user } = useUser();
    const [updateUser] = useUpdateUserMutation();

    const currentSettings =
        (user?.publicMetadata as { settings?: UserSettings })?.settings || {};

    const methods = useForm<NotificationSettingsFormData>({
        resolver: zodResolver(notificationSettingsSchema),
        defaultValues: {
            courseNotifications: currentSettings.courseNotifications || false,
            emailAlerts: currentSettings.emailAlerts || false,
            smsAlerts: currentSettings.smsAlerts || false,
            notificationFrequency:
                currentSettings.notificationFrequency || "daily",
        },
    });

    const onSubmit = async (data: NotificationSettingsFormData) => {
        if (!user) return;

        const updatedUser = {
            userId: user.id,
            publicMetadata: {
                ...user.publicMetadata,
                settings: {
                    ...currentSettings,
                    ...data,
                },
            },
        };

        try {
            const updateduser = await updateUser(updatedUser);
            console.log("updated user : ", updateduser);
        } catch (error) {
            console.error("Failed to update user settings: ", error);
        }
    };

    if (!user) return <div>Please sign in to manage your settings.</div>;

    return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Form {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <div className="space-y-4">
                        <CustomFormField
                            name="courseNotifications"
                            label="Course Notifications"
                            type="switch"
                        />{" "}
                        <CustomFormField
                            name="emailAlerts"
                            label="email Notifications"
                            type="switch"
                        />{" "}
                        <CustomFormField
                            name="smsAlerts"
                            label="sms Notifications"
                            type="switch"
                        />
                        <CustomFormField
                            name="NotificationsFrequency"
                            label="Notifications Frequency"
                            type="select"
                            options={[
                                { value: "immediate", label: "Immediate" },
                                { value: "daily", label: "Daily" },
                                { value: "weekly", label: "Weekly" },
                                { value: "none", label: "None" },
                            ]}
                            placeholder="Notifications Frequency"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="bg-blue-700 mt-35 hover:bg-blue-500 duration-300 text-gray-100"
                    >
                        Update Settings
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SharedNotificationSettings;
