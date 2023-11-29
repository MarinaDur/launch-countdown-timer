import { createContext, useContext, useEffect, useRef, useState } from "react";

const TimerContext = createContext();

function TimerProvider({ children }) {
  const [days, setDays] = useState({ day: "09" });
  const [hours, setHours] = useState({ hour: "00" });
  const [minutes, setMinutes] = useState({ min: "00" });
  const [seconds, setSeconds] = useState({ sec: "00" });
  //   const [daysFlip, setDaysFlip] = useState({ day: "09" });
  //   const [hoursFlip, setHoursFlip] = useState({ hour: "00" });
  //   const [minutesFlip, setMinutesFlip] = useState({ min: "00" });
  //   const [secondsFlip, setSecondsFlip] = useState({ sec: "00" });

  const top = useRef();
  const bottom = useRef();
  const topFlip = useRef();
  const bottomFlip = useRef();

  useEffect(() => {
    const countToDate = new Date();
    countToDate.setDate(countToDate.getDate() + 9);

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

      if (timeBetweenDates >= 0) {
        calculateTimeValues(timeBetweenDates);
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const calculateTimeValues = (time) => {
    setSeconds((prev) => {
      return {
        ...prev,
        sec: time % 60,
      };
    });
    setMinutes((prev) => {
      return {
        ...prev,
        min: Math.floor(time / 60) % 60,
      };
    });
    setHours((prev) => {
      return {
        ...prev,
        hour: Math.floor(time / 3600) % 24,
      };
    });
    setDays((prev) => {
      return {
        ...prev,
        day: Math.floor(time / 86400),
      };
    });
  };

  function flip(name, startNum, newNum) {
    // const topHalf = flipCard.querySelector(".top");
    let startNumb;
    if (name === "day") startNumb = Number(days[name]);
    if (name === "hour") startNumb = Number(hours[name]);
    if (name === "min") startNumb = Number(minutes[name]);
    if (name === "sec") startNumb = Number(seconds[name]);

    if (startNumb === newNum) return;

    const startNumber =
      Math.floor(startNum / 10) === 0 ? `0${startNum}` : startNum;
    const newNumer = Math.floor(newNum / 10) === 0 ? `0${newNum}` : newNum;

    // const bottomHalf = flipCard.querySelector(".bottom");
    // const bottomHalf = flipCard.querySelector(".bottom");
    // const topFlip = document.createElement("div");
    // topFlip.classList.add("top-flip");
    // const bottomFlip = document.createElement("div");
    // bottomFlip.classList.add("bottom-flip");

    // topHalf.textContent = start;
    // bottomHalf.textContent = start;
    // topFlip.textContent = start;
    // bottomFlip.textContent = newNum;

    // flipCard.append(topFlip, bottomFlip);
    // topFlip.addEventListener("animationstart", (e) => {
    //   topHalf.textContent = newNum;
    // });

    // topFlip.addEventListener("animationend", (e) => {
    //   topFlip.remove();
    // });

    // bottomFlip.addEventListener("animationend", (e) => {
    //   bottomHalf.textContent = newNum;
    //   bottomFlip.remove();
    // });
  }
  return (
    <TimerContext.Provider
      value={{
        days,
        hours,
        minutes,
        seconds,
        flip,
        top,
        bottom,
        topFlip,
        bottomFlip,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined)
    throw new Error("TimerContext was used outside of the TimerProvider");
  return context;
}

export { TimerProvider, useTimer };
