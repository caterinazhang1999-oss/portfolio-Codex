"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent
} from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type TrailItem = {
  id: number;
  rotate: number;
  src: string;
  x: number;
  y: number;
};

type TrailPoint = {
  x: number;
  y: number;
};

export function useCapabilityImageTrail(
  imageMap: Record<string, string[]>
) {
  const [trailItems, setTrailItems] = useState<TrailItem[]>([]);
  const activeCapabilityRef = useRef<string | null>(null);
  const idRef = useRef(0);
  const imageIndexRef = useRef(0);
  const lastPointRef = useRef<TrailPoint | null>(null);
  const lastStampRef = useRef(0);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const addTrailItem = useCallback((capability: string, x: number, y: number) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const images = imageMap[capability];

    if (!images?.length) {
      return;
    }

    const id = idRef.current + 1;
    idRef.current = id;

    const imageIndex = imageIndexRef.current % images.length;
    imageIndexRef.current += 1;

    const item: TrailItem = {
      id,
      rotate: ((id % 7) - 3) * 2.4,
      src: images[imageIndex],
      x,
      y
    };

    setTrailItems((current) => [...current.slice(-9), item]);

    const timer = window.setTimeout(() => {
      setTrailItems((current) =>
        current.filter((trailItem) => trailItem.id !== id)
      );
    }, 760);

    timersRef.current.push(timer);
  }, [imageMap]);

  const getTrailHandlers = useCallback(
    (capability: string) => ({
      onMouseEnter: () => {
        activeCapabilityRef.current = capability;
        imageIndexRef.current = 0;
        lastPointRef.current = null;
      },
      onMouseLeave: () => {
        activeCapabilityRef.current = null;
        lastPointRef.current = null;
      },
      onMouseMove: (event: MouseEvent<HTMLElement>) => {
        if (activeCapabilityRef.current !== capability) {
          return;
        }

        const now = performance.now();

        if (now - lastStampRef.current < 46) {
          return;
        }

        const point = {
          x: event.clientX,
          y: event.clientY
        };
        const lastPoint = lastPointRef.current;
        const distance = lastPoint
          ? Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y)
          : 999;

        if (distance < 48) {
          return;
        }

        lastStampRef.current = now;
        lastPointRef.current = point;
        addTrailItem(capability, point.x, point.y);
      }
    }),
    [addTrailItem]
  );

  return {
    getTrailHandlers,
    trailItems
  };
}

export function CapabilityImageTrail({ items }: { items: TrailItem[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div aria-hidden="true" className="capability-trail-layer">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            animate={{
              filter: "blur(0px)",
              opacity: 0.92,
              scale: 1,
              x: item.x - 96,
              y: item.y - 72
            }}
            className="capability-trail-item"
            exit={{
              filter: "blur(16px)",
              opacity: 0,
              scale: 0.78,
              transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            }}
            initial={{
              filter: "blur(8px)",
              opacity: 0,
              scale: 0.92,
              x: item.x - 96,
              y: item.y - 72
            }}
            key={item.id}
            style={{ rotate: item.rotate }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="192px"
              src={item.src}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
