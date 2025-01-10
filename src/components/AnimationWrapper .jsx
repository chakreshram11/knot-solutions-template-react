import React from "react";
import PropTypes from "prop-types";

const AnimationWrapper = ({ animation, children, delay }) => {
  return (
    <div
      className={`animate-${animation}`}
      style={{
        animation: `${animation} 1s ease-out ${delay || "0s"} forwards`,
        opacity: 0, // Default opacity to ensure animation starts
      }}
    >
      {children}
    </div>
  );
};

AnimationWrapper.propTypes = {
  animation: PropTypes.oneOf(["fadeInLeft", "fadeInRight", "fadeInUp", "fadeInDown"]).isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.string, // Delay in seconds (e.g., "0.5s")
};

export default AnimationWrapper;
