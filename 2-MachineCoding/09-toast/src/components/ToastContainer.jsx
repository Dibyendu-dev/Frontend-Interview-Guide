import { useState } from "react"
import "./style.css"

export default function ToastContainer() {
    const [show,setShow] = useState();
    const handleClose = ()=>{
        setShow(false)
    }
    const handleAdd = () => {
        setShow(true);
        setTimeout(()=>{
            handleClose()
        },3000)
    }

  return (
    <div className="container">
        <div className="toast-container">
            {show && (<div className="toast">
                Success <span onClick={handleClose}>x</span>
            </div>)}
        </div>
        <div className="btn-container">
            <button onClick={handleAdd}>Success</button>
            <button>Info</button>
            <button>Warning</button>
            <button>Danger</button>
        </div>
    </div>
  )
}
