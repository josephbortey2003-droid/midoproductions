// Single source for business details and content shared across pages.
// Contact details match midoproductions.com as of October 2026.

export const contact = {
  salesPhone: '020 401 0267',
  salesTel: '+233204010267',
  techPhone: '050 265 1282',
  techTel: '+233502651282',
  whatsapp: '233204010267',
  email: 'info@midoproductions.com',
  address: 'Mido Productions Complex, Oyibi-Gbortsui Down, near the Catholic Church, Greater Accra',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mido+Productions+Oyibi+Ghana',
};

export const social = {
  youtube: 'https://www.youtube.com/@midoproductions',
  facebook: 'https://www.facebook.com/MidoProductionsLtd/',
  instagram: 'https://www.instagram.com/midoproductions/',
  tiktok: 'https://www.tiktok.com/@midoproductionsltd',
  linkedin: 'https://gh.linkedin.com/company/mido-productions',
};

export const whatsappLink = (text = 'Hello MIDO Productions, I would like to enquire about your services.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/work' },
  { label: 'Training', path: '/training' },
  { label: 'CEO', path: '/ceo' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    id: 'events',
    title: 'Event Production',
    summary: 'Sound, lighting, staging and production support for conferences, worship services, concerts and corporate events.',
    detail: 'We plan and run the full technical side of your event, from the PA system and microphones to lighting, trussing and the crew on the day. Our team handles setup through to breakdown so you can focus on your programme.',
    image: 'photos/event-foh-led-stage',
  },
  {
    id: 'streaming',
    title: 'Live Streaming',
    summary: 'Multi-camera streams that take your service, conference or concert to audiences anywhere.',
    detail: 'Camera operators, vision mixing and a clean broadcast mix, so viewers at home hear and see what the room experiences. Ideal for churches, launches and forums.',
    image: 'photos/livestream-switching',
  },
  {
    id: 'studio',
    title: 'Recording & Studio',
    summary: 'Music recording, vocal sessions and rehearsals at our studio in Oyibi.',
    detail: 'A professional studio for choirs, artists and voice work, with editing, mixing and mastering to prepare recordings for release or broadcast.',
    image: 'photos/studio-console',
  },
  {
    id: 'video',
    title: 'Video Production',
    summary: 'Event coverage, documentaries and content for businesses, artists and organisations.',
    detail: 'From single-camera interviews to full multi-camera event coverage, we film, edit and deliver content ready for screens and social media.',
    image: 'photos/camera-operator',
  },
  {
    id: 'av-install',
    title: 'Audiovisual Installation',
    summary: 'Design and installation of sound, video and AV systems for churches, offices and institutions.',
    detail: 'We assess your space, recommend equipment that fits your budget and install it properly, then train your team to run it.',
    image: 'photos/console-detail',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    summary: 'Helping organisations improve their media systems, studios and production workflows.',
    detail: 'An experienced eye on what you already have: system reviews, upgrade plans and practical advice for your technical team.',
    image: 'photos/technical-consultation',
  },
];

export const audiences = [
  { title: 'Churches', text: 'Worship services, choir concerts, conventions and sanctuary sound systems.' },
  { title: 'Corporate organisations', text: 'Launches, forums, award nights and AGMs with clear speech and reliable streaming.' },
  { title: 'Educational institutions', text: 'Graduations, festivals and auditorium installations, plus training for student crews.' },
  { title: 'Individuals & groups', text: 'Weddings, concerts, album recordings and private events.' },
];

export const clients = [
  { name: 'Harmonious Chorale', logo: 'images/clients/harmonious-chorale.webp' },
  { name: 'The Symphonials', logo: 'images/clients/the-symphonials.webp' },
  { name: 'Presbyterian Church of Ghana', logo: 'images/clients/presbyterian-church-ghana.webp' },
  { name: 'CIMG', logo: 'images/clients/cimg-logo.webp' },
  { name: 'Business & Financial Times', logo: 'images/clients/bft-logo.webp' },
  { name: 'HPC', logo: 'images/clients/hpc-logo.webp' },
];

// Titles as published on the Mido TV YouTube channel. `thumb` overrides the
// default thumbnail where the uploaded one is a black frame.
export const videos = [
  { id: 'oNqdEurgbrE', title: 'Discover Mido Productions: studio and event services', category: 'About us' },
  { id: 'fh0BZj4EdwE', title: 'Ghana Armed Forces Military Band: "Oman Beye Yie" by Uncle Ato', category: 'Live music' },
  { id: 'qdLP1yi5FOo', title: 'Chamber of Cocoa Ghana launch', category: 'Corporate' },
  { id: 'BXnc5jMzZ7c', title: 'Interview with Lordina the Soprano', category: 'Choral & classical', thumb: 'hq2' },
  { id: 'DoXaA6vApOQ', title: 'Ghana Armed Forces Military Band: "Osiee Yiee" by George Darko', category: 'Live music' },
  { id: 'HR-UrLgu8yw', title: 'B&FT Marine Insurance Forum', category: 'Corporate' },
  { id: 'jh2L8qK3rj8', title: 'GAF Music School students: Highlife and Kpanlogo medley', category: 'Live music' },
  { id: 'VRkkTXe8faI', title: 'Must churches pay musicians? An LMT panel discussion', category: 'Training' },
  { id: '2ATzFQtj3WY', title: 'Sharpening your skills at Live Sound Management Training', category: 'Training' },
  { id: '2fmK-F6feIA', title: 'Gary Al-Smith sports recap', category: 'Corporate', thumb: 'hq2' },
];

export const gallery = [
  { src: 'photos/gaf-band-stage', alt: 'Military band performing on a lit stage' },
  { src: 'photos/choir-performance', alt: 'Choir singing in concert' },
  { src: 'photos/forum-camera-crew', alt: 'Camera crew filming a business forum' },
  { src: 'photos/outdoor-stage-performance', alt: 'Performer on an outdoor stage with a brass band' },
  { src: 'photos/choir-conductor', alt: 'Conductor leading a choir at an evening concert' },
  { src: 'photos/military-band-brass', alt: 'Brass section of a military band' },
  { src: 'photos/cultural-dance-stage', alt: 'Cultural dance troupe on stage' },
  { src: 'photos/church-choir-service', alt: 'Church choir with the band during a service' },
  { src: 'photos/control-room-monitors', alt: 'Monitors in the MIDO control room' },
  { src: 'photos/forum-panel-mic', alt: 'Panelist being handed a microphone at a forum' },
  { src: 'photos/mido-drum-kit', alt: 'MIDO-branded drum kit on stage' },
  { src: 'photos/students-at-console', alt: 'Students working at a mixing console' },
];
