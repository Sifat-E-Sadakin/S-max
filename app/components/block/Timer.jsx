"use client";
import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <section className="flex gap-8 ">
        <div>
          <h2>{days}</h2>
          <p>Days</p>
        </div>
        <div>
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <div>
          <h2>{minutes}</h2>
          <p>Minutes</p>
        </div>
        <div>
          <h2>{seconds}</h2>
          <p>Seconds</p>
        </div>
      </section>
    );
  };

  return (
    <section className="container mx-auto my-10">
      <div className="timer flex justify-center items-center gap-7 ">
        <h1 className="text-2xl font-semibold">Next Course starts in:</h1>
        <Countdown date={Date.now() + 2764800000} renderer={renderer} />
      </div>
    </section>
  );
};

export default Timer;
