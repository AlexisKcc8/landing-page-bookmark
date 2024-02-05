import { useToggleNabvar } from "../hooks/useToggleNabvar";
import { ButtonImg } from "../components/ButtonImg";
import { LogoBookmark } from "../components/LogoBookmark";
import { linksNavbar } from "../data/myData";
export const Navbar = () => {
  const { toggleMenu, refBtnToggle, refContainerNabvar, isToggle } =
    useToggleNabvar();

  return (
    <header
      className={`fixed top-0 left-0  w-full ${
        isToggle ? "h-screen bg-[#2e344e]" : "h-[4.5rem] bg-white"
      }   overflow-hidden transition duration-700 ease-in  lg:flex lg:justify-center z-50  opacity-85 cursor-pointer `}
    >
      <div className="lg:w-[80%] h-full flex flex-col lg:justify-between lg:items-center ">
        <div
          className={`flex justify-around flex-grow-0  py-6  opacity-85 transition duration-700 ease-in `}
        >
          {isToggle ? (
            <LogoBookmark fillText="#FFF" bgIcon="#242A45" fillCircle="#FFF" />
          ) : (
            <LogoBookmark />
          )}

          <div className="lg:hidden">
            {isToggle ? (
              <ButtonImg
                handleFuntion={toggleMenu}
                refBtn={refBtnToggle}
                srcImg={"/images/icon-close.svg"}
                altImg="icon-close-menu"
              />
            ) : (
              <ButtonImg
                handleFuntion={toggleMenu}
                refBtn={refBtnToggle}
                srcImg={"/images/icon-hamburger.svg"}
                altImg="icon-menu-hamburguer"
              />
            )}
          </div>
        </div>

        <nav
          className={`w-full  text-white flex flex-col flex-grow  lg:text-black lg:flex-row `}
        >
          <ul className="h-full px-8 flex flex-col justify-between text-center ">
            <div className="">
              {linksNavbar.map((link) => (
                <li key={link.href} className="">
                  <a
                    onClick={toggleMenu}
                    className=" block w-full p-3 border border-y-2 border-[#464c66] border-x-0"
                    href={link.href}
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              <li>
                <button className="w-full p-3  border-2 border-white mt-6 rounded-md lg:bg-red-600">
                  LOGIN
                </button>
              </li>
            </div>
          </ul>

          <ul className=" flex justify-center mb-8 gap-9 lg:hidden">
            <a href="#">
              <img src="/images/icon-facebook.svg" alt="icon-facebook" />
            </a>
            <a href="#">
              <img src="/images/icon-twitter.svg" alt="icon-twitter" />
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};
