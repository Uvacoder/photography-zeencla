import React from "react"
import "../styles/global.css"
import "../styles/styles.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Link } from "gatsby"
import profile from "../../static/profile.jpg"
//m-auto grid grid-cols-1 pt-20 md:pt-0 md:grid-cols-2 md:justify-center md:align-center
export default function Contact() {
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

      <div className="grid">
        <div className="flex justify-center align-center p-8">
          <div className="grid justify-center align-center m-auto flex-col grid-cols-1 md:gap-6 gap-4">
            <div className="m-auto">
              <h1 className="text-3xl">Contact Me!</h1>
            </div>
            <div className="m-auto text-xl text-black text-center leading-relaxed md:text-left p-1 md:p-0">
              <form
                className="flex flex-col justify-between md:w-80"
                action="https://formspree.io/f/mwkwazad"
                method="POST"
              >
                <label
                  className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="_replyto"
                >
                  Your email:
                </label>
                <input
                  className="border py-2 px-3 mb-2 text-grey-darkest"
                  type="text"
                  name="_replyto"
                  id="_replyto"
                />
                <label
                  className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="message"
                >
                  Your message:
                </label>
                <textarea
                  className="border py-2 px-3 text-grey-darkest mb-2"
                  name="message"
                  id="message"
                ></textarea>

                <button
                  type="submit"
                  className="block border w-full mt-2 bg-blue-600 hover:bg-blue-200 max-w-md text-white uppercase text-lg mx-auto p-4 rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
