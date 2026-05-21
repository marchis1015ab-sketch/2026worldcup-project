const rounds = [
  { key: "round_of_32", label: "Round of 32", short_label: "32강", match_count: 16 },
  { key: "round_of_16", label: "Round of 16", short_label: "16강", match_count: 8 },
  { key: "quarter_final", label: "Quarter Final", short_label: "8강", match_count: 4 },
  { key: "semi_final", label: "Semi Final", short_label: "4강", match_count: 2 },
  { key: "final", label: "Final", short_label: "결승", match_count: 1 }
];

const matchStatus = {
  TBD: "tbd",
  UPCOMING: "upcoming",
  LIVE: "live",
  HALF_TIME: "half_time",
  FINISHED: "finished",
  PENALTY: "penalty",
  CANCELLED: "cancelled"
};

const app = document.querySelector("#app");
const mobileQuery = window.matchMedia("(max-width: 920px)");

const state = {
  activeView: mobileQuery.matches ? "round" : "bracket",
  selectedMatchId: null,
  drawerOpen: false,
  focusedRoundKey: rounds[0].key,
  selectedTeamId: "",
  hasUserSelectedView: false,
  pendingRoundScroll: false
};

const teams = [
  { team_id: "kor", name: "Korea Republic", short_name: "Korea", flag: "🇰🇷", group: "Group A", seed_label: "A1" },
  { team_id: "jpn", name: "Japan", short_name: "Japan", flag: "🇯🇵", group: "Group C", seed_label: "C2" },
  { team_id: "ned", name: "Netherlands", short_name: "Netherlands", flag: "🇳🇱", group: "Group B", seed_label: "B1" },
  { team_id: "usa", name: "United States", short_name: "USA", flag: "🇺🇸", group: "Group D", seed_label: "D2" },
  { team_id: "bra", name: "Brazil", short_name: "Brazil", flag: "🇧🇷", group: "Group E", seed_label: "E1" },
  { team_id: "mex", name: "Mexico", short_name: "Mexico", flag: "🇲🇽", group: "Group F", seed_label: "F2" },
  { team_id: "mar", name: "Morocco", short_name: "Morocco", flag: "🇲🇦", group: "Group G", seed_label: "G1" },
  { team_id: "cro", name: "Croatia", short_name: "Croatia", flag: "🇭🇷", group: "Group H", seed_label: "H2" },
  { team_id: "fra", name: "France", short_name: "France", flag: "🇫🇷", group: "Group B", seed_label: "B2" },
  { team_id: "sen", name: "Senegal", short_name: "Senegal", flag: "🇸🇳", group: "Group A", seed_label: "A2" },
  { team_id: "por", name: "Portugal", short_name: "Portugal", flag: "🇵🇹", group: "Group D", seed_label: "D1" },
  { team_id: "uru", name: "Uruguay", short_name: "Uruguay", flag: "🇺🇾", group: "Group C", seed_label: "C1" },
  { team_id: "arg", name: "Argentina", short_name: "Argentina", flag: "🇦🇷", group: "Group E", seed_label: "E2" },
  { team_id: "den", name: "Denmark", short_name: "Denmark", flag: "🇩🇰", group: "Group F", seed_label: "F1" },
  { team_id: "eng", name: "England", short_name: "England", flag: "🏴", group: "Group G", seed_label: "G2" },
  { team_id: "srb", name: "Serbia", short_name: "Serbia", flag: "🇷🇸", group: "Group H", seed_label: "H1" },
  { team_id: "ger", name: "Germany", short_name: "Germany", flag: "🇩🇪", group: "Group I", seed_label: "I1" },
  { team_id: "irn", name: "Iran", short_name: "Iran", flag: "🇮🇷", group: "Group J", seed_label: "J2" },
  { team_id: "ecu", name: "Ecuador", short_name: "Ecuador", flag: "🇪🇨", group: "Group K", seed_label: "K1" },
  { team_id: "wal", name: "Wales", short_name: "Wales", flag: "🏴", group: "Group L", seed_label: "L2" },
  { team_id: "esp", name: "Spain", short_name: "Spain", flag: "🇪🇸", group: "Group M", seed_label: "M1" },
  { team_id: "tun", name: "Tunisia", short_name: "Tunisia", flag: "🇹🇳", group: "Group N", seed_label: "N2" },
  { team_id: "bel", name: "Belgium", short_name: "Belgium", flag: "🇧🇪", group: "Group O", seed_label: "O1" },
  { team_id: "can", name: "Canada", short_name: "Canada", flag: "🇨🇦", group: "Group P", seed_label: "P2" },
  { team_id: "ita", name: "Italy", short_name: "Italy", flag: "🇮🇹", group: "Group J", seed_label: "J1" },
  { team_id: "swe", name: "Sweden", short_name: "Sweden", flag: "🇸🇪", group: "Group I", seed_label: "I2" },
  { team_id: "sui", name: "Switzerland", short_name: "Switzerland", flag: "🇨🇭", group: "Group K", seed_label: "K2" },
  { team_id: "pol", name: "Poland", short_name: "Poland", flag: "🇵🇱", group: "Group L", seed_label: "L1" },
  { team_id: "col", name: "Colombia", short_name: "Colombia", flag: "🇨🇴", group: "Group M", seed_label: "M2" },
  { team_id: "gha", name: "Ghana", short_name: "Ghana", flag: "🇬🇭", group: "Group N", seed_label: "N1" },
  { team_id: "aus", name: "Australia", short_name: "Australia", flag: "🇦🇺", group: "Group O", seed_label: "O2" },
  { team_id: "tur", name: "Turkiye", short_name: "Turkiye", flag: "🇹🇷", group: "Group P", seed_label: "P1" }
];

