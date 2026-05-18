(() => {
  const READY_TYPE = "wc26:legacy-schedule-ready";
  const SUMMARY_TYPE = "WC26_LEGACY_SCHEDULE_SUMMARY";
  const NAVIGATE_TYPE = "wc26:legacy-schedule-navigate";
  const SUMMARY_DIRTY_EVENT = "wc26:legacy-schedule-summary-dirty";
  const SECTION_SET = new Set(["all", "shared", "personal", "accumulated", "export"]);

  const EQUIPMENT_READY_TYPE = "wc26:legacy-equipment-ready";
  const EQUIPMENT_SUMMARY_TYPE = "WC26_LEGACY_EQUIPMENT_SUMMARY";
  const EQUIPMENT_NAVIGATE_TYPE = "wc26:legacy-equipment-navigate";
  const EQUIPMENT_SUMMARY_DIRTY_EVENT = "wc26:legacy-equipment-summary-dirty";
  const EQUIPMENT_SECTION_SET = new Set(["equipment-summary", "personal-summary", "equipment-usage", "carnet"]);

  const STORAGE_READY_TYPE = "wc26:legacy-storage-ready";
  const STORAGE_SUMMARY_TYPE = "WC26_LEGACY_STORAGE_SUMMARY";
  const STORAGE_NAVIGATE_TYPE = "wc26:legacy-storage-navigate";
  const STORAGE_SUMMARY_DIRTY_EVENT = "wc26:legacy-storage-summary-dirty";
  const STORAGE_SECTION_SET = new Set(["document-storage", "file-storage", "gallery", "video", "carnet"]);

  const MEDIA_READY_TYPE = "wc26:legacy-media-ready";
  const MEDIA_SUMMARY_TYPE = "WC26_LEGACY_MEDIA_SUMMARY";
  const MEDIA_NAVIGATE_TYPE = "wc26:legacy-media-navigate";
  const MEDIA_SUMMARY_DIRTY_EVENT = "wc26:legacy-media-summary-dirty";
  const MEDIA_SECTION_SET = new Set(["broadcast-schedule", "worldcup-news"]);

  const OPS_READY_TYPE = "wc26:legacy-ops-ready";
  const OPS_SUMMARY_TYPE = "WC26_LEGACY_OPS_SUMMARY";
  const OPS_NAVIGATE_TYPE = "wc26:legacy-ops-navigate";
  const OPS_SUMMARY_DIRTY_EVENT = "wc26:legacy-ops-summary-dirty";
  const OPS_SECTION_SET = new Set(["operation-memo", "official-links", "operation-status"]);

  const SQUAD_READY_TYPE = "wc26:legacy-squad-ready";
  const SQUAD_SUMMARY_TYPE = "WC26_LEGACY_SQUAD_SUMMARY";
  const SQUAD_NAVIGATE_TYPE = "wc26:legacy-squad-navigate";
  const SQUAD_SUMMARY_DIRTY_EVENT = "wc26:legacy-squad-summary-dirty";
  const SQUAD_SECTION_SET = new Set(["squad", "group-a-squad"]);

  const MATCH_MAP_READY_TYPE = "wc26:legacy-match-map-ready";
  const MATCH_MAP_SUMMARY_TYPE = "WC26_LEGACY_MATCH_MAP_SUMMARY";
  const MATCH_MAP_NAVIGATE_TYPE = "wc26:legacy-match-map-navigate";
  const MATCH_MAP_SUMMARY_DIRTY_EVENT = "wc26:legacy-match-map-summary-dirty";
  const MATCH_MAP_SECTION_SET = new Set(["match-schedule", "bracket", "stadiums", "map"]);

  let bridgeBooted = false;
  let summarySyncTimerId = null;
  let equipmentSummarySyncTimerId = null;
  let storageSummarySyncTimerId = null;
  let mediaSummarySyncTimerId = null;
  let opsSummarySyncTimerId = null;
  let squadSummarySyncTimerId = null;
  let matchMapSummarySyncTimerId = null;
  let lastSummarySignature = "";
  let lastEquipmentSummarySignature = "";
  let lastStorageSummarySignature = "";
  let lastMediaSummarySignature = "";
  let lastOpsSummarySignature = "";
  let lastSquadSummarySignature = "";
  let lastMatchMapSummarySignature = "";
  let currentStorageSection = "document-storage";
  let currentMediaSection = "broadcast-schedule";
  let currentOpsSection = "operation-memo";
  let currentSquadSection = "squad";
  let currentMatchMapSection = "match-schedule";
  const SUMMARY_BRIDGE_ONLY = new URLSearchParams(window.location.search).get("summaryBridge") === "1";

  function postToParent(message = {}) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(message, "*");
    }
  }

  function normalizeSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    return SECTION_SET.has(normalized) ? normalized : "all";
  }

  function normalizeEquipmentSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    return EQUIPMENT_SECTION_SET.has(normalized) ? normalized : "equipment-summary";
  }

  function fetchBridgeSharedStateKeys(keys = []) {
    const normalizedKeys = keys.map((key) => String(key || "").trim()).filter(Boolean);
    const cacheRows = (rows = []) => {
      rows.forEach((row) => {
        const stateKey = String(row?.state_key || "").trim();
        const stateValue = String(row?.state_value ?? "");
        if (!stateKey || !normalizedKeys.includes(stateKey) || !stateValue) {
          return;
        }
        try {
          window.localStorage?.setItem(stateKey, stateValue);
        } catch (_error) {}
        try {
          window.sessionStorage?.setItem(stateKey, stateValue);
        } catch (_error) {}
      });
      try {
        if (typeof resetEquipmentSyncState === "function") {
          resetEquipmentSyncState();
        }
      } catch (_error) {}
    };
    const fallbackFetch = async () => {
      try {
        const supabaseUrl = String(window.APP_CONFIG?.supabaseUrl || "").replace(/\/+$/, "");
        const supabaseAnonKey = String(window.APP_CONFIG?.supabaseAnonKey || "");
        if (!supabaseUrl || !supabaseAnonKey || !normalizedKeys.length) {
          return;
        }
        const query = normalizedKeys.map((key) => encodeURIComponent(key)).join(",");
        const response = await fetch(
          `${supabaseUrl}/rest/v1/shared_state?select=state_key,state_value&state_key=in.(${query})`,
          {
            headers: {
              apikey: supabaseAnonKey,
              Authorization: `Bearer ${supabaseAnonKey}`,
            },
          },
        );
        if (!response.ok) {
          return;
        }
        const rows = await response.json();
        if (Array.isArray(rows) && rows.length) {
          cacheRows(rows);
          if (typeof applySharedStateSnapshot === "function") {
            applySharedStateSnapshot(rows);
          }
        }
      } catch (_error) {}
    };
    try {
      if (typeof fetchSharedStateSnapshot === "function") {
        Promise.resolve(
          fetchSharedStateSnapshot(
            normalizedKeys,
            { markInitial: false },
          ),
        )
          .catch(() => undefined)
          .then(() => undefined);
      }
    } catch (_error) {}
    return fallbackFetch();
  }

  function normalizeStorageSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    if (normalized === "file-storage" || normalized === "file") {
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

  function normalizeMediaSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    if (["broadcast", "broadcast-schedule", "ops-memo"].includes(normalized)) {
      return "broadcast-schedule";
    }
    if (["worldcup-news", "terrestrial-news", "news"].includes(normalized)) {
      return "worldcup-news";
    }
    return "broadcast-schedule";
  }

  function normalizeOpsSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
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

  function normalizeSquadSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    return SQUAD_SECTION_SET.has(normalized) ? normalized : "squad";
  }

  function normalizeMatchMapSection(section = "") {
    const normalized = String(section || "").trim().toLowerCase();
    if (["bracket", "squad"].includes(normalized)) {
      return "bracket";
    }
    if (["venue", "stadium", "stadiums"].includes(normalized)) {
      return "stadiums";
    }
    if (normalized === "map") {
      return "map";
    }
    return "match-schedule";
  }

  function ensureTimelineView() {
    if (typeof window.renderTimelineSchedule === "function") {
      window.renderTimelineSchedule("personal");
    } else if (typeof window.togglePersonalTimeline === "function") {
      window.togglePersonalTimeline();
    }

    if (typeof window.ensureTimelineExportButton === "function") {
      window.ensureTimelineExportButton();
    }
  }

  function activateFirstTimelineItem() {
    const detailCol = document.getElementById("detailCol");
    const list = detailCol ? detailCol.querySelector(".personal-timeline-list") : null;
    const firstItem = list ? list.querySelector(".personal-timeline-item") : null;

    if (list && firstItem && typeof window.setPersonalTimelineOpenItem === "function") {
      window.setPersonalTimelineOpenItem(list, firstItem);
    }
  }

  function openTimelineGalleryStorageView() {
    ensureTimelineView();
    activateFirstTimelineItem();

    if (typeof window.openTimelineGalleryView === "function") {
      window.openTimelineGalleryView();
      return;
    }

    document.querySelector('.personal-timeline-quick-btn[data-timeline-action="gallery"]')?.click();
  }

  function normalizeSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    return {
      type: SUMMARY_TYPE,
      selectedDate: String(rawPayload.selectedDate || "").trim(),
      sharedSchedules: Array.isArray(rawPayload.sharedSchedules) ? rawPayload.sharedSchedules : [],
      personalSchedules: Array.isArray(rawPayload.personalSchedules) ? rawPayload.personalSchedules : [],
      accumulatedSchedules: Array.isArray(rawPayload.accumulatedSchedules) ? rawPayload.accumulatedSchedules : [],
      memberSummaries: Array.isArray(rawPayload.memberSummaries) ? rawPayload.memberSummaries : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeEquipmentSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    const equipmentSummary =
      rawPayload.equipmentSummary && typeof rawPayload.equipmentSummary === "object"
        ? rawPayload.equipmentSummary
        : {};

    return {
      type: EQUIPMENT_SUMMARY_TYPE,
      selectedDate: String(rawPayload.selectedDate || "").trim(),
      equipmentSummary: {
        equipmentItems: Array.isArray(equipmentSummary.equipmentItems) ? equipmentSummary.equipmentItems : [],
        sharedEquipmentCount: Number(equipmentSummary.sharedEquipmentCount || 0),
        assignedEquipmentCount: Number(equipmentSummary.assignedEquipmentCount || 0),
        assignedMemberCount: Number(equipmentSummary.assignedMemberCount || 0),
        activeMemberCount: Number(equipmentSummary.activeMemberCount || 0),
        activeTvuCount: Number(equipmentSummary.activeTvuCount || 0),
        activeTrsCount: Number(equipmentSummary.activeTrsCount || 0),
      },
      memberEquipmentSummaries: Array.isArray(rawPayload.memberEquipmentSummaries)
        ? rawPayload.memberEquipmentSummaries
        : [],
      activeTvuList: Array.isArray(rawPayload.activeTvuList) ? rawPayload.activeTvuList : [],
      activeTrsList: Array.isArray(rawPayload.activeTrsList) ? rawPayload.activeTrsList : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeStorageSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    return {
      type: STORAGE_SUMMARY_TYPE,
      selectedDate: String(rawPayload.selectedDate || "").trim(),
      selectedSection: normalizeStorageSection(rawPayload.selectedSection || currentStorageSection),
      documentCount: Number(rawPayload.documentCount || 0),
      fileCount: Number(rawPayload.fileCount || 0),
      galleryCount: Number(rawPayload.galleryCount || 0),
      videoCount: Number(rawPayload.videoCount || 0),
      carnetCount: Number(rawPayload.carnetCount || 0),
      recentItems: Array.isArray(rawPayload.recentItems) ? rawPayload.recentItems : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeMediaSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    return {
      type: MEDIA_SUMMARY_TYPE,
      selectedSection: normalizeMediaSection(rawPayload.selectedSection || currentMediaSection),
      selectedDate: String(rawPayload.selectedDate || "").trim(),
      broadcastCount: Number(rawPayload.broadcastCount || 0),
      newsCount: Number(rawPayload.newsCount || 0),
      broadcastItems: Array.isArray(rawPayload.broadcastItems) ? rawPayload.broadcastItems : [],
      latestNewsItems: Array.isArray(rawPayload.latestNewsItems) ? rawPayload.latestNewsItems : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeOpsSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    return {
      type: OPS_SUMMARY_TYPE,
      selectedSection: normalizeOpsSection(rawPayload.selectedSection || currentOpsSection),
      memoCount: Number(rawPayload.memoCount || 0),
      officialLinkCount: Number(rawPayload.officialLinkCount || 0),
      statusCount: Number(rawPayload.statusCount || 0),
      memoItems: Array.isArray(rawPayload.memoItems) ? rawPayload.memoItems : [],
      officialLinks: Array.isArray(rawPayload.officialLinks) ? rawPayload.officialLinks : [],
      statusItems: Array.isArray(rawPayload.statusItems) ? rawPayload.statusItems : [],
      latestItems: Array.isArray(rawPayload.latestItems) ? rawPayload.latestItems : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeSquadSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    return {
      type: SQUAD_SUMMARY_TYPE,
      selectedSection: normalizeSquadSection(rawPayload.selectedSection || currentSquadSection),
      groupCount: Number(rawPayload.groupCount || 0),
      teamCount: Number(rawPayload.teamCount || 0),
      playerCount: Number(rawPayload.playerCount || 0),
      latestItems: Array.isArray(rawPayload.latestItems) ? rawPayload.latestItems : [],
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function normalizeMatchMapSummaryPayload(rawPayload = {}) {
    if (!rawPayload || typeof rawPayload !== "object") {
      return null;
    }

    const currentStadium =
      rawPayload.currentStadium && typeof rawPayload.currentStadium === "object"
        ? rawPayload.currentStadium
        : {};

    return {
      type: MATCH_MAP_SUMMARY_TYPE,
      selectedSection: normalizeMatchMapSection(rawPayload.selectedSection || currentMatchMapSection),
      matchCount: Number(rawPayload.matchCount || 0),
      todayMatchCount: Number(rawPayload.todayMatchCount || 0),
      stadiumCount: Number(rawPayload.stadiumCount || 0),
      mapPlaceCount: Number(rawPayload.mapPlaceCount || 0),
      regionPlaceCount: Number(rawPayload.regionPlaceCount || 0),
      lodgingPlaceCount: Number(rawPayload.lodgingPlaceCount || 0),
      latestItems: Array.isArray(rawPayload.latestItems) ? rawPayload.latestItems : [],
      currentStadium: {
        key: String(currentStadium.key || "").trim(),
        title: String(currentStadium.title || "").trim(),
        city: String(currentStadium.city || "").trim(),
        imagePath: String(currentStadium.imagePath || "").trim(),
        imageAlt: String(currentStadium.imageAlt || "").trim(),
      },
      updatedAt: String(rawPayload.updatedAt || "").trim(),
    };
  }

  function syncSummary({ force = false } = {}) {
    if (summarySyncTimerId) {
      window.clearTimeout(summarySyncTimerId);
      summarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyScheduleSummary !== "function") {
      return;
    }

    const payload = normalizeSummaryPayload(window.getWC26LegacyScheduleSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedDate: payload.selectedDate,
      sharedSchedules: payload.sharedSchedules,
      personalSchedules: payload.personalSchedules,
      accumulatedSchedules: payload.accumulatedSchedules,
      memberSummaries: payload.memberSummaries,
    });

    if (!force && signature === lastSummarySignature) {
      return;
    }

    lastSummarySignature = signature;
    postToParent(payload);
  }

  function syncEquipmentSummary({ force = false } = {}) {
    if (equipmentSummarySyncTimerId) {
      window.clearTimeout(equipmentSummarySyncTimerId);
      equipmentSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyEquipmentSummary !== "function") {
      return;
    }

    const payload = normalizeEquipmentSummaryPayload(window.getWC26LegacyEquipmentSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedDate: payload.selectedDate,
      equipmentSummary: payload.equipmentSummary,
      memberEquipmentSummaries: payload.memberEquipmentSummaries,
      activeTvuList: payload.activeTvuList,
      activeTrsList: payload.activeTrsList,
    });

    if (!force && signature === lastEquipmentSummarySignature) {
      return;
    }

    lastEquipmentSummarySignature = signature;
    postToParent(payload);
  }

  function syncStorageSummary({ force = false } = {}) {
    if (storageSummarySyncTimerId) {
      window.clearTimeout(storageSummarySyncTimerId);
      storageSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyStorageSummary !== "function") {
      return;
    }

    const payload = normalizeStorageSummaryPayload(window.getWC26LegacyStorageSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedDate: payload.selectedDate,
      selectedSection: payload.selectedSection,
      documentCount: payload.documentCount,
      fileCount: payload.fileCount,
      galleryCount: payload.galleryCount,
      videoCount: payload.videoCount,
      carnetCount: payload.carnetCount,
      recentItems: payload.recentItems,
    });

    if (!force && signature === lastStorageSummarySignature) {
      return;
    }

    lastStorageSummarySignature = signature;
    postToParent(payload);
  }

  function syncMediaSummary({ force = false } = {}) {
    if (mediaSummarySyncTimerId) {
      window.clearTimeout(mediaSummarySyncTimerId);
      mediaSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyMediaSummary !== "function") {
      return;
    }

    const payload = normalizeMediaSummaryPayload(window.getWC26LegacyMediaSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedSection: payload.selectedSection,
      selectedDate: payload.selectedDate,
      broadcastCount: payload.broadcastCount,
      newsCount: payload.newsCount,
      broadcastItems: payload.broadcastItems,
      latestNewsItems: payload.latestNewsItems,
    });

    if (!force && signature === lastMediaSummarySignature) {
      return;
    }

    lastMediaSummarySignature = signature;
    postToParent(payload);
  }

  function syncOpsSummary({ force = false } = {}) {
    if (opsSummarySyncTimerId) {
      window.clearTimeout(opsSummarySyncTimerId);
      opsSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyOpsSummary !== "function") {
      return;
    }

    const payload = normalizeOpsSummaryPayload(window.getWC26LegacyOpsSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedSection: payload.selectedSection,
      memoCount: payload.memoCount,
      officialLinkCount: payload.officialLinkCount,
      statusCount: payload.statusCount,
      memoItems: payload.memoItems,
      officialLinks: payload.officialLinks,
      statusItems: payload.statusItems,
      latestItems: payload.latestItems,
    });

    if (!force && signature === lastOpsSummarySignature) {
      return;
    }

    lastOpsSummarySignature = signature;
    postToParent(payload);
  }

  function syncSquadSummary({ force = false } = {}) {
    if (squadSummarySyncTimerId) {
      window.clearTimeout(squadSummarySyncTimerId);
      squadSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacySquadSummary !== "function") {
      return;
    }

    const payload = normalizeSquadSummaryPayload(window.getWC26LegacySquadSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedSection: payload.selectedSection,
      groupCount: payload.groupCount,
      teamCount: payload.teamCount,
      playerCount: payload.playerCount,
      latestItems: payload.latestItems,
    });

    if (!force && signature === lastSquadSummarySignature) {
      return;
    }

    lastSquadSummarySignature = signature;
    postToParent(payload);
  }

  function syncMatchMapSummary({ force = false } = {}) {
    if (matchMapSummarySyncTimerId) {
      window.clearTimeout(matchMapSummarySyncTimerId);
      matchMapSummarySyncTimerId = null;
    }

    if (typeof window.getWC26LegacyMatchMapSummary !== "function") {
      return;
    }

    const payload = normalizeMatchMapSummaryPayload(window.getWC26LegacyMatchMapSummary());
    if (!payload) {
      return;
    }

    const signature = JSON.stringify({
      selectedSection: payload.selectedSection,
      matchCount: payload.matchCount,
      todayMatchCount: payload.todayMatchCount,
      stadiumCount: payload.stadiumCount,
      mapPlaceCount: payload.mapPlaceCount,
      regionPlaceCount: payload.regionPlaceCount,
      lodgingPlaceCount: payload.lodgingPlaceCount,
      latestItems: payload.latestItems,
      currentStadium: payload.currentStadium,
    });

    if (!force && signature === lastMatchMapSummarySignature) {
      return;
    }

    lastMatchMapSummarySignature = signature;
    postToParent(payload);
  }

  function queueSummarySync(options = {}) {
    if (summarySyncTimerId) {
      window.clearTimeout(summarySyncTimerId);
    }

    summarySyncTimerId = window.setTimeout(() => {
      syncSummary(options);
    }, 120);
  }

  function queueEquipmentSummarySync(options = {}) {
    if (equipmentSummarySyncTimerId) {
      window.clearTimeout(equipmentSummarySyncTimerId);
    }

    equipmentSummarySyncTimerId = window.setTimeout(() => {
      syncEquipmentSummary(options);
    }, 120);
  }

  function queueStorageSummarySync(options = {}) {
    if (storageSummarySyncTimerId) {
      window.clearTimeout(storageSummarySyncTimerId);
    }

    storageSummarySyncTimerId = window.setTimeout(() => {
      syncStorageSummary(options);
    }, 120);
  }

  function queueMediaSummarySync(options = {}) {
    if (mediaSummarySyncTimerId) {
      window.clearTimeout(mediaSummarySyncTimerId);
    }

    mediaSummarySyncTimerId = window.setTimeout(() => {
      syncMediaSummary(options);
    }, 120);
  }

  function queueOpsSummarySync(options = {}) {
    if (opsSummarySyncTimerId) {
      window.clearTimeout(opsSummarySyncTimerId);
    }

    opsSummarySyncTimerId = window.setTimeout(() => {
      syncOpsSummary(options);
    }, 120);
  }

  function queueSquadSummarySync(options = {}) {
    if (squadSummarySyncTimerId) {
      window.clearTimeout(squadSummarySyncTimerId);
    }

    squadSummarySyncTimerId = window.setTimeout(() => {
      syncSquadSummary(options);
    }, 120);
  }

  function queueMatchMapSummarySync(options = {}) {
    if (matchMapSummarySyncTimerId) {
      window.clearTimeout(matchMapSummarySyncTimerId);
    }

    matchMapSummarySyncTimerId = window.setTimeout(() => {
      syncMatchMapSummary(options);
    }, 120);
  }

  function forceAllBridgeSummaries() {
    if (SUMMARY_BRIDGE_ONLY) {
      queueSummarySync({ force: true });
      return;
    }
    queueSummarySync({ force: true });
    queueEquipmentSummarySync({ force: true });
    queueStorageSummarySync({ force: true });
    queueMediaSummarySync({ force: true });
    queueOpsSummarySync({ force: true });
    queueSquadSummarySync({ force: true });
    queueMatchMapSummarySync({ force: true });
  }

  function queueInitialBridgeSummaryBursts() {
    [0, 240, 800, 1500].forEach((delay) => {
      window.setTimeout(() => {
        forceAllBridgeSummaries();
      }, delay);
    });
  }

  function navigate(section = "all") {
    const normalized = normalizeSection(section);

    ensureTimelineView();
    activateFirstTimelineItem();
    document.body.dataset.wc26LegacySection = normalized;

    window.setTimeout(() => {
      if (normalized === "accumulated") {
        document.querySelector(".personal-timeline-summary-section")?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }

      if (normalized === "export") {
        document.querySelector(".timeline-export-btn")?.click();
        document.body.dataset.wc26LegacySection = "all";
      }

      queueSummarySync({ force: true });
      if (!SUMMARY_BRIDGE_ONLY) {
        queueEquipmentSummarySync({ force: true });
      }
      postToParent({
        type: READY_TYPE,
        section: normalized === "export" ? "all" : normalized,
      });
    }, 80);
  }

  function navigateEquipment(section = "equipment-summary", member = "") {
    const normalized = normalizeEquipmentSection(section);
    const memberName = String(member || "").trim();
    const resolvedMember =
      memberName ||
      (Array.isArray(window.EQUIPMENT_SHARED_USERS) && window.EQUIPMENT_SHARED_USERS.length
        ? String(window.EQUIPMENT_SHARED_USERS[0] || "").trim()
        : "");

    document.body.dataset.wc26LegacyEquipmentSection = normalized;

    const detailCol = document.getElementById("detailCol");
    const equipmentMenu = document.getElementById("equipmentMenu");
    const shouldOpenEquipment =
      Boolean(detailCol?.classList.contains("hidden")) || !equipmentMenu?.classList.contains("active");

    if (shouldOpenEquipment && typeof window.toggleEquipment === "function") {
      window.toggleEquipment();
    }

    window.setTimeout(() => {
      const sharedButton = document.getElementById("equipmentSharedTab");
      const personalButton = Array.from(document.querySelectorAll("#equipmentUserCol .item")).find(
        (item) => String(item.textContent || "").trim() === resolvedMember,
      );

      fetchBridgeSharedStateKeys([
        "worldcup-guide-equipment-editor-v1",
        "worldcup-guide-equipment-carnet-v1",
        "worldcup-guide-timeline-assignments-v2",
        "worldcup-guide-personal-timeline-details-v1",
      ]).finally(() => {
        if (normalized === "carnet" && typeof window.showEquipmentCarnet === "function") {
          const carnetButton = document.getElementById("equipmentCarnetTab");
          window.showEquipmentCarnet(carnetButton || undefined);
        } else if (normalized === "personal-summary" && typeof window.showEquipmentPersonal === "function") {
          window.showEquipmentPersonal(resolvedMember, personalButton || undefined);
        } else if (typeof window.showEquipmentShared === "function") {
          window.showEquipmentShared(sharedButton || undefined);
        }

        queueEquipmentSummarySync({ force: true });
        postToParent({
          type: EQUIPMENT_READY_TYPE,
          section: normalized,
          member: normalized === "personal-summary" ? resolvedMember : "",
        });
      });
    }, 80);
  }

  function navigateStorage(section = "document-storage") {
    const normalized = normalizeStorageSection(section);
    currentStorageSection = normalized;

    document.body.dataset.wc26LegacyStorageSection = normalized;

    if (normalized === "gallery") {
      window.setTimeout(() => {
        openTimelineGalleryStorageView();
        queueStorageSummarySync({ force: true });
        postToParent({
          type: STORAGE_READY_TYPE,
          section: normalized,
        });
      }, 80);
      return;
    }

    const detailCol = document.getElementById("detailCol");
    const equipmentMenu = document.getElementById("equipmentMenu");
    const shouldOpenEquipment =
      Boolean(detailCol?.classList.contains("hidden")) || !equipmentMenu?.classList.contains("active");

    if (shouldOpenEquipment && typeof window.toggleEquipment === "function") {
      window.toggleEquipment();
    }

    window.setTimeout(() => {
      const carnetButton = document.getElementById("equipmentCarnetTab");
      const fileStorageButton = document.getElementById("equipmentFileStorageTab");

      if ((normalized === "file-storage" || normalized === "video") && typeof window.showEquipmentFileStorage === "function") {
        window.showEquipmentFileStorage(fileStorageButton || undefined);
      } else if (typeof window.showEquipmentCarnet === "function") {
        window.showEquipmentCarnet(carnetButton || undefined);
      }

      queueStorageSummarySync({ force: true });
      postToParent({
        type: STORAGE_READY_TYPE,
        section: normalized,
      });
    }, 80);
  }

  function navigateMedia(section = "broadcast-schedule", options = {}) {
    const normalized = normalizeMediaSection(section);
    currentMediaSection = normalized;
    document.body.dataset.wc26LegacyMediaSection = normalized;

    window.setTimeout(() => {
      if (normalized === "worldcup-news") {
        const nextYear = String(options.year || currentNewsYear || (Array.isArray(NEWS_YEAR_ORDER) ? NEWS_YEAR_ORDER[0] : "2026") || "2026").trim() || "2026";
        const nextBroadcaster =
          String(options.broadcaster || currentNewsBroadcaster || (Array.isArray(NEWS_BROADCASTERS) ? NEWS_BROADCASTERS[0] : "KBS") || "KBS").trim() || "KBS";

        if (typeof window.openWorldcupNewsBridge === "function") {
          window.openWorldcupNewsBridge(nextYear, nextBroadcaster);
        } else if (typeof window.openNewsDetail === "function") {
          window.openNewsDetail(nextYear, nextBroadcaster);
        } else if (typeof window.toggleMain === "function") {
          window.toggleMain();
        }
      } else if (typeof window.toggleNewsProgramming === "function") {
        window.toggleNewsProgramming();
      }

      queueMediaSummarySync({ force: true });
      postToParent({
        type: MEDIA_READY_TYPE,
        section: normalized,
      });
    }, 80);
  }

  function navigateOps(section = "operation-memo") {
    const normalized = normalizeOpsSection(section);
    currentOpsSection = normalized;
    document.body.dataset.wc26LegacyOpsSection = normalized;

    window.setTimeout(() => {
      if (normalized === "official-links") {
        const nextYear = String(currentNewsYear || (Array.isArray(NEWS_YEAR_ORDER) ? NEWS_YEAR_ORDER[0] : "2026") || "2026").trim() || "2026";
        const nextBroadcaster =
          String(currentNewsBroadcaster || (Array.isArray(NEWS_BROADCASTERS) ? NEWS_BROADCASTERS[0] : "KBS") || "KBS").trim() || "KBS";

        if (typeof window.openNewsDetail === "function") {
          window.openNewsDetail(nextYear, nextBroadcaster);
        } else if (typeof window.toggleMain === "function") {
          window.toggleMain();
        }
      } else if (typeof window.toggleNewsProgramming === "function") {
        window.toggleNewsProgramming();
        if (normalized === "operation-status" && typeof window.updateHeaderReportBoard === "function") {
          window.updateHeaderReportBoard();
        }
      }

      queueOpsSummarySync({ force: true });
      postToParent({
        type: OPS_READY_TYPE,
        section: normalized,
      });
    }, 80);
  }

  function navigateSquad(section = "squad") {
    const normalized = normalizeSquadSection(section);
    currentSquadSection = normalized;
    document.body.dataset.wc26LegacySquadSection = normalized;

    const defaultSquadKey =
      (typeof currentSquadKey !== "undefined" && String(currentSquadKey || "").trim()) || "korea";

    if (typeof window.toggleGroupASquads === "function") {
      window.toggleGroupASquads();
    }

    window.setTimeout(() => {
      if (typeof window.showGroupASquad === "function") {
        const squadMenuItem =
          Array.from(document.querySelectorAll("#groupASquadCol .item")).find((item) =>
            String(item.getAttribute("onclick") || "").includes(defaultSquadKey),
          ) || undefined;
        window.showGroupASquad(defaultSquadKey, squadMenuItem);
      }

      queueSquadSummarySync({ force: true });
      postToParent({
        type: SQUAD_READY_TYPE,
        section: normalized,
      });
    }, 80);
  }

  function navigateMatchMap(section = "match-schedule") {
    const normalized = normalizeMatchMapSection(section);
    currentMatchMapSection = normalized;
    document.body.dataset.wc26LegacyMatchSection = normalized;

    window.setTimeout(() => {
      if (normalized === "map") {
        if (typeof window.toggleMapPanel === "function") {
          window.toggleMapPanel();
        }
      } else if (normalized === "stadiums") {
        if (typeof window.toggleMexicoStadium === "function") {
          window.toggleMexicoStadium();
        }
      } else if (typeof window.toggleBracket === "function") {
        window.toggleBracket();
        if (typeof window.showBracketStage === "function") {
          window.showBracketStage(normalized === "bracket" ? "round32" : "group");
        }
      }

      queueMatchMapSummarySync({ force: true });
      postToParent({
        type: MATCH_MAP_READY_TYPE,
        section: normalized,
      });
    }, 80);
  }

  function bootBridge() {
    if (bridgeBooted) {
      return true;
    }

    if (typeof window.renderTimelineSchedule !== "function") {
      return false;
    }

    bridgeBooted = true;
    document.body.classList.add("wc26-legacy-schedule-bridge");
    if (SUMMARY_BRIDGE_ONLY) {
      navigate("all");
      queueInitialBridgeSummaryBursts();
      window.addEventListener(SUMMARY_DIRTY_EVENT, () => {
        queueSummarySync();
      });
      return true;
    }

    if (typeof window.loadSchedules === "function") {
      Promise.resolve(
        window.loadSchedules({
          dateKey:
            typeof window.getTodayTimelineKey === "function"
              ? window.getTodayTimelineKey()
              : "",
          preloadDays: 1,
        }),
      )
        .catch(() => {})
        .finally(() => {
          queueInitialBridgeSummaryBursts();
        });
    } else {
      queueInitialBridgeSummaryBursts();
    }

    window.addEventListener(SUMMARY_DIRTY_EVENT, () => {
      queueSummarySync();
      queueEquipmentSummarySync();
    });

    window.addEventListener(EQUIPMENT_SUMMARY_DIRTY_EVENT, () => {
      queueEquipmentSummarySync();
    });

    window.addEventListener(STORAGE_SUMMARY_DIRTY_EVENT, () => {
      queueStorageSummarySync();
    });

    window.addEventListener(MEDIA_SUMMARY_DIRTY_EVENT, () => {
      queueMediaSummarySync();
    });

    window.addEventListener(OPS_SUMMARY_DIRTY_EVENT, () => {
      queueOpsSummarySync();
    });

    window.addEventListener(SQUAD_SUMMARY_DIRTY_EVENT, () => {
      queueSquadSummarySync();
    });

    window.addEventListener(MATCH_MAP_SUMMARY_DIRTY_EVENT, () => {
      queueMatchMapSummarySync();
    });

    return true;
  }

  function bootWithRetry(attempt = 0) {
    if (bootBridge()) {
      return;
    }

    if (attempt < 60) {
      window.setTimeout(() => bootWithRetry(attempt + 1), 250);
    }
  }

  window.addEventListener("message", (event) => {
    if (event?.data?.type === NAVIGATE_TYPE) {
      navigate(event.data.section);
      return;
    }

    if (event?.data?.type === EQUIPMENT_NAVIGATE_TYPE) {
      navigateEquipment(event.data.section, event.data.member);
      return;
    }

    if (event?.data?.type === STORAGE_NAVIGATE_TYPE) {
      navigateStorage(event.data.section);
      return;
    }

    if (event?.data?.type === MEDIA_NAVIGATE_TYPE) {
      navigateMedia(event.data.section, event.data);
      return;
    }

    if (event?.data?.type === OPS_NAVIGATE_TYPE) {
      navigateOps(event.data.section);
      return;
    }

    if (event?.data?.type === SQUAD_NAVIGATE_TYPE) {
      navigateSquad(event.data.section);
      return;
    }

    if (event?.data?.type === MATCH_MAP_NAVIGATE_TYPE) {
      navigateMatchMap(event.data.section);
    }
  });

  window.addEventListener("beforeunload", () => {
    if (summarySyncTimerId) {
      window.clearTimeout(summarySyncTimerId);
    }
    if (equipmentSummarySyncTimerId) {
      window.clearTimeout(equipmentSummarySyncTimerId);
    }
    if (storageSummarySyncTimerId) {
      window.clearTimeout(storageSummarySyncTimerId);
    }
    if (mediaSummarySyncTimerId) {
      window.clearTimeout(mediaSummarySyncTimerId);
    }
    if (opsSummarySyncTimerId) {
      window.clearTimeout(opsSummarySyncTimerId);
    }
    if (squadSummarySyncTimerId) {
      window.clearTimeout(squadSummarySyncTimerId);
    }
    if (matchMapSummarySyncTimerId) {
      window.clearTimeout(matchMapSummarySyncTimerId);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        bootWithRetry();
        queueInitialBridgeSummaryBursts();
      },
      { once: true },
    );
  } else {
    bootWithRetry();
    queueInitialBridgeSummaryBursts();
  }

  window.addEventListener(
    "load",
    () => {
      bootWithRetry();
      queueInitialBridgeSummaryBursts();
    },
    { once: true },
  );
})();
