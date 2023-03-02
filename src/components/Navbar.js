import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="/"
              className="text-xl md:text-4xl lg:text-xl font-bold text-white hover:text-gray-200"
            >
              Home
            </a>
          </div>
          <div className="flex items-center -mx-2 md:text-2xl lg:text-xl ">
            <a href="/about" className="mx-2 text-white hover:text-gray-200">
              About
            </a>

            <a href="/projects" className="mx-2 text-white hover:text-gray-200">
              Projects
            </a>

            <a href="/contact" className="mx-2 text-white hover:text-gray-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
