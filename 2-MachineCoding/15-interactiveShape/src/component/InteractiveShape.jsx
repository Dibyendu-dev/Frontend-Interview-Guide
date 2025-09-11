import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

function InteractiveShape() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );

  const queue = useRef([]);
  const timerId = useRef([]);

  const handleclick = (rowindex, colIndex, flag) => {
    if(timerId.current.length > 0 && flag){
      return
    }
    if(grid[rowindex,colIndex] && flag){
      return
    }
    setGrid((prevGrid) => {
      const gridDeepCopy = prevGrid.map((row) => [...row]);
      gridDeepCopy[rowindex][colIndex] = flag;
      if (flag) queue.current.push([rowindex, colIndex]);
      return gridDeepCopy;
    });
  };

  useEffect(() => {
    if (queue.current.length === 9) {
      queue.current.forEach(([rowIdx, colIdx], idx) => {
        timerId.current[idx] = setTimeout(() => {
          handleclick(rowIdx, colIdx, false);
          if (idx === timerId.current.length - 1) timerId.current = [];
        }, 1000 * (idx + 1));
      });
      queue.current = [];
    }
  }, [grid]);


  useEffect(()=>{
    return ()=>{
      timerId.current.forEach((id)=> clearTimeout(id))
    }
  },[])

  return (
    <Grid grid={grid} handleclick={handleclick}/>
  );
}

export default InteractiveShape;
