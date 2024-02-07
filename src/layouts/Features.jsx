import { useEffect, useRef } from "react";
import { ItemLinkSlide } from "../components/ItemLinkSlide";
import { ItemSlide } from "../components/ItemSlide";
import { features } from "../data/myData";
import { useInView } from "react-intersection-observer";

export const Features = () => {
  const itemButton = useRef([]);
  const { itemsButton, itemsSlide } = features;
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    // threshold: 0,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    itemButton.current[0].classList.add("before:border-b-4");
  }, []);

  const getRefItem = (index) => {
    itemButton.current.forEach((item) =>
      item.classList.remove("before:border-b-4")
    );
    itemButton.current[index].classList.toggle("before:border-b-4");
  };

  return (
    <section
      id="section-features"
      className="scroll-mt-20 flex flex-col justify-start items-center text-center lg:relative "
    >
      <div
        ref={ref}
        className="lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:items-center"
      >
        <h2
          className={`font-bold text-2xl text-blue-darker mt-16 lg:text-3xl animate__animated ${
            inView ? "animate__backInUp" : ""
          }`}
        >
          Features
        </h2>
        <p
          className={`my-6 px-5 text-gray-500 lg:w-[55%] lg:text-[1.3rem] animate__animated ${
            inView ? "animate__zoomIn" : ""
          }`}
        >
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <ul
          className={`w-full px-5 lg:flex lg:justify-center lg:w-[70%] animate__animated ${
            inView ? "animate__fadeIn" : ""
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

        <div
          className={`relative w-full h-[30rem] mt-[2rem] mb-[8rem] animate__animated ${
            inView ? "animate__fadeIn" : ""
          }`}
        >
          <ul className="w-full h-full">
            {itemsSlide.map((item) => (
              <ItemSlide key={item.idSlide} dataFeatures={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
