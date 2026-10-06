import Photo from './Photo';

// Interior page banner: title and intro over a darkened photo.
export default function PageHeader({ eyebrow, title, intro, image, imageAlt = '' }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {image && (
        <Photo src={image} alt={imageAlt} eager className="absolute inset-0 -z-10 h-full w-full opacity-35" />
      )}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/40" />
      <div className="container-site py-20 sm:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}
