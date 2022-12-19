import type { NextPage } from 'next'
import { useState } from 'react'

// Components
import About from '../components/views/About'
import Portifolio from '../components/views/Portifolio'
import Skills from '../components/views/Skills'
import Tech from '../components/views/Tech'
import Welcome from '../components/views/Welcome'
import Contact from '../components/views/Contact'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  const [modal, setModal] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const onCloseModalHandler = () => {
    setModal(false)
  }

  const onSelectModalImage = (image: string) => {
    setModalImage(image)
    setModal(true)
  }
  
  return (
    <>
      <Modal 
        isOpen={modal}
        onClose={onCloseModalHandler}
        image={modalImage}
      />
      <Welcome/>
      <About/>
      <Skills/>
      <Tech/>
      <Portifolio
        onSelectPortifolio={onSelectModalImage}
      />
      <Contact/>
    </>
  )
}

export default Home
