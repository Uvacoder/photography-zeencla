import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <aside className="fixed m-auto px-2 py-2 bottom-0 right-2 z-10 md:block hidden">
    <Link
      to="/contact"
      className="text-2xl font-bold md:text-3xl font-bold cursor-pointer border-b-2 border-transparent md:hover:border-black"
      activeClassName="text-blue-600"
    >
      contact
    </Link>
  </aside>
)
export default Footer
