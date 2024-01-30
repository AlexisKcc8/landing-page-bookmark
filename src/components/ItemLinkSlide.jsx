import { useEffect, useRef } from "react";

export const ItemLinkSlide = (props) => {
  const { itemButton, myIndex, getRefItem, refItemButton } = props;

  const { title, url } = itemButton;

  return (
    <li
      key={title}
      id={url}
      ref={(el) => (refItemButton.current[myIndex] = el)}
      className="w-full border border-gray-300 border-x-0 border-t-0 text-blue-darker  font-semibold relative inline-block first:border-t-2 before:block before:absolute before:-inset-0 before:w-[40%] before:mx-auto before:border-pink-500"
    >
      <a
        href={url}
        className="relative block p-4"
        onClick={() => getRefItem(myIndex)}
      >
        {title}
      </a>
    </li>
  );
};
