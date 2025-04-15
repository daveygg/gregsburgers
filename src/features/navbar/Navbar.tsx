import { Link } from "@tanstack/react-router";
import logo from "../../assets/icons/burger.svg";
import arrow from "../../assets/icons/right-arrow.svg";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center py-3 mb-2 bg-white border-b  border-gray-200 w-full">
      <div className="flex flex-grow-1 items-center px-4">
        <Link className="flex items-center gap-4" to="..">
          <img src={logo} alt="logo" className="w-10 h-auto" />
          <h1 className="text-4xl font-organical ml-2 text-black">
            Greg's Burgers
          </h1>
        </Link>
      </div>
      <div className="flex items-center align-middle justify-end gap-4 mr-6 flex-grow">
        <img src={arrow} alt="arrow" className="w-10 h-auto" />
        <img src={logo} alt="logo" className="w-10 h-auto" />
        <Button variant="funnavbar" className="text-2xl hover:cursor-pointer">
          <Link to="/menu">Order Now</Link>
        </Button>
        <Link to="/locations" className="border-l-2 border-gray-200 pl-4 text-lg font-organical">Locations</Link>
        <Link to="/contact" className="border-l-2 border-gray-200 pl-4 text-lg font-organical">Contact</Link>
        <Link to="/about" className="border-l-2 border-gray-200 pl-4 text-lg font-organical">About</Link>
      </div>
    </div>
  );
}
