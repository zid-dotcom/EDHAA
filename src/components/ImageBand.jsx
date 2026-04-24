export default function ImageBand({ src, alt, caption }) {
  return (
    <section className="section-rule">
      <div className="site-wrap py-16 sm:py-20">
        <div className="space-y-5">
          <img
            src={src}
            alt={alt}
            className="min-h-[320px] w-full border border-line object-cover sm:min-h-[460px]"
          />
          {caption ? <p className="max-w-3xl text-sm leading-7 text-muted">{caption}</p> : null}
        </div>
      </div>
    </section>
  )
}
