import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() =>
      setTime(new Date().toLocaleTimeString())
    );

    return () => {
      clearInterval(interval);
    };
  });

  return <h1>{time}</h1>;
};

export default Clock;
