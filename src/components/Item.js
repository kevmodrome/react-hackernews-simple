import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ id, title, points, user, time_ago, comments_count, url }) => {
  return (
    <article style={{ padding: '5px 10px', margin: '15px', background: 'rgb(248, 248 ,248)', borderRadius: '10px' }}>
      <h2><a href={url}>{title}</a></h2>
      <p>{points} points by {user} {time_ago} <Link to={`/item/${id}`}>{comments_count} comments</Link></p>
    </article>
  )
}

export default Item