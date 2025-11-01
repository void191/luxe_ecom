
import React, { useState } from 'react';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden pb-2 md:pb-0">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setMainImage(image)}
                        className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${mainImage === image ? 'border-primary-500' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'}`}
                    >
                        <img src={image} alt={`${productName} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
            <div className="flex-1">
                <img
                    src={mainImage}
                    alt={productName}
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg bg-light-card dark:bg-dark-card"
                />
            </div>
        </div>
    );
};

export default ImageGallery;
