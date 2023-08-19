import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

import { useState } from "react";

import { BiCalendar } from "react-icons/bi";
import InputDateBody from "./Components/InputDateBody";

const DatePicker = ({ label, date, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [date, setDate] = useState(dayjs(new Date()));
  const onChangeHandler = (_date) => {
    if (_date) {
      setDate(_date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        desktopModeMediaQuery="@media (max-width: 1px)"
        value={date}
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
            Icon: BiCalendar,
            label: "Selecciona una hora",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
