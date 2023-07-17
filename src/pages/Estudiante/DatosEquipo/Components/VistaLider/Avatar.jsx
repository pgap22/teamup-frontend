import Button from "../../../../../components/ui/Button";

const Avatar = ({ avatar_url }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-[#828282] text-4xl font-bold self-e">
          Avatar de equipo
        </h1>

        <div
          style={{
            backgroundImage: `url(${
              import.meta.env.VITE_BASEAPIURL
            }${avatar_url})`,
          }}
          className=" bg-no-repeat bg-center w-56 h-36 border-2 border-[#CECECE] rounded-md p-3 grid grid-rows-auto justify-around flex-col"
        />
        <Button
          textButton={"Cambiar avatar"}
          onClickButton={() => {}}
          px={20}
          type={"button"}
        />
      </div>
    </div>
  );
};

export default Avatar;
