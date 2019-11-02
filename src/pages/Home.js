import React from 'react'

import List from '../components/List'

const Home = () => {
  const PAGE_SIZE = 20;

  return (
    <List route="https://node-hnapi.herokuapp.com/news?page=" page="1" />
  )
}

export default Home