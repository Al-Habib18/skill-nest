/** @format */

import NonDaashboard from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <NonDaashboard />
            <main className="flex flex-grow w-full h-full justify-center items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}
