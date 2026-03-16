import styles from './About.module.css'

const About = () => (
  <main className={styles.page}>

    {/* ── Page header ── 
    <div className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>Meet the Founder</h1>
    </div>
*/}
    {/* ── Profile card ── */}
    <div className={styles.card}>

      {/* Left — all info */}
      <div className={styles.infoSide}>

        <p className={styles.founderLabel}>Founder & CEO</p>
        <h2 className={styles.founderName}>Heta Kariuki</h2>

        <p className={styles.bio}>
          Heta Kariuki is the Founder and CEO of Informing S.A. She grew up in Nairobi, Kenya,
          and the vision for Informing S.A. emerged from her own experience with sexual assault,
          after which many women and men began opening up to her about similar experiences.
        </p>
        <p className={styles.bio}>
          Through these conversations and experiences, she came to recognize that trauma is deeply
          complex and often difficult even for practitioners to fully understand, requiring patience,
          compassion, and careful attention. Guided by this understanding, she is committed to
          helping others navigate and make sense of trauma.
        </p>

        {/* ── Four stat boxes ── */}
        <div className={styles.statsGrid}>

          <div className={styles.statBox}>
            <p className={styles.statTitle}>Education</p>
            <p className={styles.statPrimary} style={{ marginTop: '10px' }}>Columbia University</p>
            <p className={styles.statSub}>Major: Psychology · Minor: Mathematics</p>
            <p className={styles.statPrimary}>University of Bristol, England</p>
            <p className={styles.statSub}>Law LLB · Diploma of Higher Education in Law</p>
          </div>

          <div className={styles.statBox}>
            <p className={styles.statTitle}>Training</p>
            <p className={styles.statPrimary}>40-Hour Rape Crisis Counselor</p>
            <p className={styles.statSub}>
              New York State Department of Health Rape Crisis Counselor Training
            </p>
          </div>

          <div className={styles.statBox}>
            <p className={styles.statTitle}>SVR Work</p>
            <p className={styles.statPrimary}>Columbia SVR Peer Advocate</p>
            <p className={styles.statSub}>
              Sexual Violence Response — provides support through 24-hour crisis helpline work
            </p>
          </div>

          <div className={styles.statBox}>
            <p className={styles.statTitle}>Post-Graduate Goals</p>
            <p className={styles.statPrimary}>AASECT Verified</p>
            <p className={styles.statSub}>
              Sexuality Educator and Sex Therapist
            </p>
          </div>

        </div>
      </div>

      {/* Right — photo */}
      <div className={styles.photoSide}>
        <img
          src="/HetaPhoto.jpeg"
          alt="Heta Kariuki — Founder & CEO of Informing S.A."
          className={styles.photo}
        />
      </div>

    </div>

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

export default About
