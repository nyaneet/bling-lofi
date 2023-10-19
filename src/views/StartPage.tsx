import bannerTemplateWithLetter from '@/assets/images/b-capitalized.svg';
import bannerTemplateBlank from '@/assets/images/blank.svg';
import Carousel from '@/components/Carousel';
import Button from '@/components/ui/Button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import WithControlsLayout from './WithControlsLayout';

const banners: { id: number; imageSrc: string; alt: string }[] = [
  { id: 0, imageSrc: bannerTemplateWithLetter, alt: '' },
  { id: 1, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 2, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 3, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 4, imageSrc: bannerTemplateBlank, alt: '' },
];

const StartPage = () => {
  return (
    <WithControlsLayout>
      <WithControlsLayout.MainContent className="flex items-center !px-0">
        <Carousel
          className={clsx(
            'mt-8 mb-8',
            "before:content-[''] before:block before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-4 before:bg-gradient-to-r before:from-white",
            "after:content-[''] after:block after:absolute after:z-10 after:top-0 after:right-0 after:h-full after:w-4 after:bg-gradient-to-l after:from-white"
          )}
          options={{ loop: true }}
        >
          <Carousel.Viewport className="px-4">
            {banners.map((banner) => (
              <Carousel.Slide key={banner.id}>
                <img
                  className="w-full"
                  src={banner.imageSrc}
                  alt={banner.alt}
                  loading="lazy"
                />
              </Carousel.Slide>
            ))}
          </Carousel.Viewport>
          <Carousel.ScrollSnaps className="mt-4" />
        </Carousel>
      </WithControlsLayout.MainContent>
      <WithControlsLayout.BottomControls>
        <Link to="/new" tabIndex={-1}>
          <Button className="w-full">Create new event</Button>
        </Link>
      </WithControlsLayout.BottomControls>
    </WithControlsLayout>
  );
};

export default StartPage;
