import { useEffect, useRef } from "react";
import { features } from "../data/myData";
import { ItemSlide } from "./ItemSlide";

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
          <li
            key={item.title}
            id={item.url}
            ref={(el) => (itemButton.current[index] = el)}
            className="w-full border border-gray-300 border-x-0 border-t-0 text-blue-darker  font-semibold relative inline-block first:border-t-2 before:block before:absolute before:-inset-0 before:w-[40%] before:mx-auto before:border-pink-500"
          >
            <a
              href={item.url}
              className="relative block p-4"
              onClick={() => getRefItem(index)}
            >
              {item.title}
            </a>
          </li>
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
