import { Link } from 'react-router-dom';
import { contact, nav, services, social } from '../data/site';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TikTokIcon, YoutubeIcon } from './SocialIcons';

const socialLinks = [
  { label: 'YouTube', href: social.youtube, Icon: YoutubeIcon },
  { label: 'Facebook', href: social.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: social.instagram, Icon: InstagramIcon },
  { label: 'TikTok', href: social.tiktok, Icon: TikTokIcon },
  { label: 'LinkedIn', href: social.linkedin, Icon: LinkedinIcon },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="inline-block rounded-md bg-white p-3">
            <img src="mido-logo.png" alt="MIDO Productions" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Event production, media services and practical training for churches, businesses and institutions across Ghana.
          </p>
          <ul className="mt-6 flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
            <li><Link to="/training" className="hover:text-white">Music Solutions School</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Visit or call</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
            <p>{contact.address}</p>
            <p>
              Sales: <a href={`tel:${contact.salesTel}`} className="text-white hover:underline">{contact.salesPhone}</a>
              <br />
              Technical: <a href={`tel:${contact.techTel}`} className="text-white hover:underline">{contact.techPhone}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="text-white hover:underline">{contact.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {year} Mido Productions Ltd. All rights reserved.</p>
          <p>Sound &middot; Audio &middot; Video</p>
        </div>
      </div>
    </footer>
  );
}
