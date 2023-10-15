import clsx from 'clsx';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { HTMLProps, ReactNode, useCallback, useEffect, useState } from 'react';

export type CarouselProps = {
  options?: Partial<EmblaOptionsType>;
  className?: HTMLProps<HTMLElement>['className'];
  children?: ReactNode;
};

const Carousel = ({ options, className, children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
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
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={clsx('embla relative w-full', className)}>
      <div className="embla__viewport overflow-hidden px-6" ref={emblaRef}>
        <div className="embla__container flex aspect-square touch-pan-y">
          {children}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 space-x-1">
        {scrollSnaps.map((value, idx) => (
          <span
            key={value}
            className={clsx(
              'w-[4px] h-[4px] bg-black inline-block rounded-full transition duration-300 ease-in',
              idx === selectedIdx ? 'scale-125' : 'opacity-50'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export type SlideProps = {
  className?: HTMLProps<HTMLElement>['className'];
  children?: ReactNode;
};

const Slide = ({ className, children }: SlideProps) => (
  <div className={clsx('embla__slide flex-[0_0_100%] mx-3', className)}>
    {children}
  </div>
);
Carousel.Slide = Slide;

export default Carousel;