const teamMap = new Map(teams.map((team) => [team.team_id, team]));
const roundOrder = new Map(rounds.map((round, index) => [round.key, index]));

function offsetDate(dayOffset, hour, minute = 0) {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString();
}

function createMatch({
  match_id,
  round,
  block = null,
  home_team_id = null,
  away_team_id = null,
  home_slot_label = null,
  away_slot_label = null,
  home_score = null,
  away_score = null,
  home_penalty_score = null,
  away_penalty_score = null,
  winner_team_id = null,
  status = matchStatus.TBD,
  minute = null,
  kickoff_time = null,
  venue_name = "New Suit Arena",
  previous_match_ids = [],
  next_match_id = null
}) {
  const roundMeta = rounds.find((item) => item.key === round);
  return {
    match_id,
    round,
    round_label: roundMeta.label,
    block,
    home_team_id,
    away_team_id,
    home_slot_label,
    away_slot_label,
    home_score,
    away_score,
    home_penalty_score,
    away_penalty_score,
    winner_team_id,
    status,
    minute,
    kickoff_time,
    venue_id: `venue_${match_id.toLowerCase()}`,
    venue_name,
    previous_match_ids,
    next_match_id,
    detail_url: `/matches/${match_id}`,
    stats_url: `/matches/${match_id}/stats`,
    lineup_url: `/matches/${match_id}/lineup`,
    highlight_url: `/matches/${match_id}/highlights`
  };
}

