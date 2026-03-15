import { useEffect } from 'react';
import { CONTRIBUTOR_PROFILES } from '../data/contributors';
import styles from './ContributorModal.module.css';

interface ContributorModalProps {
  slug: string;
  onClose: () => void;
}

const ContributorModal = ({ slug, onClose }: ContributorModalProps) => {
  const profile = CONTRIBUTOR_PROFILES.find((p) => p.slug === slug);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!profile) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.scrollArea}>

          {/* Photo */}
          <div className={styles.photoWrap}>
            <img
              src={profile.photo}
              alt={profile.name}
              className={styles.photo}
            />
          </div>

          {/* Name + country */}
          <h2 className={styles.name}>{profile.name}</h2>
          <p className={styles.country}>{profile.country}</p>

          {/* Bio */}
          <p className={styles.bio}>{profile.bio}</p>

          {/* Divider */}
          <hr className={styles.divider} />

          {/* Article */}
          <h3 className={styles.articleTitle}>{profile.article.title}</h3>

          {profile.article.sections.map((section, i) => (
            <div key={i} className={styles.section}>
              {section.heading && (
                <h4 className={styles.sectionHeading}>{section.heading}</h4>
              )}
              {section.paragraphs.map((para, j) => (
                <p key={j} className={styles.paragraph}>{para}</p>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ContributorModal;
