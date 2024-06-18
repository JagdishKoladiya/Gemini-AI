"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 sm:px-8 px-0 shadow-md ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Gemini AI</span>
          
          </Link>

       
        </div>
        <div className="md:flex items-center space-x-4 rtl:space-x-reverse">
          <ThemeSwitcher />
        
        </div>
        
      </div>
   
    </nav>
  );
};

export default Navbar;