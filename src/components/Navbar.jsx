import { useToggleNabvar } from "../hooks/useToggleNabvar";
import { ButtonImg } from "./ButtonImg";
import { LogoBookmark } from "./LogoBookmark";

export const Navbar = () => {
  const { toggleMenu, refBtnToggle, refContainerNabvar, isToggle } =
    useToggleNabvar();

  return (
    <header
      className={`fixed  w-full ${
        isToggle ? "min-h-15" : "min-h-full bg-[#2e344e]"
      } overflow-hidden opacity-80 transition duration-700 ease-in lg:flex `}
      ref={refContainerNabvar}
    >
      <div className="flex justify-around  py-6">
        {isToggle ? (
          <LogoBookmark />
        ) : (
          <LogoBookmark fillText="#FFF" bgIcon="#242A45" fillCircle="#FFF" />
        )}

        <div className="lg:hidden">
          {isToggle ? (
            <ButtonImg
              handleFuntion={toggleMenu}
              refBtn={refBtnToggle}
              srcImg={"/images/icon-hamburger.svg"}
              altImg="icon-menu-hamburguer"
            />
          ) : (
            <ButtonImg
              handleFuntion={toggleMenu}
              refBtn={refBtnToggle}
              srcImg={"/images/icon-close.svg"}
              altImg="icon-close-menu"
            />
          )}
        </div>
      </div>

      <nav className="text-white absolute left-0 w-full h-[80%] flex flex-col justify-between lg:relative lg:text-black lg:flex-row">
        <ul className="px-8 mt-6 lg:flex">
          <li className="">
            <button className="w-full p-3 border border-[#464c66] border-x-0">
              FEATURES
            </button>
          </li>
          <li>
            <button className="w-full p-3 border border-[#464c66] border-x-0">
              PRICING
            </button>
          </li>
          <li>
            <button className="w-full p-3 border border-[#464c66] border-x-0">
              CONTACT
            </button>
          </li>
          <li>
            <button className="w-full p-3  border-2 border-white mt-6 rounded-md lg:bg-red-600">
              LOGIN
            </button>
          </li>
        </ul>

        <div className="flex justify-center gap-9 lg:hidden">
          <button>
            <img src="/images/icon-facebook.svg" alt="icon-facebook" />
          </button>
          <button>
            <img src="/images/icon-twitter.svg" alt="icon-twitter" />
          </button>
        </div>
      </nav>
    </header>
  );
};
