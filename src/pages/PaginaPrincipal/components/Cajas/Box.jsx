import clsx from "clsx";

const Box = ({ children, invert = false }) => {
  const orientacion = invert ? 'md:flex-row-reverse' : 'md:flex-row'
  const box = [
    "md:max-w-[1024px] md:gap-16",
    "flex flex-col gap-6 items-center text-center max-w-md",
    orientacion
]
  return (
    <div className={clsx(box)}>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Box;
