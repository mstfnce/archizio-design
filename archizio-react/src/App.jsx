import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  const [lang, setLang] = useState('tr')

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero />

      {/* Sıradaki bölümler adım adım eklenecek: QuoteStrip,
          Services, Projects, Contact, InstagramFeed, Footer */}
    </>
  )
}

export default App
