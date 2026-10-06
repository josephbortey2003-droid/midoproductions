import { Link } from 'react-router-dom';
import Photo from '../components/Photo';
import CtaBand from '../components/CtaBand';

export default function CeoPage() {
  return (
    <>
      <section className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Photo
            src="photos/dominic-ansa-asare"
            alt="Dominic Ansa-Asare, CEO of MIDO Productions"
            eager
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full rounded-md object-top"
          />
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <p className="eyebrow">Chief Executive Officer</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Dominic Ansa-Asare</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink">
            An astute musician, music director and sound engineer who has worked on sound, audio and video projects for
            corporate organisations, churches, choirs and individual musicians across Ghana and beyond.
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Dominic&rsquo;s music career began at an early age. Although academically trained as an agricultural economist,
              his passion for music kept growing, and led him to further studies in music and sound at Berklee College of
              Music in the United States.
            </p>
            <p>
              Since 2001 he has been at the helm of MIDO Productions. For over a decade he has served as sound engineer for
              the Harmonious Chorale, and his work earned him the Chorale Sound Engineer of the Year award three years
              running, in 2019, 2020 and 2021.
            </p>
            <p>
              Drawing on that experience, Dominic and his wife founded the{' '}
              <Link to="/training" className="font-semibold text-brand hover:underline">Music Solutions School</Link> to pass
              on their knowledge. Led by Dominic and his team, M.S.S. trains individuals, church choirs and chorale groups in
              every key area of music and sound.
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
            {[
              ['25+ years', 'in music, sound and production'],
              ['3× winner', 'Chorale Sound Engineer of the Year'],
              ['Berklee', 'further studies in music and sound'],
            ].map(([value, label]) => (
              <div key={value} className="flex flex-col-reverse bg-white p-5">
                <dt className="mt-1 text-sm text-muted">{label}</dt>
                <dd className="font-serif text-xl font-semibold text-brand">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-site grid gap-4 sm:grid-cols-2">
          <Photo
            src="photos/dominic-at-console"
            alt="Dominic Ansa-Asare mixing at a live event"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2] w-full rounded-md"
          />
          <Photo
            src="photos/dominic-portrait"
            alt="Dominic Ansa-Asare at the MIDO training centre"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2] w-full rounded-md object-top"
          />
        </div>
      </section>

      <CtaBand title="Work with Dominic and the team" />
    </>
  );
}
