import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  activeIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, activeIndex, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const image = images[activeIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-5xl w-full">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-2 bg-[var(--panel)] text-[var(--text)] text-sm font-semibold border border-[var(--accent-dim)]"
        >
          Close
        </button>
        <img src={image.src} alt={image.alt} className="w-full rounded-subtle shadow-soft" />
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
