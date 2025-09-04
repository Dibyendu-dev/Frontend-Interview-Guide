import { useState } from "react";

const StarRating = ({ starCount }) => {
  const [starvalue, setStarValue] = useState();
  const [hovervalue, setHovervalue] = useState(0);

  return (
    <div className="star">
      {new Array(starCount).fill(0).map((val, index) => {
        return (
          <span
            key={index}
            className={
              (hovervalue == 0 && index < starvalue) || index < hovervalue
                ? "active"
                : ""
            }
            onClick={() => {
              setStarValue(index + 1);
            }}
            onMouseEnter={() => {
              setHovervalue(index + 1);
            }}
            onMouseLeave={() => {
              setHovervalue(0);
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
