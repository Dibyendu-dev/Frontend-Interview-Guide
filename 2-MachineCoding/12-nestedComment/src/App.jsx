import './App.css'
import CommentBox from './components/CommentBox'
import commentdata from "./commentData.json"
import {  useState } from 'react'

function App() {
  const [comments, setComments] = useState(commentdata.comments)

  const addComment = (value, parentId) =>{
    const newId = Date.now();
    const newComment = {
      id: newId,
      value,
      parentId,
      children: []
    }

    setComments((prevComment) => {
      const updatedComment = { ...prevComment, [newId]:newComment};
      updatedComment[parentId].children.push(newId);
      return updatedComment
    })
  }

  return (
    <>
      <CommentBox comment={comments[1]} allComments={comments} addComment={addComment}/>
    </>
  )
}

export default App
