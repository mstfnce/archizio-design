import { useState } from 'react'
import { translations } from './i18n/translations'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import QuoteStrip from './components/QuoteStrip/QuoteStrip'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import InstagramFeed from './components/InstagramFeed/InstagramFeed'
import Footer from './components/Footer/Footer'

function App() {
  const [lang, setLang] = useState('tr')
  const t = translations[lang]

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <Hero t={t.hero} />
      <QuoteStrip t={t.quote} />
      <Services t={t.services} />
      <Projects t={t.projects} />
      <Contact t={t.contact} />
      <InstagramFeed t={t.instagram} />
      <Footer t={t.footer} />
    </>
  )
}

export default App
