import { useEffect, useMemo, useState } from 'react'
import { apiRequest } from '../lib/api'

const fallbackNews = [
  {
    _id: 'fallback-1',
    title: 'Reading initiative strengthens student engagement across classes',
    description:
      'The school has expanded its reading initiative to encourage daily reading habits, stronger comprehension, and broader exposure to language and ideas.',
    createdAt: '2026-04-12T00:00:00.000Z',
    image: '',
  },
  {
    _id: 'fallback-2',
    title: 'Parent interaction meeting completed successfully',
    description:
      'The school conducted a productive parent interaction meeting to review classroom progress and strengthen school-family communication.',
    createdAt: '2026-04-08T00:00:00.000Z',
    image: '',
  },
  {
    _id: 'fallback-3',
    title: 'Library reading week introduced for middle school classes',
    description:
      'Middle school learners are taking part in a focused reading week that encourages stronger comprehension and independent reading habits.',
    createdAt: '2026-04-02T00:00:00.000Z',
    image: '',
  },
]

const events = [
  { name: 'New academic term orientation', when: 'May 06, 9:00 AM' },
  { name: 'Science activity showcase', when: 'May 18, 11:00 AM' },
  { name: 'Annual sports preparation meeting', when: 'May 24, 10:30 AM' },
]

function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(dateString))
}

export default function NewsPage() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await apiRequest('/api/news')
        setNews(data)
      } catch {
        setNews([])
      }
    }

    loadNews()
  }, [])

  const displayNews = useMemo(() => (news.length > 0 ? news : fallbackNews), [news])
  const [featuredNews, ...latestNews] = displayNews

  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="eyebrow">News & Events</p>
            <h1 className="section-title">Current updates from the school community</h1>
            <p className="section-copy">
              Important announcements, school activities, and upcoming programs are shared
              here in a clear and accessible format for students, parents, and visitors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <article className="border-t border-line pt-6">
                <p className="eyebrow">Featured News</p>
                <h2 className="mt-4 font-serif text-4xl text-ink">{featuredNews.title}</h2>
                <p className="mt-5 max-w-3xl text-[17px] leading-8 text-muted">
                  {featuredNews.description}
                </p>
                {featuredNews.image ? (
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="mt-6 min-h-[300px] w-full border border-line object-cover"
                  />
                ) : null}
              </article>

              <div className="mt-12">
                <p className="eyebrow">Latest Updates</p>
                <div className="mt-6">
                  {latestNews.map((item) => (
                    <div
                      key={item._id}
                      className="grid gap-3 border-t border-line py-5 sm:grid-cols-[120px_minmax(0,1fr)]"
                    >
                      <p className="text-sm uppercase tracking-[0.14em] text-muted">
                        {formatDate(item.createdAt)}
                      </p>
                      <div>
                        <p className="text-[17px] leading-8 text-ink">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="border-t border-line pt-6">
              <p className="eyebrow">Upcoming Events</p>
              <div className="mt-6 space-y-4">
                {events.map((event) => (
                  <div key={event.name} className="border-t border-line pt-4">
                    <p className="font-serif text-2xl text-ink">{event.name}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">
                      {event.when}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
