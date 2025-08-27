import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { useLocation, Outlet } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {!isHomePage && <Breadcrumbs />}
      <main className="flex-1">
        <Outlet />   {/* 👈 renders Home, HeritagesList, etc. */}
      </main>
      <Footer />
    </div>
  );
}
