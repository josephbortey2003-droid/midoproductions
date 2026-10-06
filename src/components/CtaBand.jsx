import { Link } from 'react-router-dom';
import { whatsappLink } from '../data/site';

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us about your event, recording or installation and we will get back to you with a plan and a quote.',
}) {
  return (
    <section className="bg-brand">
      <div className="container-site flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/80">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link to="/contact" className="btn-light">Request a quote</Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/40 text-white hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
