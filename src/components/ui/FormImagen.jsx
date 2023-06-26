const FormImagen = ({src}) => {
  return (
    <div className="relative hidden md:block">
      <div className=" z-10 absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-30 "></div>
      <div 
        style={{
          backgroundImage: `url(${src})`
        }}
        className={`absolute bg-no-repeat bg-cover bg-center top-0 left-0 right-0 bottom-0 `} />
    </div>
  );
};

export default FormImagen;
