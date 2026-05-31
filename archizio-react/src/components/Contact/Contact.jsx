import { useState } from 'react'
import s from './Contact.module.css'

function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={s.contact}>
      <p className={s.tag}>{t.tag}</p>
      <h2 className={s.title}>{t.title}</h2>
      <div className={s.line} />

      <div className={s.info}>
        <a href="mailto:info@archizodesign.com">info@archizodesign.com</a>
        <br />
        <a href="tel:+902163445858">(0216) 344 58 58</a>
        <br />
        <a href="https://www.archizodesign.com" target="_blank" rel="noreferrer">
          www.archizodesign.com
        </a>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t.namePlaceholder}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder={t.emailPlaceholder}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder={t.messagePlaceholder}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit" className={s.submitBtn}>{t.submit}</button>
      </form>

      {sent && <p className={s.success}>{t.success}</p>}
    </section>
  )
}

export default Contact
