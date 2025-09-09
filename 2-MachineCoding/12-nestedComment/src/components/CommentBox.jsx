import { useState } from "react"
import ReplyBox from "./ReplyBox"


function CommentBox({comment, allComments, addComment}) {
    const [showReplyBox, setShowReplyBox] = useState(false)
    const handleClick = () => {
        setShowReplyBox(!showReplyBox)
    }
  return (
    <div>
        <div className="comment-container">
            <div className="comment-header">
                <p>{comment.value}</p>
                <div className="comment-action">
                    <button className="reply-btn" onClick={handleClick}>{showReplyBox? "Cancel" : "Reply"}</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
       { showReplyBox && <ReplyBox setShowReplyBox={setShowReplyBox} addComment={addComment} id={comment.id}/>} 

       <div className="nested-comments">
        {comment.children.map((childId)=>{
            return (<CommentBox key={childId} 
                    comment={allComments[childId]} 
                    allComments={allComments} 
                    addComment={addComment}
                />)
        })}
       </div>
    </div>
    
  )
}

export default CommentBox