import schoolImage from '../assets/SchoolImage.jpg'

const activities = [
  {
    title: 'Sports and physical education',
    text: 'Students build fitness, teamwork, and discipline through regular physical activity and organised games.',
  },
  {
    title: 'Arts and creative expression',
    text: 'Drawing, music, and cultural participation help students explore imagination, confidence, and presentation.',
  },
  {
    title: 'Clubs and co-curricular participation',
    text: 'Activity-based learning encourages leadership, cooperation, and practical exposure beyond the classroom.',
  },
  {
    title: 'School celebrations and assemblies',
    text: 'Shared school events develop communication skills, awareness, and a sense of belonging within the institution.',
  },
]

export default function ActivitiesPage() {
  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow">Activities</p>
            <h1 className="section-title">Student life beyond the classroom</h1>
            <p className="section-copy">
              EDHAA PUBLIC SCHOOL encourages students to take part in activities that
              support personal growth alongside academics. These experiences build
              confidence, teamwork, communication, and a healthy school routine.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
            <img
              src={schoolImage}
              alt="EDHAA PUBLIC SCHOOL activity environment"
              className="min-h-[360px] w-full border border-line object-cover object-top"
            />

            <div className="border-t border-line pt-6 lg:pt-0">
              <p className="eyebrow">Student Development</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                The co-curricular environment helps students build confidence,
                collaboration, and healthy habits without distracting from the academic
                purpose of the institution.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
            <div className="space-y-8">
              {activities.slice(0, 2).map((activity) => (
                <div key={activity.title} className="border-t border-line pt-6">
                  <h2 className="font-serif text-3xl text-ink">{activity.title}</h2>
                  <p className="mt-3 text-[17px] leading-8 text-muted">{activity.text}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8 pt-6 lg:pt-16">
              {activities.slice(2).map((activity) => (
                <div key={activity.title} className="border-t border-line pt-6">
                  <h2 className="font-serif text-3xl text-ink">{activity.title}</h2>
                  <p className="mt-3 text-[17px] leading-8 text-muted">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
