import "./index.css";

const Range = ({
  label,
  setValue,
  value,
  color = "#1976d2",
  step = 1,
  minmax = [0, 100],
}) => {
  return (
    <>
      <label htmlFor="rangeComponent" className="mb-2 inline-block  font-bold ">
        {label}
      </label>
      <input
        style={{ color: color }}
        type="range"
        step={step}
        min={minmax[0]}
        max={minmax[1]}
        className=" w-full cursor-pointer"
        id="rangeComponent"
        onChange={(e) => {
          setValue(parseFloat(e.target.value));
        }}
        value={value}
      />
    </>
  );
};

export default Range;
