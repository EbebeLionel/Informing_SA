import { useState, useRef } from 'react';
import type { NavItem } from '../types/nav';
import { NAV_ITEMS } from '../data/navItems';
import styles from './Header.module.css';

// ── NavItemComponent ────────────────────────────────────────────────────────

interface NavItemComponentProps {
  item: NavItem;
}

const NavItemComponent = ({ item }: NavItemComponentProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className={styles.navItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={item.href ?? '#'} className={styles.navLink}>
        {item.label}
      </a>
      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
        {item.sections.map((section) => (
          <div key={section.sectionLabel} className={styles.dropdownSection}>
            <span className={styles.dropdownLabel}>{section.sectionLabel}</span>
            {section.items.map((di) =>
              di.description ? (
                <span key={di.label} className={styles.dropdownDesc}>
                  {di.description}
                </span>
              ) : (
                <a key={di.label} href={di.href ?? '#'} className={styles.dropdownLink}>
                  {di.label}
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Header ──────────────────────────────────────────────────────────────────

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoMain}>Informing S.A.</span>
        <span className={styles.logoSub}>Kiss the Mirror</span>
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <NavItemComponent key={item.label} item={item} />
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
