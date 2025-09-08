import { useState } from "react"
import ReplyBox from "./ReplyBox"


function CommentBox({comment, allComments}) {
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
       { showReplyBox && <ReplyBox setShowReplyBox={setShowReplyBox}/>} 

       <div className="nested-comments">
        {comment.children.map((childId,id)=>{
            return (<CommentBox key={id} comment={allComments[childId]} allComments={allComments} />)
        })}
       </div>
    </div>
    
  )
}

export default CommentBox