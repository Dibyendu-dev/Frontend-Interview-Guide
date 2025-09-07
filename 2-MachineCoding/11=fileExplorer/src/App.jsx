import FileExplorer from './component/FileExplorer'
import './App.css'
import data from "./data/data.json"

function App() {
 

  return (
    <>
     <FileExplorer formData={data} />
    </>
  )
}

export default App
