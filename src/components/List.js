import React from 'react'

import { useFetch } from '../helpers/useFetch'

const List = ({ route, page }) => {
  const [loading, data] = useFetch(`${route}${page}`)

  return loading ? <h3>Loading...</h3> : <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default List