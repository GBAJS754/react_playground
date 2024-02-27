import { ChangeEvent, useEffect, useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [time, setTime] = useState({ hour: "", minutes: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const HOUR = Array.from({ length: 24 }, (_, index) => index + 1);
  const MINUTES = Array.from({ length: 60 }, (_, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const getHour = new Date().getHours();
      const getMinutes = new Date().getMinutes();
      if (
        getHour === Number(time.hour) &&
        getMinutes === Number(time.minutes)
      ) {
        if (alarm) {
          setIsOpen(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [alarm, time.hour, time.minutes]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <select name="hour" onChange={onChange}>
        {HOUR.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <select name="minutes" onChange={onChange}>
        {MINUTES.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setAlarm(true);
        }}
      >
        알림 설정
      </button>
      <Modal isOpen={isOpen} setAlarm={setAlarm} setIsOpen={setIsOpen}></Modal>
    </>
  );
}

export default App;
