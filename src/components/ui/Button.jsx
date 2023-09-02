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
      className="py-2 text-base font-bold text-white rounded-full"
    >
      {textButton}
    </button>
  );
};

export default Button;
