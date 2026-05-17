(function () {
  const shell = document.getElementById("match-tournament-shell");
  const root = document.getElementById("match-tournament-root");
  const frameShell = document.getElementById("match-bridge-frame-shell");
  const matchBridgeFrame = document.getElementById("match-bridge-frame");
  const knockoutToolbar = document.getElementById("match-knockout-stage-toolbar");
  const modeButtons = Array.from(document.querySelectorAll("[data-match-shell-mode]"));
  const knockoutButtons = Array.from(document.querySelectorAll("[data-match-knockout-stage]"));
  const bracketNavButtons = Array.from(
    document.querySelectorAll('.nav-subitem[data-target="match-schedule"][data-section="bracket"]'),
  );

  if (!shell || !root || !frameShell || !modeButtons.length || !knockoutButtons.length) {
    return;
  }

  const LOGO_PATH = "./images/fixed/wc26-fixed-assets/wc26-logo-2026-transparent.png";
  const TOURNAMENT_BRACKET_BUILD_ID = "tournament-bracket-route-diagnosis-20260517-01";
  const TOURNAMENT_CURRENT_STANDINGS_TEST_MODE = true;
  const GROUP_KEYS = "ABCDEFGHIJKL".split("");
  const rounds = [
    { key: "round32", label: "32강", description: "Round of 32", count: 16 },
    { key: "round16", label: "16강", description: "Round of 16", count: 8 },
    { key: "quarterfinal", label: "8강", description: "Quarter Final", count: 4 },
    { key: "semifinal", label: "4강", description: "Semi Final", count: 2 },
    { key: "thirdPlaceMatch", label: "3·4위전", description: "3rd Place Match", count: 1 },
    { key: "final", label: "결승", description: "Final", count: 1 },
  ];

  const teams = {
    arg: { name: "Argentina", flag: "🇦🇷" },
    bra: { name: "Brazil", flag: "🇧🇷" },
    can: { name: "Canada", flag: "🇨🇦" },
    col: { name: "Colombia", flag: "🇨🇴" },
    cro: { name: "Croatia", flag: "🇭🇷" },
    den: { name: "Denmark", flag: "🇩🇰" },
    eng: { name: "England", flag: "🏴" },
    esp: { name: "Spain", flag: "🇪🇸" },
    fra: { name: "France", flag: "🇫🇷" },
    ger: { name: "Germany", flag: "🇩🇪" },
    gha: { name: "Ghana", flag: "🇬🇭" },
    irn: { name: "Iran", flag: "🇮🇷" },
    ita: { name: "Italy", flag: "🇮🇹" },
    jpn: { name: "Japan", flag: "🇯🇵" },
    kor: { name: "Korea Republic", flag: "🇰🇷" },
    mar: { name: "Morocco", flag: "🇲🇦" },
    mex: { name: "Mexico", flag: "🇲🇽" },
    ned: { name: "Netherlands", flag: "🇳🇱" },
    pol: { name: "Poland", flag: "🇵🇱" },
    por: { name: "Portugal", flag: "🇵🇹" },
    rsa: { name: "South Africa", flag: "🇿🇦" },
    sen: { name: "Senegal", flag: "🇸🇳" },
    srb: { name: "Serbia", flag: "🇷🇸" },
    sui: { name: "Switzerland", flag: "🇨🇭" },
    tun: { name: "Tunisia", flag: "🇹🇳" },
    tur: { name: "Turkey", flag: "🇹🇷" },
    uru: { name: "Uruguay", flag: "🇺🇾" },
    usa: { name: "USA", flag: "🇺🇸" },
    wal: { name: "Wales", flag: "🏴" },
  };
  const TEAM_KO_NAME_MAP = {
    arg: "아르헨티나",
    bra: "브라질",
    can: "캐나다",
    col: "콜롬비아",
    cro: "크로아티아",
    den: "덴마크",
    eng: "잉글랜드",
    esp: "스페인",
    fra: "프랑스",
    ger: "독일",
    gha: "가나",
    irn: "이란",
    ita: "이탈리아",
    jpn: "일본",
    kor: "대한민국",
    mar: "모로코",
    mex: "멕시코",
    ned: "네덜란드",
    pol: "폴란드",
    por: "포르투갈",
    rsa: "남아공",
    sen: "세네갈",
    srb: "세르비아",
    sui: "스위스",
    tun: "튀니지",
    tur: "튀르키예",
    uru: "우루과이",
    usa: "미국",
    wal: "웨일스",
  };
  const TEAM_KO_NAME_BY_ENGLISH = {
    argentina: "아르헨티나",
    brazil: "브라질",
    canada: "캐나다",
    colombia: "콜롬비아",
    croatia: "크로아티아",
    denmark: "덴마크",
    england: "잉글랜드",
    spain: "스페인",
    france: "프랑스",
    germany: "독일",
    ghana: "가나",
    iran: "이란",
    italy: "이탈리아",
    japan: "일본",
    "korea republic": "대한민국",
    korea: "대한민국",
    morocco: "모로코",
    mexico: "멕시코",
    netherlands: "네덜란드",
    poland: "폴란드",
    portugal: "포르투갈",
    "south africa": "남아프리카공화국",
    senegal: "세네갈",
    serbia: "세르비아",
    switzerland: "스위스",
    tunisia: "튀니지",
    turkey: "튀르키예",
    uruguay: "우루과이",
    usa: "미국",
    "united states": "미국",
    wales: "웨일스",
    australia: "호주",
    "bosnia and herzegovina": "보스니아 헤르체고비나",
  };
  const TEAM_FLAG_CODE_BY_ENGLISH = {
    argentina: "ar",
    brazil: "br",
    canada: "ca",
    colombia: "co",
    croatia: "hr",
    denmark: "dk",
    england: "eng",
    spain: "es",
    france: "fr",
    germany: "de",
    ghana: "gh",
    iran: "ir",
    italy: "it",
    japan: "jp",
    "korea republic": "kr",
    korea: "kr",
    morocco: "ma",
    mexico: "mx",
    netherlands: "nl",
    poland: "pl",
    portugal: "pt",
    "south africa": "za",
    senegal: "sn",
    serbia: "rs",
    switzerland: "ch",
    tunisia: "tn",
    turkey: "tr",
    uruguay: "uy",
    usa: "us",
    "united states": "us",
    wales: "wal",
    australia: "au",
    "bosnia and herzegovina": "ba",
  };
  const TEAM_KO_NAME_LOOKUP = {
    south_africa: "남아공",
    "south africa": "남아공",
    za: "남아공",
    zaf: "남아공",
    bosnia_and_herzegovina: "보스니아 헤르체고비나",
    "bosnia and herzegovina": "보스니아 헤르체고비나",
    ba: "보스니아 헤르체고비나",
    bih: "보스니아 헤르체고비나",
    mexico: "멕시코",
    mx: "멕시코",
    mex: "멕시코",
    korea_republic: "대한민국",
    "korea republic": "대한민국",
    kr: "대한민국",
    kor: "대한민국",
    united_states: "미국",
    "united states": "미국",
    usa: "미국",
    us: "미국",
    canada: "캐나다",
    can: "캐나다",
    ca: "캐나다",
    japan: "일본",
    jpn: "일본",
    jp: "일본",
    brazil: "브라질",
    bra: "브라질",
    br: "브라질",
    argentina: "아르헨티나",
    arg: "아르헨티나",
    ar: "아르헨티나",
    france: "프랑스",
    fra: "프랑스",
    fr: "프랑스",
    germany: "독일",
    ger: "독일",
    de: "독일",
    england: "잉글랜드",
    eng: "잉글랜드",
    "gb-eng": "잉글랜드",
    spain: "스페인",
    esp: "스페인",
    es: "스페인",
    portugal: "포르투갈",
    por: "포르투갈",
    pt: "포르투갈",
  };

  const TOURNAMENT_KO_NAME_OVERRIDES = {
    south_africa: "남아공",
    za: "남아공",
    zaf: "남아공",
    bosnia_and_herzegovina: "보스니아 헤르체고비나",
    ba: "보스니아 헤르체고비나",
    bih: "보스니아 헤르체고비나",
    mexico: "멕시코",
    mx: "멕시코",
    mex: "멕시코",
    korea_republic: "대한민국",
    kr: "대한민국",
    kor: "대한민국",
    united_states: "미국",
    us: "미국",
    usa: "미국",
    canada: "캐나다",
    ca: "캐나다",
    can: "캐나다",
    japan: "일본",
    jp: "일본",
    jpn: "일본",
    brazil: "브라질",
    br: "브라질",
    bra: "브라질",
    argentina: "아르헨티나",
    ar: "아르헨티나",
    arg: "아르헨티나",
    france: "프랑스",
    fr: "프랑스",
    fra: "프랑스",
    germany: "독일",
    de: "독일",
    ger: "독일",
    england: "잉글랜드",
    eng: "잉글랜드",
    gb_eng: "잉글랜드",
    spain: "스페인",
    es: "스페인",
    esp: "스페인",
    portugal: "포르투갈",
    pt: "포르투갈",
    por: "포르투갈",
  };
  const TOURNAMENT_FLAG_CODE_OVERRIDES = {
    argentina: "ar",
    arg: "ar",
    ar: "ar",
    australia: "au",
    aus: "au",
    au: "au",
    bosnia_and_herzegovina: "ba",
    bih: "ba",
    ba: "ba",
    brazil: "br",
    bra: "br",
    br: "br",
    canada: "ca",
    can: "ca",
    ca: "ca",
    colombia: "co",
    col: "co",
    co: "co",
    croatia: "hr",
    cro: "hr",
    hr: "hr",
    denmark: "dk",
    den: "dk",
    dk: "dk",
    england: "eng",
    eng: "eng",
    gb_eng: "eng",
    france: "fr",
    fra: "fr",
    fr: "fr",
    germany: "de",
    ger: "de",
    de: "de",
    ghana: "gh",
    gha: "gh",
    gh: "gh",
    iran: "ir",
    irn: "ir",
    ir: "ir",
    italy: "it",
    ita: "it",
    it: "it",
    japan: "jp",
    jpn: "jp",
    jp: "jp",
    korea_republic: "kr",
    kor: "kr",
    kr: "kr",
    mexico: "mx",
    mex: "mx",
    mx: "mx",
    morocco: "ma",
    mar: "ma",
    ma: "ma",
    netherlands: "nl",
    ned: "nl",
    nl: "nl",
    poland: "pl",
    pol: "pl",
    pl: "pl",
    portugal: "pt",
    por: "pt",
    pt: "pt",
    senegal: "sn",
    sen: "sn",
    sn: "sn",
    serbia: "rs",
    srb: "rs",
    rs: "rs",
    south_africa: "za",
    rsa: "za",
    zaf: "za",
    za: "za",
    spain: "es",
    esp: "es",
    es: "es",
    switzerland: "ch",
    sui: "ch",
    ch: "ch",
    tunisia: "tn",
    tun: "tn",
    tn: "tn",
    turkey: "tr",
    tur: "tr",
    tr: "tr",
    united_states: "us",
    usa: "us",
    us: "us",
    uruguay: "uy",
    uru: "uy",
    uy: "uy",
    wales: "wal",
    wal: "wal",
  };
  const TOURNAMENT_SPECIAL_FLAG_URLS = {
    eng: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
    wal: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
  };
  const TOURNAMENT_TEAM_KO_NAME_MAP = {
    south_africa: "남아공",
    zaf: "남아공",
    za: "남아공",
    bosnia_and_herzegovina: "보스니아 헤르체고비나",
    bosnia_herzegovina: "보스니아 헤르체고비나",
    bih: "보스니아 헤르체고비나",
    ba: "보스니아 헤르체고비나",
    mexico: "멕시코",
    mex: "멕시코",
    mx: "멕시코",
    canada: "캐나다",
    can: "캐나다",
    ca: "캐나다",
    united_states: "미국",
    usa: "미국",
    us: "미국",
    panama: "파나마",
    pan: "파나마",
    jamaica: "자메이카",
    jam: "자메이카",
    costa_rica: "코스타리카",
    crc: "코스타리카",
    honduras: "온두라스",
    hon: "온두라스",
    argentina: "아르헨티나",
    arg: "아르헨티나",
    brazil: "브라질",
    bra: "브라질",
    uruguay: "우루과이",
    uru: "우루과이",
    colombia: "콜롬비아",
    col: "콜롬비아",
    ecuador: "에콰도르",
    ecu: "에콰도르",
    paraguay: "파라과이",
    par: "파라과이",
    chile: "칠레",
    chi: "칠레",
    peru: "페루",
    per: "페루",
    venezuela: "베네수엘라",
    ven: "베네수엘라",
    bolivia: "볼리비아",
    bol: "볼리비아",
    korea_republic: "대한민국",
    south_korea: "대한민국",
    kor: "대한민국",
    kr: "대한민국",
    japan: "일본",
    jpn: "일본",
    jp: "일본",
    iran: "이란",
    irn: "이란",
    australia: "호주",
    aus: "호주",
    saudi_arabia: "사우디아라비아",
    ksa: "사우디아라비아",
    qatar: "카타르",
    qat: "카타르",
    iraq: "이라크",
    irq: "이라크",
    uzbekistan: "우즈베키스탄",
    uzb: "우즈베키스탄",
    jordan: "요르단",
    jor: "요르단",
    united_arab_emirates: "아랍에미리트",
    uae: "아랍에미리트",
    england: "잉글랜드",
    eng: "잉글랜드",
    gb_eng: "잉글랜드",
    france: "프랑스",
    fra: "프랑스",
    fr: "프랑스",
    germany: "독일",
    ger: "독일",
    de: "독일",
    spain: "스페인",
    esp: "스페인",
    es: "스페인",
    portugal: "포르투갈",
    por: "포르투갈",
    pt: "포르투갈",
    italy: "이탈리아",
    ita: "이탈리아",
    it: "이탈리아",
    netherlands: "네덜란드",
    ned: "네덜란드",
    nl: "네덜란드",
    belgium: "벨기에",
    bel: "벨기에",
    croatia: "크로아티아",
    cro: "크로아티아",
    switzerland: "스위스",
    sui: "스위스",
    denmark: "덴마크",
    den: "덴마크",
    sweden: "스웨덴",
    swe: "스웨덴",
    norway: "노르웨이",
    nor: "노르웨이",
    poland: "폴란드",
    pol: "폴란드",
    austria: "오스트리아",
    aut: "오스트리아",
    serbia: "세르비아",
    srb: "세르비아",
    ukraine: "우크라이나",
    ukr: "우크라이나",
    turkiye: "튀르키예",
    turkey: "튀르키예",
    tur: "튀르키예",
    scotland: "스코틀랜드",
    sco: "스코틀랜드",
    wales: "웨일스",
    wal: "웨일스",
    czechia: "체코",
    czech_republic: "체코",
    cze: "체코",
    slovakia: "슬로바키아",
    svk: "슬로바키아",
    slovenia: "슬로베니아",
    svn: "슬로베니아",
    hungary: "헝가리",
    hun: "헝가리",
    romania: "루마니아",
    rou: "루마니아",
    greece: "그리스",
    gre: "그리스",
    republic_of_ireland: "아일랜드",
    ireland: "아일랜드",
    irl: "아일랜드",
    morocco: "모로코",
    mar: "모로코",
    senegal: "세네갈",
    sen: "세네갈",
    ghana: "가나",
    gha: "가나",
    cameroon: "카메룬",
    cmr: "카메룬",
    nigeria: "나이지리아",
    nga: "나이지리아",
    egypt: "이집트",
    egy: "이집트",
    tunisia: "튀니지",
    tun: "튀니지",
    algeria: "알제리",
    alg: "알제리",
    ivory_coast: "코트디부아르",
    cote_d_ivoire: "코트디부아르",
    civ: "코트디부아르",
    mali: "말리",
    mli: "말리",
    burkina_faso: "부르키나파소",
    bfa: "부르키나파소",
    new_zealand: "뉴질랜드",
    nzl: "뉴질랜드",
  };
  const tournamentUnmappedNameWarnings = new Set();

  const state = {
    initialized: false,
    renderedRound: "",
    waitingLegacyRefresh: false,
    currentView: "round",
  };

  console.log("[BUILD]", TOURNAMENT_BRACKET_BUILD_ID);

  const tournamentMatches = buildTournamentMatches();

  function buildTournamentMatches() {
    const round32 = [
      {
        matchNo: 73,
        round: "round32",
        dateLocal: "2026-06-28",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-06-29 04:00",
        city: "Los Angeles",
        venueName: "Los Angeles Stadium / SoFi Stadium",
        venueImage: "images/stadiums/los-angeles-stadium.jpg",
        homeSlotLabel: "A조 2위",
        awaySlotLabel: "B조 2위",
        status: "upcoming",
      },
      {
        matchNo: 74,
        round: "round32",
        dateLocal: "2026-06-29",
        kickoffLocal: "16:30",
        kickoffKorea: "2026-06-30 05:30",
        city: "Boston / Foxborough",
        venueName: "Boston Stadium / Gillette Stadium",
        venueImage: "images/stadiums/boston-stadium.jpg",
        homeSlotLabel: "E조 1위",
        awaySlotLabel: "3위 A/B/C/D/F",
        status: "upcoming",
      },
      {
        matchNo: 75,
        round: "round32",
        dateLocal: "2026-06-29",
        kickoffLocal: "19:00",
        kickoffKorea: "2026-06-30 10:00",
        city: "Monterrey / Guadalupe",
        venueName: "Monterrey Stadium / Estadio BBVA",
        venueImage: "images/stadiums/monterrey-stadium.jpg",
        homeSlotLabel: "F조 1위",
        awaySlotLabel: "C조 2위",
        status: "upcoming",
      },
      {
        matchNo: 76,
        round: "round32",
        dateLocal: "2026-06-29",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-06-30 02:00",
        city: "Houston",
        venueName: "Houston Stadium / NRG Stadium",
        venueImage: "images/stadiums/houston-stadium.jpg",
        homeSlotLabel: "C조 1위",
        awaySlotLabel: "F조 2위",
        status: "upcoming",
      },
      {
        matchNo: 77,
        round: "round32",
        dateLocal: "2026-06-30",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-01 06:00",
        city: "New York / New Jersey",
        venueName: "New York New Jersey Stadium / MetLife Stadium",
        venueImage: "images/stadiums/new-york-new-jersey-stadium.jpg",
        homeSlotLabel: "I조 1위",
        awaySlotLabel: "3위 C/D/F/G/H",
        status: "upcoming",
      },
      {
        matchNo: 78,
        round: "round32",
        dateLocal: "2026-06-30",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-01 02:00",
        city: "Dallas / Arlington",
        venueName: "Dallas Stadium / AT&T Stadium",
        venueImage: "images/stadiums/dallas-stadium.jpg",
        homeSlotLabel: "E조 2위",
        awaySlotLabel: "I조 2위",
        status: "upcoming",
      },
      {
        matchNo: 79,
        round: "round32",
        dateLocal: "2026-06-30",
        kickoffLocal: "19:00",
        kickoffKorea: "2026-07-01 10:00",
        city: "Mexico City",
        venueName: "Mexico City Stadium / Estadio Azteca",
        venueImage: "images/stadiums/mexico-city-stadium.jpg",
        homeSlotLabel: "A조 1위",
        awaySlotLabel: "3위 C/E/F/H/I",
        status: "upcoming",
      },
      {
        matchNo: 80,
        round: "round32",
        dateLocal: "2026-07-01",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-02 01:00",
        city: "Atlanta",
        venueName: "Atlanta Stadium / Mercedes-Benz Stadium",
        venueImage: "images/stadiums/atlanta-stadium.JPG",
        homeSlotLabel: "L조 1위",
        awaySlotLabel: "3위 E/H/I/J/K",
        status: "upcoming",
      },
      {
        matchNo: 81,
        round: "round32",
        dateLocal: "2026-07-01",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-02 09:00",
        city: "San Francisco Bay Area / Santa Clara",
        venueName: "San Francisco Bay Area Stadium / Levi's Stadium",
        venueImage: "images/stadiums/san-francisco-bay-area-stadium.jpg",
        homeSlotLabel: "D조 1위",
        awaySlotLabel: "3위 B/E/F/I/J",
        status: "upcoming",
      },
      {
        matchNo: 82,
        round: "round32",
        dateLocal: "2026-07-01",
        kickoffLocal: "13:00",
        kickoffKorea: "2026-07-02 05:00",
        city: "Seattle",
        venueName: "Seattle Stadium / Lumen Field",
        venueImage: "images/stadiums/seattle-stadium.jpg",
        homeSlotLabel: "G조 1위",
        awaySlotLabel: "3위 A/E/H/I/J",
        status: "upcoming",
      },
      {
        matchNo: 83,
        round: "round32",
        dateLocal: "2026-07-02",
        kickoffLocal: "19:00",
        kickoffKorea: "2026-07-03 08:00",
        city: "Toronto",
        venueName: "Toronto Stadium / BMO Field",
        venueImage: "images/stadiums/toronto-stadium.jpg",
        homeSlotLabel: "K조 2위",
        awaySlotLabel: "L조 2위",
        status: "upcoming",
      },
      {
        matchNo: 84,
        round: "round32",
        dateLocal: "2026-07-02",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-03 04:00",
        city: "Los Angeles",
        venueName: "Los Angeles Stadium / SoFi Stadium",
        venueImage: "images/stadiums/los-angeles-stadium.jpg",
        homeSlotLabel: "H조 1위",
        awaySlotLabel: "J조 2위",
        status: "upcoming",
      },
      {
        matchNo: 85,
        round: "round32",
        dateLocal: "2026-07-02",
        kickoffLocal: "20:00",
        kickoffKorea: "2026-07-03 12:00",
        city: "Vancouver",
        venueName: "Vancouver Stadium / BC Place",
        venueImage: "images/stadiums/bc-place-vancouver.jpg",
        homeSlotLabel: "B조 1위",
        awaySlotLabel: "3위 E/F/G/I/J",
        status: "upcoming",
      },
      {
        matchNo: 86,
        round: "round32",
        dateLocal: "2026-07-03",
        kickoffLocal: "18:00",
        kickoffKorea: "2026-07-04 07:00",
        city: "Miami",
        venueName: "Miami Stadium / Hard Rock Stadium",
        venueImage: "images/stadiums/miami-stadium.jpg",
        homeSlotLabel: "J조 1위",
        awaySlotLabel: "H조 2위",
        status: "upcoming",
      },
      {
        matchNo: 87,
        round: "round32",
        dateLocal: "2026-07-03",
        kickoffLocal: "20:30",
        kickoffKorea: "2026-07-04 10:30",
        city: "Kansas City",
        venueName: "Kansas City Stadium / Arrowhead Stadium",
        venueImage: "images/stadiums/kansas-city-stadium.jpg",
        homeSlotLabel: "K조 1위",
        awaySlotLabel: "3위 D/E/I/J/L",
        status: "upcoming",
      },
      {
        matchNo: 88,
        round: "round32",
        dateLocal: "2026-07-03",
        kickoffLocal: "13:00",
        kickoffKorea: "2026-07-04 03:00",
        city: "Dallas / Arlington",
        venueName: "Dallas Stadium / AT&T Stadium",
        venueImage: "images/stadiums/dallas-stadium.jpg",
        homeSlotLabel: "D조 2위",
        awaySlotLabel: "G조 2위",
        status: "upcoming",
      },
    ];

    const round16 = [
      {
        matchNo: 89,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-04",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-05 06:00",
        city: "Philadelphia",
        venueName: "Philadelphia Stadium / Lincoln Financial Field",
        homeSlotLabel: "Winner Match 74",
        awaySlotLabel: "Winner Match 77",
        status: "tbd",
        previousMatchIds: ["M74", "M77"],
        nextMatchId: "M97",
      },
      {
        matchNo: 90,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-04",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-05 02:00",
        city: "Houston",
        venueName: "Houston Stadium / NRG Stadium",
        homeSlotLabel: "Winner Match 73",
        awaySlotLabel: "Winner Match 75",
        status: "tbd",
        previousMatchIds: ["M73", "M75"],
        nextMatchId: "M97",
      },
      {
        matchNo: 91,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-05",
        kickoffLocal: "16:00",
        kickoffKorea: "2026-07-06 05:00",
        city: "New York / New Jersey",
        venueName: "New York New Jersey Stadium / MetLife Stadium",
        homeSlotLabel: "Winner Match 76",
        awaySlotLabel: "Winner Match 78",
        status: "tbd",
        previousMatchIds: ["M76", "M78"],
        nextMatchId: "M98",
      },
      {
        matchNo: 92,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-05",
        kickoffLocal: "18:00",
        kickoffKorea: "2026-07-06 09:00",
        city: "Mexico City",
        venueName: "Mexico City Stadium / Estadio Azteca",
        homeSlotLabel: "Winner Match 79",
        awaySlotLabel: "Winner Match 80",
        status: "tbd",
        previousMatchIds: ["M79", "M80"],
        nextMatchId: "M98",
      },
      {
        matchNo: 93,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-06",
        kickoffLocal: "14:00",
        kickoffKorea: "2026-07-07 04:00",
        city: "Dallas / Arlington",
        venueName: "Dallas Stadium / AT&T Stadium",
        homeSlotLabel: "Winner Match 83",
        awaySlotLabel: "Winner Match 84",
        status: "tbd",
        previousMatchIds: ["M83", "M84"],
        nextMatchId: "M99",
      },
      {
        matchNo: 94,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-06",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-07 09:00",
        city: "Seattle",
        venueName: "Seattle Stadium / Lumen Field",
        homeSlotLabel: "Winner Match 81",
        awaySlotLabel: "Winner Match 82",
        status: "tbd",
        previousMatchIds: ["M81", "M82"],
        nextMatchId: "M99",
      },
      {
        matchNo: 95,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-07",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-08 01:00",
        city: "Atlanta",
        venueName: "Atlanta Stadium / Mercedes-Benz Stadium",
        homeSlotLabel: "Winner Match 86",
        awaySlotLabel: "Winner Match 88",
        status: "tbd",
        previousMatchIds: ["M86", "M88"],
        nextMatchId: "M100",
      },
      {
        matchNo: 96,
        round: "round16",
        roundLabel: "Round of 16",
        dateLocal: "2026-07-07",
        kickoffLocal: "13:00",
        kickoffKorea: "2026-07-08 05:00",
        city: "Vancouver",
        venueName: "Vancouver Stadium / BC Place",
        homeSlotLabel: "Winner Match 85",
        awaySlotLabel: "Winner Match 87",
        status: "tbd",
        previousMatchIds: ["M85", "M87"],
        nextMatchId: "M100",
      },
    ];

    const quarterFinal = [
      {
        matchNo: 97,
        round: "quarterfinal",
        roundLabel: "Quarter Final",
        dateLocal: "2026-07-09",
        kickoffLocal: "16:00",
        kickoffKorea: "2026-07-10 05:00",
        city: "Boston / Foxborough",
        venueName: "Boston Stadium / Gillette Stadium",
        homeSlotLabel: "Winner Match 89",
        awaySlotLabel: "Winner Match 90",
        status: "tbd",
        previousMatchIds: ["M89", "M90"],
        nextMatchId: "M101",
      },
      {
        matchNo: 98,
        round: "quarterfinal",
        roundLabel: "Quarter Final",
        dateLocal: "2026-07-10",
        kickoffLocal: "12:00",
        kickoffKorea: "2026-07-11 04:00",
        city: "Los Angeles",
        venueName: "Los Angeles Stadium / SoFi Stadium",
        homeSlotLabel: "Winner Match 93",
        awaySlotLabel: "Winner Match 94",
        status: "tbd",
        previousMatchIds: ["M93", "M94"],
        nextMatchId: "M101",
      },
      {
        matchNo: 99,
        round: "quarterfinal",
        roundLabel: "Quarter Final",
        dateLocal: "2026-07-11",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-12 06:00",
        city: "Miami",
        venueName: "Miami Stadium / Hard Rock Stadium",
        homeSlotLabel: "Winner Match 91",
        awaySlotLabel: "Winner Match 92",
        status: "tbd",
        previousMatchIds: ["M91", "M92"],
        nextMatchId: "M102",
      },
      {
        matchNo: 100,
        round: "quarterfinal",
        roundLabel: "Quarter Final",
        dateLocal: "2026-07-11",
        kickoffLocal: "20:00",
        kickoffKorea: "2026-07-12 10:00",
        city: "Kansas City",
        venueName: "Kansas City Stadium / Arrowhead Stadium",
        homeSlotLabel: "Winner Match 95",
        awaySlotLabel: "Winner Match 96",
        status: "tbd",
        previousMatchIds: ["M95", "M96"],
        nextMatchId: "M102",
      },
    ];

    const semiFinal = [
      {
        matchNo: 101,
        round: "semifinal",
        roundLabel: "Semi Final",
        dateLocal: "2026-07-14",
        kickoffLocal: "14:00",
        kickoffKorea: "2026-07-15 04:00",
        city: "Dallas / Arlington",
        venueName: "Dallas Stadium / AT&T Stadium",
        homeSlotLabel: "Winner Match 97",
        awaySlotLabel: "Winner Match 98",
        status: "tbd",
        previousMatchIds: ["M97", "M98"],
        nextMatchId: "M104",
      },
      {
        matchNo: 102,
        round: "semifinal",
        roundLabel: "Semi Final",
        dateLocal: "2026-07-15",
        kickoffLocal: "15:00",
        kickoffKorea: "2026-07-16 04:00",
        city: "Atlanta",
        venueName: "Atlanta Stadium / Mercedes-Benz Stadium",
        homeSlotLabel: "Winner Match 99",
        awaySlotLabel: "Winner Match 100",
        status: "tbd",
        previousMatchIds: ["M99", "M100"],
        nextMatchId: "M104",
      },
    ];

    const thirdPlaceMatch = [
      {
        matchId: "M103",
        matchNo: 103,
        round: "thirdPlaceMatch",
        roundLabel: "3rd Place Match",
        dateLocal: "2026-07-18",
        kickoffLocal: "17:00",
        kickoffKorea: "2026-07-19 06:00",
        city: "Miami",
        venueName: "Miami Stadium / Hard Rock Stadium",
        homeSlotLabel: "Loser Match 101",
        awaySlotLabel: "Loser Match 102",
        status: "tbd",
        previousMatchIds: ["M101", "M102"],
        detailUrl: "/matches/103",
      },
    ];

    const final = [
      {
        matchId: "M104",
        matchNo: 104,
        round: "final",
        roundLabel: "Final",
        dateLocal: "2026-07-19",
        kickoffLocal: "15:00",
        kickoffKorea: "2026-07-20 04:00",
        city: "New York / New Jersey",
        venueName: "New York New Jersey Stadium / MetLife Stadium",
        homeSlotLabel: "Winner Match 101",
        awaySlotLabel: "Winner Match 102",
        status: "tbd",
        previousMatchIds: ["M101", "M102"],
        detailUrl: "/matches/104",
      },
    ];

    return [...round32, ...round16, ...quarterFinal, ...semiFinal, ...thirdPlaceMatch, ...final]
      .map(createMatch)
      .sort((a, b) => a.matchNo - b.matchNo);
  }

  function createMatch(config) {
    const roundMeta = rounds.find((round) => round.key === config.round) || rounds[0];
    return {
      matchId: config.matchId || `M${config.matchNo}`,
      matchNo: config.matchNo,
      round: config.round,
      roundLabel: config.roundLabel || roundMeta.description,
      dateLocal: config.dateLocal || "",
      city: config.city || "",
      homeTeamId: config.homeTeamId || null,
      awayTeamId: config.awayTeamId || null,
      homeTeamName: teamName(config.homeTeamId),
      awayTeamName: teamName(config.awayTeamId),
      homeFlag: teamFlag(config.homeTeamId),
      awayFlag: teamFlag(config.awayTeamId),
      homeSlotLabel: config.homeSlotLabel || null,
      awaySlotLabel: config.awaySlotLabel || null,
      homeScore: typeof config.homeScore === "number" ? config.homeScore : null,
      awayScore: typeof config.awayScore === "number" ? config.awayScore : null,
      kickoffLocal: config.kickoffLocal || "-",
      kickoffKorea: config.kickoffKorea || "-",
      venueName: config.venueName || "Venue TBA",
      venueImage: config.venueImage || resolveVenueImage(config.venueName, config.venueImage || ""),
      status: config.status || "tbd",
      previousMatchIds: Array.isArray(config.previousMatchIds) ? config.previousMatchIds.slice() : [],
      nextMatchId: config.nextMatchId || null,
      detailUrl: config.detailUrl || `/matches/${config.matchId || `M${config.matchNo}`}`,
    };
  }

  function teamName(teamId) {
    return teamId && teams[teamId] ? teams[teamId].name : "";
  }

  function teamKoName(teamId) {
    return teamId && TEAM_KO_NAME_MAP[teamId] ? TEAM_KO_NAME_MAP[teamId] : "";
  }

  function teamFlag(teamId) {
    return teamId && teams[teamId] ? teams[teamId].flag : "";
  }

  function resolveTournamentTeamFlag(flag, teamId, slotLabel) {
    if (flag) {
      return flag;
    }
    if (teamId && teams[teamId]?.flag) {
      return teams[teamId].flag;
    }
    return "";
  }

  function normalizeTournamentSlotLabel(slotLabel) {
    return String(slotLabel || "").trim();
  }

  function normalizeIsoFlagCode(flagCode = "") {
    return String(flagCode || "").trim().toLowerCase();
  }

  function resolveTournamentFlagCodeFromCandidates(...candidates) {
    for (const candidate of candidates) {
      const normalizedKey = normalizeTournamentTeamKey(candidate);
      if (normalizedKey && TOURNAMENT_FLAG_CODE_OVERRIDES[normalizedKey]) {
        return TOURNAMENT_FLAG_CODE_OVERRIDES[normalizedKey];
      }
      const normalizedCode = normalizeIsoFlagCode(candidate);
      if (normalizedCode && TOURNAMENT_SPECIAL_FLAG_URLS[normalizedCode]) {
        return normalizedCode;
      }
      if (/^[a-z]{2}$/i.test(normalizedCode)) {
        return normalizedCode;
      }
    }
    return "";
  }

  function convertFlagCodeToEmoji(flagCode = "") {
    const normalized = normalizeIsoFlagCode(flagCode);
    if (/^[a-z]{2}$/.test(normalized)) {
      return normalized
        .toUpperCase()
        .split("")
        .map((character) => String.fromCodePoint(127397 + character.charCodeAt(0)))
        .join("");
    }
    if (normalized === "eng" || normalized === "gb-eng") {
      return "🏴";
    }
    return "";
  }

  function getSlotBadgeText(slotLabel = "") {
    const normalized = normalizeTournamentSlotLabel(slotLabel);
    const groupMatch = normalized.match(/^([A-L])조\s*([12])위$/);
    if (groupMatch) {
      return `${groupMatch[1]}${groupMatch[2]}`;
    }
    if (/^3위\s+/i.test(normalized)) {
      return "3위";
    }
    const winnerMatch = normalized.match(/^Winner(?: of)?(?: Match)?\s+(\d+)/i);
    if (winnerMatch) {
      return `W${winnerMatch[1]}`;
    }
    const loserMatch = normalized.match(/^Loser(?: of)?(?: Match)?\s+(\d+)/i);
    if (loserMatch) {
      return `L${loserMatch[1]}`;
    }
    return normalized || "TBD";
  }

  function createSlotDisplay(slotLabel = "") {
    return {
      flag: "",
      flagUrl: "",
      flagAlt: "",
      slotBadge: getSlotBadgeText(slotLabel),
      name: normalizeTournamentSlotLabel(slotLabel) || "미정",
      seedLabel: "",
      isSlot: true,
      isCurrentStandings: false,
    };
  }

  function createTeamDisplay(teamName = "", options = {}) {
    return {
      flag: String(options.flag || "").trim(),
      flagUrl: String(options.flagUrl || "").trim(),
      flagAlt: String(options.flagAlt || "").trim(),
      flagFallbackText: String(options.flagFallbackText || "").trim(),
      slotBadge: "",
      name: String(teamName || "").trim() || "미정",
      seedLabel: String(options.seedLabel || "").trim(),
      isSlot: false,
      isCurrentStandings: Boolean(options.seedLabel),
    };
  }

  function normalizeTournamentTeamKey(value = "") {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function isTournamentSlotLabel(value = "") {
    const label = String(value || "").trim();
    if (!label) {
      return false;
    }
    return /조\s*[1234]위|^3위\s|^(winner|loser)(?: of)?(?: match)?\s+\d+|^미정$|^tbd$/i.test(label);
  }

  function buildTournamentDisplayTeam(team = {}, fallbackLabel = "") {
    if (typeof team === "string") {
      return {
        name: team,
        englishName: team,
        fallbackLabel,
      };
    }
    return {
      teamId: team?.teamId || team?.id || "",
      id: team?.id || "",
      code: team?.code || "",
      iso2: team?.iso2 || "",
      fifaCode: team?.fifaCode || team?.flagCode || "",
      name: team?.name || "",
      shortName: team?.shortName || "",
      englishName: team?.englishName || team?.teamName || team?.name || "",
      fallbackLabel: fallbackLabel || team?.slotLabel || "",
    };
  }

  function getTournamentMetaFromLegacy(teamName = "") {
    if (typeof getGroupATeamMeta !== "function") {
      return null;
    }
    const meta = getGroupATeamMeta(teamName);
    return meta && (meta.ko || meta.flag) ? meta : null;
  }

  function getTournamentDisplayTeamName(team = {}, fallbackLabel = "") {
    const source = buildTournamentDisplayTeam(team, fallbackLabel);
    const fallbackText = String(source.fallbackLabel || "").trim();
    const candidates = [
      source.teamId,
      source.id,
      source.code,
      source.iso2,
      source.fifaCode,
      source.name,
      source.shortName,
      source.englishName,
    ]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    for (const candidate of candidates) {
      if (isTournamentSlotLabel(candidate)) {
        continue;
      }
      const normalizedCandidate = normalizeTournamentTeamKey(candidate);
      if (normalizedCandidate && TOURNAMENT_TEAM_KO_NAME_MAP[normalizedCandidate]) {
        return TOURNAMENT_TEAM_KO_NAME_MAP[normalizedCandidate];
      }
      if (normalizedCandidate && TOURNAMENT_KO_NAME_OVERRIDES[normalizedCandidate]) {
        return TOURNAMENT_KO_NAME_OVERRIDES[normalizedCandidate];
      }
      if (normalizedCandidate && TEAM_KO_NAME_LOOKUP[normalizedCandidate]) {
        return TEAM_KO_NAME_LOOKUP[normalizedCandidate];
      }
      const legacyMeta = getTournamentMetaFromLegacy(candidate);
      if (legacyMeta?.ko && legacyMeta.ko !== candidate) {
        return legacyMeta.ko;
      }
      const normalizedLower = String(candidate || "").trim().toLowerCase();
      if (TEAM_KO_NAME_BY_ENGLISH[normalizedLower]) {
        return TEAM_KO_NAME_BY_ENGLISH[normalizedLower];
      }
    }

    const byId = teamKoName(source.teamId);
    if (byId) {
      return byId;
    }

    const fallbackCandidate = candidates.find((candidate) => !isTournamentSlotLabel(candidate)) || "";
    const warnKey = normalizeTournamentTeamKey(fallbackCandidate);
    if (warnKey && !tournamentUnmappedNameWarnings.has(warnKey)) {
      tournamentUnmappedNameWarnings.add(warnKey);
      console.warn("[Tournament] Unmapped team name:", { team, fallbackLabel });
    }

    if (fallbackText) {
      return fallbackText;
    }
    return fallbackCandidate || "미정";
  }

  function getTournamentKoName(teamId = "", englishName = "") {
    return getTournamentDisplayTeamName(
      {
        teamId,
        name: englishName,
        englishName,
      },
      englishName,
    );
  }

  function getTournamentFlagCode(teamId = "", englishName = "", explicitFlagCode = "") {
    const legacyMeta = getTournamentMetaFromLegacy(englishName);
    const normalizedTeamId = normalizeTournamentTeamKey(teamId);
    const normalized = String(englishName || "").trim().toLowerCase();
    const normalizedKey = normalizeTournamentTeamKey(englishName);
    return resolveTournamentFlagCodeFromCandidates(
      explicitFlagCode,
      legacyMeta?.flag,
      teamId,
      normalizedTeamId && TEAM_FLAG_CODE_BY_ENGLISH[normalizedTeamId],
      englishName,
      normalizedKey,
      TEAM_FLAG_CODE_BY_ENGLISH[normalized],
      TEAM_FLAG_CODE_BY_ENGLISH[normalizedKey],
    );
  }

  function getTournamentFlagImageUrl(teamId = "", englishName = "", explicitFlagCode = "") {
    const flagCode = getTournamentFlagCode(teamId, englishName, explicitFlagCode);
    if (!flagCode) {
      return "";
    }
    if (TOURNAMENT_SPECIAL_FLAG_URLS[flagCode]) {
      return TOURNAMENT_SPECIAL_FLAG_URLS[flagCode];
    }
    return `https://flagcdn.com/${flagCode}.svg`;
  }

  function getTournamentFlagFallbackText(teamId = "", englishName = "", explicitFlagCode = "") {
    const flagCode = getTournamentFlagCode(teamId, englishName, explicitFlagCode);
    return flagCode ? flagCode.toUpperCase() : "";
  }

  function getPrimaryVenueName(venueName = "") {
    return String(venueName || "").split("/")[0].trim() || String(venueName || "").trim() || "-";
  }

  function getCurrentStandingsGroupSnapshot() {
    const legacyWindow = matchBridgeFrame?.contentWindow;
    if (typeof legacyWindow?.calculateGroupStandings !== "function") {
      return {
        ready: false,
        groups: new Map(),
      };
    }

    const groups = new Map();
    GROUP_KEYS.forEach((groupKey) => {
      try {
        const standingsResult = legacyWindow.calculateGroupStandings(groupKey);
        const items = Array.isArray(standingsResult?.items) ? standingsResult.items : [];
        groups.set(
          groupKey,
          items.map((team, index) => {
            const teamName = String(team?.name || "").trim();
            const flagCode = normalizeIsoFlagCode(team?.code || team?.flag || "");
            return {
              groupKey,
              rank: Number(team?.rankInGroup || index + 1),
              teamName,
              flagCode,
              flag: convertFlagCodeToEmoji(flagCode),
            };
          }),
        );
      } catch (_error) {
        groups.set(groupKey, []);
      }
    });

    return {
      ready: true,
      groups,
    };
  }

  function getCurrentThirdPlaceSnapshot() {
    if (typeof getZThirdPlaceTeamsFromCurrentGroupOrder !== "function") {
      return {
        ready: false,
        rows: [],
      };
    }
    const snapshot = getZThirdPlaceTeamsFromCurrentGroupOrder();
    const rows = Array.isArray(snapshot?.rows) ? snapshot.rows : [];
    return {
      ready: Boolean(snapshot?.legacyReady),
      rows: rows
        .map((row) => ({
          groupKey: String(row?.group || "").trim().toUpperCase(),
          teamName: String(row?.team || "").trim(),
          flagCode: normalizeIsoFlagCode(row?.flagCode || ""),
          flag: convertFlagCodeToEmoji(row?.flagCode || ""),
          overallRank: Number(row?.overallRank || 999),
        }))
        .filter((row) => row.groupKey && row.teamName && row.teamName !== "-"),
    };
  }

  function ensureCurrentStandingsSourceReady() {
    if (!TOURNAMENT_CURRENT_STANDINGS_TEST_MODE || !matchBridgeFrame) {
      return false;
    }
    if (typeof loadLazyIframe === "function") {
      loadLazyIframe(matchBridgeFrame);
    }
    const ready = typeof matchBridgeFrame?.contentWindow?.calculateGroupStandings === "function";
    if (!ready && !state.waitingLegacyRefresh) {
      state.waitingLegacyRefresh = true;
      const handleLoad = () => {
        state.waitingLegacyRefresh = false;
        state.renderedRound = "";
        matchBridgeFrame.removeEventListener("load", handleLoad);
        queueSync();
      };
      matchBridgeFrame.addEventListener("load", handleLoad, { once: true });
    }
    return ready;
  }

  function resolveCurrentGroupRankSlot(slotLabel, groupsSnapshot) {
    const normalized = normalizeTournamentSlotLabel(slotLabel);
    const match = normalized.match(/^([A-L])조\s*([12])위$/);
    if (!match || !groupsSnapshot?.ready) {
      return null;
    }
    const groupKey = match[1];
    const rank = Number(match[2]);
    const groupItems = groupsSnapshot.groups.get(groupKey) || [];
    const team = groupItems.find((item) => item.rank === rank) || groupItems[rank - 1] || null;
    if (!team?.teamName) {
      return null;
    }
    return createTeamDisplay(
      getTournamentDisplayTeamName(
        {
          code: team.flagCode,
          fifaCode: team.flagCode,
          name: team.teamName,
          englishName: team.teamName,
        },
        normalized,
      ),
      {
        flagUrl: getTournamentFlagImageUrl("", team.teamName, team.flagCode || team.flag),
        flagAlt: `${getTournamentDisplayTeamName(
          {
            code: team.flagCode,
            fifaCode: team.flagCode,
            name: team.teamName,
            englishName: team.teamName,
          },
          normalized,
        )} 국기`,
        flagFallbackText: getTournamentFlagFallbackText("", team.teamName, team.flagCode || team.flag),
        seedLabel: normalized,
      },
    );
  }

  function resolveThirdPlaceSlot(slotLabel, thirdPlaceSnapshot, assignedGroups) {
    const normalized = normalizeTournamentSlotLabel(slotLabel);
    const match = normalized.match(/^3위\s+([A-L](?:\/[A-L])*)$/i);
    if (!match || !thirdPlaceSnapshot?.ready) {
      return null;
    }
    const candidateGroups = new Set(
      match[1]
        .split("/")
        .map((value) => String(value || "").trim().toUpperCase())
        .filter(Boolean),
    );
    const candidate = thirdPlaceSnapshot.rows.find(
      (row) => candidateGroups.has(row.groupKey) && !assignedGroups.has(row.groupKey),
    );
    if (!candidate?.teamName) {
      return null;
    }
    assignedGroups.add(candidate.groupKey);
    return createTeamDisplay(
      getTournamentDisplayTeamName(
        {
          code: candidate.flagCode,
          fifaCode: candidate.flagCode,
          name: candidate.teamName,
          englishName: candidate.teamName,
        },
        normalized,
      ),
      {
        flagUrl: getTournamentFlagImageUrl("", candidate.teamName, candidate.flagCode || candidate.flag),
        flagAlt: `${getTournamentDisplayTeamName(
          {
            code: candidate.flagCode,
            fifaCode: candidate.flagCode,
            name: candidate.teamName,
            englishName: candidate.teamName,
          },
          normalized,
        )} 국기`,
        flagFallbackText: getTournamentFlagFallbackText("", candidate.teamName, candidate.flagCode || candidate.flag),
        seedLabel: normalized,
      },
    );
  }

  function resolveMatchSideDisplay(match, side, context) {
    const isHome = side === "home";
    const resolvedTeamName = isHome ? match.homeTeamName : match.awayTeamName;
    const teamFlag = isHome ? match.homeFlag : match.awayFlag;
    const teamId = isHome ? match.homeTeamId : match.awayTeamId;
    const slotLabel = isHome ? match.homeSlotLabel : match.awaySlotLabel;

    if (resolvedTeamName || teamFlag || teamId) {
      const resolvedDisplayName = getTournamentDisplayTeamName(
        {
          teamId,
          code: resolveTournamentTeamFlag(teamFlag, teamId, ""),
          fifaCode: resolveTournamentTeamFlag(teamFlag, teamId, ""),
          name: resolvedTeamName || teamName(teamId),
          englishName: resolvedTeamName || teamName(teamId),
        },
        slotLabel || "",
      );
      return createTeamDisplay(
        resolvedDisplayName,
        {
          flagUrl: getTournamentFlagImageUrl(
            teamId,
            resolvedTeamName || teamName(teamId),
            getTournamentFlagCode(teamId, resolvedTeamName || teamName(teamId), resolveTournamentTeamFlag(teamFlag, teamId, "")),
          ),
          flagAlt: `${resolvedDisplayName} 국기`,
          flagFallbackText: getTournamentFlagFallbackText(
            teamId,
            resolvedTeamName || teamName(teamId),
            getTournamentFlagCode(teamId, resolvedTeamName || teamName(teamId), resolveTournamentTeamFlag(teamFlag, teamId, "")),
          ),
          seedLabel: slotLabel || "",
        },
      );
    }

    if (TOURNAMENT_CURRENT_STANDINGS_TEST_MODE && match.round === "round32" && slotLabel) {
      const resolvedGroupSlot = resolveCurrentGroupRankSlot(slotLabel, context.groupsSnapshot);
      if (resolvedGroupSlot) {
        return resolvedGroupSlot;
      }
      const resolvedThirdPlaceSlot = resolveThirdPlaceSlot(
        slotLabel,
        context.thirdPlaceSnapshot,
        context.assignedThirdPlaceGroups,
      );
      if (resolvedThirdPlaceSlot) {
        return resolvedThirdPlaceSlot;
      }
    }

    return createSlotDisplay(slotLabel);
  }

  function buildRoundDisplayContext(matches, roundKey) {
    if (!TOURNAMENT_CURRENT_STANDINGS_TEST_MODE || roundKey !== "round32") {
      return new Map();
    }

    ensureCurrentStandingsSourceReady();

    const groupsSnapshot = getCurrentStandingsGroupSnapshot();
    const thirdPlaceSnapshot = getCurrentThirdPlaceSnapshot();
    const assignedThirdPlaceGroups = new Set();
    const displayMap = new Map();

    matches
      .slice()
      .sort((a, b) => a.matchNo - b.matchNo)
      .forEach((match) => {
        displayMap.set(match.matchId, {
          home: resolveMatchSideDisplay(match, "home", {
            groupsSnapshot,
            thirdPlaceSnapshot,
            assignedThirdPlaceGroups,
          }),
          away: resolveMatchSideDisplay(match, "away", {
            groupsSnapshot,
            thirdPlaceSnapshot,
            assignedThirdPlaceGroups,
          }),
        });
      });

    return displayMap;
  }

  function resolveVenueImage(venueName, fallbackPath) {
    if (typeof resolveWC26StadiumImagePath === "function") {
      return resolveWC26StadiumImagePath(venueName, fallbackPath);
    }
    return fallbackPath || "";
  }

  function normalizeIsoDate(value) {
    const match = String(value || "").trim().match(/(\d{4})[-.](\d{2})[-.](\d{2})/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : "";
  }

  function extractTimeText(value) {
    const match = String(value || "").trim().match(/(\d{2}:\d{2})$/);
    return match ? match[1] : String(value || "").trim();
  }

  function formatKoreaKickoff(match) {
    const koreaDate = normalizeIsoDate(match.kickoffKorea);
    const localDate = normalizeIsoDate(match.dateLocal);
    const timeText = extractTimeText(match.kickoffKorea);
    if (!timeText) {
      return String(match.kickoffKorea || "-").trim() || "-";
    }
    if (koreaDate && localDate && koreaDate !== localDate) {
      return `${timeText}(+1일)`;
    }
    return timeText;
  }

  function buildScheduleMetaValue(match) {
    const dateText = normalizeIsoDate(match.dateLocal);
    const localTimeText = extractTimeText(match.kickoffLocal);
    const koreaTimeText = formatKoreaKickoff(match);
    const shell = document.createElement("div");
    shell.className = "wc26-tournament-match-schedule";

    const dateLine = document.createElement("div");
    dateLine.className = "wc26-tournament-match-date";
    dateLine.textContent = dateText || "-";

    const timeLine = document.createElement("div");
    timeLine.className = "wc26-tournament-match-time";
    timeLine.textContent = `현지시각 ${localTimeText || "-"} / 한국시각 ${koreaTimeText || "-"}`;

    shell.append(dateLine, timeLine);
    return shell;
  }

  function currentMatchMode() {
    const activeButton = modeButtons.find((button) => button.classList.contains("is-active"));
    return readDatasetValue(activeButton, "matchShellMode", "group-stage");
  }

  function currentRoundKey() {
    const activeButton = knockoutButtons.find((button) => button.classList.contains("is-active"));
    const requested = readDatasetValue(activeButton, "matchKnockoutStage", rounds[0].key);
    return rounds.some((round) => round.key === requested) ? requested : rounds[0].key;
  }

  function readDatasetValue(button, key, fallback) {
    return String(button?.dataset?.[key] || fallback).trim() || fallback;
  }

  function ensureScaffold() {
    if (state.initialized) {
      return;
    }

    root.replaceChildren(
      createHeaderPanel(),
      createListPanel(),
    );

    root.dataset.view = "round";
    state.initialized = true;
  }

  function createHeaderPanel() {
    const panel = document.createElement("section");
    panel.className = "wc26-tournament-panel wc26-tournament-panel--header";

    const body = document.createElement("div");
    body.className = "wc26-tournament-panel-body wc26-tournament-panel-body--header";

    const head = document.createElement("div");
    head.className = "wc26-tournament-head";

    const titleRow = document.createElement("div");
    titleRow.className = "wc26-tournament-title-row";

    const title = document.createElement("h3");
    title.className = "wc26-tournament-title";
    title.textContent = "토너먼트 라운드별 매치업";

    const copy = document.createElement("span");
    copy.className = "wc26-tournament-copy";
    copy.textContent = "";

    const summary = document.createElement("p");
    summary.className = "wc26-tournament-stage-copy";
    summary.id = "wc26-tournament-stage-copy";

    const toolbar = document.createElement("div");
    toolbar.className = "wc26-tournament-toolbar";

    const boardButton = document.createElement("button");
    boardButton.type = "button";
    boardButton.className = "wc26-tournament-ghost-button";
    boardButton.id = "wc26-tournament-board-button";
    boardButton.textContent = "전체 브라켓 보기";

    const inlineNote = document.createElement("p");
    inlineNote.className = "wc26-tournament-inline-note";
    inlineNote.id = "wc26-tournament-inline-note";
    inlineNote.hidden = true;

    boardButton.addEventListener("click", () => {
      state.currentView = state.currentView === "board" ? "round" : "board";
      console.log("[Tournament] full bracket button clicked", state.currentView);
      inlineNote.hidden = true;
      syncShell();
    });

    titleRow.append(title);
    toolbar.append(boardButton, inlineNote);
    head.append(titleRow, summary, toolbar);
    body.append(head);
    panel.append(body);

    return panel;
  }

  function createListPanel() {
    const panel = document.createElement("section");
    panel.className = "wc26-tournament-panel";

    const body = document.createElement("div");
    body.className = "wc26-tournament-panel-body wc26-tournament-panel-body--board-host";

    const roundView = document.createElement("div");
    roundView.className = "wc26-tournament-round-view";
    roundView.id = "wc26-tournament-round-view";

    const list = document.createElement("div");
    list.className = "wc26-tournament-list";
    list.id = "wc26-tournament-list";

    const bracketView = document.createElement("div");
    bracketView.className = "wc26-tournament-full-bracket-view";
    bracketView.id = "wc26-tournament-full-bracket-view";

    roundView.append(list);
    body.append(roundView, bracketView);
    panel.append(body);
    return panel;
  }

  function createBoardDisplayContext() {
    const displayMap = new Map();
    const round32Matches = tournamentMatches.filter((match) => match.round === "round32");
    const round32Context = buildRoundDisplayContext(round32Matches, "round32");
    const emptyContext = {
      groupsSnapshot: { ready: false, groups: new Map() },
      thirdPlaceSnapshot: { ready: false, rows: [] },
      assignedThirdPlaceGroups: new Set(),
    };

    tournamentMatches.forEach((match) => {
      if (round32Context.has(match.matchId)) {
        displayMap.set(match.matchId, round32Context.get(match.matchId));
        return;
      }
      displayMap.set(match.matchId, {
        home: resolveMatchSideDisplay(match, "home", emptyContext),
        away: resolveMatchSideDisplay(match, "away", emptyContext),
      });
    });

    return displayMap;
  }

  function getTournamentMatchByNo(matchNo) {
    const numericMatchNo = Number(matchNo);
    const existingMatch =
      tournamentMatches.find((match) => Number(match.matchNo) === numericMatchNo) ||
      tournamentMatches.find((match) => String(match.matchId || "").replace(/\D/g, "") === String(numericMatchNo));

    if (existingMatch) {
      return existingMatch;
    }

    return createMatch({
      matchId: `M${numericMatchNo}`,
      matchNo: numericMatchNo,
      round: numericMatchNo === 104 ? "final" : numericMatchNo === 103 ? "thirdPlaceMatch" : "round32",
      roundLabel:
        numericMatchNo === 104
          ? "Final"
          : numericMatchNo === 103
            ? "3rd Place Match"
            : "Round of 32",
      homeSlotLabel:
        numericMatchNo === 104
          ? "Winner Match 101"
          : numericMatchNo === 103
            ? "Loser Match 101"
            : `M${numericMatchNo}`,
      awaySlotLabel:
        numericMatchNo === 104
          ? "Winner Match 102"
          : numericMatchNo === 103
            ? "Loser Match 102"
            : `M${numericMatchNo}`,
      venueName: "",
    });
  }

  function createCompactTeamVisual(display) {
    const createCompactFallbackVisual = () => {
      if (display?.isSlot) {
        const badge = createTournamentSlotBadge(display);
        badge.classList.add("wc26-bracket-slot-badge");
        return badge;
      }
      const fallback = document.createElement("span");
      fallback.className = "wc26-bracket-slot-badge";
      fallback.textContent = "--";
      fallback.setAttribute("aria-hidden", "true");
      return fallback;
    };

    if (display?.flagUrl) {
      const image = document.createElement("img");
      image.className = "wc26-bracket-flag-img";
      image.src = display.flagUrl;
      image.alt = display.flagAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 36;
      image.height = 24;
      image.addEventListener("error", () => {
        image.replaceWith(createCompactFallbackVisual());
      }, { once: true });
      return image;
    }
    return createCompactFallbackVisual();
  }

  function createCompactTeamRow(display, score = "-") {
    const row = document.createElement("div");
    row.className = "wc26-bracket-team-row";

    const visual = createCompactTeamVisual(display);
    visual.classList.add(display?.isSlot ? "wc26-bracket-slot-badge" : "wc26-bracket-flag-img");
    const scoreNode = document.createElement("span");
    scoreNode.className = "wc26-bracket-score";
    scoreNode.textContent = score;

    row.append(visual, scoreNode);
    return row;
  }

  function openRoundForMatch(matchId, roundKey) {
    state.currentView = "round";
    state.renderedRound = "";
    const roundButton = knockoutButtons.find(
      (button) => readDatasetValue(button, "matchKnockoutStage", "") === roundKey,
    );
    if (roundButton) {
      roundButton.click();
    } else {
      syncShell();
    }
    window.setTimeout(() => {
      const targetCard = root.querySelector(`.wc26-tournament-match-card[data-match-id="${matchId}"]`);
      if (!targetCard) {
        return;
      }
      targetCard.classList.add("is-flash");
      targetCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      window.setTimeout(() => targetCard.classList.remove("is-flash"), 1200);
    }, 60);
  }

  function createCompactBracketCard(match, displayEntry, sideClass = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "wc26-bracket-card";
    const sideClasses = String(sideClass || "").split(/\s+/).filter(Boolean);
    if (sideClasses.length) {
      button.classList.add(...sideClasses);
    }
    button.dataset.matchId = match.matchId;
    button.dataset.matchNo = String(match.matchNo);
    button.setAttribute("aria-label", `${match.roundLabel} Match ${match.matchNo}`);

    const header = document.createElement("div");
    header.className = "wc26-bracket-match-no";
    header.textContent = `M${match.matchNo}`;

    const body = document.createElement("div");
    body.className = "wc26-bracket-card-body";
    body.append(
      createCompactTeamRow(displayEntry?.home || createSlotDisplay(match.homeSlotLabel), match.homeScore ?? "-"),
      createCompactTeamRow(displayEntry?.away || createSlotDisplay(match.awaySlotLabel), match.awayScore ?? "-"),
    );

    button.append(header, body);
    button.addEventListener("click", () => openRoundForMatch(match.matchId, match.round));
    return button;
  }

  function createBoardStageColumn(label, matchNumbers, displayMap, sideClass = "") {
    const column = document.createElement("section");
    column.className = "wc26-bracket-column";
    const sideClasses = String(sideClass || "").split(/\s+/).filter(Boolean);
    if (sideClasses.length) {
      column.classList.add(...sideClasses);
    }

    const title = document.createElement("h4");
    title.className = "wc26-bracket-column-title";
    title.textContent = label;

    const list = document.createElement("div");
    list.className = "wc26-bracket-column-list";

    matchNumbers.forEach((matchNo) => {
      const match = getTournamentMatchByNo(matchNo);
      list.append(createCompactBracketCard(match, displayMap.get(match.matchId), sideClass));
    });

    column.append(title, list);
    return column;
  }

  function createFullBracketBoard() {
    const displayMap = createBoardDisplayContext();

    const shellNode = document.createElement("div");
    shellNode.className = "wc26-bracket-board-shell";

    const scrollNode = document.createElement("div");
    scrollNode.className = "wc26-bracket-scroll";

    const board = document.createElement("div");
    board.className = "wc26-bracket-board";

    const leftSide = document.createElement("section");
    leftSide.className = "wc26-bracket-side wc26-bracket-side-left";
    leftSide.append(
      createBoardStageColumn("Round of 32", [73, 74, 75, 76, 77, 78, 79, 80], displayMap, "is-left"),
      createBoardStageColumn("Round of 16", [89, 90, 91, 92], displayMap, "is-left"),
      createBoardStageColumn("Quarter Final", [97, 99], displayMap, "is-left"),
      createBoardStageColumn("Semi Final", [101], displayMap, "is-left"),
    );

    const center = document.createElement("section");
    center.className = "wc26-bracket-center";
    center.append(
      createBoardStageColumn("Final", [104], displayMap, "is-center"),
      createBoardStageColumn("3rd Place Match", [103], displayMap, "is-center is-third"),
    );

    const rightSide = document.createElement("section");
    rightSide.className = "wc26-bracket-side wc26-bracket-side-right";
    rightSide.append(
      createBoardStageColumn("Semi Final", [102], displayMap, "is-right"),
      createBoardStageColumn("Quarter Final", [98, 100], displayMap, "is-right"),
      createBoardStageColumn("Round of 16", [93, 94, 95, 96], displayMap, "is-right"),
      createBoardStageColumn("Round of 32", [81, 82, 83, 84, 85, 86, 87, 88], displayMap, "is-right"),
    );

    board.append(leftSide, center, rightSide);
    scrollNode.append(board);
    shellNode.append(scrollNode);
    return shellNode;
  }

  function renderBoard() {
    ensureScaffold();

    if (state.renderedRound === "board") {
      return;
    }

    const summaryNode = document.getElementById("wc26-tournament-stage-copy");
    const bracketViewNode = document.getElementById("wc26-tournament-full-bracket-view");
    const boardButton = document.getElementById("wc26-tournament-board-button");
    if (!summaryNode || !bracketViewNode) {
      return;
    }

    summaryNode.textContent = "";
    console.log("[Tournament] render full bracket");
    root.dataset.view = "board";
    bracketViewNode.replaceChildren();
    const board = createFullBracketBoard();
    if (!board) {
      const empty = document.createElement("div");
      empty.className = "wc26-tournament-empty";
      empty.textContent = "?꾩껜 釉뚮씪耳?쓣 遺덈윭?ㅼ? 紐삵뻽?듬땲??";
      bracketViewNode.append(empty);
      return;
    }
    bracketViewNode.append(board);
    if (knockoutToolbar) {
      knockoutToolbar.hidden = true;
    }
    if (boardButton) {
      boardButton.textContent = "라운드별 보기";
    }
    state.renderedRound = "board";
  }

  function renderRound(roundKey) {
    ensureScaffold();

    if (state.renderedRound === `round:${roundKey}`) {
      return;
    }

    const roundMeta = rounds.find((round) => round.key === roundKey) || rounds[0];
    const summaryNode = document.getElementById("wc26-tournament-stage-copy");
    const listNode = document.getElementById("wc26-tournament-list");
    const bracketViewNode = document.getElementById("wc26-tournament-full-bracket-view");
    const boardButton = document.getElementById("wc26-tournament-board-button");

    if (!summaryNode || !listNode || !bracketViewNode) {
      return;
    }

    const currentMatches = tournamentMatches.filter((match) => match.round === roundKey);
    const displayContext = buildRoundDisplayContext(currentMatches, roundKey);
    const fragment = document.createDocumentFragment();
    console.log("[Tournament] render round view:", roundKey);
    root.dataset.view = "round";
    summaryNode.textContent = "";
    listNode.dataset.round = roundKey;
    bracketViewNode.replaceChildren();
    if (knockoutToolbar) {
      knockoutToolbar.hidden = false;
    }
    if (boardButton) {
      boardButton.textContent = "전체 브라켓 보기";
    }

    if (!currentMatches.length) {
      const empty = document.createElement("div");
      empty.className = "wc26-tournament-empty";
      empty.textContent = "표시할 토너먼트 경기 정보가 아직 없습니다.";
      fragment.append(empty);
      listNode.replaceChildren(fragment);
      state.renderedRound = `round:${roundKey}`;
      return;
    }

    currentMatches.forEach((match) => {
      fragment.append(createMatchCard(match, roundMeta.count === 1, displayContext.get(match.matchId) || null));
    });

    listNode.replaceChildren(fragment);
    state.renderedRound = `round:${roundKey}`;
  }

  function createMatchCard(match, isFinalRound, sideDisplay) {
    const article = document.createElement("article");
    article.className = "wc26-tournament-match-card";
    if (isFinalRound) {
      article.classList.add("is-final");
    }
    article.setAttribute("aria-label", `${match.roundLabel} ${match.matchNo}`);
    article.dataset.matchId = match.matchId;
    article.dataset.matchNo = String(match.matchNo);

    const info = document.createElement("div");
    info.className = "wc26-tournament-match-info";

    const media = document.createElement("div");
    media.className = "wc26-tournament-match-media";

    const mediaFrame = document.createElement("div");
    mediaFrame.className = "wc26-tournament-media-frame";

    const matchup = document.createElement("div");
    matchup.className = "wc26-tournament-matchup";

    const mobileTopline = document.createElement("div");
    mobileTopline.className = "wc26-tournament-mobile-topline";

    const mobileMatchId = document.createElement("span");
    mobileMatchId.className = "wc26-tournament-match-id";
    mobileMatchId.textContent = `MATCH ${match.matchNo}`;

    const mobileRoundLabel = document.createElement("span");
    mobileRoundLabel.className = "wc26-tournament-round-badge";
    mobileRoundLabel.textContent = match.roundLabel;

    mobileTopline.append(mobileMatchId, mobileRoundLabel);

    const homeDisplay = sideDisplay?.home || createSlotDisplay(match.homeSlotLabel);
    const awayDisplay = sideDisplay?.away || createSlotDisplay(match.awaySlotLabel);

    matchup.append(
      createTeamBlock(homeDisplay),
      createVersusBlock(match),
      createTeamBlock(awayDisplay),
    );

    const metaStack = createMatchMetaBlock(match);

    info.append(mobileTopline, matchup, metaStack);

    if (match.venueImage) {
      const image = document.createElement("img");
      image.src = match.venueImage;
      image.alt = match.venueName;
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 1600;
      image.height = 900;
      image.draggable = false;
      mediaFrame.append(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "wc26-tournament-media-placeholder";
      placeholder.textContent = "Stadium Photo";
      mediaFrame.append(placeholder);
    }

    media.append(mediaFrame);
    article.append(info, media);

    return article;
  }

  function createTeamBlock(display) {
    const team = document.createElement("div");
    team.className = "wc26-tournament-team";

    const flagShell = document.createElement("div");
    flagShell.className = "wc26-tournament-team-flag";

    if (display?.flagUrl) {
      const image = document.createElement("img");
      image.className = "wc26-tournament-team-flag-img";
      image.src = display.flagUrl;
      image.alt = display.flagAlt || `${display?.name || "국가"} 국기`;
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 64;
      image.height = 44;
      image.addEventListener("error", () => {
        flagShell.replaceChildren(createTournamentSlotBadge(display));
      }, { once: true });
      flagShell.append(image);
    } else {
      flagShell.append(createTournamentSlotBadge(display));
    }

    const label = document.createElement("span");
    label.className = "wc26-tournament-team-name";
    label.textContent = display?.name || "TBD";

    if (display?.isSlot) {
      label.classList.add("is-slot");
    }

    team.append(flagShell, label);

    if (display?.seedLabel) {
      const seed = document.createElement("span");
      seed.className = "wc26-tournament-team-seed";
      seed.textContent = display.seedLabel;
      team.append(seed);
    }

    return team;
  }

  function createTournamentSlotBadge(display) {
    const badge = document.createElement("span");
    badge.className = "wc26-tournament-team-slot-badge";
    badge.textContent =
      (display?.isSlot
        ? display?.slotBadge || getSlotBadgeText(display?.seedLabel || display?.name || "")
        : display?.flagFallbackText || "") ||
      getSlotBadgeText(display?.seedLabel || display?.name || "");
    return badge;
  }

  function createVersusBlock(match) {
    const versus = document.createElement("div");
    versus.className = "wc26-tournament-versus";

    const matchLabel = document.createElement("span");
    matchLabel.className = "wc26-tournament-match-center-id";
    matchLabel.textContent = `Match ${match.matchNo}`;

    const roundLabel = document.createElement("span");
    roundLabel.className = "wc26-tournament-match-center-round";
    roundLabel.textContent = match.roundLabel;

    const logo = document.createElement("img");
    logo.className = "wc26-tournament-versus-logo";
    logo.src = LOGO_PATH;
    logo.alt = "";
    logo.loading = "lazy";
    logo.decoding = "async";

    const label = document.createElement("span");
    label.className = "wc26-tournament-versus-label";
    label.textContent = "VS";

    versus.append(matchLabel, roundLabel, logo, label);
    return versus;
  }

  function createMetaRow(label, value) {
    const row = document.createElement("div");
    row.className = "wc26-tournament-meta-row";

    const key = document.createElement("span");
    key.className = "wc26-tournament-meta-label";
    key.textContent = label;

    const content = document.createElement("span");
    content.className = "wc26-tournament-meta-value";
    if (value instanceof Node) {
      content.append(value);
    } else {
      content.textContent = value || "-";
    }

    row.append(key, content);
    return row;
  }

  function createMatchMetaBlock(match) {
    const meta = document.createElement("div");
    meta.className = "wc26-tournament-meta-stack";

    const schedule = buildScheduleMetaValue(match);
    const venue = document.createElement("div");
    venue.className = "wc26-tournament-match-venue";
    venue.textContent = getPrimaryVenueName(match.venueName);

    meta.append(schedule, venue);
    return meta;
  }

  function syncShell() {
    const isBracketMode = currentMatchMode() === "bracket";
    shell.hidden = !isBracketMode;

    if (!isBracketMode) {
      state.renderedRound = "";
      state.currentView = "round";
      return;
    }

    frameShell.hidden = true;
    if (state.currentView === "board") {
      renderBoard();
      return;
    }
    renderRound(currentRoundKey());
  }

  function queueSync() {
    window.setTimeout(syncShell, 0);
  }

  modeButtons.forEach((button) => {
    button.addEventListener("click", queueSync);
  });

  knockoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.currentView = "round";
      queueSync();
    });
  });

  bracketNavButtons.forEach((button) => {
    button.addEventListener("click", queueSync);
  });

  syncShell();
})();
