import s from './QuoteStrip.module.css'

function QuoteStrip({ t }) {
  return (
    <div className={s.quote}>
      <p>{t.text}</p>
      <span>{t.credit}</span>
    </div>
  )
}

export default QuoteStrip
