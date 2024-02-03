import { DetailQuestion } from "../components/DetailQuestion";
import { frequentlyAsked } from "../data/myData";

export const FrequentlyAsked = () => {
  return (
    <section className=" mt-28 px-6 lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[40%]">
        <div className="text-center ">
          <h2 className=" text-blue-darker text-2xl font-bold lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 my-6 lg:text-[1.3rem]">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {frequentlyAsked.map((asked) => (
            <DetailQuestion key={asked.Question} asked={asked} />
          ))}
          <button className="bg-blue-light text-white mt-14 py-4 px-6 rounded-lg font-semibold">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};
