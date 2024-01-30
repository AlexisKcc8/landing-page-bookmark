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
      className="min-h-screen flex flex-col justify-start items-center text-center "
    >
      <h2 className="font-bold text-2xl text-blue-darker mt-16">Features</h2>
      <p className="my-6 px-5 text-gray-500">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul className="w-full px-5">
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

      <ul className="w-full h-[75vh] overflow-hidden my-12 relative">
        {itemsSlide.map((item) => (
          <ItemSlide key={item.idSlide} dataFeatures={item} />
        ))}
      </ul>
    </section>
  );
};
