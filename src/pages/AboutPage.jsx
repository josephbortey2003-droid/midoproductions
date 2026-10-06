import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Photo from '../components/Photo';
import CtaBand from '../components/CtaBand';

const values = ['Excellence', 'Integrity', 'Innovation', 'Service', 'Continuous learning'];

const reasons = [
  {
    title: 'Proven experience',
    text: 'Years of hands-on work across live events, recording, broadcasting and audiovisual production.',
  },
  {
    title: 'The right equipment',
    text: 'Audio, video, lighting, recording and streaming tools chosen for each production, not one-size-fits-all.',
  },
  {
    title: 'The right people',
    text: 'Skilled technicians, producers and creatives who work together on every project.',
  },
  {
    title: 'Built on reliability',
    text: 'Careful preparation, attention to detail and dependable execution from setup to the last guest leaving.',
  },
];

const team = [
  { name: 'Dominic Ansa-Asare', role: 'Chief Executive Officer' },
  { name: 'Wilhelmina Ansa-Asare', role: 'Assistant Director' },
  { name: 'Chris Asempa', role: 'Head of Administration' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About MIDO"
        title="A Ghanaian production company built on sound"
        intro="MIDO Productions provides event production, media creation, training and consulting, from our production complex in Oyibi to venues across the country."
        image="photos/seminar-stage-session"
      />

      <section className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-3">
        <div>
          <p className="eyebrow">Who we are</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            A creative media and technical production company providing event production, media creation, training and
            consulting services.
          </p>
        </div>
        <div>
          <p className="eyebrow">Our vision</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            To become a leading provider of event production, media solutions and practical skills development across Africa.
          </p>
        </div>
        <div>
          <p className="eyebrow">Our mission</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            To deliver excellent media, event and training solutions that empower organisations and individuals.
          </p>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why clients choose us</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">From the studio to the stage and beyond</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We bring audio, video, recording, studio services and live production together under one roof, backed by an
              experienced technical team and a modern production facility.
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <dt className="font-semibold text-ink">{r.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Photo
            src="photos/control-room-monitors"
            alt="Monitors and studio speakers in the MIDO control room"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] w-full rounded-md"
          />
        </div>
      </section>

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">Our values</p>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {values.map((v) => (
            <li key={v} className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{v}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Our team</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The people behind the production</h2>
              <p className="mt-5 leading-relaxed text-muted">
                A family-led company with a crew of engineers, camera operators and producers who care about getting the
                details right.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {team.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-semibold text-ink">{m.name}</span>
                    <span className="text-right text-sm text-muted">{m.role}</span>
                  </li>
                ))}
              </ul>
              <Link to="/ceo" className="link-arrow mt-6">
                Meet our CEO <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <Photo
                src="photos/mido-team"
                alt="The MIDO Productions team on stage"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="aspect-[3/2] w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
