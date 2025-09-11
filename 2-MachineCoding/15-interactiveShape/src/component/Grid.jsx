

function Grid({grid,handleclick}) {
  return (
    <div className="container">
      {grid.map((row, rowindex) => {
        return row.map((cell, colIndex) => {
          return (
            <div
              className={`cell ${cell ? "active" : ""}`}
              onClick={() => handleclick(rowindex, colIndex, true)}
              key={`${rowindex}-${colIndex}`}
            ></div>
          );
        });
      })}
    </div>
  )
}

export default Grid