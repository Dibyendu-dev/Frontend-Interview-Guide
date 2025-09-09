import { useEffect, useRef, useState } from "react";
import data from "../data/data.json";
const dataLength = data.length;
function Carousel() {
  const [index, setindex] = useState(0);
  const ref = useRef();
  const handleNext = () => {
    setindex((prevIndex) => {
      if (prevIndex == dataLength - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    if (index == 0) {
      setindex(dataLength - 1);
    } else {
      setindex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 2500);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        clearInterval(ref.current);
      }}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 2500);
      }}
      className="container"
    >
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div onClick={handleNext} className="right-btn">
        {">"}
      </div>
    </div>
  );
}

export default Carousel;
