import AsideMenu from "./Aside/AsideMenu";
import RightAside from "./Aside/RightAside";
import MainContent from "./Center/MainContent";

//Contenedor de todos los menus de la pagina principal
const Main = ({
  children,
  title,
  textButton,
  onClickButton,
  links,
  RightAsideContent,
  RightAsideButton,
  RightAsideTitulo,
}) => {
  const grid = !RightAsideContent
    ? "md:grid-cols-[auto_minmax(0,1fr)]"
    : "md:grid-cols-[auto_minmax(0,1fr)_minmax(0,250px)]";

  const classes = "relative min-h-screen gap-4 p-4 md:grid " + grid;

  return (
    <main className={classes}>
      <AsideMenu links={links} />
      <MainContent
        textButton={textButton}
        onClickButton={onClickButton}
        title={title}
      >
        {children}
      </MainContent>

      {RightAsideContent && (
        <RightAside titulo={RightAsideTitulo} Icon={RightAsideButton}>
          {RightAsideContent}
        </RightAside>
      )}
    </main>
  );
};

export default Main;
