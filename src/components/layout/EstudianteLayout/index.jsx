import PageLayaout from "./PageLayaout";

const EstudianteLayaout = ({ children, title, textButton, onClickButton }) => {
  return (
    <PageLayaout
      textButton={textButton}
      onClickButton={onClickButton}
      title={title}
    >
      {children}
    </PageLayaout>
  );
};

export default EstudianteLayaout;
