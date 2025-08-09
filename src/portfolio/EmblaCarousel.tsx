import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import type { CarouselItem } from "../types/types";
import "./embla.css";

type PropType = {
  carouselItems: CarouselItem[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { carouselItems } = props;
  const [emblaRef] = useEmblaCarousel({ loop: false, containScroll: false }, [
    Autoplay(),
  ]);

  return (
    <section className="embla mt-8">
      <div className="embla__viewport mt-8" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <a href={item.link} target="_blank">
                  <img  
                    src={item.img}
                    alt={item.alt}
                    className="border border-[#00000019] rounded-md shadow-md"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
