import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageType from '../../Types/Image';
import './GenericImageCarousel.css';

interface Images {
  images: Array<ImageType>
}

interface GenericImageCarouselProps {
  images: Images;
}

const GenericImageCarousel: React.FC<GenericImageCarouselProps> = ({images}) => {
  const [showCaption, setShowCaption] = useState(false);

  return (
    <Carousel>
      {images.images.map((image) => (
        <Carousel.Item 
          style={{height: '100%', textAlign: 'center'}} 
          onMouseEnter={(event: any) => {
            const screenSize = event.view.screen.availWidth;
            if (screenSize > 600)
            {
              setShowCaption(true);
            }
          }}
          onClick={() => {
            setShowCaption((curr) => !curr);
          }}
          onMouseLeave={() => {
              setShowCaption(false);
          }}
        >
          <div className={showCaption ? "img-container img-scrim" : "img-container"}>
            <img src={image.src} alt={image.alt} />
          </div>
            <Carousel.Caption className={showCaption ? "show-caption" : "hide-caption"}>
                <h3>{image.caption}</h3>
                <p>{image.subcaption}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GenericImageCarousel;