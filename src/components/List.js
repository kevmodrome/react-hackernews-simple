import React from 'react'
import { useFetch } from '../helpers/useFetch'

import Item from './Item'

const List = ({ route, page }) => {
  const [loading, data] = useFetch(`${route}${page}`)


  return (
    <>
      <div>
        {loading ? <h2>Loading...</h2> : data.map((item) => {
          return <Item {...item} />
        })}
      </div>
    </>
  )
}

export default List