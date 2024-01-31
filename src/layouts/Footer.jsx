import { LogoBookmark } from "../components/LogoBookmark";

export const Footer = () => {
  return (
    <footer className=" bg-blue-darker flex flex-col justify-center items-center px-16 py-8">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mb-5">
          <LogoBookmark fillText="#FFF" />
        </div>
        <ul className="text-white">
          <li className="mb-5">
            <a href="#" className=" font-semibold uppercase">
              Features
            </a>
          </li>
          <li className="mb-5">
            <a href="#" className=" font-semibold uppercase">
              Pricing
            </a>
          </li>
          <li className="mb-5">
            <a href="#" className=" font-semibold uppercase">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center gap-8 mt-5">
        <img src="/images/icon-facebook.svg" alt="icon-facebook" />
        <img src="/images/icon-twitter.svg" alt="icon-twitter" />
      </div>
    </footer>
  );
};
