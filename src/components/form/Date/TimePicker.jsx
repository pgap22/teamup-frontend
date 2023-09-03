import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as TimePickerMUI } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import InputDateBody from "./Components/InputDateBody";
import dayjs from "dayjs";
import { useTranlate } from "src/hooks/useTranslation";

dayjs.extend(utc);
dayjs.extend(timezone);

const TimePicker = ({ label, time, setTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranlate();

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
        timezone="America/El_Salvador"
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
            label: t("seleccionaHora"),
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
