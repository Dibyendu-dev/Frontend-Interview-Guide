import React, { useRef } from "react";

const Modal = ({onClose}) => {
  const modalRef = useRef()

  const closeModal =(e)=>{
    if(modalRef.current === e.target){
      onClose()
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className=" fixed inset-0 bg-black/50 bg-opacity-30  flex justify-center items-center">
      <div className=" mt-10 flex flex-col gap-5 text-white">
        <button className=" place-self-end" onClick={onClose}>close</button>
        <div className=" bg-amber-500 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className=" text-3xl font-extrabold">Download my CV</h1>
          <p className=" text-xl font-bold max-w-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatem debitis cum explicabo illo quam aperiam, eos ad odio
            beatae nam ullam voluptates?
          </p>
          <form>
            <input
              
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className=" w-full px-4 py-3 text-black bg-gray-200 rounded-2xl"
            />
            <button className=" mt-4 w-full flex items-center justify-center bg-black gap-2 font-medium px-5 py-3 ">Download CV</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
