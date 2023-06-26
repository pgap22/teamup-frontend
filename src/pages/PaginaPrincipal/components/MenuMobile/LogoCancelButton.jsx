import LogoBlack from "../../../../components/Logo/LogoBlack";
import Cancel from "../../../../components/form/Cancel";
import { useMenu } from "../../../../store/useMenu";

const LogoCancelButton = () => {
    const { toggleMenu } = useMenu();

  return (
    <div className="grid grid-cols-[1fr_max-content]">
      <div className="flex justify-center">
        <LogoBlack />
      </div>

      <div onClick={() => toggleMenu()}>
        <Cancel />
      </div>
    </div>
  );
};

export default LogoCancelButton;
