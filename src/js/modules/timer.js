const timer = () => {
  let deadline = "2024-06-30";

  function getClock(endtime) {
    let days, hours, minutes, second;

    let dif = Date.parse(endtime) - Date.parse(new Date());

    if (dif <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      second = 0;
    } else {
      days = Math.floor(dif / (24 * 60 * 60 * 1000));
      hours = Math.floor((dif / (60 * 60 * 1000)) % 24);
      minutes = Math.floor((dif / (60 * 1000)) % 60);
      second = Math.floor((dif / 1000) % 60);
    }

    return {
      dif,
      days,
      hours,
      minutes,
      second,
    };
  }

  function ifNumberIsZero(num) {
    if ((num < 10) & (num >= 0)) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function getTimer(endtime) {
    const days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timerId = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const timer = getClock(endtime);

      days.innerHTML = ifNumberIsZero(timer.days);
      hours.innerHTML = ifNumberIsZero(timer.hours);
      minutes.innerHTML = ifNumberIsZero(timer.minutes);
      seconds.innerHTML = ifNumberIsZero(timer.second);

      if (timer.dif <= 0) {
        clearInterval(timerId);
      }
    }
  }

  getClock(deadline);
  getTimer(deadline);
};

export default timer;