const matches = [
  createMatch({
    match_id: "M01",
    round: "round_of_32",
    block: "A",
    home_team_id: "kor",
    away_team_id: "jpn",
    home_score: 2,
    away_score: 1,
    winner_team_id: "kor",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-3, 20),
    venue_name: "Seoul Velocity Dome",
    next_match_id: "M17"
  }),
  createMatch({
    match_id: "M02",
    round: "round_of_32",
    block: "A",
    home_team_id: "ned",
    away_team_id: "usa",
    home_score: 1,
    away_score: 0,
    winner_team_id: "ned",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-3, 23),
    venue_name: "Busan Port Stadium",
    next_match_id: "M17"
  }),
  createMatch({
    match_id: "M03",
    round: "round_of_32",
    block: "A",
    home_team_id: "bra",
    away_team_id: "mex",
    home_score: 3,
    away_score: 1,
    winner_team_id: "bra",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-2, 18),
    venue_name: "Incheon Prime Field",
    next_match_id: "M18"
  }),
  createMatch({
    match_id: "M04",
    round: "round_of_32",
    block: "A",
    home_team_id: "mar",
    away_team_id: "cro",
    home_score: 1,
    away_score: 1,
    home_penalty_score: 5,
    away_penalty_score: 4,
    winner_team_id: "mar",
    status: matchStatus.PENALTY,
    kickoff_time: offsetDate(-2, 21),
    venue_name: "Daegu Crown Bowl",
    next_match_id: "M18"
  }),
  createMatch({
    match_id: "M05",
    round: "round_of_32",
    block: "B",
    home_team_id: "fra",
    away_team_id: "sen",
    home_score: 2,
    away_score: 0,
    winner_team_id: "fra",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-2, 22),
    venue_name: "Gwangju Edge Park",
    next_match_id: "M19"
  }),
  createMatch({
    match_id: "M06",
    round: "round_of_32",
    block: "B",
    home_team_id: "por",
    away_team_id: "uru",
    home_score: 1,
    away_score: 2,
    winner_team_id: "uru",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-2, 23),
    venue_name: "Daejeon Halo Ground",
    next_match_id: "M19"
  }),
  createMatch({
    match_id: "M07",
    round: "round_of_32",
    block: "B",
    home_team_id: "arg",
    away_team_id: "den",
    home_score: 1,
    away_score: 1,
    status: matchStatus.LIVE,
    minute: 67,
    kickoff_time: offsetDate(0, 19),
    venue_name: "Jeonju Signature Stadium",
    next_match_id: "M20"
  }),
  createMatch({
    match_id: "M08",
    round: "round_of_32",
    block: "B",
    home_team_id: "eng",
    away_team_id: "srb",
    status: matchStatus.UPCOMING,
    kickoff_time: offsetDate(0, 22),
    venue_name: "Suwon Arc Arena",
    next_match_id: "M20"
  }),
  createMatch({
    match_id: "M09",
    round: "round_of_32",
    block: "C",
    home_team_id: "ger",
    away_team_id: "irn",
    home_score: 2,
    away_score: 0,
    winner_team_id: "ger",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 19),
    venue_name: "Jeju Horizon Field",
    next_match_id: "M21"
  }),
  createMatch({
    match_id: "M10",
    round: "round_of_32",
    block: "C",
    home_team_id: "ecu",
    away_team_id: "wal",
    home_score: 0,
    away_score: 1,
    winner_team_id: "wal",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 22),
    venue_name: "Pohang Steel Park",
    next_match_id: "M21"
  }),
  createMatch({
    match_id: "M11",
    round: "round_of_32",
    block: "C",
    home_team_id: "esp",
    away_team_id: "tun",
    home_score: 4,
    away_score: 2,
    winner_team_id: "esp",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 23),
    venue_name: "Ulsan Velocity Stadium",
    next_match_id: "M22"
  }),
  createMatch({
    match_id: "M12",
    round: "round_of_32",
    block: "C",
    home_team_id: "bel",
    away_team_id: "can",
    home_score: 2,
    away_score: 3,
    winner_team_id: "can",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 20),
    venue_name: "Gangneung Crest Arena",
    next_match_id: "M22"
  }),
  createMatch({
    match_id: "M13",
    round: "round_of_32",
    block: "D",
    home_team_id: "ita",
    away_team_id: "swe",
    home_score: 1,
    away_score: 0,
    winner_team_id: "ita",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 18),
    venue_name: "Cheonan Metro Dome",
    next_match_id: "M23"
  }),
  createMatch({
    match_id: "M14",
    round: "round_of_32",
    block: "D",
    home_team_id: "sui",
    away_team_id: "pol",
    home_score: 0,
    away_score: 2,
    winner_team_id: "pol",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 21),
    venue_name: "Changwon Prime Stadium",
    next_match_id: "M23"
  }),
  createMatch({
    match_id: "M15",
    round: "round_of_32",
    block: "D",
    home_team_id: "col",
    away_team_id: "gha",
    home_score: 2,
    away_score: 1,
    winner_team_id: "col",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 20),
    venue_name: "Anyang Nova Field",
    next_match_id: "M24"
  }),
  createMatch({
    match_id: "M16",
    round: "round_of_32",
    block: "D",
    home_team_id: "aus",
    away_team_id: "tur",
    home_score: 0,
    away_score: 2,
    winner_team_id: "tur",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(-1, 23),
    venue_name: "Goyang Titan Stadium",
    next_match_id: "M24"
  }),
  createMatch({
    match_id: "M17",
    round: "round_of_16",
    block: "A",
    home_team_id: "kor",
    away_team_id: "ned",
    home_score: 1,
    away_score: 0,
    winner_team_id: "kor",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(1, 19),
    venue_name: "Seoul Velocity Dome",
    previous_match_ids: ["M01", "M02"],
    next_match_id: "M25"
  }),
  createMatch({
    match_id: "M18",
    round: "round_of_16",
    block: "A",
    home_team_id: "bra",
    away_team_id: "mar",
    home_score: 2,
    away_score: 2,
    home_penalty_score: 4,
    away_penalty_score: 3,
    winner_team_id: "bra",
    status: matchStatus.PENALTY,
    kickoff_time: offsetDate(1, 23),
    venue_name: "Daegu Crown Bowl",
    previous_match_ids: ["M03", "M04"],
    next_match_id: "M25"
  }),
  createMatch({
    match_id: "M19",
    round: "round_of_16",
    block: "B",
    home_team_id: "fra",
    away_team_id: "uru",
    home_score: 3,
    away_score: 2,
    winner_team_id: "fra",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(2, 18),
    venue_name: "Gwangju Edge Park",
    previous_match_ids: ["M05", "M06"],
    next_match_id: "M26"
  }),
  createMatch({
    match_id: "M20",
    round: "round_of_16",
    block: "B",
    home_slot_label: "Winner of M07",
    away_slot_label: "Winner of M08",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(2, 22),
    venue_name: "Suwon Arc Arena",
    previous_match_ids: ["M07", "M08"],
    next_match_id: "M26"
  }),
  createMatch({
    match_id: "M21",
    round: "round_of_16",
    block: "C",
    home_team_id: "ger",
    away_team_id: "wal",
    home_score: 1,
    away_score: 0,
    winner_team_id: "ger",
    status: matchStatus.FINISHED,
    kickoff_time: offsetDate(2, 19),
    venue_name: "Jeju Horizon Field",
    previous_match_ids: ["M09", "M10"],
    next_match_id: "M27"
  }),
  createMatch({
    match_id: "M22",
    round: "round_of_16",
    block: "C",
    home_team_id: "esp",
    away_team_id: "can",
    home_score: 2,
    away_score: 1,
    status: matchStatus.LIVE,
    minute: 54,
    kickoff_time: offsetDate(0, 21),
    venue_name: "Ulsan Velocity Stadium",
    previous_match_ids: ["M11", "M12"],
    next_match_id: "M27"
  }),
  createMatch({
    match_id: "M23",
    round: "round_of_16",
    block: "D",
    home_team_id: "ita",
    away_team_id: "pol",
    status: matchStatus.UPCOMING,
    kickoff_time: offsetDate(1, 18),
    venue_name: "Cheonan Metro Dome",
    previous_match_ids: ["M13", "M14"],
    next_match_id: "M28"
  }),
  createMatch({
    match_id: "M24",
    round: "round_of_16",
    block: "D",
    home_team_id: "col",
    away_team_id: "tur",
    status: matchStatus.UPCOMING,
    kickoff_time: offsetDate(1, 21),
    venue_name: "Goyang Titan Stadium",
    previous_match_ids: ["M15", "M16"],
    next_match_id: "M28"
  }),
  createMatch({
    match_id: "M25",
    round: "quarter_final",
    block: "A",
    home_team_id: "kor",
    away_team_id: "bra",
    status: matchStatus.UPCOMING,
    kickoff_time: offsetDate(3, 20),
    venue_name: "New Suit Capital Arena",
    previous_match_ids: ["M17", "M18"],
    next_match_id: "M29"
  }),
  createMatch({
    match_id: "M26",
    round: "quarter_final",
    block: "B",
    home_team_id: "fra",
    away_slot_label: "Winner of M20",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(3, 23),
    venue_name: "New Suit Capital Arena",
    previous_match_ids: ["M19", "M20"],
    next_match_id: "M29"
  }),
  createMatch({
    match_id: "M27",
    round: "quarter_final",
    block: "C",
    home_team_id: "ger",
    away_slot_label: "Winner of M22",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(4, 20),
    venue_name: "New Suit Capital Arena",
    previous_match_ids: ["M21", "M22"],
    next_match_id: "M30"
  }),
  createMatch({
    match_id: "M28",
    round: "quarter_final",
    block: "D",
    home_slot_label: "Winner of M23",
    away_slot_label: "Winner of M24",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(4, 23),
    venue_name: "New Suit Capital Arena",
    previous_match_ids: ["M23", "M24"],
    next_match_id: "M30"
  }),
  createMatch({
    match_id: "M29",
    round: "semi_final",
    home_slot_label: "Winner of M25",
    away_slot_label: "Winner of M26",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(6, 20),
    venue_name: "New Suit Crown Stadium",
    previous_match_ids: ["M25", "M26"],
    next_match_id: "M31"
  }),
  createMatch({
    match_id: "M30",
    round: "semi_final",
    home_slot_label: "Winner of M27",
    away_slot_label: "Winner of M28",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(7, 20),
    venue_name: "New Suit Crown Stadium",
    previous_match_ids: ["M27", "M28"],
    next_match_id: "M31"
  }),
  createMatch({
    match_id: "M31",
    round: "final",
    home_slot_label: "Winner of Semi Final 1",
    away_slot_label: "Winner of Semi Final 2",
    status: matchStatus.TBD,
    kickoff_time: offsetDate(10, 21),
    venue_name: "New Suit Final Arena",
    previous_match_ids: ["M29", "M30"]
  })
];

