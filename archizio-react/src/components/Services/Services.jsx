import s from './Services.module.css'
import ServiceCard from './ServiceCard'

function Services({ t }) {
  return (
    <section id="services" className={s.services}>
      <p className={s.tag}>{t.tag}</p>
      <h2 className={s.title}>{t.title}</h2>
      <div className={s.line} />

      <div className={s.cards}>
        {t.items.map((item) => (
          <ServiceCard key={item.num} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Services
