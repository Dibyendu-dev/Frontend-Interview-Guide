import { useState } from "react";

const StarRating = ({ starCount }) => {
  const [starvalue, setStarValue] = useState();
  console.log(starvalue);
  return (
    <div className="star">
      {new Array(starCount).fill(0).map((val, index) => {
        return <span
         key={index}
         className={ index < starvalue ? "active" : ""}
        onClick={()=>{setStarValue(index+1)}}
        >&#9733;</span>;
      })}
    </div>
  );
};

export default StarRating;
