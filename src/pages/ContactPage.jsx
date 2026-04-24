import { useState } from 'react'
import { schoolInfo } from '../data/siteContent'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section>
        <div className="site-wrap py-16 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">Get in touch with EDHAA PUBLIC SCHOOL</h1>
            <p className="section-copy">
              Families and visitors can contact the school for admissions, general
              enquiries, or school-related information. We welcome direct communication in
              a clear and timely manner.
            </p>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="site-wrap py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="border-t border-line pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">Address</p>
                <p className="mt-3 text-[17px] leading-8 text-muted">
                  {schoolInfo.name}
                  <br />
                  {schoolInfo.addressLine1}
                  <br />
                  {schoolInfo.addressLine2}
                </p>
              </div>
              <div className="border-t border-line pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">Phone</p>
                <p className="mt-3 text-[17px] leading-8 text-muted">{schoolInfo.phone}</p>
              </div>
              <div className="border-t border-line pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">Email</p>
                <p className="mt-3 text-[17px] leading-8 text-muted">{schoolInfo.email}</p>
              </div>
              <div className="border-t border-line pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">Office Hours</p>
                <p className="mt-3 text-[17px] leading-8 text-muted">
                  Monday to Saturday
                  <br />
                  9:00 AM to 4:30 PM
                </p>
              </div>
            </div>

            <form className="space-y-5 border-t border-line pt-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-muted">Name</span>
                  <input type="text" className="field" placeholder="Your name" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-muted">Phone</span>
                  <input type="tel" className="field" placeholder="Your phone number" />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm uppercase tracking-[0.14em] text-muted">Email</span>
                <input type="email" className="field" placeholder="Your email address" />
              </label>

              <label className="block space-y-2">
                <span className="text-sm uppercase tracking-[0.14em] text-muted">Message</span>
                <textarea
                  className="field min-h-[180px] resize-y"
                  placeholder="How may we help you?"
                />
              </label>

              <button type="submit" className="button-primary">
                Send Enquiry
              </button>

              {submitted ? (
                <p className="text-sm leading-7 text-muted">
                  Your enquiry has been noted. The school office will get in touch soon.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
