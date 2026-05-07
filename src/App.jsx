import { useMemo, useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'

const SITE_PASSWORD = 'popefilms2026'

const localPath = (path) => {
  return encodeURI(`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`)
}

const navItems = ['Home', 'Work', 'Services', 'Process', 'About', 'Contact']

const categories = [
  'All',
  'Reels',
  'Interviews',
  'Location Films',
  'Product Photo & Video',
  'Influencer Activations',
  'Events',
  'Corporate',
  'Horeca',
  'Fashion / Beauty',
]

const projects = [
  {
    title: 'Brand Reels',
    category: 'Reels',
    description:
      'Short-form cinematic content designed for Instagram, TikTok and paid social.',
    format: '9:16 / 16:9',
    deliverables: ['Vertical reels', 'Cutdowns', 'Hook variations'],
    media:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
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
    title: 'Interview Series',
    category: 'Interviews',
    description:
      'Clean frames, clear sound and a professional visual setup for founders, brands and corporate stories.',
    format: '16:9 / 9:16',
    deliverables: ['Full interview', 'Short clips', 'Subtitled excerpts'],
    media:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    videos: [
      {
        title: 'Interview 01',
        src: 'https://vimeo.com/1189989626?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Interview 02',
        src: 'https://vimeo.com/1189989576?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Interview 03',
        src: 'https://vimeo.com/1189989810?share=copy&fl=sv&fe=ci',
      },
    ],
  },
  {
    title: 'Product Film',
    category: 'Product Photo & Video',
    description:
      'Detailed close-ups, macro shots, product demonstrations and polished edits for commercial use.',
    format: '9:16 / 16:9',
    deliverables: ['Hero film', 'Detail shots', 'Stills'],
    media:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
    videos: [
      {
        title: 'Product Video 01',
        src: '/videos/product-1.mp4',
      },
      {
        title: 'Product Video 02',
        src: '/videos/product-2.mp4',
      },
      {
        title: 'Product Video 03',
        src: '/videos/product-3.mp4',
      },
    ],
  },
  {
    title: 'Location Showcase',
    category: 'Location Films',
    description:
      'Restaurants, hotels, clinics, salons, showrooms and premium spaces presented with atmosphere and flow.',
    format: '9:16 / 16:9',
    deliverables: ['Atmosphere edit', 'Walkthrough', 'Photo set'],
    media:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    videos: [
      {
        title: 'Location Film 01',
        src: 'https://vimeo.com/1189989613?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Location Film 02',
        src: 'https://vimeo.com/1189994100?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Location Film 03',
        src: '/videos/location-3.mp4',
      },
    ],
  },
  {
    title: 'Influencer Activation',
    category: 'Influencer Activations',
    description:
      'Campaign content created with influencers and creators, adapted for native social media performance.',
    format: 'Vertical / Social',
    deliverables: ['Creator edits', 'Ad-ready clips', 'Behind the scenes'],
    media:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    videos: [
      {
        title: 'Influencer Activation 01',
        src: 'https://vimeo.com/1189989702?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Influencer Activation 02',
        src: 'https://vimeo.com/1189989669?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Influencer Activation 03',
        src: 'https://vimeo.com/1189989779?share=copy&fl=sv&fe=ci',
      },
    ],
  },
  {
    title: 'Event Recap',
    category: 'Events',
    description:
      'Dynamic visual stories that capture energy, people, details and key moments.',
    format: '9:16 / 16:9',
    deliverables: ['Recap film', 'Highlights', 'Photo extras'],
    media:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    videos: [
      {
        title: 'Event Recap 01',
        src: 'https://vimeo.com/1189989819?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Event Recap 02',
        src: 'https://vimeo.com/1189989730?share=copy&fl=sv&fe=ci',
      },
      {
        title: 'Event Recap 03',
        src: 'https://vimeo.com/1189989760?share=copy&fl=sv&fe=ci',
      },
    ],
  },
]

const services = [
  {
    title: 'Reels & Short-Form Video',
    text: 'Dynamic vertical videos optimized for retention, awareness and conversion. Ideal for Instagram, TikTok and ads.',
    video: '/videos/service-reels.mp4',
    bestFor:
      'Instagram, TikTok, paid ads, launches, product awareness and social campaigns.',
    includes: [
      'Creative direction',
      'Hook and concept structure',
      'Vertical filming',
      'Rhythmic editing',
      'Text on screen',
      'Color grading',
      'Sound design',
    ],
    deliverables: [
      '1–3 vertical reels',
      '9:16 export',
      'Caption / CTA direction',
      '1 revision round',
    ],
  },
  {
    title: 'Interviews & Testimonials',
    text: 'Professional interview setups with clean framing, clear audio, subtitles, rhythm and polished editing.',
    video: '/videos/service-interviews.mp4',
    bestFor:
      'Founders, brands, testimonials, podcasts, corporate stories and expert content.',
    includes: [
      'Interview structure',
      'Camera setup',
      'Clean audio capture',
      'Lighting setup',
      'Subtitles',
      'Editing and pacing',
      'Color grading',
    ],
    deliverables: [
      'Full interview edit',
      'Short excerpts',
      'Subtitled clips',
      'Multi-platform versions',
    ],
  },
  {
    title: 'Product Photo & Video',
    text: 'Premium product visuals, detail shots, macro frames, demos, unboxing, lifestyle usage and commercial edits.',
    video: '/videos/service-product.mp4',
    bestFor:
      'Beauty, fashion, food, tech, e-commerce, lifestyle products and commercial campaigns.',
    includes: [
      'Product shot list',
      'Detail shots',
      'Macro / close-up visuals',
      'Demo or usage scenes',
      'Lighting setup',
      'Editing',
      'Color and sound polish',
    ],
    deliverables: [
      'Product video',
      'Detail clips',
      'Photo extras',
      'Vertical and horizontal versions',
    ],
  },
  {
    title: 'Location Presentations',
    text: 'Cinematic videos for restaurants, hotels, clinics, salons, showrooms and commercial spaces.',
    video: '/videos/service-location.mp4',
    bestFor:
      'Restaurants, cafés, hotels, clinics, salons, showrooms, venues and premium spaces.',
    includes: [
      'Location walkthrough',
      'Atmosphere shots',
      'Details and experience',
      'Staff / product / service moments',
      'Cinematic edit',
      'Color grading',
      'Sound design',
    ],
    deliverables: [
      'Main location video',
      'Short social cuts',
      'Vertical 9:16 version',
      'Optional photo set',
    ],
  },
  {
    title: 'Influencer Activations',
    text: 'Content production for brand campaigns, creator collaborations and native social media storytelling.',
    video: '/videos/service-influencer.mp4',
    bestFor:
      'Influencer campaigns, creator content, brand activations and social media launches.',
    includes: [
      'Brief adaptation',
      'Creator-focused structure',
      'Native social style',
      'Filming with influencer',
      'Brand-safe editing',
      'Multiple versions',
      'Fast delivery',
    ],
    deliverables: [
      'Creator campaign video',
      'Ad-ready clips',
      'Story / feed versions',
      'Optional BTS content',
    ],
  },
  {
    title: 'Photo / Video Sessions',
    text: 'Creative shoots for personal brands, businesses, lifestyle campaigns, portraits and promotional visuals.',
    video: '/videos/service-sessions.mp4',
    bestFor:
      'Personal brands, business owners, campaigns, portraits, lifestyle content and promotional visuals.',
    includes: [
      'Creative direction',
      'Shot list',
      'Photo and video capture',
      'Lighting and composition',
      'Editing',
      'Color grading',
      'Final export',
    ],
    deliverables: [
      'Edited photo set',
      'Short video clips',
      'Social media versions',
      'Optional reels',
    ],
  },
  {
    title: 'Custom Campaigns',
    text: 'Mixed productions, monthly retainers, bulk reels, event recaps, brand launches and custom content packages.',
    video: '/videos/service-custom.mp4',
    bestFor:
      'Brands that need a custom content package, monthly content, campaign coverage or mixed deliverables.',
    includes: [
      'Custom creative direction',
      'Production planning',
      'Photo / video capture',
      'Multiple content formats',
      'Editing and post-production',
      'Platform-ready exports',
      'Revision rounds',
    ],
    deliverables: [
      'Custom video package',
      'Bulk reels',
      'Campaign assets',
      'Monthly content options',
    ],
  },
]

const process = [
  'We define the type of content, the target audience and the result you want to achieve.',
  'We establish the concept, visual mood, format, location, schedule and production details.',
  'I handle the filming, visual composition, technical setup and all core production elements.',
  'You receive a first version based on the agreed direction, rhythm and platform requirements.',
  'After feedback, I refine the material and deliver the final version ready to post, publish or use in campaigns.',
]

const processTitles = [
  'Brief & Objective',
  'Creative Direction',
  'Production',
  'Editing & First Version',
  'Revisions & Final Delivery',
]

const deliverables = [
  'Vertical 9:16',
  'Horizontal 16:9',
  'Multi-platform versions',
  'Subtitles',
  'Text on screen',
  'Color grading',
  'Sound design',
  'Voice-over',
  'Photo extras',
  'Raw footage on request',
  'Urgent delivery on request',
  'Monthly retainer available',
]

function App() {
  const [isUnlocked, setIsUnlocked] = useState(
    () => localStorage.getItem('popefilms_unlocked') === 'true',
  )

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [isHeroPlaying, setIsHeroPlaying] = useState(false)

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
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
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.28em] text-white transition hover:border-[#4b6fff]/50 hover:bg-[#4b6fff]/10"
          >
            Book a Shoot
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
                Cinematic Photo &amp; Video Production
              </span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                  Cinematic Visual Production for Brands, People and Places
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                  I create polished photo and video content for brands that want
                  to look premium, feel authentic and communicate clearly across
                  social media, campaigns and digital platforms.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#4b6fff] hover:text-white"
                  >
                    View Portfolio
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/90 transition hover:border-[#4b6fff]/60 hover:bg-white/5"
                  >
                    Start a Project
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  {[
                    'Reels',
                    'Interviews',
                    'Product Films',
                    'Location Showcases',
                    'Influencer Activations',
                    'Photo & Video Production',
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
                      aria-label="Play hero video"
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-2xl backdrop-blur-sm transition hover:scale-105 hover:border-[#4b6fff]/60 hover:bg-[#4b6fff]/15">
                        <Play fill="currentColor" size={30} />
                      </span>
                    </button>
                  )}

                  <div className="relative h-[60vh] w-full overflow-hidden md:h-[68vh]">
                    {isHeroPlaying ? (
                      <video
                        src={localPath('/videos/.mp4')}
                        controls
                        playsInline
                        preload="metadata"
                        className="relative z-30 h-full w-full bg-black object-contain"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-55 transition duration-700" />
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
          eyebrow="Selected Work"
          title="Portfolio"
          intro="Category-based selections with clean project previews and a refined cinematic presentation."
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
          eyebrow="Services"
          title="What I Create"
          intro="From fast-paced vertical content to polished brand films, every production is built around a clear objective, a strong visual direction and a final result that feels premium without being forced."
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
          eyebrow="Trust"
          title="Selected Brands & Locations"
          intro="I create content adapted to each brand, location and communication direction — always with a focus on image quality, atmosphere and results that attract attention."
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
                  src={localPath(brand.logo)}
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
          eyebrow="Process"
          title="A Clear Process From Idea to Final Delivery"
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
                  About
                </p>

                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Behind the Camera
                </h2>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  I’m Popescu Vlad, also known as Pope — a filmmaker and visual
                  creator focused on cinematic, clean and modern content. I
                  started in the event and wedding industry, where I learned how
                  to capture natural emotion, real moments and meaningful
                  details. Today, I bring that same attention to atmosphere and
                  storytelling into brand reels, product videos, location
                  showcases, interviews and influencer campaigns.
                </p>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  My approach combines technical structure with creative
                  instinct. I care about composition, light, sound, rhythm, color
                  and the small details that make a project feel finished. I
                  don’t see video as a simple sequence of shots — I see it as a
                  complete visual experience where image, edit, sound and emotion
                  need to work together naturally.
                </p>

                <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
                  Clients value my fast execution, clear communication, good
                  organization, creative ideas and premium visual look.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-[#4b6fff]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                  <img
                    src={localPath('/images/about-pope.jpg')}
                    alt="Popescu Vlad behind the camera"
                    className="h-[520px] w-full object-cover md:h-[560px] lg:h-[520px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/55">
                      Popescu Vlad / Pope
                    </p>
                    <p className="mt-2 text-lg font-light text-white">
                      Filmmaker & Visual Creator
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                '10+ Years of Filming Experience',
                '20K–50K Average Reel Views',
                'Buzău / Bucharest / Travel Available',
                'One-Off Projects / Retainers / Agency Collaborations',
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

        <Section eyebrow="Deliverables" title="Built for Every Platform">
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
              Let&apos;s Create
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-6xl">
              Ready to Build Something That Looks Premium?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
              Tell me what you want to create, what the content is for and when
              you need it. I’ll help shape the idea into a clear visual
              direction and a final production that fits your brand.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
              >
                Start a Project
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/90 transition hover:border-[#4b6fff]/60 hover:bg-white/5"
              >
                Contact Me
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
                {['Name', 'Email', 'Phone'].map((label) => (
                  <input
                    key={label}
                    placeholder={label}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4b6fff]/60"
                  />
                ))}

                <select className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none md:col-span-2">
                  {[
                    'Project type',
                    'Reels',
                    'Interview',
                    'Product photo/video',
                    'Location presentation',
                    'Influencer activation',
                    'Photo/video session',
                    'Custom campaign',
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <textarea
                  rows="6"
                  placeholder="Message"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4b6fff]/60 md:col-span-2"
                />
              </div>

              <button
                className="mt-5 rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-[#4b6fff] hover:text-white"
                type="button"
              >
                Send Inquiry
              </button>
            </form>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#7b93ff]">
                  Details
                </p>

                <div className="mt-4 space-y-3 text-white/75">
                  <p>Popescu Vlad</p>
                  <p>Phone: 0745531340</p>
                  <p>Email: popescuvlad990@gmail.com</p>
                  <p>Instagram / TikTok: @framesbypope</p>
                  <p>Available in Buzău, Bucharest and for travel.</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 text-sm text-white/55">
                PopeFilms — Cinematic Photo &amp; Video Production
                <br />© 2026 PopeFilms. All rights reserved.
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#090909] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#090909]/95 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b93ff]">
                  Service Detail
                </p>

                <h3 className="mt-1 text-xl text-white">
                  {selectedService.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <X size={18} />
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

              <div className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  Best for
                </p>

                <p className="mt-4 text-base leading-8 text-white/72">
                  {selectedService.bestFor}
                </p>

                <div className="mt-7">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    What it includes
                  </h4>

                  <ul className="mt-3 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                    {selectedService.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Deliverables
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
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#090909] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#090909]/95 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b93ff]">
                  Project Detail
                </p>

                <h3 className="mt-1 text-xl text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <X size={18} />
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

              <div className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                  {selectedProject.category}
                </p>

                <p className="mt-4 text-base leading-8 text-white/72">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Deliverables
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
                  Contact to Book
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
          src={project.media}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/75">
          {project.category}
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs text-white/80 backdrop-blur-sm">
          <Play size={14} fill="currentColor" />
          View 3 Videos
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
          View Project <ArrowRight size={16} />
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
          Explore
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

    setError('Wrong password. Please try again.')
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
          Private Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-light tracking-[-0.04em]">
          Enter Password
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/60">
          This portfolio is currently private. Enter the access password to view
          the website.
        </p>

        <div className="mt-8">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#7b93ff]/70"
          />

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-[#4b6fff] hover:text-white"
        >
          Unlock Portfolio
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