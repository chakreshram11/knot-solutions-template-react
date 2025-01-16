import React from "react";
import PropTypes from "prop-types";

const AnimationWrapper = ({ animation, children, delay }) => {
  return (
    <>
      {/* Define animations as keyframes */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animation-wrapper {
          animation: ${animation} 1s ease-out ${delay || "0s"} forwards;
        }
      `}</style>

      {/* Wrap the children with the animation class */}
      <div className="animation-wrapper">
        {children}
      </div>
    </>
  );
};

AnimationWrapper.propTypes = {
  animation: PropTypes.oneOf([
    "fadeInLeft",
    "fadeInRight",
    "fadeInUp",
    "fadeInDown",
  ]).isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.string, // Delay in seconds (e.g., "0.5s")
};

export default AnimationWrapper;
