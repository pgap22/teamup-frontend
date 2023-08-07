import { useState } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";

import { AnimatePresence, motion } from "framer-motion";
import TimeKeeper from 'react-timekeeper';
import InputDateBody from "./Components/InputDateBody";


const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const TimePicker = ({ time, setTime, show, handleClickClose }) => {
    return (
        show && (
            <AnimatePresence>
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.2 }}
                    className="z-50 outline-none duration-200 bg-white rounded-lg absolute bottom-0 mb-12">
                    <TimeKeeper
                        time={time}
                        onChange={(data) => setTime(data.formatted12)}
                        onDoneClick={handleClickClose}
                        switchToMinuteOnHourSelect
                    />
                </motion.div>
            </ AnimatePresence >
        )
    )
}


const HourPicker = ({ label }) => {
    const [time, setTime] = useState("12:00 pm")
    const [show, setShow] = useState(null)

    const handleClick = () => {
        setShow(!show)
    }
    const handleClickClose = () => {
        setShow(![])
    }
    const handleDatePickerKeydown = (e) => {
        if (e.charCode === 0) {
            handleClickClose()
        }
    };

    return (
        <InputDateBody
            handleClick={handleClick}
            label={label}
            title={"¿A que hora vamos a jugar?"}
            handleOnKeyDown={handleDatePickerKeydown}
            // handleOnBlur={handleClickClose}
            value={time}
            Icon={AiOutlineClockCircle}>
            <TimePicker handleClickClose={handleClickClose} show={show} time={time} setTime={setTime} />

        </InputDateBody >
    );
};


export default HourPicker;
