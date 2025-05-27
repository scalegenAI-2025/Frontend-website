import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  scrollContainer: {
    display: "flex",
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

  const photos = [
    "https://picsum.photos/300/320?random=1",
    "https://picsum.photos/300/320?random=2",
    "https://picsum.photos/300/320?random=3",
    "https://picsum.photos/300/320?random=4",
    "https://picsum.photos/300/320?random=5",
    "https://picsum.photos/300/320?random=6",
    "https://picsum.photos/300/320?random=7",
    "https://picsum.photos/300/320?random=8",
    "https://picsum.photos/300/320?random=9",
    "https://picsum.photos/300/320?random=10",
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateMaxScroll = () => {
      setMaxScroll(container.scrollWidth - container.clientWidth);
    };

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
      updateMaxScroll();
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

    const imageWidth = 300;
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
