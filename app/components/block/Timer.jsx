"use client";
import styled from "styled-components";
import Countdown from "react-countdown";
import { useEffect } from "react";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Times>
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
      </Times>
    );
  };
  useEffect(() => {}, []);
  return (
    <section>
      <TimerDiv className="timer">
        <TimeHeading>Next Course starts in:</TimeHeading>
        <Countdown date={Date.now() + 2764800000} renderer={renderer} />
      </TimerDiv>
    </section>
  );
};

export default Timer;

const TimerDiv = styled.div`
  height: 132px;
  width: 856px;
  background-image: linear-gradient(#827bf5, #e15ef7);
  margin: 0 auto;
  border-radius: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 90%;
    height: 60px;
  }
`;
const TimeHeading = styled.h2`
  font-size: calc(18px + (40 - 18) * ((100vw - 360px) / (1920 - 360)));
  font-weight: 700;
`;
const Times = styled.div`
  display: flex;
  div {
    text-align: center;
    margin-left: 25px;
    h2 {
      font-size: calc(18px + (45 - 18) * ((100vw - 360px) / (1920 - 360)));
      font-weight: 700;
    }
    p {
      font-size: calc(6px + (18 - 6) * ((100vw - 360px) / (1920 - 360)));
    }
    @media screen and (max-width: 992px) {
      margin-left: 15px;
    }
  }
`;
