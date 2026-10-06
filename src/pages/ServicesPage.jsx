import PageHeader from '../components/PageHeader';
import Photo from '../components/Photo';
import CtaBand from '../components/CtaBand';
import { services } from '../data/site';

const process = [
  {
    title: 'Understand your needs',
    text: 'We listen to your ideas, goals and technical requirements, and visit the venue where needed.',
  },
  {
    title: 'Plan and prepare',
    text: 'We choose the right approach, equipment and crew, and coordinate every technical detail ahead of the day.',
  },
  {
    title: 'Deliver with precision',
    text: 'Experienced technicians carry out the plan with careful attention to detail, from setup to breakdown.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sound, vision and production"
        intro="From music recording and studio work to live streaming, events and AV installations, we bring the expertise and technology to make your project work."
        image="photos/console-detail"
      />

      <section className="container-site py-12 sm:py-16">
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="grid scroll-mt-24 items-center gap-8 border-b border-line py-12 last:border-0 md:grid-cols-2 md:gap-14"
          >
            <Photo
              src={s.image}
              alt=""
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`aspect-[3/2] w-full rounded-md ${i % 2 ? 'md:order-2' : ''}`}
            />
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 text-3xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">{s.summary}</p>
              <p className="mt-3 leading-relaxed text-muted">{s.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">How we bring your project to life</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.title}>
                <span className="font-serif text-4xl font-semibold text-brand/30">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Not sure what you need?" text="Describe your event or space and our technical team will recommend a setup that fits your budget." />
    </>
  );
}
