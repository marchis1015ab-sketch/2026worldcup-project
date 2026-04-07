'use client';

import {useLegacyWorldCupData} from '../src/data/useLegacyWorldCupData';
import { useLegacyWorldCupStatus } from '../src/data/useLegacyWorldCupStatus';
import { useLegacyWorldCupPreview } from '../src/data/useLegacyWorldCupPreview';

const plannedLayers = ['data', 'render', 'events', 'store', 'modal'];

export default function Page(){
  const legacyData = useLegacyWorldCupData();
  const {isClient, hasBridge, snapshot} = legacyData;
  const status = useLegacyWorldCupStatus({
    isClient,
    hasBridge,
    snapshot,
  });
  const {groupData, groupMatches, squads, newsData} = legacyData;
  const preview = useLegacyWorldCupPreview({
    snapshot,
    groupData,
    groupMatches,
    squads,
    newsData,
  });

  return (
    <main className="page">
      <div className="panel">
        <p className="eyebrow">Next.js migration start</p>
        <h1>2026 World Cup migration workspace</h1>
        <p className="body">
          This folder is a safe migration scaffold. The legacy browser app remains unchanged
          and is still the current source of truth.
        </p>
        <div className="card">
          <p className="label">Planned layers</p>
          <ul className="list">
            {plannedLayers.map(layer=>(
              <li key={layer}>{layer}</li>
            ))}
          </ul>
        </div>
        <div className="card" style={{marginTop:20}}>
          <p className="label">Legacy data bridge</p>
          <p className="body" style={{marginBottom:12}}>
            {status.label}
          </p>
          <p className="body" style={{marginBottom:8}}>
            {status.previewLabel}
          </p>
          <p className="body" style={{marginBottom:0}}>
            Snapshot preview: groups {preview.counts.groups}, matches {preview.counts.matches}, squads {preview.counts.squads}, news years {preview.counts.newsYears}
          </p>
        </div>
        <p className="body" style={{marginTop:20, marginBottom:0}}>
          Migration note: this page only verifies a temporary read-only bridge and does not replace the legacy app.
        </p>
      </div>
    </main>
  );
}
