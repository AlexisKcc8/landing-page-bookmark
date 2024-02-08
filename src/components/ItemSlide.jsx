import { LayerBook } from "./LayerBook";

export const ItemSlide = (props) => {
  const { dataFeatures } = props;

  const { idSlide, srcImg, altImg, title, description } = dataFeatures;

  return (
    <li
      key={idSlide}
      id={idSlide}
      className=" absolute top-0 left-0 transition-opacity w-full h-auto bg-white opacity-0 first:opacity-100 target:opacity-100 lg:flex "
    >
      <div className="px-7  h-[16rem] relative lg:w-[50%] lg:px-0 lg:h-auto lg:flex  lg:items-center">
        <figure className="w-[100%] h-[100%] bg-white lg:w-[30rem] lg:h-[23rem]">
          <img
            src={srcImg}
            alt={altImg}
            className=" w-full h-full relative z-10"
          />
        </figure>
        <div className="w-[100%] h-[95%] absolute bottom-[-18%] left-[-18%] lg:w-[160%] lg:h-[75%] lg:bottom-[-5%] lg:left-[-90%] ">
          <LayerBook />
        </div>
      </div>

      <div className="lg:mt-0 lg:w-[50%] lg:text-start lg:flex lg:flex-col lg:justify-around py-20">
        <h2 className=" font-bold text-blue-darker  text-2xl lg:text-3xl ">
          {title}
        </h2>
        <p className="text-gray-500 px-[1.3rem] my-4 lg:px-0 lg:w-[85%] lg:text-[1.3rem]">
          {description}
        </p>
        <button className="hidden lg:block bg-blue-light text-white p-4 rounded-md w-[25%]">
          More Info
        </button>
      </div>
    </li>
  );
};
