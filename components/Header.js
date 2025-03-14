"use client"
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  CodeBracketIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  ChevronDownIcon,
  Bars3Icon,
  PlusIcon,
  XMarkIcon,
  MinusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
// Removed framer-motion import as we're not using animations
import Image from "next/image";

const Header = ({ setIsDropdownOpen }) => {
  // State for dropdown menus - fixed to have individual control
  const [dropdownStates, setDropdownStates] = useState({
    digitalMarketing: false,
    webDev: false,
    consulting: false,
    caseStudies: false
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  
  // Add a ref to track initial render
  const isInitialRender = useRef(true);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set isInitialRender to false after first render
  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  // No longer using animation

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle mobile dropdown menus
  const handleMobileDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  // Modified handler for desktop dropdown menus to prevent multiple dropdowns opening
  const handleDropdownToggle = (menu, isOpen) => {
    // Close all other dropdowns when opening a new one
    if (isOpen) {
      const newDropdownStates = {
        digitalMarketing: false,
        webDev: false,
        consulting: false,
        caseStudies: false
      };
      newDropdownStates[menu] = true;
      setDropdownStates(newDropdownStates);
    } else {
      setDropdownStates(prev => ({...prev, [menu]: false}));
    }
    
    setIsDropdownOpen && setIsDropdownOpen(isOpen);
  };

  // Preload logo images
  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        "/assets/images/Digital Solution.webp",
        "/assets/images/Digital Solution Logo.webp",
      ];

      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = document.createElement("img");
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
      } catch (error) {
        console.warn("Image preloading failed:", error);
      }
    };

    preloadImages();
  }, []);

  // Logo component
  const LogoImage = () => {
    const logoSrc =
      pathname === "/" || isScrolled
        ? "/assets/images/Digital Solution.webp"
        : "/assets/images/Digital Solution Logo.webp";

    return (
      <Image
        src={logoSrc}
        alt="GDC Digital Solutions Logo"
        width={240}
        height={60}
        className="h-auto w-auto"
        priority={true}
        loading="eager"
        sizes="240px"
        quality={85}
      />
    );
  };

  // Simple header without animation
  const HeaderWrapper = ({ children }) => {
    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`;
    
    return (
      <header className={headerClasses}>
        {children}
      </header>
    );
  };

  // Helper functions for styling
  const getTextColorClasses = () => {
    return pathname === "/"
      ? isScrolled
        ? "text-customGray hover:text-customYellow"
        : "text-customGray hover:text-customYellow"
      : isScrolled
      ? "text-customGray hover:text-customYellow"
      : "text-white hover:text-customYellow";
  };

  const getDropdownBgClass = () => isScrolled ? "bg-white" : "bg-transparent";

  const getDropdownTextColor = () => {
    if (pathname === "/") {
      return isScrolled
        ? "text-gray-700 hover:text-customYellow"
        : "text-gray-500 hover:text-customYellow";
    } else {
      return isScrolled
        ? "text-gray-700 hover:text-customYellow"
        : "text-white hover:text-customYellow";
    }
  };

  const getDropdownDescriptionColor = () => {
    if (pathname === "/") {
      return isScrolled ? "text-gray-500" : "text-gray-500";
    } else {
      return isScrolled ? "text-gray-500" : "text-gray-300";
    }
  };

  // Menu item generator
  const DesktopDropdownMenu = ({ name, title, items }) => (
    <div
      className="relative"
      onMouseEnter={() => handleDropdownToggle(name, true)}
      onMouseLeave={() => handleDropdownToggle(name, false)}
    >
      <button
        aria-expanded={dropdownStates[name]}
        aria-haspopup="true"
        aria-label={`${title} menu`}
        className={`flex items-center ${getTextColorClasses()} text-base font-bold`}
      >
        {title}
        <ChevronDownIcon
          className={`w-3 h-3 ml-1 transition-transform duration-300 ${
            dropdownStates[name] ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {dropdownStates[name] && (
        <div
          className={`absolute left-0 mt-2 w-64 ${getDropdownBgClass()} rounded-xl shadow-xl p-4 z-50`}
          role="menu"
          aria-label={`${title} menu`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center py-3 px-4 ${getDropdownTextColor()} group rounded-lg hover:bg-gray-50 hover:bg-opacity-10 transition-colors`}
            >
              {item.icon && (
                <item.icon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div>
                <div className="font-semibold">{item.title}</div>
                {item.description && (
                  <p className={`text-sm ${getDropdownDescriptionColor()} group-hover:text-customYellow`}>
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  // Mobile menu item generator
  const MobileDropdownMenu = ({ id, title, items }) => (
    <li className="relative">
      <button
        className="flex justify-between items-center w-full py-2 px-11 text-left font-light text-gray-800 hover:text-customYellow"
        onClick={() => handleMobileDropdownToggle(id)}
      >
        <span className="flex items-center">
          {activeDropdown === id ? (
            <MinusIcon className="w-5 h-5 mr-2" />
          ) : (
            <PlusIcon className="w-5 h-5 mr-2" />
          )}
          {title}
        </span>
      </button>
      {activeDropdown === id && (
        <ul className="pl-4 bg-gray-50 border-l border-gray-500">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block py-2 px-11 hover:text-customYellow"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  // Define menu items
  const menuItems = {
    digitalMarketing: {
      title: "Digital Marketing",
      items: [
        {
          title: "Google & Facebook Ads",
          description: "Optimize your ads for results",
          href: "/services/google-ads",
          icon: CurrencyDollarIcon
        },
        {
          title: "SEO / Copywriting",
          description: "Boost your search rankings",
          href: "/services/seo",
          icon: PresentationChartLineIcon
        }
      ]
    },
    webDev: {
      title: "Web & App Development",
      items: [
        {
          title: "Website Development",
          description: "Professional, engaging websites",
          href: "/services/development",
          icon: CodeBracketIcon
        },
        {
          title: "App Development",
          description: "Mobile & web applications",
          href: "/services/app-development",
          icon: DevicePhoneMobileIcon
        }
      ]
    },
    consulting: {
      title: "Consulting & Strategy",
      items: [
        {
          title: "Business Analysis & Consulting",
          description: "Strategic business solutions",
          href: "/services/business-consulting",
          icon: ChartBarIcon
        }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      items: [
        {
          title: "Website Development",
          href: "/case-studies/web-development",
          icon: CodeBracketIcon
        },
        {
          title: "Google Ads",
          href: "/case-studies/google-ads",
          icon: CurrencyDollarIcon
        }
      ]
    }
  };

  return (
    <HeaderWrapper>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-12">
        <Link href="/" className="flex items-center">
          <LogoImage />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-5">
          <Link
            href="/"
            className={`${getTextColorClasses()} text-base font-bold`}
          >
            Home
          </Link>

          {/* Generate desktop dropdown menus */}
          <DesktopDropdownMenu 
            name="digitalMarketing" 
            title={menuItems.digitalMarketing.title} 
            items={menuItems.digitalMarketing.items} 
          />
          
          <DesktopDropdownMenu 
            name="webDev" 
            title={menuItems.webDev.title} 
            items={menuItems.webDev.items} 
          />
          
          <DesktopDropdownMenu 
            name="consulting" 
            title={menuItems.consulting.title} 
            items={menuItems.consulting.items} 
          />

          <Link
            href="/about"
            className={`${getTextColorClasses()} text-base font-bold`}
          >
            About Us
          </Link>

          <DesktopDropdownMenu 
            name="caseStudies" 
            title={menuItems.caseStudies.title} 
            items={menuItems.caseStudies.items} 
          />

          <Link
            href="/contact-us"
            className={`border-2 ${
              pathname === "/"
                ? isScrolled
                  ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                  : "border-customGray text-customGray hover:text-white hover:border-white hover:bg-transparent"
                : isScrolled
                ? "border-customGray text-customGray hover:text-customYellow hover:border-customYellow hover:bg-transparent"
                : "border-white text-white hover:text-customYellow hover:border-customYellow hover:bg-transparent"
            } bg-transparent px-5 py-1.5 rounded-full text-base font-bold transition-colors duration-300`}
          >
            Contact Us Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <XMarkIcon
                className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"} transition-transform duration-300`}
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"} transition-transform duration-300`}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-full left-0 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[75vh] opacity-100 overflow-y-auto"
            : "max-h-0 hidden"
        }`}
        style={{ zIndex: 100 }}
        role="menu"
      >
        <li>
          <Link
            href="/"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        
        {/* Generate mobile dropdown menus */}
        <MobileDropdownMenu 
          id="digital-marketing" 
          title={menuItems.digitalMarketing.title} 
          items={menuItems.digitalMarketing.items} 
        />
        
        <MobileDropdownMenu 
          id="web-dev" 
          title={menuItems.webDev.title} 
          items={menuItems.webDev.items} 
        />
        
        <MobileDropdownMenu 
          id="consulting" 
          title={menuItems.consulting.title} 
          items={menuItems.consulting.items} 
        />

        <li className="relative">
          <Link
            href="/about"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </li>

        <MobileDropdownMenu 
          id="case-studies" 
          title={menuItems.caseStudies.title} 
          items={menuItems.caseStudies.items} 
        />

        <li>
          <Link
            href="/contact-us"
            className="block py-2 px-11 font-light text-gray-800 hover:text-customYellow"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Now
          </Link>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;