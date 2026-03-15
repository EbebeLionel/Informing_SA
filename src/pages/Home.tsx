import { useEffect, useRef } from 'react'
import WorldMap from '../components/WorldMap'
import styles from './Home.module.css'

// ── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroLeft}>
      <p className={styles.heroEyebrow}>South Africa · Pan-African Discourse</p>
      <h1 className={styles.heroTitle}>
        Informing<br /><em>S.A.</em>
      </h1>
      <p className={styles.heroSubtitle}>Kiss the Mirror</p>
      <p className={styles.heroDesc}>
        A platform for authentic, informed voices across Southern Africa and
        beyond — connecting contributors, perspectives, and communities through
        rigorous storytelling and honest reflection.
      </p>
      <a className={styles.heroCta} href="#purpose">
        Explore our mission
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>

    <div className={styles.heroRight}>
      <WorldMap />
    </div>
  </section>
)

// ── Info Card ─────────────────────────────────────────────────────────────────

interface InfoCardProps {
  number: string
  title: string
  id: string
  delay?: string
  children: React.ReactNode
}

const InfoCard = ({ number, title, id, delay = '0s', children }: InfoCardProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={styles.infoCard}
      id={id}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardNumber}>{number}</div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardBody}>{children}</p>
    </div>
  )
}

// ── Sections ──────────────────────────────────────────────────────────────────

const ContentSections = () => (
  <div className={styles.sections}>
    <div className={styles.sectionRule}>
      <span className={styles.sectionRuleText}>Our Foundation</span>
    </div>

    <div className={styles.threeCol}>
      <InfoCard number="01" title="Our Purpose" id="purpose" delay="0s">
        Informing S.A. exists to cut through the noise. In a media landscape
        saturated with external narratives about Africa, we create space for
        those who live the story to tell it. Our purpose is to give South
        Africa — and the wider continent — a mirror it can trust: clear,
        unflinching, and honest.
        <br /><br />
        We believe that informed citizens build stronger societies. Every
        article, every podcast episode, every contributor profile is a step
        toward a more self-aware, better-informed public.
      </InfoCard>

      <InfoCard number="02" title="Our Vision" id="vision" delay="0.1s">
        We envision a Southern Africa where access to quality, locally-grounded
        information is not a privilege but a right. A continent where the
        diversity of its people — across language, province, and perspective —
        is reflected in the media they consume.
        <br /><br />
        Informing S.A. aspires to be the connective tissue between African
        thinkers, writers, and readers worldwide: a network of voices that
        grows stronger with every contributor who joins the conversation.
      </InfoCard>

      <InfoCard number="03" title="What We Do" id="what-we-do" delay="0.2s">
        We publish long-form articles, opinion pieces, and investigative
        writing from contributors across Africa and the diaspora. Through our
        interactive contributor map, readers can discover voices from every
        corner of the continent.
        <br /><br />
        We host <em>The Mirror Sessions</em> — a podcast that goes beyond the
        headline to examine the forces shaping African society. And we build
        community: connecting writers, readers, and thinkers who refuse to
        accept a simplified version of Africa's story.
      </InfoCard>
    </div>
  </div>
)

// ── Quote Band ────────────────────────────────────────────────────────────────

// ── Footer ────────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLogo}>Informing S.A.</div>
    <nav className={styles.footerLinks} aria-label="Footer navigation">
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
)

// ── Home (default export) ─────────────────────────────────────────────────────

const Home = () => (
  <main>
    <Hero />
    <ContentSections />
    <Footer />
  </main>
)

export default Home