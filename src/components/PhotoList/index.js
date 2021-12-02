import React, { useState } from "react";

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
          name: 'Professional Head Shot',
          category: 'about me',
          description: 'This is a paragraph describing who I am to an employer.',
        },
        {
          name: 'Cactus Baby',
          category: 'portfolio',
          link: 'https://intense-peak-73506.herokuapp.com/main',
          description: "MERN stack project"
        },
        {
          name: 'Resume',
          category: 'resume',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          link: "https://google.com"
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    function hasLink(image) {
      if (image.link) {
        return <div>
              {currentPhotos.map((image,i) => (
                <a href={image.link}>
                  {image.name}
                </a>
              ))}
            </div>
        
      } else {
        return <div>
              {currentPhotos.map((image, i) => (
                <p>
                  {image.description}
                </p>
              ))}
            </div>
        
      }
    }

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        // onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>

            {currentPhotos.map((image, i) => (
              hasLink(image)
            ))}
        </div>
    );
}

export default PhotoList;