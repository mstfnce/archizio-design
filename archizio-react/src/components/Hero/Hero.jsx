import s from './Hero.module.css'

function Hero() {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.bg} />
      <div className={s.lines} />

      <div className={s.box}>
        <p className={s.kickerTop}>ARCHIZO DESIGN STUDIO</p>
        <h1>
          Timeless design,
          <br />
          refined living.
        </h1>
        <hr />
        <p className={s.kicker}>MİMARİ · İÇ MİMARİ · PEYZAJ</p>
        <a href="#projects" className={s.btn}>
          PROJELERİ GÖR →
        </a>
      </div>
    </section>
  )
}

export default Hero
