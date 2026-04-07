import { getLegacyDataStatus } from './legacyDataStatus';

export function useLegacyWorldCupStatus({ isClient, hasBridge, snapshot }) {
  return getLegacyDataStatus({
    isClient,
    hasBridge,
    snapshot,
  });
}
