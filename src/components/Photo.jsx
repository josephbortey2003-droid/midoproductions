// Every photo in public/photos ships as `name.webp` (1800px) and `name-sm.webp` (800px).
export default function Photo({ src, alt, sizes = '100vw', className = '', eager = false }) {
  return (
    <img
      src={`${src}.webp`}
      srcSet={`${src}-sm.webp 800w, ${src}.webp 1800w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
