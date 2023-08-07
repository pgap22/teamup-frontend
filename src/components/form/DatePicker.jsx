import { BiCalendar } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

import { useEffect, useReducer, useRef } from "react";

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

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <label className="text-xl font-bold">{label}</label>

      <div className="relative w-full">
        <label className=" text-[#9A9A9A] font-bold text-xs pointer-events-none absolute left-14 top-2 flex ">
          Seleciona un dia
        </label>
        <div
          onClick={() => {
            dispatch({ type: "IS_OPEN", isOpen: !state.isOpen });
            toggleDisplayDateFocus();
          }}
        >
          <input
            type="text"
            readOnly
            value={state.displayDate}
            ref={displayDateRef}
            onKeyDown={handleDatePickerKeydown}
            className="outline-none cursor-pointer border text-sm rounded-lg block font-bold w-full pl-12 placeholder:text-[#9A9A9A] placeholder:font-bold  pt-6 pb-1 leading-none focus:outline-none focus:shadow-outline"
            placeholder="Select date"
            onBlur={handleOnBlur}
          />
          {/*Icono*/}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 font-bold cursor-pointer">
            <BsChevronDown color={"black"} size={20} />
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiCalendar color="#AEAEAE" size={25} />
          </div>
        </div>

        {/* Calendario*/}
        <div
          className={` z-50 outline-none duration-200 bg-white rounded-lg shadow p-4 absolute bottom-0 mb-12 ${
            !state.isOpen ? "invisible opacity-0" : "visible opacity-100"
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
                                                  ${
                                                    isToday(dayNumber)
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
      </div>
    </div>
  );
};

const months = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};

const SpanishMonths = {
  0: {
    name: "Enero",
    shortName: "Ene",
    spanishCalendarMonthNumber: 1,
  },
  1: {
    name: "Febrero",
    shortName: "Feb",
    spanishCalendarMonthNumber: 2,
  },
  2: {
    name: "Marzo",
    shortName: "Mar",
    spanishCalendarMonthNumber: 3,
  },
  3: {
    name: "Abril",
    shortName: "Abr",
    spanishCalendarMonthNumber: 4,
  },
  4: {
    name: "Mayo",
    shortName: "May",
    spanishCalendarMonthNumber: 5,
  },
  5: {
    name: "Junio",
    shortName: "Jun",
    spanishCalendarMonthNumber: 6,
  },
  6: {
    name: "Julio",
    shortName: "Jul",
    spanishCalendarMonthNumber: 7,
  },
  7: {
    name: "Agosto",
    shortName: "Ago",
    spanishCalendarMonthNumber: 8,
  },
  8: {
    name: "Septiembre",
    shortName: "Sep",
    spanishCalendarMonthNumber: 9,
  },
  9: {
    name: "Octubre",
    shortName: "Oct",
    spanishCalendarMonthNumber: 10,
  },
  10: {
    name: "Noviembre",
    shortName: "Nov",
    spanishCalendarMonthNumber: 11,
  },
  11: {
    name: "Diciembre",
    shortName: "Dic",
    spanishCalendarMonthNumber: 12,
  },
};

const SpanishDays = {
  0: {
    name: "Domingo",
    shortName: "Dom",
    spanishCalendarWeekdayNumber: 6,
  },
  1: {
    name: "Lunes",
    shortName: "Lun",
    spanishCalendarWeekdayNumber: 0,
  },
  2: {
    name: "Martes",
    shortName: "Mar",
    spanishCalendarWeekdayNumber: 1,
  },
  3: {
    name: "Miércoles",
    shortName: "Mie",
    spanishCalendarWeekdayNumber: 2,
  },
  4: {
    name: "Jueves",
    shortName: "Jue",
    spanishCalendarWeekdayNumber: 3,
  },
  5: {
    name: "Viernes",
    shortName: "Vie",
    spanishCalendarWeekdayNumber: 4,
  },
  6: {
    name: "Sábado",
    shortName: "Sab",
    spanishCalendarWeekdayNumber: 5,
  },
};

const days = ["Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"];

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

const getSpanishDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = ("0" + date.getDate()).slice(-2);

  // const monthShortName = SpanishMonths[date.getMonth()].shortName;
  // const dayShortName = SpanishDays[date.getDay()].shortName;
  // `${dayShortName} ${day} ${monthShortName}, ${year}`; -> Dom 06 Ago, 2023
  return `${day}-${month}-${year}`;
};

const formatYearsMonthDay = (date) => {
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};
export default DatePicker;
