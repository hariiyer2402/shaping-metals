import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo1.png";



interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", page: "home" },
    { name: "Gallery", page: "gallery" },
    { name: "Projects", page: "projects" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  const handleClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center">

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center w-full">

            {/* LEFT MENU */}
            <div className="flex items-center gap-8 justify-start">
              {menuItems.slice(0, 2).map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleClick(item.page)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    currentPage === item.page
                      ? "text-[#A48B41]"
                      : "text-black hover:text-[#A48B41]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CENTER LOGO */}
            <div
              onClick={() => handleClick("home")}
              className="flex items-center justify-center gap-0 cursor-pointer"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-22 object-contain"
              />

              <div className="-ml-2">
                <h1
                  className="text-3xl font-bold leading-none tracking-wide"
                    style={{
                        fontFamily: "Cinzel, serif",
                        background: "linear-gradient(180deg, #3a3936 0%, #c7b13f 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                  SHAPING METALS
                </h1>
                
                <div className="flex justify-end mt-1">
                <p className="-mt-1 text-white text-base font-semibold tracking-[0.15em]"
                  style={{
                      fontFamily: "Cinzel, serif",
                      letterSpacing: "0.08em",
                      background: "linear-gradient(180deg, #3a3936 0%, #c7b13f 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                  Exploring Innovations
                </p>
              </div>
            </div>
          </div>

            {/* RIGHT MENU */}
            <div className="flex items-center justify-end gap-8">
              {menuItems.slice(2).map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleClick(item.page)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    currentPage === item.page
                      ? "text-[#A48B41]"
                      : "text-black hover:text-[#A48B41]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

          </div>  

          {/* ================= MOBILE ================= */}
          <div className="flex md:hidden items-center justify-between w-full">

            {/* Logo + Title */}
            <button
              onClick={() => handleClick("home")}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 object-contain"
              />

              <div className="text-left">
                <h1
                  className="text-lg font-bold leading-none"
                  style={{
                    fontFamily: "Cinzel, serif",
                    background:
                      "linear-gradient(180deg,#3a3936 0%,#c7b13f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SHAPING METALS
                </h1>

                <p
                  className="text-[10px] tracking-[0.18em]"
                  style={{
                    fontFamily: "Cinzel, serif",
                    background:
                      "linear-gradient(180deg,#3a3936 0%,#c7b13f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Exploring Innovations
                </p>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E2A38]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden bg-black/95 border-t border-white/10 transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100 py-8"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleClick(item.page)}
              className={`text-base uppercase tracking-[0.3em] ${
                currentPage === item.page
                  ? "text-[#C9A45C]"
                  : "text-white hover:text-[#C9A45C]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}