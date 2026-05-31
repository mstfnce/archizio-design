import s from './Hero.module.css'

function Hero({ t }) {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.bg} />
      <div className={s.lines} />

      <div className={s.box}>
        <p className={s.kickerTop}>{t.studio}</p>
        <h1>
          {t.heading1}
          <br />
          {t.heading2}
        </h1>
        <hr />
        <p className={s.kicker}>{t.kicker}</p>
        <a href="#projects" className={s.btn}>{t.cta}</a>
      </div>
    </section>
  )
}

export default Hero
