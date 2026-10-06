import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import EnquiryForm from '../components/EnquiryForm';
import { WhatsAppIcon } from '../components/SocialIcons';
import { contact, whatsappLink } from '../data/site';

const faqs = [
  {
    q: 'Do you work with individuals as well as organisations?',
    a: 'Yes. We work with individuals, businesses, churches, schools, corporate organisations, event organisers and other institutions.',
  },
  {
    q: 'Can MIDO handle the complete technical production for an event?',
    a: 'Yes. Depending on the project, we provide integrated audio, video, lighting, staging, livestreaming, recording and technical support.',
  },
  {
    q: 'Do you provide sound systems for events?',
    a: 'Yes: PA systems, microphones, mixing consoles, monitors and processing, along with setup, operation and technical support.',
  },
  {
    q: 'Can I book the studio for a recording session?',
    a: 'Yes. Studio sessions can be booked based on availability and the type of production required.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's plan your project"
        intro="Tell us what you have in mind and our team will come back to you with recommendations and a quote."
        image="photos/forum-camera-crew"
      />

      <section className="container-site grid gap-14 py-20 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold sm:text-3xl">Send an enquiry</h2>
          <p className="mt-2 text-muted">The more detail you share, the more accurate our quote can be.</p>
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-md border border-line bg-mist p-7">
            <h2 className="text-xl font-semibold">Reach us directly</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Sales</p>
                  <a href={`tel:${contact.salesTel}`} className="text-muted hover:text-brand">{contact.salesPhone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Technical</p>
                  <a href={`tel:${contact.techTel}`} className="text-muted hover:text-brand">{contact.techPhone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-muted hover:text-brand">{contact.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Visit</p>
                  <p className="text-muted">{contact.address}</p>
                  <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-brand hover:underline">
                    Get directions
                  </a>
                </div>
              </li>
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full">
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </aside>
      </section>

      <section className="border-t border-line bg-mist py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold">Common questions</h2>
          </div>
          <div className="divide-y divide-line border-y border-line lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <span className="text-xl text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
