import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoGrid({ videos }) {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  return (
    <>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <li key={video.id}>
            <button type="button" onClick={() => setActive(video)} className="group block w-full text-left">
              <div className="relative aspect-video overflow-hidden rounded-md bg-ink">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/${video.thumb ?? 'hqdefault'}.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-brand shadow-sm">
                    <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                  </span>
                </span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{video.category}</p>
              <p className="mt-1 font-semibold leading-snug text-ink group-hover:text-brand">{video.title}</p>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        className="w-[min(64rem,calc(100vw-2rem))] rounded-md bg-black p-0 backdrop:bg-ink/80"
      >
        {active && (
          <div>
            <div className="flex items-center justify-between gap-4 bg-ink px-4 py-3">
              <p className="truncate text-sm font-medium text-white">{active.title}</p>
              <button
                type="button"
                onClick={() => dialogRef.current.close()}
                aria-label="Close video"
                className="p-1 text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
