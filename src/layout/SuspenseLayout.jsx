import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader"
 // Adjust the path as needed

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseLayout;
