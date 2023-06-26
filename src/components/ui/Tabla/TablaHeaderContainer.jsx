const TablaHeaderContainer = ({ children }) => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
      {children}
    </div>
  );
};
export default TablaHeaderContainer;
