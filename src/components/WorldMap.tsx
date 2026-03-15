import { useState, useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import type { CountryData } from '../types/map';
import { COUNTRIES } from '../data/countries';
import ContributorModal from './ContributorModal';
import styles from './WorldMap.module.css';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MIN_ZOOM = 1;
const MAX_ZOOM = 10;

// ── Contributor Box ───────────────────────────────────────────────────────────

interface ContributorBoxProps {
  country: CountryData;
  onClose: () => void;
  onSelectContributor: (slug: string) => void;
}

const ContributorBox = ({ country, onClose, onSelectContributor }: ContributorBoxProps) => (
  <div className={styles.contributorBox}>
    <div className={styles.boxHeader}>
      <span className={styles.boxCountryName}>{country.geoName}</span>
      <button className={styles.boxClose} onClick={onClose} aria-label="Close">
        ✕
      </button>
    </div>
    <p className={styles.boxSubtitle}>Blog Contributors</p>
    <ul className={styles.contributorList}>
      {country.contributors.length === 0 ? (
        <li>
          <span className={styles.boxEmpty}>No contributors yet — be the first!</span>
        </li>
      ) : (
        country.contributors.map((c) => (
          <li key={c.slug}>
            <button
              className={styles.contributorBtn}
              onClick={() => onSelectContributor(c.slug)}
            >
              {c.name}
            </button>
          </li>
        ))
      )}
    </ul>
  </div>
);

// ── Tooltip ───────────────────────────────────────────────────────────────────

interface TooltipState {
  name: string;
  x: number;
  y: number;
}

// ── Zoom Controls ─────────────────────────────────────────────────────────────

interface ZoomControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

const ZoomControls = ({ zoom, onZoomIn, onZoomOut, onReset }: ZoomControlsProps) => (
  <div className={styles.zoomControls}>
    <button
      className={styles.zoomBtn}
      onClick={onZoomIn}
      disabled={zoom >= MAX_ZOOM}
      aria-label="Zoom in"
    >
      +
    </button>
    <button
      className={styles.zoomBtn}
      onClick={onReset}
      aria-label="Reset zoom"
      title="Reset"
    >
      ⊙
    </button>
    <button
      className={styles.zoomBtn}
      onClick={onZoomOut}
      disabled={zoom <= MIN_ZOOM}
      aria-label="Zoom out"
    >
      −
    </button>
  </div>
);

// ── WorldMap ──────────────────────────────────────────────────────────────────

const WorldMap = () => {
  const [selected, setSelected]           = useState<CountryData | null>(null);
  const [tooltip, setTooltip]             = useState<TooltipState | null>(null);
  const [zoom, setZoom]                   = useState(1);
  const [center, setCenter]               = useState<[number, number]>([15, 10]);
  const [activeSlug, setActiveSlug]       = useState<string | null>(null);

  const handleCountryClick = useCallback((geoName: string) => {
    const match = COUNTRIES.find((c) => c.geoName === geoName);
    if (!match) return;
    setSelected((prev) => (prev?.id === match.id ? null : match));
  }, []);

  const handleMouseEnter = useCallback(
    (evt: React.MouseEvent<SVGPathElement>, name: string) => {
      const rect = (evt.currentTarget.closest('svg') as SVGSVGElement)
        ?.getBoundingClientRect();
      if (!rect) return;
      setTooltip({ name, x: evt.clientX - rect.left, y: evt.clientY - rect.top });
    },
    []
  );

  const handleMouseMove = useCallback(
    (evt: React.MouseEvent<SVGPathElement>) => {
      const rect = (evt.currentTarget.closest('svg') as SVGSVGElement)
        ?.getBoundingClientRect();
      if (!rect) return;
      setTooltip((prev) =>
        prev ? { ...prev, x: evt.clientX - rect.left, y: evt.clientY - rect.top } : null
      );
    },
    []
  );

  const handleMouseLeave = useCallback(() => setTooltip(null), []);

  const zoomIn  = () => setZoom((z) => Math.min(z * 1.6, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z / 1.6, MIN_ZOOM));
  const reset   = () => { setZoom(1); setCenter([15, 10]); };

  const hasContributors = (geoName: string) =>
    COUNTRIES.some((c) => c.geoName === geoName && c.contributors.length > 0);

  const isSelected = (geoName: string) => selected?.geoName === geoName;

  return (
    <>
      <div className={styles.mapContainer}>
        <p className={styles.mapLabel}>Global Contributors — Click a country</p>

        <div className={styles.mapFrame}>
          <ComposableMap
            projectionConfig={{ scale: 140, center }}
            width={800}
            height={450}
            style={{ width: '100%', height: '100%' }}
          >
            <ZoomableGroup
              zoom={zoom}
              center={center}
              minZoom={MIN_ZOOM}
              maxZoom={MAX_ZOOM}
              onMoveEnd={({ zoom: z, coordinates }) => {
                setZoom(z);
                setCenter(coordinates);
              }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name: string = geo.properties.name;
                    const active      = isSelected(name);
                    const contributor = hasContributors(name);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleCountryClick(name)}
                        onMouseEnter={(e) => handleMouseEnter(e, name)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          default: {
                            fill: active
                              ? 'var(--crimson-dark)'
                              : contributor
                              ? 'var(--crimson)'
                              : 'var(--blush-mid)',
                            stroke: 'white',
                            strokeWidth: 0.5,
                            outline: 'none',
                            cursor: 'pointer',
                            transition: 'fill 0.15s',
                          },
                          hover: {
                            fill: active ? 'var(--crimson-dark)' : 'var(--crimson)',
                            stroke: 'white',
                            strokeWidth: 0.8,
                            outline: 'none',
                            cursor: 'pointer',
                          },
                          pressed: {
                            fill: 'var(--crimson-dark)',
                            stroke: 'white',
                            strokeWidth: 0.5,
                            outline: 'none',
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {tooltip && (
            <div
              className={styles.tooltip}
              style={{ left: tooltip.x + 12, top: tooltip.y - 32 }}
            >
              {tooltip.name}
            </div>
          )}

          {/* Contributor box */}
          {selected && (
            <ContributorBox
              country={selected}
              onClose={() => setSelected(null)}
              onSelectContributor={(slug) => setActiveSlug(slug)}
            />
          )}

          {/* Zoom controls */}
          <ZoomControls
            zoom={zoom}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={reset}
          />
        </div>

        <p className={styles.mapHint}>
          Scroll or use + / − to zoom · Drag to pan · Click a country to see contributors
        </p>
      </div>

      {/* Full-screen contributor modal */}
      {activeSlug && (
        <ContributorModal
          slug={activeSlug}
          onClose={() => setActiveSlug(null)}
        />
      )}
    </>
  );
};

export default WorldMap;