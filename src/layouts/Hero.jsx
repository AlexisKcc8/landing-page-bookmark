import { LayerBook } from "../components/LayerBook";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center  mt-24  lg:flex-row  lg:relative lg:overflow-hidden">
      <div className="lg:flex lg:w-[80%] overflow-hidden">
        <article className="relative lg:static  flex justify-center overflow-hidden px-4 lg:order-2 lg:w-[50%] ">
          <img
            className="relative z-10 "
            src="/images/illustration-hero.svg"
            alt="illustration-hero"
          />
          <div className="w-[100%] h-[75%] absolute bottom-0 right-[-18%] lg:right-[-65%] ">
            <LayerBook />
          </div>
        </article>

        <article className=" text-center my-8 lg:order-1 lg:text-start  lg:w-[50%] ">
          <h2 className="font-bold text-3xl text-blue-darker lg:text-[2.5rem]">
            A Simple Bookmark <br className="hidden lg:block" /> Manager
          </h2>
          <p className="my-6 px-8 lg:px-0 lg:text-[1.3rem] text-gray-500">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className=" flex justify-center lg:justify-start gap-3">
            <button className="bg-blue-light text-white px-3 py-4 rounded-md font-medium shadow-xl">
              Get it on Chrome
            </button>
            <button className="bg-white rounded-md text-gray-600 px-3 py-4 font-medium shadow-xl">
              Get it on Firefox
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
