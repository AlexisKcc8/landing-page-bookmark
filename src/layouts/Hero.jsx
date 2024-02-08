import "animate.css";

import { LayerBook } from "../components/LayerBook";
import { InView } from "react-intersection-observer";

export const Hero = () => {
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
    threshold: 0.2,
  };

  return (
    <section className="flex flex-col justify-center items-center  mt-24  lg:flex-row  lg:relative lg:overflow-hidden h-screen">
      <div className="lg:flex lg:w-[80%] overflow-hidden">
        <InView {...options}>
          {({ inView, ref }) => (
            <article
              ref={ref}
              className="relative lg:static  flex justify-center overflow-hidden px-4 lg:order-2 lg:w-[50%] "
            >
              <img
                className={`relative z-10 animate__animated ${
                  inView ? "animate__lightSpeedInRight" : ""
                }`}
                src="/images/illustration-hero.svg"
                alt="illustration-hero"
              />
              <div
                className={`w-[100%] h-[75%] lg:h-[60%] absolute bottom-0 right-[-18%] lg:right-[-65%] animate__animated ${
                  inView ? "animate__lightSpeedInRight" : ""
                }`}
              >
                <LayerBook />
              </div>
            </article>
          )}
        </InView>
        <InView {...options}>
          {({ inView, ref }) => (
            <article
              ref={ref}
              className=" text-center my-8 lg:order-1 lg:text-start  lg:w-[50%] "
            >
              <h2
                className={`font-bold text-3xl text-blue-darker lg:text-[3.3rem] lg:leading-[4rem] animate__animated ${
                  inView ? "animate__lightSpeedInLeft" : ""
                }`}
              >
                A Simple Bookmark Manager
              </h2>
              <p
                className={`my-6 px-8 lg:px-0 lg:text-[1.3rem] text-gray-500 animate__animated ${
                  inView ? "animate__lightSpeedInLeft" : ""
                }`}
              >
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>

              <div
                className={`flex justify-center lg:justify-start gap-3 animate__animated ${
                  inView ? "animate__lightSpeedInLeft" : ""
                }`}
              >
                <button className="bg-blue-light text-white px-3 py-4 rounded-md font-medium shadow-xl hover:bg-white hover:border-blue-light hover:border-2 hover:text-blue-light">
                  Get it on Chrome
                </button>
                <button className="bg-white rounded-md text-gray-600 px-3 py-4 font-medium shadow-xl hover:border-gray-600 hover:border-2">
                  Get it on Firefox
                </button>
              </div>
            </article>
          )}
        </InView>
      </div>
    </section>
  );
};
