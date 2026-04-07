/**
 * Temporary migration hook for legacy WorldCupApp data access.
 * Reads from the legacy bridge after client mount and remains read-only.
 */

import {useEffect, useState} from 'react';
import {
  getLegacyWorldCupDataSnapshot,
  hasLegacyWorldCupDataBridge
} from './worldCupDataBridge';
import {
  getGroupData,
  getGroupMatches,
  getNewsData,
  getSquads
} from './worldCupDataSelectors';
import {getLegacyDataCounts} from './legacyDataPreview';

const emptySnapshot = {
  groupData: {},
  groupMatches: {},
  squads: {},
  newsData: {}
};

const initialState = {
  isClient: false,
  hasBridge: false,
  snapshot: emptySnapshot,
  groupData: {},
  groupMatches: {},
  squads: {},
  newsData: {},
  counts: {
    groups: 0,
    matches: 0,
    squads: 0,
    newsYears: 0
  }
};

export function useLegacyWorldCupData(){
  const [state, setState] = useState(initialState);

  useEffect(()=>{
    const hasBridge = hasLegacyWorldCupDataBridge();
    const snapshot = getLegacyWorldCupDataSnapshot();
    const groupData = getGroupData(snapshot);
    const groupMatches = getGroupMatches(snapshot);
    const squads = getSquads(snapshot);
    const newsData = getNewsData(snapshot);

    setState({
      isClient: true,
      hasBridge,
      snapshot,
      groupData,
      groupMatches,
      squads,
      newsData,
      counts: getLegacyDataCounts({groupData, groupMatches, squads, newsData})
    });
  }, []);

  return state;
}
