import { useModal } from "src/store/useModal";

const AsideHeader = ({ titulo, Icon }) => {
  return (
    <div className="flex items-start justify-between w-full p-5 bg-white rounded-t-md">
      <h1 className="text-3xl font-bold">{titulo}</h1>
      {Icon}
    </div>
  );
};

const RightAside = ({ children, titulo, Icon }) => {
  const { toggleModal } = useModal();

  return (
    <aside className="flex-col items-start justify-start hidden w-full gap-1 rounded-md md:flex">
      <AsideHeader toggleModal={toggleModal} titulo={titulo} Icon={Icon} />
      <div className="flex flex-col items-center w-full h-full gap-3 pt-5 rounded-b-md pb-5 overflow-y-auto bg-white">
        {children}
      </div>
    </aside>
  );
};

export default RightAside;
