import { InView } from "react-intersection-observer";
import { DetailQuestion } from "../components/DetailQuestion";
import { frequentlyAsked } from "../data/myData";

export const FrequentlyAsked = () => {
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
  };
  return (
    <section className=" mt-28 px-6 lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[40%]">
        <InView {...options}>
          {({ inView, ref }) => (
            <div ref={ref} className="text-center ">
              <h2
                className={`text-blue-darker text-2xl font-bold lg:text-3xl animate__animated ${
                  inView ? "animate__bounceIn" : ""
                }`}
              >
                Frequently Asked Questions
              </h2>
              <p
                className={`text-gray-500 my-6 lg:text-[1.3rem] animate__animated ${
                  inView ? "animate__bounceIn" : ""
                }`}
              >
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
            </div>
          )}
        </InView>
        <InView {...options}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex flex-col justify-center items-center animate__animated ${
                inView ? "animate__bounceIn" : ""
              }`}
            >
              {frequentlyAsked.map((asked) => (
                <DetailQuestion key={asked.Question} asked={asked} />
              ))}
              <button className="bg-blue-light text-white mt-14 py-4 px-6 rounded-lg font-semibold">
                More Info
              </button>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};
