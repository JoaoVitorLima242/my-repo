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
import Head from 'next/head'


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
    <div>
      <Head>
        <title>Full-Stack Web & Mobile Developer</title>
        <meta 
          name="description" 
          content="Hello, I’m João Vitor and I’m a Full Stack Web & Mobile Developer." 
        />
        <meta 
          property="og:title" 
          content="João Vitor Brietzke de Lima" 
        />
        <meta
          property="og:description"
          content="Hello, I’m João Vitor and I’m a Full Stack Web & Mobile Developer. Come and see my work."
        />
        <meta
          property="og:image"
          content="/img/my_photo.jpeg"
        />
      </Head>
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
    </div>
  )
}

export default Home
