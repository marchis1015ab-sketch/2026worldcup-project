const groupData = {
  A: [{name:'Mexico',code:'mx',rank:16,coach:'Javier Aguirre'},{name:'South Africa',code:'za',rank:60,coach:'Hugo Broos'},{name:'South Korea',code:'kr',rank:22,coach:'Hong Myung-bo'},{name:'Czechia',code:'cz',rank:43,coach:'Miroslav Koubek'}],
  B: [{name:'Canada',code:'ca',rank:29,coach:'Jesse Marsch'},{name:'Bosnia and Herzegovina',code:'ba',rank:71,coach:'Sergej Barbarez'},{name:'Qatar',code:'qa',rank:56,coach:'Tintin Márquez'},{name:'Switzerland',code:'ch',rank:18,coach:'Murat Yakin'}],
  C: [{name:'Brazil',code:'br',rank:5,coach:'Dorival Júnior'},{name:'Morocco',code:'ma',rank:8,coach:'Walid Regragui'},{name:'Haiti',code:'ht',rank:83,coach:'Sébastien Migné'},{name:'Scotland',code:'gb-sct',rank:38,coach:'Steve Clarke'}],
  D: [{name:'United States',code:'us',rank:15,coach:'Gregg Berhalter'},{name:'Paraguay',code:'py',rank:40,coach:'Daniel Garnero'},{name:'Australia',code:'au',rank:27,coach:'Graham Arnold'},{name:'Türkiye',code:'tr',rank:22,coach:'Vincenzo Montella'}],
  E: [{name:'Germany',code:'de',rank:10,coach:'Julian Nagelsmann'},{name:'Curacao',code:'cw',rank:81,coach:'Dick Advocaat'},{name:'Ivory Coast',code:'ci',rank:37,coach:'Emerse Faé'},{name:'Ecuador',code:'ec',rank:23,coach:'Félix Sánchez'}],
  F: [{name:'Netherlands',code:'nl',rank:7,coach:'Ronald Koeman'},{name:'Japan',code:'jp',rank:19,coach:'Hajime Moriyasu'},{name:'Sweden',code:'se',rank:42,coach:'Graham Potter'} ,{name:'Tunisia',code:'tn',rank:47,coach:'Jalel Kadri'}],
  G: [{name:'Belgium',code:'be',rank:9,coach:'Domenico Tedesco'},{name:'Egypt',code:'eg',rank:31,coach:'Hossam Hassan'},{name:'Iran',code:'ir',rank:20,coach:'Amir Ghalenoei'},{name:'New Zealand',code:'nz',rank:85,coach:'Darren Bazeley'}],
  H: [{name:'Spain',code:'es',rank:1,coach:'Luis de la Fuente'},{name:'Cape Verde',code:'cv',rank:67,coach:'Bubista'},{name:'Saudi Arabia',code:'sa',rank:61,coach:'Roberto Mancini'},{name:'Uruguay',code:'uy',rank:17,coach:'Marcelo Bielsa'}],
  I: [{name:'France',code:'fr',rank:3,coach:'Didier Deschamps'},{name:'Senegal',code:'sn',rank:12,coach:'Aliou Cissé'},{name:'Iraq',code:'iq',rank:58,coach:'Jesús Casas'},{name:'Norway',code:'no',rank:32,coach:'Ståle Solbakken'}],
  J: [{name:'Argentina',code:'ar',rank:2,coach:'Lionel Scaloni'},{name:'Algeria',code:'dz',rank:28,coach:'Vladimir Petković'},{name:'Austria',code:'at',rank:24,coach:'Ralf Rangnick'},{name:'Jordan',code:'jo',rank:64,coach:'Hussein Ammouta'}],
  K: [{name:'Portugal',code:'pt',rank:6,coach:'Roberto Martínez'},{name:'Congo DR',code:'cd',rank:48,coach:'Sébastien Desabre'},{name:'Uzbekistan',code:'uz',rank:52,coach:'Srečko Katanec'},{name:'Colombia',code:'co',rank:14,coach:'Néstor Lorenzo'}],
  L: [{name:'England',code:'gb-eng',rank:4,coach:'Gareth Southgate'},{name:'Croatia',code:'hr',rank:11,coach:'Zlatko Dalić'},{name:'Ghana',code:'gh',rank:72,coach:'Otto Addo'},{name:'Panama',code:'pa',rank:33,coach:'Thomas Christiansen'}]
};

