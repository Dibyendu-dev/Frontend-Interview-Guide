import { useState } from "react"


function InteractiveShape() {
      const [grid, setGrid] = useState( Array.from({length: 3} , ()=> new Array(3).fill(false)))
      const handleclick = (rowindex,colIndex) =>{
        const gridDeepCopy = grid.map((row) => [...row])
        gridDeepCopy[rowindex][colIndex] = true;
        setGrid(gridDeepCopy);
      }
  return (
    <div className="container">
        {grid.map((row,rowindex)=> {
            return row.map((cell,colIndex) =>{
                return <div className={`cell ${cell ? "active" : ""}`}
                onClick={()=>handleclick(rowindex,colIndex)}
                key={`${rowindex}-${colIndex}`}>  
                </div>
            }) 
        })}
    </div>
  )
}

export default InteractiveShape