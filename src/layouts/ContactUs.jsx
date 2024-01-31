export const ContactUs = () => {
  return (
    <section
      id="contacUs"
      className="bg-blue-light mt-16 text-center text-white px-8 py-14"
    >
      <span className=" text-sm uppercase tracking-[.25em]">
        35,000+ already joined
      </span>
      <h2 className=" text-2xl font-semibold">
        Stay up-to-date with what we’re doing
      </h2>
      <form className="flex flex-col justify-center items-center mt-8 ">
        <input
          type="email"
          name=""
          id=""
          className=" text-blue-darker w-full p-4 rounded-lg font-semibold placeholder:text-gray-300 peer focus:outline-0"
          placeholder="Enter your email address"
        />
        <span className="hidden text-red-200 font-bold peer-placeholder-shown:!hidden peer-invalid:block">
          La dirreccion de correo electronico es invalida
        </span>
        <button
          type="submit"
          className="bg-[#fb5859] w-full p-4 rounded-lg font-bold mt-4"
        >
          Contact Us
        </button>
      </form>
    </section>
  );
};
