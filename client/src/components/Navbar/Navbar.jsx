import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) => {
    return `cursor-pointer px-4 py-2 rounded ${
      isActive(path) ? "text-[#00BFFF]" : "text-black"
    } hover:text-[#00BFFF] transition-colors duration-300`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-1 fixed w-full left-0 right-0 top-0 flex items-center justify-between bg-white shadow-md z-[60] transition-colors duration-300`}
      style={{
        height: "4rem",
      }}
    >
      {/* Logo Section */}
      <div
        className="flex items-center pl-4"
        onClick={() => navigate("/")}
      >
        <img
          src="/Fine2.png"
          alt="Logo"
          className="h-10 w-auto object-contain cursor-pointer"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 md:space-x-8 flex-wrap justify-center">
        {/* Home Link with Button Style */}
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full inline-flex items-center animate-pulse"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        {/* Other Links */}
        <div
          className={getLinkClasses("/services")}
          onClick={() => navigate("/services")}
        >
          Services
        </div>
        <div
          className={getLinkClasses("/officers")}
          onClick={() => navigate("/officers")}
        >
          Officers
        </div>
        <div
          className={getLinkClasses("/post-offices")}
          onClick={() => navigate("/post-offices")}
        >
          Post Offices
        </div>
        <div className={getLinkClasses("/about")} onClick={() => navigate("/about")}>
          About
        </div>
        <div
          className={getLinkClasses("/contact")}
          onClick={() => navigate("/contact")}
        >
          Contact
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 pr-4">
        <button
          className="bg-white text-black border-2 border-black px-6 py-1 rounded transition-all duration-300 hover:text-[#ADD8E6] hover:border-[#ADD8E6]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-[#004aad] text-white px-6 py-1 rounded transition-all duration-300 hover:text-black hover:bg-[#f8f9fa] hover:border-[#ADD8E6] border-2 border-black"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
