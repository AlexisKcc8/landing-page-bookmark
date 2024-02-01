import { LayerBook } from "./LayerBook";

export const ItemSlide = (props) => {
  const { dataFeatures } = props;

  const { idSlide, srcImg, altImg, title, description } = dataFeatures;

  return (
    <div className="relative">
      <li
        key={idSlide}
        id={idSlide}
        className="absolute top-0 left-0 transition-opacity bg-white opacity-0 first:opacity-100 target:opacity-100 lg:flex"
      >
        <div className="px-7 h-[16rem] relative lg:w-[50%]">
          <figure className="w-[100%] h-[15rem] ">
            <img
              src={srcImg}
              alt={altImg}
              className=" object-fill relative z-10 w-full h-full"
            />
          </figure>
          <div className="w-[100%] h-[85%] absolute bottom-[-10%] left-[-18%]  ">
            <LayerBook />
          </div>
        </div>

        <div className="lg:w-[50%] mt-12">
          <h2 className=" font-bold text-blue-darker my-4 text-2xl">{title}</h2>
          <p className="text-gray-500 px-[1.3rem] ">{description}</p>
        </div>
      </li>
    </div>
  );
};
