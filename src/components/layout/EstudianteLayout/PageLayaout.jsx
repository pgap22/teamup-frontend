import Nav from "./MenuTop/Nav";
import Main from "./Main";
import FondoColor from "../../ui/FondoColor";

import EquipoModal from "../../Modales/equipoModal/EquipoModal";

const PageLayaout = ({ children, title, textButton, onClickButton }) => {
  return (
    <FondoColor color={"#DCDDDE"}>
      <div className="flex flex-col gap-5">
        <Nav />
        <Main
          textButton={textButton}
          onClickButton={onClickButton}
          title={title}
        >
          {children}
        </Main>
      </div>
    </FondoColor>
  );
};

export default PageLayaout;
