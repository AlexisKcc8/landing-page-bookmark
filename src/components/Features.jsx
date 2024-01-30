import { features } from "../data/myData";
import { ItemSlide } from "./ItemSlide";
import { LayerBook } from "./LayerBook";

export const Features = () => {
  const { itemsButton, itemsSlide } = features;
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
        {itemsButton.map((item) => (
          <li
            key={item.title}
            className="block w-full p-4 border border-gray-300 border-x-0 border-t-0 text-blue-darker  font-semibold first:border-t-2"
          >
            <a href={item.url}>{item.title}</a>
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
