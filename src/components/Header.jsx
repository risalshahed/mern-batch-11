import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-between max-w-350 mx-auto p-6">
        <div>
          LOGO
        </div>
        <nav className="flex gap-6 capitalize">
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='/services'>services</Link>
          <Link to='/contact'>contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;