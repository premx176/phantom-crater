"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 240;

const CanvasSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Apply a spring to the scroll progress for velocity dampening and smooth lerping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001,
  });

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Update canvas size on resize
  useEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return;
      
      // Cap DPR at 2.0 to balance sharpness vs performance on mobile
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      setCanvasSize({
        width: window.innerWidth * dpr,
        height: window.innerHeight * dpr
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT && canvasSize.width > 0) {
          renderFrame(1);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, [canvasSize.width]); // Re-trigger only if size was 0 initially

  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length < FRAME_COUNT || canvasSize.width === 0) return;
    
    const i = Math.max(0, Math.min(index - 1, FRAME_COUNT - 1));
    const img = imagesRef.current[i];
    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: no alpha channel needed
    if (!ctx) return;

    // Use current state size instead of recalculating on every frame
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // High quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }
    
    // Draw background color first to avoid flickering
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const nextFrameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latest * FRAME_COUNT) + 1));
    requestAnimationFrame(() => renderFrame(nextFrameIndex));
  });

  // Re-render when size changes (e.g. orientation change)
  useEffect(() => {
    if (imagesLoaded === FRAME_COUNT) {
      const latest = scrollYProgress.get();
      const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latest * FRAME_COUNT) + 1));
      renderFrame(frameIndex);
    }
  }, [canvasSize, imagesLoaded]);

  if (imagesLoaded < FRAME_COUNT) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-evBlack text-white z-[100]">
        <div className="text-2xl font-light mb-4">Loading Experience</div>
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-evBlue transition-all duration-300"
            style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%`}}
          />
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none will-change-transform"
      style={{ touchAction: "none" }}
    />
  );
};

export default CanvasSequence;
