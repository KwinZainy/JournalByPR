"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonClass } from "./buttonStyles";

const WHATSAPP_NUMBER = "2349130666766";
const SWIPE_THRESHOLD = 50;

interface DesignCarouselProps {
  images: StaticImageData[];
}

// "Pack of cards": the selected design sits in the centre, neighbours fan out to the
// left and right. Swipe/drag, tap a side card, or use the arrows/arrow keys to change design.
const DesignCarousel = ({ images }: DesignCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const moved = useRef(false);
  const n = images.length;

  const go = (step: number) => setIndex((i) => (i + step + n) % n);

  // Signed distance from the selected card, wrapped so the pack loops both ways.
  const offsetOf = (i: number) => {
    const half = Math.floor(n / 2);
    return ((((i - index) % n) + n + half) % n) - half;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    moved.current = false;
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) moved.current = true;
    setDragX(dx);
  };

  const endDrag = () => {
    if (startX.current === null) return;
    if (dragX <= -SWIPE_THRESHOLD) go(1);
    else if (dragX >= SWIPE_THRESHOLD) go(-1);
    startX.current = null;
    setDragX(0);
    setDragging(false);
  };

  const chooseLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Journals by PA, I love Design ${index + 1} on your website and I’d like a journal designed in this style. I would love to know how it works.`
  )}`;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden h-[calc(min(62vw,340px)*4/3+48px)] outline-none focus-visible:ring-2 focus-visible:ring-[#290303]/40 rounded-2xl select-none touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        aria-roledescription="carousel"
        aria-label="Journal designs"
      >
        {images.map((img, i) => {
          const o = offsetOf(i);
          const abs = Math.abs(o);
          const hidden = abs > 2;
          return (
            <button
              key={i}
              type="button"
              aria-label={o === 0 ? `Design ${i + 1} (selected)` : `Show design ${i + 1}`}
              tabIndex={hidden ? -1 : 0}
              onClick={() => {
                if (!moved.current && o !== 0) setIndex(i);
              }}
              className="absolute left-1/2 top-6 w-[min(62vw,340px)] aspect-3/4 rounded-2xl overflow-hidden bg-white shadow-2xl"
              style={{
                transform: `translateX(calc(-50% + ${o * 48}% + ${dragX}px)) scale(${1 - abs * 0.14}) rotate(${o * 6}deg)`,
                zIndex: 10 - abs,
                opacity: hidden ? 0 : 1 - abs * 0.2,
                pointerEvents: hidden ? "none" : "auto",
                transition: dragging ? "none" : "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              <Image
                src={img}
                alt={`Journal design ${i + 1}`}
                draggable={false}
                className="w-full h-full object-cover"
                sizes="340px"
              />
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-6 mt-4 text-[#290303]">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous design"
          className="p-2 rounded-full border border-[#290303] transition-colors hover:bg-[#290303] hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold text-lg min-w-16 text-center">
          {index + 1} / {n}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next design"
          className="p-2 rounded-full border border-[#290303] transition-colors hover:bg-[#290303] hover:text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-sm text-[#290303]/70 mt-2">
        <span className="tablet:hidden">Swipe to browse designs</span>
        <span className="hidden tablet:inline">Drag, click a card or use the arrows to browse designs</span>
      </p>

      <a href={chooseLink} target="_blank" rel="noopener noreferrer" className={`${buttonClass} mt-6`}>
        Choose This Design
      </a>
    </div>
  );
};

export default DesignCarousel;
