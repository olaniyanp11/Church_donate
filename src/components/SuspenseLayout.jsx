import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader.jsx/Loader";
export default function SuspenseLayout() {
    return (
        <Suspense fallback={<Loader width={16} />}>
            <Outlet />
        </Suspense>
    );
}
