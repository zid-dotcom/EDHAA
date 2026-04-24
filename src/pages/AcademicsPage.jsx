const stages = [
  {
    label: 'Foundational Stage',
    text: 'Reading readiness, number sense, participation, and classroom habits form the early academic base.',
  },
  {
    label: 'Preparatory Stage',
    text: 'Concept clarity, subject exposure, written expression, and regular assessment begin to deepen learning.',
  },
  {
    label: 'Middle Stage',
    text: 'Subject depth, disciplined study, and more independent learning habits prepare students for later expectations.',
  },
]

const features = [
  'Well-planned teaching schedules that provide continuity across subjects and terms.',
  'Continuous assessment through assignments, class participation, tests, and examinations.',
  'Individual attention for students who need reinforcement or added academic guidance.',
  'A balanced approach that values language, mathematics, science, social understanding, and general awareness.',
  'Regular communication with families regarding student progress and classroom expectations.',
]

export default function AcademicsPage() {
  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="eyebrow">Academics</p>
            <h1 className="section-title">A structured academic journey with clear progression</h1>
            <p className="section-copy max-w-3xl">
              The academic program at EDHAA PUBLIC SCHOOL is designed to help students
              learn with understanding, develop consistency in study habits, and build a
              strong base for future classes. The structure is intentionally clear so that
              students, teachers, and families can all follow progress with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-5xl space-y-10">
            <div className="border-t border-line pt-6">
              <p className="eyebrow">Academic Progression</p>
            </div>

            <ol className="space-y-10">
              {stages.map((stage, index) => (
                <li
                  key={stage.label}
                  className="grid gap-4 border-t border-line pt-6 lg:grid-cols-[120px_minmax(0,260px)_minmax(0,1fr)]"
                >
                  <p className="font-serif text-5xl leading-none text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-serif text-3xl text-ink">{stage.label}</h2>
                  <p className="max-w-3xl text-[17px] leading-8 text-muted">{stage.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-rule section-soft">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)]">
            <div>
              <p className="eyebrow">Teaching and Review</p>
              <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
                Classroom learning supported by regular feedback
              </h2>
              <div className="mt-6 space-y-6 text-[17px] leading-8 text-muted">
                <p>
                  In the foundational years, the emphasis is on language development,
                  number concepts, classroom habits, and curiosity. Students are guided to
                  read, listen, speak, and participate with confidence.
                </p>
                <p>
                  In the middle years, the academic focus broadens into deeper subject
                  understanding, stronger written expression, and discipline in study.
                  Students are encouraged to think independently while maintaining clarity
                  in fundamentals.
                </p>
              </div>
            </div>

            <ul className="space-y-4 border-t border-line pt-6 lg:pt-0">
              {features.map((feature) => (
                <li key={feature} className="border-t border-line pt-4 text-sm leading-7 text-muted">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
