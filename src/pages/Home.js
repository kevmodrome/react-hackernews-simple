import React from 'react'

import List from '../components/List'

const Home = () => {
  return (
    <List route="https://node-hnapi.herokuapp.com/news?page=" page="1" />
  )
}

export default Home