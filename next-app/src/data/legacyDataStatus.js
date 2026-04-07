export function getLegacyDataStatus({ isClient, hasBridge, snapshot }) {
  if (!isClient) {
    return {
      code: 'client-loading',
      label: 'Client mounting...',
      previewLabel: 'Preview unavailable until client mount',
    };
  }

  if (!hasBridge) {
    return {
      code: 'bridge-missing',
      label: 'Legacy bridge not detected',
      previewLabel: 'Preview unavailable: bridge not detected',
    };
  }

  if (!snapshot) {
    return {
      code: 'snapshot-empty',
      label: 'Legacy data not found',
      previewLabel: 'Preview unavailable: no legacy snapshot',
    };
  }

  return {
    code: 'ready',
    label: 'Legacy bridge detected',
    previewLabel: 'Legacy preview ready',
  };
}
