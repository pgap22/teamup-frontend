const Container = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl  w-full">{children}</div>
    </div>
  );
};

export default Container;
