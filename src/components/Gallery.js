import React from "react"
import Img from 'gatsby-image'
import '../styles/styles.scss'

const Gallery = ({usegallery}) => {
    const images = usegallery

    return (
        <div className="gallery">
            {images.map(({ id, fluid }) => (
              <Img
                key={id}
                fluid={fluid}
                imgStyle={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }} 
              />
          ))}
        </div>
    )
}

export default Gallery;