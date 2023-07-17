import AsideLinks from "./AsideLinks";
const AsideMenu = ({ links }) => {
  return (
    <aside className="relative flex-col hidden w-full min-h-screen gap-5 p-4 bg-white rounded-md md:flex">
      <AsideLinks links={links} />
    </aside>
  );
};

export default AsideMenu;
