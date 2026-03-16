import { useEffect, useRef } from 'react'
import WorldMap from '../components/WorldMap'
import styles from './Home.module.css'

// ── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroLeft}>
      <p className={styles.heroEyebrow}>Sex · Intimacy · Interpersonal Relationships</p>
      <h1 className={styles.heroTitle}>
        Informing<br /><em>S.A.</em>
      </h1>
      <p className={styles.heroSubtitle}>Kiss the Mirror</p>
      <p className={styles.heroDesc}>
        Welcome to Informing S.A., a global organization dedicated to examining
        sex, intimacy, and interpersonal relationships with rigor and care.
      </p>
      <a className={styles.heroCta} href="#mission">
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
      <div className={styles.cardBody}>{children}</div>
    </div>
  )
}

// ── What We Do Card ───────────────────────────────────────────────────────────

interface WwdItemProps {
  label: string
  desc: string
}

const WwdItem = ({ label, desc }: WwdItemProps) => (
  <div className={styles.wwdItem}>
    <span className={styles.wwdLabel}>{label}</span>
    <p className={styles.wwdDesc}>{desc}</p>
  </div>
)

// ── Sections ──────────────────────────────────────────────────────────────────

const ContentSections = () => (
  <div className={styles.sections}>
    <div className={styles.sectionRule}>
      <span className={styles.sectionRuleText}>Our Foundation</span>
    </div>

    <div className={styles.threeCol}>

      <InfoCard number="01" title="Mission" id="mission" delay="0s">
        <p>
          Informing S.A. functions as a transitory institution informing how we approach not only
          sexual assault but the broader architecture of intimacy, sex and interpersonal relationships.
        </p>
        <br />
        <p>
          We advance that healthy interpersonal relationships are not ancillary to success but its
          very root. As such, they warrant rigorous, compassionate inquiry.
        </p>
      </InfoCard>

      <InfoCard number="02" title="Vision" id="vision" delay="0.1s">
        <p>
          Informing S.A. envisions a society where healthy interpersonal relationships, particularly
          those involving sex and intimacy, form the foundation of social life, and where individuals
          are equipped with the knowledge, language, and relational tools to build relationships
          grounded in trust, consent, accountability, and care.
        </p>
        <br />
        <p>
          We strive to build a world where people understand sex, intimacy, trauma, and relational
          responsibility, and where healthier relationships strengthen the home, the workplace, and
          social institutions, helping individuals and communities move from fracture to function and
          creating stronger, healthier societies.
        </p>
      </InfoCard>

      <InfoCard number="03" title="What We Do" id="what-we-do" delay="0.2s">
        <WwdItem
          label="Education"
          desc="Develop sexual relationship curricula that teach consent, trauma-informed intimacy, and the foundations of healthy interpersonal relationships."
        />
        <WwdItem
          label="Information"
          desc="Translate academic and clinical research on sexual health and relationship dynamics into accessible public knowledge through media and educational platforms."
        />
        <WwdItem
          label="Research"
          desc="Conduct and synthesize research on sexual health, sexual assault, relational trust, and the social conditions that shape healthy relationships."
        />
        <WwdItem
          label="Dialogue"
          desc="Facilitate informed conversations with professors, therapists, physicians, and authors to examine intimacy, consent, masculinity, trauma recovery, and relationship repair."
        />
      </InfoCard>

    </div>
  </div>
)

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