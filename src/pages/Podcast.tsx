import { useEffect, useRef, useState } from 'react'
import styles from './Podcast.module.css'

// ── Data ──────────────────────────────────────────────────────────────────────

const EPISODE_FORMATS = [
  {
    tag: 'ChiLL',
    tagClass: 'tagChill',
    title: 'Academic & Expert Conversations',
    description:
      'Deep-dive sessions with professors, authors, clinicians, and researchers. These episodes unpack the theory and evidence behind relationship dynamics — what the data says, what the literature argues, and what the experts recommend.',
    topics: [
      'Attachment theory & adult relationships',
      'The psychology of forgiveness',
      'Cultural scripts around gender roles',
      'Clinical perspectives on intimacy',
    ],
  },
  {
    tag: 'ChiLLY',
    tagClass: 'tagChilly',
    title: 'Controversial Topics, Critically Examined',
    description:
      'No topic is off-limits. These episodes tackle the questions people whisper about — abstinence, celibacy, submission, order, power, and forgiveness — brought into the open and examined with honesty and nuance.',
    topics: [
      'Abstinence & celibacy in modern dating',
      'Submission and power dynamics',
      'Forgiveness — obligation or choice?',
      'Order in relationships',
    ],
  },
]

const PLACEHOLDER_EPISODES = [
  {
    format: 'ChiLL',
    number: '001',
    title: 'Attachment Styles & Why We Love the Way We Do',
    guest: 'Dr. Sarah Nkemdirim — Clinical Psychologist',
    duration: '52 min',
    desc: 'An evidence-based conversation on how early attachment shapes our adult romantic bonds — and whether we can rewire them.',
  },
  {
    format: 'ChiLLY',
    number: '002',
    title: 'The Celibacy Conversation Nobody Is Having',
    guest: 'Open panel discussion',
    duration: '48 min',
    desc: 'Is choosing celibacy radical self-preservation, cultural conditioning, or both? Three women share their experiences and reasoning.',
  },
  {
    format: 'ChiLL',
    number: '003',
    title: 'Power, Control & the Neuroscience of Jealousy',
    guest: 'Prof. Amara Osei — Behavioural Neuroscience',
    duration: '61 min',
    desc: 'What happens in the brain during jealousy, and how does it intersect with control dynamics in romantic relationships?',
  },
  {
    format: 'ChiLLY',
    number: '004',
    title: 'Submission: Faith, Feminism & Partnership',
    guest: 'Roundtable — Theologian, Activist, Counsellor',
    duration: '55 min',
    desc: 'A charged conversation on what submission means across religious, feminist, and practical frameworks — and who gets to define it.',
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={styles.fadeIn} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

const EpisodeCard = ({ ep, index }: { ep: typeof PLACEHOLDER_EPISODES[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false)
  const isChilly = ep.format === 'ChiLLY'
  return (
    <FadeIn delay={`${index * 0.08}s`}>
      <div className={`${styles.episodeCard} ${isChilly ? styles.episodeChilly : styles.episodeChill}`}>
        <div className={styles.episodeTop}>
          <span className={`${styles.episodeTag} ${isChilly ? styles.tagChilly : styles.tagChill}`}>
            {ep.format}
          </span>
          <span className={styles.episodeNumber}>EP. {ep.number}</span>
          <span className={styles.episodeDuration}>{ep.duration}</span>
        </div>
        <h3 className={styles.episodeTitle}>{ep.title}</h3>
        <p className={styles.episodeGuest}>{ep.guest}</p>
        {expanded && <p className={styles.episodeDesc}>{ep.desc}</p>}
        <div className={styles.episodeActions}>
          <button className={styles.playBtn} aria-label="Play episode">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <polygon points="2,1 13,7 2,13"/>
            </svg>
            Play
          </button>
          <button
            className={styles.expandBtn}
            onClick={() => setExpanded(v => !v)}
          >
            {expanded ? 'Less ↑' : 'More ↓'}
          </button>
        </div>
      </div>
    </FadeIn>
  )
}

// ── Podcast Page ──────────────────────────────────────────────────────────────

const Podcast = () => (
  <main className={styles.page}>

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <img src="/podcast-hero.png" alt="ChiLLy Talks studio" className={styles.heroImg} />
        <div className={styles.heroScrim} />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>An Informing S.A. Podcast · A H Studios Production</p>
        <h1 className={styles.heroTitle}>
          Chi<span className={styles.titleLL}>LL</span><span className={styles.titleY}>Y</span> Talks
        </h1>
        <p className={styles.heroTagline}>
          A H-Studios Production
        </p>
        <div className={styles.heroCtas}>
          <a className={styles.ctaPrimary} href="#episodes">Browse Episodes</a>
          <a className={styles.ctaSecondary} href="#subscribe">Subscribe</a>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <span>↓</span>
      </div>
    </section>

    {/* ── Mission ── */}
    <section className={styles.mission}>
      <div className={styles.missionInner}>
        <FadeIn>
          <p className={styles.missionLabel}>Our Mission</p>
          <h2 className={styles.missionTitle}>
            Fostering healthy relationships through honest, research-informed dialogue.
          </h2>
          <p className={styles.missionBody}>
            ChiLLy Talks advances the mission of Informing S.A. with a particular focus on women
            ages 18–35. Through expert conversations and critical engagement with controversial
            topics, we invite listeners to meditate on the social, psychological, and cultural
            forces that shape contemporary relationships.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Two formats ── */}
    <section className={styles.formats}>
      <div className={styles.formatsInner}>
        <FadeIn>
          <p className={styles.sectionLabel}>Two Formats. One Conversation.</p>
        </FadeIn>
        <div className={styles.formatsGrid}>
          {EPISODE_FORMATS.map((f, i) => (
            <FadeIn key={f.tag} delay={`${i * 0.12}s`}>
              <div className={styles.formatCard}>
                <span className={`${styles.formatTag} ${styles[f.tagClass as keyof typeof styles]}`}>
                  {f.tag}
                </span>
                <h3 className={styles.formatTitle}>{f.title}</h3>
                <p className={styles.formatDesc}>{f.description}</p>
                <ul className={styles.formatTopics}>
                  {f.topics.map(t => (
                    <li key={t}>
                      <span className={styles.topicDot} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Episodes ── */}
    <section className={styles.episodes} id="episodes">
      <div className={styles.episodesInner}>
        <FadeIn>
          <p className={styles.sectionLabel}>Latest Episodes</p>
          <h2 className={styles.episodesTitle}>Start Listening</h2>
        </FadeIn>
        <div className={styles.episodesGrid}>
          {PLACEHOLDER_EPISODES.map((ep, i) => (
            <EpisodeCard key={ep.number} ep={ep} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Quote ── */}
    <section className={styles.quoteBand}>
      <FadeIn>
        <blockquote className={styles.quoteText}>
          "We don't just talk about relationships — we interrogate them."
        </blockquote>
        <p className={styles.quoteAttr}>— ChiLLy Talks</p>
      </FadeIn>
    </section>

    {/* ── Subscribe ── */}
    <section className={styles.subscribe} id="subscribe">
      <div className={styles.subscribeInner}>
        <FadeIn>
          <p className={styles.sectionLabel}>Never Miss an Episode</p>
          <h2 className={styles.subscribeTitle}>Subscribe to ChiLLy Talks</h2>
          <p className={styles.subscribeBody}>
            New episodes drop regularly. Listen wherever you get your podcasts.
          </p>
          <div className={styles.platforms}>
            {['Spotify', 'Apple Podcasts', 'YouTube', 'Google Podcasts'].map(p => (
              <a key={p} href="#" className={styles.platformBtn}>{p}</a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Footer ── */}
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>Informing S.A.</div>
      <nav className={styles.footerLinks}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/podcast">Podcast</a>
        <a href="/about#contact">Contact</a>
      </nav>
      <p className={styles.footerCopy}>© 2025 Informing S.A. · Kiss the Mirror</p>
    </footer>

  </main>
)

export default Podcast
