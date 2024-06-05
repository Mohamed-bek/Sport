import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LiComp = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li
      style={{
        height: isExpanded ? "fit-content" : "50px",
        overflow: "hidden",
        transition: "height 0.3s ease",
        position: "relative",
      }}
    >
      <FaChevronDown className="downIcon" onClick={toggleHeight} />
      {children}
    </li>
  );
};

export default LiComp;
