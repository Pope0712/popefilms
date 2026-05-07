import { useMemo, useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'

const SITE_PASSWORD = 'popefilms2026'

const localPath = (path) => {
  return encodeURI(`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`)
}

const mediaPath = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return localPath(path)
}

const navItems = [
  { label: 'Acasă', href: '#home' },
  { label: 'Portofoliu', href: '#work' },
  { label: 'Servicii', href: '#services' },
  { label: 'Proces', href: '#process' },
  { label: 'Despre', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const categories = [
  'Toate',
  'Reels',
  'Interviuri',
  'Prezentări de locație',
  'Foto & Video de produs',
  'Activări cu influenceri',
  'Evenimente',
  'Corporate',
  'HoReCa',
  'Fashion / Beauty',
]

const projects = [
  {
    title: 'Reels pentru branduri',
    category: 'Reels',
    description:
      'Video-uri scurte, cinematice și dinamice, create pentru Instagram, TikTok, campanii paid social și comunicare de brand.',
    format: '9:16 / 16:9',
    deliverables: ['Reels verticale', 'Cutdowns', 'Variante de hook'],
    media: '/images/brand.png',
    videos: [
      {
        title: 'Brand Reel 01',
        src: 'https://vimeo.com/1189989594?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Brand Reel 02',
        src: 'https://vimeo.com/1189989649?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Brand Reel 03',
        src: 'https://vimeo.com/1189989791?share=copy&fl=sv&fe=ci',
      },
    ],
  },
  {
    title: 'Interviuri & testimoniale',
    category: 'Interviuri',
    description:
      'Cadre curate, sunet clar și o estetică profesională pentru fondatori, branduri, testimoniale și povești corporate.',
    format: '16:9 / 9:16',
    deliverables: ['Interviu complet', 'Clipuri scurte', 'Secvențe subtitrate'],
    media: '/images/interviuri.png',
    videos: [
      {
        title: 'Interviu 01',
        src: 'https://vimeo.com/1189989626?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Interviu 02',
        src: 'https://vimeo.com/1189989576?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Interviu 03',
        src: 'https://vimeo.com/1189989810?share=copy&fl=sv&fe=ci',
      },
    ],
  },
  {
    title: 'Foto & video de produs',
    category: 'Foto & Video de produs',
    description:
      'Vizualuri premium pentru produse: cadre de detaliu, close-up-uri, demonstrații, unboxing, lifestyle și edituri comerciale.',
    format: '9:16 / 16:9',
    deliverables: ['Video principal', 'Cadre de detaliu', 'Fotografii extra'],
    media: '/images/coming soon.png',
    videos: [
      {
        title: 'Video produs 01',
        src: '/videos/product-1.mp4',
      },
      {
        title: 'Video produs 02',
        src: '/videos/product-2.mp4',
      },
      {
        title: 'Video produs 03',
        src: '/videos/product-3.mp4',
      },
    ],
  },
  {
    title: 'Prezentări de locație',
    category: 'Prezentări de locație',
    description:
      'Restaurante, hoteluri, clinici, saloane, showroom-uri și spații premium prezentate cinematic, cu atmosferă și ritm.',
    format: '9:16 / 16:9',
    deliverables: ['Video de atmosferă', 'Walkthrough', 'Set foto'],
    media: '/images/locations.png',
    videos: [
      {
        title: 'Prezentare locație 01',
        src: 'https://vimeo.com/1189989613?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Prezentare locație 02',
        src: 'https://vimeo.com/1189994100?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Prezentare locație 03',
        src: '/videos/location-3.mp4',
      },
    ],
  },
  {
    title: 'Activări cu influenceri',
    category: 'Activări cu influenceri',
    description:
      'Conținut de campanie realizat cu influenceri și creatori, adaptat pentru social media, brand awareness și reclame.',
    format: 'Vertical / Social',
    deliverables: ['Video creator', 'Clipuri pentru ads', 'Behind the scenes'],
    media: '/images/influencer.png',
    videos: [
      {
        title: 'Activare influencer 01',
        src: 'https://vimeo.com/1189989702?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Activare influencer 02',
        src: 'https://vimeo.com/1189989669?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Activare influencer 03',
        src: 'https://vimeo.com/1189989779?share=copy&fl=sv&fe=ci',
      },
    ],
  },
  {
    title: 'Recap eveniment',
    category: 'Evenimente',
    description:
      'Povești vizuale dinamice care surprind energia, oamenii, detaliile și momentele importante ale unui eveniment.',
    format: '9:16 / 16:9',
    deliverables: ['Film recap', 'Highlights', 'Fotografii extra'],
    media: '/images/events.png',
    videos: [
      {
        title: 'Recap eveniment 01',
        src: 'https://vimeo.com/1189989819?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Recap eveniment 02',
        src: 'https://vimeo.com/1189989730?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Recap eveniment 03',
        src: 'https://vimeo.com/1189989760?share=copy&fl=sv&fe=ci',
      },
    ],
  },
]

const services = [
  {
    title: 'Reels & video short-form',
    text: 'Video-uri verticale dinamice, optimizate pentru retenție, awareness și conversie. Ideale pentru Instagram, TikTok și campanii paid social.',
    video: '/videos/service-reels.mp4',
    bestFor:
      'Instagram, TikTok, reclame plătite, lansări, awareness de produs și campanii social media.',
    includes: [
      'Direcție creativă',
      'Structură de hook și concept',
      'Filmări verticale',
      'Editare dinamică',
      'Text on screen',
      'Color grading',
      'Sound design',
    ],
    deliverables: [
      '1–3 reels verticale',
      'Export 9:16',
      'Direcție pentru caption / CTA',
      '1 rundă de revizie',
    ],
  },
  {
    title: 'Interviuri & testimoniale',
    text: 'Setup-uri profesionale de interviu, cu imagine curată, sunet clar, subtitrări, ritm și editare premium.',
    video: '/videos/service-interviews.mp4',
    bestFor:
      'Fondatori, branduri, testimoniale, podcasturi, povești corporate și conținut educațional.',
    includes: [
      'Structură de interviu',
      'Setup cameră',
      'Captare audio clară',
      'Setup de lumină',
      'Subtitrări',
      'Editare și ritm',
      'Color grading',
    ],
    deliverables: [
      'Interviu complet editat',
      'Fragmente scurte',
      'Clipuri subtitrate',
      'Versiuni pentru mai multe platforme',
    ],
  },
  {
    title: 'Foto & video de produs',
    text: 'Vizualuri premium pentru produse: cadre de detaliu, macro, demo, unboxing, lifestyle și edituri comerciale.',
    video: '/videos/service-product.mp4',
    bestFor:
      'Beauty, fashion, food, tech, e-commerce, produse lifestyle și campanii comerciale.',
    includes: [
      'Shot list pentru produs',
      'Cadre de detaliu',
      'Close-up / macro',
      'Scene de utilizare',
      'Setup de lumină',
      'Editare',
      'Color & sound polish',
    ],
    deliverables: [
      'Video de produs',
      'Clipuri de detaliu',
      'Fotografii extra',
      'Versiuni verticale și orizontale',
    ],
  },
  {
    title: 'Prezentări de locație',
    text: 'Video-uri cinematice pentru restaurante, hoteluri, clinici, saloane, showroom-uri și spații comerciale.',
    video: '/videos/service-location.mp4',
    bestFor:
      'Restaurante, cafenele, hoteluri, clinici, saloane, showroom-uri, venue-uri și spații premium.',
    includes: [
      'Walkthrough locație',
      'Cadre de atmosferă',
      'Detalii și experiență',
      'Momente cu staff / produs / serviciu',
      'Editare cinematică',
      'Color grading',
      'Sound design',
    ],
    deliverables: [
      'Video principal de prezentare',
      'Cut-uri scurte pentru social media',
      'Versiune verticală 9:16',
      'Set foto opțional',
    ],
  },
  {
    title: 'Activări cu influenceri',
    text: 'Producție de conținut pentru campanii de brand, colaborări cu creatori și storytelling nativ pentru social media.',
    video: '/videos/service-influencer.mp4',
    bestFor:
      'Campanii cu influenceri, creator content, activări de brand și lansări pe social media.',
    includes: [
      'Adaptare brief',
      'Structură pentru creator',
      'Stil nativ social media',
      'Filmări cu influencerul',
      'Editare brand-safe',
      'Multiple versiuni',
      'Livrare rapidă',
    ],
    deliverables: [
      'Video de campanie cu creator',
      'Clipuri pregătite pentru ads',
      'Versiuni story / feed',
      'BTS opțional',
    ],
  },
  {
    title: 'Ședințe foto / video',
    text: 'Ședințe creative pentru branduri personale, business-uri, campanii lifestyle, portrete și materiale promoționale.',
    video: '/videos/service-sessions.mp4',
    bestFor:
      'Branduri personale, antreprenori, campanii, portrete, lifestyle content și promovare online.',
    includes: [
      'Direcție creativă',
      'Shot list',
      'Foto și video capture',
      'Lumină și compoziție',
      'Editare',
      'Color grading',
      'Export final',
    ],
    deliverables: [
      'Set foto editat',
      'Clipuri video scurte',
      'Versiuni social media',
      'Reels opțional',
    ],
  },
  {
    title: 'Campanii custom',
    text: 'Producții mixte, abonamente lunare, pachete de reels, recap-uri de eveniment, lansări de brand și campanii complete.',
    video: '/videos/service-custom.mp4',
    bestFor:
      'Branduri care au nevoie de un pachet personalizat de conținut, producție lunară sau campanii cu livrabile multiple.',
    includes: [
      'Direcție creativă personalizată',
      'Planificare producție',
      'Foto / video capture',
      'Formate multiple de conținut',
      'Editare și post-producție',
      'Exporturi pregătite pentru platforme',
      'Runde de revizie',
    ],
    deliverables: [
      'Pachet video custom',
      'Reels în volum',
      'Asset-uri de campanie',
      'Opțiuni lunare de conținut',
    ],
  },
]

const process = [
  'Stabilim tipul de conținut, publicul țintă și rezultatul pe care vrei să îl obții.',
  'Construim conceptul, direcția vizuală, formatul, locația, programul și detaliile de producție.',
  'Ne ocupăm de filmare, compoziție, lumină, setup tehnic și toate elementele de producție.',
  'Primești o primă variantă editată, construită pe direcția agreată și adaptată platformelor finale.',
  'După feedback, rafinăm materialul și livrăm versiunea finală pregătită pentru postare, publicare sau campanie.',
]

const processTitles = [
  'Brief & obiectiv',
  'Direcție creativă',
  'Producție',
  'Editare & prima variantă',
  'Revizii & livrare finală',
]

const deliverables = [
  'Vertical 9:16',
  'Orizontal 16:9',
  'Versiuni multi-platformă',
  'Subtitrări',
  'Text on screen',
  'Color grading',
  'Sound design',
  'Voice-over',
  'Fotografii extra',
  'Materiale brute la cerere',
  'Livrare urgentă la cerere',
  'Abonament lunar disponibil',
]

function App() {
  const [isUnlocked, setIsUnlocked] = useState(
    () => localStorage.getItem('popefilms_unlocked') === 'true',
  )

  const [activeCategory, setActiveCategory] = useState('Toate')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [isHeroPlaying, setIsHeroPlaying] = useState(false)

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'Toate'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  )

  if (!isUnlocked) {
    return (
      <PasswordGate
        onUnlock={() => {
          localStorage.setItem('popefilms_unlocked', 'true')
          setIsUnlocked(true)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4b6fff]/30 selection:text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#home"
            className="text-sm font-medium tracking-[0.35em] text-white"
          >
            PopeFilms
          </a>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.32em] text-white/65 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.28em] text-white transition hover:border-[#4b6fff]/50 hover:bg-[#4b6fff]/10"
          >
            Programează o producție
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(75,111,255,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_25%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.88))]" />

          <div className="absolute inset-0 opacity-25">
            <div className="hero-grain absolute inset-0" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4b6fff]/10 blur-3xl animate-pulse" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-10 md:px-8 lg:py-16">
            <div className="mb-8 flex items-center justify-center lg:justify-end">
              <span className="text-[0.65rem] uppercase tracking-[0.5em] text-white/45">
                Producție foto-video cinematică
              </span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                  Producție foto-video premium pentru branduri, oameni și
                  locații
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                  Creăm conținut foto-video cinematic pentru branduri care vor să
                  arate premium, să comunice clar și să atragă atenția pe social
                  media, în campanii și pe platforme digitale.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#4b6fff] hover:text-white"
                  >
                    Vezi portofoliul
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/90 transition hover:border-[#4b6fff]/60 hover:bg-white/5"
                  >
                    Începe un proiect
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  {[
                    'Reels',
                    'Interviuri',
                    'Video de produs',
                    'Prezentări locații',
                    'Activări cu influenceri',
                    'Foto & video comercial',
                  ].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 px-3 py-2"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-auto w-full max-w-2xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
                  {!isHeroPlaying && (
                    <button
                      type="button"
                      onClick={() => setIsHeroPlaying(true)}
                      className="absolute inset-0 z-20 flex items-center justify-center transition"
                      aria-label="Pornește video-ul de prezentare"
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-2xl backdrop-blur-sm transition hover:scale-105 hover:border-[#4b6fff]/60 hover:bg-[#4b6fff]/15">
                        <Play fill="currentColor" size={30} />
                      </span>
                    </button>
                  )}

                  <div className="relative h-[60vh] w-full overflow-hidden md:h-[68vh]">
                    {isHeroPlaying ? (
                      <video
                        src={localPath('/videos/hero-video.mp4')}
                        controls
                        playsInline
                        preload="metadata"
                        className="relative z-30 h-full w-full bg-black object-contain"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-55 transition duration-700" />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.55),rgba(0,0,0,0.15))]" />
                        <div className="pointer-events-none absolute inset-0 hero-flicker opacity-70" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="work"
          eyebrow="Lucrări selectate"
          title="Portofoliu"
          intro="O selecție de producții foto-video organizate pe categorii, cu exemple relevante pentru branduri, locații, produse și campanii."
        >
          <div className="category-scroll mb-14 flex gap-3 overflow-x-auto pb-3 md:flex-wrap md:overflow-visible md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  activeCategory === category
                    ? 'border-[#4b6fff]/60 bg-[#4b6fff]/15 text-white'
                    : 'border-white/10 text-white/55 hover:border-white/25 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Servicii"
          title="Ce putem crea pentru brandul tău"
          intro="De la reels verticale cu impact rapid până la producții video premium, fiecare proiect este construit în jurul unui obiectiv clar, al unei direcții vizuale puternice și al unui rezultat final care arată profesionist."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onOpen={setSelectedService}
              />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Încredere"
          title="Branduri & locații pentru care am creat conținut"
          intro="Adaptăm fiecare producție la identitatea brandului, specificul locației și direcția de comunicare — cu accent pe imagine, atmosferă și rezultate care atrag atenția."
        >
          <div className="grid grid-cols-2 items-center gap-10 md:grid-cols-5">
            {[
              {
                name: 'Affidea',
                logo: '/logos/affidea.png',
                scale: 'scale(0.9)',
              },
              {
                name: 'Burn',
                logo: '/logos/burn.png',
                scale: 'scale(1.35)',
              },
              {
                name: 'Dacia Dining Buzău',
                logo: '/logos/phoenix riders.png',
                scale: 'scale(2.8)',
              },
              {
                name: 'Studio Harmony Buzău',
                logo: '/logos/Rapid.png',
                scale: 'scale(1.25)',
              },
              {
                name: 'Gerovital',
                logo: '/logos/gerovital.png',
                scale: 'scale(1.6)',
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex h-28 items-center justify-center"
              >
                <img
                  src={mediaPath(brand.logo)}
                  alt={`${brand.name} logo`}
                  style={{ transform: brand.scale }}
                  className="h-16 w-[180px] object-contain opacity-90 transition duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Proces"
          title="Un proces clar, de la idee la livrare finală"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-[#7b93ff]">
                  0{index + 1}
                </div>

                <h3 className="mt-3 text-lg text-white">
                  {processTitles[index]}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        <section id="about" className="px-5 py-20 md:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-[#7b93ff]">
                  Despre
                </p>

                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  În spatele camerei
                </h2>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  Sunt Popescu Vlad, cunoscut și ca Pope — filmmaker și creator
                  vizual specializat în conținut cinematic, curat și modern. Am
                  început în zona de evenimente și nunți, unde am învățat să
                  surprind emoția naturală, momentele reale și detaliile care
                  contează. Astăzi, duc aceeași atenție pentru atmosferă și
                  storytelling în producții pentru branduri, reels, video-uri de
                  produs, prezentări de locație, interviuri și campanii cu
                  influenceri.
                </p>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  Abordarea mea combină structura tehnică cu instinctul creativ.
                  Mă interesează compoziția, lumina, sunetul, ritmul, culoarea
                  și detaliile mici care fac un material să pară complet. Nu văd
                  video-ul ca pe o simplă succesiune de cadre, ci ca pe o
                  experiență vizuală în care imaginea, editarea, sunetul și
                  emoția trebuie să funcționeze natural împreună.
                </p>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  Clienții apreciază execuția rapidă, comunicarea clară,
                  organizarea, ideile creative și look-ul premium al materialelor
                  finale.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-[#4b6fff]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                  <img
                    src={mediaPath('/images/about-pope.jpg')}
                    alt="Popescu Vlad în spatele camerei"
                    className="h-[520px] w-full object-cover md:h-[560px] lg:h-[520px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/55">
                      Popescu Vlad / Pope
                    </p>
                    <p className="mt-2 text-lg font-light text-white">
                      Filmmaker & creator vizual
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                '10+ ani de experiență în filmare',
                '20K–50K vizualizări medii pe reel',
                'Buzău / București / deplasări disponibile',
                'Proiecte punctuale / abonamente / colaborări cu agenții',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          eyebrow="Livrabile"
          title="Conținut pregătit pentru fiecare platformă"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </Section>

        <section className="border-y border-white/10 bg-black px-5 py-24 md:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-[#7b93ff]">
              Hai să creăm
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-6xl">
              Vrei conținut care arată premium și atrage atenția?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
              Spune-ne ce vrei să comunici, pentru ce platformă ai nevoie de
              conținut și când vrei să îl publici. Te ajutăm să transformi ideea
              într-o direcție vizuală clară și într-o producție finală potrivită
              brandului tău.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
              >
                Începe un proiect
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/90 transition hover:border-[#4b6fff]/60 hover:bg-white/5"
              >
                Contactează-ne
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-3xl font-light tracking-[-0.04em] md:text-4xl">
                Contact
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {['Nume', 'Email', 'Telefon'].map((label) => (
                  <input
                    key={label}
                    placeholder={label}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4b6fff]/60"
                  />
                ))}

                <select className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none md:col-span-2">
                  {[
                    'Tip proiect',
                    'Reels',
                    'Interviu',
                    'Foto/video de produs',
                    'Prezentare locație',
                    'Activare cu influencer',
                    'Ședință foto/video',
                    'Campanie custom',
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <textarea
                  rows="6"
                  placeholder="Spune-ne pe scurt ce vrei să producem"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4b6fff]/60 md:col-span-2"
                />
              </div>

              <button
                className="mt-5 rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
                type="button"
              >
                Trimite cererea
              </button>
            </form>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#7b93ff]">
                  Detalii
                </p>

                <div className="mt-4 space-y-3 text-white/75">
                  <p>Popescu Vlad</p>
                  <p>Telefon: 0745531340</p>
                  <p>Email: popescuvlad990@gmail.com</p>
                  <p>Instagram / TikTok: @popefilms.ro</p>
                  <p>Disponibil în Buzău, București și pentru deplasări.</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 text-sm text-white/55">
                PopeFilms — Producție foto-video cinematică
                <br />© 2026 PopeFilms. Toate drepturile rezervate.
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="mx-auto my-4 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] shadow-2xl sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-30 flex items-start justify-between gap-4 border-b border-white/10 bg-[#090909]/95 px-5 py-4 backdrop-blur-xl">
              <div className="pr-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b93ff]">
                  Detalii serviciu
                </p>

                <h3 className="mt-1 text-xl text-white">
                  {selectedService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="shrink-0 rounded-full border border-white/10 bg-black/60 p-3 text-white/80 transition hover:border-white/30 hover:text-white"
                aria-label="Închide popup-ul de serviciu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-black p-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <PortfolioVideo
                    video={{
                      title: selectedService.title,
                      src: selectedService.video,
                    }}
                    variant="horizontal"
                  />
                </div>
              </div>

              <div className="p-6 pb-10 md:p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Potrivit pentru
                </p>

                <p className="mt-4 text-base leading-8 text-white/72">
                  {selectedService.bestFor}
                </p>

                <div className="mt-7">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Ce include
                  </h4>

                  <ul className="mt-3 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                    {selectedService.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Livrabile
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {selectedService.deliverables.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
                >
                  Începe un proiect
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mx-auto my-4 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] shadow-2xl sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-30 flex items-start justify-between gap-4 border-b border-white/10 bg-[#090909]/95 px-5 py-4 backdrop-blur-xl">
              <div className="pr-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b93ff]">
                  Detalii proiect
                </p>

                <h3 className="mt-1 text-xl text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="shrink-0 rounded-full border border-white/10 bg-black/60 p-3 text-white/80 transition hover:border-white/30 hover:text-white"
                aria-label="Închide popup-ul de proiect"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="grid gap-4 bg-black p-4 md:grid-cols-3">
                {selectedProject.videos.map((video) => (
                  <div
                    key={video.src}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black"
                  >
                    <PortfolioVideo video={video} variant="vertical" />

                    <div className="border-t border-white/10 px-3 py-3 text-xs uppercase tracking-[0.25em] text-white/50">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 pb-10 md:p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  {selectedProject.category}
                </p>

                <p className="mt-4 text-base leading-8 text-white/72">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Livrabile
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {selectedProject.deliverables.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-sm text-white/60">
                  Format: {selectedProject.format}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
                >
                  Solicită o producție similară
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Section({ eyebrow, title, intro, children, id }) {
  return (
    <section id={id} className="px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.45em] text-[#7b93ff]">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] md:text-5xl">
            {title}
          </h2>

          {intro && (
            <p className="mt-5 text-base leading-8 text-white/68">{intro}</p>
          )}
        </div>

        {children}
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 hover:border-[#4b6fff]/40"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={mediaPath(project.media)}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/75">
          {project.category}
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs text-white/80 backdrop-blur-sm">
          <Play size={14} fill="currentColor" />
          Vezi 3 video-uri
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-light tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/65">
          {project.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#7b93ff]">
          Vezi proiectul <ArrowRight size={16} />
        </div>
      </div>
    </button>
  )
}

function ServiceCard({ service, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(service)}
      className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-left transition hover:-translate-y-1 hover:border-[#4b6fff]/35 hover:bg-white/[0.05]"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-light tracking-[-0.03em] text-white">
          {service.title}
        </h3>

        <span className="text-xs uppercase tracking-[0.3em] text-white/30 transition group-hover:text-[#7b93ff]">
          Detalii
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/65">{service.text}</p>
    </button>
  )
}

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (password === SITE_PASSWORD) {
      setError('')
      onUnlock()
      return
    }

    setError('Parolă greșită. Încearcă din nou.')
    setPassword('')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(75,111,255,0.16),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.9))]" />

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-[#7b93ff]">
          Portofoliu privat
        </p>

        <h1 className="mt-4 text-4xl font-light tracking-[-0.04em]">
          Introdu parola
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/60">
          Acest portofoliu este momentan privat. Introdu parola de acces pentru
          a vedea site-ul.
        </p>

        <div className="mt-8">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Parolă"
            autoFocus
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#7b93ff]/70"
          />

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-[#4b6fff] hover:text-white"
        >
          Deblochează portofoliul
        </button>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-white/30">
          PopeFilms
        </p>
      </form>
    </div>
  )
}

function getEmbedUrl(url) {
  if (!url) return ''

  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace('www.', '')
    const pathname = parsedUrl.pathname

    if (hostname.includes('youtube.com')) {
      if (pathname.startsWith('/shorts/')) {
        const id = pathname.split('/shorts/')[1]?.split('/')[0]
        return `https://www.youtube.com/embed/${id}`
      }

      if (parsedUrl.searchParams.get('v')) {
        return `https://www.youtube.com/embed/${parsedUrl.searchParams.get(
          'v',
        )}`
      }

      if (pathname.startsWith('/embed/')) {
        return url
      }
    }

    if (hostname.includes('youtu.be')) {
      const id = pathname.replace('/', '')
      return `https://www.youtube.com/embed/${id}`
    }

    if (hostname.includes('vimeo.com')) {
      if (hostname.includes('player.vimeo.com')) {
        return url
      }

      const id = pathname.split('/').filter(Boolean)[0]
      return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`
    }
  } catch {
    return url
  }

  return url
}

function isExternalVideo(url) {
  if (!url) return false

  return (
    url.includes('youtube.com') ||
    url.includes('youtu.be') ||
    url.includes('vimeo.com')
  )
}

function PortfolioVideo({ video, variant = 'vertical' }) {
  const aspectClass = variant === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'

  if (isExternalVideo(video.src)) {
    return (
      <iframe
        src={getEmbedUrl(video.src)}
        title={video.title}
        className={`${aspectClass} w-full bg-black`}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    )
  }

  return (
    <video
      src={localPath(video.src)}
      controls
      playsInline
      preload="metadata"
      className={`${aspectClass} w-full bg-black object-contain`}
    />
  )
}

export default App