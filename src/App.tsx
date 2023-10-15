import Carousel from '@/components/Carousel';

function App() {
  return (
    <div className="min-h-screen max-w-sm m-auto flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <Carousel>
          <Carousel.Slide>
            <img
              src="src/assets/banners/b-capitalized.svg"
              alt=""
              loading="lazy"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="src/assets/banners/blank.svg" alt="" loading="lazy" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="src/assets/banners/blank.svg" alt="" loading="lazy" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
