import { LogoBookmark } from "../components/LogoBookmark";

export const Footer = () => {
  return (
    <footer className=" bg-blue-darker flex flex-col justify-center items-center px-16 py-8 lg:px-0">
      <div className="lg:w-[80%] lg:flex lg:justify-center ">
        <section className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start">
          <div className="mb-5 lg:mb-0 lg:mr-8">
            <LogoBookmark fillText="#FFF" />
          </div>

          <ul className="text-white lg:flex lg:flex-row lg:gap-8">
            <li className="mb-5 lg:mb-0">
              <a href="#" className=" font-semibold uppercase">
                Features
              </a>
            </li>
            <li className="mb-5 lg:mb-0">
              <a href="#" className=" font-semibold uppercase">
                Pricing
              </a>
            </li>
            <li className="mb-5 lg:mb-0">
              <a href="#" className=" font-semibold uppercase">
                Contact
              </a>
            </li>
          </ul>
        </section>

        <section className="w-full flex justify-center items-center gap-8 mt-5 lg:mt-0 lg:justify-end">
          <img src="/images/icon-facebook.svg" alt="icon-facebook" />
          <img src="/images/icon-twitter.svg" alt="icon-twitter" />
        </section>
      </div>
    </footer>
  );
};
