import PageHeader from '../components/PageHeader';
import Photo from '../components/Photo';
import { whatsappLink } from '../data/site';
import { Link } from 'react-router-dom';

const productionCourses = [
  {
    title: 'Live Sound Engineering',
    text: 'From setting up microphones and speakers to mixing audio for live events and performances.',
  },
  {
    title: 'Livestream Production',
    text: 'Plan, set up and run professional livestreams: cameras, audio, switching, platforms and workflow.',
  },
  {
    title: 'Studio Production',
    text: 'Recording and microphone technique, session setup, monitoring, editing and professional audio workflows.',
  },
  {
    title: 'Media Department Development',
    text: 'Build an effective media department: content, audio, video, streaming, equipment and team workflows.',
  },
  {
    title: 'Church Media Training',
    text: 'Practical training for church teams in audio, video, livestreaming and photography for services and events.',
  },
];

const instruments = ['Piano', 'Guitar', 'Drums', 'Violin'];

const reasons = [
  ['Hands-on training', 'Learn by doing, on real equipment, with guided experience.'],
  ['A real studio environment', 'Train where productions actually happen, with industry-standard tools.'],
  ['Professional instructors', 'Working engineers and musicians who give practical, personal guidance.'],
  ['Flexible scheduling', 'Sessions that fit around work, school and church commitments.'],
];

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Music Solutions School"
        title="Empowering the next generation of media and music leaders"
        intro="The Music Solutions School (M.S.S.) is the training arm of MIDO Productions: practical, hands-on training by working professionals, using real production equipment."
        image="photos/live-sound-seminar"
      />

      <section className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Production courses</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Skills you can use on Sunday morning</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Founded by Dominic Ansa-Asare and his wife to share decades of experience as a music director and sound engineer,
            M.S.S. serves individuals, church choirs and chorale groups, whatever their musical background.
          </p>
          <Photo
            src="photos/signal-flow-lesson"
            alt="Instructor teaching signal flow at a mixing desk during a seminar"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-8 aspect-[4/3] w-full rounded-md"
          />
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {productionCourses.map((c) => (
            <li key={c.title} className="py-6">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
          <li className="py-6">
            <h3 className="text-xl font-semibold">Instrument lessons</h3>
            <p className="mt-1.5 leading-relaxed text-muted">
              Technique, theory, sight-reading, accompaniment and performance for {instruments.slice(0, -1).join(', ')} and{' '}
              {instruments.at(-1)}, and more.
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Photo
            src="photos/students-at-console"
            alt="Students learning on a digital mixing console"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-md"
          />
          <div>
            <p className="eyebrow">Why study with us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Learn where the work happens</h2>
            <dl className="mt-8 grid gap-7 sm:grid-cols-2">
              {reasons.map(([title, text]) => (
                <div key={title}>
                  <dt className="font-semibold">{title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-site py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">Ready to enrol, or training a whole team?</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Ask about upcoming classes, the annual Live Sound Management seminar, or tailored training for your church or
          organisation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink('Hello MIDO Productions, I would like to enquire about training at the Music Solutions School.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enquire on WhatsApp
          </a>
          <Link to="/contact" className="btn-secondary">Send an enquiry</Link>
        </div>
      </section>
    </>
  );
}
