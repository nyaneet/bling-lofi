import bannerTemplateWithLetter from '@/assets/images/b-capitalized.svg';
import bannerTemplateBlank from '@/assets/images/blank.svg';
import Carousel from '@/components/Carousel';
import Button from '@/components/ui/Button';
import MainLayout from '@/views/MainLayout';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const banners: { id: number; imageSrc: string; alt: string }[] = [
  { id: 0, imageSrc: bannerTemplateWithLetter, alt: '' },
  { id: 1, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 2, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 3, imageSrc: bannerTemplateBlank, alt: '' },
  { id: 4, imageSrc: bannerTemplateBlank, alt: '' },
];

const StartPage = () => {
  return (
    <MainLayout className="flex flex-col px-0">
      <div className="flex-grow flex justify-center items-center">
        <Carousel
          className={clsx(
            'mt-8 mb-8',
            "before:content-[''] before:block before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-6 before:bg-gradient-to-r before:from-white",
            "after:content-[''] after:block after:absolute after:z-10 after:top-0 after:right-0 after:h-full after:w-6 after:bg-gradient-to-l after:from-white"
          )}
          options={{ loop: true }}
        >
          {banners.map((banner) => (
            <Carousel.Slide key={banner.id}>
              <img src={banner.imageSrc} alt={banner.alt} loading="lazy" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <Link to="/new" className="mx-6 mb-8">
        <Button className="w-full box-border">Create new event</Button>
      </Link>
    </MainLayout>
  );
};

export default StartPage;
