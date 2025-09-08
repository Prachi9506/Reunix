import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  GraduationCap,
  Menu,
  X,
  User,
  Users,
  Calendar,
  Briefcase,
  MessageSquare,
  LogOut,
  Award,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsProfileMenuOpen(false);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const navItems = user
    ? [
        { name: "Dashboard", href: "/dashboard", icon: User },
        { name: "Mentorship", href: "/mentorship", icon: Users },
        { name: "Events", href: "/events", icon: Calendar },
        { name: "Jobs", href: "/jobs", icon: Briefcase },
        { name: "Community", href: "/community", icon: MessageSquare },
        { name: "Success Stories", href: "https://prachi9506.github.io/Success-Stories-template-can-be-used-in-other-projects-/", icon: User },
        { name: "Anonymous Reviews", href: "https://reviews-backend-sih.vercel.app/", icon: MessageSquare },
      ]
    : [];

  const renderNavItems = (onClick?: () => void) => 
    navItems.map((item) => {
      const Icon = item.icon;
      return (
        <Link
          key={item.name}
          to={item.href}
          onClick={onClick}
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-md"
        >
          <Icon className="h-4 w-4" />
          <span>{item.name}</span>
        </Link>
      );
    });

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <GraduationCap className="h-8 w-8 text-cyan-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ReUnix
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              {renderNavItems()}
            </div>
          )}

          {/* Profile / Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none hover:scale-105 transition-all duration-200"
                >
                  <img
                    src={
                      user?.profile?.avatar ||
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                    }
                    alt={user?.name || "User"}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-cyan-500 hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-200"
                  />
                  <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
                    {user?.name}
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 transform transition-all duration-300 origin-top-right ${
                    isProfileMenuOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {user?.role || "Member"}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                  >
                    <User className="h-4 w-4 mr-2" /> Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                  >
                    <Award className="h-4 w-4 mr-2" /> Achievements
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            {user && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden ml-2 text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none hover:scale-110 transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && user && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {renderNavItems(() => setIsMenuOpen(false))}

              {/* Mobile Profile Menu */}
              <div className="mt-2 border-t border-gray-200 dark:border-gray-700 pt-2">
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                >
                  <User className="h-4 w-4 mr-2" /> Profile
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                >
                  <Award className="h-4 w-4 mr-2" /> Achievements
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900 rounded-md transition-all duration-200 hover:scale-105"
                >
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
