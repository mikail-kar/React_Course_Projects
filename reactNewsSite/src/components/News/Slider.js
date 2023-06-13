import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    image: 'https://picsum.photos/id/123/1200/400',
    name: 'Slide 1',
    description: 'Slide 1',
    key: 1,
    source:"Cumhuriyet",
    url:''
  },
  {
    image: 'https://picsum.photos/id/456/1200/400',
    name: 'Slide 2',
    description: 'Slide 2',
    key: 2,
    source:"Milliyet",
    url:''
  },
  {
    image: 'https://picsum.photos/id/678/1200/400',
    name: 'Slide 3',
    description: 'Slide 3',
    key: 3,
    source:"Sabah",
    url:''
  },
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.image} alt={item.name} />
        <CarouselCaption
          captionText={item.description}
          captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;