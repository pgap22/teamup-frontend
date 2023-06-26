const TablaContainer = ({ children }) => {
  return (
    <div className="overflow-auto">
      <div className="rounded-md bg-white min-w-[680px]">{children}</div>
    </div>
  );
};

export default TablaContainer;
