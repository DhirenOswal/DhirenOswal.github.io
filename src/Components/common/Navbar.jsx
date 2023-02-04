import React, { useEffect, useState } from "react";
import cssClasses from "../Home/styles/MainPage.module.css";
import logoImg from "../../Assets/Logo/OrbizLogoH.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [handleNavbar, setHandleNavbar] = useState(false);
    const pathName = useLocation();

    const handleHamburgerClick = () => setHandleNavbar(!handleNavbar);

    useEffect(() => {
        console.log('Route changed')
      setHandleNavbar(false);
    }, [pathName]);
    

    return (
        <>
            <header className={`${cssClasses.main_menu_area} hidden lg:block`}>
                <nav className={`${cssClasses.navbar} ${cssClasses.navbar_expand_lg} ${cssClasses.navbar_light} ${cssClasses.bg_light}`}>
                    <a className={cssClasses.navbar_brand} href="/">
                        <img className="w-32" src={logoImg} alt="" />
                    </a>
                    <div className={`${cssClasses.collapse} ${cssClasses.navbar_collapse}`} id={cssClasses.navbarSupportedContent}>
                        <ul className={cssClasses.navbar_nav}>
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/" className={`${cssClasses.nav_link}`}>
                                    Home
                                </Link>
                            </li>
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/projects" className={`${cssClasses.nav_link}`}>
                                    Projects
                                </Link>
                            </li>
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/CompletedProjects" className={`${cssClasses.nav_link}`}>
                                    Completed Projects
                                </Link>
                            </li>
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/enquire" className={`${cssClasses.nav_link}`}>
                                    Enquire
                                </Link>
                            </li>
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/about-us" className={`${cssClasses.nav_link}`}>
                                    About Us
                                </Link>
                            </li>
                            {/* <li className={`${cssClasses.nav_item}`}>
                                <Link to="/contact-us" className={`${cssClasses.nav_link}`}>
                                    Contact Us
                                </Link>
                            </li> */}
                            <li className={`${cssClasses.nav_item}`}>
                                <Link to="/KnowledgeBank" className={`${cssClasses.nav_link}`}>
                                    Knowledge Bank
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* navbar for small devices  */}
            <header>
                <nav class="lg:hidden w-full p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div class="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" class="flex items-center">
                            <a className={cssClasses.navbar_brand} href="/">
                                <img className="w-32" src={logoImg} alt="" />
                            </a>
                        </a>
                        <button onClick={handleHamburgerClick} data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div class={`w-full shadow-2xl ${handleNavbar ? "" : "hidden"}`} id="navbar-hamburger">
                            <ul class="w-full flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/" className={`${cssClasses.nav_link}`}>
                                        Home
                                    </Link>
                                </li>
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/projects" className={`${cssClasses.nav_link}`}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/CompletedProjects" className={`${cssClasses.nav_link}`}>
                                        Completed Projects
                                    </Link>
                                </li>
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/about-us" className={`${cssClasses.nav_link}`}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/enquire" className={`${cssClasses.nav_link}`}>
                                        Enquire
                                    </Link>
                                </li>
                                <li className="w-full text-center text-2xl font-semibold text-[#374151] hover:text-[#081828] py-3">
                                    <Link to="/KnowledgeBank" className={`${cssClasses.nav_link}`}>
                                        Knowledge Bank
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
