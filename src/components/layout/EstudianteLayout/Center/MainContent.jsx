import Button from "../../../ui/Button";

const MainContent = ({ children, title, textButton, onClickButton }) => {
  return (
    <section className="flex flex-col w-full gap-5 rounded-md">
      <div className="flex justify-between w-full p-5 bg-white rounded-md flex-col sm:flex-row gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        {textButton && onClickButton && (
          <Button
            px={25}
            type={"button"}
            textButton={textButton}
            onClickButton={onClickButton}
          />
        )}
      </div>
      <div className="w-full h-full p-5 bg-white rounded-md">{children}</div>
    </section>
  );
};

export default MainContent;
