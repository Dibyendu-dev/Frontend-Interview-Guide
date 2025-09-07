import { useState } from "react"


function FileExplorer({formData}) {
    const [showChild, setShowChild] = useState(false)
    // console.log(formData)
    const handleClick = () => {
        setShowChild(!showChild)
    }

  return (
    <div className='container'>
        <h4>
            {formData.type === "folder" ? ( showChild ? "📂" :"📁") : "📄"}
             <span onClick={handleClick}>{formData.name}</span> 
       </h4>
       {showChild && formData?.children?.map((childData, index)=> {
             return <FileExplorer key={index} formData={childData} />
       })}
    </div>
  )
}

export default FileExplorer