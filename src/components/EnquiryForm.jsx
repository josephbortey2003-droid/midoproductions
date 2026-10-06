import { useState } from 'react';
import { contact, services, whatsappLink } from '../data/site';

const serviceOptions = [...services.map((s) => s.title), 'Music Solutions School (training)', 'Something else'];

// No backend: the enquiry is composed into a WhatsApp message or an email
// so it lands directly with the MIDO sales team.
export default function EnquiryForm() {
  const [sentVia, setSentVia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim and cap every value: the enquiry travels in a URL, which has length limits.
    const data = Object.fromEntries(
      [...new FormData(e.currentTarget)].map(([key, value]) => [key, String(value).trim().slice(0, 1200)]),
    );
    const via = e.nativeEvent.submitter?.value === 'email' ? 'email' : 'whatsapp';

    const details = [
      `Name: ${data.name}`,
      data.organisation && `Organisation: ${data.organisation}`,
      `Phone: ${data.phone}`,
      data.email && `Email: ${data.email}`,
      `Service: ${data.service}`,
      data.date && `Event date: ${data.date}`,
      data.venue && `Venue / location: ${data.venue}`,
    ].filter(Boolean);
    const body = `${details.join('\n')}\n\n${data.message}`;

    if (via === 'email') {
      const subject = `Enquiry: ${data.service}${data.organisation ? ` (${data.organisation})` : ''}`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(whatsappLink(`Hello MIDO Productions,\n\n${body}`), '_blank', 'noopener');
    }
    setSentVia(via);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Your name" name="name" required maxLength={80} autoComplete="name" />
      <Field label="Organisation or church" name="organisation" optional maxLength={120} autoComplete="organization" />
      <Field label="Phone" name="phone" type="tel" required maxLength={20} pattern="[0-9+ ]{7,20}" title="Digits, spaces and + only, e.g. 024 123 4567" autoComplete="tel" />
      <Field label="Email" name="email" type="email" optional maxLength={120} autoComplete="email" />

      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-medium text-ink">What do you need?</span>
        <select name="service" required defaultValue="" className="field">
          <option value="" disabled>Choose a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <Field label="Event date" name="date" type="date" optional />
      <Field label="Venue or location" name="venue" optional maxLength={120} />

      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-medium text-ink">Tell us about the project</span>
        <textarea
          name="message"
          required
          maxLength={1200}
          rows={5}
          placeholder="Expected audience size, programme, what equipment you already have..."
          className="field resize-y"
        />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" value="whatsapp" className="btn-primary">Send via WhatsApp</button>
        <button type="submit" value="email" className="btn-secondary">Send by email</button>
      </div>

      {sentVia && (
        <p role="status" className="rounded-md bg-brand-light px-4 py-3 text-sm text-brand-dark sm:col-span-2">
          {sentVia === 'email'
            ? 'Your email app should now be open with the enquiry filled in. Press send there to reach us.'
            : 'WhatsApp should now be open with your enquiry filled in. Press send there to reach us.'}{' '}
          If nothing opened, call us on {contact.salesPhone}.
        </p>
      )}
    </form>
  );
}

function Field({ label, optional, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </span>
      <input type="text" {...props} className="field" />
    </label>
  );
}
