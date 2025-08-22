import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createUseStyles } from "react-jss";
import ai1 from "../../../assets/ai1.jpg";
import ai2 from "../../../assets/ai2.jpg";
import ai3 from "../../../assets/ai3.jpg";
import ai4 from "../../../assets/ai4.jpg";
import ai5 from "../../../assets/ai5.jpg";
import ai6 from "../../../assets/bank.jpg";
import ai7 from "../../../assets/auto.jpg";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "2000px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  scrollContainer: {
    display: "flex",
    justifyContent: "center", // ✅ centers images if fewer than container width
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    gap: "0",
    cursor: "pointer",
  },
  image: {
    width: "300px",
    height: "320px",
    objectFit: "cover",
    flexShrink: 0,
    display: "block",
  },
  arrow: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      transform: "scale(1.1)",
    },
  },
  leftArrow: {
    left: "20px",
  },
  rightArrow: {
    right: "20px",
  },
  "@global": {
    ".photo-scroller::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const PhotoScroller = () => {
  const classes = useStyles();
  const [leftArrow, setLeftArrow] = useState({ top: 0, visible: false });
  const [rightArrow, setRightArrow] = useState({ top: 0, visible: false });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const photos = [ai1, ai2, ai3, ai4, ai5, ai7, ai6];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateMaxScroll = () => {
      // prevent negative values (on big screens with fewer images)
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      setMaxScroll(max);
    };

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateMaxScroll);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth = container.querySelector("img")?.clientWidth || 300; // ✅ dynamic width
    const currentScroll = container.scrollLeft;
    let targetScroll = currentScroll;

    if (direction === "left") {
      targetScroll = Math.max(0, currentScroll - imageWidth);
    } else {
      targetScroll = Math.min(maxScroll, currentScroll + imageWidth);
    }

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const containerWidth = rect.width;

    const arrowHeight = 50;
    let top = y - arrowHeight / 2;
    top = Math.max(0, Math.min(top, rect.height - arrowHeight));

    if (x < containerWidth / 2) {
      setLeftArrow({ top, visible: scrollPosition > 0 });
      setRightArrow((prev) => ({ ...prev, visible: false }));
    } else {
      setRightArrow({ top, visible: scrollPosition < maxScroll });
      setLeftArrow((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleMouseLeave = () => {
    setLeftArrow((prev) => ({ ...prev, visible: false }));
    setRightArrow((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className={classes.container}>
      <div
        ref={scrollContainerRef}
        className={`${classes.scrollContainer} photo-scroller`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={classes.image}
            draggable={false}
          />
        ))}
      </div>

      <button
        className={`${classes.arrow} ${classes.leftArrow}`}
        style={{
          top: `${leftArrow.top}px`,
          opacity: leftArrow.visible ? 1 : 0,
          visibility: leftArrow.visible ? "visible" : "hidden",
        }}
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} color="#333" />
      </button>

      <button
        className={`${classes.arrow} ${classes.rightArrow}`}
        style={{
          top: `${rightArrow.top}px`,
          opacity: rightArrow.visible ? 1 : 0,
          visibility: rightArrow.visible ? "visible" : "hidden",
        }}
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} color="#333" />
      </button>
    </div>
  );
};

export default PhotoScroller;
