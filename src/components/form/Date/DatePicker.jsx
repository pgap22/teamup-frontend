import { BiCalendar } from "react-icons/bi";

import { getSpanishDate, formatYearsMonthDay } from "./logic/helper";
import { months, SpanishDays, days } from "./logic/constantes";

import { useEffect, useReducer, useRef } from "react";

import InputDateBody from "./Components/InputDateBody";


const DatePicker = ({ label }) => {
  const [state, dispatch] = useReducer(datePickerReducer, initState);
  const displayDateRef = useRef();
  const daysDivRef = useRef();

  useEffect(() => {
    dispatch({ type: "SET_INIT_STATE" });
  }, []);

  const isToday = (dayNumber) => {
    const today = new Date();
    const day = new Date(state.year, state.month, dayNumber);

    return today.toDateString() === day.toDateString();
  };

  const handleOnBlur = () => {
    dispatch({ type: "IS_OPEN", isOpen: false });
    toggleDisplayDateFocus();
  };

  const handleDatePickerKeydown = (e) => {
    if (e.charCode === 0) {
      dispatch({ type: "IS_OPEN", isOpen: false });
    }
  };

  const toggleDisplayDateFocus = () => {
    const displayDate = displayDateRef.current;
    if (displayDate.classList.contains("shadow-outline")) {
      displayDate.classList.remove("shadow-outline");
      displayDate.blur();
    } else {
      displayDate.classList.add("shadow-outline");
      displayDate.focus();
    }

    const daysDiv = daysDivRef.current;
    daysDiv.focus();
  };

  const handleClickOpen = () => {
    dispatch({ type: "IS_OPEN", isOpen: !state.isOpen });
    toggleDisplayDateFocus();
  }

  return (
    <InputDateBody handleClick={handleClickOpen} inpuRef={displayDateRef} label={label} title={"¿Que dia vamos a jugar?"} handleOnKeyDown={handleDatePickerKeydown} handleOnBlur={handleOnBlur} value={state.displayDate} Icon={BiCalendar}>
      <div
        className={` z-50 outline-none duration-200 bg-white rounded-lg shadow p-4 absolute bottom-0 mb-12 ${!state.isOpen ? "invisible opacity-0" : "visible opacity-100"
          }`}
        style={{ width: "17rem" }}
        ref={daysDivRef}
        tabIndex={-1}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-lg font-bold text-gray-800">
              {months[state.month]}
            </span>
            <span className="ml-1 text-lg font-normal text-gray-600">
              {state.year}
            </span>
          </div>
          <div>
            <button
              type="button"
              className={`transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full focus:shadow-outline focus:outline-none mr-1`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => dispatch({ type: "SUBTRACT_MONTH" })}
            >
              <svg
                className="inline-flex w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              className={`transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full focus:shadow-outline focus:outline-none`}
              onClick={() => dispatch({ type: "ADD_MONTH" })}
            >
              <svg
                className="inline-flex w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap mb-3 -mx-1">
          {days.map((day, index) => (
            <div key={index} style={{ width: "14.26%" }} className="px-1">
              <div className="text-xs font-medium text-center text-gray-800">
                {day}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap -mx-1">
          {state.blankDaysArr.map((day, index) => (
            <div
              key={index}
              style={{ width: "14.28%" }}
              className="p-1 text-sm text-center border border-transparent"
            />
          ))}
          {state.daysInMonthArr.map((dayNumber, index) => (
            <div
              key={index}
              style={{ width: "14.28%" }}
              className="px-1 mb-1"
            >
              <div
                onClick={() => {
                  dispatch({ type: "SET_DATE", dayNumber });
                  toggleDisplayDateFocus();
                }}
                onMouseDown={(event) => event.preventDefault()}
                className={`cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100 
                                                  ${isToday(dayNumber)
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-200"
                  }`}
              >
                {dayNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
    </InputDateBody >
  );
};

const initState = {
  isOpen: false,
  date: "",
  displayDate: "",
  month: null,
  year: null,
  daysInMonthArr: [],
  blankDaysArr: [],
};

const datePickerReducer = (state, action) => {
  switch (action.type) {
    case "SET_INIT_STATE": {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();

      const dayOfWeek = new Date(year, month).getDay();
      const spanishWeekday =
        SpanishDays[dayOfWeek].spanishCalendarWeekdayNumber;
      const displayDate = getSpanishDate(
        new Date(year, month, today.getDate())
      );
      const date = formatYearsMonthDay(new Date(year, month, today.getDate()));

      const daysInMonth = new Date(year, month, 0).getDate();
      let blankDaysArr = [];
      for (let i = 1; i <= spanishWeekday; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        date,
        displayDate,
        month,
        year,
        daysInMonthArr,
        blankDaysArr,
      };
    }

    case "IS_OPEN": {
      return {
        ...state,
        isOpen: action.isOpen,
      };
    }

    case "SET_DATE": {
      const dateToFormat = new Date(state.year, state.month, action.dayNumber);
      const date = formatYearsMonthDay(dateToFormat);
      const displayDate = getSpanishDate(dateToFormat);

      return {
        ...state,
        date,
        displayDate,
        isOpen: false,
      };
    }

    case "ADD_MONTH": {
      let newYear;
      let newMonth;
      if (state.month === 11) {
        newMonth = 0;
        newYear = state.year + 1;
      } else {
        newMonth = state.month + 1;
        newYear = state.year;
      }

      const newMonthFirstWeekdayNumber = new Date(
        newYear,
        newMonth,
        1
      ).getDay();
      const spanishFirstWeekdayNumber =
        SpanishDays[newMonthFirstWeekdayNumber].spanishCalendarWeekdayNumber;
      const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

      let blankDaysArr = [];
      for (let i = 1; i <= spanishFirstWeekdayNumber; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        month: newMonth,
        year: newYear,
        daysInMonthArr,
        blankDaysArr,
      };
    }

    case "SUBTRACT_MONTH": {
      let newYear;
      let newMonth;
      if (state.month === 0) {
        newMonth = 11;
        newYear = state.year - 1;
      } else {
        newMonth = state.month - 1;
        newYear = state.year;
      }

      const newMonthFirstWeekdayNumber = new Date(
        newYear,
        newMonth,
        1
      ).getDay();
      const spanishFirstWeekdayNumber =
        SpanishDays[newMonthFirstWeekdayNumber].spanishCalendarWeekdayNumber;
      const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

      let blankDaysArr = [];
      for (let i = 1; i <= spanishFirstWeekdayNumber; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        year: newYear,
        month: newMonth,
        daysInMonthArr,
        blankDaysArr,
      };
    }

    default: {
      throw Error("Error en el reducer");
    }
  }
};



export default DatePicker;
