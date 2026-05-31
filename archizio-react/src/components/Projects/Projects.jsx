import { useState, useEffect } from 'react'
import s from './Projects.module.css'

function Projects({ t }) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" className={s.projects}>
      <p className={s.tag}>{t.tag}</p>
      <h2 className={s.title}>{t.title}</h2>
      <div className={s.line} />

      <div className={s.grid}>
        {t.items.map((p) => (
          <div
            key={p.id}
            className={`${s.card} ${p.big ? s.big : s.small}`}
            style={{ background: p.gradient }}
            onClick={() => setActive(p)}
          >
            <div className={s.overlay}>
              <div className={s.cat}>{p.cat}</div>
              <div className={s.name}>{p.name}</div>
            </div>
            <div className={s.plus}>+</div>
          </div>
        ))}
      </div>

      {active && (
        <div className={s.backdrop} onClick={() => setActive(null)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeBtn} onClick={() => setActive(null)}>×</button>
            <p className={s.modalCat}>{active.cat}</p>
            <h3 className={s.modalName}>{active.name}</h3>
            <div className={s.modalLine} />
            <p className={s.modalDetail}>{active.detail}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
