import React, { useState, useEffect, useRef } from 'react'; // Thêm useRef
import { Button, Image } from '@heroui/react';
import { Icon } from '@iconify/react';

const Slider = ({
    images = [],
    interval = 5000,
    height = 'aspect-w-16 aspect-h-9',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    // Logic tự động chuyển slide
    useEffect(() => {
        if (interval > 0 && images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, interval);
            return () => clearInterval(timer);
        }
    }, [images, interval]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (images.length === 0) {
        return (
            <div className={`${height} flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg`}>
                Không có ảnh để hiển thị.
            </div>
        );
    }

    return (
        <div ref={sliderRef} className={`relative ${height} overflow-hidden rounded-lg shadow-lg`}>
            {/* Image container with transform for sliding effect */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Di chuyển container
            >
                {images.map((img, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full"> {/* Mỗi slide chiếm 100% chiều rộng */}
                        <Image
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                            radius="lg"
                            removeWrapper
                        />
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
                <Button
                    isIconOnly
                    onClick={goToPrev}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-sky-600 rounded-full p-2 transition-all duration-300"
                    size="lg"
                    radius="full"
                    aria-label="Previous slide"
                >
                    <Icon icon="ic:round-chevron-left" className="w-8 h-8" />
                </Button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
                <Button
                    isIconOnly
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-sky-600 rounded-full p-2 transition-all duration-300"
                    size="lg"
                    radius="full"
                    aria-label="Next slide"
                >
                    <Icon icon="ic:round-chevron-right" className="w-8 h-8" />
                </Button>
            )}

            {/* Navigation Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentIndex ? 'bg-sky-500' : 'bg-gray-400 hover:bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;