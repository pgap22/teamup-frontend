const Item = ({ isActive, handleClick }) => {
  const stylesisActive = isActive ? "bg-[#E9D100]" : "bg-[#D9D9D9]";
  return (
    <div
      onClick={handleClick}
      className={` cursor-pointer rounded-full w-[70px] h-4 ${stylesisActive}`}
    />
  );
};

export default Item;
