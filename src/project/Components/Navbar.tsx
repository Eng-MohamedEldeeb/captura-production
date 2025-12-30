const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <span className="text-gray-400">Spot</span>
          <span className="text-white">Lens</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-white">
          <a className="hover:text-amber-400 cursor-pointer">Home</a>
          <a className="hover:text-amber-400 cursor-pointer">Services</a>
          <a className="hover:text-amber-400 cursor-pointer">Contact us</a>
        </div>
        <button className="bg-amber-600 px-4 py-2 rounded text-white">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
