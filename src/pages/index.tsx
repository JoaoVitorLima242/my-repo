import type { NextPage } from 'next'
// Components
import About from '../components/views/About'
import Skills from '../components/views/Skills'
import Welcome from '../components/views/Welcome'

const Home: NextPage = () => {
  return (
    <>
      <Welcome/>
      <About/>
      <Skills/>
    </>
  )
}

export default Home
