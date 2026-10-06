import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Photo from '../components/Photo';
import VideoGrid from '../components/VideoGrid';
import CtaBand from '../components/CtaBand';
import { audiences, clients, services, videos } from '../data/site';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Photo
          src="photos/event-foh-led-stage"
          alt="MIDO engineer at the front-of-house desk facing a lit stage and LED screen"
          eager
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/80 to-ink/55 md:via-ink/75 md:to-ink/20" />
        <div className="container-site flex min-h-[78vh] flex-col justify-center py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            Sound &middot; Audio &middot; Video &mdash; Accra, Ghana
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] text-white sm:text-6xl">
            Where great events, media and learning come together.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            MIDO Productions delivers professional event production, media services and technical training for churches,
            businesses, institutions and creatives across Ghana.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Request a quote</Link>
            <Link to="/work" className="btn border border-white/40 text-white hover:bg-white/10">See our work</Link>
          </div>
        </div>
      </section>

      {/* Intro + facts */}
      <section className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">About MIDO</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            We don&rsquo;t just capture moments. We create experiences that leave a lasting impression.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            MIDO Productions is a Ghanaian creative and technical production company. For over twenty years we have
            provided sound, videography, live streaming and event coverage, combining creativity, technical expertise and
            attention to detail to help organisations tell their stories well.
          </p>
          <Link to="/about" className="link-arrow mt-6">
            More about us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-md border border-line bg-line lg:col-span-5">
          {[
            ['20+', 'Years of experience'],
            ['300+', 'Clients served'],
            ['3×', 'Chorale Sound Engineer of the Year, 2019–2021'],
            ['Oyibi', 'Our own studio and production complex'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col-reverse bg-white p-6">
              <dt className="mt-1 text-sm text-muted">{label}</dt>
              <dd className="font-serif text-3xl font-semibold text-brand">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">From the studio to the stage</h2>
            </div>
            <Link to="/services" className="link-arrow">
              All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services#${s.id}`}
                  className="group block h-full overflow-hidden rounded-md border border-line bg-white transition-shadow hover:shadow-lg"
                >
                  <Photo
                    src={s.image}
                    alt=""
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[3/2] w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-brand">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Training feature */}
      <section className="container-site grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <Photo
          src="photos/hands-on-training"
          alt="Participants working hands-on with mixing desks at the Live Sound Management seminar"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-md"
        />
        <div>
          <p className="eyebrow">Music Solutions School</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Practical training for the people behind the sound</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Through the Music Solutions School (M.S.S.), we train church sound teams, choir directors and aspiring engineers
            in sound management, music and media production, with hands-on time on real equipment.
          </p>
          <Link to="/training" className="btn-secondary mt-8">Explore training</Link>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-y border-line">
        <div className="container-site py-20 sm:py-24">
          <p className="eyebrow">Who we serve</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Production solutions for every kind of gathering</h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <li key={a.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Videos */}
      <section className="container-site py-20 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Mido TV</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Recent productions</h2>
          </div>
          <Link to="/work" className="link-arrow">
            More of our work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12">
          <VideoGrid videos={videos.slice(0, 3)} />
        </div>
      </section>

      {/* Clients */}
      <section className="bg-mist py-16">
        <div className="container-site">
          <p className="text-center text-sm font-medium text-muted">Trusted by choirs, churches, institutions and brands, including</p>
          <ul className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <li key={c.name} className="flex h-20 items-center justify-center rounded-md bg-white p-4">
                <img src={c.logo} alt={c.name} loading="lazy" className="max-h-12 max-w-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
