import { useEffect, useCallback } from "react";

export const useTimer = () => {
  const timer = useCallback((time) => {
    // Your flipAllCards function
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);

    flip(document.querySelector("#days"), days);
    flip(document.querySelector("#hours"), hours);
    flip(document.querySelector("#minutes"), minutes);
    flip(document.querySelector("#seconds"), seconds);
  }, []);

  useEffect(() => {
    const countToDate = new Date().setDate(new Date().getDate() + 15);

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

      if (timeBetweenDates >= 0) {
        timer(timeBetweenDates);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  function flip(flipCard, newNum) {
    const top = flipCard.querySelector(".top");
    const bottom = flipCard.querySelector(".bottom");

    const prevNum = Number(top.textContent);
    if (prevNum === newNum) return;

    const prevNumWithZero =
      Math.floor(prevNum / 10) === 0 ? `0${prevNum}` : prevNum;
    const newNumWithZero =
      Math.floor(newNum / 10) === 0 ? `0${newNum}` : newNum;

    const topFlip = document.createElement("div");
    const bottomFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    bottomFlip.classList.add("bottom-flip");

    bottom.textContent = prevNumWithZero;
    topFlip.textContent = prevNumWithZero;
    bottomFlip.textContent = newNumWithZero;
    flipCard.append(topFlip, bottomFlip);

    topFlip.addEventListener("animationstart", () => {
      top.textContent = newNumWithZero;
    });

    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });

    bottomFlip.addEventListener("animationend", () => {
      bottom.textContent = newNumWithZero;
      bottomFlip.remove();
    });
  }
};