const groupMatches = {
  A:[{number:'M1',home:'Mexico',homeCode:'mx',away:'South Africa',awayCode:'za',date:'2026-06-12',time:'09:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M2',home:'South Korea',homeCode:'kr',away:'Czechia',awayCode:'cz',date:'2026-06-12',time:'11:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M3',home:'Mexico',homeCode:'mx',away:'South Korea',awayCode:'kr',date:'2026-06-18',time:'10:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M4',home:'South Africa',homeCode:'za',away:'Czechia',awayCode:'cz',date:'2026-06-18',time:'07:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M5',home:'Czechia',homeCode:'cz',away:'Mexico',awayCode:'mx',date:'2026-06-24',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M6',home:'South Africa',homeCode:'za',away:'South Korea',awayCode:'kr',date:'2026-06-24',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}],
  B:[{number:'M7',home:'Canada',homeCode:'ca',away:'Bosnia and Herzegovina',awayCode:'ba',date:'2026-06-13',time:'10:00 KST',stadium:'BMO Field (Toronto)'},{number:'M8',home:'Qatar',homeCode:'qa',away:'Switzerland',awayCode:'ch',date:'2026-06-14',time:'04:00 KST',stadium:"Levi's Stadium (San Francisco)"},{number:'M9',home:'Canada',homeCode:'ca',away:'Qatar',awayCode:'qa',date:'2026-06-19',time:'10:00 KST',stadium:'BMO Field (Toronto)'},{number:'M10',home:'Bosnia and Herzegovina',homeCode:'ba',away:'Switzerland',awayCode:'ch',date:'2026-06-19',time:'07:00 KST',stadium:'BC Place (Vancouver)'},{number:'M11',home:'Switzerland',homeCode:'ch',away:'Canada',awayCode:'ca',date:'2026-06-24',time:'07:00 KST',stadium:'Lumen Field (Seattle)'},{number:'M12',home:'Qatar',homeCode:'qa',away:'Bosnia and Herzegovina',awayCode:'ba',date:'2026-06-24',time:'07:00 KST',stadium:'BC Place (Vancouver)'}],
  C:[{number:'M13',home:'Brazil',homeCode:'br',away:'Morocco',awayCode:'ma',date:'2026-06-14',time:'07:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M14',home:'Haiti',homeCode:'ht',away:'Scotland',awayCode:'gb-sct',date:'2026-06-14',time:'10:00 KST',stadium:'Gillette Stadium (Boston)'},{number:'M15',home:'Brazil',homeCode:'br',away:'Haiti',awayCode:'ht',date:'2026-06-20',time:'10:00 KST',stadium:'Lincoln Financial Field (Philadelphia)'},{number:'M16',home:'Morocco',homeCode:'ma',away:'Scotland',awayCode:'gb-sct',date:'2026-06-20',time:'07:00 KST',stadium:'Gillette Stadium (Boston)'},{number:'M17',home:'Scotland',homeCode:'gb-sct',away:'Brazil',awayCode:'br',date:'2026-06-25',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M18',home:'Morocco',homeCode:'ma',away:'Haiti',awayCode:'ht',date:'2026-06-25',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}],
  D:[{number:'M19',home:'United States',homeCode:'us',away:'Paraguay',awayCode:'py',date:'2026-06-15',time:'10:00 KST',stadium:'SoFi Stadium (Los Angeles)'},{number:'M20',home:'Australia',homeCode:'au',away:'Türkiye',awayCode:'tr',date:'2026-06-15',time:'07:00 KST',stadium:'AT&T Stadium (Dallas)'},{number:'M21',home:'United States',homeCode:'us',away:'Australia',awayCode:'au',date:'2026-06-21',time:'10:00 KST',stadium:'SoFi Stadium (Los Angeles)'},{number:'M22',home:'Paraguay',homeCode:'py',away:'Türkiye',awayCode:'tr',date:'2026-06-21',time:'07:00 KST',stadium:'NRG Stadium (Houston)'},{number:'M23',home:'Paraguay',homeCode:'py',away:'Australia',awayCode:'au',date:'2026-06-26',time:'07:00 KST',stadium:'Arrowhead Stadium (Kansas City)'},{number:'M24',home:'United States',homeCode:'us',away:'Türkiye',awayCode:'tr',date:'2026-06-26',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}],
  E:[{number:'M25',home:'Germany',homeCode:'de',away:'Curacao',awayCode:'cw',date:'2026-06-16',time:'07:00 KST',stadium:'AT&T Stadium (Dallas)'},{number:'M26',home:'Ivory Coast',homeCode:'ci',away:'Ecuador',awayCode:'ec',date:'2026-06-16',time:'10:00 KST',stadium:'NRG Stadium (Houston)'},{number:'M27',home:'Germany',homeCode:'de',away:'Ivory Coast',awayCode:'ci',date:'2026-06-22',time:'10:00 KST',stadium:'SoFi Stadium (Los Angeles)'},{number:'M28',home:'Curacao',homeCode:'cw',away:'Ecuador',awayCode:'ec',date:'2026-06-22',time:'07:00 KST',stadium:'AT&T Stadium (Dallas)'},{number:'M29',home:'Ecuador',homeCode:'ec',away:'Germany',awayCode:'de',date:'2026-06-27',time:'07:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M30',home:'Ivory Coast',homeCode:'ci',away:'Curacao',awayCode:'cw',date:'2026-06-27',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'}],
  F:[{number:'M31',home:'Netherlands',homeCode:'nl',away:'Japan',awayCode:'jp',date:'2026-06-17',time:'10:00 KST',stadium:'BC Place (Vancouver)'},{number:'M32',home:'Sweden',homeCode:'se',away:'Tunisia',awayCode:'tn',date:'2026-06-17',time:'07:00 KST',stadium:'BMO Field (Toronto)'},{number:'M33',home:'Netherlands',homeCode:'nl',away:'Tunisia',awayCode:'tn',date:'2026-06-23',time:'10:00 KST',stadium:'BC Place (Vancouver)'},{number:'M34',home:'Japan',homeCode:'jp',away:'Sweden',awayCode:'se',date:'2026-06-23',time:'07:00 KST',stadium:'Lumen Field (Seattle)'},{number:'M35',home:'Japan',homeCode:'jp',away:'Tunisia',awayCode:'tn',date:'2026-06-28',time:'07:00 KST',stadium:"Levi's Stadium (San Francisco)"},{number:'M36',home:'Netherlands',homeCode:'nl',away:'Sweden',awayCode:'se',date:'2026-06-28',time:'07:00 KST',stadium:'SoFi Stadium (Los Angeles)'}],
  G:[{number:'M37',home:'Belgium',homeCode:'be',away:'Egypt',awayCode:'eg',date:'2026-06-18',time:'07:00 KST',stadium:'Lincoln Financial Field (Philadelphia)'},{number:'M38',home:'Iran',homeCode:'ir',away:'New Zealand',awayCode:'nz',date:'2026-06-18',time:'10:00 KST',stadium:'Gillette Stadium (Boston)'},{number:'M39',home:'Belgium',homeCode:'be',away:'Iran',awayCode:'ir',date:'2026-06-24',time:'10:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M40',home:'Egypt',homeCode:'eg',away:'New Zealand',awayCode:'nz',date:'2026-06-24',time:'07:00 KST',stadium:'Lincoln Financial Field (Philadelphia)'},{number:'M41',home:'Iran',homeCode:'ir',away:'Egypt',awayCode:'eg',date:'2026-06-29',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M42',home:'Belgium',homeCode:'be',away:'New Zealand',awayCode:'nz',date:'2026-06-29',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}],
  H:[{number:'M43',home:'Spain',homeCode:'es',away:'Cape Verde',awayCode:'cv',date:'2026-06-19',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M44',home:'Saudi Arabia',homeCode:'sa',away:'Uruguay',awayCode:'uy',date:'2026-06-19',time:'10:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M45',home:'Spain',homeCode:'es',away:'Saudi Arabia',awayCode:'sa',date:'2026-06-25',time:'10:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M46',home:'Uruguay',homeCode:'uy',away:'Cape Verde',awayCode:'cv',date:'2026-06-25',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M47',home:'Uruguay',homeCode:'uy',away:'Spain',awayCode:'es',date:'2026-06-30',time:'07:00 KST',stadium:'AT&T Stadium (Dallas)'},{number:'M48',home:'Cape Verde',homeCode:'cv',away:'Saudi Arabia',awayCode:'sa',date:'2026-06-30',time:'07:00 KST',stadium:'NRG Stadium (Houston)'}],
  I:[{number:'M49',home:'France',homeCode:'fr',away:'Senegal',awayCode:'sn',date:'2026-06-20',time:'07:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M50',home:'Iraq',homeCode:'iq',away:'Norway',awayCode:'no',date:'2026-06-20',time:'10:00 KST',stadium:'Lincoln Financial Field (Philadelphia)'},{number:'M51',home:'France',homeCode:'fr',away:'Iraq',awayCode:'iq',date:'2026-06-26',time:'10:00 KST',stadium:'MetLife Stadium (New York/New Jersey)'},{number:'M52',home:'Senegal',homeCode:'sn',away:'Norway',awayCode:'no',date:'2026-06-26',time:'07:00 KST',stadium:'Gillette Stadium (Boston)'},{number:'M53',home:'Norway',homeCode:'no',away:'France',awayCode:'fr',date:'2026-07-01',time:'07:00 KST',stadium:'Lumen Field (Seattle)'},{number:'M54',home:'Iraq',homeCode:'iq',away:'Senegal',awayCode:'sn',date:'2026-07-01',time:'07:00 KST',stadium:'BC Place (Vancouver)'}],
  J:[{number:'M55',home:'Argentina',homeCode:'ar',away:'Algeria',awayCode:'dz',date:'2026-06-21',time:'07:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M56',home:'Austria',homeCode:'at',away:'Jordan',awayCode:'jo',date:'2026-06-21',time:'10:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M57',home:'Argentina',homeCode:'ar',away:'Austria',awayCode:'at',date:'2026-06-27',time:'10:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M58',home:'Algeria',homeCode:'dz',away:'Jordan',awayCode:'jo',date:'2026-06-27',time:'07:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M59',home:'Jordan',homeCode:'jo',away:'Argentina',awayCode:'ar',date:'2026-07-02',time:'07:00 KST',stadium:'BC Place (Vancouver)'},{number:'M60',home:'Austria',homeCode:'at',away:'Algeria',awayCode:'dz',date:'2026-07-02',time:'07:00 KST',stadium:'SoFi Stadium (Los Angeles)'}],
  K:[{number:'M61',home:'Portugal',homeCode:'pt',away:'Congo DR',awayCode:'cd',date:'2026-06-22',time:'07:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M62',home:'Uzbekistan',homeCode:'uz',away:'Colombia',awayCode:'co',date:'2026-06-22',time:'10:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M63',home:'Portugal',homeCode:'pt',away:'Uzbekistan',awayCode:'uz',date:'2026-06-28',time:'10:00 KST',stadium:'Estadio Azteca (Mexico City)'},{number:'M64',home:'Colombia',homeCode:'co',away:'Congo DR',awayCode:'cd',date:'2026-06-28',time:'07:00 KST',stadium:'Estadio Akron (Guadalajara)'},{number:'M65',home:'Colombia',homeCode:'co',away:'Portugal',awayCode:'pt',date:'2026-07-03',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M66',home:'Congo DR',homeCode:'cd',away:'Uzbekistan',awayCode:'uz',date:'2026-07-03',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}],
  L:[{number:'M67',home:'England',homeCode:'gb-eng',away:'Croatia',awayCode:'hr',date:'2026-06-23',time:'07:00 KST',stadium:'BMO Field (Toronto)'},{number:'M68',home:'Ghana',homeCode:'gh',away:'Panama',awayCode:'pa',date:'2026-06-23',time:'10:00 KST',stadium:'BC Place (Vancouver)'},{number:'M69',home:'England',homeCode:'gb-eng',away:'Ghana',awayCode:'gh',date:'2026-06-29',time:'10:00 KST',stadium:'Lumen Field (Seattle)'},{number:'M70',home:'Croatia',homeCode:'hr',away:'Panama',awayCode:'pa',date:'2026-06-29',time:'07:00 KST',stadium:'SoFi Stadium (Los Angeles)'},{number:'M71',home:'Panama',homeCode:'pa',away:'England',awayCode:'gb-eng',date:'2026-07-04',time:'07:00 KST',stadium:'Hard Rock Stadium (Miami)'},{number:'M72',home:'Croatia',homeCode:'hr',away:'Ghana',awayCode:'gh',date:'2026-07-04',time:'07:00 KST',stadium:'Mercedes-Benz Stadium (Atlanta)'}]
};

const knockoutTemplates = {
  round32:[
    ['M73 A조 2위 vs B조 2위'],
    ['M74 E조 1위 vs A/B/C/D/F조 3위'],
    ['M75 F조 1위 vs C조 2위'],
    ['M76 C조 1위 vs F조 2위'],
    ['M77 I조 1위 vs C/D/F/G/H조 3위'],
    ['M78 E조 2위 vs I조 2위'],
    ['M79 A조 1위 vs C/E/F/H/I조 3위'],
    ['M80 L조 1위 vs E/H/I/J/K조 3위'],
    ['M81 D조 1위 vs B/E/F/I/J조 3위'],
    ['M82 G조 1위 vs A/E/H/I/J조 3위'],
    ['M83 K조 2위 vs L조 2위'],
    ['M84 H조 1위 vs J조 2위'],
    ['M85 B조 1위 vs E/F/G/I/J조 3위'],
    ['M86 J조 1위 vs H조 2위'],
    ['M87 K조 1위 vs D/E/I/J/L조 3위'],
    ['M88 D조 2위 vs G조 2위']
  ],
  round16:[
    ['M89 승자 M74 vs 승자 M77'],
    ['M90 승자 M73 vs 승자 M75'],
    ['M91 승자 M76 vs 승자 M78'],
    ['M92 승자 M79 vs 승자 M80'],
    ['M93 승자 M83 vs 승자 M84'],
    ['M94 승자 M81 vs 승자 M82'],
    ['M95 승자 M86 vs 승자 M88'],
    ['M96 승자 M85 vs 승자 M87']
  ],
  quarterfinal:[
    ['M97 승자 M89 vs 승자 M90'],
    ['M98 승자 M93 vs 승자 M94'],
    ['M99 승자 M91 vs 승자 M92'],
    ['M100 승자 M95 vs 승자 M96']
  ],
  semifinal:[
    ['M101 승자 M97 vs 승자 M98'],
    ['M102 승자 M99 vs 승자 M100']
  ],
  final:[['M104 승자 M101 vs 승자 M102']]
};

const knockoutSchedule = {
  M73:{date:'2026-06-29',time:'04:00 KST',stadium:'Los Angeles Stadium'},
  M74:{date:'2026-06-30',time:'05:30 KST',stadium:'Boston Stadium'},
  M75:{date:'2026-06-30',time:'10:00 KST',stadium:'Monterrey Stadium'},
  M76:{date:'2026-06-30',time:'02:00 KST',stadium:'Houston Stadium'},
  M77:{date:'2026-07-01',time:'06:00 KST',stadium:'New York New Jersey Stadium'},
  M78:{date:'2026-07-01',time:'02:00 KST',stadium:'Dallas Stadium'},
  M79:{date:'2026-07-01',time:'10:00 KST',stadium:'Mexico City Stadium'},
  M80:{date:'2026-07-02',time:'01:00 KST',stadium:'Atlanta Stadium'},
  M81:{date:'2026-07-02',time:'09:00 KST',stadium:'San Francisco Bay Area Stadium'},
  M82:{date:'2026-07-02',time:'05:00 KST',stadium:'Seattle Stadium'},
  M83:{date:'2026-07-03',time:'08:00 KST',stadium:'Toronto Stadium'},
  M84:{date:'2026-07-03',time:'04:00 KST',stadium:'Los Angeles Stadium'},
  M85:{date:'2026-07-03',time:'12:00 KST',stadium:'BC Place Vancouver'},
  M86:{date:'2026-07-04',time:'07:00 KST',stadium:'Miami Stadium'},
  M87:{date:'2026-07-04',time:'10:30 KST',stadium:'Kansas City Stadium'},
  M88:{date:'2026-07-04',time:'03:00 KST',stadium:'Dallas Stadium'},
  M89:{date:'2026-07-05',time:'06:00 KST',stadium:'Philadelphia Stadium'},
  M90:{date:'2026-07-05',time:'02:00 KST',stadium:'Houston Stadium'},
  M91:{date:'2026-07-06',time:'05:00 KST',stadium:'New York New Jersey Stadium'},
  M92:{date:'2026-07-06',time:'09:00 KST',stadium:'Mexico City Stadium'},
  M93:{date:'2026-07-07',time:'04:00 KST',stadium:'Dallas Stadium'},
  M94:{date:'2026-07-07',time:'09:00 KST',stadium:'Seattle Stadium'},
  M95:{date:'2026-07-08',time:'01:00 KST',stadium:'Atlanta Stadium'},
  M96:{date:'2026-07-08',time:'05:00 KST',stadium:'BC Place Vancouver'},
  M97:{date:'2026-07-10',time:'05:00 KST',stadium:'Boston Stadium'},
  M98:{date:'2026-07-11',time:'04:00 KST',stadium:'Los Angeles Stadium'},
  M99:{date:'2026-07-12',time:'06:00 KST',stadium:'Miami Stadium'},
  M100:{date:'2026-07-12',time:'10:00 KST',stadium:'Kansas City Stadium'},
  M101:{date:'2026-07-15',time:'04:00 KST',stadium:'Dallas Stadium'},
  M102:{date:'2026-07-16',time:'04:00 KST',stadium:'Atlanta Stadium'},
  M104:{date:'2026-07-20',time:'04:00 KST',stadium:'New York New Jersey Stadium'}
};

const squads = {
  korea:[{position:'GK',number:1,name:'김승규',club:'알샤밥',age:34,injury:'-'},{position:'GK',number:21,name:'조현우',club:'울산 HD',age:33,injury:'-'},{position:'GK',number:23,name:'송범근',club:'쇼난 벨마레',age:28,injury:'-'},{position:'DF',number:4,name:'김민재',club:'바이에른 뮌헨',age:29,injury:'-'},{position:'DF',number:19,name:'김영권',club:'울산 HD',age:36,injury:'-'},{position:'DF',number:3,name:'김진수',club:'전북 현대',age:33,injury:'-'},{position:'DF',number:2,name:'이기제',club:'수원 삼성',age:32,injury:'-'},{position:'DF',number:15,name:'김문환',club:'전북 현대',age:30,injury:'-'},{position:'MF',number:7,name:'손흥민',club:'토트넘',age:33,injury:'경미한 부상'},{position:'MF',number:10,name:'이강인',club:'파리 생제르맹',age:25,injury:'-'},{position:'MF',number:6,name:'황인범',club:'즈베즈다',age:30,injury:'-'},{position:'FW',number:9,name:'황희찬',club:'울버햄튼',age:30,injury:'햄스트링'},{position:'FW',number:18,name:'조규성',club:'미트윌란',age:28,injury:'-'}],
  mexico:[{position:'GK',number:23,name:'Raúl Rangel',club:'Guadalajara',age:'-',injury:'-'},{position:'GK',number:'-',name:'Guillermo Ochoa',club:'AEL Limassol',age:'-',injury:'-'},{position:'GK',number:12,name:'Carlos Acevedo',club:'Santos Laguna',age:'-',injury:'-'},{position:'DF',number:2,name:'Jorge Sánchez',club:'PAOK',age:'-',injury:'-'},{position:'DF',number:'-',name:'Richard Ledezma',club:'Chivas',age:'-',injury:'-'},{position:'DF',number:5,name:'Johan Vásquez',club:'Genoa FC',age:'-',injury:'-'},{position:'DF',number:3,name:'César Montes',club:'Lokomotiv Moscú',age:'-',injury:'-'},{position:'DF',number:4,name:'Jesús Angulo',club:'Tigres',age:'-',injury:'-'},{position:'DF',number:19,name:'Israel Reyes',club:'América',age:'-',injury:'-'},{position:'DF',number:'-',name:'Everardo López',club:'Toluca',age:'-',injury:'-'},{position:'DF',number:'-',name:'Jesús Gallardo',club:'Toluca',age:'-',injury:'-'},{position:'MF',number:6,name:'Erik Lira',club:'Cruz Azul',age:'-',injury:'-'},{position:'MF',number:'-',name:'Denzell García',club:'FC Juárez',age:'-',injury:'-'},{position:'MF',number:8,name:'Carlos Rodríguez',club:'Cruz Azul',age:'-',injury:'-'},{position:'MF',number:17,name:'Orbelín Pineda',club:'AEK Athens',age:'-',injury:'-'},{position:'MF',number:'-',name:'Obed Vargas',club:'Atlético de Madrid',age:'-',injury:'-'},{position:'MF',number:'-',name:'Brian Gutiérrez',club:'Chivas',age:'-',injury:'-'},{position:'MF',number:14,name:'Erick Sánchez',club:'América',age:'-',injury:'-'},{position:'MF',number:'-',name:'Álvaro Fidalgo',club:'Real Betis',age:'-',injury:'-'},{position:'MF',number:25,name:'Roberto Alvarado',club:'Guadalajara',age:'-',injury:'-'},{position:'FW',number:9,name:'Julián Quiñones',club:'Al-Qadsiah',age:'-',injury:'-'},{position:'FW',number:10,name:'Alexis Vega',club:'Toluca',age:'-',injury:'-'},{position:'FW',number:7,name:'Germán Berterame',club:'Inter Miami',age:'-',injury:'-'},{position:'FW',number:22,name:'Guillermo Martínez',club:'Club Universidad Nacional',age:'-',injury:'-'},{position:'FW',number:'-',name:'Armando González',club:'Chivas',age:'-',injury:'-'},{position:'FW',number:'-',name:'Raúl Jiménez',club:'Fulham FC',age:'-',injury:'-'}],
  southAfrica:[{position:'GK',number:1,name:'Ronwen Williams',club:'Mamelodi Sundowns',age:34,injury:'-'},{position:'GK',number:16,name:'Ricardo Goss',club:'SuperSport United',age:31,injury:'-'},{position:'GK',number:23,name:'Veli Mothwa',club:'AmaZulu',age:34,injury:'-'},{position:'DF',number:20,name:'Khuliso Mudau',club:'Mamelodi Sundowns',age:30,injury:'-'},{position:'DF',number:14,name:'Grant Kekana',club:'Mamelodi Sundowns',age:32,injury:'-'},{position:'DF',number:3,name:'Mothobi Mvala',club:'Mamelodi Sundowns',age:30,injury:'-'},{position:'DF',number:5,name:'Siyanda Xulu',club:'Richards Bay',age:33,injury:'-'},{position:'DF',number:2,name:'Nyiko Mobbie',club:'Sekhukhune United',age:30,injury:'-'},{position:'MF',number:4,name:'Teboho Mokoena',club:'Mamelodi Sundowns',age:29,injury:'-'},{position:'MF',number:8,name:'Sphephelo Sithole',club:'Tondela',age:27,injury:'-'},{position:'MF',number:10,name:'Themba Zwane',club:'Mamelodi Sundowns',age:36,injury:'-'},{position:'MF',number:15,name:'Bathusi Aubaas',club:'TS Galaxy',age:30,injury:'-'},{position:'FW',number:11,name:'Percy Tau',club:'Qatar SC',age:32,injury:'-'},{position:'FW',number:9,name:'Evidence Makgopa',club:'Orlando Pirates',age:25,injury:'-'},{position:'FW',number:17,name:'Lyle Foster',club:'Burnley',age:25,injury:'-'}],
  czech:[{position:'GK',number:'-',name:'Lukáš Horníček',club:'Braga SC',age:23,injury:'-'},{position:'GK',number:'-',name:'Vítězslav Jaroš',club:'AFC Ajax',age:24,injury:'-'},{position:'GK',number:'-',name:'Martin Jedlička',club:'FC Baník Ostrava',age:28,injury:'-'},{position:'GK',number:'-',name:'Antonín Kinský',club:'Tottenham Hotspur FC',age:22,injury:'-'},{position:'GK',number:'-',name:'Matěj Kovář',club:'PSV Eindhoven',age:25,injury:'-'},{position:'GK',number:'-',name:'Jakub Markovič',club:'SK Slavia Praha',age:24,injury:'-'},{position:'GK',number:'-',name:'Jindřich Staněk',club:'SK Slavia Praha',age:29,injury:'-'},{position:'GK',number:'-',name:'Tomáš Vaclík',club:'-',age:36,injury:'-'},{position:'DF',number:'-',name:'Jan Bořil',club:'SK Slavia Praha',age:35,injury:'-'},{position:'DF',number:'-',name:'Martin Cedidla',club:'FK Jablonec',age:24,injury:'-'},{position:'DF',number:'-',name:'Vladimír Coufal',club:'TSG 1899 Hoffenheim',age:33,injury:'-'},{position:'DF',number:'-',name:'David Douděra',club:'SK Slavia Praha',age:27,injury:'-'},{position:'DF',number:'-',name:'Adam Gabriel',club:'FC Midtjylland',age:24,injury:'-'},{position:'DF',number:'-',name:'Milan Havel',club:'Bohemians Praha 1905',age:31,injury:'-'},{position:'DF',number:'-',name:'Tomáš Holeš',club:'SK Slavia Praha',age:32,injury:'-'},{position:'DF',number:'-',name:'Robin Hranáč',club:'TSG 1899 Hoffenheim',age:26,injury:'-'},{position:'DF',number:'-',name:'Václav Jemelka',club:'FC Viktoria Plzeň',age:30,injury:'-'},{position:'DF',number:'-',name:'David Jurásek',club:'SK Slavia Praha',age:25,injury:'-'},{position:'DF',number:'-',name:'Ladislav Krejčí',club:'Wolverhampton Wanderers FC',age:26,injury:'-'},{position:'DF',number:'-',name:'Matěj Ryneš',club:'AC Sparta Praha',age:24,injury:'-'},{position:'DF',number:'-',name:'Patrizio Stronati',club:'Újpest FC',age:31,injury:'-'},{position:'DF',number:'-',name:'Martin Vitík',club:'Bologna FC 1909',age:23,injury:'-'},{position:'DF',number:'-',name:'Tomáš Vlček',club:'SK Slavia Praha',age:25,injury:'-'},{position:'DF',number:'-',name:'Jaroslav Zelený',club:'AC Sparta Praha',age:33,injury:'-'},{position:'DF',number:'-',name:'David Zima',club:'SK Slavia Praha',age:25,injury:'-'},{position:'MF',number:'-',name:'Antonín Barák',club:'UC Sampdoria',age:31,injury:'-'},{position:'MF',number:'-',name:'Michal Beran',club:'SK Sigma Olomouc',age:25,injury:'-'},{position:'MF',number:'-',name:'Václav Černý',club:'Beşiktaş JK',age:28,injury:'-'},{position:'MF',number:'-',name:'Lukáš Červ',club:'FC Viktoria Plzeň',age:24,injury:'-'},{position:'MF',number:'-',name:'Matěj Jurásek',club:'Norwich City FC',age:22,injury:'-'},{position:'MF',number:'-',name:'Lukáš Kalvach',club:'Katar SC',age:30,injury:'-'},{position:'MF',number:'-',name:'Adam Karabec',club:'Olympique Lyon',age:22,injury:'-'},{position:'MF',number:'-',name:'Alex Král',club:'1. FC Union Berlín',age:27,injury:'-'},{position:'MF',number:'-',name:'Ondřej Lingr',club:'Houston Dynamo FC',age:27,injury:'-'},{position:'MF',number:'-',name:'Lukáš Provod',club:'SK Slavia Praha',age:29,injury:'-'},{position:'MF',number:'-',name:'Michal Sadílek',club:'SK Slavia Praha',age:26,injury:'-'},{position:'MF',number:'-',name:'Tomáš Souček',club:'West Ham United FC',age:31,injury:'-'},{position:'MF',number:'-',name:'Petr Ševčík',club:'SK Slavia Praha',age:31,injury:'-'},{position:'MF',number:'-',name:'Pavel Šulc',club:'Olympique Lyon',age:25,injury:'-'},{position:'MF',number:'-',name:'Filip Zorvan',club:'FK Jablonec',age:29,injury:'-'},{position:'FW',number:'-',name:'Adam Hložek',club:'TSG 1899 Hoffenheim',age:23,injury:'-'},{position:'FW',number:'-',name:'Tomáš Chorý',club:'SK Slavia Praha',age:31,injury:'-'},{position:'FW',number:'-',name:'Jan Chramosta',club:'FK Jablonec',age:35,injury:'-'},{position:'FW',number:'-',name:'Mojmír Chytil',club:'SK Slavia Praha',age:26,injury:'-'},{position:'FW',number:'-',name:'Jan Kuchta',club:'AC Sparta Praha',age:29,injury:'-'},{position:'FW',number:'-',name:'Vasil Kušej',club:'SK Slavia Praha',age:25,injury:'-'},{position:'FW',number:'-',name:'Patrik Schick',club:'Bayer 04 Leverkusen',age:30,injury:'-'},{position:'FW',number:'-',name:'Matěj Vydra',club:'FC Viktoria Plzeň',age:33,injury:'-'}]
};

const squadState = {
  korea:{filter:'ALL',page:1,title:'대한민국 선수단'},
  mexico:{filter:'ALL',page:1,title:'멕시코 선수단'},
  southAfrica:{filter:'ALL',page:1,title:'남아프리카 공화국 선수단'},
  czech:{filter:'ALL',page:1,title:'체코 선수단'}
};

let playerPhotoSources = null;
function getPlayerPhotoSources(){
  if(playerPhotoSources) return playerPhotoSources;
  playerPhotoSources = {
  '김승규':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033002482776350.jpg',
  '조현우':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033002485565852.jpg',
  '송범근':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_202603300248414837.jpg',
  '김민재':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033002493130268.jpg',
  '김문환':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033002491758049.jpg',
  '손흥민':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033003005698673.jpg',
  '이강인':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033002590071347.jpg',
  '황희찬':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033003004298993.jpg',
  '조규성':'https://files.joinkfa.com/NAT/2026/PHOTO/S/%EC%82%AC%EC%A7%84_2026033003013091712.jpg',
  'Guillermo Ochoa':'https://media.miseleccion.mx/MISELECCION/MSMX_23353.png',
  'César Montes':'https://media.miseleccion.mx/MISELECCION/MSMX_22838.png',
  'Jorge Sánchez':'https://media.miseleccion.mx/MISELECCION/MSMX_23354.png',
  'Jesús Gallardo':'https://media.miseleccion.mx/MISELECCION/MSMX_22843.png',
  'Johan Vásquez':'https://media.miseleccion.mx/MISELECCION/MSMX_22848.png',
  'Orbelín Pineda':'https://media.miseleccion.mx/MISELECCION/MSMX_22850.png',
  'Raúl Jiménez':'https://media.miseleccion.mx/MISELECCION/MSMX_22857.png',
  'Ronwen Williams':'https://sundownsfc.co.za/wp-content/uploads/2025/09/Williams-1.jpg',
  'Khuliso Mudau':'https://sundownsfc.co.za/wp-content/uploads/2020/12/Profile-Image-Mudau-1.jpg',
  'Grant Kekana':'https://sundownsfc.co.za/wp-content/uploads/2023/12/Kekana.jpg',
  'Mothobi Mvala':'https://sundownsfc.co.za/wp-content/uploads/2025/09/Mvala-1.jpg',
  'Teboho Mokoena':'https://sundownsfc.co.za/wp-content/uploads/2023/12/Mokoena.jpg',
  'Themba Zwane':'https://sundownsfc.co.za/wp-content/uploads/2023/12/Zwane.jpg',
  'Bathusi Aubaas':'https://sundownsfc.co.za/wp-content/uploads/2020/12/Profile-Image-Aubaas.jpg',
  'Evidence Makgopa':'https://www.orlandopiratesfc.com/storage/2025/08/Evidence-Makgopa-player-headshots-home-opfc-DSC-1015-out.webp',
  'Tomáš Souček':'https://contentfulproxy.stadion.io/zl2jjr3puakk/7AwsqlyAYRyV6oOzPPXng7/20208558b62081139dc9f1cec79e1515/p215439_-_Graphics__Player_Assets__HOME_Personality_All_Originals_m782225.png?f=face&fit=fill&fm=webp&h=2048&w=2048',
  'Vladimír Coufal':'https://cdn.whufc.com/sites/default/files/inline-images/Vladimir-Coufal726.jpg',
  'Patrik Schick':'https://b04-ep-media-prod.azureedge.net/pickerimages/crop_20230219_JS_B04_M05_2765_503655_M.jpg',
  'Adam Hložek':'https://b04-ep-media-prod.azureedge.net/pickerimages/crop_20220527_NB_Adam_Hlozek_37641_435464_M.jpg'
  };
  return playerPhotoSources;
}

let playerPhotoTitles = null;
function getPlayerPhotoTitles(){
  if(playerPhotoTitles) return playerPhotoTitles;
  playerPhotoTitles = {
  '김승규':'Kim Seung-gyu',
  '조현우':'Jo Hyeon-woo',
  '송범근':'Song Bum-keun',
  '김민재':'Kim Min-jae (footballer, born 1996)',
  '김영권':'Kim Young-gwon',
  '김진수':'Kim Jin-su (footballer)',
  '이기제':'Lee Ki-je',
  '김문환':'Kim Moon-hwan',
  '손흥민':'Son Heung-min',
  '이강인':'Lee Kang-in',
  '황인범':'Hwang In-beom',
  '황희찬':'Hwang Hee-chan',
  '조규성':'Cho Gue-sung',
  'Guillermo Ochoa':'Guillermo Ochoa',
  'Raúl Rangel':'Raúl Rangel',
  'Carlos Acevedo':'Carlos Acevedo',
  'Luis Malagón':'Luis Malagón',
  'Julio González':'Julio González (footballer, born 1991)',
  'César Montes':'César Montes',
  'Héctor Moreno':'Héctor Moreno',
  'Jorge Sánchez':'Jorge Sánchez (footballer, born 1997)',
  'Richard Ledezma':'Richard Ledezma',
  'Jesús Angulo':'Jesús Angulo',
  'Israel Reyes':'Israel Reyes Romero',
  'Everardo López':'Everardo López',
  'Jesús Gallardo':'Jesús Gallardo',
  'Johan Vásquez':'Johan Vásquez',
  'Edson Álvarez':'Edson Álvarez',
  'Luis Chávez':'Luis Chávez (footballer, born 1996)',
  'Erik Lira':'Erik Lira',
  'Denzell García':'Denzell García',
  'Carlos Rodríguez':'Carlos Rodríguez (footballer, born 1997)',
  'Orbelín Pineda':'Orbelín Pineda',
  'Obed Vargas':'Obed Vargas',
  'Brian Gutiérrez':'Brian Gutiérrez',
  'Erick Sánchez':'Erick Sánchez',
  'Álvaro Fidalgo':'Álvaro Fidalgo',
  'Roberto Alvarado':'Roberto Alvarado',
  'Julián Quiñones':'Julián Quiñones',
  'Alexis Vega':'Alexis Vega',
  'Germán Berterame':'Germán Berterame',
  'Guillermo Martínez':'Guillermo Martínez Ayala',
  'Armando González':'Armando González',
  'Luis Romo':'Luis Romo',
  'Raúl Jiménez':'Raúl Jiménez',
  'Hirving Lozano':'Hirving Lozano',
  'Henry Martín':'Henry Martín',
  'Ronwen Williams':'Ronwen Williams',
  'Ricardo Goss':'Ricardo Goss',
  'Veli Mothwa':'Veli Mothwa',
  'Khuliso Mudau':'Khuliso Mudau',
  'Grant Kekana':'Grant Kekana',
  'Mothobi Mvala':'Mothobi Mvala',
  'Siyanda Xulu':'Siyanda Xulu',
  'Nyiko Mobbie':'Nyiko Mobbie',
  'Teboho Mokoena':'Teboho Mokoena (footballer)',
  'Sphephelo Sithole':'Sphephelo Sithole',
  'Themba Zwane':'Themba Zwane',
  'Bathusi Aubaas':'Bathusi Aubaas',
  'Percy Tau':'Percy Tau',
  'Evidence Makgopa':'Evidence Makgopa',
  'Lyle Foster':'Lyle Foster',
  'Lukáš Horníček':'Lukáš Horníček',
  'Vítězslav Jaroš':'Vítězslav Jaroš',
  'Martin Jedlička':'Martin Jedlička',
  'Antonín Kinský':'Antonín Kinský',
  'Matěj Kovář':'Matěj Kovář',
  'Jakub Markovič':'Jakub Markovič',
  'Jindřich Staněk':'Jindřich Staněk',
  'Jan Bořil':'Jan Bořil',
  'Martin Cedidla':'Martin Cedidla',
  'David Douděra':'David Douděra',
  'Adam Gabriel':'Adam Gabriel',
  'Milan Havel':'Milan Havel',
  'Robin Hranáč':'Robin Hranáč',
  'Václav Jemelka':'Václav Jemelka',
  'David Jurásek':'David Jurásek',
  'Ladislav Krejčí':'Ladislav Krejčí',
  'Matěj Ryneš':'Matěj Ryneš',
  'Patrizio Stronati':'Patrizio Stronati',
  'Martin Vitík':'Martin Vitík',
  'Tomáš Vlček':'Tomáš Vlček',
  'Jaroslav Zelený':'Jaroslav Zelený',
  'Michal Beran':'Michal Beran',
  'Lukáš Červ':'Lukáš Červ',
  'Matěj Jurásek':'Matěj Jurásek',
  'Lukáš Kalvach':'Lukáš Kalvach',
  'Adam Karabec':'Adam Karabec',
  'Alex Král':'Alex Král',
  'Ondřej Lingr':'Ondřej Lingr',
  'Michal Sadílek':'Michal Sadílek',
  'Petr Ševčík':'Petr Ševčík',
  'Pavel Šulc':'Pavel Šulc',
  'Filip Zorvan':'Filip Zorvan',
  'Jiří Pavlenka':'Jiří Pavlenka',
  'Tomáš Vaclík':'Tomáš Vaclík',
  'Vladimír Coufal':'Vladimír Coufal',
  'David Zima':'David Zima',
  'Tomáš Holeš':'Tomáš Holeš',
  'Jakub Brabec':'Jakub Brabec',
  'Tomáš Souček':'Tomáš Souček',
  'Václav Černý':'Václav Černý',
  'Lukáš Provod':'Lukáš Provod',
  'Antonín Barák':'Antonín Barák',
  'Patrik Schick':'Patrik Schick',
  'Adam Hložek':'Adam Hložek',
  'Jan Kuchta':'Jan Kuchta',
  'Tomáš Chorý':'Tomáš Chorý',
  'Jan Chramosta':'Jan Chramosta',
  'Mojmír Chytil':'Mojmír Chytil',
  'Vasil Kušej':'Vasil Kušej',
  'Matěj Vydra':'Matěj Vydra'
  };
  return playerPhotoTitles;
}
const playerPhotoCache = Object.create(null);
const renderCache = {
  newsTables:Object.create(null),
  knockoutTables:Object.create(null),
  groupViews:Object.create(null),
  squadViews:Object.create(null),
  equipmentSharedTable:'',
  equipmentPersonalTables:Object.create(null),
  mexicoStadiumDetails:Object.create(null),
  timelineHeader:''
};
let newsData = null;
function normalizeNewsDate(dateValue, fallbackYear=''){
  const raw=String(dateValue||'').trim();
  if(!raw) return raw;
  if(/^\d{4}\.\d{2}\.\d{2}$/.test(raw)) return raw;
  const sanitized=raw.replace(/\s+/g,'').replace(/월/g,'.').replace(/일/g,'');
  if(/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(sanitized)){
    const [year,month,day]=sanitized.split('.');
    return `${year}.${month.padStart(2,'0')}.${day.padStart(2,'0')}`;
  }
  if(/^\d{1,2}\.\d{1,2}$/.test(sanitized)&&fallbackYear){
    const [month,day]=sanitized.split('.');
    return `${fallbackYear}.${month.padStart(2,'0')}.${day.padStart(2,'0')}`;
  }
  return raw;
}
function getNewsData(){
  if(newsData) return newsData;
  newsData = {
  "2022": {
    "KBS": [{"date":"2022.08.13","title":"카타르 월드컵 100일 앞으로…미리 가 본 베이스 캠프 | KBS 뉴스","link":"","analysis":"카타르 월드컵 D-100일, 취재진들이 미리 가 본 베이스 캠프 sk"},{"date":"2022.09.19","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5559214","analysis":"월드컵때 입을 유니폼 공개  행사 sk"},{"date":"2022.09.20","title":"[뉴스 더하기] 카타르 월드컵 ‘두 달 앞으로’","link":"","analysis":"카타르 월드컵 D-61 ‘두 달 앞으로’ 대표팀 활약 기대, 허정무 전 국가대표 감독 int"},{"date":"2022.09.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5560394","analysis":"본격적인 훈련 돌입, 손흥민 선수 int"},{"date":"2022.09.29","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5567243","analysis":"카타르 월드컵 기념스티커 구매 열풍, 일반리포트"},{"date":"2022.10.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5584260","analysis":"2002 영웅 히딩크 한국 방문 int"},{"date":"2022.10.27","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5588406","analysis":"중동 첫 월드컵 D-30 현지 월드컵 분위기, 특파원 MNG"},{"date":"2022.11.13","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600316","analysis":"컨테이너 숙박대란, 공사중인 숙박 시설물 sk"},{"date":"2022.11.13","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600336","analysis":"경기장과의 거리가 짧아서 하루에 여러 경기 관전 가능, 경기장 인근 sk "},{"date":"2022.11.14","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600401","analysis":"축구대표팀 카타르월드컵 출발, 인천공항 단체촬영sk 및 int"},{"date":"2022.11.14","title":"축구대표팀 드디어 결전지 입성…경기장도 준비 완료","link":"","analysis":"도하에 착륙 후 버스에 탑승하기 전 국가대표팀들 int"},{"date":"2022.11.15","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5602120","analysis":"월드컵 첫 상대팀 우르과이, 아부다비에서 비공개 훈련 취재진 진입 차단."},{"date":"2022.11.19","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5605413","analysis":"해외 노동자들의 열악한 환경 취재, 촬영장비 꺼낼때마다 촬영 제지, 제지당하는 덴마크 언론사 자료확보, 취재기자std"},{"date":"2022.11.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5605820","analysis":"잘 곳이 없는 카타르 월드컵, 완공도 안된 컨테이너 숙박 취재"},{"date":"2022.11.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5606444","analysis":"벤투호 경기장 첫 답사 잔디 상태 집중 점검, 훈련sk 우르과이선수 기자회견sync"},{"date":"2022.11.24","title":"“도하에서도 대한민국!” 붉은 악마·교민, 응원전도 준비 완료 | KBS 뉴스","link":"","analysis":"붉은 악마·교민, 응원전 취재, 기자std 거리응원 시민int"},{"date":"2022.11.25","title":"[월드컵 영상] 전 세계가 놀란 한국의 응원 패션 ‘와~와~와우~’ | KBS 뉴스","link":"","analysis":"[월드컵 영상] 전 세계가 놀란 한국의 응원 패션"},{"date":"2022.11.25","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5610315","analysis":"카타르 현장에서 우리나라 선수들을 응원하는 응원단을 포커스를 둠"},{"date":"2022.11.17","title":"손흥민 \"잊지 못할 월드컵 만들겠다\"...벤투호 최종 엔트리 평가 및 카타르 월드컵 현지 상황 [사사건건 플러스]","link":"","analysis":"손흥민 \"잊지 못할 월드컵 만들겠다\" 손흥민 카타르공항 입성sk, 교민 현장 연결int, 국가대표훈련sk"},{"date":"2022.11.22","title":"","link":"https://www.youtube.com/watch?v=7HP8tyllzdw","analysis":"행사장 치안 문제? 인종차별 반대 퍼포먼스? 논란 속 카타르 월드컵, 경기장 외부 행사sk, 문제의 현장연결 영상 활용"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611280","analysis":"카타르에 부족한 숙박, 까다로운규정에 두바이로 몰린 축구팬들 sk 및 축구팬 int, 기자std"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611577","analysis":"‘욱일기 응원 논란’ 일본, 욱일기 들고 있는 일본 축구팬 자료사진 활용"},{"date":"2022.11.28","title":"카타르 월드컵에도 부는 ‘한류 바람’…다같이 “대한민국” | KBS 뉴스","link":"","analysis":"카타르 월드컵에도 부는 ‘한류 바람’, 카타르 코니시 해변에 자리 잡은 우리나라 홍보관sk, 북적거리는 인파sk"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611717","analysis":"‘문어’ 이영표의 가나전 해법…“역습, 초조해질 때까지 기다려라!” 이영표 전 국가대표 int"},{"date":"2022.11.30","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5613325","analysis":"[크랩] “건강한 일주일이 주어진다면 강인이 경기를 직접 보고 싶다” 이강인 선수 int (과거 자료 활용)"},{"date":"2022.12.05","title":"","link":"https://www.youtube.com/watch?v=cJf0hm8fCj8","analysis":"손흥민과 네이마르 에이스 맞대결, 네이마르int 자료화면, 브라질 현지기자 int"}],
    "MBC": [{"date":"8.24","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6401344_35744.html","analysis":"우승트로피 월드투어 및 감독 및 은퇴선수 인터뷰 / 우승트로피 월드 투어 행사. 행사 기본 스케치 및 인터뷰"},{"date":"9.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6407413_35744.html","analysis":"이강인 대표팀 발탁 / 이강인 스페인 영상 및 대표팀 영상 "},{"date":"9.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409265_35744.html","analysis":"새 유니폼 공개 / 새 유니폼 공개 행사. 행사 기본 스케치 및 인터뷰"},{"date":"9.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409263_35744.html","analysis":"손흥민 대표팀 합류 / 손흥민 EPL 영상 이외 NFC훈련장 입성 스케치 및 인터뷰"},{"date":"9월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409643_35744.html","analysis":"손흥민 이강인 위주 대표팀 훈련 스케치 / 대표팀 훈련 스케치 위주 손흥민 공식인터뷰 "},{"date":"9.21","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410010_35744.html","analysis":"평가전 앞두고 대표팀 훈련 이강인 / 대표팀 훈련 스케치 위주 이강인 공식인터뷰 유튜브 활용 "},{"date":"9.22","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410382_35744.html","analysis":"평가전 앞두고 대표팀 훈련 벤투 / 대표팀 훈련 스케치 위주 벤투 공식인터뷰 유튜브 활용 "},{"date":"9.22","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410381_35744.html","analysis":"평가전 앞두고 대표팀 훈련 김민재 / 대표팀 훈련, 소속팀 경기영상 위주 김민재 공식 인터뷰 활용"},{"date":"9.23","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410750_35744.html","analysis":"코스타리카 평가전 / 경기전 분위기, 관중 스케치 인터뷰, 경기영상"},{"date":"9.24","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410927_35744.html","analysis":"전날 코스타리카 평가전   / 경기 중계 영상, 경기 후 인터뷰 "},{"date":"9.26","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6411459_35744.html","analysis":"마지막 대표팀 훈련 이강인  / 훈련 영상 벤투 공식 인터뷰"},{"date":"9.27","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6411836_35744.html","analysis":"카메룬 평가전 / 관중 인터뷰 영상 위주"},{"date":"9.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6412226_35744.html","analysis":"전날 카메룬 평가전 벤투 이강인 / 중계영상이 아닌 이강인 ENG 영상, 훈련 영상 벤투 공식 인터뷰"},{"date":"9.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6412225_35744.html","analysis":"전날 카메룬 평가전 분석 / 중계 영상과 공식 인터뷰 및 개별 인터뷰 "},{"date":"10.21","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6419486_35744.html","analysis":"유럽파 제외 국내파 소집 / 국내 경기영상 및 훈련영상 위주"},{"date":"10.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6421761_35744.html","analysis":"최종 평가전 마지막 소집 / 훈련 영상 벤투 공식 인터뷰"},{"date":"11.2","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423262_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상 과 전날 선수들 훈련 공식 인터뷰"},{"date":"11.2","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423261_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상"},{"date":"11.3","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423596_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상"},{"date":"11.3","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423597_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상 "},{"date":"11.4","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423937_35744.html","analysis":"최종 평가전 손흥민 수술 및 거리응원 취소 / 소속팀 리그 영상 및 예전 거리응원 자료영상"},{"date":"11.5","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6424093_35744.html","analysis":"최종 평가전 손흥민 수술 / 소속팀 리그 영상 과 선수들 훈련 공식 인터뷰"},{"date":"11.8","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425036_35744.html","analysis":"최종명단 발표 D-4 / 훈련 영상 및 현장 이벤트 스케치"},{"date":"11.9","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425403_35744.html","analysis":"손준호 / 소속팀 및 국가대표 영상 과 훈련영상"},{"date":"11월 10일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425776_35744.html","analysis":"최종 평가전 소집 손흥민 발탁 여부 / 과거 평가전 과 훈련영상 벤투 공식 인터뷰"},{"date":"11월 10일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425775_35744.html","analysis":"최종 평가전 앞두고 손흥민  / 모든 손흥민 영상 및 인터뷰 짜집기"},{"date":"11.11","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426139_35744.html","analysis":"같은 조 상대팀 최종명단 발표 / 각국 최종명단 공식 영상 활용"},{"date":"11.11","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426138_35744.html","analysis":"최종평가전 및 최종명단 발표 D-1 / 이전 평가전 영상 활용"},{"date":"11.12","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426302_35744.html","analysis":"최종명단 발표  / 최종명단 공식영상 과 현장 벤투 인터뷰 "},{"date":"11.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426479_35744.html","analysis":"대표팀 출국 (도하) 현지 스케치 및 경기장 스케치 / 현지 숙박시설 스케치 및 기자 스탠드업"},{"date":"11.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426478_35744.html","analysis":"수술 후 손흥민 / sns 와 제보 영상, 김민재 소속팀 영상 활용"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426875_35744.html","analysis":"[스포츠 영상]카타르 대표팀 숙소 / 숙소 촬영"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426871_35744.html","analysis":"월드컵 7번 관련 및 대표팀 현지 도착 / 인스타 게시물과 공항 현장 스케치 "},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426857_35744.html","analysis":"카타르 숙박시설 점검 / 앞선 두 리포트 11일, 13일 영상 재사용 숙박점검 리포트 기자 스탠드업"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426855_35744.html","analysis":"월드컵 CG 대표팀 카타르 입성 / 카타르 입성 현장 스케치 및 인터뷰"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427277_35744.html","analysis":"같은 조 우루과이 관련"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427275_35744.html","analysis":"김민재 카타르 입성"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427260_35744.html","analysis":"카타르 음주 관련 현지 취재"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427259_35744.html","analysis":"카타르 첫 훈련 이강인"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427659_35744.html","analysis":"같은 조 가나 관련"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427658_35744.html","analysis":"카타르 김민재"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427649_35744.html","analysis":"우루과이 공개 훈련"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427648_35744.html","analysis":"손흥민 합류 및 대표팀 공개 훈련"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428075_35744.html","analysis":"가나 평가전 "},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428074_35744.html","analysis":"카타르 현지 행사"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428063_35744.html","analysis":"현지 경기장 시설 점검"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428062_35744.html","analysis":"대표팀 훈련 손흥민"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428450_35744.html","analysis":"러우전쟁여파 폴란드 카타르 입성"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428449_35744.html","analysis":"포르투갈 최종 평가전"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428448_35744.html","analysis":"월드컵 앞두고 응원 메시지 "},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428435_35744.html","analysis":"가나 최종 평가전 "},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428434_35744.html","analysis":"대표팀 훈련 벤투 손흥민 이강인"},{"date":"11.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428608_35744.html","analysis":"가나 카타르 입성"},{"date":"11.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428607_35744.html","analysis":"대표팀 훈련 벤투"},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428758_35744.html","analysis":"같은 조 상대팀 훈련 스케치 "},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428756_35744.html","analysis":"카타르 현지 진행 월드컵 개막식 행사 "},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428757_35744.html","analysis":"현지 응원단 취재"}],
    "SBS": [{"date":"2022.11.15","title":"결전지 도하에서 첫 훈련…김민재도 오늘 합류","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006972034\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM","analysis":"카타르 월드컵 개최 전 훈련 및 기자회견 취재를 통한 준비 모습 및 현지 합류 선수들 취재.  / 축구협회 인사이드캠 제공 영상 활용."},{"date":"2022.11.16","title":"손흥민, 부기 여전히 있지만 \u0027마스크 투혼\u0027 예고","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006973549\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"카타르 월드컵 개최 전 훈련 및 기자회견 취재를 통한 준비 모습 및 현지 합류 선수들 취재. / 축구협회 인사이드캠 제공 영상 활용."},{"date":"2022.11.16","title":"6번째 우승 노리는 브라질, 슈퍼스타들 완전체로 첫 훈련","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006973574\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"주요 우승팀 훈련 영상 취재 후 단신 처리."},{"date":"2022.11.17","title":"가짜 팬\u0027 의혹까지…또 인권 침해 논란","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006975168\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"외신 및 자료화면에 현장 스탠딩을 통한 제작. 스탠딩 배경이 애매한 경우 앞부분 상징적 이미지를 타이트하게 넣어주고 화면전환."},{"date":"2022.11.18","title":"필승 상대\u0027 가나, 만만치 않다…세트피스 경계령","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006976530\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개최전 같은 조 강팀 마지막 평가전 현지 취재."},{"date":"2022.11.18","title":"4년 전 눈물 쏟았지만…황희찬 \"이번엔 웃는다!\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006976529\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현지 환경에 따른 훈련 시간 변화를 훈련장 타임랩스 촬영."},{"date":"2022.11.19","title":"가나 · 포르투갈 대표팀 입성…달아오른 도하","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977052\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"같은 조 주요팀 현지 도착 및 분위기 취재"},{"date":"2022.11.19","title":"해설위원 이승우 \"1승 1무 1패 예상\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977059\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"주요 해설위원들 리허설 및 훈련현장 동행 취재"},{"date":"2022.11.20","title":"29일간의 열전\u0027 사상 첫 겨울 · 중동 월드컵 곧 개막","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977616\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개막날 현장 라이브 현장 진행. 미리 취재 해놓은 각국 현지 응원 분위기로 엔딩."},{"date":"2022.11.20","title":"도하 시내 막 올린 팬 페스티벌…이미 응원 열기 \u0027펄펄\u0027","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977619\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"팬들의 밤 행사 취재를 통해 각국 팬들의 응원 및 현지 반응을 취재 할 수 있는 포인트."},{"date":"2022.11.21","title":"3경기 모두 여기서…벤투호의 \u0027결전의 장소\u0027 평가는?","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006979049\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개막 이튿날도 한국 경기가 이뤄질 경기장 내부에서 현장 뉴스 진행."},{"date":"2022.11.22","title":"이승우 \"경계 1호는 발베르데…수비 약점 공략도 방법\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006980549\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현역 선수 해설위원 동행 상대팀 훈련 보면서 분석. 주변에 유명 유튜버팀들도 같이 동행. (유튜버: 슛포러브)"},{"date":"2022.11.23","title":"\"대∼한민국!\" 결전 앞두고 카타르에 붉은악마 입성","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006982168\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"별도의 비디오머그 팀이 한국에서부터 팔로우하여 취재한것으로 보임."},{"date":"2022.11.25","title":"홈경기인 줄…카타르 물들인 붉은 악마 응원","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984909\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"붉은악마와 동행취재하는 비디오머그팀의 액션캠 스케치 및 인터뷰 활용."},{"date":"2022.11.25","title":"광장에서 오랜만에 \"대∼한민국!\"…깔끔한 뒷정리까지","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984906\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"한국 다양한 장소 거리응원 취재."},{"date":"2022.11.25","title":"현란한 \u0027입담 드리블\u0027…\"골대 감사합니다\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984901\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현역 선수 해설위원과 믹스드존 취재를 통해 대표팀 선수들과 친근한 반응들을 취재. 장소의 제약으로 액션캠 활용한것으로 보임."},{"date":"2022.11.29","title":"하얗게 불태운 가나전 \u0027마지막 10분\u0027…응원석 현장 모습","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006989109\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"관중석 내 카메라 장비로 촬영이 안 되어 핸드폰 또는 액션캠으로 추측 되는 영상으로 양팀 응원단들 리액션 및 인터뷰 등 취재하여 리포트 제작한것으로 보임."},{"date":"2022.11.30","title":"앙숙 대결\u0027 미국이 웃었다…이란 선수 위로한 미국 선수","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006990776\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"정치적 이슈가 있는 국가간의 경기 및 응원단 반응 취재."},{"date":"2022.12.02","title":"\"우리는 태극전사 보유국\"…도하의 붉은 물결","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006993750\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현지 교민들 단체 응원 취재"},{"date":"2022.11.11","title":"1박 28만 원인데…\u0027 카타르 월드컵 방문객 숙소 논란","link":"https://www.youtube.com/watch?v=CFDYGCkRLoM","analysis":"카타르 월드컵 팬 숙소 열악함 논란. 1박 28만원 컨테이너 숙소 사진 공개 후 비판."},{"date":"2022.11.18","title":"우리가 \u0027치맥\u0027 먹을 때, H조 나라 사람들은?…우루과이·포르투갈·가나 유학생에게 물어봤다","link":"https://www.youtube.com/watch?v=JWQ1NlUZCaQ","analysis":"H조 상대국 유학생 인터뷰. 우루과이, 가나, 포르투갈의 축구 문화와 음식 소개."},{"date":"2022.11.21","title":"불 붙은 월드컵 마케팅…손흥민 \u0027원톱\u0027","link":"https://www.youtube.com/watch?v=HU5yXp54XJk","analysis":"월드컵 맞아 손흥민 중심 마케팅 활발. 이태원 참사로 대규모 거리응원 취소 소식."},{"date":"2022.11.17","title":"더 빠르게, 더 정확하게\u0027…반자동 오프사이드 판독 \u0027첫 선\u0027","link":"https://www.youtube.com/watch?v=VfaOkazEwkA","analysis":"카타르 월드컵에 도입된 반자동 오프사이드 기술(SAOT) 설명. AI 기반 판독 시스템으로 더 빠르고 정확한 오프사이드 판정."},{"date":"2022.11.23","title":"붉은악마 생업 있나요? 네, 심지어 미국 회계사더군요 / 비머 in 카타르 ep.01","link":"https://www.youtube.com/watch?v=9pvej3LJ4Is","analysis":"카타르 월드컵 현지 취재 시작. 붉은악마 응원단과 함께 출국, 다양한 직업의 응원단원들 인터뷰."},{"date":"2022.11.19","title":"카타르에서 꼭 기억해야 할 3가지 원칙…\u0027한국에서처럼 행동했다가 큰일 나요\u0027","link":"https://www.youtube.com/watch?v=vQTCVHSmHnw","analysis":"카타르 현지 문화와 법규 주의사항. 주류 반입 금지, 복장 규정 등 여행자 필수 정보."},{"date":"2022.11.24","title":"[이 시각 도하] 대한민국 vs 우루과이, 결전의 장소에서 달아오른 응원 열기","link":"https://www.youtube.com/watch?v=F8J9t9uRt3Y","analysis":"한국 vs 우루과이 경기 전 현지 경기장 앞 응원 열기 생중계."},{"date":"2022.11.27","title":"걸으면 흔들리고, 바닥에서 밥 먹는 시스템, 참을 수는 있는데 묘하게 킹 받는 모먼트를 모았습니다 / 비머 in 카타르 ep.3","link":"https://www.youtube.com/watch?v=F7cmi81t07A\u0026t=10s","analysis":"카타르 월드컵 팬빌리지 숙소의 불편한 점들 소개. 흔들리는 컨테이너 숙소, 바닥 식사 등 현지 경험 공유."},{"date":"2022.11.18","title":"카타르 월드컵, 우리 축구 국가대표 팀의 경기장 이동거리 0km?","link":"https://www.youtube.com/watch?v=ga2VHq5f1po","analysis":"카타르 월드컵 경기장 간 이동거리 분석. 모든 경기장이 도하 인근에 위치한 특징."},{"date":"2022.11.28","title":"이승우 해설위원 쉬는 날 만난 우루과이 친구가 손흥민 발 밟은 선수였던 썰 / 비머 in 카타르 ep.4","link":"https://www.youtube.com/watch?v=ki34MaV8YKw","analysis":"해설위원들 비하인드 및 준비 모습 현장 취재."},{"date":"2022.11.29","title":"골문은 안 열리고 눈물샘만 열린 가나전, 냉탕 온탕 무한반복 직캠입니다 / 비머 in 카타르 ep.5","link":"https://www.youtube.com/watch?v=sWNCy0Tv5II","analysis":"가나전 2-3 패배 직후 현지 응원단 반응. 포르투갈전 각오 다지는 붉은악마."},{"date":"2022.12.02","title":"출장 간 기자 쉬는 날, 친구 만나서 \u0027걸어서 카타르 속으로\u0027 찍었습니다 / 비머 in 카타르 ep.6","link":"https://www.youtube.com/watch?v=zVnG33Q3Zoc","analysis":"카타르 현지 일상 브이로그. 정국 \u0027Dreamers\u0027 공연 현장, 카타르 문화 체험."},{"date":"2022.11.28","title":"[라이브머그 in 카타르] 달아오른 응원 열기, 이 시각 경기장 앞","link":"https://www.youtube.com/watch?v=TwxmZes42M8","analysis":"포르투갈전 전 경기장 앞 응원 현장 생중계. 뜨거운 응원 열기 현장 전달."},{"date":"2022.12.07","title":"전 세계 직관러들이 직접 뛴 조별리그 현장…훈훈하고 치열하고 다 하고 난리남 / 비머in카타르 ep.11","link":"https://www.youtube.com/watch?v=MziPOm0WcTg","analysis":"카타르 현지 \u0027팬즈컵\u0027 풋살 대회 취재. 월드컵 출전국별 팬들이 직접 참여한 조별리그 현장."},{"date":"2022.12.05","title":"중요한 것은 꺾이지 않는 마음…응원단도 \u0027두근두근\u0027 / SBS","link":"https://www.youtube.com/watch?v=jdGWbk17K9I","analysis":"16강 진출 후 카타르 원정응원단 현황. 귀국 일정 변경하며 현지 체류 연장하는 팬들."},{"date":"2022.12.03","title":"붉은악마 붉은악마 하는 이유가 있었습니다…노동하며 즐기는 축구팬 클라스 / 비머 in 카타르 ep.8","link":"https://www.youtube.com/watch?v=dM0PPtVcQ_E","analysis":"12년 만의 16강 진출 순간을 직관한 붉은악마 응원단 취재. 에듀케이션 시티 스타디움에서 열정적 응원 모습."},{"date":"2022.12.05","title":"브라질 취재진 근데 이제 염탐을 곁들인… 아슬아슬한 인터뷰 모음 / 비머in카타르 ep.9","link":"https://www.youtube.com/watch?v=_9C1KuQolSg","analysis":"16강전 상대 브라질 공식 훈련 취재. 벤투호의 철저한 준비 모습과 브라질 취재진 인터뷰."},{"date":"2022.12.05","title":"선수들 만큼이나 모든 걸 불태운 붉은악마…지금 이 시각 카타르 응원단 모습은?","link":"https://www.youtube.com/watch?v=XDZDh69gjic","analysis":"16강전 후 카타르 현지 붉은악마 응원단 생중계. 손흥민, 이강인, 황희찬, 벤투 감독 언급."},{"date":"2022.12.03","title":"극I도 E가 된다는 카타르 원정 응원단 찐텐 직캠, 다들 초면이란 게 함정 / 비머 in 카타르 ep.7","link":"https://www.youtube.com/watch?v=r3hs4XexD5k","analysis":"포르투갈전 16강 진출 확정 후 카타르 현장 응원단의 열정적 모습. 경기장 밖 시내 곳곳을 행진하며 외국인들과도 함께 대한민국을 연호."},{"date":"2022.12.03","title":"[영상토크] 추가시간에 터진 황희찬의 역전골 피치(Pitch) 직캠","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994259\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현장 eng 취재본 활용 짧은 하이라이트."},{"date":"2022.12.03","title":"포르투갈전 하이라이트 영상…\u002712년 만의 16강행\u0027 순간","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994318\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"중계영상 외 한국 거리 응원, 현지 경기장 추가 스케치 영상 등 활용."},{"date":"2022.12.03","title":"16강 확정되자 캡틴 손흥민의 \u0027오열\u0027…벤투에게 남긴 말","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994321\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH","analysis":"현장 eng 촬영본 및 스탠딩 활용된것으로 보임."},{"date":"2022.12.05","title":"\"어메이징 코리아…8강도 기대\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006996284\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"카타르 월드컵 현지 응원단 반응 위주 취재."}]
  },
  "2018": {
    "KBS": [
      {"date":"2018.05.29","title":"‘깜짝 카드’ 문선민·이승우, ‘한국축구 희망’을 밝히다","link":"https://news.kbs.co.kr/news/view.do?ncd=3656404","analysis":"온두라스 평가전 뒤 문선민·이승우의 등장에 주목. 월드컵 직전 대표팀 분위기와 전술 옵션 변화를 정리한 스포츠 기사."},
      {"date":"2018.06.02","title":"김진수·이청용·권경원, 러시아 월드컵 최종명단 제외","link":"https://news.kbs.co.kr/news/view.do?ncd=3658836","analysis":"러시아 월드컵 최종 23인 확정 기사. 부상과 경쟁 구도를 중심으로 대표팀 최종 엔트리 정리."},
      {"date":"2018.06.03","title":"‘조별리그 F조’ 독일, 오스트리아에 1-2 역전패","link":"https://news.kbs.co.kr/news/view.do?ncd=3659022","analysis":"한국과 같은 F조 경쟁국 독일·스웨덴의 평가전 흐름을 점검. 상대 전력과 조별리그 판도 중심의 사전 분석 기사."},
      {"date":"2018.06.15","title":"‘지구촌 축구 축제’ 2018 러시아 월드컵 개막","link":"https://news.kbs.co.kr/news/view.do?ncd=3664587","analysis":"개막식 진행, 개최국-사우디아라비아 개막전, 한국 조별리그 일정까지 한 번에 정리한 개막 기사."}
    ],
    "MBC": [
      {"date":"2018.05.14","title":"러시아 월드컵 축구 대표팀 '꿈의 무대'서 '통쾌한 반란'","link":"https://imnews.imbc.com/replay/2018/nwdesk/article/4607426_30181.html","analysis":"뉴스데스크 스포츠 코너. 신태용호 28인 발표 직후 선수 개별 반응과 월드컵 각오를 인터뷰 중심으로 구성."},
      {"date":"2018.05.23","title":"신태용호 수비수 장현수, 발목 부상으로 국내 평가전 2경기 결장","link":"https://imnews.imbc.com/news/2018/sports/article/4616838_30825.html","analysis":"장현수 부상으로 온두라스·보스니아전 결장 확정. 월드컵 직전 수비 조직 운용 변수에 초점을 맞춘 스포츠 기사."},
      {"date":"2018.06.04","title":"붉은악마, 러시아서 '소수 정예'로 태극전사 응원","link":"https://imnews.imbc.com/news/2018/sports/article/4633034_30825.html","analysis":"러시아 현지 원정응원단 규모와 운영 방식을 소개. 응원 문화와 현장 분위기를 담은 월드컵 주변 기사."},
      {"date":"2018.06.15","title":"월드컵 개막…개최국 러시아, 사우디에 5:0 대승","link":"https://imnews.imbc.com/replay/2018/nwtoday/article/4650232_30187.html","analysis":"개막식 연출, 개막전 결과, 개최국 완승까지 요약. 본선 분위기와 대회 출발점을 보여주는 개막 리포트."}
    ],
    "SBS": [
      {"date":"2018.03.31","title":"신태용호 월드컵 출정식 평가전 '대구-전주' 개최 추진","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1004692286","analysis":"개막 약 75일 전 시점의 준비 기사. 국내 평가전과 출정식 장소, 재소집 일정 등 월드컵 준비 로드맵을 설명."},
      {"date":"2018.05.16","title":"월드컵채널 SBS, '배성재x박지성' 콤비로 정상 수성한다","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1004760615","analysis":"SBS의 러시아 월드컵 중계 전략과 해설진 구성 소개. 월드컵 특집 편성과 방송 포인트를 다룬 기사."},
      {"date":"2018.06.02","title":"신태용호 최종명단 확정…김진수·이청용·권경원 제외","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1004785325","analysis":"월드컵 최종 23인 확정 기사. 낙마 선수와 오스트리아 사전캠프 출국 계획까지 정리."},
      {"date":"2018.06.15","title":"2018 러시아 월드컵 개막…32일간의 축구 대장정 돌입","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1004803293","analysis":"러시아 월드컵 개막식과 개최국 개막전, 한국의 F조 일정과 전체 대회 구조를 정리한 개막 뉴스."}
    ]
  },
  "2014": {
    "KBS": [
      {"date":"2014.03.02","title":"[월드컵 D-100 ①] 사상 첫 원정 8강 도전 ‘앞으로 100일’","link":"https://news.kbs.co.kr/news/view.do?ncd=2818619","analysis":"브라질 월드컵 개막 D-100 기획 기사. 대회 개요, 개최 의미, 한국 대표팀 목표를 종합적으로 짚음."},
      {"date":"2014.04.29","title":"홍명보호, 브라질월드컵 유니폼 색깔 확정","link":"https://news.kbs.co.kr/news/view.do?ncd=2854955","analysis":"조별리그 3경기 유니폼 컬러 확정 소식. 러시아·알제리·벨기에전 착장 계획과 상징성을 정리."},
      {"date":"2014.05.06","title":"무릎 부상 기성용, 조기 귀국 ‘재활 전념’","link":"https://news.kbs.co.kr/news/mobile/view/view.do?ncd=2858181","analysis":"기성용의 부상 회복 상황과 귀국 소식을 다뤄 월드컵 직전 대표팀 전력 변수에 주목한 기사."},
      {"date":"2014.06.18","title":"‘러시아전 승리 기원’ 서울 벌써 붉은물결","link":"https://news.kbs.co.kr/news/view.do?ncd=2877705","analysis":"러시아와의 조별리그 1차전을 앞두고 광화문 등 거리응원 분위기를 전한 현장성 기사."}
    ],
    "MBC": [
      {"date":"2014.03.05","title":"월드컵 D-100, 다시 뭉친 '붉은 악마'…응원 출정식 개최","link":"https://imnews.imbc.com/replay/2014/nwdesk/article/3425450_30324.html","analysis":"브라질 월드컵 개막 D-100 뉴스데스크 리포트. 붉은악마 출정식과 원정응원 준비 상황을 다룸."},
      {"date":"2014.04.29","title":"홍명보호 월드컵 유니폼 색깔 확정…알제리전서 붉은색 착용","link":"https://imnews.imbc.com/replay/2014/nwdesk/article/3455765_30324.html","analysis":"조별리그 유니폼 색상 확정 보도. 전통의 붉은색 유니폼이 알제리전에만 배정된 배경을 설명."},
      {"date":"2014.06.18","title":"홍명보호 비주전 이근호의 확실한 한방…\"상상이 현실 됐다\"","link":"https://imnews.imbc.com/replay/2014/nwdesk/article/3481849_30324.html","analysis":"러시아전 직후 뉴스데스크 후속 리포트. 이근호의 교체 투입과 선제골의 의미를 짚음."},
      {"date":"2014.06.18","title":"확 달라진 경기력…본선 '환골탈태' 마이애미 효과 톡톡","link":"https://imnews.imbc.com/replay/2014/nwdesk/article/3481847_30324.html","analysis":"러시아전 경기력 개선 배경을 분석. 마이애미 전훈과 컨디션 조절 효과를 중심으로 풀어낸 경기 분석 기사."}
    ],
    "SBS": [
      {"date":"2014.04.03","title":"에일리, 월드컵 공식 응원가 '투혼가' 불러 관심 집중","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1002326690","analysis":"브라질 월드컵 응원 콘텐츠와 붉은악마 공식 응원가를 소개. D-100 이후 응원 문화 확산 흐름을 보여줌."},
      {"date":"2014.05.14","title":"월드컵 채널 SBS, 차범근-배성재 출격 준비 완료","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1002389581","analysis":"브라질 월드컵을 앞둔 SBS 중계진과 현지 방송단 준비 상황을 설명한 방송사 자체 기사."},
      {"date":"2014.06.05","title":"알제리의 간판스타 페굴리 \"월드컵에서 역사 만들 것\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1002425724","analysis":"한국과 같은 H조 알제리 핵심 선수 인터뷰를 소개하며 상대 전력을 짚은 스포츠 기사."},
      {"date":"2014.06.13","title":"[영상] 자연과 인간, 축구의 향연 '2014 브라질 월드컵' 개막식","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1002436638","analysis":"개막식 핵심 장면과 공식 주제가 공연, 브라질 월드컵 본격 개막 분위기를 담은 영상 기사."}
    ]
  }
  };
  Object.entries(newsData).forEach(([year,broadcasters])=>{
    Object.values(broadcasters).forEach(entries=>{
      entries.forEach(entry=>{
        entry.date=normalizeNewsDate(entry.date, year);
      });
    });
  });
  return newsData;
}

const mexicoStadiums = {
  akron:{
    title:'아크론스타디움',
    city:'과달라하라',
    subtitle:'멕시코 개최 경기장 정보',
    rows:[['경기장명','아크론스타디움'],['도시','과달라하라'],['국가','멕시코'],['비고','공식 구조 이미지 반영']],
    sections:{
      shooting:{
        subtitle:'아크론스타디움 촬영 구역 정보',
        rows:[['세부 폴더','촬영 구역'],['기준 위치','메인 스탠드 하단 카메라 존'],['운영 포인트','터치라인 접근 전 승인 필요'],['비고','경기 전 장비 반입 시간 확인']]
      },
      mixedZone:{
        subtitle:'아크론스타디움 mixed zone 정보',
        rows:[['세부 폴더','mixed zone'],['기준 위치','선수단 인터뷰 동선 끝 구간'],['운영 포인트','인터뷰 라인 유지 후 역방향 이동 금지'],['비고','경기 종료 직후 혼잡 가능']]
      },
      route:{
        subtitle:'아크론스타디움 내부 동선 정보',
        rows:[['세부 폴더','경기장 내부 동선'],['기준 이동','미디어 입구 -> 작업 구역 -> 피치 접근'],['운영 포인트','보안 게이트 재통과 시간 여유 확보'],['비고','출입 패스 우선 확인']]
      }
    },
    imagePath:'images/akron-architecture.jpg',
    imageAlt:'아크론스타디움 내부 구조 이미지',
    imageCaption:'아크론스타디움 내부 구조',
    sourceLabel:'출처: Estadio Akron 공식 Infraestructura',
    sourceUrl:'https://estadioakron.mx/Infraestructura'
  },
  bbva:{
    title:'에스타디오 BBVA',
    city:'몬테레이',
    subtitle:'멕시코 개최 경기장 정보',
    rows:[['경기장명','에스타디오 BBVA'],['도시','몬테레이'],['국가','멕시코'],['비고','공식 내부 이미지 반영']],
    sections:{
      shooting:{
        subtitle:'에스타디오 BBVA 촬영 구역 정보',
        rows:[['세부 폴더','촬영 구역'],['기준 위치','메인 스탠드 상단 미디어 플랫폼'],['운영 포인트','롱렌즈 장비는 사전 배치 권장'],['비고','광량 변화 대비 필요']]
      },
      mixedZone:{
        subtitle:'에스타디오 BBVA mixed zone 정보',
        rows:[['세부 폴더','mixed zone'],['기준 위치','라커룸 출구 인접 인터뷰 구역'],['운영 포인트','방송사별 인터뷰 슬롯 순서 확인'],['비고','케이블 정리 동선 확보']]
      },
      route:{
        subtitle:'에스타디오 BBVA 내부 동선 정보',
        rows:[['세부 폴더','경기장 내부 동선'],['기준 이동','미디어 체크인 -> 혼합구역 -> 스탠드 작업석'],['운영 포인트','엘리베이터 대기 시간 감안'],['비고','경기 종료 후 퇴장 동선 분리']]
      }
    },
    imagePath:'images/bbva-interior.webp',
    imageAlt:'에스타디오 BBVA 내부 전경 이미지',
    imageCaption:'에스타디오 BBVA 내부 전경',
    sourceLabel:'출처: FIFA World Cup Monterrey 공식 Stadium 페이지',
    sourceUrl:'https://www.fwc26monterrey.com/stadium'
  }
};
const mexicoStadiumSections = {
  shooting:'촬영 구역',
  mixedZone:'mixed zone',
  route:'경기장 내부 동선'
};
const scheduleStadiumMedia = {
  azteca:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_Azteca_desde_el_aire_1.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Estadio_Azteca_desde_el_aire_1.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'에스타디오 아즈테카 부감 전경'
  },
  akron:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/EstadioAkronGDL.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:EstadioAkronGDL.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'에스타디오 아크론 전경'
  },
  bbva:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_BBVA.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Estadio_BBVA.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'에스타디오 BBVA 전경'
  },
  hardRock:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Hard_Rock_Stadium.png?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Hard_Rock_Stadium.png',
    sourceLabel:'Wikimedia Commons',
    alt:'하드록 스타디움 전경'
  },
  mercedesBenz:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_Stadium_(27663349999).jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Mercedes-Benz_Stadium_(27663349999).jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'메르세데스-벤츠 스타디움 전경'
  },
  bmo:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/BMO_Field.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:BMO_Field.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'BMO 필드 전경'
  },
  levis:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Levi%27s_Stadium_from_air.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Levi%27s_Stadium_from_air.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'리바이스 스타디움 부감 전경'
  },
  bcPlace:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/BC_Place_Stadium_(2015).jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:BC_Place_Stadium_(2015).jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'BC 플레이스 스타디움 전경'
  },
  metlife:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Metlife_stadium_(Aerial_view).jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Metlife_stadium_(Aerial_view).jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'메트라이프 스타디움 부감 전경'
  },
  gillette:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Gillette_stadium.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Gillette_stadium.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'질레트 스타디움 부감 전경'
  },
  lincolnFinancial:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Lincoln_Financial_Field_(Aerial_view)_(cropped).jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Lincoln_Financial_Field_(Aerial_view)_(cropped).jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'링컨 파이낸셜 필드 부감 전경'
  },
  sofi:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_SoFi_Stadium_(July_2022).jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Aerial_view_of_SoFi_Stadium_(July_2022).jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'소파이 스타디움 부감 전경'
  },
  att:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/AT%26T_Stadium_Aerial.jpeg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:AT%26T_Stadium_Aerial.jpeg',
    sourceLabel:'Wikimedia Commons',
    alt:'AT&T 스타디움 부감 전경'
  },
  nrg:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Reliant_Stadium_Aerial.JPG?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Reliant_Stadium_Aerial.JPG',
    sourceLabel:'Wikimedia Commons',
    alt:'NRG 스타디움 부감 전경'
  },
  lumen:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_CenturyLink_Field_November_2011.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Aerial_CenturyLink_Field_November_2011.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'루멘 필드 부감 전경'
  },
  arrowhead:{
    imageUrl:'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg?width=1200',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg',
    sourceLabel:'Wikimedia Commons',
    alt:'애로헤드 스타디움 부감 전경'
  }
};
const scheduleStadiumAliases = [
  ['estadio azteca','azteca'],
  ['mexico city stadium','azteca'],
  ['estadio akron','akron'],
  ['guadalajara stadium','akron'],
  ['hard rock stadium','hardRock'],
  ['miami stadium','hardRock'],
  ['mercedes-benz stadium','mercedesBenz'],
  ['atlanta stadium','mercedesBenz'],
  ['bmo field','bmo'],
  ['toronto stadium','bmo'],
  ['levi\'s stadium','levis'],
  ['san francisco bay area stadium','levis'],
  ['bc place','bcPlace'],
  ['vancouver stadium','bcPlace'],
  ['metlife stadium','metlife'],
  ['new york new jersey stadium','metlife'],
  ['gillette stadium','gillette'],
  ['boston stadium','gillette'],
  ['lincoln financial field','lincolnFinancial'],
  ['philadelphia stadium','lincolnFinancial'],
  ['sofi stadium','sofi'],
  ['los angeles stadium','sofi'],
  ['at&t stadium','att'],
  ['dallas stadium','att'],
  ['nrg stadium','nrg'],
  ['houston stadium','nrg'],
  ['lumen field','lumen'],
  ['seattle stadium','lumen'],
  ['arrowhead stadium','arrowhead'],
  ['kansas city stadium','arrowhead'],
  ['estadio bbva','bbva'],
  ['monterrey stadium','bbva']
];

