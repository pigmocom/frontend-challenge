'use client';

import React, { useRef, useState, useEffect } from 'react';
import { carouselVariants } from './styles';
import Image from 'next/image';
import { CarouselTypes } from './types';

export const Carousel = ({ children, showControls, title }: CarouselTypes) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 150;
  const gap = 4;

  const nextSlide = () => {
    const numChildren = carouselRef.current?.children.length || 0;
    setCurrentIndex(currentIndex === numChildren - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    const numChildren = carouselRef.current?.children.length || 0;
    setCurrentIndex(currentIndex === 0 ? numChildren - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const updateCardStyles = () => {
      if (carouselRef.current) {
        const cards = carouselRef.current.children;
        const offset = currentIndex * (cardWidth + gap);

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLDivElement;
          card.style.transform = `translateX(-${offset}px)`;
        }
      }
    };

    updateCardStyles();
  }, [currentIndex]);

  return (
    <div className={carouselVariants.container}>
      <div className={carouselVariants.arrowContainer}>
        <Image width={13} height={15} src="/assets/slider/swords.svg" alt="#" />
        <p className={carouselVariants.title}>{title}</p>

        {showControls && (
          <>
            <button className={carouselVariants.arrow} onClick={prevSlide}>
              {'<'}
            </button>
            <button className={carouselVariants.arrow} onClick={nextSlide}>
              {'>'}
            </button>
          </>
        )}
      </div>

      <div className={carouselVariants.wrapper} ref={carouselRef}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={carouselVariants.card}
            style={{
              width: `${cardWidth}px`,
              marginRight: `${gap}px`,
              transition: 'transform 0.5s ease',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
