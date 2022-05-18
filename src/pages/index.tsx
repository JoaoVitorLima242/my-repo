import type { NextPage } from 'next'
// Components
import Header from '../components/Header'
import Welcome from '../components/views/Welcome'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Welcome/>
    </>
  )
}

export default Home
