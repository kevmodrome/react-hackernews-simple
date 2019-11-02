import React from 'react'

const Comment = ({ comment }) => {
  const nestedComments = (comment.comments || []).map(comment => {
    return <Comment key={comment.id} comment={comment} type="child" />
  })

  return (
    comment.title ? nestedComments : <div style={{ "marginLeft": "25px", "marginTop": "20px" }}>
      <p style={{ color: 'grey', fontSize: '0.9em' }}>{comment.user} {comment.time_ago}</p>
      <div style={{ borderBottom: '1px solid lightgrey' }} dangerouslySetInnerHTML={{ __html: comment.content }} />
      {nestedComments}
    </div>
  )
}

export default Comment