import clsx from "clsx";
import LogoBlack from "../../Logo/LogoBlack";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import ButtonTranslate from "src/components/translate/ButtonTranslate";

const FormLayout = ({ titulo, subtitulo, children }) => {
  const noMobile = useMediaQuery("(min-width: 768px)");

  return (
    <main
      className={clsx(
        "md:self-center md:m-0",
        "flex bg-[#fefefe] m-4 md:w-full rounded-md flex-col items-center p-6 gap-4"
      )}
    >
      <div className="flex flex-col items-center w-full max-w-lg gap-6 md:items-start">
        <Link to={"/"}>
          <LogoBlack width={noMobile ? 260 : 170} />
        </Link>

        <div className="w-full space-y-2">
          <h1 className="text-3xl font-semibold text-center md:text-start">
            {titulo}
          </h1>
          <p className="text-[#676767] font-semibold text-center md:text-start">
            {subtitulo}
          </p>
        </div>
        {children}
      </div>
    </main>
  );
};

export default FormLayout;
