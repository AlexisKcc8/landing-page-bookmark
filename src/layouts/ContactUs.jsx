export const ContactUs = () => {
  return (
    <section
      id="section-contact"
      className="scroll-mt-20 bg-blue-light mt-16 text-center text-white px-8 py-14 lg:flex lg:justify-center lg:items-center"
    >
      <div className="lg:w-[30%]">
        <span className=" text-sm uppercase tracking-[.25em]">
          35,000+ already joined
        </span>
        <h2 className=" text-2xl font-semibold">
          Stay up-to-date with what <br className="hidden lg:block" /> we’re
          doing
        </h2>
        <form className="flex flex-col justify-center items-center mt-8 lg:flex-row lg:gap-4">
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
      </div>
    </section>
  );
};
