import { Link } from 'react-router-dom'
import ImageBand from '../components/ImageBand'
import schoolImage from '../assets/SchoolImage.jpg'
import { schoolInfo } from '../data/siteContent'

const schoolFacts = [
  { label: 'Campus', value: 'Purpose-built learning environment' },
  { label: 'Approach', value: 'Structured academics with values-based education' },
  { label: 'Location', value: 'Begur Hobli, Bangalore' },
]

const highlights = [
  {
    title: 'Academic rigour with care',
    text: 'Teaching is planned, expectations are clear, and students are guided with consistency rather than pressure.',
  },
  {
    title: 'A balanced school culture',
    text: 'Learning, conduct, communication, and co-curricular participation are treated as parts of one complete school experience.',
  },
  {
    title: 'A campus designed for focus',
    text: 'The physical environment supports routine, supervision, and a calm atmosphere that helps students settle into learning.',
  },
]

const approachNotes = [
  'Clear classroom expectations and regular academic follow-up',
  'Partnership with families through communication and guidance',
  'Values-based education that supports respectful school life',
]

const testimonials = [
  {
    quote:
      'The school maintains a calm and serious learning atmosphere. Our child has grown in confidence and responsibility.',
    author: 'Parent of a middle school student',
  },
  {
    quote:
      'Teachers are approachable, and the academic expectations are clear. The school balances guidance with discipline very well.',
    author: 'Parent of a primary student',
  },
]

export default function HomePage() {
  return (
    <>
      <section>
        <div className="site-wrap py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,1.14fr)] lg:items-end">
            <div className="space-y-8">
              <p className="eyebrow">Welcome to {schoolInfo.name}</p>
              <div className="max-w-3xl space-y-6">
                <h1 className="font-serif text-5xl leading-[0.92] tracking-[0.01em] text-ink sm:text-6xl lg:text-[5.2rem]">
                  A school shaped by clarity, character, and confident learning.
                </h1>
                <p className="max-w-2xl text-xl leading-8 text-muted sm:text-2xl">
                  {schoolInfo.tagline}. A professional, values-led school environment with
                  the calm structure families expect from a modern institution.
                </p>
              </div>
              <p className="max-w-3xl text-[17px] leading-8 text-muted">
                EDHAA PUBLIC SCHOOL brings together disciplined academics, careful student
                guidance, and a strong sense of school culture. The experience is designed
                to feel dependable and aspirational at the same time, helping learners
                grow with both academic confidence and personal integrity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/about" className="button-primary">
                  Discover EDHAA
                </Link>
                <Link to="/contact" className="button-secondary">
                  Schedule an Enquiry
                </Link>
              </div>

              <div className="grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
                {schoolFacts.map((fact) => (
                  <div key={fact.label} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {fact.label}
                    </p>
                    <p className="text-sm leading-6 text-ink">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <img
                src={schoolImage}
                alt="Front view of EDHAA PUBLIC SCHOOL campus building"
                className="min-h-[360px] w-full border border-line object-cover object-center lg:min-h-[620px]"
              />
              <div className="grid gap-5 border-t border-line pt-5 sm:grid-cols-[minmax(0,1fr)_220px]">
                <p className="text-sm leading-7 text-muted">
                  Located in a growing educational neighbourhood, the campus has been
                  planned to support discipline, supervision, and a strong daily rhythm of
                  learning.
                </p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    School Office
                  </p>
                  <p className="text-sm leading-6 text-ink">{schoolInfo.phone}</p>
                  <p className="text-sm leading-6 text-ink">{schoolInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Why EDHAA</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Deliberate choices that make the school experience stronger
            </h2>
          </div>

          <div className="mt-12 space-y-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="grid gap-5 border-t border-line pt-6 lg:grid-cols-[260px_minmax(0,1fr)]"
              >
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">{item.title}</h3>
                <p className="max-w-3xl text-[17px] leading-8 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-soft">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)]">
            <div className="space-y-4">
              <p className="eyebrow">Learning Approach</p>
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Structured learning with room for growth, expression, and guidance
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[17px] leading-8 text-muted">
                A strong school design is not only visual. It is reflected in how the day
                is organised, how teaching is delivered, and how students feel supported
                as they move through each stage of learning.
              </p>
              <div className="mt-4 space-y-4">
                {approachNotes.map((item) => (
                  <p key={item} className="stat-line text-sm leading-7 text-muted">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageBand
        src={schoolImage}
        alt="EDHAA PUBLIC SCHOOL campus building"
        caption="A contemporary campus presence that communicates order, aspiration, and a dependable environment for learning."
      />

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(260px,0.5fr)]">
            <div className="max-w-3xl">
              <p className="eyebrow">Community Voice</p>
              <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
                What families appreciate
              </h2>
            </div>
            <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="eyebrow">Why Parents Choose EDHAA</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Families respond to schools that feel steady, communicative, and serious
                about learning. The experience is designed to reflect those expectations.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="border-t border-line pt-5">
                <p className="max-w-4xl font-serif text-2xl leading-10 text-ink sm:text-3xl">
                  "{item.quote}"
                </p>
                <footer className="mt-4 text-sm uppercase tracking-[0.15em] text-muted">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_220px] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Admissions & Enquiries</p>
              <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
                A confident beginning starts with the right school
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-muted">
                Families seeking a disciplined, values-based, and future-focused school
                environment are welcome to connect with the school office and learn more
                about the admission process.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Link to="/contact" className="button-primary">
                Contact the School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
