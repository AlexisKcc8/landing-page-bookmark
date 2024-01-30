import { LayerBook } from "./LayerBook";

export const ItemSlide = (props) => {
  const { dataFeatures } = props;

  const { idSlide, srcImg, altImg, title, description } = dataFeatures;

  return (
    <li
      key={idSlide}
      id={idSlide}
      className="h-full absolute top-0 left-0 transition-opacity bg-white opacity-0 first:opacity-100 target:opacity-100  "
    >
      <div className="px-7 h-[16rem] relative ">
        <img src={srcImg} alt={altImg} className="object-cover relative z-10" />
        <div className="w-[100%] h-[85%] absolute bottom-0 left-[-18%]  ">
          <LayerBook />
        </div>
      </div>

      <div className="">
        <h2 className=" font-bold text-blue-darker my-4 text-2xl">{title}</h2>
        <p className="text-gray-500 px-[1.3rem] ">{description}</p>
      </div>
    </li>
  );
};
