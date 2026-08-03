"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./HorizontalTableScroller.module.scss";

export default function HorizontalTableScroller({ children, label }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const viewportId = useId();
  const [metrics, setMetrics] = useState({ visible: false, left: 0, width: 0, value: 0 });

  const updateMetrics = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const scrollMax = viewport.scrollWidth - viewport.clientWidth;
    if (scrollMax <= 1) {
      setMetrics({ visible: false, left: 0, width: track.clientWidth, value: 0 });
      return;
    }

    const width = Math.max(52, track.clientWidth * (viewport.clientWidth / viewport.scrollWidth));
    const travel = Math.max(0, track.clientWidth - width);
    const ratio = viewport.scrollLeft / scrollMax;
    setMetrics({ visible: true, left: travel * ratio, width, value: Math.round(ratio * 100) });
  }, []);

  useEffect(() => {
    updateMetrics();
    const observer = new ResizeObserver(updateMetrics);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [updateMetrics]);

  const handlePointerDown = (event) => {
    const viewport = viewportRef.current;
    if (!viewport || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, scrollLeft: viewport.scrollLeft };
  };

  const handlePointerMove = (event) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!viewport || !track || !drag || drag.pointerId !== event.pointerId) return;

    const travel = track.clientWidth - metrics.width;
    const scrollMax = viewport.scrollWidth - viewport.clientWidth;
    if (travel > 0) viewport.scrollLeft = drag.scrollLeft + ((event.clientX - drag.x) * scrollMax) / travel;
  };

  const stopDragging = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
  };

  const handleKeyDown = (event) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const step = Math.max(80, viewport.clientWidth * 0.2);

    if (event.key === "ArrowRight") viewport.scrollBy({ left: step });
    else if (event.key === "ArrowLeft") viewport.scrollBy({ left: -step });
    else if (event.key === "Home") viewport.scrollTo({ left: 0 });
    else if (event.key === "End") viewport.scrollTo({ left: viewport.scrollWidth });
    else return;

    event.preventDefault();
  };

  return (
    <div className={styles.scroller}>
      <div
        id={viewportId}
        ref={viewportRef}
        className={styles.viewport}
        tabIndex={0}
        aria-label={label}
        onScroll={updateMetrics}
      >
        {children}
      </div>
      <div ref={trackRef} className={styles.track} hidden={!metrics.visible}>
        <button
          type="button"
          className={styles.thumb}
          role="scrollbar"
          aria-label={`${label} 가로 스크롤`}
          aria-controls={viewportId}
          aria-orientation="horizontal"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={metrics.value}
          style={{ width: `${metrics.width}px`, transform: `translateX(${metrics.left}px)` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
