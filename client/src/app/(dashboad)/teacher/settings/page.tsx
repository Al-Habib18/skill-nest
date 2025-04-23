/** @format */

import React from "react";
import SharedNotificationSetting from "@/components/SharedNotificationSetting";

const TeacherSettings = () => {
    return (
        <div className="w-3/5">
            <SharedNotificationSetting
                title="Teacher Settings"
                subtitle="Teacher your user settings"
            />
        </div>
    );
};

export default TeacherSettings;
