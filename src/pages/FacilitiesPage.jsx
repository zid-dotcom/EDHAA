import schoolImage from '../assets/SchoolImage.jpg'

const facilities = [
  'Spacious classrooms designed for focused day-to-day learning.',
  'Library resources that encourage reading habits and independent study.',
  'Science learning spaces that support practical understanding and observation.',
  'Play and activity areas for physical development and recreation.',
  'Safe campus arrangements with attention to order, cleanliness, and supervision.',
]

export default function FacilitiesPage() {
  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1fr)] lg:items-center">
            <img
              src={schoolImage}
              alt="EDHAA PUBLIC SCHOOL facility image"
              className="min-h-[360px] w-full border border-line object-cover"
            />

            <div className="space-y-6">
              <p className="eyebrow">Facilities</p>
              <h1 className="section-title">A campus planned for learning and care</h1>
              <p className="section-copy">
                The school campus is designed to support regular instruction, student
                comfort, and a disciplined daily routine. Facilities are maintained with a
                practical focus so that the environment stays clean, functional, and
                suitable for purposeful learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Facility Overview</p>
              <ul className="mt-6 space-y-5">
                {facilities.map((facility) => (
                  <li key={facility} className="border-t border-line pt-5 text-[17px] leading-8 text-muted">
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 border-t border-line pt-6 lg:pt-0">
              <p className="eyebrow">Campus Standard</p>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                Balanced spaces that support routine and wellbeing
              </h2>
              <p className="text-[17px] leading-8 text-muted">
                Good facilities do not need to feel decorative. They should feel
                dependable, well maintained, and aligned with everyday school life. The
                physical environment of a school influences how students learn, move, and
                settle into a routine.
              </p>
              <p className="border-t border-line pt-4 text-sm leading-7 text-muted">
                The campus is maintained to feel orderly, supervised, and suitable for
                purposeful day-to-day learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
