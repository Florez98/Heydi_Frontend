import React, { useState } from "react";

export const Cell = ({ consumo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { watts, percentage } = consumo;
  let colorClass;

  if (percentage < 0.3) {
    colorClass = "grey";
  } else if (percentage < 0.5) {
    colorClass = "lightGreen";
  } else if (percentage < 0.75) {
    colorClass = "green";
  } else {
    colorClass = "yellow";
  }

  return (
    <>
      <div
        className={`cell ${colorClass}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <>
            <div className="hover-info">
              <span className="tooltiptext">
                {watts + "W"}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
