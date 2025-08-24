import { useState } from "react";

function Accordian({ qna }) {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "0.5rem 0",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden", // Prevent scrolling
        maxHeight: "100px", // Set a maximum height
        maxWidth: "100%",   // Set a maximum width
      }}
    >
      <h2>
        {qna.question}
        <span
          style={{
            position: "absolute",
            right: "2rem",
            cursor: "pointer",
          }}
          onClick={() => setShow(!show)}
        >
          {show ? "-" : "+"}{" "}
        </span>
      </h2>
      {show ? <p>{qna.answer}</p> : ""}
    </div>
  );
}

export default Accordian;
