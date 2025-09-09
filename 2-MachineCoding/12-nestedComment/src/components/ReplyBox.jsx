import { useState } from "react"

function ReplyBox({setShowReplyBox, addComment, id}) {
    const [reply, setReply] = useState("");
    const handleReply = ()=>{
        addComment(reply,id)
        setReply("");
        setShowReplyBox(false)
    }
  return (
    <div className="reply-form">
        <textarea className="reply-textarea"
        value={reply}
        onChange={(e)=>setReply(e.target.value)}
        placeholder="Write your reply here...."
        ></textarea>
        <button className="post-reply-btn" onClick={handleReply}>Post Reply</button>
    </div>
  )
}

export default ReplyBox