import ParallaxAsset from "./ParallaxAsset.jsx";
import { sceneAssets } from "../data/sceneAssets.js";

export default function SceneVisual({ sceneKey, selectedChoiceId, eager = false, className = "" }) {
  const assets = sceneAssets[sceneKey] ?? [];

  if (!assets.length) return null;

  return (
    <div className={`scene-visual scene-visual--${sceneKey} ${className}`.trim()} aria-hidden="true" data-selected-choice={selectedChoiceId ?? ""}>
      {assets.map((asset, index) => (
        <ParallaxAsset
          {...asset}
          eager={Boolean(asset.eager || (eager && index === 0))}
          key={`${sceneKey}-${asset.src}-${asset.className}`}
        />
      ))}
    </div>
  );
}
