
import './App.css'
import CommentBox from './components/CommentBox'
import commentdata from "./commentData.json"
import { useState } from 'react'

function App() {
  const [comments, setComments] = useState(commentdata.comments)

  return (
    <>
      <CommentBox comment={comments[1]} allComments={comments} />
    </>
  )
}

export default App
