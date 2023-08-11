import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as TimePickerMUI } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

import { useState } from "react";

import dayjs from "dayjs";

import { AiOutlineClockCircle } from "react-icons/ai";
import InputDateBody from "./Components/InputDateBody";

const TimePicker = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(dayjs(new Date()));

  const onChangeHandler = (_date) => {
    if (_date) {
      setTime(_date);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePickerMUI
        desktopModeMediaQuery="@media (max-width: 0px)"
        value={time}
        onChange={onChangeHandler}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        slots={{
          textField: InputDateBody,
        }}
        slotProps={{
          textField: {
            setIsOpen: setIsOpen,
            isOpen: isOpen,
            title: label,
            Icon: AiOutlineClockCircle,
            label: "Selecciona una hora",
          },
        }}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
