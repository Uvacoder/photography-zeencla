import React from "react"

import Navbar from "../components/Navbar"

import { Link } from "gatsby"

export default function () {
  return (
    <div className="h-screen grid justify-center align-center">
      <Navbar />
      <div className="m-auto ">
        <h1 className="text-5xl text-black text-center">
          Sorry, this page does not exist
        </h1>
        <h1 className="text-4xl text-black text-center">
          <Link
            className=" font-bold cursor-pointer border-b-2 border-black md:hover:border-black"
            to="/"
          >
            Click here
          </Link>{" "}
          to go to gallery
        </h1>
      </div>
    </div>
  )
}
