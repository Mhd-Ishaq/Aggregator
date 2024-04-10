import React, { useState } from 'react';
import image_1 from "../assests/model.png";
import image_2 from "../assests/product-1.jpg";
import image_3 from "../assests/product-2.jpg";
import image_4 from "../assests/product-3.jpg";

// Large Image Container component
const LargeImageContainer = ({ selectedImage }) => {
  return (
    <div className="large-image-container">
      <img src={selectedImage} alt="Large Image" />
    </div>
  );
};

// Small Image Container component
const SmallImageContainer = ({ image, onClick }) => {
  return (
    <div className="small-image-container" onClick={() => onClick(image)}>
      <img src={image} alt="Small Image" />
    </div>
  );
};

// Image Gallery component
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(image_1);
  const images = [image_1, image_2, image_3,image_4,image_4,image_4,image_4,]; // Replace with your image URLs

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      <LargeImageContainer selectedImage={selectedImage} />
      <div className="small-image-list">
        {images.map((image, index) => (
          <SmallImageContainer
            key={index}
            image={image}
            onClick={handleImageClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
