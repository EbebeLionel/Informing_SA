import { useEffect, useRef } from 'react'
import styles from './Podcast.module.css'

// ── Data ──────────────────────────────────────────────────────────────────────

const CHILL_EPISODES = [
  {
    number: '001',
    title: 'The Body Keeps the Score: Why the Body Remembers What the Mind Wants to Forget',
    desc: "A conversation on Bessel van der Kolk's work and the unsettling reality that trauma does not simply disappear with time. Why does the nervous system hold onto pain, and why is emotional safety essential for healing?",
  },
  {
    number: '002',
    title: 'Safe People: Why Some Relationships Help You Grow and Others Quietly Destroy You',
    desc: "Drawing from Dr. Henry Cloud's book, this episode asks a deceptively simple question: how do you actually identify safe people? What does it mean to invite honest feedback from the people closest to you?",
  },
  {
    number: '003',
    title: 'Boundaries: Why Love Sometimes Looks Like Letting People Face Their Own Consequences',
    desc: "Inspired by Dr. Henry Cloud's work on boundaries, this episode explores the difficult truth that love is not always rescue. When does helping someone actually prevent them from growing?",
  },
]

const CHILLY_EPISODES = [
  {
    number: '001',
    title: 'Waiting Is Not Just About Marriage',
    desc: "Everyone talks about waiting for marriage, but what if the deeper question is about renewing the mind before sex? Where do our ideas of intimacy actually come from, and who shaped them?",
  },
  {
    number: '002',
    title: 'The Secret Trades We Make for Love',
    desc: "When people compromise their self worth for affection, attention, or validation, what exactly is being exchanged? Are there emotional or spiritual consequences to the bargains we make in relationships?",
  },
  {
    number: '003',
    title: 'Kinks, Power, and Desire',
    desc: "Where do kinks really come from? Are they harmless curiosities, expressions of imagination, or do they sometimes reflect deeper psychological and relational dynamics?",
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

interface ConvoCardProps {
  number: string
  title: string
  desc: string
  format: 'ChiLL' | 'ChiLLY'
  index: number
}

const ConvoCard = ({ number, title, desc, format, index }: ConvoCardProps) => {
  const isChilly = format === 'ChiLLY'
  return (
    <FadeIn delay={`${index * 0.1}s`}>
      <div className={`${styles.convoCard} ${isChilly ? styles.convoChilly : styles.convoChill}`}>
        <div className={styles.convoTop}>
          <span className={`${styles.convoTag} ${isChilly ? styles.tagChilly : styles.tagChill}`}>
            {format}
          </span>
          <span className={styles.convoNumber}>{number}</span>
        </div>
        <h3 className={styles.convoTitle}>{title}</h3>
        <p className={styles.convoDesc}>{desc}</p>
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
        <p className={styles.heroEyebrow}>An Informing S.A. Podcast</p>
        <h1 className={styles.heroTitle}>
          Chi<span className={styles.titleLL}>LL</span><span className={styles.titleY}>Y</span> Talks
        </h1>
        <p className={styles.heroTagline}>
          <strong>An H-Studios Production</strong>
        </p>
        <div className={styles.heroCtas}>
          <a className={styles.ctaPrimary} href="#conversations">Explore Conversations</a>
          <a className={styles.ctaSecondary} href="#subscribe">Subscribe</a>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <span>↓</span>
      </div>
    </section>

    {/* ── About ── */}
    <section className={styles.mission}>
      <div className={styles.missionInner}>
        <FadeIn>
          <p className={styles.missionLabel}>About</p>
          <h2 className={styles.missionTitle}>
            Where serious inquiry and candid conversation about relationships exist side by side.
          </h2>
          <p className={styles.missionBody}>
            ChiLLy Talks is a podcast advancing the mission of Informing S.A. to foster healthy interpersonal
            relationships, with a particular focus on women ages 18 to 35, by alternating between two formats:
            ChiLL and ChiLLY. ChiLL episodes feature conversations with professors, academics, and authors who
            explore the deeper foundations of relationships. What are the true components of trust? How do
            psychology, philosophy, and research help us understand attachment, trauma, and emotional intimacy?
          </p>
          <p className={styles.missionBody} style={{ marginTop: '16px' }}>
            ChiLLY episodes step into more provocative territory. What are healthy and unhealthy kinks? How do
            desire, power, and personal experience shape sexuality? What does it mean to renew the mind before
            sex and approach intimacy with intention and reflection? How does sex affect the soul, and what
            impact might that have on a person's overall flourishing and prosperity? Thoughtful, curious, and
            occasionally provocative, ChiLLy Talks creates a space where serious inquiry and candid
            conversations about relationships can exist side by side.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Two formats intro ── */}
    <section className={styles.formatsIntro}>
      <div className={styles.formatsIntroInner}>
        <FadeIn>
          <p className={styles.sectionLabel}>Two Formats. One Conversation.</p>
        </FadeIn>
        <div className={styles.formatsIntroGrid}>
          <FadeIn delay="0s">
            <div className={styles.formatIntroCard}>
              <span className={`${styles.formatIntroTag} ${styles.tagChill}`}>ChiLL</span>
              <p className={styles.formatIntroDesc}>
                Academic conversations with professors, authors, and clinicians — unpacking the research
                and theory behind attachment, trauma, trust, and emotional intimacy.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay="0.12s">
            <div className={styles.formatIntroCard}>
              <span className={`${styles.formatIntroTag} ${styles.tagChilly}`}>ChiLLY</span>
              <p className={styles.formatIntroDesc}>
                Provocative, candid discussions on kinks, desire, power, celibacy, and the spiritual
                dimensions of intimacy — the conversations people are having privately, brought into the open.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Conversations ── */}
    <section className={styles.conversations} id="conversations">
      <div className={styles.conversationsInner}>

        {/* ChiLL block */}
        <FadeIn>
          <div className={styles.formatBlockHeader}>
            <span className={`${styles.blockTag} ${styles.tagChill}`}>ChiLL</span>
            <h2 className={styles.blockTitle}>Academic Conversations</h2>
            <p className={styles.blockSubtitle}>
              Research-informed dialogue with experts, authors, and clinicians on the foundations of healthy relationships.
            </p>
          </div>
        </FadeIn>
        <div className={styles.convoGrid}>
          {CHILL_EPISODES.map((ep, i) => (
            <ConvoCard key={ep.number} {...ep} format="ChiLL" index={i} />
          ))}
        </div>

        <div className={styles.formatDivider} />

        {/* ChiLLY block */}
        <FadeIn>
          <div className={styles.formatBlockHeader}>
            <span className={`${styles.blockTag} ${styles.tagChilly}`}>ChiLLY</span>
            <h2 className={styles.blockTitle}>Provocative Conversations</h2>
            <p className={styles.blockSubtitle}>
              Candid, critical discussions on desire, power, sexuality, and the unspoken dynamics of intimacy.
            </p>
          </div>
        </FadeIn>
        <div className={styles.convoGrid}>
          {CHILLY_EPISODES.map((ep, i) => (
            <ConvoCard key={ep.number} {...ep} format="ChiLLY" index={i} />
          ))}
        </div>

      </div>
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
      <div className={styles.footerRight}>
        <a href="mailto:info@informingsa.com" className={styles.footerEmail}>
          info@informingsa.com
        </a>
        <p className={styles.footerCopy}>© 2025 Informing S.A. · Kiss the Mirror</p>
      </div>
    </footer>

  </main>
)

export default Podcast