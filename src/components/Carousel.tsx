import WithClassBaseProps from '@/types/withClassBaseProps';
import WithContentBaseProps from '@/types/withContentBaseProps';
import clsx from 'clsx';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import {
  HTMLProps,
  LegacyRef,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const CarouselContext = createContext<{
  emblaRef: LegacyRef<HTMLDivElement> | undefined;
  scrollSnaps: number[];
  selectedIdx: number;
}>({
  emblaRef: undefined,
  scrollSnaps: [],
  selectedIdx: 0,
});

export type CarouselProps = {
  options?: EmblaOptionsType;
} & WithClassBaseProps &
  WithContentBaseProps;

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
    <CarouselContext.Provider value={{ emblaRef, scrollSnaps, selectedIdx }}>
      <div className={clsx('embla relative w-full', className)}>{children}</div>
    </CarouselContext.Provider>
  );
};

export type ViewportProps = WithClassBaseProps & WithContentBaseProps;

const Viewport = ({ className, children }: ViewportProps) => {
  const { emblaRef } = useContext(CarouselContext);

  return (
    <div
      className={clsx('embla__viewport overflow-hidden', className)}
      ref={emblaRef}
    >
      <div className="embla__container flex aspect-square touch-pan-y">
        {children}
      </div>
    </div>
  );
};
Carousel.Viewport = Viewport;

export type SlideProps = WithClassBaseProps & WithContentBaseProps;

const Slide = ({ className, children }: SlideProps) => (
  <div className={clsx('embla__slide flex-[0_0_100%] mx-3', className)}>
    {children}
  </div>
);
Carousel.Slide = Slide;

export type ScrollSnapsProps = {
  className: HTMLProps<HTMLElement>['className'];
};

const ScrollSnaps = ({ className }: ScrollSnapsProps) => {
  const { scrollSnaps, selectedIdx } = useContext(CarouselContext);

  return (
    <div
      className={clsx('flex justify-center items-center space-x-1', className)}
    >
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
  );
};
Carousel.ScrollSnaps = ScrollSnaps;

export default Carousel;
