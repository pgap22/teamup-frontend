const Button = ({
  textButton,
  onClickButton,
  px,
  type,
  disabled = false,
  bgColor = "#2F2BDE",
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClickButton}
      style={{ paddingLeft: px, paddingRight: px, backgroundColor: bgColor }}
      className="py-2 text-white rounded-full font-bold text-base"
    >
      {textButton}
    </button>
  );
};

export default Button;
