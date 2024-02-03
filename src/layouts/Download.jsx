import { CardExtension } from "../components/CardExtension";
import { extensions } from "../data/myData";
export const Download = () => {
  return (
    <section
      id="download"
      className="lg:flex lg:justify-center lg:items-center"
    >
      <div className="lg:w-[80%]">
        <article className="text-center flex flex-col items-center">
          <h2 className="font-bold text-2xl text-blue-darker mb-3">
            Download the extension
          </h2>
          <p className="px-5 text-gray-500 mb-8 lg:w-[60%] lg:text-[1.3rem]">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </article>
        <article className="flex flex-col justify-center items-center gap-8 lg:flex-row">
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
