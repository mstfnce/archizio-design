import s from './Services.module.css'

function ServiceCard({ num, icon, title, sub, desc, featured }) {
  return (
    <div className={`${s.card} ${featured ? s.featured : ''}`}>
      <div className={s.num}>{num}</div>
      <div className={s.icon}>{icon}</div>
      <div className={s.cardTitle}>{title}</div>
      <div className={s.sub}>{sub}</div>
      <hr />
      <div className={s.desc}>{desc}</div>
    </div>
  )
}

export default ServiceCard
