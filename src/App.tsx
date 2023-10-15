import bannerTemplateWithLetter from '@/assets/images/b-capitalized.svg';
import bannerTemplateBlank from '@/assets/images/blank.svg';
import Carousel from '@/components/Carousel';
import clsx from 'clsx';

const App = () => {
  return (
    <div className="min-h-screen min-w-[260px] max-w-sm m-auto flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <Carousel
          className={clsx(
            'mt-8 mb-8',
            "before:content-[''] before:block before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-6 before:bg-gradient-to-r before:from-white",
            "after:content-[''] after:block after:absolute after:z-10 after:top-0 after:right-0 after:h-full after:w-6 after:bg-gradient-to-l after:from-white"
          )}
          options={{ loop: true }}
        >
          <Carousel.Slide>
            <img src={bannerTemplateWithLetter} alt="" loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bannerTemplateBlank} alt="" loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bannerTemplateBlank} alt="" loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bannerTemplateBlank} alt="" loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bannerTemplateBlank} alt="" loading="lazy" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
