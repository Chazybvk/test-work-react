import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import LoremIpsumSection from './LoremIpsumSection.jsx'
import Realization from './Realization.jsx'
import Footer from './Footer.jsx'
import RequestForm from './RequestForm.jsx'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <StrictMode>
      <>
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <Banner
          mediaSrc="./stock-video.mp4"
          isVideo={true}
          onOpenForm={() => setIsFormOpen(true)}
        />
        <LoremIpsumSection onOpenForm={() => setIsFormOpen(true)} />
        <Banner
          mediaSrc="./picture01.webp"
          isVideo={false}
          altText="Описание изображения"
          onOpenForm={() => setIsFormOpen(true)}
        />
        <Realization onOpenForm={() => setIsFormOpen(true)} />
        <Footer onOpenForm={() => setIsFormOpen(true)} />

        {/* Форма "Связаться с нами" */}
        {isFormOpen && <RequestForm onClose={() => setIsFormOpen(false)} />}
      </>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
