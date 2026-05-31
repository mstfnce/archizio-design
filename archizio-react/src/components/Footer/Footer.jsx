import s from './Footer.module.css'

function Footer({ t }) {
  return (
    <footer className={s.footer}>
      <div className={s.logo}>
        <span className={s.arc}>ARC</span>
        <span className={s.divider} />
        <span className={s.izo}>HIZO</span>
      </div>
      <p className={s.copy}>{t.copy}</p>
    </footer>
  )
}

export default Footer
