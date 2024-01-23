export const ButtonImg = (props) => {
  const { handleFuntion, refBtn, srcImg, altImg } = props;
  return (
    <button className="" onClick={handleFuntion}>
      <img ref={refBtn} className="" src={srcImg} alt={altImg} />
    </button>
  );
};
