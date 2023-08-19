import { useState } from "react";

const Toggle = ({ enabled, setEnabled }) => {


  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <span className="ml-2 text-xl font-bold text-gray-900">
        Maestro intermediario
      </span>
      <div className="flex">
        <label className="relative inline-flex items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-16 h-8 bg-[#EAEAEA] rounded-full peer  peer-focus:ring-green-300  
          peer-checked:after:translate-x-[115%] peer-checked:after:border-white peer-checked:after:bg-white after:content-[''] 
          after:absolute after:top-1 after:left-[6px] after:bg-[#AEAEAE] after:border-[#AEAEAE]
          after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
          peer-checked:bg-[#3A37E7]"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
