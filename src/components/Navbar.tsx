
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, User, LogOut, Shield, HelpCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-realestate-blue" />
          <span className="text-xl font-bold text-realestate-blue">VR Estates</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-realestate-gray hover:text-realestate-blue transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-realestate-gray hover:text-realestate-blue transition-colors">
            Properties
          </Link>
          <Link to="/about" className="text-realestate-gray hover:text-realestate-blue transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-realestate-gray hover:text-realestate-blue transition-colors">
            Contact
          </Link>
          <Link to="/help" className="text-realestate-gray hover:text-realestate-blue transition-colors">
            Help
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" className="text-realestate-teal border-realestate-teal hover:bg-realestate-teal hover:text-white">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                </Link>
              )}
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="text-realestate-gray hover:text-realestate-blue"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="outline" className="text-realestate-gray hover:text-realestate-blue">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/book-visit">
                <Button className="bg-realestate-teal hover:bg-realestate-blue text-white">
                  Book a Visit
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-realestate-blue" />
          ) : (
            <Menu className="h-6 w-6 text-realestate-blue" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 space-y-4 animate-fade-in">
          <Link 
            to="/" 
            className="block text-realestate-gray hover:text-realestate-blue transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/properties" 
            className="block text-realestate-gray hover:text-realestate-blue transition-colors"
            onClick={toggleMenu}
          >
            Properties
          </Link>
          <Link 
            to="/about" 
            className="block text-realestate-gray hover:text-realestate-blue transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block text-realestate-gray hover:text-realestate-blue transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link 
            to="/help" 
            className="flex items-center text-realestate-gray hover:text-realestate-blue transition-colors"
            onClick={toggleMenu}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Link>
          
          {user ? (
            <div className="space-y-4">
              {isAdmin && (
                <Link to="/admin" onClick={toggleMenu}>
                  <Button className="w-full bg-realestate-teal hover:bg-realestate-blue text-white">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              <Button
                onClick={handleSignOut}
                className="w-full"
                variant="outline"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link to="/auth" onClick={toggleMenu}>
                <Button className="w-full" variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/book-visit" onClick={toggleMenu}>
                <Button className="w-full bg-realestate-teal hover:bg-realestate-blue text-white">
                  Book a Visit
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
