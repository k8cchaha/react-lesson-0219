import { useState } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {
  const [data, setData] = useState([])

  return <div>
    <Edit add={setData} />
    <List listData={data} deleteData={setData} />
  </div>
}

export default Home