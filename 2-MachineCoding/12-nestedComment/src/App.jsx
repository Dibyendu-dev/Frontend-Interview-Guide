import './App.css'
import CommentBox from './components/CommentBox'
import commentdata from "./commentData.json"
import useComment from "./hooks/useComment.js"

function App() {
   const {comments, addComment} = useComment(commentdata)

  return (
    <>
      <CommentBox comment={comments[1]} allComments={comments} addComment={addComment}/>
    </>
  )
}

export default App
