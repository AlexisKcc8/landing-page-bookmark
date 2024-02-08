import { InView } from "react-intersection-observer";
import { CardExtension } from "../components/CardExtension";
import { extensions } from "../data/myData";
export const Download = () => {
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
    threshold: 0, // La mitad del elemento debe estar visible para activar la detección
  };
  return (
    <section
      id="section-download"
      className=" scroll-mt-20 lg:flex lg:justify-center lg:items-center overflow-hidden"
    >
      <div className="lg:w-[80%] overflow-hidden py-8">
        <InView {...options}>
          {({ inView, ref }) => (
            <article
              ref={ref}
              className="text-center flex flex-col items-center"
            >
              <h2
                className={`font-bold text-2xl text-blue-darker mb-3 animate__animated ${
                  inView ? "animate__bounceIn" : ""
                }`}
              >
                Download the extension
              </h2>
              <p
                className={`px-5 text-gray-500 mb-8 lg:w-[60%] lg:text-[1.3rem] animate__animated ${
                  inView ? "animate__fadeIn" : ""
                }`}
              >
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </article>
          )}
        </InView>

        <article
          className={`flex flex-col justify-center items-center gap-8 lg:flex-row `}
        >
          {extensions.map((extension, index) => (
            <CardExtension
              key={extension.id}
              index={index}
              extension={extension}
            />
          ))}
        </article>
      </div>
    </section>
  );
};
