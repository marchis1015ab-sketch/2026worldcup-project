import { getLegacyDataPreviewModel } from './legacyDataPreview';

export function useLegacyWorldCupPreview({
  snapshot,
  groupData,
  groupMatches,
  squads,
  newsData,
}) {
  return getLegacyDataPreviewModel({
    snapshot,
    groupData,
    groupMatches,
    squads,
    newsData,
  });
}
