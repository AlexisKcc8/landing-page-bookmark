import { features } from "../data/myData";
import { ItemSlide } from "../components/ItemSlide";
import { ItemLinkSlide } from "../components/ItemLinkSlide";
import { useEffect, useRef } from "react";

export const Features = () => {
  const { itemsButton, itemsSlide } = features;
  const refItemButton = useRef([]);
  useEffect(() => {
    refItemButton.current[0].classList.add("before:border-b-4");
  }, []);

  const getRefItem = (index) => {
    refItemButton.current.forEach((item) =>
      item.classList.remove("before:border-b-4")
    );
    refItemButton.current[index].classList.toggle("before:border-b-4");
  };

  return (
    <section
      id="features"
      className="flex flex-col justify-start items-center text-center "
    >
      <div className="lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h2 className="font-bold text-2xl text-blue-darker mt-16 lg:text-[2.2rem]">
          Features
        </h2>
        <p className="my-6 px-5 text-gray-500 lg:w-[55%] lg:text-[1.3rem]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="w-full px-5 lg:flex lg:justify-center lg:w-[70%]">
          {itemsButton.map((item, index) => (
            <ItemLinkSlide
              key={item.title}
              itemButton={item}
              myIndex={index}
              refItemButton={refItemButton}
              getRefItem={getRefItem}
            />
          ))}
        </ul>

        <ul className="w-full h-[65vh] overflow-hidden my-12 relative lg:h-[35vh] bg-red-500">
          {itemsSlide.map((item) => (
            <ItemSlide key={item.idSlide} dataFeatures={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