const PAGE_SIZE = 8;
const teamTimelineRows = [
  {label:'대한민국',type:'team'},
  {label:'멕시코',type:'team'},
  {label:'남아공',type:'team'},
  {label:'체코',type:'team'}
];
const personalTimelineRows = [
  {label:'영상취재팀 공동',type:'person'},
  {label:'박재현',type:'person'},
  {label:'장후원',type:'person'},
  {label:'정상원',type:'person'},
  {label:'이주원',type:'person'},
  {label:'김진광',type:'person'},
  {label:'정재우',type:'person'}
];
const timelineViews = {
  personal:{title:'개인일정 타임라인', rows:personalTimelineRows}
};
const timelineRows = [...teamTimelineRows, ...personalTimelineRows];
const timelineEditableRows = timelineRows.filter(row=>row.type!=='section');
const timelineEditableLabels = timelineEditableRows.map(row=>row.label);
const TIMELINE_STORAGE_KEY = 'worldcup-guide-timeline-assignments-v2';
const LEGACY_TIMELINE_STORAGE_KEYS = ['worldcup-guide-timeline-assignments-v1'];
const TIMELINE_WINDOW_NAME_KEY = '__worldcupGuideTimelineAssignments__';
let currentNewsYear = '';
let currentMexicoStadiumKey = '';
let currentTimelineView = 'personal';
let isTimelinePainting = false;
let timelineSelectionPerson = '';
let timelineSelectionStartIndex = -1;
let timelineSelectionEndIndex = -1;
let pendingTimelineSelection = null;
const timelineAssignments = Object.fromEntries(timelineEditableRows.map(row=>[row.label,new Map()]));
let hasSeededTimelineTeamSchedules = false;
let hasLoadedTimelineSavedAssignments = false;
let squadPhotoHydrationVersion = 0;
let timelineDates = null;
let timelineMonthGroups = null;
let personalTimelineStickyMonthCleanup = null;
const timelineOfficialTeamSchedules = {
  대한민국:[
    {date:'2026-06-12',label:'vs 체코/덴마크 · 11:00 · Estadio Guadalajara'},
    {date:'2026-06-18',label:'vs 멕시코 · 10:00 · Estadio Guadalajara'},
    {date:'2026-06-24',label:'vs 남아공 · 07:00 · Estadio Monterrey'}
  ],
  멕시코:[
    {date:'2026-06-12',label:'vs 남아공 · 09:00 · Mexico City Stadium'},
    {date:'2026-06-18',label:'vs 대한민국 · 10:00 · Estadio Guadalajara'},
    {date:'2026-06-24',label:'vs 체코/덴마크 · 07:00 · Mexico City Stadium'}
  ],
  남아공:[
    {date:'2026-06-12',label:'vs 멕시코 · 09:00 · Mexico City Stadium'},
    {date:'2026-06-18',label:'vs 체코/덴마크 · 07:00 · Atlanta Stadium'},
    {date:'2026-06-24',label:'vs 대한민국 · 07:00 · Estadio Monterrey'}
  ],
  체코:[
    {date:'2026-06-12',label:'vs 대한민국 · 11:00 · Estadio Guadalajara'},
    {date:'2026-06-18',label:'vs 남아공 · 07:00 · Atlanta Stadium'},
    {date:'2026-06-24',label:'vs 멕시코 · 07:00 · Mexico City Stadium'}
  ]
};
function seedTimelineTeamSchedules(){
  Object.entries(timelineOfficialTeamSchedules).forEach(([rowLabel, matches])=>{
    const rowAssignments=timelineAssignments[rowLabel];
    if(!rowAssignments) return;
    matches.forEach(match=>{
      rowAssignments.set(match.date, match.label);
    });
  });
}
function getTimelineStorageAreas(){
  if(typeof window==='undefined') return [];
  const storages=[window.localStorage, window.sessionStorage];
  return storages.filter(storage=>{
    try{
      const probeKey='__timeline_storage_probe__';
      storage.setItem(probeKey,'1');
      storage.removeItem(probeKey);
      return true;
    }catch(error){
      return false;
    }
  });
}
function readTimelineAssignmentsRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const preferredRaw=storage.getItem(TIMELINE_STORAGE_KEY);
    if(preferredRaw) return preferredRaw;
    for(const legacyKey of LEGACY_TIMELINE_STORAGE_KEYS){
      const legacyRaw=storage.getItem(legacyKey);
      if(legacyRaw) return legacyRaw;
    }
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[TIMELINE_WINDOW_NAME_KEY]==='string' ? payload[TIMELINE_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeTimelineAssignmentsRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>{
    storage.setItem(TIMELINE_STORAGE_KEY, raw);
    LEGACY_TIMELINE_STORAGE_KEYS.forEach(legacyKey=>storage.removeItem(legacyKey));
  });
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[TIMELINE_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
}
function loadSavedTimelineAssignments(){
  if(hasLoadedTimelineSavedAssignments) return;
  hasLoadedTimelineSavedAssignments = true;
  const raw=readTimelineAssignmentsRaw();
  if(!raw) return;
  try{
    const savedAssignments=JSON.parse(raw);
    timelineEditableLabels.forEach(label=>{
      const rowAssignments=savedAssignments?.[label];
      if(!rowAssignments||typeof rowAssignments!=='object') return;
      Object.entries(rowAssignments).forEach(([dateKey,value])=>{
        if(typeof value!=='string') return;
        const text=value.trim();
        if(text){
          timelineAssignments[label].set(dateKey, text);
        }else{
          timelineAssignments[label].delete(dateKey);
        }
      });
    });
    writeTimelineAssignmentsRaw(JSON.stringify(Object.fromEntries(timelineEditableLabels.map(label=>[label, Object.fromEntries(timelineAssignments[label].entries())]))));
  }catch(error){
    console.warn('Failed to load saved timeline assignments.', error);
  }
}
function saveTimelineAssignments(){
  const payload=Object.fromEntries(timelineEditableLabels.map(label=>[label, Object.fromEntries(timelineAssignments[label].entries())]));
  writeTimelineAssignmentsRaw(JSON.stringify(payload));
}
function ensureTimelineDataReady(){
  if(!hasSeededTimelineTeamSchedules){
    seedTimelineTeamSchedules();
    hasSeededTimelineTeamSchedules = true;
  }
  loadSavedTimelineAssignments();
}

