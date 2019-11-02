import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from '../helpers/useFetch'

import Comment from '../components/Comment'

const SingleItem = () => {
  let { id } = useParams()
  const [loading, data] = useFetch(`http://node-hnapi.herokuapp.com/item/${id}`)



  return (
    <div>
      {loading ? <h1>Loading comments...</h1> :
        <>
          <h1>{data.title}</h1>
          <p>submitted by {data.user} {data.time_ago}</p>
          <Comment comment={data} />
        </>}
    </div>
  )
}

export default SingleItem