const matchMap = new Map(matches.map((match) => [match.match_id, match]));

const blockConfig = {
  A: { label: "Block A", matchIds: { round32: ["M01", "M02", "M03", "M04"], round16: ["M17", "M18"], quarter: "M25" }, mirrored: false },
  B: { label: "Block B", matchIds: { round32: ["M05", "M06", "M07", "M08"], round16: ["M19", "M20"], quarter: "M26" }, mirrored: true },
  C: { label: "Block C", matchIds: { round32: ["M09", "M10", "M11", "M12"], round16: ["M21", "M22"], quarter: "M27" }, mirrored: false },
  D: { label: "Block D", matchIds: { round32: ["M13", "M14", "M15", "M16"], round16: ["M23", "M24"], quarter: "M28" }, mirrored: true }
};

function formatDateTime(isoString) {
  if (!isoString) return "TBD";
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

function formatDateKey(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStatusLabel(match) {
  switch (match.status) {
    case matchStatus.LIVE:
      return `LIVE ${match.minute ? `${match.minute}'` : ""}`.trim();
    case matchStatus.HALF_TIME:
      return "HT";
    case matchStatus.FINISHED:
      return "FT";
    case matchStatus.PENALTY:
      return "FT / PEN";
    case matchStatus.UPCOMING:
      return "UPCOMING";
    case matchStatus.CANCELLED:
      return "CANCELLED";
    default:
      return "TBD";
  }
}

function getStatusClass(match) {
  return match.status === matchStatus.LIVE ? "live" : "";
}

function getTeam(match, side) {
  const teamId = match[`${side}_team_id`];
  return teamId ? teamMap.get(teamId) : null;
}

function getParticipantLabel(match, side) {
  const team = getTeam(match, side);
  if (team) return `${team.flag} ${team.short_name}`;
  return match[`${side}_slot_label`] || "TBD";
}

function getWinnerLoserState(match, teamId) {
  if (!teamId || !match.winner_team_id) return "";
  return match.winner_team_id === teamId ? "winner" : "loser";
}

function collectAncestors(matchId, visited = new Set()) {
  const match = matchMap.get(matchId);
  if (!match) return visited;
  match.previous_match_ids.forEach((previousId) => {
    if (!visited.has(previousId)) {
      visited.add(previousId);
      collectAncestors(previousId, visited);
    }
  });
  return visited;
}

function collectDescendants(matchId, visited = new Set()) {
  const match = matchMap.get(matchId);
  if (!match || !match.next_match_id) return visited;
  if (!visited.has(match.next_match_id)) {
    visited.add(match.next_match_id);
    collectDescendants(match.next_match_id, visited);
  }
  return visited;
}

function getTeamJourney(teamId) {
  if (!teamId) return [];
  const startingMatch = [...matches]
    .filter((match) => match.home_team_id === teamId || match.away_team_id === teamId)
    .sort((a, b) => roundOrder.get(a.round) - roundOrder.get(b.round))[0];
  if (!startingMatch) return [];
  const journey = [startingMatch.match_id];
  let current = startingMatch;
  while (current.next_match_id) {
    journey.push(current.next_match_id);
    current = matchMap.get(current.next_match_id);
  }
  return journey;
}

function computeHighlightState() {
  const highlightedMatches = new Set();
  const highlightedConnectors = new Set();

  function addEdge(fromId, toId) {
    if (fromId && toId) {
      highlightedConnectors.add(`${fromId}->${toId}`);
    }
  }

  if (state.selectedTeamId) {
    const teamPath = getTeamJourney(state.selectedTeamId);
    teamPath.forEach((matchId, index) => {
      highlightedMatches.add(matchId);
      if (index < teamPath.length - 1) {
        addEdge(teamPath[index], teamPath[index + 1]);
      }
    });
  }

  if (state.selectedMatchId) {
    const selectedMatch = matchMap.get(state.selectedMatchId);
    highlightedMatches.add(state.selectedMatchId);

    const ancestors = [...collectAncestors(state.selectedMatchId)];
    const descendants = [...collectDescendants(state.selectedMatchId)];

    ancestors.forEach((matchId) => {
      highlightedMatches.add(matchId);
      const match = matchMap.get(matchId);
      addEdge(matchId, match?.next_match_id);
    });

    descendants.forEach((matchId) => {
      highlightedMatches.add(matchId);
      const match = matchMap.get(matchId);
      match?.previous_match_ids.forEach((previousId) => addEdge(previousId, matchId));
    });

    selectedMatch?.previous_match_ids.forEach((previousId) => addEdge(previousId, selectedMatch.match_id));
    addEdge(selectedMatch?.match_id, selectedMatch?.next_match_id);

    [selectedMatch?.home_team_id, selectedMatch?.away_team_id].filter(Boolean).forEach((teamId) => {
      const teamPath = getTeamJourney(teamId);
      teamPath.forEach((matchId, index) => {
        highlightedMatches.add(matchId);
        if (index < teamPath.length - 1) {
          addEdge(teamPath[index], teamPath[index + 1]);
        }
      });
    });
  }

  return { highlightedMatches, highlightedConnectors };
}

function isTodayMatch(match) {
  return formatDateKey(match.kickoff_time) === formatDateKey(new Date().toISOString());
}

function getViewMatches() {
  switch (state.activeView) {
    case "today":
      return matches.filter(isTodayMatch);
    case "live":
      return matches.filter((match) => match.status === matchStatus.LIVE);
    default:
      return matches;
  }
}

function getRoundGroups(filteredMatches) {
  return rounds.map((round) => ({
    round,
    matches: filteredMatches
      .filter((match) => match.round === round.key)
      .sort((a, b) => a.match_id.localeCompare(b.match_id, undefined, { numeric: true }))
  }));
}

function getVisibleMatchesForCountry(matchIds) {
  if (!state.selectedTeamId || state.activeView !== "country") return matchIds;
  const journey = new Set(getTeamJourney(state.selectedTeamId));
  return matchIds.filter((matchId) => journey.has(matchId));
}

function renderStatusPill(match) {
  const pulse = match.status === matchStatus.LIVE ? `<span class="pulse-dot" aria-hidden="true"></span>` : "";
  return `<span class="status-pill ${getStatusClass(match)}">${pulse}${getStatusLabel(match)}</span>`;
}

function renderTeamRow(match, side) {
  const team = getTeam(match, side);
  const score = match[`${side}_score`];
  const penaltyScore = match[`${side}_penalty_score`];
  const stateClass = team ? getWinnerLoserState(match, team.team_id) : "";
  const label = team ? team.short_name : match[`${side}_slot_label`] || "TBD";
  const flag = team ? `<span class="team-flag">${team.flag}</span>` : "";
  const winnerClass = stateClass === "winner" ? "is-winner" : "";
  const loserClass = stateClass === "loser" ? "is-loser" : "";
  const scoreMarkup =
    score === null && penaltyScore === null
      ? `<span class="scoreline-value">-</span>`
      : `
        <span class="scoreline-value ${winnerClass} ${loserClass}">${score ?? "-"}</span>
        ${penaltyScore !== null ? `<span class="penalty-note ${winnerClass} ${loserClass}">(${penaltyScore})</span>` : ""}
      `;

  return `
    <div class="team-row">
      <div class="team-name-wrap">
        ${flag}
        <span class="team-name ${winnerClass} ${loserClass}">${label}</span>
      </div>
      <span class="score-wrap">${scoreMarkup}</span>
    </div>
  `;
}

function renderCardActions(match) {
  const links = [
    { label: "Match Detail", url: match.detail_url },
    { label: "Stats", url: match.stats_url },
    { label: "Lineup", url: match.lineup_url },
    { label: "Highlights", url: match.highlight_url }
  ].filter((item) => item.url);

  return `
    <div class="card-actions">
      ${links
        .map(
          (item) =>
            `<a class="action-link" href="${item.url}" data-stop-propagation="true">${item.label}</a>`
        )
        .join("")}
    </div>
  `;
}

function renderMatchCard(matchId, options = {}) {
  const match = typeof matchId === "string" ? matchMap.get(matchId) : matchId;
  const { highlightedMatches } = computeHighlightState();
  const isSelected = state.selectedMatchId === match.match_id;
  const isPath = highlightedMatches.has(match.match_id);
  const shouldDim =
    state.activeView === "country" &&
    state.selectedTeamId &&
    !getTeamJourney(state.selectedTeamId).includes(match.match_id);
  const finalCardClass = options.finalHero ? "final-card" : "";

  return `
    <button
      type="button"
      class="match-card ${isSelected ? "is-selected" : ""} ${isPath ? "is-path" : ""} ${shouldDim ? "is-dimmed" : ""} ${finalCardClass}"
      data-match-id="${match.match_id}"
      aria-label="${match.match_id} ${match.round_label} ${getParticipantLabel(match, "home")} vs ${getParticipantLabel(match, "away")}"
      aria-selected="${String(isSelected)}"
    >
      <div class="card-topline">
        <div>
          <div class="match-id">[${match.match_id}]</div>
          <div class="round-label">${options.finalHero ? "Final Hero Card" : match.round_label}</div>
        </div>
        ${renderStatusPill(match)}
      </div>
      <div class="card-meta">
        <span>${formatDateTime(match.kickoff_time)}</span>
        <span>${match.venue_name || "Venue TBD"}</span>
      </div>
      <div class="team-list">
        ${renderTeamRow(match, "home")}
        <div class="slot-vs">vs</div>
        ${renderTeamRow(match, "away")}
      </div>
      ${
        options.finalHero
          ? `<div class="meta-note">Winner becomes Champion</div>`
          : ""
      }
      ${renderCardActions(match)}
    </button>
  `;
}

function renderPairGroup(matchIds, targetId, mirrored = false) {
  const { highlightedConnectors } = computeHighlightState();
  const isHighlighted = matchIds.some((matchId) => highlightedConnectors.has(`${matchId}->${targetId}`));
  return `
    <div class="pair-group ${isHighlighted ? "is-highlighted" : ""}">
      ${matchIds.map((matchId) => renderMatchCard(matchId)).join("")}
    </div>
  `;
}

function renderRound16Pair(matchIds, targetId) {
  const { highlightedConnectors } = computeHighlightState();
  const isHighlighted = matchIds.some((matchId) => highlightedConnectors.has(`${matchId}->${targetId}`));
  return `
    <div class="pair-stack ${isHighlighted ? "is-highlighted" : ""}">
      ${matchIds.map((matchId) => renderMatchCard(matchId)).join("")}
    </div>
  `;
}

function renderBlock(blockKey) {
  const block = blockConfig[blockKey];
  const round32Ids = block.matchIds.round32;
  const round16Ids = block.matchIds.round16;
  const quarterId = block.matchIds.quarter;
  const mirroredClass = block.mirrored ? "is-mirrored" : "";

  const round32Pairs = [
    { ids: [round32Ids[0], round32Ids[1]], target: round16Ids[0] },
    { ids: [round32Ids[2], round32Ids[3]], target: round16Ids[1] }
  ];

  const firstColumn = `
    <div class="column">
      <div class="column-label" data-round-anchor="round_of_32">32강</div>
      ${round32Pairs.map((pair) => renderPairGroup(pair.ids, pair.target, block.mirrored)).join("")}
    </div>
  `;

  const secondColumn = `
    <div class="column">
      <div class="column-label" data-round-anchor="round_of_16">16강</div>
      ${renderRound16Pair(round16Ids, quarterId)}
    </div>
  `;

  const thirdColumn = `
    <div class="column">
      <div class="column-label" data-round-anchor="quarter_final">8강</div>
      ${renderMatchCard(quarterId)}
    </div>
  `;

  const columns = block.mirrored
    ? [thirdColumn, secondColumn, firstColumn].join("")
    : [firstColumn, secondColumn, thirdColumn].join("");

  return `
    <section class="block-panel grid-area-block-${blockKey.toLowerCase()}">
      <div class="block-header">
        <div>
          <div class="block-title">${block.label}</div>
          <div class="block-subtitle">32강 4경기 → 16강 2경기 → 8강 1경기</div>
        </div>
        <div class="meta-note">Toward Semi Final</div>
      </div>
      <div class="block-columns ${mirroredClass}">
        ${columns}
      </div>
    </section>
  `;
}

function renderCenterStage() {
  const { highlightedConnectors } = computeHighlightState();
  const semiTopHighlight = highlightedConnectors.has("M25->M29") || highlightedConnectors.has("M26->M29");
  const semiBottomHighlight = highlightedConnectors.has("M27->M30") || highlightedConnectors.has("M28->M30");
  const finalHighlight = highlightedConnectors.has("M29->M31") || highlightedConnectors.has("M30->M31");

  return `
    <section class="center-panel grid-area-center">
      <div class="center-match-stack">
        <div class="semi-feeder-group ${semiTopHighlight ? "is-highlighted" : ""}">
          <div class="feeder-chip">M25</div>
          ${renderMatchCard("M29")}
          <div class="feeder-chip">M26</div>
        </div>
      </div>
      <div class="center-match-stack">
        <div class="final-feeder-group ${finalHighlight ? "is-highlighted" : ""}">
          <div class="feeder-chip">Semi Final 1</div>
          ${renderMatchCard("M31", { finalHero: true })}
          <div class="feeder-chip">Semi Final 2</div>
        </div>
      </div>
      <div class="center-match-stack">
        <div class="semi-feeder-group ${semiBottomHighlight ? "is-highlighted" : ""}">
          <div class="feeder-chip">M27</div>
          ${renderMatchCard("M30")}
          <div class="feeder-chip">M28</div>
        </div>
      </div>
    </section>
  `;
}

function renderRoundList(filteredMatches) {
  const groups = getRoundGroups(filteredMatches);
  const hasMatches = groups.some((group) => group.matches.length > 0);

  if (!hasMatches) {
    return `
      <div class="empty-state">
        <strong>표시할 경기가 없습니다.</strong>
        <div class="meta-note">필터를 바꾸거나 다른 보기로 전환해 주세요.</div>
      </div>
    `;
  }

  return `
    <div class="round-list">
      ${groups
        .map((group) => {
          if (!group.matches.length) return "";
          return `
            <section class="list-section" data-round-anchor="${group.round.key}">
              <div class="list-header">
                <div>
                  <div class="section-title">${group.round.label}</div>
                  <div class="section-caption">${group.round.match_count} Matches</div>
                </div>
                <div class="meta-note">${group.round.short_label}</div>
              </div>
              <div class="list-grid">
                ${group.matches.map((match) => renderMatchCard(match)).join("")}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderHeader() {
  return `
    <section class="panel header-panel">
      <div class="header-topline">
        <div class="eyebrow">Tournament</div>
        <div class="stage-flow">
          ${rounds.map((round) => `<span class="flow-pill">${round.short_label}</span>`).join("")}
        </div>
      </div>
      <div class="round-chip-grid">
        ${rounds
          .map(
            (round) => `
              <button
                type="button"
                class="round-chip ${state.focusedRoundKey === round.key ? "is-active" : ""}"
                data-round-chip="${round.key}"
              >
                <div class="chip-title">${round.label}</div>
                <div class="chip-count">${round.match_count}</div>
                <div class="meta-note">${round.short_label}</div>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderViewIcon(viewKey) {
  const icons = {
    bracket: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 6h4v4H5zM15 6h4v4h-4zM10 8h4M12 8v8M5 14h4v4H5zM15 14h4v4h-4zM9 16h6" />
      </svg>
    `,
    round: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 7h12M6 12h12M6 17h8" />
        <circle cx="4" cy="7" r="1.25" />
        <circle cx="4" cy="12" r="1.25" />
        <circle cx="4" cy="17" r="1.25" />
      </svg>
    `,
    country: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="7" />
        <path d="M5 12h14M12 5a12 12 0 0 1 0 14M12 5a12 12 0 0 0 0 14" />
      </svg>
    `,
    today: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="6" width="16" height="14" rx="3" />
        <path d="M8 4v4M16 4v4M4 10h16M9 14h3" />
      </svg>
    `,
    live: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="1.8" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" />
      </svg>
    `
  };

  return icons[viewKey] ?? icons.bracket;
}

function renderViewController() {
  const views = [
    { key: "bracket", label: "전체 브라켓" },
    { key: "round", label: "라운드별" },
    { key: "country", label: "국가별" },
    { key: "today", label: "오늘 경기" },
    { key: "live", label: "LIVE" }
  ];

  const subtitleByView = {
    bracket: "32강부터 결승까지 한눈에 보는 프리미엄 브라켓",
    round: "라운드별 리스트로 빠르게 탐색",
    country: "선택한 국가의 예상 우승 경로 강조",
    today: "오늘 킥오프되는 경기만 보기",
    live: "현재 진행 중인 경기만 강조"
  };

  return `
    <section class="panel controller-panel">
      <div class="controller-row">
        <div class="view-controls">
          ${views
            .map(
              (view) => `
                <button
                  type="button"
                  class="view-button ${state.activeView === view.key ? "is-active" : ""}"
                  data-view="${view.key}"
                >
                  <span class="view-button__content">
                    <span class="view-button__icon">${renderViewIcon(view.key)}</span>
                    <span class="view-button__label">${view.label}</span>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
        <div class="meta-note">${subtitleByView[state.activeView]}</div>
      </div>
      ${
        state.activeView === "country"
          ? `
            <div class="team-filter-row">
              <label class="meta-note" for="team-select">국가 선택</label>
              <select id="team-select" class="team-select" data-team-select="true">
                <option value="">국가를 선택하세요</option>
                ${teams
                  .slice()
                  .sort((a, b) => a.short_name.localeCompare(b.short_name))
                  .map(
                    (team) =>
                      `<option value="${team.team_id}" ${state.selectedTeamId === team.team_id ? "selected" : ""}>${team.flag} ${team.short_name}</option>`
                  )
                  .join("")}
              </select>
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderContent() {
  const filteredMatches = getViewMatches();
  const shouldShowBracket = state.activeView === "bracket" || (state.activeView === "country" && !mobileQuery.matches);

  if (shouldShowBracket) {
    return `
      <section class="panel content-panel">
        <div class="board-shell">
          <div class="board-grid">
            ${renderBlock("A")}
            ${renderCenterStage()}
            ${renderBlock("B")}
            ${renderBlock("C")}
            ${renderBlock("D")}
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="panel content-panel">
      ${renderRoundList(filteredMatches)}
    </section>
  `;
}

function renderDrawer() {
  const selectedMatch = state.selectedMatchId ? matchMap.get(state.selectedMatchId) : null;
  if (!selectedMatch) {
    return `<div class="drawer-overlay" data-drawer-overlay="true"></div>`;
  }

  return `
    <div class="drawer-overlay ${state.drawerOpen ? "is-open" : ""}" data-drawer-overlay="true">
      <aside class="drawer-panel" aria-label="Match Detail Drawer">
        <div class="drawer-header">
          <div class="drawer-title-group">
            <div class="eyebrow">Match ${selectedMatch.match_id}</div>
            <div class="drawer-title">${selectedMatch.round_label}</div>
            <div class="drawer-status">${getStatusLabel(selectedMatch)}</div>
          </div>
          <button type="button" class="drawer-close" data-close-drawer="true">닫기</button>
        </div>

        <div class="drawer-scoreline">
          <div class="team-row">
            <div class="team-name-wrap">
              <span class="team-name ${getWinnerLoserState(selectedMatch, selectedMatch.home_team_id) === "winner" ? "is-winner" : ""}">
                ${getParticipantLabel(selectedMatch, "home")}
              </span>
            </div>
          </div>
          <div class="score-wrap">
            <span class="scoreline-value">${selectedMatch.home_score ?? "-"}</span>
            <span class="slot-vs">-</span>
            <span class="scoreline-value">${selectedMatch.away_score ?? "-"}</span>
          </div>
          <div class="team-row" style="justify-content:flex-end">
            <div class="team-name-wrap">
              <span class="team-name ${getWinnerLoserState(selectedMatch, selectedMatch.away_team_id) === "winner" ? "is-winner" : ""}">
                ${getParticipantLabel(selectedMatch, "away")}
              </span>
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <div class="detail-row">
            <div class="detail-label">Venue</div>
            <div class="detail-value">${selectedMatch.venue_name || "TBD"}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Kickoff</div>
            <div class="detail-value">${formatDateTime(selectedMatch.kickoff_time)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Home Team</div>
            <div class="detail-value">${getParticipantLabel(selectedMatch, "home")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Away Team</div>
            <div class="detail-value">${getParticipantLabel(selectedMatch, "away")}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Penalty</div>
            <div class="detail-value">${
              selectedMatch.home_penalty_score !== null || selectedMatch.away_penalty_score !== null
                ? `${selectedMatch.home_penalty_score ?? "-"} - ${selectedMatch.away_penalty_score ?? "-"}`
                : "N/A"
            }</div>
          </div>
        </div>

        <div class="drawer-links">
          <a class="action-link" href="${selectedMatch.detail_url}">Match Center</a>
          ${selectedMatch.stats_url ? `<a class="action-link" href="${selectedMatch.stats_url}">Stats</a>` : ""}
          ${selectedMatch.lineup_url ? `<a class="action-link" href="${selectedMatch.lineup_url}">Lineup</a>` : ""}
          ${selectedMatch.highlight_url ? `<a class="action-link" href="${selectedMatch.highlight_url}">Highlights</a>` : ""}
        </div>
      </aside>
    </div>
  `;
}

function renderMobileButton() {
  if (!mobileQuery.matches || state.activeView === "bracket") return "";
  return `
    <div class="mobile-floating-cta">
      <button type="button" class="mobile-bracket-toggle" data-open-mobile-bracket="true">전체 브라켓 보기</button>
    </div>
  `;
}

function renderApp() {
  app.innerHTML = `
    <main class="page-shell">
      <div class="tournament-shell">
        ${renderHeader()}
        ${renderViewController()}
        ${renderContent()}
      </div>
    </main>
    ${renderDrawer()}
    ${renderMobileButton()}
  `;

  attachEvents();
  if (state.pendingRoundScroll) {
    scrollToFocusedRound();
    state.pendingRoundScroll = false;
  }
}

function scrollToFocusedRound() {
  const anchor = document.querySelector(`[data-round-anchor="${state.focusedRoundKey}"]`);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

function attachEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view;
      state.hasUserSelectedView = true;
      if (state.activeView !== "country") {
        state.selectedTeamId = "";
      }
      renderApp();
    });
  });

  document.querySelectorAll("[data-round-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.focusedRoundKey = button.dataset.roundChip;
      state.pendingRoundScroll = true;
      renderApp();
    });
  });

  document.querySelectorAll("[data-match-id]").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedMatchId = card.dataset.matchId;
      state.drawerOpen = true;
      renderApp();
    });
  });

  document.querySelectorAll("[data-stop-propagation='true']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  document.querySelector("[data-team-select='true']")?.addEventListener("change", (event) => {
    state.selectedTeamId = event.target.value;
    renderApp();
  });

  document.querySelector("[data-close-drawer='true']")?.addEventListener("click", () => {
    state.drawerOpen = false;
    renderApp();
  });

  document.querySelector("[data-drawer-overlay='true']")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      state.drawerOpen = false;
      renderApp();
    }
  });

  document.querySelector("[data-open-mobile-bracket='true']")?.addEventListener("click", () => {
    state.activeView = "bracket";
    state.hasUserSelectedView = true;
    renderApp();
  });
}

mobileQuery.addEventListener("change", (event) => {
  if (!state.hasUserSelectedView) {
    state.activeView = event.matches ? "round" : "bracket";
  }
  renderApp();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.drawerOpen) {
    state.drawerOpen = false;
    renderApp();
  }
});

renderApp();
