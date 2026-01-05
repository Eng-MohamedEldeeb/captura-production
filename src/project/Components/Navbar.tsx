import { useNavigate } from "react-router-dom";
import { icon } from "../../assets";

const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <img src={icon} alt="" className="w-12" />
          <span className="text-gray-400">Captura</span>
          <span className="text-white">Production</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-white">
          <a
            onClick={() => navigateTo("/")}
            className="hover:text-amber-400 cursor-pointer"
          >
            Home
          </a>
          <a className="hover:text-amber-400 cursor-pointer">Services</a>
          <a className="hover:text-amber-400 cursor-pointer">Contact us</a>
        </div>
        <button
          onClick={() => navigateTo("/book-now")}
          className="bg-amber-600 px-4 py-2 rounded text-white cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
