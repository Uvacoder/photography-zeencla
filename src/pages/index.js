import React from "react"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/global.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container m-auto px-6 py-6 sm:w-4/5">
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}
