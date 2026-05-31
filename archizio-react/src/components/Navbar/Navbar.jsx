import s from './Navbar.module.css'

function Navbar({ lang = 'tr', setLang }) {
  return (
    <nav className={s.nav}>
      <a href="#top" className={s.logo}>
        <span className={s.arc}>ARC</span>
        <span className={s.divider} />
        <span className={s.izo}>HIZO</span>
        <span className={s.sub}>DESIGN STUDIO</span>
      </a>

      <div className={s.links}>
        <a href="#hero">HAKKIMIZDA</a>
        <a href="#services">HİZMETLER</a>
        <a href="#projects">PROJELER</a>
        <a href="#contact">İLETİŞİM</a>
      </div>

      <div className={s.lang}>
        <button
          className={lang === 'tr' ? s.active : ''}
          onClick={() => setLang?.('tr')}
        >
          TR
        </button>
        <span className={s.sep}>|</span>
        <button
          className={lang === 'en' ? s.active : ''}
          onClick={() => setLang?.('en')}
        >
          EN
        </button>
      </div>
    </nav>
  )
}

export default Navbar
