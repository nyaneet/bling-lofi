import { useState, useCallback, useEffect, PropsWithChildren } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export default function Carousel({ children }: PropsWithChildren) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    WheelGesturesPlugin({}),
  ]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIdx(emblaApi.selectedScrollSnap());
    console.log(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit]);

  return (
    <div className="min-h-screen max-w-sm m-auto flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <div className="embla w-full">
          <div className="embla__viewport overflow-hidden px-6" ref={emblaRef}>
            <div className="embla__container flex aspect-square touch-pan-y">
              {children}
            </div>
            <div className="flex justify-center items-center my-4 space-x-1">
              {scrollSnaps.map((value, idx) => (
                <span
                  key={value}
                  className={`w-[4px] h-[4px] bg-black inline-block rounded-full transition duration-300 ease-in ${
                    idx === selectedIdx ? 'scale-125' : 'opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Carousel.Slide = function Slide({ children }: PropsWithChildren) {
  return <div className="embla__slide flex-[0_0_100%] mx-3">{children}</div>;
};
