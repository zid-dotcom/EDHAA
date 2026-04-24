export default function SectionIntro({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`max-w-4xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="section-title">{title}</h1>
      <div className="section-copy">{children}</div>
    </div>
  )
}