function getFlag(code){return code ? `https://flagcdn.com/w40/${code}.png` : null;}
function getScheduleStadiumKey(stadiumName=''){
  const normalized=String(stadiumName).toLowerCase();
  const match=scheduleStadiumAliases.find(([alias])=>normalized.includes(alias));
  return match?match[1]:'';
}
function renderScheduleStadiumMedia(stadiumName=''){
  const stadiumKey=getScheduleStadiumKey(stadiumName);
  const media=stadiumKey?scheduleStadiumMedia[stadiumKey]:null;
  if(!media) return '<div class="stadium-placeholder">경기장 사진</div>';
  return `<figure class="schedule-stadium-card"><a class="schedule-stadium-link" href="${media.sourceUrl}" target="_blank" rel="noreferrer noopener"><img class="schedule-stadium-photo" src="${media.imageUrl}" alt="${media.alt}" loading="lazy" referrerpolicy="no-referrer"></a><figcaption class="schedule-stadium-caption"><span>${escapeHtml(stadiumName)}</span><a class="schedule-stadium-source" href="${media.sourceUrl}" target="_blank" rel="noreferrer noopener">${media.sourceLabel}</a></figcaption></figure>`;
}
function createTimelineDates(startDate, endDate){
  const dates=[];
  const cursor=new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate());
  const last=new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate());
  while(cursor<=last){
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate()+1);
  }
  return dates;
}
function ensureTimelineCalendarReady(){
  if(!timelineDates){
    timelineDates=createTimelineDates(new Date(2026,2,1), new Date(2026,6,31));
  }
  if(!timelineMonthGroups){
    timelineMonthGroups=timelineDates.reduce((groups,date)=>{
      const label=`${date.getMonth()+1}월`;
      const lastGroup=groups[groups.length-1];
      if(lastGroup&&lastGroup.label===label){
        lastGroup.span+=1;
      }else{
        groups.push({label,span:1});
      }
      return groups;
    },[]);
  }
}
function getTimelineDates(){
  ensureTimelineCalendarReady();
  return timelineDates;
}
function formatTimelineDate(date){
  return `${date.getMonth()+1}/${date.getDate()}`;
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function getTimelineMonthGroups(){
  ensureTimelineCalendarReady();
  return timelineMonthGroups;
}
function formatTimelineKey(date){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function getTimelineDayClasses(date){
  const classes=[];
  if(date.getDay()===0||date.getDay()===6) classes.push('weekend');
  if(date.getDate()===1) classes.push('month-start');
  return classes.join(' ');
}
function getTimelineLabel(person, dateKey){
  return timelineAssignments[person]?.get(dateKey)||'';
}
function getTimelineSegmentBounds(person, index, label){
  const dates=getTimelineDates();
  let start=index;
  let end=index;
  while(start>0){
    const previousDate=dates[start-1];
    if(!previousDate) break;
    if(getTimelineLabel(person, formatTimelineKey(previousDate))!==label) break;
    start-=1;
  }
  while(end<dates.length-1){
    const nextDate=dates[end+1];
    if(!nextDate) break;
    if(getTimelineLabel(person, formatTimelineKey(nextDate))!==label) break;
    end+=1;
  }
  return {start, end, span:end-start+1};
}
function getTimelineSegmentSpan(person, startIndex, label){
  return getTimelineSegmentBounds(person, startIndex, label).span;
}
function getTimelineLabelWithRange(person, index, label){
  if(!label) return '';
  const dates=getTimelineDates();
  const bounds=getTimelineSegmentBounds(person, index, label);
  if(bounds.span<=1) return label;
  const startLabel=formatTimelineDate(dates[bounds.start]);
  const endLabel=formatTimelineDate(dates[bounds.end]);
  return `${startLabel} - ${endLabel} · ${label}`;
}
function getTimelineCellTitle(person, date, index, dateKey){
  const label=getTimelineLabel(person, dateKey);
  return label ? `${person} · ${getTimelineLabelWithRange(person, index, label)}` : `${person} · ${formatTimelineDate(date)}`;
}
function getPersonalTimelinePhase(date){
  const today=getKstDateParts();
  const todayUtc=toUtcFromKstDateParts(today.year, today.month, today.day);
  const targetUtc=toUtcFromKstDateParts(date.getFullYear(), date.getMonth()+1, date.getDate());
  const diffDays=Math.round((targetUtc-todayUtc)/86400000);
  if(diffDays<0) return {key:'past',label:'지난 일정'};
  if(diffDays===0) return {key:'today',label:'오늘'};
  if(diffDays===1) return {key:'tomorrow',label:'내일'};
  return {key:'upcoming',label:`예정 D-${diffDays}`};
}
function renderPersonalTimelineHoverPanel(){
  const personalNames=['박재현','장후원','정상원','이주원','김진광','정재우'];
  return `<div class="personal-timeline-hover-panel"><div class="personal-timeline-hover-group"><span class="personal-timeline-hover-title">공동 일정</span><div class="personal-timeline-hover-chip">영상취재팀 공동</div></div><div class="personal-timeline-hover-group"><span class="personal-timeline-hover-title">개별 일정</span><div class="personal-timeline-hover-grid">${personalNames.map(name=>`<div class="personal-timeline-hover-cell">${name}</div>`).join('')}</div></div></div>`;
}
function renderPersonalTimelineLegend(){
  return '<div class="personal-timeline-legend"><span class="personal-timeline-legend-chip is-today">오늘</span><span class="personal-timeline-legend-chip is-tomorrow">내일</span><span class="personal-timeline-legend-chip is-upcoming">예정</span><span class="personal-timeline-legend-chip is-shared">공동 일정</span><span class="personal-timeline-legend-chip is-personal">개별 일정</span></div>';
}
function renderPersonalTimelineItem(date, index, rows){
  const dateKey=formatTimelineKey(date);
  const phase=getPersonalTimelinePhase(date);
  const assignments=rows.map(row=>({
    label:row.label,
    value:getTimelineLabel(row.label, dateKey),
    kind:row.label==='영상취재팀 공동'?'shared':'personal'
  })).filter(item=>item.value);
  const entriesHtml=assignments.length
    ? assignments.map(item=>`<div class="personal-timeline-entry personal-timeline-entry-${item.kind}"><span class="personal-timeline-entry-name personal-timeline-entry-name-${item.kind}">${escapeHtml(item.label)}</span><p class="personal-timeline-entry-text">${escapeHtml(item.value)}</p></div>`).join('')
    : `<div class="personal-timeline-empty-shell">${renderPersonalTimelineHoverPanel()}</div>`;
  return `<article class="personal-timeline-item ${assignments.length?'has-entry':'is-empty'} personal-timeline-phase-${phase.key}" data-month="${date.getMonth()+1}"><div class="personal-timeline-rail"><span class="personal-timeline-dot"></span><div class="personal-timeline-date"><span class="personal-timeline-dday personal-timeline-dday-${phase.key}">${phase.label}</span><span class="personal-timeline-day">${date.getDate()}</span></div></div><div class="personal-timeline-content"><div class="personal-timeline-card">${entriesHtml}</div></div></article>`;
}
function setupPersonalTimelineStickyMonth(detailCol){
  if(personalTimelineStickyMonthCleanup){
    personalTimelineStickyMonthCleanup();
    personalTimelineStickyMonthCleanup=null;
  }
  const stickyEl=detailCol.querySelector('.personal-timeline-month-sticky');
  const list=detailCol.querySelector('.personal-timeline-list');
  if(!stickyEl||!list) return;
  const updateStickyMonth=()=>{
    const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
    if(!items.length) return;
    const stickyTop=stickyEl.getBoundingClientRect().bottom + 12;
    let activeItem=items[0];
    items.forEach(item=>{
      if(item.getBoundingClientRect().top<=stickyTop){
        activeItem=item;
      }
    });
    const month=activeItem.dataset.month||'';
    stickyEl.textContent=month?`${month}월`:'';
  };
  const onScroll=()=>window.requestAnimationFrame(updateStickyMonth);
  window.addEventListener('scroll', onScroll, {passive:true});
  detailCol.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', updateStickyMonth);
  updateStickyMonth();
  personalTimelineStickyMonthCleanup=()=>{
    window.removeEventListener('scroll', onScroll);
    detailCol.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', updateStickyMonth);
  };
}
function renderPersonalTimelineSchedule(view){
  const dates=getTimelineDates();
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  detailCol.classList.add('timeline-mode','personal-timeline-mode');
  document.getElementById('detailTitle').textContent=view.title;
  document.getElementById('detailSubtitle').textContent='';
  detailTable.parentElement.classList.add('timeline-card','personal-timeline-card');
  detailTable.className='data-table hidden';
  detailTable.innerHTML='';
  detailTable.insertAdjacentHTML('afterend',`<div class="personal-timeline-topbar"><div class="personal-timeline-month-sticky"></div>${renderPersonalTimelineLegend()}</div><div class="personal-timeline-list">${dates.map((date,index)=>renderPersonalTimelineItem(date, index, view.rows)).join('')}</div>`);
  const list=detailCol.querySelector('.personal-timeline-list');
  if(list){
    list.onclick=event=>{
      const item=event.target.closest('.personal-timeline-item.is-empty');
      if(!item||!list.contains(item)) return;
      const wasOpen=item.classList.contains('is-open');
      list.querySelectorAll('.personal-timeline-item.is-open').forEach(node=>node.classList.remove('is-open'));
      if(!wasOpen) item.classList.add('is-open');
    };
  }
  detailCol.onclick=event=>{
    if(event.target.closest('.personal-timeline-list')) return;
    detailCol.querySelectorAll('.personal-timeline-item.is-open').forEach(node=>node.classList.remove('is-open'));
  };
  setupPersonalTimelineStickyMonth(detailCol);
  document.getElementById('detailCol').classList.remove('hidden');
}
function renderTimelineHeaderCell(date){
  const classes=getTimelineDayClasses(date);
  return `<th class="timeline-date-header ${classes}"><span class="timeline-date-day">${date.getDate()}</span></th>`;
}
function renderTimelineDayCell(row, date, index){
  const dates=getTimelineDates();
  const person=row.label;
  const dateKey=formatTimelineKey(date);
  const label=getTimelineLabel(person, dateKey);
  const classes=['timeline-day-cell'];
  const dayClasses=getTimelineDayClasses(date);
  if(dayClasses) classes.push(dayClasses);
  let content='';
  const displayLabel=label?getTimelineLabelWithRange(person, index, label):'';
  const dataLabel=displayLabel?` data-label="${escapeHtml(displayLabel)}"`:'';
  if(label){
    classes.push('filled');
    const previousLabel=index>0?getTimelineLabel(person, formatTimelineKey(dates[index-1])):'';
    if(previousLabel!==label){
      const span=getTimelineSegmentSpan(person, index, label);
      classes.push('segment-start');
      content=`<span class="timeline-entry-label" style="width:calc(${span} * var(--timeline-cell-size) + ${Math.max(span-1, 0)}px)">${escapeHtml(displayLabel)}</span>`;
    }
  }
  return `<td class="${classes.join(' ')}" data-person="${escapeHtml(person)}" data-index="${index}" data-date="${dateKey}" title="${escapeHtml(getTimelineCellTitle(person, date, index, dateKey))}"${dataLabel}>${content}</td>`;
}
function renderTimelineRow(row){
  const dates=getTimelineDates();
  if(row.type==='section'){
    return `<tr class="timeline-row timeline-row-section"><th scope="row">${row.label}</th><td class="timeline-section-merged" colspan="${dates.length}"></td></tr>`;
  }
  return `<tr class="timeline-row timeline-row-${row.type}"><th scope="row">${row.label}</th>${dates.map((date,index)=>renderTimelineDayCell(row, date, index)).join('')}</tr>`;
}
function clearTimelinePreview(){
  document.querySelectorAll('.timeline-day-cell.preview').forEach(cell=>cell.classList.remove('preview'));
}
function cancelTimelineSelection(){
  isTimelinePainting=false;
  timelineSelectionPerson='';
  timelineSelectionStartIndex=-1;
  timelineSelectionEndIndex=-1;
  clearTimelinePreview();
}
function getTimelineSelectionCells(person, startIndex, endIndex){
  const start=Math.min(startIndex, endIndex);
  const end=Math.max(startIndex, endIndex);
  return Array.from(document.querySelectorAll('.timeline-day-cell')).filter(cell=>cell.dataset.person===person&&Number(cell.dataset.index)>=start&&Number(cell.dataset.index)<=end);
}
function updateTimelineSelection(targetCell){
  if(!targetCell||targetCell.dataset.person!==timelineSelectionPerson) return [];
  timelineSelectionEndIndex=Number(targetCell.dataset.index);
  clearTimelinePreview();
  const cells=getTimelineSelectionCells(timelineSelectionPerson, timelineSelectionStartIndex, timelineSelectionEndIndex);
  cells.forEach(cell=>cell.classList.add('preview'));
  return cells;
}
function ensureTimelineModal(){
  if(document.getElementById('timelineModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="timelineModal" class="timeline-modal hidden"><div class="timeline-modal-backdrop" onclick="closeTimelineModal()"></div><div class="timeline-modal-panel" role="dialog" aria-modal="true" aria-labelledby="timelineModalTitle"><div class="timeline-modal-header"><h3 id="timelineModalTitle">일정 입력</h3><button type="button" class="timeline-modal-close" onclick="closeTimelineModal()" aria-label="닫기">×</button></div><p id="timelineModalMeta" class="timeline-modal-meta"></p><textarea id="timelineModalInput" class="timeline-modal-input" placeholder="선택한 날짜 구간의 일정을 입력하세요"></textarea><div class="timeline-modal-actions"><button type="button" class="timeline-modal-btn" onclick="clearTimelineSelectionEntries()">지우기</button><button type="button" class="timeline-modal-btn" onclick="closeTimelineModal()">취소</button><button type="button" class="timeline-modal-btn primary" onclick="saveTimelineSelection()">저장</button></div></div></div>`);
  const modal=document.getElementById('timelineModal');
  const input=document.getElementById('timelineModalInput');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeTimelineModal();
      return;
    }
    if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){
      saveTimelineSelection();
    }
  });
  input.addEventListener('mousedown', event=>event.stopPropagation());
}
function getTimelineRangeLabel(dates){
  if(!dates.length) return '';
  const first=new Date(`${dates[0]}T00:00:00`);
  const last=new Date(`${dates[dates.length-1]}T00:00:00`);
  return dates.length===1?formatTimelineDate(first):`${formatTimelineDate(first)} - ${formatTimelineDate(last)}`;
}
function openTimelineModal(){
  if(!pendingTimelineSelection) return;
  ensureTimelineModal();
  const modal=document.getElementById('timelineModal');
  const meta=document.getElementById('timelineModalMeta');
  const input=document.getElementById('timelineModalInput');
  const labels=[...new Set(pendingTimelineSelection.dates.map(dateKey=>getTimelineLabel(pendingTimelineSelection.person,dateKey)).filter(Boolean))];
  meta.textContent=`${pendingTimelineSelection.person} | ${getTimelineRangeLabel(pendingTimelineSelection.dates)}`;
  input.value=labels.length===1?labels[0]:'';
  document.body.classList.add('timeline-modal-open');
  modal.classList.remove('hidden');
  input.focus();
  input.select();
}
function getTimelineScrollState(){
  const timelineCard=document.querySelector('.timeline-card');
  return timelineCard?{left:timelineCard.scrollLeft,top:timelineCard.scrollTop}:null;
}
function restoreTimelineScrollState(scrollState){
  if(!scrollState) return;
  requestAnimationFrame(()=>{
    const timelineCard=document.querySelector('.timeline-card');
    if(timelineCard){
      timelineCard.scrollLeft=scrollState.left;
      timelineCard.scrollTop=scrollState.top;
    }
  });
}
function ensureTimelineTooltip(){
  if(document.getElementById('timelineTooltip')) return;
  document.body.insertAdjacentHTML('beforeend','<div id="timelineTooltip" class="timeline-tooltip hidden" role="status" aria-live="polite"></div>');
}
function showTimelineTooltip(targetCell){
  const label=targetCell?.dataset.label;
  if(!label) return hideTimelineTooltip();
  ensureTimelineTooltip();
  const tooltip=document.getElementById('timelineTooltip');
  const rect=targetCell.getBoundingClientRect();
  tooltip.textContent=label;
  tooltip.classList.remove('hidden');
  const tooltipWidth=tooltip.offsetWidth;
  const left=Math.min(window.innerWidth-tooltipWidth-16, Math.max(16, rect.left));
  const top=Math.max(12, rect.top-44);
  tooltip.style.left=`${left}px`;
  tooltip.style.top=`${top}px`;
}
function hideTimelineTooltip(){
  const tooltip=document.getElementById('timelineTooltip');
  if(tooltip) tooltip.classList.add('hidden');
}
function closeTimelineModal(){
  const modal=document.getElementById('timelineModal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('timeline-modal-open');
  pendingTimelineSelection=null;
  clearTimelinePreview();
}
function writeTimelineSelection(value){
  if(!pendingTimelineSelection) return;
  const text=value.trim();
  const {person,dates,cells}=pendingTimelineSelection;
  const scrollState=getTimelineScrollState();
  dates.forEach(dateKey=>{
    if(text){
      timelineAssignments[person].set(dateKey, text);
    }else{
      timelineAssignments[person].delete(dateKey);
    }
  });
  cells.forEach(cell=>{
    const dateKey=cell.dataset.date;
    const cellIndex=Number(cell.dataset.index);
    const date=new Date(`${dateKey}T00:00:00`);
    cell.classList.remove('preview');
    cell.classList.toggle('filled', Boolean(text));
    cell.title=getTimelineCellTitle(person, date, cellIndex, dateKey);
  });
  saveTimelineAssignments();
  closeTimelineModal();
  renderTimelineSchedule(currentTimelineView);
  restoreTimelineScrollState(scrollState);
}
function saveTimelineSelection(){
  const input=document.getElementById('timelineModalInput');
  writeTimelineSelection(input?input.value:'');
}
function clearTimelineSelectionEntries(){
  writeTimelineSelection('');
}
function stopTimelinePaint(){
  if(!isTimelinePainting) return;
  isTimelinePainting=false;
  const cells=Array.from(document.querySelectorAll('.timeline-day-cell.preview'));
  if(!cells.length){
    cancelTimelineSelection();
    return;
  }
  pendingTimelineSelection={
    person:timelineSelectionPerson,
    dates:cells.map(cell=>cell.dataset.date),
    cells
  };
  timelineSelectionPerson='';
  timelineSelectionStartIndex=-1;
  timelineSelectionEndIndex=-1;
  openTimelineModal();
}
function kstToLocal(date,timeStr){
  if(!date||!timeStr||timeStr==='-') return {date:'-',time:'-'};
  const t=timeStr.replace(' KST','');
  const [hh,mm]=t.split(':').map(Number);
  const d=new Date(`${date}T${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}:00+09:00`);
  d.setHours(d.getHours()-13);
  return {
    date:`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`,
    time:`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
  };
}
function getKstDateParts(date=new Date()){
  const formatter=new Intl.DateTimeFormat('en-CA',{
    timeZone:'Asia/Seoul',
    year:'numeric',
    month:'2-digit',
    day:'2-digit'
  });
  const parts=formatter.formatToParts(date);
  return {
    year:Number(parts.find(part=>part.type==='year')?.value),
    month:Number(parts.find(part=>part.type==='month')?.value),
    day:Number(parts.find(part=>part.type==='day')?.value)
  };
}
function toUtcFromKstDateParts(year, month, day){
  return Date.UTC(year, month-1, day, -9, 0, 0, 0);
}
function getWorldCupCountdownText(){
  const today=getKstDateParts();
  const todayUtc=toUtcFromKstDateParts(today.year, today.month, today.day);
  const kickoffUtc=toUtcFromKstDateParts(2026, 6, 12);
  const diffDays=Math.round((kickoffUtc-todayUtc)/86400000);
  if(diffDays>0) return `월드컵 개막 D-${diffDays}`;
  if(diffDays===0) return '월드컵 개막 D-DAY';
  return `월드컵 개막 D+${Math.abs(diffDays)}`;
}
function updateHeaderCountdown(){
  const countdownEl=document.getElementById('headerCountdown');
  if(!countdownEl) return;
  const rawValue=getWorldCupCountdownText().replace('월드컵 개막 ','');
  const prefixEl=countdownEl.querySelector('.header-countdown-prefix');
  const numberEl=countdownEl.querySelector('.header-countdown-number');
  if(prefixEl&&numberEl){
    if(rawValue==='D-DAY'){
      prefixEl.textContent='D-';
      numberEl.textContent='DAY';
    }else if(rawValue.startsWith('D+')){
      prefixEl.textContent='D+';
      numberEl.textContent=rawValue.slice(2);
    }else if(rawValue.startsWith('D-')){
      prefixEl.textContent='D-';
      numberEl.textContent=rawValue.slice(2);
    }else{
      prefixEl.textContent='';
      numberEl.textContent=rawValue;
    }
    return;
  }
  countdownEl.textContent=getWorldCupCountdownText();
}
function hideAllPanels(){['newsCol','newsBroadcasterCol','bracketStageCol','groupCol','groupASquadCol','equipmentUserCol','mexicoStadiumCol','mexicoStadiumSectionCol','detailCol'].forEach(id=>document.getElementById(id).classList.add('hidden'));}
function clearAllActive(){['newsMenu','bracketMenu','groupASquadMenu','equipmentMenu','personalTimelineMenu','mexicoStadiumMenu'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove('active');});document.querySelectorAll('.item').forEach(el=>el.classList.remove('active'));}
function clearDetailExtras(){
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  if(personalTimelineStickyMonthCleanup){
    personalTimelineStickyMonthCleanup();
    personalTimelineStickyMonthCleanup=null;
  }
  cancelTimelineSelection();
  closeTimelineModal();
  hideTimelineTooltip();
  document.body.classList.remove('timeline-modal-open');
  document.onmouseup=null;
  detailCol.classList.remove('timeline-mode');
  detailTable.parentElement.classList.remove('timeline-card');
  detailTable.className='data-table';
  detailTable.onmousedown=null;
  detailTable.onmouseover=null;
  detailTable.onmousemove=null;
  detailTable.onmouseleave=null;
  detailTable.ondragstart=null;
  let prev=detailTable.previousElementSibling;
  while(prev&&prev.classList&&prev.classList.contains('toolbar')){const cur=prev;prev=prev.previousElementSibling;cur.remove();}
  let next=detailTable.nextElementSibling;
  while(next){const cur=next;next=next.nextElementSibling;cur.remove();}
}

function toggleMain(){const panel=document.getElementById('newsCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){panel.classList.remove('hidden');document.getElementById('newsMenu').classList.add('active');}}
function toggleBracket(){const panel=document.getElementById('bracketStageCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){panel.classList.remove('hidden');document.getElementById('bracketMenu').classList.add('active');}}
function toggleGroupASquads(){
  const panel=document.getElementById('groupASquadCol');
  const willOpen=panel.classList.contains('hidden');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('groupASquadMenu').classList.add('active');
    panel.classList.remove('hidden');
  }
}
function showGroupASquad(key, el){
  document.querySelectorAll('#groupASquadCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  squadState[key].filter='ALL';
  squadState[key].page=1;
  renderSquad(key);
}
function toggleEquipment(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('equipmentMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('equipmentMenu').classList.add('active');
    renderEquipment();
  }
}
function togglePersonalTimeline(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('personalTimelineMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('personalTimelineMenu').classList.add('active');
    renderTimelineSchedule('personal');
  }
}
function toggleMexicoStadium(){
  const panel=document.getElementById('mexicoStadiumCol');
  const willOpen=panel.classList.contains('hidden');
  hideAllPanels();
  clearAllActive();
  currentMexicoStadiumKey='';
  if(willOpen){
    document.getElementById('mexicoStadiumMenu').classList.add('active');
    panel.classList.remove('hidden');
  }
}

function showNewsYear(year, el){currentNewsYear=year;document.querySelectorAll('#newsCol .item').forEach(n=>n.classList.remove('active'));document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');document.getElementById('newsBroadcasterCol').classList.remove('hidden');document.getElementById('detailCol').classList.add('hidden');}
function activateBroadcaster(el, broadcaster){document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');renderNewsTable(currentNewsYear, broadcaster);}
function buildNewsLinkCell(link){
  if(!link) return '<span class="news-muted">-</span>';
  const label=link.includes('youtube.com')||link.includes('youtu.be')?'YouTube':'원문';
  return `<a class="news-link" href="${escapeHtml(link)}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}
function getNewsTableCacheKey(year, broadcaster){
  return `${year}:${broadcaster}`;
}
function getNewsTitleCell(entry, broadcaster){
  if(broadcaster==='MBC'){
    const [topic='']=(entry.analysis||'').split(' / ');
    if(entry.title&&topic) return `${entry.title} · ${topic}`;
    return entry.title||topic||'-';
  }
  return entry.title||'-';
}
function getNewsAnalysisCell(entry, broadcaster){
  if(!entry.analysis) return '-';
  if(broadcaster==='MBC'){
    const [, ...rest]=(entry.analysis||'').split(' / ');
    return rest.length ? rest.join(' / ') : entry.analysis;
  }
  return entry.analysis;
}
function renderNewsTable(year,broadcaster){
  clearDetailExtras();
  const newsByYear=getNewsData();
  const entries=(newsByYear[year]&&newsByYear[year][broadcaster])||[];
  document.getElementById('detailTitle').textContent=`${year} ${broadcaster}`;
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table news-table';
  const cacheKey=getNewsTableCacheKey(year, broadcaster);
  if(!renderCache.newsTables[cacheKey]){
    if(!entries.length){
      renderCache.newsTables[cacheKey]='<thead><tr><th>날짜</th><th>제목 / 프로그램</th><th>링크</th><th>주요분석</th></tr></thead><tbody><tr><td class="news-empty" colspan="4">해당 연도 데이터가 아직 비어 있습니다.</td></tr></tbody>';
    }else{
      const body=entries.map(entry=>{
        const dateText=escapeHtml(entry.date||'-');
        const titleText=escapeHtml(getNewsTitleCell(entry, broadcaster));
        const analysisText=escapeHtml(getNewsAnalysisCell(entry, broadcaster)).replace(/ \/ /g,'<br>');
        return `<tr><td>${dateText}</td><td>${titleText}</td><td class="news-link-cell">${buildNewsLinkCell(entry.link)}</td><td>${analysisText}</td></tr>`;
      }).join('');
      renderCache.newsTables[cacheKey]=`<thead><tr><th>날짜</th><th>제목 / 프로그램</th><th>링크</th><th>주요분석</th></tr></thead><tbody>${body}</tbody>`;
    }
  }
  document.getElementById('detailTable').innerHTML=renderCache.newsTables[cacheKey];
  document.getElementById('detailCol').classList.remove('hidden');
}

function showBracketStage(stage, el){document.querySelectorAll('#bracketStageCol .item').forEach(n=>n.classList.remove('active'));document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');document.getElementById('detailCol').classList.add('hidden');if(stage==='group'){document.getElementById('groupCol').classList.remove('hidden');return;}document.getElementById('groupCol').classList.add('hidden');renderKnockoutTable(stage);}
function renderKnockoutTable(stage){
  clearDetailExtras();
  const stageNames={round32:'32강',round16:'16강',quarterfinal:'8강',semifinal:'4강',final:'결승'};
  document.getElementById('detailTitle').textContent=stageNames[stage]||'';
  document.getElementById('detailSubtitle').textContent='';
  if(!renderCache.knockoutTables[stage]){
    const rows=knockoutTemplates[stage]||[];
    renderCache.knockoutTables[stage]=`<tbody>${rows.map(([match])=>{const firstSpace=match.indexOf(' ');const matchNum=firstSpace===-1?match:match.slice(0,firstSpace);const matchText=firstSpace===-1?'':match.slice(firstSpace+1);const info=knockoutSchedule[matchNum]||{date:'-',time:'-',stadium:'-'};const local=kstToLocal(info.date,info.time);return `<tr><td class="match-cell"><div class="match-badge">${matchNum}</div><div class="match-text">${matchText}</div><div class="match-meta">날짜: 현지 ${local.date} / ${info.date}</div><div class="match-meta">시간: 현지 ${local.time} / ${info.time}</div><div class="match-meta">경기장: ${info.stadium}</div></td><td class="schedule-stadium-cell">${renderScheduleStadiumMedia(info.stadium)}</td></tr>`;}).join('')}</tbody>`;
  }
  document.getElementById('detailTable').innerHTML=renderCache.knockoutTables[stage];
  document.getElementById('detailCol').classList.remove('hidden');
}

function showGroup(groupKey, el){
  document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  if(!renderCache.groupViews[groupKey]){
    const data=groupData[groupKey]||[];
    const matches=groupMatches[groupKey]||[];
    const header='<colgroup><col class="group-col-team"><col class="group-col-rank"><col class="group-col-coach"></colgroup><thead><tr><th>팀</th><th>랭킹</th><th>감독</th></tr></thead>';
    const body=`<tbody>${data.map(team=>{const flag=getFlag(team.code);const flagHtml=flag?`<img class="flag-icon" src="${flag}" alt="${team.name} flag" loading="lazy">`:'';return `<tr><td><div class="flag-cell">${flagHtml}<span>${team.name}</span></div></td><td class="group-rank-cell">${team.rank}</td><td class="group-coach-cell">${team.coach}</td></tr>`;}).join('')}</tbody>`;
    const matchSection=matches.length?`<div class="group-match-wrap"><h3 class="group-match-title">조별리그 경기</h3><div class="table-card"><table class="data-table"><tbody>${matches.map(match=>{const local=kstToLocal(match.date,match.time);const homeFlag=getFlag(match.homeCode);const awayFlag=getFlag(match.awayCode);const homeFlagHtml=homeFlag?`<img class="flag-icon" src="${homeFlag}" alt="${match.home} flag" loading="lazy">`:'';const awayFlagHtml=awayFlag?`<img class="flag-icon" src="${awayFlag}" alt="${match.away} flag" loading="lazy">`:'';return `<tr><td><span class="group-match-number">${match.number}</span></td><td><div class="vs-cell"><span class="team-side">${homeFlagHtml}<span>${match.home}</span></span><span>vs</span><span class="team-side"><span>${match.away}</span>${awayFlagHtml}</span></div><div class="match-meta">날짜: 현지 ${local.date} / ${match.date}</div><div class="match-meta">시간: 현지 ${local.time} / ${match.time}</div><div class="match-meta">경기장: ${match.stadium}</div></td><td class="schedule-stadium-cell">${renderScheduleStadiumMedia(match.stadium)}</td></tr>`;}).join('')}</tbody></table></div></div>`:'';
    renderCache.groupViews[groupKey]={tableHtml:header+body,matchSection};
  }
  document.getElementById('detailTitle').textContent=`Group ${groupKey}`;
  document.getElementById('detailSubtitle').textContent='';
  clearDetailExtras();
  document.getElementById('detailTable').className='data-table group-table';
  document.getElementById('detailTable').innerHTML=renderCache.groupViews[groupKey].tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('afterend',renderCache.groupViews[groupKey].matchSection);
  document.getElementById('detailCol').classList.remove('hidden');
}

function renderSquadPlayerCell(player){
  return `<div class="player-cell"><span class="player-photo-shell" data-player-name="${player.name}"><span class="photo-placeholder">공식 프로필</span></span><span class="player-name-text">${player.name}</span></div>`;
}

async function fetchWikipediaPlayerPhoto(name){
  const title=getPlayerPhotoTitles()[name];
  if(!title||typeof fetch!=='function') return null;
  try{
    const response=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,{
      headers:{Accept:'application/json'}
    });
    if(!response.ok) return null;
    const data=await response.json();
    return data?.thumbnail?.source||null;
  }catch(error){
    return null;
  }
}

async function fetchPlayerPhoto(name){
  if(Object.prototype.hasOwnProperty.call(playerPhotoCache,name)) return playerPhotoCache[name];
  const officialUrl=getPlayerPhotoSources()[name];
  if(officialUrl){
    playerPhotoCache[name]=officialUrl;
    return officialUrl;
  }
  const fallbackUrl=await fetchWikipediaPlayerPhoto(name);
  if(fallbackUrl){
    playerPhotoCache[name]=fallbackUrl;
    return fallbackUrl;
  }
  playerPhotoCache[name]=null;
  return playerPhotoCache[name];
}

async function hydrateSquadPhotos(){
  const shells=Array.from(document.querySelectorAll('.player-photo-shell'));
  await Promise.all(shells.map(async shell=>{
    const name=shell.dataset.playerName;
    const photoUrl=await fetchPlayerPhoto(name);
    if(!document.body.contains(shell)) return;
    if(photoUrl){
      shell.innerHTML=`<img class="player-photo player-photo-official" src="${photoUrl}" alt="${name} 대표팀 공식 프로필 사진" loading="lazy" referrerpolicy="no-referrer">`;
    }else{
      shell.innerHTML='<span class="photo-placeholder">공식 프로필</span>';
    }
  }));
}
function scheduleSquadPhotoHydration(){
  const currentVersion=++squadPhotoHydrationVersion;
  const defer=(typeof window!=='undefined'&&typeof window.requestIdleCallback==='function')
    ? callback=>window.requestIdleCallback(callback,{timeout:250})
    : callback=>window.setTimeout(callback,16);
  defer(()=>{
    if(currentVersion!==squadPhotoHydrationVersion) return;
    hydrateSquadPhotos();
  });
}

function renderSquad(key){
  clearDetailExtras();
  const state=squadState[key];
  const squad=squads[key];
  const filtered=state.filter==='ALL'?squad:squad.filter(p=>p.position===state.filter);
  const totalPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  state.page=Math.min(totalPages,Math.max(1,state.page));
  const rows=filtered.slice((state.page-1)*PAGE_SIZE,state.page*PAGE_SIZE);
  const cacheKey=`${key}:${state.filter}:${state.page}`;
  document.getElementById('detailTitle').textContent=state.title;
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table squad-table';
  if(!renderCache.squadViews[cacheKey]){
    renderCache.squadViews[cacheKey]={
      tableHtml:`<colgroup><col class="squad-col-position"><col class="squad-col-number"><col class="squad-col-player"><col class="squad-col-club"><col class="squad-col-age"><col class="squad-col-injury"></colgroup><thead><tr><th>포지션</th><th>등번호</th><th>선수</th><th>소속팀</th><th>나이</th><th>최근 부상이력</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${p.position}</td><td>${p.number}</td><td>${renderSquadPlayerCell(p)}</td><td>${p.club}</td><td>${p.age}</td><td>${p.injury}</td></tr>`).join('')}</tbody>`,
      toolbarHtml:`<div class="toolbar">${['ALL','GK','DF','MF','FW'].map(pos=>`<button class="toolbar-btn ${state.filter===pos?'active':''}" onclick="setSquadFilter('${key}','${pos}')">${pos==='ALL'?'전체':pos}</button>`).join('')}</div>`,
      paginationHtml:`<div class="pagination"><button class="page-btn" onclick="changeSquadPage('${key}',-1)" ${state.page===1?'disabled':''}>이전</button><span>${state.page} / ${totalPages}</span><button class="page-btn" onclick="changeSquadPage('${key}',1)" ${state.page===totalPages?'disabled':''}>다음</button></div>`
    };
  }
  document.getElementById('detailTable').innerHTML=renderCache.squadViews[cacheKey].tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('beforebegin',renderCache.squadViews[cacheKey].toolbarHtml);
  document.getElementById('detailTable').insertAdjacentHTML('afterend',renderCache.squadViews[cacheKey].paginationHtml);
  document.getElementById('detailCol').classList.remove('hidden');
  scheduleSquadPhotoHydration();
}
function setSquadFilter(key, filter){squadState[key].filter=filter;squadState[key].page=1;renderSquad(key);}
function changeSquadPage(key, delta){squadState[key].page+=delta;renderSquad(key);}

function renderEquipment(){
  clearDetailExtras();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  document.getElementById('equipmentUserCol').classList.remove('hidden');
  document.getElementById('detailTitle').textContent='공용장비 현황';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table equipment-table';
  if(!renderCache.equipmentSharedTable){
    const quantityOptions=Array.from({length:10}).map((_,i)=>`<option>${i+1}</option>`).join('');
    const userOptions='<option value="">선택</option><option>박재현</option><option>장후원</option><option>정상원</option><option>이주원</option><option>김진광</option><option>정재우</option>';
    const rows=Array.from({length:12}).map(()=>`<tr><td></td><td></td><td></td><td><select>${quantityOptions}</select></td><td></td><td><select>${userOptions}</select></td></tr>`).join('');
    renderCache.equipmentSharedTable=`<thead><tr><th>장비 모델명</th><th>제조사</th><th>시리얼넘버</th><th>수량</th><th>비고</th><th>사용인원</th></tr></thead><tbody>${rows}</tbody>`;
  }
  document.getElementById('detailTable').innerHTML=renderCache.equipmentSharedTable;
  document.getElementById('detailCol').classList.remove('hidden');
}

function showEquipmentPersonal(user, el){
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  clearDetailExtras();
  document.getElementById('detailTitle').textContent=`${user} 개인장비`;
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table equipment-table';
  if(!renderCache.equipmentPersonalTables[user]){
    const quantityOptions=Array.from({length:10}).map((_,i)=>`<option>${i+1}</option>`).join('');
    const rows=Array.from({length:10}).map(()=>`<tr><td></td><td></td><td></td><td><select>${quantityOptions}</select></td><td></td></tr>`).join('');
    renderCache.equipmentPersonalTables[user]=`<thead><tr><th>장비 모델명</th><th>제조사</th><th>시리얼</th><th>수량</th><th>비고</th></tr></thead><tbody>${rows}</tbody>`;
  }
  document.getElementById('detailTable').innerHTML=renderCache.equipmentPersonalTables[user];
  document.getElementById('detailCol').classList.remove('hidden');
}

function renderTimelineSchedule(viewKey='personal'){
  ensureTimelineDataReady();
  currentTimelineView=viewKey;
  const view=timelineViews[viewKey]||timelineViews.personal;
  const dates=getTimelineDates();
  clearDetailExtras();
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  if(viewKey==='personal'){
    renderPersonalTimelineSchedule(view);
    return;
  }
  if(!renderCache.timelineHeader){
    const monthCells=getTimelineMonthGroups().map(group=>`<th class="timeline-month-header" colspan="${group.span}">${group.label}</th>`).join('');
    const headerCells=dates.map(renderTimelineHeaderCell).join('');
    renderCache.timelineHeader=`<thead><tr><th class="timeline-corner-header" rowspan="2">타임라인</th>${monthCells}</tr><tr>${headerCells}</tr></thead>`;
  }
  const bodyRows=view.rows.map(renderTimelineRow).join('');
  detailCol.classList.add('timeline-mode');
  document.getElementById('detailTitle').textContent=view.title;
  document.getElementById('detailSubtitle').textContent='';
  detailTable.parentElement.classList.add('timeline-card');
  detailTable.className='data-table timeline-table';
  detailTable.innerHTML=`${renderCache.timelineHeader}<tbody>${bodyRows}</tbody>`;
  detailTable.onmousedown=event=>{
    const cell=event.target.closest('.timeline-day-cell');
    if(!cell||event.button!==0) return;
    event.preventDefault();
    hideTimelineTooltip();
    closeTimelineModal();
    cancelTimelineSelection();
    isTimelinePainting=true;
    timelineSelectionPerson=cell.dataset.person;
    timelineSelectionStartIndex=Number(cell.dataset.index);
    timelineSelectionEndIndex=Number(cell.dataset.index);
    updateTimelineSelection(cell);
  };
  detailTable.onmouseover=event=>{
    const cell=event.target.closest('.timeline-day-cell');
    if(isTimelinePainting){
      updateTimelineSelection(cell);
      return;
    }
    if(cell?.dataset.label){
      showTimelineTooltip(cell);
    }else{
      hideTimelineTooltip();
    }
  };
  detailTable.onmousemove=event=>{
    if(isTimelinePainting) return;
    const cell=event.target.closest('.timeline-day-cell');
    if(cell?.dataset.label){
      showTimelineTooltip(cell);
    }
  };
  detailTable.onmouseleave=()=>{
    if(!isTimelinePainting) hideTimelineTooltip();
  };
  detailTable.ondragstart=()=>false;
  document.onmouseup=stopTimelinePaint;
  document.getElementById('detailCol').classList.remove('hidden');
}

function renderStadiumFigure(stadium){
  return `<div class="group-match-wrap"><figure class="stadium-figure"><img class="stadium-photo" src="${stadium.imagePath}" alt="${stadium.imageAlt}" loading="lazy"><figcaption class="stadium-caption"><span>${stadium.imageCaption}</span><a class="stadium-source-link" href="${stadium.sourceUrl}" target="_blank" rel="noreferrer">${stadium.sourceLabel}</a></figcaption></figure></div>`;
}

function renderStadiumSlot(){
  return '<div class="group-match-wrap"><figure class="stadium-figure"><div class="stadium-slot">단면 사진 자리</div></figure></div>';
}

function renderMexicoStadiumDetail(stadium, sectionKey=''){
  const sectionLabel=sectionKey?mexicoStadiumSections[sectionKey]:'';
  const section=sectionKey?stadium.sections[sectionKey]:null;
  const rows=section?[...stadium.rows,...section.rows]:stadium.rows;
  const cacheKey=`${stadium.title}:${sectionKey||'root'}`;
  document.getElementById('detailTitle').textContent=sectionLabel?`${stadium.title} - ${sectionLabel}`:`${stadium.title}, ${stadium.city}`;
  document.getElementById('detailSubtitle').textContent='';
  if(!renderCache.mexicoStadiumDetails[cacheKey]){
    renderCache.mexicoStadiumDetails[cacheKey]={
      tableHtml:`<thead><tr><th>항목</th><th>내용</th></tr></thead><tbody>${rows.map(([label,value])=>`<tr><td>${label}</td><td>${value}</td></tr>`).join('')}</tbody>`,
      extraHtml:section?renderStadiumSlot():renderStadiumFigure(stadium)
    };
  }
  document.getElementById('detailTable').innerHTML=renderCache.mexicoStadiumDetails[cacheKey].tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('afterend',renderCache.mexicoStadiumDetails[cacheKey].extraHtml);
  document.getElementById('detailCol').classList.remove('hidden');
}

function showMexicoStadium(key, el){
  const stadium=mexicoStadiums[key];
  document.querySelectorAll('#mexicoStadiumCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('#mexicoStadiumSectionCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentMexicoStadiumKey=key;
  clearDetailExtras();
  document.getElementById('mexicoStadiumSectionCol').classList.remove('hidden');
  renderMexicoStadiumDetail(stadium);
}

function showMexicoStadiumSection(sectionKey, el){
  if(!currentMexicoStadiumKey) return;
  const stadium=mexicoStadiums[currentMexicoStadiumKey];
  document.querySelectorAll('#mexicoStadiumSectionCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  clearDetailExtras();
  renderMexicoStadiumDetail(stadium, sectionKey);
}

function runTests(){
  updateHeaderCountdown();
  ensureTimelineDataReady();
  const dates=getTimelineDates();
  const photoSources=getPlayerPhotoSources();
  const photoTitles=getPlayerPhotoTitles();
  const importedNewsData=getNewsData();
  const headerPrefix=document.querySelector('#headerCountdown .header-countdown-prefix')?.textContent||'';
  const headerNumber=document.querySelector('#headerCountdown .header-countdown-number')?.textContent||'';
  const headerCountdownText=`${headerPrefix}${headerNumber}`;
  console.assert(headerCountdownText.startsWith('D-')||headerCountdownText==='D-DAY'||headerCountdownText.startsWith('D+'),'Header countdown should render');
  console.assert(typeof toggleMain==='function','toggleMain should be defined');
  console.assert(typeof toggleBracket==='function','toggleBracket should be defined');
  console.assert(typeof toggleGroupASquads==='function','toggleGroupASquads should be defined');
  console.assert(typeof showGroupASquad==='function','showGroupASquad should be defined');
  console.assert(typeof toggleEquipment==='function','toggleEquipment should be defined');
  console.assert(typeof togglePersonalTimeline==='function','togglePersonalTimeline should be defined');
  console.assert(typeof saveTimelineSelection==='function','saveTimelineSelection should be defined');
  console.assert(typeof clearTimelineSelectionEntries==='function','clearTimelineSelectionEntries should be defined');
  console.assert(Array.isArray(timelineRows)&&timelineRows.length===10,'Timeline rows should exist');
  console.assert(Array.isArray(timelineEditableRows)&&timelineEditableRows.length===10,'Editable timeline rows should exist');
  console.assert(teamTimelineRows[0].label==='대한민국'&&teamTimelineRows[3].label==='체코','Team timeline row ordering should exist');
  console.assert(personalTimelineRows[0].label==='영상취재팀 공동'&&personalTimelineRows[6].label==='정재우','Personal timeline row ordering should exist');
  console.assert(timelineOfficialTeamSchedules['대한민국'][0].label.includes('vs 체코/덴마크'),'Korea official timeline should include opponent');
  console.assert(timelineOfficialTeamSchedules['멕시코'][1].label.includes('vs 대한민국'),'Mexico official timeline should include opponent');
  console.assert(timelineOfficialTeamSchedules['남아공'][2].label.includes('Estadio Monterrey'),'South Africa official timeline should include venue');
  console.assert(Array.isArray(dates)&&dates.length===153,'Timeline dates should exist');
  console.assert(formatTimelineDate(dates[0])==='3/1','Timeline should start on March 1');
  console.assert(formatTimelineDate(dates[dates.length-1])==='7/31','Timeline should end on July 31');
  console.assert(typeof toggleMexicoStadium==='function','toggleMexicoStadium should be defined');
  console.assert(photoSources['손흥민'].includes('joinkfa.com'),'Son Heung-min official photo should exist');
  console.assert(photoSources['Guillermo Ochoa'].includes('miseleccion.mx'),'Guillermo Ochoa official photo should exist');
  console.assert(photoTitles['손흥민']==='Son Heung-min','Son Heung-min photo title should exist');
  console.assert(photoTitles['Guillermo Ochoa']==='Guillermo Ochoa','Guillermo Ochoa photo title should exist');
  console.assert(photoTitles['Ronwen Williams']==='Ronwen Williams','Ronwen Williams photo title should exist');
  console.assert(photoTitles['Patrik Schick']==='Patrik Schick','Patrik Schick photo title should exist');
  console.assert(mexicoStadiums.akron.sections.route.rows[1][1]==='미디어 입구 -> 작업 구역 -> 피치 접근','Akron route section should exist');
  console.assert(mexicoStadiums.bbva.sections.mixedZone.rows[1][1]==='라커룸 출구 인접 인터뷰 구역','BBVA mixed zone section should exist');
  console.assert(Array.isArray(groupMatches.A)&&groupMatches.A.length===6,'Group A should have 6 matches');
  console.assert(Array.isArray(groupMatches.B)&&groupMatches.B.length===6,'Group B should have 6 matches');
  console.assert(Array.isArray(groupMatches.K)&&groupMatches.K.length===6,'Group K should have 6 matches');
  console.assert(Array.isArray(groupMatches.L)&&groupMatches.L.length===6,'Group L should have 6 matches');
  console.assert(groupData.A[3].name==='Czechia','Group A fourth team should be Czechia');
  console.assert(groupData.B[1].name==='Bosnia and Herzegovina','Group B second team should be Bosnia and Herzegovina');
  console.assert(groupData.D[3].name==='Türkiye','Group D fourth team should be Türkiye');
  console.assert(groupData.F[2].name==='Sweden','Group F third team should be Sweden');
  console.assert(groupData.I[2].name==='Iraq','Group I third team should be Iraq');
  console.assert(groupData.K[1].name==='Congo DR','Group K second team should be Congo DR');
  toggleMain();
  console.assert(!document.getElementById('newsCol').classList.contains('hidden'),'News panel should open');
  showNewsYear('2022', document.querySelector('#newsCol .item'));
  activateBroadcaster(document.querySelector('#newsBroadcasterCol .item'), 'KBS');
  console.assert(document.getElementById('detailTitle').textContent==='2022 KBS','News detail should render');
  console.assert(document.querySelectorAll('.news-table tbody tr').length===importedNewsData['2022'].KBS.length,'News rows should match imported sheet data');
  console.assert(importedNewsData['2022'].SBS.every(item=>item.date&&item.date.startsWith('2022.')),'SBS news dates should be filled from official publish dates');
  toggleGroupASquads();
  console.assert(!document.getElementById('groupASquadCol').classList.contains('hidden'),'Group A squad panel should open');
  showGroupASquad('korea', document.querySelector('#groupASquadCol .item'));
  console.assert(document.getElementById('detailTitle').textContent==='대한민국 선수단','Group A squad detail should render');
  console.assert(document.getElementById('detailTable').classList.contains('squad-table'),'Group A squad table class should render');
  console.assert(document.querySelector('.player-photo-shell')!==null,'Squad player photo shell should render');
  toggleEquipment();
  console.assert(!document.getElementById('equipmentUserCol').classList.contains('hidden'),'Equipment user panel should open');
  console.assert(document.getElementById('detailTitle').textContent==='공용장비 현황','Equipment panel should render');
  showEquipmentPersonal('박재현', document.querySelector('#equipmentUserCol .item'));
  console.assert(document.getElementById('detailTitle').textContent==='박재현 개인장비','Equipment personal detail should render');
  togglePersonalTimeline();
  console.assert(document.getElementById('detailTitle').textContent==='개인일정 타임라인','Personal timeline detail should render');
  console.assert(document.querySelectorAll('.personal-timeline-item').length===dates.length,'Personal timeline items should render');
  console.assert(document.querySelector('.personal-timeline-dot')!==null,'Personal timeline daily dots should render');
  toggleMexicoStadium();
  console.assert(!document.getElementById('mexicoStadiumCol').classList.contains('hidden'),'Mexico stadium panel should open');
  showMexicoStadium('akron', document.querySelector('#mexicoStadiumCol .item'));
  console.assert(!document.getElementById('mexicoStadiumSectionCol').classList.contains('hidden'),'Mexico stadium section panel should open');
  console.assert(document.getElementById('detailTitle').textContent==='아크론스타디움, 과달라하라','Mexico stadium detail should render');
  console.assert(document.querySelector('.stadium-photo')!==null,'Mexico stadium image should render');
  showMexicoStadiumSection('shooting', document.querySelector('#mexicoStadiumSectionCol .item'));
  console.assert(document.getElementById('detailTitle').textContent==='아크론스타디움 - 촬영 구역','Mexico stadium subfolder detail should render');
  console.assert(document.querySelector('.stadium-photo')===null,'Mexico stadium subfolder should not reuse parent image');
  console.assert(document.querySelector('.stadium-slot')!==null,'Mexico stadium subfolder should render image slot');
  console.assert(renderScheduleStadiumMedia('MetLife Stadium (New York/New Jersey)').includes('schedule-stadium-photo'),'Schedule stadium media should render for mapped stadium');
}

updateHeaderCountdown();
