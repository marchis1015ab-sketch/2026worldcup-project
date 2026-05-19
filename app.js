const navDirectButtons = document.querySelectorAll(".nav-direct");
const navToggleButtons = document.querySelectorAll(".nav-toggle");
const navGroups = document.querySelectorAll(".nav-group");
const navSubItems = document.querySelectorAll(".nav-subitem");
const menuLaunchButtons = document.querySelectorAll(".menu-launch");
const quickActionButtons = document.querySelectorAll(".quick-button");
const dashboardViews = document.querySelectorAll(".dashboard-view");
const stageTabs = document.querySelectorAll(".stage-tab");
const toastShell = document.getElementById("toast-shell");
const mainTimelinePanel = document.getElementById("panel-main-match");
const scheduleBridgeFrame = document.getElementById("schedule-bridge-frame");
const scheduleBridgeSyncFrame = document.getElementById("schedule-bridge-sync-frame");
const scheduleBridgeFrameShell = document.getElementById("schedule-bridge-frame-shell");
const scheduleBridgeLoading = document.getElementById("schedule-bridge-loading");
const scheduleBridgeButtons = document.querySelectorAll("[data-schedule-bridge-nav]");
const scheduleLocalTimelineShell = document.getElementById("schedule-local-timeline-shell");
const scheduleLocalSharedShell = document.getElementById("schedule-local-shared-shell");
const scheduleLocalPersonalShell = document.getElementById("schedule-local-personal-shell");
const scheduleLocalAccumulatedShell = document.getElementById("schedule-local-accumulated-shell");
const sharedScheduleComposerPanel = document.getElementById("shared-schedule-composer-panel");
const sharedScheduleCreateButton = document.getElementById("shared-schedule-create-button");
const sharedScheduleDateInput = document.getElementById("shared-schedule-date-input");
const sharedScheduleContentInput = document.getElementById("shared-schedule-content-input");
const sharedScheduleFileInput = document.getElementById("shared-schedule-file-input");
const sharedSchedulePreview = document.getElementById("shared-schedule-preview");
const sharedScheduleSaveButton = document.getElementById("shared-schedule-save-button");
const sharedScheduleCancelButton = document.getElementById("shared-schedule-cancel-button");
const sharedScheduleDeleteModeButton = document.getElementById("shared-schedule-delete-mode-button");
const sharedScheduleDeleteConfirmButton = document.getElementById("shared-schedule-delete-confirm-button");
const sharedScheduleList = document.getElementById("shared-schedule-list");
const sharedScheduleListMeta = document.getElementById("shared-schedule-list-meta");
const sharedScheduleDetailModal = document.getElementById("shared-schedule-detail-modal");
const sharedScheduleDetailTitle = document.getElementById("shared-schedule-detail-title");
const sharedScheduleDetailDate = document.getElementById("shared-schedule-detail-date");
const sharedScheduleDetailContent = document.getElementById("shared-schedule-detail-content");
const sharedScheduleDetailMeta = document.getElementById("shared-schedule-detail-meta");
const sharedScheduleDetailAttachments = document.getElementById("shared-schedule-detail-attachments");
const sharedScheduleFilePreviewModal = document.getElementById("shared-schedule-file-preview-modal");
const sidebarHomeButton = document.getElementById("sidebar-home-button");
const sharedScheduleFilePreviewTitle = document.getElementById("shared-schedule-file-preview-title");
const sharedScheduleFilePreviewType = document.getElementById("shared-schedule-file-preview-type");
const sharedScheduleFilePreviewBody = document.getElementById("shared-schedule-file-preview-body");
const sharedScheduleFilePreviewActions = document.getElementById("shared-schedule-file-preview-actions");
const personalScheduleComposerPanel = document.getElementById("personal-schedule-composer-panel");
const personalScheduleCreateButton = document.getElementById("personal-schedule-create-button");
const personalScheduleSaveButton = document.getElementById("personal-schedule-save-button");
const personalScheduleCancelButton = document.getElementById("personal-schedule-cancel-button");
const personalScheduleDateInput = document.getElementById("personal-schedule-date-input");
const personalScheduleNameInput = document.getElementById("personal-schedule-name-input");
const personalSchedulePhotographerInput = document.getElementById("personal-schedule-photographer-input");
const personalScheduleReporterInput = document.getElementById("personal-schedule-reporter-input");
const personalScheduleLocalTimeInput = document.getElementById("personal-schedule-local-time-input");
const personalScheduleKoreaTimeInput = document.getElementById("personal-schedule-korea-time-input");
const personalScheduleTaskInput = document.getElementById("personal-schedule-task-input");
const personalSchedulePlaceInput = document.getElementById("personal-schedule-place-input");
const personalScheduleTvuInput = document.getElementById("personal-schedule-tvu-input");
const personalScheduleTrsInput = document.getElementById("personal-schedule-trs-input");
const personalScheduleEndTimeInput = document.getElementById("personal-schedule-end-time-input");
const personalScheduleOpenEndInput = document.getElementById("personal-schedule-open-end-input");
const personalScheduleList = document.getElementById("personal-schedule-list");
const accumulatedScheduleList = document.getElementById("accumulated-schedule-list");
const accumulatedScheduleListMeta = document.getElementById("accumulated-schedule-list-meta");
const personalScheduleExportButton = document.getElementById("personal-schedule-export-button");
const personalScheduleDetailModal = document.getElementById("personal-schedule-detail-modal");
const personalScheduleDetailDate = document.getElementById("personal-schedule-detail-date");
const personalScheduleDetailTitle = document.getElementById("personal-schedule-detail-title");
const personalScheduleDetailBody = document.getElementById("personal-schedule-detail-body");
const storageBridgeFrame = document.getElementById("storage-bridge-frame");
const storageBridgeFrameShell = document.getElementById("storage-bridge-frame-shell");
const storageBridgeLoading = document.getElementById("storage-bridge-loading");
const storageBridgeButtons = document.querySelectorAll("[data-storage-bridge-nav]");
const archiveSuitToolbar = document.querySelector("#view-archive .archive-suit-toolbar");
const archiveSuitPanels = document.querySelectorAll("[data-archive-suit-panel]");
const archiveSuitCreateMenu = document.querySelector("[data-archive-create-menu]");
const archiveSuitCreateTargets = document.querySelectorAll("[data-archive-create-target]");
const archiveSuitActionButtons = document.querySelectorAll("[data-archive-action]");
const mediaBridgeFrame = document.getElementById("media-bridge-frame");
const mediaBridgeFrameShell = document.getElementById("media-bridge-frame-shell");
const mediaBridgeLoading = document.getElementById("media-bridge-loading");
const mediaBridgeButtons = document.querySelectorAll("[data-media-bridge-nav]");
const opsBridgeFrame = document.getElementById("ops-bridge-frame");
const opsBridgeFrameShell = document.getElementById("ops-bridge-frame-shell");
const opsBridgeLoading = document.getElementById("ops-bridge-loading");
const opsBridgeButtons = document.querySelectorAll("[data-ops-bridge-nav]");
const matchBridgeFrame = document.getElementById("match-bridge-frame");
const matchBridgeFrameShell = document.getElementById("match-bridge-frame-shell");
const matchBridgeLoading = document.getElementById("match-bridge-loading");
const matchBridgeButtons = document.querySelectorAll("[data-match-bridge-nav]");
const mapBridgeFrame = document.getElementById("map-bridge-frame");
const mapBridgeFrameShell = document.getElementById("map-bridge-frame-shell");
const mapBridgeLoading = document.getElementById("map-bridge-loading");
const mapBridgeButtons = document.querySelectorAll("[data-map-bridge-nav]");
const matchShellModeButtons = document.querySelectorAll("[data-match-shell-mode]");
const matchGroupButtons = document.querySelectorAll("[data-match-group-key]");
const matchKnockoutButtons = document.querySelectorAll("[data-match-knockout-stage]");
const matchSquadButtons = document.querySelectorAll("[data-match-squad-key]");
const matchGroupToolbar = document.getElementById("match-group-stage-toolbar");
const matchKnockoutToolbar = document.getElementById("match-knockout-stage-toolbar");
const matchSquadToolbar = document.getElementById("match-squad-toolbar");
const matchScheduleSwipeSurface = document.querySelector("#view-match-schedule .panel-body");
const matchSquadEmptyShell = document.getElementById("match-squad-empty-shell");
const matchGroupAFormShell = document.getElementById("match-group-a-form-shell");
const matchGroupAFormStatus = document.getElementById("match-group-a-form-status");
const matchGroupAFormStandings = document.getElementById("match-group-a-form-standings");
const matchGroupAFormMatches = document.getElementById("match-group-a-form-matches");
const matchGroupAMatchesPanel = document.querySelector("#match-group-a-form-shell .group-a-matches-panel");
const matchGroupAMatchesSplit = document.getElementById("match-group-a-matches-split");
const matchGroupAHeaderFlags = document.getElementById("match-group-a-header-flags");
const matchGroupAHeaderTitle = document.querySelector("#match-group-a-form-shell .group-a-header-title h4");
const matchGroupAEngineToggle = document.getElementById("match-group-a-engine-toggle");
// [Z-TEST-START] 3위순위 임시 테스트
const matchZThirdPlaceTestShell = document.getElementById("match-z-third-place-test-shell");
const matchZThirdPlaceTestHeaderTitle = document.querySelector("#match-z-third-place-test-shell .group-a-header-title h4");
const matchZThirdPlaceTestTableWrap = document.getElementById("match-z-third-place-test-table-wrap");
// [Z-TEST-END] 3위순위 임시 테스트
const matchResultsShell = document.getElementById("match-results-shell");
const matchResultsTitle = document.getElementById("match-results-title");
const matchResultsMeta = document.getElementById("match-results-meta");
const matchResultsList = document.getElementById("match-results-list");
const mediaNewsYearButtons = document.querySelectorAll("[data-media-news-year]");
const mediaNewsYearToolbar = document.getElementById("media-news-year-toolbar");
const mapStadiumToolbar = document.getElementById("map-stadium-toolbar");
const mapStadiumCatalogShell = document.getElementById("map-stadium-catalog-shell");
const mapStadiumCatalogGrid = document.getElementById("map-stadium-catalog-grid");
const mapStadiumCatalogEmpty = document.getElementById("map-stadium-catalog-empty");
const mainMapCardTabButtons = document.querySelectorAll("[data-main-map-card-tab]");
const broadcastSlideButtons = document.querySelectorAll("[data-broadcast-slide-nav]");
const timelineActionButtons = document.querySelectorAll("[data-timeline-action]");
const timelineNavButtons = document.querySelectorAll("[data-timeline-nav]");
const timelineEntryModal = document.getElementById("timeline-entry-modal");
const timelineManageModal = document.getElementById("timeline-manage-modal");
const timelineManageList = document.getElementById("timeline-manage-list");
const timelineEntryIdInput = document.getElementById("timeline-entry-id");
const timelineEntryNameInput = document.getElementById("timeline-entry-name");
const timelineEntryStartInput = document.getElementById("timeline-entry-start");
const timelineEntryEndInput = document.getElementById("timeline-entry-end");
const timelineEntryPlaceInput = document.getElementById("timeline-entry-place");
const timelineEntryMemoInput = document.getElementById("timeline-entry-memo");
const timelineEntrySaveButton = document.getElementById("timeline-entry-save");
const timelineTooltipShell = document.getElementById("timeline-tooltip-shell");
const topbarLocalTimeNode = document.getElementById("new-suit-local-time");
const topbarSeoulTimeNode = document.getElementById("new-suit-seoul-time");
const mobileHeaderLocalTimeNode = document.getElementById("new-suit-mobile-local-time");
const mobileHeaderSeoulTimeNode = document.getElementById("new-suit-mobile-seoul-time");
const mobileHeaderDdayNode = document.getElementById("new-suit-mobile-dday");
const mobileSectionBackButton = document.getElementById("mobile-section-back");
const mobileHomeMatchPreview = document.getElementById("mobile-home-match-preview");
const mobileHomeMatchPreviewShell = document.getElementById("mobile-home-match-preview-shell");
const topbarVersionNode = document.getElementById("new-suit-version-indicator");
const WC26_LOCAL_BUILD_ID = "map-stadium-newsuit-20260517-03";
const WC26_BRIDGE_VERSION = "bridge-target-fix-20260518-04";
window.__WC26_LOCAL_BUILD_ID = WC26_LOCAL_BUILD_ID;
const WC26_GROUP_A_FLAGS = [
  { code: "mx", label: "멕시코" },
  { code: "za", label: "남아공" },
  { code: "kr", label: "대한민국" },
  { code: "cz", label: "체코" },
];
const WC26_GROUP_A_MATCH_LOGO_PATH = "images/fixed/wc26-fixed-assets/wc26-logo-2026-transparent.png";
const WC26_GROUP_A_STADIUM_IMAGE_PATH = "";
const WC26_STADIUM_IMAGES = Object.freeze({
  "Atlanta Stadium": "images/stadiums/atlanta-stadium.JPG",
  "Boston Stadium": "images/stadiums/boston-stadium.jpg",
  "Dallas Stadium": "images/stadiums/dallas-stadium.jpg",
  "Houston Stadium": "images/stadiums/houston-stadium.jpg",
  "Kansas City Stadium": "images/stadiums/kansas-city-stadium.jpg",
  "Los Angeles Stadium": "images/stadiums/los-angeles-stadium.jpg",
  "Miami Stadium": "images/stadiums/miami-stadium.jpg",
  "New York New Jersey Stadium": "images/stadiums/new-york-new-jersey-stadium.jpg",
  "Philadelphia Stadium": "images/stadiums/philadelphia-stadium.jpg",
  "San Francisco Bay Area Stadium": "images/stadiums/san-francisco-bay-area-stadium.jpg",
  "Seattle Stadium": "images/stadiums/seattle-stadium.jpg",
  "Toronto Stadium": "images/stadiums/toronto-stadium.jpg",
  "BC Place Vancouver": "images/stadiums/bc-place-vancouver.jpg",
  "Mexico City Stadium": "images/stadiums/mexico-city-stadium.jpg",
  "Guadalajara Stadium": "images/stadiums/guadalajara-stadium.jpg",
  "Monterrey Stadium": "images/stadiums/monterrey-stadium.jpg",
});
const WC26_STADIUM_IMAGE_ALIASES = Object.freeze({
  "Akron Stadium": "Guadalajara Stadium",
  "Estadio Akron": "Guadalajara Stadium",
  "Estadio Guadalajara": "Guadalajara Stadium",
  Guadalajara: "Guadalajara Stadium",
  "아크론스타디움": "Guadalajara Stadium",
  "Estadio Monterrey": "Monterrey Stadium",
  Monterrey: "Monterrey Stadium",
  "에스타디오 BBVA": "Monterrey Stadium",
  "멕시코시티 스타디움": "Mexico City Stadium",
  "LA 스타디움": "Los Angeles Stadium",
  "시애틀 스타디움": "Seattle Stadium",
  "보스턴 스타디움": "Boston Stadium",
  "BC Place": "BC Place Vancouver",
  "New York/New Jersey Stadium": "New York New Jersey Stadium",
  "New York-New Jersey Stadium": "New York New Jersey Stadium",
});
const WC26_STADIUM_DETAILS = Object.freeze({
  "Atlanta Stadium": { city: "Atlanta", countryKey: "usa", countryLabel: "미국", note: "Mercedes-Benz Stadium" },
  "BC Place Vancouver": { city: "Vancouver", countryKey: "canada", countryLabel: "캐나다", note: "BC Place" },
  "Boston Stadium": { city: "Boston", countryKey: "usa", countryLabel: "미국", note: "Gillette Stadium" },
  "Dallas Stadium": { city: "Dallas / Arlington", countryKey: "usa", countryLabel: "미국", note: "AT&T Stadium" },
  "Guadalajara Stadium": { city: "Guadalajara", countryKey: "mexico", countryLabel: "멕시코", note: "Estadio Akron" },
  "Houston Stadium": { city: "Houston", countryKey: "usa", countryLabel: "미국", note: "NRG Stadium" },
  "Kansas City Stadium": { city: "Kansas City", countryKey: "usa", countryLabel: "미국", note: "Arrowhead Stadium" },
  "Los Angeles Stadium": { city: "Los Angeles", countryKey: "usa", countryLabel: "미국", note: "SoFi Stadium" },
  "Mexico City Stadium": { city: "Mexico City", countryKey: "mexico", countryLabel: "멕시코", note: "Estadio Azteca" },
  "Miami Stadium": { city: "Miami", countryKey: "usa", countryLabel: "미국", note: "Hard Rock Stadium" },
  "Monterrey Stadium": { city: "Monterrey", countryKey: "mexico", countryLabel: "멕시코", note: "Estadio BBVA" },
  "New York New Jersey Stadium": { city: "New York / New Jersey", countryKey: "usa", countryLabel: "미국", note: "MetLife Stadium" },
  "Philadelphia Stadium": { city: "Philadelphia", countryKey: "usa", countryLabel: "미국", note: "Lincoln Financial Field" },
  "San Francisco Bay Area Stadium": { city: "San Francisco Bay Area", countryKey: "usa", countryLabel: "미국", note: "Levi's Stadium" },
  "Seattle Stadium": { city: "Seattle", countryKey: "usa", countryLabel: "미국", note: "Lumen Field" },
  "Toronto Stadium": { city: "Toronto", countryKey: "canada", countryLabel: "캐나다", note: "BMO Field" },
});
const WC26_STADIUM_CAPACITY_LOOKUP = Object.freeze({
  "Mercedes-Benz Stadium": 75000,
  "Atlanta Stadium": 75000,
  "Gillette Stadium": 65878,
  "Boston Stadium": 65878,
  "AT&T Stadium": 92967,
  "Dallas Stadium": 92967,
  "MetLife Stadium": 87157,
  "New York New Jersey Stadium": 87157,
  "Akron Stadium": 48071,
  "Estadio Akron": 48071,
  "Estadio Guadalajara": 48071,
  "Guadalajara Stadium": 48071,
  "NRG Stadium": 72220,
  "Houston Stadium": 72220,
  "Arrowhead Stadium": 76640,
  "Kansas City Stadium": 76640,
  "SoFi Stadium": 70240,
  "Los Angeles Stadium": 70240,
  "Estadio Banorte": 87523,
  "Estadio Azteca": 87523,
  "Estadio Ciudad de Mexico": 87523,
  "Mexico City Stadium": 87523,
  "Hard Rock Stadium": 67518,
  "Miami Stadium": 67518,
  "Estadio BBVA": 53460,
  "Estadio Monterrey": 53460,
  "Monterrey Stadium": 53460,
  "Lincoln Financial Field": 69328,
  "Philadelphia Stadium": 69328,
  "Levi's Stadium": 70909,
  "Levi’s Stadium": 70909,
  "San Francisco Bay Area Stadium": 70909,
  "Lumen Field": 69000,
  "Seattle Stadium": 69000,
  "BMO Field": 45736,
  "Toronto Stadium": 45736,
  "BC Place": 54500,
  "BC Place Vancouver": 54500,
  "Vancouver Stadium": 54500,
});
const WC26_MAP_STADIUM_COUNTRIES = Object.freeze([
  { key: "canada", label: "캐나다" },
  { key: "usa", label: "미국" },
  { key: "mexico", label: "멕시코" },
]);
const WC26_STADIUM_PRELOAD_CACHE = new Set();
const WC26_STADIUM_WARNED_MISSING = new Set();
const WC26_GROUP_A_AUTO_SLIDE_INTERVAL_MS = 7000;
const WC26_GROUP_A_SWIPE_THRESHOLD_PX = 40;
const WC26_MATCH_GROUP_KEYS = Object.freeze("ABCDEFGHIJKL".split(""));
const WC26_MATCH_KNOCKOUT_STAGE_KEYS = Object.freeze([
  "round32",
  "round16",
  "quarterfinal",
  "semifinal",
  "thirdPlaceMatch",
  "final",
]);
const WC26_MATCH_SWIPE_THRESHOLD_PX = 50;
const WC26_MATCH_SWIPE_LOCK_MS = 250;
const GROUP_A_TEAM_META = {
  Mexico: { ko: "멕시코", flag: "mx" },
  "South Africa": { ko: "남아공", flag: "za" },
  "South Korea": { ko: "대한민국", flag: "kr" },
  Korea: { ko: "대한민국", flag: "kr" },
  Czechia: { ko: "체코", flag: "cz" },
  "Czech Republic": { ko: "체코", flag: "cz" },
};
const WC26_DYNAMIC_TEAM_META = new Map(
  Object.entries(GROUP_A_TEAM_META).map(([teamName, meta]) => [
    String(teamName || "").trim(),
    {
      ko: String(meta?.ko || teamName || "").trim(),
      flag: String(meta?.flag || "").trim().toLowerCase(),
    },
  ]),
);
const WC26_GROUP_A_LEGACY_SKIN_STYLE_ID = "wc26-group-a-legacy-structure-skin";
const GROUP_A_DIAGNOSTICS_ENABLED = false;
const GROUP_A_DATA_READY_RETRY_DELAYS = [80, 160, 320];
const GROUP_A_FIRST_SCREEN_FORCE_DELAYS = [100, 180, 260];
const GROUP_A_LEGACY_READY_TIMEOUT_MS = 3500;
const GROUP_A_LEGACY_READY_POLL_MS = 80;
function logGroupADiagnostic(label, details = {}) {
  if (!GROUP_A_DIAGNOSTICS_ENABLED) {
    return;
  }
  try {
    console.debug("[group-a-render]", label, details);
  } catch (_error) {
    // Diagnostic logging must never affect match schedule rendering.
  }
}

const WC26_GROUP_A_LEGACY_SKIN_CSS = `
body.wc26-new-suit-group-a-legacy-skin {
  background: transparent !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailCol {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #e9fff9;
  overflow: hidden;
}

body.wc26-new-suit-group-a-legacy-skin #detailTitle {
  margin: 0 0 5px;
  color: #eafff9;
  font-size: clamp(2rem, 4.2vw, 3.6rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

body.wc26-new-suit-group-a-legacy-skin #detailSubtitle {
  color: rgba(191, 229, 222, 0.78);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
}

body.wc26-new-suit-group-a-legacy-skin #wc26-group-a-readable-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 4px 0 2px;
  padding: 10px 12px;
  border: 1px solid rgba(103, 255, 216, 0.18);
  border-radius: 16px;
  background:
    linear-gradient(90deg, rgba(103, 255, 216, 0.08), rgba(86, 183, 255, 0.05), rgba(255, 129, 67, 0.045)),
    rgba(4, 10, 20, 0.72);
  color: rgba(191, 229, 222, 0.82);
  font-size: 0.78rem;
}

body.wc26-new-suit-group-a-legacy-skin #wc26-group-a-readable-status strong {
  color: #67ffd8;
  font-weight: 800;
}

body.wc26-new-suit-group-a-legacy-skin #wc26-group-a-readable-status .status-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid rgba(103, 255, 216, 0.16);
  border-radius: 999px;
  background: rgba(3, 8, 16, 0.56);
  white-space: nowrap;
}

body.wc26-new-suit-group-a-legacy-skin .table-card {
  border: 1px solid rgba(103, 255, 216, 0.18);
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(103, 255, 216, 0.08), rgba(255, 129, 67, 0.045)),
    rgba(4, 10, 20, 0.84);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.035), 0 18px 44px rgba(0, 0, 0, 0.28);
}

body.wc26-new-suit-group-a-legacy-skin .table-card.group-a-readable-layout {
  display: grid;
  grid-template-columns: minmax(360px, 0.86fr) minmax(0, 1.14fr);
  gap: 14px;
  align-items: start;
  min-height: 0;
  padding: 14px;
  overflow: hidden;
}

body.wc26-new-suit-group-a-legacy-skin .group-match-wrap {
  min-width: 0;
  max-height: min(62vh, 680px);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(103, 255, 216, 0.34) rgba(255, 255, 255, 0.06);
}

body.wc26-new-suit-group-a-legacy-skin .group-match-title {
  margin: 0 0 8px;
  color: #67ffd8;
  font-size: 0.92rem;
  letter-spacing: 0.08em;
}

body.wc26-new-suit-group-a-legacy-skin .data-table,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 6px;
  color: #e9fff9;
}

body.wc26-new-suit-group-a-legacy-skin .data-table thead th,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table thead th {
  padding: 8px 10px;
  border-bottom: 1px solid rgba(103, 255, 216, 0.22);
  color: rgba(103, 255, 216, 0.88);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

body.wc26-new-suit-group-a-legacy-skin .data-table tbody tr,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tbody tr {
  background: rgba(3, 8, 16, 0.76);
  box-shadow: inset 0 0 0 1px rgba(103, 255, 216, 0.08);
}

body.wc26-new-suit-group-a-legacy-skin .data-table tbody td,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tbody td {
  padding: 9px 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.035);
  border-bottom: 1px solid rgba(255, 255, 255, 0.035);
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table tbody td {
  font-size: 0.88rem;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .group-team-name {
  font-size: 0.96rem;
  font-weight: 800;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .group-points-cell {
  color: #67ffd8;
  font-size: 1rem;
  font-weight: 900;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table {
  border-spacing: 0 8px;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tbody,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tr,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table td {
  display: block;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tr {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) minmax(145px, 0.42fr);
  gap: 10px;
  margin-bottom: 8px;
  padding: 10px;
  border: 1px solid rgba(103, 255, 216, 0.1);
  border-radius: 16px;
  background:
    linear-gradient(135deg, rgba(86, 183, 255, 0.075), rgba(255, 129, 67, 0.04)),
    rgba(3, 8, 16, 0.76);
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table td {
  border: 0 !important;
  border-radius: 0 !important;
  padding: 0;
  min-width: 0;
}

body.wc26-new-suit-group-a-legacy-skin .schedule-match-number-cell {
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  border-right: 1px solid rgba(103, 255, 216, 0.14) !important;
  font-size: 0.88rem;
}

body.wc26-new-suit-group-a-legacy-skin .schedule-stadium-cell {
  padding-left: 10px;
  border-left: 1px solid rgba(103, 255, 216, 0.12) !important;
}

body.wc26-new-suit-group-a-legacy-skin .data-table tbody td:first-child,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tbody td:first-child {
  border-left: 1px solid rgba(103, 255, 216, 0.1);
  border-radius: 12px 0 0 12px;
}

body.wc26-new-suit-group-a-legacy-skin .data-table tbody td:last-child,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tbody td:last-child {
  border-right: 1px solid rgba(103, 255, 216, 0.1);
  border-radius: 0 12px 12px 0;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .is-new-suit-rank-1,
body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .is-new-suit-rank-2 {
  background: linear-gradient(90deg, rgba(72, 255, 167, 0.16), rgba(3, 8, 16, 0.78));
  box-shadow: inset 3px 0 0 rgba(72, 255, 167, 0.85), inset 0 0 0 1px rgba(72, 255, 167, 0.14);
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .is-new-suit-rank-3 {
  background: linear-gradient(90deg, rgba(255, 210, 91, 0.16), rgba(3, 8, 16, 0.78));
  box-shadow: inset 3px 0 0 rgba(255, 210, 91, 0.9), inset 0 0 0 1px rgba(255, 210, 91, 0.14);
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .is-new-suit-rank-4 {
  background: linear-gradient(90deg, rgba(255, 91, 98, 0.14), rgba(3, 8, 16, 0.78));
  box-shadow: inset 3px 0 0 rgba(255, 91, 98, 0.9), inset 0 0 0 1px rgba(255, 91, 98, 0.12);
}

body.wc26-new-suit-group-a-legacy-skin .group-standing-rank-badge,
body.wc26-new-suit-group-a-legacy-skin .schedule-match-number-cell {
  color: #67ffd8;
  font-weight: 800;
}

body.wc26-new-suit-group-a-legacy-skin .schedule-stadium-cell,
body.wc26-new-suit-group-a-legacy-skin .match-meta {
  color: rgba(191, 229, 222, 0.78);
}

body.wc26-new-suit-group-a-legacy-skin input,
body.wc26-new-suit-group-a-legacy-skin select,
body.wc26-new-suit-group-a-legacy-skin textarea,
body.wc26-new-suit-group-a-legacy-skin button {
  border-color: rgba(103, 255, 216, 0.26);
  background-color: rgba(3, 8, 16, 0.86);
  color: #e9fff9;
}

body.wc26-new-suit-group-a-legacy-skin #detailCol.group-a-readable-newsuit-view {
  position: relative;
  padding: 18px !important;
  border: 1px solid rgba(103, 255, 216, 0.24) !important;
  border-radius: 24px !important;
  background:
    radial-gradient(circle at 8% 0%, rgba(103, 255, 216, 0.16), transparent 30%),
    radial-gradient(circle at 92% 8%, rgba(255, 129, 67, 0.13), transparent 28%),
    linear-gradient(145deg, rgba(2, 8, 18, 0.97), rgba(4, 14, 28, 0.93) 58%, rgba(3, 9, 18, 0.98)) !important;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.045),
    inset 0 -4px 0 rgba(255, 129, 67, 0.18),
    0 26px 70px rgba(0, 0, 0, 0.48) !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailCol.group-a-readable-newsuit-view::before {
  content: "";
  display: none;
}

body.wc26-new-suit-group-a-legacy-skin #detailCol.group-a-readable-newsuit-view::after {
  content: "";
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #67ffd8, #56b7ff 54%, #ff8143);
  order: -1;
  opacity: 0.9;
}

body.wc26-new-suit-group-a-legacy-skin #detailTitle {
  padding-right: 158px !important;
  text-shadow: 0 0 20px rgba(103, 255, 216, 0.18);
}

body.wc26-new-suit-group-a-legacy-skin #wc26-group-a-readable-status,
body.wc26-new-suit-group-a-legacy-skin .table-card.group-a-readable-layout,
body.wc26-new-suit-group-a-legacy-skin .group-match-wrap .table-card {
  background:
    linear-gradient(135deg, rgba(103, 255, 216, 0.1), rgba(86, 183, 255, 0.055), rgba(255, 129, 67, 0.06)),
    rgba(2, 7, 15, 0.9) !important;
  border-color: rgba(103, 255, 216, 0.25) !important;
}

body.wc26-new-suit-group-a-legacy-skin .table-card.group-a-readable-layout {
  margin-top: 2px !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table,
body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table * {
  background-color: transparent !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(10, 26, 43, 0.98), rgba(3, 10, 21, 0.98)) !important;
  color: #a8fff0 !important;
  border-top: 1px solid rgba(103, 255, 216, 0.18) !important;
  border-bottom: 1px solid rgba(103, 255, 216, 0.34) !important;
  font-weight: 900 !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table tbody tr {
  background: linear-gradient(90deg, rgba(5, 14, 27, 0.98), rgba(3, 9, 20, 0.92)) !important;
  transform: translateZ(0);
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table tbody tr:hover,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tr:hover {
  filter: brightness(1.12);
  box-shadow: inset 0 0 0 1px rgba(103, 255, 216, 0.24), 0 0 24px rgba(103, 255, 216, 0.08) !important;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .group-team-cell {
  min-width: 150px;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .flag-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .flag-icon {
  width: 24px;
  height: 16px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
}

body.wc26-new-suit-group-a-legacy-skin #detailTable.group-table .group-placement-cell {
  font-weight: 900;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table tr {
  border-color: rgba(103, 255, 216, 0.22) !important;
  background:
    linear-gradient(90deg, rgba(6, 18, 34, 0.98), rgba(3, 9, 20, 0.94) 58%, rgba(16, 19, 22, 0.96)),
    rgba(3, 8, 16, 0.96) !important;
  box-shadow: inset 4px 0 0 rgba(86, 183, 255, 0.72), inset 0 0 0 1px rgba(255, 255, 255, 0.035), 0 12px 34px rgba(0, 0, 0, 0.24) !important;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .vs-cell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  color: #f0fffb;
  font-size: 1rem;
  font-weight: 900;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .team-side {
  min-width: 0;
  color: #f0fffb;
}

body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .match-meta,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .match-meta-item,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .match-date,
body.wc26-new-suit-group-a-legacy-skin .group-schedule-match-table .match-time {
  color: rgba(210, 244, 238, 0.82) !important;
  font-size: 0.78rem !important;
}

body.wc26-new-suit-group-a-legacy-skin .schedule-stadium-cell {
  color: #a8fff0 !important;
  font-weight: 800;
}

body.wc26-new-suit-group-a-legacy-skin .schedule-stadium-cell a,
body.wc26-new-suit-group-a-legacy-skin .schedule-stadium-cell span {
  color: #a8fff0 !important;
}

body.wc26-new-suit-group-a-legacy-skin input,
body.wc26-new-suit-group-a-legacy-skin select,
body.wc26-new-suit-group-a-legacy-skin textarea {
  border: 1px solid rgba(103, 255, 216, 0.3) !important;
  border-radius: 12px !important;
  background: rgba(2, 7, 15, 0.88) !important;
  color: #e9fff9 !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.035) !important;
}

body.wc26-new-suit-group-a-legacy-skin button {
  border: 1px solid rgba(103, 255, 216, 0.34) !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg, rgba(103, 255, 216, 0.13), rgba(86, 183, 255, 0.08)) !important;
  color: #eafff9 !important;
  font-weight: 800 !important;
}

body.wc26-new-suit-group-a-legacy-skin button:hover {
  border-color: rgba(103, 255, 216, 0.68) !important;
  box-shadow: 0 0 18px rgba(103, 255, 216, 0.16) !important;
}

@media (max-width: 1100px) {
  body.wc26-new-suit-group-a-legacy-skin .table-card.group-a-readable-layout {
    grid-template-columns: 1fr;
  }
}
`;
const PERFORMANCE_DEBUG_ENABLED = false;
let equipmentBridgeFrame = null;
let equipmentBridgeFrameShell = null;
let equipmentBridgeLoading = null;
let equipmentBridgeButtons = [];
let equipmentBridgeActionToolbar = null;
let equipmentBridgeSearchShell = null;
let equipmentBridgeSearchInput = null;
let equipmentBridgeSearchClearButton = null;
let equipmentBridgeMemberTabShell = null;
let equipmentBridgeMemberButtons = [];
const WC26_EQUIPMENT_BRIDGE_EMBEDDED_CLASS = "wc26-equipment-bridge-embedded";
const WC26_MAP_BRIDGE_EMBEDDED_CLASS = "wc26-map-bridge-embedded";
const WC26_STORAGE_BRIDGE_EMBEDDED_CLASS = "wc26-storage-bridge-embedded";
const WC26_MAP_BRIDGE_MOBILE_STYLE_ID = "wc26-map-bridge-mobile-style";
const WC26_MEDIA_BRIDGE_MOBILE_STYLE_ID = "wc26-media-bridge-mobile-style";
const WC26_MAP_BRIDGE_MOBILE_CSS = `
@media (max-width: 767px) {
  body.wc26-map-bridge-embedded,
  body.wc26-map-bridge-embedded #detailCol,
  body.wc26-map-bridge-embedded .simple-info-table,
  body.wc26-map-bridge-embedded .simple-info-table tbody,
  body.wc26-map-bridge-embedded .simple-info-table tr,
  body.wc26-map-bridge-embedded .simple-info-table td,
  body.wc26-map-bridge-embedded .simple-info-cell {
    background: transparent !important;
    box-shadow: none !important;
  }

  body.wc26-map-bridge-embedded #detailCol {
    padding: 0 !important;
  }

  body.wc26-map-bridge-embedded .simple-info-panel,
  body.wc26-map-bridge-embedded .simple-info-panel-map {
    gap: 10px !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-shell.place-system-shell,
  body.wc26-map-bridge-embedded #placeSystemGrid,
  body.wc26-map-bridge-embedded #placeListPanel {
    display: grid !important;
    gap: 10px !important;
    background: transparent !important;
  }

  body.wc26-map-bridge-embedded .place-entry-panel,
  body.wc26-map-bridge-embedded .place-preview-panel,
  body.wc26-map-bridge-embedded .place-list-shell,
  body.wc26-map-bridge-embedded .map-location-pin-list-shell {
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    overflow: visible !important;
  }

  body.wc26-map-bridge-embedded .place-entry-panel .place-entry-lookup-layout,
  body.wc26-map-bridge-embedded .place-entry-panel .place-entry-form-pane,
  body.wc26-map-bridge-embedded .place-form-grid,
  body.wc26-map-bridge-embedded .map-location-pin-form-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 10px !important;
  }

  body.wc26-map-bridge-embedded .place-search-main-field,
  body.wc26-map-bridge-embedded #placeSearchAssistPanel,
  body.wc26-map-bridge-embedded .place-preview-panel,
  body.wc26-map-bridge-embedded .place-list-shell {
    min-width: 0 !important;
  }

  body.wc26-map-bridge-embedded .place-entry-panel,
  body.wc26-map-bridge-embedded .place-preview-panel,
  body.wc26-map-bridge-embedded .place-list-shell,
  body.wc26-map-bridge-embedded .map-location-pin-list-shell,
  body.wc26-map-bridge-embedded .place-entry-form-pane {
    padding: 0 !important;
  }

  body.wc26-map-bridge-embedded .map-status-bar,
  body.wc26-map-bridge-embedded .place-list-header-row {
    display: grid !important;
    gap: 6px !important;
    align-items: start !important;
    justify-content: stretch !important;
  }

  body.wc26-map-bridge-embedded .map-category-filters,
  body.wc26-map-bridge-embedded .place-filter-bar {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    gap: 8px !important;
    padding-bottom: 2px !important;
    -webkit-overflow-scrolling: touch !important;
  }

  body.wc26-map-bridge-embedded .map-category-filters .item,
  body.wc26-map-bridge-embedded .place-filter-bar label,
  body.wc26-map-bridge-embedded .place-filter-bar .item {
    flex: 0 0 auto !important;
    white-space: nowrap !important;
  }

  body.wc26-map-bridge-embedded #placeGoogleMap,
  body.wc26-map-bridge-embedded .place-preview-map {
    width: 100% !important;
    height: min(40vh, 300px) !important;
    min-height: 220px !important;
    border: 1px solid rgba(93, 242, 255, 0.16) !important;
    border-radius: 14px !important;
    box-shadow: none !important;
  }

  body.wc26-map-bridge-embedded .place-list {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 10px !important;
  }

  body.wc26-map-bridge-embedded .place-card,
  body.wc26-map-bridge-embedded .place-search-result-card,
  body.wc26-map-bridge-embedded .map-location-pin-card {
    padding: 12px !important;
    border: 1px solid rgba(93, 242, 255, 0.14) !important;
    border-radius: 14px !important;
    background: linear-gradient(180deg, rgba(6, 15, 24, 0.9), rgba(3, 8, 16, 0.86)) !important;
    box-shadow: none !important;
  }

  body.wc26-map-bridge-embedded .place-card-top,
  body.wc26-map-bridge-embedded .map-location-pin-card-header,
  body.wc26-map-bridge-embedded .map-location-pin-card-body {
    display: grid !important;
    gap: 6px !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-card-badge-wrap {
    display: none !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-card-media {
    margin-top: 2px !important;
    border-radius: 12px !important;
    overflow: hidden !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-card-photo {
    max-height: 124px !important;
    object-fit: cover !important;
  }

  body.wc26-map-bridge-embedded .place-card-actions,
  body.wc26-map-bridge-embedded .map-location-pin-card-actions,
  body.wc26-map-bridge-embedded .map-location-pin-form-actions {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    justify-content: flex-start !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-card-title,
  body.wc26-map-bridge-embedded .place-card .map-location-pin-card-title {
    font-size: 15px !important;
    line-height: 1.25 !important;
  }

  body.wc26-map-bridge-embedded .map-location-pin-card-location,
  body.wc26-map-bridge-embedded .map-location-pin-card-memo,
  body.wc26-map-bridge-embedded .map-location-pin-card-meta {
    font-size: 12px !important;
    line-height: 1.42 !important;
  }
}
`;
const WC26_MEDIA_BRIDGE_MOBILE_CSS = `
@media (max-width: 767px) {
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active #detailCol,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .simple-info-table,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .simple-info-table tbody,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .simple-info-table tr,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .simple-info-table td,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .simple-info-cell,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .news-programming-panel,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .news-programming-shell,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .broadcast-suit-shell,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .broadcast-suit-list-panel,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .broadcast-suit-programming-grid,
  body.wc26-media-bridge-embedded.media-bridge-broadcast-active .broadcast-suit-card-row {
    min-height: 0 !important;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-broadcast-active #detailCol {
    padding: 0 !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active #detailCol {
    padding: 10px !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active #detailCol .table-card,
  body.wc26-media-bridge-embedded.media-bridge-news-active #detailCol .table-wrapper {
    overflow: visible !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table {
    display: block !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table colgroup,
  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table thead {
    display: none !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tbody {
    display: grid !important;
    gap: 10px !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr {
    display: grid !important;
    gap: 7px !important;
    padding: 12px !important;
    border: 1px solid rgba(93, 242, 255, 0.18) !important;
    border-radius: 16px !important;
    background: linear-gradient(180deg, rgba(4, 13, 25, 0.92), rgba(3, 9, 18, 0.84)) !important;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02) !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table td {
    display: block !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
    line-height: 1.45 !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table td::before {
    display: block !important;
    margin-bottom: 3px !important;
    color: rgba(159, 233, 240, 0.78) !important;
    font-size: 10px !important;
    font-weight: 800 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table td.news-action-cell {
    display: flex !important;
    justify-content: flex-end !important;
    align-items: center !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table td.news-action-cell::before {
    content: none !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td:nth-child(1):not(.news-action-cell)::before {
    content: "날짜" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td:nth-child(2):not(.news-action-cell)::before {
    content: "제목/프로그램" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td:nth-child(3):not(.news-action-cell)::before {
    content: "링크" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td:nth-child(4):not(.news-action-cell)::before {
    content: "주요분석" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td.news-action-cell + td::before {
    content: "날짜" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td.news-action-cell + td + td::before {
    content: "제목/프로그램" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td.news-action-cell + td + td + td::before {
    content: "링크" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td.news-action-cell + td + td + td + td::before {
    content: "주요분석" !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td:nth-child(2):not(.news-action-cell),
  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table tr td.news-action-cell + td + td {
    color: #f6fdff !important;
    font-size: 14px !important;
    font-weight: 800 !important;
    line-height: 1.35 !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table .news-link-cell,
  body.wc26-media-bridge-embedded.media-bridge-news-active .news-table .news-link {
    white-space: nowrap !important;
  }

  body.wc26-media-bridge-embedded.media-bridge-news-active .news-row-edit-btn,
  body.wc26-media-bridge-embedded.media-bridge-news-active .news-row-delete-btn {
    min-height: 32px !important;
    padding: 0 10px !important;
    font-size: 11px !important;
  }
}
`;
const ARCHIVE_SUIT_STORAGE_KEY = "wc26-archive-suit-items-v1";
const ARCHIVE_SUIT_DELETED_STORAGE_KEY = "wc26-archive-suit-deleted-v1";
const ARCHIVE_SUIT_LEGACY_GALLERY_KEYS = ["galleryData", "galleryItems", "worldcup-gallery-items-v1", "worldcup_timeline_gallery_v1"];
const ARCHIVE_SUIT_LEGACY_GALLERY_DELETED_KEY = "worldcup-guide-gallery-deleted-v1";
const ARCHIVE_SUIT_LEGACY_GALLERY_WINDOW_KEY = "__worldcupGuideTimelineGallery__";
const ARCHIVE_SUIT_LEGACY_GALLERY_DELETED_WINDOW_KEY = "__worldcupGuideTimelineGalleryDeleted__";
const ARCHIVE_SUIT_LEGACY_GALLERY_DB_NAME = "worldcup-guide-gallery-db";
const ARCHIVE_SUIT_LEGACY_GALLERY_DB_STORE = "gallery_state";
const ARCHIVE_SUIT_LEGACY_GALLERY_DB_RECORD_KEY = "entries";
const ARCHIVE_SUIT_TABS = {
  "document-storage": { label: "문서보관", accept: ".pdf,.doc,.docx,.hwp,.hwpx,.xls,.xlsx,.csv,.ppt,.pptx,.txt,.zip,image/*" },
  "file-storage": { label: "파일보관", accept: "*" },
  gallery: { label: "갤러리", accept: "image/*,video/*" },
  video: { label: "동영상", accept: "video/*" },
};

let toastTimer = null;
let highlightTimer = null;
let dailyMatchTimer = null;
let dailyMatchResumeTimer = null;
let dailyMatchDateWatchTimer = null;
let dailyMatchActiveIndex = 0;
let dailyMatchSelectedDate = null;
let dailyMatchTodayKey = "";
let dailyMatchItems = [];
let dailyMatchSummaryRequested = false;
let dailyMatchPointerGesture = null;
let dailyMatchTouchGesture = null;
let dailyMatchGestureBound = false;
let mobileHomeMatchPreviewTimer = null;
let mobileHomeMatchPreviewResumeTimer = null;
let mobileHomeMatchPreviewActiveIndex = 0;
let mobileHomeMatchPreviewItems = [];
let mobileHomeMatchPreviewPointerGesture = null;
let mobileHomeMatchPreviewTouchGesture = null;
let mobileHomeMatchPreviewGestureBound = false;
let mainStadiumTimer = null;
let mainStadiumActiveIndex = 0;
let mainStadiumItems = [];
let mainStadiumPointerGesture = null;
let mainStadiumTouchGesture = null;
let mainStadiumGestureBound = false;

const WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX = 48;
const WC26_MAIN_STADIUM_INTERVAL = 7000;
const WC26_MAIN_STADIUM_SWIPE_THRESHOLD_PX = 48;
let broadcastStatusTimer = null;

const bridgeLoadState = {
  scheduleSummaryRequested: false,
  timelineRangeKey: "",
};

function perfDebug(label, value) {
  if (!PERFORMANCE_DEBUG_ENABLED) {
    return;
  }
  console.log(`[perf] ${label}`, value);
}

function loadLazyIframe(iframe) {
  if (!iframe) {
    return false;
  }
  if (iframe.id === "match-bridge-frame") {
    iframe.loading = "eager";
    iframe.setAttribute("loading", "eager");
  }
  if (iframe.dataset.loaded === "true") {
    return true;
  }
  const src = String(iframe.dataset.src || "").trim();
  if (!src) {
    return false;
  }
  iframe.src = src;
  iframe.dataset.loaded = "true";
  perfDebug("iframe loaded", iframe.id || src);
  return true;
}

function ensureEmbeddedBridgeStyle(legacyDocument, styleId, cssText) {
  if (!legacyDocument || !styleId || typeof cssText !== "string") {
    return;
  }
  const head = legacyDocument.head || legacyDocument.documentElement;
  if (!head) {
    return;
  }
  let styleNode = legacyDocument.getElementById(styleId);
  if (!(styleNode instanceof legacyDocument.defaultView.HTMLElement)) {
    styleNode = legacyDocument.createElement("style");
    styleNode.id = styleId;
    head.appendChild(styleNode);
  }
  if (styleNode.textContent !== cssText) {
    styleNode.textContent = cssText;
  }
}

function isLazyIframeLoaded(iframe) {
  return Boolean(iframe?.dataset?.loaded === "true");
}

function ensureScheduleSummaryBridgeLoaded() {
  return loadLazyIframe(scheduleBridgeSyncFrame);
}

function waitForScheduleBridgeFunction(functionName = "", timeoutMs = 4500) {
  const normalizedName = String(functionName || "").trim();
  ensureScheduleSummaryBridgeLoaded();
  return new Promise((resolve) => {
    if (!normalizedName) {
      resolve(getScheduleBridgeSyncWindow());
      return;
    }

    const startedAt = Date.now();
    let done = false;
    let timer = 0;

    const finish = (value) => {
      if (done) {
        return;
      }
      done = true;
      window.clearTimeout(timer);
      scheduleBridgeSyncFrame?.removeEventListener("load", check);
      resolve(value);
    };

    const check = () => {
      const syncWindow = getScheduleBridgeSyncWindow();
      if (typeof syncWindow?.[normalizedName] === "function") {
        finish(syncWindow);
        return;
      }
      if (Date.now() - startedAt >= timeoutMs) {
        finish(null);
        return;
      }
      timer = window.setTimeout(check, 120);
    };

    scheduleBridgeSyncFrame?.addEventListener("load", check);
    check();
  });
}
let scheduleBridgeReady = false;
let scheduleBridgeSection = "all";
let scheduleBridgeSummaryRenderKey = "";
let sharedScheduleDraftFiles = [];
let sharedScheduleDeleteMode = false;
let sharedScheduleDeleteSelection = new Set();
let sharedScheduleExpandedEntries = new Set();
let sharedScheduleComposerOpen = false;
let sharedScheduleIsSaving = false;
let sharedScheduleLastDiagnostics = null;
let sharedScheduleEventsBound = false;
let sharedScheduleOptimisticEntries = [];
let sharedScheduleXlsxRuntimePromise = null;
let personalScheduleComposerOpen = false;
let personalScheduleIsSaving = false;
let personalScheduleEventsBound = false;
let personalScheduleEntriesCache = [];
let storageBridgeReady = false;
let storageBridgeSection = "document-storage";
let storageBridgeSummaryRenderKey = "";
let archiveSuitMode = "view";
let archiveSuitEditingId = "";
let archiveSuitSelectedId = "";
let archiveSuitGalleryDiagnosticsSignature = "";
let archiveSuitLegacyIndexedDbItems = [];
let archiveSuitLegacyIndexedDbRawCount = 0;
let archiveSuitLegacyIndexedDbSource = "pending";
let archiveSuitLegacyIndexedDbReady = false;
let archiveSuitLegacyIndexedDbPromise = null;
let mediaBridgeReady = false;
let mediaBridgeSection = "broadcast-schedule";
let mediaBridgeSummaryRenderKey = "";
let mediaBridgeSummaryState = null;
let mediaBridgeNewsBroadcaster = "KBS";
let opsBridgeReady = false;
let opsBridgeSection = "operation-memo";
let opsBridgeSummaryRenderKey = "";
let opsBridgeSummaryState = null;
let matchBridgeReady = false;
let matchBridgeSection = "match-schedule";
let mapBridgeReady = false;
let mapBridgeSection = "map";
let matchMapBridgeSummaryRenderKey = "";
let matchMapBridgeSummaryState = null;
let squadBridgeReady = false;
let squadBridgeSection = "squad";
let squadBridgeSummaryRenderKey = "";
let squadBridgeSummaryState = null;
let matchShellMode = "group-stage";
let matchBridgeGroupKey = "A";
let matchBridgeKnockoutStage = "round32";
let matchBridgeSquadKey = "korea";
let matchGroupAEngineVisible = false;
let matchGroupAObserver = null;
let matchGroupAObserverTarget = null;
let matchGroupARefreshTimer = null;
let matchGroupAInitialHydrationToken = 0;
let matchGroupADataReadyRetryToken = 0;
let matchGroupADataReadyRetryActive = false;
let matchGroupAFirstScreenForceToken = 0;
let matchGroupALegacyReadyPromise = null;
let matchGroupAExplicitSelectionApplied = false;
let matchGroupAActiveMatchIndex = 0;
let matchGroupARenderedMatches = [];
let matchGroupAAutoSlideTimer = null;
let matchGroupAFeatureTransitionTimer = null;
let matchGroupAPointerGesture = null;
let matchGroupATouchGesture = null;
let matchGroupAFeatureGestureBound = false;
let matchGroupAFeatureIsAnimating = false;
let matchGroupAFeaturePendingTransition = null;
let matchScheduleSwipePointerGesture = null;
let matchScheduleSwipeTouchGesture = null;
let matchScheduleSwipeBound = false;
let matchScheduleLastSwipeAt = 0;
// [Z-TEST-START] 3위순위 임시 테스트
let matchZThirdPlaceTestRefreshTimer = null;
// [Z-TEST-END] 3위순위 임시 테스트
let equipmentBridgeReady = false;
let equipmentBridgeSection = "equipment-summary";
let equipmentBridgeSummaryRenderKey = "";
let equipmentBridgeSelectedCrew = "박재현";
let equipmentBridgeActionObserver = null;
let equipmentBridgeSearchQuery = "";
let mediaBridgeNewsYear = "2026";
let mapBridgeSelectedStadiumKey = "";
let mapBridgeCountryKey = "canada";
let mapBridgeStadiumDataResolved = false;
let mapBridgeStadiumSourceName = "";
let mapBridgeStadiumLogPrinted = false;
let mapBridgeSkinLogPrinted = false;
let mapBridgeScrollLogPrinted = false;
let mapBridgeScrollSyncQueued = false;
let mediaBridgeScrollLogPrinted = false;
let mediaBridgeScrollSyncQueued = false;
let broadcastSlideItems = [];
let broadcastSlideIndex = 0;
let topbarTimeTickerId = null;
let timelineEntryModalMode = "create";
let timelineDateOffset = 0;
let timelineResizeTimer = null;
let activeTimelineTooltipId = "";
let timelineLastTouchToggleAt = 0;
let timelineIgnoreDocumentClickUntil = 0;

const WC26_SCHEDULE_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-schedule-ready",
  summary: "WC26_LEGACY_SCHEDULE_SUMMARY",
  navigate: "wc26:legacy-schedule-navigate",
};
const WC26_SHARED_STATE_APPLIED_MESSAGE = "wc26:legacy-shared-state-applied";
const WC26_EQUIPMENT_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-equipment-ready",
  summary: "WC26_LEGACY_EQUIPMENT_SUMMARY",
  navigate: "wc26:legacy-equipment-navigate",
};
const WC26_STORAGE_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-storage-ready",
  summary: "WC26_LEGACY_STORAGE_SUMMARY",
  navigate: "wc26:legacy-storage-navigate",
};
const WC26_MEDIA_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-media-ready",
  summary: "WC26_LEGACY_MEDIA_SUMMARY",
  navigate: "wc26:legacy-media-navigate",
};
const WC26_OPS_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-ops-ready",
  summary: "WC26_LEGACY_OPS_SUMMARY",
  navigate: "wc26:legacy-ops-navigate",
};
const WC26_MATCH_MAP_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-match-map-ready",
  summary: "WC26_LEGACY_MATCH_MAP_SUMMARY",
  navigate: "wc26:legacy-match-map-navigate",
};
const WC26_SQUAD_BRIDGE_MESSAGE = {
  ready: "wc26:legacy-squad-ready",
  summary: "WC26_LEGACY_SQUAD_SUMMARY",
  navigate: "wc26:legacy-squad-navigate",
};

const WC26_SCHEDULE_BRIDGE_MEMBER_ORDER = ["박재현", "장후원", "정상원", "이주원", "김진광", "정재우"];
const WC26_EQUIPMENT_BRIDGE_MEMBER_ORDER = ["박재현", "장후원", "정상원", "이주원", "김진광", "정재우"];
const WC26_PERSONAL_SCHEDULE_FALLBACK_OPTIONS = {
  시작시간: Array.from({ length: 48 }, (_, index) => {
    const hour = String(Math.floor(index / 2)).padStart(2, "0");
    const minute = index % 2 ? "30" : "00";
    return `${hour}:${minute}`;
  }),
  종료시간: Array.from({ length: 48 }, (_, index) => {
    const hour = String(Math.floor(index / 2)).padStart(2, "0");
    const minute = index % 2 ? "30" : "00";
    return `${hour}:${minute}`;
  }),
  장소: ["과달라하라", "달라스", "멕시코시티", "몬테레이", "솔트레이크", "애틀란타", "LA"],
  취재기자: ["전영희", "온누리", "홍지용", "오선민", "이예원", "이은진"],
  TVU: ["1번", "15번", "16번", "17번", "18번", "19번", "TVU 미지참"],
  업무내용: ["대표팀 취재", "남아공 취재", "멕시코 취재", "체코 취재", "일본 취재", "외곽 취재", "라이브 연결", "밀착 카메라", "인터뷰"],
};
const WC26_LEGACY_TIMELINE_STORAGE_KEYS = {
  timeline: "worldcup-guide-timeline-assignments-v1",
  shared: "worldcup-guide-personal-timeline-shared-v1",
  details: "worldcup-guide-personal-timeline-details-v1",
  deleted: "worldcup-guide-personal-timeline-details-deleted-v1",
};
const WC26_SHARED_SCHEDULE_BACKUP_PREFIX = "worldcup-guide-personal-timeline-shared-v1_backup_before_dedupe_";
const WC26_SHARED_SCHEDULE_SNAPSHOT_KEY = "wc26_new_suit_shared_schedule_snapshot_v1";
const WC26_SHARED_SCHEDULE_DELETED_KEYS = "wc26_new_suit_shared_schedule_deleted_keys_v1";
const WC26_TIMELINE_GALLERY_STORAGE_BUCKET = "timeline-gallery";
const WC26_SHARED_SCHEDULE_RECOVERY_SOURCE = `2026-05-16|2026-05-16T14:00:00.000Z|Codex 공용일정 저장 확인 critical-save-nav-fix 2026-05-16
2026-05-14|2026-05-14T07:46:00.000Z|우리나라, 조별 상대국, 주요경기(일본, 브라질, 아르헨티나, 잉들랜드 등) 청약내역입니다. 기본적으로 우리나라 경기 외 조별상대국 및 위 주요국 경기는 컨퍼런스룸+믹스드존+주차권 청약되어 있습니다. 파일 참고하시고 외부유출 유의해 주세요
2026-05-14|2026-05-14T02:22:00.000Z|고독스 6개 구매 완료. 늦어도 담주 화에 도착예정
2026-05-13|2026-05-14T02:23:00.000Z|[남아공팀 취재 계획]
2026-05-11|2026-05-12T00:51:00.000Z|박재현 기자 까르네 김영실 리더에게 제출.
2026-05-08|2026-05-08T11:26:00.000Z|-한국전엔 3~4팀 투입 예정
2026-05-07|2026-05-07T06:01:00.000Z|- 편성
2026-05-07|2026-05-07T01:21:00.000Z|KT요금제 변경, 접속성공
2026-05-06|2026-05-06T07:23:00.000Z|[고독스 조명]
2026-05-05|2026-05-06T07:27:00.000Z|월드컵 취재 및 배정 가안입니다. 참고해주세요.
2026-05-05|2026-05-05T22:15:00.000Z|*멕시코 과달라하라 및 멕시코시티 현지 답사(이틀 째) 내용을 바탕으로, 출장 팀원들이 숙지해야 할 안전 및 업무 지침을 정리해 드립니다.
2026-05-05|2026-05-05T21:41:00.000Z|편집 가능: https://2026worldcup-project.vercel.app/
2026-05-05|2026-05-05T20:52:00.000Z|월드컵 취재 및 배정 가안입니다. 참고해주세요.
2026-05-05|2026-05-05T12:50:00.000Z|편집 가능 주소:
2026-05-04|2026-05-04T07:47:00.000Z|내용 없음
2026-05-04|2026-05-04T07:26:00.000Z|5.4 (월) 3차
2026-05-04|2026-05-04T07:26:00.000Z|티비유 신호 관련.의견
2026-05-04|2026-05-04T07:26:00.000Z|완충된 배터리로 테스트해봤는데 배터리는 50% 정도 남음
2026-04-30|2026-05-07T07:53:00.000Z|[Web발신]
2026-04-30|2026-05-07T07:53:00.000Z|0430_빅이벤트 회의
2026-04-27|2026-05-14T07:20:00.000Z|마이크 텍 분출
2026-04-24|2026-05-07T07:53:00.000Z|* 월드컵 날씨 정보
2026-04-21|2026-05-08T03:27:00.000Z|월드컵 D-50 까르네 준비.
2026-04-20|2026-05-14T07:20:00.000Z|[렌즈관련]
2026-04-20|2026-05-08T03:27:00.000Z|https://n.news.naver.com/article/437/0000488183
2026-04-20|2026-05-08T03:27:00.000Z|[박재현 기자 사전답사 일정]
2026-04-17|2026-05-14T07:20:00.000Z|[공지]
2026-04-16|2026-05-14T07:20:00.000Z|0416 빅이벤트 회의
2026-04-16|2026-05-14T07:20:00.000Z|월드컵 디자인 명함 신청
2026-04-15|2026-05-14T07:20:00.000Z|[출장 공지] 멕시코 과달라하라 취재 예정
2026-04-13|2026-05-14T07:20:00.000Z|비디오탈리 논의 - 부조 -
2026-04-10|2026-05-14T07:20:00.000Z|보도제작본부 _COS 베뉴 서비스 문의사항 답변.
2026-04-09|2026-05-14T07:20:00.000Z|* 0409 빅이벤트 회의
2026-04-09|2026-05-14T07:20:00.000Z|기술기획팀 전달사항
2026-04-07|2026-05-14T07:20:00.000Z|하이드레이션 타임 지원 관련 경우의 수 공유
2026-04-03|2026-05-14T07:20:00.000Z|[4월 3일]
2026-04-02|2026-05-14T07:20:00.000Z|빅이벤트 회의(대외비)
2026-04-01|2026-05-14T07:20:00.000Z|1차전 상대 체코로 결정.
2026-03-31|2026-05-14T07:20:00.000Z|월드컵 현지밀착 취재팀 정상원 기자 합류
2026-03-30|2026-05-14T07:20:00.000Z|북중미 월드컵 출장자 전원 언론인 비자(I-VISA) 발급 완료.
2026-03-26|2026-05-14T07:20:00.000Z|[3월 26일]
2026-03-23|2026-05-14T07:20:00.000Z|[3월 23일]
2026-03-19|2026-05-16T13:21:00.000Z|[3월 19일]`;
const WC26_SHARED_SCHEDULE_RENDER_LIMIT = 160;
const WC26_SHARED_SCHEDULE_PREVIEW_TIMEOUT_MS = 6500;
const WC26_SHARED_SCHEDULE_MAX_SPREADSHEET_BYTES = 8 * 1024 * 1024;
const WC26_SHARED_SCHEDULE_XLSX_CDN = "https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js";
const WC26_LEGACY_TIMELINE_DETAIL_KEYS = {
  place: ["장소", "location"],
  task: ["업무내용", "task", "title"],
  startTime: ["시작시간", "startTime", "시간", "time", "local_time"],
  reporter: ["취재기자", "reporter"],
  tvu: ["TVU", "tvu"],
};
const scheduleBridgePanelDefaults = captureScheduleBridgePanelDefaults();
const storageBridgePanelDefaults = captureStorageBridgePanelDefaults();
const mediaBridgePanelDefaults = captureMediaBridgePanelDefaults();
const opsBridgePanelDefaults = captureOpsBridgePanelDefaults();
const matchMapBridgePanelDefaults = captureMatchMapBridgePanelDefaults();
const squadBridgePanelDefaults = captureSquadBridgePanelDefaults();
const equipmentBridgePanelDefaults = captureEquipmentBridgePanelDefaults();

const WC26_VIEW_MAP = {
  dashboard: "#view-dashboard",
  "match-schedule": "#view-match-schedule",
  schedule: "#view-schedule",
  "field-ops": "#view-field-ops",
  map: "#view-map",
  archive: "#view-archive",
  "broadcast-news": "#view-broadcast-news",
  operations: "#view-operations",
};

const OFFICIAL_SITE_LINKS = [
  { code: "FIFA", label: "FIFA 공식 사이트", shortLabel: "FIFA", url: "https://www.fifa.com/", note: "FIFA 공식 홈페이지" },
  { code: "FIFA MEDIA", label: "FIFA Media Hub", shortLabel: "FIFA Media Hub", url: "https://media.fifa.com/en/home", note: "FIFA 미디어 허브" },
  { code: "KFA", label: "대한축구협회 공식 사이트", shortLabel: "KFA", url: "https://www.kfa.or.kr/", note: "KFA 공식 홈페이지" },
  { code: "KFA MEDIA", label: "KFA 미디어채널", shortLabel: "KFA 미디어채널", url: "https://media.kfa.or.kr/", note: "KFA 미디어채널" },
];

const WC26_PANEL_RULES = {
  mainMatch: {
    panel: "#panel-main-match",
    maxItems: 1,
    summary: "shared-schedule-shell",
  },
  fieldStatus: {
    panel: "#panel-field-status",
    maxItems: 6,
    summary: "accumulated-schedule-equipment-place-shell",
    fields: ["name", "place", "TVU", "TRS"],
  },
  upcoming: {
    panel: "#panel-upcoming",
    summary: "daily-match-carousel",
    overflow: "carousel",
  },
  schedule: {
    panel: "#panel-schedule",
    summary: "official-site-links",
  },
  broadcastStatus: {
    panel: "#panel-equipment",
    summary: "broadcast-onair-status",
    refreshIntervalMs: 60000,
  },
  stadium: {
    panel: "#panel-ops-alert",
    summary: "stadium-shell",
    fields: ["stadiumName", "stadiumImage", "city", "matchDate"],
  },
  quickActions: {
    panel: "#quick-actions",
    maxItems: 6,
    summary: "fixed-six-buttons",
  },
  ticker: {
    panel: "#ops-ticker",
    summary: "today-accumulated-schedule",
  },
  operations: {
    label: "운영",
    sections: ["operation-memo", "official-links", "operation-status"],
    targetSelectors: ["#view-operations", "#panel-schedule", "#panel-sync"],
  },
};

const WC26_TICKER_RULES = {
  todayAccumulatedSchedule: {
    panel: "#ops-ticker",
    content: "#accumulated-ticker-content",
    source: "future-accumulated-schedule",
    dateBasis: "today",
    summary: "daily-accumulated-items",
    emptyLabel: "당일 누적일정 이식 예정",
  },
};

const WC26_MENU_GROUPS = {
  dashboard: {
    label: "메인",
    sections: ["main"],
    targetSelectors: [
      "#panel-main-match",
      "#panel-field-status",
      "#panel-upcoming",
      "#panel-schedule",
      "#panel-equipment",
      "#panel-ops-alert",
    ],
  },
  schedule: {
    label: "일정현황",
    sections: ["all", "shared", "personal", "accumulated", "export"],
    targetSelectors: ["#view-schedule"],
  },
  "match-schedule": {
    label: "경기일정",
    sections: ["group-stage", "third-place-ranking", "bracket", "squad"],
    targetSelectors: ["#view-match-schedule"],
  },
  "field-ops": {
    label: "장비운영",
    sections: ["equipment-summary", "personal-summary", "carnet"],
    targetSelectors: ["#view-field-ops"],
  },
  map: {
    label: "MAP/장소",
    sections: ["map", "venue"],
    targetSelectors: ["#view-map"],
  },
  archive: {
    label: "자료보관",
    sections: ["document", "file", "gallery", "video"],
    targetSelectors: ["#view-archive"],
  },
  "broadcast-news": {
    label: "방송/뉴스",
    sections: ["broadcast", "worldcup-news"],
    targetSelectors: ["#view-broadcast-news"],
  },
};

WC26_MENU_GROUPS.operations = {
  label: "운영",
  sections: ["operation-memo", "official-links", "operation-status"],
  targetSelectors: ["#view-operations", "#panel-schedule", "#panel-sync"],
};

const WC26_QUICK_ACTION_TARGETS = {
  "quick-timeline": { target: "schedule", section: "all" },
  "quick-schedule": { target: "schedule", section: "personal" },
  "quick-equipment": { target: "field-ops", section: "equipment-summary" },
  "quick-map": { target: "map", section: "map" },
  "quick-archive": { target: "archive", section: "gallery" },
  "quick-news": { target: "broadcast-news", section: "worldcup-news" },
};

const WC26_DASHBOARD_PANEL_SECTION_DEFAULTS = {
  schedule: "all",
  "field-ops": "equipment-summary",
  "match-schedule": "group-stage",
  map: "map",
  archive: "document",
  "broadcast-news": "broadcast",
  operations: "operation-status",
};

const WC26_SQUAD_DISPLAY_LABELS = {
  korea: "대한민국",
  mexico: "멕시코",
  southAfrica: "남아공",
  czech: "체코",
};

const WC26_KOREA_ROSTER = [
  { number: "-", position: "GK", name: "김승규", club: "", note: "", image: "images/rosters/korea/kim-seung-gyu.png" },
  { number: "-", position: "GK", name: "송범근", club: "", note: "", image: "images/rosters/korea/song-bum-keun.png" },
  { number: "-", position: "GK", name: "조현우", club: "", note: "", image: "images/rosters/korea/jo-hyeon-woo.png" },
  { number: "-", position: "DF", name: "김문환", club: "", note: "", image: "images/rosters/korea/kim-moon-hwan.png" },
  { number: "-", position: "DF", name: "김민재", club: "", note: "", image: "images/rosters/korea/kim-min-jae.png" },
  { number: "-", position: "DF", name: "김태현", club: "", note: "", image: "images/rosters/korea/kim-tae-hyeon.png" },
  { number: "-", position: "DF", name: "박진섭", club: "", note: "", image: "images/rosters/korea/park-jin-seop.png" },
  { number: "-", position: "DF", name: "설영우", club: "", note: "", image: "images/rosters/korea/seol-young-woo.png" },
  { number: "-", position: "DF", name: "젠스 카스트로프", club: "", note: "", image: "images/rosters/korea/jens-castrop.png" },
  { number: "-", position: "DF", name: "이기혁", club: "", note: "", image: "images/rosters/korea/lee-ki-hyeok.png" },
  { number: "-", position: "DF", name: "이태석", club: "", note: "", image: "images/rosters/korea/lee-tae-seok.png" },
  { number: "-", position: "DF", name: "이한범", club: "", note: "", image: "images/rosters/korea/lee-han-beom.png" },
  { number: "-", position: "DF", name: "조유민", club: "", note: "", image: "images/rosters/korea/cho-yu-min.png" },
  { number: "-", position: "MF", name: "김진규", club: "", note: "", image: "images/rosters/korea/kim-jin-gyu.png" },
  { number: "-", position: "MF", name: "배준호", club: "", note: "", image: "images/rosters/korea/bae-jun-ho.png" },
  { number: "-", position: "MF", name: "백승호", club: "", note: "", image: "images/rosters/korea/paik-seung-ho.png" },
  { number: "-", position: "MF", name: "양현준", club: "", note: "", image: "images/rosters/korea/yang-hyun-jun.png" },
  { number: "-", position: "MF", name: "엄지성", club: "", note: "", image: "images/rosters/korea/eom-ji-sung.png" },
  { number: "-", position: "MF", name: "이강인", club: "", note: "", image: "images/rosters/korea/lee-kang-in.png" },
  { number: "-", position: "MF", name: "이동경", club: "", note: "", image: "images/rosters/korea/lee-dong-gyeong.png" },
  { number: "-", position: "MF", name: "이재성", club: "", note: "", image: "images/rosters/korea/lee-jae-sung.png" },
  { number: "-", position: "MF", name: "황인범", club: "", note: "", image: "images/rosters/korea/hwang-in-beom.png" },
  { number: "-", position: "MF", name: "황희찬", club: "", note: "", image: "images/rosters/korea/hwang-hee-chan.png" },
  { number: "-", position: "FW", name: "손흥민", club: "", note: "", image: "images/rosters/korea/son-heung-min.png" },
  { number: "-", position: "FW", name: "오현규", club: "", note: "", image: "images/rosters/korea/oh-hyeon-gyu.png" },
  { number: "-", position: "FW", name: "조규성", club: "", note: "", image: "images/rosters/korea/cho-gue-sung.png" },
];

const WC26_OPS_MEMO_STORAGE_KEY = "wc26_new_suit_ops_memo_pad_v1";

const WC26_STAGE_LABELS = {
  group: "조별리그",
  "third-place-ranking": "각조 3위 순위",
  "round-32": "32강",
  "round-16": "16강",
  quarterfinal: "8강",
  semifinal: "4강",
  "third-place-match": "3·4위전",
  final: "결승",
};
const WC26_MATCH_RESULT_STAGE_LABELS = {
  round32: "32강",
  round16: "16강",
  quarterfinal: "8강",
  semifinal: "4강",
  thirdPlaceMatch: "3·4위전",
  final: "결승",
};

const WC26_DAILY_MATCH_INTERVAL = 7000;
const WC26_DAILY_MATCH_RESUME_DELAY = 12000;
const WC26_LOCAL_TIME_ZONE = "America/New_York";
const WC26_MOBILE_MEDIA_QUERY = window.matchMedia("(max-width: 767px)");

function getLocalDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: WC26_LOCAL_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function normalizeDailyMatchDateKey(value = "") {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  const normalized = raw
    .slice(0, 10)
    .replace(/[./]/g, "-")
    .replace(/\s+/g, "");

  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    return "";
  }

  const [year, month, day] = normalized.split("-").map((part) => Number(part));
  const candidate = new Date(Date.UTC(year, month - 1, day));
  if (
    Number.isNaN(candidate.getTime()) ||
    candidate.getUTCFullYear() !== year ||
    candidate.getUTCMonth() !== month - 1 ||
    candidate.getUTCDate() !== day
  ) {
    return "";
  }

  return normalized;
}

function getDailyMatchSource() {
  if (Array.isArray(window.WC26_MATCH_SCHEDULE_DATA) && window.WC26_MATCH_SCHEDULE_DATA.length) {
    return window.WC26_MATCH_SCHEDULE_DATA;
  }

  if (Array.isArray(window.WC26_MATCHES) && window.WC26_MATCHES.length) {
    return window.WC26_MATCHES;
  }

  if (Array.isArray(window.WC26_SCHEDULE_MATCHES) && window.WC26_SCHEDULE_MATCHES.length) {
    return window.WC26_SCHEDULE_MATCHES;
  }

  if (Array.isArray(matchMapBridgeSummaryState?.upcomingMatches) && matchMapBridgeSummaryState.upcomingMatches.length) {
    window.WC26_MATCH_SCHEDULE_DATA = matchMapBridgeSummaryState.upcomingMatches;
    return matchMapBridgeSummaryState.upcomingMatches;
  }

  const syncWindow = getScheduleBridgeSyncWindow();
  const directSummary =
    syncWindow && typeof syncWindow.getWC26LegacyMatchMapSummary === "function"
      ? syncWindow.getWC26LegacyMatchMapSummary()
      : null;
  const directMatches = Array.isArray(directSummary?.upcomingMatches) ? directSummary.upcomingMatches : [];
  if (directMatches.length) {
    window.WC26_MATCH_SCHEDULE_DATA = directMatches;
    return directMatches;
  }

  return [];
}

function adaptDailyMatch(match) {
  if (!match || typeof match !== "object") {
    return null;
  }

  const matchDate = match.matchDate || match.date || match.localDate || "";
  const normalizedDate = normalizeDailyMatchDateKey(matchDate);

  if (!normalizedDate) {
    return null;
  }

  const normalizedNumber = String(match.number || match.matchNo || match.matchId || "").trim();
  const normalizedLocalTime = String(match.localTime || match.time || "--:--").trim() || "--:--";
  const normalizedKoreaTime = String(match.koreaTime || "").trim();
  const normalizedGroupName = String(match.groupName || match.round || match.stage || "").trim();
  const normalizedHomeTeam = String(match.homeTeam || match.home || "").trim();
  const normalizedAwayTeam = String(match.awayTeam || match.away || "").trim();
  const normalizedStadium = String(match.stadium || match.venue || "").trim();
  const normalizedCity = String(match.city || "").trim();
  const normalizedStatus = String(match.status || "").trim();
  const normalizedDateLabel = String(match.date || match.localDate || normalizedDate).trim() || normalizedDate;

  return {
    number: normalizedNumber,
    dateLabel: normalizedDateLabel,
    matchDate: normalizedDate,
    localTime: normalizedLocalTime,
    koreaTime: normalizedKoreaTime,
    groupName: normalizedGroupName,
    homeTeam: normalizedHomeTeam,
    awayTeam: normalizedAwayTeam,
    stadium: normalizedStadium,
    city: normalizedCity,
    status: normalizedStatus,
  };
}

function getDailyMatchesForDate(dateKey) {
  return getDailyMatchSource()
    .map(adaptDailyMatch)
    .filter(Boolean)
    .filter((match) => match.matchDate === dateKey);
}

function getNearestDailyMatchDate(allMatches = [], todayKey = getLocalDateKey(), selectedDate = "") {
  const availableDates = Array.from(new Set((Array.isArray(allMatches) ? allMatches : []).map((match) => match.matchDate)))
    .filter(Boolean)
    .sort();

  const normalizedSelectedDate = normalizeDailyMatchDateKey(selectedDate);
  if (normalizedSelectedDate) {
    return normalizedSelectedDate;
  }

  if (!availableDates.length) {
    return null;
  }

  const normalizedTodayKey = normalizeDailyMatchDateKey(todayKey) || todayKey;
  if (availableDates.includes(normalizedTodayKey)) {
    return normalizedTodayKey;
  }

  const nextDate = availableDates.find((dateKey) => dateKey > normalizedTodayKey);
  if (nextDate) {
    return nextDate;
  }

  return availableDates[availableDates.length - 1] || null;
}

function stopDailyMatchAuto() {
  window.clearInterval(dailyMatchTimer);
  dailyMatchTimer = null;
}

function startDailyMatchAuto() {
  stopDailyMatchAuto();

  if (dailyMatchItems.length < 2) {
    return;
  }

  dailyMatchTimer = window.setInterval(() => {
    setDailyMatchSlide(dailyMatchActiveIndex + 1);
  }, WC26_DAILY_MATCH_INTERVAL);
}

function pauseDailyMatchAuto() {
  stopDailyMatchAuto();
  window.clearTimeout(dailyMatchResumeTimer);

  if (dailyMatchItems.length < 2) {
    return;
  }

  dailyMatchResumeTimer = window.setTimeout(startDailyMatchAuto, WC26_DAILY_MATCH_RESUME_DELAY);
}

function restartDailyMatchAuto() {
  window.clearTimeout(dailyMatchResumeTimer);
  startDailyMatchAuto();
}

function stopMobileHomeMatchPreviewAuto() {
  window.clearInterval(mobileHomeMatchPreviewTimer);
  mobileHomeMatchPreviewTimer = null;
}

function startMobileHomeMatchPreviewAuto() {
  stopMobileHomeMatchPreviewAuto();

  if (mobileHomeMatchPreviewItems.length < 2) {
    return;
  }

  mobileHomeMatchPreviewTimer = window.setInterval(() => {
    setMobileHomeMatchPreviewSlide(mobileHomeMatchPreviewActiveIndex + 1);
  }, WC26_DAILY_MATCH_INTERVAL);
}

function pauseMobileHomeMatchPreviewAuto() {
  stopMobileHomeMatchPreviewAuto();
  window.clearTimeout(mobileHomeMatchPreviewResumeTimer);

  if (mobileHomeMatchPreviewItems.length < 2) {
    return;
  }

  mobileHomeMatchPreviewResumeTimer = window.setTimeout(startMobileHomeMatchPreviewAuto, WC26_DAILY_MATCH_RESUME_DELAY);
}

function restartMobileHomeMatchPreviewAuto() {
  window.clearTimeout(mobileHomeMatchPreviewResumeTimer);
  startMobileHomeMatchPreviewAuto();
}

function setDailyMatchSlide(nextIndex) {
  const carousel = document.querySelector("#daily-match-carousel");
  const slides = carousel ? Array.from(carousel.querySelectorAll(".daily-match-slide")) : [];
  const dots = carousel ? Array.from(carousel.querySelectorAll(".daily-match-dot")) : [];

  if (!slides.length) {
    dailyMatchActiveIndex = 0;
    return;
  }

  dailyMatchActiveIndex = ((nextIndex % slides.length) + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.hidden = index !== dailyMatchActiveIndex;
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === dailyMatchActiveIndex);
  });
}

function createDailyMatchTeam(teamName = "", side = "home") {
  const meta = typeof getGroupATeamMeta === "function" ? getGroupATeamMeta(teamName) : { ko: teamName || "-", flag: "" };
  const team = document.createElement("div");
  team.className = `daily-match-team daily-match-team--${side}`;

  if (meta.flag) {
    const image = document.createElement("img");
    image.className = "daily-match-team-flag";
    image.src = `https://flagcdn.com/${meta.flag}.svg`;
    image.alt = `${meta.ko || teamName || "국가"} 국기`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 96;
    image.height = 64;
    image.draggable = false;
    team.append(image);
  }

  const name = document.createElement("strong");
  name.className = "daily-match-team-name";
  name.textContent = meta.ko || teamName || "-";
  team.append(name);
  return team;
}

function createDailyMatchLogo() {
  const logoWrap = document.createElement("div");
  logoWrap.className = "daily-match-logo";
  const logo = document.createElement("img");
  logo.src = WC26_GROUP_A_MATCH_LOGO_PATH;
  logo.alt = "FIFA World Cup 2026";
  logo.loading = "lazy";
  logo.decoding = "async";
  logo.draggable = false;
  logoWrap.append(logo);
  return logoWrap;
}

function getMobileHomeMatchPreviewMatches() {
  const entries = getDailyMatchSource()
    .map((rawMatch) => ({ rawMatch, adaptedMatch: adaptDailyMatch(rawMatch) }))
    .filter((entry) => entry.adaptedMatch);
  const allMatches = entries.map((entry) => entry.adaptedMatch);
  const targetDate = getNearestDailyMatchDate(allMatches, getLocalDateKey(), dailyMatchSelectedDate || "");

  if (!targetDate) {
    return [];
  }

  return entries
    .filter((entry) => entry.adaptedMatch.matchDate === targetDate)
    .map(({ rawMatch, adaptedMatch }) => {
      const stadiumName = sanitizeGroupAStadiumName(adaptedMatch.stadium, "경기장 미정");
      return {
        key: [adaptedMatch.number, adaptedMatch.homeTeam, adaptedMatch.awayTeam, adaptedMatch.matchDate, stadiumName].join("::"),
        number: adaptedMatch.number,
        groupName: adaptedMatch.groupName,
        home: adaptedMatch.homeTeam,
        away: adaptedMatch.awayTeam,
        localTime: adaptedMatch.localTime || "--:--",
        koreaTime: adaptedMatch.koreaTime || "--:--",
        stadium: stadiumName,
        stadiumImage: resolveWC26StadiumImagePath(
          stadiumName,
          rawMatch?.stadiumImage || rawMatch?.imagePath || rawMatch?.image || "",
        ),
      };
    })
    .filter((match) => match.home && match.away);
}

function setMobileHomeMatchPreviewSlide(index = 0) {
  const count = mobileHomeMatchPreviewItems.length;
  if (!count) {
    mobileHomeMatchPreviewActiveIndex = 0;
    renderMobileHomeMatchPreview();
    return;
  }
  mobileHomeMatchPreviewActiveIndex = ((index % count) + count) % count;
  renderMobileHomeMatchPreview();
}

function bindMobileHomeMatchPreviewGestures() {
  if (!mobileHomeMatchPreview || mobileHomeMatchPreviewGestureBound) {
    return;
  }

  mobileHomeMatchPreviewGestureBound = true;
  const canSwipe = () => mobileHomeMatchPreviewItems.length > 1;
  const commitSwipe = (deltaX = 0, deltaY = 0) => {
    if (Math.abs(deltaX) < WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    setMobileHomeMatchPreviewSlide(mobileHomeMatchPreviewActiveIndex + (deltaX < 0 ? 1 : -1));
    pauseMobileHomeMatchPreviewAuto();
  };

  if (window.PointerEvent) {
    mobileHomeMatchPreview.addEventListener("pointerdown", (event) => {
      if (!canSwipe()) {
        return;
      }
      mobileHomeMatchPreviewPointerGesture = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
      };
    });

    mobileHomeMatchPreview.addEventListener("pointermove", (event) => {
      if (!mobileHomeMatchPreviewPointerGesture || mobileHomeMatchPreviewPointerGesture.pointerId !== event.pointerId) {
        return;
      }
      mobileHomeMatchPreviewPointerGesture.lastX = event.clientX;
      mobileHomeMatchPreviewPointerGesture.lastY = event.clientY;
      const deltaX = event.clientX - mobileHomeMatchPreviewPointerGesture.startX;
      const deltaY = event.clientY - mobileHomeMatchPreviewPointerGesture.startY;
      if (Math.abs(deltaX) >= WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
        event.preventDefault();
      }
    }, { passive: false });

    const finishPointerGesture = (event) => {
      if (!mobileHomeMatchPreviewPointerGesture || mobileHomeMatchPreviewPointerGesture.pointerId !== event.pointerId) {
        return;
      }
      const deltaX = (event.clientX ?? mobileHomeMatchPreviewPointerGesture.lastX) - mobileHomeMatchPreviewPointerGesture.startX;
      const deltaY = (event.clientY ?? mobileHomeMatchPreviewPointerGesture.lastY) - mobileHomeMatchPreviewPointerGesture.startY;
      mobileHomeMatchPreviewPointerGesture = null;
      commitSwipe(deltaX, deltaY);
    };

    window.addEventListener("pointerup", finishPointerGesture);
    window.addEventListener("pointercancel", finishPointerGesture);
    return;
  }

  mobileHomeMatchPreview.addEventListener("touchstart", (event) => {
    if (!canSwipe() || !event.touches.length) {
      return;
    }
    const touch = event.touches[0];
    mobileHomeMatchPreviewTouchGesture = {
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
    };
  }, { passive: true });

  mobileHomeMatchPreview.addEventListener("touchmove", (event) => {
    if (!mobileHomeMatchPreviewTouchGesture || !event.touches.length) {
      return;
    }
    const touch = event.touches[0];
    mobileHomeMatchPreviewTouchGesture.lastX = touch.clientX;
    mobileHomeMatchPreviewTouchGesture.lastY = touch.clientY;
    const deltaX = touch.clientX - mobileHomeMatchPreviewTouchGesture.startX;
    const deltaY = touch.clientY - mobileHomeMatchPreviewTouchGesture.startY;
    if (Math.abs(deltaX) >= WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
      event.preventDefault();
    }
  }, { passive: false });

  const finishTouchGesture = () => {
    if (!mobileHomeMatchPreviewTouchGesture) {
      return;
    }
    const deltaX = mobileHomeMatchPreviewTouchGesture.lastX - mobileHomeMatchPreviewTouchGesture.startX;
    const deltaY = mobileHomeMatchPreviewTouchGesture.lastY - mobileHomeMatchPreviewTouchGesture.startY;
    mobileHomeMatchPreviewTouchGesture = null;
    commitSwipe(deltaX, deltaY);
  };

  mobileHomeMatchPreview.addEventListener("touchend", finishTouchGesture, { passive: true });
  mobileHomeMatchPreview.addEventListener("touchcancel", finishTouchGesture, { passive: true });
}

function renderMobileHomeMatchPreview() {
  if (!mobileHomeMatchPreview || !mobileHomeMatchPreviewShell) {
    return;
  }

  const nextItems = getMobileHomeMatchPreviewMatches();
  const previousKey = mobileHomeMatchPreviewItems[mobileHomeMatchPreviewActiveIndex]?.key || "";
  mobileHomeMatchPreviewItems = nextItems;

  if (!mobileHomeMatchPreviewItems.length) {
    mobileHomeMatchPreview.hidden = true;
    mobileHomeMatchPreviewShell.replaceChildren();
    mobileHomeMatchPreviewActiveIndex = 0;
    stopMobileHomeMatchPreviewAuto();
    return;
  }

  const preservedIndex = previousKey
    ? mobileHomeMatchPreviewItems.findIndex((match) => match.key === previousKey)
    : -1;
  if (preservedIndex >= 0) {
    mobileHomeMatchPreviewActiveIndex = preservedIndex;
  } else if (mobileHomeMatchPreviewActiveIndex >= mobileHomeMatchPreviewItems.length) {
    mobileHomeMatchPreviewActiveIndex = 0;
  }

  const activeMatch = mobileHomeMatchPreviewItems[mobileHomeMatchPreviewActiveIndex] || mobileHomeMatchPreviewItems[0];
  const feature = createGroupAMatchFeature(
    activeMatch,
    mobileHomeMatchPreviewItems.length,
    mobileHomeMatchPreviewActiveIndex,
    (nextIndex) => {
      setMobileHomeMatchPreviewSlide(nextIndex);
      restartMobileHomeMatchPreviewAuto();
    },
  );
  feature.classList.add("mobile-home-match-card");

  mobileHomeMatchPreview.hidden = false;
  mobileHomeMatchPreviewShell.replaceChildren(feature);
  bindMobileHomeMatchPreviewGestures();
  startMobileHomeMatchPreviewAuto();
}

function createDailyMatchSlide(match, index, total) {
  const slide = document.createElement("article");
  slide.className = "daily-match-slide";
  slide.hidden = index !== 0;

  const header = document.createElement("div");
  header.className = "daily-match-head";
  header.append(
    Object.assign(document.createElement("strong"), {
      className: "daily-match-number",
      textContent: match.number || "MATCH",
    }),
    Object.assign(document.createElement("span"), {
      className: "daily-match-group",
      textContent: match.groupName || "월드컵 경기 일정",
    }),
  );

  const matchup = document.createElement("div");
  matchup.className = "daily-match-matchup";
  matchup.append(createDailyMatchTeam(match.homeTeam, "home"), createDailyMatchLogo(), createDailyMatchTeam(match.awayTeam, "away"));

  const info = document.createElement("div");
  info.className = "daily-match-info";
  info.append(
    Object.assign(document.createElement("span"), {
      className: "daily-match-date",
      textContent: match.dateLabel || match.matchDate || "날짜 미정",
    }),
    Object.assign(document.createElement("span"), {
      className: "daily-match-kickoff",
      textContent: `현지시각 ${match.localTime || "--:--"} / 한국시각 ${match.koreaTime || "--:--"}`,
    }),
    Object.assign(document.createElement("i"), {
      className: "daily-match-venue",
      textContent: match.stadium || "경기장 미정",
    }),
  );

  const counter = document.createElement("div");
  counter.className = "daily-match-counter";
  counter.textContent = `${index + 1}/${total}`;

  slide.append(header, matchup, info, counter);
  return slide;
}

function createDailyMatchDot(index) {
  const dot = document.createElement("button");
  dot.className = "daily-match-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `${index + 1}번 경기 보기`);
  dot.addEventListener("click", () => {
    setDailyMatchSlide(index);
    restartDailyMatchAuto();
  });
  return dot;
}

function renderDailyMatchCarousel() {
  const track = document.querySelector("#daily-match-track");
  const empty = document.querySelector("#daily-match-empty");
  const controls = document.querySelector("#daily-match-controls");
  const dots = document.querySelector("#daily-match-dots");
  const dateLabel = document.querySelector("#daily-match-date-label");
  const allMatches = getDailyMatchSource().map(adaptDailyMatch).filter(Boolean);
  const todayKey = getLocalDateKey();
  const selectedDate = dailyMatchSelectedDate || "";
  const targetDate = getNearestDailyMatchDate(allMatches, todayKey, selectedDate);
  const labelText =
    targetDate === todayKey ? "오늘 경기" : targetDate && targetDate > todayKey ? "다음 경기" : targetDate ? "최근 경기" : "경기 일정";

  if (!track || !empty || !controls || !dots) {
    renderMobileHomeMatchPreview();
    return;
  }

  if (!allMatches.length && !dailyMatchSummaryRequested) {
    dailyMatchSummaryRequested = true;
    window.setTimeout(() => {
      ensureScheduleSummaryBridgeLoaded();
      requestMatchMapBridgeSummary();
    }, 0);
  }

  dailyMatchItems = allMatches.filter((match) => match.matchDate === targetDate);
  dailyMatchActiveIndex = 0;
  stopDailyMatchAuto();
  track.replaceChildren();
  dots.replaceChildren();

  if (dateLabel) {
    dateLabel.textContent = labelText;
  }

  if (!targetDate || !dailyMatchItems.length) {
    empty.textContent = "표시할 경기일정이 없습니다.";
    empty.hidden = false;
    controls.hidden = true;
    renderMobileHomeMatchPreview();
    return;
  }

  empty.hidden = true;
  dailyMatchItems.forEach((match, index) => {
    track.append(createDailyMatchSlide(match, index, dailyMatchItems.length));
    dots.append(createDailyMatchDot(index));
  });

  controls.hidden = dailyMatchItems.length < 2;
  setDailyMatchSlide(0);
  startDailyMatchAuto();
  renderMobileHomeMatchPreview();
}

function initDailyMatchCarousel() {
  const carousel = document.querySelector("#daily-match-carousel");

  if (!carousel) {
    return;
  }

  carousel.querySelectorAll("[data-carousel-action]").forEach((button) => {
    button.hidden = true;
    button.addEventListener("click", () => {
      const direction = button.dataset.carouselAction === "prev" ? -1 : 1;
      setDailyMatchSlide(dailyMatchActiveIndex + direction);
      restartDailyMatchAuto();
    });
  });

  if (!dailyMatchGestureBound) {
    dailyMatchGestureBound = true;
    const canSwipe = () => dailyMatchItems.length > 1;
    const commitSwipe = (deltaX = 0, deltaY = 0) => {
      if (Math.abs(deltaX) < WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }
      setDailyMatchSlide(dailyMatchActiveIndex + (deltaX < 0 ? 1 : -1));
      restartDailyMatchAuto();
    };

    if ("PointerEvent" in window) {
      carousel.addEventListener("pointerdown", (event) => {
        if (!canSwipe() || !event.isPrimary || event.target.closest(".daily-match-dot")) {
          return;
        }
        if (event.pointerType === "mouse" && event.button !== 0) {
          return;
        }
        dailyMatchPointerGesture = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          lastX: event.clientX,
          lastY: event.clientY,
        };
      });

      window.addEventListener("pointermove", (event) => {
        if (!dailyMatchPointerGesture || dailyMatchPointerGesture.pointerId !== event.pointerId) {
          return;
        }
        dailyMatchPointerGesture.lastX = event.clientX;
        dailyMatchPointerGesture.lastY = event.clientY;
        const deltaX = event.clientX - dailyMatchPointerGesture.startX;
        const deltaY = event.clientY - dailyMatchPointerGesture.startY;
        if (Math.abs(deltaX) >= WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
          event.preventDefault();
        }
      }, { passive: false });

      const finishPointerGesture = (event) => {
        if (!dailyMatchPointerGesture || dailyMatchPointerGesture.pointerId !== event.pointerId) {
          return;
        }
        const deltaX = (event.clientX ?? dailyMatchPointerGesture.lastX) - dailyMatchPointerGesture.startX;
        const deltaY = (event.clientY ?? dailyMatchPointerGesture.lastY) - dailyMatchPointerGesture.startY;
        dailyMatchPointerGesture = null;
        if (!canSwipe()) {
          return;
        }
        commitSwipe(deltaX, deltaY);
      };

      window.addEventListener("pointerup", finishPointerGesture);
      window.addEventListener("pointercancel", finishPointerGesture);
    } else {
      carousel.addEventListener("touchstart", (event) => {
        if (!canSwipe() || !event.touches.length || event.target.closest(".daily-match-dot")) {
          return;
        }
        const touch = event.touches[0];
        dailyMatchTouchGesture = {
          startX: touch.clientX,
          startY: touch.clientY,
          lastX: touch.clientX,
          lastY: touch.clientY,
        };
      }, { passive: true });

      carousel.addEventListener("touchmove", (event) => {
        if (!dailyMatchTouchGesture || !event.touches.length) {
          return;
        }
        const touch = event.touches[0];
        dailyMatchTouchGesture.lastX = touch.clientX;
        dailyMatchTouchGesture.lastY = touch.clientY;
        const deltaX = touch.clientX - dailyMatchTouchGesture.startX;
        const deltaY = touch.clientY - dailyMatchTouchGesture.startY;
        if (Math.abs(deltaX) >= WC26_DAILY_MATCH_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
          event.preventDefault();
        }
      }, { passive: false });

      const finishTouchGesture = () => {
        if (!dailyMatchTouchGesture) {
          return;
        }
        const deltaX = dailyMatchTouchGesture.lastX - dailyMatchTouchGesture.startX;
        const deltaY = dailyMatchTouchGesture.lastY - dailyMatchTouchGesture.startY;
        dailyMatchTouchGesture = null;
        if (!canSwipe()) {
          return;
        }
        commitSwipe(deltaX, deltaY);
      };

      carousel.addEventListener("touchend", finishTouchGesture, { passive: true });
      carousel.addEventListener("touchcancel", finishTouchGesture, { passive: true });
    }
  }

  dailyMatchTodayKey = getLocalDateKey();
  renderDailyMatchCarousel();

  dailyMatchDateWatchTimer = window.setInterval(() => {
    const nextTodayKey = getLocalDateKey();

    if (!dailyMatchSelectedDate && nextTodayKey !== dailyMatchTodayKey) {
      dailyMatchTodayKey = nextTodayKey;
      renderDailyMatchCarousel();
    }
  }, 60000);

  window.WC26_DAILY_MATCH_CAROUSEL = {
    setMatches(matches) {
      if (Array.isArray(matches)) {
        window.WC26_MATCH_SCHEDULE_DATA = matches;
        renderDailyMatchCarousel();
      }
    },
    setSelectedDate(dateKey) {
      dailyMatchSelectedDate = dateKey || null;
      renderDailyMatchCarousel();
    },
    clearSelectedDate() {
      dailyMatchSelectedDate = null;
      dailyMatchTodayKey = getLocalDateKey();
      renderDailyMatchCarousel();
    },
    refresh() {
      renderDailyMatchCarousel();
    },
  };
}

const WC26_WORLD_CUP_OPENING_DATE = { year: 2026, month: 6, day: 11 };
const WC26_TIMELINE_GANTT_DAY_COUNT = 28;
const WC26_TIMELINE_MEMBER_ORDER = ["박재현", "장후원", "정상원", "이주원", "김진광", "정재우"];
const WC26_TIMELINE_STORAGE_KEY = "wc26_new_suit_timeline_blocks_v1";
const WC26_TIMELINE_BACKUP_PREFIX = `${WC26_TIMELINE_STORAGE_KEY}_backup`;
const WC26_TIMELINE_DEFAULT_START_DATE = "2026-05-23";
const WC26_TIMELINE_COLORS = ["#2fe0a4", "#47b8ff", "#ff9f68", "#ff6ea9", "#a78bfa", "#ffd166"];
const WC26_TIMELINE_NAME_COLUMN_WIDTH = 92;
const WC26_TIMELINE_DATE_CELL_WIDTH = 52;
const WC26_TIMELINE_DATE_GAP = 6;
const WC26_NEWS_BROADCASTERS = ["KBS", "MBC", "SBS"];
const WC26_CITY_TIMEZONE_MAP = {
  과달라하라: "America/Mexico_City",
  Guadalajara: "America/Mexico_City",
  "Mexico City": "America/Mexico_City",
  멕시코시티: "America/Mexico_City",
  Monterrey: "America/Monterrey",
  몬테레이: "America/Monterrey",
  Seattle: "America/Los_Angeles",
  시애틀: "America/Los_Angeles",
  Boston: "America/New_York",
  보스턴: "America/New_York",
  Miami: "America/New_York",
  마이애미: "America/New_York",
  Atlanta: "America/New_York",
  애틀랜타: "America/New_York",
  Toronto: "America/Toronto",
  토론토: "America/Toronto",
};
const WC26_STADIUM_CITY_MAP = {
  "Mexico City Stadium": "Mexico City",
  "Estadio Guadalajara": "Guadalajara",
  "Estadio Monterrey": "Monterrey",
  "Atlanta Stadium": "Atlanta",
};

function getTopbarLocalPlaceNode() {
  return document.getElementById("new-suit-local-place") || document.querySelector(".dday-panel .dday-label");
}

function getTopbarDdayNode() {
  return document.getElementById("new-suit-dday") || document.querySelector(".dday-panel .dday-value");
}

function formatTopbarClock(timeZone = "Asia/Seoul") {
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch (_error) {
    return "00:00";
  }
}

function resolveDashboardLocalPlace() {
  const localPlace =
    String(window.WC26_CURRENT_STADIUM?.city || "").trim() ||
    window.localStorage?.getItem("wc26_new_suit_local_place_v1") ||
    "과달라하라";
  return localPlace;
}

function resolveDashboardLocalTimeZone(place = "") {
  const normalizedPlace = String(place || "").trim();
  return WC26_CITY_TIMEZONE_MAP[normalizedPlace] || "America/Mexico_City";
}

function resolveGroupAMatchCity(match = {}) {
  const normalizedCity = String(match.city || "").trim();
  if (normalizedCity) {
    return normalizedCity;
  }
  return WC26_STADIUM_CITY_MAP[String(match.stadium || "").trim()] || "";
}

function convertGroupAKoreaTimeToLocal(match = {}, koreaTimeText = "") {
  const normalizedDate = String(match.date || match.matchDate || match.localDate || "").trim().slice(0, 10);
  const normalizedKoreaTime = extractGroupAMatchClock(koreaTimeText);
  const resolvedCity = resolveGroupAMatchCity(match);
  const timeZone = WC26_CITY_TIMEZONE_MAP[resolvedCity] || "";
  if (!normalizedDate || !normalizedKoreaTime || !timeZone) {
    return "";
  }

  const kickoffDate = new Date(`${normalizedDate}T${normalizedKoreaTime}:00+09:00`);
  if (Number.isNaN(kickoffDate.getTime())) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(kickoffDate);
  } catch (_error) {
    return "";
  }
}

function getWorldCupDDayParts(referenceDate = new Date()) {
  const today = referenceDate instanceof Date ? referenceDate : new Date(referenceDate);
  const localToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const kickoff = new Date(WC26_WORLD_CUP_OPENING_DATE.year, WC26_WORLD_CUP_OPENING_DATE.month - 1, WC26_WORLD_CUP_OPENING_DATE.day);
  const diffDays = Math.round((kickoff.getTime() - localToday.getTime()) / 86400000);
  if (diffDays > 0) {
    return {
      mode: "countdown",
      prefix: "D-",
      number: String(diffDays),
      text: `D-${String(diffDays)}`,
    };
  }
  if (diffDays === 0) {
    return {
      mode: "day",
      prefix: "",
      number: "",
      text: "D-DAY",
    };
  }
  return {
    mode: "after",
    prefix: "D+",
    number: String(Math.abs(diffDays)),
    text: `D+${String(Math.abs(diffDays))}`,
  };
}

function renderTopbarStatusInfo() {
  const localPlaceNode = getTopbarLocalPlaceNode();
  const ddayNode = getTopbarDdayNode();
  const localPlace = resolveDashboardLocalPlace();
  const localTimeZone = resolveDashboardLocalTimeZone(localPlace);
  const localClock = formatTopbarClock(localTimeZone) || "--:--";
  const seoulClock = formatTopbarClock("Asia/Seoul") || "--:--";
  const dday = getWorldCupDDayParts();
  if (localPlaceNode) {
    localPlaceNode.textContent = localPlace;
  }
  if (topbarLocalTimeNode) {
    topbarLocalTimeNode.textContent = localClock;
  }
  if (topbarSeoulTimeNode) {
    topbarSeoulTimeNode.textContent = seoulClock;
  }
  if (mobileHeaderLocalTimeNode) {
    mobileHeaderLocalTimeNode.textContent = localClock;
  }
  if (mobileHeaderSeoulTimeNode) {
    mobileHeaderSeoulTimeNode.textContent = seoulClock;
  }
  if (ddayNode) {
    if (dday.mode === "day") {
      ddayNode.classList.add("is-day");
      ddayNode.textContent = dday.text;
    } else {
      ddayNode.classList.remove("is-day");
      ddayNode.innerHTML = "";
      const copy = document.createElement("span");
      copy.className = "dday-copy";
      const label = document.createElement("span");
      label.className = "dday-label";
      label.textContent = "월드컵 개막";
      const prefix = document.createElement("span");
      prefix.className = "dday-prefix";
      prefix.textContent = dday.prefix;
      const number = document.createElement("span");
      number.className = "dday-number";
      number.textContent = dday.number;
      copy.append(label, prefix);
      ddayNode.append(copy, number);
    }
  }
  if (mobileHeaderDdayNode) {
    mobileHeaderDdayNode.textContent = dday.text;
  }
  if (topbarVersionNode) {
    topbarVersionNode.textContent = "";
  }
}

function startTopbarStatusTicker() {
  renderTopbarStatusInfo();
  window.clearInterval(topbarTimeTickerId);
  topbarTimeTickerId = window.setInterval(renderTopbarStatusInfo, 30000);
}

function ensureMediaNewsControlRow() {
  let row = document.getElementById("media-news-control-row");
  if (row) {
    return row;
  }
  const yearToolbar = document.getElementById("media-news-year-toolbar");
  const frameShell = document.getElementById("media-bridge-frame-shell");
  if (!yearToolbar || !frameShell || !yearToolbar.parentNode) {
    return null;
  }
  row = document.createElement("div");
  row.className = "media-news-control-row";
  row.id = "media-news-control-row";
  row.hidden = true;
  yearToolbar.parentNode.insertBefore(row, frameShell);
  return row;
}

function ensureMediaBroadcasterToolbar() {
  let toolbar = document.getElementById("media-news-broadcaster-toolbar");
  if (toolbar) {
    const row = ensureMediaNewsControlRow();
    if (row && toolbar.parentNode !== row) {
      row.insertBefore(toolbar, row.firstChild);
    }
    return toolbar;
  }
  const row = ensureMediaNewsControlRow();
  if (!row) {
    return null;
  }
  toolbar = document.createElement("div");
  toolbar.className = "schedule-bridge-toolbar schedule-bridge-toolbar--secondary media-news-broadcaster-tabs";
  toolbar.id = "media-news-broadcaster-toolbar";
  toolbar.setAttribute("aria-label", "worldcup news broadcaster navigation");
  toolbar.hidden = true;
  WC26_NEWS_BROADCASTERS.forEach((broadcaster, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `schedule-bridge-button${index === 0 ? " is-active" : ""}`;
    button.dataset.mediaNewsBroadcaster = broadcaster;
    button.textContent = broadcaster;
    button.addEventListener("click", () => {
      setMediaBridgeNewsBroadcaster(broadcaster);
    });
    toolbar.appendChild(button);
  });
  row.insertBefore(toolbar, row.firstChild);
  return toolbar;
}

function ensureMediaNewsActionsToolbar() {
  let toolbar = document.getElementById("media-news-actions-toolbar");
  if (toolbar) {
    const row = ensureMediaNewsControlRow();
    if (row && toolbar.parentNode !== row) {
      row.appendChild(toolbar);
    }
    return toolbar;
  }
  const row = ensureMediaNewsControlRow();
  if (!row) {
    return null;
  }
  toolbar = document.createElement("div");
  toolbar.className = "schedule-bridge-toolbar schedule-bridge-toolbar--secondary media-news-actions-toolbar";
  toolbar.id = "media-news-actions-toolbar";
  toolbar.setAttribute("aria-label", "worldcup news edit actions");
  toolbar.hidden = true;
  [
    ["create", "작성"],
    ["edit", "수정"],
    ["delete", "삭제"],
  ].forEach(([action, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "schedule-bridge-button";
    button.dataset.mediaNewsAction = action;
    button.textContent = label;
    button.addEventListener("click", () => {
      runMediaNewsAction(action);
    });
    toolbar.appendChild(button);
  });
  row.appendChild(toolbar);
  return toolbar;
}

function getMediaNewsBroadcasterButtons() {
  return Array.from(document.querySelectorAll("[data-media-news-broadcaster]"));
}

function setMediaNewsBroadcasterButtonState(broadcaster = "KBS") {
  const normalized = String(broadcaster || "KBS").trim() || "KBS";
  getMediaNewsBroadcasterButtons().forEach((button) => {
    button.classList.toggle("is-active", String(button.dataset.mediaNewsBroadcaster || "").trim() === normalized);
  });
}

function setMediaBridgeNewsBroadcaster(broadcaster = "KBS") {
  mediaBridgeNewsBroadcaster = String(broadcaster || "KBS").trim() || "KBS";
  syncMediaBridgeUi();
  postMediaBridgeNavigation("worldcup-news");
  [80, 220, 480].forEach((delay) => {
    window.setTimeout(() => {
      applyMediaBridgeNewsYearSelection();
    }, delay);
  });
}

function runMediaNewsAction(action = "") {
  if (mediaBridgeSection !== "worldcup-news") {
    return;
  }
  if (!loadLazyIframe(mediaBridgeFrame)) {
    return;
  }
  const legacyWindow = mediaBridgeFrame?.contentWindow;
  const selectedYear = normalizeMediaNewsYear(mediaBridgeNewsYear);
  const selectedBroadcaster = String(mediaBridgeNewsBroadcaster || "KBS").trim() || "KBS";
  const invoke = () => {
    try {
      if (action === "create" && typeof legacyWindow?.openNewsEditorModal === "function") {
        legacyWindow.openNewsEditorModal(selectedYear, selectedBroadcaster);
      }
      if (action === "edit" && typeof legacyWindow?.toggleNewsEditMode === "function") {
        legacyWindow.toggleNewsEditMode(selectedYear, selectedBroadcaster);
      }
      if (action === "delete" && typeof legacyWindow?.toggleNewsDeleteMode === "function") {
        legacyWindow.toggleNewsDeleteMode(selectedYear, selectedBroadcaster);
      }
    } catch (error) {
      console.warn("[media-news-action] legacy action unavailable", action, error);
    }
    queueBridgeSummaryBurst(requestMediaBridgeSummary, [160, 420, 900]);
  };

  applyMediaBridgeNewsYearSelection();
  window.setTimeout(invoke, 80);
}

function ensureMainMapCardShells() {
  const shell = document.getElementById("main-stadium-shell");
  if (!shell) {
    return;
  }
  if (!document.getElementById("main-stadium-track")) {
    shell.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="main-stadium-track" id="main-stadium-track" aria-live="polite"></div>
        <div class="main-stadium-empty" id="main-stadium-empty" hidden>등록된 경기장 사진이 없습니다.</div>
        <div class="main-stadium-controls" id="main-stadium-controls" hidden>
          <div class="main-map-card-dots" id="main-stadium-dots" aria-label="경기장 슬라이드 페이지네이션"></div>
        </div>
      `,
    );
  }
}

function formatTimelineGanttDateLabel(dateKey = "") {
  if (!dateKey) {
    return "";
  }
  const date = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return dateKey;
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function shiftTimelineDateKey(dateKey = "", offset = 0) {
  if (!dateKey) {
    return "";
  }
  const date = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return dateKey;
  }
  date.setDate(date.getDate() + Number(offset || 0));
  return date.toISOString().slice(0, 10);
}

function getTimelineVisibleDateKeys(referenceDateKey = getLocalDateKey(), dayCount = WC26_TIMELINE_GANTT_DAY_COUNT) {
  return Array.from({ length: dayCount }, (_, index) => shiftTimelineDateKey(referenceDateKey, index));
}

function getTimelineReferenceDateKey() {
  return shiftTimelineDateKey(WC26_TIMELINE_DEFAULT_START_DATE, timelineDateOffset);
}

function getTimelineDateOffsetFromDefault(dateKey = getLocalDateKey()) {
  const base = new Date(`${WC26_TIMELINE_DEFAULT_START_DATE}T00:00:00`);
  const target = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(base.getTime()) || Number.isNaN(target.getTime())) {
    return 0;
  }
  return Math.round((target.getTime() - base.getTime()) / 86400000);
}

function formatTimelineBlockPeriod(startDate = "", endDate = "") {
  const startLabel = formatTimelineGanttDateLabel(startDate);
  const endLabel = formatTimelineGanttDateLabel(endDate);
  if (!startLabel) {
    return "";
  }
  return startDate === endDate || !endLabel ? startLabel : `${startLabel}-${endLabel}`;
}

function escapeTimelineHtml(value = "") {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTimelineBlockColor(name = "") {
  const memberIndex = WC26_TIMELINE_MEMBER_ORDER.indexOf(String(name || "").trim());
  return WC26_TIMELINE_COLORS[(memberIndex >= 0 ? memberIndex : 0) % WC26_TIMELINE_COLORS.length];
}

function sanitizeTimelineBlock(rawBlock = {}, index = 0) {
  if (!rawBlock || typeof rawBlock !== "object") {
    return null;
  }
  const name = String(rawBlock.name || "").trim();
  const startDate = String(rawBlock.startDate || "").slice(0, 10);
  const endDate = String(rawBlock.endDate || "").slice(0, 10);
  const place = String(rawBlock.place || "").trim();
  if (!name || !startDate || !endDate || !place) {
    return null;
  }
  if (startDate > endDate) {
    return null;
  }
  return {
    id: String(rawBlock.id || `timeline-block-${index + 1}`),
    name,
    startDate,
    endDate,
    place,
    memo: String(rawBlock.memo || "").trim(),
    updatedAt: String(rawBlock.updatedAt || new Date().toISOString()),
  };
}

function isPersonalScheduleGeneratedTimelineBlock(rawBlock = {}) {
  if (!rawBlock || typeof rawBlock !== "object") {
    return false;
  }
  const sourceText = [
    rawBlock.source,
    rawBlock.origin,
    rawBlock.type,
    rawBlock.category,
    rawBlock.id,
    rawBlock.title,
    rawBlock.text,
    rawBlock.task,
    rawBlock.place,
    rawBlock.memo,
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join(" ");
  const lowerSource = sourceText.toLowerCase();
  if (/personal[-_\s]?schedule|personal[-_\s]?timeline|personaltimeline|개인일정/.test(lowerSource)) {
    return true;
  }
  return /\[[^\]]+\s*\/\s*[^\]]+\]\s*현지\s+\S+\s*\/\s*한국\s+\S+\s*부터/.test(sourceText) && /가지고\s+\S+/.test(sourceText);
}

function parseTimelineBlocksFromRaw(raw = "") {
  try {
    const parsed = JSON.parse(String(raw || "").trim() || "[]");
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .filter((block) => !isPersonalScheduleGeneratedTimelineBlock(block))
      .map((block, index) => sanitizeTimelineBlock(block, index))
      .filter(Boolean);
  } catch (_error) {
    return [];
  }
}

function getTimelineBlockDedupeKey(block = {}) {
  return [
    String(block.name || "").trim(),
    String(block.startDate || "").trim(),
    String(block.endDate || "").trim(),
    String(block.place || "").trim(),
    String(block.memo || "").trim(),
  ].join("::");
}

function isLikelyTimelineSampleBlock(block = {}) {
  const text = [block.id, block.name, block.place, block.memo].map((value) => String(value || "")).join(" ");
  return /mock|sample|seed|demo|테스트|샘플/i.test(text);
}

function getAllTimelineBackupBlocks() {
  const merged = [];
  const seen = new Set();
  try {
    const storage = window.localStorage;
    if (!storage) {
      return merged;
    }
    const backupKeys = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index) || "";
      if (key.startsWith(WC26_TIMELINE_BACKUP_PREFIX)) {
        backupKeys.push(key);
      }
    }
    backupKeys.sort().reverse();
    backupKeys.forEach((key) => {
      parseTimelineBlocksFromRaw(storage.getItem(key) || "").forEach((block) => {
        const normalizedKey = getTimelineBlockDedupeKey(block);
        if (!normalizedKey || seen.has(normalizedKey) || isLikelyTimelineSampleBlock(block)) {
          return;
        }
        seen.add(normalizedKey);
        merged.push(block);
      });
    });
  } catch (_error) {
    return merged;
  }
  return merged;
}

function restoreMissingLeeJuwonTimelineBlocks(blocks = []) {
  const normalizedBlocks = Array.isArray(blocks) ? blocks : [];
  const currentKeys = new Set(normalizedBlocks.map(getTimelineBlockDedupeKey));
  const leeBackupBlocks = getAllTimelineBackupBlocks().filter((block) => String(block.name || "").trim() === "이주원");
  const missingBlocks = leeBackupBlocks.filter((block) => !currentKeys.has(getTimelineBlockDedupeKey(block)));
  if (!missingBlocks.length) {
    return normalizedBlocks;
  }

  const restoredBlocks = [...normalizedBlocks, ...missingBlocks];
  try {
    backupTimelineBlocksBeforeWrite();
    window.localStorage?.setItem(WC26_TIMELINE_STORAGE_KEY, JSON.stringify(restoredBlocks));
    window.sessionStorage?.setItem(
      `${WC26_TIMELINE_BACKUP_PREFIX}_lee_restore_${WC26_BRIDGE_VERSION}`,
      String(missingBlocks.length)
    );
  } catch (_error) {
    // If persistence is unavailable, the merged list can still render for this session.
  }
  return restoredBlocks;
}

function getLatestTimelineBackupRaw() {
  try {
    const storage = window.localStorage;
    if (!storage) {
      return "";
    }
    const backupKeys = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index) || "";
      if (key.startsWith(WC26_TIMELINE_BACKUP_PREFIX)) {
        backupKeys.push(key);
      }
    }
    backupKeys.sort().reverse();
    for (const key of backupKeys) {
      const raw = storage.getItem(key) || "";
      if (parseTimelineBlocksFromRaw(raw).length) {
        return raw;
      }
    }
  } catch (_error) {
    return "";
  }
  return "";
}

function backupTimelineBlocksBeforeWrite() {
  try {
    const storage = window.localStorage;
    const raw = storage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    if (!raw) {
      return "";
    }
    const markerKey = `${WC26_TIMELINE_BACKUP_PREFIX}_marker_${WC26_BRIDGE_VERSION}`;
    const existingKey = window.sessionStorage?.getItem(markerKey) || "";
    if (existingKey && storage.getItem(existingKey)) {
      return existingKey;
    }
    const backupKey = `${WC26_TIMELINE_BACKUP_PREFIX}_before_write_${getSharedScheduleTimestampKey()}`;
    storage.setItem(backupKey, raw);
    window.sessionStorage?.setItem(markerKey, backupKey);
    return backupKey;
  } catch (_error) {
    return "";
  }
}

function loadTimelineBlocks() {
  const raw = (() => {
    try {
      return window.localStorage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    } catch (_error) {
      return "";
    }
  })();
  const blocks = parseTimelineBlocksFromRaw(raw);
  try {
    const parsedRaw = JSON.parse(String(raw || "").trim() || "[]");
    if (Array.isArray(parsedRaw) && parsedRaw.length !== blocks.length) {
      backupTimelineBlocksBeforeWrite();
      window.localStorage?.setItem(WC26_TIMELINE_STORAGE_KEY, JSON.stringify(blocks));
      window.sessionStorage?.setItem(`${WC26_TIMELINE_BACKUP_PREFIX}_personal_generated_removed_${WC26_BRIDGE_VERSION}`, String(parsedRaw.length - blocks.length));
    }
  } catch (_error) {
    // Invalid raw storage is handled by the parsed block fallback below.
  }
  if (blocks.length) {
    return restoreMissingLeeJuwonTimelineBlocks(blocks);
  }

  const backupRaw = getLatestTimelineBackupRaw();
  const backupBlocks = parseTimelineBlocksFromRaw(backupRaw).filter((block) => !isLikelyTimelineSampleBlock(block));
  if (backupBlocks.length) {
    try {
      window.localStorage?.setItem(WC26_TIMELINE_STORAGE_KEY, JSON.stringify(backupBlocks));
    } catch (_error) {
      // Rendering can still use the backup data even if restore persistence fails.
    }
    return backupBlocks;
  }
  return [];
}

function saveTimelineBlocks(blocks = []) {
  const normalizedBlocks = Array.isArray(blocks)
    ? blocks
        .filter((block) => !isPersonalScheduleGeneratedTimelineBlock(block))
        .map((block, index) => sanitizeTimelineBlock(block, index))
        .filter(Boolean)
    : [];
  try {
    backupTimelineBlocksBeforeWrite();
    window.localStorage?.setItem(WC26_TIMELINE_STORAGE_KEY, JSON.stringify(normalizedBlocks));
  } catch (_error) {
    showToast("일정현황 저장에 실패했습니다.");
  }
  return normalizedBlocks;
}

function hideTimelineTooltip() {
  activeTimelineTooltipId = "";
  if (!timelineTooltipShell) {
    return;
  }
  timelineTooltipShell.hidden = true;
  timelineTooltipShell.setAttribute("aria-hidden", "true");
  timelineTooltipShell.innerHTML = "";
}

function renderTimelineTooltipContent(block = {}) {
  if (!timelineTooltipShell) {
    return;
  }
  const memo = String(block.memo || "").trim();
  if (!memo) {
    hideTimelineTooltip();
    return;
  }
  const title = escapeTimelineHtml(block.name || "");
  const period = escapeTimelineHtml(formatTimelineBlockPeriod(block.startDate, block.endDate));
  const place = escapeTimelineHtml(block.place || "");
  const safeMemo = escapeTimelineHtml(memo);
  timelineTooltipShell.innerHTML = `
    <div class="timeline-tooltip__title">${title}</div>
    <div class="timeline-tooltip__meta">${period}${place ? `<br />${place}` : ""}</div>
    <div class="timeline-tooltip__memo">${safeMemo}</div>
  `;
}

function positionTimelineTooltip(anchorRect) {
  if (!timelineTooltipShell || !anchorRect) {
    return;
  }
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  const tooltipWidth = timelineTooltipShell.offsetWidth || 0;
  const tooltipHeight = timelineTooltipShell.offsetHeight || 0;
  const gap = 10;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  left = Math.max(12, Math.min(left, viewportWidth - tooltipWidth - 12));
  let top = anchorRect.top - tooltipHeight - gap;
  if (top < 12) {
    top = anchorRect.bottom + gap;
  }
  if (top + tooltipHeight > viewportHeight - 12) {
    top = Math.max(12, viewportHeight - tooltipHeight - 12);
  }
  timelineTooltipShell.style.left = `${left}px`;
  timelineTooltipShell.style.top = `${top}px`;
}

function showTimelineTooltip(block = {}, anchorElement = null) {
  const memo = String(block.memo || "").trim();
  if (!timelineTooltipShell || !anchorElement || !memo) {
    hideTimelineTooltip();
    return;
  }
  renderTimelineTooltipContent(block);
  activeTimelineTooltipId = String(block.id || "");
  timelineTooltipShell.hidden = false;
  timelineTooltipShell.setAttribute("aria-hidden", "false");
  positionTimelineTooltip(anchorElement.getBoundingClientRect());
}

function bindTimelineBlockTooltip(blockElement, block = {}) {
  if (!(blockElement instanceof HTMLElement)) {
    return;
  }
  blockElement.dataset.timelineBlockId = String(block.id || "");
  blockElement.dataset.timelineBlockName = String(block.name || "");
  blockElement.dataset.timelineBlockStart = String(block.startDate || "");
  blockElement.dataset.timelineBlockEnd = String(block.endDate || "");
  blockElement.dataset.timelineBlockPlace = String(block.place || "");
  blockElement.dataset.timelineBlockMemo = String(block.memo || "");
  const memo = String(block.memo || "").trim();
  if (!memo) {
    blockElement.title = block.title || "";
    blockElement.addEventListener("touchend", (event) => {
      event.stopPropagation();
      hideTimelineTooltip();
    });
    blockElement.addEventListener("click", (event) => {
      event.stopPropagation();
      hideTimelineTooltip();
    });
    return;
  }
  blockElement.removeAttribute("title");
  blockElement.addEventListener("mouseenter", () => {
    if (window.matchMedia?.("(hover: hover)").matches) {
      showTimelineTooltip(block, blockElement);
    }
  });
  blockElement.addEventListener("mousemove", () => {
    if (!timelineTooltipShell?.hidden && activeTimelineTooltipId === String(block.id || "")) {
      positionTimelineTooltip(blockElement.getBoundingClientRect());
    }
  });
  blockElement.addEventListener("mouseleave", () => {
    if (window.matchMedia?.("(hover: hover)").matches) {
      hideTimelineTooltip();
    }
  });
  blockElement.addEventListener("focus", () => {
    showTimelineTooltip(block, blockElement);
  });
  blockElement.addEventListener("blur", hideTimelineTooltip);
  blockElement.addEventListener("touchend", (event) => {
    event.preventDefault();
    event.stopPropagation();
    timelineLastTouchToggleAt = Date.now();
    timelineIgnoreDocumentClickUntil = Date.now() + 500;
    if (activeTimelineTooltipId === String(block.id || "") && !timelineTooltipShell?.hidden) {
      hideTimelineTooltip();
      return;
    }
    showTimelineTooltip(block, blockElement);
  });
  blockElement.addEventListener("click", (event) => {
    event.stopPropagation();
    if (Date.now() - timelineLastTouchToggleAt < 450) {
      return;
    }
    if (activeTimelineTooltipId === String(block.id || "") && !timelineTooltipShell?.hidden) {
      hideTimelineTooltip();
      return;
    }
    showTimelineTooltip(block, blockElement);
  });
}

function toggleTimelineTooltipFromElement(blockElement) {
  if (!(blockElement instanceof HTMLElement)) {
    hideTimelineTooltip();
    return;
  }
  const memo = String(blockElement.dataset.timelineBlockMemo || "").trim();
  if (!memo) {
    hideTimelineTooltip();
    return;
  }
  const block = {
    id: String(blockElement.dataset.timelineBlockId || "").trim(),
    name: String(blockElement.dataset.timelineBlockName || "").trim(),
    startDate: String(blockElement.dataset.timelineBlockStart || "").trim(),
    endDate: String(blockElement.dataset.timelineBlockEnd || "").trim(),
    place: String(blockElement.dataset.timelineBlockPlace || "").trim(),
    memo,
  };
  if (activeTimelineTooltipId === block.id && !timelineTooltipShell?.hidden) {
    hideTimelineTooltip();
    return;
  }
  showTimelineTooltip(block, blockElement);
}

function getTimelineGanttHosts() {
  return [
    {
      key: "dashboard",
      mode: "view",
      shell: document.getElementById("timeline-gantt-shell"),
      empty: document.getElementById("timeline-gantt-empty"),
      scroller: document.getElementById("timeline-gantt-scroller"),
      grid: document.getElementById("timeline-gantt-grid"),
    },
    {
      key: "schedule",
      mode: "edit",
      shell: document.getElementById("schedule-timeline-gantt-shell"),
      empty: document.getElementById("schedule-timeline-gantt-empty"),
      scroller: document.getElementById("schedule-timeline-gantt-scroller"),
      grid: document.getElementById("schedule-timeline-gantt-grid"),
    },
  ].filter((host) => host.empty && host.scroller && host.grid);
}

function getTimelineHostDayCount(host) {
  const shellWidth =
    host?.scroller?.clientWidth ||
    host?.shell?.clientWidth ||
    host?.grid?.parentElement?.clientWidth ||
    host?.grid?.clientWidth ||
    0;
  if (!shellWidth) {
    return WC26_TIMELINE_GANTT_DAY_COUNT;
  }
  const leadWidth = WC26_TIMELINE_NAME_COLUMN_WIDTH + WC26_TIMELINE_DATE_GAP;
  const availableWidth = Math.max(0, shellWidth - leadWidth - 2);
  let dayCount = Math.floor((availableWidth + WC26_TIMELINE_DATE_GAP) / (WC26_TIMELINE_DATE_CELL_WIDTH + WC26_TIMELINE_DATE_GAP));
  dayCount = Math.max(1, dayCount);
  const getGridWidth = (count) =>
    count * WC26_TIMELINE_DATE_CELL_WIDTH + Math.max(0, count - 1) * WC26_TIMELINE_DATE_GAP;
  while (dayCount > 1 && getGridWidth(dayCount) > availableWidth) {
    dayCount -= 1;
  }
  return Math.max(WC26_TIMELINE_GANTT_DAY_COUNT, dayCount);
}

function getTimelineSyncWindow() {
  return getScheduleBridgeSyncWindow();
}

function readTimelineLegacyEntry(syncWindow, dateKey = "", name = "") {
  if (!syncWindow) {
    return null;
  }
  try {
    const entries =
      typeof syncWindow.getPersonalTimelineDetailEntries === "function"
        ? syncWindow.getPersonalTimelineDetailEntries(dateKey, name) || []
        : [];
    const detail = entries.find((entry) => {
      const task = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(entry, "업무내용") || "").trim();
      const place = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(entry, "장소") || "").trim();
      const startTime = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(entry, "시작시간") || "").trim();
      return Boolean(task || place || startTime);
    });
    if (!detail) {
      return null;
    }
    const place = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(detail, "장소") || "").trim();
    const taskRaw = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(detail, "업무내용") || "").trim();
    const task = String(syncWindow.getPersonalTimelineTaskReportLabel?.(taskRaw) || taskRaw).trim();
    const startTime = String(syncWindow.getPersonalTimelineDetailEntryFieldValue?.(detail, "시작시간") || "").trim();
    return { dateKey, place, task, startTime };
  } catch (_error) {
    return null;
  }
}

function buildTimelineBlocksFromLegacySummary(dates = [], summary = {}) {
  // Personal schedules feed accumulated/ticker/equipment flows only.
  // The Gantt timeline must render user-created timeline blocks, not legacy personal schedule rows.
  return new Map(WC26_TIMELINE_MEMBER_ORDER.map((name) => [name, []]));
}

function buildTimelineBlocksByName(dates = [], summary = {}) {
  const rows = buildTimelineBlocksFromLegacySummary(dates, summary);
  loadTimelineBlocks().forEach((block, index) => {
    const normalizedName = String(block.name || "").trim();
    if (!rows.has(normalizedName)) {
      rows.set(normalizedName, []);
    }
    rows.get(normalizedName).push({
      id: block.id || `custom-${index + 1}`,
      source: "custom",
      name: normalizedName,
      startDate: block.startDate,
      endDate: block.endDate,
      period: formatTimelineBlockPeriod(block.startDate, block.endDate),
      place: block.place,
      memo: block.memo || "",
      task: "",
      title: `${normalizedName}\n${formatTimelineBlockPeriod(block.startDate, block.endDate)}\n${block.place}${block.memo ? `\n${block.memo}` : ""}`,
    });
  });
  return rows;
}

function buildTimelineGanttRenderKey(summary = {}) {
  return JSON.stringify({
    summary,
    blocks: loadTimelineBlocks(),
    visibleDates: getTimelineVisibleDateKeys(getTimelineReferenceDateKey(), WC26_TIMELINE_GANTT_DAY_COUNT),
  });
}

function renderTimelineGanttHost(host, dates = [], rows = []) {
  if (!host?.grid || !host.scroller || !host.empty) {
    return;
  }
  host.empty.hidden = true;
  host.scroller.hidden = false;
  const renderKey = JSON.stringify({ dates, rows });
  if (host.grid.dataset.renderKey === renderKey) {
    return;
  }
  host.grid.dataset.renderKey = renderKey;

  const layout = document.createElement("div");
  layout.className = `timeline-gantt-layout timeline-gantt-layout--${host.mode || "view"}`;

  const namesColumn = document.createElement("div");
  namesColumn.className = "timeline-name-column";
  namesColumn.style.width = `${WC26_TIMELINE_NAME_COLUMN_WIDTH}px`;
  const namesHeader = document.createElement("div");
  namesHeader.className = "timeline-name-cell timeline-name-cell--head";
  namesHeader.textContent = "이름";
  namesColumn.appendChild(namesHeader);
  rows.forEach((row) => {
    const nameCell = document.createElement("div");
    nameCell.className = "timeline-name-cell";
    nameCell.innerHTML = `<strong>${escapeTimelineHtml(row.name || "-")}</strong>`;
    namesColumn.appendChild(nameCell);
  });

  const dateArea = document.createElement("div");
  dateArea.className = "timeline-date-area";
  const gridWidth =
    dates.length * WC26_TIMELINE_DATE_CELL_WIDTH + Math.max(0, dates.length - 1) * WC26_TIMELINE_DATE_GAP;
  const dateHeader = document.createElement("div");
  dateHeader.className = "timeline-date-header";
  dateHeader.style.gridTemplateColumns = `repeat(${dates.length}, ${WC26_TIMELINE_DATE_CELL_WIDTH}px)`;
  dateHeader.style.width = `${gridWidth}px`;
  dates.forEach((dateKey) => {
    const cell = document.createElement("div");
    cell.className = "timeline-gantt-cell timeline-gantt-cell--head";
    cell.textContent = formatTimelineGanttDateLabel(dateKey);
    dateHeader.appendChild(cell);
  });

  const dateBody = document.createElement("div");
  dateBody.className = "timeline-date-body";
  dateBody.style.gridTemplateColumns = `repeat(${dates.length}, ${WC26_TIMELINE_DATE_CELL_WIDTH}px)`;
  dateBody.style.width = `${gridWidth}px`;

  rows.forEach((row, rowIndex) => {
    dates.forEach(() => {
      const cell = document.createElement("div");
      cell.className = "timeline-gantt-cell timeline-gantt-cell--body";
      cell.style.gridRow = `${rowIndex + 1}`;
      dateBody.appendChild(cell);
    });

    (Array.isArray(row.blocks) ? row.blocks : []).forEach((block) => {
      const startIndex = dates.indexOf(block.startDate);
      const endIndex = dates.indexOf(block.endDate);
      if (startIndex === -1 && endIndex === -1) {
        return;
      }
      const normalizedStartIndex = startIndex === -1 ? 0 : startIndex;
      const normalizedEndIndex = endIndex === -1 ? dates.length - 1 : endIndex;
      const pill = document.createElement("div");
      pill.className = "timeline-gantt-block";
      pill.style.gridColumn = `${normalizedStartIndex + 1} / ${normalizedEndIndex + 2}`;
      pill.style.gridRow = `${rowIndex + 1}`;
      pill.style.background = `linear-gradient(135deg, ${getTimelineBlockColor(block.name)}cc, ${getTimelineBlockColor(block.name)}66)`;
      pill.title = block.title || "";
      pill.innerHTML = `<span class="timeline-gantt-block-period">${escapeTimelineHtml(block.period || "")}</span><span class="timeline-gantt-block-place">${escapeTimelineHtml(block.place || "")}</span>`;
      bindTimelineBlockTooltip(pill, block);
      dateBody.appendChild(pill);
    });
  });

  dateArea.append(dateHeader, dateBody);
  layout.append(namesColumn, dateArea);
  host.grid.replaceChildren(layout);
}

function renderTimelineGantt(summary = {}) {
  getTimelineGanttHosts().forEach((host) => {
    const dates = getTimelineVisibleDateKeys(getTimelineReferenceDateKey(), getTimelineHostDayCount(host));
    const blocksByName = buildTimelineBlocksByName(dates, summary);
    const rows = WC26_TIMELINE_MEMBER_ORDER.map((name) => ({
      name,
      blocks: (blocksByName.get(name) || []).sort((a, b) => {
        if (a.startDate !== b.startDate) {
          return String(a.startDate).localeCompare(String(b.startDate));
        }
        return String(a.endDate).localeCompare(String(b.endDate));
      }),
    }));
    renderTimelineGanttHost(host, dates, rows);
  });
}

function refreshTimelineGanttFromLegacy(options = {}) {
  const force = Boolean(options?.force);
  const syncWindow = getScheduleBridgeSyncWindow();
  const getter = syncWindow?.getWC26LegacyTimelineGanttSummary;
  let summary = {};
  if (isLazyIframeLoaded(scheduleBridgeSyncFrame) && typeof getter === "function") {
    try {
      summary = getter.call(syncWindow) || {};
    } catch (_error) {
      summary = {};
    }
  }
  const rangeKey = JSON.stringify({
    referenceDate: getTimelineReferenceDateKey(),
    visibleDays: WC26_TIMELINE_GANTT_DAY_COUNT,
    blocks: loadTimelineBlocks().map((block) => [
      block.id,
      block.name,
      block.startDate,
      block.endDate,
      block.place,
      block.memo,
      block.updatedAt,
    ]),
    dates: Array.isArray(summary?.dates) ? summary.dates : [],
    rows: Array.isArray(summary?.rows)
      ? summary.rows.map((row) => [row?.id, row?.label, Array.isArray(row?.items) ? row.items.length : 0])
      : [],
  });
  if (!force && rangeKey && bridgeLoadState.timelineRangeKey === rangeKey) {
    return;
  }
  bridgeLoadState.timelineRangeKey = rangeKey;
  renderTimelineGantt(summary);
}

function syncScheduleTimelineShellVisibility() {
  const isTimelineSection = scheduleBridgeSection === "all";
  const isSharedSection = scheduleBridgeSection === "shared";
  const isPersonalSection = scheduleBridgeSection === "personal";
  const isAccumulatedSection = scheduleBridgeSection === "accumulated";
  if (scheduleLocalTimelineShell) {
    scheduleLocalTimelineShell.hidden = !isTimelineSection;
  }
  if (scheduleLocalSharedShell) {
    scheduleLocalSharedShell.hidden = !isSharedSection;
  }
  if (scheduleLocalPersonalShell) {
    scheduleLocalPersonalShell.hidden = !isPersonalSection;
  }
  if (scheduleLocalAccumulatedShell) {
    scheduleLocalAccumulatedShell.hidden = !isAccumulatedSection;
  }
  if (scheduleBridgeFrameShell) {
    scheduleBridgeFrameShell.hidden = isTimelineSection || isSharedSection || isPersonalSection || isAccumulatedSection;
  }
}

function populateTimelineEntryNameOptions() {
  if (!timelineEntryNameInput || timelineEntryNameInput.options.length > 0) {
    return;
  }
  WC26_TIMELINE_MEMBER_ORDER.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    timelineEntryNameInput.appendChild(option);
  });
}

function openTimelineEntryModal(block = null) {
  if (!timelineEntryModal) {
    return;
  }
  populateTimelineEntryNameOptions();
  timelineEntryModalMode = block ? "edit" : "create";
  const title = document.getElementById("timeline-entry-modal-title");
  if (title) {
    title.textContent = block ? "일정현황 수정" : "일정현황 작성";
  }
  if (timelineEntryIdInput) {
    timelineEntryIdInput.value = block?.id || "";
  }
  if (timelineEntryNameInput) {
    timelineEntryNameInput.value = block?.name || WC26_TIMELINE_MEMBER_ORDER[0];
  }
  if (timelineEntryStartInput) {
    timelineEntryStartInput.value = block?.startDate || getTimelineReferenceDateKey();
  }
  if (timelineEntryEndInput) {
    timelineEntryEndInput.value = block?.endDate || getTimelineReferenceDateKey();
  }
  if (timelineEntryPlaceInput) {
    timelineEntryPlaceInput.value = block?.place || "";
  }
  if (timelineEntryMemoInput) {
    timelineEntryMemoInput.value = block?.memo || "";
  }
  timelineEntryModal.hidden = false;
}

function closeTimelineEntryModal() {
  if (timelineEntryModal) {
    timelineEntryModal.hidden = true;
  }
}

function closeTimelineManageModal() {
  if (timelineManageModal) {
    timelineManageModal.hidden = true;
  }
}

function renderTimelineManageList() {
  if (!timelineManageList) {
    return;
  }
  const blocks = loadTimelineBlocks().sort((a, b) => String(a.startDate).localeCompare(String(b.startDate)));
  if (!blocks.length) {
    timelineManageList.innerHTML = '<p class="timeline-manage-item-meta">저장된 일정현황 항목이 없습니다.</p>';
    return;
  }
  timelineManageList.replaceChildren(
    ...blocks.map((block) => {
      const item = document.createElement("article");
      item.className = "timeline-manage-item";
      item.innerHTML = `
        <div class="timeline-manage-item-head">
          <strong>${escapeTimelineHtml(block.name)}</strong>
          <div class="timeline-manage-item-actions">
            <button type="button" data-timeline-edit-id="${block.id}">수정</button>
            <button type="button" data-timeline-delete-id="${block.id}">삭제</button>
          </div>
        </div>
        <div class="timeline-manage-item-meta">${escapeTimelineHtml(formatTimelineBlockPeriod(block.startDate, block.endDate))} / ${escapeTimelineHtml(block.place)}</div>
      `;
      if (block.memo) {
        const memo = document.createElement("div");
        memo.className = "timeline-manage-item-meta";
        memo.textContent = block.memo;
        item.appendChild(memo);
      }
      return item;
    }),
  );
}

function openTimelineManageModal() {
  if (!timelineManageModal) {
    return;
  }
  renderTimelineManageList();
  timelineManageModal.hidden = false;
}

function upsertTimelineBlockFromModal() {
  const id = String(timelineEntryIdInput?.value || "").trim();
  const name = String(timelineEntryNameInput?.value || WC26_TIMELINE_MEMBER_ORDER[0] || "").trim();
  const startDate = String(timelineEntryStartInput?.value || "").trim();
  const endDate = String(timelineEntryEndInput?.value || "").trim();
  const place = String(timelineEntryPlaceInput?.value || "").trim();
  const memo = String(timelineEntryMemoInput?.value || "").trim();
  if (!name) {
    showToast("이름을 선택해주세요.");
    return;
  }
  if (!place) {
    showToast("장소를 입력해주세요.");
    return;
  }
  if (!startDate || !endDate) {
    showToast("날짜를 선택해주세요.");
    return;
  }
  if (startDate > endDate) {
    showToast("종료 날짜가 시작 날짜보다 빠를 수 없습니다.");
    return;
  }
  const nextBlocks = loadTimelineBlocks();
  const nextBlock = {
    id: id || `timeline-block-${Date.now()}`,
    name,
    startDate,
    endDate,
    place,
    memo,
    updatedAt: new Date().toISOString(),
  };
  const existingIndex = nextBlocks.findIndex((block) => String(block.id) === nextBlock.id);
  if (existingIndex >= 0) {
    nextBlocks.splice(existingIndex, 1, nextBlock);
  } else {
    nextBlocks.push(nextBlock);
  }
  saveTimelineBlocks(nextBlocks);
  closeTimelineEntryModal();
  renderTimelineManageList();
  refreshTimelineGanttFromLegacy({ force: true });
}

function deleteTimelineBlockById(id = "") {
  const normalizedId = String(id || "").trim();
  if (!normalizedId) {
    return;
  }
  const blocks = loadTimelineBlocks().filter((block) => String(block.id) !== normalizedId);
  saveTimelineBlocks(blocks);
  renderTimelineManageList();
  refreshTimelineGanttFromLegacy({ force: true });
}

function handleTimelineNavButton(button, event = null) {
  if (!(button instanceof HTMLElement)) {
    return false;
  }
  const direction = String(button.dataset.timelineNav || "").trim();
  if (!direction) {
    return false;
  }
  event?.preventDefault?.();
  event?.stopPropagation?.();
  if (event) {
    event.__wc26TimelineNavHandled = true;
  }
  button.dataset.timelineNavHandled = "1";
  if (direction === "prev") {
    timelineDateOffset -= 1;
  } else if (direction === "next") {
    timelineDateOffset += 1;
  } else {
    timelineDateOffset = getTimelineDateOffsetFromDefault();
  }
  bridgeLoadState.timelineRangeKey = "";
  refreshTimelineGanttFromLegacy({ force: true });
  return true;
}

function initTimelineEditor() {
  populateTimelineEntryNameOptions();
  document.addEventListener(
    "touchstart",
    (event) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const blockElement = target?.closest(".timeline-gantt-block");
      if (!(blockElement instanceof HTMLElement)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      timelineLastTouchToggleAt = Date.now();
      timelineIgnoreDocumentClickUntil = Date.now() + 500;
      toggleTimelineTooltipFromElement(blockElement);
    },
    { capture: true, passive: false },
  );
  timelineNavButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.__wc26TimelineNavHandled) {
        return;
      }
      handleTimelineNavButton(button, event);
    });
  });
  document.addEventListener("click", (event) => {
    if (event.__wc26TimelineNavHandled) {
      return;
    }
    const target = event.target instanceof HTMLElement ? event.target : null;
    const navButton = target?.closest("[data-timeline-nav]");
    if (navButton instanceof HTMLElement) {
      handleTimelineNavButton(navButton, event);
    }
  }, { capture: true });
  timelineActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.closest("#panel-main-match")) {
        return;
      }
      const action = String(button.dataset.timelineAction || "").trim();
      if (action === "create") {
        openTimelineEntryModal();
        return;
      }
      if (action === "manage") {
        openTimelineManageModal();
      }
    });
  });
  document.querySelectorAll("[data-timeline-modal-close]").forEach((node) => {
    node.addEventListener("click", closeTimelineEntryModal);
  });
  document.querySelectorAll("[data-timeline-manage-close]").forEach((node) => {
    node.addEventListener("click", closeTimelineManageModal);
  });
  timelineEntrySaveButton?.addEventListener("click", upsertTimelineBlockFromModal);
  document.addEventListener("click", (event) => {
    if (Date.now() < timelineIgnoreDocumentClickUntil) {
      return;
    }
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (target?.closest(".timeline-gantt-block")) {
      return;
    }
    hideTimelineTooltip();
  });
  timelineManageList?.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    const editId = String(target.dataset.timelineEditId || "").trim();
    if (editId) {
      const block = loadTimelineBlocks().find((entry) => String(entry.id) === editId);
      closeTimelineManageModal();
      openTimelineEntryModal(block || null);
      return;
    }
    const deleteId = String(target.dataset.timelineDeleteId || "").trim();
    if (deleteId && window.confirm("이 일정현황 항목을 삭제할까요?")) {
      deleteTimelineBlockById(deleteId);
    }
  });

  window.addEventListener("resize", () => {
    window.clearTimeout(timelineResizeTimer);
    timelineResizeTimer = window.setTimeout(() => {
      refreshTimelineGanttFromLegacy({ force: true });
    }, 120);
  });

  mainTimelinePanel?.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    if (target.closest("[data-timeline-nav]")) {
      event.stopPropagation();
      return;
    }
    const quickTimelineButton = document.getElementById("quick-timeline");
    if (quickTimelineButton instanceof HTMLButtonElement) {
      activateQuickAction(quickTimelineButton);
      setScheduleBridgeSection("all");
    }
  });
}

function showToast(message) {
  if (!toastShell) {
    return;
  }

  toastShell.textContent = message;
  toastShell.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastShell.classList.remove("is-visible");
  }, 2200);
}

function highlightTargets(selectors) {
  if (!Array.isArray(selectors)) {
    return;
  }

  const targets = selectors
    .map((selector) => {
      if (!selector) {
        return null;
      }

      try {
        return document.querySelector(selector);
      } catch (error) {
        console.warn(`[WC26 Suit Prototype] Ignored invalid selector: ${selector}`);
        return null;
      }
    })
    .filter(Boolean);

  if (targets.length === 0) {
    return;
  }

  window.clearTimeout(highlightTimer);
  targets.forEach((target) => target.classList.add("is-targeted"));

  highlightTimer = window.setTimeout(() => {
    targets.forEach((target) => target.classList.remove("is-targeted"));
  }, 1400);
}

function getButtonLabel(button) {
  if (!button) {
    return "";
  }

  const label = button.querySelector(".nav-label, .menu__label, .quick-button__title");
  return label ? label.textContent.trim() : button.textContent.trim();
}

function normalizeMenuLaunchSection(targetId = "", sectionId = "") {
  const normalizedTarget = String(targetId || "").trim();
  if (!normalizedTarget) {
    return "";
  }
  if (normalizedTarget === "schedule") {
    return normalizeScheduleBridgeSection(sectionId);
  }
  if (normalizedTarget === "field-ops") {
    return normalizeEquipmentBridgeSection(sectionId);
  }
  if (normalizedTarget === "archive") {
    return normalizeStorageBridgeSection(sectionId);
  }
  if (normalizedTarget === "broadcast-news") {
    return normalizeMediaBridgeSection(sectionId) === "worldcup-news" ? "worldcup-news" : "broadcast";
  }
  if (normalizedTarget === "operations") {
    return normalizeOpsBridgeSection(sectionId);
  }
  if (normalizedTarget === "map") {
    return normalizeMapBridgeSection(sectionId) === "stadiums" ? "venue" : "map";
  }
  if (normalizedTarget === "match-schedule") {
    return "bracket";
  }
  return String(sectionId || "").trim().toLowerCase();
}

function syncMenuLaunchState(targetId = "", sectionId = "") {
  const normalizedTarget = String(targetId || "").trim();
  if (!normalizedTarget) {
    return;
  }
  const normalizedSection = normalizeMenuLaunchSection(normalizedTarget, sectionId);
  let matchedExact = false;
  menuLaunchButtons.forEach((button) => {
    const buttonTarget = String(button.dataset.target || "").trim();
    const buttonSection = normalizeMenuLaunchSection(buttonTarget, button.dataset.section || "");
    const isExactMatch = buttonTarget === normalizedTarget && normalizedSection && buttonSection === normalizedSection;
    button.classList.toggle("is-active", isExactMatch);
    if (isExactMatch) {
      matchedExact = true;
    }
  });
  if (matchedExact) {
    return;
  }
  const fallbackButton = Array.from(menuLaunchButtons).find(
    (button) => String(button.dataset.target || "").trim() === normalizedTarget,
  );
  if (fallbackButton) {
    fallbackButton.classList.add("is-active");
  }
}

function closeGroup(group) {
  if (!group) {
    return;
  }

  const toggle = group.querySelector(".nav-toggle");
  const submenu = group.querySelector(".nav-submenu");
  group.classList.remove("is-open");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
  }

  if (submenu) {
    submenu.hidden = true;
  }
}

function openGroup(group) {
  if (!group) {
    return;
  }

  navGroups.forEach((otherGroup) => {
    if (otherGroup !== group) {
      closeGroup(otherGroup);
    }
  });

  const toggle = group.querySelector(".nav-toggle");
  const submenu = group.querySelector(".nav-submenu");
  group.classList.add("is-open");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "true");
  }

  if (submenu) {
    submenu.hidden = false;
  }
}

function toggleGroup(group) {
  if (!group) {
    return;
  }

  if (group.classList.contains("is-open")) {
    closeGroup(group);
    return;
  }

  openGroup(group);
}

function closeAllGroups() {
  navGroups.forEach(closeGroup);
}

function clearNavActive() {
  document.querySelectorAll(".nav-item.is-active, .nav-subitem.is-active").forEach((item) => {
    item.classList.remove("is-active");
  });
}

function isMobileSectionViewport() {
  return Boolean(WC26_MOBILE_MEDIA_QUERY?.matches);
}

function ensureMobileHomeHistoryState() {
  if (!isMobileSectionViewport()) {
    return;
  }
  const homeUrl = `${window.location.pathname}${window.location.search}`;
  const state = history.state && typeof history.state === "object" ? history.state : {};
  if (!state.wc26MobileHomeBase) {
    history.replaceState(
      {
        ...state,
        wc26MobileHomeBase: true,
      },
      document.title,
      homeUrl,
    );
  }
}

function syncMobileSectionUi(targetId = "dashboard", options = {}) {
  if (!document.body) {
    return;
  }
  if (!isMobileSectionViewport()) {
    document.body.classList.remove("mobile-section-open");
    if (mobileSectionBackButton) {
      mobileSectionBackButton.hidden = true;
    }
    return;
  }
  const isHome = targetId === "dashboard";
  document.body.classList.toggle("mobile-section-open", !isHome);
  if (mobileSectionBackButton) {
    mobileSectionBackButton.hidden = isHome;
  }
  if (options.skipHistory) {
    return;
  }
  ensureMobileHomeHistoryState();
  if (isHome) {
    return;
  }
  const state = history.state && typeof history.state === "object" ? history.state : {};
  const nextState = {
    ...state,
    wc26MobileHomeBase: true,
    wc26MobileSection: true,
    targetId,
  };
  const nextUrl = `${window.location.pathname}${window.location.search}#mobile-${encodeURIComponent(targetId)}`;
  if (state.wc26MobileSection) {
    history.replaceState(nextState, document.title, nextUrl);
  } else {
    history.pushState(nextState, document.title, nextUrl);
  }
}

function setView(targetId, options = {}) {
  const selector = WC26_VIEW_MAP[targetId];

  if (!selector) {
    return false;
  }

  const nextView = document.querySelector(selector);

  if (!nextView) {
    return false;
  }

  dashboardViews.forEach((view) => {
    const isNext = view === nextView;
    view.hidden = !isNext;
    view.classList.toggle("is-active", isNext);
  });

  syncMobileSectionUi(targetId, options);

  return true;
}

function returnToMobileLauncher(options = {}) {
  if (!isMobileSectionViewport()) {
    return false;
  }
  clearNavActive();
  const dashboardButton = document.querySelector('.nav-direct[data-target="dashboard"]');
  if (dashboardButton) {
    dashboardButton.classList.add("is-active");
  }
  if (options.fromHistory !== true) {
    const state = history.state && typeof history.state === "object" ? history.state : {};
    if (state.wc26MobileSection) {
      let didRestoreFromHistory = false;
      const homeState = { wc26MobileHomeBase: true };
      const homeUrl = `${window.location.pathname}${window.location.search}`;
      const restoreHome = () => {
        history.replaceState(homeState, document.title, homeUrl);
        setView("dashboard", { skipHistory: true });
      };
      const fallbackTimer = window.setTimeout(() => {
        if (didRestoreFromHistory) {
          return;
        }
        didRestoreFromHistory = true;
        restoreHome();
      }, 240);
      const handlePop = () => {
        didRestoreFromHistory = true;
        window.clearTimeout(fallbackTimer);
      };
      window.addEventListener("popstate", handlePop, { once: true });
      history.back();
      return true;
    }
  }
  setView("dashboard", { skipHistory: true });
  return true;
}

function goToDashboardHome(options = {}) {
  if (isMobileSectionViewport()) {
    returnToMobileLauncher(options);
    return;
  }
  closeAllGroups();
  clearNavActive();
  setView("dashboard", { skipHistory: options.skipHistory === true });
  highlightTargets(WC26_MENU_GROUPS.dashboard?.targetSelectors || []);
}

function restoreDashboardViewOnPlainEntry() {
  const hash = String(window.location.hash || "").trim();
  const hasExplicitMobileSectionHash = hash.startsWith("#mobile-") && hash !== "#mobile-dashboard";
  if (hasExplicitMobileSectionHash && isMobileSectionViewport()) {
    return;
  }

  closeAllGroups();
  clearNavActive();
  setView("dashboard", { skipHistory: true });
  highlightTargets(WC26_MENU_GROUPS.dashboard?.targetSelectors || []);
}

function syncMobileSectionViewportState() {
  const activeView = document.querySelector(".dashboard-view.is-active");
  const targetId = String(activeView?.dataset.view || "dashboard").trim() || "dashboard";
  if (isMobileSectionViewport()) {
    ensureMobileHomeHistoryState();
  }
  syncMobileSectionUi(targetId, { skipHistory: true });
}

function focusSection(targetId, sectionId) {
  const selector = WC26_VIEW_MAP[targetId];
  const view = selector ? document.querySelector(selector) : null;

  if (!view || !sectionId) {
    return;
  }

  view.querySelectorAll("[data-section-panel]").forEach((panel) => {
    panel.classList.toggle("is-focused", panel.dataset.sectionPanel === sectionId);
  });

  const shell = view.querySelector("[data-section-shell]");
  if (shell) {
    shell.dataset.sectionShell = sectionId;
  }

  if (targetId === "match-schedule") {
    setMatchScheduleSection(sectionId);
  }

  if (targetId === "map") {
    setMapSection(sectionId);
  }

  if (targetId === "schedule") {
    setScheduleBridgeSection(sectionId);
  }

  if (targetId === "field-ops") {
    setFieldOpsSection(sectionId);
  }

  if (targetId === "archive") {
    setArchiveBridgeSection(sectionId);
  }

  if (targetId === "broadcast-news") {
    setMediaBridgeSection(sectionId);
  }

  if (targetId === "operations") {
    setOpsBridgeSection(sectionId);
  }

  syncMenuLaunchState(targetId, sectionId);
}

function normalizeScheduleBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();
  return ["all", "shared", "personal", "accumulated", "export"].includes(normalized)
    ? normalized
    : "all";
}

function captureScheduleBridgePanelDefaults() {
  return {
    heroValues: Array.from(document.querySelectorAll("#panel-main-match .hero-chip__value")).map((node) => node.textContent || ""),
    slotValues: Array.from(document.querySelectorAll("#panel-main-match .data-slot__value")).map((node) => node.textContent || ""),
    rows: Array.from(document.querySelectorAll("#panel-field-status .status-row")).map((row) => ({
      name: row.querySelector(".status-row__name")?.textContent || "",
      place: row.querySelector(".status-row__place")?.textContent || "",
      units: Array.from(row.querySelectorAll(".status-row__unit")).map((node) => node.textContent || ""),
    })),
    tickerValues: Array.from(document.querySelectorAll("#accumulated-ticker-content span")).map((node) => node.textContent || ""),
  };
}

function normalizeStorageBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();

  if (normalized === "file" || normalized === "file-storage") {
    return "file-storage";
  }

  if (normalized === "gallery") {
    return "gallery";
  }

  if (normalized === "video") {
    return "video";
  }

  if (normalized === "carnet") {
    return "carnet";
  }

  return "document-storage";
}

function captureStorageBridgePanelDefaults() {
  return {
    meta: document.querySelector("#storage-bridge-meta")?.textContent || "",
    panelSummary: document.querySelector("#panel-archive .utility-copy")?.textContent || "",
  };
}

function normalizeStorageBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  return {
    selectedDate: String(payload.selectedDate || "").trim(),
    selectedSection: normalizeStorageBridgeSection(payload.selectedSection || ""),
    documentCount: Number(payload.documentCount || 0),
    fileCount: Number(payload.fileCount || 0),
    galleryCount: Number(payload.galleryCount || 0),
    videoCount: Number(payload.videoCount || 0),
    carnetCount: Number(payload.carnetCount || 0),
    recentItems: Array.isArray(payload.recentItems) ? payload.recentItems : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildStorageBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedDate: summary.selectedDate || "",
    selectedSection: normalizeStorageBridgeSection(summary.selectedSection || ""),
    documentCount: Number(summary.documentCount || 0),
    fileCount: Number(summary.fileCount || 0),
    galleryCount: Number(summary.galleryCount || 0),
    videoCount: Number(summary.videoCount || 0),
    carnetCount: Number(summary.carnetCount || 0),
    recentItems: Array.isArray(summary.recentItems) ? summary.recentItems : [],
  });
}

function setStorageBridgeButtonState(sectionId = "document-storage") {
  const normalized = normalizeStorageBridgeSection(sectionId);
  storageBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.storageBridgeNav === normalized);
  });
  archiveSuitPanels.forEach((panel) => {
    const isActive = panel.dataset.archiveSuitPanel === normalized;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
  renderArchiveSuitPanels();
}

function getArchiveSuitItems() {
  try {
    const parsed = JSON.parse(window.localStorage?.getItem(ARCHIVE_SUIT_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
  } catch {
    return [];
  }
}

function setArchiveSuitItems(items = []) {
  try {
    window.localStorage?.setItem(ARCHIVE_SUIT_STORAGE_KEY, JSON.stringify(Array.isArray(items) ? items : []));
  } catch (error) {
    console.error("[archive-suit] save failed", error);
    window.alert("자료를 저장하지 못했습니다. 파일 크기 또는 브라우저 저장 공간을 확인해주세요.");
  }
}

function getArchiveSuitReadableStorageAreas() {
  if (typeof window === "undefined") return [];
  return [
    ["localStorage", window.localStorage],
    ["sessionStorage", window.sessionStorage],
  ].filter(([, storage]) => {
    try {
      const probeKey = "__archive_suit_storage_probe__";
      storage?.setItem(probeKey, "1");
      storage?.removeItem(probeKey);
      return true;
    } catch {
      return false;
    }
  });
}

function readArchiveSuitWindowPayload() {
  if (typeof window === "undefined" || !window.name) return {};
  try {
    const parsed = JSON.parse(window.name);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function getArchiveSuitLegacyGalleryRawByKey(key = "") {
  const normalizedKey = String(key || "").trim();
  for (const [storageName, storage] of getArchiveSuitReadableStorageAreas()) {
    const raw = storage?.getItem(normalizedKey);
    if (raw) {
      return { raw: String(raw), source: storageName };
    }
  }
  const payload = readArchiveSuitWindowPayload();
  if (normalizedKey === "galleryData" && typeof payload?.[ARCHIVE_SUIT_LEGACY_GALLERY_WINDOW_KEY] === "string") {
    return { raw: payload[ARCHIVE_SUIT_LEGACY_GALLERY_WINDOW_KEY], source: "window.name" };
  }
  return { raw: "", source: "" };
}

function readArchiveSuitLegacyIndexedDbRaw() {
  if (typeof window === "undefined" || !window.indexedDB) {
    archiveSuitLegacyIndexedDbSource = "unavailable";
    archiveSuitLegacyIndexedDbReady = true;
    return Promise.resolve("");
  }
  return new Promise((resolve) => {
    const request = window.indexedDB.open(ARCHIVE_SUIT_LEGACY_GALLERY_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.transaction?.abort?.();
      archiveSuitLegacyIndexedDbSource = "empty";
      archiveSuitLegacyIndexedDbReady = true;
      resolve("");
    };
    request.onerror = () => {
      archiveSuitLegacyIndexedDbSource = "error";
      archiveSuitLegacyIndexedDbReady = true;
      resolve("");
    };
    request.onsuccess = () => {
      const db = request.result;
      if (!db?.objectStoreNames?.contains?.(ARCHIVE_SUIT_LEGACY_GALLERY_DB_STORE)) {
        db?.close?.();
        archiveSuitLegacyIndexedDbSource = "empty";
        archiveSuitLegacyIndexedDbReady = true;
        resolve("");
        return;
      }
      const transaction = db.transaction(ARCHIVE_SUIT_LEGACY_GALLERY_DB_STORE, "readonly");
      const store = transaction.objectStore(ARCHIVE_SUIT_LEGACY_GALLERY_DB_STORE);
      const readRequest = store.get(ARCHIVE_SUIT_LEGACY_GALLERY_DB_RECORD_KEY);
      readRequest.onsuccess = () => {
        const raw = typeof readRequest.result?.raw === "string" ? readRequest.result.raw : "";
        archiveSuitLegacyIndexedDbSource = raw ? "indexedDB" : "empty";
        archiveSuitLegacyIndexedDbReady = true;
        resolve(raw);
      };
      readRequest.onerror = () => {
        archiveSuitLegacyIndexedDbSource = "error";
        archiveSuitLegacyIndexedDbReady = true;
        resolve("");
      };
      transaction.oncomplete = () => db.close();
      transaction.onabort = () => db.close();
      transaction.onerror = () => db.close();
    };
  });
}

function ensureArchiveSuitLegacyIndexedDbGalleryItems() {
  if (archiveSuitLegacyIndexedDbReady || archiveSuitLegacyIndexedDbPromise) return archiveSuitLegacyIndexedDbPromise;
  archiveSuitLegacyIndexedDbPromise = readArchiveSuitLegacyIndexedDbRaw()
    .then((raw) => {
      const parsed = parseArchiveSuitGalleryRaw(raw);
      archiveSuitLegacyIndexedDbRawCount = parsed.length;
      archiveSuitLegacyIndexedDbItems = parsed
        .flatMap((entry, index) => extractArchiveSuitLegacyGalleryItems(entry, index))
        .filter(Boolean);
      archiveSuitGalleryDiagnosticsSignature = "";
      if (storageBridgeSection === "gallery" && archiveSuitPanels.length) {
        renderArchiveSuitPanels();
      }
    })
    .catch((error) => {
      archiveSuitLegacyIndexedDbSource = "error";
      archiveSuitLegacyIndexedDbRawCount = 0;
      archiveSuitLegacyIndexedDbItems = [];
      console.warn("[archive-gallery-import] indexedDB read failed", error);
    })
    .finally(() => {
      archiveSuitLegacyIndexedDbReady = true;
      archiveSuitLegacyIndexedDbPromise = null;
    });
  return archiveSuitLegacyIndexedDbPromise;
}

function parseArchiveSuitDeletedIdsRaw(raw = "") {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    const source = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.ids) ? parsed.ids : [];
    return Array.from(new Set(source.map((value) => String(value || "").trim()).filter(Boolean)));
  } catch {
    return [];
  }
}

function getArchiveSuitDeletedIdsSet() {
  const ownRaw = window.localStorage?.getItem(ARCHIVE_SUIT_DELETED_STORAGE_KEY) || "";
  let legacyRaw = "";
  for (const [, storage] of getArchiveSuitReadableStorageAreas()) {
    legacyRaw = storage?.getItem(ARCHIVE_SUIT_LEGACY_GALLERY_DELETED_KEY) || "";
    if (legacyRaw) break;
  }
  if (!legacyRaw) {
    const payload = readArchiveSuitWindowPayload();
    legacyRaw = typeof payload?.[ARCHIVE_SUIT_LEGACY_GALLERY_DELETED_WINDOW_KEY] === "string" ? payload[ARCHIVE_SUIT_LEGACY_GALLERY_DELETED_WINDOW_KEY] : "";
  }
  return new Set([...parseArchiveSuitDeletedIdsRaw(ownRaw), ...parseArchiveSuitDeletedIdsRaw(legacyRaw)]);
}

function addArchiveSuitDeletedIds(ids = []) {
  const next = new Set([...getArchiveSuitDeletedIdsSet(), ...ids.map((id) => String(id || "").trim()).filter(Boolean)]);
  try {
    window.localStorage?.setItem(ARCHIVE_SUIT_DELETED_STORAGE_KEY, JSON.stringify({ version: 1, ids: [...next] }));
  } catch (error) {
    console.error("[archive-suit] deleted registry save failed", error);
  }
}

function parseArchiveSuitGalleryRaw(raw = "") {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === "string") {
      return parseArchiveSuitGalleryRaw(parsed);
    }
    const arrayField = ["items", "entries", "gallery", "data", "value", "records"].find((field) => Array.isArray(parsed?.[field]));
    if (Array.isArray(parsed)) return parsed;
    if (arrayField) return parsed[arrayField];
    if (parsed && typeof parsed === "object") {
      const values = Object.values(parsed).filter((value) => value && typeof value === "object");
      return values.length ? values : [];
    }
    return [];
  } catch {
    return [];
  }
}

function normalizeArchiveSuitLegacyGalleryItem(item = {}, fallbackIndex = 0, parent = {}) {
  const publicUrl = String(item.publicUrl || item.url || item.fileUrl || item.downloadUrl || item.src || parent.publicUrl || parent.url || "").trim();
  const dataUrl = String(item.fileData || item.dataUrl || item.imageData || item.previewUrl || item.thumbnailUrl || item.src || publicUrl || parent.fileData || parent.dataUrl || "").trim();
  const storagePath = String(item.storagePath || item.path || item.filePath || item.objectPath || parent.storagePath || parent.path || "").trim();
  if (!dataUrl && !publicUrl && !storagePath) return null;
  const rawId = String(item.id || item.sourceId || parent.id || `${item.fileName || item.name || "gallery"}-${fallbackIndex}`).trim();
  const fileName = String(item.fileName || item.name || item.title || parent.fileName || parent.title || parent.memo || `이전 갤러리 자료 ${fallbackIndex + 1}`).trim();
  const mimeType = String(item.mimeType || item.contentType || item.fileType || "").trim();
  const type = String(item.type || item.mediaType || "").toLowerCase();
  const isVideo = type === "video" || mimeType.toLowerCase().startsWith("video/") || /\.(mp4|mov|webm|m4v)$/i.test(fileName);
  const legacyId = `legacy-gallery-${rawId}`;
  return {
    id: legacyId,
    legacyId: rawId,
    tab: "gallery",
    date: String(item.capturedDate || item.shootDate || item.date || parent.capturedDate || parent.shootDate || parent.date || "").trim(),
    memo: String(item.memo || parent.memo || parent.title || "").trim(),
    fileName: fileName || "gallery",
    fileType: mimeType || (isVideo ? "video/*" : "image/*"),
    fileSize: Number(item.fileSize || parent.fileSize || 0),
    fileData: dataUrl || publicUrl,
    publicUrl,
    storagePath,
    createdAt: String(item.savedAt || item.createdAt || parent.savedAt || parent.createdAt || "").trim(),
    source: "legacy-gallery",
  };
}

function extractArchiveSuitLegacyGalleryItems(entry = {}, entryIndex = 0) {
  if (Array.isArray(entry.images)) {
    return entry.images
      .map((image, imageIndex) => normalizeArchiveSuitLegacyGalleryItem(image, imageIndex, entry))
      .filter(Boolean);
  }
  return [normalizeArchiveSuitLegacyGalleryItem(entry, entryIndex)].filter(Boolean);
}

function getArchiveSuitLegacyGalleryItems() {
  const deleted = getArchiveSuitDeletedIdsSet();
  const imported = [...archiveSuitLegacyIndexedDbItems];
  ARCHIVE_SUIT_LEGACY_GALLERY_KEYS.forEach((key) => {
    const { raw } = getArchiveSuitLegacyGalleryRawByKey(key);
    parseArchiveSuitGalleryRaw(raw).forEach((entry, index) => {
      imported.push(...extractArchiveSuitLegacyGalleryItems(entry, index));
    });
  });
  return imported.filter((item) => !deleted.has(item.id) && !deleted.has(item.legacyId));
}

function collectArchiveSuitLegacyGalleryCandidates() {
  const rawCounts = {};
  const rawSources = {};
  const candidates = [...archiveSuitLegacyIndexedDbItems];
  ARCHIVE_SUIT_LEGACY_GALLERY_KEYS.forEach((key) => {
    const { raw, source } = getArchiveSuitLegacyGalleryRawByKey(key);
    const parsed = parseArchiveSuitGalleryRaw(raw);
    rawCounts[key] = parsed.length;
    rawSources[key] = source || "empty";
    parsed.forEach((entry, index) => {
      candidates.push(...extractArchiveSuitLegacyGalleryItems(entry, index));
    });
  });
  rawCounts.indexedDB = archiveSuitLegacyIndexedDbRawCount;
  rawSources.indexedDB = archiveSuitLegacyIndexedDbSource;
  return { rawCounts, rawSources, candidates };
}

function getArchiveSuitGalleryDiagnostics() {
  const { rawCounts, rawSources, candidates } = collectArchiveSuitLegacyGalleryCandidates();
  const deleted = getArchiveSuitDeletedIdsSet();
  const afterDeleted = candidates.filter((item) => !deleted.has(item.id) && !deleted.has(item.legacyId));
  const seen = new Set();
  const afterDedupe = afterDeleted.filter((item) => {
    const key = buildArchiveSuitDedupeKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return {
    keys: rawCounts,
    sources: rawSources,
    legacyCandidateBeforeDelete: candidates.length,
    afterDeleted: afterDeleted.length,
    afterDedupe: afterDedupe.length,
    finalRender: getArchiveSuitDisplayItems("gallery").length,
  };
}

function logArchiveSuitGalleryDiagnostics() {
  const diagnostics = getArchiveSuitGalleryDiagnostics();
  const signature = JSON.stringify(diagnostics);
  if (signature === archiveSuitGalleryDiagnosticsSignature) return;
  archiveSuitGalleryDiagnosticsSignature = signature;
  console.info("[archive-gallery-import]", JSON.stringify(diagnostics));
}

if (typeof window !== "undefined") {
  window.getWC26ArchiveGalleryDiagnostics = getArchiveSuitGalleryDiagnostics;
}

function buildArchiveSuitDedupeKey(item = {}) {
  return [
    item.storagePath,
    item.publicUrl,
    item.fileData && !String(item.fileData).startsWith("data:") ? item.fileData : "",
    item.fileName,
    item.date,
    item.memo,
  ]
    .map((value) => String(value || "").trim().toLowerCase())
    .filter(Boolean)
    .join("|") || String(item.id || "");
}

function getArchiveSuitDisplayItems(tab = storageBridgeSection) {
  const normalized = normalizeStorageBridgeSection(tab);
  const deleted = getArchiveSuitDeletedIdsSet();
  const ownItems = getArchiveSuitItems().filter((item) => normalizeStorageBridgeSection(item.tab) === normalized);
  const source = normalized === "gallery" ? [...ownItems, ...getArchiveSuitLegacyGalleryItems()] : ownItems;
  const seen = new Set();
  return source.filter((item) => {
    if (deleted.has(item.id) || deleted.has(item.legacyId)) return false;
    const key = buildArchiveSuitDedupeKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getArchiveSuitTabLabel(tab = storageBridgeSection) {
  return ARCHIVE_SUIT_TABS[normalizeStorageBridgeSection(tab)]?.label || "자료";
}

function getArchiveSuitToday() {
  return new Date().toISOString().slice(0, 10);
}

function formatArchiveSuitFileSize(size = 0) {
  const bytes = Number(size || 0);
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readArchiveSuitFile(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        fileName: file.name || "attachment",
        fileType: file.type || "",
        fileSize: file.size || 0,
        fileData: String(reader.result || ""),
      });
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function renderArchiveSuitPreview(item = {}) {
  const safeName = escapeTimelineHtml(item.fileName || "첨부파일");
  if (item.fileData && String(item.fileType || "").startsWith("image/")) {
    return `<img class="archive-suit-item-preview" src="${item.fileData}" alt="${safeName}">`;
  }
  if (item.fileData && String(item.fileType || "").startsWith("video/")) {
    return `<video class="archive-suit-item-preview" src="${item.fileData}" controls></video>`;
  }
  return `<div class="archive-suit-file-chip">${safeName}</div>`;
}

function renderArchiveSuitPreviewPanel(item = null) {
  if (!item) {
    return `<aside class="archive-suit-preview-panel">
      <div class="archive-suit-preview-empty">항목을 선택하면 미리보기가 표시됩니다.</div>
    </aside>`;
  }
  const fileType = String(item.fileType || "").toLowerCase();
  const fileName = escapeTimelineHtml(item.fileName || "첨부파일");
  const date = escapeTimelineHtml(item.date || "");
  const memo = escapeTimelineHtml(item.memo || "");
  const download = item.fileData
    ? `<a class="archive-suit-download" href="${item.fileData}" download="${fileName}">다운로드</a>`
    : "";
  let body = `<div class="archive-suit-preview-unavailable">미리보기를 표시할 수 없습니다. 파일을 다운로드하거나 다시 확인해 주세요.</div>`;
  if (item.fileData && fileType.startsWith("image/")) {
    body = `<img class="archive-suit-preview-media" src="${item.fileData}" alt="${fileName}">`;
  } else if (item.fileData && fileType.startsWith("video/")) {
    body = `<video class="archive-suit-preview-media" src="${item.fileData}" controls></video>`;
  } else if (item.fileData && fileType.startsWith("audio/")) {
    body = `<audio class="archive-suit-preview-audio" src="${item.fileData}" controls></audio>`;
  } else if (item.fileData && fileType === "application/pdf") {
    body = `<iframe class="archive-suit-preview-frame" src="${item.fileData}" title="${fileName} 미리보기"></iframe>`;
  } else if (item.fileData && (fileType.startsWith("text/") || /\.(txt|csv|json|md)$/i.test(item.fileName || ""))) {
    body = `<iframe class="archive-suit-preview-frame" src="${item.fileData}" title="${fileName} 텍스트 미리보기"></iframe>`;
  }
  return `<aside class="archive-suit-preview-panel">
    <div class="archive-suit-preview-stage">${body}</div>
    <div class="archive-suit-preview-info">
      <div class="archive-suit-preview-name">${fileName}</div>
      <div class="archive-suit-preview-meta">${[date, escapeTimelineHtml(item.fileType || ""), escapeTimelineHtml(formatArchiveSuitFileSize(item.fileSize))].filter(Boolean).join(" / ")}</div>
      ${memo ? `<div class="archive-suit-preview-memo">${memo}</div>` : ""}
      ${download}
    </div>
  </aside>`;
}

function renderArchiveSuitList(tab = storageBridgeSection, options = {}) {
  const normalized = normalizeStorageBridgeSection(tab);
  const items = getArchiveSuitDisplayItems(normalized);
  if (!items.length) {
    return `<div class="archive-suit-empty">보관자료 없음</div>`;
  }
  return `<div class="archive-suit-list">${items
    .map((item) => {
      const id = escapeTimelineHtml(item.id || "");
      const date = escapeTimelineHtml(item.date || "");
      const memo = escapeTimelineHtml(item.memo || "");
      const fileName = escapeTimelineHtml(item.fileName || "첨부파일");
      const fileSize = escapeTimelineHtml(formatArchiveSuitFileSize(item.fileSize));
      const selected = archiveSuitSelectedId && item.id === archiveSuitSelectedId;
      const deleteBox = options.deleteMode
        ? `<label class="archive-suit-select" onclick="event.stopPropagation()"><input type="checkbox" data-archive-delete-item="${id}"><span>선택</span></label>`
        : "";
      const editButton = options.editMode ? `<button type="button" class="archive-suit-inline-btn" data-archive-edit-item="${id}">수정</button>` : "";
      return `<article class="archive-suit-item${selected ? " is-selected" : ""}" data-archive-item-id="${id}">
        ${deleteBox}
        <div class="archive-suit-item-media">${renderArchiveSuitPreview(item)}</div>
        <div class="archive-suit-item-body">
          <div class="archive-suit-item-name">${fileName}</div>
          <div class="archive-suit-item-meta">${[date, fileSize].filter(Boolean).join(" / ")}</div>
          ${memo ? `<div class="archive-suit-item-memo">${memo}</div>` : ""}
          ${item.fileData ? `<a class="archive-suit-download" href="${item.fileData}" download="${fileName}">다운로드</a>` : ""}
        </div>
        ${editButton}
      </article>`;
    })
    .join("")}</div>`;
}

function renderArchiveSuitForm(tab = storageBridgeSection, item = null) {
  const normalized = normalizeStorageBridgeSection(tab);
  const meta = ARCHIVE_SUIT_TABS[normalized] || ARCHIVE_SUIT_TABS["document-storage"];
  const date = escapeTimelineHtml(item?.date || getArchiveSuitToday());
  const memo = escapeTimelineHtml(item?.memo || "");
  const currentFile = item?.fileName ? `<div class="archive-suit-current-file">현재 파일: ${escapeTimelineHtml(item.fileName)}</div>` : "";
  return `<form class="archive-suit-form" data-archive-form="${normalized}" data-archive-edit-id="${escapeTimelineHtml(item?.id || "")}">
    <label class="archive-suit-field"><span>날짜</span><input type="date" data-archive-field="date" value="${date}"></label>
    <label class="archive-suit-field archive-suit-field-wide"><span>파일 첨부</span><input type="file" data-archive-field="file" accept="${escapeTimelineHtml(meta.accept)}">${currentFile}</label>
    <label class="archive-suit-field archive-suit-field-wide"><span>메모</span><textarea data-archive-field="memo" rows="4">${memo}</textarea></label>
    <div class="archive-suit-form-actions">
      <button type="button" class="archive-suit-inline-btn" data-archive-form-cancel>취소</button>
      <button type="submit" class="archive-suit-inline-btn is-primary">저장</button>
    </div>
  </form>`;
}

function renderArchiveSuitPanels() {
  archiveSuitPanels.forEach((panel) => {
    const tab = normalizeStorageBridgeSection(panel.dataset.archiveSuitPanel || "document-storage");
    if (panel.hidden) return;
    if (tab === "gallery") {
      ensureArchiveSuitLegacyIndexedDbGalleryItems();
      logArchiveSuitGalleryDiagnostics();
    }
    if (archiveSuitMode === "create") {
      panel.innerHTML = renderArchiveSuitForm(tab);
      return;
    }
    if (archiveSuitMode === "edit") {
      if (archiveSuitEditingId) {
    const item = getArchiveSuitDisplayItems(tab).find((entry) => entry.id === archiveSuitEditingId);
        panel.innerHTML = item ? renderArchiveSuitForm(tab, item) : renderArchiveSuitList(tab, { editMode: true });
        return;
      }
      panel.innerHTML = renderArchiveSuitList(tab, { editMode: true });
      return;
    }
    if (archiveSuitMode === "delete") {
      panel.innerHTML = `${renderArchiveSuitList(tab, { deleteMode: true })}
        <div class="archive-suit-delete-actions">
          <button type="button" class="archive-suit-inline-btn" data-archive-delete-cancel>취소</button>
          <button type="button" class="archive-suit-inline-btn is-danger" data-archive-delete-confirm>선택 삭제</button>
        </div>`;
      return;
    }
    const items = getArchiveSuitDisplayItems(tab);
    const selected = items.find((item) => item.id === archiveSuitSelectedId) || null;
    panel.innerHTML = `<div class="archive-suit-view-grid">
      ${renderArchiveSuitList(tab)}
      ${renderArchiveSuitPreviewPanel(selected)}
    </div>`;
  });
}

function closeArchiveSuitCreateMenu() {
  if (archiveSuitCreateMenu) {
    archiveSuitCreateMenu.hidden = true;
  }
}

function setArchiveSuitMode(mode = "view", tab = storageBridgeSection) {
  archiveSuitMode = mode;
  archiveSuitEditingId = "";
  if (mode !== "view") {
    archiveSuitSelectedId = "";
  }
  setArchiveBridgeSection(tab);
}

async function saveArchiveSuitForm(form) {
  const tab = normalizeStorageBridgeSection(form?.dataset?.archiveForm || storageBridgeSection);
  const editId = String(form?.dataset?.archiveEditId || "");
  const date = String(form?.querySelector('[data-archive-field="date"]')?.value || getArchiveSuitToday());
  const memo = String(form?.querySelector('[data-archive-field="memo"]')?.value || "").trim();
  const file = form?.querySelector('[data-archive-field="file"]')?.files?.[0] || null;
  const filePayload = await readArchiveSuitFile(file);
  const items = getArchiveSuitItems();
  if (editId) {
    const nextItems = items.map((item) => {
      if (item.id !== editId) return item;
      return {
        ...item,
        date,
        memo,
        ...(filePayload || {}),
        updatedAt: new Date().toISOString(),
      };
    });
    setArchiveSuitItems(nextItems);
  } else {
    const newId = `archive-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setArchiveSuitItems([
      ...items,
      {
        id: newId,
        tab,
        date,
        memo,
        ...(filePayload || {}),
        createdAt: new Date().toISOString(),
      },
    ]);
    archiveSuitSelectedId = newId;
  }
  setArchiveSuitMode("view", tab);
}

function postStorageBridgeNavigation(sectionId = "document-storage") {
  if (!loadLazyIframe(storageBridgeFrame)) {
    return;
  }
  if (!storageBridgeFrame?.contentWindow) {
    return;
  }

  storageBridgeFrame.contentWindow.postMessage(
    {
      type: WC26_STORAGE_BRIDGE_MESSAGE.navigate,
      section: normalizeStorageBridgeSection(sectionId),
    },
    "*",
  );
}

function setArchiveBridgeSection(sectionId = "document-storage") {
  storageBridgeSection = normalizeStorageBridgeSection(sectionId);
  setStorageBridgeButtonState(storageBridgeSection);
  if (storageBridgeFrame) {
    postStorageBridgeNavigation(storageBridgeSection);
  }
}

function stripBridgeSummaryHtml(value = "") {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function applyStorageBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeStorageBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  const meta = document.querySelector("#storage-bridge-meta");
  const panelSummary = document.querySelector("#panel-archive .utility-copy");
  const recentLine = normalizedSummary.recentItems
    .map((item) => String(item?.title || item?.name || item?.fileName || "").trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const hasStorageSummaryData =
    normalizedSummary.documentCount > 0 ||
    normalizedSummary.fileCount > 0 ||
    normalizedSummary.galleryCount > 0 ||
    normalizedSummary.videoCount > 0 ||
    normalizedSummary.carnetCount > 0;
  const storageSummaryText = `문서 ${normalizedSummary.documentCount}건 / 파일 ${normalizedSummary.fileCount}건 / 갤러리 ${normalizedSummary.galleryCount}건 / 동영상 ${normalizedSummary.videoCount}건`;

  if (meta) {
    meta.textContent = hasStorageSummaryData
      ? `${storageSummaryText}${recentLine ? ` / ${recentLine}` : ""}`
      : storageBridgePanelDefaults.meta;
  }

  if (panelSummary) {
    panelSummary.textContent = hasStorageSummaryData
      ? `${storageSummaryText}${recentLine ? ` / ${recentLine}` : ""}`
      : storageBridgePanelDefaults.panelSummary;
  }
}

function normalizeMediaBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();

  if (["broadcast", "broadcast-schedule", "ops-memo"].includes(normalized)) {
    return "broadcast-schedule";
  }

  if (["worldcup-news", "terrestrial-news", "news"].includes(normalized)) {
    return "worldcup-news";
  }

  return "broadcast-schedule";
}

function captureMediaBridgePanelDefaults() {
  return {
    meta: document.querySelector("#media-bridge-meta")?.textContent || "",
    broadcastPanelSummary: document.querySelector("#panel-broadcast .utility-copy")?.textContent || "",
    newsPanelSummary: document.querySelector("#panel-news .utility-copy")?.textContent || "",
    title: document.querySelector("#broadcast-status-title")?.textContent || "",
    time: document.querySelector("#broadcast-status-time")?.textContent || "",
    program: document.querySelector("#broadcast-status-program")?.textContent || "",
    note: document.querySelector("#broadcast-status-note")?.textContent || "",
  };
}

function normalizeMediaBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  return {
    selectedSection: normalizeMediaBridgeSection(payload.selectedSection || ""),
    selectedDate: String(payload.selectedDate || "").trim(),
    selectedYear: normalizeMediaNewsYear(payload.selectedYear || "2026"),
    selectedBroadcaster: String(payload.selectedBroadcaster || "KBS").trim() || "KBS",
    broadcastCount: Number(payload.broadcastCount || 0),
    newsCount: Number(payload.newsCount || 0),
    broadcastItems: Array.isArray(payload.broadcastItems) ? payload.broadcastItems : [],
    latestNewsItems: Array.isArray(payload.latestNewsItems) ? payload.latestNewsItems : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildMediaBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedSection: normalizeMediaBridgeSection(summary.selectedSection || ""),
    selectedDate: summary.selectedDate || "",
    selectedYear: normalizeMediaNewsYear(summary.selectedYear || "2026"),
    selectedBroadcaster: String(summary.selectedBroadcaster || "KBS").trim() || "KBS",
    broadcastCount: Number(summary.broadcastCount || 0),
    newsCount: Number(summary.newsCount || 0),
    broadcastItems: Array.isArray(summary.broadcastItems) ? summary.broadcastItems : [],
    latestNewsItems: Array.isArray(summary.latestNewsItems) ? summary.latestNewsItems : [],
  });
}

function hasMediaBridgeSummaryData(summary = {}) {
  return (
    Number(summary.broadcastCount || 0) > 0 ||
    Number(summary.newsCount || 0) > 0 ||
    (Array.isArray(summary.broadcastItems) && summary.broadcastItems.length > 0) ||
    (Array.isArray(summary.latestNewsItems) && summary.latestNewsItems.length > 0)
  );
}

function normalizeMediaNewsYear(year = "") {
  const normalized = String(year || "").trim();
  if (!normalized) {
    return "2026";
  }
  return normalized;
}

function setMediaNewsYearButtonState(year = "2026") {
  const normalized = normalizeMediaNewsYear(year);
  mediaNewsYearButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mediaNewsYear === normalized);
  });
}

function syncMediaBridgeUi() {
  const newsControlRow = ensureMediaNewsControlRow();
  const broadcasterToolbar = ensureMediaBroadcasterToolbar();
  const newsActionsToolbar = ensureMediaNewsActionsToolbar();
  const title = document.querySelector("#view-broadcast-news .panel__title");
  const tag = document.querySelector("#media-bridge-tag");
  if (newsControlRow) {
    newsControlRow.hidden = mediaBridgeSection !== "worldcup-news";
  }
  if (mediaNewsYearToolbar) {
    mediaNewsYearToolbar.hidden = mediaBridgeSection !== "worldcup-news";
  }
  if (broadcasterToolbar) {
    broadcasterToolbar.hidden = mediaBridgeSection !== "worldcup-news";
  }
  if (newsActionsToolbar) {
    newsActionsToolbar.hidden = mediaBridgeSection !== "worldcup-news";
  }
  if (title) {
    title.textContent = mediaBridgeSection === "worldcup-news" ? "월드컵 뉴스" : "방송편성";
  }
  if (tag) {
    tag.textContent = mediaBridgeSection === "worldcup-news" ? "NEWS OPS" : "ON AIR OPS";
  }
  setMediaNewsYearButtonState(mediaBridgeNewsYear);
  setMediaNewsBroadcasterButtonState(mediaBridgeNewsBroadcaster);
}

function applyMediaBridgeNewsYearSelection() {
  if (mediaBridgeSection !== "worldcup-news") {
    return;
  }
  const legacyWindow = mediaBridgeFrame?.contentWindow;
  const selectedYear = normalizeMediaNewsYear(mediaBridgeNewsYear);
  const selectedBroadcaster = String(
    mediaBridgeNewsBroadcaster ||
      mediaBridgeSummaryState?.selectedBroadcaster ||
      legacyWindow?.getWC26LegacyMediaSummary?.()?.selectedBroadcaster ||
      "KBS",
  ).trim() || "KBS";
  try {
    if (typeof legacyWindow?.openWorldcupNewsBridge === "function") {
      legacyWindow.openWorldcupNewsBridge(selectedYear, selectedBroadcaster);
    } else {
      legacyWindow?.openNewsDetail?.(selectedYear, selectedBroadcaster);
    }
  } catch (_error) {
    // Same-origin direct bridge hydration is best-effort only.
  }
  queueBridgeSummaryBurst(requestMediaBridgeSummary, [120, 320, 760]);
}

function setMediaBridgeNewsYear(year = "2026") {
  mediaBridgeNewsYear = normalizeMediaNewsYear(year);
  if (!mediaBridgeNewsBroadcaster) {
    mediaBridgeNewsBroadcaster = "KBS";
  }
  syncMediaBridgeUi();
  postMediaBridgeNavigation("worldcup-news");
  [80, 220, 480].forEach((delay) => {
    window.setTimeout(() => {
      applyMediaBridgeNewsYearSelection();
    }, delay);
  });
  queueMediaBridgeScrollSync();
}

function isNewsLikeBroadcastItem(item = {}) {
  const combined = [item?.title, item?.memo, item?.program].map((value) => String(value || "")).join(" ").toLowerCase();
  return /(뉴스|news|뉴스9|kbs9|kbs 뉴스|mbc 뉴스|sbs 뉴스)/i.test(combined);
}

function getBroadcastSlideItems() {
  const sourceItems = getMainBroadcastSourceItems();
  const filteredItems = sourceItems.filter((item) => !isNewsLikeBroadcastItem(item));
  return (filteredItems.length ? filteredItems : sourceItems).slice(0, 4);
}

const WC26_MAIN_BROADCAST_STORAGE_KEY = "worldcup-guide-news-programming-v1";
const WC26_MAIN_BROADCAST_TEMPLATE = [
  { title: "아침&", localTime: "17:30", localDayOffset: -1, city: "Mexico City", memo: "" },
  { title: "장르가 머니", localTime: "20:00", localDayOffset: -1, city: "Mexico City", memo: "" },
  { title: "이가혁 라이브", localTime: "03:00", localDayOffset: 0, city: "Mexico City", memo: "" },
  { title: "JTBC 뉴스룸", localTime: "04:30", localDayOffset: 0, city: "Mexico City", memo: "" },
  { title: "사건반장", localTime: "05:50", localDayOffset: 0, city: "Mexico City", memo: "" },
];

function getMainBroadcastTodayDateKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

function normalizeMainBroadcastSpecialEntry(entry = {}, index = 0) {
  const date = String(entry?.date || "").trim();
  const title = String(entry?.title || "").trim();
  const localTime = String(entry?.localTime || "").trim();
  if (!date || !title || !localTime || localTime === "--:--") {
    return null;
  }
  return {
    ...entry,
    id: String(entry?.id || `main-special-${date}-${index}`),
    date,
    title,
    localTime,
    localDayOffset: Number(entry?.localDayOffset) || 0,
    city: String(entry?.city || "Mexico City").trim() || "Mexico City",
    memo: String(entry?.memo || "").trim(),
    isSpecial: true,
    isSpecialEntry: true,
  };
}

function getMainBroadcastStoredSpecialEntries(dateKey = "") {
  try {
    const raw = window.localStorage?.getItem(WC26_MAIN_BROADCAST_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    const specialEntries = Array.isArray(parsed?.specialEntries) ? parsed.specialEntries : [];
    return specialEntries
      .map((entry, index) => normalizeMainBroadcastSpecialEntry(entry, index))
      .filter((entry) => entry && String(entry.date || "") === dateKey);
  } catch (error) {
    console.warn("[main-broadcast] special entries fallback failed", error);
    return [];
  }
}

function buildMainBroadcastFallbackItem(item = {}, index = 0, dateKey = getMainBroadcastTodayDateKey()) {
  const localTime = getMainBroadcastLocalTime(item) || String(item.localTime || "").trim();
  const city = String(item.city || "Mexico City").trim() || "Mexico City";
  return {
    ...item,
    id: String(item.id || `main-broadcast-${dateKey}-${index}`),
    date: String(item.date || dateKey).trim() || dateKey,
    title: String(item.title || "").trim(),
    localTime,
    localDayOffset: Number(item.localDayOffset) || 0,
    city,
    memo: String(item.memo || "").trim(),
    timeLabel: String(item.timeLabel || `현지 ${localTime}`).trim(),
    isSpecial: Boolean(item.isSpecial || item.isSpecialEntry),
    isSpecialEntry: Boolean(item.isSpecialEntry),
  };
}

function getMainBroadcastFallbackItems() {
  const dateKey = String(mediaBridgeSummaryState?.selectedDate || getMainBroadcastTodayDateKey()).trim();
  const fixedItems = WC26_MAIN_BROADCAST_TEMPLATE
    .slice(0, 4)
    .map((item, index) => buildMainBroadcastFallbackItem(item, index, dateKey));
  const timedSpecialItems = getMainBroadcastStoredSpecialEntries(dateKey)
    .map((item, index) => buildMainBroadcastFallbackItem(item, index + fixedItems.length, dateKey));
  return [...fixedItems, ...timedSpecialItems].sort((a, b) => {
    const sortDiff = getMainBroadcastSortValue(a).localeCompare(getMainBroadcastSortValue(b));
    if (sortDiff !== 0) {
      return sortDiff;
    }
    return Number(Boolean(a.isSpecial || a.isSpecialEntry)) - Number(Boolean(b.isSpecial || b.isSpecialEntry));
  });
}

function getMainBroadcastSourceItems() {
  const summaryItems = Array.isArray(mediaBridgeSummaryState?.broadcastItems)
    ? mediaBridgeSummaryState.broadcastItems
    : [];
  const filteredSummaryItems = summaryItems.filter((item) => !isNewsLikeBroadcastItem(item));
  if (filteredSummaryItems.length) {
    return filteredSummaryItems;
  }
  if (summaryItems.length) {
    return summaryItems;
  }
  return getMainBroadcastFallbackItems();
}

function getMainBroadcastDayNumber(dateKey = "") {
  const match = String(dateKey || "").trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return null;
  }
  return Math.floor(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000);
}

function getMainBroadcastMexicoNowParts() {
  try {
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Mexico_City",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(new Date()).map((part) => [part.type, part.value]),
    );
    const hour = parts.hour === "24" ? "00" : parts.hour;
    return {
      date: `${parts.year}-${parts.month}-${parts.day}`,
      time: `${hour}:${parts.minute}`,
    };
  } catch (error) {
    return null;
  }
}

function getMainBroadcastLocalTime(item = {}) {
  const directTime = String(item.localTime || "").trim().match(/\d{1,2}:\d{2}/)?.[0];
  if (directTime) {
    const [hour, minute] = directTime.split(":");
    return `${String(hour).padStart(2, "0")}:${minute}`;
  }
  const labelTime = String(item.timeLabel || item.broadcastTime || "").match(/현지\s*(\d{1,2}:\d{2})/)?.[1];
  if (!labelTime) {
    return "";
  }
  const [hour, minute] = labelTime.split(":");
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

function getMainBroadcastSortValue(item = {}) {
  const dayOffset = Number(item.localDayOffset) || 0;
  const localTime = getMainBroadcastLocalTime(item) || "99:99";
  return `${String(dayOffset).padStart(3, "0")}|${localTime}`;
}

function getMainBroadcastCurrentSortValue(selectedDate = "") {
  const nowParts = getMainBroadcastMexicoNowParts();
  const selectedDay = getMainBroadcastDayNumber(selectedDate);
  const currentDay = getMainBroadcastDayNumber(nowParts?.date || "");
  if (!nowParts || selectedDay === null || currentDay === null) {
    return "";
  }
  return `${String(currentDay - selectedDay).padStart(3, "0")}|${nowParts.time}`;
}

function getPrimaryBroadcastProgrammingItem() {
  const sourceItems = getMainBroadcastSourceItems();
  const filteredItems = sourceItems.filter((item) => !isNewsLikeBroadcastItem(item));
  const selectedDate = String(mediaBridgeSummaryState?.selectedDate || filteredItems[0]?.date || sourceItems[0]?.date || "").trim();
  const items = (filteredItems.length ? filteredItems : sourceItems)
    .filter((item) => getMainBroadcastLocalTime(item))
    .sort((a, b) => {
      const sortDiff = getMainBroadcastSortValue(a).localeCompare(getMainBroadcastSortValue(b));
      if (sortDiff !== 0) {
        return sortDiff;
      }
      return Number(Boolean(a.isSpecial || a.isSpecialEntry)) - Number(Boolean(b.isSpecial || b.isSpecialEntry));
    });
  if (!items.length) {
    return null;
  }
  const currentSort = getMainBroadcastCurrentSortValue(selectedDate);
  let onairIndex = -1;
  if (currentSort) {
    items.forEach((item, index) => {
      if (getMainBroadcastSortValue(item) <= currentSort) {
        onairIndex = index;
      }
    });
  }
  if (onairIndex >= 0) {
    return { item: items[onairIndex], state: "onair" };
  }
  return { item: items[0], state: "scheduled" };
}

function getMainBroadcastKoreaTimeLabel(item = {}) {
  const localTime = getMainBroadcastLocalTime(item);
  if (!localTime) {
    return "";
  }
  const [hour, minute] = localTime.split(":").map((value) => Number(value));
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
    return "";
  }
  const koreaTotalMinutes = hour * 60 + minute + 14 * 60;
  const koreaDayOffset = Math.floor(koreaTotalMinutes / 1440);
  const koreaMinutesOfDay = ((koreaTotalMinutes % 1440) + 1440) % 1440;
  const koreaHour = String(Math.floor(koreaMinutesOfDay / 60)).padStart(2, "0");
  const koreaMinute = String(koreaMinutesOfDay % 60).padStart(2, "0");
  return `한국 ${koreaHour}:${koreaMinute}${koreaDayOffset > 0 ? `(+${koreaDayOffset}일)` : ""}`;
}

function createMainBroadcastCard(primaryBroadcast = null) {
  const item = primaryBroadcast?.item || null;
  const card = document.createElement("article");
  card.className = "news-programming-card broadcast-suit-card is-fixed-broadcast-card main-broadcast-programming-card";

  if (!item) {
    card.classList.add("is-empty");
    const empty = document.createElement("p");
    empty.className = "main-broadcast-empty";
    empty.textContent = "현재 방송대기 중인 편성이 없습니다.";
    card.append(empty);
    return card;
  }

  const isOnair = primaryBroadcast?.state === "onair";
  const localTime = getMainBroadcastLocalTime(item);
  const timeTop = document.createElement("div");
  timeTop.className = "news-programming-card-top";
  const time = document.createElement("div");
  time.className = "news-programming-time";
  const timeText = document.createElement("span");
  timeText.className = "news-programming-time-text";
  timeText.textContent = [localTime ? `현지 ${localTime}` : "", getMainBroadcastKoreaTimeLabel(item)]
    .filter(Boolean)
    .join(" / ");
  time.append(timeText);
  timeTop.append(time);

  const airBadge = document.createElement("span");
  airBadge.className = `broadcast-suit-air-badge ${isOnair ? "is-onair" : "is-standby"}`;
  airBadge.textContent = isOnair ? "ON AIR" : "방송대기";

  const title = document.createElement("h4");
  title.className = "news-programming-card-title";
  title.textContent = stripBridgeSummaryHtml(item.title || "프로그램");

  const memoWrap = document.createElement("div");
  memoWrap.className = "broadcast-suit-fixed-bottom";
  const memo = document.createElement("div");
  memo.className = "broadcast-suit-fixed-memo";
  memo.textContent = stripBridgeSummaryHtml(item.memo || item.program || "");
  memoWrap.append(memo);

  card.append(timeTop, airBadge, title, memoWrap);
  return card;
}

function renderBroadcastSlideDots(total = 1, activeIndex = 0) {
  const counter = document.querySelector("#broadcast-slide-counter");
  if (!counter) {
    return;
  }
  const count = Math.max(1, Number(total || 1));
  counter.replaceChildren(
    ...Array.from({ length: count }, (_, index) => {
      const dot = document.createElement("span");
      dot.className = `broadcast-slide-dot${index === activeIndex ? " is-active" : ""}`;
      dot.setAttribute("aria-hidden", "true");
      return dot;
    }),
  );
}

function setMediaBridgeButtonState(sectionId = "broadcast-schedule") {
  const normalized = normalizeMediaBridgeSection(sectionId);
  mediaBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mediaBridgeNav === normalized);
  });
}

function postMediaBridgeNavigation(sectionId = "broadcast-schedule") {
  if (!loadLazyIframe(mediaBridgeFrame)) {
    return;
  }
  if (!mediaBridgeFrame?.contentWindow) {
    return;
  }

  mediaBridgeFrame.contentWindow.postMessage(
    {
      type: WC26_MEDIA_BRIDGE_MESSAGE.navigate,
      section: normalizeMediaBridgeSection(sectionId),
      year: mediaBridgeNewsYear,
      broadcaster: mediaBridgeNewsBroadcaster,
    },
    "*",
  );
}

function setMediaBridgeSection(sectionId = "broadcast-schedule") {
  mediaBridgeSection = normalizeMediaBridgeSection(sectionId);
  mediaBridgeReady = false;
  mediaBridgeFrameShell?.classList.remove("is-ready");
  if (mediaBridgeLoading) {
    mediaBridgeLoading.textContent = "legacy media bridge loading...";
  }
  setMediaBridgeButtonState(mediaBridgeSection);
  syncMediaBridgeUi();
  syncMediaBridgeEmbeddedSkin();
  postMediaBridgeNavigation(mediaBridgeSection);
  if (mediaBridgeSection === "worldcup-news") {
    [120, 320, 760].forEach((delay) => {
      window.setTimeout(() => {
        applyMediaBridgeNewsYearSelection();
      }, delay);
    });
  }
  queueMediaBridgeReadyFallback(mediaBridgeSection);
  queueMediaBridgeScrollSync();
}

function scrollMediaBridgeBroadcastCardsIntoView() {
  const scrollToBroadcastCards = () => {
    try {
      const frameDocument = mediaBridgeFrame?.contentDocument || mediaBridgeFrame?.contentWindow?.document;
      const target =
        frameDocument?.querySelector(".broadcast-suit-programming-grid") ||
        frameDocument?.querySelector(".broadcast-suit-card-row") ||
        frameDocument?.querySelector("#newsProgrammingPanel");

      if (target) {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } catch (error) {
      console.warn("[main-broadcast] broadcast card scroll target unavailable", error);
    }
  };

  [180, 420, 800].forEach((delay) => {
    window.setTimeout(scrollToBroadcastCards, delay);
  });
}

function openBroadcastProgrammingFromMainPanel() {
  if (!setView("broadcast-news")) {
    return;
  }

  const group = document.querySelector('.nav-group[data-menu-group="broadcast-news"]');
  const subItem = group?.querySelector('.nav-subitem[data-target="broadcast-news"][data-section="broadcast"]');

  if (group) {
    openGroup(group);
  }

  clearNavActive();

  if (subItem) {
    subItem.classList.add("is-active");
  }

  const toggle = group ? group.querySelector(".nav-toggle") : null;
  if (toggle) {
    toggle.classList.add("is-active");
  }

  focusSection("broadcast-news", "broadcast");
  highlightTargets(WC26_MENU_GROUPS["broadcast-news"]?.targetSelectors || []);
  scrollMediaBridgeBroadcastCardsIntoView();
}

function applyMediaBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeMediaBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  mediaBridgeSummaryState = {
    ...normalizedSummary,
    broadcastItems: Array.isArray(normalizedSummary.broadcastItems)
      ? normalizedSummary.broadcastItems.map((item) => ({
          ...item,
          title: stripBridgeSummaryHtml(item?.title || ""),
          timeLabel: stripBridgeSummaryHtml(item?.timeLabel || ""),
          memo: stripBridgeSummaryHtml(item?.memo || ""),
        }))
      : [],
    latestNewsItems: Array.isArray(normalizedSummary.latestNewsItems)
      ? normalizedSummary.latestNewsItems.map((item) => ({
          ...item,
          broadcaster: stripBridgeSummaryHtml(item?.broadcaster || ""),
          title: stripBridgeSummaryHtml(item?.title || ""),
        }))
      : [],
  };

  if (mediaBridgeSection !== "worldcup-news") {
    mediaBridgeNewsYear = normalizeMediaNewsYear(mediaBridgeSummaryState.selectedYear || mediaBridgeNewsYear);
    mediaBridgeNewsBroadcaster = String(mediaBridgeSummaryState.selectedBroadcaster || mediaBridgeNewsBroadcaster || "KBS").trim() || "KBS";
  } else {
    mediaBridgeNewsYear = normalizeMediaNewsYear(mediaBridgeNewsYear);
    mediaBridgeNewsBroadcaster = String(mediaBridgeNewsBroadcaster || "KBS").trim() || "KBS";
  }

  const meta = document.querySelector("#media-bridge-meta");
  const broadcastPanelSummary = document.querySelector("#panel-broadcast .utility-copy");
  const newsPanelSummary = document.querySelector("#panel-news .utility-copy");
  const latestNewsTitles = mediaBridgeSummaryState.latestNewsItems
    .map((item) => stripBridgeSummaryHtml(item?.title || ""))
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const filteredBroadcastItems = getBroadcastSlideItems();
  const leadBroadcast = filteredBroadcastItems.find(
    (item) => stripBridgeSummaryHtml(item?.title || item?.memo || ""),
  );
  const leadBroadcastLabel = [
    stripBridgeSummaryHtml(leadBroadcast?.title || ""),
    stripBridgeSummaryHtml(leadBroadcast?.timeLabel || ""),
  ]
    .filter(Boolean)
    .join(" / ");
  const hasSummaryData = hasMediaBridgeSummaryData(mediaBridgeSummaryState);

  syncMediaBridgeUi();

  if (meta) {
    meta.textContent = "";
    meta.hidden = true;
  }

  if (broadcastPanelSummary) {
    broadcastPanelSummary.textContent = hasSummaryData
      ? `방송편성 오늘 ${filteredBroadcastItems.length || mediaBridgeSummaryState.broadcastCount}건${leadBroadcastLabel ? ` / ${leadBroadcastLabel}` : ""}`
      : mediaBridgePanelDefaults.broadcastPanelSummary;
  }

  if (newsPanelSummary) {
    newsPanelSummary.textContent = hasSummaryData
      ? `월드컵 뉴스 최신 ${mediaBridgeSummaryState.newsCount}건${latestNewsTitles ? ` / ${latestNewsTitles}` : ""}`
      : mediaBridgePanelDefaults.newsPanelSummary;
  }

  renderPanelFiveBroadcastStatus();
}

function normalizeOpsBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();

  if (["operation-memo", "ops-memo", "memo"].includes(normalized)) {
    return "operation-memo";
  }

  if (["official-links", "official-sites", "official", "links"].includes(normalized)) {
    return "official-links";
  }

  if (["operation-status", "status", "sync"].includes(normalized)) {
    return "operation-status";
  }

  return "operation-memo";
}

function captureOpsBridgePanelDefaults() {
  return {
    meta: document.querySelector("#ops-bridge-meta")?.textContent || "",
    officialSiteNote: document.querySelector("#panel-schedule .official-site-note")?.textContent || "",
    syncPanelSummary: document.querySelector("#panel-sync .utility-copy")?.textContent || "",
  };
}

function renderOfficialLinkTable() {
  const table = document.querySelector("#ops-official-links-panel .ops-static-table tbody");
  if (!table) {
    return;
  }

  table.replaceChildren(
    ...OFFICIAL_SITE_LINKS.map((link) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td data-label="구분">${link.code}</td>
        <td data-label="링크명">${link.label}</td>
        <td data-label="URL"><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.url}</a></td>
        <td data-label="비고">${link.note}</td>
      `;
      return row;
    }),
  );
}

function renderOperationStatusSummary() {
  const panel = document.getElementById("ops-operation-status-panel");
  if (!panel) {
    return;
  }
}

function loadOpsMemoEntries() {
  try {
    const raw = window.localStorage.getItem(WC26_OPS_MEMO_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
}

function saveOpsMemoEntries(entries = []) {
  try {
    window.localStorage.setItem(WC26_OPS_MEMO_STORAGE_KEY, JSON.stringify(entries));
  } catch (_error) {
    // localStorage persistence is best-effort only.
  }
}

function renderOpsMemoPad() {
  const list = document.getElementById("ops-memo-list");
  const input = document.getElementById("ops-memo-input");
  if (!list || !input) {
    return;
  }
  const entries = loadOpsMemoEntries();
  list.replaceChildren(
    ...entries.map((entry) => {
      const item = document.createElement("article");
      item.className = "ops-memo-item";
      const updatedLabel = String(entry?.updatedAt || entry?.createdAt || "").trim();
      item.innerHTML = `
        <div class="ops-memo-item-text">${String(entry?.text || "").trim()}</div>
        <div class="ops-memo-item-meta">${updatedLabel}</div>
        <div class="ops-memo-item-actions">
          <button type="button" class="schedule-bridge-button" data-ops-memo-edit="${String(entry?.id || "").trim()}">수정</button>
          <button type="button" class="schedule-bridge-button" data-ops-memo-delete="${String(entry?.id || "").trim()}">삭제</button>
        </div>
      `;
      return item;
    }),
  );
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "ops-memo-empty";
    empty.textContent = "운영 메모를 입력하면 이곳에 쌓입니다.";
    list.appendChild(empty);
  }
}

function bindOpsMemoPad() {
  const saveButton = document.getElementById("ops-memo-save");
  const resetButton = document.getElementById("ops-memo-reset");
  const input = document.getElementById("ops-memo-input");
  const list = document.getElementById("ops-memo-list");
  if (!saveButton || !resetButton || !input || !list || saveButton.dataset.bound === "true") {
    return;
  }

  saveButton.dataset.bound = "true";

  saveButton.addEventListener("click", () => {
    const text = String(input.value || "").trim();
    if (!text) {
      input.focus();
      return;
    }
    const entries = loadOpsMemoEntries();
    const editingId = String(input.dataset.editingId || "").trim();
    const nowLabel = new Date().toLocaleString("ko-KR", { hour12: false });
    if (editingId) {
      const nextEntries = entries.map((entry) =>
        String(entry?.id || "").trim() === editingId
          ? { ...entry, text, updatedAt: nowLabel }
          : entry,
      );
      saveOpsMemoEntries(nextEntries);
    } else {
      saveOpsMemoEntries([
        {
          id: `ops-memo-${Date.now()}`,
          text,
          createdAt: nowLabel,
          updatedAt: nowLabel,
        },
        ...entries,
      ]);
    }
    input.value = "";
    delete input.dataset.editingId;
    renderOpsMemoPad();
  });

  resetButton.addEventListener("click", () => {
    input.value = "";
    delete input.dataset.editingId;
    input.focus();
  });

  list.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    const editId = target.dataset.opsMemoEdit;
    const deleteId = target.dataset.opsMemoDelete;
    const entries = loadOpsMemoEntries();
    if (editId) {
      const entry = entries.find((item) => String(item?.id || "").trim() === String(editId).trim());
      if (!entry) {
        return;
      }
      input.value = String(entry.text || "");
      input.dataset.editingId = String(entry.id || "");
      input.focus();
      return;
    }
    if (deleteId) {
      const nextEntries = entries.filter((item) => String(item?.id || "").trim() !== String(deleteId).trim());
      saveOpsMemoEntries(nextEntries);
      renderOpsMemoPad();
    }
  });
}

function normalizeOpsBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  return {
    selectedSection: normalizeOpsBridgeSection(payload.selectedSection || ""),
    memoCount: Number(payload.memoCount || 0),
    officialLinkCount: Number(payload.officialLinkCount || 0),
    statusCount: Number(payload.statusCount || 0),
    memoItems: Array.isArray(payload.memoItems) ? payload.memoItems : [],
    officialLinks: Array.isArray(payload.officialLinks) ? payload.officialLinks : [],
    statusItems: Array.isArray(payload.statusItems) ? payload.statusItems : [],
    latestItems: Array.isArray(payload.latestItems) ? payload.latestItems : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildOpsBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedSection: normalizeOpsBridgeSection(summary.selectedSection || ""),
    memoCount: Number(summary.memoCount || 0),
    officialLinkCount: Number(summary.officialLinkCount || 0),
    statusCount: Number(summary.statusCount || 0),
    memoItems: Array.isArray(summary.memoItems) ? summary.memoItems : [],
    officialLinks: Array.isArray(summary.officialLinks) ? summary.officialLinks : [],
    statusItems: Array.isArray(summary.statusItems) ? summary.statusItems : [],
    latestItems: Array.isArray(summary.latestItems) ? summary.latestItems : [],
  });
}

function hasOpsBridgeSummaryData(summary = {}) {
  return (
    Number(summary.memoCount || 0) > 0 ||
    Number(summary.officialLinkCount || 0) > 0 ||
    Number(summary.statusCount || 0) > 0 ||
    (Array.isArray(summary.latestItems) && summary.latestItems.length > 0)
  );
}

function setOpsBridgeButtonState(sectionId = "operation-memo") {
  const normalized = normalizeOpsBridgeSection(sectionId);
  opsBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.opsBridgeNav === normalized);
  });
}

function postOpsBridgeNavigation(sectionId = "operation-memo") {
  if (!loadLazyIframe(opsBridgeFrame)) {
    return;
  }
  if (!opsBridgeFrame?.contentWindow) {
    return;
  }

  opsBridgeFrame.contentWindow.postMessage(
    {
      type: WC26_OPS_BRIDGE_MESSAGE.navigate,
      section: normalizeOpsBridgeSection(sectionId),
    },
    "*",
  );
}

function setOpsBridgeSection(sectionId = "operation-memo") {
  opsBridgeSection = normalizeOpsBridgeSection(sectionId);
  setOpsBridgeButtonState(opsBridgeSection);
  const opsFrameShell = document.getElementById("ops-bridge-frame-shell");
  const operationMemoPanel = document.getElementById("ops-operation-memo-panel");
  const officialLinksPanel = document.getElementById("ops-official-links-panel");
  const operationStatusPanel = document.getElementById("ops-operation-status-panel");
  const isStaticSection =
    opsBridgeSection === "operation-memo" || opsBridgeSection === "official-links" || opsBridgeSection === "operation-status";

  if (opsFrameShell) {
    opsFrameShell.hidden = isStaticSection;
  }

  if (operationMemoPanel) {
    operationMemoPanel.hidden = opsBridgeSection !== "operation-memo";
  }

  if (officialLinksPanel) {
    officialLinksPanel.hidden = opsBridgeSection !== "official-links";
  }

  if (operationStatusPanel) {
    operationStatusPanel.hidden = opsBridgeSection !== "operation-status";
  }

  if (opsBridgeSection === "operation-memo") {
    bindOpsMemoPad();
    renderOpsMemoPad();
  }

  if (opsBridgeSection === "official-links") {
    renderOfficialLinkTable();
  }

  if (opsBridgeSection === "operation-status") {
    renderOperationStatusSummary();
  }

  if (!isStaticSection) {
    postOpsBridgeNavigation(opsBridgeSection);
  }

  if (opsBridgeSummaryState) {
    applyOpsBridgeSummary({
      ...opsBridgeSummaryState,
      selectedSection: opsBridgeSection,
    });
  }
}

function applyOpsBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeOpsBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  opsBridgeSummaryState = {
    ...normalizedSummary,
    latestItems: Array.isArray(normalizedSummary.latestItems)
      ? normalizedSummary.latestItems.map((item) => stripBridgeSummaryHtml(item || ""))
      : [],
    officialLinks: Array.isArray(normalizedSummary.officialLinks)
      ? normalizedSummary.officialLinks.map((item) => ({
          ...item,
          broadcaster: stripBridgeSummaryHtml(item?.broadcaster || ""),
          title: stripBridgeSummaryHtml(item?.title || ""),
          link: String(item?.link || "").trim(),
        }))
      : [],
    statusItems: Array.isArray(normalizedSummary.statusItems)
      ? normalizedSummary.statusItems.map((item) => stripBridgeSummaryHtml(item || ""))
      : [],
  };

  const meta = document.querySelector("#ops-bridge-meta");
  const officialSiteNote = document.querySelector("#panel-schedule .official-site-note");
  const syncPanelSummary = document.querySelector("#panel-sync .utility-copy");
  const latestLine = opsBridgeSummaryState.latestItems
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const statusLine = opsBridgeSummaryState.statusItems
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const hasSummaryData = hasOpsBridgeSummaryData(opsBridgeSummaryState);

  if (meta) {
    meta.textContent = opsBridgePanelDefaults.meta || "개발 과정 / 현재 작업 버전";
  }

  if (officialSiteNote) {
    officialSiteNote.textContent = "";
    officialSiteNote.hidden = true;
  }

  if (syncPanelSummary) {
    syncPanelSummary.textContent = opsBridgeSummaryState.statusCount > 0
      ? `운영상태 ${opsBridgeSummaryState.statusCount}건${statusLine ? ` / ${statusLine}` : ""}`
      : opsBridgePanelDefaults.syncPanelSummary;
  }

  renderOfficialSiteLinks(OFFICIAL_SITE_LINKS);
  renderOfficialLinkTable();
  renderOperationStatusSummary();
}

function normalizeMatchBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();

  if (normalized === "bracket") {
    return "bracket";
  }

  return "match-schedule";
}

function normalizeMatchShellMode(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();
  return ["group-stage", "third-place-ranking", "bracket", "squad"].includes(normalized)
    ? normalized
    : "group-stage";
}

function normalizeMatchGroupKey(groupKey = "") {
  const normalized = String(groupKey || "").trim().toUpperCase();
  return /^[A-L]$/.test(normalized) ? normalized : "A";
}

function normalizeKnockoutStage(stage = "") {
  const normalized = String(stage || "").trim();
  return WC26_MATCH_KNOCKOUT_STAGE_KEYS.includes(normalized)
    ? normalized
    : "round32";
}

function hasValidMatchScheduleSelection() {
  if (matchShellMode === "group-stage") {
    return WC26_MATCH_GROUP_KEYS.includes(normalizeMatchGroupKey(matchBridgeGroupKey));
  }
  if (matchShellMode === "bracket") {
    return WC26_MATCH_KNOCKOUT_STAGE_KEYS.includes(normalizeKnockoutStage(matchBridgeKnockoutStage));
  }
  return ["third-place-ranking", "squad"].includes(normalizeMatchShellMode(matchShellMode));
}

function restoreCurrentOrDefaultMatchScheduleSelection() {
  if (!hasValidMatchScheduleSelection()) {
    setMatchShellMode("group-stage", { groupKey: "A" });
    return;
  }

  if (matchShellMode === "group-stage") {
    setMatchShellMode("group-stage", { groupKey: matchBridgeGroupKey });
    return;
  }

  if (matchShellMode === "bracket") {
    setMatchShellMode("bracket", { knockoutStage: matchBridgeKnockoutStage });
    return;
  }

  if (matchShellMode === "third-place-ranking") {
    setMatchShellMode("third-place-ranking");
    return;
  }

  setMatchShellMode("squad");
}

function isMobileMatchSwipeViewport() {
  return window.innerWidth <= 767;
}

function isMatchScheduleSwipeInteractiveTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  return Boolean(
    target.closest(
      [
        "a",
        "button",
        "input",
        "select",
        "textarea",
        "label",
        "[role='button']",
        "[contenteditable='']",
        "[contenteditable='true']",
        "#match-group-stage-toolbar",
        "#match-knockout-stage-toolbar",
        "#match-squad-toolbar",
        "#match-group-a-form-matches",
        ".group-a-feature-dots",
      ].join(","),
    ),
  );
}

function canSwipeMatchSchedule(target = null) {
  if (!matchScheduleSwipeSurface || !isMobileMatchSwipeViewport()) {
    return false;
  }
  if (target && isMatchScheduleSwipeInteractiveTarget(target)) {
    return false;
  }
  if (matchShellMode === "group-stage") {
    return !matchGroupAFormShell?.hidden;
  }
  if (matchShellMode === "bracket") {
    return !document.getElementById("match-tournament-shell")?.hidden &&
      document.getElementById("match-tournament-root")?.dataset.view !== "board";
  }
  return false;
}

function getMatchScheduleSwipeDirection(deltaX = 0, deltaY = 0) {
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  if (absX <= WC26_MATCH_SWIPE_THRESHOLD_PX || absX <= absY * 1.2) {
    return 0;
  }
  return deltaX > 0 ? 1 : -1;
}

function commitMatchScheduleSwipe(deltaX = 0, deltaY = 0) {
  if (!canSwipeMatchSchedule()) {
    return false;
  }
  if (Date.now() - matchScheduleLastSwipeAt < WC26_MATCH_SWIPE_LOCK_MS) {
    return false;
  }

  const direction = getMatchScheduleSwipeDirection(deltaX, deltaY);
  if (!direction) {
    return false;
  }

  if (matchShellMode === "group-stage") {
    const currentIndex = WC26_MATCH_GROUP_KEYS.indexOf(normalizeMatchGroupKey(matchBridgeGroupKey));
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= WC26_MATCH_GROUP_KEYS.length) {
      return false;
    }
    matchScheduleLastSwipeAt = Date.now();
    setMatchShellMode("group-stage", { groupKey: WC26_MATCH_GROUP_KEYS[nextIndex] });
    return true;
  }

  if (matchShellMode === "bracket") {
    const currentIndex = WC26_MATCH_KNOCKOUT_STAGE_KEYS.indexOf(normalizeKnockoutStage(matchBridgeKnockoutStage));
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= WC26_MATCH_KNOCKOUT_STAGE_KEYS.length) {
      return false;
    }
    matchScheduleLastSwipeAt = Date.now();
    setMatchShellMode("bracket", { knockoutStage: WC26_MATCH_KNOCKOUT_STAGE_KEYS[nextIndex] });
    return true;
  }

  return false;
}

function bindMatchScheduleSwipeGestures() {
  if (!matchScheduleSwipeSurface || matchScheduleSwipeBound) {
    return;
  }
  matchScheduleSwipeBound = true;

  if ("PointerEvent" in window) {
    matchScheduleSwipeSurface.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary || !canSwipeMatchSchedule(event.target)) {
        return;
      }
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      matchScheduleSwipePointerGesture = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
      };
    });

    window.addEventListener("pointermove", (event) => {
      if (!matchScheduleSwipePointerGesture || matchScheduleSwipePointerGesture.pointerId !== event.pointerId) {
        return;
      }
      matchScheduleSwipePointerGesture.lastX = event.clientX;
      matchScheduleSwipePointerGesture.lastY = event.clientY;
    });

    const finishPointerGesture = (event) => {
      if (!matchScheduleSwipePointerGesture || matchScheduleSwipePointerGesture.pointerId !== event.pointerId) {
        return;
      }
      const deltaX = (event.clientX ?? matchScheduleSwipePointerGesture.lastX) - matchScheduleSwipePointerGesture.startX;
      const deltaY = (event.clientY ?? matchScheduleSwipePointerGesture.lastY) - matchScheduleSwipePointerGesture.startY;
      matchScheduleSwipePointerGesture = null;
      commitMatchScheduleSwipe(deltaX, deltaY);
    };

    window.addEventListener("pointerup", finishPointerGesture);
    window.addEventListener("pointercancel", finishPointerGesture);
  }

  matchScheduleSwipeSurface.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1 || !canSwipeMatchSchedule(event.target)) {
      matchScheduleSwipeTouchGesture = null;
      return;
    }
    const touch = event.touches[0];
    matchScheduleSwipeTouchGesture = {
      identifier: touch.identifier,
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
    };
  }, { passive: true });

  matchScheduleSwipeSurface.addEventListener("touchmove", (event) => {
    if (!matchScheduleSwipeTouchGesture) {
      return;
    }
    const touch = Array.from(event.touches).find((item) => item.identifier === matchScheduleSwipeTouchGesture.identifier);
    if (!touch) {
      return;
    }
    matchScheduleSwipeTouchGesture.lastX = touch.clientX;
    matchScheduleSwipeTouchGesture.lastY = touch.clientY;
  }, { passive: true });

  const finishTouchGesture = (event) => {
    if (!matchScheduleSwipeTouchGesture) {
      return;
    }
    const touch = Array.from(event.changedTouches).find((item) => item.identifier === matchScheduleSwipeTouchGesture.identifier);
    const deltaX = (touch?.clientX ?? matchScheduleSwipeTouchGesture.lastX) - matchScheduleSwipeTouchGesture.startX;
    const deltaY = (touch?.clientY ?? matchScheduleSwipeTouchGesture.lastY) - matchScheduleSwipeTouchGesture.startY;
    matchScheduleSwipeTouchGesture = null;
    commitMatchScheduleSwipe(deltaX, deltaY);
  };

  matchScheduleSwipeSurface.addEventListener("touchend", finishTouchGesture, { passive: true });
  matchScheduleSwipeSurface.addEventListener("touchcancel", finishTouchGesture, { passive: true });
}

function normalizeSquadBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();
  return ["squad", "group-a-squad"].includes(normalized) ? normalized : "squad";
}

function normalizeMapBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();

  if (["venue", "stadium", "stadiums"].includes(normalized)) {
    return "stadiums";
  }

  return "map";
}

function captureMatchMapBridgePanelDefaults() {
  return {
    matchMeta: document.querySelector("#match-bridge-meta")?.textContent || "",
    mapMeta: document.querySelector("#map-bridge-meta")?.textContent || "",
    bracketPanelSummary: document.querySelector("#panel-bracket .utility-copy")?.textContent || "",
    mapPanelSummary: document.querySelector("#panel-map .utility-copy")?.textContent || "",
    stadiumName: document.querySelector("#main-stadium-name")?.textContent || "",
    stadiumMeta: document.querySelector("#main-stadium-meta")?.textContent || "",
  };
}

function captureSquadBridgePanelDefaults() {
  return {
    matchMeta: document.querySelector("#match-bridge-meta")?.textContent || "",
    squadPanelSummary: document.querySelector("#panel-squad .utility-copy")?.textContent || "",
  };
}

function normalizeMatchMapBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const currentStadium = payload.currentStadium && typeof payload.currentStadium === "object" ? payload.currentStadium : {};

  return {
    selectedSection: String(payload.selectedSection || "").trim(),
    matchCount: Number(payload.matchCount || 0),
    todayMatchCount: Number(payload.todayMatchCount || 0),
    stadiumCount: Number(payload.stadiumCount || 0),
    mapPlaceCount: Number(payload.mapPlaceCount || 0),
    regionPlaceCount: Number(payload.regionPlaceCount || 0),
    lodgingPlaceCount: Number(payload.lodgingPlaceCount || 0),
    latestItems: Array.isArray(payload.latestItems) ? payload.latestItems : [],
    currentStadium: {
      key: String(currentStadium.key || "").trim(),
      title: String(currentStadium.title || "").trim(),
      city: String(currentStadium.city || "").trim(),
      imagePath: String(currentStadium.imagePath || "").trim(),
      imageAlt: String(currentStadium.imageAlt || "").trim(),
    },
    upcomingMatches: Array.isArray(payload.upcomingMatches) ? payload.upcomingMatches : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildMatchMapBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedSection: String(summary.selectedSection || "").trim(),
    matchCount: Number(summary.matchCount || 0),
    todayMatchCount: Number(summary.todayMatchCount || 0),
    stadiumCount: Number(summary.stadiumCount || 0),
    mapPlaceCount: Number(summary.mapPlaceCount || 0),
    regionPlaceCount: Number(summary.regionPlaceCount || 0),
    lodgingPlaceCount: Number(summary.lodgingPlaceCount || 0),
    latestItems: Array.isArray(summary.latestItems) ? summary.latestItems : [],
    currentStadium: summary.currentStadium || {},
    upcomingMatches: Array.isArray(summary.upcomingMatches) ? summary.upcomingMatches.slice(0, 12) : [],
  });
}

function normalizeSquadBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  return {
    selectedSection: normalizeSquadBridgeSection(payload.selectedSection || "squad"),
    groupCount: Number(payload.groupCount || 0),
    teamCount: Number(payload.teamCount || 0),
    playerCount: Number(payload.playerCount || 0),
    latestItems: Array.isArray(payload.latestItems) ? payload.latestItems : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildSquadBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedSection: normalizeSquadBridgeSection(summary.selectedSection || "squad"),
    groupCount: Number(summary.groupCount || 0),
    teamCount: Number(summary.teamCount || 0),
    playerCount: Number(summary.playerCount || 0),
    latestItems: Array.isArray(summary.latestItems) ? summary.latestItems : [],
  });
}

function setMatchBridgeButtonState(sectionId = "match-schedule") {
  const raw = String(sectionId || "").trim().toLowerCase();
  const normalized = raw === "squad" || raw === "group-a-squad" ? "squad" : normalizeMatchBridgeSection(raw);
  matchBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.matchBridgeNav === normalized);
  });
}

function setMatchShellButtonState(mode = "group-stage") {
  const normalized = normalizeMatchShellMode(mode);
  matchShellModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.matchShellMode === normalized);
  });
}

function setMatchGroupButtonState(groupKey = "A") {
  const normalized = normalizeMatchGroupKey(groupKey);
  matchGroupButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.matchGroupKey === normalized);
  });
}

function setMatchKnockoutButtonState(stage = "round32") {
  const normalized = normalizeKnockoutStage(stage);
  matchKnockoutButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.matchKnockoutStage === normalized);
  });
}

function setMatchSquadButtonState(squadKey = "korea") {
  const normalized = String(squadKey || "korea").trim() || "korea";
  matchSquadButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.matchSquadKey === normalized);
  });
}

function renderKoreaRosterPhoto(player = {}) {
  const safeName = escapeTimelineHtml(player.name || "선수");
  const rawImage = String(player.image || "").trim();
  const safeImage = rawImage ? escapeTimelineHtml(`${rawImage}?v=${Date.now()}`) : "";
  return `<div class="match-squad-photo">
    <img class="match-squad-player-photo" src="${safeImage}" alt="${safeName} 사진" loading="eager" onload="this.closest('.match-squad-photo').classList.add('has-photo')" onerror="this.closest('.match-squad-photo').classList.add('no-photo');this.hidden=true;">
    <span class="match-squad-no-photo">NO<br>PHOTO</span>
  </div>`;
}

function setKoreaRosterPhotoState(frame, hasPhoto = false) {
  const image = frame?.querySelector?.(".match-squad-player-photo");
  if (!frame || !image) {
    return;
  }
  frame.classList.toggle("has-photo", Boolean(hasPhoto));
  frame.classList.toggle("no-photo", !hasPhoto);
  image.hidden = !hasPhoto;
}

function hydrateKoreaRosterPhotos(root = matchSquadEmptyShell) {
  if (!root) {
    return;
  }
  root.querySelectorAll(".match-squad-photo").forEach((frame) => {
    const image = frame.querySelector(".match-squad-player-photo");
    const source = String(image?.getAttribute("src") || "").trim();
    if (!image || !source) {
      setKoreaRosterPhotoState(frame, false);
      return;
    }
    const imageUrl = new URL(source, window.location.href).href;
    fetch(imageUrl, { method: "HEAD", cache: "no-store" })
      .then((response) => {
        const contentType = String(response.headers.get("content-type") || "").toLowerCase();
        setKoreaRosterPhotoState(frame, response.ok && contentType.startsWith("image/"));
      })
      .catch(() => {
        setKoreaRosterPhotoState(frame, Boolean(image.complete && image.naturalWidth > 0));
      });
  });
}

function renderKoreaRoster() {
  const rows = WC26_KOREA_ROSTER.map((player) => {
    const safeNumber = escapeTimelineHtml(player.number || "-");
    const safePosition = escapeTimelineHtml(player.position || "-");
    const safeName = escapeTimelineHtml(player.name || "-");
    const safeClub = escapeTimelineHtml(player.club || "-");
    const safeNote = escapeTimelineHtml(player.note || "-");
    return `<tr>
      <td data-label="사진">${renderKoreaRosterPhoto(player)}</td>
      <td data-label="번호">${safeNumber}</td>
      <td data-label="포지션"><span class="match-squad-position">${safePosition}</span></td>
      <td data-label="선수명"><strong class="match-squad-player-name">${safeName}</strong></td>
      <td data-label="소속">${safeClub || "-"}</td>
      <td data-label="비고">${safeNote || "-"}</td>
    </tr>`;
  }).join("");

  return `<div class="match-squad-roster" data-match-squad-roster="korea">
    <div class="match-squad-roster-table-wrap">
      <table class="match-squad-roster-table">
        <thead>
          <tr>
            <th>사진</th>
            <th>번호</th>
            <th>포지션</th>
            <th>선수명</th>
            <th>소속</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}

function renderMatchSquadShell() {
  if (!matchSquadEmptyShell) {
    return;
  }
  if (matchShellMode !== "squad" || matchBridgeSquadKey !== "korea") {
    matchSquadEmptyShell.replaceChildren();
    return;
  }
  matchSquadEmptyShell.innerHTML = renderKoreaRoster();
  hydrateKoreaRosterPhotos(matchSquadEmptyShell);
}

function setMapCardTabState(sectionId = "map") {
  const normalized = normalizeMapBridgeSection(sectionId);
  mainMapCardTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mainMapCardTab === normalized);
  });
}

function normalizeMapStadiumCountryKey(countryKey = "") {
  const normalized = String(countryKey || "").trim().toLowerCase();
  return WC26_MAP_STADIUM_COUNTRIES.some((item) => item.key === normalized) ? normalized : "canada";
}

function normalizeMapStadiumCountryValue(value = "") {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) {
    return "";
  }
  if (["canada", "can", "ca", "캐나다"].includes(normalized)) {
    return "canada";
  }
  if (["united states", "usa", "us", "america", "미국"].includes(normalized)) {
    return "usa";
  }
  if (["mexico", "mex", "멕시코", "메시코"].includes(normalized)) {
    return "mexico";
  }
  return "";
}

function getMapStadiumCountryLabel(countryKey = "") {
  const normalized = normalizeMapStadiumCountryValue(countryKey);
  return WC26_MAP_STADIUM_COUNTRIES.find((item) => item.key === normalized)?.label || "";
}

function normalizeMapStadiumText(value = "") {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMapStadiumCityValue(city = "") {
  const normalized = normalizeMapStadiumText(city).toLowerCase();
  const cityAliases = new Map([
    ["과달라하라", "guadalajara"],
    ["guadalajara", "guadalajara"],
    ["몬테레이", "monterrey"],
    ["monterrey", "monterrey"],
    ["멕시코시티", "mexico city"],
    ["mexico city", "mexico city"],
    ["로스앤젤레스", "los angeles"],
    ["los angeles", "los angeles"],
    ["시애틀", "seattle"],
    ["seattle", "seattle"],
    ["보스턴", "boston"],
    ["boston", "boston"],
    ["밴쿠버", "vancouver"],
    ["vancouver", "vancouver"],
    ["토론토", "toronto"],
    ["toronto", "toronto"],
    ["뉴욕 / 뉴저지", "new york / new jersey"],
    ["new york / new jersey", "new york / new jersey"],
    ["필라델피아", "philadelphia"],
    ["philadelphia", "philadelphia"],
    ["마이애미", "miami"],
    ["miami", "miami"],
    ["애틀랜타", "atlanta"],
    ["atlanta", "atlanta"],
    ["댈러스 / 알링턴", "dallas / arlington"],
    ["dallas / arlington", "dallas / arlington"],
    ["휴스턴", "houston"],
    ["houston", "houston"],
    ["캔자스시티", "kansas city"],
    ["kansas city", "kansas city"],
    ["샌프란시스코 베이 에어리어", "san francisco bay area"],
    ["san francisco bay area", "san francisco bay area"],
  ]);
  return cityAliases.get(normalized) || normalized;
}

function buildMapStadiumCityKey(city = "", countryKey = "") {
  return `${normalizeMapStadiumCityValue(city)}::${normalizeMapStadiumCountryValue(countryKey)}`;
}

function getLegacyStadiumCatalogItems() {
  if (!mapBridgeFrame?.contentWindow || typeof mapBridgeFrame.contentWindow.getWC26LegacyStadiumTabs !== "function") {
    return [];
  }
  try {
    const rawItems = mapBridgeFrame.contentWindow.getWC26LegacyStadiumTabs();
    return Array.isArray(rawItems) ? rawItems : [];
  } catch (_error) {
    return [];
  }
}

function setMapStadiumButtonState(countryKey = "canada") {
  const normalized = normalizeMapStadiumCountryKey(countryKey);
  Array.from(document.querySelectorAll("[data-map-stadium-key]")).forEach((button) => {
    button.classList.toggle("is-active", String(button.dataset.mapStadiumKey || "").trim() === normalized);
  });
}

function getStoredStadiumList() {
  const normalizedItems = [];
  const seenKeys = new Set();
  const legacyItems = getLegacyStadiumCatalogItems();
  const legacyByCityCountry = new Map();

  legacyItems.forEach((item, index) => {
    const countryKey = normalizeMapStadiumCountryValue(item.country || item.countryKey || "");
    const city = normalizeMapStadiumText(item.city || "");
    const normalizedItem = {
      key: normalizeMapStadiumText(item.key || `legacy-stadium-${index + 1}`),
      title: normalizeWC26StadiumDisplayName(normalizeMapStadiumText(item.title || city || `경기장 ${index + 1}`)),
      city,
      countryKey,
      countryLabel: normalizeMapStadiumText(item.countryLabel || getMapStadiumCountryLabel(countryKey)),
      imagePath: normalizeMapStadiumText(item.imagePath || ""),
      imageAlt: normalizeMapStadiumText(item.imageAlt || `${item.title || city || "경기장"} 사진`),
      note: normalizeMapStadiumText(item.note || item.subtitle || item.imageCaption || ""),
      sortTitle: normalizeMapStadiumText(item.englishTitle || item.title || ""),
      source: "legacy_map_stadiums",
    };
    const cityCountryKey = buildMapStadiumCityKey(city, countryKey);
    if (cityCountryKey) {
      legacyByCityCountry.set(cityCountryKey, normalizedItem);
    }
  });

  const pushItem = (rawItem = {}) => {
    const title = normalizeWC26StadiumDisplayName(normalizeMapStadiumText(rawItem.title || ""));
    const city = normalizeMapStadiumText(rawItem.city || "");
    const countryKey = normalizeMapStadiumCountryValue(rawItem.countryKey || rawItem.country || "");
    const key = normalizeMapStadiumText(rawItem.key || `${title}::${city}::${countryKey}`);
    const dedupeKey = buildMapStadiumCityKey(city, countryKey) || key.toLowerCase();
    if (!key || seenKeys.has(dedupeKey)) {
      return;
    }
    seenKeys.add(dedupeKey);
    normalizedItems.push({
      key,
      title,
      city,
      countryKey,
      countryLabel: normalizeMapStadiumText(rawItem.countryLabel || getMapStadiumCountryLabel(countryKey)),
      imagePath: normalizeMapStadiumText(rawItem.imagePath || ""),
      imageAlt: normalizeMapStadiumText(rawItem.imageAlt || `${title || "경기장"} 사진`),
      note: normalizeMapStadiumText(rawItem.note || ""),
      sortTitle: normalizeMapStadiumText(rawItem.sortTitle || title),
      source: normalizeMapStadiumText(rawItem.source || "project_stadium_catalog"),
    });
  };

  Object.entries(WC26_STADIUM_IMAGES).forEach(([title, imagePath], index) => {
    const detail = WC26_STADIUM_DETAILS[title] || {};
    const countryKey = normalizeMapStadiumCountryValue(detail.countryKey || detail.country || "");
    const city = normalizeMapStadiumText(detail.city || "");
    const legacyMatch = legacyByCityCountry.get(buildMapStadiumCityKey(city, countryKey)) || null;
    pushItem({
      key: normalizeMapStadiumText(detail.key || title || `stadium-${index + 1}`),
      title: normalizeMapStadiumText(title),
      sortTitle: normalizeMapStadiumText(title),
      city,
      countryKey,
      countryLabel: normalizeMapStadiumText(detail.countryLabel || getMapStadiumCountryLabel(countryKey)),
      imagePath: resolveWC26StadiumImagePath(title, legacyMatch?.imagePath || imagePath),
      imageAlt: normalizeMapStadiumText(legacyMatch?.imageAlt || `${title} 사진`),
      note: normalizeMapStadiumText(legacyMatch?.note || detail.note || ""),
      source: legacyMatch ? "project_catalog+legacy_map_stadiums" : "project_stadium_catalog",
    });
  });

  legacyItems.forEach((item, index) => {
    const countryKey = normalizeMapStadiumCountryValue(item.country || item.countryKey || "");
    pushItem({
      key: normalizeMapStadiumText(item.key || `legacy-stadium-${index + 1}`),
      title: normalizeMapStadiumText(item.title || item.city || `경기장 ${index + 1}`),
      sortTitle: normalizeMapStadiumText(item.englishTitle || item.title || item.city || ""),
      city: normalizeMapStadiumText(item.city || ""),
      countryKey,
      countryLabel: normalizeMapStadiumText(item.countryLabel || getMapStadiumCountryLabel(countryKey)),
      imagePath: normalizeMapStadiumText(item.imagePath || ""),
      imageAlt: normalizeMapStadiumText(item.imageAlt || `${item.title || item.city || "경기장"} 사진`),
      note: normalizeMapStadiumText(item.note || item.subtitle || item.imageCaption || ""),
      source: "legacy_map_stadiums",
    });
  });

  mapBridgeStadiumDataResolved = true;
  mapBridgeStadiumSourceName = legacyItems.length ? "project_stadium_catalog+legacy_map_stadiums" : "project_stadium_catalog";

  return normalizedItems.sort((left, right) => {
    const titleCompare = String(left.sortTitle || left.title || "").localeCompare(String(right.sortTitle || right.title || ""), "en");
    if (titleCompare !== 0) {
      return titleCompare;
    }
    return String(left.city || "").localeCompare(String(right.city || ""), "en");
  });
}

function createMapStadiumCard(item = {}) {
  const card = document.createElement("article");
  card.className = "map-stadium-card";
  card.dataset.country = item.countryKey || "";

  const media = document.createElement("div");
  media.className = "map-stadium-card-media";
  if (item.imagePath) {
    const image = document.createElement("img");
    image.className = "map-stadium-card-photo";
    image.src = item.imagePath;
    image.alt = item.imageAlt || item.title || "경기장 사진";
    image.loading = "lazy";
    image.decoding = "async";
    image.draggable = false;
    media.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "map-stadium-card-placeholder";
    placeholder.textContent = "경기장 사진 없음";
    media.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "map-stadium-card-body";

  const title = document.createElement("h4");
  title.className = "map-stadium-card-title";
  title.textContent = item.title || "경기장 정보 없음";

  const meta = document.createElement("p");
  meta.className = "map-stadium-card-meta";
  meta.textContent = [item.city, item.countryLabel].filter(Boolean).join(" / ") || "도시 / 국가 정보 없음";

  body.append(title, meta);

  if (item.note) {
    const note = document.createElement("p");
    note.className = "map-stadium-card-note";
    note.textContent = item.note;
    body.appendChild(note);
  }

  card.append(media, body);
  return card;
}

function renderMapStadiumCards(countryKey = "canada") {
  if (!mapStadiumCatalogGrid || !mapStadiumCatalogEmpty) {
    return;
  }
  const normalizedCountry = normalizeMapStadiumCountryKey(countryKey);
  const allItems = getStoredStadiumList();
  const items = allItems.filter((item) => item.countryKey === normalizedCountry);
  const countryCounts = {
    canada: allItems.filter((item) => item.countryKey === "canada").length,
    usa: allItems.filter((item) => item.countryKey === "usa").length,
    mexico: allItems.filter((item) => item.countryKey === "mexico").length,
  };
  if (!mapBridgeStadiumLogPrinted && mapBridgeStadiumDataResolved) {
    mapBridgeStadiumLogPrinted = true;
    console.log(
      `[stadium-render] source=${mapBridgeStadiumSourceName || "unknown"} total=${allItems.length} canada=${countryCounts.canada} usa=${countryCounts.usa} mexico=${countryCounts.mexico}`,
    );
  }
  mapStadiumCatalogGrid.replaceChildren(...items.map((item) => createMapStadiumCard(item)));
  mapStadiumCatalogEmpty.hidden = true;
}

function renderMapStadiumTabs() {
  if (!mapStadiumToolbar) {
    return;
  }
  mapStadiumToolbar.replaceChildren(
    ...WC26_MAP_STADIUM_COUNTRIES.map((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "schedule-bridge-button";
      button.dataset.mapStadiumKey = item.key;
      button.textContent = item.label;
      button.addEventListener("click", () => {
        mapBridgeCountryKey = button.dataset.mapStadiumKey || "canada";
        setMapStadiumButtonState(mapBridgeCountryKey);
        renderMapStadiumCards(mapBridgeCountryKey);
      });
      return button;
    }),
  );
  setMapStadiumButtonState(mapBridgeCountryKey);
}

function syncMainMapStadiumTabs(stadiumItems = []) {
  renderMainStadiumCarousel(collectMainStadiumCarouselItems({ summary: matchMapBridgeSummaryState, directItems: stadiumItems }));
}

function syncMapBridgeShellVisibility() {
  const isStadiums = mapBridgeSection === "stadiums";
  if (mapStadiumToolbar) {
    mapStadiumToolbar.hidden = !isStadiums;
    mapStadiumToolbar.setAttribute("aria-hidden", isStadiums ? "false" : "true");
  }
  if (mapStadiumCatalogShell) {
    mapStadiumCatalogShell.hidden = !isStadiums;
    mapStadiumCatalogShell.setAttribute("aria-hidden", isStadiums ? "false" : "true");
  }
  if (mapBridgeFrameShell) {
    mapBridgeFrameShell.hidden = isStadiums;
    mapBridgeFrameShell.setAttribute("aria-hidden", isStadiums ? "true" : "false");
  }
}

function syncMapBridgeEmbeddedSkin() {
  const legacyDocument = mapBridgeFrame?.contentDocument || mapBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return;
  }
  legacyDocument.body.classList.add(WC26_MAP_BRIDGE_EMBEDDED_CLASS);
  legacyDocument.body.setAttribute("data-map-skin", "newsuit-20260517-01");
  ensureEmbeddedBridgeStyle(legacyDocument, WC26_MAP_BRIDGE_MOBILE_STYLE_ID, WC26_MAP_BRIDGE_MOBILE_CSS);
  if (!mapBridgeSkinLogPrinted) {
    mapBridgeSkinLogPrinted = true;
    console.log("[map-newsuit-skin] legacy map css applied 20260517-01");
  }
}

function isMapBridgeTargetReady(sectionId = mapBridgeSection) {
  const legacyDocument = mapBridgeFrame?.contentDocument || mapBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return false;
  }
  const normalized = normalizeMapBridgeSection(sectionId);
  if (normalized !== "map") {
    return true;
  }
  const detailCol = legacyDocument.getElementById("detailCol");
  return (
    isLegacyBridgeElementVisible(detailCol) &&
    Boolean(legacyDocument.querySelector(".map-location-pin-shell.place-system-shell")) &&
    Boolean(legacyDocument.getElementById("placeSystemGrid"))
  );
}

function markMapBridgeReadyFromDocument(sectionId = mapBridgeSection) {
  const legacyDocument = mapBridgeFrame?.contentDocument || mapBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return false;
  }
  syncMapBridgeEmbeddedSkin();
  if (!isMapBridgeTargetReady(sectionId)) {
    return false;
  }
  mapBridgeReady = true;
  mapBridgeFrameShell?.classList.add("is-ready");
  if (mapBridgeLoading) {
    mapBridgeLoading.textContent = "";
  }
  syncMapBridgeEmbeddedSkin();
  queueMapBridgeScrollSync();
  setMapBridgeButtonState(sectionId || mapBridgeSection);
  return true;
}

function queueMapBridgeReadyFallback(sectionId = mapBridgeSection, delays = [180, 420, 900, 1600]) {
  delays.forEach((delay) => {
    window.setTimeout(() => {
      if (!mapBridgeReady) {
        markMapBridgeReadyFromDocument(sectionId);
      }
    }, delay);
  });
}

function syncStorageBridgeEmbeddedSkin() {
  const legacyDocument = storageBridgeFrame?.contentDocument || storageBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return;
  }
  const legacyRoot = legacyDocument.documentElement || null;
  if (legacyRoot) {
    legacyRoot.classList.add(`${WC26_STORAGE_BRIDGE_EMBEDDED_CLASS}-root`);
    legacyRoot.setAttribute("data-storage-skin-root", "newsuit-20260517-02");
  }
  legacyDocument.body.classList.add(WC26_STORAGE_BRIDGE_EMBEDDED_CLASS);
  legacyDocument.body.setAttribute("data-storage-skin", "newsuit-20260517-02");
}

function syncMediaBridgeEmbeddedSkin() {
  const legacyDocument = mediaBridgeFrame?.contentDocument || mediaBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return;
  }
  legacyDocument.body.classList.add("wc26-media-bridge-embedded");
  legacyDocument.body.setAttribute("data-media-skin", "newsuit-20260518-01");
  ensureEmbeddedBridgeStyle(legacyDocument, WC26_MEDIA_BRIDGE_MOBILE_STYLE_ID, WC26_MEDIA_BRIDGE_MOBILE_CSS);
  legacyDocument.body.classList.toggle("media-bridge-broadcast-active", mediaBridgeSection === "broadcast-schedule");
  legacyDocument.body.classList.toggle("media-bridge-news-active", mediaBridgeSection === "worldcup-news");
  const detailCol = legacyDocument.getElementById("detailCol");
  if (detailCol) {
    detailCol.classList.toggle("media-bridge-broadcast-mode", mediaBridgeSection === "broadcast-schedule");
    detailCol.classList.toggle("media-bridge-news-mode", mediaBridgeSection === "worldcup-news");
  }
  queueMediaBridgeScrollSync();
}

function isLegacyBridgeElementVisible(element) {
  if (!element) {
    return false;
  }
  let node = element;
  while (node && node.nodeType === 1) {
    if (node.hidden || node.classList?.contains("hidden")) {
      return false;
    }
    node = node.parentElement;
  }
  try {
    const style = element.ownerDocument?.defaultView?.getComputedStyle(element);
    if (style && (style.display === "none" || style.visibility === "hidden" || style.opacity === "0")) {
      return false;
    }
  } catch (_error) {
    // Same-origin style checks are best-effort only.
  }
  return true;
}

function isMediaBridgeTargetReady(sectionId = mediaBridgeSection) {
  const legacyDocument = mediaBridgeFrame?.contentDocument || mediaBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return false;
  }
  const normalized = normalizeMediaBridgeSection(sectionId);
  const detailCol = legacyDocument.getElementById("detailCol");
  const detailTable = legacyDocument.getElementById("detailTable");
  if (!isLegacyBridgeElementVisible(detailCol)) {
    return false;
  }
  if (normalized === "worldcup-news") {
    return (
      detailTable?.classList?.contains("news-table") &&
      Boolean(detailTable.querySelector("thead")) &&
      Boolean(detailTable.querySelector("tbody"))
    );
  }
  return Boolean(
    legacyDocument.getElementById("newsProgrammingPanel") ||
      legacyDocument.querySelector(".news-programming-shell") ||
      legacyDocument.querySelector(".broadcast-suit-shell"),
  );
}

function markMediaBridgeReady(sectionId = mediaBridgeSection) {
  mediaBridgeReady = true;
  mediaBridgeFrameShell?.classList.add("is-ready");
  if (mediaBridgeLoading) {
    mediaBridgeLoading.textContent = "";
  }
  setMediaBridgeButtonState(sectionId || mediaBridgeSection);
  syncMediaBridgeEmbeddedSkin();
  queueMediaBridgeScrollSync();
  queueBridgeSummaryBurst(requestMediaBridgeSummary);
}

function markMediaBridgeReadyFromDocument(sectionId = mediaBridgeSection) {
  const legacyDocument = mediaBridgeFrame?.contentDocument || mediaBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return false;
  }
  syncMediaBridgeEmbeddedSkin();
  if (!isMediaBridgeTargetReady(sectionId)) {
    return false;
  }
  markMediaBridgeReady(sectionId);
  return true;
}

function queueMediaBridgeReadyFallback(sectionId = mediaBridgeSection) {
  [180, 420, 900, 1600].forEach((delay) => {
    window.setTimeout(() => {
      if (!mediaBridgeReady) {
        markMediaBridgeReadyFromDocument(sectionId);
      }
    }, delay);
  });
}

function syncMediaBridgeFrameScrollHeight() {
  const legacyDocument = mediaBridgeFrame?.contentDocument || mediaBridgeFrame?.contentWindow?.document || null;
  if (!mediaBridgeFrame) {
    return;
  }
  if (!isMobileSectionViewport()) {
    mediaBridgeFrame.style.height = "";
    return;
  }
  if (!legacyDocument?.body) {
    return;
  }
  const body = legacyDocument.body;
  const root = legacyDocument.documentElement;
  const detailCol = legacyDocument.getElementById("detailCol");
  const broadcastGrid =
    legacyDocument.querySelector(".broadcast-suit-programming-grid") ||
    legacyDocument.querySelector(".broadcast-suit-card-row") ||
    legacyDocument.querySelector("#newsProgrammingPanel");
  const newsTable =
    legacyDocument.querySelector(".news-table tbody") ||
    legacyDocument.querySelector(".news-table") ||
    legacyDocument.querySelector(".table-card");
  const contentHeight = Math.max(
    Number(body?.scrollHeight || 0),
    Number(body?.offsetHeight || 0),
    Number(root?.scrollHeight || 0),
    Number(root?.offsetHeight || 0),
    Number(detailCol?.scrollHeight || 0),
    Number(detailCol?.offsetHeight || 0),
    Number(broadcastGrid?.scrollHeight || 0),
    Number(broadcastGrid?.offsetHeight || 0),
    Number(newsTable?.scrollHeight || 0),
    Number(newsTable?.offsetHeight || 0),
    980,
  );
  mediaBridgeFrame.style.height = `${contentHeight + 24}px`;
  if (!mediaBridgeScrollLogPrinted) {
    mediaBridgeScrollLogPrinted = true;
    console.log("[media-scroll-fix] applied 20260518-01");
  }
}

function queueMediaBridgeScrollSync() {
  if (mediaBridgeScrollSyncQueued) {
    return;
  }
  mediaBridgeScrollSyncQueued = true;
  [0, 120, 320, 720].forEach((delay) => {
    window.setTimeout(() => {
      syncMediaBridgeFrameScrollHeight();
      if (delay === 720) {
        mediaBridgeScrollSyncQueued = false;
      }
    }, delay);
  });
}

function syncMapBridgeFrameScrollHeight() {
  const legacyDocument = mapBridgeFrame?.contentDocument || mapBridgeFrame?.contentWindow?.document || null;
  if (!mapBridgeFrame || !legacyDocument?.body) {
    return;
  }
  const body = legacyDocument.body;
  const root = legacyDocument.documentElement;
  const detailCol = legacyDocument.getElementById("detailCol");
  const simpleInfoPanel = legacyDocument.querySelector(".simple-info-panel-map");
  const placeSystemShell = legacyDocument.querySelector(".map-location-pin-shell.place-system-shell");
  const placeSystemGrid = legacyDocument.getElementById("placeSystemGrid");
  const placeListPanel = legacyDocument.getElementById("placeListPanel");
  const contentHeight = Math.max(
    Number(body?.scrollHeight || 0),
    Number(body?.offsetHeight || 0),
    Number(root?.scrollHeight || 0),
    Number(root?.offsetHeight || 0),
    Number(detailCol?.scrollHeight || 0),
    Number(detailCol?.offsetHeight || 0),
    Number(simpleInfoPanel?.scrollHeight || 0),
    Number(simpleInfoPanel?.offsetHeight || 0),
    Number(placeSystemShell?.scrollHeight || 0),
    Number(placeSystemShell?.offsetHeight || 0),
    Number(placeSystemGrid?.scrollHeight || 0),
    Number(placeSystemGrid?.offsetHeight || 0),
    Number(placeListPanel?.scrollHeight || 0),
    Number(placeListPanel?.offsetHeight || 0),
    980,
  );
  mapBridgeFrame.style.height = `${contentHeight + 24}px`;
  if (!mapBridgeScrollLogPrinted) {
    mapBridgeScrollLogPrinted = true;
    console.log("[map-scroll-fix] applied 20260517-01");
  }
}

function queueMapBridgeScrollSync() {
  if (mapBridgeScrollSyncQueued) {
    return;
  }
  mapBridgeScrollSyncQueued = true;
  [0, 120, 320, 720].forEach((delay) => {
    window.setTimeout(() => {
      syncMapBridgeFrameScrollHeight();
      if (delay === 720) {
        mapBridgeScrollSyncQueued = false;
      }
    }, delay);
  });
}

function syncLegacyGroupAStructureSkin() {
  const legacyDocument = matchBridgeFrame?.contentDocument || matchBridgeFrame?.contentWindow?.document;
  if (!legacyDocument?.body) {
    return;
  }

  try {
    let skinStyle = legacyDocument.getElementById(WC26_GROUP_A_LEGACY_SKIN_STYLE_ID);
    if (!skinStyle && legacyDocument.head) {
      skinStyle = legacyDocument.createElement("style");
      skinStyle.id = WC26_GROUP_A_LEGACY_SKIN_STYLE_ID;
      skinStyle.textContent = WC26_GROUP_A_LEGACY_SKIN_CSS;
      legacyDocument.head.appendChild(skinStyle);
    }

    const shouldSkinGroupA = matchShellMode === "group-stage" && matchBridgeGroupKey === "A";
    legacyDocument.body.classList.toggle("wc26-new-suit-group-a-legacy-skin", shouldSkinGroupA);
    if (!shouldSkinGroupA) {
      legacyDocument.getElementById("wc26-group-a-readable-status")?.remove();
      legacyDocument.getElementById("detailCol")?.classList.remove("group-a-readable-newsuit-view");
      legacyDocument.querySelector(".table-card.group-a-readable-layout")?.classList.remove("group-a-readable-layout");
      return;
    }

    const detailCol = legacyDocument.getElementById("detailCol");
    detailCol?.classList.add("group-a-readable-newsuit-view");

    const detailTitle = legacyDocument.getElementById("detailTitle");
    if (detailTitle) {
      detailTitle.textContent = "Group A";
    }

    const detailSubtitle = legacyDocument.getElementById("detailSubtitle");
    if (detailSubtitle) {
      detailSubtitle.textContent = "";
    }

    const standingRows = Array.from(legacyDocument.querySelectorAll("#detailTable.group-table tbody tr"));
    standingRows.forEach((row, index) => {
      row.classList.remove(
        "is-new-suit-rank-1",
        "is-new-suit-rank-2",
        "is-new-suit-rank-3",
        "is-new-suit-rank-4",
      );
      if (index < 4) {
        row.classList.add(`is-new-suit-rank-${index + 1}`);
      }
    });

    const matchRows = Array.from(legacyDocument.querySelectorAll(".group-schedule-match-table .schedule-match-row"));
    const completedRows = matchRows.filter((row) => {
      const text = String(row.textContent || "");
      return (
        row.classList.contains("is-complete") ||
        row.querySelector("[data-result-saved], .match-result-complete, .record-complete, .is-recorded") ||
        /기록완료|결과\s*저장\s*완료/.test(text)
      );
    });
    const thirdPlaceText = standingRows[2] ? "자동 연동 유지" : "연동 대기";

    let statusPanel = legacyDocument.getElementById("wc26-group-a-readable-status");
    if (!statusPanel) {
      statusPanel = legacyDocument.createElement("div");
      statusPanel.id = "wc26-group-a-readable-status";
      detailSubtitle?.insertAdjacentElement("afterend", statusPanel);
    }
    statusPanel.replaceChildren(
      createLegacyStatusChip(legacyDocument, "경로", "02 경기일정 > 조별리그 > A조"),
      createLegacyStatusChip(legacyDocument, "경기 수", `${matchRows.length || 0}경기`),
      createLegacyStatusChip(legacyDocument, "기록 완료", `${completedRows.length || 0}경기`),
      createLegacyStatusChip(legacyDocument, "3위 순위", thirdPlaceText),
    );

    legacyDocument.getElementById("detailTable")?.closest(".table-card")?.classList.add("group-a-readable-layout");
  } catch (_error) {
    // Same-origin iframe skinning is best-effort; the legacy data/calculation flow remains authoritative.
  }
}

function createLegacyStatusChip(doc, label, value) {
  const chip = doc.createElement("span");
  chip.className = "status-chip";
  const labelNode = doc.createElement("span");
  labelNode.textContent = label;
  const valueNode = doc.createElement("strong");
  valueNode.textContent = value;
  chip.append(labelNode, valueNode);
  return chip;
}

function getCompactText(node, fallback = "") {
  return String(node?.textContent || fallback || "").replace(/\s+/g, " ").trim();
}

function getLegacyGroupADocument() {
  return matchBridgeFrame?.contentDocument || matchBridgeFrame?.contentWindow?.document || null;
}

function isGroupALegacyBridgeReady() {
  const legacyWindow = matchBridgeFrame?.contentWindow;
  const legacyDocument = getLegacyGroupADocument();
  return Boolean(legacyWindow && legacyDocument && typeof legacyWindow.showGroup === "function");
}

function ensureGroupALegacyBridgeReady(reason = "group-a-render") {
  if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
    return Promise.resolve(false);
  }
  if (isGroupALegacyBridgeReady()) {
    return Promise.resolve(true);
  }
  if (!loadLazyIframe(matchBridgeFrame)) {
    return Promise.resolve(false);
  }
  if (matchGroupALegacyReadyPromise) {
    return matchGroupALegacyReadyPromise;
  }

  matchGroupALegacyReadyPromise = new Promise((resolve) => {
    const startedAt = performance.now();
    let settled = false;
    let timerId = 0;

    const settle = (ready) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timerId);
      matchBridgeFrame?.removeEventListener("load", handleLoad);
      logGroupADiagnostic("groupALegacyBridgeReady:settle", {
        reason,
        ready,
        elapsed: Math.round(performance.now() - startedAt),
      });
      resolve(Boolean(ready));
    };

    const check = () => {
      if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
        settle(false);
        return;
      }
      if (isGroupALegacyBridgeReady()) {
        settle(true);
        return;
      }
      if (performance.now() - startedAt >= GROUP_A_LEGACY_READY_TIMEOUT_MS) {
        settle(false);
        return;
      }
      timerId = window.setTimeout(check, GROUP_A_LEGACY_READY_POLL_MS);
    };

    function handleLoad() {
      logGroupADiagnostic("groupALegacyBridgeReady:iframe-load", { reason });
      window.setTimeout(check, GROUP_A_LEGACY_READY_POLL_MS);
    }

    matchBridgeFrame?.addEventListener("load", handleLoad);
    check();
  }).finally(() => {
    matchGroupALegacyReadyPromise = null;
  });

  return matchGroupALegacyReadyPromise;
}

function createGroupAElement(tagName, className = "", text = "") {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== "") {
    element.textContent = text;
  }
  return element;
}

function createMatchResultsElement(ownerDocument, tagName, className = "", text = "") {
  const element = ownerDocument.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== "") {
    element.textContent = text;
  }
  return element;
}

function buildGroupAStatusChip(label, value) {
  const chip = createGroupAElement("span", "group-a-newsuit-status-chip");
  chip.append(createGroupAElement("span", "", label), createGroupAElement("strong", "", value));
  return chip;
}

function getCurrentGroupShellLabel(groupKey = matchBridgeGroupKey) {
  return `${normalizeMatchGroupKey(groupKey)}조`;
}

// [Z-TEST-START] 3위순위 임시 테스트
const Z_THIRD_PLACE_MANUAL_META = {
  kr: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  qa: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  ht: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  au: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  ci: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  se: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  ir: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  sa: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  iq: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  at: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  uz: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
  gh: { fairPlayScore: null, fifaRanking: null, fairPlaySourceDate: "", fifaRankingSourceDate: "" },
};
window.WC26_Z_THIRD_PLACE_MANUAL_META = Z_THIRD_PLACE_MANUAL_META;

function formatZThirdPlaceTestSignedMetric(value) {
  const normalizedValue = String(value ?? "").trim();
  if (!normalizedValue || normalizedValue === "-") {
    return "-";
  }
  const numericValue = Number(normalizedValue);
  if (!Number.isFinite(numericValue)) {
    return normalizedValue;
  }
  if (numericValue > 0) {
    return `+${numericValue}`;
  }
  return `${numericValue}`;
}

function formatZThirdPlaceTestManualMetric(value) {
  const numericValue = parseZThirdPlaceTestNumber(value);
  return numericValue === null ? "-" : `${numericValue}`;
}

function normalizeZThirdPlaceManualMetaKey(value = "") {
  return String(value || "").trim().toLowerCase();
}

function parseZThirdPlaceTestNumber(value) {
  const normalizedValue = String(value ?? "").trim();
  if (!normalizedValue || normalizedValue === "-") {
    return null;
  }
  const numericValue = Number(normalizedValue);
  return Number.isFinite(numericValue) ? numericValue : null;
}

function getZThirdPlaceManualMeta(row = {}) {
  const teamMeta = getGroupATeamMeta(row.team);
  const candidateKeys = [row.flagCode, row.team, teamMeta?.ko]
    .map(normalizeZThirdPlaceManualMetaKey)
    .filter(Boolean);
  const matchedKey = candidateKeys.find((key) => Object.prototype.hasOwnProperty.call(Z_THIRD_PLACE_MANUAL_META, key));
  const meta = matchedKey ? Z_THIRD_PLACE_MANUAL_META[matchedKey] : {};
  return {
    fairPlayScore: parseZThirdPlaceTestNumber(meta?.fairPlayScore),
    fifaRanking: parseZThirdPlaceTestNumber(meta?.fifaRanking),
    fairPlaySourceDate: String(meta?.fairPlaySourceDate || ""),
    fifaRankingSourceDate: String(meta?.fifaRankingSourceDate || ""),
  };
}

function compareZThirdPlaceTestNumber(a, b, direction = "desc") {
  const valueA = parseZThirdPlaceTestNumber(a);
  const valueB = parseZThirdPlaceTestNumber(b);
  if (valueA === null && valueB === null) {
    return 0;
  }
  if (valueA === null) {
    return 1;
  }
  if (valueB === null) {
    return -1;
  }
  return direction === "asc" ? valueA - valueB : valueB - valueA;
}

function compareZThirdPlaceTestRows(a, b) {
  return (
    compareZThirdPlaceTestNumber(a.points, b.points, "desc") ||
    compareZThirdPlaceTestNumber(a.goalDifference, b.goalDifference, "desc") ||
    compareZThirdPlaceTestNumber(a.goalsFor, b.goalsFor, "desc") ||
    compareZThirdPlaceTestNumber(a.fairPlayScore, b.fairPlayScore, "desc") ||
    compareZThirdPlaceTestNumber(a.fifaRanking, b.fifaRanking, "asc") ||
    a.originalGroupIndex - b.originalGroupIndex
  );
}

function sortZThirdPlaceTestRows(rows = []) {
  return rows
    .slice()
    .sort(compareZThirdPlaceTestRows)
    .map((row, index) => ({
      ...row,
      overallRank: index + 1,
    }));
}
// [Z-TEST-END] 3위순위 임시 테스트

function rememberGroupTeamMeta(teamName = "", meta = {}) {
  const normalizedTeamName = String(teamName || "").trim();
  if (!normalizedTeamName) {
    return;
  }
  const currentMeta = WC26_DYNAMIC_TEAM_META.get(normalizedTeamName) || GROUP_A_TEAM_META[normalizedTeamName] || {};
  const nextMeta = {
    ko: String(meta?.ko || currentMeta?.ko || normalizedTeamName).trim() || normalizedTeamName,
    flag: String(meta?.flag || currentMeta?.flag || "").trim().toLowerCase(),
  };
  WC26_DYNAMIC_TEAM_META.set(normalizedTeamName, nextMeta);
}

function rememberGroupTeamMetasFromMatches(matches = []) {
  if (!Array.isArray(matches)) {
    return;
  }
  matches.forEach((match) => {
    rememberGroupTeamMeta(match?.home || match?.homeTeam || "", {
      ko: String(match?.homeKo || "").trim(),
      flag: String(match?.homeCode || "").trim().toLowerCase(),
    });
    rememberGroupTeamMeta(match?.away || match?.awayTeam || "", {
      ko: String(match?.awayKo || "").trim(),
      flag: String(match?.awayCode || "").trim().toLowerCase(),
    });
  });
}

function getGroupATeamMeta(teamName = "") {
  const normalized = String(teamName || "").trim();
  return WC26_DYNAMIC_TEAM_META.get(normalized) || GROUP_A_TEAM_META[normalized] || { ko: normalized || "팀 미정", flag: "" };
}

function createGroupATeamCell(teamName = "") {
  const meta = getGroupATeamMeta(teamName);
  const cell = createGroupAElement("span", "team-name");
  if (meta.flag) {
    const image = document.createElement("img");
    image.className = "group-a-team-flag";
    image.src = `https://flagcdn.com/${meta.flag}.svg`;
    image.alt = `${meta.ko} 국기`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 24;
    image.height = 16;
    cell.append(image);
  }
  cell.append(createGroupAElement("span", "", meta.ko));
  return cell;
}

// [Z-TEST-START] 3위순위 임시 테스트
function createZThirdPlaceTestTeamCell(teamName = "", flagCode = "", options = {}) {
  const { includeFlag = true, includeName = true } = options;
  rememberGroupTeamMeta(teamName, {
    flag: String(flagCode || "").trim().toLowerCase(),
  });
  const cell = createGroupAElement("span", "team-name");
  const meta = getGroupATeamMeta(teamName);
  if (includeFlag && meta.flag) {
    const image = document.createElement("img");
    image.className = "group-a-team-flag";
    image.src = `https://flagcdn.com/${meta.flag}.svg`;
    image.alt = `${meta.ko} 국기`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 24;
    image.height = 16;
    cell.append(image);
  }
  if (includeName) {
    cell.append(createGroupAElement("span", "", meta.ko || teamName || "-"));
  } else if (!meta.flag) {
    cell.append(createGroupAElement("span", "", "-"));
  }
  return cell;
}
// [Z-TEST-END] 3위순위 임시 테스트

function createGroupAMatchTeam(teamName = "", side = "home") {
  const meta = getGroupATeamMeta(teamName);
  const team = createGroupAElement("div", `group-a-feature-team group-a-feature-team--${side}`);
  if (meta.flag) {
    const image = document.createElement("img");
    image.className = "group-a-feature-flag";
    image.src = `https://flagcdn.com/${meta.flag}.svg`;
    image.alt = `${meta.ko} 국기`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 128;
    image.height = 88;
    image.draggable = false;
    team.append(image);
  }
  team.append(createGroupAElement("strong", "group-a-feature-team-name", teamName || meta.ko || "Team"));
  return team;
}

function createGroupAMatchLogo() {
  const logoWrap = createGroupAElement("div", "group-a-feature-logo");
  const logo = document.createElement("img");
  logo.src = WC26_GROUP_A_MATCH_LOGO_PATH;
  logo.alt = "FIFA World Cup 2026";
  logo.loading = "lazy";
  logo.decoding = "async";
  logo.draggable = false;
  logoWrap.append(logo);
  return logoWrap;
}

function normalizeGroupAActiveIndex(index = 0, matches = matchGroupARenderedMatches) {
  const total = Array.isArray(matches) ? matches.length : 0;
  if (!total) {
    return 0;
  }
  const normalizedIndex = Number.isFinite(index) ? Math.trunc(index) : 0;
  return ((normalizedIndex % total) + total) % total;
}

function clearGroupAAutoSlideTimer() {
  if (matchGroupAAutoSlideTimer) {
    window.clearInterval(matchGroupAAutoSlideTimer);
    matchGroupAAutoSlideTimer = null;
  }
}

function shouldRunGroupAAutoSlide(matches = matchGroupARenderedMatches) {
  return (
    matchShellMode === "group-stage" &&
    !matchGroupAFormShell?.hidden &&
    Array.isArray(matches) &&
    matches.length > 1
  );
}

function getGroupASwipeDirection(deltaX = 0, deltaY = 0) {
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  if (absX < WC26_GROUP_A_SWIPE_THRESHOLD_PX || absX <= absY) {
    return 0;
  }
  return deltaX < 0 ? 1 : -1;
}

function createGroupAMatchFeatureStage(feature) {
  const stage = createGroupAElement("div", "group-a-match-feature-stage");
  if (feature) {
    stage.append(feature);
  }
  return stage;
}

function clearGroupAMatchFeatureAnimationState() {
  matchGroupAFeatureIsAnimating = false;
  if (matchGroupAFeatureTransitionTimer) {
    window.clearTimeout(matchGroupAFeatureTransitionTimer);
    matchGroupAFeatureTransitionTimer = null;
  }
}

function runPendingGroupAMatchFeatureTransition() {
  if (!matchGroupAFeaturePendingTransition) {
    return;
  }
  const pending = matchGroupAFeaturePendingTransition;
  matchGroupAFeaturePendingTransition = null;
  syncGroupAMatchFeature(
    pending.match,
    pending.totalMatches,
    pending.activeIndex,
    pending.onSelectMatch,
    pending.options,
  );
}

function animateGroupAMatchFeature(stage, incomingFeature, direction = 0) {
  if (!(stage instanceof HTMLElement) || !(incomingFeature instanceof HTMLElement) || !direction) {
    return false;
  }
  const outgoingFeature = stage.querySelector(".group-a-match-feature");
  if (!(outgoingFeature instanceof HTMLElement)) {
    return false;
  }
  clearGroupAMatchFeatureAnimationState();
  matchGroupAFeatureIsAnimating = true;
  const stageHeight = Math.max(outgoingFeature.offsetHeight || 0, incomingFeature.offsetHeight || 0);
  stage.style.height = stageHeight > 0 ? `${stageHeight}px` : "";
  stage.style.setProperty("--wc26-slide-direction", String(direction));
  stage.classList.add("is-animating");
  outgoingFeature.classList.add("group-a-match-feature--outgoing");
  incomingFeature.classList.add("group-a-match-feature--incoming");
  stage.append(incomingFeature);
  void stage.offsetWidth;
  stage.classList.add("is-animating-active");
  matchGroupAFeatureTransitionTimer = window.setTimeout(() => {
    outgoingFeature.remove();
    incomingFeature.classList.remove("group-a-match-feature--incoming");
    stage.classList.remove("is-animating", "is-animating-active");
    stage.style.removeProperty("--wc26-slide-direction");
    stage.style.removeProperty("height");
    clearGroupAMatchFeatureAnimationState();
    runPendingGroupAMatchFeatureTransition();
  }, 430);
  return true;
}

function updateGroupAMatchTeam(teamNode, teamName = "", side = "home") {
  if (!(teamNode instanceof HTMLElement)) {
    return;
  }
  const meta = getGroupATeamMeta(teamName);
  let image = teamNode.querySelector(".group-a-feature-flag");
  if (meta.flag) {
    if (!(image instanceof HTMLImageElement)) {
      image = document.createElement("img");
      image.className = "group-a-feature-flag";
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 128;
      image.height = 88;
      image.draggable = false;
      teamNode.prepend(image);
    }
    const nextSrc = `https://flagcdn.com/${meta.flag}.svg`;
    if (image.getAttribute("src") !== nextSrc) {
      image.src = nextSrc;
    }
    image.alt = `${meta.ko} 국기`;
  } else if (image instanceof HTMLElement) {
    image.remove();
  }
  let label = teamNode.querySelector(".group-a-feature-team-name");
  if (!(label instanceof HTMLElement)) {
    label = createGroupAElement("strong", "group-a-feature-team-name");
    teamNode.append(label);
  }
  label.textContent = teamName || meta.ko || "Team";
  teamNode.className = `group-a-feature-team group-a-feature-team--${side}`;
}

function syncGroupAMatchDots(feature, totalMatches = 0, activeIndex = 0, onSelectMatch = null) {
  if (!(feature instanceof HTMLElement)) {
    return;
  }
  const nextDots = createGroupAMatchDots(totalMatches, activeIndex, onSelectMatch);
  const currentDots = feature.querySelector(".group-a-feature-dots");
  if (currentDots) {
    currentDots.replaceWith(nextDots);
  } else {
    feature.append(nextDots);
  }
}

function syncGroupAMatchFeature(match = {}, totalMatches = 0, activeIndex = 0, onSelectMatch = null, options = {}) {
  if (!matchGroupAFormMatches) {
    return;
  }
  const shouldAnimate = Number.isFinite(options.animateDirection) && options.animateDirection !== 0;
  const stage = matchGroupAFormMatches.querySelector(".group-a-match-feature-stage");
  const existingFeature = stage?.querySelector(".group-a-match-feature");
  if (
    !(stage instanceof HTMLElement) ||
    !(existingFeature instanceof HTMLElement) ||
    !existingFeature.querySelector(".group-a-feature-matchup") ||
    !existingFeature.querySelector(".group-a-feature-info") ||
    !existingFeature.querySelector(".group-a-feature-stadium-frame")
  ) {
    clearGroupAMatchFeatureAnimationState();
    matchGroupAFeaturePendingTransition = null;
    matchGroupAFormMatches.replaceChildren(
      createGroupAMatchFeatureStage(createGroupAMatchFeature(match, totalMatches, activeIndex, onSelectMatch)),
    );
    return;
  }
  if (matchGroupAFeatureIsAnimating) {
    matchGroupAFeaturePendingTransition = {
      match,
      totalMatches,
      activeIndex,
      onSelectMatch,
      options: { ...options },
    };
    return;
  }

  if (shouldAnimate) {
    const incomingFeature = createGroupAMatchFeature(match, totalMatches, activeIndex, onSelectMatch);
    const animationStarted = animateGroupAMatchFeature(stage, incomingFeature, options.animateDirection);
    if (animationStarted) {
      return;
    }
  }
  const stadiumName = sanitizeGroupAStadiumName(match.stadium, "Mexico City Stadium");
  const { localTime, koreaTime } = normalizeGroupAMatchTimes(match);
  const matchup = existingFeature.querySelector(".group-a-feature-matchup");
  const homeTeam = matchup?.querySelector(".group-a-feature-team--home");
  const awayTeam = matchup?.querySelector(".group-a-feature-team--away");
  const info = existingFeature.querySelector(".group-a-feature-info");
  const kickOffNode = info?.querySelector("span");
  const stadiumLabelNode = info?.querySelector("strong");
  const stadiumFrame = existingFeature.querySelector(".group-a-feature-stadium-frame");
  const stadiumImagePath = resolveWC26StadiumImagePath(match.stadium, match.stadiumImage || WC26_GROUP_A_STADIUM_IMAGE_PATH || "");
  updateGroupAMatchTeam(homeTeam, match.home, "home");
  updateGroupAMatchTeam(awayTeam, match.away, "away");
  if (kickOffNode) {
    kickOffNode.textContent = `KICK-OFF 현지시각 ${localTime} / 한국시각 ${koreaTime}`;
  }
  if (stadiumLabelNode) {
    stadiumLabelNode.textContent = stadiumName;
  }
  if (stadiumFrame instanceof HTMLElement) {
    let stadiumImage = stadiumFrame.querySelector("img");
    if (stadiumImagePath) {
      if (!(stadiumImage instanceof HTMLImageElement)) {
        stadiumImage = document.createElement("img");
        stadiumFrame.replaceChildren(stadiumImage);
      }
      if (stadiumImage.getAttribute("src") !== stadiumImagePath) {
        stadiumImage.src = stadiumImagePath;
      }
      stadiumImage.alt = stadiumName;
      stadiumImage.loading = "eager";
      stadiumImage.decoding = "async";
      stadiumImage.fetchPriority = "high";
      stadiumImage.width = 1600;
      stadiumImage.height = 900;
      stadiumImage.draggable = false;
      delete stadiumFrame.dataset.assetMissing;
      stadiumFrame.removeAttribute("aria-label");
    } else {
      if (stadiumImage instanceof HTMLElement) {
        stadiumImage.remove();
      }
      stadiumFrame.dataset.assetMissing = "local-stadium-image";
      stadiumFrame.setAttribute("aria-label", "저장된 경기장 이미지 경로가 아직 없습니다");
    }
  }
  syncGroupAMatchDots(existingFeature, totalMatches, activeIndex, onSelectMatch);
}

function restartGroupAAutoSlide() {
  clearGroupAAutoSlideTimer();
  if (!shouldRunGroupAAutoSlide()) {
    return;
  }
  matchGroupAAutoSlideTimer = window.setInterval(() => {
    if (!shouldRunGroupAAutoSlide()) {
      clearGroupAAutoSlideTimer();
      return;
    }
    selectGroupAMatchByOffset(1, { restartTimer: false, animateDirection: 1 });
  }, WC26_GROUP_A_AUTO_SLIDE_INTERVAL_MS);
}

function ensureGroupAAutoSlide() {
  if (!matchGroupAAutoSlideTimer && shouldRunGroupAAutoSlide()) {
    restartGroupAAutoSlide();
  }
}

function setGroupAActiveMatchIndex(nextIndex, options = {}) {
  const matches = Array.isArray(options.matches) ? options.matches : matchGroupARenderedMatches;
  if (!Array.isArray(matches) || !matches.length) {
    clearGroupAAutoSlideTimer();
    return;
  }
  const normalizedIndex = normalizeGroupAActiveIndex(nextIndex, matches);
  const currentIndex = normalizeGroupAActiveIndex(matchGroupAActiveMatchIndex, matches);
  const hasRenderedFeature = Boolean(matchGroupAFormMatches?.querySelector(".group-a-match-feature"));
  if (normalizedIndex === currentIndex && hasRenderedFeature) {
    if (options.restartTimer !== false) {
      restartGroupAAutoSlide();
    }
    return;
  }
  matchGroupAActiveMatchIndex = normalizedIndex;
  renderGroupAMatchesPanel(matches, {
    ...options,
    activeIndex: normalizedIndex,
    restartAutoSlide: false,
  });
  renderMatchResultsPanel();
  if (options.restartTimer !== false) {
    restartGroupAAutoSlide();
  }
}

function selectGroupAMatchByOffset(offset = 1, options = {}) {
  const matches = Array.isArray(options.matches) ? options.matches : matchGroupARenderedMatches;
  if (!Array.isArray(matches) || matches.length < 2) {
    return;
  }
  const direction = offset < 0 ? -1 : 1;
  setGroupAActiveMatchIndex(matchGroupAActiveMatchIndex + direction, {
    ...options,
    matches,
    animateDirection: direction,
  });
}

function bindGroupAMatchFeatureGestures() {
  if (!matchGroupAFormMatches || matchGroupAFeatureGestureBound) {
    return;
  }
  matchGroupAFeatureGestureBound = true;
  const canSwipe = () =>
    matchShellMode === "group-stage" &&
    Array.isArray(matchGroupARenderedMatches) &&
    matchGroupARenderedMatches.length > 1 &&
    !matchGroupAFormShell?.hidden;
  const commitSwipe = (deltaX = 0, deltaY = 0) => {
    const direction = getGroupASwipeDirection(deltaX, deltaY);
    if (!direction) {
      return;
    }
    selectGroupAMatchByOffset(direction, {
      matches: matchGroupARenderedMatches,
      restartTimer: true,
      animateDirection: direction,
    });
  };

  if ("PointerEvent" in window) {
    matchGroupAFormMatches.addEventListener("pointerdown", (event) => {
      if (!canSwipe() || !event.isPrimary) {
        return;
      }
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      matchGroupAPointerGesture = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
      };
    });

    window.addEventListener("pointermove", (event) => {
      if (!matchGroupAPointerGesture || matchGroupAPointerGesture.pointerId !== event.pointerId) {
        return;
      }
      matchGroupAPointerGesture.lastX = event.clientX;
      matchGroupAPointerGesture.lastY = event.clientY;
      const deltaX = event.clientX - matchGroupAPointerGesture.startX;
      const deltaY = event.clientY - matchGroupAPointerGesture.startY;
      if (Math.abs(deltaX) >= WC26_GROUP_A_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
        event.preventDefault();
      }
    }, { passive: false });

    const finishPointerGesture = (event) => {
      if (!matchGroupAPointerGesture || matchGroupAPointerGesture.pointerId !== event.pointerId) {
        return;
      }
      const deltaX = (event.clientX ?? matchGroupAPointerGesture.lastX) - matchGroupAPointerGesture.startX;
      const deltaY = (event.clientY ?? matchGroupAPointerGesture.lastY) - matchGroupAPointerGesture.startY;
      matchGroupAPointerGesture = null;
      if (!canSwipe()) {
        return;
      }
      commitSwipe(deltaX, deltaY);
    };

    window.addEventListener("pointerup", finishPointerGesture);
    window.addEventListener("pointercancel", finishPointerGesture);
    return;
  }

  matchGroupAFormMatches.addEventListener("touchstart", (event) => {
    if (!canSwipe() || !event.touches.length) {
      return;
    }
    const touch = event.touches[0];
    matchGroupATouchGesture = {
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
    };
  }, { passive: true });

  matchGroupAFormMatches.addEventListener("touchmove", (event) => {
    if (!matchGroupATouchGesture || !event.touches.length) {
      return;
    }
    const touch = event.touches[0];
    matchGroupATouchGesture.lastX = touch.clientX;
    matchGroupATouchGesture.lastY = touch.clientY;
    const deltaX = touch.clientX - matchGroupATouchGesture.startX;
    const deltaY = touch.clientY - matchGroupATouchGesture.startY;
    if (Math.abs(deltaX) >= WC26_GROUP_A_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
      event.preventDefault();
    }
  }, { passive: false });

  const finishTouchGesture = () => {
    if (!matchGroupATouchGesture) {
      return;
    }
    const deltaX = matchGroupATouchGesture.lastX - matchGroupATouchGesture.startX;
    const deltaY = matchGroupATouchGesture.lastY - matchGroupATouchGesture.startY;
    matchGroupATouchGesture = null;
    if (!canSwipe()) {
      return;
    }
    commitSwipe(deltaX, deltaY);
  };

  matchGroupAFormMatches.addEventListener("touchend", finishTouchGesture, { passive: true });
  matchGroupAFormMatches.addEventListener("touchcancel", finishTouchGesture, { passive: true });
}

function createGroupAMatchDots(count = 0, activeIndex = 0, onSelectMatch = null) {
  const dots = createGroupAElement("div", "group-a-feature-dots");
  const groupLabel = getCurrentGroupShellLabel();
  dots.setAttribute("aria-label", `${groupLabel} 경기 슬라이드 표시`);
  Array.from({ length: Math.max(0, count) }).forEach((_, index) => {
    const dot = createGroupAElement("span", index === 0 ? "is-active" : "");
    dot.classList.toggle("is-active", index === activeIndex);
    dot.dataset.matchIndex = String(index);
    dot.setAttribute("role", "button");
    dot.setAttribute("tabindex", "0");
    dot.setAttribute("aria-label", `${groupLabel} ${index + 1}경기 보기`);
    if (typeof onSelectMatch === "function") {
      dot.addEventListener("click", () => onSelectMatch(index));
      dot.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectMatch(index);
        }
      });
    }
    dots.append(dot);
  });
  return dots;
}

function extractGroupAMatchClock(value = "") {
  const normalizedValue = String(value || "").replace(/\s+/g, " ").trim();
  return normalizedValue.match(/\b\d{2}:\d{2}\b/)?.[0] || "";
}

function normalizeGroupAMatchTimes(match = {}) {
  const rawTimeLine = String(match.time || "").replace(/\s+/g, " ").trim();
  const koreaTime =
    extractGroupAMatchClock(match.koreaTime) ||
    rawTimeLine.match(/한국\s*(\d{2}:\d{2})/i)?.[1] ||
    "--:--";
  const localTime =
    extractGroupAMatchClock(match.localTime) ||
    rawTimeLine.match(/현지\s*(\d{2}:\d{2})/i)?.[1] ||
    "--:--";
  return { localTime, koreaTime };
}

function getGroupASupplementalMatches() {
  const currentGroupLabel = getCurrentGroupShellLabel();
  const syncWindow = getScheduleBridgeSyncWindow();
  const getter = syncWindow?.getWC26LegacyScheduleSummary;

  if (isLazyIframeLoaded(scheduleBridgeSyncFrame) && typeof getter === "function") {
    try {
      const summary = getter.call(syncWindow);
      if (Array.isArray(summary?.upcomingMatches) && summary.upcomingMatches.length) {
        return summary.upcomingMatches.filter((item) => String(item?.groupName || "").trim() === currentGroupLabel);
      }
    } catch (_error) {
      // Ignore sync frame read failures and fall back to the last cached payload.
    }
  }

  if (Array.isArray(window.WC26_MATCH_SCHEDULE_DATA)) {
    return window.WC26_MATCH_SCHEDULE_DATA.filter((item) => String(item?.groupName || "").trim() === currentGroupLabel);
  }

  return [];
}

function enrichGroupAMatch(match = {}, supplementalMatches = []) {
  const baseMatch = match && typeof match === "object" ? match : {};
  const normalizedNumber = String(baseMatch.number || "").trim();
  const normalizedHome = String(baseMatch.home || baseMatch.homeTeam || "").trim();
  const normalizedAway = String(baseMatch.away || baseMatch.awayTeam || "").trim();
  const normalizedStadium = sanitizeGroupAStadiumName(baseMatch.stadium || "");
  const supplementalMatch = supplementalMatches.find((item) => {
    const itemNumber = String(item?.number || "").trim();
    const itemHome = String(item?.home || item?.homeTeam || "").trim();
    const itemAway = String(item?.away || item?.awayTeam || "").trim();
    const itemStadium = sanitizeGroupAStadiumName(item?.stadium || item?.venue || "");
    return (
      (normalizedNumber && normalizedNumber === itemNumber) ||
      (normalizedHome && normalizedAway && normalizedHome === itemHome && normalizedAway === itemAway) ||
      (normalizedStadium && normalizedStadium === itemStadium && normalizedHome === itemHome && normalizedAway === itemAway)
    );
  });

  const enrichedMatch = {
    ...supplementalMatch,
    ...baseMatch,
    date: String(baseMatch.date || supplementalMatch?.localDate || supplementalMatch?.matchDate || "").trim(),
    time: String(baseMatch.time || supplementalMatch?.time || "").trim(),
    city: String(baseMatch.city || supplementalMatch?.city || "").trim(),
    stadium: sanitizeGroupAStadiumName(baseMatch.stadium || supplementalMatch?.stadium || supplementalMatch?.venue || "", "경기장 미정"),
    localTime: String(baseMatch.localTime || supplementalMatch?.localTime || "").trim(),
    koreaTime: String(baseMatch.koreaTime || supplementalMatch?.koreaTime || "").trim(),
  };
  if (!enrichedMatch.city) {
    enrichedMatch.city = resolveGroupAMatchCity(enrichedMatch);
  }
  enrichedMatch.stadiumImage = resolveWC26StadiumImagePath(
    enrichedMatch.stadium,
    baseMatch.stadiumImage || supplementalMatch?.stadiumImage || "",
  );
  return enrichedMatch;
}

function enrichGroupAMatches(matches = []) {
  const supplementalMatches = getGroupASupplementalMatches();
  return (Array.isArray(matches) ? matches : []).map((match) => enrichGroupAMatch(match, supplementalMatches));
}

function sanitizeGroupAStadiumName(value = "", fallback = "") {
  const normalizedValue = String(value || fallback || "").replace(/\s+/g, " ").trim();
  const cleanedValue = normalizedValue.replace(/\s*Wikimedia Commons\s*$/i, "").trim();
  return cleanedValue || String(fallback || "").replace(/\s+/g, " ").trim();
}

function normalizeWC26StadiumImageKey(value = "") {
  return sanitizeGroupAStadiumName(value)
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const WC26_STADIUM_IMAGE_INDEX = new Map(
  [
    ...Object.entries(WC26_STADIUM_IMAGES),
    ...Object.entries(WC26_STADIUM_IMAGE_ALIASES).map(([alias, canonical]) => [alias, WC26_STADIUM_IMAGES[canonical] || ""]),
  ]
    .filter(([, path]) => Boolean(path))
    .map(([label, path]) => [normalizeWC26StadiumImageKey(label), path]),
);

function isLocalWC26StadiumImagePath(value = "") {
  return /^images\/stadiums\/.+\.(?:jpe?g|png|webp)$/i.test(String(value || "").trim());
}

function resolveWC26StadiumImagePath(stadiumName = "", fallbackPath = "") {
  const normalizedStadium = sanitizeGroupAStadiumName(stadiumName);
  const normalizedKey = normalizeWC26StadiumImageKey(normalizedStadium);
  if (normalizedKey && WC26_STADIUM_IMAGE_INDEX.has(normalizedKey)) {
    return WC26_STADIUM_IMAGE_INDEX.get(normalizedKey) || "";
  }
  if (isLocalWC26StadiumImagePath(fallbackPath)) {
    return String(fallbackPath || "").trim();
  }
  if (normalizedStadium && !WC26_STADIUM_WARNED_MISSING.has(normalizedStadium)) {
    WC26_STADIUM_WARNED_MISSING.add(normalizedStadium);
    console.warn("[wc26] local stadium image missing", {
      stadium: normalizedStadium,
    });
  }
  return "";
}

function preloadWC26StadiumImages(matches = [], preferredIndex = 0) {
  if (!Array.isArray(matches) || !matches.length) {
    return;
  }
  const normalizedPreferredIndex = Number.isInteger(preferredIndex) ? preferredIndex : 0;
  const prioritized = [
    ...matches.slice(normalizedPreferredIndex, normalizedPreferredIndex + 1),
    ...matches.filter((_, index) => index !== normalizedPreferredIndex),
  ];
  prioritized.forEach((match) => {
    const src = resolveWC26StadiumImagePath(match?.stadium, match?.stadiumImage);
    if (!src || WC26_STADIUM_PRELOAD_CACHE.has(src)) {
      return;
    }
    WC26_STADIUM_PRELOAD_CACHE.add(src);
    const image = new Image();
    image.decoding = "async";
    image.src = src;
  });
}

function shouldShowVisibleMatchBridgeFrame() {
  // [Z-TEST-START] 3위순위 임시 테스트
  if (matchShellMode === "third-place-ranking") {
    return false;
  }
  // [Z-TEST-END] 3위순위 임시 테스트
  return false;
}

function shouldShowMatchResultsPanel() {
  return matchShellMode === "group-stage";
}

function formatMatchResultDateLabel(dateText = "") {
  const normalizedDate = String(dateText || "").match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!normalizedDate) {
    return "-";
  }
  return `${Number(normalizedDate[2])}/${Number(normalizedDate[3])}`;
}

function readLegacyMatchResultDetail(row, label = "") {
  const normalizedLabel = String(label || "").trim();
  if (!row || !normalizedLabel) {
    return "";
  }
  const metaTexts = Array.from(row.querySelectorAll(".match-meta, .match-meta-item"))
    .map((node) => getCompactText(node))
    .filter(Boolean);
  const matchedMeta = metaTexts.find((text) => text.startsWith(`${normalizedLabel}:`));
  if (matchedMeta) {
    return matchedMeta.replace(`${normalizedLabel}:`, "").trim();
  }
  const compactText = getCompactText(row);
  const detailMatch = compactText.match(
    new RegExp(`${normalizedLabel}:\\s*(.*?)(?=(?:날짜|시간|도시|경기장)\\s*:|$)`),
  );
  if (detailMatch?.[1]) {
    return detailMatch[1].trim();
  }
  const lines = String(row.textContent || "")
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  return (
    lines
      .find((line) => line.startsWith(`${normalizedLabel}:`))
      ?.replace(`${normalizedLabel}:`, "")
      .trim() || ""
  );
}

function readLegacyVisibleGroupMatches(groupKey = "") {
  const normalizedGroupKey = String(groupKey || matchBridgeGroupKey || "").trim().toUpperCase();
  const legacyWindow = matchBridgeFrame?.contentWindow;
  if (!normalizedGroupKey || typeof legacyWindow?.eval !== "function") {
    return [];
  }
  try {
    const payload = legacyWindow.eval(
      `JSON.stringify((groupMatches[${JSON.stringify(normalizedGroupKey)}] || []).map((match) => ({ ...match })))`,
    );
    const parsed = JSON.parse(payload || "[]");
    const matches = Array.isArray(parsed) ? parsed : [];
    rememberGroupTeamMetasFromMatches(matches);
    return matches;
  } catch (error) {
    return [];
  }
}

function extractFlagCodeFromLegacyNode(node) {
  const image = node?.querySelector?.(".flag-icon");
  const source = String(image?.getAttribute("src") || "").trim();
  const sourceMatch = source.match(/\/([a-z-]{2,})\.(?:png|svg)(?:\?|$)/i);
  if (sourceMatch?.[1]) {
    return sourceMatch[1].toLowerCase();
  }
  return "";
}

function normalizeLegacyResultScoreValue(value, fallback = "-") {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }
  const normalized = String(value).trim();
  if (!normalized) {
    return fallback;
  }
  if (/^\d+$/.test(normalized)) {
    return normalized;
  }
  const numeric = Number(normalized);
  return Number.isFinite(numeric) ? String(numeric) : fallback;
}

function extractLegacyResultScore(match = {}, side = "home", fallback = "-") {
  const candidateKeys =
    side === "home"
      ? ["homeScore", "home_score", "homeGoals", "home_goals"]
      : ["awayScore", "away_score", "awayGoals", "away_goals"];
  for (const key of candidateKeys) {
    if (match?.[key] !== undefined && match?.[key] !== null && match?.[key] !== "") {
      return normalizeLegacyResultScoreValue(match[key], fallback);
    }
  }
  const nestedScore =
    side === "home"
      ? match?.score?.home ?? match?.score?.homeScore ?? match?.score?.[0]
      : match?.score?.away ?? match?.score?.awayScore ?? match?.score?.[1];
  if (nestedScore !== undefined && nestedScore !== null && nestedScore !== "") {
    return normalizeLegacyResultScoreValue(nestedScore, fallback);
  }
  return fallback;
}

function formatLegacyScorerMinute(value) {
  const normalized = String(value ?? "").trim();
  if (!normalized) {
    return "";
  }
  if (normalized.includes("'")) {
    return normalized;
  }
  return /^\d+(?:\+\d+)?$/.test(normalized) ? `${normalized}'` : normalized;
}

function formatLegacyScorerEntry(entry) {
  if (entry === null || entry === undefined) {
    return "";
  }
  if (typeof entry === "string") {
    return entry.trim();
  }
  if (typeof entry !== "object") {
    return String(entry).trim();
  }
  const directText = String(entry.display ?? entry.label ?? entry.text ?? "").trim();
  if (directText) {
    return directText;
  }
  const name = String(entry.player ?? entry.name ?? entry.scorer ?? entry.playerName ?? "").trim();
  const minute = formatLegacyScorerMinute(entry.minute ?? entry.time ?? entry.min ?? entry.goalTime ?? entry.goalMinute);
  if (name && minute) {
    return `${name} ${minute}`;
  }
  return name || minute || "";
}

function normalizeLegacyScorerList(value, side = "home", teamName = "", teamCode = "") {
  if (value === null || value === undefined || value === "") {
    return [];
  }
  if (Array.isArray(value)) {
    return value
      .flatMap((entry) => normalizeLegacyScorerList(entry, side, teamName, teamCode))
      .filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(/\n+|(?:\s*[,;]\s*)(?=[^\s])/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  }
  if (typeof value === "object") {
    const sideKeys = side === "home" ? ["home", "homeTeam", "homeScorers", "left"] : ["away", "awayTeam", "awayScorers", "right"];
    for (const key of sideKeys) {
      if (value[key] !== undefined) {
        return normalizeLegacyScorerList(value[key], side, teamName, teamCode);
      }
    }
    if (Array.isArray(value.items)) {
      return normalizeLegacyScorerList(value.items, side, teamName, teamCode);
    }
    if (Array.isArray(value.entries)) {
      return normalizeLegacyScorerList(value.entries, side, teamName, teamCode);
    }
    const entryText = formatLegacyScorerEntry(value);
    return entryText ? [entryText] : [];
  }
  return [];
}

function extractLegacyGoalEventScorers(goalEvents, side = "home", teamName = "", teamCode = "") {
  if (!Array.isArray(goalEvents)) {
    return [];
  }
  const normalizedTeamName = String(teamName || "").trim().toLowerCase();
  const normalizedTeamCode = String(teamCode || "").trim().toLowerCase();
  return goalEvents
    .filter((event) => {
      if (!event || typeof event !== "object") {
        return false;
      }
      if (event.side) {
        return String(event.side).trim().toLowerCase() === side;
      }
      if (event.isHome !== undefined) {
        return Boolean(event.isHome) === (side === "home");
      }
      if (event.teamCode) {
        return String(event.teamCode).trim().toLowerCase() === normalizedTeamCode;
      }
      if (event.team) {
        return String(event.team).trim().toLowerCase() === normalizedTeamName;
      }
      return false;
    })
    .map((event) => formatLegacyScorerEntry(event))
    .filter(Boolean);
}

function extractLegacyScorers(match = {}, side = "home") {
  const teamName = side === "home" ? match?.home : match?.away;
  const teamCode = side === "home" ? match?.homeCode : match?.awayCode;
  const directCandidates =
    side === "home"
      ? ["homeScorers", "home_scorers", "homeGoals", "home_goals"]
      : ["awayScorers", "away_scorers", "awayGoals", "away_goals"];
  for (const key of directCandidates) {
    if (match?.[key] !== undefined && match?.[key] !== null && match?.[key] !== "") {
      const entries = normalizeLegacyScorerList(match[key], side, teamName, teamCode);
      if (entries.length) {
        return entries;
      }
    }
  }
  const compoundCandidates = [match?.scorers, match?.goals];
  for (const candidate of compoundCandidates) {
    const entries = normalizeLegacyScorerList(candidate, side, teamName, teamCode);
    if (entries.length) {
      return entries;
    }
  }
  const goalEventEntries = extractLegacyGoalEventScorers(match?.goalEvents, side, teamName, teamCode);
  return goalEventEntries.length ? goalEventEntries : [];
}

function createGroupFixtureFlag(flagCode = "", teamLabel = "", ownerDocument = document) {
  const normalizedFlagCode = String(flagCode || "").trim().toLowerCase();
  if (!normalizedFlagCode) {
    return null;
  }
  const image = ownerDocument.createElement("img");
  image.className = "group-fixture-result-flag";
  image.src = `https://flagcdn.com/${normalizedFlagCode}.svg`;
  image.alt = `${String(teamLabel || "").trim() || "국가"} 국기`;
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 20;
  image.height = 14;
  return image;
}

function createGroupFixtureTeamCell(teamName = "", flagCode = "", side = "home", ownerDocument = document) {
  const meta = getGroupATeamMeta(teamName);
  const label = meta.ko || String(teamName || "").trim() || "-";
  const resolvedFlagCode = String(flagCode || meta.flag || "").trim().toLowerCase();
  const cell = createMatchResultsElement(
    ownerDocument,
    "div",
    `group-fixture-result-team group-fixture-result-team--${side}`,
  );
  const textNode = createMatchResultsElement(ownerDocument, "span", "group-fixture-result-team-label", label);
  const flagNode = createGroupFixtureFlag(resolvedFlagCode, label, ownerDocument);
  if (side === "home") {
    if (flagNode) {
      cell.append(flagNode);
    }
    cell.append(textNode);
  } else {
    cell.append(textNode);
    if (flagNode) {
      cell.append(flagNode);
    }
  }
  return cell;
}

function createGroupFixtureScorerColumn(entries = [], side = "home", ownerDocument = document) {
  const column = createMatchResultsElement(
    ownerDocument,
    "div",
    `group-fixture-scorers group-fixture-scorers--${side}`,
  );
  if (!entries.length) {
    const empty = createMatchResultsElement(
      ownerDocument,
      "span",
      "group-fixture-scorer-item group-fixture-scorer-item--empty",
      "",
    );
    empty.setAttribute("aria-hidden", "true");
    column.append(empty);
    return column;
  }
  column.append(
    ...entries.map((entry) => createMatchResultsElement(ownerDocument, "span", "group-fixture-scorer-item", entry)),
  );
  return column;
}

function buildGroupFixtureResultRow(result = {}, isActive = false, ownerDocument = document) {
  const item = createMatchResultsElement(ownerDocument, "article", "group-fixture-result-row");
  item.classList.toggle("is-active", Boolean(isActive));
  const scoreBlock = createMatchResultsElement(ownerDocument, "div", "group-fixture-result-score-block");
  const scoreLine = createMatchResultsElement(ownerDocument, "div", "group-fixture-result-score-line");
  scoreLine.append(
    createMatchResultsElement(ownerDocument, "span", "group-fixture-result-score-value", result.homeScore || "-"),
    createMatchResultsElement(ownerDocument, "span", "group-fixture-result-score-separator", ":"),
    createMatchResultsElement(ownerDocument, "span", "group-fixture-result-score-value", result.awayScore || "-"),
  );
  const scorerGrid = createMatchResultsElement(ownerDocument, "div", "group-fixture-result-scorer-grid");
  scorerGrid.append(
    createGroupFixtureScorerColumn(result.homeScorers, "home", ownerDocument),
    createGroupFixtureScorerColumn(result.awayScorers, "away", ownerDocument),
  );
  scoreBlock.append(scoreLine, scorerGrid);
  item.append(
    createMatchResultsElement(ownerDocument, "strong", "group-fixture-result-number", result.number || "-"),
    createMatchResultsElement(ownerDocument, "span", "group-fixture-result-date", result.dateLabel || "-"),
    createGroupFixtureTeamCell(result.homeTeam, result.homeFlagCode, "home", ownerDocument),
    scoreBlock,
    createGroupFixtureTeamCell(result.awayTeam, result.awayFlagCode, "away", ownerDocument),
  );
  item.setAttribute(
    "aria-label",
    `${result.number || ""} ${result.dateLabel || ""} ${result.homeTeam || ""} ${result.homeScore || "-"} 대 ${result.awayScore || "-"} ${result.awayTeam || ""}`.trim(),
  );
  return item;
}

function clearLegacyInlineGroupResults(legacyDocument = getLegacyGroupADocument()) {
  legacyDocument?.getElementById("wc26-inline-group-results-row")?.remove();
  legacyDocument?.getElementById("wc26-inline-group-results")?.remove();
  legacyDocument?.getElementById("wc26-inline-group-results-style")?.remove();
}

function ensureLegacyInlineGroupResultsStyle(legacyDocument) {
  if (!legacyDocument || legacyDocument.getElementById("wc26-inline-group-results-style")) {
    return;
  }
  const style = legacyDocument.createElement("style");
  style.id = "wc26-inline-group-results-style";
  style.textContent = `
#wc26-inline-group-results-row > td{
  padding:0 !important;
  border:none !important;
  background:transparent !important;
}
#wc26-inline-group-results{
  margin:0;
  padding:8px 0 0;
  border-top:1px solid rgba(103,255,216,0.14);
}
#wc26-inline-group-results .group-fixture-results-head{
  display:none;
}
#wc26-inline-group-results .group-fixture-results-list{
  display:flex;
  flex-direction:column;
}
#wc26-inline-group-results .group-fixture-result-row{
  display:grid;
  grid-template-columns:auto auto minmax(0,1.1fr) minmax(180px,220px) minmax(0,1.1fr);
  align-items:start;
  gap:12px 14px;
  padding:12px 4px;
  border-top:1px solid rgba(86,183,255,0.12);
  color:rgba(229,249,246,0.82);
}
#wc26-inline-group-results .group-fixture-result-row:last-child{
  border-bottom:1px solid rgba(86,183,255,0.12);
}
#wc26-inline-group-results .group-fixture-result-number{color:#67ffd8;font-size:12px;font-weight:900;}
#wc26-inline-group-results .group-fixture-result-date{color:rgba(214,242,240,0.64);font-size:11.5px;font-weight:700;}
#wc26-inline-group-results .group-fixture-result-team{
  display:inline-flex;
  align-items:center;
  gap:8px;
  min-width:0;
  color:#f4fffc;
  font-size:13px;
  font-weight:800;
  line-height:1.35;
}
#wc26-inline-group-results .group-fixture-result-team--away{justify-content:flex-end;text-align:right;}
#wc26-inline-group-results .group-fixture-result-team-label{
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
#wc26-inline-group-results .group-fixture-result-flag{
  width:18px;height:13px;flex:0 0 auto;border-radius:2px;box-shadow:0 0 0 1px rgba(255,255,255,0.12);
}
#wc26-inline-group-results .group-fixture-result-score-block{display:grid;grid-template-rows:auto auto;gap:6px;min-width:0;}
#wc26-inline-group-results .group-fixture-result-score-line{
  display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:8px;
}
#wc26-inline-group-results .group-fixture-result-score-value{color:#ffd9bd;font-size:15px;font-weight:900;line-height:1;}
#wc26-inline-group-results .group-fixture-result-score-value:first-child{text-align:left;}
#wc26-inline-group-results .group-fixture-result-score-value:last-child{text-align:right;}
#wc26-inline-group-results .group-fixture-result-score-separator{color:#ffd9bd;font-size:13px;font-weight:800;line-height:1;}
#wc26-inline-group-results .group-fixture-result-scorer-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;min-height:16px;}
#wc26-inline-group-results .group-fixture-scorers{display:flex;flex-direction:column;gap:3px;min-height:16px;}
#wc26-inline-group-results .group-fixture-scorers--away{align-items:flex-end;}
#wc26-inline-group-results .group-fixture-scorer-item{color:rgba(214,242,240,0.64);font-size:10.5px;font-weight:700;line-height:1.25;white-space:nowrap;}
#wc26-inline-group-results .group-fixture-scorer-item--empty{min-height:12px;}
@media (max-width: 900px){
  #wc26-inline-group-results .group-fixture-results-head{flex-direction:column;align-items:flex-start;}
  #wc26-inline-group-results .group-fixture-result-row{
    grid-template-columns:auto auto minmax(0,1fr) auto;
    grid-template-areas:"number date home home" "score score away away";
    gap:8px 10px;
  }
  #wc26-inline-group-results .group-fixture-result-number{grid-area:number;}
  #wc26-inline-group-results .group-fixture-result-date{grid-area:date;}
  #wc26-inline-group-results .group-fixture-result-team--home{grid-area:home;}
  #wc26-inline-group-results .group-fixture-result-team--away{grid-area:away;justify-content:flex-start;text-align:left;}
  #wc26-inline-group-results .group-fixture-result-score-block{grid-area:score;}
  #wc26-inline-group-results .group-fixture-scorer-item{white-space:normal;}
}
`;
  legacyDocument.head?.append(style);
}

function renderLegacyInlineGroupResults(results = []) {
  const legacyDocument = getLegacyGroupADocument();
  if (!legacyDocument || matchShellMode !== "group-stage" || matchBridgeGroupKey === "A") {
    clearLegacyInlineGroupResults(legacyDocument);
    return;
  }
  const lastStandingRow = legacyDocument.querySelector("#detailTable tbody .group-team-row:last-child");
  if (!lastStandingRow) {
    console.warn("[wc26] inline group results target missing", {
      shellMode: matchShellMode,
      groupKey: matchBridgeGroupKey,
      selectorTried: "#detailTable tbody .group-team-row:last-child",
    });
    clearLegacyInlineGroupResults(legacyDocument);
    return;
  }
  ensureLegacyInlineGroupResultsStyle(legacyDocument);
  const hostRow =
    legacyDocument.getElementById("wc26-inline-group-results-row") ||
    createMatchResultsElement(legacyDocument, "tr", "");
  hostRow.id = "wc26-inline-group-results-row";
  const hostCell =
    hostRow.querySelector("td") || createMatchResultsElement(legacyDocument, "td", "");
  hostCell.colSpan = 10;
  const shell =
    legacyDocument.getElementById("wc26-inline-group-results") ||
    createMatchResultsElement(legacyDocument, "div", "group-fixture-results");
  shell.id = "wc26-inline-group-results";
  const head =
    shell.querySelector(".group-fixture-results-head") ||
    createMatchResultsElement(legacyDocument, "div", "group-fixture-results-head");
  const title =
    head.querySelector("strong") || createMatchResultsElement(legacyDocument, "strong", "", "");
  const meta =
    head.querySelector("span") || createMatchResultsElement(legacyDocument, "span", "", "");
  title.textContent = `${matchBridgeGroupKey}조 경기 결과`;
  meta.textContent = results.length ? `${results.length}경기 자동 연동` : "";
  if (!title.parentNode) {
    head.append(title);
  }
  if (!meta.parentNode) {
    head.append(meta);
  }
  const list =
    shell.querySelector(".group-fixture-results-list") ||
    createMatchResultsElement(legacyDocument, "div", "group-fixture-results-list");
  list.replaceChildren(...results.map((result) => buildGroupFixtureResultRow(result, false, legacyDocument)));
  shell.replaceChildren(head, list);
  hostCell.replaceChildren(shell);
  hostRow.replaceChildren(hostCell);
  if (hostRow.previousElementSibling !== lastStandingRow || hostRow.parentElement !== lastStandingRow.parentElement) {
    lastStandingRow.after(hostRow);
  }
}

function readCurrentLegacyMatchResults() {
  const legacyDocument = getLegacyGroupADocument();
  const legacyMatches = readLegacyVisibleGroupMatches(matchBridgeGroupKey);
  const legacyMatchMap = new Map(
    legacyMatches.map((match) => [String(match?.number || "").trim(), match]),
  );
  const rows = Array.from(legacyDocument?.querySelectorAll(".schedule-match-row") || []).filter((row) => !row.hidden);
  return rows.map((row, index) => {
    const number = getCompactText(row.querySelector(".schedule-match-number-cell"), `M${index + 1}`);
    const rawMatch = legacyMatchMap.get(number) || {};
    const teams = Array.from(row.querySelectorAll(".vs-cell .team-side")).map((node) => getCompactText(node));
    const teamNodes = Array.from(row.querySelectorAll(".vs-cell .team-side"));
    const scoreText = getCompactText(row.querySelector(".match-score-chip"));
    const scoreMatch = scoreText.match(/(\d+)\s*-\s*(\d+)/);
    const dateDetail = readLegacyMatchResultDetail(row, "날짜");
    const localDate =
      String(rawMatch?.localDate || rawMatch?.date || "").trim() ||
      dateDetail.match(/현지\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/)?.[1] ||
      dateDetail.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)?.[0] ||
      "";
    const homeScore = extractLegacyResultScore(rawMatch, "home", scoreMatch?.[1] || "-");
    const awayScore = extractLegacyResultScore(rawMatch, "away", scoreMatch?.[2] || "-");
    const homeTeam = String(rawMatch?.home || teams[0] || "-").trim() || "-";
    const awayTeam = String(rawMatch?.away || teams[1] || "-").trim() || "-";
    const homeFlagCode = String(rawMatch?.homeCode || extractFlagCodeFromLegacyNode(teamNodes[0]) || "").trim().toLowerCase();
    const awayFlagCode = String(rawMatch?.awayCode || extractFlagCodeFromLegacyNode(teamNodes[1]) || "").trim().toLowerCase();
    rememberGroupTeamMeta(homeTeam, { flag: homeFlagCode });
    rememberGroupTeamMeta(awayTeam, { flag: awayFlagCode });
    return {
      index,
      number,
      localDate,
      dateLabel: formatMatchResultDateLabel(localDate),
      homeTeam,
      awayTeam,
      homeFlagCode,
      awayFlagCode,
      homeScore,
      awayScore,
      homeScorers: extractLegacyScorers(rawMatch, "home"),
      awayScorers: extractLegacyScorers(rawMatch, "away"),
      isPlayed: homeScore !== "-" && awayScore !== "-",
    };
  });
}

function getMatchResultsPanelHeading() {
  if (matchShellMode === "group-stage") {
    return `${matchBridgeGroupKey}조 경기 결과`;
  }
  if (matchShellMode === "bracket") {
    return `${WC26_MATCH_RESULT_STAGE_LABELS[matchBridgeKnockoutStage] || "토너먼트"} 경기 결과`;
  }
  return "경기 결과";
}

function getInlineAGroupResultsAnchor() {
  const rows = Array.from(matchGroupAFormStandings?.querySelectorAll("[data-standing-row='true']") || []);
  return rows.at(-1) || null;
}

function renderMatchResultsPanel() {
  if (!matchResultsShell || !matchResultsList || !matchResultsTitle || !matchResultsMeta) {
    return;
  }
  if (matchShellMode === "group-stage" && !matchGroupAExplicitSelectionApplied) {
    matchResultsShell.hidden = true;
    matchResultsShell.dataset.layout = "hidden";
    matchResultsList.replaceChildren();
    clearLegacyInlineGroupResults();
    return;
  }

  const results = readCurrentLegacyMatchResults();
  const shouldShowInline = shouldShowMatchResultsPanel();
  if (shouldShowInline) {
    const inlineAnchor = getInlineAGroupResultsAnchor();
    if (!inlineAnchor?.parentElement) {
      console.warn("[wc26] group match results target missing", {
        shellMode: matchShellMode,
        groupKey: matchBridgeGroupKey,
        selectorTried: "#match-group-a-form-standings [data-standing-row='true']:last-child",
      });
      matchResultsShell.hidden = true;
      matchResultsShell.dataset.layout = "hidden";
      matchResultsList.replaceChildren();
      clearLegacyInlineGroupResults();
      return;
    }
    if (matchResultsShell.previousElementSibling !== inlineAnchor || matchResultsShell.parentElement !== inlineAnchor.parentElement) {
      inlineAnchor.after(matchResultsShell);
    }
  }
  matchResultsShell.hidden = !shouldShowInline;
  matchResultsShell.dataset.layout = shouldShowInline ? "standings-inline" : "hidden";
  if (!shouldShowInline) {
    matchResultsList.replaceChildren();
    clearLegacyInlineGroupResults();
    return;
  }
  clearLegacyInlineGroupResults();
  matchResultsTitle.textContent = getMatchResultsPanelHeading();
  matchResultsMeta.textContent = results.length ? `${results.length}경기 자동 연동` : "legacy 경기 결과를 불러오는 중";

  if (!results.length) {
    renderGroupAEmpty(matchResultsList, "현재 선택된 경기 결과를 불러오는 중입니다.");
    return;
  }

  const activeIndex = matchShellMode === "group-stage" ? matchGroupAActiveMatchIndex : -1;
  matchResultsList.replaceChildren(
    ...results.map((result) => {
      const item = createGroupAElement("article", "group-fixture-result-row");
      item.classList.toggle("is-active", result.index === activeIndex);
      const scoreBlock = createGroupAElement("div", "group-fixture-result-score-block");
      const scoreLine = createGroupAElement("div", "group-fixture-result-score-line");
      scoreLine.append(
        createGroupAElement("span", "group-fixture-result-score-value", result.homeScore),
        createGroupAElement("span", "group-fixture-result-score-separator", ":"),
        createGroupAElement("span", "group-fixture-result-score-value", result.awayScore),
      );
      const scorerGrid = createGroupAElement("div", "group-fixture-result-scorer-grid");
      scorerGrid.append(
        createGroupFixtureScorerColumn(result.homeScorers, "home"),
        createGroupFixtureScorerColumn(result.awayScorers, "away"),
      );
      scoreBlock.append(scoreLine, scorerGrid);
      item.append(
        createGroupAElement("strong", "group-fixture-result-number", result.number),
        createGroupAElement("span", "group-fixture-result-date", result.dateLabel),
        createGroupFixtureTeamCell(result.homeTeam, result.homeFlagCode, "home"),
        scoreBlock,
        createGroupFixtureTeamCell(result.awayTeam, result.awayFlagCode, "away"),
      );
      item.setAttribute(
        "aria-label",
        `${result.number} ${result.dateLabel} ${result.homeTeam} ${result.homeScore} 대 ${result.awayScore} ${result.awayTeam}`,
      );
      return item;
    }),
  );
}

function queueMatchResultsPanelRefresh() {
  [0, 160, 420, 900].forEach((delay) => {
    window.setTimeout(() => {
      renderMatchResultsPanel();
    }, delay);
  });
}

function createGroupAMatchFeature(match = {}, totalMatches = 0, activeIndex = 0, onSelectMatch = null) {
  const feature = createGroupAElement("article", "group-a-match-feature group-a-match-row");
  feature.dataset.matchRow = "true";

  const matchup = createGroupAElement("div", "group-a-feature-matchup");
  matchup.append(createGroupAMatchTeam(match.home, "home"), createGroupAMatchLogo(), createGroupAMatchTeam(match.away, "away"));

  const info = createGroupAElement("div", "group-a-feature-info");
  const stadiumName = sanitizeGroupAStadiumName(match.stadium, "Mexico City Stadium");
  const { localTime, koreaTime } = normalizeGroupAMatchTimes(match);
  info.append(
    createGroupAElement("span", "", `KICK-OFF 현지시각 ${localTime} / 한국시각 ${koreaTime}`),
    createGroupAElement("strong", "", stadiumName),
  );

  const stadiumFrame = createGroupAElement("div", "group-a-feature-stadium-frame");
  const stadiumImagePath = resolveWC26StadiumImagePath(match.stadium, match.stadiumImage || WC26_GROUP_A_STADIUM_IMAGE_PATH || "");
  if (stadiumImagePath) {
    const stadiumImage = document.createElement("img");
    stadiumImage.src = stadiumImagePath;
    stadiumImage.alt = stadiumName;
    stadiumImage.loading = "eager";
    stadiumImage.decoding = "async";
    stadiumImage.fetchPriority = "high";
    stadiumImage.width = 1600;
    stadiumImage.height = 900;
    stadiumImage.draggable = false;
    stadiumFrame.append(stadiumImage);
  } else {
    stadiumFrame.dataset.assetMissing = "local-stadium-image";
    stadiumFrame.setAttribute("aria-label", "저장된 경기장 이미지 경로가 아직 없습니다");
  }

  feature.append(matchup, info, stadiumFrame, createGroupAMatchDots(totalMatches, activeIndex, onSelectMatch));
  return feature;
}

function createGroupAMatchCompactRow(match = {}, matchIndex = 0, onSelectMatch = null) {
  const row = createGroupAElement("article", "group-a-match-strip group-a-match-row");
  row.dataset.matchRow = "true";
  row.dataset.matchIndex = String(matchIndex);
  const stadiumName = sanitizeGroupAStadiumName(match.stadium, "경기장 미정");
  if (typeof onSelectMatch === "function") {
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.addEventListener("click", () => onSelectMatch(matchIndex));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelectMatch(matchIndex);
      }
    });
  }
  const timeBlock = createGroupAElement("div", "group-a-match-time");
  timeBlock.append(
    createGroupAElement("strong", "", match.number),
    createGroupAElement("span", "", match.date || "날짜 미정"),
    createGroupAElement("span", "", match.time || "시간 미정"),
  );

  const teamsBlock = createGroupAElement("div", "group-a-match-teams");
  teamsBlock.append(
    createGroupAElement("b", "", match.home),
    createGroupAElement("em", "", match.score || "vs"),
    createGroupAElement("b", "", match.away),
  );

  const venueBlock = createGroupAElement("div", "group-a-match-venue");
  venueBlock.append(
    createGroupAElement("span", "", match.city || "도시 미정"),
    createGroupAElement("strong", "", stadiumName),
    createGroupAElement("i", "", match.status || "예정"),
  );

  row.append(timeBlock, teamsBlock, venueBlock);
  return row;
}

function getGroupHeaderFlags(standings = [], matches = []) {
  const flags = [];
  const seen = new Set();
  const appendFlag = (teamName = "", flagCode = "") => {
    const meta = getGroupATeamMeta(teamName);
    const label = String(meta?.ko || teamName || "").trim();
    const code = String(flagCode || meta?.flag || "").trim().toLowerCase();
    if (!label || !code || seen.has(`${label}:${code}`)) {
      return;
    }
    seen.add(`${label}:${code}`);
    flags.push({ label, code });
  };
  standings.forEach((team) => appendFlag(team?.team, team?.flagCode));
  matches.forEach((match) => {
    appendFlag(match?.home, match?.homeCode);
    appendFlag(match?.away, match?.awayCode);
  });
  return flags.slice(0, 4);
}

function renderGroupAHeaderFlags(standings = [], matches = []) {
  if (!matchGroupAHeaderFlags) {
    return;
  }

  const flags = getGroupHeaderFlags(standings, matches);
  matchGroupAHeaderFlags.replaceChildren(
    ...flags.map((flag) => {
      const badge = createGroupAElement("span", "group-a-flag");
      badge.setAttribute("role", "img");
      badge.setAttribute("aria-label", `${flag.label} 국기`);
      badge.title = flag.label;

      const image = document.createElement("img");
      image.src = `https://flagcdn.com/${flag.code}.svg`;
      image.alt = `${flag.label} 국기`;
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 44;
      image.height = 30;
      badge.append(image);
      return badge;
    }),
  );
}

function traceGroupAEmptyInsertion(container, message, details = {}) {
  if (!GROUP_A_DIAGNOSTICS_ENABLED) {
    return;
  }
  try {
    const targetSelector =
      container === matchGroupAFormStandings
        ? "#match-group-a-form-standings"
        : container === matchGroupAFormMatches
          ? "#match-group-a-form-matches"
          : container?.id
            ? `#${container.id}`
            : "unknown";
    const visibleState = typeof getGroupAVisibleRenderState === "function" ? getGroupAVisibleRenderState() : {};
    const trace = {
      at: new Date().toISOString(),
      elapsedMs: Math.round(performance.now()),
      message,
      targetSelector,
      activeGroup: matchBridgeGroupKey,
      shellMode: matchShellMode,
      explicitSelectionApplied: matchGroupAExplicitSelectionApplied,
      details,
      visibleState,
      stack: String(new Error().stack || "")
        .split("\n")
        .slice(1, 8)
        .map((line) => line.trim()),
    };
    window.__GROUP_A_EMPTY_INSERT_TRACES = Array.isArray(window.__GROUP_A_EMPTY_INSERT_TRACES)
      ? window.__GROUP_A_EMPTY_INSERT_TRACES
      : [];
    window.__GROUP_A_EMPTY_INSERT_TRACES.push(trace);
    window.__GROUP_A_EMPTY_INSERT_TRACES = window.__GROUP_A_EMPTY_INSERT_TRACES.slice(-80);
    console.debug("[group-a-empty-trace]", trace);
  } catch (_error) {
    // Empty-state tracing must never affect the match schedule UI.
  }
}

function renderGroupAEmpty(container, message = "등록된 경기일정이 없습니다", details = {}) {
  traceGroupAEmptyInsertion(container, message, details);
  const empty = createGroupAElement("p", "group-a-newsuit-empty", message);
  empty.dataset.groupAEmpty = "true";
  container.replaceChildren(empty);
}

function isGroupAVisibleElement(element) {
  if (!element || element.closest("[hidden]")) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }
  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity || 1) !== 0;
}

function getGroupAVisibleRenderState() {
  const standingsRows = Array.from(
    document.querySelectorAll(
      "#match-group-a-form-standings [data-standing-row='true'], #match-group-a-form-standings .group-a-standings-row:not(.group-a-standings-row--head)",
    ),
  );
  const matchRows = Array.from(
    document.querySelectorAll(
      "#match-group-a-form-matches [data-match-row='true'], #match-group-a-form-matches .group-a-match-row, #match-group-a-form-matches .group-a-match-strip",
    ),
  );
  const emptyNodes = Array.from(document.querySelectorAll("#match-group-a-form-standings .group-a-newsuit-empty"));
  const visibleEmptyNodes = emptyNodes.filter(isGroupAVisibleElement);
  return {
    shellVisible: isGroupAVisibleElement(matchGroupAFormShell),
    standingsPanelSelector: "#match-group-a-form-shell .group-a-standings-panel",
    standingsRowSelector: "#match-group-a-form-standings [data-standing-row='true']",
    matchesPanelSelector: "#match-group-a-form-shell .group-a-matches-panel",
    matchRowSelector: "#match-group-a-form-matches [data-match-row='true']",
    emptySelector: "#match-group-a-form-standings .group-a-newsuit-empty",
    renderedStandingRows: standingsRows.length,
    renderedMatchRows: matchRows.length,
    visibleStandingRows: standingsRows.filter(isGroupAVisibleElement).length,
    visibleMatchRows: matchRows.filter(isGroupAVisibleElement).length,
    visibleEmptyText: visibleEmptyNodes.map((node) => getCompactText(node)).join(" / "),
    emptyTextVisible: visibleEmptyNodes.some((node) =>
      getCompactText(node).includes("A조 대진표 데이터가 아직 없습니다."),
    ),
  };
}

function validateGroupAVisibleRender(standings = [], matches = [], options = {}) {
  const state = getGroupAVisibleRenderState();

  if (!state.shellVisible || options.repairAttempted) {
    return state;
  }

  const shouldRepair =
    (standings.length > 0 && state.visibleStandingRows < Math.min(standings.length, 4)) ||
    (matches.length > 0 && state.visibleMatchRows < Math.min(matches.length, 6)) ||
    ((standings.length > 0 || matches.length > 0) && state.emptyTextVisible);

  if (!shouldRepair) {
    return state;
  }

  logGroupADiagnostic("visibleRender:repair", {
    activeGroup: matchBridgeGroupKey,
    standings: standings.length,
    matches: matches.length,
    state,
  });
  renderGroupAStandingsPanel(standings, {
    dataReady: true,
    matchesCount: matches.length,
  });
  renderGroupAMatchesPanel(matches, {
    dataReady: true,
  });

  const repairedState = getGroupAVisibleRenderState();
  return repairedState;
}

function readGroupAStandingsFromLegacy(legacyDocument) {
  const activeGroupKey = normalizeMatchGroupKey(matchBridgeGroupKey);
  const legacyWindow = matchBridgeFrame?.contentWindow;
  const legacyMatches = readLegacyVisibleGroupMatches(activeGroupKey);
  rememberGroupTeamMetasFromMatches(legacyMatches);
  logGroupADiagnostic("readGroupAStandings:start", {
    activeGroup: matchBridgeGroupKey,
    shellMode: matchShellMode,
    legacyReady: Boolean(legacyWindow && legacyDocument),
    hasCalculateGroupStandings: typeof legacyWindow?.calculateGroupStandings === "function",
    legacyDomRows: legacyDocument?.querySelectorAll("#detailTable.group-table tbody tr")?.length || 0,
  });
  try {
    if (typeof legacyWindow?.calculateGroupStandings === "function") {
      logGroupADiagnostic("calculateGroupStandings:call-from-parent", {
        group: activeGroupKey,
        activeGroup: matchBridgeGroupKey,
      });
      const standingsResult = legacyWindow.calculateGroupStandings(activeGroupKey);
      const items = Array.isArray(standingsResult?.items) ? standingsResult.items : [];
      logGroupADiagnostic("calculateGroupStandings:result-to-parent", {
        group: activeGroupKey,
        items: items.length,
        isReady: Boolean(standingsResult?.isReady),
      });
      if (items.length) {
        return items.map((team, index) => {
          const teamName = String(team.name || "").trim() || `Team ${index + 1}`;
          rememberGroupTeamMeta(teamName, {
            ko: String(team.label || "").trim(),
            flag: String(team.code || team.flag || "").trim().toLowerCase(),
          });
          return {
            rank: Number(team.rankInGroup || index + 1),
            team: teamName,
            flagCode: String(team.code || team.flag || getGroupATeamMeta(teamName).flag || "").trim().toLowerCase(),
            played: String(team.played ?? "0"),
            won: String(team.won ?? "0"),
            drawn: String(team.drawn ?? "0"),
            lost: String(team.lost ?? "0"),
            goalsFor: String(team.goalsFor ?? "0"),
            goalsAgainst: String(team.goalsAgainst ?? "0"),
            goalDifference: String(team.goalDifference ?? "0"),
            points: String(team.points ?? "0"),
            placement: `${team.rankInGroup || index + 1}위`,
          };
        });
      }
    }
  } catch (error) {
    logGroupADiagnostic("calculateGroupStandings:error", {
      group: activeGroupKey,
      message: error?.message || String(error),
    });
    // Fall back to the already-rendered legacy table when the calculation function is not reachable.
  }

  const fallbackRows = Array.from(legacyDocument?.querySelectorAll("#detailTable.group-table tbody tr") || []);
  logGroupADiagnostic("readGroupAStandings:fallback-dom", {
    activeGroup: matchBridgeGroupKey,
    rows: fallbackRows.length,
  });
  return fallbackRows.map((row, index) => {
    const cells = Array.from(row.children);
    const teamName = getCompactText(row.querySelector(".group-team-name"), getCompactText(cells[0]));
    const flagCode = extractFlagCodeFromLegacyNode(row);
    rememberGroupTeamMeta(teamName, { flag: flagCode });
    return {
      rank: index + 1,
      team: teamName,
      flagCode,
      played: getCompactText(cells[1], "0"),
      won: getCompactText(cells[2], "0"),
      drawn: getCompactText(cells[3], "0"),
      lost: getCompactText(cells[4], "0"),
      goalsFor: getCompactText(cells[5], "0"),
      goalsAgainst: getCompactText(cells[6], "0"),
      goalDifference: getCompactText(cells[7], "0"),
      points: getCompactText(cells[8], "0"),
      placement: getCompactText(cells[9], `${index + 1}위`),
    };
  });
}

function readGroupAMatchesFromLegacy(legacyDocument) {
  const rows = Array.from(legacyDocument?.querySelectorAll(".group-schedule-match-table .schedule-match-row") || []);
  const legacyMatches = readLegacyVisibleGroupMatches(matchBridgeGroupKey);
  const legacyMatchMap = new Map(
    legacyMatches.map((match) => [String(match?.number || "").trim(), match]),
  );
  logGroupADiagnostic("readGroupAMatches", {
    activeGroup: matchBridgeGroupKey,
    legacyReady: Boolean(legacyDocument),
    rows: rows.length,
  });
  return rows.map((row) => {
    const number = getCompactText(row.querySelector(".schedule-match-number-cell"), "M-");
    const rawMatch = legacyMatchMap.get(number) || {};
    const teams = Array.from(row.querySelectorAll(".vs-cell .team-side")).map((node) => getCompactText(node));
    const teamNodes = Array.from(row.querySelectorAll(".vs-cell .team-side"));
    const mainText = getCompactText(row);
    const detailLines = String(row.textContent || "")
      .split(/\n+/)
      .map((line) => line.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    const readDetail = (label) =>
      detailLines
      .find((line) => line.startsWith(`${label}:`))
      ?.replace(`${label}:`, "")
      .trim() || "";
    const date = readDetail("날짜");
    const localDate =
      String(rawMatch?.localDate || rawMatch?.date || "").trim() ||
      date.match(/현지\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/)?.[1] ||
      date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)?.[0] ||
      "";
    const time = readDetail("시간");
    const city = readDetail("도시");
    const stadium = sanitizeGroupAStadiumName(
      row.querySelector(".schedule-stadium-caption span")?.textContent ||
        row.querySelector(".schedule-stadium-photo")?.getAttribute("alt") ||
        getCompactText(row.querySelector(".schedule-stadium-cell")) ||
        readDetail("경기장"),
      "경기장 미정",
    );
    const homeTeam = String(rawMatch?.home || teams[0] || "TBD").trim() || "TBD";
    const awayTeam = String(rawMatch?.away || teams[1] || "TBD").trim() || "TBD";
    const homeCode = String(rawMatch?.homeCode || extractFlagCodeFromLegacyNode(teamNodes[0]) || "").trim().toLowerCase();
    const awayCode = String(rawMatch?.awayCode || extractFlagCodeFromLegacyNode(teamNodes[1]) || "").trim().toLowerCase();
    rememberGroupTeamMeta(homeTeam, { flag: homeCode });
    rememberGroupTeamMeta(awayTeam, { flag: awayCode });
    return {
      number,
      home: homeTeam,
      away: awayTeam,
      homeCode,
      awayCode,
      score: getCompactText(row.querySelector(".vs-cell span:not(.team-side)"), "vs"),
      date,
      localDate,
      time,
      localTime:
        String(rawMatch?.localTime || "").trim() ||
        time.match(/현지\s*(\d{2}:\d{2})/i)?.[1] ||
        "--:--",
      koreaTime:
        String(rawMatch?.koreaTime || "").trim() ||
        time.match(/한국\s*(\d{2}:\d{2}(?:\s*[+-]\d+)?)?/i)?.[1] ||
        "--:--",
      city,
      stadium,
      stadiumImage: resolveWC26StadiumImagePath(
        stadium,
        row.querySelector(".schedule-stadium-photo")?.getAttribute("src") || "",
      ),
      status: /기록완료|결과\s*저장\s*완료/.test(mainText) ? "기록완료" : "예정",
    };
  });
}

function prepareLegacyGroupAView(reason = "data-ready") {
  const legacyWindow = matchBridgeFrame?.contentWindow;
  const legacyDocument = legacyWindow?.document;
  const activeGroupKey = normalizeMatchGroupKey(matchBridgeGroupKey);
  if (!legacyWindow || !legacyDocument || matchShellMode !== "group-stage") {
    if (matchShellMode === "group-stage") {
      loadLazyIframe(matchBridgeFrame);
    }
    return { legacyDocument, legacyReady: Boolean(legacyWindow && legacyDocument) };
  }

  try {
    legacyWindow.showBracketStage?.("group");
    const targetGroupButton = Array.from(legacyDocument.querySelectorAll("#groupCol .item")).find(
      (node) => node.textContent.trim() === `Group ${activeGroupKey}`,
    );
    logGroupADiagnostic("prepareLegacyGroupAView:showGroup", {
      reason,
      targetButtonFound: Boolean(targetGroupButton),
      targetButtonText: targetGroupButton?.textContent?.trim() || "",
    });
    legacyWindow.showGroup?.(activeGroupKey, targetGroupButton);
    matchGroupAExplicitSelectionApplied = true;
    syncLegacyGroupAStructureSkin();
  } catch (error) {
    logGroupADiagnostic("prepareLegacyGroupAView:error", {
      reason,
      message: error?.message || String(error),
    });
  }

  return { legacyDocument, legacyReady: true };
}

function syncLegacyStadiumPhotoSuppression(legacyDocument = getLegacyGroupADocument()) {
  if (!legacyDocument) {
    return;
  }
  const shouldSuppress = matchShellMode === "group-stage";
  legacyDocument.querySelectorAll(".schedule-stadium-photo").forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      return;
    }
    if (!image.dataset.wc26OriginalSrc) {
      image.dataset.wc26OriginalSrc = image.getAttribute("src") || "";
    }
    if (!image.dataset.wc26OriginalSrcset) {
      image.dataset.wc26OriginalSrcset = image.getAttribute("srcset") || "";
    }
    if (shouldSuppress) {
      image.removeAttribute("src");
      image.removeAttribute("srcset");
      return;
    }
    if (!image.getAttribute("src") && image.dataset.wc26OriginalSrc) {
      image.setAttribute("src", image.dataset.wc26OriginalSrc);
    }
    if (!image.getAttribute("srcset") && image.dataset.wc26OriginalSrcset) {
      image.setAttribute("srcset", image.dataset.wc26OriginalSrcset);
    }
  });
}

function readGroupADataSnapshot({ forceLegacyGroup = false, reason = "snapshot" } = {}) {
  const prepared = forceLegacyGroup ? prepareLegacyGroupAView(reason) : {};
  const legacyDocument = prepared.legacyDocument || getLegacyGroupADocument();
  syncLegacyStadiumPhotoSuppression(legacyDocument);
  syncGroupAStandingsObserver(legacyDocument);
  const dataReady = Boolean(legacyDocument && matchGroupAExplicitSelectionApplied);
  const standings = readGroupAStandingsFromLegacy(legacyDocument);
  const matches = readGroupAMatchesFromLegacy(legacyDocument);
  return {
    legacyDocument,
    dataReady,
    standings,
    matches,
    hasCompleteData: standings.length >= 4 && matches.length >= 6,
  };
}

// [Z-TEST-START] 3위순위 임시 테스트
function scheduleZThirdPlaceTestRefresh() {
  window.clearTimeout(matchZThirdPlaceTestRefreshTimer);
  matchZThirdPlaceTestRefreshTimer = window.setTimeout(() => {
    renderZThirdPlaceTest({ force: true });
  }, 80);
}

function getZThirdPlaceTeamsFromCurrentGroupOrder() {
  const legacyWindow = matchBridgeFrame?.contentWindow;
  const legacyDocument = getLegacyGroupADocument();
  if (!legacyWindow || !legacyDocument) {
    return {
      legacyReady: false,
      rows: [],
    };
  }

  syncGroupAStandingsObserver(legacyDocument);
  if (typeof legacyWindow.calculateGroupStandings !== "function") {
    return {
      legacyReady: false,
      rows: [],
    };
  }

  const groupKeys = "ABCDEFGHIJKL".split("");
  const rows = groupKeys.map((groupKey, index) => {
    try {
      const standingsResult = legacyWindow.calculateGroupStandings(groupKey);
      const items = Array.isArray(standingsResult?.items) ? standingsResult.items : [];
      const thirdTeam = items[2] || null;
      const resolvedTeamName = String(thirdTeam?.name || "").trim() || "-";
      const resolvedFlagCode = String(thirdTeam?.code || "").trim().toLowerCase();
      if (resolvedTeamName && resolvedTeamName !== "-") {
        rememberGroupTeamMeta(resolvedTeamName, {
          flag: resolvedFlagCode,
        });
      }
      return {
        overallRank: index + 1,
        originalGroupIndex: index,
        group: groupKey,
        team: resolvedTeamName,
        flagCode: resolvedFlagCode,
        played: String(thirdTeam?.played ?? "-"),
        won: String(thirdTeam?.won ?? "-"),
        drawn: String(thirdTeam?.drawn ?? "-"),
        lost: String(thirdTeam?.lost ?? "-"),
        goalsFor: String(thirdTeam?.goalsFor ?? "-"),
        goalsAgainst: String(thirdTeam?.goalsAgainst ?? "-"),
        goalDifference: String(thirdTeam?.goalDifference ?? "-"),
        points: String(thirdTeam?.points ?? "-"),
        ...getZThirdPlaceManualMeta({
          team: resolvedTeamName,
          flagCode: resolvedFlagCode,
        }),
      };
    } catch (_error) {
      return {
        overallRank: index + 1,
        originalGroupIndex: index,
        group: groupKey,
        team: "-",
        flagCode: "",
        played: "-",
        won: "-",
        drawn: "-",
        lost: "-",
        goalsFor: "-",
        goalsAgainst: "-",
        goalDifference: "-",
        points: "-",
        fairPlayScore: null,
        fifaRanking: null,
        fairPlaySourceDate: "",
        fifaRankingSourceDate: "",
      };
    }
  });

  return {
    legacyReady: true,
    rows: sortZThirdPlaceTestRows(rows),
  };
}

function renderZThirdPlaceTest(options = {}) {
  if (!matchZThirdPlaceTestShell || !matchZThirdPlaceTestTableWrap) {
    return;
  }

  const shouldShow = matchShellMode === "third-place-ranking";
  matchZThirdPlaceTestShell.hidden = !shouldShow;
  if (matchZThirdPlaceTestHeaderTitle) {
    matchZThirdPlaceTestHeaderTitle.textContent = "3위 순위";
  }

  if (!shouldShow) {
    matchZThirdPlaceTestTableWrap.replaceChildren();
    return;
  }

  loadLazyIframe(matchBridgeFrame);
  const snapshot = getZThirdPlaceTeamsFromCurrentGroupOrder();
  if (!snapshot.legacyReady) {
    renderGroupAEmpty(matchZThirdPlaceTestTableWrap, "3위 순위 데이터를 불러오는 중입니다.", {
      functionName: "renderZThirdPlaceTest",
      branch: "loading",
      force: Boolean(options.force),
    });
    return;
  }

  if (!snapshot.rows.length) {
    renderGroupAEmpty(matchZThirdPlaceTestTableWrap, "표시할 3위 순위 팀이 없습니다.", {
      functionName: "renderZThirdPlaceTest",
      branch: "empty",
      force: Boolean(options.force),
    });
    return;
  }

  const tableScroll = createGroupAElement("div", "z-third-place-test-table-scroll");
  const table = document.createElement("table");
  table.className = "z-third-place-test-table";
  table.setAttribute("aria-label", "3위 순위 표");

  const colgroup = document.createElement("colgroup");
  [
    "z-third-place-rank-col",
    "z-third-place-group-col",
    "z-third-place-flag-col",
    "z-third-place-country-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
    "z-third-place-stat-col",
  ].forEach((className) => {
    const col = document.createElement("col");
    col.className = className;
    colgroup.append(col);
  });

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["순위", "조", "국기", "국가", "경기수", "승점", "승", "무", "패", "득점", "실점", "득실", "페어플레이 점수", "FIFA 랭킹"].forEach((label, index) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    if (index >= 4) {
      cell.className = "z-third-place-stat-heading";
    }
    cell.textContent = label;
    headRow.append(cell);
  });
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  snapshot.rows.forEach((team, index) => {
    const row = document.createElement("tr");
    const isQualified = index < 8;
    row.className = [
      "z-third-place-test-row",
      isQualified ? "z-third-place-qualified group-a-rank-advance" : "z-third-place-eliminated group-a-rank-out",
    ].join(" ");

    const appendTextCell = (value, className = "") => {
      const cell = document.createElement("td");
      if (className) {
        cell.className = className;
      }
      cell.textContent = value;
      row.append(cell);
    };

    appendTextCell(`${team.overallRank}`, "z-third-place-test-rank");
    appendTextCell(`${team.group}조`, "z-third-place-test-group");

    const flagCell = document.createElement("td");
    flagCell.className = "z-third-place-test-flag";
    flagCell.append(createZThirdPlaceTestTeamCell(team.team, team.flagCode, { includeName: false }));
    row.append(flagCell);

    const teamCell = document.createElement("td");
    teamCell.className = "z-third-place-test-team z-third-place-country-cell";
    teamCell.append(createZThirdPlaceTestTeamCell(team.team, team.flagCode, { includeFlag: false }));
    row.append(teamCell);

    appendTextCell(team.played, "z-third-place-stat-cell");
    appendTextCell(team.points, "z-third-place-stat-cell z-third-place-test-points");
    appendTextCell(team.won, "z-third-place-stat-cell");
    appendTextCell(team.drawn, "z-third-place-stat-cell");
    appendTextCell(team.lost, "z-third-place-stat-cell");
    appendTextCell(team.goalsFor, "z-third-place-stat-cell");
    appendTextCell(team.goalsAgainst, "z-third-place-stat-cell");
    appendTextCell(formatZThirdPlaceTestSignedMetric(team.goalDifference), "z-third-place-stat-cell");
    appendTextCell(formatZThirdPlaceTestManualMetric(team.fairPlayScore), "z-third-place-stat-cell z-third-place-test-fair-play");
    appendTextCell(formatZThirdPlaceTestManualMetric(team.fifaRanking), "z-third-place-stat-cell z-third-place-test-fifa-ranking");
    tbody.append(row);
  });

  table.append(colgroup, thead, tbody);
  tableScroll.append(table);
  matchZThirdPlaceTestTableWrap.replaceChildren(tableScroll);
}
// [Z-TEST-END] 3위순위 임시 테스트

function scheduleGroupADataReadyRetry(reason = "zero-data") {
  if (matchGroupADataReadyRetryActive) {
    return;
  }

  matchGroupADataReadyRetryActive = true;
  const retryToken = ++matchGroupADataReadyRetryToken;
  logGroupADiagnostic("groupADataReadyRetry:start", {
    reason,
    retryToken,
  });

  ensureGroupALegacyBridgeReady(`data-ready-retry:${reason}`).then(() => {
    if (retryToken !== matchGroupADataReadyRetryToken) {
      return;
    }
    if (matchShellMode !== "group-stage") {
      matchGroupADataReadyRetryActive = false;
      return;
    }
    GROUP_A_DATA_READY_RETRY_DELAYS.forEach((delay, index) => {
    window.setTimeout(() => {
      const isLastAttempt = index === GROUP_A_DATA_READY_RETRY_DELAYS.length - 1;
      if (retryToken !== matchGroupADataReadyRetryToken) {
        return;
      }
      if (matchShellMode !== "group-stage") {
        matchGroupADataReadyRetryActive = false;
        return;
      }

      const snapshot = readGroupADataSnapshot({
        forceLegacyGroup: true,
        reason: `retry-${index + 1}:${reason}`,
      });
      logGroupADiagnostic("groupADataReadyRetry:read", {
        reason,
        attempt: index + 1,
        isLastAttempt,
        standings: snapshot.standings.length,
        matches: snapshot.matches.length,
        dataReady: snapshot.dataReady,
        hasCompleteData: snapshot.hasCompleteData,
      });

      if (!snapshot.hasCompleteData && !isLastAttempt) {
        return;
      }

      matchGroupADataReadyRetryActive = false;
      matchGroupADataReadyRetryToken += 1;
      renderGroupANewsuitForm({
        force: true,
        fromDataReadyRetry: true,
        retryComplete: isLastAttempt && !snapshot.hasCompleteData,
        dataReady: snapshot.dataReady || snapshot.hasCompleteData,
        standings: snapshot.standings,
        matches: snapshot.matches,
      });
    }, delay);
  });
  });
}

function hasGroupAVisibleSuccess() {
  const state = getGroupAVisibleRenderState();
  return {
    state,
    ok: state.visibleStandingRows >= 4 && state.visibleMatchRows >= 6 && !state.emptyTextVisible,
  };
}

function runGroupAFirstScreenForceAttempt(token, attempt = 1, reason = "first-screen") {
  const delay = GROUP_A_FIRST_SCREEN_FORCE_DELAYS[Math.max(0, attempt - 1)] || 100;
  window.setTimeout(() => {
    if (token !== matchGroupAFirstScreenForceToken) {
      return;
    }
    if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
      return;
    }

    logGroupADiagnostic("groupAFirstScreenForce:attempt", {
      reason,
      attempt,
      delay,
    });

    const snapshot = readGroupADataSnapshot({
      forceLegacyGroup: true,
      reason: `first-screen-force-${attempt}:${reason}`,
    });
    renderGroupANewsuitForm({
      force: true,
      fromFirstScreenForce: true,
      retryComplete: attempt >= GROUP_A_FIRST_SCREEN_FORCE_DELAYS.length && !snapshot.hasCompleteData,
      dataReady: snapshot.dataReady || snapshot.hasCompleteData,
      standings: snapshot.standings,
      matches: snapshot.matches,
    });

    const visible = hasGroupAVisibleSuccess();
    logGroupADiagnostic("groupAFirstScreenForce:visible-check", {
      reason,
      attempt,
      standingsRows: visible.state.visibleStandingRows,
      matchRows: visible.state.visibleMatchRows,
      emptyVisible: visible.state.emptyTextVisible,
      ok: visible.ok,
    });

    if (visible.ok) {
      matchGroupAFirstScreenForceToken += 1;
      return;
    }

    if (attempt < GROUP_A_FIRST_SCREEN_FORCE_DELAYS.length) {
      runGroupAFirstScreenForceAttempt(token, attempt + 1, reason);
    }
  }, delay);
}

function scheduleGroupAFirstScreenForceRender(reason = "group-stage-entry") {
  if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
    return;
  }
  const token = ++matchGroupAFirstScreenForceToken;
  logGroupADiagnostic("groupAFirstScreenForce:start", {
    reason,
    token,
  });
  window.requestAnimationFrame(() => {
    ensureGroupALegacyBridgeReady(`first-screen:${reason}`).then(() => {
      if (token !== matchGroupAFirstScreenForceToken) {
        return;
      }
      runGroupAFirstScreenForceAttempt(token, 1, reason);
    });
  });
}

function renderGroupAStandingsPanel(standings = [], options = {}) {
  if (!matchGroupAFormStandings) {
    return;
  }
  if (!standings.length) {
    const dataReady = Boolean(options.dataReady);
    const matchesCount = Number(options.matchesCount || 0);
    if (!dataReady || matchesCount > 0) {
      logGroupADiagnostic("renderGroupAStandingsPanel:loading-not-empty", {
        activeGroup: matchBridgeGroupKey,
        shellMode: matchShellMode,
        dataReady,
        matchesCount,
      });
      renderGroupAEmpty(matchGroupAFormStandings, `${getCurrentGroupShellLabel()} 데이터를 불러오는 중입니다.`, {
        functionName: "renderGroupAStandingsPanel",
        branch: "loading-not-empty",
        standingsCount: standings.length,
        matchesCount,
        dataReady,
      });
      return;
    }
    logGroupADiagnostic("renderGroupAStandingsPanel:empty", {
      activeGroup: matchBridgeGroupKey,
      shellMode: matchShellMode,
      dataReady,
      matchesCount,
      message: `${getCurrentGroupShellLabel()} 순위표 데이터가 아직 없습니다.`,
    });
    renderGroupAEmpty(matchGroupAFormStandings, `${getCurrentGroupShellLabel()} 순위표 데이터가 아직 없습니다.`, {
      functionName: "renderGroupAStandingsPanel",
      branch: "empty",
      standingsCount: standings.length,
      matchesCount,
      dataReady,
    });
    return;
  }
  logGroupADiagnostic("renderGroupAStandingsPanel:render", {
    activeGroup: matchBridgeGroupKey,
    standings: standings.length,
    teams: standings.map((team) => team.team),
  });

  const header = createGroupAElement("div", "group-a-standings-row group-a-standings-row--head");
  ["순위", "팀명", "경기", "승", "무", "패", "득점", "실점", "득실", "승점"].forEach((label) => {
    header.append(createGroupAElement("span", "", label));
  });

  const rows = standings.map((team) => {
    const rankClass =
      team.rank <= 2 ? "group-a-rank-advance" : team.rank === 3 ? "group-a-rank-third" : "group-a-rank-out";
    const row = createGroupAElement(
      "div",
      `group-a-standings-row group-a-standings-row--rank-${team.rank} ${rankClass}`,
    );
    row.dataset.standingRow = "true";
    row.append(createGroupAElement("span", "", `${team.rank}`), createGroupATeamCell(team.team));
    [
      team.played,
      team.won,
      team.drawn,
      team.lost,
      team.goalsFor,
      team.goalsAgainst,
      team.goalDifference,
      team.points,
    ].forEach((value, index) => {
      row.append(createGroupAElement("span", index === 7 ? "points" : "", value));
    });
    return row;
  });

  const table = createGroupAElement("div", "group-a-standings-table");
  table.replaceChildren(header, ...rows);
  matchGroupAFormStandings.replaceChildren(table);
}

function scheduleGroupANewsuitRefresh() {
  window.clearTimeout(matchGroupARefreshTimer);
  matchGroupARefreshTimer = window.setTimeout(() => {
    renderGroupANewsuitForm();
  }, 80);
}

function queueGroupAInitialHydration() {
  if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
    return;
  }
  const hydrationToken = ++matchGroupAInitialHydrationToken;
  logGroupADiagnostic("queueGroupAInitialHydration:start", {
    activeGroup: matchBridgeGroupKey,
    shellMode: matchShellMode,
    hydrationToken,
  });
  [0, 180, 420, 900, 1500].forEach((delay) => {
    window.setTimeout(() => {
      if (hydrationToken !== matchGroupAInitialHydrationToken) {
        return;
      }
      if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
        return;
      }
      logGroupADiagnostic("queueGroupAInitialHydration:tick", {
        activeGroup: matchBridgeGroupKey,
        delay,
        hydrationToken,
      });
      applyMatchShellSelection();
      renderGroupANewsuitForm({ force: true });
    }, delay);
  });
}

function syncGroupAStandingsObserver(legacyDocument) {
  const target = legacyDocument?.getElementById("detailCol") || legacyDocument?.body || null;
  if (!target || matchGroupAObserverTarget === target) {
    return;
  }
  matchGroupAObserver?.disconnect();
  matchGroupAObserverTarget = target;
  matchGroupAObserver = new MutationObserver(() => {
    syncLegacyStadiumPhotoSuppression(target.ownerDocument);
    // [Z-TEST-START] 3위순위 임시 테스트
    if (matchShellMode === "third-place-ranking") {
      scheduleZThirdPlaceTestRefresh();
      return;
    }
    // [Z-TEST-END] 3위순위 임시 테스트
    if (matchShellMode === "group-stage") {
      scheduleGroupANewsuitRefresh();
    }
  });
  matchGroupAObserver.observe(target, { childList: true, subtree: true, characterData: true });
}

function renderGroupAMatchesPanel(matches = [], options = {}) {
  if (!matchGroupAFormMatches) {
    return;
  }
  if (!matches.length) {
    matchGroupARenderedMatches = [];
    clearGroupAAutoSlideTimer();
    clearGroupAMatchFeatureAnimationState();
    matchGroupAFeaturePendingTransition = null;
    if (!options.dataReady) {
      renderGroupAEmpty(matchGroupAFormMatches, `${getCurrentGroupShellLabel()} 경기일정을 불러오는 중입니다.`, {
        functionName: "renderGroupAMatchesPanel",
        branch: "loading-not-empty",
        matchesCount: matches.length,
        dataReady: Boolean(options.dataReady),
      });
      return;
    }
    renderGroupAEmpty(matchGroupAFormMatches, `등록된 ${getCurrentGroupShellLabel()} 경기일정이 없습니다`, {
      functionName: "renderGroupAMatchesPanel",
      branch: "empty",
      matchesCount: matches.length,
      dataReady: Boolean(options.dataReady),
    });
    return;
  }

  const requestedActiveIndex = Number.isInteger(options.activeIndex) ? options.activeIndex : matchGroupAActiveMatchIndex;
  const activeIndex = normalizeGroupAActiveIndex(requestedActiveIndex, matches);
  matchGroupARenderedMatches = matches;
  matchGroupAActiveMatchIndex = activeIndex;
  const featuredMatch = matches[activeIndex] || matches[0];
  const onSelectMatch = (nextIndex) => {
    const normalizedIndex = normalizeGroupAActiveIndex(nextIndex, matches);
    const direction = normalizedIndex === matchGroupAActiveMatchIndex ? 0 : normalizedIndex > matchGroupAActiveMatchIndex ? 1 : -1;
    setGroupAActiveMatchIndex(normalizedIndex, {
      matches,
      restartTimer: true,
      animateDirection: direction,
    });
  };
  syncGroupAMatchFeature(featuredMatch, matches.length, activeIndex, onSelectMatch, {
    animateDirection: options.animateDirection || 0,
  });
}

function renderGroupANewsuitForm(options = {}) {
  if (!matchGroupAFormShell) {
    return;
  }
  bindGroupAMatchFeatureGestures();
  const shouldShow = matchShellMode === "group-stage";
  const legacyReady = Boolean(matchBridgeFrame?.contentWindow?.document);
  logGroupADiagnostic("renderGroupANewsuitForm:start", {
    activeGroup: matchBridgeGroupKey,
    shellMode: matchShellMode,
    shouldShow,
    legacyReady,
    force: Boolean(options.force),
    explicitSelectionApplied: matchGroupAExplicitSelectionApplied,
  });
  matchGroupAFormShell.hidden = !shouldShow;
  if (shouldShow) {
    const currentGroupLabel = getCurrentGroupShellLabel();
    if (matchGroupAHeaderTitle) {
      matchGroupAHeaderTitle.textContent = `Group ${matchBridgeGroupKey}`;
    }
    if (matchGroupAHeaderFlags) {
      matchGroupAHeaderFlags.setAttribute("aria-label", `${currentGroupLabel} 참가국 국기`);
    }
    matchGroupAFormShell.setAttribute("aria-label", `${currentGroupLabel} 뉴슈트 경기일정`);
  }
  if (matchBridgeFrameShell) {
    matchBridgeFrameShell.hidden = !shouldShowVisibleMatchBridgeFrame();
  }
  if (matchGroupAFormStatus) {
    matchGroupAFormStatus.hidden = true;
    matchGroupAFormStatus.setAttribute("aria-hidden", "true");
    matchGroupAFormStatus.replaceChildren();
  }
  if (matchGroupAEngineToggle) {
    matchGroupAEngineToggle.textContent = matchGroupAEngineVisible ? "기존 입력 엔진 닫기" : "기존 입력 엔진 열기";
    matchGroupAEngineToggle.hidden = true;
    matchGroupAEngineToggle.setAttribute("aria-hidden", "true");
  }
  if (!shouldShow) {
    matchGroupARenderedMatches = [];
    clearGroupAAutoSlideTimer();
    clearGroupAMatchFeatureAnimationState();
    matchGroupAFeaturePendingTransition = null;
    renderMatchResultsPanel();
    return;
  }

  const suppliedStandings = Array.isArray(options.standings) ? options.standings : null;
  const suppliedMatches = Array.isArray(options.matches) ? options.matches : null;
  if (!matchGroupAExplicitSelectionApplied && !suppliedStandings && !suppliedMatches && !options.force) {
    renderGroupAStandingsPanel([], {
      dataReady: false,
      matchesCount: 0,
    });
    renderGroupAMatchesPanel([], {
      dataReady: false,
    });
    matchResultsShell.hidden = true;
    matchResultsShell.dataset.layout = "hidden";
    matchResultsList.replaceChildren();
    clearLegacyInlineGroupResults();
    return;
  }
  const snapshot =
    suppliedStandings && suppliedMatches
      ? {
          dataReady: Boolean(options.dataReady),
          standings: suppliedStandings,
          matches: suppliedMatches,
          hasCompleteData: suppliedStandings.length >= 4 && suppliedMatches.length >= 6,
        }
      : readGroupADataSnapshot({
          forceLegacyGroup: Boolean(options.force),
          reason: options.force ? "render-force" : "render",
        });
  const dataReady = Boolean(options.dataReady ?? snapshot.dataReady);
  const standings = snapshot.standings;
  const matches = enrichGroupAMatches(snapshot.matches);
  renderGroupAHeaderFlags(standings, matches);
  matchGroupARenderedMatches = matches;
  const hasCompleteData = standings.length >= 4 && matches.length >= 6;
  const retryComplete = Boolean(options.retryComplete);
  const shouldRetryBeforeEmpty = !hasCompleteData && !retryComplete && !options.fromDataReadyRetry;
  const completedCount = matches.filter((match) => match.status === "기록완료").length;
  logGroupADiagnostic("renderGroupANewsuitForm:data", {
    activeGroup: matchBridgeGroupKey,
    standings: standings.length,
    teams: standings.length,
    matches: matches.length,
    completedCount,
    dataReady,
    force: Boolean(options.force),
    hasCompleteData,
    retryComplete,
    shouldRetryBeforeEmpty,
  });

  if (shouldRetryBeforeEmpty) {
    renderGroupAStandingsPanel(standings, {
      dataReady: false,
      matchesCount: matches.length,
    });
    renderGroupAMatchesPanel(matches, {
      dataReady: false,
    });
    scheduleGroupADataReadyRetry("render-zero-data");
    const visibleState = validateGroupAVisibleRender(standings, matches, {
      phase: "renderGroupANewsuitForm:retry-pending",
    });
    logGroupADiagnostic("renderGroupANewsuitForm:visible-dom", visibleState);
    return;
  }

  renderGroupAStandingsPanel(standings, {
    dataReady: dataReady || retryComplete,
    matchesCount: matches.length,
  });
  preloadWC26StadiumImages(matches, matchGroupAActiveMatchIndex);
  renderGroupAMatchesPanel(matches, {
    dataReady: dataReady || retryComplete,
  });
  const visibleState = validateGroupAVisibleRender(standings, matches, {
    phase: "renderGroupANewsuitForm",
  });
  logGroupADiagnostic("renderGroupANewsuitForm:visible-dom", visibleState);
  renderMatchResultsPanel();
  ensureGroupAAutoSlide();
}

function syncMatchShellUi() {
  setMatchShellButtonState(matchShellMode);
  setMatchGroupButtonState(matchBridgeGroupKey);
  setMatchKnockoutButtonState(matchBridgeKnockoutStage);
  setMatchSquadButtonState(matchBridgeSquadKey);
  if (matchGroupToolbar) {
    matchGroupToolbar.hidden = matchShellMode !== "group-stage";
  }
  if (matchKnockoutToolbar) {
    matchKnockoutToolbar.hidden = matchShellMode !== "bracket";
  }
  if (matchSquadToolbar) {
    matchSquadToolbar.hidden = matchShellMode !== "squad";
  }
  if (matchSquadEmptyShell) {
    matchSquadEmptyShell.hidden = matchShellMode !== "squad";
  }
  renderMatchSquadShell();
  if (matchBridgeFrameShell) {
    matchBridgeFrameShell.hidden = !shouldShowVisibleMatchBridgeFrame();
  }
  syncLegacyGroupAStructureSkin();
  renderGroupANewsuitForm();
  // [Z-TEST-START] 3위순위 임시 테스트
  renderZThirdPlaceTest();
  // [Z-TEST-END] 3위순위 임시 테스트
  renderMatchResultsPanel();
}

function applyMatchShellSelection() {
  const legacyWindow = matchBridgeFrame?.contentWindow;
  const legacyDocument = legacyWindow?.document;
  logGroupADiagnostic("applyMatchShellSelection:start", {
    shellMode: matchShellMode,
    activeGroup: matchBridgeGroupKey,
    legacyReady: Boolean(legacyWindow && legacyDocument),
  });

  if (!legacyWindow || !legacyDocument) {
    logGroupADiagnostic("applyMatchShellSelection:skip-no-legacy", {
      shellMode: matchShellMode,
      activeGroup: matchBridgeGroupKey,
    });
    return;
  }

  try {
    if (matchShellMode === "squad") {
      setSquadBridgeSection("squad");
      const targetSquadButton = Array.from(legacyDocument.querySelectorAll("#groupASquadCol .item")).find((node) => {
        const targetLabel = WC26_SQUAD_DISPLAY_LABELS[matchBridgeSquadKey] || "";
        return (
          node.textContent.trim() === targetLabel ||
          (matchBridgeSquadKey === "southAfrica" && node.textContent.trim() === "남아프리카 공화국")
        );
      });
      legacyWindow.showGroupASquad?.(matchBridgeSquadKey, targetSquadButton);
      syncLegacyGroupAStructureSkin();
      syncLegacyStadiumPhotoSuppression(legacyDocument);
      renderGroupANewsuitForm();
      queueMatchResultsPanelRefresh();
      return;
    }

    if (typeof legacyWindow.toggleBracket === "function") {
      legacyWindow.toggleBracket();
    }

    if (matchShellMode === "group-stage") {
      legacyWindow.showBracketStage?.("group");
      const targetGroupButton = Array.from(legacyDocument.querySelectorAll("#groupCol .item")).find(
        (node) => node.textContent.trim() === `Group ${matchBridgeGroupKey}`,
      );
      logGroupADiagnostic("legacy showGroup:call", {
        group: matchBridgeGroupKey,
        targetButtonFound: Boolean(targetGroupButton),
        targetButtonText: targetGroupButton?.textContent?.trim() || "",
      });
      legacyWindow.showGroup?.(matchBridgeGroupKey, targetGroupButton);
      matchGroupAExplicitSelectionApplied = true;
      syncLegacyGroupAStructureSkin();
      syncLegacyStadiumPhotoSuppression(legacyDocument);
      renderGroupANewsuitForm({ force: true });
      queueMatchResultsPanelRefresh();
      return;
    }

    if (matchShellMode === "third-place-ranking") {
      legacyWindow.showBracketStage?.("thirdPlaceRanking");
      syncLegacyGroupAStructureSkin();
      syncLegacyStadiumPhotoSuppression(legacyDocument);
      // [Z-TEST-START] 3위순위 임시 테스트
      renderZThirdPlaceTest({ force: true });
      // [Z-TEST-END] 3위순위 임시 테스트
      queueMatchResultsPanelRefresh();
      return;
    }

    if (matchShellMode === "bracket") {
      queueMatchResultsPanelRefresh();
      if (matchBridgeFrameShell) {
        matchBridgeFrameShell.hidden = true;
      }
      return;
    }
  } catch (error) {
    logGroupADiagnostic("applyMatchShellSelection:error", {
      shellMode: matchShellMode,
      activeGroup: matchBridgeGroupKey,
      message: error?.message || String(error),
    });
    // Same-origin direct bridge hydration is best-effort only.
  }
}

function setMatchShellMode(mode = "group-stage", options = {}) {
  const previousMode = matchShellMode;
  const previousGroup = matchBridgeGroupKey;
  logGroupADiagnostic("setMatchShellMode:input", {
    mode,
    options,
    previousMode,
    previousGroup,
  });
  matchShellMode = normalizeMatchShellMode(mode);

  if (options.groupKey) {
    matchBridgeGroupKey = normalizeMatchGroupKey(options.groupKey);
  } else if (matchShellMode === "group-stage" && !WC26_MATCH_GROUP_KEYS.includes(normalizeMatchGroupKey(matchBridgeGroupKey))) {
    matchBridgeGroupKey = "A";
  }

  if (options.knockoutStage) {
    matchBridgeKnockoutStage = normalizeKnockoutStage(options.knockoutStage);
  } else if (matchShellMode === "bracket" && !WC26_MATCH_KNOCKOUT_STAGE_KEYS.includes(normalizeKnockoutStage(matchBridgeKnockoutStage))) {
    matchBridgeKnockoutStage = "round32";
  }

  if (matchShellMode === "squad" && previousMode !== "squad") {
    matchBridgeSquadKey = "korea";
  }
  const groupContextChanged = previousMode !== matchShellMode || previousGroup !== matchBridgeGroupKey;
  if (groupContextChanged) {
    clearGroupAAutoSlideTimer();
    clearGroupAMatchFeatureAnimationState();
    matchGroupAFeaturePendingTransition = null;
    matchGroupAActiveMatchIndex = 0;
    matchGroupARenderedMatches = [];
  }
  if (!(matchShellMode === "group-stage" && matchBridgeGroupKey === "A")) {
    matchGroupAEngineVisible = false;
    matchGroupAInitialHydrationToken += 1;
    matchGroupAExplicitSelectionApplied = false;
  } else {
    matchGroupAExplicitSelectionApplied = false;
  }
  logGroupADiagnostic("setMatchShellMode:normalized", {
    shellMode: matchShellMode,
    activeGroup: matchBridgeGroupKey,
    previousMode,
  });

  syncMatchShellUi();

  if (matchShellMode === "squad") {
    setSquadBridgeSection("squad");
  } else if (matchShellMode === "group-stage") {
    setMatchMapBridgeSection("match-schedule");
  } else {
    setMatchMapBridgeSection("bracket");
  }

  [80, 220, 480].forEach((delay) => {
    window.setTimeout(() => {
      applyMatchShellSelection();
    }, delay);
  });

  if (matchShellMode === "group-stage" && matchBridgeGroupKey === "A") {
    queueGroupAInitialHydration();
    scheduleGroupAFirstScreenForceRender(options.force ? "forced-group-stage-entry" : "group-stage-entry");
  }
}

function setMapBridgeButtonState(sectionId = "map") {
  const normalized = normalizeMapBridgeSection(sectionId);
  mapBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mapBridgeNav === normalized);
  });
}

function postMatchMapBridgeNavigation(frame, sectionId = "match-schedule") {
  if (!loadLazyIframe(frame)) {
    return;
  }
  frame?.contentWindow?.postMessage(
    {
      type: WC26_MATCH_MAP_BRIDGE_MESSAGE.navigate,
      section: String(sectionId || "").trim(),
    },
    "*",
  );
}

function postSquadBridgeNavigation(frame, sectionId = "squad") {
  if (!loadLazyIframe(frame)) {
    return;
  }
  frame?.contentWindow?.postMessage(
    {
      type: WC26_SQUAD_BRIDGE_MESSAGE.navigate,
      section: normalizeSquadBridgeSection(sectionId),
    },
    "*",
  );
}

function setMatchMapBridgeSection(sectionId = "match-schedule") {
  matchBridgeSection = normalizeMatchBridgeSection(sectionId);
  setMatchBridgeButtonState(matchBridgeSection);
  postMatchMapBridgeNavigation(matchBridgeFrame, matchBridgeSection);
  if (matchMapBridgeSummaryState) {
    applyMatchMapBridgeSummary(matchMapBridgeSummaryState);
  }
}

function setSquadBridgeSection(sectionId = "squad") {
  squadBridgeSection = normalizeSquadBridgeSection(sectionId);
  matchBridgeSection = squadBridgeSection;
  setMatchBridgeButtonState(squadBridgeSection);
  postSquadBridgeNavigation(matchBridgeFrame, squadBridgeSection);
  if (squadBridgeSummaryState) {
    applySquadBridgeSummary(squadBridgeSummaryState);
  }
}

function applyMapStadiumSelection() {
  if (mapBridgeSection !== "stadiums") {
    return;
  }
  const legacyWindow = mapBridgeFrame?.contentWindow;
  const legacyDocument = legacyWindow?.document;
  const normalizedKey = String(mapBridgeSelectedStadiumKey || "").trim();
  if (!legacyWindow || !legacyDocument || !normalizedKey) {
    return;
  }
  try {
    const targetButton = Array.from(legacyDocument.querySelectorAll("#mexicoStadiumCol .item")).find(
      (node) => String(node.getAttribute("onclick") || "").includes(`'${normalizedKey}'`),
    );
    legacyWindow.showMexicoStadium?.(normalizedKey, targetButton);
  } catch (_error) {
    // Same-origin direct bridge hydration is best-effort only.
  }
}

function setMapBridgeSection(sectionId = "map") {
  mapBridgeSection = normalizeMapBridgeSection(sectionId);
  mapBridgeReady = false;
  mapBridgeFrameShell?.classList.remove("is-ready");
  if (mapBridgeLoading) {
    mapBridgeLoading.textContent = "legacy map bridge loading...";
  }
  setMapBridgeButtonState(mapBridgeSection);
  setMapCardTabState(mapBridgeSection);
  syncMapBridgeShellVisibility();
  if (mapBridgeSection === "stadiums") {
    renderMapStadiumTabs();
    renderMapStadiumCards(mapBridgeCountryKey);
  }
  postMatchMapBridgeNavigation(mapBridgeFrame, mapBridgeSection);
  queueMapBridgeReadyFallback(mapBridgeSection);
}

function applyMatchMapBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeMatchMapBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  matchMapBridgeSummaryState = normalizedSummary;

  const matchMeta = document.querySelector("#match-bridge-meta");
  const mapMeta = document.querySelector("#map-bridge-meta");
  const bracketPanelSummary = document.querySelector("#panel-bracket .utility-copy");
  const mapPanelSummary = document.querySelector("#panel-map .utility-copy");
  const latestMatchItems = normalizedSummary.latestItems
    .filter((item) => String(item?.type || "").trim() === "match")
    .map((item) => String(item?.title || "").trim())
    .filter(Boolean)
    .slice(0, 2);
  const latestMapItems = normalizedSummary.latestItems
    .filter((item) => String(item?.type || "").trim() === "map")
    .map((item) => String(item?.title || "").trim())
    .filter(Boolean)
    .slice(0, 2);
  const representativeStadium = String(normalizedSummary.currentStadium.title || "").trim();
  const matchSummaryText = normalizedSummary.todayMatchCount
    ? `오늘 ${normalizedSummary.todayMatchCount}경기`
    : `전체 ${normalizedSummary.matchCount}경기`;
  const stadiumSummaryText = normalizedSummary.stadiumCount
    ? `경기장 ${normalizedSummary.stadiumCount}개`
    : matchMapBridgePanelDefaults.stadiumMeta;
  const mapSummaryText = normalizedSummary.mapPlaceCount
    ? `저장 장소 ${normalizedSummary.mapPlaceCount}개`
    : stadiumSummaryText;
  const hasSummaryData =
    normalizedSummary.matchCount > 0 ||
    normalizedSummary.stadiumCount > 0 ||
    normalizedSummary.mapPlaceCount > 0 ||
    latestMatchItems.length > 0 ||
    latestMapItems.length > 0;

  if (matchMeta) {
    matchMeta.textContent = "";
    matchMeta.hidden = true;
    matchMeta.setAttribute("aria-hidden", "true");
  }

  if (mapMeta) {
    const mapMetaParts = [stadiumSummaryText];
    if (normalizedSummary.mapPlaceCount > 0) {
      mapMetaParts.push(`MAP ${normalizedSummary.mapPlaceCount}개`);
    }
    if (normalizedSummary.currentStadium.title) {
      mapMetaParts.push(normalizedSummary.currentStadium.title);
    }
    mapMeta.textContent = hasSummaryData ? mapMetaParts.join(" / ") : matchMapBridgePanelDefaults.mapMeta;
  }

  if (bracketPanelSummary) {
    bracketPanelSummary.textContent = hasSummaryData
      ? `${matchSummaryText}${latestMatchItems.length ? ` / ${latestMatchItems.join(" / ")}` : ""}`
      : matchMapBridgePanelDefaults.bracketPanelSummary;
  }

  if (mapPanelSummary) {
    const nextMapSummary = [];
    if (normalizedSummary.mapPlaceCount > 0) {
      nextMapSummary.push(mapSummaryText);
    } else if (normalizedSummary.stadiumCount > 0) {
      nextMapSummary.push(stadiumSummaryText);
    }
    if (latestMapItems.length) {
      nextMapSummary.push(latestMapItems.join(" / "));
    } else if (representativeStadium) {
      nextMapSummary.push(representativeStadium);
    } else if (normalizedSummary.mapPlaceCount > 0) {
      nextMapSummary.push(`region ${normalizedSummary.regionPlaceCount} / lodging ${normalizedSummary.lodgingPlaceCount}`);
    }
    mapPanelSummary.textContent =
      hasSummaryData && nextMapSummary.length
        ? nextMapSummary.join(" / ")
        : matchMapBridgePanelDefaults.mapPanelSummary;
  }

  if (normalizedSummary.currentStadium.title) {
    if (!mapBridgeSelectedStadiumKey && normalizedSummary.currentStadium.key) {
      mapBridgeSelectedStadiumKey = normalizedSummary.currentStadium.key;
    }
    window.WC26_CURRENT_STADIUM = {
      stadiumName: normalizedSummary.currentStadium.title,
      city: normalizedSummary.currentStadium.city,
      matchDate:
        normalizedSummary.mapPlaceCount > 0
          ? `MAP ${normalizedSummary.mapPlaceCount}개`
          : `${normalizedSummary.stadiumCount}개 경기장`,
      stadiumImage: normalizedSummary.currentStadium.imagePath,
    };
    renderStadiumPanel(window.WC26_CURRENT_STADIUM);
    renderTopbarStatusInfo();
  }

  const normalizedUpcomingMatches = Array.isArray(normalizedSummary.upcomingMatches) ? normalizedSummary.upcomingMatches : [];
  dailyMatchSummaryRequested = false;
  window.WC26_MATCH_SCHEDULE_DATA = normalizedUpcomingMatches;
  window.WC26_DAILY_MATCH_CAROUSEL?.refresh?.();

  if (normalizedUpcomingMatches.length && matchShellMode === "group-stage" && matchBridgeGroupKey === "A") {
    window.setTimeout(() => {
      renderGroupANewsuitForm({
        force: matchGroupAExplicitSelectionApplied,
        fromDataReadyRetry: true,
        retryComplete: true,
      });
    }, 0);
  }

  const directStadiumItems =
    mapBridgeFrame?.contentWindow && typeof mapBridgeFrame.contentWindow.getWC26LegacyStadiumTabs === "function"
      ? mapBridgeFrame.contentWindow.getWC26LegacyStadiumTabs()
      : [];
  if (mapBridgeSection === "stadiums") {
    renderMapStadiumTabs();
    renderMapStadiumCards(mapBridgeCountryKey);
    setMapStadiumButtonState(mapBridgeCountryKey);
  } else {
    mapStadiumToolbar?.replaceChildren();
    mapStadiumCatalogGrid?.replaceChildren();
    if (mapStadiumCatalogEmpty) {
      mapStadiumCatalogEmpty.hidden = true;
    }
  }
  if (Array.isArray(directStadiumItems) && directStadiumItems.length) {
    syncMainMapStadiumTabs(directStadiumItems);
  } else {
    renderMainStadiumCarousel(collectMainStadiumCarouselItems({ summary: normalizedSummary }));
  }
  setMapCardTabState(mapBridgeSection);
  syncMapBridgeShellVisibility();
}

function applySquadBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeSquadBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  squadBridgeSummaryState = normalizedSummary;

  const matchMeta = document.querySelector("#match-bridge-meta");
  const squadPanelSummary = document.querySelector("#panel-squad .utility-copy");
  const latestTeams = normalizedSummary.latestItems
    .map((item) => String(item?.title || "").trim())
    .filter(Boolean)
    .slice(0, 2);
  const hasSummaryData =
    normalizedSummary.groupCount > 0 || normalizedSummary.teamCount > 0 || normalizedSummary.playerCount > 0 || latestTeams.length > 0;
  const summaryText = `선수단 ${normalizedSummary.groupCount}개 조 / ${normalizedSummary.teamCount}개국 / ${normalizedSummary.playerCount}명`;
  const detailText = latestTeams.length ? `${summaryText} / ${latestTeams.join(" / ")}` : summaryText;

  if (matchMeta && matchBridgeSection === "squad") {
    matchMeta.textContent = "";
    matchMeta.hidden = true;
    matchMeta.setAttribute("aria-hidden", "true");
  }

  if (squadPanelSummary) {
    squadPanelSummary.textContent = hasSummaryData ? detailText : squadBridgePanelDefaults.squadPanelSummary;
  }
}

function normalizeEquipmentBridgeSection(sectionId = "") {
  const normalized = String(sectionId || "").trim().toLowerCase();
  return ["equipment-summary", "personal-summary", "equipment-usage", "carnet"].includes(normalized)
    ? normalized
    : "equipment-summary";
}

function captureEquipmentBridgePanelDefaults() {
  return {
    cards: Array.from(document.querySelectorAll("#field-equipment-summary-panel .field-equipment-card span")).map(
      (node) => node.textContent || "",
    ),
    title: document.querySelector("#personal-equipment-title")?.textContent || "개인장비",
    lines: Array.from(document.querySelectorAll("#personal-equipment-detail .personal-equipment-detail-body p")).map(
      (node) => node.textContent || "",
    ),
  };
}

function normalizeEquipmentBridgeSummaryText(value = "") {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeEquipmentBridgeHtml(value = "") {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeEquipmentBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const equipmentSummary =
    payload.equipmentSummary && typeof payload.equipmentSummary === "object" ? payload.equipmentSummary : {};

  return {
    selectedDate: String(payload.selectedDate || "").trim(),
    equipmentSummary: {
      equipmentItems: Array.isArray(equipmentSummary.equipmentItems) ? equipmentSummary.equipmentItems : [],
      sharedEquipmentCount: Number(equipmentSummary.sharedEquipmentCount || 0),
      assignedEquipmentCount: Number(equipmentSummary.assignedEquipmentCount || 0),
      assignedMemberCount: Number(equipmentSummary.assignedMemberCount || 0),
      activeMemberCount: Number(equipmentSummary.activeMemberCount || 0),
      activeTvuCount: Number(equipmentSummary.activeTvuCount || 0),
      activeTrsCount: Number(equipmentSummary.activeTrsCount || 0),
    },
    memberEquipmentSummaries: Array.isArray(payload.memberEquipmentSummaries) ? payload.memberEquipmentSummaries : [],
    activeTvuList: Array.isArray(payload.activeTvuList) ? payload.activeTvuList : [],
    activeTrsList: Array.isArray(payload.activeTrsList) ? payload.activeTrsList : [],
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildEquipmentBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedDate: summary.selectedDate || "",
    equipmentSummary: summary.equipmentSummary || {},
    memberEquipmentSummaries: Array.isArray(summary.memberEquipmentSummaries) ? summary.memberEquipmentSummaries : [],
    activeTvuList: Array.isArray(summary.activeTvuList) ? summary.activeTvuList : [],
    activeTrsList: Array.isArray(summary.activeTrsList) ? summary.activeTrsList : [],
  });
}

function ensureEquipmentBridgeShell() {
  if (equipmentBridgeFrame) {
    return;
  }

  const fieldOpsBody = document.querySelector("#view-field-ops .field-ops-body");
  if (!fieldOpsBody) {
    return;
  }

  fieldOpsBody.classList.add("field-ops-body--bridge", "equipment-ops-shell-body");
  fieldOpsBody.closest("#view-field-ops")?.classList.add("equipment-ops-shell-view");
  fieldOpsBody.closest(".detail-panel")?.classList.add("equipment-ops-shell");

  const memberButtonsHtml = WC26_EQUIPMENT_BRIDGE_MEMBER_ORDER.map(
    (crewName) =>
      `<button type="button" class="equipment-bridge-member-tab" data-equipment-bridge-member="${escapeEquipmentBridgeHtml(crewName)}">${escapeEquipmentBridgeHtml(crewName)}</button>`,
  ).join("");

  const bridgePanel = document.createElement("section");
  bridgePanel.className = "ops-panel equipment-bridge-panel equipment-bridge-panel--flush equipment-new-suit-panel";
  bridgePanel.id = "equipment-bridge-panel";
  bridgePanel.innerHTML = `
    <div class="schedule-bridge-body">
      <div class="equipment-bridge-topbar">
        <div class="schedule-bridge-toolbar" aria-label="equipment bridge navigation">
          <button type="button" class="schedule-bridge-button is-active" data-equipment-bridge-nav="equipment-summary">장비종합</button>
          <button type="button" class="schedule-bridge-button" data-equipment-bridge-nav="personal-summary">개인장비</button>
          <button type="button" class="schedule-bridge-button" data-equipment-bridge-nav="carnet">까르네</button>
        </div>
        <div class="equipment-bridge-controls">
          <div class="equipment-bridge-search" id="equipment-bridge-search" hidden>
            <input
              type="search"
              class="equipment-bridge-search-input"
              id="equipment-bridge-search-input"
              placeholder="장비 검색"
              aria-label="장비 검색"
            />
            <button type="button" class="equipment-bridge-search-clear" id="equipment-bridge-search-clear" aria-label="검색 초기화">×</button>
          </div>
          <div class="equipment-bridge-action-toolbar" id="equipment-bridge-action-toolbar" hidden aria-label="장비 액션"></div>
        </div>
      </div>
      <div class="equipment-bridge-member-tabs" id="equipment-bridge-member-tabs" hidden aria-label="개인장비 선택">
        ${memberButtonsHtml}
      </div>
      <div class="schedule-bridge-frame-shell equipment-bridge-frame-shell" id="equipment-bridge-frame-shell">
        <div class="schedule-bridge-loading" id="equipment-bridge-loading">legacy equipment bridge loading...</div>
        <iframe
          class="schedule-bridge-frame"
          id="equipment-bridge-frame"
          data-src="./legacy-schedule/?v=${WC26_BRIDGE_VERSION}"
          src=""
          title="legacy equipment bridge"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;

  fieldOpsBody.prepend(bridgePanel);
  equipmentBridgeFrame = bridgePanel.querySelector("#equipment-bridge-frame");
  equipmentBridgeFrameShell = bridgePanel.querySelector("#equipment-bridge-frame-shell");
  equipmentBridgeLoading = bridgePanel.querySelector("#equipment-bridge-loading");
  equipmentBridgeButtons = Array.from(bridgePanel.querySelectorAll("[data-equipment-bridge-nav]"));
  equipmentBridgeActionToolbar = bridgePanel.querySelector("#equipment-bridge-action-toolbar");
  equipmentBridgeSearchShell = bridgePanel.querySelector("#equipment-bridge-search");
  equipmentBridgeSearchInput = bridgePanel.querySelector("#equipment-bridge-search-input");
  equipmentBridgeSearchClearButton = bridgePanel.querySelector("#equipment-bridge-search-clear");
  equipmentBridgeMemberTabShell = bridgePanel.querySelector("#equipment-bridge-member-tabs");
  equipmentBridgeMemberButtons = Array.from(bridgePanel.querySelectorAll("[data-equipment-bridge-member]"));

  equipmentBridgeSearchInput?.addEventListener("input", () => {
    equipmentBridgeSearchQuery = String(equipmentBridgeSearchInput.value || "");
    syncEquipmentBridgeSearchShell();
    applyEquipmentBridgeSearchFilter();
  });

  equipmentBridgeSearchClearButton?.addEventListener("click", () => {
    equipmentBridgeSearchQuery = "";
    if (equipmentBridgeSearchInput) {
      equipmentBridgeSearchInput.value = "";
      equipmentBridgeSearchInput.focus();
    }
    syncEquipmentBridgeSearchShell();
    applyEquipmentBridgeSearchFilter();
  });
}

function syncEquipmentBridgeEmbeddedSkin() {
  const legacyDocument = equipmentBridgeFrame?.contentDocument || equipmentBridgeFrame?.contentWindow?.document || null;
  if (!legacyDocument?.body) {
    return;
  }
  legacyDocument.body.classList.add(WC26_EQUIPMENT_BRIDGE_EMBEDDED_CLASS);
  ensureEquipmentBridgeActionObserver();
  queueEquipmentBridgeActionToolbarSync();
}

function markEquipmentBridgeReady(sectionId = equipmentBridgeSection, options = {}) {
  equipmentBridgeReady = true;
  equipmentBridgeFrameShell?.classList.add("is-ready");
  if (equipmentBridgeLoading) {
    equipmentBridgeLoading.textContent = "";
  }
  setEquipmentBridgeButtonState(sectionId || equipmentBridgeSection);
  if (options.member) {
    setEquipmentBridgeSelectedCrew(options.member);
    setEquipmentBridgeMemberTabState(options.member);
  }
  syncEquipmentBridgeEmbeddedSkin();
  queueEquipmentBridgeActionToolbarSync();
  applyEquipmentBridgeSearchFilter();
}

function isEquipmentBridgeTargetReady(sectionId = equipmentBridgeSection) {
  const legacyDocument = getEquipmentBridgeLegacyDocument();
  if (!legacyDocument?.body) {
    return false;
  }
  const normalized = normalizeEquipmentBridgeSection(sectionId);
  const detailCol = legacyDocument.getElementById("detailCol");
  const detailTable = legacyDocument.getElementById("detailTable");
  if (!isLegacyBridgeElementVisible(detailCol) || !detailTable) {
    return false;
  }
  const detailMode = String(detailCol.dataset?.equipmentBridgeMode || "").trim();
  if (normalized === "personal-summary") {
    return detailMode === "personal" && detailTable.classList.contains("equipment-table") && detailTable.innerHTML.trim().length > 0;
  }
  if (normalized === "carnet") {
    return detailMode === "carnet" && Boolean(legacyDocument.querySelector(".carnet-list-panel, .equipment-carnet-card, #equipmentCarnetTitleInput"));
  }
  return detailMode === "shared" && detailTable.classList.contains("equipment-table") && detailTable.innerHTML.trim().length > 0;
}

function markEquipmentBridgeReadyFromDocument(sectionId = equipmentBridgeSection, options = {}) {
  const legacyDocument = getEquipmentBridgeLegacyDocument();
  if (!legacyDocument?.body) {
    return false;
  }
  syncEquipmentBridgeEmbeddedSkin();
  if (!isEquipmentBridgeTargetReady(sectionId)) {
    return false;
  }
  markEquipmentBridgeReady(sectionId, options);
  return true;
}

function queueEquipmentBridgeReadyFallback(sectionId = equipmentBridgeSection, options = {}, delays = [160, 420, 900, 1600]) {
  delays.forEach((delay) => {
    window.setTimeout(() => {
      if (equipmentBridgeReady) {
        return;
      }
      markEquipmentBridgeReadyFromDocument(sectionId, options);
    }, delay);
  });
}

function setEquipmentBridgeButtonState(sectionId = "equipment-summary") {
  const normalized = normalizeEquipmentBridgeSection(sectionId);
  equipmentBridgeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.equipmentBridgeNav === normalized);
  });
}

function setEquipmentBridgeMemberTabState(selectedCrew = "") {
  const normalizedCrew = String(selectedCrew || equipmentBridgeSelectedCrew || "").trim();
  equipmentBridgeMemberButtons.forEach((button) => {
    const crewName = String(button.dataset.equipmentBridgeMember || "").trim();
    button.classList.toggle("is-active", Boolean(normalizedCrew) && crewName === normalizedCrew);
  });
}

function setEquipmentBridgeMemberTabsVisibility(sectionId = "equipment-summary") {
  const shouldShow = normalizeEquipmentBridgeSection(sectionId) === "personal-summary";
  if (equipmentBridgeMemberTabShell) {
    equipmentBridgeMemberTabShell.hidden = !shouldShow;
  }
  if (shouldShow) {
    setEquipmentBridgeMemberTabState();
  }
}

function normalizeEquipmentBridgeSearchText(value = "") {
  return String(value || "").trim().toLowerCase();
}

function syncEquipmentBridgeSearchShell() {
  const shouldShow = equipmentBridgeSection === "equipment-summary";
  if (equipmentBridgeSearchShell) {
    equipmentBridgeSearchShell.hidden = !shouldShow;
  }
  if (equipmentBridgeSearchClearButton) {
    equipmentBridgeSearchClearButton.hidden = !normalizeEquipmentBridgeSearchText(equipmentBridgeSearchQuery);
  }
}

function collectEquipmentBridgeRowText(row) {
  if (!row) {
    return "";
  }
  const textParts = [];
  const plainText = String(row.textContent || "").trim();
  if (plainText) {
    textParts.push(plainText);
  }
  row.querySelectorAll("input, textarea, select").forEach((field) => {
    if (!field) {
      return;
    }
    const tagName = String(field.tagName || "").toLowerCase();
    if (tagName === "select") {
      const selectedOption = field.options?.[field.selectedIndex];
      const optionText = String(selectedOption?.textContent || field.value || "").trim();
      if (optionText) {
        textParts.push(optionText);
      }
      return;
    }
    const valueText = String(field.value || "").trim();
    if (valueText) {
      textParts.push(valueText);
    }
  });
  return normalizeEquipmentBridgeSearchText(textParts.join(" "));
}

function getEquipmentBridgeSearchEmptyNode(legacyDocument, tableCard) {
  if (!legacyDocument || !tableCard) {
    return null;
  }
  let emptyNode = legacyDocument.getElementById("equipment-bridge-search-empty");
  if (emptyNode) {
    return emptyNode;
  }
  emptyNode = legacyDocument.createElement("div");
  emptyNode.id = "equipment-bridge-search-empty";
  emptyNode.className = "equipment-bridge-search-empty";
  emptyNode.textContent = "검색 결과 없음";
  emptyNode.hidden = true;
  tableCard.appendChild(emptyNode);
  return emptyNode;
}

function setEquipmentBridgeCollectionVisibility(nodes = [], shouldShow = true) {
  nodes.forEach((node) => {
    if (!node) {
      return;
    }
    node.hidden = !shouldShow;
    node.style.display = shouldShow ? "" : "none";
  });
}

function applyEquipmentBridgeSearchFilter() {
  const legacyDocument = getEquipmentBridgeLegacyDocument();
  if (!legacyDocument) {
    return;
  }

  const detailCol = legacyDocument.getElementById("detailCol");
  const detailMode = String(detailCol?.dataset?.equipmentBridgeMode || "").trim();
  const query = normalizeEquipmentBridgeSearchText(equipmentBridgeSearchQuery);
  const shouldFilter = equipmentBridgeSection === "equipment-summary" && detailMode === "shared";
  const tableCard = detailCol?.querySelector(".table-card");
  const emptyNode = getEquipmentBridgeSearchEmptyNode(legacyDocument, tableCard);
  const table = legacyDocument.getElementById("detailTable");
  const tableRows = table ? Array.from(table.querySelectorAll("tbody tr")) : [];
  const mobileRows = Array.from(legacyDocument.querySelectorAll(".equipment-mobile-row"));

  if (!shouldFilter || !query) {
    setEquipmentBridgeCollectionVisibility(tableRows, true);
    setEquipmentBridgeCollectionVisibility(mobileRows, true);
    if (table) {
      table.hidden = false;
      table.style.display = "";
    }
    if (emptyNode) {
      emptyNode.hidden = true;
    }
    syncEquipmentBridgeSearchShell();
    return;
  }

  let visibleCount = 0;
  tableRows.forEach((row) => {
    const matched = collectEquipmentBridgeRowText(row).includes(query);
    row.hidden = !matched;
    row.style.display = matched ? "" : "none";
    if (matched) {
      visibleCount += 1;
    }
  });

  mobileRows.forEach((row) => {
    const matched = collectEquipmentBridgeRowText(row).includes(query);
    row.hidden = !matched;
    row.style.display = matched ? "" : "none";
    if (matched && !tableRows.length) {
      visibleCount += 1;
    }
  });

  const hasResults = visibleCount > 0;
  if (table) {
    table.hidden = !hasResults && !!tableRows.length;
    table.style.display = !hasResults && !!tableRows.length ? "none" : "";
  }
  if (emptyNode) {
    emptyNode.hidden = hasResults;
  }
  syncEquipmentBridgeSearchShell();
}

function getEquipmentBridgeLegacyDocument() {
  return equipmentBridgeFrame?.contentDocument || equipmentBridgeFrame?.contentWindow?.document || null;
}

function clearEquipmentBridgeActionObserver() {
  if (equipmentBridgeActionObserver) {
    equipmentBridgeActionObserver.disconnect();
    equipmentBridgeActionObserver = null;
  }
}

function queueEquipmentBridgeActionToolbarSync(delays = [0, 120, 320]) {
  delays.forEach((delay) => {
    window.setTimeout(() => {
      syncEquipmentBridgeActionToolbar();
    }, delay);
  });
}

function syncEquipmentBridgeActionToolbar() {
  if (!equipmentBridgeActionToolbar) {
    return;
  }

  const legacyDocument = getEquipmentBridgeLegacyDocument();
  const detailTitle = legacyDocument?.getElementById("detailTitle");
  const actionButtons = detailTitle
    ? Array.from(detailTitle.querySelectorAll(".section-title-actions button"))
    : [];

  equipmentBridgeActionToolbar.innerHTML = "";

  if (!actionButtons.length) {
    equipmentBridgeActionToolbar.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  let hasVisibleAction = false;

  actionButtons.forEach((sourceButton, index) => {
    const buttonLabel = String(sourceButton.textContent || "").trim();
    if (!buttonLabel) {
      return;
    }

    const proxyButton = document.createElement("button");
    proxyButton.type = "button";
    proxyButton.className = "equipment-bridge-action-button";
    proxyButton.textContent = buttonLabel;
    proxyButton.disabled = Boolean(sourceButton.disabled);

    if (sourceButton.classList.contains("delete")) {
      proxyButton.classList.add("is-delete");
    }
    if (sourceButton.classList.contains("export-action-btn")) {
      proxyButton.classList.add("is-export");
    }
    if (sourceButton.classList.contains("is-disabled") || sourceButton.disabled) {
      proxyButton.classList.add("is-disabled");
    }

    proxyButton.addEventListener("click", () => {
      const latestLegacyDocument = getEquipmentBridgeLegacyDocument();
      const latestButtons = latestLegacyDocument
        ? Array.from(latestLegacyDocument.querySelectorAll("#detailTitle .section-title-actions button"))
        : [];
      const latestButton = latestButtons[index] || sourceButton;
      latestButton?.click();
      queueEquipmentBridgeActionToolbarSync();
    });

    fragment.appendChild(proxyButton);
    hasVisibleAction = true;
  });

  if (!hasVisibleAction) {
    equipmentBridgeActionToolbar.hidden = true;
    return;
  }

  equipmentBridgeActionToolbar.appendChild(fragment);
  equipmentBridgeActionToolbar.hidden = false;
  syncEquipmentBridgeSearchShell();
}

function ensureEquipmentBridgeActionObserver() {
  if (equipmentBridgeActionObserver) {
    return;
  }

  const legacyDocument = getEquipmentBridgeLegacyDocument();
  const detailTitle = legacyDocument?.getElementById("detailTitle");
  if (!detailTitle || typeof MutationObserver !== "function") {
    return;
  }

  equipmentBridgeActionObserver = new MutationObserver(() => {
    syncEquipmentBridgeActionToolbar();
    applyEquipmentBridgeSearchFilter();
  });
  equipmentBridgeActionObserver.observe(detailTitle, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "disabled"],
    characterData: true,
  });
}

function postEquipmentBridgeNavigation(sectionId = "equipment-summary", member = "") {
  if (!loadLazyIframe(equipmentBridgeFrame)) {
    return;
  }
  if (!equipmentBridgeFrame?.contentWindow) {
    return;
  }

  equipmentBridgeFrame.contentWindow.postMessage(
    {
      type: WC26_EQUIPMENT_BRIDGE_MESSAGE.navigate,
      section: normalizeEquipmentBridgeSection(sectionId),
      member: String(member || "").trim(),
    },
    "*",
  );
}

function setEquipmentBridgeSelectedCrew(name = "") {
  const normalized = String(name || "").trim();
  if (normalized) {
    equipmentBridgeSelectedCrew = normalized;
  }
}

function formatEquipmentBridgeUsageList(prefix = "", values = []) {
  const normalized = values.map((value) => normalizeEquipmentBridgeSummaryText(value)).filter(Boolean);
  if (!normalized.length) {
    return "";
  }
  return `${prefix}${normalized.join(", ")}`;
}

function renderEquipmentBridgePersonalDetail(summary = {}) {
  const detail = document.querySelector("#personal-equipment-detail");
  const title = document.querySelector("#personal-equipment-title");
  const lines = Array.from(document.querySelectorAll("#personal-equipment-detail .personal-equipment-detail-body p"));

  if (!detail || !title || !lines.length) {
    return;
  }

  const memberSummaries = Array.isArray(summary.memberEquipmentSummaries) ? summary.memberEquipmentSummaries : [];
  const activeSummary =
    memberSummaries.find((entry) => String(entry?.name || "").trim() === equipmentBridgeSelectedCrew) ||
    memberSummaries.find((entry) => String(entry?.status || "").trim() === "in-use") ||
    memberSummaries.find((entry) => Number(entry?.equipmentCount || 0) > 0) ||
    null;

  if (activeSummary?.name) {
    setEquipmentBridgeSelectedCrew(activeSummary.name);
  }

  const selectedSummary =
    memberSummaries.find((entry) => String(entry?.name || "").trim() === equipmentBridgeSelectedCrew) || null;
  const status = String(selectedSummary?.status || "").trim();
  const equipmentItems = Array.isArray(selectedSummary?.equipmentItems) ? selectedSummary.equipmentItems : [];
  const equipmentHeadline = equipmentItems
    .map((item) => [item?.name, item?.model].map((value) => normalizeEquipmentBridgeSummaryText(value)).filter(Boolean).join(" "))
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const usageLine = [
    normalizeEquipmentBridgeSummaryText(selectedSummary?.activeTvu || ""),
    normalizeEquipmentBridgeSummaryText(selectedSummary?.activeTrs || ""),
  ]
    .filter(Boolean)
    .join(" / ");
  const summaryLines = [
    equipmentHeadline || equipmentBridgePanelDefaults.lines[0] || "",
    usageLine ||
      (selectedSummary
        ? `${Number(selectedSummary.equipmentCount || 0)}건 배정${status === "in-use" ? " / 사용중" : ""}`
        : equipmentBridgePanelDefaults.lines[1] || ""),
    summary.selectedDate ? `${summary.selectedDate} 기준` : equipmentBridgePanelDefaults.lines[2] || "",
  ];

  title.textContent = selectedSummary?.name
    ? `${selectedSummary.name} 개인장비`
    : equipmentBridgePanelDefaults.title || "개인장비";

  lines.forEach((line, index) => {
    line.textContent = summaryLines[index] || equipmentBridgePanelDefaults.lines[index] || "";
  });

  detail.hidden = !selectedSummary;

  document.querySelectorAll(".personal-equipment-tab").forEach((tab, index) => {
    const crewName = WC26_EQUIPMENT_BRIDGE_MEMBER_ORDER[index] || tab.dataset.crew || tab.textContent.trim();
    tab.dataset.crew = crewName;
    tab.classList.toggle("is-active", crewName === equipmentBridgeSelectedCrew && Boolean(selectedSummary));
  });
  setEquipmentBridgeMemberTabState(selectedSummary?.name || equipmentBridgeSelectedCrew);
}

function resetEquipmentBridgeSummaryPanels() {
  const cardValues = document.querySelectorAll("#field-equipment-summary-panel .field-equipment-card span");
  const title = document.querySelector("#personal-equipment-title");
  const lines = document.querySelectorAll("#personal-equipment-detail .personal-equipment-detail-body p");

  cardValues.forEach((node, index) => {
    node.textContent = equipmentBridgePanelDefaults.cards[index] || "";
  });

  if (title) {
    title.textContent = equipmentBridgePanelDefaults.title || "개인장비";
  }

  lines.forEach((node, index) => {
    node.textContent = equipmentBridgePanelDefaults.lines[index] || "";
  });
}

function applyEquipmentBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeEquipmentBridgeSummaryPayload(summary);
  if (!normalizedSummary) {
    return;
  }

  const equipmentSummary = normalizedSummary.equipmentSummary || {};
  const cardValues = document.querySelectorAll("#field-equipment-summary-panel .field-equipment-card span");
  const equipmentItems = Array.isArray(equipmentSummary.equipmentItems) ? equipmentSummary.equipmentItems : [];
  const firstEquipmentLine = equipmentItems
    .map((item) => [item?.name, item?.model].map((value) => normalizeEquipmentBridgeSummaryText(value)).filter(Boolean).join(" "))
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
  const tvuLine = formatEquipmentBridgeUsageList("TVU ", normalizedSummary.activeTvuList);
  const trsLine = formatEquipmentBridgeUsageList("TRS ", normalizedSummary.activeTrsList);
  const usageHeadline = [tvuLine, trsLine].filter(Boolean).join(" / ");
  const hasSummaryData =
    Number(equipmentSummary.sharedEquipmentCount || 0) > 0 ||
    normalizedSummary.memberEquipmentSummaries.some((entry) => Number(entry?.equipmentCount || 0) > 0) ||
    normalizedSummary.activeTvuList.length > 0 ||
    normalizedSummary.activeTrsList.length > 0;

  if (!hasSummaryData) {
    resetEquipmentBridgeSummaryPanels();
    return;
  }

  if (cardValues[0]) {
    cardValues[0].textContent = `${Number(equipmentSummary.sharedEquipmentCount || 0)}건 등록 / 배정 ${Number(
      equipmentSummary.assignedEquipmentCount || 0,
    )}건`;
  }

  if (cardValues[1]) {
    cardValues[1].textContent = `${Number(equipmentSummary.assignedMemberCount || 0)}명 배정 / 사용중 ${Number(
      equipmentSummary.activeMemberCount || 0,
    )}명`;
  }

  if (cardValues[2]) {
    cardValues[2].textContent =
      usageHeadline ||
      `${Number(equipmentSummary.activeTvuCount || 0)} TVU / ${Number(equipmentSummary.activeTrsCount || 0)} TRS`;
  }

  if (cardValues[3]) {
    cardValues[3].textContent =
      firstEquipmentLine || normalizedSummary.selectedDate || equipmentBridgePanelDefaults.cards[3] || "";
  }

  renderEquipmentBridgePersonalDetail(normalizedSummary);
}

function setEquipmentBridgeSection(sectionId = "equipment-summary", options = {}) {
  equipmentBridgeSection = normalizeEquipmentBridgeSection(sectionId);
  equipmentBridgeReady = false;
  equipmentBridgeFrameShell?.classList.remove("is-ready");
  if (equipmentBridgeLoading) {
    equipmentBridgeLoading.textContent = "legacy equipment bridge loading...";
  }
  if (equipmentBridgeSection === "personal-summary") {
    setEquipmentBridgeSelectedCrew(String(options.member || equipmentBridgeSelectedCrew || "").trim());
  }
  if (equipmentBridgeSection !== "equipment-summary") {
    equipmentBridgeSearchQuery = "";
    if (equipmentBridgeSearchInput) {
      equipmentBridgeSearchInput.value = "";
    }
  }
  setEquipmentBridgeButtonState(equipmentBridgeSection);
  setEquipmentBridgeMemberTabsVisibility(equipmentBridgeSection);
  syncEquipmentBridgeSearchShell();
  queueEquipmentBridgeActionToolbarSync();
  postEquipmentBridgeNavigation(
    equipmentBridgeSection,
    equipmentBridgeSection === "personal-summary"
      ? String(options.member || equipmentBridgeSelectedCrew || "").trim()
      : "",
  );
  queueEquipmentBridgeReadyFallback(equipmentBridgeSection, {
    member: equipmentBridgeSection === "personal-summary" ? equipmentBridgeSelectedCrew : "",
  });
}

function requestEquipmentBridgeSummary() {
  if (
    tryApplyDirectBridgeSummary("getWC26LegacyEquipmentSummary", applyEquipmentBridgeSummary, {
      selectedSection: equipmentBridgeSection,
    })
  ) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_EQUIPMENT_BRIDGE_MESSAGE.navigate,
      section: equipmentBridgeSection || "equipment-summary",
    },
    "*",
  );
}

function extractScheduleBridgeTvuParts(value = "") {
  const raw = String(value || "").trim();
  const match = raw.match(/(TVU\s*\d+번)(?:\s+(TRS\s*\d+))?/i);
  return {
    tvu: match ? String(match[1] || "").trim() : raw,
    trs: match?.[2] ? String(match[2] || "").trim() : "",
  };
}

function normalizeScheduleBridgeSummaryPayload(payload = {}) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const selectedDate = String(payload.selectedDate || "").trim();
  const sharedSchedules = Array.isArray(payload.sharedSchedules) ? payload.sharedSchedules : [];
  const personalSchedules = Array.isArray(payload.personalSchedules) ? payload.personalSchedules : [];
  const accumulatedSchedules = Array.isArray(payload.accumulatedSchedules) ? payload.accumulatedSchedules : [];
  const memberSummaries = Array.isArray(payload.memberSummaries) ? payload.memberSummaries : [];

  return {
    selectedDate,
    sharedSchedules,
    personalSchedules,
    accumulatedSchedules,
    memberSummaries,
    updatedAt: String(payload.updatedAt || "").trim(),
  };
}

function buildScheduleBridgeSummaryRenderKey(summary = {}) {
  return JSON.stringify({
    selectedDate: summary.selectedDate || "",
    sharedSchedules: Array.isArray(summary.sharedSchedules) ? summary.sharedSchedules : [],
    personalSchedules: Array.isArray(summary.personalSchedules) ? summary.personalSchedules : [],
    accumulatedSchedules: Array.isArray(summary.accumulatedSchedules) ? summary.accumulatedSchedules : [],
    memberSummaries: Array.isArray(summary.memberSummaries) ? summary.memberSummaries : [],
  });
}

function resetScheduleBridgeSummaryPanels() {
  const heroValues = document.querySelectorAll("#panel-main-match .hero-chip__value");
  const slotValues = document.querySelectorAll("#panel-main-match .data-slot__value");
  const rows = document.querySelectorAll("#panel-field-status .status-row");

  heroValues.forEach((node, index) => {
    node.textContent = scheduleBridgePanelDefaults.heroValues[index] || "";
  });
  slotValues.forEach((node, index) => {
    node.textContent = scheduleBridgePanelDefaults.slotValues[index] || "";
  });
  rows.forEach((row, index) => {
    const defaults = scheduleBridgePanelDefaults.rows[index] || {};
    const units = row.querySelectorAll(".status-row__unit");
    const nameNode = row.querySelector(".status-row__name");
    const placeNode = row.querySelector(".status-row__place");
    if (nameNode) {
      nameNode.textContent = defaults.name || WC26_SCHEDULE_BRIDGE_MEMBER_ORDER[index] || "";
    }
    if (placeNode) {
      placeNode.textContent = defaults.place || "";
    }
    units.forEach((unit, unitIndex) => {
      unit.textContent = defaults.units?.[unitIndex] || "";
    });
    row.classList.remove("is-live", "is-upcoming", "is-ended");
  });
  refreshAccumulatedScheduleFlow([]);
  renderTimelineGantt({});
}

function setScheduleBridgeButtonState(sectionId = "all") {
  scheduleBridgeButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.scheduleBridgeNav === normalizeScheduleBridgeSection(sectionId),
    );
  });
}

function postScheduleBridgeNavigation(sectionId = "all") {
  if (!loadLazyIframe(scheduleBridgeFrame)) {
    return;
  }
  if (!scheduleBridgeFrame?.contentWindow) {
    return;
  }

  scheduleBridgeFrame.contentWindow.postMessage(
    {
      type: WC26_SCHEDULE_BRIDGE_MESSAGE.navigate,
      section: normalizeScheduleBridgeSection(sectionId),
    },
    "*",
  );
}

const WC26_SCHEDULE_LEGACY_HUD_SECTIONS = new Set(["personal", "accumulated"]);
const WC26_SCHEDULE_LEGACY_HUD_STYLE_ID = "wc26-new-suit-schedule-hud-skin";

function getScheduleBridgeDocument() {
  try {
    return scheduleBridgeFrame?.contentDocument || null;
  } catch (error) {
    return null;
  }
}

function buildScheduleLegacyHudSkinCss() {
  return `
body[data-wc26-new-suit-schedule-hud] {
  color-scheme: dark;
  background:
    radial-gradient(circle at top, rgba(103, 255, 216, 0.08), transparent 36%),
    linear-gradient(180deg, rgba(4, 10, 20, 0.98), rgba(4, 8, 16, 0.96)) !important;
  color: #eefcff !important;
}

body[data-wc26-new-suit-schedule-hud] .page,
body[data-wc26-new-suit-schedule-hud] .content-shell,
body[data-wc26-new-suit-schedule-hud] .content-main,
body[data-wc26-new-suit-schedule-hud] .container,
body[data-wc26-new-suit-schedule-hud] #desktopTabPane,
body[data-wc26-new-suit-schedule-hud] #detailCol,
body[data-wc26-new-suit-schedule-hud] .table-card,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-card {
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] #detailCol {
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  gap: 10px !important;
}

body[data-wc26-new-suit-schedule-hud] .section-title-row,
body[data-wc26-new-suit-schedule-hud] .programming-detail-title-row {
  margin-bottom: 8px !important;
  padding: 0 !important;
}

body[data-wc26-new-suit-schedule-hud] .section-title,
body[data-wc26-new-suit-schedule-hud] #detailTitle,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-heading,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-title,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-name,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-entry-name,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-text-line-head {
  color: #eefcff !important;
}

body[data-wc26-new-suit-schedule-hud] .section-subtitle,
body[data-wc26-new-suit-schedule-hud] #detailSubtitle,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-text-line-body,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-entry-text,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-entry-text-shared-body,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-caption,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-end-label,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-date {
  color: rgba(223, 241, 248, 0.76) !important;
}

body[data-wc26-new-suit-schedule-hud] .section-title-actions,
body[data-wc26-new-suit-schedule-hud] #detailTitleActions,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-header-actions,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-actions {
  gap: 6px !important;
}

body[data-wc26-new-suit-schedule-hud] .table-card,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-card,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-item,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-item,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-nav,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-current,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-picker,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-head,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-topbar,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-mobile-nav,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-month-sticky,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-empty,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-board,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-line,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-row,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-entry {
  border: 1px solid rgba(103, 255, 216, 0.16) !important;
  border-radius: 16px !important;
  background:
    linear-gradient(180deg, rgba(10, 20, 35, 0.92), rgba(5, 12, 24, 0.9)) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.03),
    0 14px 30px rgba(1, 6, 14, 0.26) !important;
}

body[data-wc26-new-suit-schedule-hud] .table-card {
  padding: 10px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-head,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-nav,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-mobile-nav,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-topbar {
  padding: 10px 12px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-content {
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-empty {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 54px !important;
  color: rgba(223, 241, 248, 0.52) !important;
  border-style: dashed !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-columns {
  gap: 10px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-header,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-header-wrap,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-heading {
  padding: 10px 12px !important;
  border-bottom: 1px solid rgba(103, 255, 216, 0.1) !important;
  color: #67ffd8 !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-body,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-board {
  padding: 10px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-tabs {
  gap: 6px !important;
  padding-bottom: 10px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-row,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-line,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-entry {
  padding: 10px 12px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-controls,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-main,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-memo-row {
  gap: 8px !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-memo-input,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-detail-select,
body[data-wc26-new-suit-schedule-hud] .simple-form-input,
body[data-wc26-new-suit-schedule-hud] input[type="text"],
body[data-wc26-new-suit-schedule-hud] input[type="date"],
body[data-wc26-new-suit-schedule-hud] input[type="time"],
body[data-wc26-new-suit-schedule-hud] input[type="file"],
body[data-wc26-new-suit-schedule-hud] select,
body[data-wc26-new-suit-schedule-hud] textarea,
body[data-wc26-new-suit-schedule-hud] #scheduleInput,
body[data-wc26-new-suit-schedule-hud] #memoInput,
body[data-wc26-new-suit-schedule-hud] #timelineModalInput,
body[data-wc26-new-suit-schedule-hud] #timelineModalFile {
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 12px !important;
  background: rgba(3, 9, 19, 0.84) !important;
  color: #eefcff !important;
  box-shadow: none !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-memo-input,
body[data-wc26-new-suit-schedule-hud] textarea {
  min-height: 76px !important;
  resize: vertical !important;
}

body[data-wc26-new-suit-schedule-hud] input::placeholder,
body[data-wc26-new-suit-schedule-hud] textarea::placeholder {
  color: rgba(223, 241, 248, 0.36) !important;
}

body[data-wc26-new-suit-schedule-hud] .section-title-action-btn,
body[data-wc26-new-suit-schedule-hud] .item,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-nav-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-picker,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-quick-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-save-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-tab,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-write-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-edit-toggle-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-delete-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-entry-edit-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-entry-delete-btn,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-write,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-save,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-end,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-delete,
body[data-wc26-new-suit-schedule-hud] .timeline-export-btn {
  min-height: 30px !important;
  padding: 6px 10px !important;
  border-radius: 999px !important;
  border: 1px solid rgba(103, 255, 216, 0.22) !important;
  background: rgba(8, 16, 30, 0.82) !important;
  color: #eefcff !important;
  font: inherit !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  box-shadow: none !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-current {
  min-height: 34px !important;
  padding: 6px 12px !important;
  border-radius: 14px !important;
  border: 1px solid rgba(103, 255, 216, 0.16) !important;
  background: rgba(8, 16, 30, 0.84) !important;
  color: #eefcff !important;
  font-weight: 700 !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-picker-trigger {
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-day-picker-input {
  opacity: 0 !important;
}

body[data-wc26-new-suit-schedule-hud] .section-title-action-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-save-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-tab:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-write-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-edit-toggle-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-delete-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-entry-edit-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-entry-delete-btn:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-write:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-save:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-end:hover,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-delete:hover,
body[data-wc26-new-suit-schedule-hud] .timeline-export-btn:hover {
  border-color: rgba(103, 255, 216, 0.42) !important;
  background:
    linear-gradient(135deg, rgba(103, 255, 216, 0.14), rgba(86, 183, 255, 0.08)),
    rgba(8, 16, 30, 0.88) !important;
}

body[data-wc26-new-suit-schedule-hud] .personal-timeline-person-tab.is-active,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-edit-toggle-btn.is-active,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-shared-delete-btn.is-active,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-write.is-active {
  border-color: rgba(103, 255, 216, 0.48) !important;
  background:
    linear-gradient(135deg, rgba(103, 255, 216, 0.18), rgba(86, 183, 255, 0.12)),
    rgba(8, 16, 30, 0.92) !important;
  color: #eefcff !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table {
  width: 100% !important;
  border-collapse: separate !important;
  border-spacing: 0 8px !important;
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table thead th {
  color: #67ffd8 !important;
  font-size: 11px !important;
  letter-spacing: 0.04em !important;
  border: 0 !important;
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table tbody tr {
  background:
    linear-gradient(180deg, rgba(10, 20, 35, 0.92), rgba(5, 12, 24, 0.9)) !important;
  box-shadow: inset 0 0 0 1px rgba(103, 255, 216, 0.12) !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table tbody td {
  padding: 10px 12px !important;
  border-top: 1px solid rgba(103, 255, 216, 0.12) !important;
  border-bottom: 1px solid rgba(103, 255, 216, 0.12) !important;
  color: rgba(238, 252, 255, 0.84) !important;
  background: transparent !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table tbody td:first-child {
  border-left: 1px solid rgba(103, 255, 216, 0.12) !important;
  border-radius: 14px 0 0 14px !important;
}

body[data-wc26-new-suit-schedule-hud] .data-table tbody td:last-child {
  border-right: 1px solid rgba(103, 255, 216, 0.12) !important;
  border-radius: 0 14px 14px 0 !important;
}

body[data-wc26-new-suit-schedule-hud] .table-card::-webkit-scrollbar,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-body::-webkit-scrollbar,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-board::-webkit-scrollbar {
  width: 0;
  height: 0;
}

body[data-wc26-new-suit-schedule-hud] .table-card,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-column-body,
body[data-wc26-new-suit-schedule-hud] .personal-timeline-summary-board {
  scrollbar-width: none !important;
}

@media (max-width: 767px) {
  body[data-wc26-new-suit-schedule-hud] .table-card {
    padding: 6px !important;
  }

  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table thead th,
  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table tbody td {
    padding: 8px 6px !important;
    font-size: 10px !important;
  }

  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table .flag-cell {
    gap: 4px !important;
  }

  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table .flag-icon {
    width: 14px !important;
    height: 10px !important;
  }

  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table .group-team-name {
    font-size: 10px !important;
  }

  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table thead th:nth-child(6),
  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table tbody td:nth-child(6),
  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table thead th:nth-child(7),
  body[data-wc26-new-suit-schedule-hud] #detailTable.group-table tbody td:nth-child(7) {
    display: none !important;
  }
}
`;
}

function applyScheduleLegacyHudSkin() {
  const doc = getScheduleBridgeDocument();

  if (!doc?.head || !doc.body) {
    return false;
  }

  let styleNode = doc.getElementById(WC26_SCHEDULE_LEGACY_HUD_STYLE_ID);

  if (!styleNode) {
    styleNode = doc.createElement("style");
    styleNode.id = WC26_SCHEDULE_LEGACY_HUD_STYLE_ID;
    doc.head.appendChild(styleNode);
  }

  styleNode.textContent = buildScheduleLegacyHudSkinCss();

  const normalizedSection = normalizeScheduleBridgeSection(
    doc.body.dataset.wc26LegacySection || scheduleBridgeSection || "all",
  );

  if (WC26_SCHEDULE_LEGACY_HUD_SECTIONS.has(normalizedSection)) {
    doc.body.dataset.wc26NewSuitScheduleHud = normalizedSection;
  } else {
    delete doc.body.dataset.wc26NewSuitScheduleHud;
  }

  return true;
}

function queueScheduleLegacyHudSkin(delays = [0, 90, 260, 620]) {
  delays.forEach((delay) => {
    window.setTimeout(() => {
      applyScheduleLegacyHudSkin();
    }, delay);
  });
}

function getSharedScheduleTodayKey() {
  const syncWindow = getScheduleBridgeSyncWindow();
  const getter = syncWindow?.getTodayTimelineKey;

  if (typeof getter === "function") {
    try {
      const value = String(getter.call(syncWindow) || "").trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
      }
    } catch (_error) {
      // Ignore sync bridge failures and fall through.
    }
  }

  return new Date().toISOString().slice(0, 10);
}

function formatSharedScheduleDateLabel(dateKey = "") {
  const normalized = String(dateKey || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    return normalized || "-";
  }
  const [, month, day] = normalized.split("-");
  return `${Number(month)}/${Number(day)}`;
}

function formatSharedScheduleDateMeta(dateKey = "") {
  const normalized = String(dateKey || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    return normalized || "-";
  }
  const [year, month, day] = normalized.split("-");
  return `${year}.${month}.${day}`;
}

function getSharedScheduleFirstLine(text = "") {
  return String(text || "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => String(line || "").trim())
    .find(Boolean) || "";
}

function getSharedScheduleEntryKey(dateKey = "", entryId = "") {
  return `${String(dateKey || "").trim()}::${String(entryId || "").trim()}`;
}

function resetSharedScheduleDraftFiles() {
  sharedScheduleDraftFiles.forEach((item) => {
    if (item?.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
  sharedScheduleDraftFiles = [];
}

function setSharedScheduleDraftFiles(fileList) {
  resetSharedScheduleDraftFiles();
  sharedScheduleDraftFiles = Array.from(fileList || []).map((file, index) => {
    const fileType = String(file?.type || "").trim();
    const previewUrl = fileType.startsWith("image/") ? URL.createObjectURL(file) : "";
    return {
      id: `shared-draft-${Date.now()}-${index}`,
      file,
      fileName: file?.name || `file-${index + 1}`,
      fileType,
      previewUrl,
    };
  });
  renderSharedSchedulePreview();
}

function buildSharedScheduleAttachmentChip({ fileName = "", fileType = "", previewUrl = "", renderInlinePreview = false } = {}) {
  const chip = document.createElement("div");
  chip.className = "shared-schedule-preview-chip";
  const normalizedName = String(fileName || "").trim() || "첨부 파일";
  const normalizedType = String(fileType || "").trim().toLowerCase();
  const kindLabel = getSharedScheduleAttachmentKindLabel(
    getSharedScheduleAttachmentKind({ fileName: normalizedName, fileType: normalizedType, publicUrl: previewUrl }),
    normalizedName,
  );

  if (renderInlinePreview && previewUrl && normalizedType.startsWith("image/")) {
    const image = document.createElement("img");
    image.src = previewUrl;
    image.alt = normalizedName;
    image.loading = "lazy";
    image.decoding = "async";
    chip.appendChild(image);
  } else {
    const ext = document.createElement("span");
    ext.className = "shared-schedule-file-ext";
    ext.textContent = kindLabel || "FILE";
    chip.appendChild(ext);
  }

  const label = document.createElement("span");
  label.textContent = normalizedName;
  chip.appendChild(label);

  if (!renderInlinePreview) {
    const action = document.createElement("span");
    action.className = "shared-schedule-attachment-action";
    action.textContent = kindLabel === "IMG" ? "사진 보기" : "미리보기";
    chip.appendChild(action);
  }
  return chip;
}

function renderSharedSchedulePreview() {
  if (!sharedSchedulePreview) {
    return;
  }

  sharedSchedulePreview.replaceChildren();
  sharedSchedulePreview.classList.toggle("is-empty", sharedScheduleDraftFiles.length === 0);

  sharedScheduleDraftFiles.forEach((item) => {
    sharedSchedulePreview.appendChild(
      buildSharedScheduleAttachmentChip({
        fileName: item.fileName,
        fileType: item.fileType,
        previewUrl: item.previewUrl,
        renderInlinePreview: true,
      }),
    );
  });
}

function clearSharedScheduleAttachmentContainer(container) {
  if (!container) {
    return;
  }
  container.replaceChildren();
  container.classList.toggle("is-empty", true);
}

function parseSharedScheduleState(raw = "") {
  const text = String(raw || "").trim();
  if (!text) {
    return {};
  }
  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function getSharedScheduleTimestampKey(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}_${pad(date.getHours())}${pad(
    date.getMinutes(),
  )}${pad(date.getSeconds())}`;
}

function getSharedScheduleAttachmentName(attachment = {}) {
  return String(attachment?.fileName || attachment?.name || attachment?.storagePath || attachment?.publicUrl || attachment?.src || "")
    .trim();
}

function safeDecodeSharedScheduleFileName(value = "") {
  const normalized = String(value || "").trim();
  if (!normalized || !/%[0-9a-f]{2}/i.test(normalized)) {
    return normalized;
  }
  try {
    return decodeURIComponent(normalized);
  } catch (_error) {
    return normalized;
  }
}

function getSharedScheduleAttachmentFileName(attachment = {}) {
  const directName = String(
    attachment?.fileName ||
      attachment?.name ||
      attachment?.filename ||
      attachment?.originalName ||
      attachment?.storagePath ||
      attachment?.path ||
      attachment?.publicUrl ||
      attachment?.url ||
      attachment?.previewUrl ||
      attachment?.src ||
      "",
  ).trim();
  const source = directName.split("?")[0].replace(/\\/g, "/");
  const fileName = safeDecodeSharedScheduleFileName(source.split("/").filter(Boolean).pop() || directName);
  return fileName || "알 수 없는 파일";
}

function getSharedScheduleAttachmentUrl(attachment = {}) {
  const primaryUrl = String(
    attachment?.publicUrl ||
      attachment?.url ||
      attachment?.previewUrl ||
      attachment?.src ||
      attachment?.downloadUrl ||
      "",
  ).trim();
  if (primaryUrl) {
    return primaryUrl;
  }
  const embeddedData = String(attachment?.dataUrl || attachment?.originalData || "").trim();
  return embeddedData.startsWith("data:") ? embeddedData : "";
}

function getSharedScheduleAttachmentStoragePath(attachment = {}) {
  const rawPath = String(attachment?.storagePath || attachment?.path || "").trim();
  if (!rawPath || /^https?:|^blob:|^data:/i.test(rawPath)) {
    return "";
  }
  return rawPath
    .replace(/\\/g, "/")
    .replace(new RegExp(`^${WC26_TIMELINE_GALLERY_STORAGE_BUCKET}/`, "i"), "")
    .replace(/^\/+/, "");
}

function getSharedScheduleStorageClient() {
  const syncWindow = getScheduleBridgeSyncWindow();
  const visibleWindow = scheduleBridgeFrame?.contentWindow;
  return window.supabaseClient || syncWindow?.supabaseClient || visibleWindow?.supabaseClient || null;
}

function getSharedScheduleSupabaseUrl() {
  const syncWindow = getScheduleBridgeSyncWindow();
  const visibleWindow = scheduleBridgeFrame?.contentWindow;
  return String(
    window.APP_CONFIG?.supabaseUrl ||
      syncWindow?.APP_CONFIG?.supabaseUrl ||
      visibleWindow?.APP_CONFIG?.supabaseUrl ||
      "",
  ).trim();
}

function getSharedScheduleStoragePublicUrl(storagePath = "") {
  const normalizedPath = String(storagePath || "").trim();
  if (!normalizedPath) {
    return "";
  }

  const client = getSharedScheduleStorageClient();
  try {
    const publicUrl = client?.storage?.from?.(WC26_TIMELINE_GALLERY_STORAGE_BUCKET)?.getPublicUrl?.(normalizedPath)?.data?.publicUrl;
    if (publicUrl) {
      return String(publicUrl).trim();
    }
  } catch (_error) {
    // Fall through to the URL fallback below without listing the bucket.
  }

  const supabaseUrl = getSharedScheduleSupabaseUrl();
  if (!supabaseUrl) {
    return "";
  }
  return `${supabaseUrl.replace(/\/+$/, "")}/storage/v1/object/public/${WC26_TIMELINE_GALLERY_STORAGE_BUCKET}/${normalizedPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

async function getSharedScheduleStorageSignedUrl(storagePath = "") {
  const normalizedPath = String(storagePath || "").trim();
  if (!normalizedPath) {
    return "";
  }
  const client = getSharedScheduleStorageClient();
  try {
    const result = await client?.storage?.from?.(WC26_TIMELINE_GALLERY_STORAGE_BUCKET)?.createSignedUrl?.(normalizedPath, 60);
    return String(result?.data?.signedUrl || "").trim();
  } catch (_error) {
    return "";
  }
}

function resolveSharedScheduleAttachmentPreviewUrl(attachment = {}) {
  const directUrl = getSharedScheduleAttachmentUrl(attachment);
  if (directUrl) {
    return directUrl;
  }
  return getSharedScheduleStoragePublicUrl(getSharedScheduleAttachmentStoragePath(attachment));
}

async function getSharedScheduleAttachmentPreviewUrlCandidates(attachment = {}, primaryUrl = "") {
  const urls = [];
  const addUrl = (value = "") => {
    const normalized = String(value || "").trim();
    if (normalized && !urls.includes(normalized)) {
      urls.push(normalized);
    }
  };

  addUrl(primaryUrl);
  addUrl(getSharedScheduleAttachmentUrl(attachment));

  const storagePath = getSharedScheduleAttachmentStoragePath(attachment);
  if (storagePath) {
    addUrl(await getSharedScheduleStorageSignedUrl(storagePath));
    addUrl(getSharedScheduleStoragePublicUrl(storagePath));
  }

  return urls;
}

function getSharedScheduleAttachmentExtension(fileName = "", url = "") {
  const source = String(fileName || url || "").split("?")[0].toLowerCase();
  const match = source.match(/\.([a-z0-9]{1,8})$/);
  return match ? match[1] : "";
}

function getSharedScheduleAttachmentKind(attachment = {}) {
  const fileName = getSharedScheduleAttachmentFileName(attachment);
  const url = getSharedScheduleAttachmentUrl(attachment);
  const mimeType = String(attachment?.fileType || attachment?.mimeType || attachment?.type || "").toLowerCase();
  const extension = getSharedScheduleAttachmentExtension(fileName, url);

  if (mimeType.startsWith("image/") || ["jpg", "jpeg", "png", "webp", "gif"].includes(extension)) {
    return "image";
  }
  if (mimeType.startsWith("video/") || ["mp4", "mov", "webm"].includes(extension)) {
    return "video";
  }
  if (mimeType.includes("pdf") || extension === "pdf") {
    return "pdf";
  }
  if (["xlsx", "xls", "csv"].includes(extension) || mimeType.includes("spreadsheet") || mimeType.includes("csv")) {
    return extension === "csv" ? "csv" : "excel";
  }
  if (extension === "txt" || mimeType.startsWith("text/")) {
    return "text";
  }
  if (["doc", "docx", "hwp", "hwpx", "ppt", "pptx"].includes(extension)) {
    return "document";
  }
  return "file";
}

function getSharedScheduleAttachmentKindLabel(kind = "file", fileName = "") {
  const extension = getSharedScheduleAttachmentExtension(fileName).toLowerCase();
  if (["jpg", "jpeg", "png", "webp", "gif"].includes(extension)) {
    return "IMG";
  }
  if (["mp4", "mov", "webm"].includes(extension)) {
    return "VID";
  }
  if (extension === "pdf") {
    return "PDF";
  }
  if (["xlsx", "xls"].includes(extension)) {
    return "XLS";
  }
  if (extension === "csv") {
    return "CSV";
  }
  if (["doc", "docx"].includes(extension)) {
    return "DOC";
  }
  if (["hwp", "hwpx"].includes(extension)) {
    return "HWP";
  }
  if (["ppt", "pptx"].includes(extension)) {
    return "PPT";
  }
  if (extension === "txt") {
    return "TXT";
  }
  if (["zip", "rar", "7z"].includes(extension)) {
    return "ZIP";
  }
  return (
    {
      image: "IMG",
      video: "VID",
      pdf: "PDF",
      excel: "XLS",
      csv: "CSV",
      text: "TXT",
      document: "DOC",
      file: "FILE",
    }[kind] || "FILE"
  );
}

function createSharedScheduleFileFallback({ fileName = "알 수 없는 파일", kind = "file", url = "", message = "" } = {}) {
  const fallback = document.createElement("div");
  fallback.className = "shared-schedule-file-preview-fallback";

  const badge = document.createElement("span");
  badge.className = "shared-schedule-file-preview-badge";
  badge.textContent = getSharedScheduleAttachmentKindLabel(kind, fileName);
  fallback.appendChild(badge);

  const title = document.createElement("strong");
  title.textContent = fileName;
  fallback.appendChild(title);

  const note = document.createElement("p");
  note.textContent = message || (url ? "브라우저 직접 미리보기가 어려운 파일입니다." : "미리보기 URL이 없는 첨부파일입니다.");
  fallback.appendChild(note);

  return fallback;
}

function renderSharedScheduleFilePreviewActions(fileName = "", url = "") {
  if (!sharedScheduleFilePreviewActions) {
    return;
  }
  sharedScheduleFilePreviewActions.replaceChildren();
  if (!url) {
    sharedScheduleFilePreviewActions.hidden = true;
    return;
  }

  sharedScheduleFilePreviewActions.hidden = false;
  const openLink = document.createElement("a");
  openLink.className = "timeline-modal__button";
  openLink.href = url;
  openLink.target = "_blank";
  openLink.rel = "noopener noreferrer";
  openLink.textContent = "새 창 열기";

  const downloadLink = document.createElement("a");
  downloadLink.className = "timeline-modal__button timeline-modal__button--ghost";
  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.textContent = "다운로드";

  sharedScheduleFilePreviewActions.append(openLink, downloadLink);
}

async function fetchSharedSchedulePreviewResource(url = "", options = {}) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), WC26_SHARED_SCHEDULE_PREVIEW_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    if (!response.ok) {
      let detail = "";
      try {
        detail = await response.clone().text();
      } catch (_error) {
        detail = "";
      }
      const message = detail ? `preview failed: ${response.status} ${detail.slice(0, 220)}` : `preview failed: ${response.status}`;
      const error = new Error(message);
      error.status = response.status;
      error.detail = detail;
      throw error;
    }
    return response;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function getSharedSchedulePreviewFailureMessage(error) {
  const status = Number(error?.status || 0);
  const message = String(error?.message || error || "");
  const detail = String(error?.detail || "");
  if (status === 402 || /exceed_egress_quota|restricted/i.test(`${message} ${detail}`)) {
    return "파일 다운로드 실패: Supabase Storage egress quota 제한으로 원본 파일을 받을 수 없습니다.";
  }
  if (status === 404) {
    return "파일 다운로드 실패: 저장 경로에서 파일을 찾을 수 없습니다.";
  }
  if (status === 403 || /unauthorized|forbidden/i.test(message)) {
    return "파일 다운로드 실패: 파일 접근 권한이 없습니다.";
  }
  if (/no preview url/i.test(message)) {
    return "파일 경로 없음";
  }
  if (/too large/i.test(message)) {
    return "파일이 커서 미리보기 일부를 만들 수 없습니다.";
  }
  if (/xlsx library/i.test(message)) {
    return "XLSX 라이브러리 없음";
  }
  if (/unsupported workbook|sheet/i.test(message)) {
    return "시트 없음 또는 파싱 실패";
  }
  if (/abort/i.test(message)) {
    return "파일 다운로드 시간이 초과되었습니다.";
  }
  return "파싱 실패";
}

function renderSharedScheduleTextPreview(url = "", fileName = "", kind = "text") {
  if (!sharedScheduleFilePreviewBody) {
    return;
  }
  if (!url) {
    sharedScheduleFilePreviewBody.appendChild(
      createSharedScheduleFileFallback({ fileName, kind, message: "파일 URL이 없어 텍스트 미리보기를 열 수 없습니다." }),
    );
    return;
  }

  const pre = document.createElement("pre");
  pre.className = "shared-schedule-file-preview-text";
  pre.textContent = "미리보기 로딩 중...";
  sharedScheduleFilePreviewBody.appendChild(pre);

  fetchSharedSchedulePreviewResource(url)
    .then((response) => response.text())
    .then((text) => {
      const normalized = String(text || "").slice(0, 12000);
      pre.textContent = normalized || "표시할 텍스트가 없습니다.";
    })
    .catch(() => {
      sharedScheduleFilePreviewBody.replaceChildren(
        createSharedScheduleFileFallback({ fileName, kind, url, message: "텍스트 미리보기에 실패해 열기/다운로드로 대체합니다." }),
      );
    });
}

function getSharedScheduleXlsxRuntime() {
  const syncWindow = getScheduleBridgeSyncWindow();
  const visibleWindow = scheduleBridgeFrame?.contentWindow;
  return window.XLSX || syncWindow?.XLSX || visibleWindow?.XLSX || null;
}

function loadSharedScheduleXlsxScript() {
  return new Promise((resolve, reject) => {
    const existingRuntime = getSharedScheduleXlsxRuntime();
    if (existingRuntime?.read && existingRuntime?.utils?.sheet_to_json) {
      resolve(existingRuntime);
      return;
    }

    const existingScript = document.querySelector(`script[src="${WC26_SHARED_SCHEDULE_XLSX_CDN}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(getSharedScheduleXlsxRuntime()), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("xlsx library load failed")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = WC26_SHARED_SCHEDULE_XLSX_CDN;
    script.async = true;
    script.onload = () => resolve(getSharedScheduleXlsxRuntime());
    script.onerror = () => reject(new Error("xlsx library load failed"));
    document.head.appendChild(script);
  });
}

function ensureSharedScheduleXlsxRuntime() {
  const runtime = getSharedScheduleXlsxRuntime();
  if (runtime?.read && runtime?.utils?.sheet_to_json) {
    return Promise.resolve(runtime);
  }
  if (!sharedScheduleXlsxRuntimePromise) {
    sharedScheduleXlsxRuntimePromise = loadSharedScheduleXlsxScript().finally(() => {
      if (!getSharedScheduleXlsxRuntime()?.read) {
        sharedScheduleXlsxRuntimePromise = null;
      }
    });
  }
  return sharedScheduleXlsxRuntimePromise.then((loadedRuntime) => {
    const finalRuntime = loadedRuntime || getSharedScheduleXlsxRuntime();
    if (!finalRuntime?.read || !finalRuntime?.utils?.sheet_to_json) {
      throw new Error("xlsx library unavailable");
    }
    return finalRuntime;
  });
}

function parseSharedScheduleCsvRows(text = "", maxRows = 30) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  const source = String(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }
    if (char === "\n" && !inQuotes) {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      if (rows.length >= maxRows) {
        break;
      }
      continue;
    }
    cell += char;
  }

  if (rows.length < maxRows && (cell || row.length)) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function dataUrlToSharedScheduleArrayBuffer(dataUrl = "") {
  const text = String(dataUrl || "");
  const commaIndex = text.indexOf(",");
  if (!text.startsWith("data:") || commaIndex < 0) {
    return null;
  }
  const meta = text.slice(0, commaIndex).toLowerCase();
  const payload = text.slice(commaIndex + 1);
  const binary = meta.includes(";base64") ? atob(payload) : safeDecodeSharedScheduleFileName(payload);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index) & 0xff;
  }
  return bytes.buffer;
}

function binaryStringToSharedScheduleArrayBuffer(value = "") {
  const text = String(value || "");
  if (!text || /^https?:|^blob:|^data:/i.test(text)) {
    return null;
  }
  const bytes = new Uint8Array(text.length);
  for (let index = 0; index < text.length; index += 1) {
    bytes[index] = text.charCodeAt(index) & 0xff;
  }
  return bytes.buffer;
}

async function readSharedScheduleAttachmentArrayBuffer(attachment = {}, url = "") {
  const rawData = String(attachment?.originalData || attachment?.dataUrl || "").trim();
  const directDataBuffer = dataUrlToSharedScheduleArrayBuffer(rawData) || binaryStringToSharedScheduleArrayBuffer(rawData);
  if (directDataBuffer && directDataBuffer.byteLength) {
    if (directDataBuffer.byteLength > WC26_SHARED_SCHEDULE_MAX_SPREADSHEET_BYTES) {
      throw new Error("spreadsheet preview file too large");
    }
    return directDataBuffer;
  }
  const dataUrlBuffer = dataUrlToSharedScheduleArrayBuffer(url);
  if (dataUrlBuffer && dataUrlBuffer.byteLength) {
    if (dataUrlBuffer.byteLength > WC26_SHARED_SCHEDULE_MAX_SPREADSHEET_BYTES) {
      throw new Error("spreadsheet preview file too large");
    }
    return dataUrlBuffer;
  }

  const urlCandidates = await getSharedScheduleAttachmentPreviewUrlCandidates(attachment, url);
  if (!urlCandidates.length) {
    throw new Error("no preview url");
  }

  let lastError = null;
  for (const candidateUrl of urlCandidates) {
    if (!/^https?:|^blob:|^data:/i.test(candidateUrl)) {
      continue;
    }
    try {
      const response = await fetchSharedSchedulePreviewResource(candidateUrl);
      const length = Number(response.headers.get("content-length") || 0);
      if (length > WC26_SHARED_SCHEDULE_MAX_SPREADSHEET_BYTES) {
        throw new Error("spreadsheet preview file too large");
      }
      const buffer = await response.arrayBuffer();
      if (buffer.byteLength > WC26_SHARED_SCHEDULE_MAX_SPREADSHEET_BYTES) {
        throw new Error("spreadsheet preview file too large");
      }
      return buffer;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("no preview url");
}

function rowsLookLikeRawWorkbookBinary(rows = []) {
  const firstCell = String(rows?.[0]?.[0] || "");
  return firstCell.startsWith("PK\u0003\u0004") || firstCell.includes("[Content_Types].xml");
}

function arrayBufferToSharedScheduleBinaryString(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const chunkSize = 0x8000;
  let output = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    output += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return output;
}

function decodeSharedScheduleWorkbookTextBuffer(arrayBuffer) {
  try {
    const text = new TextDecoder("utf-8").decode(arrayBuffer);
    if (text.startsWith("PK\u0003\u0004") || text.includes("[Content_Types].xml")) {
      return binaryStringToSharedScheduleArrayBuffer(text);
    }
  } catch (error) {
    return null;
  }
  return null;
}

function extractSharedScheduleWorkbookRows(xlsx, workbook) {
  const sheetName = workbook?.SheetNames?.find((name) => String(name || "").trim() === "총괄목록") || workbook?.SheetNames?.[0] || "";
  const sheet = sheetName ? workbook?.Sheets?.[sheetName] : null;
  const rows = sheet ? xlsx.utils.sheet_to_json(sheet, { header: 1, defval: "", blankrows: false }) : [];
  if (!sheetName || rowsLookLikeRawWorkbookBinary(rows)) {
    return null;
  }
  return { sheetName, rows };
}

function parseSharedScheduleWorkbookPreview(xlsx, arrayBuffer) {
  const candidates = [
    () => xlsx.read(arrayBuffer, { type: "array" }),
    () => xlsx.read(new Uint8Array(arrayBuffer), { type: "array" }),
    () => xlsx.read(arrayBufferToSharedScheduleBinaryString(arrayBuffer), { type: "binary" }),
  ];
  const decodedBuffer = decodeSharedScheduleWorkbookTextBuffer(arrayBuffer);
  if (decodedBuffer && decodedBuffer.byteLength) {
    candidates.push(() => xlsx.read(decodedBuffer, { type: "array" }));
    candidates.push(() => xlsx.read(arrayBufferToSharedScheduleBinaryString(decodedBuffer), { type: "binary" }));
  }

  for (const readWorkbook of candidates) {
    try {
      const parsed = extractSharedScheduleWorkbookRows(xlsx, readWorkbook());
      if (parsed?.rows?.length) {
        return parsed;
      }
    } catch (error) {
      // Try the next safe workbook decoding path.
    }
  }
  return null;
}

function renderSharedScheduleSpreadsheetTable({ fileName = "", sheetName = "", rows = [], isPartial = false } = {}) {
  if (!sharedScheduleFilePreviewBody) {
    return;
  }

  const normalizedRows = (Array.isArray(rows) ? rows : []).slice(0, 50).map((row) => (Array.isArray(row) ? row : [row]));
  const maxColumns = Math.min(
    15,
    Math.max(
      1,
      ...normalizedRows.map((row) => row.length),
    ),
  );

  const shell = document.createElement("div");
  shell.className = "shared-schedule-sheet-preview";

  const summary = document.createElement("div");
  summary.className = "shared-schedule-sheet-preview__meta";
  summary.textContent = `${fileName}${sheetName ? ` · ${sheetName}` : ""}${isPartial ? " · 일부 행만 표시 중" : ""}`;
  shell.appendChild(summary);

  const tableWrap = document.createElement("div");
  tableWrap.className = "shared-schedule-sheet-preview__table-wrap";

  const table = document.createElement("table");
  table.className = "shared-schedule-sheet-preview__table";

  const body = document.createElement("tbody");
  if (!normalizedRows.length) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.textContent = "표시할 데이터가 없습니다.";
    emptyCell.colSpan = maxColumns;
    emptyRow.appendChild(emptyCell);
    body.appendChild(emptyRow);
  } else {
    normalizedRows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");
      for (let columnIndex = 0; columnIndex < maxColumns; columnIndex += 1) {
        const cell = document.createElement(rowIndex === 0 ? "th" : "td");
        cell.textContent = String(row[columnIndex] ?? "").trim();
        tr.appendChild(cell);
      }
      body.appendChild(tr);
    });
  }

  table.appendChild(body);
  tableWrap.appendChild(table);
  shell.appendChild(tableWrap);
  sharedScheduleFilePreviewBody.replaceChildren(shell);
}

function renderSharedScheduleSpreadsheetPreview(url = "", fileName = "", kind = "excel", attachment = {}) {
  if (!sharedScheduleFilePreviewBody) {
    return;
  }
  const hasEmbeddedData = Boolean(String(attachment?.originalData || attachment?.dataUrl || "").trim());
  if (!url && !hasEmbeddedData) {
    sharedScheduleFilePreviewBody.replaceChildren(
      createSharedScheduleFileFallback({ fileName, kind, message: "파일 URL이 없어 엑셀 미리보기를 열 수 없습니다." }),
    );
    return;
  }

  const loading = document.createElement("div");
  loading.className = "shared-schedule-file-preview-fallback";
  const badge = document.createElement("span");
  badge.className = "shared-schedule-file-preview-badge";
  badge.textContent = getSharedScheduleAttachmentKindLabel(kind, fileName);
  const label = document.createElement("strong");
  label.textContent = "미리보기 불러오는 중...";
  loading.append(badge, label);
  sharedScheduleFilePreviewBody.replaceChildren(loading);

  if (kind === "csv") {
    const embeddedText = String(attachment?.originalData || attachment?.dataUrl || "").trim();
    const embeddedCsvText = (() => {
      if (!embeddedText) {
        return "";
      }
      if (!embeddedText.startsWith("data:")) {
        return embeddedText;
      }
      try {
        const buffer = dataUrlToSharedScheduleArrayBuffer(embeddedText);
        return buffer ? new TextDecoder("utf-8").decode(buffer) : "";
      } catch (_error) {
        return "";
      }
    })();
    const csvTextPromise =
      embeddedCsvText
        ? Promise.resolve(embeddedCsvText)
        : fetchSharedSchedulePreviewResource(url).then((response) => response.text());
    csvTextPromise
      .then((text) => {
        renderSharedScheduleSpreadsheetTable({
          fileName,
          sheetName: "CSV",
          rows: parseSharedScheduleCsvRows(text, 30),
          isPartial: true,
        });
      })
      .catch(() => {
        sharedScheduleFilePreviewBody.replaceChildren(
          createSharedScheduleFileFallback({ fileName, kind, url, message: "CSV 미리보기를 불러올 수 없습니다." }),
        );
      });
    return;
  }

  Promise.all([ensureSharedScheduleXlsxRuntime(), readSharedScheduleAttachmentArrayBuffer(attachment, url)])
    .then(([xlsx, arrayBuffer]) => {
      const parsed = parseSharedScheduleWorkbookPreview(xlsx, arrayBuffer);
      if (!parsed) {
        throw new Error("unsupported workbook preview");
      }
      renderSharedScheduleSpreadsheetTable({
        fileName,
        sheetName: parsed.sheetName,
        rows: parsed.rows,
        isPartial: parsed.rows.length > 50,
      });
    })
    .catch((error) => {
      console.warn("[public attachment preview] xlsx preview failed", {
        fileName,
        reason: getSharedSchedulePreviewFailureMessage(error),
        error,
      });
      sharedScheduleFilePreviewBody.replaceChildren(
        createSharedScheduleFileFallback({
          fileName,
          kind,
          url,
          message: `엑셀 미리보기를 불러올 수 없습니다. ${getSharedSchedulePreviewFailureMessage(error)}`,
        }),
      );
    });
}

function openSharedScheduleAttachmentPreview(attachment = {}) {
  if (!sharedScheduleFilePreviewModal || !sharedScheduleFilePreviewBody) {
    return;
  }

  const fileName = getSharedScheduleAttachmentFileName(attachment);
  const kind = getSharedScheduleAttachmentKind(attachment);
  const url = resolveSharedScheduleAttachmentPreviewUrl(attachment);
  const typeLabel = getSharedScheduleAttachmentKindLabel(kind, fileName);

  if (sharedScheduleFilePreviewTitle) {
    sharedScheduleFilePreviewTitle.textContent = fileName;
  }
  if (sharedScheduleFilePreviewType) {
    sharedScheduleFilePreviewType.textContent = `${typeLabel} 첨부파일`;
  }
  sharedScheduleFilePreviewBody.replaceChildren();
  renderSharedScheduleFilePreviewActions(fileName, url);

  if (kind === "image" && url) {
    const image = document.createElement("img");
    image.className = "shared-schedule-file-preview-image";
    image.src = url;
    image.alt = fileName;
    image.loading = "lazy";
    image.decoding = "async";
    sharedScheduleFilePreviewBody.appendChild(image);
  } else if (kind === "video" && url) {
    const video = document.createElement("video");
    video.className = "shared-schedule-file-preview-video";
    video.src = url;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    sharedScheduleFilePreviewBody.appendChild(video);
  } else if (kind === "pdf" && url) {
    const frame = document.createElement("iframe");
    frame.className = "shared-schedule-file-preview-frame";
    frame.src = url;
    frame.title = fileName;
    sharedScheduleFilePreviewBody.appendChild(frame);
  } else if (["excel", "csv"].includes(kind)) {
    renderSharedScheduleSpreadsheetPreview(url, fileName, kind, attachment);
  } else if (kind === "text") {
    renderSharedScheduleTextPreview(url, fileName, kind);
  } else {
    sharedScheduleFilePreviewBody.appendChild(createSharedScheduleFileFallback({ fileName, kind, url }));
  }

  sharedScheduleFilePreviewModal.hidden = false;
  window.requestAnimationFrame(() => {
    sharedScheduleFilePreviewModal.classList.add("is-open");
  });
}

function closeSharedScheduleAttachmentPreview() {
  if (!sharedScheduleFilePreviewModal || sharedScheduleFilePreviewModal.hidden) {
    return;
  }
  sharedScheduleFilePreviewModal.classList.remove("is-open");
  window.setTimeout(() => {
    if (!sharedScheduleFilePreviewModal.classList.contains("is-open")) {
      sharedScheduleFilePreviewModal.hidden = true;
      sharedScheduleFilePreviewBody?.replaceChildren();
      sharedScheduleFilePreviewActions?.replaceChildren();
    }
  }, 180);
}

function normalizeSharedScheduleAttachments(attachments = []) {
  return (Array.isArray(attachments) ? attachments : [])
    .filter(Boolean)
    .map((attachment) => ({
      ...attachment,
      fileName: getSharedScheduleAttachmentName(attachment) || "첨부 파일",
      fileType: String(attachment?.fileType || attachment?.mimeType || "").trim(),
    }));
}

function getSharedScheduleAttachmentSignature(attachments = []) {
  return normalizeSharedScheduleAttachments(attachments)
    .map((attachment) => getSharedScheduleAttachmentName(attachment).toLowerCase())
    .filter(Boolean)
    .sort()
    .join("|");
}

function getSharedScheduleUpdatedStamp(entry = {}) {
  return (
    Date.parse(String(entry?.updatedAt || "").trim()) ||
    Date.parse(String(entry?.createdAt || "").trim()) ||
    Date.parse(String(entry?.uploadedAt || "").trim()) ||
    0
  );
}

function buildSharedScheduleStableId(dateKey = "", text = "", attachments = [], fallbackIndex = 0) {
  const base = [String(dateKey || "").trim(), String(text || "").trim(), getSharedScheduleAttachmentSignature(attachments)].join("::");
  let hash = 0;
  for (let index = 0; index < base.length; index += 1) {
    hash = (hash << 5) - hash + base.charCodeAt(index);
    hash |= 0;
  }
  return `shared_${Math.abs(hash).toString(36)}_${String(fallbackIndex)}`;
}

function normalizeSharedScheduleEntryForRender(entry = {}, dateKey = "", entryIndex = 0) {
  const text = String(entry?.text || entry?.content || "").trim();
  const attachments = normalizeSharedScheduleAttachments(entry?.images || entry?.attachments || []);
  if (!text && !attachments.length) {
    return null;
  }

  return {
    id: String(entry?.id || "").trim() || buildSharedScheduleStableId(dateKey, text, attachments, entryIndex),
    dateKey,
    entryIndex,
    text,
    firstLine: getSharedScheduleFirstLine(text),
    attachments,
    updatedAt: String(entry?.updatedAt || entry?.createdAt || "").trim(),
    createdAt: String(entry?.createdAt || "").trim(),
    deleted: Boolean(entry?.deleted || entry?.isDeleted),
    source: String(entry?.source || "").trim(),
  };
}

function getSharedScheduleSemanticKey(entry = {}, dateKey = "") {
  const normalizedDate = String(dateKey || entry?.dateKey || entry?.date || "").trim();
  const normalizedText = String(entry?.text || entry?.content || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  const attachmentSignature = getSharedScheduleAttachmentSignature(entry?.attachments || entry?.images || []);
  return [normalizedDate, normalizedText, attachmentSignature].join("::");
}

function readSharedScheduleDeletedKeys() {
  const storage = getSharedScheduleSnapshotStorage();
  if (!storage) {
    return new Set();
  }

  try {
    const parsed = JSON.parse(String(storage.getItem(WC26_SHARED_SCHEDULE_DELETED_KEYS) || "[]"));
    return new Set(Array.isArray(parsed) ? parsed.map((key) => String(key || "").trim()).filter(Boolean) : []);
  } catch (_error) {
    return new Set();
  }
}

function writeSharedScheduleDeletedKeys(deletedKeys) {
  const storage = getSharedScheduleSnapshotStorage();
  if (!storage) {
    return false;
  }

  try {
    storage.setItem(WC26_SHARED_SCHEDULE_DELETED_KEYS, JSON.stringify(Array.from(deletedKeys || []).filter(Boolean)));
    return true;
  } catch (_error) {
    return false;
  }
}

function getSharedScheduleDeleteKeys(entry = {}, dateKey = "") {
  const normalizedDate = String(dateKey || entry?.dateKey || entry?.date || "").trim();
  const id = String(entry?.id || "").trim();
  const semanticKey = getSharedScheduleSemanticKey(entry, normalizedDate);
  return [
    id ? `id::${normalizedDate}::${id}` : "",
    semanticKey ? `semantic::${semanticKey}` : "",
  ].filter(Boolean);
}

function isSharedScheduleEntryDeleted(entry = {}, dateKey = "") {
  const deletedKeys = readSharedScheduleDeletedKeys();
  return getSharedScheduleDeleteKeys(entry, dateKey).some((key) => deletedKeys.has(key));
}

function rememberSharedScheduleDeletedEntries(entries = []) {
  const deletedKeys = readSharedScheduleDeletedKeys();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    getSharedScheduleDeleteKeys(entry, entry?.dateKey).forEach((key) => deletedKeys.add(key));
  });
  writeSharedScheduleDeletedKeys(deletedKeys);
  return deletedKeys.size;
}

function filterDeletedSharedScheduleEntries(entries = []) {
  return (Array.isArray(entries) ? entries : []).filter(
    (entry) => entry && !entry.deleted && !isSharedScheduleEntryDeleted(entry, entry?.dateKey),
  );
}

function getSharedScheduleAttachmentCompleteness(attachment = {}) {
  return [
    attachment?.fileName,
    attachment?.name,
    attachment?.filename,
    attachment?.originalName,
    attachment?.fileType,
    attachment?.mimeType,
    attachment?.type,
    attachment?.publicUrl,
    attachment?.url,
    attachment?.previewUrl,
    attachment?.src,
    attachment?.downloadUrl,
    attachment?.dataUrl,
    attachment?.originalData,
    attachment?.storagePath,
    attachment?.path,
  ].filter((value) => String(value || "").trim()).length;
}

function mergeSharedScheduleAttachments(existingAttachments = [], incomingAttachments = []) {
  const merged = new Map();
  const addAttachment = (attachment = {}) => {
    const fileName = getSharedScheduleAttachmentFileName(attachment);
    const key = `${fileName.toLowerCase()}::${getSharedScheduleAttachmentSignature([attachment])}`;
    const previous = merged.get(key);
    if (!previous) {
      merged.set(key, { ...attachment });
      return;
    }

    const next =
      getSharedScheduleAttachmentCompleteness(attachment) > getSharedScheduleAttachmentCompleteness(previous)
        ? { ...attachment, ...previous, ...attachment }
        : { ...attachment, ...previous };
    merged.set(key, next);
  };

  normalizeSharedScheduleAttachments(existingAttachments).forEach(addAttachment);
  normalizeSharedScheduleAttachments(incomingAttachments).forEach(addAttachment);
  return Array.from(merged.values());
}

function mergeSharedScheduleDuplicateEntry(target = {}, duplicate = {}) {
  const mergedAttachments = mergeSharedScheduleAttachments(
    target.attachments || target.images || [],
    duplicate.attachments || duplicate.images || [],
  );
  target.attachments = mergedAttachments;
  target.images = mergedAttachments;
  if (!String(target.text || "").trim() && String(duplicate.text || duplicate.content || "").trim()) {
    target.text = String(duplicate.text || duplicate.content || "").trim();
    target.firstLine = getSharedScheduleFirstLine(target.text);
  }
  if (!String(target.createdAt || "").trim() && String(duplicate.createdAt || "").trim()) {
    target.createdAt = String(duplicate.createdAt).trim();
  }
}

function dedupeSharedScheduleEntries(entries = []) {
  const normalized = filterDeletedSharedScheduleEntries(entries);
  const sorted = normalized.slice().sort((left, right) => getSharedScheduleUpdatedStamp(right) - getSharedScheduleUpdatedStamp(left));
  const seenIds = new Map();
  const seenSemanticKeys = new Map();
  const deduped = [];

  sorted.forEach((entry) => {
    const dateKey = String(entry?.dateKey || "").trim();
    const idKey = String(entry?.id || "").trim() ? `${dateKey}::${String(entry.id).trim()}` : "";
    const semanticKey = getSharedScheduleSemanticKey(entry, dateKey);
    const duplicate = (idKey && seenIds.get(idKey)) || (semanticKey && seenSemanticKeys.get(semanticKey));

    if (duplicate) {
      mergeSharedScheduleDuplicateEntry(duplicate, entry);
      return;
    }

    if (idKey) {
      seenIds.set(idKey, entry);
    }
    if (semanticKey) {
      seenSemanticKeys.set(semanticKey, entry);
    }
    deduped.push(entry);
  });

  return deduped.sort((left, right) => {
    const dateCompare = String(right.dateKey || "").localeCompare(String(left.dateKey || ""));
    if (dateCompare) {
      return dateCompare;
    }
    return getSharedScheduleUpdatedStamp(right) - getSharedScheduleUpdatedStamp(left);
  });
}

function flattenSharedScheduleState(state = {}) {
  const entries = [];
  Object.entries(state || {}).forEach(([dateKey, value]) => {
    const source = Array.isArray(value) ? value : [value];
    source.forEach((entry, index) => {
      const normalized = normalizeSharedScheduleEntryForRender(entry, dateKey, index);
      if (normalized) {
        entries.push(normalized);
      }
    });
  });
  return entries;
}

function groupSharedScheduleEntries(entries = []) {
  const groupsByDate = new Map();
  entries.forEach((entry) => {
    const dateKey = String(entry?.dateKey || "").trim();
    if (!dateKey) {
      return;
    }
    if (!groupsByDate.has(dateKey)) {
      groupsByDate.set(dateKey, {
        dateKey,
        label: formatSharedScheduleDateLabel(dateKey),
        metaLabel: formatSharedScheduleDateMeta(dateKey),
        entries: [],
      });
    }
    groupsByDate.get(dateKey).entries.push(entry);
  });

  return Array.from(groupsByDate.values()).sort((left, right) => String(right.dateKey).localeCompare(String(left.dateKey)));
}

function buildSharedScheduleStateFromEntries(entries = []) {
  const payload = {};
  dedupeSharedScheduleEntries(entries).forEach((entry) => {
    const dateKey = String(entry?.dateKey || "").trim();
    if (!dateKey) {
      return;
    }
    if (!payload[dateKey]) {
      payload[dateKey] = [];
    }
    payload[dateKey].push({
      id: String(entry.id || "").trim() || undefined,
      text: String(entry.text || "").trim(),
      images: normalizeSharedScheduleAttachments(entry.attachments),
      createdAt: String(entry.createdAt || "").trim() || undefined,
      updatedAt: String(entry.updatedAt || entry.createdAt || new Date().toISOString()).trim(),
    });
  });
  return payload;
}

function getSharedScheduleSnapshotStorage() {
  try {
    return window.localStorage || null;
  } catch (_error) {
    return null;
  }
}

function readSharedScheduleSnapshotGroups() {
  const storage = getSharedScheduleSnapshotStorage();
  if (!storage) {
    return [];
  }

  try {
    const raw = String(storage.getItem(WC26_SHARED_SCHEDULE_SNAPSHOT_KEY) || "").trim();
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    const entries = dedupeSharedScheduleEntries(flattenSharedScheduleState(parsed?.state || {}).filter(Boolean));
    if (!entries.length) {
      return [];
    }
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      snapshotCount: entries.length,
      snapshotUpdatedAt: String(parsed?.updatedAt || "").trim(),
      source: "snapshot",
    };
    return groupSharedScheduleEntries(entries);
  } catch (_error) {
    return [];
  }
}

function flattenSharedScheduleGroups(groups = []) {
  const entries = [];
  (Array.isArray(groups) ? groups : []).forEach((group) => {
    const dateKey = String(group?.dateKey || "").trim();
    (Array.isArray(group?.entries) ? group.entries : []).forEach((entry) => {
      entries.push({ ...entry, dateKey: String(entry?.dateKey || dateKey).trim() });
    });
  });
  return entries.filter((entry) => entry.dateKey);
}

function readSharedScheduleRecoveryEntries() {
  return String(WC26_SHARED_SCHEDULE_RECOVERY_SOURCE || "")
    .split(/\r?\n/)
    .map((line, index) => {
      const parts = String(line || "").split("|");
      const dateKey = String(parts.shift() || "").trim();
      const updatedAt = String(parts.shift() || "").trim();
      const text = parts.join("|").trim();
      if (!dateKey || !text) {
        return null;
      }

      return normalizeSharedScheduleEntryForRender(
        {
          text,
          content: text,
          images: [],
          attachments: [],
          createdAt: updatedAt,
          updatedAt,
          source: "recovered-43",
        },
        dateKey,
        index,
      );
    })
    .filter(Boolean);
}

function mergeSharedScheduleRecoveryEntries(entries = []) {
  const currentEntries = (Array.isArray(entries) ? entries : []).filter(Boolean);
  const recoveryEntries = readSharedScheduleRecoveryEntries();
  if (!recoveryEntries.length) {
    return dedupeSharedScheduleEntries(currentEntries);
  }
  return dedupeSharedScheduleEntries([...currentEntries, ...recoveryEntries]);
}

function persistSharedScheduleRecoveryIfExpanded(syncWindow, mergedEntries = [], previousCount = 0) {
  const safeEntries = dedupeSharedScheduleEntries(mergedEntries);
  const recoveryCount = readSharedScheduleRecoveryEntries().length;
  if (!safeEntries.length || safeEntries.length <= previousCount || safeEntries.length < recoveryCount) {
    return false;
  }

  const groups = groupSharedScheduleEntries(safeEntries);
  persistSharedScheduleSnapshotFromGroups(groups);

  if (!syncWindow?.localStorage) {
    return true;
  }

  try {
    const raw = String(syncWindow.localStorage.getItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared) || "").trim();
    backupSharedScheduleRawIfNeeded(syncWindow, raw);
    const payload = JSON.stringify(buildSharedScheduleStateFromEntries(safeEntries));
    if (typeof syncWindow.writePersonalTimelineSharedRaw === "function") {
      syncWindow.writePersonalTimelineSharedRaw(payload);
    } else {
      syncWindow.localStorage.setItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared, payload);
      syncWindow.sessionStorage?.setItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared, payload);
    }
    return true;
  } catch (_error) {
    return false;
  }
}

function readSharedScheduleLocalStorageGroups() {
  const storage = getSharedScheduleSnapshotStorage();
  if (!storage) {
    return [];
  }

  try {
    const raw = String(storage.getItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared) || "").trim();
    if (!raw) {
      return [];
    }
    const entries = flattenSharedScheduleState(parseSharedScheduleState(raw)).filter(Boolean);
    if (!entries.length) {
      return [];
    }
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      localFallbackCount: entries.length,
      source: "localStorage",
    };
    return groupSharedScheduleEntries(dedupeSharedScheduleEntries(entries));
  } catch (_error) {
    return [];
  }
}

function readSharedScheduleFallbackGroups() {
  const entries = [
    ...flattenSharedScheduleGroups(readSharedScheduleLocalStorageGroups()),
    ...flattenSharedScheduleGroups(readSharedScheduleSnapshotGroups()),
  ];
  const mergedEntries = mergeSharedScheduleRecoveryEntries(entries);
  return groupSharedScheduleEntries(mergedEntries);
}

function persistSharedScheduleSnapshotFromGroups(groups = []) {
  const storage = getSharedScheduleSnapshotStorage();
  if (!storage) {
    return false;
  }

  try {
    const entries = [];
    groups.forEach((group) => {
      const dateKey = String(group?.dateKey || "").trim();
      (Array.isArray(group?.entries) ? group.entries : []).forEach((entry) => {
        entries.push({ ...entry, dateKey });
      });
    });
    if (!entries.length) {
      return false;
    }
    const state = buildSharedScheduleStateFromEntries(entries);
    storage.setItem(
      WC26_SHARED_SCHEDULE_SNAPSHOT_KEY,
      JSON.stringify({
        version: 1,
        updatedAt: new Date().toISOString(),
        state,
      }),
    );
    return true;
  } catch (_error) {
    return false;
  }
}

function mergeSharedScheduleOptimisticGroups(groups = []) {
  const optimisticEntries = sharedScheduleOptimisticEntries.filter(Boolean);
  if (!optimisticEntries.length) {
    return groups;
  }

  const entries = [];
  groups.forEach((group) => {
    const dateKey = String(group?.dateKey || "").trim();
    (Array.isArray(group?.entries) ? group.entries : []).forEach((entry) => {
      entries.push({ ...entry, dateKey });
    });
  });
  optimisticEntries.forEach((entry) => entries.push(entry));
  return groupSharedScheduleEntries(dedupeSharedScheduleEntries(entries));
}

function removeSharedScheduleOptimisticEntry(entryId = "") {
  const normalizedId = String(entryId || "").trim();
  if (!normalizedId) {
    return;
  }
  sharedScheduleOptimisticEntries = sharedScheduleOptimisticEntries.filter((entry) => String(entry?.id || "") !== normalizedId);
}

function backupSharedScheduleRawIfNeeded(syncWindow, raw = "") {
  const source = String(raw || "").trim();
  if (!source || !syncWindow?.localStorage) {
    return "";
  }

  const markerKey = `${WC26_SHARED_SCHEDULE_BACKUP_PREFIX}${WC26_BRIDGE_VERSION}`;
  try {
    const existingKey = syncWindow.sessionStorage?.getItem(markerKey) || "";
    if (existingKey && syncWindow.localStorage.getItem(existingKey)) {
      return existingKey;
    }

    const backupKey = `${WC26_SHARED_SCHEDULE_BACKUP_PREFIX}${getSharedScheduleTimestampKey()}`;
    syncWindow.localStorage.setItem(backupKey, source);
    syncWindow.sessionStorage?.setItem(markerKey, backupKey);
    return backupKey;
  } catch (_error) {
    return "";
  }
}

function persistSharedScheduleLocalDedupe(syncWindow, dedupedEntries = []) {
  if (!syncWindow?.localStorage) {
    return false;
  }

  const payload = buildSharedScheduleStateFromEntries(dedupedEntries);

  try {
    const raw = Object.keys(payload).length ? JSON.stringify(payload) : "";
    syncWindow.localStorage.setItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared, raw);
    syncWindow.sessionStorage?.setItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared, raw);
    return true;
  } catch (_error) {
    return false;
  }
}

function countSharedScheduleLocalEntries(syncWindow) {
  try {
    const localRaw = String(syncWindow?.localStorage?.getItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared) || "").trim();
    return flattenSharedScheduleState(parseSharedScheduleState(localRaw)).length;
  } catch (_error) {
    return 0;
  }
}

function collectSharedScheduleDiagnostics(syncWindow, rawState = {}, raw = "", assignmentState = {}, entries = [], dedupedEntries = []) {
  const localRaw = (() => {
    try {
      return String(syncWindow?.localStorage?.getItem(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared) || "").trim();
    } catch (_error) {
      return "";
    }
  })();
  const localEntries = flattenSharedScheduleState(parseSharedScheduleState(localRaw));
  const assignmentRow = assignmentState?.["영상취재팀 공동"];
  const assignmentCount =
    assignmentRow && typeof assignmentRow === "object"
      ? Object.values(assignmentRow).filter((value) => String(value || "").trim()).length
      : 0;
  const idSet = new Set(entries.map((entry) => `${entry.dateKey}::${entry.id}`).filter((key) => !key.endsWith("::")));
  const semanticSet = new Set(entries.map((entry) => getSharedScheduleSemanticKey(entry, entry.dateKey)).filter(Boolean));

  return {
    localStorageCount: localEntries.length,
    bridgeRawCount: flattenSharedScheduleState(rawState).length,
    assignmentCount,
    mergedBeforeDedupeCount: entries.length,
    uniqueIdCount: idSet.size,
    uniqueSemanticCount: semanticSet.size,
    dedupedCount: dedupedEntries.length,
    removedCount: Math.max(0, entries.length - dedupedEntries.length),
    renderedCount: Math.min(dedupedEntries.length, WC26_SHARED_SCHEDULE_RENDER_LIMIT),
    renderLimit: WC26_SHARED_SCHEDULE_RENDER_LIMIT,
    backupKey: "",
    localStorageDedupeApplied: false,
    rawBytes: String(raw || "").length,
  };
}

function readSharedScheduleGroups() {
  const syncWindow = getScheduleBridgeSyncWindow();

  if (!syncWindow || !isLazyIframeLoaded(scheduleBridgeSyncFrame)) {
    return mergeSharedScheduleOptimisticGroups(readSharedScheduleFallbackGroups());
  }

  const hasSharedReader =
    typeof syncWindow.readPersonalTimelineSharedRaw === "function" ||
    typeof syncWindow.getPersonalTimelineSharedEntries === "function";
  if (!hasSharedReader) {
    return mergeSharedScheduleOptimisticGroups(readSharedScheduleFallbackGroups());
  }

  let rawState = {};
  let timelineAssignmentsState = {};
  let raw = "";

  try {
    raw = String(syncWindow.readPersonalTimelineSharedRaw?.() || "").trim();
    rawState = raw ? JSON.parse(raw) || {} : {};
  } catch (_error) {
    raw = "";
    rawState = {};
  }

  try {
    const rawAssignments = String(syncWindow.readTimelineAssignmentsRaw?.() || "").trim();
    timelineAssignmentsState = rawAssignments ? JSON.parse(rawAssignments) || {} : {};
  } catch (_error) {
    timelineAssignmentsState = {};
  }

  const dateKeys = new Set(Object.keys(rawState));
  const sharedAssignmentRow = timelineAssignmentsState["영상취재팀 공동"];

  if (sharedAssignmentRow && typeof sharedAssignmentRow === "object") {
    Object.keys(sharedAssignmentRow).forEach((dateKey) => {
      if (String(sharedAssignmentRow[dateKey] || "").trim()) {
        dateKeys.add(dateKey);
      }
    });
  }

  const rawEntries = flattenSharedScheduleState(rawState);
  const fallbackGroups = readSharedScheduleFallbackGroups();
  const fallbackEntries = flattenSharedScheduleGroups(fallbackGroups);
  const hasAssignmentDates =
    sharedAssignmentRow &&
    typeof sharedAssignmentRow === "object" &&
    Object.values(sharedAssignmentRow).some((value) => String(value || "").trim());
  if (!rawEntries.length && !hasAssignmentDates && fallbackGroups.length) {
    return mergeSharedScheduleOptimisticGroups(fallbackGroups);
  }

  const rawDedupedEntries = dedupeSharedScheduleEntries(rawEntries);
  const entries = [];
  let effectiveRawState = rawState;

  if (rawEntries.length !== rawDedupedEntries.length) {
    const backupKey = backupSharedScheduleRawIfNeeded(syncWindow, raw);
    const localStorageDedupeApplied = persistSharedScheduleLocalDedupe(syncWindow, rawDedupedEntries);
    if (localStorageDedupeApplied) {
      effectiveRawState = buildSharedScheduleStateFromEntries(rawDedupedEntries);
    }
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      backupKey,
      localStorageDedupeApplied,
    };
  } else {
    const backupKey = backupSharedScheduleRawIfNeeded(syncWindow, raw);
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      backupKey,
      localStorageDedupeApplied: false,
    };
  }

  Array.from(dateKeys)
    .sort((left, right) => String(right).localeCompare(String(left)))
    .forEach((dateKey) => {
      let dateEntries = Array.isArray(effectiveRawState[dateKey]) ? effectiveRawState[dateKey] : [effectiveRawState[dateKey]].filter(Boolean);

      if (effectiveRawState === rawState) {
        try {
        if (typeof syncWindow.getPersonalTimelineSharedEntries === "function") {
          dateEntries = syncWindow.getPersonalTimelineSharedEntries(dateKey) || [];
        } else {
          dateEntries = Array.isArray(effectiveRawState[dateKey]) ? effectiveRawState[dateKey] : [effectiveRawState[dateKey]];
        }
        } catch (_error) {
          dateEntries = Array.isArray(effectiveRawState[dateKey]) ? effectiveRawState[dateKey] : [effectiveRawState[dateKey]];
        }
      }

      const normalizedEntries = Array.isArray(dateEntries)
        ? dateEntries
            .map((entry, index) => normalizeSharedScheduleEntryForRender(entry, dateKey, index))
            .filter(Boolean)
        : [];

      normalizedEntries.forEach((entry) => entries.push(entry));
    });

  const dedupedEntries = dedupeSharedScheduleEntries(entries);
  const mergedRecoveryEntries = mergeSharedScheduleRecoveryEntries([...dedupedEntries, ...fallbackEntries]);
  const recoveryExpandedCount = Math.max(0, mergedRecoveryEntries.length - dedupedEntries.length);
  if (!dedupedEntries.length && fallbackGroups.length) {
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      fallbackPreservedCount: flattenSharedScheduleGroups(fallbackGroups).length,
    };
    return mergeSharedScheduleOptimisticGroups(fallbackGroups);
  }

  const localEntryCountAfterMerge = countSharedScheduleLocalEntries(syncWindow);
  if (entries.length !== mergedRecoveryEntries.length || localEntryCountAfterMerge !== mergedRecoveryEntries.length) {
    const backupKey = sharedScheduleLastDiagnostics?.backupKey || backupSharedScheduleRawIfNeeded(syncWindow, raw);
    const localStorageDedupeApplied = persistSharedScheduleLocalDedupe(syncWindow, mergedRecoveryEntries);
    sharedScheduleLastDiagnostics = {
      ...(sharedScheduleLastDiagnostics || {}),
      backupKey,
      localStorageDedupeApplied,
    };
  }
  const recoveryPersisted = persistSharedScheduleRecoveryIfExpanded(syncWindow, mergedRecoveryEntries, Math.max(dedupedEntries.length, localEntryCountAfterMerge));
  const diagnostics = collectSharedScheduleDiagnostics(syncWindow, rawState, raw, timelineAssignmentsState, entries, mergedRecoveryEntries);
  sharedScheduleLastDiagnostics = {
    ...diagnostics,
    backupKey: sharedScheduleLastDiagnostics?.backupKey || diagnostics.backupKey || "",
    localStorageDedupeApplied: Boolean(sharedScheduleLastDiagnostics?.localStorageDedupeApplied),
    recoveryAppliedCount: recoveryExpandedCount,
    recoveryPersisted,
  };

  const groups = groupSharedScheduleEntries(mergedRecoveryEntries);
  const mergedGroups = mergeSharedScheduleOptimisticGroups(groups);
  persistSharedScheduleSnapshotFromGroups(mergedGroups);
  return mergedGroups;
}

function syncSharedScheduleDeleteModeUi() {
  if (sharedScheduleCreateButton) {
    sharedScheduleCreateButton.disabled = sharedScheduleComposerOpen;
  }
  if (sharedScheduleDeleteModeButton) {
    sharedScheduleDeleteModeButton.classList.toggle("is-active", sharedScheduleDeleteMode);
    sharedScheduleDeleteModeButton.textContent = sharedScheduleDeleteMode ? "삭제모드 해제" : "삭제모드";
  }

  if (sharedScheduleDeleteConfirmButton) {
    sharedScheduleDeleteConfirmButton.hidden = !sharedScheduleDeleteMode;
  }
}

function setSharedScheduleComposerOpen(isOpen) {
  sharedScheduleComposerOpen = Boolean(isOpen);
  if (sharedScheduleComposerPanel) {
    sharedScheduleComposerPanel.hidden = !sharedScheduleComposerOpen;
  }
  if (sharedScheduleComposerOpen) {
    seedSharedScheduleComposer();
    window.requestAnimationFrame(() => {
      sharedScheduleContentInput?.focus();
    });
  }
  syncSharedScheduleDeleteModeUi();
}

function renderSharedScheduleList() {
  if (!sharedScheduleList) {
    return;
  }

  const groups = readSharedScheduleGroups();
  const totalCount = groups.reduce((count, group) => count + group.entries.length, 0);
  let renderedCount = 0;
  let hasMoreItems = false;

  if (sharedScheduleListMeta) {
    sharedScheduleListMeta.textContent = totalCount
      ? `${totalCount}건 공용일정 / 최근 ${Math.min(
          totalCount,
          WC26_SHARED_SCHEDULE_RENDER_LIMIT,
        )}건 우선 표시`
      : "저장된 공용일정이 없습니다.";
  }

  sharedScheduleList.replaceChildren();
  sharedScheduleList.dataset.sharedScheduleDomCount = "0";
  sharedScheduleList.dataset.sharedScheduleTotalCount = String(totalCount);
  sharedScheduleList.dataset.sharedScheduleDedupeCount = String(sharedScheduleLastDiagnostics?.dedupedCount || totalCount);
  sharedScheduleList.dataset.sharedScheduleMergedCount = String(sharedScheduleLastDiagnostics?.mergedBeforeDedupeCount || totalCount);
  sharedScheduleList.dataset.sharedScheduleLocalCount = String(sharedScheduleLastDiagnostics?.localStorageCount || 0);
  sharedScheduleList.dataset.sharedScheduleBridgeRawCount = String(sharedScheduleLastDiagnostics?.bridgeRawCount || 0);
  sharedScheduleList.dataset.sharedScheduleAssignmentCount = String(sharedScheduleLastDiagnostics?.assignmentCount || 0);
  sharedScheduleList.dataset.sharedScheduleRemovedCount = String(sharedScheduleLastDiagnostics?.removedCount || 0);
  sharedScheduleList.dataset.sharedScheduleBackupKey = String(sharedScheduleLastDiagnostics?.backupKey || "");
  syncSharedScheduleDeleteModeUi();

  if (!groups.length) {
    const empty = document.createElement("p");
    empty.className = "shared-schedule-empty";
    empty.textContent = "저장된 공용일정이 없습니다.";
    sharedScheduleList.appendChild(empty);
    return;
  }

  groups.forEach((group) => {
    if (renderedCount >= WC26_SHARED_SCHEDULE_RENDER_LIMIT) {
      hasMoreItems = true;
      return;
    }

    const section = document.createElement("section");
    section.className = "shared-schedule-group";

    const heading = document.createElement("div");
    heading.className = "shared-schedule-group__date";
    heading.textContent = group.metaLabel;
    section.appendChild(heading);

    group.entries.forEach((entry) => {
      if (renderedCount >= WC26_SHARED_SCHEDULE_RENDER_LIMIT) {
        hasMoreItems = true;
        return;
      }

      const key = getSharedScheduleEntryKey(group.dateKey, entry.id);
      const card = document.createElement("article");
      card.className = "shared-schedule-card";
      card.tabIndex = 0;
      card.role = "button";
      card.dataset.sharedScheduleCard = "true";
      card.dataset.entryKey = key;
      card.setAttribute("aria-label", `${group.label} 공용일정 상세 보기`);
      if (sharedScheduleDeleteSelection.has(key)) {
        card.classList.add("is-selected");
      }

      const body = document.createElement("div");
      body.className = "shared-schedule-card__body";

      const headline = document.createElement("div");
      headline.className = "shared-schedule-card__headline";

      const dateNode = document.createElement("span");
      dateNode.className = "shared-schedule-card__date";
      dateNode.textContent = group.label;
      headline.appendChild(dateNode);

      const attachmentNode = document.createElement("span");
      attachmentNode.className = "shared-schedule-card__attachment-count";
      attachmentNode.textContent = entry.attachments.length ? `첨부 ${entry.attachments.length}개` : "첨부 없음";
      headline.appendChild(attachmentNode);
      body.appendChild(headline);

      const content = document.createElement("p");
      content.className = "shared-schedule-card__content";
      content.textContent = entry.firstLine || entry.text || "내용 없음";
      body.appendChild(content);

      if (entry.attachments.length) {
        const attachmentList = document.createElement("div");
        attachmentList.className = "shared-schedule-card__attachments";
        entry.attachments.slice(0, 3).forEach((attachment, attachmentIndex) => {
          const chip = buildSharedScheduleAttachmentChip({
            fileName: getSharedScheduleAttachmentFileName(attachment),
            fileType: attachment?.fileType || attachment?.mimeType || "",
            renderInlinePreview: false,
          });
          chip.className = "shared-schedule-attachment-chip shared-schedule-attachment-chip--compact";
          chip.dataset.sharedScheduleAttachmentPreview = "true";
          chip.dataset.dateKey = group.dateKey;
          chip.dataset.entryIndex = String(entry.entryIndex);
          chip.dataset.attachmentIndex = String(attachmentIndex);
          chip.tabIndex = 0;
          chip.setAttribute("role", "button");
          chip.setAttribute("aria-label", `${getSharedScheduleAttachmentFileName(attachment)} 미리보기`);
          attachmentList.appendChild(chip);
        });
        if (entry.attachments.length > 3) {
          const more = document.createElement("span");
          more.className = "shared-schedule-card__attachment-more";
          more.textContent = `+${entry.attachments.length - 3}개`;
          attachmentList.appendChild(more);
        }
        body.appendChild(attachmentList);
      }

      const meta = document.createElement("div");
      meta.className = "shared-schedule-card__meta";
      meta.textContent = entry.updatedAt ? `최근 수정 ${entry.updatedAt.slice(0, 16).replace("T", " ")}` : "보기 전용 요약";
      body.appendChild(meta);

      const actions = document.createElement("div");
      actions.className = "shared-schedule-card__actions";

      if (sharedScheduleDeleteMode) {
        const deleteLabel = document.createElement("label");
        deleteLabel.className = "shared-schedule-card__checkbox";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.sharedScheduleDelete = "true";
        checkbox.dataset.entryKey = key;
        checkbox.checked = sharedScheduleDeleteSelection.has(key);
        const copy = document.createElement("span");
        copy.textContent = "삭제";
        deleteLabel.append(checkbox, copy);
        actions.appendChild(deleteLabel);
      }

      card.append(body, actions);
      section.appendChild(card);
      renderedCount += 1;
    });

    if (section.querySelector(".shared-schedule-card")) {
      sharedScheduleList.appendChild(section);
    }
  });

  if (hasMoreItems) {
    const more = document.createElement("p");
    more.className = "shared-schedule-empty";
    more.textContent = `성능 보호를 위해 최근 ${WC26_SHARED_SCHEDULE_RENDER_LIMIT}건만 먼저 표시합니다.`;
    sharedScheduleList.appendChild(more);
  }

  sharedScheduleList.dataset.sharedScheduleDomCount = String(renderedCount);
  if (sharedScheduleLastDiagnostics) {
    sharedScheduleLastDiagnostics.renderedCount = renderedCount;
    window.__wc26SharedScheduleDiagnostics = { ...sharedScheduleLastDiagnostics };
  }
}

function seedSharedScheduleComposer() {
  if (sharedScheduleDateInput && !sharedScheduleDateInput.value) {
    sharedScheduleDateInput.value = getSharedScheduleTodayKey();
  }
  renderSharedSchedulePreview();
}

function clearSharedScheduleComposer() {
  if (sharedScheduleContentInput) {
    sharedScheduleContentInput.value = "";
  }
  if (sharedScheduleFileInput) {
    sharedScheduleFileInput.value = "";
  }
  if (sharedScheduleDateInput) {
    sharedScheduleDateInput.value = getSharedScheduleTodayKey();
  }
  resetSharedScheduleDraftFiles();
  renderSharedSchedulePreview();
}

function hasDuplicateSharedScheduleDraft(dateKey = "", text = "", draftFiles = []) {
  const draftEntry = {
    dateKey,
    text,
    attachments: Array.from(draftFiles || []).map((item) => ({
      fileName: item.fileName || item.name || "",
      name: item.fileName || item.name || "",
      fileType: item.fileType || item.type || "",
    })),
  };
  const draftSemanticKey = getSharedScheduleSemanticKey(draftEntry, dateKey);
  if (!draftSemanticKey) {
    return false;
  }

  return readSharedScheduleGroups().some((group) =>
    group.entries.some((entry) => getSharedScheduleSemanticKey(entry, group.dateKey) === draftSemanticKey),
  );
}

function buildSharedScheduleOptimisticEntry(dateKey = "", text = "", draftFiles = []) {
  const normalizedDate = String(dateKey || "").trim();
  const normalizedText = String(text || "").trim();
  const now = new Date().toISOString();
  return {
    id: `optimistic-shared-${Date.now()}`,
    dateKey: normalizedDate,
    text: normalizedText,
    firstLine: getSharedScheduleFirstLine(normalizedText),
    attachments: Array.from(draftFiles || []).map((item) => ({
      fileName: item.fileName || item.name || "첨부 파일",
      name: item.fileName || item.name || "첨부 파일",
      fileType: item.fileType || item.type || "",
      mimeType: item.fileType || item.type || "",
    })),
    createdAt: now,
    updatedAt: now,
    entryIndex: -1,
    isOptimistic: true,
  };
}

function findSharedScheduleEntryByKey(entryKey = "") {
  const normalizedKey = String(entryKey || "").trim();
  if (!normalizedKey) {
    return null;
  }

  for (const group of readSharedScheduleGroups()) {
    for (const entry of group.entries) {
      if (getSharedScheduleEntryKey(group.dateKey, entry.id) === normalizedKey) {
        return { group, entry };
      }
    }
  }

  return null;
}

function openSharedScheduleDetailModal(entryKey = "") {
  const target = findSharedScheduleEntryByKey(entryKey);
  if (!target || !sharedScheduleDetailModal) {
    return;
  }

  const { group, entry } = target;
  if (sharedScheduleDetailTitle) {
    sharedScheduleDetailTitle.textContent = entry.firstLine || "공용일정 상세";
  }
  if (sharedScheduleDetailDate) {
    sharedScheduleDetailDate.textContent = group.metaLabel || group.label || "";
  }
  if (sharedScheduleDetailContent) {
    sharedScheduleDetailContent.textContent = entry.text || entry.firstLine || "내용 없음";
  }
  if (sharedScheduleDetailMeta) {
    sharedScheduleDetailMeta.textContent = entry.updatedAt
      ? `최근 수정 ${entry.updatedAt.slice(0, 16).replace("T", " ")}`
      : "작성/수정 시간 정보 없음";
  }
  if (sharedScheduleDetailAttachments) {
    sharedScheduleDetailAttachments.replaceChildren();
    sharedScheduleDetailAttachments.classList.toggle("is-empty", entry.attachments.length === 0);
    if (!entry.attachments.length) {
      const empty = document.createElement("p");
      empty.className = "shared-schedule-empty";
      empty.textContent = "첨부파일 없음";
      sharedScheduleDetailAttachments.appendChild(empty);
    } else {
      entry.attachments.forEach((attachment, attachmentIndex) => {
        const chip = buildSharedScheduleAttachmentChip({
          fileName: getSharedScheduleAttachmentFileName(attachment),
          fileType: attachment?.fileType || attachment?.mimeType || "",
          renderInlinePreview: false,
        });
        chip.className = "shared-schedule-attachment-chip";
        chip.dataset.sharedScheduleAttachmentPreview = "true";
        chip.dataset.dateKey = group.dateKey;
        chip.dataset.entryIndex = String(entry.entryIndex);
        chip.dataset.attachmentIndex = String(attachmentIndex);
        chip.tabIndex = 0;
        chip.setAttribute("role", "button");
        chip.setAttribute("aria-label", `${getSharedScheduleAttachmentFileName(attachment)} 미리보기`);
        sharedScheduleDetailAttachments.appendChild(chip);
      });
    }
  }

  sharedScheduleDetailModal.hidden = false;
  window.requestAnimationFrame(() => {
    sharedScheduleDetailModal.classList.add("is-open");
  });
}

function closeSharedScheduleDetailModal() {
  if (!sharedScheduleDetailModal || sharedScheduleDetailModal.hidden) {
    return;
  }
  closeSharedScheduleAttachmentPreview();
  sharedScheduleDetailModal.classList.remove("is-open");
  window.setTimeout(() => {
    if (!sharedScheduleDetailModal.classList.contains("is-open")) {
      sharedScheduleDetailModal.hidden = true;
      clearSharedScheduleAttachmentContainer(sharedScheduleDetailAttachments);
    }
  }, 180);
}

function getSharedScheduleAttachmentFromPreviewTarget(previewTarget) {
  if (!previewTarget) {
    return null;
  }

  const dateKey = String(previewTarget.dataset.dateKey || "").trim();
  const entryIndex = Number(previewTarget.dataset.entryIndex);
  const attachmentIndex = Number(previewTarget.dataset.attachmentIndex);
  if (!dateKey || Number.isNaN(entryIndex) || Number.isNaN(attachmentIndex)) {
    return null;
  }

  const groups = readSharedScheduleGroups();
  const entry = groups.find((group) => group.dateKey === dateKey)?.entries.find((item) => item.entryIndex === entryIndex);
  return entry?.attachments?.[attachmentIndex] || null;
}

function handleSharedScheduleAttachmentPreviewClick(event) {
  const previewTarget = event.target.closest("[data-shared-schedule-attachment-preview]");
  if (!previewTarget) {
    return false;
  }

  event.preventDefault();
  event.stopPropagation();
  const attachment = getSharedScheduleAttachmentFromPreviewTarget(previewTarget);
  if (attachment) {
    openSharedScheduleAttachmentPreview(attachment);
  } else {
    showToast("첨부파일 정보를 찾지 못했습니다.");
  }
  return true;
}

function handleSharedScheduleAttachmentPreviewKeydown(event) {
  if (!["Enter", " "].includes(event.key)) {
    return;
  }
  if (event.target.closest("[data-shared-schedule-attachment-preview]")) {
    handleSharedScheduleAttachmentPreviewClick(event);
  }
}

async function handleSharedScheduleSave() {
  if (sharedScheduleIsSaving) {
    return;
  }

  const dateKey = String(sharedScheduleDateInput?.value || "").trim();
  const text = String(sharedScheduleContentInput?.value || "").trim();

  if (!dateKey) {
    showToast("날짜를 선택해주세요.");
    return;
  }

  if (!text) {
    showToast("공용 일정 내용을 입력해주세요.");
    return;
  }

  if (hasDuplicateSharedScheduleDraft(dateKey, text, sharedScheduleDraftFiles)) {
    showToast("같은 날짜/내용/첨부의 공용일정이 이미 있습니다.");
    return;
  }

  sharedScheduleIsSaving = true;
  if (sharedScheduleSaveButton) {
    sharedScheduleSaveButton.disabled = true;
    sharedScheduleSaveButton.textContent = "저장 중...";
  }

  const optimisticEntry = buildSharedScheduleOptimisticEntry(dateKey, text, sharedScheduleDraftFiles);
  sharedScheduleOptimisticEntries.push(optimisticEntry);
  renderSharedScheduleList();

  try {
    const syncWindow = await waitForScheduleBridgeFunction("saveCommonScheduleWithAttachment");
    const saveFn = syncWindow?.saveCommonScheduleWithAttachment;
    if (typeof saveFn !== "function") {
      throw new Error("shared schedule save bridge unavailable");
    }
    await saveFn.call(syncWindow, {
      dateKey,
      text,
      selection: {
        mediaItems: sharedScheduleDraftFiles.map((item) => ({
          id: item.id,
          file: item.file,
          name: item.fileName,
          fileName: item.fileName,
          fileType: item.fileType,
          mimeType: item.fileType,
          source: "schedule",
        })),
      },
    });
    removeSharedScheduleOptimisticEntry(optimisticEntry.id);
    clearSharedScheduleComposer();
    setSharedScheduleComposerOpen(false);
    sharedScheduleDeleteMode = false;
    sharedScheduleDeleteSelection.clear();
    renderSharedScheduleList();
    requestScheduleBridgeSummary();
    showToast("공용일정을 저장했습니다.");
  } catch (error) {
    removeSharedScheduleOptimisticEntry(optimisticEntry.id);
    renderSharedScheduleList();
    console.error("[NEW SUIT] shared schedule save failed", error);
    showToast("공용일정 저장에 실패했습니다.");
  } finally {
    sharedScheduleIsSaving = false;
    if (sharedScheduleSaveButton) {
      sharedScheduleSaveButton.disabled = false;
      sharedScheduleSaveButton.textContent = "저장";
    }
  }
}

function toggleSharedScheduleDeleteMode() {
  sharedScheduleDeleteMode = !sharedScheduleDeleteMode;
  sharedScheduleDeleteSelection.clear();
  renderSharedScheduleList();
}

async function handleSharedScheduleDeleteConfirm() {
  if (!sharedScheduleDeleteSelection.size) {
    showToast("삭제할 공용일정을 선택해주세요.");
    return;
  }

  const groups = readSharedScheduleGroups();
  const targets = [];
  groups.forEach((group) => {
    group.entries.forEach((entry) => {
      const key = getSharedScheduleEntryKey(group.dateKey, entry.id);
      if (!sharedScheduleDeleteSelection.has(key)) {
        return;
      }
      targets.push({ ...entry, dateKey: group.dateKey, entryKey: key });
    });
  });

  if (!targets.length) {
    showToast("삭제할 공용일정을 다시 선택해주세요.");
    sharedScheduleDeleteSelection.clear();
    renderSharedScheduleList();
    return;
  }

  const confirmMessage =
    targets.length === 1 ? "이 공용일정을 삭제하시겠습니까?" : "선택한 공용일정을 삭제하시겠습니까?";
  if (!window.confirm(confirmMessage)) {
    return;
  }

  const syncWindow = getScheduleBridgeSyncWindow();
  const deleteFn = syncWindow?.deletePersonalTimelineSharedEntryAt;
  const targetsByDate = new Map();
  targets.forEach((entry) => {
    const entryIndex = Number(entry.entryIndex);
    if (Number.isNaN(entryIndex) || entryIndex < 0) {
      return;
    }
    if (!targetsByDate.has(entry.dateKey)) {
      targetsByDate.set(entry.dateKey, []);
    }
    targetsByDate.get(entry.dateKey).push(entryIndex);
  });

  if (typeof deleteFn === "function") {
    Array.from(targetsByDate.entries()).forEach(([dateKey, entryIndexes]) => {
      entryIndexes
        .slice()
        .sort((left, right) => right - left)
        .forEach((entryIndex) => {
          try {
            deleteFn.call(syncWindow, null, dateKey, entryIndex);
          } catch (_error) {
            // The tombstone/snapshot update below prevents stale fallbacks from rehydrating this row.
          }
        });
    });
  }

  rememberSharedScheduleDeletedEntries(targets);

  const selectedKeys = new Set(targets.map((entry) => entry.entryKey));
  const remainingEntries = flattenSharedScheduleGroups(groups).filter((entry) => {
    const key = getSharedScheduleEntryKey(entry.dateKey, entry.id);
    return !selectedKeys.has(key) && !isSharedScheduleEntryDeleted(entry, entry.dateKey);
  });
  const dedupedRemainingEntries = dedupeSharedScheduleEntries(remainingEntries);
  const remainingGroups = groupSharedScheduleEntries(dedupedRemainingEntries);
  persistSharedScheduleSnapshotFromGroups(remainingGroups);
  persistSharedScheduleLocalDedupe(syncWindow || window, dedupedRemainingEntries);

  sharedScheduleLastDiagnostics = {
    ...(sharedScheduleLastDiagnostics || {}),
    deletedTombstoneCount: readSharedScheduleDeletedKeys().size,
    lastDeletedCount: targets.length,
  };
  sharedScheduleDeleteSelection.clear();
  sharedScheduleDeleteMode = false;
  renderSharedScheduleList();
  requestScheduleBridgeSummary();
  showToast(targets.length === 1 ? "공용일정을 삭제했습니다." : "선택한 공용일정을 삭제했습니다.");
}

function handleSharedScheduleListClick(event) {
  if (handleSharedScheduleAttachmentPreviewClick(event)) {
    return;
  }

  const cardTarget = event.target.closest("[data-shared-schedule-card]");
  if (!cardTarget) {
    return;
  }

  const entryKey = String(cardTarget.dataset.entryKey || "").trim();
  if (!entryKey) {
    return;
  }

  if (sharedScheduleDeleteMode) {
    const checkbox = cardTarget.querySelector("[data-shared-schedule-delete]");
    if (checkbox && event.target !== checkbox) {
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        sharedScheduleDeleteSelection.add(entryKey);
      } else {
        sharedScheduleDeleteSelection.delete(entryKey);
      }
      cardTarget.classList.toggle("is-selected", checkbox.checked);
    }
    return;
  }

  openSharedScheduleDetailModal(entryKey);
}

function handleSharedScheduleListChange(event) {
  const checkbox = event.target.closest("[data-shared-schedule-delete]");
  if (!checkbox) {
    return;
  }

  const entryKey = String(checkbox.dataset.entryKey || "").trim();
  if (!entryKey) {
    return;
  }

  if (checkbox.checked) {
    sharedScheduleDeleteSelection.add(entryKey);
  } else {
    sharedScheduleDeleteSelection.delete(entryKey);
  }
}

function handleSharedScheduleListKeydown(event) {
  if (!["Enter", " "].includes(event.key)) {
    return;
  }

  const cardTarget = event.target.closest("[data-shared-schedule-card]");
  if (!cardTarget || !sharedScheduleList?.contains(cardTarget)) {
    return;
  }

  event.preventDefault();
  if (sharedScheduleDeleteMode) {
    const checkbox = cardTarget.querySelector("[data-shared-schedule-delete]");
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      const entryKey = String(cardTarget.dataset.entryKey || "").trim();
      if (checkbox.checked) {
        sharedScheduleDeleteSelection.add(entryKey);
      } else {
        sharedScheduleDeleteSelection.delete(entryKey);
      }
      cardTarget.classList.toggle("is-selected", checkbox.checked);
    }
    return;
  }

  openSharedScheduleDetailModal(cardTarget.dataset.entryKey || "");
}

function renderSharedScheduleShell() {
  seedSharedScheduleComposer();
  renderSharedScheduleList();
}

function renderSharedScheduleShellIfActive() {
  if (scheduleBridgeSection !== "shared" || !scheduleLocalSharedShell || scheduleLocalSharedShell.hidden) {
    return;
  }
  renderSharedScheduleShell();
}

function setPersonalScheduleComposerOpen() {
  personalScheduleComposerOpen = false;
  if (personalScheduleComposerPanel) {
    personalScheduleComposerPanel.hidden = true;
  }
}

function getPersonalScheduleLegacyOptionValues(field = "", dateKeyOverride = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  const dateKey = dateKeyOverride || personalScheduleDateInput?.value || getTimelineReferenceDateKey();
  const member = WC26_SCHEDULE_BRIDGE_MEMBER_ORDER[0];

  try {
    if (typeof syncWindow?.renderPersonalTimelinePersonRow === "function") {
      const host = document.createElement("div");
      host.innerHTML = syncWindow.renderPersonalTimelinePersonRow(member, dateKey);
      const select = host.querySelector(`.personal-timeline-detail-select[data-field="${field}"]`);
      const values = Array.from(select?.options || [])
        .map((option) => String(option.value || "").trim())
        .filter(Boolean);
      if (values.length) {
        return values;
      }
    }
  } catch (_error) {
    // Fall through to the hard-coded legacy option mirror below.
  }

  return WC26_PERSONAL_SCHEDULE_FALLBACK_OPTIONS[field] || [];
}

function getPersonalScheduleLegacyOptionLabel(field = "", value = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  try {
    if (typeof syncWindow?.getPersonalTimelineOptionLabel === "function") {
      return String(syncWindow.getPersonalTimelineOptionLabel(field, value) || value).trim();
    }
  } catch (_error) {
    // Keep the local HUD shell independent from optional legacy label helpers.
  }
  if (field === "TVU") {
    const tvuMap = {
      "1번": "TVU 1번 TRS 0001",
      "15번": "TVU 15번 TRS 0015",
      "16번": "TVU 16번 TRS 0016",
      "17번": "TVU 17번 TRS 0017",
      "18번": "TVU 18번 TRS 0018",
      "19번": "TVU 19번 TRS 0019",
      "TVU 미지참": "TVU 미지참",
    };
    return tvuMap[value] || value;
  }
  return value;
}

function getPersonalScheduleDisplayOptionLabel(field = "", value = "") {
  const normalizedValue = String(value || "").trim();
  if (!normalizedValue) {
    return "";
  }
  if (field === "TVU") {
    return parsePersonalScheduleTvuTrs(normalizedValue).tvu || normalizedValue;
  }
  if (field === "시작시간" || field === "종료시간") {
    return `현지시각 ${normalizedValue}`;
  }
  return getPersonalScheduleLegacyOptionLabel(field, normalizedValue);
}

function populatePersonalScheduleSelect(select, values = [], placeholder = "") {
  if (!select) {
    return;
  }
  const currentValue = String(select.value || "").trim();
  select.replaceChildren();
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  if (placeholder !== "종료시간 미정") {
    placeholderOption.disabled = true;
    placeholderOption.hidden = true;
  }
  select.appendChild(placeholderOption);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = getPersonalScheduleDisplayOptionLabel(select.dataset.legacyField || "", value);
    select.appendChild(option);
  });
  select.value = values.includes(currentValue) ? currentValue : "";
}

function populatePersonalScheduleOptions() {
  const memberOptions = WC26_SCHEDULE_BRIDGE_MEMBER_ORDER;
  populatePersonalScheduleSelect(personalScheduleNameInput, memberOptions, "이름");
  populatePersonalScheduleSelect(personalSchedulePhotographerInput, memberOptions, "촬영기자");
  [
    [personalScheduleReporterInput, "취재기자", "취재기자"],
    [personalScheduleLocalTimeInput, "시작시간", "현지시각"],
    [personalScheduleTaskInput, "업무내용", "업무내용"],
    [personalSchedulePlaceInput, "장소", "장소"],
    [personalScheduleTvuInput, "TVU", "TVU"],
    [personalScheduleEndTimeInput, "종료시간", "종료시간 미정"],
  ].forEach(([select, field, placeholder]) => {
    if (select) {
      select.dataset.legacyField = field;
    }
    populatePersonalScheduleSelect(select, getPersonalScheduleLegacyOptionValues(field), placeholder);
  });
}

function parsePersonalScheduleTvuTrs(value = "") {
  const normalizedValue = String(value || "").trim();
  const tvuTrsMap = {
    "1번": { tvu: "TVU 1", trs: "TRS 001" },
    "15번": { tvu: "TVU 15", trs: "TRS 15" },
    "16번": { tvu: "TVU 16", trs: "TRS 16" },
    "17번": { tvu: "TVU 17", trs: "TRS 17" },
    "18번": { tvu: "TVU 18", trs: "TRS 18" },
    "19번": { tvu: "TVU 19", trs: "TRS 19" },
  };
  if (tvuTrsMap[normalizedValue]) {
    return {
      ...tvuTrsMap[normalizedValue],
      label: `${tvuTrsMap[normalizedValue].tvu} ${tvuTrsMap[normalizedValue].trs}`,
    };
  }
  if (normalizedValue === "TVU 미지참") {
    return { tvu: "TVU 미지참", trs: "TRS 미지참", label: "TVU 미지참" };
  }
  const label = getPersonalScheduleLegacyOptionLabel("TVU", value);
  const tvuMatch = label.match(/TVU\s*(\d+)(?:번)?/i);
  const trsMatch = label.match(/TRS\s*0*(\d+)/i);
  const tvuNumber = tvuMatch?.[1] || "";
  const trsNumber = trsMatch?.[1] || "";
  return {
    tvu: tvuNumber ? `TVU ${tvuNumber}` : label,
    trs: trsNumber ? `TRS ${tvuNumber === "1" ? "001" : trsNumber}` : "",
    label,
  };
}

function getPersonalScheduleKoreaTimeLabel(dateKey = "", localTime = "", place = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  try {
    const city = syncWindow?.resolveScheduleCityContext?.(place)?.city || place;
    const info = syncWindow?.buildWorldCupTimeInfo?.(dateKey, localTime, city);
    if (!info?.koreaTime) {
      return "";
    }
    return `${info.koreaTime}${info.dayDiff || ""}`;
  } catch (_error) {
    return "";
  }
}

function updatePersonalScheduleDerivedFields() {
  document.querySelectorAll("[data-personal-schedule-row]").forEach(updatePersonalScheduleRowDerivedFields);
}

function seedPersonalScheduleComposer() {
  if (personalScheduleDateInput && !personalScheduleDateInput.value) {
    personalScheduleDateInput.value = getTimelineReferenceDateKey();
  }
}

function clearPersonalScheduleComposer() {
  renderPersonalScheduleList();
}

function getPersonalScheduleFieldValue(detail = {}, field = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  try {
    if (typeof syncWindow?.getPersonalTimelineDetailEntryFieldValue === "function") {
      return String(syncWindow.getPersonalTimelineDetailEntryFieldValue(detail, field) || "").trim();
    }
  } catch (_error) {
    // Fallback below.
  }
  return String(detail?.[field] || "").trim();
}

function getPersonalScheduleTaskLabel(value = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  try {
    if (typeof syncWindow?.getPersonalTimelineTaskReportLabel === "function") {
      return String(syncWindow.getPersonalTimelineTaskReportLabel(value) || value).trim();
    }
  } catch (_error) {
    // Fallback below.
  }
  return value;
}

function getPersonalScheduleEntries() {
  const syncWindow = getScheduleBridgeSyncWindow();
  const entries = [];
  try {
    if (typeof syncWindow?.reloadPersonalTimelineDetailSelectionsFromStorage === "function") {
      syncWindow.reloadPersonalTimelineDetailSelectionsFromStorage();
    }
    const raw = String(syncWindow?.readPersonalTimelineDetailsRaw?.() || "").trim();
    const state = raw ? JSON.parse(raw) || {} : {};
    Object.entries(state || {}).forEach(([dateKey, people]) => {
      Object.entries(people || {}).forEach(([name, personEntries]) => {
        (Array.isArray(personEntries) ? personEntries : [personEntries]).forEach((detail, entryIndex) => {
          if (!detail || typeof detail !== "object") {
            return;
          }
          const text =
            typeof syncWindow?.buildPersonalTimelineReportText === "function"
              ? String(syncWindow.buildPersonalTimelineReportText(name, detail, dateKey) || "").trim()
              : "";
          const taskValue = getPersonalScheduleFieldValue(detail, "업무내용");
          const place = getPersonalScheduleFieldValue(detail, "장소");
          const startTime = getPersonalScheduleFieldValue(detail, "시작시간");
          if (!text && !taskValue && !place && !startTime) {
            return;
          }
          entries.push({
            id: `${dateKey}::${name}::${entryIndex}`,
            name,
            dateKey,
            detail,
            entryIndex,
            savedAt: Number(detail?._savedAt || detail?._createdAt || 0),
            text,
          });
        });
      });
    });
    if (!entries.length && typeof syncWindow?.getPersonalTimelineSummaryReportsForDate === "function") {
      (syncWindow.getPersonalTimelineSummaryReportsForDate("9999-12-31") || []).forEach((item) => entries.push(item));
    }
  } catch (_error) {
    // Keep the parent HUD shell read-only if the legacy state is temporarily unavailable.
  }

  const seen = new Set();
  return entries
    .map((item, fallbackIndex) => {
      const detail = item?.detail || {};
      const dateKey = String(item?.dateKey || "").trim();
      const name = String(item?.name || "").trim();
      const entryIndex = Number.isInteger(item?.entryIndex) ? item.entryIndex : fallbackIndex;
      const startTime = getPersonalScheduleFieldValue(detail, "시작시간");
      const endTime = getPersonalScheduleFieldValue(detail, "종료시간") || String(detail?.endTimeLabel || detail?.endLabel || "").trim();
      const place = getPersonalScheduleFieldValue(detail, "장소");
      const reporter = getPersonalScheduleFieldValue(detail, "취재기자");
      const tvuValue = getPersonalScheduleFieldValue(detail, "TVU");
      const taskValue = getPersonalScheduleFieldValue(detail, "업무내용");
      const key = String(item?.id || `${dateKey}::${name}::${startTime}::${place}::${taskValue}::${entryIndex}`).trim();
      if (!dateKey || !name || seen.has(key)) {
        return null;
      }
      seen.add(key);
      return {
        key,
        dateKey,
        name,
        entryIndex,
        reporter,
        startTime,
        endTime,
        place,
        tvuValue,
        tvuLabel: getPersonalScheduleLegacyOptionLabel("TVU", tvuValue),
        taskValue,
        taskLabel: getPersonalScheduleTaskLabel(taskValue),
        text: String(item?.text || "").trim(),
        savedAt: Number(item?.savedAt || 0),
        detail,
        ended: isPersonalScheduleEntryEnded(detail),
        endedAt: String(detail?.manualEndedAt || detail?.inactiveAt || detail?.endedAt || "").trim(),
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      if (left.dateKey !== right.dateKey) {
        return String(right.dateKey).localeCompare(String(left.dateKey));
      }
      return (right.savedAt || 0) - (left.savedAt || 0);
    });
}

function formatPersonalScheduleDateLabel(dateKey = "") {
  const match = String(dateKey || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return String(dateKey || "").trim();
  }
  return `${Number(match[2])}/${Number(match[3])}`;
}

function getPersonalScheduleSavedEntry(dateKey = "", name = "") {
  const syncWindow = getScheduleBridgeSyncWindow();
  try {
    if (typeof syncWindow?.reloadPersonalTimelineDetailSelectionsFromStorage === "function") {
      syncWindow.reloadPersonalTimelineDetailSelectionsFromStorage();
    }
    if (typeof syncWindow?.getPersonalTimelineDetailEntries === "function") {
      const entries = syncWindow.getPersonalTimelineDetailEntries(dateKey, name);
      const entryIndex = Array.isArray(entries) ? entries.findIndex((item) => item && typeof item === "object") : -1;
      if (entryIndex >= 0) {
        return {
          detail: entries[entryIndex],
          entryIndex,
        };
      }
    }
  } catch (_error) {
    // Keep rendering empty editable rows if legacy detail reads are not ready yet.
  }
  return null;
}

function getPersonalScheduleSavedDetail(dateKey = "", name = "") {
  return getPersonalScheduleSavedEntry(dateKey, name)?.detail || null;
}

function isPersonalScheduleEntryEnded(detail = {}) {
  const endedText = String(detail?.manualEnded || detail?.inactive || detail?.ended || detail?.status || "")
    .trim()
    .toLowerCase();
  return endedText === "true" || endedText === "1" || endedText === "ended" || endedText === "종료";
}

function createPersonalScheduleSelect(field = "", placeholder = "", value = "") {
  const select = document.createElement("select");
  select.className = "shared-schedule-input personal-schedule-inline-input";
  select.dataset.personalScheduleField = field;
  select.dataset.legacyField = field;
  populatePersonalScheduleSelect(select, getPersonalScheduleLegacyOptionValues(field), placeholder);
  if (value) {
    const normalizedValue = String(value || "").trim();
    if (!Array.from(select.options).some((option) => option.value === normalizedValue)) {
      const option = document.createElement("option");
      option.value = normalizedValue;
      option.textContent = getPersonalScheduleDisplayOptionLabel(field, normalizedValue);
      select.appendChild(option);
    }
    select.value = normalizedValue;
  }
  return select;
}

function createPersonalScheduleReadonlyInput(field = "", value = "") {
  const input = document.createElement("input");
  input.type = "text";
  input.readOnly = true;
  input.className = "shared-schedule-input personal-schedule-inline-input";
  input.dataset.personalScheduleField = field;
  input.value = value;
  return input;
}

function getPersonalScheduleRowField(row, field = "") {
  return row?.querySelector(`[data-personal-schedule-field="${field}"]`) || null;
}

function updatePersonalScheduleRowDerivedFields(row) {
  if (!row) {
    return;
  }
  const dateKey = String(personalScheduleDateInput?.value || getTimelineReferenceDateKey()).trim();
  const startTime = String(getPersonalScheduleRowField(row, "시작시간")?.value || "").trim();
  const endTimeSelect = getPersonalScheduleRowField(row, "종료시간");
  const openEndInput = getPersonalScheduleRowField(row, "종료시간미정");
  const place = String(getPersonalScheduleRowField(row, "장소")?.value || "").trim();
  const tvuValue = String(getPersonalScheduleRowField(row, "TVU")?.value || "").trim();
  const koreaStartInput = getPersonalScheduleRowField(row, "한국시작시간");
  const koreaEndInput = getPersonalScheduleRowField(row, "한국종료시간");
  const trsInput = getPersonalScheduleRowField(row, "TRS");

  if (koreaStartInput) {
    koreaStartInput.value = getPersonalScheduleKoreaTimeLabel(dateKey, startTime, place) || "자동";
  }
  if (endTimeSelect) {
    endTimeSelect.disabled = Boolean(openEndInput?.checked);
    if (openEndInput?.checked) {
      endTimeSelect.value = "";
    }
  }
  if (koreaEndInput) {
    const endTime = openEndInput?.checked ? "" : String(endTimeSelect?.value || "").trim();
    koreaEndInput.value = endTime ? getPersonalScheduleKoreaTimeLabel(dateKey, endTime, place) || "자동" : "미정";
  }
  if (trsInput) {
    const tvuParts = parsePersonalScheduleTvuTrs(tvuValue);
    trsInput.value = tvuParts.trs || (tvuParts.label === "TVU 미지참" ? "미지참" : "");
  }
}

function getPersonalScheduleRowValues(row) {
  const valueOf = (field) => String(getPersonalScheduleRowField(row, field)?.value || "").trim();
  return {
    dateKey: String(personalScheduleDateInput?.value || getTimelineReferenceDateKey()).trim(),
    name: String(row?.dataset.person || "").trim(),
    취재기자: valueOf("취재기자"),
    시작시간: valueOf("시작시간"),
    종료시간: getPersonalScheduleRowField(row, "종료시간미정")?.checked ? "" : valueOf("종료시간"),
    업무내용: valueOf("업무내용"),
    장소: valueOf("장소"),
    TVU: valueOf("TVU"),
  };
}

function createPersonalScheduleRow(name = "", dateKey = "") {
  const savedEntry = getPersonalScheduleSavedEntry(dateKey, name);
  const detail = savedEntry?.detail || {};
  const isEnded = isPersonalScheduleEntryEnded(detail);
  const row = document.createElement("article");
  row.className = "personal-schedule-row";
  row.dataset.personalScheduleRow = "true";
  row.dataset.person = name;
  row.classList.toggle("is-ended", isEnded);
  if (savedEntry && Number.isInteger(savedEntry.entryIndex)) {
    row.dataset.personalScheduleEntryIndex = String(savedEntry.entryIndex);
  }

  const nameNode = document.createElement("div");
  nameNode.className = "personal-schedule-row__name";
  nameNode.textContent = name;

  const grid = document.createElement("div");
  grid.className = "personal-schedule-row__grid";

  const appendField = (label, input) => {
    const field = document.createElement("label");
    field.className = "personal-schedule-inline-field";
    const labelNode = document.createElement("span");
    labelNode.className = "personal-schedule-inline-label";
    labelNode.textContent = label;
    field.append(labelNode, input);
    grid.appendChild(field);
  };

  appendField("취재기자", createPersonalScheduleSelect("취재기자", "취재기자", getPersonalScheduleFieldValue(detail, "취재기자")));
  appendField("현지시각", createPersonalScheduleSelect("시작시간", "현지", getPersonalScheduleFieldValue(detail, "시작시간")));
  appendField("한국시각", createPersonalScheduleReadonlyInput("한국시작시간"));
  appendField("종료현지", createPersonalScheduleSelect("종료시간", "미정", getPersonalScheduleFieldValue(detail, "종료시간")));
  appendField("종료한국", createPersonalScheduleReadonlyInput("한국종료시간"));
  appendField("업무", createPersonalScheduleSelect("업무내용", "업무내용", getPersonalScheduleFieldValue(detail, "업무내용")));
  appendField("장소", createPersonalScheduleSelect("장소", "장소", getPersonalScheduleFieldValue(detail, "장소")));
  appendField("TVU", createPersonalScheduleSelect("TVU", "TVU", getPersonalScheduleFieldValue(detail, "TVU")));
  appendField("TRS", createPersonalScheduleReadonlyInput("TRS"));

  const openEndField = document.createElement("label");
  openEndField.className = "personal-schedule-inline-check";
  const openEndInput = document.createElement("input");
  openEndInput.type = "checkbox";
  openEndInput.dataset.personalScheduleField = "종료시간미정";
  openEndInput.checked = !getPersonalScheduleFieldValue(detail, "종료시간");
  const openEndText = document.createElement("span");
  openEndText.textContent = "종료시간 미정";
  openEndField.append(openEndInput, openEndText);
  grid.appendChild(openEndField);

  const actions = document.createElement("div");
  actions.className = "personal-schedule-row__actions";
  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.className = "timeline-action-button personal-schedule-save-row";
  saveButton.dataset.personalScheduleSave = "true";
  saveButton.textContent = "저장";
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "timeline-action-button timeline-action-button--ghost personal-schedule-delete-row-button";
  deleteButton.dataset.personalScheduleDelete = "true";
  deleteButton.textContent = "삭제";
  deleteButton.disabled = !detail || !Object.keys(detail).length;
  const endButton = document.createElement("button");
  endButton.type = "button";
  endButton.className = "timeline-action-button timeline-action-button--ghost personal-schedule-end-row-button";
  endButton.dataset.personalScheduleEnd = "true";
  endButton.textContent = isEnded ? "종료됨" : "종료";
  endButton.disabled = !detail || !Object.keys(detail).length || isEnded;
  actions.append(saveButton, deleteButton, endButton);

  row.append(nameNode, grid, actions);
  updatePersonalScheduleRowDerivedFields(row);
  return row;
}

function openPersonalScheduleDetailModal(entryKey = "") {
  const entry = personalScheduleEntriesCache.find((item) => item.key === entryKey);
  if (!entry || !personalScheduleDetailModal || !personalScheduleDetailBody) {
    return;
  }
  if (personalScheduleDetailDate) {
    personalScheduleDetailDate.textContent = formatPersonalScheduleDateLabel(entry.dateKey);
  }
  if (personalScheduleDetailTitle) {
    personalScheduleDetailTitle.textContent = `${entry.name} 개인일정`;
  }
  personalScheduleDetailBody.replaceChildren();
  [
    ["촬영기자", entry.name],
    ["취재기자", entry.reporter || "미입력"],
    ["날짜", entry.dateKey],
    ["현지시각", entry.startTime || "미입력"],
    ["한국시각", (() => {
      try {
        const syncWindow = getScheduleBridgeSyncWindow();
        const info = syncWindow?.buildWorldCupTimeInfo?.(entry.dateKey, entry.startTime, entry.place);
        return info?.koreaTime || "";
      } catch (_error) {
        return "";
      }
    })() || "자동 계산"],
    ["업무내용", entry.taskLabel || "미입력"],
    ["장소", entry.place || "미입력"],
    ["TVU", entry.tvuLabel || "미입력"],
    ["TRS", parsePersonalScheduleTvuTrs(entry.tvuValue).trs || "미입력"],
    ["종료시간", entry.endTime || "종료시간 미정"],
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "personal-schedule-detail-row";
    const labelNode = document.createElement("span");
    labelNode.textContent = label;
    const valueNode = document.createElement("strong");
    valueNode.textContent = value;
    row.append(labelNode, valueNode);
    personalScheduleDetailBody.appendChild(row);
  });
  personalScheduleDetailModal.hidden = false;
  requestAnimationFrame(() => personalScheduleDetailModal.classList.add("is-open"));
}

function closePersonalScheduleDetailModal() {
  if (!personalScheduleDetailModal) {
    return;
  }
  personalScheduleDetailModal.classList.remove("is-open");
  window.setTimeout(() => {
    personalScheduleDetailModal.hidden = true;
  }, 160);
}

async function handlePersonalScheduleRowDelete(row) {
  const dateKey = String(personalScheduleDateInput?.value || getTimelineReferenceDateKey()).trim();
  const name = String(row?.dataset.person || "").trim();
  const rowEntryIndex = Number(row?.dataset.personalScheduleEntryIndex);
  const entry = personalScheduleEntriesCache.find((item) => (
    item.dateKey === dateKey &&
    item.name === name &&
    (!Number.isInteger(rowEntryIndex) || item.entryIndex === rowEntryIndex)
  ));

  if (!entry || !dateKey || !name) {
    showToast("삭제할 개인일정이 없습니다.");
    return false;
  }

  if (!window.confirm("이 개인일정을 삭제하시겠습니까?")) {
    return false;
  }

  const syncWindow = await waitForScheduleBridgeFunction("deletePersonalTimelineDetailEntry");
  if (typeof syncWindow?.deletePersonalTimelineDetailEntry !== "function") {
    showToast("legacy 개인일정 삭제 함수를 아직 불러오지 못했습니다.");
    return false;
  }

  const timelineRawBefore = (() => {
    try {
      return window.localStorage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    } catch (_error) {
      return "";
    }
  })();

  let didDelete = false;
  try {
    didDelete = Boolean(syncWindow.deletePersonalTimelineDetailEntry(
      entry.dateKey,
      entry.name,
      Number.isInteger(rowEntryIndex) ? rowEntryIndex : entry.entryIndex,
    ));
    if (didDelete && typeof syncWindow.flushPendingSharedStateWritesWithRetry === "function") {
      await syncWindow.flushPendingSharedStateWritesWithRetry({
        retries: 3,
        delayMs: 700,
        throwOnError: true,
        context: {feature: "personal-schedule-delete", dateKey, name},
      });
    }
  } catch (_error) {
    didDelete = false;
  }

  if (!didDelete) {
    showToast("개인일정을 삭제하지 못했습니다.");
    return false;
  }

  const timelineRawAfter = (() => {
    try {
      return window.localStorage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    } catch (_error) {
      return "";
    }
  })();

  renderPersonalScheduleList();
  refreshAccumulatedScheduleFlow();
  requestScheduleBridgeSummary();
  requestEquipmentBridgeSummary();
  queueBridgeSummaryBurst(requestScheduleBridgeSummary, [120, 360, 900]);
  queueBridgeSummaryBurst(requestEquipmentBridgeSummary, [160, 420, 960]);
  closePersonalScheduleDetailModal();
  showToast("개인일정 1건이 삭제되었습니다.");

  if (timelineRawBefore !== timelineRawAfter) {
    console.warn("[WC26 New Suit] Timeline block storage changed during personal schedule delete.");
  }

  return true;
}

async function handlePersonalScheduleRowEnd(row) {
  const dateKey = String(personalScheduleDateInput?.value || getTimelineReferenceDateKey()).trim();
  const name = String(row?.dataset.person || "").trim();
  const rowEntryIndex = Number(row?.dataset.personalScheduleEntryIndex);
  const entry = personalScheduleEntriesCache.find((item) => (
    item.dateKey === dateKey &&
    item.name === name &&
    (!Number.isInteger(rowEntryIndex) || item.entryIndex === rowEntryIndex)
  ));

  if (!entry || !dateKey || !name) {
    showToast("종료 처리할 개인일정이 없습니다.");
    return false;
  }

  if (entry.ended || isPersonalScheduleEntryEnded(entry.detail)) {
    showToast("이미 종료 처리된 개인일정입니다.");
    return false;
  }

  if (!window.confirm("이 개인일정을 종료 처리하시겠습니까?")) {
    return false;
  }

  const syncWindow = await waitForScheduleBridgeFunction("endPersonalTimelineDetailEntry");
  if (typeof syncWindow?.endPersonalTimelineDetailEntry !== "function") {
    showToast("legacy 개인일정 종료 함수를 아직 불러오지 못했습니다.");
    return false;
  }

  const timelineRawBefore = (() => {
    try {
      return window.localStorage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    } catch (_error) {
      return "";
    }
  })();

  let didEnd = false;
  try {
    didEnd = Boolean(syncWindow.endPersonalTimelineDetailEntry(
      entry.dateKey,
      entry.name,
      Number.isInteger(rowEntryIndex) ? rowEntryIndex : entry.entryIndex,
    ));
  } catch (_error) {
    didEnd = false;
  }

  if (!didEnd) {
    showToast("개인일정을 종료 처리하지 못했습니다.");
    return false;
  }

  const timelineRawAfter = (() => {
    try {
      return window.localStorage?.getItem(WC26_TIMELINE_STORAGE_KEY) || "";
    } catch (_error) {
      return "";
    }
  })();

  renderPersonalScheduleList();
  renderAccumulatedScheduleShell();
  refreshAccumulatedScheduleFlow();
  requestScheduleBridgeSummary();
  requestEquipmentBridgeSummary();
  queueBridgeSummaryBurst(requestScheduleBridgeSummary, [120, 360, 900]);
  queueBridgeSummaryBurst(requestEquipmentBridgeSummary, [160, 420, 960]);
  closePersonalScheduleDetailModal();
  showToast("개인일정이 종료 처리되었습니다.");

  if (timelineRawBefore !== timelineRawAfter) {
    console.warn("[WC26 New Suit] Timeline block storage changed during personal schedule end.");
  }

  return true;
}

function renderPersonalScheduleList() {
  if (!personalScheduleList) {
    return;
  }
  personalScheduleEntriesCache = getPersonalScheduleEntries();
  personalScheduleList.replaceChildren();
  personalScheduleList.dataset.personalScheduleDomCount = String(personalScheduleEntriesCache.length);
  const dateKey = String(personalScheduleDateInput?.value || getTimelineReferenceDateKey()).trim();
  WC26_SCHEDULE_BRIDGE_MEMBER_ORDER.forEach((name) => {
    personalScheduleList.appendChild(createPersonalScheduleRow(name, dateKey));
  });
}

function renderPersonalScheduleShell() {
  seedPersonalScheduleComposer();
  renderPersonalScheduleList();
}

function renderPersonalScheduleShellIfActive() {
  if (scheduleBridgeSection !== "personal" || !scheduleLocalPersonalShell || scheduleLocalPersonalShell.hidden) {
    return;
  }
  renderPersonalScheduleShell();
}

function rerenderActiveScheduleLocalShell() {
  if (scheduleBridgeSection === "shared") {
    renderSharedScheduleShellIfActive();
    return;
  }
  if (scheduleBridgeSection === "personal") {
    renderPersonalScheduleShellIfActive();
    return;
  }
  if (scheduleBridgeSection === "accumulated") {
    renderAccumulatedScheduleShellIfActive();
  }
}

function shouldRefreshScheduleLocalShell(changedKeys = []) {
  const changed = new Set((Array.isArray(changedKeys) ? changedKeys : []).map((key) => String(key || "").trim()));
  return (
    changed.has(WC26_LEGACY_TIMELINE_STORAGE_KEYS.timeline) ||
    changed.has(WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared) ||
    changed.has(WC26_LEGACY_TIMELINE_STORAGE_KEYS.details) ||
    changed.has(WC26_LEGACY_TIMELINE_STORAGE_KEYS.deleted)
  );
}

function getScheduleLocalStateFetchKeys(sectionId = scheduleBridgeSection) {
  if (sectionId === "shared") {
    return [WC26_LEGACY_TIMELINE_STORAGE_KEYS.timeline, WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared];
  }
  if (sectionId === "personal" || sectionId === "accumulated") {
    return [
      WC26_LEGACY_TIMELINE_STORAGE_KEYS.timeline,
      WC26_LEGACY_TIMELINE_STORAGE_KEYS.shared,
      WC26_LEGACY_TIMELINE_STORAGE_KEYS.details,
      WC26_LEGACY_TIMELINE_STORAGE_KEYS.deleted,
    ];
  }
  return [];
}

function requestScheduleLocalStateSync(sectionId = scheduleBridgeSection) {
  const syncWindow = getScheduleBridgeSyncWindow();
  const fetchKeys = getScheduleLocalStateFetchKeys(sectionId);
  if (!fetchKeys.length || typeof syncWindow?.fetchSharedStateSnapshot !== "function") {
    return;
  }
  Promise.resolve(syncWindow.fetchSharedStateSnapshot(fetchKeys, { markInitial: false }))
    .then(() => {
      rerenderActiveScheduleLocalShell();
      refreshTimelineGanttFromLegacy();
    })
    .catch(() => undefined);
}

function getAccumulatedPersonalScheduleEntries() {
  return getPersonalScheduleEntries()
    .slice()
    .sort((left, right) => {
      if (left.dateKey !== right.dateKey) {
        return String(right.dateKey).localeCompare(String(left.dateKey));
      }
      return (left.savedAt || 0) - (right.savedAt || 0);
    });
}

function getAccumulatedScheduleEntryLine(entry = {}) {
  const tvuParts = parsePersonalScheduleTvuTrs(entry.tvuValue);
  const reporter = String(entry.reporter || "취재기자 미입력").trim();
  const localTime = String(entry.startTime || "미입력").trim();
  const koreaTime = getPersonalScheduleKoreaTimeLabel(entry.dateKey, entry.startTime, entry.place) || "자동";
  const endLocalTime = String(entry.endTime || "").trim();
  const endKoreaTime = endLocalTime ? getPersonalScheduleKoreaTimeLabel(entry.dateKey, endLocalTime, entry.place) || "자동" : "";
  const endSegment = endLocalTime ? `현지 ${endLocalTime} / 한국 ${endKoreaTime} 까지` : "종료시간 미정까지";
  const place = String(entry.place || "장소 미입력").trim();
  const tvu = String(tvuParts.tvu || entry.tvuLabel || "TVU 미입력").trim();
  const trs = String(tvuParts.trs || (tvuParts.label === "TVU 미지참" ? "TRS 미지참" : "TRS 미입력")).trim();
  const task = String(entry.taskLabel || entry.taskValue || entry.text || "업무내용 미입력").trim();

  const prefix = entry.ended || isPersonalScheduleEntryEnded(entry.detail) ? "[종료] " : "";
  return `${prefix}[${entry.name} / ${reporter}] 현지 ${localTime} / 한국 ${koreaTime} 부터 ${endSegment} ${place}에서 ${tvu} / ${trs} 가지고 ${task}`;
}

function groupAccumulatedScheduleEntries(entries = []) {
  return entries.reduce((groups, entry) => {
    const dateKey = String(entry.dateKey || "").trim();
    if (!dateKey) {
      return groups;
    }
    if (!groups.has(dateKey)) {
      groups.set(dateKey, []);
    }
    groups.get(dateKey).push(entry);
    return groups;
  }, new Map());
}

function renderAccumulatedScheduleShell() {
  if (!accumulatedScheduleList) {
    return;
  }

  const entries = getAccumulatedPersonalScheduleEntries();
  accumulatedScheduleList.replaceChildren();

  if (accumulatedScheduleListMeta) {
    accumulatedScheduleListMeta.textContent = entries.length
      ? `${entries.length}건 개인일정 누적`
      : "누적된 개인일정 없음";
  }

  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "accumulated-schedule-empty";
    empty.textContent = "저장된 개인일정이 없습니다.";
    accumulatedScheduleList.appendChild(empty);
    return;
  }

  groupAccumulatedScheduleEntries(entries).forEach((groupEntries, dateKey) => {
    const section = document.createElement("section");
    section.className = "accumulated-schedule-group";
    section.dataset.dateKey = dateKey;

    const heading = document.createElement("div");
    heading.className = "accumulated-schedule-group__head";
    const dateNode = document.createElement("strong");
    dateNode.textContent = formatPersonalScheduleDateLabel(dateKey);
    const countNode = document.createElement("span");
    countNode.textContent = `${groupEntries.length}건`;
    heading.append(dateNode, countNode);

    const list = document.createElement("ol");
    list.className = "accumulated-schedule-items";

    groupEntries.forEach((entry) => {
      const item = document.createElement("li");
      item.className = "accumulated-schedule-item";
      item.classList.toggle("is-ended", Boolean(entry.ended || isPersonalScheduleEntryEnded(entry.detail)));

      const title = document.createElement("strong");
      title.className = "accumulated-schedule-item__title";
      title.textContent = `${entry.ended || isPersonalScheduleEntryEnded(entry.detail) ? "[종료] " : ""}${entry.name} · ${entry.taskLabel || entry.taskValue || "업무내용 미입력"}`;

      const meta = document.createElement("span");
      meta.className = "accumulated-schedule-item__meta";
      meta.textContent = getAccumulatedScheduleEntryLine(entry);

      item.append(title, meta);
      list.appendChild(item);
    });

    section.append(heading, list);
    accumulatedScheduleList.appendChild(section);
  });
}

function renderAccumulatedScheduleShellIfActive() {
  if (scheduleBridgeSection !== "accumulated" || !scheduleLocalAccumulatedShell || scheduleLocalAccumulatedShell.hidden) {
    return;
  }
  renderAccumulatedScheduleShell();
}

function getAccumulatedTickerItemsFromPersonalSchedules() {
  return getAccumulatedPersonalScheduleEntries()
    .filter((entry) => !(entry.ended || isPersonalScheduleEntryEnded(entry.detail)))
    .slice()
    .reverse()
    .map((entry) => getAccumulatedScheduleEntryLine(entry))
    .filter(Boolean);
}

function refreshAccumulatedScheduleFlow(fallbackItems = []) {
  const items = getAccumulatedTickerItemsFromPersonalSchedules();
  renderAccumulatedTicker(items.length ? items : fallbackItems);
  renderAccumulatedScheduleShellIfActive();
}

function buildAccumulatedPersonalScheduleExportText(entries = []) {
  const createdAt = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  const lines = ["개인일정 누적 내보내기", `생성일시: ${createdAt}`, ""];
  const sortedEntries = entries
    .slice()
    .sort((left, right) => {
      if (left.dateKey !== right.dateKey) {
        return String(left.dateKey).localeCompare(String(right.dateKey));
      }
      return (left.savedAt || 0) - (right.savedAt || 0);
    });

  groupAccumulatedScheduleEntries(sortedEntries).forEach((groupEntries, dateKey) => {
    lines.push(`[${dateKey}]`);
    groupEntries.forEach((entry, index) => {
      lines.push(`${index + 1}. ${getAccumulatedScheduleEntryLine(entry)}`);
    });
    lines.push("");
  });

  return lines.join("\r\n").trimEnd() + "\r\n";
}

function downloadTextFile(filename = "", text = "") {
  const blob = new Blob(["\ufeff", text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function exportAccumulatedPersonalSchedules() {
  const entries = getAccumulatedPersonalScheduleEntries();
  if (!entries.length) {
    showToast("내보낼 개인일정이 없습니다.");
    return;
  }

  const filename = `개인일정_누적내보내기_${getLocalDateKey()}.txt`;
  downloadTextFile(filename, buildAccumulatedPersonalScheduleExportText(entries));
  showToast("개인일정 누적 파일을 준비했습니다.");
}

function createLegacyPersonalScheduleRow(syncWindow, values = {}) {
  const row = syncWindow.document.createElement("div");
  row.className = "personal-timeline-person-row";
  row.dataset.personName = values.name || "";
  const button = syncWindow.document.createElement("button");
  button.type = "button";
  button.className = "personal-timeline-save-btn";
  button.dataset.dateKey = values.dateKey;
  button.dataset.person = values.name;
  row.appendChild(button);
  ["취재기자", "시작시간", "종료시간", "업무내용", "장소", "TVU"].forEach((field) => {
    const select = syncWindow.document.createElement("select");
    select.className = "personal-timeline-detail-select";
    select.dataset.dateKey = values.dateKey;
    select.dataset.person = values.name;
    select.dataset.field = field;
    const option = syncWindow.document.createElement("option");
    option.value = values[field] || "";
    option.textContent = values[field] || "";
    select.appendChild(option);
    select.value = values[field] || "";
    row.appendChild(select);
  });
  return row;
}

async function handlePersonalScheduleSave() {
  return false;
}

async function handlePersonalScheduleRowSave(row) {
  if (personalScheduleIsSaving) {
    return;
  }
  const values = getPersonalScheduleRowValues(row);
  const name = values.name;
  const dateKey = values.dateKey;

  const missingRequired = !dateKey || !name || !values.취재기자 || !values.시작시간 || !values.업무내용 || !values.장소 || !values.TVU;
  if (missingRequired) {
    showToast("개인일정 필수 항목을 모두 선택해주세요.");
    return;
  }
  personalScheduleIsSaving = true;
  const saveButton = row?.querySelector("[data-personal-schedule-save]");
  if (saveButton) {
    saveButton.disabled = true;
  }
  try {
    console.info("[personal-schedule] personal save start", {
      dateKey,
      name,
      hasBridgeFrame: Boolean(scheduleBridgeSyncFrame),
      hasRow: Boolean(row),
    });
    const syncWindow = await waitForScheduleBridgeFunction("savePersonalTimelinePersonRow", 15000);
    console.info("[personal-schedule] personal save bridge check", {
      hasSyncWindow: Boolean(syncWindow),
      hasSaveFunction: typeof syncWindow?.savePersonalTimelinePersonRow === "function",
    });
    if (typeof syncWindow?.savePersonalTimelinePersonRow !== "function") {
      throw new Error("personal schedule save bridge unavailable");
    }
    const legacyRow = createLegacyPersonalScheduleRow(syncWindow, values);
    console.info("[personal-schedule] personal save legacy row created", {
      dateKey: legacyRow.querySelector(".personal-timeline-save-btn")?.dataset.dateKey || "",
      name: legacyRow.querySelector(".personal-timeline-save-btn")?.dataset.person || "",
      selectCount: legacyRow.querySelectorAll(".personal-timeline-detail-select[data-field]").length,
    });
    const saveResult = await syncWindow.savePersonalTimelinePersonRow(legacyRow);
    if (typeof syncWindow.flushPendingSharedStateWritesWithRetry === "function") {
      await syncWindow.flushPendingSharedStateWritesWithRetry({
        retries: 3,
        delayMs: 700,
        throwOnError: true,
        context: {feature: "personal-schedule-save", dateKey, name},
      });
    }
    const savedEntries = typeof syncWindow.getPersonalTimelineDetailEntries === "function"
      ? syncWindow.getPersonalTimelineDetailEntries(dateKey, name)
      : [];
    console.info("[personal-schedule] personal save legacy result", {
      saveResult,
      savedEntryCount: Array.isArray(savedEntries) ? savedEntries.length : 0,
    });
    if (!Array.isArray(savedEntries) || !savedEntries.length) {
      throw new Error("personal schedule save did not create a legacy detail entry");
    }
    renderPersonalScheduleList();
    refreshAccumulatedScheduleFlow();
    requestScheduleBridgeSummary();
    showToast("개인일정이 저장되었습니다.");
  } catch (error) {
    console.error("[personal-schedule] personal save failed", error);
    showToast("개인일정을 저장하지 못했습니다.");
  } finally {
    personalScheduleIsSaving = false;
    if (saveButton) {
      saveButton.disabled = false;
    }
  }
}

function setScheduleBridgeSection(sectionId = "all") {
  scheduleBridgeSection = normalizeScheduleBridgeSection(sectionId);
  setScheduleBridgeButtonState(scheduleBridgeSection);
  syncScheduleTimelineShellVisibility();
  if (scheduleBridgeSection === "all") {
    ensureScheduleSummaryBridgeLoaded();
    refreshTimelineGanttFromLegacy();
    return;
  }
  if (scheduleBridgeSection === "shared") {
    renderSharedScheduleShell();
    window.setTimeout(() => {
      ensureScheduleSummaryBridgeLoaded();
    }, 0);
    queueBridgeSummaryBurst(() => requestScheduleLocalStateSync("shared"), [120, 420, 1100, 2200]);
    return;
  }
  if (scheduleBridgeSection === "personal") {
    ensureScheduleSummaryBridgeLoaded();
    renderPersonalScheduleShell();
    queueBridgeSummaryBurst(() => requestScheduleLocalStateSync("personal"), [120, 420, 1100, 2200]);
    return;
  }
  if (scheduleBridgeSection === "accumulated") {
    ensureScheduleSummaryBridgeLoaded();
    renderAccumulatedScheduleShell();
    refreshAccumulatedScheduleFlow();
    queueBridgeSummaryBurst(() => requestScheduleLocalStateSync("accumulated"), [120, 420, 1100, 2200]);
    return;
  }
  postScheduleBridgeNavigation(scheduleBridgeSection);
  queueScheduleLegacyHudSkin();
}

function applyScheduleBridgeSummary(summary = {}) {
  const heroValues = document.querySelectorAll("#panel-main-match .hero-chip__value");
  const slotValues = document.querySelectorAll("#panel-main-match .data-slot__value");
  const sharedHeadline = String(summary.sharedHeadline || "").trim();
  const sharedCount = Number(summary.sharedCount || 0);
  const people = Array.isArray(summary.people) ? summary.people : [];
  const accumulatedItems = Array.isArray(summary.accumulatedItems) ? summary.accumulatedItems : [];
  const personalCount = Number(summary.personalCount || people.filter((person) => person?.hasEntry).length || 0);

  if (heroValues[0]) {
    heroValues[0].textContent = sharedCount ? "운영 데이터 연결됨" : "오늘 공용 일정 없음";
  }

  if (heroValues[1]) {
    heroValues[1].textContent = sharedCount ? `${sharedCount}건 공용 일정` : "팀 공유 일정";
  }

  if (heroValues[2]) {
    heroValues[2].textContent = sharedHeadline || "오늘 공용 일정 대기";
  }

  if (slotValues[0]) {
    slotValues[0].textContent = sharedHeadline || "공용일정 연결 예정";
  }

  if (slotValues[1]) {
    slotValues[1].textContent = personalCount ? `${personalCount}명 개인 일정` : "개인 일정 대기";
  }

  if (slotValues[2]) {
    slotValues[2].textContent = summary.todayKey || "날짜 동기화 대기";
  }

  if (slotValues[3]) {
    slotValues[3].textContent = "첨부/저장 로직 유지";
  }

  if (slotValues[4]) {
    slotValues[4].textContent = accumulatedItems.length ? `${accumulatedItems.length}건 누적일정` : "메모 연동 대기";
  }

  if (slotValues[5]) {
    slotValues[5].textContent = "기존 운영 일정 엔진 브리지 연결";
  }

  const rows = document.querySelectorAll("#panel-field-status .status-row");

  rows.forEach((row, index) => {
    const person = people[index] || { name: WC26_SCHEDULE_BRIDGE_MEMBER_ORDER[index] || "-", hasEntry: false };
    const units = row.querySelectorAll(".status-row__unit");
    const nameNode = row.querySelector(".status-row__name");
    const placeNode = row.querySelector(".status-row__place");

    if (nameNode) {
      nameNode.textContent = person.name || WC26_SCHEDULE_BRIDGE_MEMBER_ORDER[index] || "-";
    }

    if (placeNode) {
      placeNode.textContent = person.place || person.task || "미배정";
    }

    if (units[0]) {
      units[0].textContent = person.tvu || "TVU -";
    }

    if (units[1]) {
      units[1].textContent = person.trs || "TRS -";
    }

    row.classList.toggle("is-live", Boolean(person.hasEntry));
  });

  renderAccumulatedTicker(accumulatedItems);
}

function handleScheduleBridgeMessage(event) {
  const payload = event?.data;
  const isVisibleBridgeSource =
    Boolean(scheduleBridgeFrame?.contentWindow) && event?.source === scheduleBridgeFrame.contentWindow;
  const isSummaryBridgeSource =
    Boolean(scheduleBridgeSyncFrame?.contentWindow) && event?.source === scheduleBridgeSyncFrame.contentWindow;
  const isStorageBridgeSource =
    Boolean(storageBridgeFrame?.contentWindow) && event?.source === storageBridgeFrame.contentWindow;
  const isMediaBridgeSource =
    Boolean(mediaBridgeFrame?.contentWindow) && event?.source === mediaBridgeFrame.contentWindow;
  const isEquipmentBridgeSource =
    Boolean(equipmentBridgeFrame?.contentWindow) && event?.source === equipmentBridgeFrame.contentWindow;

  if (!payload || typeof payload !== "object") {
    return;
  }

  if (payload.type === WC26_SHARED_STATE_APPLIED_MESSAGE && isSummaryBridgeSource) {
    if (shouldRefreshScheduleLocalShell(payload.changedKeys)) {
      rerenderActiveScheduleLocalShell();
      refreshTimelineGanttFromLegacy();
    }
    return;
  }

  if (payload.type === WC26_SCHEDULE_BRIDGE_MESSAGE.ready && isVisibleBridgeSource) {
    scheduleBridgeReady = true;
    scheduleBridgeFrameShell?.classList.add("is-ready");
    if (scheduleBridgeLoading) {
      scheduleBridgeLoading.textContent = "legacy schedule bridge ready";
    }
    setScheduleBridgeButtonState(payload.section || scheduleBridgeSection);
    queueScheduleLegacyHudSkin([0, 120, 320]);
  }

  if (payload.type === WC26_SCHEDULE_BRIDGE_MESSAGE.summary) {
    applyScheduleBridgeSummary(payload);
  }
}

function initScheduleBridge() {
  if (!scheduleBridgeFrame) {
    return;
  }

  scheduleBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setScheduleBridgeSection(button.dataset.scheduleBridgeNav || "all");
    });
  });

  scheduleBridgeFrame.addEventListener("load", () => {
    scheduleBridgeReady = false;
    scheduleBridgeFrameShell?.classList.remove("is-ready");
    if (scheduleBridgeLoading) {
      scheduleBridgeLoading.textContent = "legacy schedule bridge loading...";
    }
    window.setTimeout(() => {
      setScheduleBridgeSection(scheduleBridgeSection);
    }, 120);
  });

  scheduleBridgeSyncFrame?.addEventListener("load", () => {
    [250, 900, 1800, 3200].forEach((delay) => {
      window.setTimeout(() => {
        syncScheduleBridgeSummaryFromStorage();
        refreshTimelineGanttFromLegacy();
      }, delay);
    });
  });

  syncScheduleBridgeSummaryFromStorage();
  window.addEventListener("storage", (event) => {
    if (!event?.key || !Object.values(WC26_LEGACY_TIMELINE_STORAGE_KEYS).includes(event.key)) {
      return;
    }
    syncScheduleBridgeSummaryFromStorage();
  });
  window.addEventListener("message", handleScheduleBridgeMessage);
}

function hasScheduleBridgeMemberSummary(entry = {}) {
  if (!entry || typeof entry !== "object") {
    return false;
  }

  return [entry.place, entry.task, entry.text, entry.tvu, entry.trs].some(
    (value) => String(value || "").trim() !== "",
  );
}

function getScheduleBridgeMemberPlaceText(entry = {}, fallback = "") {
  const status = String(entry?.status || "").trim();
  const baseText =
    String(entry?.place || "").trim() ||
    String(entry?.task || "").trim() ||
    String(entry?.text || "").trim() ||
    fallback;

  if (!hasScheduleBridgeMemberSummary(entry)) {
    return "일정 없음";
  }

  if (status === "ongoing") {
    return baseText ? `진행 · ${baseText}` : "진행 중";
  }

  if (status === "upcoming") {
    return baseText ? `예정 · ${baseText}` : "예정";
  }

  if (status === "ended") {
    return baseText ? `종료 · ${baseText}` : "종료";
  }

  return baseText || fallback;
}

function normalizeScheduleBridgeSummaryText(value = "") {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function applyScheduleBridgeSummary(summary = {}) {
  const normalizedSummary = normalizeScheduleBridgeSummaryPayload(summary);

  if (!normalizedSummary) {
    return;
  }

  const heroValues = document.querySelectorAll("#panel-main-match .hero-chip__value");
  const slotValues = document.querySelectorAll("#panel-main-match .data-slot__value");
  const sharedSchedules = normalizedSummary.sharedSchedules;
  const memberSummaries = normalizedSummary.memberSummaries;
  const accumulatedSchedules = normalizedSummary.accumulatedSchedules;
  const sharedLines = sharedSchedules.map((item) => normalizeScheduleBridgeSummaryText(item?.text || "")).filter(Boolean);
  const sharedHeadline = sharedLines.slice(0, 3).join(" / ");
  const sharedPrimaryLine = sharedLines[0] || "";
  const sharedSecondaryLine = sharedLines.slice(1, 3).join(" / ");
  const sharedCount = sharedSchedules.length;
  const attachmentCount = sharedSchedules.reduce((count, item) => count + Number(item?.imageCount || 0), 0);
  const selectedDate = normalizedSummary.selectedDate || "";
  const activeMemberCount = memberSummaries.filter((entry) => (
    String(entry?.status || "").trim() !== "ended" && hasScheduleBridgeMemberSummary(entry)
  )).length;
  const ongoingCount = memberSummaries.filter((entry) => String(entry?.status || "").trim() === "ongoing").length;
  const upcomingCount = memberSummaries.filter((entry) => String(entry?.status || "").trim() === "upcoming").length;
  const accumulatedTickerItems = accumulatedSchedules
    .filter((item) => String(item?.status || "").trim() !== "ended")
    .map((item) => String(item?.headline || item?.text || "").split(/\r?\n/)[0]?.trim())
    .filter(Boolean);
  const hasSummaryData =
    sharedSchedules.length > 0 ||
    accumulatedSchedules.length > 0 ||
    memberSummaries.some((entry) => hasScheduleBridgeMemberSummary(entry));

  if (!hasSummaryData) {
    resetScheduleBridgeSummaryPanels();
    return;
  }

  if (heroValues[0]) {
    heroValues[0].textContent = selectedDate || scheduleBridgePanelDefaults.heroValues[0] || "";
  }

  if (heroValues[1]) {
    heroValues[1].textContent = sharedCount ? `${sharedCount}건 공용일정` : scheduleBridgePanelDefaults.heroValues[1] || "";
  }

  if (heroValues[2]) {
    heroValues[2].textContent = sharedHeadline || scheduleBridgePanelDefaults.heroValues[2] || "";
  }

  if (slotValues[0]) {
    slotValues[0].textContent = sharedPrimaryLine || sharedHeadline || scheduleBridgePanelDefaults.slotValues[0] || "";
  }

  if (slotValues[1]) {
    slotValues[1].textContent = activeMemberCount
      ? `${activeMemberCount}명 개인일정`
      : scheduleBridgePanelDefaults.slotValues[1] || "";
  }

  if (slotValues[2]) {
    slotValues[2].textContent = selectedDate || scheduleBridgePanelDefaults.slotValues[2] || "";
  }

  if (slotValues[3]) {
    slotValues[3].textContent = attachmentCount
      ? `첨부 ${attachmentCount}건`
      : scheduleBridgePanelDefaults.slotValues[3] || "";
  }

  if (slotValues[4]) {
    slotValues[4].textContent = accumulatedSchedules.length
      ? `${accumulatedSchedules.length}건 누적일정`
      : scheduleBridgePanelDefaults.slotValues[4] || "";
  }

  if (slotValues[5]) {
    slotValues[5].textContent =
      sharedSecondaryLine ||
      (ongoingCount ? `진행 ${ongoingCount}명` : "") ||
      (upcomingCount ? `예정 ${upcomingCount}명` : "") ||
      scheduleBridgePanelDefaults.slotValues[5] ||
      "";
  }

  const rows = document.querySelectorAll("#panel-field-status .status-row");
  const membersByName = new Map(
    memberSummaries
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => [String(entry.name || "").trim(), entry]),
  );

  rows.forEach((row, index) => {
    const memberName = WC26_SCHEDULE_BRIDGE_MEMBER_ORDER[index] || "";
    const rawPerson = membersByName.get(memberName) || { name: memberName, status: "idle" };
    const person = String(rawPerson?.status || "").trim() === "ended"
      ? { name: memberName, status: "idle", place: "", task: "", tvu: "", trs: "", text: "" }
      : rawPerson;
    const units = row.querySelectorAll(".status-row__unit");
    const nameNode = row.querySelector(".status-row__name");
    const placeNode = row.querySelector(".status-row__place");
    const status = String(person?.status || "").trim();
    const defaultRow = scheduleBridgePanelDefaults.rows[index] || {};

    if (nameNode) {
      nameNode.textContent = person.name || memberName || "";
    }

    if (placeNode) {
      placeNode.textContent = getScheduleBridgeMemberPlaceText(person, defaultRow.place || "");
    }

    if (units[0]) {
      units[0].textContent = String(person?.tvu || "").trim() || defaultRow.units?.[0] || "";
    }

    if (units[1]) {
      units[1].textContent = String(person?.trs || "").trim() || defaultRow.units?.[1] || "";
    }

    row.classList.toggle("is-live", status === "ongoing");
    row.classList.toggle("is-upcoming", status === "upcoming");
    row.classList.toggle("is-ended", status === "ended");
  });

  refreshAccumulatedScheduleFlow(accumulatedTickerItems);
  refreshTimelineGanttFromLegacy();
}

function handleScheduleBridgeMessage(event) {
  const payload = event?.data;
  const isVisibleBridgeSource =
    Boolean(scheduleBridgeFrame?.contentWindow) && event?.source === scheduleBridgeFrame.contentWindow;
  const isStorageBridgeSource =
    Boolean(storageBridgeFrame?.contentWindow) && event?.source === storageBridgeFrame.contentWindow;
  const isMediaBridgeSource =
    Boolean(mediaBridgeFrame?.contentWindow) && event?.source === mediaBridgeFrame.contentWindow;
  const isOpsBridgeSource =
    Boolean(opsBridgeFrame?.contentWindow) && event?.source === opsBridgeFrame.contentWindow;
  const isMatchBridgeSource =
    Boolean(matchBridgeFrame?.contentWindow) && event?.source === matchBridgeFrame.contentWindow;
  const isMapBridgeSource =
    Boolean(mapBridgeFrame?.contentWindow) && event?.source === mapBridgeFrame.contentWindow;
  const isEquipmentBridgeSource =
    Boolean(equipmentBridgeFrame?.contentWindow) && event?.source === equipmentBridgeFrame.contentWindow;

  if (!payload || typeof payload !== "object") {
    return;
  }

  if (payload.type === WC26_SCHEDULE_BRIDGE_MESSAGE.ready && isVisibleBridgeSource) {
    scheduleBridgeReady = true;
    scheduleBridgeFrameShell?.classList.add("is-ready");
    if (scheduleBridgeLoading) {
      scheduleBridgeLoading.textContent = "legacy schedule bridge ready";
    }
    setScheduleBridgeButtonState(payload.section || scheduleBridgeSection);
  }

  if (payload.type === WC26_EQUIPMENT_BRIDGE_MESSAGE.ready && isEquipmentBridgeSource) {
    markEquipmentBridgeReadyFromDocument(payload.section || equipmentBridgeSection, {
      member: payload.member || equipmentBridgeSelectedCrew,
    });
  }

  if (payload.type === WC26_STORAGE_BRIDGE_MESSAGE.ready && isStorageBridgeSource) {
    storageBridgeReady = true;
    storageBridgeFrameShell?.classList.add("is-ready");
    if (storageBridgeLoading) {
      storageBridgeLoading.textContent = "자료보관 연결 완료";
    }
    setStorageBridgeButtonState(payload.section || storageBridgeSection);
    syncStorageBridgeEmbeddedSkin();
  }

  if (payload.type === WC26_MEDIA_BRIDGE_MESSAGE.ready && isMediaBridgeSource) {
    markMediaBridgeReadyFromDocument(payload.section || mediaBridgeSection);
  }

  if (payload.type === WC26_OPS_BRIDGE_MESSAGE.ready && isOpsBridgeSource) {
    opsBridgeReady = true;
    opsBridgeFrameShell?.classList.add("is-ready");
    if (opsBridgeLoading) {
      opsBridgeLoading.textContent = "legacy ops bridge ready";
    }
    setOpsBridgeButtonState(payload.section || opsBridgeSection);
  }

  if (payload.type === WC26_MATCH_MAP_BRIDGE_MESSAGE.ready && isMatchBridgeSource) {
    matchBridgeReady = true;
    matchBridgeFrameShell?.classList.add("is-ready");
    if (matchBridgeLoading) {
      matchBridgeLoading.textContent = "legacy match bridge ready";
    }
    setMatchBridgeButtonState(payload.section || matchBridgeSection);
  }

  if (payload.type === WC26_MATCH_MAP_BRIDGE_MESSAGE.ready && isMapBridgeSource) {
    markMapBridgeReadyFromDocument(payload.section || mapBridgeSection);
  }

  if (payload.type === WC26_SQUAD_BRIDGE_MESSAGE.ready && isMatchBridgeSource) {
    squadBridgeReady = true;
    matchBridgeReady = true;
    matchBridgeFrameShell?.classList.add("is-ready");
    if (matchBridgeLoading) {
      matchBridgeLoading.textContent = "legacy squad bridge ready";
    }
    setMatchBridgeButtonState(payload.section || squadBridgeSection);
  }

  if (payload.type === WC26_SCHEDULE_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeScheduleBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    const renderKey = buildScheduleBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === scheduleBridgeSummaryRenderKey) {
      return;
    }

    scheduleBridgeSummaryRenderKey = renderKey;
    applyScheduleBridgeSummary(normalizedSummary);
    rerenderActiveScheduleLocalShell();
    queueScheduleLegacyHudSkin([0, 140]);
  }

  if (payload.type === WC26_EQUIPMENT_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeEquipmentBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    const renderKey = buildEquipmentBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === equipmentBridgeSummaryRenderKey) {
      return;
    }

    equipmentBridgeSummaryRenderKey = renderKey;
    applyEquipmentBridgeSummary(normalizedSummary);
    queueEquipmentBridgeActionToolbarSync();
    applyEquipmentBridgeSearchFilter();
  }

  if (payload.type === WC26_STORAGE_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeStorageBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    const renderKey = buildStorageBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === storageBridgeSummaryRenderKey) {
      return;
    }

    storageBridgeSummaryRenderKey = renderKey;
    applyStorageBridgeSummary(normalizedSummary);
  }

  if (payload.type === WC26_MEDIA_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeMediaBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    if (
      isMediaBridgeSource &&
      mediaBridgeSummaryState &&
      Number(normalizedSummary.newsCount || 0) < Number(mediaBridgeSummaryState.newsCount || 0)
    ) {
      return;
    }

    const renderKey = buildMediaBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === mediaBridgeSummaryRenderKey) {
      return;
    }

    mediaBridgeSummaryRenderKey = renderKey;
    applyMediaBridgeSummary(normalizedSummary);
  }

  if (payload.type === WC26_OPS_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeOpsBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    if (
      isOpsBridgeSource &&
      opsBridgeSummaryState &&
      Number(normalizedSummary.officialLinkCount || 0) < Number(opsBridgeSummaryState.officialLinkCount || 0)
    ) {
      return;
    }

    const renderKey = buildOpsBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === opsBridgeSummaryRenderKey) {
      return;
    }

    opsBridgeSummaryRenderKey = renderKey;
    applyOpsBridgeSummary(normalizedSummary);
  }

  if (payload.type === WC26_MATCH_MAP_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeMatchMapBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    const renderKey = buildMatchMapBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === matchMapBridgeSummaryRenderKey) {
      return;
    }

    matchMapBridgeSummaryRenderKey = renderKey;
    applyMatchMapBridgeSummary(normalizedSummary);
  }

  if (payload.type === WC26_SQUAD_BRIDGE_MESSAGE.summary) {
    const normalizedSummary = normalizeSquadBridgeSummaryPayload(payload);

    if (!normalizedSummary) {
      return;
    }

    const renderKey = buildSquadBridgeSummaryRenderKey(normalizedSummary);

    if (renderKey === squadBridgeSummaryRenderKey) {
      return;
    }

    squadBridgeSummaryRenderKey = renderKey;
    applySquadBridgeSummary(normalizedSummary);
  }
}

function getScheduleBridgeSyncWindow() {
  return scheduleBridgeSyncFrame?.contentWindow || null;
}

function tryApplyDirectBridgeSummary(getterName, applySummary, patch = {}) {
  const syncWindow = getScheduleBridgeSyncWindow();
  const getter = syncWindow?.[getterName];

  if (typeof getter !== "function" || typeof applySummary !== "function") {
    return false;
  }

  try {
    const summary = getter.call(syncWindow);
    if (!summary || typeof summary !== "object") {
      return false;
    }
    applySummary({
      ...summary,
      ...patch,
    });
    return true;
  } catch (error) {
    return false;
  }
}

function requestScheduleBridgeSummary() {
  if (tryApplyDirectBridgeSummary("getWC26LegacyScheduleSummary", applyScheduleBridgeSummary)) {
    rerenderActiveScheduleLocalShell();
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_SCHEDULE_BRIDGE_MESSAGE.navigate,
      section: "all",
    },
    "*",
  );
}

function requestStorageBridgeSummary() {
  if (tryApplyDirectBridgeSummary("getWC26LegacyStorageSummary", applyStorageBridgeSummary)) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_STORAGE_BRIDGE_MESSAGE.navigate,
      section: storageBridgeSection || "document-storage",
    },
    "*",
  );
}

function requestMediaBridgeSummary() {
  if (
    tryApplyDirectBridgeSummary("getWC26LegacyMediaSummary", applyMediaBridgeSummary, {
      selectedSection: mediaBridgeSection,
    })
  ) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_MEDIA_BRIDGE_MESSAGE.navigate,
      section: mediaBridgeSection || "broadcast-schedule",
    },
    "*",
  );
}

function requestOpsBridgeSummary() {
  if (
    tryApplyDirectBridgeSummary("getWC26LegacyOpsSummary", applyOpsBridgeSummary, {
      selectedSection: opsBridgeSection,
    })
  ) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_OPS_BRIDGE_MESSAGE.navigate,
      section: opsBridgeSection || "operation-memo",
    },
    "*",
  );
}

function requestMatchMapBridgeSummary() {
  ensureScheduleSummaryBridgeLoaded();
  if (
    tryApplyDirectBridgeSummary("getWC26LegacyMatchMapSummary", applyMatchMapBridgeSummary, {
      selectedSection: matchBridgeSection,
    })
  ) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_MATCH_MAP_BRIDGE_MESSAGE.navigate,
      section: matchBridgeSection || "match-schedule",
    },
    "*",
  );
}

function requestSquadBridgeSummary() {
  if (
    tryApplyDirectBridgeSummary("getWC26LegacySquadSummary", applySquadBridgeSummary, {
      selectedSection: squadBridgeSection,
    })
  ) {
    return;
  }
  scheduleBridgeSyncFrame?.contentWindow?.postMessage(
    {
      type: WC26_SQUAD_BRIDGE_MESSAGE.navigate,
      section: squadBridgeSection || "squad",
    },
    "*",
  );
}

function requestAllBridgeSummaries() {
  requestScheduleBridgeSummary();
  requestStorageBridgeSummary();
  requestMediaBridgeSummary();
  requestOpsBridgeSummary();
  requestMatchMapBridgeSummary();
  requestSquadBridgeSummary();
  requestEquipmentBridgeSummary();
}

function queueBridgeSummaryBurst(requestSummary, delays = [80, 260, 700, 1400]) {
  if (typeof requestSummary !== "function") {
    return;
  }

  delays.forEach((delay) => {
    window.setTimeout(() => {
      requestSummary();
    }, delay);
  });
}

function initScheduleBridge() {
  if (!scheduleBridgeFrame) {
    return;
  }

  scheduleBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setScheduleBridgeSection(button.dataset.scheduleBridgeNav || "all");
    });
  });

  scheduleBridgeFrame.addEventListener("load", () => {
    if (!isLazyIframeLoaded(scheduleBridgeFrame)) {
      return;
    }
    scheduleBridgeReady = false;
    scheduleBridgeFrameShell?.classList.remove("is-ready");
    if (scheduleBridgeLoading) {
      scheduleBridgeLoading.textContent = "legacy schedule bridge loading...";
    }
    window.setTimeout(() => {
      setScheduleBridgeSection(scheduleBridgeSection);
    }, 120);
    queueBridgeSummaryBurst(requestScheduleBridgeSummary);
    queueBridgeSummaryBurst(refreshTimelineGanttFromLegacy, [120, 320, 760]);
    queueScheduleLegacyHudSkin([80, 220, 520, 1100]);
  });

  scheduleBridgeSyncFrame?.addEventListener("load", () => {
    if (!isLazyIframeLoaded(scheduleBridgeSyncFrame)) {
      return;
    }
    [40, 220, 650, 1200, 2000, 3200, 5200].forEach((delay) => {
      window.setTimeout(() => {
        requestScheduleBridgeSummary();
        requestMatchMapBridgeSummary();
        refreshTimelineGanttFromLegacy();
        renderSharedScheduleShellIfActive();
        renderPersonalScheduleShellIfActive();
        renderAccumulatedScheduleShellIfActive();
      }, delay);
    });
  });

  if (!sharedScheduleEventsBound) {
    sharedScheduleEventsBound = true;
    sharedScheduleCreateButton?.addEventListener("click", () => {
      setSharedScheduleComposerOpen(true);
    });
    sharedScheduleCancelButton?.addEventListener("click", () => {
      clearSharedScheduleComposer();
      setSharedScheduleComposerOpen(false);
    });
    sharedScheduleFileInput?.addEventListener("change", () => {
      setSharedScheduleDraftFiles(sharedScheduleFileInput.files);
    });
    sharedScheduleSaveButton?.addEventListener("click", handleSharedScheduleSave);
    sharedScheduleDeleteModeButton?.addEventListener("click", toggleSharedScheduleDeleteMode);
    sharedScheduleDeleteConfirmButton?.addEventListener("click", () => {
      void handleSharedScheduleDeleteConfirm();
    });
    sharedScheduleList?.addEventListener("click", handleSharedScheduleListClick);
    sharedScheduleList?.addEventListener("change", handleSharedScheduleListChange);
    sharedScheduleList?.addEventListener("keydown", handleSharedScheduleListKeydown);
    sharedScheduleDetailAttachments?.addEventListener("click", handleSharedScheduleAttachmentPreviewClick);
    sharedScheduleDetailAttachments?.addEventListener("keydown", handleSharedScheduleAttachmentPreviewKeydown);
    document.querySelectorAll("[data-shared-schedule-detail-close]").forEach((node) => {
      node.addEventListener("click", closeSharedScheduleDetailModal);
    });
    document.querySelectorAll("[data-shared-schedule-file-preview-close]").forEach((node) => {
      node.addEventListener("click", closeSharedScheduleAttachmentPreview);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (sharedScheduleFilePreviewModal && !sharedScheduleFilePreviewModal.hidden) {
          closeSharedScheduleAttachmentPreview();
          return;
        }
        closeSharedScheduleDetailModal();
      }
    });
  }

  if (!personalScheduleEventsBound) {
    personalScheduleEventsBound = true;
    personalScheduleDateInput?.addEventListener("change", renderPersonalScheduleList);
    personalScheduleExportButton?.addEventListener("click", exportAccumulatedPersonalSchedules);
    personalScheduleList?.addEventListener("change", (event) => {
      const row = event.target.closest("[data-personal-schedule-row]");
      updatePersonalScheduleRowDerivedFields(row);
    });
    personalScheduleList?.addEventListener("click", (event) => {
      const saveButton = event.target.closest("[data-personal-schedule-save]");
      if (saveButton) {
        event.preventDefault();
        const row = saveButton.closest("[data-personal-schedule-row]");
        void handlePersonalScheduleRowSave(row);
        return;
      }
      const endButton = event.target.closest("[data-personal-schedule-end]");
      if (endButton) {
        event.preventDefault();
        const row = endButton.closest("[data-personal-schedule-row]");
        void handlePersonalScheduleRowEnd(row);
        return;
      }
      const deleteButton = event.target.closest("[data-personal-schedule-delete]");
      if (!deleteButton) {
        return;
      }
      event.preventDefault();
      const row = deleteButton.closest("[data-personal-schedule-row]");
      void handlePersonalScheduleRowDelete(row);
    });
    personalScheduleList?.addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) {
        return;
      }
      const actionButton = event.target.closest("[data-personal-schedule-delete], [data-personal-schedule-end]");
      if (!actionButton || !personalScheduleList.contains(actionButton)) {
        return;
      }
      event.preventDefault();
      actionButton.click();
    });
    document.querySelectorAll("[data-personal-schedule-detail-close]").forEach((node) => {
      node.addEventListener("click", closePersonalScheduleDetailModal);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePersonalScheduleDetailModal();
      }
    });
  }

  window.addEventListener("message", handleScheduleBridgeMessage);
  syncScheduleTimelineShellVisibility();
}

function initMatchMapBridge() {
  bindMatchScheduleSwipeGestures();
  matchBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextSection = button.dataset.matchBridgeNav || "match-schedule";
      logGroupADiagnostic("matchBridgeButton:click", {
        nextSection,
        text: button.textContent.trim(),
      });
      if (nextSection === "bracket") {
        setMatchShellMode("bracket");
        return;
      }
      setMatchShellMode("group-stage");
    });
  });

  matchShellModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.matchShellMode || "group-stage";
      logGroupADiagnostic("matchShellModeButton:click", {
        nextMode,
        text: button.textContent.trim(),
      });
      setMatchShellMode(nextMode);
    });
  });

  matchGroupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logGroupADiagnostic("matchGroupButton:click", {
        groupKey: button.dataset.matchGroupKey || "A",
        text: button.textContent.trim(),
      });
      setMatchShellMode("group-stage", { groupKey: button.dataset.matchGroupKey || "A" });
    });
  });

  matchKnockoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMatchShellMode("bracket", {
        knockoutStage: button.dataset.matchKnockoutStage || "round32",
      });
    });
  });

  matchSquadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      matchBridgeSquadKey = String(button.dataset.matchSquadKey || "korea").trim() || "korea";
      setMatchShellMode("squad");
    });
  });

  matchGroupAEngineToggle?.addEventListener("click", () => {
    matchGroupAEngineVisible = !matchGroupAEngineVisible;
    if (matchGroupAEngineVisible) {
      loadLazyIframe(matchBridgeFrame);
    }
    renderGroupANewsuitForm();
  });

  mapBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMapBridgeSection(button.dataset.mapBridgeNav || "stadiums");
    });
  });

  mainMapCardTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextSection = button.dataset.mainMapCardTab || "map";
      if (!setView("map")) {
        return;
      }
      focusSection("map", nextSection === "stadiums" ? "venue" : "map");
    });
  });

  matchBridgeFrame?.addEventListener("load", () => {
    if (!isLazyIframeLoaded(matchBridgeFrame)) {
      return;
    }
    matchBridgeReady = false;
    matchBridgeFrameShell?.classList.remove("is-ready");
    if (matchBridgeLoading) {
      matchBridgeLoading.textContent = "legacy match bridge loading...";
    }
    syncLegacyStadiumPhotoSuppression(getLegacyGroupADocument());
    window.setTimeout(() => {
      setMatchShellMode(matchShellMode, {
        groupKey: matchBridgeGroupKey,
        knockoutStage: matchBridgeKnockoutStage,
      });
    }, 120);
    queueBridgeSummaryBurst(requestMatchMapBridgeSummary);
    queueBridgeSummaryBurst(requestSquadBridgeSummary);
    queueMatchResultsPanelRefresh();
  });

  mapBridgeFrame?.addEventListener("load", () => {
    if (!isLazyIframeLoaded(mapBridgeFrame)) {
      return;
    }
    mapBridgeReady = false;
    mapBridgeFrameShell?.classList.remove("is-ready");
    if (mapBridgeLoading) {
      mapBridgeLoading.textContent = "legacy map bridge loading...";
    }
    syncMapBridgeEmbeddedSkin();
    queueMapBridgeScrollSync();
    window.setTimeout(() => {
      setMapBridgeSection(mapBridgeSection);
    }, 120);
    queueMapBridgeReadyFallback(mapBridgeSection);
    queueBridgeSummaryBurst(requestMatchMapBridgeSummary);
  });

  syncMediaBridgeUi();
  setMapCardTabState(mapBridgeSection);
  syncMatchShellUi();
}

function initStorageBridge() {
  if (!storageBridgeButtons.length) {
    return;
  }

  storageBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setArchiveBridgeSection(button.dataset.storageBridgeNav || "document-storage");
    });
  });

  archiveSuitToolbar?.addEventListener("click", (event) => {
    const button = event.target?.closest?.("[data-storage-bridge-nav]");
    if (!button) {
      return;
    }
    event.preventDefault();
    archiveSuitMode = "view";
    archiveSuitEditingId = "";
    closeArchiveSuitCreateMenu();
    setArchiveBridgeSection(button.dataset.storageBridgeNav || "document-storage");
  });

  archiveSuitActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.archiveAction || "";
      if (action === "create") {
        if (archiveSuitCreateMenu) {
          archiveSuitCreateMenu.hidden = !archiveSuitCreateMenu.hidden;
        }
        return;
      }
      closeArchiveSuitCreateMenu();
      if (action === "edit") {
        setArchiveSuitMode("edit", storageBridgeSection);
        return;
      }
      if (action === "delete") {
        setArchiveSuitMode("delete", storageBridgeSection);
      }
    });
  });

  archiveSuitCreateTargets.forEach((button) => {
    button.addEventListener("click", () => {
      closeArchiveSuitCreateMenu();
      setArchiveSuitMode("create", button.dataset.archiveCreateTarget || "document-storage");
    });
  });

  storageBridgeFrameShell?.addEventListener("click", (event) => {
    const editButton = event.target?.closest?.("[data-archive-edit-item]");
    if (editButton) {
      event.stopPropagation();
      archiveSuitMode = "edit";
      archiveSuitEditingId = editButton.dataset.archiveEditItem || "";
      renderArchiveSuitPanels();
      return;
    }
    const itemCard = event.target?.closest?.("[data-archive-item-id]");
    if (itemCard && archiveSuitMode === "view") {
      archiveSuitSelectedId = itemCard.dataset.archiveItemId || "";
      renderArchiveSuitPanels();
      return;
    }
    if (event.target?.closest?.("[data-archive-form-cancel]") || event.target?.closest?.("[data-archive-delete-cancel]")) {
      setArchiveSuitMode("view", storageBridgeSection);
      return;
    }
    const deleteButton = event.target?.closest?.("[data-archive-delete-confirm]");
    if (deleteButton) {
      const activePanel = document.querySelector(`[data-archive-suit-panel="${storageBridgeSection}"]`);
      const ids = Array.from(activePanel?.querySelectorAll("[data-archive-delete-item]:checked") || [])
        .map((input) => input.dataset.archiveDeleteItem)
        .filter(Boolean);
      if (!ids.length) {
        window.alert("삭제할 항목을 체크해주세요.");
        return;
      }
      if (!window.confirm("선택한 항목을 삭제할까요? 삭제 후 복구할 수 없습니다.")) {
        return;
      }
      addArchiveSuitDeletedIds(ids);
      setArchiveSuitItems(getArchiveSuitItems().filter((item) => !ids.includes(item.id)));
      setArchiveSuitMode("view", storageBridgeSection);
    }
  });

  storageBridgeFrameShell?.addEventListener("submit", (event) => {
    const form = event.target?.closest?.("[data-archive-form]");
    if (!form) {
      return;
    }
    event.preventDefault();
    saveArchiveSuitForm(form);
  });

  if (!storageBridgeFrame) {
    setArchiveBridgeSection(storageBridgeSection);
    return;
  }

  storageBridgeFrame.addEventListener("load", () => {
    if (!isLazyIframeLoaded(storageBridgeFrame)) {
      return;
    }
    storageBridgeReady = false;
    storageBridgeFrameShell?.classList.remove("is-ready");
    if (storageBridgeLoading) {
      storageBridgeLoading.textContent = "자료보관 불러오는 중...";
    }
    syncStorageBridgeEmbeddedSkin();
    window.setTimeout(() => {
      syncStorageBridgeEmbeddedSkin();
      setArchiveBridgeSection(storageBridgeSection);
    }, 120);
    queueBridgeSummaryBurst(requestStorageBridgeSummary);
  });
}

function initMediaBridge() {
  if (!mediaBridgeFrame) {
    return;
  }

  mediaBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMediaBridgeSection(button.dataset.mediaBridgeNav || "broadcast-schedule");
    });
  });

  mediaNewsYearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMediaBridgeNewsYear(button.dataset.mediaNewsYear || "2026");
    });
  });

  mediaBridgeFrame.addEventListener("load", () => {
    if (!isLazyIframeLoaded(mediaBridgeFrame)) {
      return;
    }
    mediaBridgeReady = false;
    mediaBridgeFrameShell?.classList.remove("is-ready");
    if (mediaBridgeLoading) {
      mediaBridgeLoading.textContent = "legacy media bridge loading...";
    }
    syncMediaBridgeEmbeddedSkin();
    window.setTimeout(() => {
      syncMediaBridgeEmbeddedSkin();
      setMediaBridgeSection(mediaBridgeSection);
    }, 120);
    queueMediaBridgeReadyFallback(mediaBridgeSection);
    [320, 760, 1400].forEach((delay) => {
      window.setTimeout(syncMediaBridgeEmbeddedSkin, delay);
    });
    queueBridgeSummaryBurst(requestMediaBridgeSummary);
  });

  syncMediaBridgeUi();
}

function initOpsBridge() {
  if (!opsBridgeFrame) {
    return;
  }

  opsBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setOpsBridgeSection(button.dataset.opsBridgeNav || "operation-memo");
    });
  });

  opsBridgeFrame.addEventListener("load", () => {
    if (!isLazyIframeLoaded(opsBridgeFrame)) {
      return;
    }
    opsBridgeReady = false;
    opsBridgeFrameShell?.classList.remove("is-ready");
    if (opsBridgeLoading) {
      opsBridgeLoading.textContent = "legacy ops bridge loading...";
    }
    window.setTimeout(() => {
      setOpsBridgeSection(opsBridgeSection);
    }, 120);
    queueBridgeSummaryBurst(requestOpsBridgeSummary);
  });
}

function initEquipmentBridge() {
  ensureEquipmentBridgeShell();

  if (!equipmentBridgeFrame) {
    return;
  }

  equipmentBridgeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setEquipmentBridgeSection(button.dataset.equipmentBridgeNav || "equipment-summary", {
        member: equipmentBridgeSelectedCrew,
      });
    });
  });

  equipmentBridgeMemberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const crewName = String(button.dataset.equipmentBridgeMember || "").trim();
      if (!crewName) {
        return;
      }
      setEquipmentBridgeSelectedCrew(crewName);
      setEquipmentBridgeSection("personal-summary", { member: crewName });
    });
  });

  equipmentBridgeFrame.addEventListener("load", () => {
    if (!isLazyIframeLoaded(equipmentBridgeFrame)) {
      return;
    }
    equipmentBridgeReady = false;
    clearEquipmentBridgeActionObserver();
    if (equipmentBridgeActionToolbar) {
      equipmentBridgeActionToolbar.innerHTML = "";
      equipmentBridgeActionToolbar.hidden = true;
    }
    syncEquipmentBridgeSearchShell();
    equipmentBridgeFrameShell?.classList.remove("is-ready");
    if (equipmentBridgeLoading) {
      equipmentBridgeLoading.textContent = "legacy equipment bridge loading...";
    }
    syncEquipmentBridgeEmbeddedSkin();
    window.setTimeout(() => {
      setEquipmentBridgeSection(equipmentBridgeSection, { member: equipmentBridgeSelectedCrew });
    }, 120);
    queueEquipmentBridgeReadyFallback(equipmentBridgeSection, { member: equipmentBridgeSelectedCrew });
    queueBridgeSummaryBurst(requestEquipmentBridgeSummary);
  });
}

function setMatchScheduleSection(sectionId) {
  const normalized = String(sectionId || "").trim().toLowerCase();
  logGroupADiagnostic("setMatchScheduleSection", {
    sectionId,
    normalized,
  });
  if (normalized === "squad") {
    setMatchShellMode("squad");
    return;
  }
  if (normalized === "third-place-ranking") {
    setMatchShellMode("third-place-ranking");
    return;
  }
  if (normalized === "bracket" || normalized === "tournament" || normalized === "match-schedule" || !normalized) {
    restoreCurrentOrDefaultMatchScheduleSelection();
    return;
  }
  if (normalized === "group-stage" || normalized === "group") {
    setMatchShellMode("group-stage");
    return;
  }

  const groupKeyMatch = normalized.match(/^([a-l])(?:조)?$/iu);
  if (groupKeyMatch?.[1]) {
    setMatchShellMode("group-stage", { groupKey: groupKeyMatch[1].toUpperCase() });
    return;
  }

  setMatchShellMode("group-stage");
}

function setMapSection(sectionId) {
  setMapBridgeSection(sectionId);
}

function setFieldOpsSection(sectionId) {
  const view = document.querySelector("#view-field-ops");
  const nextSection = normalizeEquipmentBridgeSection(sectionId || "equipment-summary");
  const summarySection = nextSection === "personal-summary" ? "personal-summary" : "equipment-summary";

  if (!view) {
    return;
  }

  view.querySelectorAll(".field-subview").forEach((subview) => {
    subview.classList.toggle("is-active", subview.dataset.section === summarySection);
  });

  if (nextSection !== "personal-summary") {
    closePersonalEquipmentDetail();
  }

  setEquipmentBridgeSection(nextSection, {
    member: equipmentBridgeSelectedCrew,
  });
}

function closePersonalEquipmentDetail() {
  const tabs = document.querySelectorAll(".personal-equipment-tab");
  const detail = document.querySelector("#personal-equipment-detail");
  const title = document.querySelector("#personal-equipment-title");

  tabs.forEach((tab) => tab.classList.remove("is-active"));

  if (detail) {
    detail.hidden = true;
  }

  if (title) {
    title.textContent = "개인장비";
  }
}

function activateDirect(button) {
  const targetId = button ? button.dataset.target : "";
  const sectionId = button ? button.dataset.section || "main" : "";

  if (!setView(targetId)) {
    return;
  }

  closeAllGroups();
  clearNavActive();
  focusSection(targetId, sectionId);
  highlightTargets(WC26_MENU_GROUPS[targetId]?.targetSelectors || []);
  showToast(`${getButtonLabel(button)} view로 이동했습니다.`);
}

function activateSubItem(button) {
  const targetId = button ? button.dataset.target : "";
  const sectionId = button ? button.dataset.section : "";

  if (!setView(targetId)) {
    return;
  }

  const group = button.closest(".nav-group");
  openGroup(group);
  clearNavActive();
  button.classList.add("is-active");

  const toggle = group ? group.querySelector(".nav-toggle") : null;
  if (toggle) {
    toggle.classList.add("is-active");
  }

  focusSection(targetId, sectionId);
  highlightTargets(WC26_MENU_GROUPS[targetId]?.targetSelectors || []);
  showToast(`${getButtonLabel(button)} shell view로 이동했습니다.`);
}

function activateQuickAction(button) {
  const action = button ? WC26_QUICK_ACTION_TARGETS[button.id] : null;
  const actionName = button ? button.dataset.action || getButtonLabel(button) : "";

  if (!action || !setView(action.target)) {
    showToast(`${actionName} 기능은 현재 shell 상태입니다.`);
    return;
  }

  const group = document.querySelector(`.nav-group[data-menu-group="${action.target}"]`);
  const subItem = group
    ? group.querySelector(`.nav-subitem[data-target="${action.target}"][data-section="${action.section}"]`)
    : null;

  if (group) {
    openGroup(group);
  }

  clearNavActive();

  if (subItem) {
    subItem.classList.add("is-active");
  }

  const toggle = group ? group.querySelector(".nav-toggle") : null;
  if (toggle) {
    toggle.classList.add("is-active");
  }

  focusSection(action.target, action.section);
  highlightTargets([`#${button.id}`, ...(WC26_MENU_GROUPS[action.target]?.targetSelectors || [])]);
  showToast(`${actionName} shell view로 이동했습니다.`);
}

function getDashboardPanelLaunchSection(panel) {
  const targetId = String(panel?.dataset.detailTarget || "").trim();
  const explicitSection = String(panel?.dataset.section || "").trim();
  if (explicitSection) {
    return explicitSection;
  }
  return WC26_DASHBOARD_PANEL_SECTION_DEFAULTS[targetId] || "";
}

function activateDashboardPanelTitle(title) {
  const panel = title?.closest("#view-dashboard .panel[data-detail-target]");
  const targetId = String(panel?.dataset.detailTarget || "").trim();
  const sectionId = getDashboardPanelLaunchSection(panel);
  const label = String(title?.textContent || "").trim() || WC26_MENU_GROUPS[targetId]?.label || "상세";

  if (!targetId || !setView(targetId)) {
    return;
  }

  closeAllGroups();
  clearNavActive();
  syncMenuLaunchState(targetId, sectionId);
  focusSection(targetId, sectionId);
  highlightTargets([`#${panel.id}`, ...(WC26_MENU_GROUPS[targetId]?.targetSelectors || [])].filter(Boolean));
  showToast(`${label} 탭으로 이동했습니다.`);
}

function bindDashboardPanelTitleLaunchers() {
  document.querySelectorAll("#view-dashboard .panel[data-detail-target] .panel__title").forEach((title) => {
    if (!(title instanceof HTMLElement) || title.dataset.panelTitleLaunchBound === "true") {
      return;
    }
    const panel = title.closest("#view-dashboard .panel[data-detail-target]");
    const targetId = String(panel?.dataset.detailTarget || "").trim();
    if (!targetId) {
      return;
    }

    title.dataset.panelTitleLaunchBound = "true";
    title.classList.add("panel__title--launch");
    title.setAttribute("role", "button");
    title.setAttribute("tabindex", "0");
    title.setAttribute("aria-label", `${String(title.textContent || "").trim()} 탭으로 이동`);
    title.addEventListener("click", () => activateDashboardPanelTitle(title));
    title.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      activateDashboardPanelTitle(title);
    });
  });
}

function setTournamentStage(button) {
  if (!button) {
    return;
  }

  const stage = button.dataset.stage;
  const placeholder = document.getElementById("tournament-stage-placeholder");

  stageTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab === button);
  });

  if (placeholder) {
    placeholder.textContent = `${WC26_STAGE_LABELS[stage] || "토너먼트"} 연결 예정`;
  }
}

function normalizeAccumulatedTickerItem(item) {
  if (typeof item === "string") {
    return item.trim();
  }

  if (!item || typeof item !== "object") {
    return "";
  }

  return [
    item.time,
    item.title || item.summary || item.name,
    item.status,
  ]
    .filter(Boolean)
    .join(" · ")
    .trim();
}

function renderAccumulatedTicker(items) {
  const content = document.querySelector(WC26_TICKER_RULES.todayAccumulatedSchedule.content);

  if (!content) {
    return;
  }

  const normalizedItems = Array.isArray(items)
    ? items.map(normalizeAccumulatedTickerItem).filter(Boolean)
    : [];
  const tickerItems = normalizedItems.length
    ? normalizedItems
    : [
        content.dataset.emptyLabel || WC26_TICKER_RULES.todayAccumulatedSchedule.emptyLabel,
        "오늘 누적된 업무일정이 이 영역에 흐릅니다",
        "실제 누적일정 데이터 연결 전 shell 상태",
      ];

  content.replaceChildren(
    ...tickerItems.map((text) => {
      const item = document.createElement("span");
      item.textContent = text;
      return item;
    }),
  );
}

function initAccumulatedTicker() {
  renderAccumulatedTicker(window.WC26_TODAY_ACCUMULATED_SCHEDULE);

  window.WC26_ACCUMULATED_TICKER = {
    setItems(items) {
      renderAccumulatedTicker(items);
    },
    refresh() {
      renderAccumulatedTicker(window.WC26_TODAY_ACCUMULATED_SCHEDULE);
    },
  };
}

function renderOfficialSiteLinks(links = OFFICIAL_SITE_LINKS) {
  const container = document.querySelector("#official-site-links");

  if (!container) {
    return;
  }

  const normalizedLinks = Array.isArray(links)
    ? links.filter((link) => link && typeof link.label === "string")
    : [];

  container.replaceChildren(
    ...normalizedLinks.map((link) => {
      const hasUrl = typeof link.url === "string" && link.url.trim();
      const element = document.createElement(hasUrl ? "a" : "button");
      element.className = "official-site-button";
      element.textContent = link.shortLabel || link.label;

      if (hasUrl) {
        element.href = link.url.trim();
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      } else {
        element.type = "button";
        element.disabled = true;
        element.setAttribute("aria-disabled", "true");
      }

      return element;
    }),
  );
}

function normalizeWC26StadiumDisplayName(value = "") {
  const normalized = String(value || "").trim();
  if (["Akron Stadium", "Estadio Akron", "아크론스타디움"].includes(normalized)) {
    return "Guadalajara Stadium";
  }
  return normalized;
}

function normalizeMainStadiumCarouselItem(stadium = {}, index = 0) {
  if (typeof stadium === "string") {
    stadium = { title: stadium };
  }
  if (!stadium || typeof stadium !== "object") {
    return null;
  }
  const title = normalizeWC26StadiumDisplayName(stadium.title || stadium.stadiumName || stadium.name || "");
  const city = String(stadium.city || stadium.location || "").trim();
  const key = String(stadium.key || title || city || `stadium-${index + 1}`).trim();
  const canonicalImagePath = resolveWC26StadiumImagePath(title || city || key, "");
  const stadiumImage = String(
    canonicalImagePath ||
      stadium.imagePath ||
      stadium.stadiumImage ||
      stadium.image,
  ).trim();
  const caption = title || city || `경기장 ${index + 1}`;
  const countryKey = normalizeMapStadiumCountryValue(stadium.countryKey || stadium.country || "");
  const countryLabel = countryKey === "canada" ? "Canada" : countryKey === "usa" ? "USA" : countryKey === "mexico" ? "Mexico" : "";
  const capacityValue = stadium.capacity ?? stadium.seats ?? stadium.capacityValue ?? "";
  const note = String(stadium.note || stadium.subtitle || stadium.description || "").trim();

  return {
    key,
    title: caption,
    caption,
    city,
    countryKey,
    countryLabel,
    locationLabel: [city, countryLabel].filter(Boolean).join(", "),
    capacity: String(capacityValue || "").trim(),
    note,
    stadiumImage,
    alt: String(stadium.imageAlt || `${caption} 경기장 사진`).trim(),
  };
}

function collectMainStadiumCarouselItems({ summary = null, directItems = [] } = {}) {
  const items = [];
  const seen = new Map();
  const getMainStadiumItemScore = (item = {}) => {
    let score = 0;
    if (item.stadiumImage) score += 4;
    if (item.countryKey) score += 3;
    if (item.capacity) score += 2;
    if (item.note) score += 1;
    return score;
  };
  const pushItem = (rawItem = {}, index = 0) => {
    const normalized = normalizeMainStadiumCarouselItem(rawItem, index);
    if (!normalized) {
      return;
    }
    const dedupeKey = String(normalized.title || normalized.caption || normalized.key).trim().toLowerCase();
    if (!dedupeKey) {
      return;
    }
    const existingIndex = seen.get(dedupeKey);
    if (Number.isInteger(existingIndex)) {
      const existingItem = items[existingIndex];
      if (getMainStadiumItemScore(normalized) > getMainStadiumItemScore(existingItem)) {
        items[existingIndex] = normalized;
      }
      return;
    }
    seen.set(dedupeKey, items.length);
    items.push(normalized);
  };

  if (Array.isArray(directItems) && directItems.length) {
    directItems.forEach((item, index) => pushItem(item, index));
  }

  const currentStadium = summary && typeof summary === "object" ? summary.currentStadium || {} : window.WC26_CURRENT_STADIUM || {};
  if (currentStadium && typeof currentStadium === "object") {
    pushItem(
      {
        key: currentStadium.key,
        title: currentStadium.title || currentStadium.stadiumName,
        city: currentStadium.city,
        countryKey: currentStadium.countryKey || currentStadium.country,
        capacity: currentStadium.capacity || currentStadium.seats,
        note: currentStadium.note || currentStadium.subtitle,
        imagePath: currentStadium.imagePath || currentStadium.stadiumImage,
        imageAlt: currentStadium.imageAlt,
      },
      items.length,
    );
  }

  getStoredStadiumList().forEach((item, index) => {
    pushItem(
      {
        key: item.key,
        title: item.title,
        city: item.city,
        countryKey: item.countryKey,
        country: item.countryLabel,
        capacity: item.capacity || item.seats,
        note: item.note,
        imagePath: item.imagePath,
        imageAlt: item.imageAlt,
      },
      items.length + index,
    );
  });

  return items;
}

function shuffleMainStadiumItems(items = [], previousLastKey = "") {
  const pool = Array.isArray(items) ? items.slice() : [];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  if (pool.length > 1 && previousLastKey && pool[0]?.key === previousLastKey) {
    const swapIndex = pool.findIndex((item) => item?.key && item.key !== previousLastKey);
    if (swapIndex > 0) {
      [pool[0], pool[swapIndex]] = [pool[swapIndex], pool[0]];
    }
  }
  return pool;
}

function resolveMainStadiumCapacityValue(item = {}) {
  const direct = String(item.capacity || "").replace(/[^\d]/g, "");
  if (direct) {
    return direct;
  }
  const candidates = [item.title, item.note]
    .map((value) => String(value || "").trim())
    .filter(Boolean);
  for (const candidate of candidates) {
    if (Object.prototype.hasOwnProperty.call(WC26_STADIUM_CAPACITY_LOOKUP, candidate)) {
      return String(WC26_STADIUM_CAPACITY_LOOKUP[candidate]);
    }
  }
  return "";
}

function getMainStadiumFlagCode(countryKey = "") {
  const normalized = normalizeMapStadiumCountryValue(countryKey);
  if (normalized === "canada") {
    return "ca";
  }
  if (normalized === "usa") {
    return "us";
  }
  if (normalized === "mexico") {
    return "mx";
  }
  return "";
}

function formatMainStadiumCapacity(value = "") {
  const normalized = String(value || "").replace(/[^\d]/g, "");
  if (!normalized) {
    return "";
  }
  const numeric = Number(normalized);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return "";
  }
  return `Capacity ${numeric.toLocaleString("en-US")}`;
}

function stopMainStadiumAuto() {
  window.clearInterval(mainStadiumTimer);
  mainStadiumTimer = null;
}

function startMainStadiumAuto() {
  stopMainStadiumAuto();
  if (mainStadiumItems.length < 2) {
    return;
  }
  mainStadiumTimer = window.setInterval(() => {
    setMainStadiumSlide(mainStadiumActiveIndex + 1);
  }, WC26_MAIN_STADIUM_INTERVAL);
}

function restartMainStadiumAuto() {
  startMainStadiumAuto();
}

function setMainStadiumSlide(nextIndex = 0) {
  const layer = document.querySelector("#panel-ops-alert .main-stadium-empty-layer");
  if (!layer) {
    mainStadiumActiveIndex = 0;
    return;
  }
  if (!mainStadiumItems.length) {
    layer.replaceChildren();
    mainStadiumActiveIndex = 0;
    return;
  }
  if (nextIndex >= mainStadiumItems.length) {
    const previousLastKey = mainStadiumItems[mainStadiumItems.length - 1]?.key || "";
    mainStadiumItems = shuffleMainStadiumItems(mainStadiumItems, previousLastKey);
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = mainStadiumItems.length - 1;
  }
  mainStadiumActiveIndex = nextIndex;
  layer.replaceChildren(createMainStadiumSlide(mainStadiumItems[mainStadiumActiveIndex], mainStadiumActiveIndex));
}

function createMainStadiumSlide(item = {}, index = 0) {
  const slide = document.createElement("article");
  slide.className = "main-stadium-random-slide";
  slide.dataset.stadiumKey = item.key || "";
  const photoSide = document.createElement("div");
  photoSide.className = "main-stadium-photo-side";
  const image = document.createElement("img");
  image.className = "main-stadium-photo-img";
  image.src = item.stadiumImage || "";
  image.alt = item.alt || item.title || "경기장 사진";
  image.loading = index === 0 ? "eager" : "lazy";
  image.decoding = "async";
  image.draggable = false;
  photoSide.appendChild(image);

  const infoSide = document.createElement("div");
  infoSide.className = "main-stadium-info-side";
  const flagCode = getMainStadiumFlagCode(item.countryKey);
  const flag = flagCode ? createGroupFixtureFlag(flagCode, item.countryLabel || item.title || "국가") : null;
  if (flag) {
    flag.classList.add("main-stadium-country-flag");
  }
  const name = document.createElement("div");
  name.className = "main-stadium-name";
  name.title = item.title || "";
  name.textContent = item.title || "";
  if (flag) {
    infoSide.appendChild(flag);
  }
  infoSide.appendChild(name);

  const capacityLabel = formatMainStadiumCapacity(resolveMainStadiumCapacityValue(item));
  if (capacityLabel) {
    const capacity = document.createElement("div");
    capacity.className = "main-stadium-capacity";
    capacity.textContent = capacityLabel;
    infoSide.appendChild(capacity);
  }

  slide.append(photoSide, infoSide);

  return slide;
}

function renderMainStadiumCarousel(items = []) {
  const layer = document.querySelector("#panel-ops-alert .main-stadium-empty-layer");
  if (!layer) {
    return;
  }
  stopMainStadiumAuto();
  mainStadiumItems = shuffleMainStadiumItems(
    Array.isArray(items) ? items.filter((item) => item && item.stadiumImage) : [],
  );
  if (!mainStadiumItems.length) {
    layer.replaceChildren();
    mainStadiumActiveIndex = 0;
    return;
  }
  mainStadiumActiveIndex = 0;
  layer.replaceChildren(createMainStadiumSlide(mainStadiumItems[0], 0));
  startMainStadiumAuto();
}

function renderStadiumPanel(stadium) {
  const items = stadium ? collectMainStadiumCarouselItems({ directItems: [stadium] }) : [];
  renderMainStadiumCarousel(items);
}

function initStadiumPanel() {
  renderMainStadiumCarousel(collectMainStadiumCarouselItems({ summary: matchMapBridgeSummaryState }));

  const carousel = document.querySelector("#panel-ops-alert .main-stadium-empty-layer");
  if (carousel && !mainStadiumGestureBound) {
    mainStadiumGestureBound = true;
    const canSwipe = () => mainStadiumItems.length > 1;
    const commitSwipe = (deltaX = 0, deltaY = 0) => {
      if (Math.abs(deltaX) < WC26_MAIN_STADIUM_SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }
      setMainStadiumSlide(mainStadiumActiveIndex + (deltaX < 0 ? 1 : -1));
      restartMainStadiumAuto();
    };

    if ("PointerEvent" in window) {
      carousel.addEventListener("pointerdown", (event) => {
        if (!canSwipe() || !event.isPrimary) {
          return;
        }
        if (event.pointerType === "mouse" && event.button !== 0) {
          return;
        }
        mainStadiumPointerGesture = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          lastX: event.clientX,
          lastY: event.clientY,
        };
      });

      window.addEventListener("pointermove", (event) => {
        if (!mainStadiumPointerGesture || mainStadiumPointerGesture.pointerId !== event.pointerId) {
          return;
        }
        mainStadiumPointerGesture.lastX = event.clientX;
        mainStadiumPointerGesture.lastY = event.clientY;
        const deltaX = event.clientX - mainStadiumPointerGesture.startX;
        const deltaY = event.clientY - mainStadiumPointerGesture.startY;
        if (Math.abs(deltaX) >= WC26_MAIN_STADIUM_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
          event.preventDefault();
        }
      }, { passive: false });

      const finishPointerGesture = (event) => {
        if (!mainStadiumPointerGesture || mainStadiumPointerGesture.pointerId !== event.pointerId) {
          return;
        }
        const deltaX = (event.clientX ?? mainStadiumPointerGesture.lastX) - mainStadiumPointerGesture.startX;
        const deltaY = (event.clientY ?? mainStadiumPointerGesture.lastY) - mainStadiumPointerGesture.startY;
        mainStadiumPointerGesture = null;
        if (!canSwipe()) {
          return;
        }
        commitSwipe(deltaX, deltaY);
      };

      window.addEventListener("pointerup", finishPointerGesture);
      window.addEventListener("pointercancel", finishPointerGesture);
    } else {
      carousel.addEventListener("touchstart", (event) => {
        if (!canSwipe() || !event.touches.length) {
          return;
        }
        const touch = event.touches[0];
        mainStadiumTouchGesture = {
          startX: touch.clientX,
          startY: touch.clientY,
          lastX: touch.clientX,
          lastY: touch.clientY,
        };
      }, { passive: true });

      carousel.addEventListener("touchmove", (event) => {
        if (!mainStadiumTouchGesture || !event.touches.length) {
          return;
        }
        const touch = event.touches[0];
        mainStadiumTouchGesture.lastX = touch.clientX;
        mainStadiumTouchGesture.lastY = touch.clientY;
        const deltaX = touch.clientX - mainStadiumTouchGesture.startX;
        const deltaY = touch.clientY - mainStadiumTouchGesture.startY;
        if (Math.abs(deltaX) >= WC26_MAIN_STADIUM_SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY) && event.cancelable) {
          event.preventDefault();
        }
      }, { passive: false });

      const finishTouchGesture = () => {
        if (!mainStadiumTouchGesture) {
          return;
        }
        const deltaX = mainStadiumTouchGesture.lastX - mainStadiumTouchGesture.startX;
        const deltaY = mainStadiumTouchGesture.lastY - mainStadiumTouchGesture.startY;
        mainStadiumTouchGesture = null;
        if (!canSwipe()) {
          return;
        }
        commitSwipe(deltaX, deltaY);
      };

      carousel.addEventListener("touchend", finishTouchGesture, { passive: true });
      carousel.addEventListener("touchcancel", finishTouchGesture, { passive: true });
    }
  }

  window.WC26_STADIUM_PANEL = {
    setData(stadium) {
      renderStadiumPanel(stadium);
    },
    setItems(items) {
      renderMainStadiumCarousel(Array.isArray(items) ? items : []);
    },
    clear() {
      renderMainStadiumCarousel([]);
    },
  };
}

function getBroadcastItems() {
  const source =
    window.WC26_BROADCAST_ITEMS ||
    window.WC26_BROADCAST_SCHEDULE ||
    window.WC26_BROADCAST_STATUS_ITEMS ||
    [];

  return Array.isArray(source) ? source : [];
}

function parseBroadcastDateTime(item, dateKey, timeKeys) {
  const explicitDateTime = timeKeys
    .map((key) => item[key])
    .find((value) => value instanceof Date || (typeof value === "string" && value.trim()));

  if (explicitDateTime instanceof Date) {
    return explicitDateTime;
  }

  if (typeof explicitDateTime === "string" && explicitDateTime.includes("T")) {
    const parsed = new Date(explicitDateTime);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const timeValue = timeKeys.map((key) => item[key]).find((value) => typeof value === "string" && value.trim());
  const normalizedTime = String(timeValue || "").match(/\d{1,2}:\d{2}/)?.[0];

  if (!dateKey || !normalizedTime) {
    return null;
  }

  const parsed = new Date(`${dateKey}T${normalizedTime}:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function adaptBroadcastItem(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  const dateKey = String(item.broadcastDate || item.date || item.matchDate || item.localDate || "").slice(0, 10);
  const start = parseBroadcastDateTime(item, dateKey, ["startAt", "startTime", "start", "time", "broadcastTime"]);
  const end = parseBroadcastDateTime(item, dateKey, ["endAt", "endTime", "end"]);
  const typeText = String(item.type || item.category || item.kind || "").toLowerCase();
  const title = item.title || item.name || item.programTitle || item.program || "";
  const memo = item.memo || item.note || item.description || "";

  return {
    raw: item,
    title,
    program: item.program || item.channel || item.broadcaster || item.network || "",
    memo,
    timeLabel: item.timeLabel || item.broadcastTime || [item.startTime || item.start, item.endTime || item.end].filter(Boolean).join(" - "),
    start,
    end,
    isSpecial: Boolean(item.isSpecial || item.special || item.isBreaking || typeText.includes("special") || typeText.includes("breaking") || typeText.includes("특보")),
  };
}

function isBroadcastOnair(item, now) {
  if (!item.start || !item.end) {
    return false;
  }

  return item.start.getTime() <= now.getTime() && now.getTime() < item.end.getTime();
}

function isBroadcastUpcoming(item, now) {
  return item.start && item.start.getTime() > now.getTime();
}

function getCurrentBroadcastStatus(now = new Date()) {
  const items = getBroadcastItems().map(adaptBroadcastItem).filter(Boolean);

  if (!items.length) {
    return null;
  }

  const onairSpecial = items.find((item) => item.isSpecial && isBroadcastOnair(item, now));
  if (onairSpecial) {
    return { item: onairSpecial, state: "onair" };
  }

  const onairRegular = items.find((item) => !item.isSpecial && isBroadcastOnair(item, now));
  if (onairRegular) {
    return { item: onairRegular, state: "onair" };
  }

  const upcomingItems = items
    .filter((item) => isBroadcastUpcoming(item, now))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
  const upcomingSpecial = upcomingItems.find((item) => item.isSpecial);
  if (upcomingSpecial) {
    return { item: upcomingSpecial, state: "scheduled" };
  }

  const upcomingRegular = upcomingItems.find((item) => !item.isSpecial);
  return upcomingRegular ? { item: upcomingRegular, state: "scheduled" } : null;
}

function renderPanelFiveBroadcastStatus(status = getCurrentBroadcastStatus()) {
  const shell = document.querySelector("#broadcast-status-shell");
  const lamp = document.querySelector("#broadcast-status-lamp");
  const title = document.querySelector("#broadcast-status-title");
  const time = document.querySelector("#broadcast-status-time");
  const program = document.querySelector("#broadcast-status-program");
  const note = document.querySelector("#broadcast-status-note");
  const controls = document.querySelector("#broadcast-slide-controls");
  const counter = document.querySelector("#broadcast-slide-counter");

  if (!shell || !lamp) {
    return;
  }

  const primaryBroadcast = getPrimaryBroadcastProgrammingItem();

  if (!title || !time || !program || !note || !controls || !counter) {
    lamp.hidden = true;
    lamp.textContent = "";
    lamp.classList.remove("broadcast-lamp--onair", "broadcast-lamp--scheduled");
    shell.replaceChildren(createMainBroadcastCard(primaryBroadcast));
    return;
  }

  if (primaryBroadcast?.item) {
    const primaryItem = primaryBroadcast.item;
    const isOnair = primaryBroadcast?.state === "onair";

    lamp.hidden = false;
    lamp.textContent = isOnair ? "ON AIR" : "방송대기";
    lamp.classList.toggle("broadcast-lamp--onair", isOnair);
    lamp.classList.toggle("broadcast-lamp--scheduled", !isOnair);
    title.textContent = stripBridgeSummaryHtml(primaryItem?.title || "") || "방송편성";
    time.textContent = stripBridgeSummaryHtml(primaryItem?.timeLabel || "") || mediaBridgePanelDefaults.time;
    program.textContent = stripBridgeSummaryHtml(primaryItem?.memo || primaryItem?.program || "") || (isOnair ? "현재 방송 중" : "다음 방송 편성");
    note.hidden = true;
    note.textContent = "";
    controls.hidden = true;
    renderBroadcastSlideDots(1, 0);
    return;
  }

  if (!status) {
    lamp.hidden = true;
    lamp.textContent = "";
    lamp.classList.remove("broadcast-lamp--onair", "broadcast-lamp--scheduled");
    title.textContent = shell.dataset.emptyLabel || "방송편성 이식 예정";
    time.textContent = "방송시간 연결 전";
    program.textContent = "방송편성 데이터 연결 전 shell 상태";
    note.hidden = true;
    note.textContent = "";
    controls.hidden = true;
    renderBroadcastSlideDots(1, 0);
    return;
  }

  const isOnair = status.state === "onair";
  const item = status.item;
  lamp.hidden = false;
  lamp.textContent = isOnair ? "ON-AIR" : "방송예정";
  lamp.classList.toggle("broadcast-lamp--onair", isOnair);
  lamp.classList.toggle("broadcast-lamp--scheduled", !isOnair);
  title.textContent = item.title || (item.isSpecial ? "특보" : "방송편성");
  time.textContent = item.timeLabel || "방송시간 확인 예정";
  program.textContent = item.program || (item.isSpecial ? "특보" : "방송편성");
  note.hidden = !item.memo;
  note.textContent = item.memo || "";
  controls.hidden = true;
  renderBroadcastSlideDots(1, 0);
}

function initPanelFiveBroadcastStatus() {
  renderPanelFiveBroadcastStatus();
  const panel = document.querySelector("#panel-equipment");
  if (panel && !panel.dataset.broadcastOpenBound) {
    panel.dataset.broadcastOpenBound = "true";
    panel.setAttribute("role", "button");
    panel.tabIndex = panel.tabIndex >= 0 ? panel.tabIndex : 0;
    panel.addEventListener("click", (event) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target?.closest("a, button, input, textarea, select")) {
        return;
      }
      openBroadcastProgrammingFromMainPanel();
    });
    panel.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      openBroadcastProgrammingFromMainPanel();
    });
  }
  window.clearInterval(broadcastStatusTimer);
  broadcastStatusTimer = window.setInterval(renderPanelFiveBroadcastStatus, 60000);
  broadcastSlideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!broadcastSlideItems.length) {
        return;
      }
      const direction = button.dataset.broadcastSlideNav === "prev" ? -1 : 1;
      broadcastSlideIndex = (broadcastSlideIndex + direction + broadcastSlideItems.length) % broadcastSlideItems.length;
      renderPanelFiveBroadcastStatus();
    });
  });

  window.WC26_BROADCAST_STATUS_PANEL = {
    refresh() {
      renderPanelFiveBroadcastStatus();
    },
    getStatus(now) {
      return getCurrentBroadcastStatus(now);
    },
  };
}

function initPersonalEquipmentTabs() {
  const tabs = Array.from(document.querySelectorAll(".personal-equipment-tab"));
  const detail = document.querySelector("#personal-equipment-detail");
  const title = document.querySelector("#personal-equipment-title");
  const closeButton = document.querySelector(".personal-equipment-close");

  if (!tabs.length || !detail || !title) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const crewName = tab.dataset.crew || tab.textContent.trim();
      const alreadyActive = tab.classList.contains("is-active");

      if (alreadyActive) {
        closePersonalEquipmentDetail();
        return;
      }

      tabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      title.textContent = `${crewName} 개인장비`;
      detail.hidden = false;
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closePersonalEquipmentDetail);
  }
}

function closePersonalEquipmentDetail() {
  const tabs = document.querySelectorAll(".personal-equipment-tab");
  const detail = document.querySelector("#personal-equipment-detail");
  const title = document.querySelector("#personal-equipment-title");

  tabs.forEach((tab) => tab.classList.remove("is-active"));

  if (detail) {
    detail.hidden = true;
  }

  if (title) {
    title.textContent = equipmentBridgePanelDefaults.title || "개인장비";
  }
}

function initPersonalEquipmentTabs() {
  const tabs = Array.from(document.querySelectorAll(".personal-equipment-tab"));
  const detail = document.querySelector("#personal-equipment-detail");
  const title = document.querySelector("#personal-equipment-title");
  const closeButton = document.querySelector(".personal-equipment-close");

  if (!tabs.length || !detail || !title) {
    return;
  }

  tabs.forEach((tab, index) => {
    const crewName = WC26_EQUIPMENT_BRIDGE_MEMBER_ORDER[index] || tab.dataset.crew || tab.textContent.trim();
    tab.dataset.crew = crewName;
    tab.textContent = crewName;
    tab.addEventListener("click", () => {
      const selectedCrewName = tab.dataset.crew || tab.textContent.trim();
      const alreadyActive = tab.classList.contains("is-active");

      if (alreadyActive) {
        closePersonalEquipmentDetail();
        return;
      }

      setEquipmentBridgeSelectedCrew(selectedCrewName);
      setFieldOpsSection("personal-summary");
      detail.hidden = false;
      title.textContent = `${selectedCrewName} 개인장비`;
      renderEquipmentBridgePersonalDetail({
        selectedDate: "",
        memberEquipmentSummaries: [],
      });
      postEquipmentBridgeNavigation("personal-summary", selectedCrewName);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closePersonalEquipmentDetail);
  }
}

navDirectButtons.forEach((button) => {
  button.addEventListener("click", () => activateDirect(button));
});

navToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".nav-group");
    toggleGroup(group);
    clearNavActive();
    button.classList.add("is-active");
  });
});

navSubItems.forEach((button) => {
  button.addEventListener("click", () => activateSubItem(button));
});

quickActionButtons.forEach((button) => {
  button.addEventListener("click", () => activateQuickAction(button));
});

bindDashboardPanelTitleLaunchers();

stageTabs.forEach((button) => {
  button.addEventListener("click", () => setTournamentStage(button));
});

mobileSectionBackButton?.addEventListener("click", () => {
  returnToMobileLauncher();
});

sidebarHomeButton?.addEventListener("click", () => {
  goToDashboardHome();
});

sidebarHomeButton?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }
  event.preventDefault();
  goToDashboardHome();
});

window.addEventListener("popstate", (event) => {
  if (!isMobileSectionViewport()) {
    return;
  }
  const state = event.state && typeof event.state === "object" ? event.state : {};
  if (state.wc26MobileSection && state.targetId) {
    setView(state.targetId, { skipHistory: true });
    return;
  }
  setView("dashboard", { skipHistory: true });
});

WC26_MOBILE_MEDIA_QUERY?.addEventListener?.("change", () => {
  syncMobileSectionViewportState();
});

initDailyMatchCarousel();
initAccumulatedTicker();
initTimelineEditor();
initScheduleBridge();
initStorageBridge();
initMediaBridge();
initOpsBridge();
initMatchMapBridge();
initEquipmentBridge();
renderOfficialSiteLinks();
renderOfficialLinkTable();
renderOperationStatusSummary();
ensureMainMapCardShells();
setMapCardTabState(mapBridgeSection);
initStadiumPanel();
initPanelFiveBroadcastStatus();
initPersonalEquipmentTabs();
startTopbarStatusTicker();
refreshTimelineGanttFromLegacy();
restoreDashboardViewOnPlainEntry();
syncMobileSectionViewportState();







