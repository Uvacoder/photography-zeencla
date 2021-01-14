import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Zoom from "react-medium-image-zoom"

import "react-medium-image-zoom/dist/styles.css"

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true)
  const domRef = React.useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <div
      ref={domRef}
      className={`m-auto fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  )
}
const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query CloudinaryImage {
        allCloudinaryMedia(sort: { fields: created_at, order: DESC }) {
          edges {
            node {
              secure_url
              resource_type
              format
              height
              type
            }
          }
        }
      }
    `
  )
  const images = data.allCloudinaryMedia.edges
  console.log(images)
  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 lg:gap-20 sm:py-12">
      {images.map((image, index) => (
        <FadeInSection key={`${index}-image`}>
          <Zoom zoomMargin={40}>
            <img
              src={image.node.secure_url}
              className="w-full pointer-event object-cover md:transform md:transition md:duration-500 md:ease-in-out md:hover:scale-110"
            />
          </Zoom>
        </FadeInSection>
      ))}
    </div>
  )
}

export default Gallery
