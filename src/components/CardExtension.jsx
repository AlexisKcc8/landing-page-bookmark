import { InView } from "react-intersection-observer";

export const CardExtension = (props) => {
  const { extension, index } = props;

  const { id, srcImg, altImg, title, version } = extension;
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
    threshold: 0, // La mitad del elemento debe estar visible para activar la detección
  };
  return (
    <InView {...options}>
      {({ inView, ref }) => (
        <article
          ref={ref}
          className={`w-[80%] h-[25rem] flex flex-col shadow-2xl ${
            index == 1 ? " lg:mt-[5rem]" : index >= 2 ? "lg:mt-[10rem]" : ""
          } animate__animated ${inView ? "animate__bounceInRight" : ""}`}
        >
          <section className="bg-white flex flex-col justify-center items-center grow">
            <figure>
              <img src={srcImg} alt={altImg} />
            </figure>
            <h3 className="text-2xl text-blue-darker font-bold my-3">
              {title}
            </h3>
            <p className=" text-gray-500">{version}</p>
          </section>
          <footer className="flex justify-center items-center  p-5 border-0 border-dotted border-t-4">
            <button className="w-full bg-blue-light p-5 text-white font-bold rounded-md hover:bg-white hover:text-blue-light hover:border-blue-light hover:border-2">
              Add & Install Extension
            </button>
          </footer>
        </article>
      )}
    </InView>
  );
};
