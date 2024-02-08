import { InView } from "react-intersection-observer";
import { LogoBookmark } from "../components/LogoBookmark";

export const Footer = () => {
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
    threshold: 0,
  };
  return (
    <footer className=" bg-blue-darker flex flex-col justify-center items-center px-16 py-8 overflow-hidden lg:px-0">
      <InView {...options}>
        {({ inView, ref }) => (
          <div ref={ref} className="lg:w-[80%] lg:flex lg:justify-center ">
            <section
              className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start animate__animated ${
                inView ? "animate__bounceIn" : ""
              }`}
            >
              <div className="mb-5 lg:mb-0 lg:mr-8">
                <LogoBookmark fillText="#FFF" />
              </div>

              <ul className="text-white lg:flex lg:flex-row lg:gap-8">
                <li className="mb-5 lg:mb-0">
                  <a
                    href="#"
                    className=" font-semibold uppercase hover:text-red-400"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-5 lg:mb-0">
                  <a
                    href="#"
                    className=" font-semibold uppercase hover:text-red-400"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-5 lg:mb-0">
                  <a
                    href="#"
                    className=" font-semibold uppercase hover:text-red-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </section>

            <section
              className={`w-full flex justify-center items-center gap-8 mt-5 lg:mt-0 lg:justify-end animate__animated ${
                inView ? "animate__bounceIn" : ""
              }`}
            >
              <img
                className="hover:text-red-400 hover:cursor-pointer"
                src="/images/icon-facebook.svg"
                alt="icon-facebook"
              />
              <img
                className="hover:text-red-400 hover:cursor-pointer"
                src="/images/icon-twitter.svg"
                alt="icon-twitter"
              />
            </section>
          </div>
        )}
      </InView>
    </footer>
  );
};
