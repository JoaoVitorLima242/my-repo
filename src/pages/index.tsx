import type { NextPage } from 'next'
// Components
import About from '../components/views/About'
import Welcome from '../components/views/Welcome'

const Home: NextPage = () => {
  return (
    <>
      <Welcome/>
      <About/>
    </>
  )
}

export default Home
