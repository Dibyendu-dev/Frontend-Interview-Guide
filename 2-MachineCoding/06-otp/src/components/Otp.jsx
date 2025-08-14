import { useEffect, useRef, useState } from "react"


function Otp({otpLength = 6}) {

 const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
 const ref = useRef([]);
 useEffect(()=>{
    ref.current[0].focus()
 },[])

 const handleKeyDown = (e,index)=>{
    // console.log(e.key)
    const key = e.key;
   
    if(key === 'ArrowLeft'){
        if( index > 0) ref.current[index-1].focus();
            return
    }

    if(key === 'ArrowRight'){
        if(index +1 < otpFields.length) ref.current[index+1].focus();
            return
    }

    const copyOtpFields = [...otpFields];

    if(key === 'Backspace'){
        copyOtpFields[index]= "";
        setOtpFields(copyOtpFields);
        if( index > 0) ref.current[index-1].focus()
            return
    }

     if(isNaN(key)) return;

    copyOtpFields[index] = key;
    if(index +1 < otpFields.length) ref.current[index+1].focus()
    setOtpFields(copyOtpFields);
 }

  return (
    <div>
        {
            otpFields.map((value, index)=>{
                return(
                    <input 
                        className="otp-input"
                        ref={(currentInput)=> (ref.current[index] = currentInput)}
                        type="text" 
                        key={index}
                        value={value}
                        onKeyDown={(e)=>handleKeyDown(e,index) }
                    />
                )
            })
        }
    </div>
  )
}

export default Otp