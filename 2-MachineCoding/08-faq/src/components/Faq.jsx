import data from "../data/data.json"
import Accordian from "./Accordian";

function Faq() {
    // console.log(data.faqs);
  return (
    <div>
        <h1>Faq's</h1>
        {data.faqs.map((obj,index) => {
            return <Accordian key={index} qna={obj} />
        })}
    </div>
  )
}

export default Faq  