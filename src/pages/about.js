import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import profile from "../../static/profile.jpg"
//m-auto grid grid-cols-1 pt-20 md:pt-0 md:grid-cols-2 md:justify-center md:align-center
export default function About() {
  return (
    <div className="h-screen grid">
      <Navbar />
      <div className="flex justify-center align-center">
        <div className="grid justify-center align-center m-auto flex-col grid-cols-1 md:grid-cols-2">
          <div className="w-6/12 m-auto">
            <img
              className="rounded-full"
              src={profile}
              alt="profile image of cesar melchor"
            />
          </div>
          <div className="m-auto text-xl text-black text-center md:text-left p-1 md:p-0">
            <p>
              Hi👋🏽, my name is <strong>Cesar Melchor</strong>. I am a hobbyist
              photographer. I am currently shooting 35mm film. My favorite film
              stocks are Portra 400, Portra 160 and Kodak Color Plus 200. When I
              am not shooting film I use my Sony A6300 to shoot. I enjoy
              environmental portraits as well as street photography. I want to
              eventually deep dive into 120mm film.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
