import { useEffect, useRef } from "react";
import { ItemLinkSlide } from "../components/ItemLinkSlide";
import { ItemSlide } from "../components/ItemSlide";
import { features } from "../data/myData";
import { InView } from "react-intersection-observer";

export const Features = () => {
  const itemButton = useRef([]);
  const { itemsButton, itemsSlide } = features;

  useEffect(() => {
    itemButton.current[0].classList.add("before:border-b-4");
  }, []);

  const getRefItem = (index) => {
    itemButton.current.forEach((item) =>
      item.classList.remove("before:border-b-4")
    );
    itemButton.current[index].classList.toggle("before:border-b-4");
  };
  const options = {
    triggerOnce: true, // La función inView se activará una sola vez
  };
  return (
    <section
      id="section-features"
      className="scroll-mt-20 flex flex-col justify-start items-center overflow-hidden text-center lg:relative "
    >
      <div className=" lg:w-[100%] relative lg:flex lg:flex-col lg:justify-center lg:items-center">
        <InView {...options}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className=" lg:flex lg:flex-col lg:justify-center lg:items-center"
            >
              <h2
                className={`font-bold text-2xl text-blue-darker  lg:text-3xl animate__animated ${
                  inView ? "animate__bounceIn" : ""
                }`}
              >
                Features
              </h2>
              <p
                className={`my-6 px-5 text-gray-500 lg:w-[55%] lg:text-[1.3rem] animate__animated ${
                  inView ? "animate__zoomIn" : ""
                }`}
              >
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
              </p>
            </div>
          )}
        </InView>
        <InView {...options}>
          {({ inView, ref }) => (
            <ul
              ref={ref}
              className={`px-5 lg:flex lg:justify-center lg:w-[70%] animate__animated ${
                inView ? "animate__zoomIn" : ""
              }`}
            >
              {itemsButton.map((item, index) => (
                <ItemLinkSlide
                  key={item.title}
                  itemButton={item}
                  myIndex={index}
                  refItemButton={itemButton}
                  getRefItem={getRefItem}
                />
              ))}
            </ul>
          )}
        </InView>

        <div className="relative w-full h-[32rem] mt-4 overflow-hidden ">
          <InView {...options}>
            {({ inView, ref }) => (
              <ul
                ref={ref}
                className={` w-full h-full animate__animated ${
                  inView ? "animate__bounceInLeft" : ""
                }`}
              >
                {itemsSlide.map((item) => (
                  <ItemSlide key={item.idSlide} dataFeatures={item} />
                ))}
              </ul>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};
