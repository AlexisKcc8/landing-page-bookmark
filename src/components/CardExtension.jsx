export const CardExtension = (props) => {
  const { extension, index } = props;

  const { id, srcImg, altImg, title, version } = extension;

  let example = index * 5;
  console.log(index);
  return (
    <div className={`w-[80%] h-[25rem] flex flex-col shadow-xl `}>
      <div className="bg-white flex flex-col justify-center items-center grow">
        <figure>
          <img src={srcImg} alt={altImg} />
        </figure>
        <h3 className="text-2xl text-blue-darker font-bold my-3">{title}</h3>
        <p className=" text-gray-500">{version}</p>
      </div>
      <footer className="flex justify-center items-center  p-5 border-0 border-dotted border-t-4">
        <button className="w-full bg-blue-light p-5 text-white font-bold rounded-md">
          Add & Install Extension
        </button>
      </footer>
    </div>
  );
};
