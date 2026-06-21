export default function ParallaxAsset({
  src,
  className = "",
  depth = 0.35,
  horizontalDepth,
  rotate = 0,
  startX = 0,
  startY = 0,
  opacity = 1,
  scale = 1,
  reverse = false,
  entranceDelay = 0,
  reactTo = [],
  muteOn = [],
  eager = false,
  layer = "midground"
}) {
  const loading = eager ? "eager" : "lazy";
  const priorityProps = eager ? { fetchpriority: "high" } : {};

  return (
    <div
      className={`asset-entrance-wrapper ${className}`.trim()}
      data-asset-layer={layer}
      data-entrance-delay={entranceDelay}
      data-choice-reaction={reactTo.join(" ")}
      data-choice-muted={muteOn.join(" ")}
    >
      <img
        className="parallax-asset"
        src={src}
        alt=""
        aria-hidden="true"
        draggable="false"
        loading={loading}
        {...priorityProps}
        data-parallax-asset="true"
        data-depth={depth}
        data-horizontal-depth={horizontalDepth ?? depth * 0.35}
        data-rotate={rotate}
        data-start-x={startX}
        data-start-y={startY}
        data-scale={scale}
        data-reverse={reverse ? "true" : "false"}
        style={{
          opacity,
          transform: `translate3d(${startX}px, ${startY}px, 0) rotate(0deg) scale(${scale})`
        }}
      />
    </div>
  );
}
