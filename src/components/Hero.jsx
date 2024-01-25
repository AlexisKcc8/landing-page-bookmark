import { LayerBook } from "./LayerBook";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center content-center mt-24">
      <article className="relative flex justify-center overflow-hidden px-4">
        <img
          className="relative z-10 "
          src="/images/illustration-hero.svg"
          alt="illustration-hero"
        />
        <div className="w-[100%] h-[75%] absolute bottom-0 right-[-18%]  ">
          <LayerBook />
        </div>
      </article>
      <article className=" text-center  my-8">
        <h2 className="font-bold text-3xl text-blue-darker">
          A Simple Bookmark Manager
        </h2>
        <p className="my-6 px-8 text-gray-500">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className=" flex justify-center gap-3">
          <button className="bg-blue-light text-white px-3 py-4 rounded-md font-medium shadow-xl">
            Get it on Chrome
          </button>
          <button className="bg-white rounded-md text-gray-600 px-3 py-4 font-medium shadow-xl">
            Get it on Firefox
          </button>
        </div>
      </article>
    </section>
  );
};
