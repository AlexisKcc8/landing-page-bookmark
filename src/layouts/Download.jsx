import { CardExtension } from "../components/CardExtension";
import { extensions } from "../data/myData";
export const Download = () => {
  return (
    <section id="download" className="">
      <article className="text-center">
        <h2 className="font-bold text-2xl text-blue-darker mb-3">
          Download the extension
        </h2>
        <p className="px-5 text-gray-500 mb-8">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center gap-8">
        {extensions.map((extension) => (
          <CardExtension key={extension.id} extension={extension} />
        ))}
      </article>
    </section>
  );
};
