import s from './InstagramFeed.module.css'

const placeholders = [
  { id: 1, bg: 'linear-gradient(135deg, #c8bfb0, #a8a090)' },
  { id: 2, bg: 'linear-gradient(135deg, #b8afa0, #988f82)' },
  { id: 3, bg: 'linear-gradient(135deg, #d4c9b5, #b0a898)' },
  { id: 4, bg: 'linear-gradient(135deg, #a8a090, #908880)' },
]

function InstagramFeed({ t }) {
  return (
    <section className={s.feed}>
      <p className={s.tag}>{t.tag}</p>
      <h2 className={s.title}>{t.title}</h2>
      <div className={s.line} />

      <div className={s.grid}>
        {placeholders.map((p) => (
          <div key={p.id} className={s.post}>
            <div className={s.inner} style={{ background: p.bg }} />
          </div>
        ))}
      </div>

      <p className={s.handle}>
        <a href="https://www.instagram.com/archizo.design" target="_blank" rel="noreferrer">
          @archizo.design
        </a>
      </p>
    </section>
  )
}

export default InstagramFeed
