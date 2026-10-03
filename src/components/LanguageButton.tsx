import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './LanguageButton.css';

const DRAG_THRESHOLD = 6;

interface DragState {
  startX: number;
  startY: number;
  baseX: number;
  baseY: number;
  moved: boolean;
}

export default function LanguageButton() {
  const { lang, toggleLanguage, tStr } = useLanguage();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<DragState | null>(null);

  const isEnglish = lang === 'en';
  const targetCode = isEnglish ? 'ES' : 'EN';
  const labelKey: TranslationKey = isEnglish ? 'lang.toEs' : 'lang.toEn';
  const label = tStr(labelKey);

  const onPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: pos.x,
      baseY: pos.y,
      moved: false,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const s = dragRef.current;
    if (!s) return;
    const dx = e.clientX - s.startX;
    const dy = e.clientY - s.startY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      s.moved = true;
    }
    setPos({ x: s.baseX + dx, y: s.baseY + dy });
  };

  const onPointerUp = () => {
    const s = dragRef.current;
    dragRef.current = null;
    setDragging(false);
    if (s && !s.moved) toggleLanguage();
  };

  return (
    <button
      type="button"
      className={`language-btn${dragging ? ' language-btn--dragging' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      aria-label={label}
      title={label}
    >
      <FiGlobe className="language-btn__icon" size={18} />
      <span className="language-btn__code">{targetCode}</span>
    </button>
  );
}