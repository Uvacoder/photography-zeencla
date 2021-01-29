import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Link } from "gatsby"

import profile from "../../static/profile.jpg"
//m-auto grid grid-cols-1 pt-20 md:pt-0 md:grid-cols-2 md:justify-center md:align-center
export default function About() {
  return (
    <div className="h-screen">
      <nav className="gap-0 ">
        <div className="flex px-2 flex bg-white md:flex-row md:justify-between border-w-2 gap-0">
          <Link
            to="/"
            activeClassName="text-blue-600"
            className="w-full md:w-auto block p-2 text-2xl font-bold md:text-3xl cursor-pointer "
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
        <div className="-mt-1 px-2 flex bg-white md:flex-row md:justify-between md:hidden">
          <Link
            to="/contact"
            activeClassName="text-blue-600"
            className="md:hidden flex-grow p-2 text-2xl font-bold md:text-3xl font-bold cursor-pointer border-b-2 border-transparent md:hover:border-black"
          >
            contact
          </Link>
        </div>
      </nav>
      <div className="grid m-auto h-4/5">
        <div className="flex justify-center align-center p-4 md:p-10 z-10">
          <div className="grid justify-center align-center m-auto flex-col grid-cols-1 md:grid-cols-2">
            <div className="w-6/12 m-auto">
              <img
                className="rounded-full"
                src={profile}
                alt="profile image of cesar melchor"
              />
            </div>
            <div className="m-auto text-xl text-black text-center leading-relaxed md:text-left p-1 md:p-0">
              <p>
                Hi👋🏽, my name is <strong>Cesar Melchor</strong>. I am a hobbyist
                photographer. I am currently shooting 35mm film. My favorite
                film stocks are Portra 400, Portra 160. When I am not shooting
                film I use my Sony A6300 to shoot. I enjoy environmental
                portraits as well as street photography. I want to eventually
                deep dive into 120mm film.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
