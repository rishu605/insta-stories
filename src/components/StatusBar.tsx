import { useState, useEffect } from "react";
import { FaBatteryFull } from "react-icons/fa";

const StatusBar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="status-bar">
      <div className="time">{time}</div>
      <div className="instagram-logo">Instagram</div>
      <div className="battery">
        <FaBatteryFull role="img" size={20} />
      </div>
    </div>
  );
};

export default StatusBar;