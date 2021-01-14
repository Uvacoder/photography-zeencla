import React from "react"

import { Link } from "gatsby"

const Navbar = () => (
  <>
    <nav className="w-full fixed z-10  m-auto gap-0">
      <div className="flex px-2 flex bg-white md:flex-row md:justify-between border-w-2 gap-0">
        <Link
          to="/"
          activeClassName="text-blue-600"
          className="w-full p-2 text-2xl font-bold md:text-3xl cursor-pointer "
        >
          zeec
        </Link>
        <Link
          to="/about"
          activeClassName="text-blue-600"
          className="block md:text-right p-2 text-2xl md:text-3xl  font-bold cursor-pointer border-b-2 border-transparent md:hover:border-black"
        >
          about
        </Link>
      </div>
      {/* <div className="-mt-1 px-2 flex bg-white md:flex-row md:justify-between md:hidden">
        <Link
          to="/albums"
          activeClassName="text-blue-600"
          className="md:hidden flex-grow p-2 text-2xl font-bold md:text-3xl font-bold cursor-pointer border-b-2 border-transparent md:hover:border-black"
        >
          index
        </Link>
      </div> */}
    </nav>
  </>
)
export default Navbar
