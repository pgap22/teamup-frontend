import Logo from "../../../Logo/Logo";
import AsideLinks from "./AsideLinks";

const AsideMenu = ({ links = [] }) => {
    return (
      <div className="bg-primary p-4 min-h-screen hidden md:block">
        <div className="mt-4 flex flex-col gap-4 items-center">
          <Logo width={168} />
          <AsideLinks links={links} />
        </div>
      </div>
    );
  };
export default AsideMenu