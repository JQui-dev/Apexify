// MODULES
import { useEffect, useState } from 'react';

// COMPONENTS

// STYLE
import './style/CDown.scss'

function CDown({ what, date, time }) {
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0 });
  const [countdownReady, setCountdownReady] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const target = new Date(`${date}T${time}`).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setCd({ days: 0, hours: 0, minutes: 0 });
        setCountdownReady(true);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setCd({ days, hours, minutes });
        setCountdownReady(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date, time]);

  return (
    <div className='CDown'>
      <h2>{what}</h2>
      {countdownReady &&
        <div className='counter'>
          <div className="wrap">
            <h3>{cd.days}</h3>
            <h4>DAYS</h4>
          </div>
          <div className="wrap">
            <h3>{cd.hours}</h3>
            <h4>HRS</h4>
          </div>
          <div className="wrap">
            <h3>{cd.minutes}</h3>
            <h4>MINS</h4>
          </div>
        </div>
      }
    </div>
  );
}

export default CDown