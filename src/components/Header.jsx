import { useState } from "react"
import { Link } from "react-router-dom"
import NavItems from "./NavItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-6 sticky top-0">
      <div className="max-w-350 mx-auto py-1 flex justify-between items-center relative">
        <Link to='/' className="text-2xl font-bold">
          LOGO
        </Link>

        {/* Desktop Items */}
        <nav className="hidden lg:block">
          <NavItems />
        </nav>

        {/* npm i react-icons */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl lg:hidden"
        >
          { isOpen ? 'x' : '=' }
        </button>

        {/* Mobile Items */}
        {
          isOpen && (
            <nav className="lg:hidden absolute right-0 bg-gray-700 top-full p-3">
              <NavItems />
            </nav>
          )
        }
      </div>
    </header>
  )
}

export default Header