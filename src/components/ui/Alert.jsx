const Alert = ({ children }) => {
  return children && <p className="select-none p-2 bg-red-700 text-white font-bold rounded-md">{children}</p>;
};

export default Alert;
