export default function AboutPage() {
  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="eyebrow">About Us</p>
            <h1 className="section-title">The institutional foundation of EDHAA PUBLIC SCHOOL</h1>
            <div className="section-copy max-w-none space-y-6">
              <p>
                EDHAA PUBLIC SCHOOL was established with a clear educational purpose: to
                provide students with a disciplined, caring, and academically strong
                environment. The school emphasises orderly learning, moral values, and the
                gradual development of confidence, responsibility, and independent thought.
              </p>
              <p>
                The institution is shaped by a belief that academic clarity and character
                formation should develop together. Teaching, conduct, communication, and
                campus culture are therefore treated as connected parts of one school
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <article className="space-y-10">
              <div className="border-t border-line pt-6">
                <p className="eyebrow">Institutional Outlook</p>
                <p className="mt-4 text-[17px] leading-8 text-muted">
                  The school is built around a simple principle: students thrive when
                  academic expectations, adult guidance, and school culture remain aligned.
                  This produces a campus atmosphere that feels calm, purposeful, and clear
                  in its direction.
                </p>
              </div>

              <div className="border-t border-line pt-6">
                <p className="eyebrow">Vision</p>
                <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                  To shape thoughtful learners
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-muted">
                  The vision of the school is to nurture students who are intellectually
                  capable, socially aware, and grounded in values. Education is approached
                  as a long-term responsibility that helps children become capable and
                  ethical members of society.
                </p>
              </div>

              <div className="border-t border-line pt-6">
                <p className="eyebrow">Mission</p>
                <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                  To teach with clarity and care
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-muted">
                  The mission of EDHAA PUBLIC SCHOOL is to provide structured academics,
                  meaningful student engagement, and a school culture built on respect,
                  discipline, and regular communication between the school and families.
                </p>
              </div>
            </article>

            <aside className="space-y-6 border-t border-line pt-6 lg:pt-0">
              <div>
                <p className="eyebrow">Educational Focus</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Strong classroom practice supported by clear routines and academic
                  follow-up.
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="eyebrow">School Culture</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Respect, responsibility, discipline, and partnership with families.
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="eyebrow">Student Growth</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Intellectual, personal, and social development guided with care.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-rule section-soft">
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Management</p>
            <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
              Leadership and institutional responsibility
            </h2>
          </div>

          <div className="mt-12 space-y-8">
            <div className="border-t border-line pt-6">
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Secretary</p>
              <h3 className="mt-3 font-serif text-3xl text-ink">Mahalakshmi N Reddy</h3>
              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-muted">
                Oversees the institution with a focus on maintaining educational
                standards, school values, and the long-term direction of the campus.
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Director</p>
              <h3 className="mt-3 font-serif text-3xl text-ink">Thrilok S</h3>
              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-muted">
                Supports institutional planning, administration, and the delivery of a
                student-centered academic environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
