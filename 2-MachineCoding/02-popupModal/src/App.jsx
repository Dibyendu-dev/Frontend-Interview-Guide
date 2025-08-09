import { useState } from 'react'
import Modal from './components/Modal'

function App() {
  const [showModal,setShowModal] = useState(false)

  return (
    <>
    <div  className=' h-screen flex flex-col items-center gap-6 bg-black text-white'>
       <h1 className=' text-5xl font-bold mt-4'>Popup Modal</h1>
       <button onClick={()=> setShowModal(true)} className=' bg-amber-600 px-4 py-2 rounded-lg text-lg'>Download CV</button>
       {showModal && <Modal onClose={()=>setShowModal(false)} />}
    </div>
    </>
  )
}

export default App
