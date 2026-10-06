import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Photo from '../components/Photo';
import VideoGrid from '../components/VideoGrid';
import CtaBand from '../components/CtaBand';
import { YoutubeIcon } from '../components/SocialIcons';
import { gallery, social, videos } from '../data/site';

const categories = ['All', ...new Set(videos.map((v) => v.category))];

export default function WorkPage() {
  const [category, setCategory] = useState('All');
  const shown = category === 'All' ? videos : videos.filter((v) => v.category === category);

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Concerts, services, forums and festivals"
        intro="A selection of productions we have engineered, filmed and streamed for choirs, churches, bands and organisations."
        image="photos/gaf-band-stage"
      />

      <section className="container-site py-20 sm:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Mido TV</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Watch our productions</h2>
          </div>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <YoutubeIcon className="h-4 w-4 text-[#FF0000]" /> Subscribe on YouTube
          </a>
        </div>

        <div role="group" aria-label="Filter videos" className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c ? 'border-brand bg-brand text-white' : 'border-line text-ink hover:border-brand hover:text-brand'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <VideoGrid videos={shown} />
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">On site with MIDO</h2>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <li key={g.src} className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}>
                <Photo
                  src={g.src}
                  alt={g.alt}
                  sizes={i % 5 === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                  className="aspect-[4/3] h-full w-full rounded-md"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
