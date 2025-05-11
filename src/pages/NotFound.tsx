
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-realestate-blue mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-realestate-teal mb-4">Page Not Found</h2>
          <p className="text-realestate-gray max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link to="/">
            <Button className="bg-realestate-teal hover:bg-realestate-blue flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
