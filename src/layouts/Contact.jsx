import { InView } from "react-intersection-observer";

export const Contact = () => {
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
    threshold: 0, // La mitad del elemento debe estar visible para activar la detección
  };
  return (
    <section
      id="section-contact"
      className="scroll-mt-20 bg-blue-light mt-16 text-center text-white px-8 py-14 lg:flex lg:justify-center lg:items-center"
    >
      <div className="lg:w-[30%]">
        <InView {...options}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <span
                className={`block text-sm uppercase tracking-[.25em] animate__animated ${
                  inView ? "animate__bounceInLeft" : ""
                }`}
              >
                35,000+ already joined
              </span>
              <h2
                className={`text-2xl font-semibold animate__animated ${
                  inView ? "animate__bounceInLeft" : ""
                }`}
              >
                Stay up-to-date with what <br className="hidden lg:block" />{" "}
                we’re doing
              </h2>
            </div>
          )}
        </InView>

        <InView {...options}>
          {({ inView, ref }) => (
            <form
              ref={ref}
              className={`flex flex-col justify-center items-center mt-8 lg:flex-row lg:gap-4 animate__animated ${
                inView ? "animate__bounceInRight" : ""
              }`}
            >
              <div className="w-full lg:w-[70%] relative">
                <input
                  type="email"
                  name=""
                  id=""
                  className=" text-blue-darker w-full p-4 rounded-lg font-semibold placeholder:text-gray-300 peer focus:outline-0 invalid:border-4 invalid:border-[#fb5859] invalid:rounded-none"
                  placeholder="Enter your email address"
                />

                <span className=" w-[2rem] h-[2rem] absolute inset-y-0 top-4 right-4 bg-[#fb5859] rounded-[50%]  font-bold text-2xl hidden peer-placeholder-shown:!hidden peer-invalid:block ">
                  !
                </span>
                <span className="hidden font-bold bg-[#fb5859] peer-placeholder-shown:!hidden peer-invalid:block text-start p-1">
                  Whoops, make sure it’s an small
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#fb5859] w-full p-4 rounded-lg font-bold mt-4 lg:mt-0 lg:w-[30%] hover:bg-white hover:text-[#fb5859] hover:border-[#fb5859] hover:border-[1px]"
              >
                Contact Us
              </button>
            </form>
          )}
        </InView>
      </div>
    </section>
  );
};
