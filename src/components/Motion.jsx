import React from "react";
import { MotionAnimate } from "react-motion-animate";

const Motion = ({ children }) => {
  return <MotionAnimate reset={true} delay={0.4}>{children}</MotionAnimate>;
};

export default Motion;
