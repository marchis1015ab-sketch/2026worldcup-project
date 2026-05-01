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
  A:[{number:'M1',home:'Mexico',homeCode:'mx',away:'South Africa',awayCode:'za',date:'2026-06-12',time:'04:00 KST',stadium:'Mexico City Stadium'},{number:'M2',home:'South Korea',homeCode:'kr',away:'Czechia',awayCode:'cz',date:'2026-06-12',time:'11:00 KST',stadium:'Estadio Guadalajara'},{number:'M25',home:'Czechia',homeCode:'cz',away:'South Africa',awayCode:'za',date:'2026-06-19',time:'01:00 KST',stadium:'Atlanta Stadium'},{number:'M28',home:'Mexico',homeCode:'mx',away:'South Korea',awayCode:'kr',date:'2026-06-19',time:'10:00 KST',stadium:'Estadio Guadalajara'},{number:'M53',home:'Czechia',homeCode:'cz',away:'Mexico',awayCode:'mx',date:'2026-06-25',time:'10:00 KST',stadium:'Mexico City Stadium'},{number:'M54',home:'South Africa',homeCode:'za',away:'South Korea',awayCode:'kr',date:'2026-06-25',time:'10:00 KST',stadium:'Estadio Monterrey'}],
  B:[{number:'M3',home:'Canada',homeCode:'ca',away:'Bosnia and Herzegovina',awayCode:'ba',date:'2026-06-13',time:'04:00 KST',stadium:'Toronto Stadium'},{number:'M8',home:'Qatar',homeCode:'qa',away:'Switzerland',awayCode:'ch',date:'2026-06-14',time:'04:00 KST',stadium:'San Francisco Bay Area Stadium'},{number:'M26',home:'Switzerland',homeCode:'ch',away:'Bosnia and Herzegovina',awayCode:'ba',date:'2026-06-19',time:'04:00 KST',stadium:'Los Angeles Stadium'},{number:'M27',home:'Canada',homeCode:'ca',away:'Qatar',awayCode:'qa',date:'2026-06-19',time:'07:00 KST',stadium:'BC Place Vancouver'},{number:'M51',home:'Switzerland',homeCode:'ch',away:'Canada',awayCode:'ca',date:'2026-06-25',time:'04:00 KST',stadium:'BC Place Vancouver'},{number:'M52',home:'Bosnia and Herzegovina',homeCode:'ba',away:'Qatar',awayCode:'qa',date:'2026-06-25',time:'04:00 KST',stadium:'Seattle Stadium'}],
  C:[{number:'M5',home:'Haiti',homeCode:'ht',away:'Scotland',awayCode:'gb-sct',date:'2026-06-14',time:'10:00 KST',stadium:'Boston Stadium'},{number:'M7',home:'Brazil',homeCode:'br',away:'Morocco',awayCode:'ma',date:'2026-06-14',time:'07:00 KST',stadium:'New York New Jersey Stadium'},{number:'M29',home:'Brazil',homeCode:'br',away:'Haiti',awayCode:'ht',date:'2026-06-20',time:'09:30 KST',stadium:'Philadelphia Stadium'},{number:'M30',home:'Scotland',homeCode:'gb-sct',away:'Morocco',awayCode:'ma',date:'2026-06-20',time:'07:00 KST',stadium:'Boston Stadium'},{number:'M49',home:'Scotland',homeCode:'gb-sct',away:'Brazil',awayCode:'br',date:'2026-06-25',time:'07:00 KST',stadium:'Miami Stadium'},{number:'M50',home:'Morocco',homeCode:'ma',away:'Haiti',awayCode:'ht',date:'2026-06-25',time:'07:00 KST',stadium:'Atlanta Stadium'}],
  D:[{number:'M4',home:'United States',homeCode:'us',away:'Paraguay',awayCode:'py',date:'2026-06-13',time:'10:00 KST',stadium:'Los Angeles Stadium'},{number:'M6',home:'Australia',homeCode:'au',away:'Türkiye',awayCode:'tr',date:'2026-06-13',time:'13:00 KST',stadium:'BC Place Vancouver'},{number:'M31',home:'Türkiye',homeCode:'tr',away:'Paraguay',awayCode:'py',date:'2026-06-20',time:'12:00 KST',stadium:'San Francisco Bay Area Stadium'},{number:'M32',home:'United States',homeCode:'us',away:'Australia',awayCode:'au',date:'2026-06-20',time:'04:00 KST',stadium:'Seattle Stadium'},{number:'M59',home:'Türkiye',homeCode:'tr',away:'United States',awayCode:'us',date:'2026-06-26',time:'11:00 KST',stadium:'Los Angeles Stadium'},{number:'M60',home:'Paraguay',homeCode:'py',away:'Australia',awayCode:'au',date:'2026-06-26',time:'11:00 KST',stadium:'San Francisco Bay Area Stadium'}],
  E:[{number:'M9',home:'Ivory Coast',homeCode:'ci',away:'Ecuador',awayCode:'ec',date:'2026-06-15',time:'08:00 KST',stadium:'Philadelphia Stadium'},{number:'M10',home:'Germany',homeCode:'de',away:'Curacao',awayCode:'cw',date:'2026-06-15',time:'02:00 KST',stadium:'Houston Stadium'},{number:'M33',home:'Germany',homeCode:'de',away:'Ivory Coast',awayCode:'ci',date:'2026-06-21',time:'05:00 KST',stadium:'Toronto Stadium'},{number:'M34',home:'Ecuador',homeCode:'ec',away:'Curacao',awayCode:'cw',date:'2026-06-21',time:'09:00 KST',stadium:'Kansas City Stadium'},{number:'M55',home:'Curacao',homeCode:'cw',away:'Ivory Coast',awayCode:'ci',date:'2026-06-26',time:'05:00 KST',stadium:'Philadelphia Stadium'},{number:'M56',home:'Ecuador',homeCode:'ec',away:'Germany',awayCode:'de',date:'2026-06-26',time:'05:00 KST',stadium:'New York New Jersey Stadium'}],
  F:[{number:'M11',home:'Netherlands',homeCode:'nl',away:'Japan',awayCode:'jp',date:'2026-06-15',time:'05:00 KST',stadium:'Dallas Stadium'},{number:'M12',home:'Sweden',homeCode:'se',away:'Tunisia',awayCode:'tn',date:'2026-06-15',time:'11:00 KST',stadium:'Estadio Monterrey'},{number:'M35',home:'Netherlands',homeCode:'nl',away:'Sweden',awayCode:'se',date:'2026-06-21',time:'02:00 KST',stadium:'Houston Stadium'},{number:'M36',home:'Tunisia',homeCode:'tn',away:'Japan',awayCode:'jp',date:'2026-06-21',time:'11:00 KST',stadium:'Estadio Monterrey'},{number:'M57',home:'Japan',homeCode:'jp',away:'Sweden',awayCode:'se',date:'2026-06-26',time:'08:00 KST',stadium:'Dallas Stadium'},{number:'M58',home:'Tunisia',homeCode:'tn',away:'Netherlands',awayCode:'nl',date:'2026-06-26',time:'08:00 KST',stadium:'Kansas City Stadium'}],
  G:[{number:'M15',home:'Iran',homeCode:'ir',away:'New Zealand',awayCode:'nz',date:'2026-06-16',time:'10:00 KST',stadium:'Los Angeles Stadium'},{number:'M16',home:'Belgium',homeCode:'be',away:'Egypt',awayCode:'eg',date:'2026-06-16',time:'04:00 KST',stadium:'Seattle Stadium'},{number:'M39',home:'Belgium',homeCode:'be',away:'Iran',awayCode:'ir',date:'2026-06-22',time:'04:00 KST',stadium:'Los Angeles Stadium'},{number:'M40',home:'New Zealand',homeCode:'nz',away:'Egypt',awayCode:'eg',date:'2026-06-22',time:'10:00 KST',stadium:'BC Place Vancouver'},{number:'M63',home:'Egypt',homeCode:'eg',away:'Iran',awayCode:'ir',date:'2026-06-27',time:'12:00 KST',stadium:'Seattle Stadium'},{number:'M64',home:'New Zealand',homeCode:'nz',away:'Belgium',awayCode:'be',date:'2026-06-27',time:'12:00 KST',stadium:'BC Place Vancouver'}],
  H:[{number:'M13',home:'Saudi Arabia',homeCode:'sa',away:'Uruguay',awayCode:'uy',date:'2026-06-16',time:'07:00 KST',stadium:'Miami Stadium'},{number:'M14',home:'Spain',homeCode:'es',away:'Cape Verde',awayCode:'cv',date:'2026-06-16',time:'01:00 KST',stadium:'Atlanta Stadium'},{number:'M37',home:'Uruguay',homeCode:'uy',away:'Cape Verde',awayCode:'cv',date:'2026-06-22',time:'07:00 KST',stadium:'Miami Stadium'},{number:'M38',home:'Spain',homeCode:'es',away:'Saudi Arabia',awayCode:'sa',date:'2026-06-22',time:'01:00 KST',stadium:'Atlanta Stadium'},{number:'M65',home:'Cape Verde',homeCode:'cv',away:'Saudi Arabia',awayCode:'sa',date:'2026-06-27',time:'09:00 KST',stadium:'Houston Stadium'},{number:'M66',home:'Uruguay',homeCode:'uy',away:'Spain',awayCode:'es',date:'2026-06-27',time:'09:00 KST',stadium:'Estadio Guadalajara'}],
  I:[{number:'M17',home:'France',homeCode:'fr',away:'Senegal',awayCode:'sn',date:'2026-06-17',time:'04:00 KST',stadium:'New York New Jersey Stadium'},{number:'M18',home:'Iraq',homeCode:'iq',away:'Norway',awayCode:'no',date:'2026-06-17',time:'07:00 KST',stadium:'Boston Stadium'},{number:'M41',home:'Norway',homeCode:'no',away:'Senegal',awayCode:'sn',date:'2026-06-23',time:'09:00 KST',stadium:'New York New Jersey Stadium'},{number:'M42',home:'France',homeCode:'fr',away:'Iraq',awayCode:'iq',date:'2026-06-23',time:'06:00 KST',stadium:'Philadelphia Stadium'},{number:'M61',home:'Norway',homeCode:'no',away:'France',awayCode:'fr',date:'2026-06-27',time:'04:00 KST',stadium:'Boston Stadium'},{number:'M62',home:'Senegal',homeCode:'sn',away:'Iraq',awayCode:'iq',date:'2026-06-27',time:'04:00 KST',stadium:'Toronto Stadium'}],
  J:[{number:'M19',home:'Argentina',homeCode:'ar',away:'Algeria',awayCode:'dz',date:'2026-06-17',time:'10:00 KST',stadium:'Kansas City Stadium'},{number:'M20',home:'Austria',homeCode:'at',away:'Jordan',awayCode:'jo',date:'2026-06-17',time:'13:00 KST',stadium:'San Francisco Bay Area Stadium'},{number:'M43',home:'Argentina',homeCode:'ar',away:'Austria',awayCode:'at',date:'2026-06-23',time:'02:00 KST',stadium:'Dallas Stadium'},{number:'M44',home:'Jordan',homeCode:'jo',away:'Algeria',awayCode:'dz',date:'2026-06-23',time:'12:00 KST',stadium:'San Francisco Bay Area Stadium'},{number:'M69',home:'Algeria',homeCode:'dz',away:'Austria',awayCode:'at',date:'2026-06-28',time:'11:00 KST',stadium:'Kansas City Stadium'},{number:'M70',home:'Jordan',homeCode:'jo',away:'Argentina',awayCode:'ar',date:'2026-06-28',time:'11:00 KST',stadium:'Dallas Stadium'}],
  K:[{number:'M23',home:'Portugal',homeCode:'pt',away:'Congo DR',awayCode:'cd',date:'2026-06-18',time:'02:00 KST',stadium:'Houston Stadium'},{number:'M24',home:'Uzbekistan',homeCode:'uz',away:'Colombia',awayCode:'co',date:'2026-06-18',time:'11:00 KST',stadium:'Mexico City Stadium'},{number:'M47',home:'Portugal',homeCode:'pt',away:'Uzbekistan',awayCode:'uz',date:'2026-06-24',time:'02:00 KST',stadium:'Houston Stadium'},{number:'M48',home:'Colombia',homeCode:'co',away:'Congo DR',awayCode:'cd',date:'2026-06-24',time:'11:00 KST',stadium:'Estadio Guadalajara'},{number:'M71',home:'Colombia',homeCode:'co',away:'Portugal',awayCode:'pt',date:'2026-06-28',time:'08:30 KST',stadium:'Miami Stadium'},{number:'M72',home:'Congo DR',homeCode:'cd',away:'Uzbekistan',awayCode:'uz',date:'2026-06-28',time:'08:30 KST',stadium:'Atlanta Stadium'}],
  L:[{number:'M21',home:'Ghana',homeCode:'gh',away:'Panama',awayCode:'pa',date:'2026-06-18',time:'08:00 KST',stadium:'Toronto Stadium'},{number:'M22',home:'England',homeCode:'gb-eng',away:'Croatia',awayCode:'hr',date:'2026-06-18',time:'05:00 KST',stadium:'Dallas Stadium'},{number:'M45',home:'England',homeCode:'gb-eng',away:'Ghana',awayCode:'gh',date:'2026-06-24',time:'05:00 KST',stadium:'Boston Stadium'},{number:'M46',home:'Panama',homeCode:'pa',away:'Croatia',awayCode:'hr',date:'2026-06-24',time:'08:00 KST',stadium:'Toronto Stadium'},{number:'M67',home:'Panama',homeCode:'pa',away:'England',awayCode:'gb-eng',date:'2026-06-28',time:'06:00 KST',stadium:'New York New Jersey Stadium'},{number:'M68',home:'Croatia',homeCode:'hr',away:'Ghana',awayCode:'gh',date:'2026-06-28',time:'06:00 KST',stadium:'Philadelphia Stadium'}]
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
  final:[
    ['M104 승자 M101 vs 승자 M102'],
    ['M103 패자 M101 vs 패자 M102']
  ]
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
  M103:{date:'2026-07-19',time:'06:00 KST',stadium:'Miami Stadium'},
  M104:{date:'2026-07-20',time:'04:00 KST',stadium:'New York New Jersey Stadium'}
};

const squads = {
  korea:[{position:'GK',number:1,name:'김승규',club:'알샤밥',age:34,injury:'-'},{position:'GK',number:21,name:'조현우',club:'울산 HD',age:33,injury:'-'},{position:'GK',number:23,name:'송범근',club:'쇼난 벨마레',age:28,injury:'-'},{position:'DF',number:4,name:'김민재',club:'바이에른 뮌헨',age:29,injury:'-'},{position:'DF',number:19,name:'김영권',club:'울산 HD',age:36,injury:'-'},{position:'DF',number:3,name:'김진수',club:'전북 현대',age:33,injury:'-'},{position:'DF',number:2,name:'이기제',club:'수원 삼성',age:32,injury:'-'},{position:'DF',number:15,name:'김문환',club:'전북 현대',age:30,injury:'-'},{position:'MF',number:7,name:'손흥민',club:'토트넘',age:33,injury:'경미한 부상'},{position:'MF',number:10,name:'이강인',club:'파리 생제르맹',age:25,injury:'-'},{position:'MF',number:6,name:'황인범',club:'즈베즈다',age:30,injury:'-'},{position:'FW',number:9,name:'황희찬',club:'울버햄튼',age:30,injury:'햄스트링'},{position:'FW',number:18,name:'조규성',club:'미트윌란',age:28,injury:'-'}],
  mexico:[{position:'GK',number:23,name:'Raúl Rangel',club:'Guadalajara',age:'-',injury:'-'},{position:'GK',number:'-',name:'Guillermo Ochoa',club:'AEL Limassol',age:'-',injury:'-'},{position:'GK',number:12,name:'Carlos Acevedo',club:'Santos Laguna',age:'-',injury:'-'},{position:'DF',number:2,name:'Jorge Sánchez',club:'PAOK',age:'-',injury:'-'},{position:'DF',number:'-',name:'Richard Ledezma',club:'Chivas',age:'-',injury:'-'},{position:'DF',number:5,name:'Johan Vásquez',club:'Genoa FC',age:'-',injury:'-'},{position:'DF',number:3,name:'César Montes',club:'Lokomotiv Moscú',age:'-',injury:'-'},{position:'DF',number:4,name:'Jesús Angulo',club:'Tigres',age:'-',injury:'-'},{position:'DF',number:19,name:'Israel Reyes',club:'América',age:'-',injury:'-'},{position:'DF',number:'-',name:'Everardo López',club:'Toluca',age:'-',injury:'-'},{position:'DF',number:'-',name:'Jesús Gallardo',club:'Toluca',age:'-',injury:'-'},{position:'MF',number:6,name:'Erik Lira',club:'Cruz Azul',age:'-',injury:'-'},{position:'MF',number:'-',name:'Denzell García',club:'FC Juárez',age:'-',injury:'-'},{position:'MF',number:8,name:'Carlos Rodríguez',club:'Cruz Azul',age:'-',injury:'-'},{position:'MF',number:17,name:'Orbelín Pineda',club:'AEK Athens',age:'-',injury:'-'},{position:'MF',number:'-',name:'Obed Vargas',club:'Atlético de Madrid',age:'-',injury:'-'},{position:'MF',number:'-',name:'Brian Gutiérrez',club:'Chivas',age:'-',injury:'-'},{position:'MF',number:14,name:'Erick Sánchez',club:'América',age:'-',injury:'-'},{position:'MF',number:'-',name:'Álvaro Fidalgo',club:'Real Betis',age:'-',injury:'-'},{position:'MF',number:25,name:'Roberto Alvarado',club:'Guadalajara',age:'-',injury:'-'},{position:'FW',number:9,name:'Julián Quiñones',club:'Al-Qadsiah',age:'-',injury:'-'},{position:'FW',number:10,name:'Alexis Vega',club:'Toluca',age:'-',injury:'-'},{position:'FW',number:7,name:'Germán Berterame',club:'Inter Miami',age:'-',injury:'-'},{position:'FW',number:22,name:'Guillermo Martínez',club:'Club Universidad Nacional',age:'-',injury:'-'},{position:'FW',number:'-',name:'Armando González',club:'Chivas',age:'-',injury:'-'},{position:'FW',number:'-',name:'Raúl Jiménez',club:'Fulham FC',age:'-',injury:'-'}],
  southAfrica:[{position:'GK',number:1,name:'Ronwen Williams',club:'Mamelodi Sundowns',age:34,injury:'-'},{position:'GK',number:16,name:'Ricardo Goss',club:'SuperSport United',age:31,injury:'-'},{position:'GK',number:23,name:'Veli Mothwa',club:'AmaZulu',age:34,injury:'-'},{position:'DF',number:20,name:'Khuliso Mudau',club:'Mamelodi Sundowns',age:30,injury:'-'},{position:'DF',number:14,name:'Grant Kekana',club:'Mamelodi Sundowns',age:32,injury:'-'},{position:'DF',number:3,name:'Mothobi Mvala',club:'Mamelodi Sundowns',age:30,injury:'-'},{position:'DF',number:5,name:'Siyanda Xulu',club:'Richards Bay',age:33,injury:'-'},{position:'DF',number:2,name:'Nyiko Mobbie',club:'Sekhukhune United',age:30,injury:'-'},{position:'MF',number:4,name:'Teboho Mokoena',club:'Mamelodi Sundowns',age:29,injury:'-'},{position:'MF',number:8,name:'Sphephelo Sithole',club:'Tondela',age:27,injury:'-'},{position:'MF',number:10,name:'Themba Zwane',club:'Mamelodi Sundowns',age:36,injury:'-'},{position:'MF',number:15,name:'Bathusi Aubaas',club:'TS Galaxy',age:30,injury:'-'},{position:'FW',number:11,name:'Percy Tau',club:'Qatar SC',age:32,injury:'-'},{position:'FW',number:9,name:'Evidence Makgopa',club:'Orlando Pirates',age:25,injury:'-'},{position:'FW',number:17,name:'Lyle Foster',club:'Burnley',age:25,injury:'-'}],
  czech:[{position:'GK',number:'-',name:'마테이 코바르',club:'PSV',age:'-',injury:'-'},{position:'GK',number:'-',name:'마틴 예들리츠카',club:'바닉 오스트라바',age:'-',injury:'-'},{position:'GK',number:'-',name:'루카스 호르니첵',club:'브라가',age:'-',injury:'-'},{position:'DF',number:'-',name:'블라디미르 쿠팔',club:'호펜하임',age:'-',injury:'-'},{position:'DF',number:'-',name:'토마스 홀스',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'DF',number:'-',name:'라디슬라브 크레이치',club:'울버햄튼 원더러스',age:'-',injury:'-'},{position:'DF',number:'-',name:'야로슬라프 젤레니',club:'스파르타 프라하',age:'-',injury:'-'},{position:'DF',number:'-',name:'데이비드 주라섹',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'DF',number:'-',name:'로빈 흐라낙',club:'호펜하임',age:'-',injury:'-'},{position:'DF',number:'-',name:'마틴 비틱',club:'볼로냐',age:'-',injury:'-'},{position:'DF',number:'-',name:'스테판 찰루펙',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'MF',number:'-',name:'토마스 수첵',club:'웨스트햄 유나이티드',age:'-',injury:'-'},{position:'MF',number:'-',name:'블라디미르 다리다',club:'흐라데츠 크라로베',age:'-',injury:'-'},{position:'MF',number:'-',name:'루카스 프로보드',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'MF',number:'-',name:'마이클 사딜렉',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'MF',number:'-',name:'파벨 술츠',club:'리옹',age:'-',injury:'-'},{position:'MF',number:'-',name:'루카스 체르브',club:'빅토리아 플젠',age:'-',injury:'-'},{position:'MF',number:'-',name:'아담 카라벡',club:'리옹',age:'-',injury:'-'},{position:'MF',number:'-',name:'토마스 라드라',club:'빅토리아 플젠',age:'-',injury:'-'},{position:'MF',number:'-',name:'데니스 비신스키',club:'빅토리아 플젠',age:'-',injury:'-'},{position:'MF',number:'-',name:'파벨 부차',club:'신시내티',age:'-',injury:'-'},{position:'FW',number:'-',name:'파트릭 쉬크',club:'바이엘 레버쿠젠',age:'-',injury:'-'},{position:'FW',number:'-',name:'모이미르 치틸',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'FW',number:'-',name:'토마스 초리',club:'슬라비아 프라하',age:'-',injury:'-'},{position:'FW',number:'-',name:'얀 클리멘트',club:'시그마 올로모우츠',age:'-',injury:'-'}]
};

const squadState = {
  korea:{filter:'ALL',page:1,title:'대한민국 대표팀 선수단'},
  mexico:{filter:'ALL',page:1,title:'멕시코 대표팀 선수단'},
  southAfrica:{filter:'ALL',page:1,title:'남아프리카 공화국 대표팀 선수단'},
  czech:{filter:'ALL',page:1,title:'체코 대표팀 선수단'}
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

let playerPhotoAliases = null;
function getPlayerPhotoAliases(){
  if(playerPhotoAliases) return playerPhotoAliases;
  playerPhotoAliases = {
  '마테이 코바르':'Matěj Kovář',
  '마틴 예들리츠카':'Martin Jedlička',
  '루카스 호르니첵':'Lukáš Horníček',
  '블라디미르 쿠팔':'Vladimír Coufal',
  '토마스 홀스':'Tomáš Holeš',
  '라디슬라브 크레이치':'Ladislav Krejčí',
  '야로슬라프 젤레니':'Jaroslav Zelený',
  '데이비드 주라섹':'David Jurásek',
  '로빈 흐라낙':'Robin Hranáč',
  '마틴 비틱':'Martin Vitík',
  '스테판 찰루펙':'Štěpán Chaloupek',
  '토마스 수첵':'Tomáš Souček',
  '블라디미르 다리다':'Vladimír Darida',
  '루카스 프로보드':'Lukáš Provod',
  '마이클 사딜렉':'Michal Sadílek',
  '파벨 술츠':'Pavel Šulc',
  '루카스 체르브':'Lukáš Červ',
  '아담 카라벡':'Adam Karabec',
  '토마스 라드라':'Tomáš Ladra',
  '데니스 비신스키':'Denis Višinský',
  '파벨 부차':'Pavel Bucha',
  '파트릭 쉬크':'Patrik Schick',
  '모이미르 치틸':'Mojmír Chytil',
  '토마스 초리':'Tomáš Chorý',
  '얀 클리멘트':'Jan Kliment'
  };
  return playerPhotoAliases;
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
  'Štěpán Chaloupek':'Štěpán Chaloupek',
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
  'Vladimír Darida':'Vladimír Darida',
  'Tomáš Ladra':'Tomáš Ladra',
  'Denis Višinský':'Denis Višinský',
  'Pavel Bucha':'Pavel Bucha',
  'Jan Kliment':'Jan Kliment',
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
  equipmentCarnetPanel:'',
  equipmentFileStoragePanel:'',
  equipmentPersonalTables:Object.create(null),
  mapPanel:'',
  newsProgrammingPanel:'',
  mexicoStadiumDetails:Object.create(null),
  timelineHeader:''
};
let newsData = null;
const NEWS_EDITOR_STORAGE_KEY = 'worldcup-guide-news-editor-v1';
const NEWS_EDITOR_WINDOW_NAME_KEY = '__worldcupGuideNewsEditor__';
const NEWS_PROGRAMMING_STORAGE_KEY = 'worldcup-guide-news-programming-v1';
const NEWS_PROGRAMMING_WINDOW_NAME_KEY = '__worldcupGuideNewsProgramming__';
const PROGRAMMING_MEMOS_STORAGE_KEY = 'jtbc_worldcup_programming_memos_v1';
const TICKER_STATE_STORAGE_KEY = 'tickerState';
const SQUAD_INJURY_STORAGE_KEY = 'worldcup-guide-squad-injury-v1';
const SQUAD_INJURY_WINDOW_NAME_KEY = '__worldcupGuideSquadInjury__';
const MEXICO_STADIUM_EDITOR_STORAGE_KEY = 'worldcup-guide-mexico-stadium-editor-v1';
const MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY = '__worldcupGuideMexicoStadiumEditor__';
const EQUIPMENT_EDITOR_STORAGE_KEY = 'worldcup-guide-equipment-editor-v1';
const EQUIPMENT_EDITOR_WINDOW_NAME_KEY = '__worldcupGuideEquipmentEditor__';
const EQUIPMENT_CARNET_STORAGE_KEY = 'worldcup-guide-equipment-carnet-v1';
const EQUIPMENT_CARNET_WINDOW_NAME_KEY = '__worldcupGuideEquipmentCarnet__';
const EQUIPMENT_FILE_STORAGE_KEY = 'worldcup-file-storage-v1';
const MAP_LOCATION_PIN_STORAGE_KEY = 'worldcup-guide-map-location-pins-v1';
const MAP_LOCATION_PIN_WINDOW_NAME_KEY = '__worldcupGuideMapLocationPins__';
let hasLoadedNewsEditorEntries = false;
let hasLoadedNewsProgrammingState = false;
let hasLoadedNewsProgrammingLocalPersistence = false;
let hasLoadedSquadInjuryEntries = false;
let hasLoadedMexicoStadiumEditorEntries = false;
let hasLoadedEquipmentEditorEntries = false;
let hasLoadedEquipmentCarnetEntries = false;
let hasLoadedMapLocationPinEntries = false;
const tickerState = {
  schedule: '',
  scheduleDate: '',
  memo: '',
  memoDate: ''
};
let currentNewsBroadcaster = '';
let currentSquadKey = '';
let currentGroupKey = '';
let currentBracketStage = '';
let currentEquipmentMode = 'shared';
let currentEquipmentUser = '';
let currentPersonalTimelineDateKey = getTodayTimelineKey();
let isEquipmentCarnetComposerOpen = false;
let isEquipmentCarnetDeleteMode = false;
let equipmentCarnetEntries = [];
const equipmentCarnetSelectedIds = new Set();
let hasLoadedEquipmentFileStorageEntries = false;
let isEquipmentFileStorageComposerOpen = false;
let isEquipmentFileStorageDeleteMode = false;
let equipmentFileStorageEntries = [];
const equipmentFileStorageSelectedIds = new Set();
let equipmentSummaryEditMode = false;
let personalEquipmentEditModes = Object.create(null);
let equipmentEditDraftRows = null;
let equipmentState = [];
let currentMapSubTab = 'region';
let currentMapActionMode = '';
const NEWS_PROGRAMMING_TEMPLATE = [
  {baseId:'jtbc-program-1', title:'아침&', koreaTime:'07:30', status:'본방', memo:''},
  {baseId:'jtbc-program-2', title:'장르가 머니', koreaTime:'10:00', status:'본방', memo:''},
  {baseId:'jtbc-program-3', title:'이가혁 라이브', koreaTime:'17:00', status:'생방', memo:''},
  {baseId:'jtbc-program-4', title:'JTBC 뉴스룸', koreaTime:'18:30', status:'생방', memo:''},
  {baseId:'jtbc-program-5', title:'사건반장', koreaTime:'19:50', status:'본방', memo:''}
];
let currentNewsProgrammingFilters = {
  date:getTodayTimelineKey(),
  liveOnly:false
};
let newsProgrammingActiveLocalDate = getTodayLocalDateString();
let currentNewsProgrammingMemoDrafts = {};
let currentNewsProgrammingSavedMemos = {};
let isNewsProgrammingSpecialComposerOpen = false;
let isNewsProgrammingSpecialTimeMenuOpen = false;
let newsProgrammingSpecialEntries = [];
let currentNewsProgrammingSpecialForm = {
  timeKey:'',
  status:'본방',
  title:'',
  memo:''
};
let currentMapLocationPinEditId = {region:'',lodging:''};
let isMapLocationPinComposerOpen = {region:false,lodging:false};
let mapLocationPinEntries = {region:[],lodging:[]};
let mapLocationPinComposerImages = {region:[],lodging:[]};
const mapSectionComposerState = {region:false,lodging:false};
const MAP_PLACES_TABLE = 'map_places';
const MAP_BUILD_VERSION = '2026-04-16-map-share-debug-02';
const placeStore = [];
let hasLoadedPlaces = false;
let mapPlacesLoadPromise = null;
let mapPlacesRealtimeChannel = null;
let hasReportedMapPlacesLoadError = false;
console.log('[MAP BUILD]', MAP_BUILD_VERSION);
console.log('[MAP Supabase project]', maskMapSupabaseProjectUrl(window.APP_CONFIG?.supabaseUrl||''));
let isHydratingPlaceCoordinates = false;
let hasHydratedPlaceCoordinates = false;
let placeComposerCategory = '';
let currentPlaceSearch = '';
let placeSearchRenderTimerId = null;
let activePlaceId = '';
let selectedPlaceCategories = [];
let mapInstance = null;
let markers = [];
let placeMarkerMap = new Map();
let placePreviewMapInstance = null;
let placePreviewMarker = null;
let placePreviewSelectedCandidate = null;
let placeLookupTimerId = null;
let placeLookupRequestId = 0;
let placeLookupAbortController = null;
let placePreviewFrameId = null;
let queuedPlacePreviewCandidate = null;
const placeCandidateSearchCache = new Map();
const placeGeocodeSearchCache = new Map();
const PLACE_LOOKUP_DEBOUNCE_MS = 450;
const PLACE_SEARCH_TIMEOUT_MS = 3200;
const PLACE_SEARCH_MAX_QUERY_BATCH = 5;
let googleMapsLoaderPromise = null;
let googleMapsReadyResolver = null;
let pendingPlaceDraft = null;
let pendingPlaceCandidates = [];
let pendingManualPlaceDraft = null;
const MAP_DEFAULT_CENTER = {lat:23.6345, lng:-102.5528};
const KNOWN_KOREAN_PLACE_FALLBACKS = [
  {
    keywords:['먹골촌'],
    name:'먹골촌',
    address:'인천광역시 강화군 화도면 해안남로 1147',
    lat:37.613643925202,
    lng:126.45648516423,
    placeId:''
  },
  {
    keywords:['paseodelareforma','파세오데라레포르마','레포르마대로','reforma'],
    name:'Paseo de la Reforma',
    displayName:'Paseo de la Reforma',
    address:'Paseo de la Reforma, Ciudad de Mexico, Mexico',
    lat:19.4268,
    lng:-99.1676,
    sourceType:'route',
    placeId:''
  },
  {
    keywords:['zócalo','zocalo','소칼로','plazadelaconstitución','plazadelaconstitucion'],
    name:'Zocalo',
    displayName:'Zocalo',
    address:'Plaza de la Constitucion, Centro Historico, Ciudad de Mexico, Mexico',
    lat:19.4326,
    lng:-99.1332,
    sourceType:'landmark',
    placeId:''
  },
  {
    keywords:['estadiobbva','bbva스타디움','bbva경기장'],
    name:'Estadio BBVA',
    displayName:'Estadio BBVA',
    address:'Guadalupe, Nuevo Leon, Mexico',
    lat:25.6687,
    lng:-100.2443,
    sourceType:'stadium',
    placeId:''
  },
  {
    keywords:['아크론스타디움','akronstadium','estadioakron'],
    name:'Estadio Akron',
    displayName:'Estadio Akron',
    address:'Zapopan, Jalisco, Mexico',
    lat:20.6819,
    lng:-103.4623,
    sourceType:'stadium',
    placeId:''
  },
  {
    keywords:['guadalajaracathedral','과달라하라대성당','catedraldeguadalajara'],
    name:'Guadalajara Cathedral',
    displayName:'Guadalajara Cathedral',
    address:'Centro, Guadalajara, Jalisco, Mexico',
    lat:20.6767,
    lng:-103.3475,
    sourceType:'landmark',
    placeId:''
  },
  {
    keywords:['멕시코시티국제공항','mexicocityinternationalairport','aicm','benitojuarezairport'],
    name:'Mexico City International Airport',
    displayName:'Mexico City International Airport',
    address:'AICM, Ciudad de Mexico, Mexico',
    lat:19.4361,
    lng:-99.0719,
    sourceType:'airport',
    placeId:''
  },
  {
    keywords:['hiltonreforma','힐튼레포르마','hiltonmexicocityreforma'],
    name:'Hilton Mexico City Reforma',
    displayName:'Hilton Mexico City Reforma',
    address:'Av. Juarez 70, Centro, Ciudad de Mexico, Mexico',
    lat:19.4345,
    lng:-99.1479,
    sourceType:'hotel',
    placeId:''
  },
  {
    keywords:['reforma222','레포르마222'],
    name:'Reforma 222',
    displayName:'Reforma 222',
    address:'Paseo de la Reforma 222, Juarez, Ciudad de Mexico, Mexico',
    lat:19.4286,
    lng:-99.1617,
    sourceType:'shopping_mall',
    placeId:''
  }
];
const PLACE_CATEGORIES = [
  {value:'숙소', label:'숙소', tone:'lodging', color:'#2563eb'},
  {value:'식당', label:'식당', tone:'restaurant', color:'#f97316'},
  {value:'병원', label:'병원', tone:'hospital', color:'#16a34a'},
  {value:'방송거점', label:'방송거점', tone:'broadcast', color:'#7c3aed'},
  {value:'주차', label:'주차', tone:'parking', color:'#0ea5e9'},
  {value:'공항/교통', label:'공항/교통', tone:'transport', color:'#0891b2'},
  {value:'기타', label:'기타', tone:'other', color:'#64748b'}
];
const PLACE_CATEGORY_META_BY_VALUE = new Map(PLACE_CATEGORIES.map(item=>[item.value, item]));
const PLACE_USAGE_TYPES = ['라이브 포인트','집결','주차','식사','숙소','비상','장비','이동'];
const SELECT_PLACEHOLDER_VALUES = ['선택','카테고리','카테고리 선택','용도','용도 선택','분류','분류 선택'];
const MAP_LOCATION_PIN_CATEGORIES = [
  {value:'restaurant', label:'식당', tone:'restaurant'},
  {value:'lodging', label:'숙소', tone:'lodging'},
  {value:'broadcast', label:'방송거점', tone:'broadcast'},
  {value:'hospital', label:'병원', tone:'hospital'},
  {value:'mart', label:'마트/편의점', tone:'mart'},
  {value:'other', label:'기타', tone:'other'}
];
const EQUIPMENT_SHARED_USERS = ['박재현','장후원','정상원','이주원','김진광','정재우'];
const equipmentSummaryData = [
  {장비:'ENG BODY', 모델명:'AJ-HPX3100', 제조사:'PANASONIC', 시리얼넘버:'F1TAA0729', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'ENG BODY', 모델명:'AJ-CX4000G', 제조사:'PANASONIC', 시리얼넘버:'JOTRA0003', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'ENG BODY', 모델명:'AJ-HPX3100', 제조사:'PANASONIC', 시리얼넘버:'G1TAA0793', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'ENG BODY', 모델명:'AJ-HPX3100', 제조사:'PANASONIC', 시리얼넘버:'G1TAA0827', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'ENG BODY', 모델명:'AJ-HPX3100', 제조사:'PANASONIC', 시리얼넘버:'G1TAA0789', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'ENG BODY', 모델명:'AJ-HPX3100', 제조사:'PANASONIC', 시리얼넘버:'F1TAA0734', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'VIEW FINDER', 모델명:'AJ-HVF21KG', 제조사:'PANASONIC', 시리얼넘버:'F1A0784MY', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'VIEW FINDER', 모델명:'AJ-CVF25G', 제조사:'PANASONIC', 시리얼넘버:'JOTRA0008', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'VIEW FINDER', 모델명:'AJ-HVF21KG', 제조사:'PANASONIC', 시리얼넘버:'F1A0771MY', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'VIEW FINDER', 모델명:'AJ-HVF21KG', 제조사:'PANASONIC', 시리얼넘버:'F1A0788MY', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'VIEW FINDER', 모델명:'AJ-HVF21KG', 제조사:'PANASONIC', 시리얼넘버:'F1A0793MY', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'VIEW FINDER', 모델명:'AJ-HVF21KG', 제조사:'PANASONIC', 시리얼넘버:'F1A0783MY', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'LENS', 모델명:'HA18x7.6BERM-M1B', 제조사:'FUJINON', 시리얼넘버:'4134204', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'LENS', 모델명:'UA18x7.6BERD-S6', 제조사:'FUJINON', 시리얼넘버:'6520318', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'LENS', 모델명:'HA18x7.6BERM-M1B', 제조사:'FUJINON', 시리얼넘버:'4134421', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'LENS', 모델명:'HA18x7.6BERM-M1B', 제조사:'FUJINON', 시리얼넘버:'4135223', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'LENS', 모델명:'HA18x7.6BERM-M1B', 제조사:'FUJINON', 시리얼넘버:'4134721', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'LENS', 모델명:'HA18x7.6BERM-M1B', 제조사:'FUJINON', 시리얼넘버:'4134748', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'W/L-송신기', 모델명:'SK3063-U', 제조사:'SENNHEISER', 시리얼넘버:'12073', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'W/L-송신기', 모델명:'SK 500 G4', 제조사:'SENNHEISER', 시리얼넘버:'1438003499', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'W/L-송신기', 모델명:'SK3063-U', 제조사:'SENNHEISER', 시리얼넘버:'120724', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'W/L-송신기', 모델명:'SK3063-U', 제조사:'SENNHEISER', 시리얼넘버:'120740', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'W/L-송신기', 모델명:'SK3063-U', 제조사:'SENNHEISER', 시리얼넘버:'120731', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'W/L-송신기', 모델명:'SK3063-U', 제조사:'SENNHEISER', 시리얼넘버:'120743', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'W/L-수신기', 모델명:'EK3241', 제조사:'SENNHEISER', 시리얼넘버:'107412', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'W/L-수신기', 모델명:'EK6042', 제조사:'SENNHEISER', 시리얼넘버:'1060003411', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'W/L-수신기', 모델명:'EK3241', 제조사:'SENNHEISER', 시리얼넘버:'107403', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'W/L-수신기', 모델명:'EK3241', 제조사:'SENNHEISER', 시리얼넘버:'107405', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'W/L-수신기', 모델명:'EK3241', 제조사:'SENNHEISER', 시리얼넘버:'107418', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'W/L-수신기', 모델명:'EK3241', 제조사:'SENNHEISER', 시리얼넘버:'107392', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'TRIPOD', 모델명:'DV 10 SB', 제조사:'SACHTLER', 시리얼넘버:'G11 1219', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'TRIPOD', 모델명:'DV 10 SB', 제조사:'SACHTLER', 시리얼넘버:'12SBK208849', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'TRIPOD', 모델명:'DV 10 SB', 제조사:'SACHTLER', 시리얼넘버:'H11 1232', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'TRIPOD', 모델명:'DV 10 SB', 제조사:'SACHTLER', 시리얼넘버:'G11 1180', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'TRIPOD', 모델명:'', 제조사:'SACHTLER', 시리얼넘버:'C1709A15080', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'TRIPOD', 모델명:'DV 10 SB', 제조사:'SACHTLER', 시리얼넘버:'G11 1163', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'ML7 1301127', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'110000006', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'110000191', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'110000114', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'248051', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'LED LIGHT', 모델명:'ML-7', 제조사:'MATRIX LIGHT', 시리얼넘버:'110000197', 수량:1, 비고:'', 사용자:'정재우'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'박재현'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'장후원'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'이주원'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'정상원'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'김진광'},
  {장비:'SHURE MIC', 모델명:'', 제조사:'SHURE', 시리얼넘버:'-', 수량:1, 비고:'', 사용자:'정재우'}
];
let currentNewsEditingKey = '';
let currentNewsDeletingKey = '';
let pendingNewsEditorContext = null;
let pendingSquadInjuryContext = null;
let pendingMexicoStadiumEditorContext = null;
let pendingEquipmentEditorContext = null;
const groupRankSelections = Object.create(null);
const thirdPlaceRankingState = {
  thirdPlaceRanking:[],
  qualifiedThirdPlaceTeams:[],
  eliminatedThirdPlaceTeams:[],
  qualifiedThirdPlaceGroups:[],
  thirdPlaceSlotAssignments:Object.create(null),
  thirdPlaceSlotDescriptors:[]
};
const tournamentState = {
  groupStandings:Object.create(null),
  groupStandingsReady:Object.create(null),
  thirdPlaceRanking:[],
  qualifiedThirdPlaceTeams:[],
  eliminatedThirdPlaceTeams:[],
  roundOf32Matches:[],
  roundOf16Matches:[],
  quarterFinalMatches:[],
  semiFinalMatches:[],
  thirdPlaceMatch:null,
  finalMatch:null
};
const knockoutResultState = Object.create(null);
let newsEditorEntrySeq = 0;
const newsEditorEntries = Object.create(null);
const squadInjuryEntries = Object.create(null);
const mexicoStadiumEditorEntries = Object.create(null);
const equipmentEditorEntries = Object.create(null);
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
function parseNewsDate(value=''){
  const normalized=normalizeNewsDate(value);
  if(!normalized) return 0;
  if(/^\d{4}\.\d{2}\.\d{2}$/.test(normalized)){
    const [year,month,day]=normalized.split('.');
    const parsed=Date.UTC(Number(year), Number(month)-1, Number(day));
    return Number.isFinite(parsed) ? parsed : 0;
  }
  if(/^\d{4}\.\d{2}$/.test(normalized)){
    const [year,month]=normalized.split('.');
    const parsed=Date.UTC(Number(year), Number(month)-1, 1);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  const sanitized=String(value||'').trim().replace(/\./g,'-').replace(/\//g,'-');
  const parsed=Date.parse(sanitized);
  return Number.isFinite(parsed) ? parsed : 0;
}
function getNewsData(){
  if(newsData) return newsData;
  newsData = {
  "2026": {
    "KBS": [],
    "MBC": [],
    "SBS": []
  },
  "2022": {
    "KBS": [{"date":"2022.08.13","title":"카타르 월드컵 100일 앞으로…미리 가 본 베이스 캠프 | KBS 뉴스","link":"","analysis":"카타르 월드컵 D-100일, 취재진들이 미리 가 본 베이스 캠프 sk"},{"date":"2022.09.19","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5559214","analysis":"월드컵때 입을 유니폼 공개  행사 sk"},{"date":"2022.09.20","title":"[뉴스 더하기] 카타르 월드컵 ‘두 달 앞으로’","link":"","analysis":"카타르 월드컵 D-61 ‘두 달 앞으로’ 대표팀 활약 기대, 허정무 전 국가대표 감독 int"},{"date":"2022.09.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5560394","analysis":"본격적인 훈련 돌입, 손흥민 선수 int"},{"date":"2022.09.29","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5567243","analysis":"카타르 월드컵 기념스티커 구매 열풍, 일반리포트"},{"date":"2022.10.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5584260","analysis":"2002 영웅 히딩크 한국 방문 int"},{"date":"2022.10.27","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5588406","analysis":"중동 첫 월드컵 D-30 현지 월드컵 분위기, 특파원 MNG"},{"date":"2022.11.13","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600316","analysis":"컨테이너 숙박대란, 공사중인 숙박 시설물 sk"},{"date":"2022.11.13","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600336","analysis":"경기장과의 거리가 짧아서 하루에 여러 경기 관전 가능, 경기장 인근 sk "},{"date":"2022.11.14","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5600401","analysis":"축구대표팀 카타르월드컵 출발, 인천공항 단체촬영sk 및 int"},{"date":"2022.11.14","title":"축구대표팀 드디어 결전지 입성…경기장도 준비 완료","link":"","analysis":"도하에 착륙 후 버스에 탑승하기 전 국가대표팀들 int"},{"date":"2022.11.15","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5602120","analysis":"월드컵 첫 상대팀 우르과이, 아부다비에서 비공개 훈련 취재진 진입 차단."},{"date":"2022.11.19","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5605413","analysis":"해외 노동자들의 열악한 환경 취재, 촬영장비 꺼낼때마다 촬영 제지, 제지당하는 덴마크 언론사 자료확보, 취재기자std"},{"date":"2022.11.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5605820","analysis":"잘 곳이 없는 카타르 월드컵, 완공도 안된 컨테이너 숙박 취재"},{"date":"2022.11.21","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5606444","analysis":"벤투호 경기장 첫 답사 잔디 상태 집중 점검, 훈련sk 우르과이선수 기자회견sync"},{"date":"2022.11.24","title":"“도하에서도 대한민국!” 붉은 악마·교민, 응원전도 준비 완료 | KBS 뉴스","link":"","analysis":"붉은 악마·교민, 응원전 취재, 기자std 거리응원 시민int"},{"date":"2022.11.25","title":"[월드컵 영상] 전 세계가 놀란 한국의 응원 패션 ‘와~와~와우~’ | KBS 뉴스","link":"","analysis":"[월드컵 영상] 전 세계가 놀란 한국의 응원 패션"},{"date":"2022.11.25","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5610315","analysis":"카타르 현장에서 우리나라 선수들을 응원하는 응원단을 포커스를 둠"},{"date":"2022.11.17","title":"손흥민 \"잊지 못할 월드컵 만들겠다\"...벤투호 최종 엔트리 평가 및 카타르 월드컵 현지 상황 [사사건건 플러스]","link":"","analysis":"손흥민 \"잊지 못할 월드컵 만들겠다\" 손흥민 카타르공항 입성sk, 교민 현장 연결int, 국가대표훈련sk"},{"date":"2022.11.22","title":"","link":"https://www.youtube.com/watch?v=7HP8tyllzdw","analysis":"행사장 치안 문제? 인종차별 반대 퍼포먼스? 논란 속 카타르 월드컵, 경기장 외부 행사sk, 문제의 현장연결 영상 활용"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611280","analysis":"카타르에 부족한 숙박, 까다로운규정에 두바이로 몰린 축구팬들 sk 및 축구팬 int, 기자std"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611577","analysis":"‘욱일기 응원 논란’ 일본, 욱일기 들고 있는 일본 축구팬 자료사진 활용"},{"date":"2022.11.28","title":"카타르 월드컵에도 부는 ‘한류 바람’…다같이 “대한민국” | KBS 뉴스","link":"","analysis":"카타르 월드컵에도 부는 ‘한류 바람’, 카타르 코니시 해변에 자리 잡은 우리나라 홍보관sk, 북적거리는 인파sk"},{"date":"2022.11.28","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5611717","analysis":"‘문어’ 이영표의 가나전 해법…“역습, 초조해질 때까지 기다려라!” 이영표 전 국가대표 int"},{"date":"2022.11.30","title":"","link":"https://news.kbs.co.kr/news/pc/view/view.do?ncd=5613325","analysis":"[크랩] “건강한 일주일이 주어진다면 강인이 경기를 직접 보고 싶다” 이강인 선수 int (과거 자료 활용)"},{"date":"2022.12.05","title":"","link":"https://www.youtube.com/watch?v=cJf0hm8fCj8","analysis":"손흥민과 네이마르 에이스 맞대결, 네이마르int 자료화면, 브라질 현지기자 int"}],
    "MBC": [{"date":"8.24","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6401344_35744.html","analysis":"우승트로피 월드투어 및 감독 및 은퇴선수 인터뷰 / 우승트로피 월드 투어 행사. 행사 기본 스케치 및 인터뷰"},{"date":"9.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6407413_35744.html","analysis":"이강인 대표팀 발탁 / 이강인 스페인 영상 및 대표팀 영상 "},{"date":"9.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409265_35744.html","analysis":"새 유니폼 공개 / 새 유니폼 공개 행사. 행사 기본 스케치 및 인터뷰"},{"date":"9.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409263_35744.html","analysis":"손흥민 대표팀 합류 / 손흥민 EPL 영상 이외 NFC훈련장 입성 스케치 및 인터뷰"},{"date":"9월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6409643_35744.html","analysis":"손흥민 이강인 위주 대표팀 훈련 스케치 / 대표팀 훈련 스케치 위주 손흥민 공식인터뷰 "},{"date":"9.21","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410010_35744.html","analysis":"평가전 앞두고 대표팀 훈련 이강인 / 대표팀 훈련 스케치 위주 이강인 공식인터뷰 유튜브 활용 "},{"date":"9.22","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410382_35744.html","analysis":"평가전 앞두고 대표팀 훈련 벤투 / 대표팀 훈련 스케치 위주 벤투 공식인터뷰 유튜브 활용 "},{"date":"9.22","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410381_35744.html","analysis":"평가전 앞두고 대표팀 훈련 김민재 / 대표팀 훈련, 소속팀 경기영상 위주 김민재 공식 인터뷰 활용"},{"date":"9.23","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410750_35744.html","analysis":"코스타리카 평가전 / 경기전 분위기, 관중 스케치 인터뷰, 경기영상"},{"date":"9.24","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6410927_35744.html","analysis":"전날 코스타리카 평가전   / 경기 중계 영상, 경기 후 인터뷰 "},{"date":"9.26","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6411459_35744.html","analysis":"마지막 대표팀 훈련 이강인  / 훈련 영상 벤투 공식 인터뷰"},{"date":"9.27","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6411836_35744.html","analysis":"카메룬 평가전 / 관중 인터뷰 영상 위주"},{"date":"9.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6412226_35744.html","analysis":"전날 카메룬 평가전 벤투 이강인 / 중계영상이 아닌 이강인 ENG 영상, 훈련 영상 벤투 공식 인터뷰"},{"date":"9.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6412225_35744.html","analysis":"전날 카메룬 평가전 분석 / 중계 영상과 공식 인터뷰 및 개별 인터뷰 "},{"date":"10.21","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6419486_35744.html","analysis":"유럽파 제외 국내파 소집 / 국내 경기영상 및 훈련영상 위주"},{"date":"10.28","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6421761_35744.html","analysis":"최종 평가전 마지막 소집 / 훈련 영상 벤투 공식 인터뷰"},{"date":"11.2","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423262_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상 과 전날 선수들 훈련 공식 인터뷰"},{"date":"11.2","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423261_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상"},{"date":"11.3","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423596_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상"},{"date":"11.3","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423597_35744.html","analysis":"최종 평가전 손흥민 부상 / 소속팀 리그 영상 "},{"date":"11.4","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6423937_35744.html","analysis":"최종 평가전 손흥민 수술 및 거리응원 취소 / 소속팀 리그 영상 및 예전 거리응원 자료영상"},{"date":"11.5","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6424093_35744.html","analysis":"최종 평가전 손흥민 수술 / 소속팀 리그 영상 과 선수들 훈련 공식 인터뷰"},{"date":"11.8","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425036_35744.html","analysis":"최종명단 발표 D-4 / 훈련 영상 및 현장 이벤트 스케치"},{"date":"11.9","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425403_35744.html","analysis":"손준호 / 소속팀 및 국가대표 영상 과 훈련영상"},{"date":"11월 10일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425776_35744.html","analysis":"최종 평가전 소집 손흥민 발탁 여부 / 과거 평가전 과 훈련영상 벤투 공식 인터뷰"},{"date":"11월 10일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6425775_35744.html","analysis":"최종 평가전 앞두고 손흥민  / 모든 손흥민 영상 및 인터뷰 짜집기"},{"date":"11.11","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426139_35744.html","analysis":"같은 조 상대팀 최종명단 발표 / 각국 최종명단 공식 영상 활용"},{"date":"11.11","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426138_35744.html","analysis":"최종평가전 및 최종명단 발표 D-1 / 이전 평가전 영상 활용"},{"date":"11.12","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426302_35744.html","analysis":"최종명단 발표  / 최종명단 공식영상 과 현장 벤투 인터뷰 "},{"date":"11.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426479_35744.html","analysis":"대표팀 출국 (도하) 현지 스케치 및 경기장 스케치 / 현지 숙박시설 스케치 및 기자 스탠드업"},{"date":"11.13","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426478_35744.html","analysis":"수술 후 손흥민 / sns 와 제보 영상, 김민재 소속팀 영상 활용"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426875_35744.html","analysis":"[스포츠 영상]카타르 대표팀 숙소 / 숙소 촬영"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426871_35744.html","analysis":"월드컵 7번 관련 및 대표팀 현지 도착 / 인스타 게시물과 공항 현장 스케치 "},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426857_35744.html","analysis":"카타르 숙박시설 점검 / 앞선 두 리포트 11일, 13일 영상 재사용 숙박점검 리포트 기자 스탠드업"},{"date":"11.14","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6426855_35744.html","analysis":"월드컵 CG 대표팀 카타르 입성 / 카타르 입성 현장 스케치 및 인터뷰"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427277_35744.html","analysis":"같은 조 우루과이 관련"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427275_35744.html","analysis":"김민재 카타르 입성"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427260_35744.html","analysis":"카타르 음주 관련 현지 취재"},{"date":"11.15","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427259_35744.html","analysis":"카타르 첫 훈련 이강인"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427659_35744.html","analysis":"같은 조 가나 관련"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427658_35744.html","analysis":"카타르 김민재"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427649_35744.html","analysis":"우루과이 공개 훈련"},{"date":"11.16","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6427648_35744.html","analysis":"손흥민 합류 및 대표팀 공개 훈련"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428075_35744.html","analysis":"가나 평가전 "},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428074_35744.html","analysis":"카타르 현지 행사"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428063_35744.html","analysis":"현지 경기장 시설 점검"},{"date":"11.17","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428062_35744.html","analysis":"대표팀 훈련 손흥민"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428450_35744.html","analysis":"러우전쟁여파 폴란드 카타르 입성"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428449_35744.html","analysis":"포르투갈 최종 평가전"},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428448_35744.html","analysis":"월드컵 앞두고 응원 메시지 "},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428435_35744.html","analysis":"가나 최종 평가전 "},{"date":"11.18","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428434_35744.html","analysis":"대표팀 훈련 벤투 손흥민 이강인"},{"date":"11.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428608_35744.html","analysis":"가나 카타르 입성"},{"date":"11.19","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428607_35744.html","analysis":"대표팀 훈련 벤투"},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428758_35744.html","analysis":"같은 조 상대팀 훈련 스케치 "},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428756_35744.html","analysis":"카타르 현지 진행 월드컵 개막식 행사 "},{"date":"11월 20일","title":"뉴스데스크","link":"https://imnews.imbc.com/replay/2022/nwdesk/article/6428757_35744.html","analysis":"현지 응원단 취재"}],
    "SBS": [{"date":"2022.11.15","title":"결전지 도하에서 첫 훈련…김민재도 오늘 합류","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006972034\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM","analysis":"카타르 월드컵 개최 전 훈련 및 기자회견 취재를 통한 준비 모습 및 현지 합류 선수들 취재.  / 축구협회 인사이드캠 제공 영상 활용."},{"date":"2022.11.16","title":"손흥민, 부기 여전히 있지만 \u0027마스크 투혼\u0027 예고","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006973549\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"카타르 월드컵 개최 전 훈련 및 기자회견 취재를 통한 준비 모습 및 현지 합류 선수들 취재. / 축구협회 인사이드캠 제공 영상 활용."},{"date":"2022.11.16","title":"6번째 우승 노리는 브라질, 슈퍼스타들 완전체로 첫 훈련","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006973574\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"주요 우승팀 훈련 영상 취재 후 단신 처리."},{"date":"2022.11.17","title":"가짜 팬\u0027 의혹까지…또 인권 침해 논란","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006975168\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"외신 및 자료화면에 현장 스탠딩을 통한 제작. 스탠딩 배경이 애매한 경우 앞부분 상징적 이미지를 타이트하게 넣어주고 화면전환."},{"date":"2022.11.18","title":"필승 상대\u0027 가나, 만만치 않다…세트피스 경계령","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006976530\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개최전 같은 조 강팀 마지막 평가전 현지 취재."},{"date":"2022.11.18","title":"4년 전 눈물 쏟았지만…황희찬 \"이번엔 웃는다!\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006976529\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현지 환경에 따른 훈련 시간 변화를 훈련장 타임랩스 촬영."},{"date":"2022.11.19","title":"가나 · 포르투갈 대표팀 입성…달아오른 도하","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977052\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"같은 조 주요팀 현지 도착 및 분위기 취재"},{"date":"2022.11.19","title":"해설위원 이승우 \"1승 1무 1패 예상\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977059\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"주요 해설위원들 리허설 및 훈련현장 동행 취재"},{"date":"2022.11.20","title":"29일간의 열전\u0027 사상 첫 겨울 · 중동 월드컵 곧 개막","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977616\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개막날 현장 라이브 현장 진행. 미리 취재 해놓은 각국 현지 응원 분위기로 엔딩."},{"date":"2022.11.20","title":"도하 시내 막 올린 팬 페스티벌…이미 응원 열기 \u0027펄펄\u0027","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006977619\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"팬들의 밤 행사 취재를 통해 각국 팬들의 응원 및 현지 반응을 취재 할 수 있는 포인트."},{"date":"2022.11.21","title":"3경기 모두 여기서…벤투호의 \u0027결전의 장소\u0027 평가는?","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006979049\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"개막 이튿날도 한국 경기가 이뤄질 경기장 내부에서 현장 뉴스 진행."},{"date":"2022.11.22","title":"이승우 \"경계 1호는 발베르데…수비 약점 공략도 방법\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006980549\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현역 선수 해설위원 동행 상대팀 훈련 보면서 분석. 주변에 유명 유튜버팀들도 같이 동행. (유튜버: 슛포러브)"},{"date":"2022.11.23","title":"\"대∼한민국!\" 결전 앞두고 카타르에 붉은악마 입성","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006982168\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"별도의 비디오머그 팀이 한국에서부터 팔로우하여 취재한것으로 보임."},{"date":"2022.11.25","title":"홈경기인 줄…카타르 물들인 붉은 악마 응원","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984909\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"붉은악마와 동행취재하는 비디오머그팀의 액션캠 스케치 및 인터뷰 활용."},{"date":"2022.11.25","title":"광장에서 오랜만에 \"대∼한민국!\"…깔끔한 뒷정리까지","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984906\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"한국 다양한 장소 거리응원 취재."},{"date":"2022.11.25","title":"현란한 \u0027입담 드리블\u0027…\"골대 감사합니다\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006984901\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현역 선수 해설위원과 믹스드존 취재를 통해 대표팀 선수들과 친근한 반응들을 취재. 장소의 제약으로 액션캠 활용한것으로 보임."},{"date":"2022.11.29","title":"하얗게 불태운 가나전 \u0027마지막 10분\u0027…응원석 현장 모습","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006989109\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"관중석 내 카메라 장비로 촬영이 안 되어 핸드폰 또는 액션캠으로 추측 되는 영상으로 양팀 응원단들 리액션 및 인터뷰 등 취재하여 리포트 제작한것으로 보임."},{"date":"2022.11.30","title":"앙숙 대결\u0027 미국이 웃었다…이란 선수 위로한 미국 선수","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006990776\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"정치적 이슈가 있는 국가간의 경기 및 응원단 반응 취재."},{"date":"2022.12.02","title":"\"우리는 태극전사 보유국\"…도하의 붉은 물결","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006993750\u0026plink=THUMB\u0026cooper=SBSNEWSPROGRAM\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현지 교민들 단체 응원 취재"},{"date":"2022.11.11","title":"1박 28만 원인데…\u0027 카타르 월드컵 방문객 숙소 논란","link":"https://www.youtube.com/watch?v=CFDYGCkRLoM","analysis":"카타르 월드컵 팬 숙소 열악함 논란. 1박 28만원 컨테이너 숙소 사진 공개 후 비판."},{"date":"2022.11.18","title":"우리가 \u0027치맥\u0027 먹을 때, H조 나라 사람들은?…우루과이·포르투갈·가나 유학생에게 물어봤다","link":"https://www.youtube.com/watch?v=JWQ1NlUZCaQ","analysis":"H조 상대국 유학생 인터뷰. 우루과이, 가나, 포르투갈의 축구 문화와 음식 소개."},{"date":"2022.11.21","title":"불 붙은 월드컵 마케팅…손흥민 \u0027원톱\u0027","link":"https://www.youtube.com/watch?v=HU5yXp54XJk","analysis":"월드컵 맞아 손흥민 중심 마케팅 활발. 이태원 참사로 대규모 거리응원 취소 소식."},{"date":"2022.11.17","title":"더 빠르게, 더 정확하게\u0027…반자동 오프사이드 판독 \u0027첫 선\u0027","link":"https://www.youtube.com/watch?v=VfaOkazEwkA","analysis":"카타르 월드컵에 도입된 반자동 오프사이드 기술(SAOT) 설명. AI 기반 판독 시스템으로 더 빠르고 정확한 오프사이드 판정."},{"date":"2022.11.23","title":"붉은악마 생업 있나요? 네, 심지어 미국 회계사더군요 / 비머 in 카타르 ep.01","link":"https://www.youtube.com/watch?v=9pvej3LJ4Is","analysis":"카타르 월드컵 현지 취재 시작. 붉은악마 응원단과 함께 출국, 다양한 직업의 응원단원들 인터뷰."},{"date":"2022.11.19","title":"카타르에서 꼭 기억해야 할 3가지 원칙…\u0027한국에서처럼 행동했다가 큰일 나요\u0027","link":"https://www.youtube.com/watch?v=vQTCVHSmHnw","analysis":"카타르 현지 문화와 법규 주의사항. 주류 반입 금지, 복장 규정 등 여행자 필수 정보."},{"date":"2022.11.24","title":"[이 시각 도하] 대한민국 vs 우루과이, 결전의 장소에서 달아오른 응원 열기","link":"https://www.youtube.com/watch?v=F8J9t9uRt3Y","analysis":"한국 vs 우루과이 경기 전 현지 경기장 앞 응원 열기 생중계."},{"date":"2022.11.27","title":"걸으면 흔들리고, 바닥에서 밥 먹는 시스템, 참을 수는 있는데 묘하게 킹 받는 모먼트를 모았습니다 / 비머 in 카타르 ep.3","link":"https://www.youtube.com/watch?v=F7cmi81t07A\u0026t=10s","analysis":"카타르 월드컵 팬빌리지 숙소의 불편한 점들 소개. 흔들리는 컨테이너 숙소, 바닥 식사 등 현지 경험 공유."},{"date":"2022.11.18","title":"카타르 월드컵, 우리 축구 국가대표 팀의 경기장 이동거리 0km?","link":"https://www.youtube.com/watch?v=ga2VHq5f1po","analysis":"카타르 월드컵 경기장 간 이동거리 분석. 모든 경기장이 도하 인근에 위치한 특징."},{"date":"2022.11.28","title":"이승우 해설위원 쉬는 날 만난 우루과이 친구가 손흥민 발 밟은 선수였던 썰 / 비머 in 카타르 ep.4","link":"https://www.youtube.com/watch?v=ki34MaV8YKw","analysis":"해설위원들 비하인드 및 준비 모습 현장 취재."},{"date":"2022.11.29","title":"골문은 안 열리고 눈물샘만 열린 가나전, 냉탕 온탕 무한반복 직캠입니다 / 비머 in 카타르 ep.5","link":"https://www.youtube.com/watch?v=sWNCy0Tv5II","analysis":"가나전 2-3 패배 직후 현지 응원단 반응. 포르투갈전 각오 다지는 붉은악마."},{"date":"2022.12.02","title":"출장 간 기자 쉬는 날, 친구 만나서 \u0027걸어서 카타르 속으로\u0027 찍었습니다 / 비머 in 카타르 ep.6","link":"https://www.youtube.com/watch?v=zVnG33Q3Zoc","analysis":"카타르 현지 일상 브이로그. 정국 \u0027Dreamers\u0027 공연 현장, 카타르 문화 체험."},{"date":"2022.11.28","title":"[라이브머그 in 카타르] 달아오른 응원 열기, 이 시각 경기장 앞","link":"https://www.youtube.com/watch?v=TwxmZes42M8","analysis":"포르투갈전 전 경기장 앞 응원 현장 생중계. 뜨거운 응원 열기 현장 전달."},{"date":"2022.12.07","title":"전 세계 직관러들이 직접 뛴 조별리그 현장…훈훈하고 치열하고 다 하고 난리남 / 비머in카타르 ep.11","link":"https://www.youtube.com/watch?v=MziPOm0WcTg","analysis":"카타르 현지 \u0027팬즈컵\u0027 풋살 대회 취재. 월드컵 출전국별 팬들이 직접 참여한 조별리그 현장."},{"date":"2022.12.05","title":"중요한 것은 꺾이지 않는 마음…응원단도 \u0027두근두근\u0027 / SBS","link":"https://www.youtube.com/watch?v=jdGWbk17K9I","analysis":"16강 진출 후 카타르 원정응원단 현황. 귀국 일정 변경하며 현지 체류 연장하는 팬들."},{"date":"2022.12.03","title":"붉은악마 붉은악마 하는 이유가 있었습니다…노동하며 즐기는 축구팬 클라스 / 비머 in 카타르 ep.8","link":"https://www.youtube.com/watch?v=dM0PPtVcQ_E","analysis":"12년 만의 16강 진출 순간을 직관한 붉은악마 응원단 취재. 에듀케이션 시티 스타디움에서 열정적 응원 모습."},{"date":"2022.12.05","title":"브라질 취재진 근데 이제 염탐을 곁들인… 아슬아슬한 인터뷰 모음 / 비머in카타르 ep.9","link":"https://www.youtube.com/watch?v=_9C1KuQolSg","analysis":"16강전 상대 브라질 공식 훈련 취재. 벤투호의 철저한 준비 모습과 브라질 취재진 인터뷰."},{"date":"2022.12.05","title":"선수들 만큼이나 모든 걸 불태운 붉은악마…지금 이 시각 카타르 응원단 모습은?","link":"https://www.youtube.com/watch?v=XDZDh69gjic","analysis":"16강전 후 카타르 현지 붉은악마 응원단 생중계. 손흥민, 이강인, 황희찬, 벤투 감독 언급."},{"date":"2022.12.03","title":"극I도 E가 된다는 카타르 원정 응원단 찐텐 직캠, 다들 초면이란 게 함정 / 비머 in 카타르 ep.7","link":"https://www.youtube.com/watch?v=r3hs4XexD5k","analysis":"포르투갈전 16강 진출 확정 후 카타르 현장 응원단의 열정적 모습. 경기장 밖 시내 곳곳을 행진하며 외국인들과도 함께 대한민국을 연호."},{"date":"2022.12.03","title":"[영상토크] 추가시간에 터진 황희찬의 역전골 피치(Pitch) 직캠","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994259\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"현장 eng 취재본 활용 짧은 하이라이트."},{"date":"2022.12.03","title":"포르투갈전 하이라이트 영상…\u002712년 만의 16강행\u0027 순간","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994318\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"중계영상 외 한국 거리 응원, 현지 경기장 추가 스케치 영상 등 활용."},{"date":"2022.12.03","title":"16강 확정되자 캡틴 손흥민의 \u0027오열\u0027…벤투에게 남긴 말","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006994321\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH","analysis":"현장 eng 촬영본 및 스탠딩 활용된것으로 보임."},{"date":"2022.12.05","title":"\"어메이징 코리아…8강도 기대\"","link":"https://news.sbs.co.kr/news/endPage.do?news_id=N1006996284\u0026plink=ARTICLE\u0026cooper=SBSNEWSSEARCH\u0026plink=COPYPASTE\u0026cooper=SBSNEWSEND","analysis":"카타르 월드컵 현지 응원단 반응 위주 취재."}]
  },
  "2018": {
    "KBS": [
      {"date":"2018.03","title":"월드컵 D-100…신태용호 준비 상황 점검 / KBS 뉴스9","link":"#","analysis":"유럽파 컨디션과 전술 완성도, 평가전 계획을 중심으로 러시아 월드컵을 100일 앞둔 대표팀 준비 상황을 점검한 기사."},
      {"date":"2018.04","title":"대표팀 명단 윤곽…해외파·국내파 경쟁 본격화 / KBS 뉴스9","link":"#","analysis":"공격과 수비 각 포지션을 중심으로 해외파와 국내파의 본선 엔트리 경쟁 구도를 짚은 기사."},
      {"date":"2018.05","title":"최종 엔트리 발표 임박…부상 변수 비상 / KBS 뉴스9","link":"#","analysis":"대표팀 최종명단 발표를 앞두고 주요 선수들의 부상 이슈와 전력 손실 가능성을 분석한 기사."},
      {"date":"2018.05","title":"온두라스 평가전…전술 변화 실험 / KBS 뉴스9","link":"#","analysis":"월드컵 직전 평가전을 통해 대표팀이 전술 변화를 실험하는 과정과 새 전술 카드 가능성을 다룬 기사."},
      {"date":"2018.06","title":"최종 23인 확정…신태용호 월드컵 체제 돌입 / KBS 뉴스9","link":"#","analysis":"러시아 월드컵 본선에 나설 최종 23인이 확정되면서 대표팀이 본격적인 월드컵 체제로 전환됐다는 기사."},
      {"date":"2018.06.14","title":"2018 러시아 월드컵 개막…한국 일정 본격 시작 / KBS 뉴스9","link":"#","analysis":"러시아 월드컵 개막과 함께 한국 대표팀의 조별리그 일정과 주요 경기 포인트를 정리한 개막 기사."}
    ],
    "MBC": [
      {"date":"2018.03","title":"D-100…월드컵 경쟁국 전력 집중 분석 / MBC 뉴스데스크","link":"#","analysis":"독일, 스웨덴, 멕시코 등 한국과 같은 조 경쟁국들의 전력을 집중 분석한 월드컵 D-100 기사."},
      {"date":"2018.04","title":"대표팀 조직력 문제 지적…수비 불안 집중 점검 / MBC 뉴스데스크","link":"#","analysis":"대표팀 수비 라인의 조직력과 실점 위험 요소를 중심으로 전술적 불안 요인을 짚은 기사."},
      {"date":"2018.05","title":"평가전 결과 엇갈려…전술 완성도 논란 / MBC 뉴스데스크","link":"#","analysis":"월드컵 직전 평가전 결과를 바탕으로 대표팀 전술 완성도에 대한 우려와 논란을 분석한 기사."},
      {"date":"2018.06","title":"최종 명단 발표…탈락자·선발 배경 분석 / MBC 뉴스데스크","link":"#","analysis":"최종 엔트리 발표 이후 탈락 선수와 선발 선수의 배경을 비교하며 대표팀 구성 방향을 짚은 기사."},
      {"date":"2018.06","title":"스웨덴전 대비…세트피스·수비 전략 집중 점검 / MBC 뉴스데스크","link":"#","analysis":"조별리그 1차전 스웨덴전을 앞두고 세트피스 대응과 수비 전략을 중심으로 분석한 기사."},
      {"date":"2018.06.14","title":"러시아 월드컵 개막…한국 조별리그 전망 / MBC 뉴스데스크","link":"#","analysis":"대회 개막과 함께 한국의 조별리그 통과 가능성과 경기별 변수들을 짚은 개막 전망 기사."}
    ],
    "SBS": [
      {"date":"2018.03","title":"월드컵 D-100…조 편성 분석과 시나리오 / SBS 8시뉴스","link":"#","analysis":"월드컵 D-100 시점에서 한국의 조 편성과 조별리그 시나리오를 중심으로 전력 구도를 분석한 기사."},
      {"date":"2018.04","title":"F조 경쟁국 집중 해부…독일·멕시코 변수 분석 / SBS 8시뉴스","link":"#","analysis":"독일과 멕시코를 포함한 F조 경쟁국의 스타일과 주요 변수들을 집중적으로 분석한 기사."},
      {"date":"2018.05","title":"대표팀 공격 옵션 실험…플랜B 가동 여부 주목 / SBS 8시뉴스","link":"#","analysis":"주 공격 전술 외에 플랜B 전술을 실험하는 대표팀의 준비 상황과 공격 옵션을 정리한 기사."},
      {"date":"2018.06","title":"독일전 대비 전략 공개…압박·수비 전환 핵심 / SBS 8시뉴스","link":"#","analysis":"강팀 독일을 상대로 한 대응 전략에서 압박과 수비 전환이 핵심이라는 분석 기사."},
      {"date":"2018.06","title":"본선 직전 평가전 분석…경기력 우려와 기대 공존 / SBS 8시뉴스","link":"#","analysis":"본선을 앞둔 평가전 경기력을 바탕으로 우려와 기대가 동시에 존재하는 대표팀 상황을 분석한 기사."},
      {"date":"2018.06.14","title":"월드컵 개막…한국 첫 경기 일정 집중 조명 / SBS 8시뉴스","link":"#","analysis":"러시아 월드컵 개막과 함께 한국 대표팀 첫 경기 일정과 핵심 관전 포인트를 정리한 기사."}
    ]
  },
  "2014": {
    "KBS": [
      {"date":"2014.03","title":"월드컵 D-100…홍명보호 전력 점검 / KBS 뉴스9","link":"#","analysis":"브라질 월드컵을 100일 앞두고 홍명보호의 전력과 준비 상황을 전체적으로 점검한 기사."},
      {"date":"2014.04","title":"유럽파 컨디션 점검…손흥민·기성용 핵심 변수 / KBS 뉴스9","link":"#","analysis":"대표팀 핵심 유럽파 선수들의 시즌 막판 컨디션과 대표팀 전력 영향도를 짚은 기사."},
      {"date":"2014.05","title":"브라질 월드컵 대표팀 명단 발표 / KBS 뉴스9","link":"#","analysis":"브라질 월드컵에 나설 최종 명단 발표 내용을 중심으로 선수 선발 배경과 팀 구성을 정리한 기사."},
      {"date":"2014.05","title":"세대교체 논란…젊은 선수 대거 발탁 분석 / KBS 뉴스9","link":"#","analysis":"젊은 선수들의 대거 발탁 배경과 세대교체 흐름이 대표팀 구성에 미치는 영향을 분석한 기사."},
      {"date":"2014.06","title":"출국 전 마지막 평가전…전술 완성도 점검 / KBS 뉴스9","link":"#","analysis":"브라질 출국 전 치른 마지막 평가전을 통해 대표팀 전술 완성도를 최종 점검한 기사."},
      {"date":"2014.06.12","title":"브라질 월드컵 개막…한국 일정 시작 / KBS 뉴스9","link":"#","analysis":"브라질 월드컵 개막과 함께 한국 대표팀의 경기 일정과 조별리그 전망을 정리한 개막 기사."}
    ],
    "MBC": [
      {"date":"2014.03","title":"월드컵 D-100…한국 조별리그 통과 가능성 분석 / MBC 뉴스데스크","link":"#","analysis":"브라질 월드컵 조별리그 상대 전력을 바탕으로 한국의 16강 진출 가능성을 분석한 기사."},
      {"date":"2014.04","title":"수비 조직력 불안…전술적 문제 집중 지적 / MBC 뉴스데스크","link":"#","analysis":"수비 라인의 조직력과 전술 수행 문제를 중심으로 대표팀 약점을 지적한 분석 기사."},
      {"date":"2014.05","title":"최종 엔트리 발표…선수 구성 논란 분석 / MBC 뉴스데스크","link":"#","analysis":"대표팀 최종 엔트리 발표 이후 선수 구성과 선발 기준을 둘러싼 논란을 정리한 기사."},
      {"date":"2014.05","title":"평가전 경기력 저하…경기 운영 문제 제기 / MBC 뉴스데스크","link":"#","analysis":"월드컵 직전 평가전에서 나타난 경기력 저하와 운영상 문제점을 분석한 기사."},
      {"date":"2014.06","title":"러시아전 대비 전략…중원 장악 중요성 강조 / MBC 뉴스데스크","link":"#","analysis":"러시아와의 첫 경기를 앞두고 중원 장악이 핵심 변수라는 점을 강조한 사전 분석 기사."},
      {"date":"2014.06.12","title":"브라질 월드컵 개막…한국 조별리그 전망 / MBC 뉴스데스크","link":"#","analysis":"대회 개막 시점에서 한국의 조별리그 일정과 경기별 전망을 정리한 개막 기사."}
    ],
    "SBS": [
      {"date":"2014.03","title":"D-100…브라질 환경 변수 분석 (기후·이동거리) / SBS 8시뉴스","link":"#","analysis":"브라질 현지의 기후와 긴 이동거리 등 환경적 요소가 대표팀 경기력에 미칠 영향을 분석한 기사."},
      {"date":"2014.04","title":"경쟁국 전력 비교…벨기에·러시아 집중 분석 / SBS 8시뉴스","link":"#","analysis":"벨기에와 러시아를 중심으로 조별리그 경쟁국들의 전력 차이와 핵심 선수를 분석한 기사."},
      {"date":"2014.05","title":"대표팀 공격력 논쟁…득점력 부족 우려 / SBS 8시뉴스","link":"#","analysis":"대표팀의 공격 전개와 마무리 능력을 중심으로 득점력 부족 우려를 정리한 기사."},
      {"date":"2014.05","title":"전술 실험 반복…완성도 논란 지속 / SBS 8시뉴스","link":"#","analysis":"본선 직전까지 이어진 전술 실험이 오히려 팀 완성도에 대한 불안으로 이어지고 있다는 분석 기사."},
      {"date":"2014.06","title":"본선 직전 평가전…문제점 최종 점검 / SBS 8시뉴스","link":"#","analysis":"월드컵 본선 직전 평가전을 통해 대표팀 문제점을 최종 점검하고 보완 과제를 정리한 기사."},
      {"date":"2014.06.12","title":"브라질 월드컵 개막…한국 첫 경기 임박 / SBS 8시뉴스","link":"#","analysis":"브라질 월드컵 개막과 함께 한국 대표팀 첫 경기 임박 상황과 주요 관전 포인트를 정리한 기사."}
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
function createNewsEditorEntryId(){
  newsEditorEntrySeq+=1;
  return `news-entry-${Date.now()}-${newsEditorEntrySeq}`;
}
function getNewsEditorKey(year, broadcaster){
  return `${year}:${broadcaster}`;
}
function readNewsEditorRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(NEWS_EDITOR_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[NEWS_EDITOR_WINDOW_NAME_KEY]==='string' ? payload[NEWS_EDITOR_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeNewsEditorRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(NEWS_EDITOR_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[NEWS_EDITOR_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(NEWS_EDITOR_STORAGE_KEY, raw);
}
function normalizeNewsEditorEntry(entry, fallbackYear=''){
  const date=normalizeNewsDate(entry?.date||'', fallbackYear);
  const title=String(entry?.title||'').trim();
  const link=String(entry?.link||'').trim();
  const analysis=String(entry?.analysis||'').trim();
  if(!date&&!title&&!link&&!analysis) return null;
  return {
    id:String(entry?.id||createNewsEditorEntryId()),
    date,
    title,
    link,
    analysis
  };
}
function sortNewsEditorEntries(entries){
  return [...entries].sort((a,b)=>{
    const dateA=parseNewsDate(a?.date||'');
    const dateB=parseNewsDate(b?.date||'');
    if(dateA!==dateB) return dateB-dateA;
    return String(a.id).localeCompare(String(b.id));
  });
}
function normalizeNewsEditorEntries(entries, fallbackYear=''){
  return sortNewsEditorEntries((Array.isArray(entries)?entries:[]).map(entry=>normalizeNewsEditorEntry(entry, fallbackYear)).filter(Boolean));
}
function loadNewsEditorEntries(){
  if(hasLoadedNewsEditorEntries) return;
  hasLoadedNewsEditorEntries=true;
  const raw=readNewsEditorRaw();
  if(!raw) return;
  try{
    const savedEntries=JSON.parse(raw);
    Object.entries(savedEntries||{}).forEach(([key, entries])=>{
      const [year='']=key.split(':');
      newsEditorEntries[key]=normalizeNewsEditorEntries(entries, year);
    });
    saveNewsEditorEntries();
  }catch(error){
    console.warn('Failed to load news editor entries.', error);
  }
}
function saveNewsEditorEntries(){
  writeNewsEditorRaw(JSON.stringify(newsEditorEntries));
}
function buildNewsEditorEntryFromBase(entry, year, broadcaster){
  return normalizeNewsEditorEntry({
    date:entry.date,
    title:getNewsTitleCell(entry, broadcaster)==='-' ? '' : getNewsTitleCell(entry, broadcaster),
    link:entry.link||'',
    analysis:getNewsAnalysisCell(entry, broadcaster)==='-' ? '' : getNewsAnalysisCell(entry, broadcaster)
  }, year);
}
function ensureNewsEditorEntries(year, broadcaster){
  loadNewsEditorEntries();
  const key=getNewsEditorKey(year, broadcaster);
  if(Object.prototype.hasOwnProperty.call(newsEditorEntries, key)) return;
  const baseEntries=(getNewsData()[year]&&getNewsData()[year][broadcaster])||[];
  newsEditorEntries[key]=sortNewsEditorEntries(baseEntries.map(entry=>buildNewsEditorEntryFromBase(entry, year, broadcaster)).filter(Boolean));
}
function getNewsEntries(year, broadcaster){
  ensureNewsEditorEntries(year, broadcaster);
  return newsEditorEntries[getNewsEditorKey(year, broadcaster)]||[];
}
function setNewsEntries(year, broadcaster, entries){
  const key=getNewsEditorKey(year, broadcaster);
  newsEditorEntries[key]=normalizeNewsEditorEntries(entries, year);
  renderCache.newsTables[key]='';
  saveNewsEditorEntries();
}

function createMexicoStadiumSections(title, details){
  return {
    shooting:{
      subtitle:`${title} 촬영 구역 정보`,
      rows:[['세부 폴더','촬영 구역'],['기준 위치',details.shootingLocation],['운영 포인트',details.shootingGuide],['비고',details.shootingNote]]
    },
    mixedZone:{
      subtitle:`${title} mixed zone 정보`,
      rows:[['세부 폴더','mixed zone'],['기준 위치',details.mixedZoneLocation],['운영 포인트',details.mixedZoneGuide],['비고',details.mixedZoneNote]]
    },
    route:{
      subtitle:`${title} 내부 동선 정보`,
      rows:[['세부 폴더','경기장 내부 동선'],['기준 이동',details.routeFlow],['운영 포인트',details.routeGuide],['비고',details.routeNote]]
    },
    conferenceRoom:{
      subtitle:`${title} 컨퍼런스 룸 정보`,
      rows:[['세부 폴더','컨퍼런스 룸'],['기준 위치',details.conferenceLocation],['운영 포인트',details.conferenceGuide],['비고',details.conferenceNote]]
    },
    ground:{
      subtitle:`${title} 그라운드 정보`,
      rows:[['세부 폴더','그라운드'],['기준 위치',details.groundLocation],['운영 포인트',details.groundGuide],['비고',details.groundNote]]
    },
    playerArrival:{
      subtitle:`${title} 선수 도착 정보`,
      rows:[['세부 폴더','선수 도착'],['기준 위치',details.arrivalLocation],['운영 포인트',details.arrivalGuide],['비고',details.arrivalNote]]
    }
  };
}
const mexicoStadiums = {
  akron:{
    title:'아크론스타디움',
    city:'과달라하라',
    subtitle:'멕시코 개최 경기장 정보',
    rows:[['경기장명','아크론스타디움'],['도시','과달라하라'],['국가','멕시코'],['비고','공식 구조 이미지 반영']],
    sections:createMexicoStadiumSections('아크론스타디움',{
      shootingLocation:'메인 스탠드 하단 카메라 존',
      shootingGuide:'터치라인 접근 전 승인 필요',
      shootingNote:'경기 전 장비 반입 시간 확인',
      mixedZoneLocation:'선수단 인터뷰 동선 끝 구간',
      mixedZoneGuide:'인터뷰 라인 유지 후 역방향 이동 금지',
      mixedZoneNote:'경기 종료 직후 혼잡 가능',
      routeFlow:'미디어 입구 -> 작업 구역 -> 피치 접근',
      routeGuide:'보안 게이트 재통과 시간 여유 확보',
      routeNote:'출입 패스 우선 확인',
      conferenceLocation:'프레스 구역 인접 공식 회견실',
      conferenceGuide:'브리핑 시작 전 오디오 라인 점검',
      conferenceNote:'감독·선수 공식 기자회견 진행',
      groundLocation:'피치 레벨 촬영 허용 구역',
      groundGuide:'워밍업 및 입장 장면 촬영 포인트 사전 확보',
      groundNote:'잔디 보호 구간 출입 제한 확인',
      arrivalLocation:'팀 버스 하차 지점',
      arrivalGuide:'도착 시간대 대기 위치 사전 지정',
      arrivalNote:'보안 통제선 변동 가능성 확인'
    }),
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
    sections:createMexicoStadiumSections('에스타디오 BBVA',{
      shootingLocation:'메인 스탠드 상단 미디어 플랫폼',
      shootingGuide:'롱렌즈 장비는 사전 배치 권장',
      shootingNote:'광량 변화 대비 필요',
      mixedZoneLocation:'라커룸 출구 인접 인터뷰 구역',
      mixedZoneGuide:'방송사별 인터뷰 슬롯 순서 확인',
      mixedZoneNote:'케이블 정리 동선 확보',
      routeFlow:'미디어 체크인 -> 혼합구역 -> 스탠드 작업석',
      routeGuide:'엘리베이터 대기 시간 감안',
      routeNote:'경기 종료 후 퇴장 동선 분리',
      conferenceLocation:'미디어 센터 옆 공식 회견실',
      conferenceGuide:'인터뷰 전 마이크와 백드롭 확인',
      conferenceNote:'공식 기자회견 및 브리핑 진행',
      groundLocation:'터치라인 인접 피치 촬영 구역',
      groundGuide:'킥오프 전 워밍업 촬영 동선 우선 확인',
      groundNote:'장비 배치 허용 범위 사전 체크',
      arrivalLocation:'선수단 버스 진입 게이트',
      arrivalGuide:'도착 컷 확보용 스탠드업 위치 지정',
      arrivalNote:'보안 펜스 외 촬영 가능 범위 확인'
    }),
    imagePath:'images/bbva-interior.webp',
    imageAlt:'에스타디오 BBVA 내부 전경 이미지',
    imageCaption:'에스타디오 BBVA 내부 전경',
    sourceLabel:'출처: FIFA World Cup Monterrey 공식 Stadium 페이지',
    sourceUrl:'https://www.fwc26monterrey.com/stadium'
  },
  mexicoCityStadium:{
    title:'멕시코시티 스타디움',
    city:'멕시코시티',
    subtitle:'북중미 월드컵 경기장 정보',
    rows:[['경기장명','멕시코시티 스타디움'],['도시','멕시코시티'],['국가','멕시코'],['비고','공식 경기장 정보 기본 틀 복제']],
    sections:createMexicoStadiumSections('멕시코시티 스타디움',{
      shootingLocation:'메인 스탠드 중앙 카메라 플랫폼',
      shootingGuide:'고지대 환경 고려해 촬영 장비 세팅 시간 확보',
      shootingNote:'킥오프 직전 접근 제한 시간 확인',
      mixedZoneLocation:'선수 라커룸 출구 인접 인터뷰 동선',
      mixedZoneGuide:'혼합구역 대기 라인과 방송 포지션 사전 조정',
      mixedZoneNote:'경기 직후 혼잡도 높음',
      routeFlow:'미디어 게이트 -> 작업실 -> 혼합구역 -> 피치 접근',
      routeGuide:'보안 검색 2회 가능성 고려',
      routeNote:'승인 스티커 부착 장비만 재반입 가능',
      conferenceLocation:'프레스센터 인접 공식 회견실',
      conferenceGuide:'회견 시작 전 오디오와 백월 점검',
      conferenceNote:'공식 기자회견과 브리핑 운영',
      groundLocation:'피치 레벨 촬영 허용선 주변',
      groundGuide:'워밍업과 입장 장면 동시 확보 동선 확인',
      groundNote:'잔디 보호 구역 출입 제한 수시 확인',
      arrivalLocation:'팀 버스 드롭오프 구역',
      arrivalGuide:'보안 펜스와 대기 라인 위치 먼저 확인',
      arrivalNote:'팀별 도착 시간 편차 반영 필요'
    }),
    imagePath:'https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_Azteca_desde_el_aire_1.jpg?width=1200',
    imageAlt:'멕시코시티 스타디움 전경 이미지',
    imageCaption:'멕시코시티 스타디움 전경',
    sourceLabel:'출처: Wikimedia Commons',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Estadio_Azteca_desde_el_aire_1.jpg'
  },
  laStadium:{
    title:'LA 스타디움',
    city:'로스앤젤레스',
    subtitle:'북중미 월드컵 경기장 정보',
    rows:[['경기장명','LA 스타디움'],['도시','로스앤젤레스'],['국가','미국'],['비고','공식 경기장 정보 기본 틀 복제']],
    sections:createMexicoStadiumSections('LA 스타디움',{
      shootingLocation:'메인 볼 상단 미디어 플랫폼',
      shootingGuide:'역광 대비 렌즈 세팅과 차광 장비 준비',
      shootingNote:'현장 전원 포인트 위치 확인',
      mixedZoneLocation:'선수단 인터뷰 라인 출구',
      mixedZoneGuide:'방송 포지션별 인터뷰 순서 현장 공지 확인',
      mixedZoneNote:'경기 종료 후 이동 동선 일방통행 가능',
      routeFlow:'미디어 체크인 -> 프레스 작업 구역 -> 혼합구역 -> 스탠드',
      routeGuide:'엘리베이터 대기 시간과 우회 동선 동시 확인',
      routeNote:'장비 카트 이동 구간 사전 체크',
      conferenceLocation:'미디어센터 연결 공식 회견실',
      conferenceGuide:'조명과 음향 라인 사전 테스트',
      conferenceNote:'감독/선수 기자회견 운영',
      groundLocation:'터치라인 인접 촬영 허용 구역',
      groundGuide:'입장 세리머니 컷 확보 위치 우선 점검',
      groundNote:'현장 스태프 통제선 준수 필요',
      arrivalLocation:'선수단 버스 진입 램프',
      arrivalGuide:'스탠드업 위치와 안전선 동시 확보',
      arrivalNote:'도착 동선 변경 가능성 수시 체크'
    }),
    imagePath:'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_SoFi_Stadium_(July_2022).jpg?width=1200',
    imageAlt:'LA 스타디움 전경 이미지',
    imageCaption:'LA 스타디움 전경',
    sourceLabel:'출처: Wikimedia Commons',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Aerial_view_of_SoFi_Stadium_(July_2022).jpg'
  },
  seattleStadium:{
    title:'시애틀 스타디움',
    city:'시애틀',
    subtitle:'북중미 월드컵 경기장 정보',
    rows:[['경기장명','시애틀 스타디움'],['도시','시애틀'],['국가','미국'],['비고','공식 경기장 정보 기본 틀 복제']],
    sections:createMexicoStadiumSections('시애틀 스타디움',{
      shootingLocation:'메인 스탠드 측면 카메라 데크',
      shootingGuide:'우천 대비 방수 장비와 케이블 정리 필요',
      shootingNote:'기상 변화에 따른 가림막 위치 확인',
      mixedZoneLocation:'선수단 이동 통로 끝 인터뷰 존',
      mixedZoneGuide:'방송 포지션별 라인 간섭 최소화',
      mixedZoneNote:'혼잡 시간대 역방향 이동 제한 가능',
      routeFlow:'미디어 입구 -> 작업실 -> 인터뷰 존 -> 피치 접근',
      routeGuide:'출입 스캔 포인트와 우회 경로 동시 확인',
      routeNote:'경기 후 퇴장 동선 분리 운영 가능',
      conferenceLocation:'프레스센터 연결 회견실',
      conferenceGuide:'공식 마이크 라인과 통역 위치 확인',
      conferenceNote:'회견 시작 20분 전 입장 권장',
      groundLocation:'피치 레벨 촬영 허용 라인',
      groundGuide:'워밍업 컷과 입장 컷 겹치지 않게 위치 선정',
      groundNote:'현장 안전 요원 안내 우선 준수',
      arrivalLocation:'선수단 버스 하차 게이트',
      arrivalGuide:'대기 위치와 라이브 포인트 사전 배정',
      arrivalNote:'현장 펜스 라인 변동 가능'
    }),
    imagePath:'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_CenturyLink_Field_November_2011.jpg?width=1200',
    imageAlt:'시애틀 스타디움 전경 이미지',
    imageCaption:'시애틀 스타디움 전경',
    sourceLabel:'출처: Wikimedia Commons',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Aerial_CenturyLink_Field_November_2011.jpg'
  },
  bostonStadium:{
    title:'보스턴 스타디움',
    city:'보스턴',
    subtitle:'북중미 월드컵 경기장 정보',
    rows:[['경기장명','보스턴 스타디움'],['도시','보스턴'],['국가','미국'],['비고','공식 경기장 정보 기본 틀 복제']],
    sections:createMexicoStadiumSections('보스턴 스타디움',{
      shootingLocation:'메인 스탠드 상단 방송 플랫폼',
      shootingGuide:'강풍 대비 삼각대 고정과 방풍 세팅 필요',
      shootingNote:'야간 조도 변화 체크 권장',
      mixedZoneLocation:'라커룸 인접 인터뷰 통로',
      mixedZoneGuide:'방송사별 인터뷰 동선 충돌 최소화',
      mixedZoneNote:'종료 직후 혼잡 시간 길 수 있음',
      routeFlow:'미디어 체크인 -> 프레스 작업실 -> 혼합구역 -> 촬영석',
      routeGuide:'보안 게이트 통과 시간과 우회 경로 확보',
      routeNote:'현장 스태프 안내 라인 우선',
      conferenceLocation:'공식 기자회견실',
      conferenceGuide:'브리핑 전 음향/조명 테스트',
      conferenceNote:'감독 및 선수 공식 회견 사용',
      groundLocation:'터치라인 촬영 허용 구간',
      groundGuide:'입장 씬과 경기 후 클로징 컷 포인트 확보',
      groundNote:'현장 잔디 보호 규정 확인',
      arrivalLocation:'선수단 버스 하차 동선',
      arrivalGuide:'버스 도착 시간 전 포지션 선점 필요',
      arrivalNote:'보안 통제 구간 즉시 변경 가능'
    }),
    imagePath:'https://commons.wikimedia.org/wiki/Special:FilePath/Gillette_stadium.jpg?width=1200',
    imageAlt:'보스턴 스타디움 전경 이미지',
    imageCaption:'보스턴 스타디움 전경',
    sourceLabel:'출처: Wikimedia Commons',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Gillette_stadium.jpg'
  }
};
const mexicoStadiumSections = {
  shooting:'powerade zone',
  mixedZone:'mixed zone',
  route:'경기장 내부동선',
  conferenceRoom:'컨퍼런스 룸',
  ground:'그라운드',
  playerArrival:'선수도착'
};
function getMexicoStadiumEditorKey(stadiumKey, sectionKey=''){
  return `${stadiumKey}::${sectionKey||'root'}`;
}
function cloneMexicoStadiumRows(rows=[]){
  return rows.map(([label, value])=>[String(label||''), String(value||'')]);
}
function getMexicoStadiumDefaultRows(stadiumKey, sectionKey=''){
  const stadium=mexicoStadiums[stadiumKey];
  if(!stadium) return [];
  const section=sectionKey?stadium.sections?.[sectionKey]:null;
  return cloneMexicoStadiumRows(section?section.rows:stadium.rows);
}
function getMexicoStadiumEditorEntry(stadiumKey, sectionKey=''){
  ensureMexicoStadiumEditorEntries();
  return mexicoStadiumEditorEntries[getMexicoStadiumEditorKey(stadiumKey, sectionKey)]||null;
}
function getMexicoStadiumRows(stadiumKey, sectionKey=''){
  const entry=getMexicoStadiumEditorEntry(stadiumKey, sectionKey);
  return entry?.rows?.length ? cloneMexicoStadiumRows(entry.rows) : getMexicoStadiumDefaultRows(stadiumKey, sectionKey);
}
function getMexicoStadiumMediaItems(stadiumKey, sectionKey=''){
  const entry=getMexicoStadiumEditorEntry(stadiumKey, sectionKey);
  return Array.isArray(entry?.mediaItems) ? entry.mediaItems.map(item=>({...item})) : [];
}
function readMexicoStadiumEditorRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(MEXICO_STADIUM_EDITOR_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY]==='string' ? payload[MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeMexicoStadiumEditorRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(MEXICO_STADIUM_EDITOR_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(MEXICO_STADIUM_EDITOR_STORAGE_KEY, raw);
}
function normalizeMexicoStadiumEditorEntry(entry, stadiumKey, sectionKey=''){
  const rows=getMexicoStadiumDefaultRows(stadiumKey, sectionKey).map(([label], index)=>{
    const nextRow=Array.isArray(entry?.rows?.[index]) ? entry.rows[index] : null;
    return [label, String(nextRow?.[1] ?? '').trim()];
  });
  const mediaItems=Array.isArray(entry?.mediaItems)
    ? entry.mediaItems.map((item, index)=>({
        id:String(item?.id||`media-${index+1}`),
        name:String(item?.name||`사진 ${index+1}`),
        src:String(item?.src||'')
      })).filter(item=>item.src)
    : [];
  return {rows, mediaItems};
}
function ensureMexicoStadiumEditorEntries(){
  if(hasLoadedMexicoStadiumEditorEntries) return;
  hasLoadedMexicoStadiumEditorEntries=true;
  const raw=readMexicoStadiumEditorRaw();
  if(!raw) return;
  try{
    const parsed=JSON.parse(raw);
    if(parsed&&typeof parsed==='object'){
      Object.entries(parsed).forEach(([key, value])=>{
        const [stadiumKey, sectionKey='root']=String(key).split('::');
        mexicoStadiumEditorEntries[key]=normalizeMexicoStadiumEditorEntry(value, stadiumKey, sectionKey==='root'?'':sectionKey);
      });
    }
  }catch(error){}
}
function saveMexicoStadiumEditorEntries(){
  writeMexicoStadiumEditorRaw(JSON.stringify(mexicoStadiumEditorEntries));
}
function invalidateMexicoStadiumDetails(){
  renderCache.mexicoStadiumDetails=Object.create(null);
}
function setMexicoStadiumEditorEntry(stadiumKey, sectionKey, entry){
  const key=getMexicoStadiumEditorKey(stadiumKey, sectionKey);
  mexicoStadiumEditorEntries[key]=normalizeMexicoStadiumEditorEntry(entry, stadiumKey, sectionKey);
  invalidateMexicoStadiumDetails();
  saveMexicoStadiumEditorEntries();
}
function deleteMexicoStadiumEditorEntry(stadiumKey, sectionKey){
  delete mexicoStadiumEditorEntries[getMexicoStadiumEditorKey(stadiumKey, sectionKey)];
  invalidateMexicoStadiumDetails();
  saveMexicoStadiumEditorEntries();
}
let mexicoStadiumEditorMediaSeq = 0;
function createMexicoStadiumEditorMediaId(){
  mexicoStadiumEditorMediaSeq+=1;
  return `mexico-media-${Date.now()}-${mexicoStadiumEditorMediaSeq}`;
}
function getMexicoStadiumDisplayTitle(stadiumKey=''){
  const titleMap={
    akron:'아크론 스타디움',
    bbva:'에스타디오 BBVA',
    mexicoCityStadium:'멕시코시티 스타디움',
    laStadium:'LA 스타디움',
    seattleStadium:'시애틀 스타디움',
    bostonStadium:'보스턴 스타디움'
  };
  return titleMap[stadiumKey]||mexicoStadiums[stadiumKey]?.title||'';
}
function renderMexicoStadiumTitle(stadiumKey, sectionKey=''){
  const stadium=mexicoStadiums[stadiumKey];
  if(!stadium) return '';
  const displayTitle=getMexicoStadiumDisplayTitle(stadiumKey);
  if(!sectionKey){
    return escapeHtml(`${displayTitle||stadium.title}, ${stadium.city}`);
  }
  return `<span class="section-title-row section-title-row-stadium"><span class="section-title-text-group"><span class="section-title-main">${escapeHtml(displayTitle||stadium.title)}</span><span class="section-title-inline-sep" aria-hidden="true"> - </span><span class="section-title-sub">${escapeHtml(mexicoStadiumSections[sectionKey]||sectionKey)}</span></span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="openMexicoStadiumEditorModal('${stadiumKey}','${sectionKey}')">작성</button><button type="button" class="section-title-action-btn" onclick="openMexicoStadiumEditorModal('${stadiumKey}','${sectionKey}','edit')">수정</button><button type="button" class="section-title-action-btn delete" onclick="deleteMexicoStadiumEditorAndRender('${stadiumKey}','${sectionKey}')">삭제</button></span></span>`;
}
function renderMexicoStadiumMediaGallery(stadiumKey, sectionKey=''){
  const mediaItems=getMexicoStadiumMediaItems(stadiumKey, sectionKey);
  if(!mediaItems.length) return renderStadiumSlot();
  return `<div class="group-match-wrap"><div class="mexico-stadium-media-grid">${mediaItems.map(item=>`<figure class="mexico-stadium-media-item"><img class="mexico-stadium-media-photo" src="${item.src}" alt="${escapeHtml(item.name)}"><figcaption class="mexico-stadium-media-caption">${escapeHtml(item.name)}</figcaption></figure>`).join('')}</div></div>`;
}
function ensureMexicoStadiumEditorModal(){
  if(document.getElementById('mexicoStadiumEditorModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="mexicoStadiumEditorModal" class="news-editor-modal hidden"><div class="news-editor-modal-backdrop" onclick="closeMexicoStadiumEditorModal()"></div><div class="news-editor-modal-panel" role="dialog" aria-modal="true" aria-labelledby="mexicoStadiumEditorModalTitle"><div class="news-editor-modal-header"><h3 id="mexicoStadiumEditorModalTitle">경기장 정보 작성</h3><button type="button" class="news-editor-modal-close" onclick="closeMexicoStadiumEditorModal()" aria-label="닫기">×</button></div><p id="mexicoStadiumEditorModalMeta" class="news-editor-modal-meta"></p><div id="mexicoStadiumEditorFields" class="mexico-stadium-editor-fields"></div><div class="timeline-modal-media mexico-stadium-editor-media"><div class="timeline-modal-upload"><span>사진 첨부</span><input id="mexicoStadiumEditorFiles" type="file" accept=\"image/*\" multiple></div><div id="mexicoStadiumEditorMediaList" class="timeline-modal-media-list"></div></div><div class="news-editor-modal-actions"><button type="button" class="news-editor-modal-btn" onclick="closeMexicoStadiumEditorModal()">취소</button><button type="button" class="news-editor-modal-btn primary" onclick="saveMexicoStadiumEditorModal()">저장</button></div></div></div>`);
  const modal=document.getElementById('mexicoStadiumEditorModal');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeMexicoStadiumEditorModal();
    }
  });
  document.getElementById('mexicoStadiumEditorFiles').addEventListener('change', async event=>{
    const files=Array.from(event.target.files||[]);
    if(!pendingMexicoStadiumEditorContext||!files.length) return;
    const items=(await Promise.all(files.map(file=>new Promise(resolve=>{
      const reader=new FileReader();
      reader.onload=()=>resolve({id:createMexicoStadiumEditorMediaId(), name:file.name||'사진', src:String(reader.result||'')});
      reader.onerror=()=>resolve(null);
      reader.readAsDataURL(file);
    })))).filter(Boolean);
    pendingMexicoStadiumEditorContext.mediaItems.push(...items);
    renderMexicoStadiumEditorMediaList();
    event.target.value='';
  });
  modal.addEventListener('click', event=>{
    const removeButton=event.target.closest('.timeline-modal-media-remove');
    if(!removeButton||!pendingMexicoStadiumEditorContext) return;
    pendingMexicoStadiumEditorContext.mediaItems=pendingMexicoStadiumEditorContext.mediaItems.filter(item=>item.id!==removeButton.dataset.mediaId);
    renderMexicoStadiumEditorMediaList();
  });
}
function renderMexicoStadiumEditorMediaList(){
  const list=document.getElementById('mexicoStadiumEditorMediaList');
  if(!list) return;
  const mediaItems=Array.isArray(pendingMexicoStadiumEditorContext?.mediaItems) ? pendingMexicoStadiumEditorContext.mediaItems : [];
  list.innerHTML=mediaItems.length
    ? mediaItems.map(item=>`<figure class="timeline-modal-media-item"><img class="timeline-modal-media-thumb" src="${item.src}" alt="${escapeHtml(item.name)}"><figcaption class="timeline-modal-media-caption">${escapeHtml(item.name)}</figcaption><button type="button" class="timeline-modal-media-remove" data-media-id="${item.id}" aria-label="${escapeHtml(item.name)} 삭제">×</button></figure>`).join('')
    : '<div class="timeline-modal-media-empty">첨부된 사진 없음</div>';
}
function openMexicoStadiumEditorModal(stadiumKey, sectionKey, mode='write'){
  if(!sectionKey) return;
  ensureMexicoStadiumEditorEntries();
  ensureMexicoStadiumEditorModal();
  const stadium=mexicoStadiums[stadiumKey];
  const rows=getMexicoStadiumRows(stadiumKey, sectionKey);
  pendingMexicoStadiumEditorContext={stadiumKey, sectionKey, mode, mediaItems:getMexicoStadiumMediaItems(stadiumKey, sectionKey)};
  document.getElementById('mexicoStadiumEditorModalTitle').textContent=mode==='edit' ? '경기장 정보 수정' : '경기장 정보 작성';
  document.getElementById('mexicoStadiumEditorModalMeta').textContent=`${stadium.title} · ${mexicoStadiumSections[sectionKey]||sectionKey}`;
  document.getElementById('mexicoStadiumEditorFields').innerHTML=rows.map(([label, value], index)=>`<label class="news-editor-field"><span>${escapeHtml(label)}</span><textarea class="news-editor-textarea mexico-stadium-editor-input" data-row-index="${index}">${escapeHtml(value)}</textarea></label>`).join('');
  renderMexicoStadiumEditorMediaList();
  document.body.classList.add('news-editor-modal-open');
  document.getElementById('mexicoStadiumEditorModal').classList.remove('hidden');
  syncMobileHistoryState();
  const firstInput=document.querySelector('.mexico-stadium-editor-input');
  if(firstInput) firstInput.focus();
}
function closeMexicoStadiumEditorModal(){
  const modal=document.getElementById('mexicoStadiumEditorModal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('news-editor-modal-open');
  pendingMexicoStadiumEditorContext=null;
  syncMobileHistoryState();
}
function saveMexicoStadiumEditorModal(){
  if(!pendingMexicoStadiumEditorContext) return;
  const {stadiumKey, sectionKey}=pendingMexicoStadiumEditorContext;
  const defaultRows=getMexicoStadiumDefaultRows(stadiumKey, sectionKey);
  const rows=defaultRows.map(([label], index)=>[label, document.querySelector(`.mexico-stadium-editor-input[data-row-index="${index}"]`)?.value?.trim()||'']);
  setMexicoStadiumEditorEntry(stadiumKey, sectionKey, {rows, mediaItems:pendingMexicoStadiumEditorContext.mediaItems});
  closeMexicoStadiumEditorModal();
  renderMexicoStadiumDetail(stadiumKey, sectionKey);
}
function deleteMexicoStadiumEditorAndRender(stadiumKey, sectionKey){
  deleteMexicoStadiumEditorEntry(stadiumKey, sectionKey);
  renderMexicoStadiumDetail(stadiumKey, sectionKey);
}
function getEquipmentEditorKey(mode, user=''){
  return mode==='personal' ? `personal::${user}` : 'shared';
}
function getEquipmentHeaders(mode){
  return ['장비명','모델명','제조사','시리얼번호','수량','비고','사용자'];
}
function generateEquipmentRowId(){
  return `equipment-row-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}
function createEmptyEquipmentRow(){
  return [...getEquipmentHeaders('shared').map(()=>''), generateEquipmentRowId()];
}
function normalizeEquipmentRowValues(row=[]){
  const normalizedRow=createEmptyEquipmentRow();
  const emptyRowLength=normalizedRow.length;
  if(Array.isArray(row)){
    if(row.length===6){
      const [legacyModel='', legacyMaker='', legacySerial='', legacyQty='', legacyNote='', legacyUser='']=row;
      const migratedRow=[legacyModel, '', legacyMaker, legacySerial, legacyQty, legacyNote, legacyUser];
      return [...normalizedRow.slice(0, emptyRowLength-1).map((_, index)=>String(migratedRow[index]||'').trim()), generateEquipmentRowId()];
    }
    const rowId=String(row[emptyRowLength-1]||row.rowId||'').trim()||generateEquipmentRowId();
    return [...normalizedRow.slice(0, emptyRowLength-1).map((_, index)=>String(row[index]||'').trim()), rowId];
  }
  if(row&&typeof row==='object'){
    const objectRow=[
      row.장비,
      row.모델명,
      row.제조사,
      row.시리얼넘버,
      row.수량,
      row.비고,
      row.사용자
    ];
    const rowId=String(row.rowId||'').trim()||generateEquipmentRowId();
    return [...normalizedRow.slice(0, emptyRowLength-1).map((_, index)=>String(objectRow[index]??'').trim()), rowId];
  }
  return normalizedRow;
}
function isEquipmentRowEmpty(row=[]){
  return normalizeEquipmentRowValues(row).slice(0, -1).every(value=>String(value||'').trim()==='');
}
function isEquipmentRowTouched(row=[]){
  return normalizeEquipmentRowValues(row).slice(0, -1).some(value=>String(value||'').trim()!=='');
}
function buildEquipmentSummaryDefaultRows(){
  return equipmentSummaryData.map(item=>normalizeEquipmentRowValues(item));
}
function normalizeEquipmentState(rows=[]){
  const normalizedRows=(Array.isArray(rows)?rows:[])
    .map(normalizeEquipmentRowValues)
    .filter(row=>isEquipmentRowTouched(row));
  return [...normalizedRows, createEmptyEquipmentRow()];
}
function ensureEquipmentRowIds(rows=[]){
  return normalizeEquipmentState(rows);
}
function hasMeaningfulEquipmentRows(rows=[]){
  return Array.isArray(rows) && rows.some(row=>isEquipmentRowTouched(row));
}
function getEquipmentRowCount(mode){
  return mode==='personal' ? 10 : normalizeEquipmentState(buildEquipmentSummaryDefaultRows()).length;
}
function getEquipmentDefaultRows(mode){
  if(mode==='shared') return normalizeEquipmentState(buildEquipmentSummaryDefaultRows());
  return Array.from({length:getEquipmentRowCount(mode)}, ()=>getEquipmentHeaders(mode).map(()=>''));
}
function normalizeEquipmentRows(mode, rows){
  if(mode==='shared'){
    return normalizeEquipmentState(rows);
  }
  const headers=getEquipmentHeaders(mode);
  return Array.from({length:getEquipmentRowCount(mode)}, (_, rowIndex)=>{
    const sourceRow=Array.isArray(rows?.[rowIndex]) ? rows[rowIndex] : [];
    return headers.map((_, colIndex)=>String(sourceRow[colIndex]||'').trim());
  });
}
function readEquipmentEditorRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(EQUIPMENT_EDITOR_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[EQUIPMENT_EDITOR_WINDOW_NAME_KEY]==='string' ? payload[EQUIPMENT_EDITOR_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeEquipmentEditorRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(EQUIPMENT_EDITOR_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[EQUIPMENT_EDITOR_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(EQUIPMENT_EDITOR_STORAGE_KEY, raw);
}
function ensureEquipmentEditorEntries(){
  if(hasLoadedEquipmentEditorEntries) return;
  hasLoadedEquipmentEditorEntries=true;
  const raw=readEquipmentEditorRaw();
  if(!raw) return;
  try{
    const parsed=JSON.parse(raw);
    if(parsed&&typeof parsed==='object'){
      Object.entries(parsed).forEach(([key, value])=>{
        const mode=String(key).startsWith('personal::') ? 'personal' : 'shared';
        equipmentEditorEntries[key]=normalizeEquipmentRows(mode, value);
      });
    }
  }catch(error){}
}
function saveEquipmentEditorEntries(){
  writeEquipmentEditorRaw(JSON.stringify(equipmentEditorEntries));
}
function loadEquipmentState(){
  ensureEquipmentEditorEntries();
  const key=getEquipmentEditorKey('shared', '');
  const storedRows=equipmentEditorEntries[key];
  equipmentState=hasMeaningfulEquipmentRows(storedRows)
    ? ensureEquipmentRowIds(storedRows)
    : getEquipmentDefaultRows('shared');
  return cloneEquipmentRows(equipmentState);
}
function saveEquipmentState(rows=equipmentState){
  equipmentState=ensureEquipmentRowIds(rows);
  equipmentEditorEntries[getEquipmentEditorKey('shared', '')]=cloneEquipmentRows(equipmentState);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  saveEquipmentEditorEntries();
  return cloneEquipmentRows(equipmentState);
}
function hasActiveEquipmentEditMode(){
  return equipmentSummaryEditMode || Object.values(personalEquipmentEditModes).some(Boolean);
}
function isEquipmentSummaryEditMode(){
  return equipmentSummaryEditMode;
}
function isPersonalEquipmentEditMode(userName=''){
  return Boolean(personalEquipmentEditModes[String(userName||'').trim()]);
}
function getPersistedEquipmentSharedRows(){
  return loadEquipmentState();
}
function cloneEquipmentRows(rows=[]){
  return (Array.isArray(rows)?rows:[]).map(normalizeEquipmentRowValues);
}
function getCurrentEquipmentSourceRows(){
  if(hasActiveEquipmentEditMode()&&Array.isArray(equipmentEditDraftRows)){
    return cloneEquipmentRows(equipmentEditDraftRows);
  }
  return getPersistedEquipmentSharedRows();
}
function setEquipmentSummaryEditMode(isEditing=false){
  equipmentSummaryEditMode=Boolean(isEditing);
  personalEquipmentEditModes=Object.create(null);
  equipmentEditDraftRows=equipmentSummaryEditMode ? cloneEquipmentRows(loadEquipmentState()) : null;
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
}
function setPersonalEquipmentEditMode(userName='', isEditing=false){
  const normalizedUser=String(userName||'').trim();
  equipmentSummaryEditMode=false;
  personalEquipmentEditModes=Object.create(null);
  if(normalizedUser&&isEditing){
    personalEquipmentEditModes[normalizedUser]=true;
    equipmentEditDraftRows=cloneEquipmentRows(loadEquipmentState());
  }else{
    equipmentEditDraftRows=null;
  }
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
}
function beginEquipmentSummaryEditing(){
  setEquipmentSummaryEditMode(true);
  renderEquipmentSharedDetail();
  const lastRowIndex=Math.max(0, getEquipmentRows('shared').length-1);
  focusEquipmentSharedField(lastRowIndex, 0);
}
function beginPersonalEquipmentEditing(userName=''){
  const normalizedUser=String(userName||'').trim();
  if(!normalizedUser) return;
  setPersonalEquipmentEditMode(normalizedUser, true);
  const rows=cloneEquipmentRows(equipmentEditDraftRows);
  const newRow=createEquipmentRow({사용자:normalizedUser});
  rows.push(newRow);
  equipmentEditDraftRows=rows;
  showEquipmentPersonal(normalizedUser);
  focusPersonalEquipmentField(newRow[7], 0);
}
function handleEquipmentSummarySave(){
  if(!isEquipmentSummaryEditMode()||!Array.isArray(equipmentEditDraftRows)) return;
  saveEquipmentState(equipmentEditDraftRows);
  setEquipmentSummaryEditMode(false);
  renderEquipmentSharedDetail();
  renderAllPersonalEquipmentTables();
}
function handlePersonalEquipmentSave(userName=''){
  const normalizedUser=String(userName||'').trim();
  if(!isPersonalEquipmentEditMode(normalizedUser)||!Array.isArray(equipmentEditDraftRows)) return;
  saveEquipmentState(equipmentEditDraftRows);
  setPersonalEquipmentEditMode(normalizedUser, false);
  renderAllPersonalEquipmentTables();
  showEquipmentPersonal(normalizedUser);
}
function getEquipmentRows(mode, user=''){
  const sourceRows=getCurrentEquipmentSourceRows();
  if(mode==='personal'){
    return sourceRows.filter(row=>String(row?.[6]||'').trim()===String(user||'').trim());
  }
  return sourceRows;
}
function setEquipmentRows(mode, user, rows){
  if(mode==='shared'){
    saveEquipmentState(rows);
    return;
  }
  equipmentEditorEntries[getEquipmentEditorKey(mode, user)]=normalizeEquipmentRows(mode, rows);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  saveEquipmentEditorEntries();
}
function clearEquipmentRows(mode, user){
  if(mode==='shared'){
    saveEquipmentState(getEquipmentDefaultRows(mode));
    return;
  }
  equipmentEditorEntries[getEquipmentEditorKey(mode, user)]=getEquipmentDefaultRows(mode);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  saveEquipmentEditorEntries();
}
function renderEquipmentTitle(mode, user=''){
  const titleText=mode==='personal' ? `${user} 개인장비` : '장비종합현황';
  if(mode==='personal'){
    const isEditing=isPersonalEquipmentEditMode(user);
    return `<span class="section-title-row"><span>${escapeHtml(titleText)}</span><span class="section-title-actions"><button type="button" class="section-title-action-btn export-action-btn" onclick="exportPersonalEquipmentExcel('${escapeHtml(user)}')">개별장비 내보내기</button><button type="button" class="section-title-action-btn" onclick="${isEditing?`addPersonalEquipmentRow('${escapeHtml(user)}')`:`beginPersonalEquipmentEditing('${escapeHtml(user)}')`}">작성</button><button type="button" class="section-title-action-btn${isEditing?'':' is-disabled'}" onclick="handlePersonalEquipmentSave('${escapeHtml(user)}')" ${isEditing?'':'disabled'}>저장</button><button type="button" class="section-title-action-btn delete${isEditing?'':' is-disabled'}" onclick="deletePersonalEquipmentRows('${escapeHtml(user)}')" ${isEditing?'':'disabled'}>삭제</button></span></span>`;
  }
  const isEditing=isEquipmentSummaryEditMode();
  return `<span class="section-title-row"><span>${escapeHtml(titleText)}</span><span class="section-title-actions"><button type="button" class="section-title-action-btn export-action-btn" onclick="exportEquipmentExcel()">장비 내보내기</button><button type="button" class="section-title-action-btn" onclick="${isEditing?'void(0)':'beginEquipmentSummaryEditing()'}" ${isEditing?'disabled':''}>작성</button><button type="button" class="section-title-action-btn${isEditing?'':' is-disabled'}" onclick="handleEquipmentSummarySave()" ${isEditing?'':'disabled'}>저장</button><button type="button" class="section-title-action-btn delete${isEditing?'':' is-disabled'}" onclick="deleteSelectedEquipmentSummaryRows()" ${isEditing?'':'disabled'}>삭제</button></span></span>`;
}
function renderEquipmentTableColgroup(mode){
  return '<colgroup><col class="equipment-col-name"><col class="equipment-col-model"><col class="equipment-col-maker"><col class="equipment-col-serial"><col class="equipment-col-qty"><col class="equipment-col-note"><col class="equipment-col-user"></colgroup>';
}
function renderEquipmentUserSelect(selectedValue='', attributes='', className='equipment-user-select'){
  const normalizedSelected=String(selectedValue||'').trim();
  const normalizedAttributes=String(attributes||'').trim();
  const attributeText=normalizedAttributes ? ` ${normalizedAttributes}` : '';
  const placeholderSelected=normalizedSelected?'':' selected';
  return `<select class="${escapeHtml(className)}"${attributeText}><option value="" disabled hidden${placeholderSelected}>선택</option>${EQUIPMENT_SHARED_USERS.map(name=>`<option value="${escapeHtml(name)}"${name===normalizedSelected?' selected':''}>${escapeHtml(name)}</option>`).join('')}</select>`;
}
function updateEquipmentSharedUser(rowIndex=0, nextValue=''){
  updateEquipmentSharedCell(rowIndex, 6, nextValue);
}
function renderAllPersonalEquipmentTables(){
  renderCache.equipmentPersonalTables=Object.create(null);
  if(currentEquipmentMode==='personal'&&currentEquipmentUser){
    showEquipmentPersonal(currentEquipmentUser);
  }
}
function focusPersonalEquipmentField(rowId='', colIndex=0){
  const normalizedRowId=String(rowId||'').trim();
  const normalizedColIndex=Number(colIndex);
  const field=Array.from(document.querySelectorAll('[data-personal-row-id]')).find(element=>String(element.getAttribute('data-personal-row-id')||'').trim()===normalizedRowId&&Number(element.getAttribute('data-personal-col-index'))===normalizedColIndex);
  if(!field) return;
  field.focus();
  if(typeof field.setSelectionRange==='function'){
    const value=String(field.value||'');
    field.setSelectionRange(value.length, value.length);
  }
}
function focusEquipmentSharedField(rowIndex=0, colIndex=0){
  const field=document.querySelector(`[data-equipment-row-index="${Number(rowIndex)}"][data-equipment-col-index="${Number(colIndex)}"]`);
  if(!field) return;
  field.focus();
  if(typeof field.setSelectionRange==='function'){
    const value=String(field.value||'');
    field.setSelectionRange(value.length, value.length);
  }
}
function updateEquipmentSharedCell(rowIndex=0, colIndex=0, nextValue=''){
  if(!isEquipmentSummaryEditMode()) return;
  const rows=cloneEquipmentRows(equipmentEditDraftRows);
  const normalizedIndex=Number(rowIndex);
  const normalizedColumn=Number(colIndex);
  if(Number.isNaN(normalizedIndex)||normalizedIndex<0||normalizedIndex>=rows.length) return;
  if(Number.isNaN(normalizedColumn)||normalizedColumn<0||normalizedColumn>=getEquipmentHeaders('shared').length) return;
  const previousLength=rows.length;
  rows[normalizedIndex][normalizedColumn]=String(nextValue||'').trim();
  const normalizedRows=normalizeEquipmentState(rows);
  const shouldRerender=normalizedRows.length!==previousLength;
  equipmentEditDraftRows=normalizedRows;
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  if(shouldRerender&&currentEquipmentMode==='shared'){
    renderEquipmentSharedDetail();
    focusEquipmentSharedField(normalizedIndex, normalizedColumn);
  }
}
function updateEquipmentRow(rowId='', fieldIndex=0, nextValue=''){
  if(!isPersonalEquipmentEditMode(currentEquipmentUser)) return;
  const normalizedRowId=String(rowId||'').trim();
  if(!normalizedRowId) return;
  const normalizedFieldIndex=Number(fieldIndex);
  if(Number.isNaN(normalizedFieldIndex)||normalizedFieldIndex<0||normalizedFieldIndex>=getEquipmentHeaders('shared').length) return;
  const rows=cloneEquipmentRows(equipmentEditDraftRows);
  const targetIndex=rows.findIndex(row=>String(row[row.length-1]||'').trim()===normalizedRowId);
  if(targetIndex<0) return;
  rows[targetIndex][normalizedFieldIndex]=String(nextValue||'').trim();
  equipmentEditDraftRows=rows;
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
}
function createEquipmentRow(overrides={}){
  const nextRow=createEmptyEquipmentRow();
  nextRow[0]=String(overrides.장비||'').trim();
  nextRow[1]=String(overrides.모델명||'').trim();
  nextRow[2]=String(overrides.제조사||'').trim();
  nextRow[3]=String(overrides.시리얼넘버||'').trim();
  nextRow[4]=String(overrides.수량||'').trim();
  nextRow[5]=String(overrides.비고||'').trim();
  nextRow[6]=String(overrides.사용자||'').trim();
  nextRow[7]=String(overrides.rowId||'').trim()||generateEquipmentRowId();
  return nextRow;
}
function addPersonalEquipmentRow(userName=''){
  const normalizedUser=String(userName||'').trim();
  if(!normalizedUser||!isPersonalEquipmentEditMode(normalizedUser)) return;
  const rows=cloneEquipmentRows(equipmentEditDraftRows);
  const newRow=createEquipmentRow({사용자:normalizedUser});
  rows.push(newRow);
  equipmentEditDraftRows=rows;
  showEquipmentPersonal(normalizedUser);
  focusPersonalEquipmentField(newRow[7], 0);
}
function deletePersonalEquipmentRows(userName=''){
  const normalizedUser=String(userName||'').trim();
  if(!isPersonalEquipmentEditMode(normalizedUser)) return;
  const checkedRowIds=Array.from(document.querySelectorAll('.personal-equipment-row-check:checked'))
    .map(input=>String(input.value||'').trim())
    .filter(Boolean);
  if(!checkedRowIds.length) return;
  const confirmed=window.confirm(`선택한 장비 ${checkedRowIds.length}개를 삭제하시겠습니까?`);
  if(!confirmed) return;
  const removableRowIdSet=new Set(checkedRowIds);
  const sourceRows=cloneEquipmentRows(equipmentEditDraftRows);
  const rows=sourceRows
    .map(normalizeEquipmentRowValues)
    .filter(row=>!removableRowIdSet.has(String(row[row.length-1]||'').trim()));
  equipmentEditDraftRows=rows;
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  showEquipmentPersonal(normalizedUser);
}
function deleteSelectedEquipmentSummaryRows(){
  if(!isEquipmentSummaryEditMode()) return;
  const checkedRowIds=Array.from(document.querySelectorAll('.equipment-summary-row-check:checked'))
    .map(input=>String(input.value||'').trim())
    .filter(Boolean);
  if(!checkedRowIds.length) return;
  const confirmed=window.confirm(`선택한 장비 ${checkedRowIds.length}개를 삭제하시겠습니까?`);
  if(!confirmed) return;
  const removableRowIdSet=new Set(checkedRowIds);
  const sourceRows=cloneEquipmentRows(equipmentEditDraftRows);
  const rows=sourceRows
    .map(normalizeEquipmentRowValues)
    .filter(row=>!removableRowIdSet.has(String(row[row.length-1]||'').trim()));
  equipmentEditDraftRows=normalizeEquipmentState(rows);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  renderEquipmentSharedDetail();
  renderAllPersonalEquipmentTables();
}
function renderEquipmentSummaryInput(value='', rowIndex=0, colIndex=0, type='text'){
  return `<input type="${type}" class="equipment-table-input" data-equipment-row-index="${rowIndex}" data-equipment-col-index="${colIndex}" value="${escapeHtml(value)}" oninput="updateEquipmentSharedCell(${rowIndex}, ${colIndex}, this.value)">`;
}
function renderEquipmentTableHtml(mode, user=''){
  const headers=getEquipmentHeaders(mode);
  const isEditing=mode==='shared' ? isEquipmentSummaryEditMode() : isPersonalEquipmentEditMode(user);
  const rows=(mode==='shared'&&isEditing)
    ? getEquipmentRows(mode, user)
    : getEquipmentRows(mode, user).filter(row=>isEquipmentRowTouched(row));
  if(mode==='shared'){
    return `<colgroup><col class="equipment-col-select"><col class="equipment-col-name"><col class="equipment-col-model"><col class="equipment-col-maker"><col class="equipment-col-serial"><col class="equipment-col-qty"><col class="equipment-col-note"><col class="equipment-col-user"></colgroup><thead><tr><th class="equipment-col-select">선택</th>${headers.map(label=>`<th>${label}</th>`).join('')}</tr></thead><tbody>${rows.map((row, rowIndex)=>{const rowId=String(row[row.length-1]||'').trim(); const isBlankRow=isEquipmentRowEmpty(row); return `<tr><td data-label="선택">${isEditing&&!isBlankRow?`<input type="checkbox" class="equipment-summary-row-check" value="${escapeHtml(rowId)}">`:''}</td>${headers.map((label, index)=>{const value=String(row[index]||''); if(index===headers.length-1){ if(isEditing){ return `<td data-label="${escapeHtml(label||'')}">${renderEquipmentUserSelect(value, `data-equipment-row-index="${rowIndex}" data-equipment-col-index="${index}" onchange="updateEquipmentSharedUser(${rowIndex}, this.value)"`, 'equipment-user-select equipment-table-user-select')}</td>`; } return `<td data-label="${escapeHtml(label||'')}"><span class="equipment-readonly-text">${escapeHtml(value)}</span></td>`; } if(isEditing){ const inputType=index===4?'number':'text'; return `<td data-label="${escapeHtml(label||'')}">${renderEquipmentSummaryInput(value, rowIndex, index, inputType)}</td>`; } return `<td data-label="${escapeHtml(label||'')}"><span class="equipment-readonly-text">${escapeHtml(value)}</span></td>`;}).join('')}</tr>`;}).join('')}</tbody>`;
  }
  return `${renderEquipmentTableColgroup(mode)}<thead><tr>${headers.map(label=>`<th>${label}</th>`).join('')}</tr></thead><tbody>${rows.map((row, rowIndex)=>`<tr>${headers.map((label, index)=>{const value=String(row[index]||''); return `<td data-label="${escapeHtml(label||'')}">${escapeHtml(value)||''}</td>`;}).join('')}</tr>`).join('')}</tbody>`;
}
function renderEquipmentSummaryTable(){
  return renderEquipmentTableHtml('shared');
}
function renderPersonalEquipmentTable(user=''){
  const headers=getEquipmentHeaders('personal');
  const isEditing=isPersonalEquipmentEditMode(user);
  const rows=getEquipmentRows('personal', user).filter(row=>isEquipmentRowTouched(row));
  return `<colgroup><col class="equipment-col-select"><col class="equipment-col-name"><col class="equipment-col-model"><col class="equipment-col-maker"><col class="equipment-col-serial"><col class="equipment-col-qty"><col class="equipment-col-note"><col class="equipment-col-user"></colgroup><thead><tr><th class="equipment-col-select">선택</th>${headers.map(label=>`<th>${label}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>{const rowId=String(row[row.length-1]||'').trim(); return `<tr><td data-label="선택">${isEditing?`<input type="checkbox" class="personal-equipment-row-check" value="${escapeHtml(rowId)}">`:''}</td>${headers.map((label, index)=>{if(index===headers.length-1){ return `<td data-label="${escapeHtml(label)}"><span class="equipment-personal-user-text">${escapeHtml(String(user||''))}</span></td>`; } const value=String(row[index]||''); if(isEditing){ const inputType=index===4?'number':'text'; return `<td data-label="${escapeHtml(label)}"><input type="${inputType}" class="equipment-table-input" data-personal-row-id="${escapeHtml(rowId)}" data-personal-col-index="${index}" value="${escapeHtml(value)}" oninput="updateEquipmentRow('${escapeHtml(rowId)}', ${index}, this.value)"></td>`; } return `<td data-label="${escapeHtml(label)}"><span class="equipment-readonly-text">${escapeHtml(value)}</span></td>`;}).join('')}</tr>`;}).join('')}</tbody>`;
}
function renderEquipmentCarnetTitle(){
  const hasEntries=equipmentCarnetEntries.length>0;
  const deleteLabel=isEquipmentCarnetDeleteMode ? '선택 삭제' : '삭제';
  return `<span class="section-title-row"><span>까르네 목록</span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="openEquipmentCarnetComposer()" ${isEquipmentCarnetComposerOpen||isEquipmentCarnetDeleteMode?'disabled':''}>작성</button><button type="button" class="section-title-action-btn delete" onclick="${isEquipmentCarnetDeleteMode?'deleteSelectedEquipmentCarnetEntries()':'enterEquipmentCarnetDeleteMode()'}" ${hasEntries?'':'disabled'}>${deleteLabel}</button>${isEquipmentCarnetDeleteMode?'<button type="button" class="section-title-action-btn" onclick="cancelEquipmentCarnetDeleteMode()">취소</button>':''}<button type="button" class="section-title-action-btn export-action-btn" onclick="openEquipmentCarnetExportModal()" ${hasEntries?'':'disabled'}>내보내기</button></span></span>`;
}
function createEquipmentCarnetId(){
  return `equipment-carnet-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}
function getEquipmentCarnetFileExtension(fileName=''){
  const normalized=String(fileName||'').trim().toLowerCase();
  const match=normalized.match(/\.([a-z0-9]+)$/);
  return match ? match[1] : '';
}
function getEquipmentCarnetFileType(fileName='', mimeType=''){
  const extension=getEquipmentCarnetFileExtension(fileName);
  if(['jpg','jpeg','png','webp'].includes(extension)||String(mimeType||'').startsWith('image/')) return 'image';
  if(['xlsx','xls','csv'].includes(extension)) return extension==='csv' ? 'csv' : 'excel';
  return '';
}
function isEquipmentCarnetFileAccepted(fileName='', mimeType=''){
  return Boolean(getEquipmentCarnetFileType(fileName, mimeType));
}
function normalizeEquipmentCarnetRows(rows=[], maxRows=12, maxCols=8){
  return sanitizeEquipmentCarnetRows(Array.isArray(rows)?rows:[])
    .slice(0, maxRows)
    .map(row=>(Array.isArray(row)?row:[])
      .slice(0, maxCols)
      .map(value=>String(value??'').trim()))
    .filter(row=>row.some(value=>value));
}
function isEquipmentCarnetInvalidExampleRow(row=[]){
  const text=(Array.isArray(row)?row:[row]).map(value=>String(value??'')).join(' ').trim().toLowerCase();
  return text.includes('작성예시')
    || text.includes('[작성예시]')
    || text.includes('sample')
    || text.includes('example')
    || text.includes('demo');
}
function sanitizeEquipmentCarnetRows(rows=[]){
  const sourceRows=Array.isArray(rows)?rows:[];
  const invalidIndex=sourceRows.findIndex(isEquipmentCarnetInvalidExampleRow);
  const sanitizedRows=invalidIndex>=0 ? sourceRows.slice(0, invalidIndex) : sourceRows;
  if(invalidIndex>=0){
    console.warn('[equipment-carnet] invalid example rows removed', {
      originalRowCount:sourceRows.length,
      removedRowCount:sourceRows.length-invalidIndex,
      sampleInjected:false
    });
  }
  return sanitizedRows;
}
function normalizeEquipmentCarnetEntry(entry={}, index=0){
  const title=String(entry?.title||'').trim();
  const fileName=String(entry?.fileName||'').trim();
  const fileType=String(entry?.fileType||getEquipmentCarnetFileType(fileName)).trim();
  const originalData=String(entry?.originalData||entry?.url||'').trim();
  const previewData=entry?.previewData&&typeof entry.previewData==='object' ? entry.previewData : {};
  if(!title&&!fileName&&!originalData) return null;
  return {
    id:String(entry?.id||`equipment-carnet-restored-${Date.now()}-${index}`).trim(),
    title:title||fileName||'까르네 파일',
    fileName,
    fileType:fileType||'file',
    createdAt:Number(entry?.createdAt)||Date.now()+index,
    originalData,
    previewData:{
      type:String(previewData.type||fileType||'file').trim(),
      rows:normalizeEquipmentCarnetRows(previewData.rows||[], 6, 5),
      src:String(previewData.src||'').trim()
    }
  };
}
function isEquipmentCarnetSampleEntry(entry={}){
  const title=String(entry?.title||'').trim().toLowerCase();
  const id=String(entry?.id||'').trim().toLowerCase();
  const fileName=String(entry?.fileName||'').trim().toLowerCase();
  return title==='작성예시'
    || id.includes('sample')
    || id.includes('example')
    || id.includes('demo')
    || fileName.includes('sample')
    || fileName.includes('example')
    || fileName.includes('demo');
}
function sortEquipmentCarnetEntries(entries=[]){
  return [...entries].sort((a,b)=>{
    const dateCompare=Number(b.createdAt||0)-Number(a.createdAt||0);
    if(dateCompare!==0) return dateCompare;
    return String(a.title||'').localeCompare(String(b.title||''));
  });
}
function readEquipmentCarnetRaw(){
  return getSharedStateLocalRaw(EQUIPMENT_CARNET_STORAGE_KEY);
}
function writeEquipmentCarnetRaw(raw=''){
  try{
    setSharedStateLocalRaw(EQUIPMENT_CARNET_STORAGE_KEY, raw);
  }catch(error){
    console.warn('[equipment-carnet] local cache write failed; shared sync will still be attempted.', error);
  }
  scheduleSharedStateSyncWrite(EQUIPMENT_CARNET_STORAGE_KEY, raw);
}
function loadEquipmentCarnetEntries(){
  if(hasLoadedEquipmentCarnetEntries) return;
  hasLoadedEquipmentCarnetEntries=true;
  equipmentCarnetEntries=[];
  const raw=readEquipmentCarnetRaw();
  if(!raw){
    console.log('[equipment-carnet] load', {itemCount:0, sampleInjected:false, sampleRemoved:0});
    return;
  }
  try{
    const parsed=JSON.parse(raw);
    const source=Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.items) ? parsed.items : []);
    const normalizedEntries=source.map(normalizeEquipmentCarnetEntry).filter(Boolean);
    const actualEntries=normalizedEntries.filter(entry=>!isEquipmentCarnetSampleEntry(entry));
    const removedCount=normalizedEntries.length-actualEntries.length;
    equipmentCarnetEntries=sortEquipmentCarnetEntries(actualEntries);
    console.log('[equipment-carnet] load', {
      itemCount:equipmentCarnetEntries.length,
      sampleInjected:false,
      sampleRemoved:removedCount
    });
    if(removedCount>0){
      saveEquipmentCarnetEntries();
    }
  }catch(error){
    console.warn('[equipment-carnet] load failed', error);
  }
}
function saveEquipmentCarnetEntries(){
  loadEquipmentCarnetEntries();
  const payload={
    version:1,
    updatedAt:Date.now(),
    items:sortEquipmentCarnetEntries(equipmentCarnetEntries).map(entry=>({
      id:entry.id,
      title:entry.title,
      fileName:entry.fileName,
      fileType:entry.fileType,
      createdAt:entry.createdAt,
      originalData:entry.originalData,
      previewData:entry.previewData
    }))
  };
  writeEquipmentCarnetRaw(JSON.stringify(payload));
  renderCache.equipmentCarnetPanel='';
}
function getEquipmentCarnetEntries(){
  loadEquipmentCarnetEntries();
  return sortEquipmentCarnetEntries(equipmentCarnetEntries);
}
function formatEquipmentCarnetDate(timestamp){
  const value=Number(timestamp||0);
  if(!Number.isFinite(value)||value<=0) return '';
  try{
    return new Date(value).toLocaleString('ko-KR', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'});
  }catch(error){
    return '';
  }
}
function readFileAsDataUrl(file){
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(String(reader.result||''));
    reader.onerror=()=>resolve('');
    reader.readAsDataURL(file);
  });
}
function readFileAsArrayBuffer(file){
  if(file&&typeof file.arrayBuffer==='function') return file.arrayBuffer();
  return new Promise((resolve, reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=()=>reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}
function readFileAsText(file){
  if(file&&typeof file.text==='function') return file.text();
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(String(reader.result||''));
    reader.onerror=()=>resolve('');
    reader.readAsText(file);
  });
}
const EQUIPMENT_CARNET_PREFERRED_SHEET_NAME = '총괄목록';
function getEquipmentCarnetPreferredSheetName(workbook){
  if(!workbook||!Array.isArray(workbook.SheetNames)||!workbook.SheetNames.length) return '';
  return workbook.SheetNames.includes(EQUIPMENT_CARNET_PREFERRED_SHEET_NAME)
    ? EQUIPMENT_CARNET_PREFERRED_SHEET_NAME
    : workbook.SheetNames[0];
}
function getEquipmentCarnetRowsFromWorkbook(workbook){
  const sheetName=getEquipmentCarnetPreferredSheetName(workbook);
  if(!sheetName) return [];
  const selectedSheet=workbook.Sheets[sheetName];
  if(!selectedSheet) return [];
  const rows=XLSX.utils.sheet_to_json(selectedSheet, {header:1, defval:'', blankrows:false});
  const sanitizedRows=sanitizeEquipmentCarnetRows(rows);
  console.log('[equipment-carnet] parsed rows', {
    sheetName,
    parsedRowCount:rows.length,
    sanitizedRowCount:sanitizedRows.length,
    sampleInjected:false
  });
  return sanitizedRows;
}
function parseEquipmentCarnetSpreadsheetRowsFromText(text=''){
  if(!window.XLSX) return [];
  const workbook=XLSX.read(String(text||''), {type:'string'});
  return getEquipmentCarnetRowsFromWorkbook(workbook);
}
function parseEquipmentCarnetSpreadsheetRowsFromArrayBuffer(arrayBuffer){
  if(!window.XLSX) return [];
  const workbook=XLSX.read(arrayBuffer, {type:'array'});
  return getEquipmentCarnetRowsFromWorkbook(workbook);
}
function dataUrlToArrayBuffer(dataUrl=''){
  const text=String(dataUrl||'');
  const commaIndex=text.indexOf(',');
  if(commaIndex<0) return new ArrayBuffer(0);
  const meta=text.slice(0, commaIndex).toLowerCase();
  const payload=text.slice(commaIndex+1);
  const binary=meta.includes(';base64') ? atob(payload) : decodeURIComponent(payload);
  const bytes=new Uint8Array(binary.length);
  for(let index=0; index<binary.length; index+=1){
    bytes[index]=binary.charCodeAt(index);
  }
  return bytes.buffer;
}
function dataUrlToText(dataUrl=''){
  const text=String(dataUrl||'');
  const commaIndex=text.indexOf(',');
  if(commaIndex<0) return '';
  const meta=text.slice(0, commaIndex).toLowerCase();
  const payload=text.slice(commaIndex+1);
  if(meta.includes(';base64')){
    const binary=atob(payload);
    const bytes=new Uint8Array(binary.length);
    for(let index=0; index<binary.length; index+=1){
      bytes[index]=binary.charCodeAt(index);
    }
    return new TextDecoder('utf-8').decode(bytes);
  }
  return decodeURIComponent(payload);
}
async function parseEquipmentCarnetEntryRows(entry={}, maxRows=240, maxCols=24){
  const fileType=String(entry?.fileType||'').trim();
  if(fileType==='csv'){
    const text=dataUrlToText(entry.originalData||'');
    return normalizeEquipmentCarnetRows(parseEquipmentCarnetSpreadsheetRowsFromText(text), maxRows, maxCols);
  }
  const arrayBuffer=dataUrlToArrayBuffer(entry.originalData||'');
  return normalizeEquipmentCarnetRows(parseEquipmentCarnetSpreadsheetRowsFromArrayBuffer(arrayBuffer), maxRows, maxCols);
}
function renderEquipmentCarnetSpreadsheetPreview(rows=[], className='equipment-carnet-preview-table'){
  const normalizedRows=normalizeEquipmentCarnetRows(rows, 6, 5);
  console.log('[equipment-carnet] preview rows', {
    previewRowCount:normalizedRows.length,
    sampleInjected:false
  });
  if(!normalizedRows.length){
    return '<div class="equipment-carnet-file-icon">표 미리보기</div>';
  }
  return `<table class="${escapeHtml(className)}">${normalizedRows.map(row=>`<tr>${row.map(value=>`<td>${escapeHtml(value||'')}</td>`).join('')}</tr>`).join('')}</table>`;
}
function renderEquipmentCarnetComposer(){
  if(!isEquipmentCarnetComposerOpen) return '';
  return `<div class="carnet-list-composer" aria-label="까르네 파일 작성">
    <div class="carnet-list-composer-title">까르네 파일 작성</div>
    <div class="carnet-list-form-grid">
      <label class="simple-form-field">
        <span class="simple-form-label">제목</span>
        <input id="equipmentCarnetTitleInput" class="simple-form-input" type="text" placeholder="예: 멕시코 입국 까르네 목록">
      </label>
      <label class="simple-form-field">
        <span class="simple-form-label">파일 첨부</span>
        <input id="equipmentCarnetFileInput" class="equipment-carnet-file-input" type="file" accept=".xlsx,.xls,.csv,.jpg,.jpeg,.png,.webp">
      </label>
    </div>
    <p class="carnet-list-composer-description">엑셀(.xlsx, .xls, .csv) 또는 이미지(.jpg, .jpeg, .png, .webp)를 등록할 수 있습니다.</p>
    <div class="simple-info-actions carnet-list-form-actions">
      <button type="button" class="section-title-action-btn" onclick="saveEquipmentCarnetEntry(this)">저장</button>
      <button type="button" class="section-title-action-btn" onclick="closeEquipmentCarnetComposer()">취소</button>
    </div>
  </div>`;
}
function isEquipmentCarnetEntrySelected(entryId=''){
  return equipmentCarnetSelectedIds.has(String(entryId||''));
}
function toggleEquipmentCarnetSelection(entryId=''){
  const normalized=String(entryId||'').trim();
  if(!normalized) return;
  if(equipmentCarnetSelectedIds.has(normalized)){
    equipmentCarnetSelectedIds.delete(normalized);
  }else{
    equipmentCarnetSelectedIds.add(normalized);
  }
  renderEquipmentCarnetDetail();
}
function enterEquipmentCarnetDeleteMode(){
  loadEquipmentCarnetEntries();
  if(!equipmentCarnetEntries.length) return;
  isEquipmentCarnetDeleteMode=true;
  equipmentCarnetSelectedIds.clear();
  renderEquipmentCarnetDetail();
}
function cancelEquipmentCarnetDeleteMode(){
  isEquipmentCarnetDeleteMode=false;
  equipmentCarnetSelectedIds.clear();
  renderEquipmentCarnetDetail();
}
function deleteSelectedEquipmentCarnetEntries(){
  loadEquipmentCarnetEntries();
  if(!isEquipmentCarnetDeleteMode){
    enterEquipmentCarnetDeleteMode();
    return;
  }
  if(!equipmentCarnetSelectedIds.size){
    window.alert('삭제할 항목을 선택하세요.');
    return;
  }
  const confirmed=window.confirm(`선택한 까르네 항목 ${equipmentCarnetSelectedIds.size}개를 삭제하시겠습니까?`);
  if(!confirmed) return;
  equipmentCarnetEntries=equipmentCarnetEntries.filter(entry=>!equipmentCarnetSelectedIds.has(String(entry.id)));
  equipmentCarnetSelectedIds.clear();
  isEquipmentCarnetDeleteMode=false;
  saveEquipmentCarnetEntries();
  renderEquipmentCarnetDetail();
}
function renderEquipmentCarnetCard(entry){
  const isImage=entry.fileType==='image';
  const createdAt=formatEquipmentCarnetDate(entry.createdAt);
  const isSelected=isEquipmentCarnetEntrySelected(entry.id);
  const thumbnail=isImage
    ? `<img class="equipment-carnet-thumb-image" src="${escapeHtml(entry.originalData||entry.previewData?.src||'')}" alt="${escapeHtml(entry.title)} 미리보기">`
    : renderEquipmentCarnetSpreadsheetPreview(entry.previewData?.rows||[]);
  const openAction=isEquipmentCarnetDeleteMode ? `toggleEquipmentCarnetSelection('${escapeHtml(entry.id)}')` : `openEquipmentCarnetViewer('${escapeHtml(entry.id)}')`;
  return `<article class="equipment-carnet-card${isSelected?' is-selected':''}${isEquipmentCarnetDeleteMode?' is-delete-mode':''}" onclick="${openAction}" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${openAction};}">
    <div class="equipment-carnet-thumb">${isEquipmentCarnetDeleteMode?`<label class="equipment-carnet-select-badge" onclick="event.stopPropagation()"><input type="checkbox" class="equipment-carnet-select-checkbox" ${isSelected?'checked':''} onchange="toggleEquipmentCarnetSelection('${escapeHtml(entry.id)}')"><span>선택</span></label>`:''}${thumbnail}</div>
    <div class="equipment-carnet-card-body">
      <h4 class="equipment-carnet-card-title">${escapeHtml(entry.title)}</h4>
      <div class="equipment-carnet-card-file">${escapeHtml(entry.fileName||'파일명 없음')}</div>
      <div class="equipment-carnet-card-date">${escapeHtml(createdAt)}</div>
    </div>
  </article>`;
}
function renderEquipmentCarnetMobileRow(entry){
  const createdAt=formatEquipmentCarnetDate(entry.createdAt);
  const meta=createdAt||entry.fileName||'등록 정보 없음';
  const isSelected=isEquipmentCarnetEntrySelected(entry.id);
  const openAction=isEquipmentCarnetDeleteMode ? `toggleEquipmentCarnetSelection('${escapeHtml(entry.id)}')` : `openEquipmentCarnetViewer('${escapeHtml(entry.id)}')`;
  return `<div class="equipment-carnet-mobile-row${isSelected?' is-selected':''}">
    ${isEquipmentCarnetDeleteMode?`<label class="equipment-carnet-mobile-check"><input type="checkbox" ${isSelected?'checked':''} onchange="toggleEquipmentCarnetSelection('${escapeHtml(entry.id)}')"><span>선택</span></label>`:''}
    <button type="button" class="equipment-carnet-mobile-link" onclick="${openAction}">
      <span class="equipment-carnet-mobile-title">${escapeHtml(entry.title)}</span>
      <span class="equipment-carnet-mobile-meta">${escapeHtml(meta)}</span>
    </button>
  </div>`;
}
function renderEquipmentCarnetItems(entries=[]){
  if(!entries.length){
    return '<div class="carnet-list-placeholder">등록된 까르네 파일이 없습니다. 작성 버튼으로 파일을 추가하세요.</div>';
  }
  return `<div class="equipment-carnet-desktop-grid">${entries.map(renderEquipmentCarnetCard).join('')}</div><div class="equipment-carnet-mobile-list">${entries.map(renderEquipmentCarnetMobileRow).join('')}</div>`;
}
function renderEquipmentCarnetPanelHtml(){
  const entries=getEquipmentCarnetEntries();
  return `<tbody><tr><td class="carnet-list-cell"><section class="carnet-list-panel" aria-label="까르네 목록"><header class="carnet-list-header"><h3 class="carnet-list-title">까르네 목록</h3></header>${renderEquipmentCarnetComposer()}<div class="carnet-list-body">${renderEquipmentCarnetItems(entries)}</div></section></td></tr></tbody>`;
}
async function saveEquipmentCarnetEntry(saveButton=null){
  loadEquipmentCarnetEntries();
  const titleInput=document.getElementById('equipmentCarnetTitleInput');
  const fileInput=document.getElementById('equipmentCarnetFileInput');
  const title=String(titleInput?.value||'').trim();
  const file=fileInput?.files?.[0]||null;
  if(!title){
    window.alert('제목을 입력해주세요.');
    titleInput?.focus();
    return;
  }
  if(!file){
    window.alert('첨부할 파일을 선택해주세요.');
    fileInput?.focus();
    return;
  }
  const fileType=getEquipmentCarnetFileType(file.name, file.type);
  if(!isEquipmentCarnetFileAccepted(file.name, file.type)){
    window.alert('엑셀(.xlsx, .xls, .csv) 또는 이미지(.jpg, .jpeg, .png, .webp)만 등록할 수 있습니다.');
    fileInput.value='';
    fileInput.focus();
    return;
  }
  if(fileType!=='image'&&!window.XLSX){
    window.alert('엑셀 뷰어 라이브러리를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
    return;
  }
  if(saveButton) saveButton.disabled=true;
  try{
    const originalData=await readFileAsDataUrl(file);
    if(!originalData) throw new Error('file-read-failed');
    let previewData={type:fileType};
    if(fileType==='image'){
      previewData={type:'image', src:originalData};
    }else if(fileType==='csv'){
      const text=await readFileAsText(file);
      previewData={type:'spreadsheet', rows:normalizeEquipmentCarnetRows(parseEquipmentCarnetSpreadsheetRowsFromText(text), 6, 5)};
    }else{
      const arrayBuffer=await readFileAsArrayBuffer(file);
      previewData={type:'spreadsheet', rows:normalizeEquipmentCarnetRows(parseEquipmentCarnetSpreadsheetRowsFromArrayBuffer(arrayBuffer), 6, 5)};
    }
    const nextEntry=normalizeEquipmentCarnetEntry({
      id:createEquipmentCarnetId(),
      title,
      fileName:file.name,
      fileType,
      createdAt:Date.now(),
      originalData,
      previewData
    });
    if(!nextEntry) throw new Error('entry-normalize-failed');
    equipmentCarnetEntries=sortEquipmentCarnetEntries([nextEntry, ...equipmentCarnetEntries]);
    saveEquipmentCarnetEntries();
    isEquipmentCarnetComposerOpen=false;
    isEquipmentCarnetDeleteMode=false;
    equipmentCarnetSelectedIds.clear();
    renderEquipmentCarnetDetail();
  }catch(error){
    console.warn('[equipment-carnet] save failed', error);
    window.alert('까르네 파일 저장에 실패했습니다. 파일 형식과 용량을 확인해주세요.');
  }finally{
    if(saveButton) saveButton.disabled=false;
  }
}
function deleteEquipmentCarnetEntry(entryId=''){
  loadEquipmentCarnetEntries();
  const normalized=String(entryId||'').trim();
  const target=equipmentCarnetEntries.find(entry=>String(entry.id)===normalized);
  if(!target) return;
  const confirmed=window.confirm(`'${target.title}' 항목을 삭제하시겠습니까?`);
  if(!confirmed) return;
  equipmentCarnetEntries=equipmentCarnetEntries.filter(entry=>String(entry.id)!==normalized);
  saveEquipmentCarnetEntries();
  renderEquipmentCarnetDetail();
}
function ensureEquipmentCarnetExportModal(){
  let modal=document.getElementById('equipmentCarnetExportModal');
  if(modal) return modal;
  document.body.insertAdjacentHTML('beforeend', `<div id="equipmentCarnetExportModal" class="news-editor-modal equipment-carnet-export-modal hidden" tabindex="-1"><div class="news-editor-modal-backdrop" onclick="closeEquipmentCarnetExportModal()"></div><div class="news-editor-modal-panel equipment-carnet-export-panel" role="dialog" aria-modal="true" aria-labelledby="equipmentCarnetExportTitle"><div class="news-editor-modal-header"><div><h3 id="equipmentCarnetExportTitle">까르네 목록 내보내기</h3><p id="equipmentCarnetExportMeta" class="news-editor-modal-meta"></p></div><button type="button" class="news-editor-modal-close" onclick="closeEquipmentCarnetExportModal()" aria-label="닫기">×</button></div><div id="equipmentCarnetExportBody" class="equipment-carnet-export-body"></div><div class="news-editor-modal-actions equipment-carnet-export-actions"><button type="button" class="news-editor-modal-btn" onclick="closeEquipmentCarnetExportModal()">닫기</button><button type="button" class="news-editor-modal-btn primary" onclick="printEquipmentCarnetExportModal()">인쇄</button></div></div></div>`);
  modal=document.getElementById('equipmentCarnetExportModal');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape') closeEquipmentCarnetExportModal();
  });
  return modal;
}
function closeEquipmentCarnetExportModal(){
  const modal=document.getElementById('equipmentCarnetExportModal');
  if(!modal) return;
  modal.classList.add('hidden');
  syncEquipmentCarnetModalBodyState();
}
async function buildEquipmentCarnetExportItemsHtml(entries=[]){
  const blocks=await Promise.all(entries.map(async entry=>{
    const createdAt=formatEquipmentCarnetDate(entry.createdAt);
    if(entry.fileType==='image'){
      return `<article class="equipment-carnet-export-item"><header class="equipment-carnet-export-item-header"><h4>${escapeHtml(entry.title||entry.fileName||'까르네 파일')}</h4><div class="equipment-carnet-export-item-meta">${escapeHtml([entry.fileName, createdAt].filter(Boolean).join(' · '))}</div></header><div class="equipment-carnet-export-image"><img src="${escapeHtml(entry.originalData||entry.previewData?.src||'')}" alt="${escapeHtml(entry.title||entry.fileName||'까르네 이미지')}"></div></article>`;
    }
    try{
      const rows=await parseEquipmentCarnetEntryRows(entry, 240, 24);
      const tableHtml=rows.length
        ? `<div class="equipment-carnet-export-sheet"><table class="equipment-carnet-export-table">${rows.map(row=>`<tr>${row.map(value=>`<td>${escapeHtml(value||'')}</td>`).join('')}</tr>`).join('')}</table></div>`
        : '<div class="equipment-carnet-export-empty">표 데이터를 읽을 수 없습니다.</div>';
      return `<article class="equipment-carnet-export-item"><header class="equipment-carnet-export-item-header"><h4>${escapeHtml(entry.title||entry.fileName||'까르네 파일')}</h4><div class="equipment-carnet-export-item-meta">${escapeHtml([entry.fileName, createdAt].filter(Boolean).join(' · '))}</div></header>${tableHtml}</article>`;
    }catch(error){
      console.warn('[equipment-carnet] export render failed', error);
      return `<article class="equipment-carnet-export-item"><header class="equipment-carnet-export-item-header"><h4>${escapeHtml(entry.title||entry.fileName||'까르네 파일')}</h4><div class="equipment-carnet-export-item-meta">${escapeHtml([entry.fileName, createdAt].filter(Boolean).join(' · '))}</div></header><div class="equipment-carnet-export-empty">내보내기용 데이터를 읽을 수 없습니다.</div></article>`;
    }
  }));
  return blocks.join('');
}
async function openEquipmentCarnetExportModal(){
  loadEquipmentCarnetEntries();
  const entries=getEquipmentCarnetEntries();
  if(!entries.length){
    window.alert('내보낼 까르네 항목이 없습니다.');
    return;
  }
  const modal=ensureEquipmentCarnetExportModal();
  const meta=document.getElementById('equipmentCarnetExportMeta');
  const body=document.getElementById('equipmentCarnetExportBody');
  if(meta) meta.textContent=`총 ${entries.length}개 항목`;
  if(body) body.innerHTML='<div class="equipment-carnet-viewer-loading">내보내기 내용을 준비하는 중입니다.</div>';
  modal.classList.remove('hidden');
  syncEquipmentCarnetModalBodyState();
  modal.focus();
  const itemsHtml=await buildEquipmentCarnetExportItemsHtml(entries);
  if(body) body.innerHTML=`<div id="equipmentCarnetExportPrintArea" class="equipment-carnet-export-list">${itemsHtml}</div>`;
}
function printEquipmentCarnetExportModal(){
  const printArea=document.getElementById('equipmentCarnetExportPrintArea');
  if(!printArea) return;
  const printWindow=window.open('', '_blank', 'width=1024,height=768');
  if(!printWindow){
    window.alert('인쇄 창을 열 수 없습니다. 팝업 차단 설정을 확인해주세요.');
    return;
  }
  printWindow.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>까르네 목록 인쇄</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#10253b}h1{font-size:24px;margin:0 0 20px}.equipment-carnet-export-list{display:flex;flex-direction:column;gap:20px}.equipment-carnet-export-item{border:1px solid #d9e3ee;border-radius:12px;padding:16px;page-break-inside:avoid}.equipment-carnet-export-item-header{margin-bottom:12px}.equipment-carnet-export-item-header h4{margin:0 0 6px;font-size:18px}.equipment-carnet-export-item-meta{color:#5c6e82;font-size:12px}.equipment-carnet-export-sheet{overflow:auto}.equipment-carnet-export-table{width:max-content;min-width:100%;border-collapse:collapse;font-size:12px}.equipment-carnet-export-table td{padding:6px 8px;border:1px solid #d9e3ee;vertical-align:top;word-break:break-word}.equipment-carnet-export-image img{max-width:100%;height:auto;border:1px solid #d9e3ee;border-radius:8px}.equipment-carnet-export-empty{padding:18px;border:1px dashed #c7d4e2;border-radius:10px;color:#5b6d82;font-size:13px}</style></head><body><h1>까르네 목록</h1>${printArea.outerHTML}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}
function syncEquipmentCarnetModalBodyState(){
  const viewerOpen=Boolean(document.getElementById('equipmentCarnetViewerModal')&&!document.getElementById('equipmentCarnetViewerModal').classList.contains('hidden'));
  const exportOpen=Boolean(document.getElementById('equipmentCarnetExportModal')&&!document.getElementById('equipmentCarnetExportModal').classList.contains('hidden'));
  document.body.classList.toggle('equipment-carnet-modal-open', viewerOpen||exportOpen);
}
function ensureEquipmentCarnetViewerModal(){
  let modal=document.getElementById('equipmentCarnetViewerModal');
  if(modal) return modal;
  document.body.insertAdjacentHTML('beforeend', `<div id="equipmentCarnetViewerModal" class="news-editor-modal equipment-carnet-viewer-modal hidden" tabindex="-1"><div class="news-editor-modal-backdrop" onclick="closeEquipmentCarnetViewerModal()"></div><div class="news-editor-modal-panel equipment-carnet-viewer-panel" role="dialog" aria-modal="true" aria-labelledby="equipmentCarnetViewerTitle"><div class="news-editor-modal-header"><div><h3 id="equipmentCarnetViewerTitle">까르네 파일</h3><p id="equipmentCarnetViewerMeta" class="news-editor-modal-meta"></p></div><button type="button" class="news-editor-modal-close" onclick="closeEquipmentCarnetViewerModal()" aria-label="닫기">×</button></div><div id="equipmentCarnetViewerBody" class="equipment-carnet-viewer-body"></div></div></div>`);
  modal=document.getElementById('equipmentCarnetViewerModal');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape') closeEquipmentCarnetViewerModal();
  });
  return modal;
}
function closeEquipmentCarnetViewerModal(){
  const modal=document.getElementById('equipmentCarnetViewerModal');
  if(!modal) return;
  modal.classList.add('hidden');
  syncEquipmentCarnetModalBodyState();
}
async function openEquipmentCarnetViewer(entryId=''){
  loadEquipmentCarnetEntries();
  const entry=equipmentCarnetEntries.find(item=>String(item.id)===String(entryId));
  if(!entry) return;
  const modal=ensureEquipmentCarnetViewerModal();
  const title=document.getElementById('equipmentCarnetViewerTitle');
  const meta=document.getElementById('equipmentCarnetViewerMeta');
  const body=document.getElementById('equipmentCarnetViewerBody');
  title.textContent=entry.title;
  meta.textContent=[entry.fileName, formatEquipmentCarnetDate(entry.createdAt)].filter(Boolean).join(' · ');
  body.innerHTML='<div class="equipment-carnet-viewer-loading">파일을 여는 중입니다.</div>';
  modal.classList.remove('hidden');
  syncEquipmentCarnetModalBodyState();
  modal.focus();
  if(entry.fileType==='image'){
    body.innerHTML=`<div class="equipment-carnet-image-viewer"><img src="${escapeHtml(entry.originalData||entry.previewData?.src||'')}" alt="${escapeHtml(entry.title)}"></div>`;
    return;
  }
  try{
    const rows=await parseEquipmentCarnetEntryRows(entry, 240, 24);
    console.log('[equipment-carnet] viewer rows', {
      viewerRowCount:rows.length,
      sampleInjected:false
    });
    body.innerHTML=rows.length
      ? `<div class="equipment-carnet-sheet-wrap"><table class="equipment-carnet-sheet-table">${rows.map(row=>`<tr>${row.map(value=>`<td>${escapeHtml(value||'')}</td>`).join('')}</tr>`).join('')}</table></div>`
      : '<div class="equipment-carnet-viewer-empty">표 데이터를 읽을 수 없습니다.</div>';
  }catch(error){
    console.warn('[equipment-carnet] viewer failed', error);
    body.innerHTML='<div class="equipment-carnet-viewer-empty">파일을 열 수 없습니다. 원본 파일 형식을 확인해주세요.</div>';
  }
}
function renderEquipmentFileStorageTitle(){
  const hasEntries=equipmentFileStorageEntries.length>0;
  const deleteLabel=isEquipmentFileStorageDeleteMode ? '선택 삭제' : '삭제';
  return `<span class="section-title-row"><span>파일보관</span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="openEquipmentFileStorageComposer()" ${isEquipmentFileStorageComposerOpen||isEquipmentFileStorageDeleteMode?'disabled':''}>작성</button><button type="button" class="section-title-action-btn delete" onclick="${isEquipmentFileStorageDeleteMode?'deleteSelectedEquipmentFileStorageEntries()':'enterEquipmentFileStorageDeleteMode()'}" ${hasEntries?'':'disabled'}>${deleteLabel}</button>${isEquipmentFileStorageDeleteMode?'<button type="button" class="section-title-action-btn" onclick="cancelEquipmentFileStorageDeleteMode()">취소</button>':''}</span></span>`;
}
function createEquipmentFileStorageId(){
  return `equipment-file-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}
function getEquipmentFileStorageExtension(fileName=''){
  const normalized=String(fileName||'').trim().toLowerCase();
  const match=normalized.match(/\.([a-z0-9]+)$/);
  return match ? match[1] : '';
}
function getEquipmentFileStorageType(fileName='', mimeType=''){
  const extension=getEquipmentFileStorageExtension(fileName);
  const normalizedMime=String(mimeType||'').toLowerCase();
  if(['jpg','jpeg','png','gif','webp','bmp','svg'].includes(extension)||normalizedMime.startsWith('image/')) return 'image';
  if(extension==='pdf'||normalizedMime==='application/pdf') return 'pdf';
  if(['txt','md','json','xml','csv','log','js','css','html'].includes(extension)||normalizedMime.startsWith('text/')||normalizedMime==='application/json') return 'text';
  if(['xlsx','xls'].includes(extension)) return 'excel';
  if(['doc','docx'].includes(extension)) return 'word';
  if(['ppt','pptx'].includes(extension)) return 'ppt';
  if(['hwp','hwpx'].includes(extension)) return 'hwp';
  if(['zip','rar','7z'].includes(extension)) return 'zip';
  return 'file';
}
function formatEquipmentFileStorageDate(timestamp){
  const value=Number(timestamp||0);
  if(!Number.isFinite(value)||value<=0) return '';
  try{
    return new Date(value).toLocaleString('ko-KR', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'});
  }catch(error){
    return '';
  }
}
function formatEquipmentFileStorageSize(size){
  const value=Number(size||0);
  if(!Number.isFinite(value)||value<=0) return '0 B';
  const units=['B','KB','MB','GB'];
  let current=value;
  let unitIndex=0;
  while(current>=1024&&unitIndex<units.length-1){
    current/=1024;
    unitIndex+=1;
  }
  const digits=current>=100||unitIndex===0 ? 0 : current>=10 ? 1 : 2;
  return `${current.toFixed(digits)} ${units[unitIndex]}`;
}
function normalizeEquipmentFileStorageEntry(entry={}, index=0){
  const originalData=String(entry?.originalData||entry?.dataUrl||entry?.url||'').trim();
  const fileName=String(entry?.fileName||entry?.name||'').trim();
  const title=String(entry?.title||fileName||'').trim();
  if(!originalData&&!fileName&&!title) return null;
  const fileType=String(entry?.fileType||getEquipmentFileStorageType(fileName, entry?.mimeType||'')).trim()||'file';
  const previewData=entry?.previewData&&typeof entry.previewData==='object' ? entry.previewData : {};
  return {
    id:String(entry?.id||`equipment-file-restored-${Date.now()}-${index}`).trim(),
    title:title||fileName||'자료 파일',
    fileName:fileName||'파일',
    fileType,
    mimeType:String(entry?.mimeType||previewData.mimeType||'').trim(),
    fileSize:Number(entry?.fileSize)||0,
    createdAt:Number(entry?.createdAt)||Date.now()+index,
    originalData,
    previewData:{
      extension:String(previewData.extension||getEquipmentFileStorageExtension(fileName)).trim(),
      text:String(previewData.text||'').trim(),
      src:String(previewData.src||originalData||'').trim()
    }
  };
}
function sortEquipmentFileStorageEntries(entries=[]){
  return [...entries].sort((a,b)=>{
    const createdCompare=Number(b.createdAt||0)-Number(a.createdAt||0);
    if(createdCompare!==0) return createdCompare;
    return String(a.title||'').localeCompare(String(b.title||''));
  });
}
function getEquipmentFileStorageStorage(){
  if(typeof window==='undefined'||!window.localStorage) return null;
  try{
    const probe='__equipment_file_storage_probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    return window.localStorage;
  }catch(error){
    console.warn('[equipment-file-storage] localStorage unavailable', error);
    return null;
  }
}
function readEquipmentFileStorageRaw(){
  const storage=getEquipmentFileStorageStorage();
  return storage ? String(storage.getItem(EQUIPMENT_FILE_STORAGE_KEY)||'') : '';
}
function writeEquipmentFileStorageRaw(raw=''){
  const storage=getEquipmentFileStorageStorage();
  if(!storage) return;
  const normalized=String(raw||'');
  if(normalized){
    storage.setItem(EQUIPMENT_FILE_STORAGE_KEY, normalized);
  }else{
    storage.removeItem(EQUIPMENT_FILE_STORAGE_KEY);
  }
}
function loadEquipmentFileStorageEntries(){
  if(hasLoadedEquipmentFileStorageEntries) return;
  hasLoadedEquipmentFileStorageEntries=true;
  equipmentFileStorageEntries=[];
  const raw=readEquipmentFileStorageRaw();
  if(!raw) return;
  try{
    const parsed=JSON.parse(raw);
    const source=Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.items) ? parsed.items : []);
    equipmentFileStorageEntries=sortEquipmentFileStorageEntries(source.map(normalizeEquipmentFileStorageEntry).filter(Boolean));
  }catch(error){
    console.warn('[equipment-file-storage] load failed', error);
  }
}
function saveEquipmentFileStorageEntries(){
  loadEquipmentFileStorageEntries();
  const payload={
    version:1,
    updatedAt:Date.now(),
    items:sortEquipmentFileStorageEntries(equipmentFileStorageEntries).map(entry=>({
      id:entry.id,
      title:entry.title,
      fileName:entry.fileName,
      fileType:entry.fileType,
      mimeType:entry.mimeType,
      fileSize:entry.fileSize,
      createdAt:entry.createdAt,
      originalData:entry.originalData,
      previewData:entry.previewData
    }))
  };
  writeEquipmentFileStorageRaw(JSON.stringify(payload));
  renderCache.equipmentFileStoragePanel='';
}
function getEquipmentFileStorageEntries(){
  loadEquipmentFileStorageEntries();
  return sortEquipmentFileStorageEntries(equipmentFileStorageEntries);
}
function renderEquipmentFileStorageComposer(){
  if(!isEquipmentFileStorageComposerOpen) return '';
  return `<div class="carnet-list-composer equipment-file-storage-composer" aria-label="파일보관 작성"><div class="carnet-list-composer-title">파일보관 작성</div><div class="carnet-list-form-grid"><label class="simple-form-field"><span class="simple-form-label">제목</span><input id="equipmentFileStorageTitleInput" class="simple-form-input" type="text" placeholder="예: 경기장 안내 PDF"></label><label class="simple-form-field"><span class="simple-form-label">파일 첨부</span><input id="equipmentFileStorageInput" class="equipment-carnet-file-input" type="file"></label></div><p class="carnet-list-composer-description">PDF, 이미지, 엑셀, 워드, 한글, PPT, ZIP을 포함한 모든 자료 파일을 저장할 수 있습니다.</p><div class="simple-info-actions carnet-list-form-actions"><button type="button" class="section-title-action-btn" onclick="saveEquipmentFileStorageEntry(this)">저장</button><button type="button" class="section-title-action-btn" onclick="closeEquipmentFileStorageComposer()">취소</button></div></div>`;
}
function isEquipmentFileStorageEntrySelected(entryId=''){
  return equipmentFileStorageSelectedIds.has(String(entryId||''));
}
function toggleEquipmentFileStorageSelection(entryId=''){
  const normalized=String(entryId||'').trim();
  if(!normalized) return;
  if(equipmentFileStorageSelectedIds.has(normalized)){
    equipmentFileStorageSelectedIds.delete(normalized);
  }else{
    equipmentFileStorageSelectedIds.add(normalized);
  }
  renderEquipmentFileStorageDetail();
}
function enterEquipmentFileStorageDeleteMode(){
  loadEquipmentFileStorageEntries();
  if(!equipmentFileStorageEntries.length) return;
  isEquipmentFileStorageDeleteMode=true;
  equipmentFileStorageSelectedIds.clear();
  renderEquipmentFileStorageDetail();
}
function cancelEquipmentFileStorageDeleteMode(){
  isEquipmentFileStorageDeleteMode=false;
  equipmentFileStorageSelectedIds.clear();
  renderEquipmentFileStorageDetail();
}
function deleteSelectedEquipmentFileStorageEntries(){
  loadEquipmentFileStorageEntries();
  if(!isEquipmentFileStorageDeleteMode){
    enterEquipmentFileStorageDeleteMode();
    return;
  }
  if(!equipmentFileStorageSelectedIds.size){
    window.alert('삭제할 항목을 선택하세요.');
    return;
  }
  if(!window.confirm(`선택한 파일 ${equipmentFileStorageSelectedIds.size}개를 삭제하시겠습니까?`)) return;
  equipmentFileStorageEntries=equipmentFileStorageEntries.filter(entry=>!equipmentFileStorageSelectedIds.has(String(entry.id)));
  equipmentFileStorageSelectedIds.clear();
  isEquipmentFileStorageDeleteMode=false;
  saveEquipmentFileStorageEntries();
  renderEquipmentFileStorageDetail();
}
function renderEquipmentFileStorageThumb(entry){
  const extension=(entry.previewData?.extension||getEquipmentFileStorageExtension(entry.fileName)||entry.fileType||'file').toUpperCase();
  if(entry.fileType==='image'){
    return `<img class="equipment-carnet-thumb-image" src="${escapeHtml(entry.originalData||entry.previewData?.src||'')}" alt="${escapeHtml(entry.title)} 미리보기">`;
  }
  const typeClass=entry.fileType==='pdf' ? ' is-pdf' : '';
  const label=entry.fileType==='pdf' ? 'PDF' : extension||'FILE';
  return `<div class="equipment-file-storage-file-icon${typeClass}"><span>${escapeHtml(label)}</span></div>`;
}
function renderEquipmentFileStorageCard(entry){
  const isSelected=isEquipmentFileStorageEntrySelected(entry.id);
  const meta=[formatEquipmentFileStorageDate(entry.createdAt), formatEquipmentFileStorageSize(entry.fileSize)].filter(Boolean).join(' · ');
  const openAction=isEquipmentFileStorageDeleteMode ? `toggleEquipmentFileStorageSelection('${escapeHtml(entry.id)}')` : `openEquipmentFileStorageViewer('${escapeHtml(entry.id)}')`;
  return `<article class="equipment-carnet-card equipment-file-storage-card${isSelected?' is-selected':''}${isEquipmentFileStorageDeleteMode?' is-delete-mode':''}" onclick="${openAction}" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${openAction};}"><div class="equipment-carnet-thumb equipment-file-storage-thumb">${isEquipmentFileStorageDeleteMode?`<label class="equipment-carnet-select-badge" onclick="event.stopPropagation()"><input type="checkbox" class="equipment-carnet-select-checkbox" ${isSelected?'checked':''} onchange="toggleEquipmentFileStorageSelection('${escapeHtml(entry.id)}')"><span>선택</span></label>`:''}${renderEquipmentFileStorageThumb(entry)}</div><div class="equipment-carnet-card-body equipment-file-storage-card-body"><h4 class="equipment-carnet-card-title">${escapeHtml(entry.title)}</h4><div class="equipment-carnet-card-file">${escapeHtml(entry.fileName||'파일명 없음')}</div><div class="equipment-carnet-card-date">${escapeHtml(meta||'등록 정보 없음')}</div><div class="equipment-file-storage-card-actions"><button type="button" class="section-title-action-btn export-action-btn equipment-file-storage-export-btn" onclick="event.stopPropagation();downloadEquipmentFileStorageEntry('${escapeHtml(entry.id)}')">내보내기</button></div></div></article>`;
}
function renderEquipmentFileStorageMobileRow(entry){
  const isSelected=isEquipmentFileStorageEntrySelected(entry.id);
  const meta=[formatEquipmentFileStorageDate(entry.createdAt), formatEquipmentFileStorageSize(entry.fileSize)].filter(Boolean).join(' · ');
  const openAction=isEquipmentFileStorageDeleteMode ? `toggleEquipmentFileStorageSelection('${escapeHtml(entry.id)}')` : `openEquipmentFileStorageViewer('${escapeHtml(entry.id)}')`;
  return `<div class="equipment-carnet-mobile-row equipment-file-storage-mobile-row${isSelected?' is-selected':''}">${isEquipmentFileStorageDeleteMode?`<label class="equipment-carnet-mobile-check"><input type="checkbox" ${isSelected?'checked':''} onchange="toggleEquipmentFileStorageSelection('${escapeHtml(entry.id)}')"><span>선택</span></label>`:''}<button type="button" class="equipment-carnet-mobile-link" onclick="${openAction}"><span class="equipment-carnet-mobile-title">${escapeHtml(entry.title)}</span><span class="equipment-carnet-mobile-meta">${escapeHtml([entry.fileName, meta].filter(Boolean).join(' · '))}</span></button><button type="button" class="section-title-action-btn export-action-btn equipment-file-storage-mobile-export" onclick="downloadEquipmentFileStorageEntry('${escapeHtml(entry.id)}')">내보내기</button></div>`;
}
function renderEquipmentFileStorageItems(entries=[]){
  if(!entries.length){
    return '<div class="carnet-list-placeholder">등록된 보관 파일이 없습니다. 작성 버튼으로 자료를 추가하세요.</div>';
  }
  return `<div class="equipment-carnet-desktop-grid equipment-file-storage-grid">${entries.map(renderEquipmentFileStorageCard).join('')}</div><div class="equipment-carnet-mobile-list equipment-file-storage-mobile-list">${entries.map(renderEquipmentFileStorageMobileRow).join('')}</div>`;
}
function renderEquipmentFileStoragePanelHtml(){
  const entries=getEquipmentFileStorageEntries();
  return `<tbody><tr><td class="carnet-list-cell"><section class="carnet-list-panel equipment-file-storage-panel" aria-label="파일보관"><header class="carnet-list-header"><h3 class="carnet-list-title">파일보관</h3></header>${renderEquipmentFileStorageComposer()}<div class="carnet-list-body">${renderEquipmentFileStorageItems(entries)}</div></section></td></tr></tbody>`;
}
async function buildEquipmentFileStoragePreviewData(file, fileType, originalData){
  const previewData={extension:getEquipmentFileStorageExtension(file?.name||''), src:originalData, text:''};
  if(fileType==='text'){
    previewData.text=String(await readFileAsText(file)||'').trim();
  }
  return previewData;
}
async function saveEquipmentFileStorageEntry(saveButton=null){
  loadEquipmentFileStorageEntries();
  const titleInput=document.getElementById('equipmentFileStorageTitleInput');
  const fileInput=document.getElementById('equipmentFileStorageInput');
  const title=String(titleInput?.value||'').trim();
  const file=fileInput?.files?.[0]||null;
  if(!title){
    window.alert('제목을 입력해주세요.');
    titleInput?.focus();
    return;
  }
  if(!file){
    window.alert('첨부할 파일을 선택해주세요.');
    fileInput?.focus();
    return;
  }
  if(saveButton) saveButton.disabled=true;
  try{
    const originalData=await readFileAsDataUrl(file);
    if(!originalData) throw new Error('file-read-failed');
    const fileType=getEquipmentFileStorageType(file.name, file.type);
    const previewData=await buildEquipmentFileStoragePreviewData(file, fileType, originalData);
    const nextEntry=normalizeEquipmentFileStorageEntry({
      id:createEquipmentFileStorageId(),
      title,
      fileName:file.name,
      fileType,
      mimeType:file.type||'',
      fileSize:file.size||0,
      createdAt:Date.now(),
      originalData,
      previewData
    });
    if(!nextEntry) throw new Error('entry-normalize-failed');
    equipmentFileStorageEntries=sortEquipmentFileStorageEntries([nextEntry, ...equipmentFileStorageEntries]);
    saveEquipmentFileStorageEntries();
    isEquipmentFileStorageComposerOpen=false;
    isEquipmentFileStorageDeleteMode=false;
    equipmentFileStorageSelectedIds.clear();
    renderEquipmentFileStorageDetail();
  }catch(error){
    console.warn('[equipment-file-storage] save failed', error);
    window.alert('파일 저장에 실패했습니다. 파일 형식과 용량을 확인해주세요.');
  }finally{
    if(saveButton) saveButton.disabled=false;
  }
}
function downloadEquipmentFileStorageEntry(entryId=''){
  loadEquipmentFileStorageEntries();
  const entry=equipmentFileStorageEntries.find(item=>String(item.id)===String(entryId));
  if(!entry||!entry.originalData) return;
  const link=document.createElement('a');
  link.href=entry.originalData;
  link.download=entry.fileName||`${entry.title||'file'}.${entry.previewData?.extension||'dat'}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
function ensureEquipmentFileStorageViewerModal(){
  let modal=document.getElementById('equipmentFileStorageViewerModal');
  if(modal) return modal;
  document.body.insertAdjacentHTML('beforeend', `<div id="equipmentFileStorageViewerModal" class="news-editor-modal equipment-carnet-viewer-modal equipment-file-storage-viewer-modal hidden" tabindex="-1"><div class="news-editor-modal-backdrop" onclick="closeEquipmentFileStorageViewerModal()"></div><div class="news-editor-modal-panel equipment-carnet-viewer-panel equipment-file-storage-viewer-panel" role="dialog" aria-modal="true" aria-labelledby="equipmentFileStorageViewerTitle"><div class="news-editor-modal-header"><div><h3 id="equipmentFileStorageViewerTitle">파일보관</h3><p id="equipmentFileStorageViewerMeta" class="news-editor-modal-meta"></p></div><button type="button" class="news-editor-modal-close" onclick="closeEquipmentFileStorageViewerModal()" aria-label="닫기">×</button></div><div id="equipmentFileStorageViewerBody" class="equipment-carnet-viewer-body equipment-file-storage-viewer-body"></div></div></div>`);
  modal=document.getElementById('equipmentFileStorageViewerModal');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape') closeEquipmentFileStorageViewerModal();
  });
  return modal;
}
function closeEquipmentFileStorageViewerModal(){
  const modal=document.getElementById('equipmentFileStorageViewerModal');
  if(modal) modal.classList.add('hidden');
}
function renderEquipmentFileStorageUnsupportedPreview(){
  return '<div class="equipment-file-storage-unsupported">미리보기를 지원하지 않는 파일입니다. 내보내기로 확인하세요.</div>';
}
function openEquipmentFileStorageViewer(entryId=''){
  loadEquipmentFileStorageEntries();
  const entry=equipmentFileStorageEntries.find(item=>String(item.id)===String(entryId));
  if(!entry) return;
  const modal=ensureEquipmentFileStorageViewerModal();
  const title=document.getElementById('equipmentFileStorageViewerTitle');
  const meta=document.getElementById('equipmentFileStorageViewerMeta');
  const body=document.getElementById('equipmentFileStorageViewerBody');
  title.textContent=entry.title;
  meta.textContent=[entry.fileName, formatEquipmentFileStorageDate(entry.createdAt), formatEquipmentFileStorageSize(entry.fileSize)].filter(Boolean).join(' · ');
  if(entry.fileType==='image'){
    body.innerHTML=`<div class="equipment-carnet-image-viewer"><img src="${escapeHtml(entry.originalData||entry.previewData?.src||'')}" alt="${escapeHtml(entry.title)}"></div>`;
  }else if(entry.fileType==='pdf'){
    body.innerHTML=`<div class="equipment-file-storage-pdf-viewer"><iframe src="${escapeHtml(entry.originalData)}" title="${escapeHtml(entry.title)} PDF 미리보기"></iframe></div>`;
  }else if(entry.fileType==='text'){
    const text=String(entry.previewData?.text||dataUrlToText(entry.originalData||'')).trim();
    body.innerHTML=text ? `<pre class="equipment-file-storage-text-viewer">${escapeHtml(text)}</pre>` : '<div class="equipment-carnet-viewer-empty">표시할 텍스트 내용이 없습니다.</div>';
  }else{
    body.innerHTML=renderEquipmentFileStorageUnsupportedPreview();
  }
  modal.classList.remove('hidden');
  modal.focus();
}
function renderEquipmentFileStorageDetail(){
  currentEquipmentMode='fileStorage';
  currentEquipmentUser='';
  loadEquipmentFileStorageEntries();
  const detailTable=document.getElementById('detailTable');
  document.getElementById('equipmentFileStorageTab')?.classList.add('active');
  document.getElementById('detailTitle').innerHTML=renderEquipmentFileStorageTitle();
  document.getElementById('detailSubtitle').textContent='';
  detailTable.className='data-table carnet-list-table equipment-file-storage-table';
  detailTable.parentElement.classList.remove('equipment-table-wrapper');
  renderCache.equipmentFileStoragePanel=renderEquipmentFileStoragePanelHtml();
  detailTable.innerHTML=renderCache.equipmentFileStoragePanel;
  document.getElementById('detailCol').classList.remove('hidden');
  if(isEquipmentFileStorageComposerOpen){
    window.setTimeout(()=>document.getElementById('equipmentFileStorageTitleInput')?.focus(), 0);
  }
}
function openEquipmentFileStorageComposer(){
  isEquipmentFileStorageDeleteMode=false;
  equipmentFileStorageSelectedIds.clear();
  isEquipmentFileStorageComposerOpen=true;
  if(currentEquipmentMode==='fileStorage'){
    renderEquipmentFileStorageDetail();
    updateMobileHeaderReportBoardVisibility();
  }
}
function closeEquipmentFileStorageComposer(){
  isEquipmentFileStorageComposerOpen=false;
  if(currentEquipmentMode==='fileStorage'){
    renderEquipmentFileStorageDetail();
    updateMobileHeaderReportBoardVisibility();
  }
}
function showEquipmentFileStorage(el){
  currentEquipmentMode='fileStorage';
  currentEquipmentUser='';
  isEquipmentCarnetComposerOpen=false;
  isEquipmentCarnetDeleteMode=false;
  equipmentCarnetSelectedIds.clear();
  clearDetailExtras();
  ensureEquipmentEditorEntries();
  renderEquipmentFileStorageDetail();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}
function renderSimpleInfoPanelHtml(title, description, placeholder){
  return `<tbody><tr><td class="simple-info-cell"><section class="simple-info-panel" aria-label="${escapeHtml(title)}"><header class="simple-info-header"><h3 class="simple-info-title">${escapeHtml(title)}</h3><p class="simple-info-description">${escapeHtml(description)}</p></header><div class="simple-info-body"><div class="simple-info-placeholder">${escapeHtml(placeholder)}</div></div></section></td></tr></tbody>`;
}
function renderSimpleActionRow(actionMap){
  return `<div class="simple-info-actions">${actionMap.map(action=>`<button type="button" class="section-title-action-btn${action.variant==='delete'?' delete':''}" onclick="${action.onclick}">${escapeHtml(action.label)}</button>`).join('')}</div>`;
}
function renderUploadField(fieldId, label){
  return `<div class="simple-upload-field"><label class="simple-upload-label" for="${escapeHtml(fieldId)}">${escapeHtml(label)}</label><div class="simple-upload-dropzone"><div class="simple-upload-placeholder">사진을 추가할 수 있는 영역입니다.</div><input id="${escapeHtml(fieldId)}" class="simple-upload-input" type="file" accept="image/*"></div></div>`;
}
function createMapLocationPinId(){
  return `map-location-pin-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}
function normalizeMapLocationPinSectionKey(sectionKey='region'){
  return sectionKey==='lodging'?'lodging':'region';
}
function createEmptyMapLocationPinEntryGroups(){
  return {region:[],lodging:[]};
}
function createEmptyMapLocationPinImageState(){
  return {region:[],lodging:[]};
}
function createEmptyMapLocationPinEditState(){
  return {region:'',lodging:''};
}
function createEmptyMapLocationPinComposerState(){
  return {region:false,lodging:false};
}
function getMapLocationPinSectionMeta(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  return normalized==='lodging'
    ? {
      title:'숙소 장소 기록',
      description:'',
      formDescription:'숙소와 연결된 장소를 핀 카드처럼 누적 관리합니다. 체크인 거점, 주변 편의시설, 필요 장소를 함께 기록할 수 있습니다.',
      formTitle:'숙소 핀',
      placeholderName:'예: 선수단 숙소 정문',
      placeholderLocation:'예: 호텔 로비 옆 / 체크인 데스크 맞은편',
      placeholderMemo:'체크인 동선, 보안 포인트, 주변 식당/편의시설 메모를 기록하세요.',
      emptyHint:'아직 저장된 숙소 핀이 없습니다. 숙소, 체크포인트, 주변 편의시설부터 등록해보세요.'
    }
    : {
      title:'현장 장소 기록',
      description:'',
      formDescription:'식당, 방송거점, 병원, 체크포인트를 지역정보 안에서 핀 카드처럼 누적 관리합니다.',
      formTitle:'장소 핀',
      placeholderName:'예: 숙소 앞 식당',
      placeholderLocation:'예: 호텔 로비 옆 / Av. Example 123',
      placeholderMemo:'현장 접근 동선, 운영 시간, 체크사항을 기록하세요.',
      emptyHint:'아직 저장된 현장 핀이 없습니다. 주요 식당, 병원, 방송거점부터 차근차근 기록해보세요.'
    };
}
function getMapLocationPinCategoryMeta(category=''){
  const normalized=String(category||'').trim();
  return MAP_LOCATION_PIN_CATEGORIES.find(item=>item.value===normalized)||MAP_LOCATION_PIN_CATEGORIES[MAP_LOCATION_PIN_CATEGORIES.length-1];
}
function normalizeMapLocationPinEntry(entry){
  const name=String(entry?.name||'').trim();
  const categoryMeta=getMapLocationPinCategoryMeta(entry?.category||'');
  const locationText=String(entry?.locationText||'').trim();
  const memo=String(entry?.memo||'').trim();
  const mapLink=String(entry?.mapLink||'').trim();
  const lat=String(entry?.lat||'').trim();
  const lng=String(entry?.lng||'').trim();
  const images=(Array.isArray(entry?.images)?entry.images:[entry?.image]).map(value=>String(value||'').trim()).filter(Boolean);
  if(!name&&!locationText&&!memo&&!mapLink&&!images.length) return null;
  const createdAt=Number(entry?.createdAt)||Date.now();
  return {
    id:String(entry?.id||createMapLocationPinId()),
    name:name||'현장 장소',
    category:categoryMeta.value,
    locationText,
    memo,
    mapLink,
    lat,
    lng,
    images,
    createdAt,
    updatedAt:Number(entry?.updatedAt)||createdAt
  };
}
function sortMapLocationPinEntries(entries){
  return [...entries].sort((a,b)=>{
    const createdCompare=Number(a.createdAt||0)-Number(b.createdAt||0);
    if(createdCompare!==0) return createdCompare;
    return String(a.id||'').localeCompare(String(b.id||''));
  });
}
function readMapLocationPinRaw(){
  return getSharedStateLocalRaw(MAP_LOCATION_PIN_STORAGE_KEY);
}
function writeMapLocationPinRaw(raw){
  setSharedStateLocalRaw(MAP_LOCATION_PIN_STORAGE_KEY, raw);
  scheduleSharedStateSyncWrite(MAP_LOCATION_PIN_STORAGE_KEY, raw);
}
function readNewsProgrammingRaw(){
  return getSharedStateLocalRaw(NEWS_PROGRAMMING_STORAGE_KEY);
}
function writeNewsProgrammingRaw(raw=''){
  setSharedStateLocalRaw(NEWS_PROGRAMMING_STORAGE_KEY, raw);
  scheduleSharedStateSyncWrite(NEWS_PROGRAMMING_STORAGE_KEY, raw);
}
function normalizeNewsProgrammingSpecialEntry(entry={}, index=0){
  const normalizedDate=String(entry?.date||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  const normalizedTitle=String(entry?.title||'특보 편성').trim()||'특보 편성';
  const normalizedMemo=String(entry?.memo||'').trim();
  return {
    id:String(entry?.id||`news-programming-special-restored-${Date.now()}-${index}`),
    date:normalizedDate,
    localDayOffset:Number(entry?.localDayOffset)||0,
    localTime:String(entry?.localTime||'--:--').trim()||'--:--',
    koreaTime:String(entry?.koreaTime||'--:--').trim()||'--:--',
    title:normalizedTitle,
    programKey:getNewsProgrammingProgramKey(normalizedTitle),
    status:String(entry?.status||'본방').trim()==='생방' ? '생방' : '본방',
    memo:normalizedMemo,
    isSpecialEntry:true,
    createdAt:Number(entry?.createdAt)||Date.now()+index
  };
}
function loadNewsProgrammingState(){
  if(hasLoadedNewsProgrammingState) return;
  hasLoadedNewsProgrammingState=true;
  newsProgrammingActiveLocalDate=getTodayLocalDateString();
  const raw=readNewsProgrammingRaw();
  if(!raw){
    currentNewsProgrammingFilters.date=getTodayLocalDateString();
    ensureNewsProgrammingLocalPersistenceLoaded();
    currentNewsProgrammingMemoDrafts={...currentNewsProgrammingSavedMemos};
    return;
  }
  try{
    const parsed=JSON.parse(raw);
    const nextSavedMemos={};
    const today=getTodayLocalDateString();
    if(parsed?.savedMemos&&typeof parsed.savedMemos==='object'){
      const savedMemosDate=String(parsed.savedMemos.__savedDate||'').trim();
      Object.entries(parsed.savedMemos).forEach(([key, value])=>{
        const normalizedKey=String(key||'').trim();
        if(!normalizedKey||normalizedKey.startsWith('__')) return;
        if(savedMemosDate!==today) return;
        const normalizedMemo=normalizeDatedTickerText(value, today);
        if(normalizedMemo.text&&normalizedMemo.date===today){
          nextSavedMemos[normalizedKey]=normalizedMemo.text;
        }
      });
    }
    currentNewsProgrammingSavedMemos=nextSavedMemos;
    currentNewsProgrammingMemoDrafts={...nextSavedMemos};
    newsProgrammingSpecialEntries=Array.isArray(parsed?.specialEntries)
      ? parsed.specialEntries.map((entry, index)=>normalizeNewsProgrammingSpecialEntry(entry, index)).filter(Boolean)
      : [];
    if(parsed?.filters&&typeof parsed.filters==='object'){
      currentNewsProgrammingFilters={
        date:today,
        liveOnly:Boolean(parsed.filters.liveOnly)
      };
    }else{
      currentNewsProgrammingFilters.date=today;
    }
    ensureNewsProgrammingLocalPersistenceLoaded();
    saveNewsProgrammingState();
  }catch(error){
    console.warn('[news-programming] load failed', error);
    currentNewsProgrammingSavedMemos={};
    currentNewsProgrammingMemoDrafts={};
    newsProgrammingSpecialEntries=[];
    ensureNewsProgrammingLocalPersistenceLoaded();
  }
}
function ensureNewsProgrammingDateIsToday(){
  const today=getTodayLocalDateString();
  if(newsProgrammingActiveLocalDate!==today){
    newsProgrammingActiveLocalDate=today;
    currentNewsProgrammingFilters.date=today;
    currentNewsProgrammingSpecialForm.timeKey='';
    isNewsProgrammingSpecialTimeMenuOpen=false;
  }else if(!String(currentNewsProgrammingFilters.date||'').trim()){
    currentNewsProgrammingFilters.date=today;
  }
}
function saveNewsProgrammingState(){
  loadNewsProgrammingState();
  const payload={
    savedMemos:createDatedMemoStoragePayload(currentNewsProgrammingSavedMemos),
    specialEntries:newsProgrammingSpecialEntries.map(item=>({
      id:item.id,
      date:item.date,
      localDayOffset:item.localDayOffset,
      localTime:item.localTime,
      koreaTime:item.koreaTime,
      title:item.title,
      status:item.status,
      memo:item.memo,
      createdAt:item.createdAt
    })),
    filters:{
      date:currentNewsProgrammingFilters.date||getTodayLocalDateString(),
      liveOnly:Boolean(currentNewsProgrammingFilters.liveOnly)
    }
  };
  writeNewsProgrammingRaw(JSON.stringify(payload));
}
function loadProgrammingMemos(){
  if(typeof window==='undefined'||!window.localStorage) return {};
  try{
    const raw=window.localStorage.getItem(PROGRAMMING_MEMOS_STORAGE_KEY);
    if(!raw) return {};
    const parsed=JSON.parse(raw);
    if(!parsed||typeof parsed!=='object') return {};
    const today=getTodayLocalDateString();
    if(parsed.__savedDate!==today){
      window.localStorage.setItem(PROGRAMMING_MEMOS_STORAGE_KEY, JSON.stringify({__savedDate:today}));
      return {};
    }
    const cleanedStoragePayload={};
    const loadedMemos=Object.entries(parsed).reduce((acc, [key, value])=>{
      const normalizedKey=String(key||'').trim();
      if(!normalizedKey||normalizedKey.startsWith('__')) return acc;
      const normalizedMemo=normalizeDatedTickerText(value, today);
      if(normalizedMemo.text&&normalizedMemo.date===today){
        acc[normalizedKey]=normalizedMemo.text;
        cleanedStoragePayload[normalizedKey]=normalizedMemo;
      }
      return acc;
    }, {});
    cleanedStoragePayload.__savedDate=today;
    window.localStorage.setItem(PROGRAMMING_MEMOS_STORAGE_KEY, JSON.stringify(cleanedStoragePayload));
    return loadedMemos;
  }catch(error){
    console.warn('[news-programming] programming memo load failed', error);
    return {};
  }
}
function saveProgrammingMemos(nextMemos=currentNewsProgrammingSavedMemos){
  if(typeof window==='undefined'||!window.localStorage) return;
  window.localStorage.setItem(PROGRAMMING_MEMOS_STORAGE_KEY, JSON.stringify(createDatedMemoStoragePayload(nextMemos)));
}
function ensureNewsProgrammingLocalPersistenceLoaded(){
  if(hasLoadedNewsProgrammingLocalPersistence) return;
  hasLoadedNewsProgrammingLocalPersistence=true;
  const savedMemos=loadProgrammingMemos();
  currentNewsProgrammingSavedMemos={...currentNewsProgrammingSavedMemos, ...savedMemos};
  currentNewsProgrammingMemoDrafts={...currentNewsProgrammingSavedMemos};
}
function loadMapLocationPinEntries(){
  if(hasLoadedMapLocationPinEntries) return;
  hasLoadedMapLocationPinEntries=true;
  mapLocationPinEntries=createEmptyMapLocationPinEntryGroups();
  const raw=readMapLocationPinRaw();
  if(!raw) return;
  try{
    const savedEntries=JSON.parse(raw);
    if(Array.isArray(savedEntries)){
      mapLocationPinEntries.region=sortMapLocationPinEntries(savedEntries.map(normalizeMapLocationPinEntry).filter(Boolean));
    }else{
      ['region','lodging'].forEach(sectionKey=>{
        mapLocationPinEntries[sectionKey]=sortMapLocationPinEntries((Array.isArray(savedEntries?.[sectionKey])?savedEntries[sectionKey]:[]).map(normalizeMapLocationPinEntry).filter(Boolean));
      });
    }
    saveMapLocationPinEntries();
  }catch(error){
    console.warn('Failed to load map location pin entries.', error);
  }
}
function saveMapLocationPinEntries(){
  writeMapLocationPinRaw(JSON.stringify({
    region:sortMapLocationPinEntries(Array.isArray(mapLocationPinEntries.region)?mapLocationPinEntries.region:[]),
    lodging:sortMapLocationPinEntries(Array.isArray(mapLocationPinEntries.lodging)?mapLocationPinEntries.lodging:[])
  }));
}
function getMapLocationPinEntries(sectionKey='region'){
  loadMapLocationPinEntries();
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  if(!Array.isArray(mapLocationPinEntries[normalized])) mapLocationPinEntries[normalized]=[];
  return mapLocationPinEntries[normalized];
}
function getMapLocationPinEntryById(sectionKey='region', entryId=''){
  return getMapLocationPinEntries(sectionKey).find(entry=>String(entry.id)===String(entryId))||null;
}
function formatMapLocationPinSavedAt(timestamp){
  const value=Number(timestamp||0);
  if(!Number.isFinite(value)||value<=0) return '';
  try{
    return new Date(value).toLocaleString('ko-KR', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'});
  }catch(error){
    return '';
  }
}
function renderMapLocationPinImagePreviewHtml(images=[], sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  if(!Array.isArray(images)||!images.length){
    return '<div class="map-location-pin-upload-empty">등록된 사진이 없습니다.</div>';
  }
  return `<div class="map-location-pin-upload-preview-grid">${images.map((src,index)=>`<figure class="map-location-pin-upload-item"><img class="map-location-pin-upload-image" src="${escapeHtml(src)}" alt="장소 핀 첨부 이미지 ${index+1}"><button type="button" class="map-location-pin-upload-remove" onclick="removeMapLocationPinImage(${index}, '${normalized}')" aria-label="장소 핀 첨부 이미지 삭제">삭제</button></figure>`).join('')}</div>`;
}
function renderMapLocationPinComposer(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  if(!isMapLocationPinComposerOpen[normalized]) return '';
  const sectionMeta=getMapLocationPinSectionMeta(normalized);
  const editingEntry=getMapLocationPinEntryById(normalized, currentMapLocationPinEditId[normalized]);
  const composerMode=editingEntry?'수정':'작성';
  const selectedCategory=MAP_LOCATION_PIN_CATEGORIES.some(item=>item.value===editingEntry?.category) ? editingEntry.category : '';
  const categoryOptions=`<option value="" disabled hidden${selectedCategory?'':' selected'}>분류 선택</option>${MAP_LOCATION_PIN_CATEGORIES.map(item=>`<option value="${escapeHtml(item.value)}"${selectedCategory===item.value?' selected':''}>${escapeHtml(item.label)}</option>`).join('')}`;
  return `<section class="simple-form-card map-location-pin-form-card"><div class="map-location-pin-form-header"><div class="simple-form-title">${escapeHtml(sectionMeta.formTitle)} ${composerMode}</div><p class="map-location-pin-form-description">${escapeHtml(sectionMeta.formDescription)}</p></div><div class="simple-form-grid map-location-pin-form-grid"><label class="simple-form-field"><span class="simple-form-label">장소명</span><input type="text" class="simple-form-input" id="mapLocationPinName-${normalized}" value="${escapeHtml(editingEntry?.name||'')}" placeholder="${escapeHtml(sectionMeta.placeholderName)}"></label><label class="simple-form-field"><span class="simple-form-label">분류</span><select class="simple-form-input map-location-pin-select" id="mapLocationPinCategory-${normalized}">${categoryOptions}</select></label><label class="simple-form-field map-location-pin-form-field-full"><span class="simple-form-label">주소 또는 위치 설명</span><input type="text" class="simple-form-input" id="mapLocationPinLocationText-${normalized}" value="${escapeHtml(editingEntry?.locationText||'')}" placeholder="${escapeHtml(sectionMeta.placeholderLocation)}"></label><label class="simple-form-field map-location-pin-form-field-full"><span class="simple-form-label">메모</span><textarea class="simple-form-input simple-form-textarea" id="mapLocationPinMemo-${normalized}" placeholder="${escapeHtml(sectionMeta.placeholderMemo)}">${escapeHtml(editingEntry?.memo||'')}</textarea></label><label class="simple-form-field map-location-pin-form-field-full"><span class="simple-form-label">지도 링크 (선택)</span><input type="text" class="simple-form-input" id="mapLocationPinMapLink-${normalized}" value="${escapeHtml(editingEntry?.mapLink||'')}" placeholder="추후 Google Maps / Naver Map / Kakao Map 링크 연결"></label><div class="simple-form-field map-location-pin-form-field-full"><span class="simple-form-label">현장 사진</span><div class="simple-upload-dropzone map-location-pin-upload-dropzone"><div class="simple-upload-placeholder">사진을 추가하면 핀 카드와 함께 미리보기로 표시됩니다.</div><input id="mapLocationPinImages-${normalized}" class="simple-upload-input" type="file" accept="image/*" multiple onchange="handleMapLocationPinImageChange(this, '${normalized}')"></div><div id="mapLocationPinImagePreview-${normalized}" class="map-location-pin-upload-preview">${renderMapLocationPinImagePreviewHtml(mapLocationPinComposerImages[normalized], normalized)}</div></div><div class="map-location-pin-form-field-full map-location-pin-future"><div class="map-location-pin-future-title">지도 확장 준비</div><div class="map-location-pin-future-note">좌표(lat/lng)와 실제 지도 링크 버튼을 나중에 바로 붙일 수 있도록 구조를 분리해 두었습니다.</div><input type="hidden" id="mapLocationPinLatitude-${normalized}" value="${escapeHtml(editingEntry?.lat||'')}"><input type="hidden" id="mapLocationPinLongitude-${normalized}" value="${escapeHtml(editingEntry?.lng||'')}"></div></div><div class="simple-info-actions map-location-pin-form-actions"><button type="button" class="section-title-action-btn" onclick="saveMapLocationPinEntry('${normalized}')">저장</button><button type="button" class="section-title-action-btn" onclick="cancelMapLocationPinComposer('${normalized}')">취소</button></div></section>`;
}
function renderMapLocationPinPreview(entries=[], sectionKey='region'){
  const sectionMeta=getMapLocationPinSectionMeta(sectionKey);
  const countsHtml=MAP_LOCATION_PIN_CATEGORIES.map(item=>{
    const count=entries.filter(entry=>entry.category===item.value).length;
    return count?`<span class="map-location-pin-stat is-${escapeHtml(item.tone)}">${escapeHtml(item.label)} ${count}</span>`:'';
  }).join('');
  const previewCards=entries.slice(-4).reverse();
  return `<section class="map-location-pin-preview"><div class="map-location-pin-preview-header"><div><h5 class="map-location-pin-preview-title">간이 지도 보드</h5><p class="map-location-pin-preview-meta">저장된 핀 ${entries.length}개${entries.length?' · 최신 현장 포인트 순으로 표시':''}</p></div>${countsHtml?`<div class="map-location-pin-preview-stats">${countsHtml}</div>`:''}</div>${previewCards.length?`<div class="map-location-pin-preview-grid">${previewCards.map((entry,index)=>{const categoryMeta=getMapLocationPinCategoryMeta(entry.category); return `<article class="map-location-pin-preview-card is-${escapeHtml(categoryMeta.tone)}"><div class="map-location-pin-preview-badge">${entries.length-index}</div><div class="map-location-pin-preview-body"><div class="map-location-pin-preview-category">${escapeHtml(categoryMeta.label)}</div><div class="map-location-pin-preview-name">${escapeHtml(entry.name||'현장 장소')}</div><div class="map-location-pin-preview-location">${escapeHtml(entry.locationText||'위치 설명 준비 중')}</div></div></article>`;}).join('')}</div>`:`<div class="map-location-pin-preview-empty">${escapeHtml(sectionMeta.emptyHint)}</div>`}</section>`;
}
function renderMapLocationPinList(entries=[], sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  if(!entries.length){
    return `<section class="map-location-pin-list-shell"><header class="map-location-pin-list-header"><div><h5 class="map-location-pin-list-title">저장된 핀 목록</h5><p class="map-location-pin-list-meta"></p></div></header><div class="map-location-pin-list-empty">저장된 핀이 없습니다. 먼저 핀 추가를 눌러 장소를 등록하세요.</div></section>`;
  }
  return `<section class="map-location-pin-list-shell"><header class="map-location-pin-list-header"><div><h5 class="map-location-pin-list-title">저장된 핀 목록</h5><p class="map-location-pin-list-meta">${entries.length}개 장소가 핀 카드로 정리되어 있습니다.</p></div></header><div class="map-location-pin-list">${entries.map((entry,index)=>{const categoryMeta=getMapLocationPinCategoryMeta(entry.category); const savedAt=formatMapLocationPinSavedAt(entry.updatedAt||entry.createdAt); return `<article class="map-location-pin-card is-${escapeHtml(categoryMeta.tone)}"><div class="map-location-pin-card-badge-wrap"><span class="map-location-pin-card-badge">${index+1}</span></div><div class="map-location-pin-card-body"><header class="map-location-pin-card-header"><div><div class="map-location-pin-card-category is-${escapeHtml(categoryMeta.tone)}">${escapeHtml(categoryMeta.label)}</div><h6 class="map-location-pin-card-title">${escapeHtml(entry.name||'현장 장소')}</h6></div>${savedAt?`<div class="map-location-pin-card-time">${escapeHtml(savedAt)}</div>`:''}</header><div class="map-location-pin-card-location">${escapeHtml(entry.locationText||'위치 설명 없음')}</div>${entry.memo?`<p class="map-location-pin-card-memo">${escapeHtml(entry.memo)}</p>`:''}<div class="map-location-pin-card-meta">${entry.mapLink?`<a class="map-location-pin-card-link" href="${escapeHtml(entry.mapLink)}" target="_blank" rel="noreferrer">지도 링크 열기</a>`:'<span class="map-location-pin-card-link-placeholder">지도 링크 연결 자리</span>'}<span class="map-location-pin-card-coordinates">${entry.lat||entry.lng?escapeHtml(`lat ${entry.lat||'-'} / lng ${entry.lng||'-'}`):'좌표 필드 확장 예정'}</span></div>${Array.isArray(entry.images)&&entry.images.length?`<div class="map-location-pin-card-media">${entry.images.map((src,mediaIndex)=>`<img class="map-location-pin-card-photo" src="${escapeHtml(src)}" alt="${escapeHtml(entry.name||'현장 장소')} 사진 ${mediaIndex+1}">`).join('')}</div>`:''}<div class="simple-info-actions map-location-pin-card-actions"><button type="button" class="section-title-action-btn" onclick="openMapLocationPinComposer('${normalized}', '${escapeHtml(entry.id)}')">수정</button><button type="button" class="section-title-action-btn delete" onclick="deleteMapLocationPin('${normalized}', '${escapeHtml(entry.id)}')">삭제</button></div></div></article>`;}).join('')}</div></section>`;
}
function renderMapLocationPinSection(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  const sectionMeta=getMapLocationPinSectionMeta(normalized);
  const entries=sortMapLocationPinEntries(getMapLocationPinEntries(normalized));
  const actions=renderSimpleActionRow([
    {label:'핀 추가', onclick:`openMapLocationPinComposer('${normalized}')`},
    {label:'초기화', onclick:`clearAllMapLocationPins('${normalized}')`, variant:'delete'}
  ]);
  return `<section class="map-location-pin-shell" aria-label="${escapeHtml(sectionMeta.title)}"><header class="map-location-pin-header"><div><h4 class="map-location-pin-title">${escapeHtml(sectionMeta.title)}</h4><p class="map-location-pin-description">${escapeHtml(sectionMeta.description)}</p></div>${actions}</header>${renderMapLocationPinComposer(normalized)}${renderMapLocationPinPreview(entries, normalized)}${renderMapLocationPinList(entries, normalized)}</section>`;
}
async function handleMapLocationPinImageChange(input, sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  const files=Array.from(input?.files||[]);
  if(!files.length) return;
  const nextImages=(await Promise.all(files.map(file=>new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(String(reader.result||''));
    reader.onerror=()=>resolve('');
    reader.readAsDataURL(file);
  })))).filter(Boolean);
  mapLocationPinComposerImages[normalized].push(...nextImages);
  renderMapLocationPinImagePreview(normalized);
  if(input) input.value='';
}
function renderMapLocationPinImagePreview(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  const preview=document.getElementById(`mapLocationPinImagePreview-${normalized}`);
  if(!preview) return;
  preview.innerHTML=renderMapLocationPinImagePreviewHtml(mapLocationPinComposerImages[normalized], normalized);
}
function removeMapLocationPinImage(index, sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  mapLocationPinComposerImages[normalized]=mapLocationPinComposerImages[normalized].filter((_, imageIndex)=>imageIndex!==Number(index));
  renderMapLocationPinImagePreview(normalized);
}
function openMapLocationPinComposer(sectionKey='region', pinId=''){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  currentMapSubTab=normalized;
  currentMapLocationPinEditId[normalized]=String(pinId||'').trim();
  const editingEntry=getMapLocationPinEntryById(normalized, currentMapLocationPinEditId[normalized]);
  if(!editingEntry) currentMapLocationPinEditId[normalized]='';
  mapLocationPinComposerImages[normalized]=Array.isArray(editingEntry?.images)?[...editingEntry.images]:[];
  isMapLocationPinComposerOpen[normalized]=true;
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function cancelMapLocationPinComposer(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  currentMapLocationPinEditId[normalized]='';
  isMapLocationPinComposerOpen[normalized]=false;
  mapLocationPinComposerImages[normalized]=[];
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function saveMapLocationPinEntry(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  const nameInput=document.getElementById(`mapLocationPinName-${normalized}`);
  const categorySelect=document.getElementById(`mapLocationPinCategory-${normalized}`);
  const locationInput=document.getElementById(`mapLocationPinLocationText-${normalized}`);
  const memoInput=document.getElementById(`mapLocationPinMemo-${normalized}`);
  const mapLinkInput=document.getElementById(`mapLocationPinMapLink-${normalized}`);
  const latInput=document.getElementById(`mapLocationPinLatitude-${normalized}`);
  const lngInput=document.getElementById(`mapLocationPinLongitude-${normalized}`);
  const name=String(nameInput?.value||'').trim();
  const locationText=String(locationInput?.value||'').trim();
  if(!name){
    nameInput?.focus();
    return;
  }
  if(!locationText){
    locationInput?.focus();
    return;
  }
  const rawCategory=String(categorySelect?.value||'').trim();
  if(!rawCategory){
    window.alert('분류를 선택해주세요');
    categorySelect?.focus();
    return;
  }
  const category=getMapLocationPinCategoryMeta(rawCategory).value;
  const memo=String(memoInput?.value||'').trim();
  const mapLink=String(mapLinkInput?.value||'').trim();
  const lat=String(latInput?.value||'').trim();
  const lng=String(lngInput?.value||'').trim();
  const editingEntry=getMapLocationPinEntryById(normalized, currentMapLocationPinEditId[normalized]);
  const nextEntry=normalizeMapLocationPinEntry({
    id:editingEntry?.id||createMapLocationPinId(),
    name,
    category,
    locationText,
    memo,
    mapLink,
    lat,
    lng,
    images:[...mapLocationPinComposerImages[normalized]],
    createdAt:editingEntry?.createdAt||Date.now(),
    updatedAt:Date.now()
  });
  if(!nextEntry) return;
  if(editingEntry){
    mapLocationPinEntries[normalized]=sortMapLocationPinEntries(getMapLocationPinEntries(normalized).map(entry=>String(entry.id)===String(editingEntry.id)?nextEntry:entry));
  }else{
    mapLocationPinEntries[normalized]=sortMapLocationPinEntries([...getMapLocationPinEntries(normalized), nextEntry]);
  }
  saveMapLocationPinEntries();
  currentMapLocationPinEditId[normalized]='';
  isMapLocationPinComposerOpen[normalized]=false;
  mapLocationPinComposerImages[normalized]=[];
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function deleteMapLocationPin(sectionKey='region', pinId=''){
  const normalizedSection=normalizeMapLocationPinSectionKey(sectionKey);
  const normalized=String(pinId||'').trim();
  mapLocationPinEntries[normalizedSection]=getMapLocationPinEntries(normalizedSection).filter(entry=>String(entry.id)!==normalized);
  saveMapLocationPinEntries();
  if(currentMapLocationPinEditId[normalizedSection]===normalized){
    currentMapLocationPinEditId[normalizedSection]='';
    isMapLocationPinComposerOpen[normalizedSection]=false;
    mapLocationPinComposerImages[normalizedSection]=[];
  }
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function clearAllMapLocationPins(sectionKey='region'){
  const normalized=normalizeMapLocationPinSectionKey(sectionKey);
  mapLocationPinEntries[normalized]=[];
  saveMapLocationPinEntries();
  currentMapLocationPinEditId[normalized]='';
  isMapLocationPinComposerOpen[normalized]=false;
  mapLocationPinComposerImages[normalized]=[];
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function getPlaceCategoryMeta(category=''){
  const normalized=String(category||'').trim();
  return PLACE_CATEGORY_META_BY_VALUE.get(normalized)||PLACE_CATEGORIES[PLACE_CATEGORIES.length-1];
}
function isSelectPlaceholderValue(value=''){
  const normalized=String(value||'').trim();
  return !normalized||SELECT_PLACEHOLDER_VALUES.includes(normalized);
}
function getValidPlaceCategoryValue(value=''){
  const normalized=String(value||'').trim();
  if(isSelectPlaceholderValue(normalized)) return '';
  return PLACE_CATEGORY_META_BY_VALUE.has(normalized) ? normalized : '';
}
function getValidPlaceUsageTypeValue(value=''){
  const normalized=String(value||'').trim();
  if(isSelectPlaceholderValue(normalized)) return '';
  return PLACE_USAGE_TYPES.includes(normalized) ? normalized : '';
}
function renderPlaceCategoryOptions(selectedValue='', placeholder='카테고리 선택'){
  const normalizedSelected=getValidPlaceCategoryValue(selectedValue);
  return `<option value="" disabled hidden${normalizedSelected?'':' selected'}>${escapeHtml(placeholder)}</option>${PLACE_CATEGORIES.map(item=>`<option value="${escapeHtml(item.value)}"${item.value===normalizedSelected?' selected':''}>${escapeHtml(item.label)}</option>`).join('')}`;
}
function renderPlaceUsageTypeOptions(selectedValue='', placeholder='용도 선택'){
  const normalizedSelected=getValidPlaceUsageTypeValue(selectedValue);
  return `<option value="" disabled hidden${normalizedSelected?'':' selected'}>${escapeHtml(placeholder)}</option>${PLACE_USAGE_TYPES.map(type=>`<option value="${escapeHtml(type)}"${type===normalizedSelected?' selected':''}>${escapeHtml(type)}</option>`).join('')}`;
}
function createPlaceId(){
  return `place-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}
function hasPlaceCoordinates(place={}){
  return Number.isFinite(Number(place.lat))&&Number.isFinite(Number(place.lng));
}
function buildGoogleMapsPlaceUrl(place={}){
  if(hasPlaceCoordinates(place)){
    const query=`${Number(place.lat)},${Number(place.lng)}`;
    const placeId=String(place.placeId||'').trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}${placeId?`&query_place_id=${encodeURIComponent(placeId)}`:''}`;
  }
  const query=[place.name, place.address].map(value=>String(value||'').trim()).filter(Boolean).join(' ');
  return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : '';
}
function buildMapUrl(place={}){
  return buildGoogleMapsPlaceUrl(place);
}
function extractCoordinatesFromText(value=''){
  const text=String(value||'');
  const atMatch=text.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if(atMatch) return {lat:Number(atMatch[1]), lng:Number(atMatch[2])};
  const googleDataMatch=text.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  if(googleDataMatch) return {lat:Number(googleDataMatch[1]), lng:Number(googleDataMatch[2])};
  const queryMatch=text.match(/[?&]query=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if(queryMatch) return {lat:Number(queryMatch[1]), lng:Number(queryMatch[2])};
  return null;
}
function normalizePlaceKeyword(query=''){
  return String(query||'').replace(/\s+/g,' ').trim();
}
function normalizePlaceQuery(query=''){
  return normalizePlaceKeyword(query);
}
function normalizeSearchComparable(value=''){
  return String(value||'')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^\wㄱ-ㅎㅏ-ㅣ가-힣]+/g,'')
    .toLowerCase();
}
function detectPlaceSourceType(source={}){
  const types=Array.isArray(source.types) ? source.types.map(type=>String(type||'').toLowerCase()) : [];
  const text=[source.name, source.displayName, source.address, source.formatted_address].map(value=>String(value||'').toLowerCase()).join(' ');
  if(types.includes('airport')||text.includes('airport')||text.includes('공항')) return 'airport';
  if(types.includes('stadium')||text.includes('stadium')||text.includes('estadio')||text.includes('스타디움')) return 'stadium';
  if(types.includes('lodging')||text.includes('hotel')||text.includes('hilton')||text.includes('호텔')) return 'hotel';
  if(types.includes('route')||types.includes('street_address')||/\b(avenida|avenue|road|street|paseo|calle|boulevard)\b/.test(text)||/[로길]$/.test(text)||text.includes('거리')) return 'route';
  if(types.includes('shopping_mall')||text.includes('mall')||text.includes('shopping')||text.includes('쇼핑')) return 'shopping_mall';
  if(types.includes('transit_station')||text.includes('station')||text.includes('terminal')||text.includes('역')||text.includes('터미널')) return 'transit_station';
  if(types.includes('restaurant')||text.includes('restaurant')||text.includes('식당')) return 'restaurant';
  if(types.includes('cafe')||text.includes('cafe')||text.includes('카페')) return 'cafe';
  if(types.includes('premise')||types.includes('subpremise')||text.includes('building')||text.includes('빌딩')||text.includes('건물')) return 'building';
  if(types.includes('neighborhood')||types.includes('sublocality')||types.includes('locality')||types.includes('political')) return 'district';
  if(types.includes('park')||types.includes('natural_feature')) return types.includes('park') ? 'park' : 'natural_feature';
  if(types.includes('point_of_interest')||types.includes('establishment')||text.includes('plaza')||text.includes('square')||text.includes('광장')) return 'landmark';
  return 'general';
}
function formatPlaceSourceTypeLabel(type='general'){
  const labels={
    restaurant:'restaurant',
    cafe:'cafe',
    route:'route',
    landmark:'landmark',
    hotel:'hotel',
    airport:'airport',
    building:'building',
    district:'district',
    stadium:'stadium',
    shopping_mall:'shopping_mall',
    transit_station:'transit_station',
    park:'park',
    natural_feature:'natural_feature',
    general:'general'
  };
  return labels[type]||'general';
}
function normalizePlaceSearchResult(result={}, fallbackQuery=''){
  const lat=Number(result.lat);
  const lng=Number(result.lng);
  if(!Number.isFinite(lat)||!Number.isFinite(lng)) return null;
  const sourceType=String(result.sourceType||detectPlaceSourceType(result)||'general').trim()||'general';
  const name=String(result.name||result.displayName||fallbackQuery||'').trim();
  const place={
    id:String(result.id||result.placeId||result.place_id||`${name}-${lat.toFixed(6)}-${lng.toFixed(6)}`).trim(),
    name,
    displayName:String(result.displayName||name).trim(),
    address:String(result.address||result.formatted_address||'').trim(),
    lat,
    lng,
    placeId:String(result.placeId||result.place_id||'').trim(),
    source:String(result.source||'poi').trim()||'poi',
    sourceType,
    types:Array.isArray(result.types)?result.types:[]
  };
  place.mapUrl=String(result.mapUrl||'').trim()||buildGoogleMapsPlaceUrl(place);
  return place.name ? place : null;
}
function dedupePlaceCandidates(candidates=[]){
  const seen=new Set();
  return candidates.filter(candidate=>{
    if(!isValidPlaceResult(candidate)) return false;
    const key=[
      String(candidate.name||'').trim().toLowerCase(),
      Number(candidate.lat).toFixed(6),
      Number(candidate.lng).toFixed(6)
    ].join('|');
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function rankPlaceCandidates(candidates=[], originalQuery='', context=getMapSearchContext()){
  const normalizedQuery=normalizeSearchComparable(originalQuery);
  const contextText=normalizeSearchComparable((Array.isArray(context)?context:[]).join(' '));
  const preferredTypes=new Set(['route','landmark','hotel','airport','building','district','stadium','shopping_mall','transit_station','restaurant','cafe','general']);
  return dedupePlaceCandidates(candidates).map(candidate=>{
    const nameText=normalizeSearchComparable(candidate.name||candidate.displayName);
    const addressText=normalizeSearchComparable(candidate.address);
    const sourceType=String(candidate.sourceType||detectPlaceSourceType(candidate)||'general');
    let score=0;
    if(nameText===normalizedQuery) score+=80;
    if(nameText.includes(normalizedQuery)||normalizedQuery.includes(nameText)) score+=45;
    if(addressText.includes(normalizedQuery)) score+=25;
    if(contextText&&addressText&&contextText.split(/\s+/).some(part=>part&&addressText.includes(part))) score+=12;
    if(preferredTypes.has(sourceType)) score+=10;
    if(['route','landmark','airport','hotel','stadium','shopping_mall','building','district'].includes(sourceType)) score+=18;
    if(isValidPlaceResult(candidate)) score+=20;
    return {...candidate, sourceType, score};
  }).sort((a,b)=>b.score-a.score);
}
function getGoogleMapsApiKey(){
  if(typeof window==='undefined') return '';
  const storedKey=window.localStorage ? window.localStorage.getItem('googleMapsApiKey') : '';
  return String(window.APP_CONFIG?.googleMapsApiKey||window.GOOGLE_MAPS_API_KEY||storedKey||'').trim();
}
function isGoogleMapsApiReady(){
  return typeof google!=='undefined'&&Boolean(google.maps);
}
function isGooglePlacesApiReady(){
  return isGoogleMapsApiReady()&&Boolean(google.maps.places?.PlacesService);
}
function debugMapSearch(...args){
  if(typeof window!=='undefined'&&window.MAP_SEARCH_DEBUG) console.log('[MAP]', ...args);
}
async function ensureGoogleMapsApiLoaded(){
  if(typeof window==='undefined'||typeof document==='undefined') return Promise.resolve(false);
  if(isGoogleMapsApiReady()){
    if(isGooglePlacesApiReady()) return true;
    if(typeof google.maps.importLibrary==='function'){
      try{
        await google.maps.importLibrary('places');
        return isGoogleMapsApiReady();
      }catch(error){
        debugMapSearch('places import failed', error);
      }
    }
    return true;
  }
  const apiKey=getGoogleMapsApiKey();
  if(!apiKey) return Promise.resolve(false);
  if(googleMapsLoaderPromise) return googleMapsLoaderPromise;
  googleMapsLoaderPromise=new Promise(resolve=>{
    googleMapsReadyResolver=resolve;
    window.initMap=initMap;
    const existing=document.querySelector('script[data-worldcup-google-maps="true"]');
    if(existing){
      existing.addEventListener('load', ()=>{
        googleMapsReadyResolver=null;
        resolve(isGoogleMapsApiReady());
      }, {once:true});
      existing.addEventListener('error', ()=>{
        googleMapsReadyResolver=null;
        resolve(false);
      }, {once:true});
      return;
    }
    const script=document.createElement('script');
    script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&language=ko&callback=initMap`;
    script.async=true;
    script.defer=true;
    script.dataset.worldcupGoogleMaps='true';
    script.onerror=()=>{
      googleMapsReadyResolver=null;
      resolve(false);
    };
    document.head.appendChild(script);
  });
  return googleMapsLoaderPromise;
}
function getMapSearchContext(){
  const values=[
    document.getElementById('headerLocalTimePlace')?.textContent,
    'Guadalajara',
    'Monterrey',
    'Mexico City',
    'CDMX',
    'Ciudad de Mexico',
    'Ciudad de México',
    'Jalisco',
    'Nuevo Leon',
    'Nuevo León',
    'Mexico',
    '과달라하라',
    '몬테레이',
    '멕시코시티',
    '멕시코'
  ];
  return [...new Set(values.map(value=>String(value||'').trim()).filter(Boolean))];
}
function buildPlaceSearchQueries(query='', context=getMapSearchContext()){
  const normalized=normalizePlaceQuery(query);
  if(!normalized) return [];
  const transliterationMap={
    '파세오 데 라 레포르마':['Paseo de la Reforma','Paseo de la Reforma Mexico City','Paseo de la Reforma CDMX','Paseo de la Reforma Ciudad de Mexico'],
    '소칼로':['Zocalo','Zocalo CDMX','Plaza de la Constitucion Mexico City'],
    '아크론스타디움':['Estadio Akron','Akron Stadium Zapopan'],
    '멕시코시티 국제공항':['Mexico City International Airport','AICM Mexico City','Aeropuerto Internacional Benito Juarez'],
    '레포르마 222':['Reforma 222 Mexico City'],
    '힐튼 레포르마':['Hilton Mexico City Reforma']
  };
  const mappedQueries=Object.entries(transliterationMap)
    .filter(([key])=>normalized.includes(key))
    .flatMap(([,values])=>values);
  const suffixes=[
    '',
    ' 한국',
    ' 대한민국',
    ' 서울',
    ' 경기',
    ' 경기도',
    ' 인천',
    ' 부산',
    ' 대구',
    ' 대전',
    ' 광주',
    ' 식당',
    ' 맛집',
    ' restaurant',
    ' place',
    ' Guadalajara Mexico',
    ' Monterrey Mexico',
    ' Mexico',
    ' United States',
    ' Canada'
  ];
  const streetSuffixes=[' 거리',' 도로',' 길',' 번길',' 광장',' 골목',' 먹자골목',' 로데오거리',' street',' road',' avenue',' boulevard',' plaza',' square',' landmark',' hotel',' airport',' stadium',' mall',' building'];
  const contextSuffixes=(Array.isArray(context)?context:[])
    .map(value=>String(value||'').trim())
    .filter(Boolean)
    .flatMap(value=>[` ${value}`, ` ${value} place`, ` ${value} road`, ` ${value} landmark`]);
  const suffixPool=[...suffixes, ...streetSuffixes, ...contextSuffixes];
  return [...new Set([normalized, ...mappedQueries, ...suffixPool.map(suffix=>`${normalized}${suffix}`.trim())])];
}
function getSearchableTextLength(query=''){
  return Array.from(String(query||'').replace(/\s+/g,'').trim()).length;
}
function getPlaceSearchCacheKey(query='', context=getMapSearchContext()){
  const normalized=normalizePlaceKeyword(query).toLowerCase();
  const contextKey=(Array.isArray(context)?context:[]).map(value=>String(value||'').trim().toLowerCase()).filter(Boolean).join('|');
  return `${normalized}::${contextKey}`;
}
function selectFastPlaceSearchQueries(queries=[]){
  const selected=[];
  queries.forEach(query=>{
    const normalized=String(query||'').trim();
    if(!normalized||selected.includes(normalized)) return;
    selected.push(normalized);
  });
  return selected.slice(0, PLACE_SEARCH_MAX_QUERY_BATCH);
}
function mergePlaceCandidates(candidates=[]){
  const merged=[];
  const seen=new Set();
  candidates.forEach(candidate=>{
    if(!isValidPlaceResult(candidate)) return;
    const name=normalizeSearchComparable(candidate.name||candidate.displayName);
    const lat=Number(candidate.lat).toFixed(5);
    const lng=Number(candidate.lng).toFixed(5);
    const key=[name, lat, lng].join('|');
    if(seen.has(key)) return;
    seen.add(key);
    merged.push(candidate);
  });
  return merged;
}
function createTimeoutSignal(signal=null, timeoutMs=PLACE_SEARCH_TIMEOUT_MS){
  const controller=new AbortController();
  const timerId=window.setTimeout(()=>controller.abort(), timeoutMs);
  const abort=()=>{
    window.clearTimeout(timerId);
    if(!controller.signal.aborted) controller.abort();
  };
  if(signal){
    if(signal.aborted){
      abort();
    }else{
      signal.addEventListener('abort', abort, {once:true});
    }
  }
  return {signal:controller.signal, cleanup:()=>window.clearTimeout(timerId)};
}
async function fetchJsonWithTimeout(url, options={}){
  const {signal, timeoutMs=PLACE_SEARCH_TIMEOUT_MS, ...fetchOptions}=options||{};
  const timeout=createTimeoutSignal(signal, timeoutMs);
  try{
    const response=await fetch(url, {...fetchOptions, signal:timeout.signal});
    if(!response.ok) return {ok:false, status:response.status, data:null};
    return {ok:true, status:response.status, data:await response.json()};
  }finally{
    timeout.cleanup();
  }
}
function searchPlaceCandidatesWithGooglePlaces(query, rawQuery=query){
  return new Promise(resolve=>{
    if(!isGooglePlacesApiReady()){
      resolve([]);
      return;
    }
    const service=new google.maps.places.PlacesService(document.createElement('div'));
    service.textSearch({query, region:'kr'}, (results, status)=>{
      debugMapSearch('Places candidates status', status, query, results);
      if(status!==google.maps.places.PlacesServiceStatus.OK||!Array.isArray(results)||!results.length){
        resolve([]);
        return;
      }
      resolve(results.slice(0,5).map(item=>{
        const location=item.geometry?.location;
        const lat=typeof location?.lat==='function' ? location.lat() : Number(location?.lat);
        const lng=typeof location?.lng==='function' ? location.lng() : Number(location?.lng);
        return normalizePlaceSearchResult({
          name:item.name||rawQuery,
          displayName:item.name||rawQuery,
          address:item.formatted_address||item.vicinity||'',
          lat,
          lng,
          placeId:item.place_id,
          source:'poi',
          types:item.types||[],
          sourceType:detectPlaceSourceType(item)
        }, rawQuery);
      }).filter(Boolean));
    });
  });
}
function searchPlaceWithGooglePlaces(query, rawQuery=query){
  return new Promise(resolve=>{
    if(!isGooglePlacesApiReady()){
      resolve(null);
      return;
    }
    const service=new google.maps.places.PlacesService(document.createElement('div'));
    service.textSearch({query, region:'kr'}, (results, status)=>{
      debugMapSearch('Places status', status, query, results);
      if(status!==google.maps.places.PlacesServiceStatus.OK||!Array.isArray(results)||!results[0]){
        resolve(null);
        return;
      }
      const item=results[0];
      const location=item.geometry?.location;
      if(!location){
        resolve(null);
        return;
      }
      const lat=typeof location?.lat==='function' ? location.lat() : Number(location?.lat);
      const lng=typeof location?.lng==='function' ? location.lng() : Number(location?.lng);
      resolve(normalizePlaceSearchResult({
        name:item.name||rawQuery,
        displayName:item.name||rawQuery,
        address:item.formatted_address||item.vicinity||'',
        lat,
        lng,
        placeId:item.place_id,
        source:'poi',
        types:item.types||[],
        sourceType:detectPlaceSourceType(item)
      }, rawQuery));
    });
  });
}
function searchPlaceWithGoogleGeocoder(query, rawQuery=query){
  return new Promise(resolve=>{
    if(!isGoogleMapsApiReady()||!google.maps?.Geocoder){
      resolve(null);
      return;
    }
    const geocoder=new google.maps.Geocoder();
    geocoder.geocode({address:query, region:'KR'}, (results, status)=>{
      debugMapSearch('Geocoder status', status, query, results);
      if(status!=='OK'||!Array.isArray(results)||!results[0]){
        resolve(null);
        return;
      }
      const item=results[0];
      const location=item.geometry?.location;
      if(!location){
        resolve(null);
        return;
      }
      const lat=typeof location?.lat==='function' ? location.lat() : Number(location?.lat);
      const lng=typeof location?.lng==='function' ? location.lng() : Number(location?.lng);
      resolve(normalizePlaceSearchResult({
        name:rawQuery,
        displayName:item.formatted_address||rawQuery,
        address:item.formatted_address,
        lat,
        lng,
        placeId:item.place_id,
        source:'geo',
        types:item.types||[],
        sourceType:detectPlaceSourceType(item)
      }, rawQuery));
    });
  });
}
async function searchPlaceWithGoogleGeocodingApi(query, rawQuery=query, options={}){
  const apiKey=getGoogleMapsApiKey();
  if(!apiKey||typeof fetch!=='function') return null;
  const {ok, data}=await fetchJsonWithTimeout(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${encodeURIComponent(apiKey)}&language=ko&region=kr`, {
    signal:options.signal,
    timeoutMs:options.timeoutMs
  });
  if(!ok) return null;
  debugMapSearch('Geocoding API status', data.status, query, data.results);
  const item=Array.isArray(data.results) ? data.results[0] : null;
  const location=item?.geometry?.location;
  return normalizePlaceSearchResult({
    name:rawQuery,
    displayName:item?.formatted_address||rawQuery,
    address:item?.formatted_address,
    lat:location?.lat,
    lng:location?.lng,
    placeId:item?.place_id,
    source:'geo',
    types:item?.types||[],
    sourceType:detectPlaceSourceType(item||{})
  }, rawQuery);
}
async function searchPlaceWithNominatim(query, rawQuery=query, options={}){
  const results=await searchNominatimGeocode(query, rawQuery, options);
  return results[0]||null;
}
async function searchGeocode(query, rawQuery=query, options={}){
  if(typeof fetch!=='function') return [];
  const normalized=String(query||'').trim();
  if(!normalized) return [];
  const cacheKey=normalized.toLowerCase();
  if(placeGeocodeSearchCache.has(cacheKey)){
    return placeGeocodeSearchCache.get(cacheKey).map(item=>({...item}));
  }
  try{
    const settled=await Promise.allSettled([
      searchNominatimGeocode(normalized, rawQuery, options),
      searchPhotonGeocode(normalized, rawQuery, options)
    ]);
    const results=mergePlaceCandidates(settled.flatMap(item=>item.status==='fulfilled' ? item.value : []));
    if(!options.signal?.aborted) placeGeocodeSearchCache.set(cacheKey, results);
    return results.map(item=>({...item}));
  }catch(error){
    if(error?.name==='AbortError') return [];
    console.error('Geocode error:', error);
    return [];
  }
}
async function searchNominatimGeocode(query, rawQuery=query, options={}){
  const {ok, status, data}=await fetchJsonWithTimeout(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=10&addressdetails=1&q=${encodeURIComponent(query)}`, {
    headers:{Accept:'application/json'},
    signal:options.signal,
    timeoutMs:options.timeoutMs
  });
  debugMapSearch('Nominatim geocode results', query, status, data);
  if(!ok||!Array.isArray(data)) return [];
  return data.map(item=>normalizePlaceSearchResult({
    id:item?.place_id||item?.osm_id||'',
    name:item?.name||item?.display_name||rawQuery,
    displayName:item?.display_name||item?.name||rawQuery,
    address:item?.display_name||'',
    lat:parseFloat(item?.lat),
    lng:parseFloat(item?.lon),
    source:'geo',
    types:item?.type?[item.type]:[],
    sourceType:detectPlaceSourceType({
      name:item?.name,
      displayName:item?.display_name,
      address:item?.display_name,
      types:item?.type?[item.type]:[]
    })
  }, rawQuery)).filter(Boolean);
}
async function searchPhotonGeocode(query, rawQuery=query, options={}){
  if(typeof fetch!=='function') return [];
  try{
    const {ok, data}=await fetchJsonWithTimeout(`https://photon.komoot.io/api/?limit=10&q=${encodeURIComponent(query)}`, {
      headers:{Accept:'application/json'},
      signal:options.signal,
      timeoutMs:options.timeoutMs
    });
    if(!ok) return [];
    debugMapSearch('Photon geocode results', query, data);
    const features=Array.isArray(data?.features) ? data.features : [];
    return features.map(feature=>{
      const props=feature?.properties||{};
      const coordinates=Array.isArray(feature?.geometry?.coordinates) ? feature.geometry.coordinates : [];
      const address=[props.name, props.street, props.city, props.state, props.country]
        .map(value=>String(value||'').trim())
        .filter(Boolean)
        .filter((value,index,array)=>array.indexOf(value)===index)
        .join(', ');
      return normalizePlaceSearchResult({
        id:props.osm_id||props.place_id||'',
        name:props.name||address||rawQuery,
        displayName:address||props.name||rawQuery,
        address,
        lat:parseFloat(coordinates[1]),
        lng:parseFloat(coordinates[0]),
        source:'geo',
        types:props.osm_value?[props.osm_value]:[],
        sourceType:detectPlaceSourceType({name:props.name, displayName:address, address, types:props.osm_value?[props.osm_value]:[]})
      }, rawQuery);
    }).filter(Boolean);
  }catch(error){
    if(error?.name==='AbortError') return [];
    console.error('Photon geocode error:', error);
    return [];
  }
}
async function searchPOI(query, rawQuery=query){
  return searchPlaceCandidatesWithGooglePlaces(query, rawQuery);
}
async function searchPlaces(query, options={}){
  const normalized=String(query||'').trim();
  if(!normalized) return [];
  if(getSearchableTextLength(normalized)<2) return [];
  const settled=await Promise.allSettled([
    searchPOI(normalized, normalized),
    searchGeocode(normalized, normalized, options)
  ]);
  return rankPlaceCandidates(mergePlaceCandidates(settled.flatMap(item=>item.status==='fulfilled' ? item.value : [])), normalized).slice(0,10);
}
async function searchPlaceCandidates(query, context=getMapSearchContext(), options={}){
  const normalized=normalizePlaceKeyword(query);
  if(!normalized) return [];
  if(getSearchableTextLength(normalized)<2) return [];
  const cacheKey=getPlaceSearchCacheKey(normalized, context);
  if(placeCandidateSearchCache.has(cacheKey)){
    return placeCandidateSearchCache.get(cacheKey).map(item=>({...item}));
  }
  await ensureGoogleMapsApiLoaded();
  const queries=selectFastPlaceSearchQueries(buildPlaceSearchQueries(normalized, context));
  const candidates=[];
  const tasks=queries.flatMap(candidateQuery=>[
    searchPOI(candidateQuery, normalized),
    searchPlaceWithGoogleGeocoder(candidateQuery, normalized).then(result=>result?[result]:[]),
    searchPlaceWithGoogleGeocodingApi(candidateQuery, normalized, options).then(result=>result?[result]:[]),
    searchGeocode(candidateQuery, normalized, options)
  ]);
  const settled=await Promise.allSettled(tasks);
  settled.forEach(item=>{
    if(item.status==='fulfilled'){
      candidates.push(...item.value);
    }else if(item.reason?.name!=='AbortError'){
      console.error('Place candidate search failed.', item.reason);
    }
  });
  const knownResult=searchPlaceWithKnownKoreanFallback(normalized, normalized);
  if(knownResult) candidates.push(knownResult);
  const results=rankPlaceCandidates(mergePlaceCandidates(candidates), normalized, context).slice(0,5);
  if(!options.signal?.aborted) placeCandidateSearchCache.set(cacheKey, results);
  return results.map(item=>({...item}));
}
async function geocodeWithFallback(query, context=getMapSearchContext()){
  const candidates=await searchPlaceCandidates(query, context);
  return candidates[0]||null;
}
function searchPlaceWithKnownKoreanFallback(query, rawQuery=query){
  const normalized=String(query||'').replace(/\s+/g,'').trim();
  if(!normalized) return null;
  const found=KNOWN_KOREAN_PLACE_FALLBACKS.map(place=>{
    const matchedKeyword=place.keywords
      .map(keyword=>String(keyword||'').replace(/\s+/g,''))
      .filter(keyword=>keyword&&normalized.includes(keyword))
      .sort((a,b)=>b.length-a.length)[0];
    if(!matchedKeyword) return null;
    return {
      place,
      score:(normalized===matchedKeyword?1000:0)+matchedKeyword.length
    };
  }).filter(Boolean).sort((a,b)=>b.score-a.score)[0]?.place;
  return found ? normalizePlaceSearchResult(found, rawQuery) : null;
}
function isValidPlaceResult(result){
  return Boolean(result&&Number.isFinite(Number(result.lat))&&Number.isFinite(Number(result.lng)));
}
async function searchPlaceByName(query){
  const normalized=normalizePlaceKeyword(query);
  if(!normalized) return null;
  return geocodeWithFallback(normalized);
}
function normalizePlaceEntry(entry={}, index=0){
  if(!entry||typeof entry!=='object') return null;
  const name=String(entry.name||'').trim();
  const rawCategory=String(entry.category||'').trim();
  const category=rawCategory==='경기장'?'기타':getValidPlaceCategoryValue(rawCategory);
  if(!name) return null;
  const legacyTags=Array.isArray(entry.tags) ? entry.tags.map(tag=>String(tag||'').trim()==='방송가능'?'라이브 포인트':String(tag||'').trim()) : [];
  const usageTypeCandidate=String(entry.usageType||legacyTags.find(tag=>PLACE_USAGE_TYPES.includes(tag))||'').trim();
  const usageType=getValidPlaceUsageTypeValue(usageTypeCandidate);
  const createdAt=String(entry.createdAt||getTodayLocalDateString()).trim()||getTodayLocalDateString();
  const latValue=Number(entry.lat);
  const lngValue=Number(entry.lng);
  const mapUrl=String(entry.mapUrl||entry.mapLink||entry.url||'').trim();
  const rawText=String(entry.rawText||'').trim();
  const lat=Number.isFinite(latValue) ? latValue : null;
  const lng=Number.isFinite(lngValue) ? lngValue : null;
  const placeId=String(entry.placeId||entry.place_id||'').trim();
  const pendingGeocode=Boolean(entry.pendingGeocode)&&!(Number.isFinite(latValue)&&Number.isFinite(lngValue));
  const updatedAt=String(entry.updatedAt||createdAt).trim()||createdAt;
  const memo=String(entry.memo||entry.notes||'').trim();
  return {
    id:String(entry.id||`place-restored-${Date.now()}-${index}`),
    name,
    displayName:String(entry.displayName||entry.resolvedLabel||name).trim()||name,
    category,
    usageType,
    address:String(entry.address||entry.locationText||'').trim(),
    memo,
    notes:memo,
    accessHint:String(entry.accessHint||entry.locationHint||'').trim(),
    lat,
    lng,
    placeId,
    sourceType:String(entry.sourceType||detectPlaceSourceType(entry)||'general').trim()||'general',
    mapUrl:mapUrl||buildGoogleMapsPlaceUrl({name, address:String(entry.address||entry.locationText||'').trim(), lat, lng, placeId}),
    pendingGeocode,
    searchKeyword:String(entry.searchKeyword||entry.keyword||name).trim(),
    resolvedLabel:String(entry.resolvedLabel||entry.address||'').trim(),
    rawText,
    createdAt,
    updatedAt
  };
}
function normalizePlaceData(input={}){
  const coordinates=extractCoordinatesFromText(input.mapUrl||input.rawText||'');
  const lat=Number.isFinite(Number(input.lat))?Number(input.lat):Number(coordinates?.lat);
  const lng=Number.isFinite(Number(input.lng))?Number(input.lng):Number(coordinates?.lng);
  return normalizePlaceEntry({
    id:input.id||createPlaceId(),
    name:input.name,
    displayName:input.displayName||input.name,
    category:input.category,
    address:input.address,
    memo:input.memo,
    notes:input.notes||input.memo,
    accessHint:input.accessHint,
    usageType:input.usageType,
    lat:Number.isFinite(lat)?lat:null,
    lng:Number.isFinite(lng)?lng:null,
    placeId:input.placeId||'',
    sourceType:input.sourceType||detectPlaceSourceType(input),
    mapUrl:input.mapUrl||buildGoogleMapsPlaceUrl({...input, lat, lng}),
    pendingGeocode:Boolean(input.pendingGeocode),
    searchKeyword:input.searchKeyword||input.name,
    resolvedLabel:input.resolvedLabel||input.address||'',
    rawText:input.rawText||'',
    createdAt:input.createdAt||getTodayLocalDateString(),
    updatedAt:input.updatedAt||getTodayLocalDateString()
  });
}
function maskMapSupabaseProjectUrl(url=''){
  const text=String(url||'').trim();
  const match=text.match(/^https:\/\/([^\.]+)\.supabase\.co/i);
  if(!match) return text ? 'configured' : 'missing';
  const ref=match[1];
  return `https://${ref.slice(0,4)}...${ref.slice(-4)}.supabase.co`;
}
function logMapRenderCount(context='render'){
  const total=placeStore.length;
  const visible=getFilteredPlaces().length;
  const pinned=getFilteredPlaces().filter(place=>hasPlaceCoordinates(place)).length;
  console.log('[MAP render count]', {context, total, visible, pinned, filters:selectedPlaceCategories, search:currentPlaceSearch});
}
function isDuplicatePlace(place){
  if(!place) return false;
  return placeStore.some(existing=>{
    if(existing.id===place.id) return false;
    if(hasPlaceCoordinates(existing)&&hasPlaceCoordinates(place)){
      const sameCoordinates=Math.abs(Number(existing.lat)-Number(place.lat))<0.00001&&Math.abs(Number(existing.lng)-Number(place.lng))<0.00001;
      return sameCoordinates&&String(existing.name||'').trim()===String(place.name||'').trim()&&String(existing.category||'').trim()===String(place.category||'').trim();
    }
    return existing.name===place.name&&existing.category===place.category;
  });
}
function getMapPlacesSupabaseClient(){
  if(typeof window==='undefined') return null;
  return window.supabaseClient||getSharedStateSyncClient?.()||null;
}
function getSupabaseTimestamp(value=''){
  const raw=String(value||'').trim();
  if(!raw) return new Date().toISOString();
  const parsed=raw.includes('T') ? new Date(raw) : new Date(`${raw}T00:00:00.000Z`);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}
function formatSupabaseDateLabel(value=''){
  const raw=String(value||'').trim();
  if(!raw) return getTodayLocalDateString();
  if(/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0,10);
  const parsed=new Date(raw);
  return Number.isNaN(parsed.getTime()) ? raw : parsed.toISOString().slice(0,10);
}
function mapPlaceFromSupabaseRow(row={}, index=0){
  return normalizePlaceEntry({
    id:row.id,
    name:row.name,
    displayName:row.display_name||row.displayName||row.name,
    category:row.category,
    address:row.address,
    memo:row.memo||row.notes,
    notes:row.notes||row.memo,
    lat:row.lat,
    lng:row.lng,
    placeId:row.place_id||row.placeId,
    sourceType:row.source_type||row.sourceType,
    mapUrl:row.map_url||row.mapUrl,
    pendingGeocode:row.pending_geocode??row.pendingGeocode,
    searchKeyword:row.search_keyword||row.searchKeyword,
    resolvedLabel:row.resolved_label||row.resolvedLabel,
    rawText:row.raw_text||row.rawText,
    createdAt:formatSupabaseDateLabel(row.created_at||row.createdAt),
    updatedAt:formatSupabaseDateLabel(row.updated_at||row.updatedAt)
  }, index);
}
function mapPlaceToSupabaseRow(input={}){
  const place=normalizePlaceData(input);
  if(!place) return null;
  place.pendingGeocode=!hasPlaceCoordinates(place)||Boolean(place.pendingGeocode);
  place.mapUrl=place.mapUrl||buildGoogleMapsPlaceUrl(place);
  return {
    id:String(place.id),
    name:place.name,
    display_name:place.displayName||place.name,
    category:place.category,
    address:place.address||'',
    memo:place.memo||'',
    notes:place.notes||place.memo||'',
    lat:hasPlaceCoordinates(place)?Number(place.lat):null,
    lng:hasPlaceCoordinates(place)?Number(place.lng):null,
    place_id:place.placeId||'',
    source_type:place.sourceType||'general',
    map_url:place.mapUrl||'',
    pending_geocode:Boolean(place.pendingGeocode),
    search_keyword:place.searchKeyword||place.name,
    resolved_label:place.resolvedLabel||place.address||'',
    raw_text:place.rawText||'',
    created_at:getSupabaseTimestamp(place.createdAt),
    updated_at:new Date().toISOString()
  };
}
function replacePlaceStore(rows=[]){
  placeStore.length=0;
  placeStore.push(...(Array.isArray(rows)?rows:[]).map((row,index)=>mapPlaceFromSupabaseRow(row,index)).filter(Boolean));
}
async function refreshMapPlacesFromSupabase(options={}){
  const {rerender=true, force=false}=options||{};
  if(mapPlacesLoadPromise&&!force) return mapPlacesLoadPromise;
  if(mapPlacesLoadPromise&&force){
    try{ await mapPlacesLoadPromise; }catch(error){}
  }
  const client=getMapPlacesSupabaseClient();
  if(!client){
    if(!hasReportedMapPlacesLoadError){
      console.warn('MAP 공용 저장소 연결이 준비되지 않았습니다. Supabase 설정을 확인하세요.');
      hasReportedMapPlacesLoadError=true;
    }
    return [];
  }
  mapPlacesLoadPromise=(async()=>{
    try{
      let {data, error}=await client
        .from(MAP_PLACES_TABLE)
        .select('*')
        .order('created_at', {ascending:true});
      if(error) throw error;
      console.log('[MAP select count]', Array.isArray(data)?data.length:0);
      replacePlaceStore(data||[]);
      logMapRenderCount('after-select');
      hasReportedMapPlacesLoadError=false;
      if(rerender&&document.getElementById('placeSystemGrid')) renderPlaceResults();
      return placeStore;
    }catch(error){
      console.error('MAP 공용 장소 로드 실패:', error);
      if(!hasReportedMapPlacesLoadError){
        window.alert('공용 MAP 장소를 불러오지 못했습니다. Supabase 테이블 설정을 확인해주세요.');
        hasReportedMapPlacesLoadError=true;
      }
      return placeStore;
    }finally{
      mapPlacesLoadPromise=null;
    }
  })();
  return mapPlacesLoadPromise;
}
function loadPlaces(){
  if(hasLoadedPlaces) return;
  hasLoadedPlaces=true;
  placeStore.length=0;
  refreshMapPlacesFromSupabase({rerender:true});
  startMapPlacesRealtimeSync();
}
async function persistPlaceData(input={}){
  console.log('[MAP save start]', input);
  loadPlaces();
  await refreshMapPlacesFromSupabase({rerender:false});
  const place=normalizePlaceData(input);
  if(!place) return null;
  place.pendingGeocode=!hasPlaceCoordinates(place)||Boolean(place.pendingGeocode);
  place.mapUrl=place.mapUrl||buildGoogleMapsPlaceUrl(place);
  if(isDuplicatePlace(place)){
    window.alert('이미 저장된 장소입니다.');
    return null;
  }
  const row=mapPlaceToSupabaseRow(place);
  const client=getMapPlacesSupabaseClient();
  if(!client||!row){
    window.alert('공용 저장소 연결을 확인해주세요. 장소가 저장되지 않았습니다.');
    return null;
  }
  try{
    const {data, error}=await client
      .from(MAP_PLACES_TABLE)
      .upsert(row, {onConflict:'id'})
      .select('*')
      .single();
    if(error) throw error;
    const savedPlace=mapPlaceFromSupabaseRow(data||row);
    console.log('[MAP save success]', {id:savedPlace.id, lat:savedPlace.lat, lng:savedPlace.lng, response:data||row});
    activePlaceId=savedPlace.id;
    await refreshMapPlacesFromSupabase({rerender:true, force:true});
    if(hasPlaceCoordinates(savedPlace)){
      window.setTimeout(()=>focusPlace(savedPlace.id), 0);
    }
    return savedPlace;
  }catch(error){
    console.error('[MAP save error]', error);
    window.alert('공용 MAP 장소 저장에 실패했습니다. Supabase 테이블 권한을 확인해주세요.');
    return null;
  }
}
function saveMapPlace(placeData={}){
  return persistPlaceData(placeData);
}
async function updateMapPlaceInSupabase(place={}){
  const client=getMapPlacesSupabaseClient();
  const row=mapPlaceToSupabaseRow(place);
  if(!client||!row) return null;
  try{
    const {data, error}=await client
      .from(MAP_PLACES_TABLE)
      .upsert(row, {onConflict:'id'})
      .select('*')
      .single();
    if(error) throw error;
    const normalized=mapPlaceFromSupabaseRow(data||row);
    console.log('[MAP save success]', {id:normalized.id, lat:normalized.lat, lng:normalized.lng, response:data||row});
    await refreshMapPlacesFromSupabase({rerender:true, force:true});
    return normalized;
  }catch(error){
    console.error('MAP 장소 업데이트 실패:', error);
    window.alert('공용 MAP 장소 업데이트에 실패했습니다.');
    return null;
  }
}
async function deleteMapPlaceFromSupabase(placeId=''){
  const client=getMapPlacesSupabaseClient();
  const normalizedId=String(placeId||'').trim();
  if(!client||!normalizedId) return false;
  try{
    const {error}=await client.from(MAP_PLACES_TABLE).delete().eq('id', normalizedId);
    if(error) throw error;
    return true;
  }catch(error){
    console.error('MAP 장소 삭제 실패:', error);
    window.alert('공용 MAP 장소 삭제에 실패했습니다.');
    return false;
  }
}
function startMapPlacesRealtimeSync(){
  const client=getMapPlacesSupabaseClient();
  if(!client||mapPlacesRealtimeChannel) return;
  try{
    mapPlacesRealtimeChannel=client
      .channel('map-places-shared')
      .on('postgres_changes', {event:'*', schema:'public', table:MAP_PLACES_TABLE}, payload=>{
        console.log('[MAP realtime event type]', payload?.eventType||payload?.event||'unknown');
        refreshMapPlacesFromSupabase({rerender:true, force:true});
      })
      .subscribe();
  }catch(error){
    console.warn('MAP 실시간 동기화 시작 실패:', error);
    mapPlacesRealtimeChannel=null;
  }
}
async function hydratePlacesMissingCoordinates(){
  if(hasHydratedPlaceCoordinates||isHydratingPlaceCoordinates) return;
  loadPlaces();
  const targets=placeStore.filter(place=>!hasPlaceCoordinates(place)&&String(place.name||'').trim());
  if(!targets.length){
    hasHydratedPlaceCoordinates=true;
    return;
  }
  isHydratingPlaceCoordinates=true;
  let didUpdate=false;
  try{
    for(const place of targets){
      const result=await searchPlaceByName([place.name, place.address].filter(Boolean).join(' '));
      if(!result||!hasPlaceCoordinates(result)) continue;
      place.name=result.name||place.name;
      place.address=result.address||place.address;
      place.lat=result.lat;
      place.lng=result.lng;
      place.placeId=result.placeId||place.placeId||'';
      place.mapUrl=result.mapUrl||buildGoogleMapsPlaceUrl(place);
      didUpdate=true;
    }
    if(didUpdate){
      await Promise.all(targets.map(place=>updateMapPlaceInSupabase(place)));
      if(document.getElementById('placeSystemGrid')) renderPlaceResults();
    }
  }finally{
    hasHydratedPlaceCoordinates=true;
    isHydratingPlaceCoordinates=false;
  }
}
function savePlaces(){
  // MAP places are persisted through Supabase CRUD helpers. This no-op keeps older call sites safe.
}
function parseGoogleMapsText(rawText=''){
  const normalizedRaw=String(rawText||'').trim();
  if(!normalizedRaw) return null;
  const lines=normalizedRaw.split('\n').map(line=>line.trim()).filter(Boolean);
  const urlMatch=normalizedRaw.match(/https?:\/\/[^\s]+/);
  const mapUrl=urlMatch ? urlMatch[0] : '';
  const textLines=lines
    .map(line=>line.replace(/https?:\/\/[^\s]+/g, '').trim())
    .filter(Boolean);
  return {
    name:textLines[0]||'',
    address:textLines[1]||'',
    mapUrl
  };
}
async function savePlaceFromPaste(){
  const pasteInput=document.getElementById('mapPasteInput');
  const categorySelect=document.getElementById('mapCategorySelect');
  const usageTypeSelect=document.getElementById('mapUsageTypeSelect');
  const rawText=String(pasteInput?.value||'').trim();
  const category=getValidPlaceCategoryValue(categorySelect?.value);
  const usageType=getValidPlaceUsageTypeValue(usageTypeSelect?.value);
  if(!rawText){
    window.alert('구글맵 내용을 붙여넣어 주세요');
    pasteInput?.focus();
    return;
  }
  if(!category){
    window.alert('카테고리를 선택해주세요');
    categorySelect?.focus();
    return;
  }
  if(!usageType){
    window.alert('용도를 선택해주세요');
    usageTypeSelect?.focus();
    return;
  }
  const parsed=parseGoogleMapsText(rawText);
  const coordinates=extractCoordinatesFromText(rawText);
  const searchQuery=[parsed?.name, parsed?.address].map(value=>String(value||'').trim()).filter(Boolean).join(' ');
  const searchResult=coordinates ? normalizePlaceSearchResult({
    name:parsed?.name||searchQuery,
    address:parsed?.address||'',
    lat:coordinates.lat,
    lng:coordinates.lng,
    mapUrl:parsed?.mapUrl||''
  }, searchQuery) : await searchPlaceByName(searchQuery);
  if(!searchResult){
    window.alert('장소를 찾을 수 없습니다.');
    pasteInput?.focus();
    return;
  }
  const saved=await persistPlaceData({
    name:searchResult.name||parsed?.name||'이름 미지정 장소',
    category,
    address:searchResult.address||parsed?.address||'',
    memo:'',
    accessHint:'',
    usageType,
    lat:searchResult.lat,
    lng:searchResult.lng,
    placeId:searchResult.placeId||'',
    mapUrl:searchResult.mapUrl||parsed?.mapUrl||'',
    rawText,
    createdAt:getTodayLocalDateString()
  });
  if(saved&&pasteInput) pasteInput.value='';
}
function getPlaceFormValues(){
  const nameInput=document.getElementById('placeNameInput');
  const categorySelect=document.getElementById('placeCategorySelect');
  const memoInput=document.getElementById('placeMemoInput');
  return {
    name:String(nameInput?.value||'').trim(),
    category:getValidPlaceCategoryValue(categorySelect?.value),
    address:'',
    memo:String(memoInput?.value||'').trim(),
    accessHint:'',
    usageType:''
  };
}
function renderPlacePreviewPanel(){
  return `<aside class="place-preview-panel" aria-label="검색 위치 미리보기"><div class="place-preview-header"><div><div class="simple-form-title">검색 위치 미리보기</div><p id="placePreviewMeta" class="map-location-pin-description">장소명, 도시, 거리, 주소를 검색하면 위치가 표시됩니다.</p></div></div><div id="placePreviewMap" class="place-preview-map" role="application" aria-label="검색 위치 미리보기 지도">검색 결과를 기다리는 중입니다.</div></aside>`;
}
function initPlacePreviewMap(){
  const mapElement=document.getElementById('placePreviewMap');
  if(!mapElement||!isLeafletReady()) return null;
  if(isLeafletMapInstance(placePreviewMapInstance)&&placePreviewMapInstance.getContainer&&placePreviewMapInstance.getContainer()===mapElement){
    setTimeout(()=>placePreviewMapInstance.invalidateSize(), 40);
    return placePreviewMapInstance;
  }
  if(isLeafletMapInstance(placePreviewMapInstance)&&typeof placePreviewMapInstance.remove==='function'){
    placePreviewMapInstance.remove();
  }
  placePreviewMarker=null;
  mapElement.textContent='';
  placePreviewMapInstance=L.map(mapElement, {
    center:[MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng],
    zoom:4,
    scrollWheelZoom:false,
    attributionControl:false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom:19,
    attribution:'&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(placePreviewMapInstance);
  setTimeout(()=>placePreviewMapInstance.invalidateSize(), 40);
  return placePreviewMapInstance;
}
function updatePlacePreviewMeta(message=''){
  const meta=document.getElementById('placePreviewMeta');
  if(meta) meta.textContent=message||'장소명, 도시, 거리, 주소를 검색하면 위치가 표시됩니다.';
}
function setPlacePreviewCandidate(candidate=null){
  const currentQuery=String(document.getElementById('placeNameInput')?.value||candidate?.searchKeyword||'').trim();
  placePreviewSelectedCandidate=isValidPlaceResult(candidate) ? {...candidate, searchKeyword:candidate.searchKeyword||currentQuery} : null;
  const map=initPlacePreviewMap();
  if(!placePreviewSelectedCandidate){
    updatePlacePreviewMeta('검색 결과를 선택하면 위치가 표시됩니다.');
    return;
  }
  const lat=Number(placePreviewSelectedCandidate.lat);
  const lng=Number(placePreviewSelectedCandidate.lng);
  const title=placePreviewSelectedCandidate.displayName||placePreviewSelectedCandidate.name||'검색 위치';
  const address=placePreviewSelectedCandidate.address||'';
  updatePlacePreviewMeta(address ? `${title} · ${address}` : title);
  if(!map) return;
  const latLng=[lat, lng];
  map.setView(latLng, 15);
  if(placePreviewMarker&&typeof placePreviewMarker.setLatLng==='function'){
    placePreviewMarker.setLatLng(latLng);
  }else{
    placePreviewMarker=L.marker(latLng).addTo(map);
  }
  placePreviewMarker.bindPopup(`<strong>${escapeHtml(title)}</strong>${address?`<br>${escapeHtml(address)}`:''}`).openPopup();
  setTimeout(()=>map.invalidateSize(), 40);
}
function clearPlacePreview(){
  placePreviewSelectedCandidate=null;
  queuedPlacePreviewCandidate=null;
  if(placePreviewFrameId!==null){
    window.cancelAnimationFrame(placePreviewFrameId);
    placePreviewFrameId=null;
  }
  if(placePreviewMarker&&typeof placePreviewMarker.remove==='function'){
    placePreviewMarker.remove();
    placePreviewMarker=null;
  }
  updatePlacePreviewMeta();
}
function schedulePlaceLookupSearch(query=''){
  const normalized=String(query||'').trim();
  if(placeLookupTimerId!==null){
    window.clearTimeout(placeLookupTimerId);
  }
  if(placeLookupAbortController){
    placeLookupAbortController.abort();
    placeLookupAbortController=null;
  }
  if(!normalized||getSearchableTextLength(normalized)<2){
    pendingPlaceCandidates=[];
    clearPlaceSearchAssist();
    clearPlacePreview();
    return;
  }
  placeLookupTimerId=window.setTimeout(()=>{
    placeLookupTimerId=null;
    runPlaceLookupSearch(normalized);
  }, PLACE_LOOKUP_DEBOUNCE_MS);
}
async function runPlaceLookupSearch(query=''){
  const normalized=String(query||'').trim();
  if(!normalized||getSearchableTextLength(normalized)<2) return [];
  const requestId=++placeLookupRequestId;
  if(placeLookupAbortController){
    placeLookupAbortController.abort();
  }
  placeLookupAbortController=new AbortController();
  const signal=placeLookupAbortController.signal;
  const values={...getPlaceFormValues(), name:normalized};
  pendingPlaceDraft={...values, searchKeyword:normalized, createdAt:getTodayLocalDateString(), updatedAt:getTodayLocalDateString()};
  renderPlaceSearchAssist('loading');
  try{
    const candidates=await searchPlaceCandidates(normalized, getMapSearchContext(), {signal, timeoutMs:PLACE_SEARCH_TIMEOUT_MS});
    if(requestId!==placeLookupRequestId) return [];
    pendingPlaceCandidates=candidates;
    renderPlaceSearchAssist(candidates.length?'candidates':'not-found', candidates);
    if(candidates.length===1){
      setPlacePreviewCandidate(candidates[0]);
    }
    return candidates;
  }catch(error){
    if(error?.name==='AbortError') return [];
    if(requestId===placeLookupRequestId){
      console.error('Place lookup failed.', error);
      pendingPlaceCandidates=[];
      renderPlaceSearchAssist('error');
      clearPlacePreview();
    }
    return [];
  }finally{
    if(requestId===placeLookupRequestId){
      placeLookupAbortController=null;
    }
  }
}
async function savePlace(){
  const values=getPlaceFormValues();
  const nameInput=document.getElementById('placeNameInput');
  const categorySelect=document.getElementById('placeCategorySelect');
  if(!values.name){
    nameInput?.focus();
    return;
  }
  if(!values.category){
    window.alert('카테고리를 선택해주세요');
    categorySelect?.focus();
    return;
  }
  const normalizedName=normalizePlaceKeyword(values.name);
  const draftMatches=normalizePlaceKeyword(pendingPlaceDraft?.searchKeyword||pendingPlaceDraft?.name||'')===normalizedName;
  let candidates=draftMatches&&pendingPlaceCandidates.length ? pendingPlaceCandidates : await searchPlaceCandidates(values.name);
  if(placePreviewSelectedCandidate&&normalizePlaceKeyword(placePreviewSelectedCandidate.searchKeyword||'')===normalizedName){
    candidates=[placePreviewSelectedCandidate];
  }
  pendingPlaceDraft={...values, searchKeyword:values.name, createdAt:getTodayLocalDateString(), updatedAt:getTodayLocalDateString()};
  if(candidates.length>1){
    pendingPlaceCandidates=candidates;
    renderPlaceSearchAssist('candidates', candidates);
    return;
  }
  if(!candidates.length){
    pendingPlaceCandidates=[];
    renderPlaceSearchAssist('not-found');
    return;
  }
  const searchResult=candidates[0];
  const saved=await saveMapPlace({
    ...values,
    name:searchResult.name||values.name,
    displayName:searchResult.displayName||searchResult.name||values.name,
    address:searchResult.address||values.address,
    lat:searchResult.lat,
    lng:searchResult.lng,
    placeId:searchResult.placeId||'',
    sourceType:searchResult.sourceType||detectPlaceSourceType(searchResult),
    mapUrl:searchResult.mapUrl||'',
    pendingGeocode:false,
    searchKeyword:values.name,
    resolvedLabel:searchResult.address||searchResult.name||'',
    rawText:'',
    createdAt:getTodayLocalDateString()
  });
  if(saved){
    if(nameInput) nameInput.value='';
    const memoInput=document.getElementById('placeMemoInput');
    if(memoInput) memoInput.value='';
    clearPlaceSearchAssist();
    clearPlacePreview();
  }
}
function clearPlaceSearchAssist(){
  placeLookupRequestId+=1;
  pendingPlaceDraft=null;
  pendingPlaceCandidates=[];
  const panel=document.getElementById('placeSearchAssistPanel');
  if(panel) panel.innerHTML='';
}
function renderPlaceSearchAssist(mode='not-found', candidates=[]){
  const panel=document.getElementById('placeSearchAssistPanel');
  if(!panel) return;
  const draftName=escapeHtml(pendingPlaceDraft?.name||'');
  if(mode==='loading'){
    panel.innerHTML='<div class="map-location-pin-card-memo" style="margin-top:10px;">검색 중입니다...</div>';
    updatePlacePreviewMeta('검색 중입니다...');
    return;
  }
  if(mode==='error'){
    panel.innerHTML='<div class="map-location-pin-card-memo" style="margin-top:10px;">검색 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 이름만 저장할 수 있습니다.</div>';
    updatePlacePreviewMeta('검색 중 오류가 발생했습니다.');
    return;
  }
  if(mode==='candidates'){
    panel.innerHTML=`<div class="map-location-pin-card-memo" style="margin-top:10px;">검색 결과를 선택해 저장하세요.</div><div class="place-list place-search-results" style="margin-top:8px;">${candidates.map((candidate,index)=>{const typeLabel=formatPlaceSourceTypeLabel(candidate.sourceType||detectPlaceSourceType(candidate)); const sourceLabel=candidate.source==='geo'?'지명/주소':'상호/장소'; return `<article class="place-card place-search-result-card" data-candidate-index="${index}" onclick="previewPlaceCandidate(${index}, true)" onmouseenter="previewPlaceCandidate(${index})"><div class="place-card-top"><span class="place-usage-badge">${escapeHtml(typeLabel)}</span><span class="place-usage-badge">${escapeHtml(sourceLabel)}</span></div><h6 class="map-location-pin-card-title">${escapeHtml(candidate.displayName||candidate.name)}</h6>${candidate.address?`<div class="map-location-pin-card-location">${escapeHtml(candidate.address)}</div>`:''}<div class="place-card-actions"><button type="button" class="section-title-action-btn place-map-open-btn" onclick="event.stopPropagation(); selectPlaceCandidate(${index})">저장</button></div></article>`;}).join('')}</div><div class="simple-info-actions map-location-pin-form-actions"><button type="button" class="section-title-action-btn" onclick="savePendingPlaceWithoutCoordinates()">이 이름으로 그냥 저장</button><button type="button" class="section-title-action-btn" onclick="beginManualPinPlacementFromDraft()">지도에서 직접 위치 지정</button></div>`;
    if(candidates.length===1){
      window.setTimeout(()=>setPlacePreviewCandidate(candidates[0]), 0);
    }
    return;
  }
  panel.innerHTML=`<div class="map-location-pin-card-memo" style="margin-top:10px;">${draftName ? `${draftName}: ` : ''}정확한 위치를 찾지 못했습니다. 그래도 이름만 저장하거나 지도에서 직접 위치를 지정할 수 있습니다.</div><div class="simple-info-actions map-location-pin-form-actions"><button type="button" class="section-title-action-btn" onclick="savePendingPlaceWithoutCoordinates()">이 이름으로 그냥 저장</button><button type="button" class="section-title-action-btn" onclick="retryPlaceSearchFromDraft()">다시 검색</button><button type="button" class="section-title-action-btn" onclick="beginManualPinPlacementFromDraft()">지도에서 직접 위치 지정</button></div>`;
  clearPlacePreview();
}
function previewPlaceCandidate(index=0, immediate=false){
  const candidate=pendingPlaceCandidates[Number(index)];
  if(!candidate) return;
  updatePlaceSearchResultHighlight(index);
  if(immediate){
    if(placePreviewFrameId!==null){
      window.cancelAnimationFrame(placePreviewFrameId);
      placePreviewFrameId=null;
    }
    queuedPlacePreviewCandidate=null;
    setPlacePreviewCandidate(candidate);
    return;
  }
  queuedPlacePreviewCandidate=candidate;
  if(placePreviewFrameId!==null) return;
  placePreviewFrameId=window.requestAnimationFrame(()=>{
    placePreviewFrameId=null;
    const nextCandidate=queuedPlacePreviewCandidate;
    queuedPlacePreviewCandidate=null;
    if(nextCandidate) setPlacePreviewCandidate(nextCandidate);
  });
}
function updatePlaceSearchResultHighlight(index=0){
  const normalizedIndex=String(Number(index));
  document.querySelectorAll('.place-search-result-card').forEach(card=>{
    card.classList.toggle('is-preview-active', card.dataset.candidateIndex===normalizedIndex);
  });
}
async function selectPlaceCandidate(index=0){
  const candidate=pendingPlaceCandidates[Number(index)];
  if(!candidate||!pendingPlaceDraft) return;
  const currentValues=getPlaceFormValues();
  const draft={...pendingPlaceDraft, category:currentValues.category||pendingPlaceDraft.category, memo:currentValues.memo||pendingPlaceDraft.memo};
  if(!draft.category){
    window.alert('카테고리를 선택해주세요');
    document.getElementById('placeCategorySelect')?.focus();
    return;
  }
  const saved=await saveMapPlace({
    ...draft,
    name:candidate.name||draft.name,
    displayName:candidate.displayName||candidate.name||draft.name,
    address:candidate.address||'',
    lat:candidate.lat,
    lng:candidate.lng,
    placeId:candidate.placeId||'',
    sourceType:candidate.sourceType||detectPlaceSourceType(candidate),
    mapUrl:candidate.mapUrl||'',
    pendingGeocode:false,
    resolvedLabel:candidate.address||candidate.name||''
  });
  if(saved){
    document.getElementById('placeNameInput')&&(document.getElementById('placeNameInput').value='');
    document.getElementById('placeMemoInput')&&(document.getElementById('placeMemoInput').value='');
    clearPlaceSearchAssist();
    clearPlacePreview();
  }
}
async function savePendingPlaceWithoutCoordinates(){
  const draft=pendingPlaceDraft||getPlaceFormValues();
  if(!draft?.name||!draft?.category){
    window.alert('장소명과 카테고리를 먼저 입력해주세요.');
    return;
  }
  const saved=await saveMapPlace({
    ...draft,
    address:draft.address||'',
    lat:null,
    lng:null,
    placeId:'',
    mapUrl:buildGoogleMapsPlaceUrl(draft),
    pendingGeocode:true,
    searchKeyword:draft.searchKeyword||draft.name,
    resolvedLabel:'위치 미확정',
    createdAt:draft.createdAt||getTodayLocalDateString(),
    updatedAt:getTodayLocalDateString()
  });
  if(saved){
    document.getElementById('placeNameInput')&&(document.getElementById('placeNameInput').value='');
    document.getElementById('placeMemoInput')&&(document.getElementById('placeMemoInput').value='');
    clearPlaceSearchAssist();
  }
}
async function retryPlaceSearchFromDraft(){
  if(!pendingPlaceDraft){
    pendingPlaceDraft={...getPlaceFormValues(), searchKeyword:getPlaceFormValues().name};
  }
  const candidates=await searchPlaceCandidates(pendingPlaceDraft.name);
  pendingPlaceCandidates=candidates;
  renderPlaceSearchAssist(candidates.length>1?'candidates':(candidates.length?'candidates':'not-found'), candidates);
}
function beginManualPinPlacementFromDraft(){
  const draft=pendingPlaceDraft||getPlaceFormValues();
  if(!draft?.name||!draft?.category){
    window.alert('장소명과 카테고리를 먼저 입력해주세요.');
    return;
  }
  beginManualPinPlacement({...draft, pendingGeocode:false, searchKeyword:draft.searchKeyword||draft.name});
}
function openPlaceComposer(category=''){
  placeComposerCategory=getValidPlaceCategoryValue(category);
  selectedPlaceCategories=placeComposerCategory?[placeComposerCategory]:[];
  renderPlaceResults();
  setTimeout(()=>document.getElementById('placeNameInput')?.focus(), 0);
}
function cancelPlaceComposer(){
  renderPlaceResults();
}
function setPlaceFilter(filter='all'){
  const normalized=String(filter||'all').trim();
  if(normalized==='all'){
    selectedPlaceCategories=[];
  }else{
    selectedPlaceCategories=[getValidPlaceCategoryValue(normalized)].filter(Boolean);
  }
  renderPlaceResults();
  renderPlaceFiltersOnly();
}
function setPlaceSearch(value=''){
  currentPlaceSearch=String(value||'').trim();
  if(placeSearchRenderTimerId!==null){
    window.clearTimeout(placeSearchRenderTimerId);
  }
  placeSearchRenderTimerId=window.setTimeout(()=>{
    placeSearchRenderTimerId=null;
    renderPlaceResults();
  }, 120);
}
function focusPlace(placeId=''){
  activePlaceId=String(placeId||'').trim();
  const place=placeStore.find(item=>String(item.id)===activePlaceId);
  if(place&&!hasPlaceCoordinates(place)){
    window.alert('이 장소는 아직 위치가 확정되지 않았습니다. 재검색 또는 지도에서 직접 위치를 지정하세요.');
  }else if(mapInstance&&place&&hasPlaceCoordinates(place)){
    if(isLeafletMapInstance(mapInstance)){
      mapInstance.setView([Number(place.lat), Number(place.lng)], 16, {animate:true});
      const marker=placeMarkerMap.get(place.id);
      if(marker&&typeof marker.openPopup==='function') marker.openPopup();
      refreshMapLayout(false);
    }else if(isGoogleMapsApiReady()&&typeof mapInstance.setCenter==='function'){
      mapInstance.setCenter({lat:Number(place.lat), lng:Number(place.lng)});
      mapInstance.setZoom(16);
      const markerRecord=placeMarkerMap.get(place.id);
      if(markerRecord?.infoWindow&&markerRecord?.marker) markerRecord.infoWindow.open(mapInstance, markerRecord.marker);
    }
    document.getElementById('placeGoogleMap')?.scrollIntoView({behavior:'smooth', block:'center'});
  }
  renderPlaceListOnly();
}
function moveToMapPlace(id=''){
  focusPlace(id);
}
function focusMapPlace(id=''){
  focusPlace(id);
}
function renderMapPlaceList(){
  return renderPlaceList();
}
function openPlaceMapUrl(placeId=''){
  loadPlaces();
  const place=placeStore.find(item=>String(item.id)===String(placeId));
  const mapUrl=String(place?.mapUrl||buildGoogleMapsPlaceUrl(place)||'').trim();
  if(!mapUrl) return;
  window.open(mapUrl, '_blank');
}
async function deletePlace(placeId=''){
  loadPlaces();
  const normalizedId=String(placeId||'').trim();
  if(!normalizedId) return;
  const index=placeStore.findIndex(place=>String(place.id)===normalizedId);
  if(index===-1) return;
  const confirmed=window.confirm('이 장소를 삭제하시겠습니까?');
  if(!confirmed) return;
  const deleted=await deleteMapPlaceFromSupabase(normalizedId);
  if(!deleted) return;
  if(activePlaceId===normalizedId) activePlaceId='';
  await refreshMapPlacesFromSupabase({rerender:true, force:true});
}
async function retryGeocodeForPlace(placeId=''){
  loadPlaces();
  const place=placeStore.find(item=>String(item.id)===String(placeId));
  if(!place) return;
  const result=await geocodeWithFallback([place.searchKeyword||place.name, place.address].filter(Boolean).join(' '));
  if(!result){
    window.alert('정확한 위치를 찾지 못했습니다. 지도에서 직접 위치를 지정할 수 있습니다.');
    return;
  }
  place.name=result.name||place.name;
  place.displayName=result.displayName||result.name||place.displayName||place.name;
  place.address=result.address||place.address;
  place.lat=result.lat;
  place.lng=result.lng;
  place.placeId=result.placeId||place.placeId||'';
  place.sourceType=result.sourceType||detectPlaceSourceType(result)||place.sourceType||'general';
  place.mapUrl=result.mapUrl||buildGoogleMapsPlaceUrl(place);
  place.pendingGeocode=false;
  place.resolvedLabel=result.address||result.name||'';
  place.updatedAt=getTodayLocalDateString();
  const updatedPlace=await updateMapPlaceInSupabase(place);
  if(!updatedPlace) return;
  activePlaceId=updatedPlace.id;
  renderPlaceResults();
  focusPlace(updatedPlace.id);
}
function beginManualPinPlacement(placeDraft={}){
  pendingManualPlaceDraft={...placeDraft};
  window.alert('지도에서 위치를 클릭하면 해당 좌표로 저장됩니다.');
  document.getElementById('placeGoogleMap')?.scrollIntoView({behavior:'smooth', block:'center'});
}
function beginManualPinPlacementForPlace(placeId=''){
  loadPlaces();
  const place=placeStore.find(item=>String(item.id)===String(placeId));
  if(!place) return;
  beginManualPinPlacement({...place, existingId:place.id});
}
async function handleManualMapClick(lat, lng){
  if(!pendingManualPlaceDraft) return false;
  const draft={...pendingManualPlaceDraft};
  pendingManualPlaceDraft=null;
  if(draft.existingId){
    const place=placeStore.find(item=>String(item.id)===String(draft.existingId));
    if(place){
      place.lat=Number(lat);
      place.lng=Number(lng);
      place.pendingGeocode=false;
      place.mapUrl=buildGoogleMapsPlaceUrl(place);
      place.resolvedLabel='지도에서 직접 지정';
      place.updatedAt=getTodayLocalDateString();
      const updatedPlace=await updateMapPlaceInSupabase(place);
      if(!updatedPlace) return false;
      renderPlaceResults();
      focusPlace(updatedPlace.id);
      return true;
    }
  }
  const saved=await saveMapPlace({
    ...draft,
    lat:Number(lat),
    lng:Number(lng),
    pendingGeocode:false,
    mapUrl:buildGoogleMapsPlaceUrl({...draft, lat:Number(lat), lng:Number(lng)}),
    resolvedLabel:'지도에서 직접 지정',
    createdAt:draft.createdAt||getTodayLocalDateString(),
    updatedAt:getTodayLocalDateString()
  });
  if(saved) clearPlaceSearchAssist();
  return true;
}
function getFilteredPlaces(){
  loadPlaces();
  const query=String(currentPlaceSearch||'').trim().toLowerCase();
  const selectedCategories=selectedPlaceCategories.filter(category=>getValidPlaceCategoryValue(category));
  return [...placeStore].filter(place=>{
    if(selectedCategories.length) return selectedCategories.includes(place.category);
    return true;
  }).filter(place=>{
    if(!query) return true;
    return [place.name, place.address, place.memo, place.accessHint, place.category]
      .some(value=>String(value||'').toLowerCase().includes(query));
  }).sort((a,b)=>String(b.id||'').localeCompare(String(a.id||'')));
}
function isPlaceFilterAllSelected(){
  return !selectedPlaceCategories.filter(category=>getValidPlaceCategoryValue(category)).length;
}
function setPlaceCategoryFilter(category='all', checked=true){
  const normalized=String(category||'all').trim();
  if(normalized==='all'){
    selectedPlaceCategories=[];
    renderPlaceResults();
    renderPlaceFiltersOnly();
    return;
  }
  const validCategory=getValidPlaceCategoryValue(normalized);
  if(!validCategory) return;
  const categorySet=new Set(selectedPlaceCategories.filter(item=>getValidPlaceCategoryValue(item)));
  if(checked){
    categorySet.add(validCategory);
  }else{
    categorySet.delete(validCategory);
  }
  selectedPlaceCategories=[...categorySet];
  renderPlaceResults();
  renderPlaceFiltersOnly();
}
function renderPlaceEntryPanel(){
  const categoryOptions=renderPlaceCategoryOptions(placeComposerCategory);
  return `<section class="simple-form-card place-entry-panel" aria-label="장소 등록과 필터"><div class="place-entry-lookup-layout"><div class="place-entry-form-pane"><div class="map-location-pin-form-header"><div><div class="simple-form-title">장소 검색 / 저장</div><p class="map-location-pin-description">장소명, 도시, 거리, 주소, 건물명, 상호명을 검색해 저장합니다.</p></div></div><label class="simple-form-field place-search-main-field"><span class="simple-form-label">검색어</span><input type="text" class="simple-form-input" id="placeNameInput" placeholder="예: Mexico City / Paseo de la Reforma / 서울시청 / Starbucks Tokyo" oninput="schedulePlaceLookupSearch(this.value)" onkeydown="if(event.key==='Enter'){savePlace();}"></label><div id="placeSearchAssistPanel"></div><div class="simple-form-grid place-form-grid place-save-grid"><label class="simple-form-field"><span class="simple-form-label">저장 카테고리</span><select class="simple-form-input" id="placeCategorySelect">${categoryOptions}</select></label><label class="simple-form-field place-form-field-wide"><span class="simple-form-label">추가 메모</span><textarea id="placeMemoInput" class="simple-form-input simple-form-textarea" rows="2" placeholder="예: 단체 식사 가능, 주차 확인 필요"></textarea></label><div class="simple-info-actions map-location-pin-form-actions"><button type="button" class="section-title-action-btn" onclick="savePlace()">저장</button></div></div></div>${renderPlacePreviewPanel()}</div></section>`;
}
function renderPlaceComposer(){
  return renderPlaceEntryPanel();
}
function isLeafletReady(){
  return typeof L!=='undefined'&&typeof L.map==='function';
}
function isLeafletMapInstance(map){
  return Boolean(map&&typeof map.setView==='function'&&typeof map.invalidateSize==='function');
}
function clearMarkers(){
  markers.forEach(marker=>{
    if(marker&&typeof marker.setMap==='function') marker.setMap(null);
    if(marker&&typeof marker.remove==='function') marker.remove();
  });
  markers=[];
  placeMarkerMap.clear();
}
function buildPlacePopupHtml(place={}){
  const categoryMeta=getPlaceCategoryMeta(place.category);
  return `<div style="font-size:13px;line-height:1.5;"><strong>${escapeHtml(place.name)}</strong><br>카테고리: ${escapeHtml(categoryMeta.label)}${place.address?`<br>${escapeHtml(place.address)}`:''}<br><a href="${escapeHtml(buildMapUrl(place))}" target="_blank" rel="noopener noreferrer">구글지도 열기</a></div>`;
}
function addMarker(place){
  if(!mapInstance||!hasPlaceCoordinates(place)) return null;
  if(isLeafletMapInstance(mapInstance)&&isLeafletReady()){
    const marker=L.marker([Number(place.lat), Number(place.lng)], {title:place.name})
      .addTo(mapInstance)
      .bindPopup(buildPlacePopupHtml(place));
    marker.on('click', ()=>{
      activePlaceId=place.id;
      renderPlaceListOnly();
    });
    markers.push(marker);
    placeMarkerMap.set(place.id, marker);
    return marker;
  }
  if(!isGoogleMapsApiReady()) return null;
  const marker=new google.maps.Marker({
    position:{lat:Number(place.lat), lng:Number(place.lng)},
    map:mapInstance,
    title:place.name
  });
  const infoWindow=new google.maps.InfoWindow({
    content:buildPlacePopupHtml(place)
  });
  marker.addListener('click', ()=>{
    activePlaceId=place.id;
    infoWindow.open(mapInstance, marker);
    renderPlaceListOnly();
  });
  markers.push(marker);
  placeMarkerMap.set(place.id, {marker, infoWindow});
  return marker;
}
function renderMarkers(){
  clearMarkers();
  logMapRenderCount('markers');
  if(!mapInstance) return;
  const visiblePlaces=getFilteredPlaces().filter(place=>hasPlaceCoordinates(place));
  if(isLeafletMapInstance(mapInstance)&&isLeafletReady()){
    if(!visiblePlaces.length){
      mapInstance.setView([MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng], 5);
      refreshMapLayout(false);
      return;
    }
    const bounds=[];
    visiblePlaces.forEach(place=>{
      const marker=addMarker(place);
      if(marker) bounds.push([Number(place.lat), Number(place.lng)]);
    });
    if(visiblePlaces.length===1){
      mapInstance.setView([Number(visiblePlaces[0].lat), Number(visiblePlaces[0].lng)], 15);
    }else if(bounds.length){
      mapInstance.fitBounds(bounds, {padding:[28,28], maxZoom:15});
    }
    refreshMapLayout(false);
    return;
  }
  if(!isGoogleMapsApiReady()) return;
  if(!visiblePlaces.length){
    mapInstance.setCenter(MAP_DEFAULT_CENTER);
    mapInstance.setZoom(5);
    return;
  }
  const bounds=new google.maps.LatLngBounds();
  visiblePlaces.forEach(place=>{
    const marker=addMarker(place);
    if(marker) bounds.extend(marker.getPosition());
  });
  if(visiblePlaces.length===1){
    mapInstance.setCenter({lat:Number(visiblePlaces[0].lat), lng:Number(visiblePlaces[0].lng)});
    mapInstance.setZoom(15);
  }else{
    mapInstance.fitBounds(bounds);
  }
}
function refreshMapLayout(shouldRenderMarkers=false){
  setTimeout(()=>{
    if(isLeafletMapInstance(mapInstance)){
      mapInstance.invalidateSize();
      if(shouldRenderMarkers) renderMarkers();
    }else if(shouldRenderMarkers){
      renderMarkers();
    }
  }, 80);
}
function initMap(){
  if(typeof googleMapsReadyResolver==='function'){
    googleMapsReadyResolver(isGoogleMapsApiReady());
    googleMapsReadyResolver=null;
  }
  initPlaceMap();
}
async function initPlaceMap(){
  const mapElement=document.getElementById('placeGoogleMap');
  if(!mapElement) return;
  if(isLeafletReady()){
    if(isLeafletMapInstance(mapInstance)&&mapInstance.getContainer&&mapInstance.getContainer()===mapElement){
      refreshMapLayout(true);
      return;
    }
    if(isLeafletMapInstance(mapInstance)&&typeof mapInstance.remove==='function'){
      mapInstance.remove();
    }
    mapElement.textContent='';
    mapInstance=L.map(mapElement, {
      center:[MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng],
      zoom:5,
      scrollWheelZoom:true
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom:19,
      attribution:'&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(mapInstance);
    mapInstance.on('click', event=>{
      if(pendingManualPlaceDraft) handleManualMapClick(event.latlng.lat, event.latlng.lng);
    });
    refreshMapLayout(true);
    return;
  }
  const loaded=await ensureGoogleMapsApiLoaded();
  if(!loaded||!isGoogleMapsApiReady()){
    mapInstance=null;
    mapElement.textContent=getGoogleMapsApiKey()
      ? 'Google Maps 지도를 불러오지 못했습니다. 저장된 장소는 구글지도 열기 버튼으로 확인할 수 있습니다.'
      : 'Google Maps API 키가 있으면 내부 지도에 핀이 표시됩니다. 저장된 장소는 구글지도 열기 버튼으로 확인할 수 있습니다.';
    return;
  }
  if(mapInstance&&mapInstance.getDiv&&mapInstance.getDiv()===mapElement){
    renderMarkers();
    return;
  }
  mapElement.textContent='';
  mapInstance=new google.maps.Map(mapElement, {
    center:MAP_DEFAULT_CENTER,
    zoom:5,
    mapTypeControl:false,
    streetViewControl:false,
    fullscreenControl:true
  });
  renderMarkers();
}
function renderPlaceResults(){
  logMapRenderCount('renderPlaceResults');
  if(!document.getElementById('placeSystemGrid')){
    renderMapPanel();
    return;
  }
  renderMarkers();
  renderPlaceListOnly();
}
function renderMapPins(){
  const places=getFilteredPlaces();
  let pinnedCount=0;
  const categoryCounts=new Map();
  places.forEach(place=>{
    if(hasPlaceCoordinates(place)) pinnedCount+=1;
    const categoryValue=getValidPlaceCategoryValue(place.category)||PLACE_CATEGORIES[PLACE_CATEGORIES.length-1].value;
    categoryCounts.set(categoryValue, (categoryCounts.get(categoryValue)||0)+1);
  });
  const categorySummary=PLACE_CATEGORIES
    .map(category=>({label:category.label, tone:category.tone, count:categoryCounts.get(category.value)||0}))
    .filter(item=>item.count>0);
  const summaryHtml=categorySummary.map(item=>`<span class="map-location-pin-card-category is-${escapeHtml(item.tone)}" style="display:inline-flex;align-items:center;margin:0;white-space:nowrap;">${escapeHtml(item.label)} ${item.count}</span>`).join('')||'<span class="place-map-unavailable">표시할 장소 없음</span>';
  return `<section class="map-main-board" aria-label="저장 장소 지도" style="display:block;width:100%;margin-top:14px;"><div class="map-status-bar" style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin:0 0 8px 0;padding:0 2px;"><span class="map-location-pin-list-meta" style="margin:0;">장소 ${places.length}개 / 핀 ${pinnedCount}개</span><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:0;">${summaryHtml}</div></div><div id="placeGoogleMap" class="place-google-map" role="application" aria-label="저장 장소 지도" style="width:100%;height:clamp(360px,60vh,640px);min-height:360px;border:1px solid #d7dde8;border-radius:8px;overflow:hidden;background:#eef2f7;color:#475569;">지도를 불러오는 중입니다.</div></section>`;
}
function renderPlaceList(){
  const places=getFilteredPlaces();
  const headerHtml=`<header class="map-location-pin-list-header place-list-header-row"><div class="place-list-heading"><h5 class="map-location-pin-list-title">카테고리별 장소 목록</h5><p class="map-location-pin-list-meta">${places.length}개 장소가 저장되어 있습니다.</p></div>${renderPlaceFilters()}</header>`;
  if(!places.length){
    return `<section class="place-list-shell" style="margin-top:18px;">${headerHtml}<div class="map-location-pin-list-empty">조건에 맞는 장소가 없습니다.</div></section>`;
  }
  const groupedPlaces=new Map(PLACE_CATEGORIES.map(category=>[category.value, []]));
  places.forEach(place=>{
    const categoryValue=getValidPlaceCategoryValue(place.category)||PLACE_CATEGORIES[PLACE_CATEGORIES.length-1].value;
    if(!groupedPlaces.has(categoryValue)){
      groupedPlaces.set(categoryValue, []);
    }
    groupedPlaces.get(categoryValue).push(place);
  });
  const groups=PLACE_CATEGORIES.map(category=>({
    meta:category,
    places:groupedPlaces.get(category.value)||[]
  })).filter(group=>group.places.length);
  return `<section class="place-list-shell" style="margin-top:18px;">${headerHtml}<div class="place-list">${groups.map(group=>`<section class="place-category-group"><h6 class="map-location-pin-card-title">[${escapeHtml(group.meta.label)}]</h6>${group.places.map(place=>{const meta=getPlaceCategoryMeta(place.category); const hasCoordinates=hasPlaceCoordinates(place); const statusBadge=hasCoordinates ? '' : '<span class="place-usage-badge">위치 미확정</span>'; const sourceBadge=`<span class="place-usage-badge">${escapeHtml(formatPlaceSourceTypeLabel(place.sourceType||'general'))}</span>`; const mapButton=hasCoordinates ? `<button type="button" class="section-title-action-btn place-map-open-btn" onclick="event.stopPropagation(); focusPlace('${escapeHtml(place.id)}')">지도에서 보기</button>` : `<button type="button" class="section-title-action-btn place-map-open-btn" onclick="event.stopPropagation(); retryGeocodeForPlace('${escapeHtml(place.id)}')">재검색</button><button type="button" class="section-title-action-btn place-map-open-btn" onclick="event.stopPropagation(); beginManualPinPlacementForPlace('${escapeHtml(place.id)}')">지도지정</button>`; return `<article class="place-card is-${escapeHtml(meta.tone)}${activePlaceId===place.id?' is-active':''}" onclick="focusPlace('${escapeHtml(place.id)}')"><div class="place-card-top"><span class="map-location-pin-card-category is-${escapeHtml(meta.tone)}">${escapeHtml(meta.label)}</span>${sourceBadge}${statusBadge}${place.createdAt?`<span class="place-usage-badge">${escapeHtml(place.createdAt)}</span>`:''}</div><h6 class="map-location-pin-card-title">${escapeHtml(place.displayName||place.name)}</h6>${place.address?`<div class="map-location-pin-card-location">${escapeHtml(place.address)}</div>`:'<div class="map-location-pin-card-location">위치 미확정</div>'}${place.memo?`<p class="map-location-pin-card-memo">${escapeHtml(place.memo)}</p>`:''}<div class="place-card-actions">${mapButton}<button type="button" class="section-title-action-btn place-map-open-btn" onclick="event.stopPropagation(); openPlaceMapUrl('${escapeHtml(place.id)}')">외부 지도 열기</button><button type="button" class="section-title-action-btn delete place-delete-btn" onclick="event.stopPropagation(); deletePlace('${escapeHtml(place.id)}')">삭제</button></div></article>`;}).join('')}</section>`).join('')}</div></section>`;
}
function renderPlaceListOnly(){
  const listPanel=document.getElementById('placeListPanel');
  if(!listPanel) return;
  const activeElement=document.activeElement;
  const shouldRestoreSearchFocus=activeElement?.id==='placeSearchInput';
  const selectionStart=shouldRestoreSearchFocus ? activeElement.selectionStart : null;
  const selectionEnd=shouldRestoreSearchFocus ? activeElement.selectionEnd : null;
  listPanel.innerHTML=renderPlaceList();
  if(shouldRestoreSearchFocus){
    const input=document.getElementById('placeSearchInput');
    if(input){
      input.focus({preventScroll:true});
      if(selectionStart!==null&&selectionEnd!==null){
        input.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }
}
function renderPlaceFiltersOnly(){
  const filterPanel=document.getElementById('placeCategoryFilterPanel');
  if(filterPanel) filterPanel.outerHTML=renderPlaceFilters();
}
function renderPlaceFilters(){
  const selectedSet=new Set(selectedPlaceCategories.filter(category=>getValidPlaceCategoryValue(category)));
  const allChecked=isPlaceFilterAllSelected();
  const checkboxStyle='display:inline-flex;align-items:center;gap:6px;';
  return `<section id="placeCategoryFilterPanel" class="place-search-filter-panel" aria-label="장소 카테고리 필터"><div class="place-filter-bar map-category-filters" role="group" aria-label="카테고리 필터"><div class="map-inline-search"><input id="placeSearchInput" class="simple-form-input map-inline-search-input" type="search" value="${escapeHtml(currentPlaceSearch)}" placeholder="장소명 / 주소 / 카테고리 검색" oninput="setPlaceSearch(this.value)"></div><label style="${checkboxStyle}"><input type="checkbox" ${allChecked?'checked':''} onchange="setPlaceCategoryFilter('all', this.checked)">전체보기</label>${PLACE_CATEGORIES.map(item=>`<label style="${checkboxStyle}"><input type="checkbox" ${!allChecked&&selectedSet.has(item.value)?'checked':''} onchange="setPlaceCategoryFilter('${escapeHtml(item.value)}', this.checked)">${escapeHtml(item.label)}</label>`).join('')}</div></section>`;
}
function renderPlaceManagementPanel(){
  loadPlaces();
  return `<section class="map-location-pin-shell place-system-shell" aria-label="MAP"><header class="map-location-pin-header"><div><h4 class="map-location-pin-title">MAP</h4><p class="map-location-pin-description">등록된 장소를 지도에서 보고, 아래 목록에서 바로 선택할 수 있습니다.</p></div></header>${renderPlaceEntryPanel()}<div id="placeSystemGrid" class="place-system-grid" style="display:block;width:100%;">${renderMapPins()}<div id="placeListPanel">${renderPlaceList()}</div></div></section>`;
}
function renderMapSectionPanel(sectionKey){
  return `<section class="simple-info-subpanel is-active" data-map-section="${escapeHtml(sectionKey||'places')}">${renderPlaceManagementPanel()}</section>`;
}
function renderMapPanelHtml(){
  loadPlaces();
  hydratePlacesMissingCoordinates();
  return `<tbody><tr><td class="simple-info-cell"><section class="simple-info-panel simple-info-panel-map" aria-label="MAP">${renderMapSectionPanel('places')}</section></td></tr></tbody>`;
}
function getNewsProgrammingStatusClass(status=''){
  const normalized=String(status||'').trim();
  if(normalized==='생방') return 'is-live';
  return 'is-recorded';
}
function padNewsProgrammingNumber(value){
  return String(value).padStart(2,'0');
}
function shiftNewsProgrammingDate(dateKey='', dayOffset=0){
  const normalized=String(dateKey||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  const baseDate=new Date(`${normalized}T12:00:00`);
  if(Number.isNaN(baseDate.getTime())) return normalized;
  baseDate.setDate(baseDate.getDate()+Number(dayOffset||0));
  return `${baseDate.getFullYear()}-${padNewsProgrammingNumber(baseDate.getMonth()+1)}-${padNewsProgrammingNumber(baseDate.getDate())}`;
}
function getNewsProgrammingWeekdayLabel(dateKey=''){
  const normalized=String(dateKey||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  const baseDate=new Date(`${normalized}T12:00:00`);
  if(Number.isNaN(baseDate.getTime())) return normalized;
  const weekdayLabels=['일','월','화','수','목','금','토'];
  return `${normalized} (${weekdayLabels[baseDate.getDay()]})`;
}
function convertKoreaTimeToLocalSlot(koreaTime='00:00'){
  const [hourText='0', minuteText='0']=String(koreaTime||'00:00').split(':');
  const koreaMinutes=(Number(hourText)||0)*60+(Number(minuteText)||0);
  const localMinutes=koreaMinutes-(15*60);
  const normalizedMinutes=((localMinutes%(24*60))+(24*60))%(24*60);
  const localDayOffset=Math.floor(localMinutes/(24*60));
  return {
    localDayOffset,
    localTime:`${padNewsProgrammingNumber(Math.floor(normalizedMinutes/60))}:${padNewsProgrammingNumber(normalizedMinutes%60)}`
  };
}
function getNewsProgrammingProgramKey(title=''){
  const normalized=String(title||'').trim();
  if(!normalized) return '프로그램';
  if(normalized==='JTBC 뉴스룸') return '뉴스룸';
  return normalized;
}
function buildBaseNewsProgrammingSchedules(dateKey=''){
  const normalizedDate=String(dateKey||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  return NEWS_PROGRAMMING_TEMPLATE.map(item=>{
    const localSlot=convertKoreaTimeToLocalSlot(item.koreaTime);
    return {
      id:`${item.baseId}-${normalizedDate}`,
      date:normalizedDate,
      localDayOffset:localSlot.localDayOffset,
      localTime:localSlot.localTime,
      koreaTime:String(item.koreaTime||'').trim()||'00:00',
      title:item.title,
      programKey:getNewsProgrammingProgramKey(item.title),
      status:item.status,
      memo:String(item.memo||''),
      isBaseSchedule:true
    };
  });
}
function getNewsProgrammingTimeOptionKey(item={}){
  return [
    String(item.date||'').trim(),
    String(item.localHour??'').trim()
  ].join('|');
}
function getActiveNewsProgrammingDateKey(){
  ensureNewsProgrammingDateIsToday();
  return String(currentNewsProgrammingFilters.date||getTodayTimelineKey()).trim()||getTodayTimelineKey();
}
function getNewsProgrammingTimeOptions(){
  const selectedDate=getActiveNewsProgrammingDateKey();
  return Array.from({length:24}, (_, hour)=>({
    date:selectedDate,
    localHour:hour,
    localDayOffset:0,
    localTime:`${padNewsProgrammingNumber(hour)}:00`,
    koreaTime:`${padNewsProgrammingNumber((hour+15)%24)}:00`,
    koreaDayOffset:hour+15>=24?1:0,
    key:getNewsProgrammingTimeOptionKey({date:selectedDate, localHour:hour})
  }));
}
function getNewsProgrammingTimeOptionLabel(option={}){
  const localTime=String(option.localTime||'--:--').trim()||'--:--';
  const koreaTime=String(option.koreaTime||'--:--').trim()||'--:--';
  const koreaDayLabel=Number(option.koreaDayOffset||0)>0?'익일 ':'';
  return `현지시각 ${localTime} / 한국시각 ${koreaDayLabel}${koreaTime}`;
}
function getSelectedNewsProgrammingTimeOption(){
  loadNewsProgrammingState();
  const options=getNewsProgrammingTimeOptions();
  const selectedKey=String(currentNewsProgrammingSpecialForm.timeKey||'').trim();
  return options.find(option=>option.key===selectedKey)||options[0]||null;
}
function getSortedNewsProgrammingItems(dateKey=''){
  loadNewsProgrammingState();
  const selectedDate=String(dateKey||getActiveNewsProgrammingDateKey()).trim()||getTodayTimelineKey();
  return [...buildBaseNewsProgrammingSchedules(selectedDate), ...newsProgrammingSpecialEntries]
    .filter(item=>!selectedDate||item.date===selectedDate)
    .sort((a,b)=>{
      const dayOffsetDiff=(Number(a.localDayOffset)||0)-(Number(b.localDayOffset)||0);
      if(dayOffsetDiff!==0) return dayOffsetDiff;
      const timeDiff=String(a.localTime||'').localeCompare(String(b.localTime||''));
      if(timeDiff!==0) return timeDiff;
      const specialOrderDiff=Number(Boolean(a.isSpecialEntry))-Number(Boolean(b.isSpecialEntry));
      if(specialOrderDiff!==0) return specialOrderDiff;
      return Number(a.createdAt||0)-Number(b.createdAt||0);
    });
}
function getFilteredNewsProgrammingItems(){
  return getSortedNewsProgrammingItems(getActiveNewsProgrammingDateKey());
}
function formatProgrammingDateNavLabel(dateKey=''){
  const normalized=String(dateKey||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  const baseDate=new Date(`${normalized}T12:00:00`);
  if(Number.isNaN(baseDate.getTime())) return normalized.replace(/-/g,'/');
  const weekNames=['일','월','화','수','목','금','토'];
  return `${baseDate.getFullYear()}년 ${baseDate.getMonth()+1}월 ${baseDate.getDate()}일 (${weekNames[baseDate.getDay()]})`;
}
function getProgrammingDateTimeLabel(){
  const localTime=formatHeaderClock('America/Mexico_City');
  const koreaTime=formatHeaderClock('Asia/Seoul');
  return `현지시각 ${localTime} / 한국시각 ${koreaTime}`;
}
function normalizeNewsProgrammingMemoText(value=''){
  return String(value||'').replace(/\s+/g,' ').trim();
}
function getTodayLocalDateString(){
  const now=new Date();
  const year=now.getFullYear();
  const month=String(now.getMonth()+1).padStart(2,'0');
  const day=String(now.getDate()).padStart(2,'0');
  return `${year}-${month}-${day}`;
}
function sanitizeCellValue(value){
  if(value===undefined||value===null) return '';
  if(value instanceof Date&&!Number.isNaN(value.getTime())){
    const year=value.getFullYear();
    const month=String(value.getMonth()+1).padStart(2,'0');
    const day=String(value.getDate()).padStart(2,'0');
    return `${year}-${month}-${day}`;
  }
  if(Array.isArray(value)){
    return value.map(item=>sanitizeCellValue(item)).filter(item=>String(item).trim()!=='').join(', ');
  }
  if(typeof value==='object'){
    try{
      return JSON.stringify(value);
    }catch(error){
      return String(value);
    }
  }
  return String(value);
}
function ensureXlsxLibraryReady(){
  if(typeof XLSX!=='undefined'&&XLSX?.utils&&typeof XLSX.writeFile==='function') return true;
  if(typeof window!=='undefined'&&typeof window.alert==='function'){
    window.alert('엑셀 라이브러리를 불러오지 못했습니다. 잠시 뒤 다시 시도해주세요.');
  }
  return false;
}
function sanitizeWorksheetName(name='Sheet'){
  const normalized=String(name||'Sheet').replace(/[\[\]\*\/\\\?:]/g,' ').replace(/\s+/g,' ').trim()||'Sheet';
  return normalized.slice(0, 31);
}
function sanitizeExcelFileName(fileName='export.xlsx'){
  return String(fileName||'export.xlsx').replace(/[\\/:*?"<>|]/g,'_');
}
function createWorksheetFromRows(rows){
  const sourceRows=Array.isArray(rows)&&rows.length ? rows : [{'데이터':'데이터 없음'}];
  const normalizedRows=sourceRows.map(row=>{
    if(Array.isArray(row)){
      return row.reduce((acc, value, index)=>{
        acc[`열${index+1}`]=sanitizeCellValue(value);
        return acc;
      }, {});
    }
    if(row&&typeof row==='object'){
      return Object.entries(row).reduce((acc, [key, value])=>{
        acc[key]=sanitizeCellValue(value);
        return acc;
      }, {});
    }
    return {값:sanitizeCellValue(row)};
  });
  return XLSX.utils.json_to_sheet(normalizedRows);
}
function appendWorksheetFromRows(workbook, sheetName, rows){
  const safeName=sanitizeWorksheetName(sheetName);
  const existingNames=new Set(workbook.SheetNames||[]);
  let nextName=safeName;
  let suffix=2;
  while(existingNames.has(nextName)){
    const suffixText=`_${suffix}`;
    nextName=`${safeName.slice(0, 31-suffixText.length)}${suffixText}`;
    suffix+=1;
  }
  XLSX.utils.book_append_sheet(workbook, createWorksheetFromRows(rows), nextName);
}
function downloadWorkbook(workbook, fileName){
  if(!ensureXlsxLibraryReady()||!workbook) return false;
  XLSX.writeFile(workbook, sanitizeExcelFileName(fileName));
  return true;
}
function createExportWorkbook(){
  if(!ensureXlsxLibraryReady()) return null;
  return XLSX.utils.book_new();
}
function getExportTimestampParts(date=new Date()){
  const year=date.getFullYear();
  const month=String(date.getMonth()+1).padStart(2,'0');
  const day=String(date.getDate()).padStart(2,'0');
  const hour=String(date.getHours()).padStart(2,'0');
  const minute=String(date.getMinutes()).padStart(2,'0');
  return {date:`${year}-${month}-${day}`, time:`${hour}:${minute}`, compactTime:`${hour}${minute}`};
}
function sanitizeTextFileName(fileName='export.txt'){
  return String(fileName||'export.txt').replace(/[\\/:*?"<>|]/g,'_');
}
function downloadTextFile(text, fileName){
  if(typeof document==='undefined'||typeof URL==='undefined') return false;
  const blob=new Blob([`\ufeff${text}`], {type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=sanitizeTextFileName(fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return true;
}
function getExportGeneratedAtLabel(date=new Date()){
  const parts=getExportTimestampParts(date);
  return `${parts.date} ${parts.time}`;
}
function formatExportDateLabel(dateKey=''){
  const normalized=String(dateKey||'').trim();
  if(!normalized) return '';
  const match=normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!match) return normalized;
  const date=new Date(`${normalized}T12:00:00`);
  if(Number.isNaN(date.getTime())) return normalized;
  const weekdays=['일','월','화','수','목','금','토'];
  return `${normalized} (${weekdays[date.getDay()]})`;
}
function formatExportEquipmentLabel(value=''){
  return String(value||'').trim().replace(/^(TVU\s+\d+번)\s+(TRS\s+\d+)$/i, '$1 / $2');
}
function appendExportField(lines, label, value){
  const text=String(value||'').trim();
  if(text) lines.push(`${label}: ${text}`);
}
function buildTimelineExportTextBody(){
  const rows=getTimelineExportRows();
  if(!rows.length) return '내보낼 일정이 없습니다.';
  const blocks=rows.map(row=>{
    const lines=[];
    appendExportField(lines, '날짜', formatExportDateLabel(row.날짜));
    appendExportField(lines, '담당자', row.취재기자);
    appendExportField(lines, '현지시각', row.시간);
    appendExportField(lines, '한국시각', row.시간 ? formatKoreaTimeLabel(row.시간) : '');
    appendExportField(lines, '활동', row.내용);
    appendExportField(lines, '장소', row.장소);
    appendExportField(lines, '장비', formatExportEquipmentLabel(row.장비));
    appendExportField(lines, '메모', row.메모);
    return lines.join('\r\n');
  });
  return blocks.join('\r\n--------------------------------------------------\r\n\r\n');
}
function buildTimelineTextExport(){
  const generatedAt=getExportGeneratedAtLabel();
  return [
    '[일정 내보내기]',
    '',
    '제목: 일정 타임라인',
    `생성일시: ${generatedAt}`,
    '',
    '--------------------------------------------------',
    buildTimelineExportTextBody(),
    '--------------------------------------------------',
    ''
  ].join('\r\n');
}
function buildEquipmentRowsText(rows=[]){
  if(!Array.isArray(rows)||!rows.length) return '내보낼 장비 데이터가 없습니다.';
  return rows.map(row=>{
    const lines=[];
    appendExportField(lines, '장비명', row.장비);
    appendExportField(lines, '모델명', row.모델명);
    appendExportField(lines, '제조사', row.제조사);
    appendExportField(lines, '시리얼넘버', row.시리얼넘버);
    appendExportField(lines, '수량', row.수량);
    appendExportField(lines, '사용자', row.사용자);
    appendExportField(lines, '비고', row.비고||'-');
    return lines.join('\r\n');
  }).join('\r\n--------------------------------------------------\r\n\r\n');
}
function buildPersonalEquipmentText(){
  return EQUIPMENT_SHARED_USERS.map(user=>{
    const rows=getPersonalEquipmentExportRowsByUser(user);
    return [
      `[${user} 개별장비]`,
      '',
      buildEquipmentRowsText(rows)
    ].join('\r\n');
  }).join('\r\n\r\n');
}
function buildAllTextExport(){
  const generatedAt=getExportGeneratedAtLabel();
  return [
    '[전체 내보내기]',
    '',
    '프로젝트: 2026 북중미 월드컵 영상취재 가이드라인',
    `생성일시: ${generatedAt}`,
    '',
    '==============================',
    '[1. 일정 타임라인]',
    '==============================',
    '',
    buildTimelineExportTextBody(),
    '',
    '==============================',
    '[2. 장비종합현황]',
    '==============================',
    '',
    buildEquipmentRowsText(getSharedEquipmentExportRows()),
    '',
    '==============================',
    '[3. 개별장비]',
    '==============================',
    '',
    buildPersonalEquipmentText(),
    ''
  ].join('\r\n');
}
function getTimelineDetailExportRows(){
  ensureTimelineDataReady();
  loadPersonalTimelineDetailSelections();
  return Object.keys(personalTimelineDetailSelections).sort().flatMap(dateKey=>{
    const people=personalTimelineDetailSelections[dateKey]||{};
    return personalTimelineMemberNames.flatMap(name=>{
      const entries=Array.isArray(people[name]) ? people[name] : [];
      return entries.map((detail, entryIndex)=>{
        const hasValue=personalTimelineDetailFields.some(field=>String(detail?.[field]||'').trim());
        if(!hasValue) return null;
        const reporterNames=[name, detail?.취재기자].map(value=>String(value||'').trim()).filter(Boolean).join(' / ');
        return {
          날짜:dateKey,
          시간:detail?.시간||'',
          장소:detail?.장소||'',
          취재기자:reporterNames,
          장비:detail?.TVU ? getPersonalTimelineOptionLabel('TVU', detail.TVU) : '',
          내용:detail?.업무내용 ? getPersonalTimelineTaskReportLabel(detail.업무내용) : '',
          메모:buildPersonalTimelineReportText(name, detail)||`개별 일정 ${entryIndex+1}`
        };
      }).filter(Boolean);
    });
  });
}
function getTimelineSharedExportRows(){
  ensureTimelineDataReady();
  loadPersonalTimelineSharedEntries();
  return Object.keys(personalTimelineSharedEntries).sort().flatMap(dateKey=>{
    const entries=getPersonalTimelineSharedEntries(dateKey);
    return entries.map((entry, entryIndex)=>({
      날짜:dateKey,
      시간:'',
      장소:'',
      취재기자:'영상취재팀 공동',
      장비:'',
      내용:String(entry?.text||'').trim()||`공용 일정 ${entryIndex+1}`,
      메모:(entry?.images||[]).map(image=>image.name).filter(Boolean).join(', ')
    }));
  });
}
function getTimelineAssignmentExportRows(){
  ensureTimelineDataReady();
  const rows=[];
  timelineEditableLabels.forEach(label=>{
    const assignments=timelineAssignments[label];
    if(!assignments) return;
    assignments.forEach((value, dateKey)=>{
      const text=String(value||'').trim();
      if(!text) return;
      const hasStructuredShared=label==='영상취재팀 공동'&&normalizePersonalTimelineSharedEntries(personalTimelineSharedEntries[dateKey]).length>0;
      if(hasStructuredShared) return;
      rows.push({
        날짜:dateKey,
        시간:'',
        장소:'',
        취재기자:label,
        장비:'',
        내용:text,
        메모:''
      });
    });
  });
  return rows;
}
function compareTimelineExportRows(a, b){
  const dateCompare=String(a.날짜||'').localeCompare(String(b.날짜||''));
  if(dateCompare) return dateCompare;
  const aTime=String(a.시간||'99:99');
  const bTime=String(b.시간||'99:99');
  const timeCompare=aTime.localeCompare(bTime);
  if(timeCompare) return timeCompare;
  return String(a.취재기자||'').localeCompare(String(b.취재기자||''), 'ko');
}
function getTimelineExportRows(){
  return [
    ...getTimelineSharedExportRows(),
    ...getTimelineDetailExportRows(),
    ...getTimelineAssignmentExportRows()
  ].sort(compareTimelineExportRows);
}
function getEquipmentExportRowsFromRows(rows=[]){
  const headers=getEquipmentHeaders('shared');
  return (Array.isArray(rows)?rows:[])
    .map(normalizeEquipmentRowValues)
    .filter(isEquipmentRowTouched)
    .map(row=>headers.reduce((acc, header, index)=>{
      acc[header]=row[index]||'';
      return acc;
    }, {}));
}
function getSharedEquipmentExportRows(){
  ensureEquipmentEditorEntries();
  return getEquipmentExportRowsFromRows(getEquipmentRows('shared'));
}
function getPersonalEquipmentExportRowsByUser(userName){
  const normalizedUser=String(userName||'').trim();
  ensureEquipmentEditorEntries();
  return getEquipmentExportRowsFromRows(getEquipmentRows('personal', normalizedUser));
}
function buildPersonalEquipmentSheets(workbook, userName=''){
  if(!workbook) return;
  const normalizedUser=String(userName||'').trim();
  const users=normalizedUser ? [normalizedUser] : EQUIPMENT_SHARED_USERS;
  users.forEach(user=>{
    appendWorksheetFromRows(workbook, `개별장비_${user}`, getPersonalEquipmentExportRowsByUser(user));
  });
}
function exportTimelineExcel(){
  const timestamp=getExportTimestampParts();
  downloadTextFile(buildTimelineTextExport(), `일정내보내기_${timestamp.date}_${timestamp.compactTime}.txt`);
}
function exportEquipmentExcel(){
  const workbook=createExportWorkbook();
  if(!workbook) return;
  appendWorksheetFromRows(workbook, '장비종합현황', getSharedEquipmentExportRows());
  buildPersonalEquipmentSheets(workbook);
  downloadWorkbook(workbook, `월드컵_장비종합현황_${getTodayLocalDateString()}.xlsx`);
}
function exportPersonalEquipmentExcel(userName){
  const normalizedUser=String(userName||currentEquipmentUser||EQUIPMENT_SHARED_USERS[0]||'').trim();
  const workbook=createExportWorkbook();
  if(!workbook||!normalizedUser) return;
  appendWorksheetFromRows(workbook, `개별장비_${normalizedUser}`, getPersonalEquipmentExportRowsByUser(normalizedUser));
  downloadWorkbook(workbook, `월드컵_개별장비_${normalizedUser}_${getTodayLocalDateString()}.xlsx`);
}
function exportAllExcel(){
  const timestamp=getExportTimestampParts();
  downloadTextFile(buildAllTextExport(), `전체내보내기_${timestamp.date}_${timestamp.compactTime}.txt`);
}
function normalizeDatedTickerText(value='', fallbackDate=getTodayLocalDateString()){
  if(value&&typeof value==='object'){
    return {
      text:normalizeNewsProgrammingMemoText(value.text ?? value.value ?? ''),
      date:String(value.date||fallbackDate).trim()||fallbackDate
    };
  }
  return {
    text:normalizeNewsProgrammingMemoText(value),
    date:fallbackDate
  };
}
function normalizeDatedTickerTextItems(items=[]){
  const today=getTodayLocalDateString();
  if(!Array.isArray(items)) return [];
  return items
    .map(item=>{
      if(typeof item==='string'){
        return {
          text:String(item||'').trim(),
          date:today,
          allowHtml:false
        };
      }
      if(item&&typeof item==='object'){
        return {
          text:String(item.text??item.value??'').trim(),
          date:String(item.date||item.dateKey||today).trim()||today,
          allowHtml:Boolean(item.allowHtml)
        };
      }
      return null;
    })
    .filter(item=>item&&item.text);
}
function createDatedMemoStoragePayload(nextMemos=currentNewsProgrammingSavedMemos){
  const today=getTodayLocalDateString();
  return Object.entries(nextMemos||{}).reduce((acc, [key, value])=>{
    const normalizedKey=String(key||'').trim();
    const normalizedText=normalizeNewsProgrammingMemoText(value);
    if(!normalizedKey||normalizedKey.startsWith('__')||!normalizedText) return acc;
    acc[normalizedKey]={text:normalizedText, date:today};
    return acc;
  }, {__savedDate:today});
}
function getNewsProgrammingMemoTickerSourceItems(){
  ensureNewsProgrammingLocalPersistenceLoaded();
  const baseProgramSpecs=[
    {keys:['아침&'], label:'아침&'},
    {keys:['장르만 머니','장르가 머니'], label:'장르만 머니'},
    {keys:['이가혁 라이브'], label:'이가혁 라이브'},
    {keys:['뉴스룸','JTBC 뉴스룸'], label:'뉴스룸'},
    {keys:['사건반장'], label:'사건반장'}
  ];
  const baseItems=baseProgramSpecs.map(spec=>{
    const matchedKey=spec.keys.find(key=>normalizeNewsProgrammingMemoText(currentNewsProgrammingSavedMemos[key]||''));
    if(!matchedKey) return null;
    return {
      programKey:spec.label,
      memo:normalizeNewsProgrammingMemoText(currentNewsProgrammingSavedMemos[matchedKey]||''),
      date:getTodayLocalDateString(),
      isSpecialEntry:false
    };
  }).filter(Boolean);
  const today=getTodayLocalDateString();
  const specialItems=newsProgrammingSpecialEntries
    .filter(item=>String(item?.date||'').trim()===today)
    .map(item=>({
      programKey:'특보',
      memo:normalizeNewsProgrammingMemoText(item?.memo||''),
      date:item?.date||today,
      isSpecialEntry:true
    }))
    .filter(item=>item.memo);
  return [...baseItems, ...specialItems];
}
function getNewsProgrammingMemoTickerItems(){
  const allItems=getNewsProgrammingMemoTickerSourceItems();
  return allItems
    .filter(item=>item.memo&&normalizeNewsProgrammingMemoText(item.memo)!=='')
    .map(item=>`[${String(item.programKey||item.title||'프로그램').trim()||'프로그램'}] ${normalizeNewsProgrammingMemoText(item.memo)}`);
}
function getNewsProgrammingMemoTickerText(){
  const items=getNewsProgrammingMemoTickerItems();
  if(!items.length) return '';
  return items.join('  •  ');
}
function loadTicker(){
  if(typeof window==='undefined'||!window.localStorage) return;
  try{
    const saved=window.localStorage.getItem(TICKER_STATE_STORAGE_KEY);
    if(!saved) return;
    const parsed=JSON.parse(saved);
    const today=getTodayLocalDateString();
    const normalizedSchedule=normalizeDatedTickerText(parsed?.schedule&&typeof parsed.schedule==='object' ? parsed.schedule : {text:parsed?.schedule||'', date:parsed?.scheduleDate||today}, today);
    const normalizedMemo=normalizeDatedTickerText(parsed?.memo&&typeof parsed.memo==='object' ? parsed.memo : {text:parsed?.memo||'', date:parsed?.memoDate||today}, today);
    tickerState.schedule=normalizedSchedule.date===today ? normalizedSchedule.text : '';
    tickerState.scheduleDate=tickerState.schedule ? today : '';
    tickerState.memo=normalizedMemo.date===today ? normalizedMemo.text : '';
    tickerState.memoDate=tickerState.memo ? today : '';
    window.localStorage.setItem(TICKER_STATE_STORAGE_KEY, JSON.stringify(tickerState));
    const scheduleInput=document.querySelector('#scheduleInput');
    const memoInput=document.querySelector('#memoInput');
    if(scheduleInput) scheduleInput.value=tickerState.schedule;
    if(memoInput) memoInput.value=tickerState.memo;
  }catch(error){
    tickerState.schedule='';
    tickerState.scheduleDate='';
    tickerState.memo='';
    tickerState.memoDate='';
  }
}
function saveTicker(){
  if(typeof window==='undefined'||!window.localStorage) return;
  const today=getTodayLocalDateString();
  const scheduleInput=document.querySelector('#scheduleInput');
  const memoInput=document.querySelector('#memoInput');
  if(scheduleInput){
    tickerState.schedule=String(scheduleInput.value||'').trim();
    tickerState.scheduleDate=tickerState.schedule ? today : '';
  }
  if(memoInput){
    tickerState.memo=String(memoInput.value||'').trim();
    tickerState.memoDate=tickerState.memo ? today : '';
  }
  window.localStorage.setItem(TICKER_STATE_STORAGE_KEY, JSON.stringify(tickerState));
  renderTicker();
}
function renderTicker(){
  const line1=document.querySelector('#tickerLine1');
  const line2=document.querySelector('#tickerLine2');
  const today=getTodayLocalDateString();
  const visibleSchedule=tickerState.scheduleDate===today ? tickerState.schedule : '';
  const visibleMemo=tickerState.memoDate===today ? tickerState.memo : '';
  if(line1) line1.innerText=visibleSchedule;
  if(line2) line2.innerText=visibleMemo;
  renderAllBoards();
}
function buildTickerMarkup(items=[], options={}){
  const {allowHtml=false, speedClass=''}=options||{};
  const normalizedItems=(Array.isArray(items)?items:[])
    .map(item=>String(item||'').trim())
    .filter(Boolean);
  if(!normalizedItems.length) return '';

  const baseItems=normalizedItems.map(item=>`<span class="board-item">${allowHtml ? item : escapeHtml(item)}</span>`);
  const sourceCharCount=normalizedItems.reduce((total, item)=>total+String(item).length, 0);
  const minimumItemCount=Math.max(12, normalizedItems.length*4);
  const minimumCharCount=240;
  const repeatedItems=[];
  let currentCharCount=0;

  while(repeatedItems.length<minimumItemCount || currentCharCount<minimumCharCount){
    repeatedItems.push(...baseItems);
    currentCharCount+=sourceCharCount;
    if(repeatedItems.length>96) break;
  }

  const repeatedMarkup=repeatedItems.join('');
  const normalizedSpeedClass=String(speedClass||'').trim();
  const speedClassAttr=normalizedSpeedClass ? ` ${normalizedSpeedClass}` : '';
  return `<span class="header-report-board-inline-marquee-copy${speedClassAttr}">${repeatedMarkup}</span><span class="header-report-board-inline-marquee-copy${speedClassAttr}" aria-hidden="true">${repeatedMarkup}</span>`;
}
function renderHeaderProgrammingTickerLine(track, text='', options={}){
  if(!track) return;
  const {allowHtml=false, items=null, speedClass=''}=options||{};
  if(Array.isArray(items)&&items.length){
    const renderedMarkup=buildTickerMarkup(items, {allowHtml, speedClass});
    const normalizedSpeedClass=String(speedClass||'').trim();
    const speedClassAttr=normalizedSpeedClass ? ` ${normalizedSpeedClass}` : '';
    const nextHtml=`<div class="header-report-board-page"><div class="header-report-board-row header-report-board-row-marquee"><div class="header-report-board-line"><div class="header-report-board-inline-marquee"><div class="header-report-board-inline-marquee-track${speedClassAttr}">${renderedMarkup}</div></div></div></div></div>`;
    if(track.__renderedTickerHtml===nextHtml) return;
    track.__renderedTickerHtml=nextHtml;
    track.innerHTML=nextHtml;
    return;
  }
  const normalized=String(text||'').trim()||' ';
  const repeatedText=`${normalized}   •   ${normalized}`;
  const renderedText=allowHtml ? repeatedText : escapeHtml(repeatedText);
  const nextHtml=`<div class="header-report-board-page"><div class="header-report-board-row header-report-board-row-marquee"><div class="header-report-board-line"><div class="header-report-board-inline-marquee"><div class="header-report-board-inline-marquee-track"><span class="header-report-board-inline-marquee-copy">${renderedText}</span><span class="header-report-board-inline-marquee-copy" aria-hidden="true">${renderedText}</span></div></div></div></div></div>`;
  if(track.__renderedTickerHtml===nextHtml) return;
  track.__renderedTickerHtml=nextHtml;
  track.innerHTML=nextHtml;
}
function formatKoreaTimeLabel(localTime=''){
  const raw=String(localTime||'').trim();
  const match=raw.match(/^(\d{2}):(\d{2})$/);
  if(!match) return '';
  const hour=Number(match[1]);
  const minute=match[2];
  const koreaHourTotal=hour+15;
  const koreaDayOffset=Math.floor(koreaHourTotal/24);
  const koreaHour=String(koreaHourTotal%24).padStart(2,'0');
  return `${koreaHour}:${minute}${koreaDayOffset>0?`(+${koreaDayOffset}일)`:''}`;
}
function formatEquipmentLabel(detail={}){
  const tvuLabel=String(getPersonalTimelineOptionLabel('TVU', detail?.TVU||'')||'').trim();
  return tvuLabel||'무장비';
}
function normalizeTvuNumberValue(value){
  const text=String(value||'').trim();
  if(!text) return '';
  if(TVU_NUMBER_LEGACY_MAP[text]) return TVU_NUMBER_LEGACY_MAP[text];
  const match=text.match(/^TVU\s*(\d+)\s*번?(?:\s+TRS\s+\d+)?$/i)||text.match(/^(\d+)\s*번?$/);
  if(!match) return text;
  const normalized=`${match[1]}번`;
  return TVU_NUMBER_LEGACY_MAP[normalized]||normalized;
}
function joinReporterNames(name='', reporter=''){
  return buildPersonalTimelineParticipantLabel(name, reporter);
}
function formatPrimaryReporterTag(name='', reporter=''){
  const primaryName=String(name||'').trim();
  const secondaryName=String(reporter||'').trim();
  const singleName=primaryName||secondaryName;
  return singleName ? `<span class="board-label-tag main">${escapeHtml(singleName)}</span>` : '';
}
function formatReporterPairLabel(name='', reporter=''){
  return buildPersonalTimelineParticipantLabel(name, reporter);
}
function formatScheduleTickerItem(schedule){
  const detail=schedule?.detail||{};
  const primaryReporterTag=formatPrimaryReporterTag(schedule?.name||'', detail.취재기자||'');
  const reporterPairLabel=formatReporterPairLabel(schedule?.name||'', detail.취재기자||'');
  const localTime=String(detail.시간||'').trim();
  const koreaTimeLabel=formatKoreaTimeLabel(localTime);
  const timeLabel=localTime ? `현지 ${localTime}${koreaTimeLabel?` / 한국 ${koreaTimeLabel}`:''}` : '';
  const taskLabel=String(getPersonalTimelineTaskReportLabel(detail.업무내용||'')||'').trim();
  const placeLabel=String(detail.장소||'').trim();
  const equipmentLabel=formatEquipmentLabel(detail);
  const actionParts=[];
  if(taskLabel&&placeLabel){
    actionParts.push(`${taskLabel}를 ${placeLabel}에서`);
  }else if(taskLabel){
    actionParts.push(`${taskLabel} 진행`);
  }else if(placeLabel){
    actionParts.push(`${placeLabel}에서`);
  }
  if(equipmentLabel){
    actionParts.push(equipmentLabel==='무장비' ? '무장비로 진행' : `${equipmentLabel}을 가지고 진행`);
  }
  const textParts=[reporterPairLabel, timeLabel, actionParts.join(' ')].filter(Boolean).join(' ');
  const safeText=escapeHtml(textParts);
  return `${primaryReporterTag}${safeText?` ${safeText}`:''}`.trim();
}
function getAllUpcomingScheduleTickerEntries(){
  loadPersonalTimelineDetailSelections();
  const today=getTodayLocalDateString();
  return Object.keys(personalTimelineDetailSelections)
    .sort()
    .filter(dateKey=>String(dateKey||'').trim()===today)
    .flatMap(dateKey=>getPersonalTimelineGeneratedReportsForDate(dateKey).map(item=>{
      const entryTimeZone=getPersonalTimelineEntryTimeZone(item.detail);
      const scheduleSort=getPersonalTimelineScheduleSortValue(item.dateKey, item.detail?.시간||'');
      const nowSort=getTimeZoneNowSortValue(entryTimeZone);
      return {
        ...item,
        entryTimeZone,
        scheduleSort,
        nowSort,
        isUpcoming:scheduleSort>=nowSort
      };
    }))
    .filter(item=>item.isUpcoming)
    .sort((a,b)=>{
      if(a.scheduleSort!==b.scheduleSort) return a.scheduleSort-b.scheduleSort;
      if(a.dateKey!==b.dateKey) return String(a.dateKey).localeCompare(String(b.dateKey));
      if(a.name!==b.name) return String(a.name).localeCompare(String(b.name));
      return Number(a.entryIndex||0)-Number(b.entryIndex||0);
    });
}
function getScheduleBoardItems(){
  const today=getTodayLocalDateString();
  return normalizeDatedTickerTextItems(getAllUpcomingScheduleTickerEntries()
    .map(item=>({
      text:formatScheduleTickerItem(item),
      date:item.dateKey,
      allowHtml:true
    })))
    .filter(item=>item.date===today)
    .map(item=>item.text)
    .filter(Boolean);
}
function getNoticeBoardItems(){
  const today=getTodayLocalDateString();
  return normalizeDatedTickerTextItems(getNewsProgrammingMemoTickerSourceItems()
    .map(item=>{
      const normalizedProgram=String(item?.programKey||item?.title||'').trim();
      const normalizedMemo=normalizeNewsProgrammingMemoText(item?.memo||'');
      if(!normalizedProgram||!normalizedMemo) return null;
      return {
        text:`<span class="board-label-tag">${escapeHtml(normalizedProgram)}</span> ${escapeHtml(normalizedMemo)}`,
        date:item?.date||today,
        allowHtml:true
      };
    }))
    .filter(item=>item.date===today)
    .map(item=>item.text)
    .filter(Boolean);
}
function renderScheduleBoard(){
  const track=document.getElementById('headerScheduleBoardTrack');
  if(!track) return;
  const today=getTodayLocalDateString();
  const manualSchedule=tickerState.scheduleDate===today ? String(tickerState.schedule||'').trim() : '';
  const items=getScheduleBoardItems();
  const renderItems=items.length ? items : (manualSchedule ? [manualSchedule] : ['오늘 등록된 편성 일정이 없습니다']);
  track.classList.add('is-animated');
  renderHeaderProgrammingTickerLine(track, '', {allowHtml:items.length>0, items:renderItems, speedClass:'schedule-speed'});
  ensureTimelineExportButton();
  applyMobileTimelineAStructure();
}
function renderNoticeBoard(){
  const track=document.getElementById('headerNoticeBoardTrack');
  if(!track) return;
  const today=getTodayLocalDateString();
  const manualMemo=tickerState.memoDate===today ? String(tickerState.memo||'').trim() : '';
  const items=getNoticeBoardItems();
  const renderItems=items.length ? items : (manualMemo ? [manualMemo] : ['오늘 등록된 운영 메모가 없습니다']);
  track.classList.add('is-animated');
  renderHeaderProgrammingTickerLine(track, '', {allowHtml:items.length>0, items:renderItems, speedClass:'notice-speed'});
}
function renderAllBoards(){
  renderScheduleBoard();
  renderNoticeBoard();
}
function renderProgrammingBoard(){
  renderAllBoards();
}
function refreshTicker(){
  renderProgrammingBoard();
}
function buildNewsProgrammingTimeLabel(item={}){
  const localTime=String(item.localTime||'--:--').trim()||'--:--';
  const koreaTime=String(item.koreaTime||'--:--').trim()||'--:--';
  const hasPreviousDay=Number(item.localDayOffset||0)<0;
  return `<span class="news-programming-time-text"><span class="news-programming-time-prefix">현지시각</span>${hasPreviousDay?'<span class="news-programming-day-flag">전일</span>':''}<span class="news-programming-time-value">${escapeHtml(localTime)}</span><span class="news-programming-time-divider">/</span><span class="news-programming-time-prefix">한국시각</span><span class="news-programming-time-value">${escapeHtml(koreaTime)}</span></span>`;
}
function toggleNewsProgrammingSpecialComposer(forceOpen){
  if(typeof forceOpen==='boolean'){
    isNewsProgrammingSpecialComposerOpen=forceOpen;
  }else{
    isNewsProgrammingSpecialComposerOpen=!isNewsProgrammingSpecialComposerOpen;
  }
  if(!isNewsProgrammingSpecialComposerOpen){
    isNewsProgrammingSpecialTimeMenuOpen=false;
  }else if(!String(currentNewsProgrammingSpecialForm.timeKey||'').trim()){
    currentNewsProgrammingSpecialForm.timeKey=getSelectedNewsProgrammingTimeOption()?.key||'';
  }
  rerenderNewsProgrammingPanelIfActive();
}
function toggleNewsProgrammingSpecialTimeMenu(forceOpen){
  if(typeof forceOpen==='boolean'){
    isNewsProgrammingSpecialTimeMenuOpen=forceOpen;
  }else{
    isNewsProgrammingSpecialTimeMenuOpen=!isNewsProgrammingSpecialTimeMenuOpen;
  }
  rerenderNewsProgrammingPanelIfActive();
}
function selectNewsProgrammingSpecialTime(timeKey=''){
  currentNewsProgrammingSpecialForm.timeKey=String(timeKey||'').trim();
  isNewsProgrammingSpecialTimeMenuOpen=false;
  rerenderNewsProgrammingPanelIfActive();
}
function setNewsProgrammingSpecialField(field='', value=''){
  const normalizedField=String(field||'').trim();
  if(!normalizedField||!Object.prototype.hasOwnProperty.call(currentNewsProgrammingSpecialForm, normalizedField)) return;
  currentNewsProgrammingSpecialForm[normalizedField]=String(value||'');
}
function resetNewsProgrammingSpecialForm(){
  currentNewsProgrammingSpecialForm={
    timeKey:getSelectedNewsProgrammingTimeOption()?.key||getNewsProgrammingTimeOptions()[0]?.key||'',
    status:'본방',
    title:'',
    memo:''
  };
  isNewsProgrammingSpecialTimeMenuOpen=false;
}
function submitNewsProgrammingSpecialEntry(){
  loadNewsProgrammingState();
  const selectedTimeOption=getSelectedNewsProgrammingTimeOption();
  if(!selectedTimeOption) return;
  const normalizedDate=String(selectedTimeOption.date||getActiveNewsProgrammingDateKey()).trim()||getTodayTimelineKey();
  const normalizedStatus=String(currentNewsProgrammingSpecialForm.status||'본방').trim()==='생방' ? '생방' : '본방';
  const normalizedTitle=String(currentNewsProgrammingSpecialForm.title||'').trim()||'특보 편성';
  const normalizedMemo=String(currentNewsProgrammingSpecialForm.memo||'').trim();
  newsProgrammingSpecialEntries.push({
    id:`news-programming-special-${Date.now()}`,
    date:normalizedDate,
    localDayOffset:Number(selectedTimeOption.localDayOffset)||0,
    localTime:String(selectedTimeOption.localTime||'').trim()||'--:--',
    koreaTime:String(selectedTimeOption.koreaTime||'').trim()||'--:--',
    title:normalizedTitle,
    programKey:getNewsProgrammingProgramKey(normalizedTitle),
    status:normalizedStatus,
    memo:normalizedMemo,
    isSpecialEntry:true,
    createdAt:Date.now()
  });
  resetNewsProgrammingSpecialForm();
  saveNewsProgrammingState();
  refreshTicker();
  rerenderNewsProgrammingPanelIfActive();
}
function shiftNewsProgrammingViewDate(dayOffset=0){
  loadNewsProgrammingState();
  currentNewsProgrammingFilters.date=shiftNewsProgrammingDate(getActiveNewsProgrammingDateKey(), Number(dayOffset||0));
  currentNewsProgrammingSpecialForm.timeKey=getNewsProgrammingTimeOptions()[0]?.key||'';
  isNewsProgrammingSpecialTimeMenuOpen=false;
  saveNewsProgrammingState();
  refreshTicker();
  rerenderNewsProgrammingPanelIfActive();
  focusPanelStart('#newsProgrammingPanel');
}
function clearNewsProgrammingSpecialForm(){
  resetNewsProgrammingSpecialForm();
  rerenderNewsProgrammingPanelIfActive();
}
function setNewsProgrammingMemoDraft(itemId='', value=''){
  const normalizedId=getNewsProgrammingProgramKey(itemId);
  if(!normalizedId) return;
  currentNewsProgrammingMemoDrafts[normalizedId]=String(value||'');
}
function persistNewsProgrammingMemo(itemId='', rerenderPanel=true){
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  const normalizedId=getNewsProgrammingProgramKey(itemId);
  if(!normalizedId) return;
  currentNewsProgrammingSavedMemos[normalizedId]=String(currentNewsProgrammingMemoDrafts[normalizedId]||'').trim();
  currentNewsProgrammingMemoDrafts[normalizedId]=currentNewsProgrammingSavedMemos[normalizedId];
  saveProgrammingMemos(currentNewsProgrammingSavedMemos);
  saveNewsProgrammingState();
  refreshTicker();
  if(rerenderPanel){
    rerenderNewsProgrammingPanelIfActive();
  }
}
function saveNewsProgrammingMemo(itemId=''){
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  const normalizedId=getNewsProgrammingProgramKey(itemId);
  if(!normalizedId) return;
  const textarea=document.querySelector(`.news-programming-memo-input[data-program="${normalizedId.replace(/"/g,'\\"')}"]`);
  const nextValue=textarea?.value ?? currentNewsProgrammingMemoDrafts[normalizedId] ?? '';
  setNewsProgrammingMemoDraft(normalizedId, nextValue);
  persistNewsProgrammingMemo(normalizedId, true);
}
function clearNewsProgrammingMemo(itemId=''){
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  const normalizedId=getNewsProgrammingProgramKey(itemId);
  if(!normalizedId) return;
  currentNewsProgrammingMemoDrafts[normalizedId]='';
  currentNewsProgrammingSavedMemos[normalizedId]='';
  saveProgrammingMemos(currentNewsProgrammingSavedMemos);
  saveNewsProgrammingState();
  refreshTicker();
  rerenderNewsProgrammingPanelIfActive();
}
function renderNewsProgrammingEmpty(){
  return '<div class="news-programming-empty">조건에 맞는 편성 항목이 없습니다.</div>';
}
function renderNewsProgrammingSpecialComposer(){
  if(!isNewsProgrammingSpecialComposerOpen) return '';
  const timeOptions=getNewsProgrammingTimeOptions();
  const selectedTimeOption=getSelectedNewsProgrammingTimeOption();
  const selectedTimeLabel=getNewsProgrammingTimeOptionLabel(selectedTimeOption||{});
  const selectedStatus=String(currentNewsProgrammingSpecialForm.status||'본방').trim()==='생방' ? '생방' : '본방';
  const titleValue=String(currentNewsProgrammingSpecialForm.title||'');
  const memoValue=String(currentNewsProgrammingSpecialForm.memo||'');
  return `<section class="news-programming-special-panel" aria-label="특보 카드 작성 창"><div class="news-programming-special-panel-header"><h4 class="news-programming-special-panel-title">특보 카드 작성</h4><button type="button" class="section-title-action-btn" onclick="toggleNewsProgrammingSpecialComposer(false)">닫기</button></div><div class="news-programming-special-form"><div class="simple-form-field news-programming-special-field"><span class="simple-form-label">시간</span><div class="news-programming-time-picker"><button type="button" class="news-programming-time-picker-trigger${isNewsProgrammingSpecialTimeMenuOpen?' is-open':''}" aria-expanded="${isNewsProgrammingSpecialTimeMenuOpen?'true':'false'}" onclick="toggleNewsProgrammingSpecialTimeMenu()"><span class="news-programming-time-picker-label">${escapeHtml(selectedTimeLabel)}</span><span class="news-programming-time-picker-arrow">▾</span></button>${isNewsProgrammingSpecialTimeMenuOpen?`<div class="news-programming-time-picker-menu" role="listbox" aria-label="특보 시간 선택">${timeOptions.map(option=>`<button type="button" class="news-programming-time-picker-option${selectedTimeOption&&option.key===selectedTimeOption.key?' is-selected':''}" onclick="selectNewsProgrammingSpecialTime('${escapeHtml(option.key)}')">${escapeHtml(getNewsProgrammingTimeOptionLabel(option))}</button>`).join('')}</div>`:''}</div></div><label class="simple-form-field news-programming-special-field"><span class="simple-form-label">방송</span><select class="simple-form-input news-programming-special-select" onchange="setNewsProgrammingSpecialField('status', this.value)"><option value="본방" ${selectedStatus==='본방'?'selected':''}>본방</option><option value="생방" ${selectedStatus==='생방'?'selected':''}>생방</option></select></label><label class="simple-form-field news-programming-special-field news-programming-special-field-wide"><span class="simple-form-label">특보편성 이름</span><input type="text" class="simple-form-input" value="${escapeHtml(titleValue)}" placeholder="아침&, 장르가 머니, JTBC 뉴스룸" oninput="setNewsProgrammingSpecialField('title', this.value)"></label><label class="simple-form-field news-programming-special-field news-programming-special-field-wide"><span class="simple-form-label">운영 메모</span><textarea class="simple-form-input simple-form-textarea news-programming-special-textarea" placeholder="운영 메모를 입력하세요" oninput="setNewsProgrammingSpecialField('memo', this.value)">${escapeHtml(memoValue)}</textarea></label></div><div class="news-programming-special-actions"><button type="button" class="section-title-action-btn" onclick="submitNewsProgrammingSpecialEntry()">작성</button><button type="button" class="section-title-action-btn delete" onclick="clearNewsProgrammingSpecialForm()">삭제</button></div></section>`;
}
function renderNewsProgrammingCards(items=[]){
  if(!items.length) return renderNewsProgrammingEmpty();
  return `<div class="news-programming-list">${items.map(item=>{const programKey=getNewsProgrammingProgramKey(item.programKey||item.title); const savedMemo=item.isSpecialEntry?String(item.memo||'').trim():String(currentNewsProgrammingSavedMemos[programKey]||'').trim(); const draftMemo=String(currentNewsProgrammingMemoDrafts[programKey]??item.memo??''); return `<article class="news-programming-card${item.isSpecialEntry?' is-special-entry':''}"><h4 class="news-programming-card-title">${escapeHtml(item.title||'프로그램')}</h4><div class="news-programming-card-top"><div class="news-programming-time">${buildNewsProgrammingTimeLabel(item)}</div><span class="news-programming-status-badge ${getNewsProgrammingStatusClass(item.status)}">${escapeHtml(item.status||'본방')}</span>${item.isSpecialEntry?'<span class="news-programming-type-badge">특보</span>':''}</div>${item.isSpecialEntry?`<div class="news-programming-memo-shell"><p class="news-programming-card-note">${escapeHtml(savedMemo||'운영 메모 없음')}</p></div>`:`<div class="news-programming-memo-shell"><div class="news-programming-memo-field"><textarea class="simple-form-input simple-form-textarea news-programming-memo-input" data-program="${escapeHtml(programKey)}" placeholder="운영 메모를 입력하세요" oninput="setNewsProgrammingMemoDraft('${escapeHtml(programKey)}', this.value)">${escapeHtml(draftMemo)}</textarea></div><div class="news-programming-memo-actions"><button type="button" class="section-title-action-btn" onclick="saveNewsProgrammingMemo('${escapeHtml(programKey)}')">작성</button><button type="button" class="section-title-action-btn delete" onclick="clearNewsProgrammingMemo('${escapeHtml(programKey)}')">삭제</button></div>${savedMemo?`<p class="news-programming-card-note">${escapeHtml(savedMemo)}</p>`:''}</div>`}</article>`;}).join('')}</div>`;
}
function renderNewsProgrammingPanelHtml(){
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  const activeDateKey=getActiveNewsProgrammingDateKey();
  const dateLabel=formatProgrammingDateNavLabel(activeDateKey);
  const timeLabel=getProgrammingDateTimeLabel();
  const filteredItems=renderNewsProgrammingCards(getFilteredNewsProgrammingItems());
  return `<tbody><tr><td class="simple-info-cell"><section id="newsProgrammingPanel" class="simple-info-panel news-programming-panel" aria-label="방송 편성표"><section class="news-programming-shell"><div class="programming-date-nav" id="programmingDateNav"><button type="button" id="programmingPrevDayBtn" class="date-nav-arrow" aria-label="전날로 이동" onclick="shiftNewsProgrammingViewDate(-1)">‹</button><div class="programming-date-nav-center"><div id="programmingDateLabel" class="programming-date-label">${escapeHtml(dateLabel)}</div><div id="programmingTimeLabel" class="programming-time-label">${escapeHtml(timeLabel)}</div></div><div class="programming-date-nav-actions"><button type="button" id="specialReportToggleBtn" class="section-title-action-btn news-programming-special-toggle${isNewsProgrammingSpecialComposerOpen?' is-active':''}" aria-expanded="${isNewsProgrammingSpecialComposerOpen?'true':'false'}" onclick="toggleNewsProgrammingSpecialComposer()">${isNewsProgrammingSpecialComposerOpen?'특보 닫기':'특보'}</button></div><button type="button" id="programmingNextDayBtn" class="date-nav-arrow" aria-label="다음날로 이동" onclick="shiftNewsProgrammingViewDate(1)">›</button></div>${renderNewsProgrammingSpecialComposer()}${filteredItems}</section></section></td></tr></tbody>`;
}
function ensureEquipmentEditorModal(){
  if(document.getElementById('equipmentEditorModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="equipmentEditorModal" class="news-editor-modal hidden"><div class="news-editor-modal-backdrop" onclick="closeEquipmentEditorModal()"></div><div class="news-editor-modal-panel equipment-editor-modal-panel" role="dialog" aria-modal="true" aria-labelledby="equipmentEditorModalTitle"><div class="news-editor-modal-header"><h3 id="equipmentEditorModalTitle">장비 현황 작성</h3><button type="button" class="news-editor-modal-close" onclick="closeEquipmentEditorModal()" aria-label="닫기">×</button></div><p id="equipmentEditorModalMeta" class="news-editor-modal-meta"></p><div id="equipmentEditorTableWrap" class="equipment-editor-table-wrap"></div><div class="news-editor-modal-actions"><button type="button" class="news-editor-modal-btn" onclick="closeEquipmentEditorModal()">취소</button><button type="button" class="news-editor-modal-btn primary" onclick="saveEquipmentEditorModal()">저장</button></div></div></div>`);
  document.getElementById('equipmentEditorModal').addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeEquipmentEditorModal();
    }
  });
}
function openEquipmentEditorModal(mode, user=''){
  ensureEquipmentEditorEntries();
  ensureEquipmentEditorModal();
  pendingEquipmentEditorContext={mode, user};
  const titleText=mode==='personal' ? '개인장비 현황 수정' : '장비종합현황 수정';
  document.getElementById('equipmentEditorModalTitle').textContent=titleText;
  document.getElementById('equipmentEditorModalMeta').textContent=mode==='personal' ? `${user} 개인장비 전체 작성` : '공용장비 전체 작성';
  const allHeaders=getEquipmentHeaders(mode);
  const editorHeaders=mode==='shared' ? allHeaders.slice(0, -1) : allHeaders;
  const rows=getEquipmentRows(mode, user).map(row=>mode==='shared' ? row.slice(0, -1) : row);
  document.getElementById('equipmentEditorTableWrap').innerHTML=`<table class="data-table equipment-editor-table"><thead><tr>${editorHeaders.map(label=>`<th>${label}</th>`).join('')}</tr></thead><tbody>${rows.map((row, rowIndex)=>`<tr>${row.map((value, colIndex)=>`<td><input type="text" class="equipment-editor-input" data-row-index="${rowIndex}" data-col-index="${colIndex}" value="${escapeHtml(value)}"></td>`).join('')}</tr>`).join('')}</tbody></table>`;
  document.body.classList.add('news-editor-modal-open');
  document.getElementById('equipmentEditorModal').classList.remove('hidden');
  syncMobileHistoryState();
  const firstInput=document.querySelector('.equipment-editor-input');
  if(firstInput) firstInput.focus();
}
function closeEquipmentEditorModal(){
  const modal=document.getElementById('equipmentEditorModal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('news-editor-modal-open');
  pendingEquipmentEditorContext=null;
  syncMobileHistoryState();
}
function saveEquipmentEditorModal(){
  if(!pendingEquipmentEditorContext) return;
  const {mode, user}=pendingEquipmentEditorContext;
  const rowCount=document.querySelectorAll('#equipmentEditorTableWrap tbody tr').length;
  const allHeaders=getEquipmentHeaders(mode);
  const editorHeaders=mode==='shared' ? allHeaders.slice(0, -1) : allHeaders;
  const colCount=editorHeaders.length;
  const existingRows=mode==='shared' ? getEquipmentRows(mode, user) : null;
  const rows=Array.from({length:rowCount}, (_, rowIndex)=>{
    const nextRow=Array.from({length:colCount}, (_, colIndex)=>document.querySelector(`[data-row-index="${rowIndex}"][data-col-index="${colIndex}"]`)?.value?.trim()||'');
    if(mode==='shared'){
      nextRow.push(String(existingRows?.[rowIndex]?.[allHeaders.length-1]||'').trim());
    }
    return nextRow;
  });
  setEquipmentRows(mode, user, rows);
  closeEquipmentEditorModal();
  if(mode==='personal'){
    showEquipmentPersonal(user);
  }else{
    renderEquipment();
  }
}
function clearEquipmentAndRender(mode, user=''){
  clearEquipmentRows(mode, user);
  if(mode==='personal'){
    showEquipmentPersonal(user);
  }else{
    renderEquipment();
  }
}
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
  ['에스타디오 아즈테카','azteca'],
  ['mexico city stadium','azteca'],
  ['estadio guadalajara','akron'],
  ['estadio akron','akron'],
  ['아크론스타디움','akron'],
  ['아크론스타디움, 과달라하라','akron'],
  ['에스타디오 과달라하라','akron'],
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
  ['에스타디오 bbva','bbva'],
  ['에스타디오 bbva, 몬테레이','bbva'],
  ['에스타디오 몬테레이','bbva'],
  ['monterrey stadium','bbva']
  ,
  ['estadio monterrey','bbva']
];

const PAGE_SIZE = 8;
function getSquadPageSize(){
  if(typeof window!=='undefined'&&window.innerWidth<=480) return 5;
  return PAGE_SIZE;
}
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
const personalTimelineMemberNames = personalTimelineRows.filter(row=>row.label!=='영상취재팀 공동').map(row=>row.label);
const TVU_NUMBER_OPTIONS = ['1번','15번','16번','17번','18번','19번'];
const TVU_NUMBER_LEGACY_MAP = {
  '2번':'15번',
  '3번':'16번',
  '4번':'17번',
  '5번':'18번',
  '6번':'19번'
};
const personalTimelineDetailFieldOptions = {
  시간:Array.from({length:16},(_,index)=>{
    const hour=String(index+9).padStart(2,'0');
    return `${hour}:00`;
  }),
  장소:['에스타디오 과달라하라','에스타디오 몬테레이'],
  취재기자:['전영희','온누리','홍지용','오선민','이예원','이은진'],
  TVU:TVU_NUMBER_OPTIONS,
  업무내용:['경기취재','외곽취재','밀착카메라','라이브연결','인터뷰']
};
const timelineViews = {
  personal:{title:'일정타임라인', rows:personalTimelineRows}
};
const timelineRows = [...teamTimelineRows, ...personalTimelineRows];
const timelineEditableRows = timelineRows.filter(row=>row.type!=='section');
const timelineEditableLabels = timelineEditableRows.map(row=>row.label);
const TIMELINE_STORAGE_KEY = 'worldcup-guide-timeline-assignments-v2';
const LEGACY_TIMELINE_STORAGE_KEYS = ['worldcup-guide-timeline-assignments-v1'];
const TIMELINE_WINDOW_NAME_KEY = '__worldcupGuideTimelineAssignments__';
const PERSONAL_TIMELINE_SHARED_STORAGE_KEY = 'worldcup-guide-personal-timeline-shared-v1';
const PERSONAL_TIMELINE_SHARED_WINDOW_NAME_KEY = '__worldcupGuidePersonalTimelineShared__';
const PERSONAL_TIMELINE_DETAILS_STORAGE_KEY = 'worldcup-guide-personal-timeline-details-v1';
const PERSONAL_TIMELINE_DETAILS_WINDOW_NAME_KEY = '__worldcupGuidePersonalTimelineDetails__';
const TIMELINE_GALLERY_STORAGE_KEY = 'galleryData';
const LEGACY_TIMELINE_GALLERY_STORAGE_KEYS = ['worldcup-gallery-items-v1','worldcup_timeline_gallery_v1'];
const TIMELINE_GALLERY_LEGACY_DB_NAME = 'worldcup-guide-gallery-db';
const TIMELINE_GALLERY_LEGACY_DB_VERSION = 1;
const TIMELINE_GALLERY_LEGACY_DB_STORE = 'gallery_state';
const TIMELINE_GALLERY_LEGACY_DB_RECORD_KEY = 'entries';
const HEADER_REPORT_BOARD_RECENT_STORAGE_KEY = 'worldcup-guide-header-report-board-recent-v1';
const HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY = '__worldcupGuideHeaderReportBoardRecent__';
const SHARED_STATE_SYNC_SUPABASE_URL = window.APP_CONFIG?.supabaseUrl||'';
const SHARED_STATE_SYNC_SUPABASE_ANON_KEY = window.APP_CONFIG?.supabaseAnonKey||'';
const SHARED_STATE_SYNC_TABLE = 'shared_state';
const SCHEDULES_TABLE = 'schedules';
let currentUser = null;
let schedulesRealtimeChannel = null;
const SHARED_STATE_SYNC_REGISTRY = {
  [NEWS_EDITOR_STORAGE_KEY]: {windowNameKey: NEWS_EDITOR_WINDOW_NAME_KEY},
  [NEWS_PROGRAMMING_STORAGE_KEY]: {windowNameKey: NEWS_PROGRAMMING_WINDOW_NAME_KEY},
  [SQUAD_INJURY_STORAGE_KEY]: {windowNameKey: SQUAD_INJURY_WINDOW_NAME_KEY},
  [MEXICO_STADIUM_EDITOR_STORAGE_KEY]: {windowNameKey: MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY},
  [EQUIPMENT_EDITOR_STORAGE_KEY]: {windowNameKey: EQUIPMENT_EDITOR_WINDOW_NAME_KEY},
  [EQUIPMENT_CARNET_STORAGE_KEY]: {windowNameKey: EQUIPMENT_CARNET_WINDOW_NAME_KEY},
  [MAP_LOCATION_PIN_STORAGE_KEY]: {windowNameKey: MAP_LOCATION_PIN_WINDOW_NAME_KEY},
  [TIMELINE_STORAGE_KEY]: {windowNameKey: TIMELINE_WINDOW_NAME_KEY},
  [PERSONAL_TIMELINE_SHARED_STORAGE_KEY]: {windowNameKey: PERSONAL_TIMELINE_SHARED_WINDOW_NAME_KEY},
  [PERSONAL_TIMELINE_DETAILS_STORAGE_KEY]: {windowNameKey: PERSONAL_TIMELINE_DETAILS_WINDOW_NAME_KEY},
  [HEADER_REPORT_BOARD_RECENT_STORAGE_KEY]: {windowNameKey: HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY}
};
const SHARED_STATE_SYNC_KEYS = Object.keys(SHARED_STATE_SYNC_REGISTRY);
let sharedStateSyncClient = null;
let sharedStateSyncChannel = null;
let sharedStateSyncReady = false;
let sharedStateSyncDisabled = false;
let sharedStateSyncFetchInProgress = false;
let sharedStateSyncNeedsRefetch = false;
let sharedStateSyncWriteInProgress = false;
let sharedStateSyncWriteTimerId = null;
const sharedStatePendingWrites = new Map();
const HEADER_REPORT_BOARD_RECENT_DURATION_MS = 5 * 60 * 1000;
const TIMELINE_KIMJINGWANG_GUIDELINE_CLEANUP_KEY = '__worldcupGuideCleanupKimJingwangGuidelineV1__';
const personalTimelineDetailFields = ['시간','장소','취재기자','TVU','업무내용'];
const PERSONAL_TIMELINE_END_TIME_OPTIONS = [...personalTimelineDetailFieldOptions.시간];
const personalTimelineTaskReportLabels = {
  경기취재:'경기 취재',
  외곽취재:'외곽 취재',
  라이브연결:'라이브 연결'
};
const personalTimelineTvuLabelMap = {
  '1번':'TVU 1번 TRS 0001',
  '15번':'TVU 15번 TRS 0015',
  '16번':'TVU 16번 TRS 0016',
  '17번':'TVU 17번 TRS 0017',
  '18번':'TVU 18번 TRS 0018',
  '19번':'TVU 19번 TRS 0019'
};
let personalTimelineEndEditorState = {
  itemId:'',
  dateKey:'',
  name:'',
  entryIndex:-1,
  endDate:'',
  endTime:''
};
const headerClockModes = {
  venue:'venue',
  device:'device'
};
const scheduleStadiumTimeZones = {
  azteca:'America/Mexico_City',
  akron:'America/Mexico_City',
  bbva:'America/Monterrey',
  hardRock:'America/New_York',
  mercedesBenz:'America/New_York',
  bmo:'America/Toronto',
  levis:'America/Los_Angeles',
  bcPlace:'America/Vancouver',
  metlife:'America/New_York',
  gillette:'America/New_York',
  lincolnFinancial:'America/New_York',
  sofi:'America/Los_Angeles',
  att:'America/Chicago',
  nrg:'America/Chicago',
  lumen:'America/Los_Angeles',
  arrowhead:'America/Chicago'
};
const scheduleStadiumCities = {
  azteca:'멕시코시티',
  akron:'과달라하라',
  bbva:'몬테레이',
  hardRock:'마이애미',
  mercedesBenz:'애틀랜타',
  bmo:'토론토',
  levis:'샌프란시스코',
  bcPlace:'밴쿠버',
  metlife:'뉴욕/뉴저지',
  gillette:'보스턴',
  lincolnFinancial:'필라델피아',
  sofi:'로스앤젤레스',
  att:'댈러스',
  nrg:'휴스턴',
  lumen:'시애틀',
  arrowhead:'캔자스시티'
};
const scheduleCityAliases = [
  ['멕시코시티',{city:'멕시코시티',timeZone:'America/Mexico_City'}],
  ['mexico city',{city:'멕시코시티',timeZone:'America/Mexico_City'}],
  ['과달라하라',{city:'과달라하라',timeZone:'America/Mexico_City'}],
  ['guadalajara',{city:'과달라하라',timeZone:'America/Mexico_City'}],
  ['몬테레이',{city:'몬테레이',timeZone:'America/Monterrey'}],
  ['monterrey',{city:'몬테레이',timeZone:'America/Monterrey'}],
  ['마이애미',{city:'마이애미',timeZone:'America/New_York'}],
  ['miami',{city:'마이애미',timeZone:'America/New_York'}],
  ['애틀랜타',{city:'애틀랜타',timeZone:'America/New_York'}],
  ['atlanta',{city:'애틀랜타',timeZone:'America/New_York'}],
  ['토론토',{city:'토론토',timeZone:'America/Toronto'}],
  ['toronto',{city:'토론토',timeZone:'America/Toronto'}],
  ['샌프란시스코',{city:'샌프란시스코',timeZone:'America/Los_Angeles'}],
  ['san francisco',{city:'샌프란시스코',timeZone:'America/Los_Angeles'}],
  ['밴쿠버',{city:'밴쿠버',timeZone:'America/Vancouver'}],
  ['vancouver',{city:'밴쿠버',timeZone:'America/Vancouver'}],
  ['뉴욕',{city:'뉴욕/뉴저지',timeZone:'America/New_York'}],
  ['new york',{city:'뉴욕/뉴저지',timeZone:'America/New_York'}],
  ['뉴저지',{city:'뉴욕/뉴저지',timeZone:'America/New_York'}],
  ['new jersey',{city:'뉴욕/뉴저지',timeZone:'America/New_York'}],
  ['보스턴',{city:'보스턴',timeZone:'America/New_York'}],
  ['boston',{city:'보스턴',timeZone:'America/New_York'}],
  ['필라델피아',{city:'필라델피아',timeZone:'America/New_York'}],
  ['philadelphia',{city:'필라델피아',timeZone:'America/New_York'}],
  ['로스앤젤레스',{city:'로스앤젤레스',timeZone:'America/Los_Angeles'}],
  ['los angeles',{city:'로스앤젤레스',timeZone:'America/Los_Angeles'}],
  ['댈러스',{city:'댈러스',timeZone:'America/Chicago'}],
  ['dallas',{city:'댈러스',timeZone:'America/Chicago'}],
  ['휴스턴',{city:'휴스턴',timeZone:'America/Chicago'}],
  ['houston',{city:'휴스턴',timeZone:'America/Chicago'}],
  ['시애틀',{city:'시애틀',timeZone:'America/Los_Angeles'}],
  ['seattle',{city:'시애틀',timeZone:'America/Los_Angeles'}],
  ['캔자스시티',{city:'캔자스시티',timeZone:'America/Chicago'}],
  ['kansas city',{city:'캔자스시티',timeZone:'America/Chicago'}]
];
const headerLocalClockState = {
  mode:headerClockModes.venue,
  place:'과달라하라',
  fallbackTimeZone:'America/Mexico_City'
};
let currentNewsYear = '';
const NEWS_YEAR_ORDER = ['2026','2022','2018','2014'];
const NEWS_YEAR_META = {
  '2026': {logo:'assets/news-year-2026.png', aria:'2026 북중미 월드컵'},
  '2022': {logo:'assets/news-year-2022.png', aria:'2022 카타르 월드컵'},
  '2018': {logo:'assets/news-year-2018.png', aria:'2018 러시아 월드컵'},
  '2014': {logo:'assets/news-year-2014.png', aria:'2014 브라질 월드컵'}
};
const NEWS_BROADCASTERS = ['KBS','MBC','SBS'];
let currentMexicoStadiumKey = '';
let currentMexicoStadiumSectionKey = '';
let currentTimelineView = 'personal';
let isTimelinePainting = false;
let timelineSelectionPerson = '';
let timelineSelectionStartIndex = -1;
let timelineSelectionEndIndex = -1;
let pendingTimelineSelection = null;
let timelineModalMediaSeq = 0;
let personalTimelineSharedEditingDateKey = '';
let personalTimelineSharedDeletingDateKey = '';
let hasLoadedTimelineGalleryEntries = false;
let timelineGalleryEntrySeq = 0;
let timelineGalleryImageSeq = 0;
let isTimelineGalleryComposerOpen = false;
let isTimelineGalleryDeleteMode = false;
let timelineGalleryPreviewState = null;
let timelineGalleryHydrationPromise = null;
const timelineAssignments = Object.fromEntries(timelineEditableRows.map(row=>[row.label,new Map()]));
let hasSeededTimelineTeamSchedules = false;
let hasLoadedTimelineSavedAssignments = false;
let hasLoadedPersonalTimelineSharedEntries = false;
let hasLoadedPersonalTimelineDetailSelections = false;
let squadPhotoHydrationVersion = 0;
let timelineDates = null;
let timelineMonthGroups = null;
let personalTimelineStickyMonthCleanup = null;
let headerTimeTimerId = null;
let headerReportBoardTimerId = null;
let headerReportBoardResetTimerId = null;
let headerReportBoardPageDurations = [];
let headerReportBoardAnimationFrameId = null;
let headerReportBoardLastFrameAt = 0;
let headerReportBoardLastActiveAt = 0;
const headerReportBoardLaneStates = {
  top:{items:[], node:null},
  bottom:{items:[], node:null}
};
const headerReportBoardLaneSnapshots = {
  top:[],
  bottom:[]
};
const personalTimelineDetailSelections = Object.create(null);
const personalTimelineSharedEntries = Object.create(null);
let timelineGalleryEntries = [];
let timelineGalleryComposerState = {shootDate:'', memo:'', images:[]};
const timelineGallerySelectedIds = new Set();
const headerReportBoardRecentMarks = Object.create(null);
let hasLoadedHeaderReportBoardRecentMarks = false;

function clearObjectEntries(target){
  Object.keys(target).forEach(key=>delete target[key]);
}
function readSharedStateWindowPayload(){
  if(typeof window==='undefined'||!window.name) return {};
  try{
    const payload=JSON.parse(window.name);
    return payload&&typeof payload==='object' ? payload : {};
  }catch(error){
    return {};
  }
}
function writeSharedStateWindowPayload(payload){
  if(typeof window==='undefined') return;
  try{
    window.name=JSON.stringify(payload&&typeof payload==='object' ? payload : {});
  }catch(error){
    window.name='';
  }
}
function getSharedStateLocalRaw(storageKey){
  const config=SHARED_STATE_SYNC_REGISTRY[storageKey];
  if(!config) return '';
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(storageKey);
    if(raw!==null) return raw;
  }
  const payload=readSharedStateWindowPayload();
  return typeof payload?.[config.windowNameKey]==='string' ? payload[config.windowNameKey] : '';
}
function setSharedStateLocalRaw(storageKey, raw=''){
  const config=SHARED_STATE_SYNC_REGISTRY[storageKey];
  if(!config) return;
  const normalized=String(raw??'');
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>{
    if(normalized){
      storage.setItem(storageKey, normalized);
    }else{
      storage.removeItem(storageKey);
    }
  });
  const payload=readSharedStateWindowPayload();
  if(normalized){
    payload[config.windowNameKey]=normalized;
  }else{
    delete payload[config.windowNameKey];
  }
  writeSharedStateWindowPayload(payload);
}
function resetNewsEditorSyncState(){
  hasLoadedNewsEditorEntries=false;
  currentNewsEditingKey='';
  currentNewsDeletingKey='';
  clearObjectEntries(newsEditorEntries);
  renderCache.newsTables=Object.create(null);
}
function resetNewsProgrammingSyncState(){
  hasLoadedNewsProgrammingState=false;
  hasLoadedNewsProgrammingLocalPersistence=false;
  currentNewsProgrammingMemoDrafts={};
  currentNewsProgrammingSavedMemos={};
  newsProgrammingSpecialEntries=[];
  newsProgrammingActiveLocalDate=getTodayLocalDateString();
  currentNewsProgrammingFilters={
    date:getTodayLocalDateString(),
    liveOnly:false
  };
  currentNewsProgrammingSpecialForm={
    timeKey:'',
    status:'본방',
    title:'',
    memo:''
  };
  isNewsProgrammingSpecialTimeMenuOpen=false;
  renderCache.newsProgrammingPanel='';
}
function resetSquadSyncState(){
  hasLoadedSquadInjuryEntries=false;
  clearObjectEntries(squadInjuryEntries);
  Object.values(squads).forEach(players=>{
    players.forEach(player=>{
      ensureSquadPlayerMeta(player);
      applySquadPlayerEntry(player, {...player.__defaults});
    });
  });
  clearObjectEntries(playerPhotoCache);
  invalidateSquadViews();
}
function resetMexicoStadiumSyncState(){
  hasLoadedMexicoStadiumEditorEntries=false;
  clearObjectEntries(mexicoStadiumEditorEntries);
  renderCache.mexicoStadiumDetails=Object.create(null);
}
function resetEquipmentSyncState(){
  hasLoadedEquipmentEditorEntries=false;
  hasLoadedEquipmentCarnetEntries=false;
  clearObjectEntries(equipmentEditorEntries);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  renderCache.equipmentCarnetPanel='';
  equipmentSummaryEditMode=false;
  personalEquipmentEditModes=Object.create(null);
  equipmentEditDraftRows=null;
  equipmentState=[];
  equipmentCarnetEntries=[];
  isEquipmentCarnetComposerOpen=false;
  isEquipmentCarnetDeleteMode=false;
  equipmentCarnetSelectedIds.clear();
}
function resetMapLocationPinSyncState(){
  hasLoadedMapLocationPinEntries=false;
  currentMapLocationPinEditId=createEmptyMapLocationPinEditState();
  isMapLocationPinComposerOpen=createEmptyMapLocationPinComposerState();
  mapLocationPinEntries=createEmptyMapLocationPinEntryGroups();
  mapLocationPinComposerImages=createEmptyMapLocationPinImageState();
  renderCache.mapPanel='';
}
function resetTimelineSyncState(){
  timelineEditableLabels.forEach(label=>timelineAssignments[label]?.clear());
  hasSeededTimelineTeamSchedules=false;
  hasLoadedTimelineSavedAssignments=false;
  hasLoadedPersonalTimelineSharedEntries=false;
  hasLoadedPersonalTimelineDetailSelections=false;
  hasLoadedTimelineGalleryEntries=false;
  hasLoadedHeaderReportBoardRecentMarks=false;
  clearObjectEntries(personalTimelineSharedEntries);
  clearObjectEntries(personalTimelineDetailSelections);
  clearObjectEntries(headerReportBoardRecentMarks);
  timelineGalleryEntries=[];
  timelineGalleryPreviewState=null;
  timelineGalleryHydrationPromise=null;
  isTimelineGalleryComposerOpen=false;
  isTimelineGalleryDeleteMode=false;
  timelineGallerySelectedIds.clear();
  resetTimelineGalleryComposerState();
}
function resetSharedStateSyncCaches(changedKeys=[]){
  const changed=new Set(changedKeys);
  if(changed.has(NEWS_EDITOR_STORAGE_KEY)) resetNewsEditorSyncState();
  if(changed.has(NEWS_PROGRAMMING_STORAGE_KEY)) resetNewsProgrammingSyncState();
  if(changed.has(SQUAD_INJURY_STORAGE_KEY)) resetSquadSyncState();
  if(changed.has(MEXICO_STADIUM_EDITOR_STORAGE_KEY)) resetMexicoStadiumSyncState();
  if(changed.has(EQUIPMENT_EDITOR_STORAGE_KEY)||changed.has(EQUIPMENT_CARNET_STORAGE_KEY)) resetEquipmentSyncState();
  if(changed.has(MAP_LOCATION_PIN_STORAGE_KEY)) resetMapLocationPinSyncState();
  if(changed.has(TIMELINE_STORAGE_KEY)
    ||changed.has(PERSONAL_TIMELINE_SHARED_STORAGE_KEY)
    ||changed.has(PERSONAL_TIMELINE_DETAILS_STORAGE_KEY)
    ||changed.has(HEADER_REPORT_BOARD_RECENT_STORAGE_KEY)){
    resetTimelineSyncState();
  }
}
function isSharedStatePanelVisible(id){
  const panel=document.getElementById(id);
  return Boolean(panel&&!panel.classList.contains('hidden')&&!panel.classList.contains('mobile-hidden-panel'));
}
function isSharedStateMenuActive(id){
  return Boolean(document.getElementById(id)?.classList.contains('active'));
}
function rerenderVisibleSharedStateViews(changedKeys=[]){
  const changed=new Set(changedKeys);
  const timelineChanged=changed.has(TIMELINE_STORAGE_KEY)
    ||changed.has(PERSONAL_TIMELINE_SHARED_STORAGE_KEY)
    ||changed.has(PERSONAL_TIMELINE_DETAILS_STORAGE_KEY)
    ||changed.has(HEADER_REPORT_BOARD_RECENT_STORAGE_KEY);
  if(changed.has(NEWS_EDITOR_STORAGE_KEY)){
    if(currentNewsYear&&currentNewsBroadcaster&&isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('newsMenu')){
      renderNewsTable(currentNewsYear, currentNewsBroadcaster);
    }else if(isMobileViewport()&&isSharedStatePanelVisible('newsCol')){
      renderMobileNewsMenu();
    }
  }
  if(changed.has(NEWS_PROGRAMMING_STORAGE_KEY)){
    if(isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('newsProgrammingMenu')){
      renderNewsProgrammingPanel();
    }
    updateHeaderReportBoard();
  }
  if(changed.has(SQUAD_INJURY_STORAGE_KEY)&&currentSquadKey&&isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('groupASquadMenu')){
    renderSquad(currentSquadKey);
  }
  if(changed.has(MEXICO_STADIUM_EDITOR_STORAGE_KEY)&&currentMexicoStadiumKey&&isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('mexicoStadiumMenu')){
    renderMexicoStadiumDetail(currentMexicoStadiumKey, currentMexicoStadiumSectionKey);
  }
  if((changed.has(EQUIPMENT_EDITOR_STORAGE_KEY)||changed.has(EQUIPMENT_CARNET_STORAGE_KEY)||timelineChanged)&&isSharedStateMenuActive('equipmentMenu')){
    if(isSharedStatePanelVisible('detailCol')){
      if(currentEquipmentMode==='carnet'){
        renderEquipmentCarnetDetail();
      }else if(currentEquipmentMode==='fileStorage'){
        renderEquipmentFileStorageDetail();
      }else if(currentEquipmentMode==='personal'&&currentEquipmentUser){
        showEquipmentPersonal(currentEquipmentUser);
      }else{
        renderEquipmentSharedDetail();
      }
    }
    updateEquipmentSharedTvuIndicators();
  }
  if(changed.has(MAP_LOCATION_PIN_STORAGE_KEY)&&isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('mapMenu')){
    renderMapPanel();
  }
  if(timelineChanged){
    if(isSharedStatePanelVisible('detailCol')&&isSharedStateMenuActive('personalTimelineMenu')){
      if(document.getElementById('detailCol')?.classList.contains('personal-timeline-gallery-mode')){
        openTimelineGalleryView();
      }else{
        renderTimelineSchedule(currentTimelineView);
      }
    }
    updateHeaderReportBoard();
    updateHeaderTimes();
  }else{
    updateHeaderTimes();
  }
  updateMobileHeaderReportBoardVisibility();
}
function disableSharedStateSync(error){
  if(sharedStateSyncDisabled) return;
  sharedStateSyncDisabled=true;
  console.warn('Shared state sync disabled.', error);
  if(sharedStateSyncChannel){
    try{
      sharedStateSyncChannel.unsubscribe();
    }catch(unsubscribeError){}
    sharedStateSyncChannel=null;
  }
}
function getSharedStateSyncClient(){
  if(sharedStateSyncDisabled||typeof window==='undefined') return null;
  if(sharedStateSyncClient) return sharedStateSyncClient;
  if(window.supabaseClient){
    sharedStateSyncClient=window.supabaseClient;
    return sharedStateSyncClient;
  }
  if(!window.supabase?.createClient||!SHARED_STATE_SYNC_SUPABASE_URL||!SHARED_STATE_SYNC_SUPABASE_ANON_KEY) return null;
  try{
    sharedStateSyncClient=window.supabase.createClient(SHARED_STATE_SYNC_SUPABASE_URL, SHARED_STATE_SYNC_SUPABASE_ANON_KEY);
  }catch(error){
    disableSharedStateSync(error);
    return null;
  }
  return sharedStateSyncClient;
}
async function flushPendingSharedStateWrites(){
  if(sharedStateSyncWriteTimerId!==null){
    window.clearTimeout(sharedStateSyncWriteTimerId);
    sharedStateSyncWriteTimerId=null;
  }
  const client=getSharedStateSyncClient();
  if(!client||sharedStateSyncWriteInProgress||!sharedStatePendingWrites.size) return;
  sharedStateSyncWriteInProgress=true;
  const pendingEntries=[...sharedStatePendingWrites.entries()];
  sharedStatePendingWrites.clear();
  try{
    const {error}=await client
      .from(SHARED_STATE_SYNC_TABLE)
      .upsert(
        pendingEntries.map(([state_key, state_value])=>({
          state_key,
          state_value,
          updated_at:new Date().toISOString()
        })),
        {onConflict:'state_key'}
      );
    if(error){
      pendingEntries.forEach(([state_key, state_value])=>sharedStatePendingWrites.set(state_key, state_value));
      if(error.code==='42P01'){
        disableSharedStateSync(error);
      }else{
        console.warn('Shared state write failed.', error);
      }
    }
  }catch(error){
    pendingEntries.forEach(([state_key, state_value])=>sharedStatePendingWrites.set(state_key, state_value));
    console.warn('Shared state write failed.', error);
  }finally{
    sharedStateSyncWriteInProgress=false;
    if(sharedStatePendingWrites.size&&sharedStateSyncReady){
      schedulePendingSharedStateFlush(120);
    }
  }
}
function schedulePendingSharedStateFlush(delay=120){
  if(!sharedStateSyncReady||sharedStateSyncDisabled||sharedStateSyncWriteTimerId!==null) return;
  sharedStateSyncWriteTimerId=window.setTimeout(()=>{
    sharedStateSyncWriteTimerId=null;
    flushPendingSharedStateWrites();
  }, delay);
}
function scheduleSharedStateSyncWrite(storageKey, raw=''){
  if(sharedStateSyncDisabled||!SHARED_STATE_SYNC_REGISTRY[storageKey]) return;
  sharedStatePendingWrites.set(storageKey, String(raw??''));
  if(sharedStateSyncReady){
    schedulePendingSharedStateFlush(120);
  }
}
function applySharedStateSnapshot(rows=[]){
  const nextStateByKey=Object.create(null);
  rows.forEach(row=>{
    const stateKey=String(row?.state_key||'').trim();
    if(!stateKey||!SHARED_STATE_SYNC_REGISTRY[stateKey]) return;
    nextStateByKey[stateKey]=String(row?.state_value??'');
  });
  const changedKeys=[];
  SHARED_STATE_SYNC_KEYS.forEach(storageKey=>{
    const currentRaw=getSharedStateLocalRaw(storageKey);
    const nextRaw=Object.prototype.hasOwnProperty.call(nextStateByKey, storageKey) ? nextStateByKey[storageKey] : '';
    if(currentRaw!==nextRaw){
      setSharedStateLocalRaw(storageKey, nextRaw);
      changedKeys.push(storageKey);
    }
  });
  if(!changedKeys.length) return;
  resetSharedStateSyncCaches(changedKeys);
  rerenderVisibleSharedStateViews(changedKeys);
}
async function fetchSharedStateSnapshot(){
  const client=getSharedStateSyncClient();
  if(!client) return;
  if(sharedStateSyncFetchInProgress){
    sharedStateSyncNeedsRefetch=true;
    return;
  }
  sharedStateSyncFetchInProgress=true;
  try{
    const {data, error}=await client
      .from(SHARED_STATE_SYNC_TABLE)
      .select('state_key,state_value')
      .in('state_key', SHARED_STATE_SYNC_KEYS);
    if(error){
      if(error.code==='42P01'){
        disableSharedStateSync(error);
      }else{
        console.warn('Shared state fetch failed.', error);
      }
      return;
    }
    applySharedStateSnapshot(data||[]);
  }catch(error){
    console.warn('Shared state fetch failed.', error);
  }finally{
    sharedStateSyncFetchInProgress=false;
    if(sharedStateSyncNeedsRefetch){
      sharedStateSyncNeedsRefetch=false;
      fetchSharedStateSnapshot();
    }
  }
}
function startSharedStateRealtimeSync(){
  const client=getSharedStateSyncClient();
  if(!client||sharedStateSyncChannel) return;
  sharedStateSyncChannel=client
    .channel('worldcup-shared-state')
    .on(
      'postgres_changes',
      {
        event:'*',
        schema:'public',
        table:SHARED_STATE_SYNC_TABLE
      },
      ()=>fetchSharedStateSnapshot()
    )
    .subscribe((status)=>{
      if(status==='SUBSCRIBED'){
        sharedStateSyncReady=true;
        flushPendingSharedStateWrites();
      }
    });
}
function initSharedStateSync(){
  if(sharedStateSyncDisabled) return;
  const client=getSharedStateSyncClient();
  if(!client) return;
  sharedStateSyncReady=true;
  fetchSharedStateSnapshot();
  startSharedStateRealtimeSync();
  flushPendingSharedStateWrites();
}
function getScheduleSupabaseClient(){
  if(typeof window==='undefined') return null;
  return window.supabaseClient||getSharedStateSyncClient();
}
async function loadCurrentUser(name) {
  if (!name) {
    currentUser = null;
    applyPermissions();
    return;
  }

  const supabaseClient=getScheduleSupabaseClient();
  if(!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('name', name)
    .single();

  if(error){
    console.warn('사용자 정보 로드 실패:', error);
    currentUser = null;
  }else{
    currentUser = data;
  }

  applyPermissions();
}
function applyPermissions() {
  if (typeof document === 'undefined') return;
  if (!currentUser) {
    document.body.classList.remove('readonly');
    document.body.dataset.userRole = '';
    return;
  }

  const role = currentUser.role;
  document.body.dataset.userRole = role || '';

  if (role === 'REPORTER') {
    document.body.classList.add('readonly');
  } else {
    document.body.classList.remove('readonly');
  }
}
function initUserSelect(){
  const userSelect=document.getElementById('userSelect');
  if(!userSelect) return;
  userSelect.addEventListener('change', (e) => {
    loadCurrentUser(e.target.value);
  });
}
function normalizeScheduleData(data={}){
  return {
    title:String(data?.title||'').trim(),
    assignee:String(data?.assignee||'').trim(),
    local_time:String(data?.local_time||'').trim(),
    korea_time:String(data?.korea_time||'').trim(),
    location:String(data?.location||'').trim()
  };
}
function renderSchedules(data){
  window.supabaseSchedules=Array.isArray(data) ? data : [];
}
function buildMessage(schedule) {
  return `
[월드컵 일정]
${schedule.assignee}

현지 ${schedule.local_time}
한국 ${schedule.korea_time}

${schedule.title}
${schedule.location}
`.trim();
}
if(typeof window!=='undefined'){
  window.buildMessage=buildMessage;
}
function loadSmsServiceScript(){
  if(typeof window==='undefined'||window.sendSMS) return Promise.resolve();
  if(window.smsServiceLoadPromise) return window.smsServiceLoadPromise;
  window.smsServiceLoadPromise=new Promise(resolve=>{
    const existing=document.querySelector('script[data-sms-service="true"]');
    if(existing){
      existing.addEventListener('load', ()=>resolve(), {once:true});
      existing.addEventListener('error', ()=>resolve(), {once:true});
      return;
    }
    const script=document.createElement('script');
    script.src='sms-service.js';
    script.defer=true;
    script.dataset.smsService='true';
    script.onload=()=>resolve();
    script.onerror=()=>{
      console.warn('sms-service.js 로드 실패');
      resolve();
    };
    document.head.appendChild(script);
  });
  return window.smsServiceLoadPromise;
}
async function sendScheduleSMS(scheduleData){
  const supabaseClient=getScheduleSupabaseClient();
  if(!supabaseClient) return;

  try{
    const { data: head, error: headError } = await supabaseClient
      .from('profiles')
      .select('name, phone_number')
      .eq('role', 'HEAD')
      .limit(1)
      .maybeSingle();

    if(headError){
      console.warn('HEAD 사용자 조회 실패:', headError);
      return;
    }

    if(!head?.phone_number){
      console.warn('HEAD 전화번호 없음');
      return;
    }

    const text=`[일정 알림] ${scheduleData.title} / ${scheduleData.location} / ${scheduleData.local_time}`;
    const response=await fetch('https://dwujummgbntrtvmldqmz.supabase.co/functions/v1/dynamic-api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: head.phone_number,
        text
      })
    });
    const result=await response.json().catch(()=>({}));
    const status=response.ok ? 'SENT' : 'FAILED';

    const { error: logError } = await supabaseClient.from('sms_logs').insert([
      {
        assignee: head.name,
        phone: head.phone_number,
        message: text,
        status
      }
    ]);
    if(logError&&logError.code!=='PGRST205'&&logError.code!=='42P01'){
      console.warn('문자 로그 저장 실패:', logError);
    }

    if(response.ok){
      console.log('📩 문자 발송 완료');
    }else{
      console.warn('문자 발송 실패:', result);
    }
  }catch(error){
    console.warn('문자 발송 처리 실패:', error);
    return;
  }
}
async function saveSchedule(data) {
  if (currentUser?.role === 'REPORTER') {
    alert('수정 권한 없음');
    return;
  }

  const supabaseClient=getScheduleSupabaseClient();
  if(!supabaseClient){
    console.error('저장 실패: Supabase client is not ready.');
    alert('저장 실패');
    return;
  }
  const scheduleData=normalizeScheduleData(data);
  const { error } = await supabaseClient
    .from(SCHEDULES_TABLE)
    .insert([scheduleData]);

  if (error) {
    console.error('저장 실패:', error);
    alert('저장 실패');
  } else {
    alert('저장 완료');
    await sendScheduleSMS(scheduleData);
    loadSchedules();
  }
}
async function loadSchedules() {
  const supabaseClient=getScheduleSupabaseClient();
  if(!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from(SCHEDULES_TABLE)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  renderSchedules(data);
}
function subscribeRealtime() {
  const supabaseClient=getScheduleSupabaseClient();
  if(!supabaseClient||schedulesRealtimeChannel) return;
  schedulesRealtimeChannel=supabaseClient
    .channel('schedules-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'schedules'
      },
      () => {
        console.log('🔄 실시간 업데이트');
        loadSchedules();
      }
    )
    .subscribe();
}
function getPersonalTimelineSchedulePayload(dateKey='', personName='', detailValues={}){
  const localTime=String(detailValues?.시간||'').trim();
  const task=String(detailValues?.업무내용||'').trim();
  const taskLabel=String(getPersonalTimelineTaskReportLabel(task)||task).trim();
  const koreaTimeLabel=localTime ? formatPersonalTimelineTimeLabel(localTime).replace(/^현지\s[^/]+\/\s한국\s/,'') : '';
  return {
    title:taskLabel||`${dateKey} 일정`,
    assignee:personName,
    local_time:localTime,
    korea_time:koreaTimeLabel,
    location:String(detailValues?.장소||'').trim()
  };
}
const WORLD_CUP_OPENING_DATE = {year:2026,month:6,day:11};
const timelineOfficialTeamNameMap = {
  'South Korea':'대한민국',
  'Mexico':'멕시코',
  'South Africa':'남아공',
  'Czechia':'체코'
};
function buildTimelineOfficialTeamSchedules(){
  const schedules=Object.values(timelineOfficialTeamNameMap).reduce((acc, label)=>{
    acc[label]=[];
    return acc;
  }, {});
  (groupMatches.A||[]).forEach(match=>{
    const homeLabel=timelineOfficialTeamNameMap[match.home];
    const awayLabel=timelineOfficialTeamNameMap[match.away];
    if(!homeLabel||!awayLabel) return;
    const matchTime=String(match.time||'').replace(' KST','');
    const venue=match.stadium||'-';
    schedules[homeLabel].push({
      date:match.date,
      label:`vs ${awayLabel} · ${matchTime} · ${venue}`
    });
    schedules[awayLabel].push({
      date:match.date,
      label:`vs ${homeLabel} · ${matchTime} · ${venue}`
    });
  });
  return schedules;
}
const timelineOfficialTeamSchedules = buildTimelineOfficialTeamSchedules();
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
  scheduleSharedStateSyncWrite(TIMELINE_STORAGE_KEY, raw);
}
function hasTimelineCleanupFlag(flagKey){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    if(storage.getItem(flagKey)==='1') return true;
  }
  if(typeof window==='undefined'||!window.name) return false;
  try{
    const payload=JSON.parse(window.name);
    return payload?.[flagKey]==='1';
  }catch(error){
    return false;
  }
}
function writeTimelineCleanupFlag(flagKey){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(flagKey,'1'));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[flagKey]='1';
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
}
function removeKimJingwangGuidelineSchedule(){
  if(hasTimelineCleanupFlag(TIMELINE_KIMJINGWANG_GUIDELINE_CLEANUP_KEY)) return;
  const rowAssignments=timelineAssignments['김진광'];
  let changed=false;
  if(rowAssignments){
    Array.from(rowAssignments.entries()).forEach(([dateKey, value])=>{
      if(typeof value==='string'&&value.includes('가이드라인 제작')){
        rowAssignments.delete(dateKey);
        changed=true;
      }
    });
  }
  if(changed) saveTimelineAssignments();
  writeTimelineCleanupFlag(TIMELINE_KIMJINGWANG_GUIDELINE_CLEANUP_KEY);
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
function readPersonalTimelineSharedRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(PERSONAL_TIMELINE_SHARED_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[PERSONAL_TIMELINE_SHARED_WINDOW_NAME_KEY]==='string' ? payload[PERSONAL_TIMELINE_SHARED_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writePersonalTimelineSharedRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(PERSONAL_TIMELINE_SHARED_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[PERSONAL_TIMELINE_SHARED_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(PERSONAL_TIMELINE_SHARED_STORAGE_KEY, raw);
}
function createTimelineModalMediaId(){
  timelineModalMediaSeq+=1;
  return `timeline-media-${Date.now()}-${timelineModalMediaSeq}`;
}
function normalizePersonalTimelineSharedMediaItem(item){
  const src=String(item?.src||'').trim();
  if(!src) return null;
  return {
    id:String(item?.id||createTimelineModalMediaId()),
    name:String(item?.name||'사진').trim()||'사진',
    src
  };
}
function normalizePersonalTimelineSharedEntry(entry){
  if(typeof entry==='string'){
    entry={text:entry, images:[]};
  }
  const text=String(entry?.text||'').trim();
  const images=Array.isArray(entry?.images) ? entry.images.map(normalizePersonalTimelineSharedMediaItem).filter(Boolean) : [];
  if(!text&&!images.length) return null;
  return {text, images};
}
function normalizePersonalTimelineSharedEntries(entries){
  if(Array.isArray(entries)){
    return entries.map(normalizePersonalTimelineSharedEntry).filter(Boolean);
  }
  const normalized=normalizePersonalTimelineSharedEntry(entries);
  return normalized ? [normalized] : [];
}
function buildPersonalTimelineSharedLabel(entries){
  const normalized=normalizePersonalTimelineSharedEntries(entries);
  if(!normalized.length) return '';
  if(normalized.length===1){
    if(normalized[0].text) return normalized[0].text;
    return normalized[0].images.length ? `사진 ${normalized[0].images.length}장` : '';
  }
  return `공용 일정 ${normalized.length}건`;
}
function loadPersonalTimelineSharedEntries(){
  if(hasLoadedPersonalTimelineSharedEntries) return;
  hasLoadedPersonalTimelineSharedEntries = true;
  const raw=readPersonalTimelineSharedRaw();
  if(!raw) return;
  try{
    const savedEntries=JSON.parse(raw);
    Object.entries(savedEntries||{}).forEach(([dateKey, entry])=>{
      const normalized=normalizePersonalTimelineSharedEntries(entry);
      if(normalized.length){
        personalTimelineSharedEntries[dateKey]=normalized;
        const label=buildPersonalTimelineSharedLabel(normalized);
        if(label){
          timelineAssignments['영상취재팀 공동'].set(dateKey, label);
        }
      }
    });
    savePersonalTimelineSharedEntries();
  }catch(error){
    console.warn('Failed to load personal timeline shared entries.', error);
  }
}
function savePersonalTimelineSharedEntries(){
  writePersonalTimelineSharedRaw(JSON.stringify(personalTimelineSharedEntries));
}
function getPersonalTimelineSharedEntries(dateKey){
  loadPersonalTimelineSharedEntries();
  const normalized=normalizePersonalTimelineSharedEntries(personalTimelineSharedEntries[dateKey]);
  if(normalized.length) return normalized;
  const legacyText=getTimelineLabel('영상취재팀 공동', dateKey);
  return legacyText ? [{text:legacyText, images:[]}] : [];
}
function getPersonalTimelineSharedEntry(dateKey, entryIndex=0){
  return getPersonalTimelineSharedEntries(dateKey)[entryIndex]||null;
}
function setPersonalTimelineSharedEntries(dateKey, entries){
  if(!dateKey) return;
  loadPersonalTimelineSharedEntries();
  const normalized=normalizePersonalTimelineSharedEntries(entries);
  if(normalized.length){
    personalTimelineSharedEntries[dateKey]=normalized;
    const label=buildPersonalTimelineSharedLabel(normalized);
    if(label){
      timelineAssignments['영상취재팀 공동'].set(dateKey, label);
    }
  }else{
    delete personalTimelineSharedEntries[dateKey];
    timelineAssignments['영상취재팀 공동'].delete(dateKey);
  }
  saveTimelineAssignments();
  savePersonalTimelineSharedEntries();
}
function setPersonalTimelineSharedEntry(dateKey, entry){
  setPersonalTimelineSharedEntries(dateKey, entry ? [entry] : []);
}
function readPersonalTimelineDetailsRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(PERSONAL_TIMELINE_DETAILS_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[PERSONAL_TIMELINE_DETAILS_WINDOW_NAME_KEY]==='string' ? payload[PERSONAL_TIMELINE_DETAILS_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writePersonalTimelineDetailsRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(PERSONAL_TIMELINE_DETAILS_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[PERSONAL_TIMELINE_DETAILS_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(PERSONAL_TIMELINE_DETAILS_STORAGE_KEY, raw);
}
function readHeaderReportBoardRecentRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(HEADER_REPORT_BOARD_RECENT_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY]==='string' ? payload[HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeHeaderReportBoardRecentRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(HEADER_REPORT_BOARD_RECENT_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(HEADER_REPORT_BOARD_RECENT_STORAGE_KEY, raw);
}
function pruneHeaderReportBoardRecentMarks(now=Date.now()){
  let changed=false;
  Object.keys(headerReportBoardRecentMarks).forEach(key=>{
    if(Number(headerReportBoardRecentMarks[key]||0)<=now){
      delete headerReportBoardRecentMarks[key];
      changed=true;
    }
  });
  return changed;
}
function saveHeaderReportBoardRecentMarks(){
  writeHeaderReportBoardRecentRaw(JSON.stringify(headerReportBoardRecentMarks));
}
function loadHeaderReportBoardRecentMarks(){
  if(hasLoadedHeaderReportBoardRecentMarks) return;
  hasLoadedHeaderReportBoardRecentMarks = true;
  const raw=readHeaderReportBoardRecentRaw();
  if(raw){
    try{
      const savedMarks=JSON.parse(raw);
      Object.entries(savedMarks||{}).forEach(([key, expiresAt])=>{
        const value=Number(expiresAt||0);
        if(value>0) headerReportBoardRecentMarks[key]=value;
      });
    }catch(error){
      console.warn('Failed to load header report board recent marks.', error);
    }
  }
  if(pruneHeaderReportBoardRecentMarks()){
    saveHeaderReportBoardRecentMarks();
  }
}
function buildPersonalTimelineGeneratedReportId(dateKey, name, entryIndex){
  return `${dateKey}::${name}::${entryIndex}`;
}
function reindexHeaderReportBoardRecentMarks(dateKey, name, removedEntryIndex, previousLength){
  for(let index=removedEntryIndex+1; index<previousLength; index+=1){
    const previousId=buildPersonalTimelineGeneratedReportId(dateKey, name, index);
    const nextId=buildPersonalTimelineGeneratedReportId(dateKey, name, index-1);
    if(Object.prototype.hasOwnProperty.call(headerReportBoardRecentMarks, previousId)){
      headerReportBoardRecentMarks[nextId]=headerReportBoardRecentMarks[previousId];
      delete headerReportBoardRecentMarks[previousId];
    }
  }
}
function markHeaderReportBoardRecentItem(itemId){
  if(!itemId) return;
  loadHeaderReportBoardRecentMarks();
  pruneHeaderReportBoardRecentMarks();
  headerReportBoardRecentMarks[itemId]=Date.now()+HEADER_REPORT_BOARD_RECENT_DURATION_MS;
  saveHeaderReportBoardRecentMarks();
}
function getHeaderReportBoardRecentState(itemId){
  if(!itemId) return null;
  loadHeaderReportBoardRecentMarks();
  if(pruneHeaderReportBoardRecentMarks()){
    saveHeaderReportBoardRecentMarks();
  }
  const expiresAt=Number(headerReportBoardRecentMarks[itemId]||0);
  const now=Date.now();
  if(expiresAt<=now) return null;
  const remainingMs=expiresAt-now;
  const elapsedMs=Math.max(0, HEADER_REPORT_BOARD_RECENT_DURATION_MS-remainingMs);
  return {remainingMs, elapsedMs};
}
function normalizePersonalTimelineEndDate(value=''){
  const text=String(value||'').trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : '';
}
function normalizePersonalTimelineEndTime(value=''){
  const text=String(value||'').trim();
  return PERSONAL_TIMELINE_END_TIME_OPTIONS.includes(text) ? text : '';
}
function formatPersonalTimelineEndLabel(detail={}){
  const endDate=normalizePersonalTimelineEndDate(detail?.endDate||'');
  const endTime=normalizePersonalTimelineEndTime(detail?.endTime||'');
  if(!endDate&&!endTime) return '';
  if(endDate&&endTime) return `종료: ${endDate} ${endTime}`;
  if(endDate) return `종료: ${endDate}`;
  return `종료: ${endTime}`;
}
function buildPersonalTimelineEndEditorId(dateKey='', name='', entryIndex=-1){
  return `${dateKey}::${name}::end::${entryIndex}`;
}
function isPersonalTimelineEndEditorOpen(item={}){
  return personalTimelineEndEditorState.itemId&&personalTimelineEndEditorState.itemId===buildPersonalTimelineEndEditorId(item.dateKey, item.name, item.entryIndex);
}
function renderPersonalTimelineEndEditor(item){
  if(!isPersonalTimelineEndEditorOpen(item)) return '';
  const selectedDate=normalizePersonalTimelineEndDate(personalTimelineEndEditorState.endDate||item?.detail?.endDate||'');
  const selectedTime=normalizePersonalTimelineEndTime(personalTimelineEndEditorState.endTime||item?.detail?.endTime||'');
  return `<div class="personal-timeline-end-editor"><label class="personal-timeline-end-editor-field"><span>종료일</span><input type="date" class="simple-form-input personal-timeline-end-date-input" data-end-editor-date="${item.dateKey}" value="${escapeHtml(selectedDate)}"></label><label class="personal-timeline-end-editor-field"><span>종료시간</span><select class="personal-timeline-detail-select personal-timeline-end-time-select" data-end-editor-time="${item.dateKey}"><option value="">시간 선택</option>${PERSONAL_TIMELINE_END_TIME_OPTIONS.map(option=>`<option value="${escapeHtml(option)}"${option===selectedTime?' selected':''}>${escapeHtml(option)}</option>`).join('')}</select></label><div class="personal-timeline-end-editor-actions"><button type="button" class="section-title-action-btn" data-end-editor-save="true" data-date-key="${item.dateKey}" data-person="${escapeHtml(item.name)}" data-entry-index="${item.entryIndex}">저장</button><button type="button" class="section-title-action-btn" data-end-editor-cancel="true">취소</button></div></div>`;
}
function renderPersonalTimelineSummaryLine(item){
  const desktopText=escapeHtml(item.text);
  const mobileLines=buildPersonalTimelineMobileReportLines(item);
  const mobileText=mobileLines.map(line=>`<span class="personal-timeline-summary-text-mobile-line">${escapeHtml(line)}</span>`).join('');
  const endLabel=formatPersonalTimelineEndLabel(item.detail);
  return `<div class="personal-timeline-summary-line"><div class="personal-timeline-summary-main"><span class="personal-timeline-summary-text personal-timeline-summary-text-desktop">${desktopText}</span><span class="personal-timeline-summary-text personal-timeline-summary-text-mobile">${mobileText}</span>${endLabel?`<span class="personal-timeline-summary-end-label">${escapeHtml(endLabel)}</span>`:''}</div><div class="personal-timeline-summary-actions"><button type="button" class="personal-timeline-summary-end" data-date-key="${item.dateKey}" data-person="${escapeHtml(item.name)}" data-entry-index="${item.entryIndex}">종료</button><button type="button" class="personal-timeline-summary-delete" data-date-key="${item.dateKey}" data-person="${escapeHtml(item.name)}" data-entry-index="${item.entryIndex}">삭제</button></div>${renderPersonalTimelineEndEditor(item)}</div>`;
}
function loadPersonalTimelineDetailSelections(){
  if(hasLoadedPersonalTimelineDetailSelections) return;
  hasLoadedPersonalTimelineDetailSelections = true;
  const raw=readPersonalTimelineDetailsRaw();
  if(!raw) return;
  try{
    const savedSelections=JSON.parse(raw);
    Object.entries(savedSelections||{}).forEach(([dateKey, people])=>{
      if(!people||typeof people!=='object') return;
      const sanitizedPeople=Object.create(null);
      Object.entries(people).forEach(([name, fields])=>{
        if(!fields||typeof fields!=='object') return;
        const entries=Array.isArray(fields) ? fields : [fields];
        const sanitizedEntries=entries.map(sanitizePersonalTimelineDetailEntry).filter(Boolean);
        if(sanitizedEntries.length){
          sanitizedPeople[name]=sanitizedEntries;
        }
      });
      if(Object.keys(sanitizedPeople).length){
        personalTimelineDetailSelections[dateKey]=sanitizedPeople;
      }
    });
    savePersonalTimelineDetailSelections();
  }catch(error){
    console.warn('Failed to load personal timeline detail selections.', error);
  }
}
function sanitizePersonalTimelineDetailEntry(entry){
  if(!entry||typeof entry!=='object') return null;
  const sanitizedFields=Object.create(null);
  personalTimelineDetailFields.forEach(field=>{
    if(typeof entry[field]!=='string') return;
    const text=field==='TVU' ? normalizeTvuNumberValue(entry[field]) : entry[field].trim();
    if(text) sanitizedFields[field]=text;
  });
  const endDate=normalizePersonalTimelineEndDate(entry.endDate||'');
  const endTime=normalizePersonalTimelineEndTime(entry.endTime||'');
  if(endDate) sanitizedFields.endDate=endDate;
  if(endTime) sanitizedFields.endTime=endTime;
  const savedAtValue=Number(entry?._savedAt||0);
  if(Number.isFinite(savedAtValue)&&savedAtValue>0) sanitizedFields._savedAt=savedAtValue;
  return personalTimelineDetailFields.some(field=>String(sanitizedFields[field]||'').trim()) ? sanitizedFields : null;
}
function savePersonalTimelineDetailSelections(){
  writePersonalTimelineDetailsRaw(JSON.stringify(personalTimelineDetailSelections));
}
function getPersonalTimelineDetailSelection(dateKey, name){
  loadPersonalTimelineDetailSelections();
  const entries=personalTimelineDetailSelections[dateKey]?.[name];
  return Array.isArray(entries)&&entries.length ? entries[entries.length-1] : null;
}
function getPersonalTimelineDetailEntries(dateKey, name){
  loadPersonalTimelineDetailSelections();
  const entries=personalTimelineDetailSelections[dateKey]?.[name];
  return Array.isArray(entries) ? entries : [];
}
function formatPersonalTimelineTimeLabel(localTime=''){
  const raw=String(localTime||'').trim();
  const match=raw.match(/^(\d{2}):(\d{2})$/);
  if(!match) return raw;
  const hour=Number(match[1]);
  const minute=match[2];
  const koreaHourTotal=hour+15;
  const koreaDayOffset=Math.floor(koreaHourTotal/24);
  const koreaHour=String(koreaHourTotal%24).padStart(2,'0');
  const koreaSuffix=koreaDayOffset>0 ? `(+${koreaDayOffset}일)` : '';
  return `현지 ${raw} / 한국 ${koreaHour}:${minute}${koreaSuffix}`;
}
function getPersonalTimelineTimeSortValue(localTime=''){
  const raw=String(localTime||'').trim();
  const match=raw.match(/^(\d{2}):(\d{2})$/);
  if(!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[1])*60+Number(match[2]);
}
function getTimeZoneNowSortValue(timeZone='America/Mexico_City'){
  const formatter=new Intl.DateTimeFormat('en-CA',{
    timeZone,
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    hour12:false
  });
  const parts=formatter.formatToParts(new Date());
  const year=parts.find(part=>part.type==='year')?.value||'0000';
  const month=parts.find(part=>part.type==='month')?.value||'00';
  const day=parts.find(part=>part.type==='day')?.value||'00';
  const hour=parts.find(part=>part.type==='hour')?.value||'00';
  const minute=parts.find(part=>part.type==='minute')?.value||'00';
  return Number(`${year}${month}${day}${hour}${minute}`);
}
function getPersonalTimelineScheduleSortValue(dateKey='', localTime=''){
  const dateMatch=String(dateKey||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const timeMatch=String(localTime||'').trim().match(/^(\d{2}):(\d{2})$/);
  if(!dateMatch||!timeMatch) return Number.MAX_SAFE_INTEGER;
  return Number(`${dateMatch[1]}${dateMatch[2]}${dateMatch[3]}${timeMatch[1]}${timeMatch[2]}`);
}
function getPersonalTimelineDetailSavedAt(detail, dateKey='', entryIndex=0){
  const savedAtValue=Number(detail?._savedAt||0);
  if(Number.isFinite(savedAtValue)&&savedAtValue>0) return savedAtValue;
  const dateMatch=String(dateKey||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!dateMatch) return entryIndex;
  return Number(`${dateMatch[1]}${dateMatch[2]}${dateMatch[3]}${String(entryIndex).padStart(3,'0')}`);
}
function getPersonalTimelineEntryTimeZone(detail){
  const place=String(detail?.장소||'').trim();
  const cityContext=resolveScheduleCityContext(place);
  return cityContext.timeZone||headerLocalClockState.fallbackTimeZone;
}
function getPersonalTimelineOptionLabel(field, option){
  if(field==='시간') return formatPersonalTimelineTimeLabel(option);
  if(field==='TVU'){
    const normalized=normalizeTvuNumberValue(option);
    return personalTimelineTvuLabelMap[normalized]||normalized;
  }
  return option;
}
function getPersonalTimelineTaskReportLabel(task){
  return personalTimelineTaskReportLabels[task]||task;
}
function buildPersonalTimelineParticipantLabel(name='', reporter=''){
  const participantNames=[String(name||'').trim(), String(reporter||'').trim()].filter(Boolean);
  return `[${participantNames.join(' / ').replace(/\s*\/\s*/g, ' / ')}]`;
}
function buildPersonalTimelineMobileReportLines(item){
  const detail=item?.detail;
  if(!detail) return [String(item?.text||'').trim()].filter(Boolean);
  const participantLabel=buildPersonalTimelineParticipantLabel(item?.name||'', detail.취재기자||'');
  const timeLabel=formatPersonalTimelineTimeLabel(detail.시간||'');
  const taskPlaceLabel=`${String(detail.업무내용||'').trim()}를 ${String(detail.장소||'').trim()}에서`;
  const equipmentLabel=`${getPersonalTimelineOptionLabel('TVU', detail.TVU)}을 가지고 진행`;
  return [participantLabel, timeLabel, taskPlaceLabel, equipmentLabel];
}
function buildPersonalTimelineReportText(name, detail){
  if(!detail) return '';
  const values=personalTimelineDetailFields.map(field=>String(detail[field]||'').trim());
  if(values.some(value=>!value)) return '';
  const participantLabel=buildPersonalTimelineParticipantLabel(name, detail.취재기자);
  const taskLabel=String(detail.업무내용||'').trim();
  const tvuLabel=getPersonalTimelineOptionLabel('TVU', detail.TVU);
  return `${participantLabel} ${formatPersonalTimelineTimeLabel(detail.시간)} ${taskLabel}를 ${detail.장소}에서 ${tvuLabel}을 가지고 진행`;
}
function getPersonalTimelineGeneratedReportsForDate(dateKey){
  return personalTimelineMemberNames.flatMap(name=>getPersonalTimelineDetailEntries(dateKey, name).map((detail, entryIndex)=>({
    id:buildPersonalTimelineGeneratedReportId(dateKey, name, entryIndex),
    name,
    dateKey,
    detail,
    entryIndex,
    savedAt:getPersonalTimelineDetailSavedAt(detail, dateKey, entryIndex),
    timeSort:getPersonalTimelineTimeSortValue(detail.시간),
    text:buildPersonalTimelineReportText(name, detail)
  }))).filter(item=>item.text).sort((a,b)=>{
    if(a.timeSort!==b.timeSort) return a.timeSort-b.timeSort;
    if(a.name!==b.name) return personalTimelineMemberNames.indexOf(a.name)-personalTimelineMemberNames.indexOf(b.name);
    return a.entryIndex-b.entryIndex;
  });
}
function isPersonalTimelineEndActiveForDate(detail={}, viewDateKey=''){
  const endDate=normalizePersonalTimelineEndDate(detail?.endDate||'');
  if(!endDate) return true;
  const normalizedViewDate=String(viewDateKey||'').trim();
  return !normalizedViewDate || normalizedViewDate<=endDate;
}
function getPersonalTimelineOngoingReportsForDate(viewDateKey=''){
  loadPersonalTimelineDetailSelections();
  const normalizedViewDate=normalizePersonalTimelineViewDateKey(viewDateKey);
  const latestReportsByName=new Map();
  Object.keys(personalTimelineDetailSelections).sort().filter(dateKey=>dateKey<=normalizedViewDate).forEach(dateKey=>{
    personalTimelineMemberNames.forEach(name=>{
      getPersonalTimelineDetailEntries(dateKey, name).forEach((detail, entryIndex)=>{
        const item={
          id:buildPersonalTimelineGeneratedReportId(dateKey, name, entryIndex),
          name,
          dateKey,
          detail,
          entryIndex,
          savedAt:getPersonalTimelineDetailSavedAt(detail, dateKey, entryIndex),
          timeSort:getPersonalTimelineTimeSortValue(detail.시간),
          text:buildPersonalTimelineReportText(name, detail)
        };
        if(!item.text) return;
        const previous=latestReportsByName.get(name);
        if(!previous){
          latestReportsByName.set(name, item);
          return;
        }
        if(item.dateKey>previous.dateKey){
          latestReportsByName.set(name, item);
          return;
        }
        if(item.dateKey===previous.dateKey&&item.entryIndex>=previous.entryIndex){
          latestReportsByName.set(name, item);
        }
      });
    });
  });
  return [...latestReportsByName.values()].filter(item=>isPersonalTimelineEndActiveForDate(item.detail, normalizedViewDate)).sort((a,b)=>{
    if(a.timeSort!==b.timeSort) return a.timeSort-b.timeSort;
    if(a.dateKey!==b.dateKey) return String(a.dateKey).localeCompare(String(b.dateKey));
    if(a.name!==b.name) return personalTimelineMemberNames.indexOf(a.name)-personalTimelineMemberNames.indexOf(b.name);
    return a.entryIndex-b.entryIndex;
  });
}
function getAllPersonalTimelineGeneratedReports(){
  loadPersonalTimelineDetailSelections();
  const reports=Object.keys(personalTimelineDetailSelections).sort().filter(dateKey=>!isPastTimelineDateKey(dateKey)).flatMap(dateKey=>{
    const items=getPersonalTimelineGeneratedReportsForDate(dateKey);
    return items.map((item, index)=>{
      const entryTimeZone=getPersonalTimelineEntryTimeZone(item.detail);
      const scheduleSort=getPersonalTimelineScheduleSortValue(item.dateKey, item.detail?.시간||'');
      const nowSort=getTimeZoneNowSortValue(entryTimeZone);
      const isUpcoming=scheduleSort>=nowSort;
      const urgencyDelta=isUpcoming ? scheduleSort-nowSort : Number.MAX_SAFE_INTEGER;
      return {
        ...item,
        sortOrder:index,
        entryTimeZone,
        scheduleSort,
        nowSort,
        isUpcoming,
        urgencyDelta
      };
    }).filter(item=>item.isUpcoming&&isPersonalTimelineEndActiveForDate(item.detail, getTodayTimelineKey()));
  });
  const latestReportsByName=new Map();
  reports.forEach(item=>{
    const previous=latestReportsByName.get(item.name);
    if(!previous||item.savedAt>previous.savedAt||item.savedAt===previous.savedAt&&item.scheduleSort>=previous.scheduleSort){
      latestReportsByName.set(item.name, item);
    }
  });
  return [...latestReportsByName.values()].sort((a,b)=>{
    if(a.urgencyDelta!==b.urgencyDelta) return a.urgencyDelta-b.urgencyDelta;
    if(a.scheduleSort!==b.scheduleSort) return a.scheduleSort-b.scheduleSort;
    if(a.savedAt!==b.savedAt) return a.savedAt-b.savedAt;
    return a.sortOrder-b.sortOrder;
  });
}
function renderEquipmentSharedTvuIndicatorHtml(){
  return `<div class="equipment-user-note equipment-user-note-shared equipment-user-note-shared-inline">
    <span class="equipment-user-note-text">
      <span class="equipment-user-tvu" data-tvu="1번">TVU 1번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="15번">TVU 15번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="16번">TVU 16번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="17번">TVU 17번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="18번">TVU 18번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="19번">TVU 19번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
    </span>
  </div>`;
}
function updateEquipmentSharedTvuIndicators(){
  if(typeof document==='undefined') return;
  const reports=getAllPersonalTimelineGeneratedReports();
  const activeTvus=new Set(
    reports
      .map(item=>normalizeTvuNumberValue(item.detail?.TVU||''))
      .filter(Boolean)
  );
  const activeTvuByName=new Map(
    reports.map(item=>[item.name, normalizeTvuNumberValue(item.detail?.TVU||'')])
  );
  document.querySelectorAll('#equipmentUserCol .equipment-user-tvu, .equipment-user-note-shared-inline .equipment-user-tvu').forEach(node=>{
    const tvu=String(node.dataset.tvu||'').trim();
    node.classList.toggle('is-active', activeTvus.has(tvu));
  });
  document.querySelectorAll('#equipmentUserCol .equipment-user-slot .item[data-user]').forEach(node=>{
    const user=String(node.dataset.user||'').trim();
    const slot=node.closest('.equipment-user-slot');
    const tvuText=slot?.querySelector('.equipment-user-current-tvu');
    const activeTvu=activeTvuByName.get(user)||'';
    if(tvuText){
      tvuText.textContent=activeTvu ? `TVU ${activeTvu}` : '';
    }
    slot?.classList.toggle('is-in-use', Boolean(activeTvu));
  });
}
function setPersonalTimelineDetailSelection(dateKey, name, field, value){
  if(!dateKey||!name||!personalTimelineDetailFields.includes(field)) return;
  const nextValues={...(getPersonalTimelineDetailSelection(dateKey, name)||{})};
  const text=field==='TVU' ? normalizeTvuNumberValue(value) : String(value||'').trim();
  if(text){
    nextValues[field]=text;
  }else{
    delete nextValues[field];
  }
  savePersonalTimelineDetailSelectionBatch(dateKey, name, nextValues);
}
function renderPersonalTimelineSummaryBoard(dateKey){
  const items=getPersonalTimelineOngoingReportsForDate(dateKey);
  const lines=items.map(renderPersonalTimelineSummaryLine).join('');
  return `<div class="personal-timeline-summary-board${items.length?'':' is-empty'}" data-summary-board-date="${dateKey}">${lines}</div>`;
}
function updatePersonalTimelineSummaryBoard(item, dateKey){
  if(!item||!dateKey) return;
  const board=item.querySelector('.personal-timeline-summary-board');
  if(!board) return;
  const items=getPersonalTimelineOngoingReportsForDate(dateKey);
  board.innerHTML=items.map(renderPersonalTimelineSummaryLine).join('');
  board.classList.toggle('is-empty', items.length===0);
}
function syncPersonalTimelinePersonRowFromSavedState(item, dateKey, name){
  if(!item||!dateKey||!name) return;
  const row=Array.from(item.querySelectorAll('.personal-timeline-person-row')).find(node=>node.querySelector('.personal-timeline-save-btn')?.dataset.person===name);
  if(!row) return;
  const savedValues=getPersonalTimelineDetailSelection(dateKey, name)||{};
  row.querySelectorAll('.personal-timeline-detail-select').forEach(select=>{
    const field=select.dataset.field||'';
    select.value=savedValues[field]||'';
  });
  setPersonalTimelineRowDirty(row, false);
}
function updatePersonalTimelineItemEntryState(item, dateKey){
  if(!item||!dateKey) return;
  const hasTimelineAssignment=timelineViews.personal.rows.some(timelineRow=>Boolean(getTimelineLabel(timelineRow.label, dateKey)));
  const hasGeneratedReport=getPersonalTimelineOngoingReportsForDate(dateKey).length>0;
  item.classList.toggle('has-entry', hasTimelineAssignment||hasGeneratedReport);
  item.classList.toggle('is-empty', !(hasTimelineAssignment||hasGeneratedReport));
}
function deletePersonalTimelineDetailEntry(dateKey, name, entryIndex){
  if(!dateKey||!name||!Number.isInteger(entryIndex)||entryIndex<0) return false;
  loadPersonalTimelineDetailSelections();
  loadHeaderReportBoardRecentMarks();
  const dateSelections=personalTimelineDetailSelections[dateKey];
  const entries=Array.isArray(dateSelections?.[name]) ? [...dateSelections[name]] : null;
  if(!entries||!entries[entryIndex]) return false;
  const previousLength=entries.length;
  entries.splice(entryIndex, 1);
  delete headerReportBoardRecentMarks[buildPersonalTimelineGeneratedReportId(dateKey, name, entryIndex)];
  reindexHeaderReportBoardRecentMarks(dateKey, name, entryIndex, previousLength);
  if(entries.length){
    dateSelections[name]=entries;
  }else if(dateSelections){
    delete dateSelections[name];
    if(!Object.keys(dateSelections).length){
      delete personalTimelineDetailSelections[dateKey];
    }
  }
  savePersonalTimelineDetailSelections();
  saveHeaderReportBoardRecentMarks();
  if(personalTimelineEndEditorState.itemId===buildPersonalTimelineEndEditorId(dateKey, name, entryIndex)){
    resetPersonalTimelineEndEditorState();
  }
  updateHeaderReportBoard();
  return true;
}
function savePersonalTimelineDetailSelectionBatch(dateKey, name, detailValues){
  if(!dateKey||!name) return {didAppendNew:false, entryIndex:-1};
  loadPersonalTimelineDetailSelections();
  const normalized=Object.create(null);
  let didAppendNew=false;
  let entryIndex=-1;
  personalTimelineDetailFields.forEach(field=>{
    const text=field==='TVU' ? normalizeTvuNumberValue(detailValues?.[field]) : String(detailValues?.[field]||'').trim();
    if(text) normalized[field]=text;
  });
  const endDate=normalizePersonalTimelineEndDate(detailValues?.endDate||'');
  const endTime=normalizePersonalTimelineEndTime(detailValues?.endTime||'');
  if(endDate) normalized.endDate=endDate;
  if(endTime) normalized.endTime=endTime;
  if(Object.keys(normalized).length){
    normalized._savedAt=Number(detailValues?._savedAt)||Date.now();
    const dateSelections=personalTimelineDetailSelections[dateKey]||(personalTimelineDetailSelections[dateKey]=Object.create(null));
    const entries=Array.isArray(dateSelections[name]) ? dateSelections[name] : [];
    const lastEntry=entries[entries.length-1]||null;
    const isSameAsLast=lastEntry&&personalTimelineDetailFields.every(field=>String(lastEntry[field]||'').trim()===String(normalized[field]||'').trim());
    if(!isSameAsLast){
      dateSelections[name]=[...entries, normalized];
      didAppendNew=true;
      entryIndex=entries.length;
    }else{
      entryIndex=Math.max(entries.length-1, 0);
    }
  }else if(personalTimelineDetailSelections[dateKey]){
    delete personalTimelineDetailSelections[dateKey][name];
    if(!Object.keys(personalTimelineDetailSelections[dateKey]).length){
      delete personalTimelineDetailSelections[dateKey];
    }
  }
  savePersonalTimelineDetailSelections();
  updateHeaderReportBoard();
  return {didAppendNew, entryIndex};
}
function resetPersonalTimelineEndEditorState(){
  personalTimelineEndEditorState={itemId:'',dateKey:'',name:'',entryIndex:-1,endDate:'',endTime:''};
}
function openPersonalTimelineEndEditor(dateKey='', name='', entryIndex=-1){
  const entries=getPersonalTimelineDetailEntries(dateKey, name);
  const detail=entries[entryIndex]||{};
  personalTimelineEndEditorState={
    itemId:buildPersonalTimelineEndEditorId(dateKey, name, entryIndex),
    dateKey,
    name,
    entryIndex,
    endDate:normalizePersonalTimelineEndDate(detail?.endDate||dateKey||''),
    endTime:normalizePersonalTimelineEndTime(detail?.endTime||'')
  };
}
function savePersonalTimelineEndInfo(dateKey='', name='', entryIndex=-1, endDate='', endTime=''){
  const normalizedDate=normalizePersonalTimelineEndDate(endDate||'');
  const normalizedTime=normalizePersonalTimelineEndTime(endTime||'');
  if(!normalizedDate){
    window.alert('종료 날짜를 선택하세요.');
    return false;
  }
  if(!normalizedTime){
    window.alert('종료 시간을 선택하세요.');
    return false;
  }
  loadPersonalTimelineDetailSelections();
  const dateSelections=personalTimelineDetailSelections[dateKey];
  const entries=Array.isArray(dateSelections?.[name]) ? [...dateSelections[name]] : [];
  if(!entries[entryIndex]) return false;
  const nextEntry=sanitizePersonalTimelineDetailEntry({
    ...entries[entryIndex],
    endDate:normalizedDate,
    endTime:normalizedTime,
    _savedAt:entries[entryIndex]?._savedAt||Date.now()
  });
  if(!nextEntry) return false;
  entries[entryIndex]=nextEntry;
  dateSelections[name]=entries;
  savePersonalTimelineDetailSelections();
  updateHeaderReportBoard();
  resetPersonalTimelineEndEditorState();
  return true;
}
function collectPersonalTimelineRowValues(row){
  const values=Object.create(null);
  if(!row) return values;
  row.querySelectorAll('.personal-timeline-detail-select').forEach(select=>{
    const field=select.dataset.field||'';
    if(field) values[field]=select.value||'';
  });
  return values;
}
function setPersonalTimelineRowDirty(row, isDirty){
  if(!row) return;
  row.classList.toggle('is-dirty', Boolean(isDirty));
  const button=row.querySelector('.personal-timeline-save-btn');
  if(button&&!button.disabled){
    button.classList.toggle('is-dirty', Boolean(isDirty));
  }
}
function savePersonalTimelinePersonRow(row){
  if(!row) return;
  const button=row.querySelector('.personal-timeline-save-btn');
  const dateKey=button?.dataset.dateKey||'';
  const personName=button?.dataset.person||'';
  if(!dateKey||!personName) return;
  const rowValues=collectPersonalTimelineRowValues(row);
  const saveResult=savePersonalTimelineDetailSelectionBatch(dateKey, personName, rowValues);
  if(Object.values(rowValues).some(value=>String(value||'').trim())){
    saveSchedule(getPersonalTimelineSchedulePayload(dateKey, personName, rowValues));
  }
  if(saveResult?.didAppendNew&&saveResult.entryIndex>=0){
    markHeaderReportBoardRecentItem(buildPersonalTimelineGeneratedReportId(dateKey, personName, saveResult.entryIndex));
    updateHeaderReportBoard();
  }
  setPersonalTimelineRowDirty(row, false);
  const item=row.closest('.personal-timeline-item');
  updatePersonalTimelineSummaryBoard(item, dateKey);
  if(item){
    const hasTimelineAssignment=timelineViews.personal.rows.some(timelineRow=>Boolean(getTimelineLabel(timelineRow.label, dateKey)));
    const hasGeneratedReport=getPersonalTimelineOngoingReportsForDate(dateKey).length>0;
    item.classList.toggle('has-entry', hasTimelineAssignment||hasGeneratedReport);
    item.classList.toggle('is-empty', !(hasTimelineAssignment||hasGeneratedReport));
  }
  updateHeaderTimes();
}
function formatHeaderReportBoardDate(dateKey){
  const [year, month, day]=dateKey.split('-').map(Number);
  if(!year||!month||!day) return dateKey;
  return `${month}.${day}`;
}
function formatHeaderReportBoardDailyDate(){
  const today=getKstDateParts();
  return `${today.month}월 ${today.day}일`;
}
function buildHeaderReportBoardItemText(item){
  if(String(item?.boardType||'').trim()==='programming-memo'){
    return String(item?.text||'').trim()||'운영 메모 없음';
  }
  const rawText=String(item?.text||'').trim();
  const name=String(item?.name||'').trim();
  if(!rawText) return '';
  if(!name) return rawText;
  const pairPrefix=`${name} / `;
  if(rawText.startsWith(pairPrefix)) return rawText.slice(pairPrefix.length);
  const singlePrefix=`${name} `;
  if(rawText.startsWith(singlePrefix)) return rawText.slice(singlePrefix.length);
  return rawText;
}
function getHeaderReportBoardItemLabel(item){
  if(String(item?.boardType||'').trim()==='programming-memo'){
    return '메모';
  }
  return String(item?.name||'-').trim()||'-';
}
function formatHeaderReportBoardTextLines(item){
  if(String(item?.boardType||'').trim()==='programming-memo'){
    return {lines:[buildHeaderReportBoardItemText(item)]};
  }
  const text=buildHeaderReportBoardItemText(item);
  const match=text.match(/^현지\s+(\d{2}:\d{2})\s*\/\s*한국\s+(\d{2}:\d{2}(?:\(\+\d+일\))?)(.*)$/);
  if(!match){
    return {lines:[text]};
  }
  const [, localTime, koreaTime, tail='']=match;
  const rest=String(tail||'').trim();
  return {
    lines:[
      `현지시각 ${localTime}`,
      `한국시각 ${koreaTime}${rest ? ` ${rest}` : ''}`
    ]
  };
}
function renderHeaderReportBoardItemInner(item){
  const textLines=formatHeaderReportBoardTextLines(item).lines;
  const textHtml=textLines.map(line=>`<span class="header-report-board-text-line">${escapeHtml(line)}</span>`).join('');
  return `<span class="header-report-board-date">${escapeHtml(getHeaderReportBoardItemLabel(item))}</span><span class="header-report-board-text-shell"><span class="header-report-board-text-track"><span class="header-report-board-text">${textHtml}</span><span class="header-report-board-text header-report-board-text-copy" aria-hidden="true">${textHtml}</span></span></span>`;
}
function renderHeaderReportBoardMarqueeItemInner(item){
  const textLines=formatHeaderReportBoardTextLines(item).lines;
  const textHtml=textLines.map(line=>`<span class="header-report-board-text-line">${escapeHtml(line)}</span>`).join('');
  return `<span class="header-report-board-date">${escapeHtml(getHeaderReportBoardItemLabel(item))}</span><span class="header-report-board-text">${textHtml}</span>`;
}
function renderHeaderReportBoardItem(item){
  if(!item){
    return '<div class="header-report-board-empty">업무 보고 대기 중</div>';
  }
  const recentState=getHeaderReportBoardRecentState(item.id);
  const recentClass=recentState ? ' is-recent' : '';
  const recentStyle=recentState ? ` style="--header-report-board-recent-delay:-${Math.round(recentState.elapsedMs%1800)}ms;--header-report-board-recent-iterations:${Math.max(0.001, recentState.remainingMs/1800).toFixed(3)}"` : '';
  return `<div class="header-report-board-item${recentClass}"${recentStyle}>${renderHeaderReportBoardItemInner(item)}</div>`;
}
function splitHeaderReportBoardPages(items, pageSize=2){
  const pages=[];
  for(let index=0; index<items.length; index+=pageSize){
    pages.push(items.slice(index, index+pageSize));
  }
  return pages;
}
function renderHeaderReportBoardRow(item){
  return `<div class="header-report-board-row${item?'':' is-idle'}"><div class="header-report-board-line">${renderHeaderReportBoardItem(item)}</div></div>`;
}
function renderHeaderReportBoardPage(items){
  return `<div class="header-report-board-page">${renderHeaderReportBoardRow(items[0]||null)}${renderHeaderReportBoardRow(items[1]||null)}</div>`;
}
function getHeaderReportBoardProgrammingMemoItems(){
  loadNewsProgrammingState();
  const selectedDate=String(currentNewsProgrammingFilters.date||getTodayTimelineKey()).trim()||getTodayTimelineKey();
  const memoTickerText=getNewsProgrammingMemoTickerText();
  return [{
    id:`programming-memo-${selectedDate}`,
    boardType:'programming-memo',
    name:'방송편성',
    text:memoTickerText
  }];
}
function renderHeaderReportBoardMarqueeRow(items){
  if(!items.length){
    return `<div class="header-report-board-row is-idle"><div class="header-report-board-line">${renderHeaderReportBoardItem(null)}</div></div>`;
  }
  return `<div class="header-report-board-row header-report-board-row-marquee"><div class="header-report-board-line"><div class="header-report-board-marquee-track"></div></div></div>`;
}
function createHeaderReportBoardMarqueeItemNode(item){
  const node=document.createElement('div');
  const recentState=getHeaderReportBoardRecentState(item.id);
  const recentClass=recentState ? ' is-recent' : '';
  const recentStyle=recentState ? `--header-report-board-recent-delay:-${Math.round(recentState.elapsedMs%1800)}ms;--header-report-board-recent-iterations:${Math.max(0.001, recentState.remainingMs/1800).toFixed(3)};` : '';
  node.className=`header-report-board-item header-report-board-item-marquee${recentClass}`;
  if(recentStyle) node.style.cssText=recentStyle;
  node.dataset.itemId=item.id;
  node.innerHTML=renderHeaderReportBoardMarqueeItemInner(item);
  return node;
}
function clearHeaderReportBoardAnimation(){
  if(headerReportBoardAnimationFrameId!==null){
    window.cancelAnimationFrame(headerReportBoardAnimationFrameId);
    headerReportBoardAnimationFrameId=null;
  }
  headerReportBoardLastActiveAt=Date.now();
  headerReportBoardLastFrameAt=0;
  Object.values(headerReportBoardLaneStates).forEach(state=>{
    state.items.forEach(entry=>{
      if(entry.node) entry.node.remove();
    });
    state.items=[];
    state.node=null;
  });
}
function syncHeaderReportBoardLane(laneName, items){
  const state=headerReportBoardLaneStates[laneName];
  const laneNode=state.node;
  if(!laneNode) return;
  const snapshotMap=new Map((headerReportBoardLaneSnapshots[laneName]||[]).map(entry=>[entry.id, entry]));
  const nextIds=new Set(items.map(item=>item.id));
  state.items=state.items.filter(entry=>{
    if(nextIds.has(entry.id)) return true;
    entry.node.remove();
    return false;
  });
  const existingMap=new Map(state.items.map(entry=>[entry.id, entry]));
  let tailX=laneNode.clientWidth||0;
  state.items.forEach(entry=>{
    tailX=Math.max(tailX, entry.x+entry.width+36);
  });
  items.forEach(item=>{
    if(existingMap.has(item.id)) return;
    const node=createHeaderReportBoardMarqueeItemNode(item);
    laneNode.appendChild(node);
    const width=Math.ceil(node.getBoundingClientRect().width);
    const snapshot=snapshotMap.get(item.id);
    const x=snapshot&&Number.isFinite(snapshot.x) ? snapshot.x : tailX;
    state.items.push({id:item.id,node,width,x});
    tailX=Math.max(tailX, x+width+36);
  });
  state.items.sort((a,b)=>a.x-b.x);
}
function saveHeaderReportBoardLaneSnapshots(){
  Object.entries(headerReportBoardLaneStates).forEach(([laneName, state])=>{
    headerReportBoardLaneSnapshots[laneName]=state.items.map(entry=>({
      id:entry.id,
      x:entry.x,
      width:entry.width
    }));
  });
}
function stepHeaderReportBoardMarquee(timestamp){
  const isMobile=typeof window!=='undefined'&&typeof window.matchMedia==='function'&&window.matchMedia('(max-width: 720px)').matches;
  const speed=isMobile ? 58 : 68;
  const deltaSeconds=headerReportBoardLastFrameAt ? Math.min(0.05, (timestamp-headerReportBoardLastFrameAt)/1000) : 0;
  headerReportBoardLastFrameAt=timestamp;
  headerReportBoardLastActiveAt=Date.now();
  Object.values(headerReportBoardLaneStates).forEach(state=>{
    if(!state.node||!state.items.length) return;
    const laneWidth=state.node.clientWidth||0;
    state.items.sort((a,b)=>a.x-b.x);
    state.items.forEach(entry=>{
      entry.x-=speed*deltaSeconds;
    });
    let tailX=laneWidth;
    state.items.forEach(entry=>{
      tailX=Math.max(tailX, entry.x+entry.width+36);
    });
    state.items.forEach(entry=>{
      if(entry.x+entry.width<0){
        entry.x=tailX;
        tailX=entry.x+entry.width+36;
      }
      entry.node.style.transform=`translate3d(${Math.round(entry.x)}px,-50%,0)`;
    });
  });
  saveHeaderReportBoardLaneSnapshots();
  headerReportBoardAnimationFrameId=window.requestAnimationFrame(stepHeaderReportBoardMarquee);
}
function renderHeaderReportBoardMarqueeTrack(track, topItems=[], bottomItems=[]){
  track.classList.add('is-marquee-mode');
  track.innerHTML=`<div class="header-report-board-page header-report-board-page-marquee">${renderHeaderReportBoardMarqueeRow(topItems)}${renderHeaderReportBoardMarqueeRow(bottomItems)}</div>`;
  track.style.transition='none';
  track.style.transform='translateX(0)';
  const syncMarquee=()=>{
    clearHeaderReportBoardAnimation();
    const laneNodes=track.querySelectorAll('.header-report-board-marquee-track');
    headerReportBoardLaneStates.top.node=laneNodes[0]||null;
    headerReportBoardLaneStates.bottom.node=laneNodes[1]||null;
    const topWidth=headerReportBoardLaneStates.top.node?.clientWidth||0;
    const bottomWidth=headerReportBoardLaneStates.bottom.node?.clientWidth||0;
    if(!topWidth&&!bottomWidth){
      window.requestAnimationFrame(syncMarquee);
      return;
    }
    syncHeaderReportBoardLane('top', topItems);
    syncHeaderReportBoardLane('bottom', bottomItems);
    const elapsedSeconds=headerReportBoardLastActiveAt ? Math.max(0, (Date.now()-headerReportBoardLastActiveAt)/1000) : 0;
    if(elapsedSeconds>0){
      const isMobile=typeof window!=='undefined'&&typeof window.matchMedia==='function'&&window.matchMedia('(max-width: 720px)').matches;
      const speed=isMobile ? 58 : 68;
      Object.values(headerReportBoardLaneStates).forEach(state=>{
        state.items.forEach(entry=>{
          entry.x-=speed*elapsedSeconds;
        });
      });
    }
    headerReportBoardAnimationFrameId=window.requestAnimationFrame(stepHeaderReportBoardMarquee);
  };
  requestAnimationFrame(syncMarquee);
}
function getHeaderReportBoardTimings(){
  const isMobile=typeof window!=='undefined'&&typeof window.matchMedia==='function'&&window.matchMedia('(max-width: 720px)').matches;
  return isMobile
    ? {hold:14000, slide:2200, reset:2350}
    : {hold:10000, slide:1400, reset:1550};
}
function clearHeaderReportBoardTimer(){
  if(headerReportBoardTimerId!==null){
    window.clearTimeout(headerReportBoardTimerId);
    headerReportBoardTimerId=null;
  }
  if(headerReportBoardResetTimerId!==null){
    window.clearTimeout(headerReportBoardResetTimerId);
    headerReportBoardResetTimerId=null;
  }
  clearHeaderReportBoardAnimation();
}
function renderHeaderReportBoardTrack(track, pages){
  if(!track) return;
  track.ontransitionend=null;
  track.dataset.sliding='false';
  track.classList.remove('is-marquee-mode');
  if(!pages.length){
    track.innerHTML=renderHeaderReportBoardPage([]);
    track.style.transition='none';
    track.style.transform='translateX(0)';
    return;
  }
  track.innerHTML=pages.map(renderHeaderReportBoardPage).join('');
  track.style.transition='none';
  track.style.transform='translateX(0)';
}
function measureHeaderReportBoardPages(track){
  const pages=Array.from(track.querySelectorAll('.header-report-board-page'));
  return pages.map(page=>{
    let pageDuration=3000;
    const pauseDuration=3000;
    page.querySelectorAll('.header-report-board-row').forEach(row=>{
      const shell=row.querySelector('.header-report-board-text-shell');
      const text=row.querySelector('.header-report-board-text');
      row.classList.remove('is-overflow');
      row.style.removeProperty('--header-report-board-scroll-distance');
      row.style.removeProperty('--header-report-board-scroll-duration');
      row.style.removeProperty('--header-report-board-scroll-delay');
      if(!shell||!text) return;
      const overflow=Math.max(0, Math.ceil(text.scrollWidth-shell.clientWidth));
      if(overflow<=0) return;
      const scrollDistance=overflow+40;
      const scrollDuration=Math.max(7000, Math.round((scrollDistance/14)*1000));
      row.classList.add('is-overflow');
      row.style.setProperty('--header-report-board-scroll-distance', `${scrollDistance}px`);
      row.style.setProperty('--header-report-board-scroll-duration', `${scrollDuration}ms`);
      row.style.setProperty('--header-report-board-scroll-delay', `${pauseDuration}ms`);
      pageDuration=Math.max(pageDuration, pauseDuration+scrollDuration+600);
    });
    return pageDuration;
  });
}
function scheduleNextHeaderReportBoardAdvance(track){
  clearHeaderReportBoardTimer();
  if(headerReportBoardPageDurations.length<=1) return;
  headerReportBoardTimerId=window.setTimeout(()=>{
    advanceHeaderReportBoard(track);
  }, headerReportBoardPageDurations[0]||10000);
}
function advanceHeaderReportBoard(track){
  if(!track||track.dataset.sliding==='true') return;
  const pages=track.querySelectorAll('.header-report-board-page');
  if(pages.length<=1) return;
  track.dataset.sliding='true';
  track.ontransitionend=()=>{
    track.ontransitionend=null;
    const firstPage=track.firstElementChild;
    if(firstPage){
      track.appendChild(firstPage);
    }
    if(headerReportBoardPageDurations.length>1){
      headerReportBoardPageDurations.push(headerReportBoardPageDurations.shift());
    }
    track.style.transition='none';
    track.style.transform='translateX(0)';
    track.dataset.sliding='false';
    void track.offsetWidth;
    scheduleNextHeaderReportBoardAdvance(track);
  };
  requestAnimationFrame(()=>{
    track.style.transition='transform 2.4s ease';
    track.style.transform='translateX(-100%)';
  });
}
function updateHeaderReportBoard(){
  const board=document.getElementById('headerReportBoard');
  const meta=document.getElementById('headerReportBoardMeta');
  const scheduleTrack=document.getElementById('headerScheduleBoardTrack');
  const noticeTrack=document.getElementById('headerNoticeBoardTrack');
  if(!board||!scheduleTrack||!noticeTrack) return;
  loadPersonalTimelineDetailSelections();
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  if(meta){
    meta.textContent=formatHeaderReportBoardDailyDate();
  }
  clearHeaderReportBoardTimer();
  headerReportBoardPageDurations = [];
  board.classList.add('is-animated');
  board.classList.add('is-marquee-mode');
  board.classList.remove('is-empty');
  renderAllBoards();
}
function ensureTimelineDataReady(){
  if(!hasSeededTimelineTeamSchedules){
    seedTimelineTeamSchedules();
    hasSeededTimelineTeamSchedules = true;
  }
  loadSavedTimelineAssignments();
  loadPersonalTimelineDetailSelections();
  removeKimJingwangGuidelineSchedule();
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
function formatPersonalTimelineRailDate(date){
  const weekdays=['일','월','화','수','목','금','토'];
  return `${date.getDate()}일 (${weekdays[date.getDay()]})`;
}
function getTodayTimelineKey(){
  const today=getKstDateParts();
  return `${today.year}-${String(today.month).padStart(2,'0')}-${String(today.day).padStart(2,'0')}`;
}
function normalizePersonalTimelineViewDateKey(dateKey=''){
  const dates=getTimelineDates();
  if(!dates.length) return getTodayTimelineKey();
  const normalized=String(dateKey||'').trim();
  const keys=dates.map(formatTimelineKey);
  if(keys.includes(normalized)) return normalized;
  return keys.includes(getTodayTimelineKey()) ? getTodayTimelineKey() : keys[0];
}
function setPersonalTimelineViewDateKey(dateKey=''){
  currentPersonalTimelineDateKey=normalizePersonalTimelineViewDateKey(dateKey);
  return currentPersonalTimelineDateKey;
}
function getPersonalTimelineViewDateIndex(dateKey=''){
  const normalized=setPersonalTimelineViewDateKey(dateKey||currentPersonalTimelineDateKey);
  return getTimelineDates().findIndex(date=>formatTimelineKey(date)===normalized);
}
function movePersonalTimelineViewDate(step=0){
  const dates=getTimelineDates();
  if(!dates.length) return setPersonalTimelineViewDateKey();
  const currentIndex=Math.max(0, getPersonalTimelineViewDateIndex(currentPersonalTimelineDateKey));
  const nextIndex=Math.min(dates.length-1, Math.max(0, currentIndex+Number(step||0)));
  return setPersonalTimelineViewDateKey(formatTimelineKey(dates[nextIndex]));
}
function isPastTimelineDateKey(dateKey=''){
  return Boolean(dateKey)&&dateKey<getTodayTimelineKey();
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
  const kickoffLabel=getWorldCupOpeningLabel(getWorldCupOpeningDiffDaysForDate(date));
  if(diffDays<0) return {key:'past',label:kickoffLabel};
  if(diffDays===0) return {key:'today',label:kickoffLabel};
  if(diffDays===1) return {key:'tomorrow',label:kickoffLabel};
  return {key:'upcoming',label:kickoffLabel};
}
function renderPersonalTimelineHoverPanel(){
  const personalNames=['박재현','장후원','정상원','이주원','김진광','정재우'];
  return `<div class="personal-timeline-hover-panel"><div class="personal-timeline-hover-group"><span class="personal-timeline-hover-title">공동 일정</span><div class="personal-timeline-hover-chip">영상취재팀 공동</div></div><div class="personal-timeline-hover-group"><span class="personal-timeline-hover-title">개별 일정</span><div class="personal-timeline-hover-grid">${personalNames.map(name=>`<div class="personal-timeline-hover-cell">${name}</div>`).join('')}</div></div></div>`;
}
function renderPersonalTimelineMobileNavigator(){
  return `<div class="personal-timeline-mobile-nav"><div class="personal-timeline-mobile-nav-top"><button type="button" class="personal-timeline-mobile-nav-arrow personal-timeline-mobile-nav-prev" aria-label="이전 날짜">‹</button><div class="personal-timeline-mobile-nav-center"><span class="personal-timeline-mobile-nav-label"></span><button type="button" class="personal-timeline-mobile-nav-calendar" aria-label="날짜 선택"><span class="personal-timeline-mobile-nav-calendar-icon" aria-hidden="true"></span><span class="sr-only">날짜 선택</span></button><input type="date" class="personal-timeline-mobile-nav-picker" aria-label="날짜 선택"></div><button type="button" class="personal-timeline-mobile-nav-arrow personal-timeline-mobile-nav-next" aria-label="다음 날짜">›</button></div><div class="personal-timeline-mobile-nav-time" aria-live="polite"></div></div>`;
}
function renderPersonalTimelineTopbar(){
  return `<div class="personal-timeline-topbar is-mobile-a-structure"><div class="personal-timeline-topbar-main">${renderPersonalTimelineMobileNavigator()}<span class="personal-timeline-month-sticky"></span><div class="personal-timeline-quick-actions"><button type="button" class="personal-timeline-quick-btn timeline-gallery-open-btn" data-timeline-action="gallery">갤러리</button><button type="button" class="personal-timeline-quick-btn" data-timeline-action="top">맨 위로</button><button type="button" class="personal-timeline-quick-btn" data-timeline-action="today">오늘로</button></div></div></div>`;
}
function createTimelineExportButton(){
  const button=document.createElement('button');
  button.type='button';
  button.className='timeline-export-btn personal-timeline-quick-btn secondary-export-btn';
  button.textContent='일정 내보내기';
  button.addEventListener('click', event=>{
    event.stopPropagation();
    exportTimelineExcel();
  });
  return button;
}
function findTimelineActionsWrap(){
  const buttons=Array.from(document.querySelectorAll('button'));
  const topBtn=buttons.find(button=>String(button.textContent||'').trim()==='맨 위로');
  const todayBtn=buttons.find(button=>String(button.textContent||'').trim()==='오늘로');
  if(topBtn&&todayBtn&&topBtn.parentElement===todayBtn.parentElement){
    return topBtn.parentElement;
  }
  return todayBtn?.closest('.timeline-actions, .schedule-actions, .timeline-toolbar, .date-controls, .personal-timeline-quick-actions, .personal-timeline-day-actions')
    || topBtn?.closest('.timeline-actions, .schedule-actions, .timeline-toolbar, .date-controls, .personal-timeline-quick-actions, .personal-timeline-day-actions')
    || null;
}
function ensureTimelineExportButton(){
  if(typeof document==='undefined') return;
  const detailCol=document.getElementById('detailCol');
  const timelineIsActive=Boolean(detailCol&&(detailCol.classList.contains('timeline-mode')||detailCol.classList.contains('personal-timeline-mode')))
    || Boolean(document.getElementById('personalTimelineMenu')?.classList.contains('active'));
  if(!timelineIsActive) return;
  const actionsWrap=findTimelineActionsWrap();
  if(!actionsWrap) return;
  document.querySelectorAll('.timeline-export-btn').forEach(element=>element.remove());
  if(actionsWrap.querySelector('.timeline-export-btn')) return;
  actionsWrap.appendChild(createTimelineExportButton());
}
function applyMobileTimelineAStructure(){
  if(typeof document==='undefined'||typeof window==='undefined') return;
  if(!isMobileViewport()) return;
  const detailCol=document.getElementById('detailCol');
  if(!detailCol?.classList.contains('personal-timeline-mode')) return;
  const topbar=detailCol.querySelector('.personal-timeline-topbar');
  const topbarMain=detailCol.querySelector('.personal-timeline-topbar-main')||topbar;
  const dateCard=detailCol.querySelector('.personal-timeline-mobile-nav');
  const actions=detailCol.querySelector('.personal-timeline-quick-actions');
  const monthBadge=detailCol.querySelector('.personal-timeline-month-sticky');
  if(!topbar||!topbarMain||!dateCard||!actions) return;
  topbar.classList.add('is-mobile-a-structure');
  if(monthBadge) monthBadge.setAttribute('aria-hidden', 'true');
  const insertBeforeTarget=monthBadge?.parentElement===topbarMain ? monthBadge : actions;
  const children=Array.from(topbarMain.children);
  const dateIndex=children.indexOf(dateCard);
  const targetIndex=children.indexOf(insertBeforeTarget);
  if(dateCard.parentElement!==topbarMain||dateIndex===-1||targetIndex===-1||dateIndex>targetIndex){
    topbarMain.insertBefore(dateCard, insertBeforeTarget);
  }
}
function renderPersonalTimelineEntries(entries, kind){
  return entries.map(item=>`<div class="personal-timeline-entry personal-timeline-entry-${item.kind}"><span class="personal-timeline-entry-name personal-timeline-entry-name-${item.kind}">${escapeHtml(item.label)}</span><p class="personal-timeline-entry-text">${escapeHtml(item.value)}</p></div>`).join('');
}
function renderPersonalTimelineSharedColumnHeader(dateKey, dateLabel){
  const hasEntry=getPersonalTimelineSharedEntries(dateKey).length>0;
  const isEditMode=personalTimelineSharedEditingDateKey===dateKey;
  const isDeleteMode=personalTimelineSharedDeletingDateKey===dateKey;
  return `<div class="personal-timeline-column-header personal-timeline-column-header-shared"><span class="personal-timeline-column-title">공용 일정</span><span class="personal-timeline-column-header-actions"><button type="button" class="personal-timeline-shared-write-btn" data-date-key="${dateKey}" aria-label="공용 일정 작성">✎</button><button type="button" class="personal-timeline-shared-edit-toggle-btn${isEditMode?' is-active':''}" data-date-key="${dateKey}" aria-label="공용 일정 수정"${hasEntry?'':' disabled aria-disabled="true"'}>수정</button><button type="button" class="personal-timeline-shared-delete-btn${isDeleteMode?' is-active':''}" data-date-key="${dateKey}" aria-label="공용 일정 삭제"${hasEntry?'':' disabled aria-disabled="true"'}>🗑</button><span class="personal-timeline-column-date">${dateLabel}</span></span></div>`;
}
function renderPersonalTimelineDetailOptions(field, options, selectedValue=''){
  const normalizedSelectedValue=field==='TVU' ? normalizeTvuNumberValue(selectedValue) : selectedValue;
  const placeholderSelected=!normalizedSelectedValue ? ' selected' : '';
  const optionHtml=options.map(option=>`<option value="${escapeHtml(option)}"${normalizedSelectedValue===option?' selected':''}>${escapeHtml(getPersonalTimelineOptionLabel(field, option))}</option>`).join('');
  return `<option value="" disabled hidden${placeholderSelected}>${field}</option>${optionHtml}`;
}
function renderPersonalTimelineSharedColumn(dateKey){
  const sharedEntries=getPersonalTimelineSharedEntries(dateKey);
  if(!sharedEntries.length){
    return '<div class="personal-timeline-column-empty personal-timeline-column-empty-shared"></div>';
  }
  const isEditMode=personalTimelineSharedEditingDateKey===dateKey;
  const isDeleteMode=personalTimelineSharedDeletingDateKey===dateKey;
  return sharedEntries.map((sharedEntry, entryIndex)=>{
    const sharedText=String(sharedEntry.text||'').replace(/\r\n/g,'\n').trim();
    const editButtonHtml=isEditMode ? `<button type="button" class="personal-timeline-shared-entry-edit-btn" data-date-key="${dateKey}" data-entry-index="${entryIndex}" aria-label="공용 일정 수정">수정</button>` : '';
    const deleteButtonHtml=isDeleteMode ? `<button type="button" class="personal-timeline-shared-entry-delete-btn" data-date-key="${dateKey}" data-entry-index="${entryIndex}" aria-label="공용 일정 삭제">삭제</button>` : '';
    const textHtml=sharedText ? `<div class="personal-timeline-entry-text personal-timeline-entry-text-shared-item"><span class="personal-timeline-entry-text-shared-bullet">•</span><span class="personal-timeline-entry-text-shared-body">${escapeHtml(sharedText)}</span></div>` : '';
    const mediaHtml=sharedEntry.images.length ? `<div class="personal-timeline-shared-media">${sharedEntry.images.map(image=>`<figure class="personal-timeline-shared-figure"><img class="personal-timeline-shared-image" src="${image.src}" alt="${escapeHtml(image.name)}"><figcaption class="personal-timeline-shared-caption">${escapeHtml(image.name)}</figcaption></figure>`).join('')}</div>` : '';
    return `<div class="personal-timeline-entry personal-timeline-entry-shared"><div class="personal-timeline-entry-head">${deleteButtonHtml}${editButtonHtml}<span class="personal-timeline-entry-name personal-timeline-entry-name-shared">영상취재팀 공동</span></div>${textHtml}${mediaHtml}</div>`;
  }).join('');
}
function updatePersonalTimelineSharedColumn(item, dateKey){
  if(!item||!dateKey) return;
  const headerWrap=item.querySelector('.personal-timeline-column-shared .personal-timeline-column-header-wrap');
  const body=item.querySelector('.personal-timeline-column-shared .personal-timeline-column-body');
  if(headerWrap){
    const dateLabel=`${Number(dateKey.slice(5,7))}월 ${Number(dateKey.slice(8,10))}일`;
    headerWrap.innerHTML=renderPersonalTimelineSharedColumnHeader(dateKey, dateLabel);
  }
  if(!body) return;
  body.innerHTML=renderPersonalTimelineSharedColumn(dateKey);
}
function openPersonalTimelineSharedEditor(item, dateKey, entryIndex=-1){
  const sharedEntries=getPersonalTimelineSharedEntries(dateKey);
  const sharedEntry=entryIndex>=0 ? sharedEntries[entryIndex]||null : null;
  pendingTimelineSelection={
    person:'영상취재팀 공동',
    dates:[dateKey],
    cells:[],
    mode:'shared',
    sharedAction:entryIndex>=0 ? 'edit' : 'write',
    mediaItems:(sharedEntry?.images||[]).map(image=>({...image})),
    initialText:sharedEntry?.text||'',
    onWrite:(text, selection)=>{
      const nextEntries=[...getPersonalTimelineSharedEntries(dateKey)];
      const nextEntry=normalizePersonalTimelineSharedEntry({
        text,
        images:Array.isArray(selection?.mediaItems) ? selection.mediaItems : []
      });
      if(entryIndex>=0){
        if(nextEntry){
          nextEntries[entryIndex]=nextEntry;
        }else{
          nextEntries.splice(entryIndex,1);
        }
      }else if(nextEntry){
        nextEntries.push(nextEntry);
      }
      setPersonalTimelineSharedEntries(dateKey, nextEntries);
      updatePersonalTimelineSharedColumn(item, dateKey);
      updatePersonalTimelineItemEntryState(item, dateKey);
      if(item) item.classList.add('is-open');
      updateHeaderTimes();
    }
  };
  openTimelineModal();
}
function togglePersonalTimelineSharedEditMode(item, dateKey){
  if(!dateKey) return;
  if(personalTimelineSharedDeletingDateKey===dateKey){
    personalTimelineSharedDeletingDateKey='';
  }
  personalTimelineSharedEditingDateKey=personalTimelineSharedEditingDateKey===dateKey ? '' : dateKey;
  updatePersonalTimelineSharedColumn(item, dateKey);
  if(item) item.classList.add('is-open');
}
function togglePersonalTimelineSharedDeleteMode(item, dateKey){
  if(!dateKey) return;
  if(personalTimelineSharedEditingDateKey===dateKey){
    personalTimelineSharedEditingDateKey='';
  }
  personalTimelineSharedDeletingDateKey=personalTimelineSharedDeletingDateKey===dateKey ? '' : dateKey;
  updatePersonalTimelineSharedColumn(item, dateKey);
  if(item) item.classList.add('is-open');
}
function deletePersonalTimelineSharedEntryAt(item, dateKey, entryIndex){
  if(!dateKey||!Number.isInteger(entryIndex)||entryIndex<0) return;
  const nextEntries=[...getPersonalTimelineSharedEntries(dateKey)];
  if(!nextEntries[entryIndex]) return;
  nextEntries.splice(entryIndex,1);
  setPersonalTimelineSharedEntries(dateKey, nextEntries);
  if(!nextEntries.length){
    if(personalTimelineSharedEditingDateKey===dateKey) personalTimelineSharedEditingDateKey='';
    if(personalTimelineSharedDeletingDateKey===dateKey) personalTimelineSharedDeletingDateKey='';
  }
  updatePersonalTimelineSharedColumn(item, dateKey);
  updatePersonalTimelineItemEntryState(item, dateKey);
  if(item) item.classList.add('is-open');
  updateHeaderTimes();
}
function renderTimelineModalMediaList(){
  const mediaWrap=document.getElementById('timelineModalMedia');
  const mediaList=document.getElementById('timelineModalMediaList');
  if(!mediaWrap||!mediaList) return;
  const mediaItems=Array.isArray(pendingTimelineSelection?.mediaItems) ? pendingTimelineSelection.mediaItems : [];
  mediaWrap.classList.toggle('hidden', !pendingTimelineSelection?.mode||pendingTimelineSelection.mode!=='shared');
  mediaList.innerHTML=mediaItems.length
    ? mediaItems.map(item=>`<figure class="timeline-modal-media-item"><img class="timeline-modal-media-thumb" src="${item.src}" alt="${escapeHtml(item.name)}"><figcaption class="timeline-modal-media-caption">${escapeHtml(item.name)}</figcaption><button type="button" class="timeline-modal-media-remove" data-media-id="${item.id}" aria-label="${escapeHtml(item.name)} 삭제">×</button></figure>`).join('')
    : '<div class="timeline-modal-media-empty">첨부된 사진 없음</div>';
}
function readTimelineModalFiles(files){
  return Promise.all(Array.from(files||[]).map(file=>new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>resolve({
      id:createTimelineModalMediaId(),
      name:file.name||'사진',
      src:String(reader.result||'')
    });
    reader.onerror=()=>resolve(null);
    reader.readAsDataURL(file);
  }))).then(items=>items.filter(Boolean));
}
function createTimelineGalleryEntryId(){
  timelineGalleryEntrySeq+=1;
  return `gallery_${Date.now()}_${timelineGalleryEntrySeq}`;
}
function createTimelineGalleryImageId(){
  timelineGalleryImageSeq+=1;
  return `img_${Date.now()}_${timelineGalleryImageSeq}`;
}
function getTimelineGalleryStorage(){
  if(typeof window==='undefined'||!window.localStorage) return null;
  try{
    const probeKey='__timeline_gallery_storage_probe__';
    window.localStorage.setItem(probeKey, '1');
    window.localStorage.removeItem(probeKey);
    return window.localStorage;
  }catch(error){
    console.warn('Timeline gallery localStorage is unavailable.', error);
    return null;
  }
}
function readTimelineGalleryRaw(){
  const storage=getTimelineGalleryStorage();
  if(!storage) return '';
  return String(storage.getItem(TIMELINE_GALLERY_STORAGE_KEY)||'');
}
function writeTimelineGalleryRaw(raw){
  const storage=getTimelineGalleryStorage();
  if(!storage) return;
  const normalized=String(raw??'');
  try{
    if(normalized){
      storage.setItem(TIMELINE_GALLERY_STORAGE_KEY, normalized);
    }else{
      storage.removeItem(TIMELINE_GALLERY_STORAGE_KEY);
    }
    LEGACY_TIMELINE_GALLERY_STORAGE_KEYS.forEach(key=>storage.removeItem(key));
  }catch(error){
    console.warn('Failed to save timeline gallery.', error);
  }
}
function supportsTimelineGalleryLegacyIndexedDb(){
  return typeof window!=='undefined'&&typeof window.indexedDB!=='undefined';
}
function openTimelineGalleryLegacyDatabase(){
  if(!supportsTimelineGalleryLegacyIndexedDb()){
    return Promise.reject(new Error('IndexedDB is not available.'));
  }
  return new Promise((resolve, reject)=>{
    const request=window.indexedDB.open(TIMELINE_GALLERY_LEGACY_DB_NAME, TIMELINE_GALLERY_LEGACY_DB_VERSION);
    request.onupgradeneeded=event=>{
      const db=event.target?.result;
      if(!db) return;
      if(!db.objectStoreNames.contains(TIMELINE_GALLERY_LEGACY_DB_STORE)){
        db.createObjectStore(TIMELINE_GALLERY_LEGACY_DB_STORE, {keyPath:'id'});
      }
    };
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error||new Error('Failed to open gallery database.'));
  });
}
async function readTimelineGalleryLegacyIndexedDbRaw(){
  if(!supportsTimelineGalleryLegacyIndexedDb()) return '';
  const db=await openTimelineGalleryLegacyDatabase();
  return new Promise((resolve, reject)=>{
    const transaction=db.transaction(TIMELINE_GALLERY_LEGACY_DB_STORE, 'readonly');
    const store=transaction.objectStore(TIMELINE_GALLERY_LEGACY_DB_STORE);
    const request=store.get(TIMELINE_GALLERY_LEGACY_DB_RECORD_KEY);
    request.onsuccess=()=>{
      resolve(typeof request.result?.raw==='string' ? request.result.raw : '');
    };
    request.onerror=()=>reject(request.error||new Error('Failed to read gallery database.'));
    transaction.oncomplete=()=>db.close();
    transaction.onabort=()=>db.close();
    transaction.onerror=()=>db.close();
  });
}
function buildTimelineGalleryMemo(title='', memo=''){
  const parts=[String(title||'').trim(), String(memo||'').trim()].filter(Boolean);
  return parts.join(' · ');
}
function normalizeTimelineGallerySavedAt(value){
  if(typeof value==='number'&&Number.isFinite(value)&&value>0) return Math.floor(value);
  const numeric=Number(value);
  if(Number.isFinite(numeric)&&numeric>0) return Math.floor(numeric);
  const parsed=Date.parse(String(value||'').trim());
  if(Number.isFinite(parsed)&&parsed>0) return parsed;
  return Date.now();
}
function normalizeTimelineGalleryItem(item){
  const dataUrl=String(item?.dataUrl||item?.imageData||item?.src||'').trim();
  if(!dataUrl) return null;
  const savedAt=normalizeTimelineGallerySavedAt(item?.savedAt??item?.createdAt);
  const rawCapturedDate=String(item?.capturedDate||item?.shootDate||item?.date||'').trim();
  const capturedDate=/^\d{4}-\d{2}-\d{2}$/.test(rawCapturedDate) ? rawCapturedDate : '';
  return {
    id:String(item?.id||createTimelineGalleryEntryId()),
    fileName:String(item?.fileName||item?.name||item?.title||'photo.jpg').trim()||'photo.jpg',
    dataUrl,
    capturedDate,
    memo:String(item?.memo||'').trim(),
    savedAt
  };
}
function extractTimelineGalleryItems(entry){
  if(Array.isArray(entry?.images)){
    const memo=buildTimelineGalleryMemo(entry?.title||'', entry?.memo||'');
    return entry.images
      .map((image,index)=>normalizeTimelineGalleryItem({
        id:`${String(entry?.id||createTimelineGalleryEntryId())}_${String(image?.id||index)}`,
        dataUrl:image?.dataUrl||image?.src||'',
        fileName:image?.name||entry?.title||`photo-${index+1}.jpg`,
        savedAt:entry?.savedAt||entry?.createdAt,
        capturedDate:entry?.capturedDate||entry?.shootDate||entry?.date||'',
        memo
      }))
      .filter(Boolean);
  }
  const normalized=normalizeTimelineGalleryItem(entry);
  return normalized ? [normalized] : [];
}
function parseTimelineGalleryEntriesRaw(raw=''){
  if(!raw) return [];
  try{
    const parsed=JSON.parse(raw);
    const source=Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.items) ? parsed.items : []);
    if(!Array.isArray(source)) return [];
    return sortTimelineGalleryEntries(source.flatMap(extractTimelineGalleryItems));
  }catch(error){
    console.warn('Failed to parse timeline gallery data.', error);
    return [];
  }
}
function buildTimelineGalleryEntriesRaw(entries=[]){
  return JSON.stringify(normalizeTimelineGalleryEntries(entries));
}
function applyTimelineGalleryEntries(entries=[], source='unknown'){
  timelineGalleryEntries=normalizeTimelineGalleryEntries(entries);
  const rawLength=buildTimelineGalleryEntriesRaw(timelineGalleryEntries).length;
  console.log('[timeline-gallery] load', {
    itemCount:timelineGalleryEntries.length,
    source,
    rawLength
  });
}
async function hydrateTimelineGalleryEntries(force=false){
  if(!force&&timelineGalleryHydrationPromise) return timelineGalleryHydrationPromise;
  timelineGalleryHydrationPromise=(async ()=>{
    const storage=getTimelineGalleryStorage();
    if(!storage){
      hasLoadedTimelineGalleryEntries=true;
      return timelineGalleryEntries;
    }
    let raw=String(storage.getItem(TIMELINE_GALLERY_STORAGE_KEY)||'');
    let source='localStorage';
    if(!raw){
      for(const legacyKey of LEGACY_TIMELINE_GALLERY_STORAGE_KEYS){
        const legacyRaw=String(storage.getItem(legacyKey)||'');
        if(legacyRaw){
          raw=legacyRaw;
          source=`legacy:${legacyKey}`;
          break;
        }
      }
    }
    if(!raw){
      const legacyIndexedDbRaw=await readTimelineGalleryLegacyIndexedDbRaw();
      if(legacyIndexedDbRaw){
        raw=legacyIndexedDbRaw;
        source='legacy:indexeddb';
      }
    }
    if(raw){
      applyTimelineGalleryEntries(parseTimelineGalleryEntriesRaw(raw), source);
      writeTimelineGalleryRaw(buildTimelineGalleryEntriesRaw(timelineGalleryEntries));
    }else{
      applyTimelineGalleryEntries([], 'localStorage-empty');
    }
    hasLoadedTimelineGalleryEntries=true;
    if(document.querySelector('.timeline-gallery-view')){
      refreshTimelineGalleryView();
    }
    return timelineGalleryEntries;
  })().catch(error=>{
    console.warn('Failed to hydrate timeline gallery.', error);
    return timelineGalleryEntries;
  }).finally(()=>{
    timelineGalleryHydrationPromise=null;
  });
  return timelineGalleryHydrationPromise;
}
function persistTimelineGalleryEntries(){
  const raw=buildTimelineGalleryEntriesRaw(timelineGalleryEntries);
  writeTimelineGalleryRaw(raw);
  console.log('[timeline-gallery] save', {
    itemCount:timelineGalleryEntries.length,
    rawLength:raw.length,
    storageKey:TIMELINE_GALLERY_STORAGE_KEY
  });
}
function sortTimelineGalleryEntries(entries=[]){
  return [...entries].sort((a,b)=>normalizeTimelineGallerySavedAt(b?.savedAt)-normalizeTimelineGallerySavedAt(a?.savedAt));
}
function normalizeTimelineGalleryEntries(entries=[]){
  const map=new Map();
  entries.map(normalizeTimelineGalleryItem).filter(Boolean).forEach(entry=>{
    map.set(String(entry.id||createTimelineGalleryEntryId()), entry);
  });
  return sortTimelineGalleryEntries(Array.from(map.values()));
}
function loadTimelineGalleryEntries(){
  if(hasLoadedTimelineGalleryEntries||timelineGalleryHydrationPromise) return;
  const raw=readTimelineGalleryRaw();
  if(!raw){
    hydrateTimelineGalleryEntries();
    return;
  }
  applyTimelineGalleryEntries(parseTimelineGalleryEntriesRaw(raw), 'localStorage');
  hasLoadedTimelineGalleryEntries=true;
}
function saveTimelineGalleryEntries(){
  const normalizedEntries=normalizeTimelineGalleryEntries(timelineGalleryEntries);
  timelineGalleryEntries.length=0;
  timelineGalleryEntries.push(...normalizedEntries);
  persistTimelineGalleryEntries();
}
function createTimelineGalleryComposerState(){
  return {shootDate:getTodayTimelineKey(), memo:'', images:[]};
}
function resetTimelineGalleryComposerState(){
  timelineGalleryComposerState=createTimelineGalleryComposerState();
}
function updateTimelineGalleryComposerStateFromForm(root=document){
  const form=root.querySelector?.('.timeline-gallery-form');
  if(!form) return;
  timelineGalleryComposerState.shootDate=String(form.querySelector('[data-gallery-field="shoot-date"]')?.value||'').trim();
  timelineGalleryComposerState.memo=String(form.querySelector('[data-gallery-field="memo"]')?.value||'').trim();
}
function readTimelineGalleryFiles(files){
  return Promise.all(Array.from(files||[]).filter(file=>!file.type||String(file.type).startsWith('image/')).map(file=>new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>resolve({
      id:createTimelineGalleryImageId(),
      fileName:file.name||'photo.jpg',
      dataUrl:String(reader.result||'')
    });
    reader.onerror=()=>resolve(null);
    reader.readAsDataURL(file);
  }))).then(items=>items.filter(Boolean));
}
function formatTimelineGallerySavedAt(value=''){
  const date=new Date(normalizeTimelineGallerySavedAt(value));
  if(Number.isNaN(date.getTime())) return '';
  const pad=value=>String(value).padStart(2, '0');
  return `${date.getFullYear()}.${pad(date.getMonth()+1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function formatTimelineGalleryCapturedDate(value=''){
  const text=String(value||'').trim();
  if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) return '';
  return text;
}
function getTimelineGalleryCapturedDateLabel(value=''){
  return formatTimelineGalleryCapturedDate(value)||'촬영일 미지정';
}
function getTimelineGalleryMemoLabel(value=''){
  const normalized=String(value||'').trim();
  return normalized||'메모 없음';
}
function getTimelineGalleryGroupSignature(entry={}){
  return {
    capturedDate:formatTimelineGalleryCapturedDate(entry?.capturedDate||''),
    memo:String(entry?.memo||'').trim()
  };
}
function buildTimelineGalleryGroupKey(signature={}){
  return JSON.stringify({
    capturedDate:formatTimelineGalleryCapturedDate(signature.capturedDate||''),
    memo:String(signature.memo||'').trim()
  });
}
function getTimelineGalleryGroupItems(signature={}, entries=timelineGalleryEntries){
  const targetDate=formatTimelineGalleryCapturedDate(signature.capturedDate||'');
  const targetMemo=String(signature.memo||'').trim();
  return sortTimelineGalleryEntries(entries).filter(entry=>{
    const entrySignature=getTimelineGalleryGroupSignature(entry);
    return entrySignature.capturedDate===targetDate&&entrySignature.memo===targetMemo;
  });
}
function getTimelineGalleryDateGroups(entries=[]){
  const dateGroups=sortTimelineGalleryEntries(entries).reduce((map, entry)=>{
    const signature=getTimelineGalleryGroupSignature(entry);
    const dateKey=signature.capturedDate||'unspecified';
    if(!map.has(dateKey)) map.set(dateKey, new Map());
    const memoGroups=map.get(dateKey);
    const groupKey=buildTimelineGalleryGroupKey(signature);
    if(!memoGroups.has(groupKey)) memoGroups.set(groupKey, []);
    memoGroups.get(groupKey).push(entry);
    return map;
  }, new Map());
  return Array.from(dateGroups.entries())
    .sort((a,b)=>{
      if(a[0]==='unspecified') return 1;
      if(b[0]==='unspecified') return -1;
      return String(b[0]).localeCompare(String(a[0]));
    })
    .map(([dateKey, memoGroups])=>({
      key:dateKey,
      label:dateKey==='unspecified' ? '촬영일 미지정' : dateKey,
      groups:Array.from(memoGroups.entries())
        .map(([groupKey, items])=>{
          const sortedItems=sortTimelineGalleryEntries(items);
          const representative=[...sortedItems].sort((a,b)=>{
            const savedCompare=normalizeTimelineGallerySavedAt(a?.savedAt)-normalizeTimelineGallerySavedAt(b?.savedAt);
            if(savedCompare!==0) return savedCompare;
            return String(a.id||'').localeCompare(String(b.id||''));
          })[0]||sortedItems[0]||null;
          return {
            key:groupKey,
            representative,
            items:sortedItems,
            memoLabel:getTimelineGalleryMemoLabel(representative?.memo||''),
            count:sortedItems.length
          };
        })
        .sort((a,b)=>normalizeTimelineGallerySavedAt(b.representative?.savedAt)-normalizeTimelineGallerySavedAt(a.representative?.savedAt)),
      count:Array.from(memoGroups.values()).reduce((total, items)=>total+items.length, 0)
    }));
}
function renderTimelineGalleryComposerPreview(){
  const images=Array.isArray(timelineGalleryComposerState.images) ? timelineGalleryComposerState.images : [];
  if(!images.length) return '<div class="timeline-gallery-preview-empty">선택된 사진이 없습니다.</div>';
  return images.map(image=>`<figure class="timeline-gallery-preview-item"><img src="${image.dataUrl}" alt="${escapeHtml(image.fileName)}"><figcaption>${escapeHtml(image.fileName)}</figcaption><button type="button" class="timeline-gallery-preview-remove" data-gallery-remove-image="${escapeHtml(image.id)}" aria-label="${escapeHtml(image.fileName)} 삭제">×</button></figure>`).join('');
}
function renderGalleryForm(){
  const state=timelineGalleryComposerState;
  return `<section class="timeline-gallery-form simple-form-card" aria-label="갤러리 작성"><div class="timeline-gallery-form-head"><h4 class="simple-form-title">사진 기록 작성</h4></div><div class="timeline-gallery-form-grid"><label class="simple-form-field"><span class="simple-form-label">촬영일</span><input type="date" id="gallery-date" class="simple-form-input" data-gallery-field="shoot-date" value="${escapeHtml(state.shootDate||getTodayTimelineKey())}"></label><label class="simple-form-field timeline-gallery-form-field-wide"><span class="simple-form-label">사진첨부</span><input type="file" class="simple-form-input timeline-gallery-file-input" data-gallery-field="images" accept="image/*" multiple></label><label class="simple-form-field timeline-gallery-form-field-wide"><span class="simple-form-label">메모</span><input type="text" id="gallery-memo" class="simple-form-input" data-gallery-field="memo" placeholder="메모 입력" value="${escapeHtml(state.memo||'')}"></label></div><div id="timelineGalleryComposerPreview" class="timeline-gallery-preview-grid">${renderTimelineGalleryComposerPreview()}</div><div class="timeline-gallery-form-actions"><button type="button" class="section-title-action-btn" data-gallery-action="cancel-form">취소</button><button type="button" class="section-title-action-btn export-action-btn" data-gallery-action="save">저장</button></div></section>`;
}
function renderTimelineGalleryCard(group){
  if(!group?.representative) return '';
  const representative=group.representative;
  const capturedDateHtml=`<div class="timeline-gallery-card-shoot-date">촬영일: ${escapeHtml(getTimelineGalleryCapturedDateLabel(representative.capturedDate))}</div>`;
  const memoHtml=`<p class="timeline-gallery-card-memo">${escapeHtml(group.memoLabel)}</p>`;
  const fileHtml=`<div class="timeline-gallery-card-file">${escapeHtml(representative.fileName)}</div>`;
  const countHtml=`<span class="timeline-gallery-card-count">${group.count}장</span>`;
  const deleteHintHtml=isTimelineGalleryDeleteMode?'<span class="timeline-gallery-card-delete-hint">삭제 모드: 열어서 개별 선택</span>':'';
  return `<article class="timeline-gallery-card" data-gallery-group-key="${escapeHtml(group.key)}"><button type="button" class="timeline-gallery-main-image" data-gallery-group-preview="${escapeHtml(group.key)}"><img src="${representative.dataUrl}" alt="${escapeHtml(group.memoLabel)} 대표 썸네일">${countHtml}</button><div class="timeline-gallery-card-body"><h4>${escapeHtml(group.memoLabel)}</h4>${capturedDateHtml}<time>${escapeHtml(formatTimelineGallerySavedAt(representative.savedAt))}</time>${fileHtml}${memoHtml}${deleteHintHtml}</div></article>`;
}
function renderTimelineGalleryList(){
  const items=sortTimelineGalleryEntries(timelineGalleryEntries);
  if(!items.length&&timelineGalleryHydrationPromise){
    return '<div class="timeline-gallery-empty">갤러리를 불러오는 중입니다.</div>';
  }
  if(!items.length){
    return '<div class="timeline-gallery-empty">등록된 사진이 없습니다.</div>';
  }
  const groups=getTimelineGalleryDateGroups(items);
  return `<div class="timeline-gallery-date-list">${groups.map(group=>`<section class="timeline-gallery-date-section"><header class="timeline-gallery-date-header"><h4>${escapeHtml(group.label)}</h4><span>${group.count}장</span></header><div class="timeline-gallery-grid">${group.groups.map(renderTimelineGalleryCard).join('')}</div></section>`).join('')}</div>`;
}
function renderGalleryView(){
  loadTimelineGalleryEntries();
  const selectedCount=timelineGallerySelectedIds.size;
  const totalCount=timelineGalleryEntries.length;
  const deleteButtonText=isTimelineGalleryDeleteMode ? '삭제 종료' : '삭제';
  const deleteActionHtml=isTimelineGalleryComposerOpen ? `<button type="button" class="section-title-action-btn delete${isTimelineGalleryDeleteMode?' is-active':''}" data-gallery-action="toggle-delete">${deleteButtonText}</button>` : '';
  const selectedDeleteHtml=isTimelineGalleryComposerOpen&&isTimelineGalleryDeleteMode ? `<button type="button" class="section-title-action-btn delete" data-gallery-action="delete-selected"${selectedCount?'':' disabled aria-disabled="true"'}>선택 삭제${selectedCount?` ${selectedCount}`:''}</button>` : '';
  const formButtonText=isTimelineGalleryComposerOpen ? '작성 닫기' : '작성';
  return `<section class="timeline-gallery-view" aria-label="갤러리"><header class="timeline-gallery-header"><div><span class="timeline-gallery-eyebrow">일정타임라인</span><h3>갤러리</h3></div><div class="timeline-gallery-actions"><span class="timeline-gallery-count">총 ${totalCount}장</span><button type="button" class="section-title-action-btn" data-gallery-action="back">뒤로가기</button><button type="button" class="section-title-action-btn export-action-btn" data-gallery-action="open-form">${formButtonText}</button>${deleteActionHtml}${selectedDeleteHtml}</div></header>${isTimelineGalleryComposerOpen ? renderGalleryForm() : ''}${renderTimelineGalleryList()}</section>`;
}
function refreshTimelineGalleryView(){
  const root=document.querySelector('.timeline-gallery-view');
  if(!root) return;
  root.outerHTML=renderGalleryView();
  bindTimelineGalleryViewEvents();
}
function openTimelineGalleryView(){
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  if(!detailCol||!detailTable) return;
  if(personalTimelineStickyMonthCleanup){
    personalTimelineStickyMonthCleanup();
    personalTimelineStickyMonthCleanup=null;
  }
  cancelTimelineSelection();
  closeTimelineModal();
  hideTimelineTooltip();
  document.body.classList.remove('timeline-modal-open');
  detailCol.onclick=null;
  detailCol.classList.add('timeline-mode','personal-timeline-mode','personal-timeline-gallery-mode');
  document.getElementById('detailTitle').textContent='일정타임라인';
  document.getElementById('detailSubtitle').textContent='';
  detailTable.parentElement.classList.add('timeline-card','personal-timeline-card','timeline-gallery-shell-card');
  detailTable.className='data-table hidden';
  detailTable.innerHTML='';
  detailCol.querySelectorAll('.personal-timeline-topbar,.personal-timeline-mobile-nav,.personal-timeline-list,.timeline-gallery-view').forEach(node=>node.remove());
  detailTable.insertAdjacentHTML('afterend', renderGalleryView());
  bindTimelineGalleryViewEvents();
  hydrateTimelineGalleryEntries();
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}
function closeTimelineGalleryView(){
  isTimelineGalleryComposerOpen=false;
  isTimelineGalleryDeleteMode=false;
  timelineGallerySelectedIds.clear();
  resetTimelineGalleryComposerState();
  closeTimelineGalleryModal();
  renderTimelineSchedule('personal');
}
function toggleTimelineGalleryForm(){
  isTimelineGalleryComposerOpen=!isTimelineGalleryComposerOpen;
  if(isTimelineGalleryComposerOpen){
    resetTimelineGalleryComposerState();
    isTimelineGalleryDeleteMode=false;
    timelineGallerySelectedIds.clear();
  }else{
    isTimelineGalleryDeleteMode=false;
    timelineGallerySelectedIds.clear();
  }
  refreshTimelineGalleryView();
  if(timelineGalleryPreviewState) renderTimelineGalleryModal();
}
function cancelTimelineGalleryForm(){
  isTimelineGalleryComposerOpen=false;
  isTimelineGalleryDeleteMode=false;
  timelineGallerySelectedIds.clear();
  resetTimelineGalleryComposerState();
  refreshTimelineGalleryView();
}
function toggleTimelineGalleryDeleteMode(){
  if(!isTimelineGalleryComposerOpen) return;
  isTimelineGalleryDeleteMode=!isTimelineGalleryDeleteMode;
  timelineGallerySelectedIds.clear();
  refreshTimelineGalleryView();
  if(timelineGalleryPreviewState) renderTimelineGalleryModal();
}
function saveGalleryEntry(){
  const root=document.querySelector('.timeline-gallery-view')||document;
  updateTimelineGalleryComposerStateFromForm(root);
  const capturedDate=formatTimelineGalleryCapturedDate(timelineGalleryComposerState.shootDate)||getTodayTimelineKey();
  const memo=String(timelineGalleryComposerState.memo||'').trim();
  const images=Array.isArray(timelineGalleryComposerState.images) ? timelineGalleryComposerState.images.map(normalizeTimelineGalleryItem).filter(Boolean) : [];
  if(!images.length){
    window.alert('사진을 1장 이상 첨부해주세요.');
    return;
  }
  const latestStoredEntries=parseTimelineGalleryEntriesRaw(readTimelineGalleryRaw());
  const savedAt=Date.now();
  const nextItems=images.map(image=>({
    id:createTimelineGalleryEntryId(),
    fileName:image.fileName,
    dataUrl:image.dataUrl,
    capturedDate,
    savedAt,
    memo
  }));
  timelineGalleryEntries=sortTimelineGalleryEntries([...latestStoredEntries, ...timelineGalleryEntries, ...nextItems]);
  saveTimelineGalleryEntries();
  isTimelineGalleryComposerOpen=false;
  resetTimelineGalleryComposerState();
  refreshTimelineGalleryView();
}
function deleteGalleryEntries(){
  if(!timelineGallerySelectedIds.size){
    window.alert('삭제할 사진을 선택하세요.');
    return;
  }
  const confirmed=window.confirm(`선택한 사진 ${timelineGallerySelectedIds.size}장을 삭제하시겠습니까?`);
  if(!confirmed) return;
  loadTimelineGalleryEntries();
  for(let index=timelineGalleryEntries.length-1;index>=0;index-=1){
    if(timelineGallerySelectedIds.has(timelineGalleryEntries[index]?.id)){
      timelineGalleryEntries.splice(index, 1);
    }
  }
  timelineGallerySelectedIds.clear();
  if(!timelineGalleryEntries.length) isTimelineGalleryDeleteMode=false;
  saveTimelineGalleryEntries();
  refreshTimelineGalleryView();
  if(timelineGalleryPreviewState){
    const remainingItems=getTimelineGalleryModalItems();
    if(!remainingItems.length){
      closeTimelineGalleryModal();
      return;
    }
    if(!remainingItems.some(entry=>entry.id===timelineGalleryPreviewState.activeEntryId)){
      timelineGalleryPreviewState.activeEntryId=remainingItems[0].id;
    }
    renderTimelineGalleryModal();
  }
}
function updateTimelineGalleryComposerPreview(){
  const preview=document.getElementById('timelineGalleryComposerPreview');
  if(preview) preview.innerHTML=renderTimelineGalleryComposerPreview();
}
function bindTimelineGalleryViewEvents(){
  const root=document.querySelector('.timeline-gallery-view');
  if(!root) return;
  root.onclick=event=>{
    const actionButton=event.target.closest('[data-gallery-action]');
    if(actionButton&&root.contains(actionButton)){
      const action=actionButton.dataset.galleryAction;
      if(action==='back') closeTimelineGalleryView();
      if(action==='open-form') toggleTimelineGalleryForm();
      if(action==='cancel-form') cancelTimelineGalleryForm();
      if(action==='save') saveGalleryEntry();
      if(action==='toggle-delete') toggleTimelineGalleryDeleteMode();
      if(action==='delete-selected') deleteGalleryEntries();
      return;
    }
    const removeButton=event.target.closest('[data-gallery-remove-image]');
    if(removeButton&&root.contains(removeButton)){
      const imageId=removeButton.dataset.galleryRemoveImage||'';
      timelineGalleryComposerState.images=(timelineGalleryComposerState.images||[]).filter(image=>image.id!==imageId);
      updateTimelineGalleryComposerPreview();
      return;
    }
    const previewButton=event.target.closest('[data-gallery-group-preview]');
    if(previewButton&&root.contains(previewButton)){
      openGalleryModal(previewButton.dataset.galleryGroupPreview||'');
    }
  };
  root.oninput=event=>{
    if(event.target.closest('.timeline-gallery-form')) updateTimelineGalleryComposerStateFromForm(root);
  };
  root.onchange=async event=>{
    const fileInput=event.target.closest('.timeline-gallery-file-input');
    if(fileInput&&root.contains(fileInput)){
      updateTimelineGalleryComposerStateFromForm(root);
      const nextImages=await readTimelineGalleryFiles(fileInput.files);
      timelineGalleryComposerState.images=[...(timelineGalleryComposerState.images||[]), ...nextImages];
      updateTimelineGalleryComposerPreview();
      fileInput.value='';
    }
  };
}
function getTimelineGalleryEntry(entryId=''){
  loadTimelineGalleryEntries();
  return timelineGalleryEntries.find(entry=>entry.id===entryId)||null;
}
function getTimelineGalleryGroupByKey(groupKey='', entries=timelineGalleryEntries){
  const target=String(groupKey||'').trim();
  if(!target) return null;
  const dateGroups=getTimelineGalleryDateGroups(entries);
  for(const dateGroup of dateGroups){
    const group=(dateGroup.groups||[]).find(item=>item.key===target);
    if(group) return group;
  }
  return null;
}
function getTimelineGalleryModalItems(){
  if(!timelineGalleryPreviewState?.groupKey) return [];
  const group=getTimelineGalleryGroupByKey(timelineGalleryPreviewState.groupKey, timelineGalleryEntries);
  return Array.isArray(group?.items) ? group.items : [];
}
function ensureTimelineGalleryModal(){
  if(document.getElementById('timelineGalleryModal')) return;
  const mount=document.getElementById('timelineGalleryModalMount')||document.body;
  mount.insertAdjacentHTML('beforeend', `<div id="timelineGalleryModal" class="timeline-gallery-modal hidden" tabindex="-1"><div class="timeline-gallery-modal-backdrop" data-gallery-modal-close="true"></div><div class="timeline-gallery-modal-panel timeline-gallery-modal-panel-group" role="dialog" aria-modal="true" aria-labelledby="timelineGalleryModalTitle"><button type="button" class="timeline-gallery-modal-close" data-gallery-modal-close="true" aria-label="닫기">×</button><button type="button" class="timeline-gallery-modal-nav timeline-gallery-modal-prev" data-gallery-modal-step="-1" aria-label="이전 사진">‹</button><div class="timeline-gallery-modal-content"><figure class="timeline-gallery-modal-figure"><img id="timelineGalleryModalImage" src="" alt=""><figcaption><h3 id="timelineGalleryModalTitle"></h3><p id="timelineGalleryModalMeta"></p></figcaption></figure><div class="timeline-gallery-modal-actions"><div id="timelineGalleryModalGroupMeta" class="timeline-gallery-modal-group-meta"></div><div id="timelineGalleryModalDeleteActions" class="timeline-gallery-modal-delete-actions"></div></div><div id="timelineGalleryModalThumbList" class="timeline-gallery-modal-thumb-list" aria-label="묶음 사진 목록"></div></div><button type="button" class="timeline-gallery-modal-nav timeline-gallery-modal-next" data-gallery-modal-step="1" aria-label="다음 사진">›</button></div></div>`);
  const modal=document.getElementById('timelineGalleryModal');
  modal.addEventListener('click', event=>{
    if(event.target.closest('[data-gallery-modal-close]')){
      closeTimelineGalleryModal();
      return;
    }
    const stepButton=event.target.closest('[data-gallery-modal-step]');
    if(stepButton){
      moveTimelineGalleryModal(Number(stepButton.dataset.galleryModalStep||0));
      return;
    }
    const entryButton=event.target.closest('[data-gallery-modal-entry]');
    if(entryButton){
      timelineGalleryPreviewState.activeEntryId=entryButton.dataset.galleryModalEntry||'';
      renderTimelineGalleryModal();
      return;
    }
    const deleteButton=event.target.closest('[data-gallery-modal-delete-selected]');
    if(deleteButton){
      deleteGalleryEntries();
    }
  });
  modal.addEventListener('change', event=>{
    const check=event.target.closest('[data-gallery-modal-check]');
    if(!check) return;
    const entryId=check.dataset.galleryModalCheck||'';
    if(check.checked){
      timelineGallerySelectedIds.add(entryId);
    }else{
      timelineGallerySelectedIds.delete(entryId);
    }
    renderTimelineGalleryModal();
    refreshTimelineGalleryView();
  });
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeTimelineGalleryModal();
      return;
    }
    if(event.key==='ArrowLeft') moveTimelineGalleryModal(-1);
    if(event.key==='ArrowRight') moveTimelineGalleryModal(1);
  });
}
function renderTimelineGalleryModal(){
  const modal=document.getElementById('timelineGalleryModal');
  if(!modal||!timelineGalleryPreviewState) return;
  const group=getTimelineGalleryGroupByKey(timelineGalleryPreviewState.groupKey, timelineGalleryEntries);
  const items=Array.isArray(group?.items) ? group.items : [];
  if(!items.length){
    closeTimelineGalleryModal();
    return;
  }
  if(!items.some(entry=>entry.id===timelineGalleryPreviewState.activeEntryId)){
    timelineGalleryPreviewState.activeEntryId=items[0].id;
  }
  const entry=items.find(item=>item.id===timelineGalleryPreviewState.activeEntryId)||items[0];
  const imageEl=document.getElementById('timelineGalleryModalImage');
  const titleEl=document.getElementById('timelineGalleryModalTitle');
  const metaEl=document.getElementById('timelineGalleryModalMeta');
  const groupMetaEl=document.getElementById('timelineGalleryModalGroupMeta');
  const deleteActionsEl=document.getElementById('timelineGalleryModalDeleteActions');
  const thumbListEl=document.getElementById('timelineGalleryModalThumbList');
  const prevButton=modal.querySelector('.timeline-gallery-modal-prev');
  const nextButton=modal.querySelector('.timeline-gallery-modal-next');
  if(imageEl){
    imageEl.src=entry.dataUrl;
    imageEl.alt=entry.fileName||group.memoLabel||'갤러리 사진';
  }
  if(titleEl) titleEl.textContent=entry.fileName||group.memoLabel||'갤러리 사진';
  if(metaEl) metaEl.textContent=[`촬영일 ${getTimelineGalleryCapturedDateLabel(entry.capturedDate)}`, `저장 ${formatTimelineGallerySavedAt(entry.savedAt)}`, getTimelineGalleryMemoLabel(entry.memo)].filter(Boolean).join(' · ');
  if(groupMetaEl){
    groupMetaEl.innerHTML=`<span class="timeline-gallery-modal-group-pill">${escapeHtml(getTimelineGalleryCapturedDateLabel(group.representative?.capturedDate))}</span><span class="timeline-gallery-modal-group-pill">${escapeHtml(group.memoLabel)}</span><span class="timeline-gallery-modal-group-pill">${items.length}장</span>`;
  }
  if(deleteActionsEl){
    const selectedCount=items.filter(item=>timelineGallerySelectedIds.has(item.id)).length;
    deleteActionsEl.innerHTML=isTimelineGalleryDeleteMode ? `<span class="timeline-gallery-modal-delete-copy">개별 사진을 선택해 삭제할 수 있습니다.</span><button type="button" class="section-title-action-btn delete" data-gallery-modal-delete-selected="true"${selectedCount?'':' disabled aria-disabled="true"'}>선택 삭제${selectedCount?` ${selectedCount}`:''}</button>` : '';
  }
  if(thumbListEl){
    thumbListEl.innerHTML=items.map(item=>{
      const isActive=item.id===entry.id;
      const isChecked=timelineGallerySelectedIds.has(item.id);
      const checkboxHtml=isTimelineGalleryDeleteMode ? `<label class="timeline-gallery-modal-thumb-check"><input type="checkbox" data-gallery-modal-check="${escapeHtml(item.id)}"${isChecked?' checked':''}><span>선택</span></label>` : '';
      return `<article class="timeline-gallery-modal-thumb${isActive?' is-active':''}"><button type="button" class="timeline-gallery-thumb-btn" data-gallery-modal-entry="${escapeHtml(item.id)}"><img src="${item.dataUrl}" alt="${escapeHtml(item.fileName||'갤러리 사진')}"></button><div class="timeline-gallery-modal-thumb-meta"><strong class="timeline-gallery-modal-thumb-name">${escapeHtml(item.fileName||'사진')}</strong><span>${escapeHtml(formatTimelineGallerySavedAt(item.savedAt))}</span></div>${checkboxHtml}</article>`;
    }).join('');
  }
  const currentIndex=items.findIndex(item=>item.id===entry.id);
  const hasMultiple=items.length>1;
  if(prevButton) prevButton.disabled=!hasMultiple||currentIndex<0;
  if(nextButton) nextButton.disabled=!hasMultiple||currentIndex<0;
}
function openGalleryModal(groupKey=''){
  const group=getTimelineGalleryGroupByKey(groupKey, timelineGalleryEntries);
  if(!group?.representative) return;
  ensureTimelineGalleryModal();
  timelineGalleryPreviewState={groupKey:group.key, activeEntryId:group.representative.id};
  renderTimelineGalleryModal();
  const modal=document.getElementById('timelineGalleryModal');
  document.body.classList.add('timeline-modal-open');
  modal.classList.remove('hidden');
  modal.focus();
}
function moveTimelineGalleryModal(step=0){
  if(!timelineGalleryPreviewState) return;
  const items=getTimelineGalleryModalItems();
  if(items.length<2) return;
  const currentIndex=items.findIndex(entry=>entry.id===timelineGalleryPreviewState.activeEntryId);
  if(currentIndex<0) return;
  const nextIndex=(currentIndex+step+items.length)%items.length;
  timelineGalleryPreviewState.activeEntryId=items[nextIndex].id;
  renderTimelineGalleryModal();
}
function closeTimelineGalleryModal(){
  const modal=document.getElementById('timelineGalleryModal');
  if(modal) modal.classList.add('hidden');
  timelineGalleryPreviewState=null;
  if(!document.querySelector('.timeline-modal:not(.hidden)')) document.body.classList.remove('timeline-modal-open');
}
function renderPersonalTimelinePersonRow(name, dateKey){
  const fieldClassMap={시간:'time',장소:'location',취재기자:'reporter',TVU:'tvu',업무내용:'task'};
  const selectedDetail=getPersonalTimelineDetailSelection(dateKey, name)||{};
  const disabledAttr=isPastTimelineDateKey(dateKey)?' disabled aria-disabled="true"':'';
  const detailRows=Object.entries(personalTimelineDetailFieldOptions).map(([field, options])=>`<div class="personal-timeline-detail-row personal-timeline-detail-row-${fieldClassMap[field]||'default'}"><span class="personal-timeline-detail-value"><select class="personal-timeline-detail-select" data-date-key="${dateKey}" data-person="${escapeHtml(name)}" data-field="${field}" aria-label="${name} ${field}"${disabledAttr}>${renderPersonalTimelineDetailOptions(field, options, selectedDetail[field]||'')}</select></span></div>`).join('');
  return `<div class="personal-timeline-person-row" data-person-name="${escapeHtml(name)}"><span class="personal-timeline-person-name">${escapeHtml(name)}</span><div class="personal-timeline-person-controls">${detailRows}<button type="button" class="personal-timeline-save-btn" data-date-key="${dateKey}" data-person="${escapeHtml(name)}"${disabledAttr}>저장</button></div></div>`;
}
function renderPersonalTimelinePersonalColumn(dateKey){
  const activeName=personalTimelineMemberNames[0]||'';
  const tabsHtml=`<div class="personal-timeline-person-tabs">${personalTimelineMemberNames.map(name=>`<button type="button" class="personal-timeline-person-tab${name===activeName?' is-active':''}" data-person="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join('')}</div>`;
  return `<div class="personal-timeline-person-list" data-active-person="${escapeHtml(activeName)}">${tabsHtml}${personalTimelineMemberNames.map(name=>renderPersonalTimelinePersonRow(name, dateKey)).join('')}<section class="personal-timeline-summary-section"><div class="personal-timeline-summary-heading">누적일정 관리</div>${renderPersonalTimelineSummaryBoard(dateKey)}</section></div>`;
}
function renderPersonalTimelineItem(date, index, rows){
  const dateKey=formatTimelineKey(date);
  const isToday=dateKey===getTodayTimelineKey();
  const phase=getPersonalTimelinePhase(date);
  const dateLabel=`${date.getMonth()+1}월 ${date.getDate()}일`;
  const railDateLabel=formatPersonalTimelineRailDate(date);
  const generatedReports=getPersonalTimelineGeneratedReportsForDate(dateKey);
  const assignments=rows.map(row=>({
    label:row.label,
    value:getTimelineLabel(row.label, dateKey),
    kind:row.label==='영상취재팀 공동'?'shared':'personal'
  })).filter(item=>item.value);
  const columnsHtml=`<div class="personal-timeline-columns"><section class="personal-timeline-column personal-timeline-column-shared"><div class="personal-timeline-column-header-wrap">${renderPersonalTimelineSharedColumnHeader(dateKey, dateLabel)}</div><div class="personal-timeline-column-body">${renderPersonalTimelineSharedColumn(dateKey)}</div></section><section class="personal-timeline-column personal-timeline-column-personal"><div class="personal-timeline-column-header personal-timeline-column-header-personal"><span class="personal-timeline-column-title">개별 일정</span></div><div class="personal-timeline-column-body">${renderPersonalTimelinePersonalColumn(dateKey)}</div></section></div>`;
  const entriesHtml=columnsHtml;
  return `<article class="personal-timeline-item ${assignments.length||generatedReports.length?'has-entry':'is-empty'} personal-timeline-phase-${phase.key}${isToday?' is-open':''}" data-month="${date.getMonth()+1}" data-date-key="${dateKey}" data-date="${dateKey}"><div class="personal-timeline-rail"><span class="personal-timeline-dot"></span><div class="personal-timeline-date"><span class="personal-timeline-dday personal-timeline-dday-${phase.key}">${phase.label}</span><span class="personal-timeline-day">${railDateLabel}</span></div></div><div class="personal-timeline-content"><div class="personal-timeline-card">${entriesHtml}</div></div></article>`;
}
function renderPersonalTimelineMonthGroups(dates, rows){
  const groups=dates.reduce((result, date, index)=>{
    const label=`${date.getMonth()+1}월`;
    const last=result[result.length-1];
    const itemHtml=renderPersonalTimelineItem(date, index, rows);
    if(last&&last.label===label){
      last.items.push(itemHtml);
    }else{
      result.push({label,items:[itemHtml]});
    }
    return result;
  },[]);
  return groups.map(group=>`<section class="personal-timeline-month-group"><div class="personal-timeline-month-banner"><span class="personal-timeline-month-label">${group.label}</span></div><div class="personal-timeline-month-items">${group.items.join('')}</div></section>`).join('');
}
function updatePersonalTimelineHoverWave(list, activeItem){
  const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
  items.forEach(item=>item.classList.remove('is-hover-main','is-hover-near','is-hover-far'));
  if(!activeItem) return;
  const activeIndex=items.indexOf(activeItem);
  if(activeIndex===-1) return;
  [[0,'is-hover-main'],[-1,'is-hover-near'],[1,'is-hover-near'],[-2,'is-hover-far'],[2,'is-hover-far']].forEach(([offset,className])=>{
    const target=items[activeIndex+offset];
    if(target) target.classList.add(className);
  });
}
function activatePersonalTimelinePersonTab(personList, name=''){
  if(!personList||!name) return;
  personList.dataset.activePerson=name;
  personList.querySelectorAll('.personal-timeline-person-tab').forEach(button=>{
    button.classList.toggle('is-active', button.dataset.person===name);
  });
  personList.querySelectorAll('.personal-timeline-person-row').forEach(row=>{
    row.classList.toggle('is-open', row.dataset.personName===name);
  });
}
function formatPersonalTimelineNavigatorLabel(dateKey=''){
  const [year, month, day]=String(dateKey).split('-').map(Number);
  if(!year||!month||!day) return '';
  const date=new Date(year, month-1, day);
  const weekNames=['일','월','화','수','목','금','토'];
  return `${year}년 ${month}월 ${day}일 (${weekNames[date.getDay()]})`;
}
function getPersonalTimelineNavigatorTimeLabel(){
  const localContext=resolveHeaderLocalClockContext();
  const localTime=formatHeaderClock(localContext.timeZone);
  const koreaTime=formatHeaderClock('Asia/Seoul');
  return `현지시각 ${localTime} / 한국시각 ${koreaTime}`;
}
function updatePersonalTimelineNavigatorTimeLabel(nav=document.querySelector('.personal-timeline-mobile-nav')){
  const timeEl=nav?.querySelector('.personal-timeline-mobile-nav-time');
  if(!timeEl) return;
  timeEl.textContent=getPersonalTimelineNavigatorTimeLabel();
}
function updatePersonalTimelineMobileNavigator(detailCol, list){
  if(!detailCol||!list) return;
  const nav=detailCol.querySelector('.personal-timeline-mobile-nav');
  if(!nav) return;
  const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
  const activeIndex=Math.max(0, items.findIndex(item=>item.classList.contains('is-open')));
  const activeItem=items[activeIndex]||items[0];
  const labelEl=nav.querySelector('.personal-timeline-mobile-nav-label');
  const pickerInput=nav.querySelector('.personal-timeline-mobile-nav-picker');
  const prevButton=nav.querySelector('.personal-timeline-mobile-nav-prev');
  const nextButton=nav.querySelector('.personal-timeline-mobile-nav-next');
  updatePersonalTimelineNavigatorTimeLabel(nav);
  if(labelEl&&activeItem){
    labelEl.textContent=formatPersonalTimelineNavigatorLabel(activeItem.dataset.dateKey||'');
  }
  if(pickerInput){
    const firstDateKey=items[0]?.dataset.dateKey||'';
    const lastDateKey=items[items.length-1]?.dataset.dateKey||'';
    pickerInput.min=firstDateKey;
    pickerInput.max=lastDateKey;
    pickerInput.value=activeItem?.dataset.dateKey||firstDateKey;
  }
  if(prevButton){
    prevButton.disabled=activeIndex<=0;
  }
  if(nextButton){
    nextButton.disabled=activeIndex>=items.length-1;
  }
}
function setPersonalTimelineOpenItem(list, item){
  if(!list||!item) return;
  list.querySelectorAll('.personal-timeline-item.is-open').forEach(node=>node.classList.remove('is-open'));
  item.classList.add('is-open');
  updateHeaderTimes();
  const detailCol=document.getElementById('detailCol');
  updatePersonalTimelineDisplayedMonth(detailCol, list);
  if(isMobileViewport()){
    updatePersonalTimelineMobileNavigator(detailCol, list);
    applyMobileTimelineAStructure();
  }
}
function syncPersonalTimelineOpenItemFromScroll(list){
  if(!isMobileViewport()||!list) return;
  const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
  if(!items.length) return;
  const listBox=list.getBoundingClientRect();
  const anchorLeft=listBox.left + 20;
  let nearestItem=items[0];
  let nearestDistance=Number.POSITIVE_INFINITY;
  items.forEach(item=>{
    const itemBox=item.getBoundingClientRect();
    const distance=Math.abs(itemBox.left - anchorLeft);
    if(distance<nearestDistance){
      nearestDistance=distance;
      nearestItem=item;
    }
  });
  setPersonalTimelineOpenItem(list, nearestItem);
}
function getVisiblePersonalTimelineItems(list){
  return getPersonalTimelineItems(list).filter(item=>item.getClientRects().length>0);
}
function updatePersonalTimelineDisplayedMonth(detailCol, list){
  if(!detailCol||!list) return;
  const stickyEl=detailCol.querySelector('.personal-timeline-month-sticky');
  if(!stickyEl) return;
  const allItems=getPersonalTimelineItems(list);
  if(!allItems.length) return;
  const visibleItems=getVisiblePersonalTimelineItems(list);
  let activeItem=null;
  if(isMobileViewport()){
    activeItem=visibleItems.find(item=>item.classList.contains('is-open'))
      || allItems.find(item=>item.classList.contains('is-open'))
      || visibleItems[0]
      || allItems[0]
      || null;
  }else{
    const items=visibleItems.length ? visibleItems : allItems;
    const stickyTop=stickyEl.getBoundingClientRect().bottom + 12;
    activeItem=items[0]||null;
    items.forEach(item=>{
      if(item.getBoundingClientRect().top<=stickyTop){
        activeItem=item;
      }
    });
  }
  if(!activeItem) return;
  const month=activeItem.dataset.month||'';
  stickyEl.textContent=month?`${month}월`:'';
  stickyEl.dataset.activeMonth=month;
  stickyEl.dataset.activeDateKey=activeItem.dataset.dateKey||'';
}
function setupPersonalTimelineStickyMonth(detailCol){
  if(personalTimelineStickyMonthCleanup){
    personalTimelineStickyMonthCleanup();
    personalTimelineStickyMonthCleanup=null;
  }
  const stickyEl=detailCol.querySelector('.personal-timeline-month-sticky');
  const list=detailCol.querySelector('.personal-timeline-list');
  if(!stickyEl||!list) return;
  const scrollContainer=getPersonalTimelineScrollContainer(list);
  let stickyMonthFrameId=null;
  const updateStickyMonth=()=>{
    stickyMonthFrameId=null;
    updatePersonalTimelineDisplayedMonth(detailCol, list);
  };
  const onScroll=()=>{
    if(stickyMonthFrameId!==null) return;
    stickyMonthFrameId=window.requestAnimationFrame(updateStickyMonth);
  };
  if(scrollContainer===window){
    window.addEventListener('scroll', onScroll, {passive:true});
  }else{
    scrollContainer.addEventListener('scroll', onScroll, {passive:true});
  }
  window.addEventListener('resize', updateStickyMonth);
  updateStickyMonth();
  personalTimelineStickyMonthCleanup=()=>{
    if(scrollContainer===window){
      window.removeEventListener('scroll', onScroll);
    }else{
      scrollContainer.removeEventListener('scroll', onScroll);
    }
    window.removeEventListener('resize', updateStickyMonth);
    if(stickyMonthFrameId!==null){
      window.cancelAnimationFrame(stickyMonthFrameId);
      stickyMonthFrameId=null;
    }
  };
}
function getPersonalTimelineItems(list){
  return Array.from(list?.querySelectorAll('.personal-timeline-item')||[]);
}
function findBestPersonalTimelineTarget(items, dateKey=''){
  if(!items.length) return null;
  if(!dateKey) return items[0]||null;
  return items.find(item=>item.dataset.dateKey===dateKey)
    || items.find(item=>String(item.dataset.dateKey||'')>dateKey)
    || [...items].reverse().find(item=>String(item.dataset.dateKey||'')<dateKey)
    || items[0]
    || null;
}
function findPersonalTimelineMonthStartTarget(items, monthValue=''){
  if(!items.length) return null;
  const normalizedMonth=String(parseInt(monthValue, 10)||'').trim();
  if(!normalizedMonth) return items[0]||null;
  const monthItems=items.filter(item=>String(item.dataset.month||'')===normalizedMonth);
  if(!monthItems.length) return items[0]||null;
  return monthItems.find(item=>String(item.dataset.dateKey||'').endsWith('-01'))
    || monthItems[0]
    || items[0]
    || null;
}
function getActivePersonalTimelineMonth(detailCol, items=[]){
  const stickyEl=detailCol?.querySelector('.personal-timeline-month-sticky');
  const stickyMonth=String(stickyEl?.dataset.activeMonth||'').trim();
  if(stickyMonth) return stickyMonth;
  const stickyText=String(stickyEl?.textContent||'').trim();
  const matchedMonth=stickyText.match(/(\d{1,2})월/);
  if(matchedMonth?.[1]) return matchedMonth[1];
  const activeItem=items.find(item=>item.classList.contains('is-open'));
  return String(activeItem?.dataset.month||items[0]?.dataset.month||'').trim();
}
function getPersonalTimelineScrollContainer(list){
  let node=list?.parentElement||null;
  while(node&&node!==document.body){
    const style=window.getComputedStyle(node);
    const overflowY=style.overflowY||'';
    if(node.scrollHeight>node.clientHeight+1&&/(auto|scroll|overlay)/.test(overflowY)){
      return node;
    }
    node=node.parentElement;
  }
  return window;
}
function getPersonalTimelineWindowOffset(){
  const board=document.getElementById('headerReportBoard');
  const boardHeight=board ? board.getBoundingClientRect().height : 0;
  const header=document.querySelector('.header');
  const headerHeight=header ? header.getBoundingClientRect().height : 0;
  const topbar=document.querySelector('.personal-timeline-topbar');
  const topbarHeight=topbar ? topbar.getBoundingClientRect().height : 0;
  return Math.min(headerHeight + boardHeight + topbarHeight + 36, 420);
}
function scrollPersonalTimelineNode(target, options={}){
  if(!target) return;
  const {offset=16}=options;
  const openedPanel=target.classList?.contains('is-open')
    ? target.querySelector('.personal-timeline-card')||target.querySelector('.personal-timeline-column-shared')
    : null;
  const panel=openedPanel||target;
  afterTabRenderedScroll(panel, offset);
}
function scrollPersonalTimelineToTop(options={}){
  const detailCol=document.getElementById('detailCol');
  const list=detailCol?.querySelector('.personal-timeline-list');
  if(!list) return;
  const items=getPersonalTimelineItems(list);
  if(!items.length) return;
  const target=items[0];
  if(!target) return;
  if(isMobileViewport()){
    setPersonalTimelineOpenItem(list, target);
  }
  scrollPersonalTimelineNode(target, options);
}
function scrollPersonalTimelineToDate(dateKey='', options={}){
  const detailCol=document.getElementById('detailCol');
  const list=detailCol?.querySelector('.personal-timeline-list')||document.querySelector('.personal-timeline-list');
  if(!list) return;
  const items=getPersonalTimelineItems(list);
  if(!items.length) return;
  const target=findBestPersonalTimelineTarget(items, dateKey);
  if(!target) return;
  if(isMobileViewport()){
    setPersonalTimelineOpenItem(list, target);
  }
  scrollPersonalTimelineNode(target, options);
}
function renderPersonalTimelineDayNavigator(dateKey){
  const normalizedDateKey=setPersonalTimelineViewDateKey(dateKey);
  const dates=getTimelineDates();
  const currentIndex=Math.max(0, dates.findIndex(date=>formatTimelineKey(date)===normalizedDateKey));
  const currentDate=dates[currentIndex]||dates[0]||new Date();
  const title=formatPersonalTimelineNavigatorLabel(normalizedDateKey)||`${currentDate.getMonth()+1}월 ${currentDate.getDate()}일`;
  return `<div class="personal-timeline-day-nav"><div class="personal-timeline-day-nav-main"><button type="button" class="personal-timeline-day-nav-btn" data-timeline-day-move="-1"${currentIndex<=0?' disabled aria-disabled="true"':''}>이전 날짜</button><label class="personal-timeline-day-picker"><span>${escapeHtml(title)}</span><input type="date" class="personal-timeline-day-picker-input" data-timeline-day-picker="true" value="${escapeHtml(normalizedDateKey)}" min="${escapeHtml(formatTimelineKey(dates[0]||currentDate))}" max="${escapeHtml(formatTimelineKey(dates[dates.length-1]||currentDate))}"></label><button type="button" class="personal-timeline-day-nav-btn" data-timeline-day-move="1"${currentIndex>=dates.length-1?' disabled aria-disabled="true"':''}>다음 날짜</button></div><div class="personal-timeline-day-actions"><button type="button" class="personal-timeline-quick-btn timeline-gallery-open-btn" data-timeline-action="gallery">갤러리</button><button type="button" class="personal-timeline-quick-btn" data-timeline-action="today">오늘로</button></div></div>`;
}
function renderPersonalTimelineDayCard(dateKey, view){
  const normalizedDateKey=setPersonalTimelineViewDateKey(dateKey);
  const dates=getTimelineDates();
  const currentDate=dates.find(date=>formatTimelineKey(date)===normalizedDateKey)||dates[0]||new Date();
  const phase=getPersonalTimelinePhase(currentDate);
  const dateLabel=`${currentDate.getMonth()+1}월 ${currentDate.getDate()}일`;
  const generatedReports=getPersonalTimelineOngoingReportsForDate(normalizedDateKey);
  const assignments=(view?.rows||[]).map(row=>({
    label:row.label,
    value:getTimelineLabel(row.label, normalizedDateKey),
    kind:row.label==='영상취재팀 공동'?'shared':'personal'
  })).filter(item=>item.value);
  const hasEntries=assignments.length||generatedReports.length;
  return `<article class="personal-timeline-item personal-timeline-day-item ${hasEntries?'has-entry':'is-empty'} personal-timeline-phase-${phase.key} is-open" data-month="${currentDate.getMonth()+1}" data-date-key="${normalizedDateKey}" data-date="${normalizedDateKey}"><div class="personal-timeline-day-head"><div class="personal-timeline-day-badges"><span class="personal-timeline-dday personal-timeline-dday-${phase.key}">${phase.label}</span><span class="personal-timeline-day-label">${escapeHtml(formatPersonalTimelineNavigatorLabel(normalizedDateKey)||dateLabel)}</span></div><div class="personal-timeline-day-clock">${escapeHtml(getPersonalTimelineNavigatorTimeLabel())}</div></div><div class="personal-timeline-content"><div class="personal-timeline-card"><div class="personal-timeline-columns"><section class="personal-timeline-column personal-timeline-column-shared"><div class="personal-timeline-column-header-wrap">${renderPersonalTimelineSharedColumnHeader(normalizedDateKey, dateLabel)}</div><div class="personal-timeline-column-body">${renderPersonalTimelineSharedColumn(normalizedDateKey)}</div></section><section class="personal-timeline-column personal-timeline-column-personal"><div class="personal-timeline-column-header personal-timeline-column-header-personal"><span class="personal-timeline-column-title">개별 일정</span><span class="personal-timeline-column-date">${escapeHtml(dateLabel)}</span></div><div class="personal-timeline-column-body">${renderPersonalTimelinePersonalColumn(normalizedDateKey)}</div></section></div></div></div></article>`;
}
function renderPersonalTimelineDayView(view){
  const dateKey=setPersonalTimelineViewDateKey(currentPersonalTimelineDateKey);
  return `<div class="personal-timeline-list is-day-view">${renderPersonalTimelineDayNavigator(dateKey)}${renderPersonalTimelineDayCard(dateKey, view)}</div>`;
}
function renderPersonalTimelineSchedule(view){
  resetPersonalTimelineEndEditorState();
  setPersonalTimelineViewDateKey(currentPersonalTimelineDateKey||getTodayTimelineKey());
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  detailCol.classList.add('timeline-mode','personal-timeline-mode');
  detailCol.classList.remove('personal-timeline-gallery-mode');
  document.getElementById('detailTitle').textContent=view.title;
  document.getElementById('detailSubtitle').textContent='';
  detailTable.parentElement.classList.add('timeline-card','personal-timeline-card');
  detailTable.parentElement.classList.remove('timeline-gallery-shell-card');
  detailTable.className='data-table hidden';
  detailTable.innerHTML='';
  detailCol.querySelectorAll('.personal-timeline-topbar,.personal-timeline-mobile-nav,.personal-timeline-list,.personal-timeline-day-nav').forEach(node=>node.remove());
  detailTable.insertAdjacentHTML('afterend', renderPersonalTimelineDayView(view));
  const list=detailCol.querySelector('.personal-timeline-list');
  if(list){
    list.onchange=event=>{
      const dayPicker=event.target.closest('[data-timeline-day-picker]');
      if(dayPicker&&list.contains(dayPicker)){
        setPersonalTimelineViewDateKey(dayPicker.value||'');
        renderPersonalTimelineSchedule(view);
        return;
      }
      const select=event.target.closest('.personal-timeline-detail-select');
      if(!select||!list.contains(select)) return;
      setPersonalTimelineRowDirty(select.closest('.personal-timeline-person-row'), true);
      if(select.dataset.field==='장소'){
        updateHeaderTimes();
      }
    };
    list.onclick=event=>{
      event.stopPropagation();
      const dayMoveButton=event.target.closest('[data-timeline-day-move]');
      if(dayMoveButton&&list.contains(dayMoveButton)){
        movePersonalTimelineViewDate(Number(dayMoveButton.dataset.timelineDayMove||0));
        renderPersonalTimelineSchedule(view);
        return;
      }
      const quickActionButton=event.target.closest('.personal-timeline-quick-btn[data-timeline-action]');
      if(quickActionButton&&list.contains(quickActionButton)){
        if(quickActionButton.dataset.timelineAction==='gallery'){
          openTimelineGalleryView();
          return;
        }
        setPersonalTimelineViewDateKey(getTodayTimelineKey());
        renderPersonalTimelineSchedule(view);
        return;
      }
      const personTab=event.target.closest('.personal-timeline-person-tab');
      if(personTab&&list.contains(personTab)){
        activatePersonalTimelinePersonTab(personTab.closest('.personal-timeline-person-list'), personTab.dataset.person||'');
        return;
      }
      const saveButton=event.target.closest('.personal-timeline-save-btn');
      if(saveButton&&list.contains(saveButton)){
        savePersonalTimelinePersonRow(saveButton.closest('.personal-timeline-person-row'));
        return;
      }
      const sharedWriteButton=event.target.closest('.personal-timeline-shared-write-btn');
      if(sharedWriteButton&&list.contains(sharedWriteButton)){
        openPersonalTimelineSharedEditor(sharedWriteButton.closest('.personal-timeline-item'), sharedWriteButton.dataset.dateKey||'');
        return;
      }
      const sharedEditToggleButton=event.target.closest('.personal-timeline-shared-edit-toggle-btn');
      if(sharedEditToggleButton&&list.contains(sharedEditToggleButton)){
        togglePersonalTimelineSharedEditMode(sharedEditToggleButton.closest('.personal-timeline-item'), sharedEditToggleButton.dataset.dateKey||'');
        return;
      }
      const sharedDeleteButton=event.target.closest('.personal-timeline-shared-delete-btn');
      if(sharedDeleteButton&&list.contains(sharedDeleteButton)){
        togglePersonalTimelineSharedDeleteMode(sharedDeleteButton.closest('.personal-timeline-item'), sharedDeleteButton.dataset.dateKey||'');
        return;
      }
      const sharedEntryEditButton=event.target.closest('.personal-timeline-shared-entry-edit-btn');
      if(sharedEntryEditButton&&list.contains(sharedEntryEditButton)){
        openPersonalTimelineSharedEditor(sharedEntryEditButton.closest('.personal-timeline-item'), sharedEntryEditButton.dataset.dateKey||'', Number(sharedEntryEditButton.dataset.entryIndex));
        return;
      }
      const sharedEntryDeleteButton=event.target.closest('.personal-timeline-shared-entry-delete-btn');
      if(sharedEntryDeleteButton&&list.contains(sharedEntryDeleteButton)){
        deletePersonalTimelineSharedEntryAt(sharedEntryDeleteButton.closest('.personal-timeline-item'), sharedEntryDeleteButton.dataset.dateKey||'', Number(sharedEntryDeleteButton.dataset.entryIndex));
        return;
      }
      const deleteButton=event.target.closest('.personal-timeline-summary-delete');
      if(deleteButton&&list.contains(deleteButton)){
        const item=deleteButton.closest('.personal-timeline-item');
        const dateKey=deleteButton.dataset.dateKey||'';
        const personName=deleteButton.dataset.person||'';
        const entryIndex=Number(deleteButton.dataset.entryIndex);
        if(deletePersonalTimelineDetailEntry(dateKey, personName, entryIndex)){
          updatePersonalTimelineSummaryBoard(item, item?.dataset.dateKey||dateKey);
          syncPersonalTimelinePersonRowFromSavedState(item, item?.dataset.dateKey||dateKey, personName);
          updatePersonalTimelineItemEntryState(item, item?.dataset.dateKey||dateKey);
          updateHeaderTimes();
        }
        return;
      }
      const endButton=event.target.closest('.personal-timeline-summary-end');
      if(endButton&&list.contains(endButton)){
        openPersonalTimelineEndEditor(endButton.dataset.dateKey||'', endButton.dataset.person||'', Number(endButton.dataset.entryIndex));
        const item=endButton.closest('.personal-timeline-item');
        if(item) updatePersonalTimelineSummaryBoard(item, item.dataset.dateKey||'');
        return;
      }
      const endCancelButton=event.target.closest('[data-end-editor-cancel="true"]');
      if(endCancelButton&&list.contains(endCancelButton)){
        resetPersonalTimelineEndEditorState();
        const item=endCancelButton.closest('.personal-timeline-item');
        const dateKey=item?.dataset.dateKey||'';
        if(item&&dateKey) updatePersonalTimelineSummaryBoard(item, dateKey);
        return;
      }
      const endSaveButton=event.target.closest('[data-end-editor-save="true"]');
      if(endSaveButton&&list.contains(endSaveButton)){
        const item=endSaveButton.closest('.personal-timeline-item');
        const originalDateKey=endSaveButton.dataset.dateKey||'';
        const personName=endSaveButton.dataset.person||'';
        const entryIndex=Number(endSaveButton.dataset.entryIndex);
        const endDate=String(item?.querySelector('[data-end-editor-date]')?.value||'').trim();
        const endTime=String(item?.querySelector('[data-end-editor-time]')?.value||'').trim();
        if(savePersonalTimelineEndInfo(originalDateKey, personName, entryIndex, endDate, endTime)){
          if(item){
            updatePersonalTimelineSummaryBoard(item, item.dataset.dateKey||originalDateKey);
            syncPersonalTimelinePersonRowFromSavedState(item, item.dataset.dateKey||originalDateKey, personName);
            updatePersonalTimelineItemEntryState(item, item.dataset.dateKey||originalDateKey);
          }
          updateHeaderTimes();
        }
      }
    };
    list.querySelectorAll('.personal-timeline-person-list').forEach(personList=>{
      const activeName=personList.dataset.activePerson||'';
      if(activeName){
        activatePersonalTimelinePersonTab(personList, activeName);
      }
    });
    ensureTimelineExportButton();
    applyMobileTimelineAStructure();
  }
  detailCol.onclick=null;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
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
  document.body.insertAdjacentHTML('beforeend',`<div id="timelineModal" class="timeline-modal hidden"><div class="timeline-modal-backdrop" onclick="closeTimelineModal()"></div><div class="timeline-modal-panel" role="dialog" aria-modal="true" aria-labelledby="timelineModalTitle"><div class="timeline-modal-header"><h3 id="timelineModalTitle">일정 입력</h3><button type="button" class="timeline-modal-close" onclick="closeTimelineModal()" aria-label="닫기">×</button></div><p id="timelineModalMeta" class="timeline-modal-meta"></p><textarea id="timelineModalInput" class="timeline-modal-input" placeholder="선택한 날짜 구간의 일정을 입력하세요"></textarea><div id="timelineModalMedia" class="timeline-modal-media hidden"><label class="timeline-modal-upload"><span>사진 첨부</span><input id="timelineModalFile" type="file" accept="image/*" multiple></label><div id="timelineModalMediaList" class="timeline-modal-media-list"></div></div><div class="timeline-modal-actions"><button type="button" class="timeline-modal-btn" onclick="clearTimelineSelectionEntries()">지우기</button><button type="button" class="timeline-modal-btn" onclick="closeTimelineModal()">취소</button><button type="button" class="timeline-modal-btn primary" onclick="saveTimelineSelection()">저장</button></div></div></div>`);
  const modal=document.getElementById('timelineModal');
  const input=document.getElementById('timelineModalInput');
  const fileInput=document.getElementById('timelineModalFile');
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
  if(fileInput){
    fileInput.addEventListener('change', async event=>{
      if(!pendingTimelineSelection||pendingTimelineSelection.mode!=='shared') return;
      const nextItems=await readTimelineModalFiles(event.target.files);
      pendingTimelineSelection.mediaItems=[...(pendingTimelineSelection.mediaItems||[]), ...nextItems];
      renderTimelineModalMediaList();
      fileInput.value='';
    });
  }
  modal.addEventListener('click', event=>{
    const removeButton=event.target.closest('.timeline-modal-media-remove');
    if(!removeButton||!pendingTimelineSelection||pendingTimelineSelection.mode!=='shared') return;
    const mediaId=removeButton.dataset.mediaId||'';
    pendingTimelineSelection.mediaItems=(pendingTimelineSelection.mediaItems||[]).filter(item=>item.id!==mediaId);
    renderTimelineModalMediaList();
  });
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
  const title=document.getElementById('timelineModalTitle');
  const meta=document.getElementById('timelineModalMeta');
  const input=document.getElementById('timelineModalInput');
  const labels=[...new Set(pendingTimelineSelection.dates.map(dateKey=>getTimelineLabel(pendingTimelineSelection.person,dateKey)).filter(Boolean))];
  if(title){
    title.textContent=pendingTimelineSelection.mode==='shared'
      ? (pendingTimelineSelection.sharedAction==='edit' ? '공용 일정 수정' : '공용 일정 작성')
      : '일정 입력';
  }
  meta.textContent=`${pendingTimelineSelection.person} | ${getTimelineRangeLabel(pendingTimelineSelection.dates)}`;
  input.value=typeof pendingTimelineSelection.initialText==='string' ? pendingTimelineSelection.initialText : (labels.length===1?labels[0]:'');
  if(pendingTimelineSelection.mode==='shared'){
    pendingTimelineSelection.mediaItems=(pendingTimelineSelection.mediaItems||[]).map(item=>({...item}));
  }
  renderTimelineModalMediaList();
  document.body.classList.add('timeline-modal-open');
  modal.classList.remove('hidden');
  syncMobileHistoryState();
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
  const input=document.getElementById('timelineModalInput');
  const mediaWrap=document.getElementById('timelineModalMedia');
  const mediaList=document.getElementById('timelineModalMediaList');
  const fileInput=document.getElementById('timelineModalFile');
  if(modal) modal.classList.add('hidden');
  if(input) input.value='';
  if(mediaWrap) mediaWrap.classList.add('hidden');
  if(mediaList) mediaList.innerHTML='';
  if(fileInput) fileInput.value='';
  document.body.classList.remove('timeline-modal-open');
  pendingTimelineSelection=null;
  clearTimelinePreview();
  syncMobileHistoryState();
}
function writeTimelineSelection(value){
  if(!pendingTimelineSelection) return;
  const text=value.trim();
  const selection=pendingTimelineSelection;
  if(typeof selection.onWrite==='function'){
    selection.onWrite(text, selection);
    closeTimelineModal();
    return;
  }
  const {person,dates,cells}=selection;
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
  if(pendingTimelineSelection?.mode==='shared'){
    pendingTimelineSelection.mediaItems=[];
  }
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
function getWorldCupOpeningDiffDaysForDate(date){
  const targetUtc=toUtcFromKstDateParts(date.getFullYear(), date.getMonth()+1, date.getDate());
  const kickoffUtc=toUtcFromKstDateParts(WORLD_CUP_OPENING_DATE.year, WORLD_CUP_OPENING_DATE.month, WORLD_CUP_OPENING_DATE.day);
  return Math.round((kickoffUtc-targetUtc)/86400000);
}
function getWorldCupOpeningLabel(diffDays){
  if(diffDays>0) return `월드컵 D-${diffDays}`;
  if(diffDays===0) return '월드컵 개막일';
  return `월드컵 D+${Math.abs(diffDays)}`;
}
function getWorldCupCountdownText(){
  const today=getKstDateParts();
  const diffDays=getWorldCupOpeningDiffDaysForDate(new Date(today.year, today.month-1, today.day));
  if(diffDays>0) return `월드컵 개막 D-${diffDays}`;
  if(diffDays===0) return '월드컵 개막 D-DAY';
  return `월드컵 개막 D+${Math.abs(diffDays)}`;
}
const headerCountdownSegmentMap = {
  '0':['top','top-left','top-right','bottom-left','bottom-right','bottom'],
  '1':['top-right','bottom-right'],
  '2':['top','top-right','middle','bottom-left','bottom'],
  '3':['top','top-right','middle','bottom-right','bottom'],
  '4':['top-left','top-right','middle','bottom-right'],
  '5':['top','top-left','middle','bottom-right','bottom'],
  '6':['top','top-left','middle','bottom-left','bottom-right','bottom'],
  '7':['top','top-right','bottom-right'],
  '8':['top','top-left','top-right','middle','bottom-left','bottom-right','bottom'],
  '9':['top','top-left','top-right','middle','bottom-right','bottom']
};
function renderHeaderCountdownDigit(digit=''){
  const activeSegments=headerCountdownSegmentMap[digit];
  if(!activeSegments){
    return `<span class="header-countdown-word">${digit}</span>`;
  }
  const segmentNames=['top','top-left','top-right','middle','bottom-left','bottom-right','bottom'];
  const segments=segmentNames.map(name=>`<span class="header-countdown-segment segment-${name}${activeSegments.includes(name)?' is-on':''}"></span>`).join('');
  return `<span class="header-countdown-digit" data-digit="${digit}">${segments}</span>`;
}
function renderHeaderCountdownDisplay(value='', prefix='D-'){
  const text=String(value||'').trim();
  const sideCopy=`<span class="header-countdown-sidecopy"><span class="header-countdown-side-label">월드컵 개막</span><span class="header-countdown-side-prefix">${escapeHtml(prefix)}</span></span>`;
  if(!text) return `<span class="header-countdown-display">${sideCopy}<span class="header-countdown-word">DAY</span></span>`;
  if(/^\d+$/.test(text)){
    return `<span class="header-countdown-display">${sideCopy}<span class="header-countdown-digits">${text.split('').map(renderHeaderCountdownDigit).join('')}</span></span>`;
  }
  return `<span class="header-countdown-display">${sideCopy}<span class="header-countdown-word">${text}</span></span>`;
}
function getWorldCupCountdownDisplayState(){
  const today=getKstDateParts();
  const diffDays=getWorldCupOpeningDiffDaysForDate(new Date(today.year, today.month-1, today.day));
  const absoluteDays=Math.abs(diffDays);
  const value=absoluteDays<10 ? `0${absoluteDays}` : String(absoluteDays);
  if(diffDays>0) return {prefix:'D-', value};
  if(diffDays===0) return {prefix:'D-DAY', value:'DAY'};
  return {prefix:'D+', value};
}
function formatHeaderClock(timeZone){
  return new Intl.DateTimeFormat('ko-KR',{
    timeZone,
    hour:'2-digit',
    minute:'2-digit',
    hour12:false
  }).format(new Date());
}
function getDeviceTimeZone(){
  try{
    return Intl.DateTimeFormat().resolvedOptions().timeZone||'';
  }catch(error){
    return '';
  }
}
function resolveScheduleCityContext(value=''){
  const raw=String(value||'').trim();
  if(!raw) return {city:'',timeZone:''};
  const normalized=raw.toLowerCase();
  const cityMatch=scheduleCityAliases.find(([alias])=>normalized.includes(alias));
  if(cityMatch){
    return {
      city:cityMatch[1].city,
      timeZone:cityMatch[1].timeZone
    };
  }
  const stadiumKey=getScheduleStadiumKey(raw);
  if(stadiumKey){
    return {
      city:scheduleStadiumCities[stadiumKey]||raw,
      timeZone:scheduleStadiumTimeZones[stadiumKey]||''
    };
  }
  return {city:raw,timeZone:''};
}
function resolveActiveHeaderClockCity(){
  const activePlaceSelect=document.querySelector('.personal-timeline-item.is-open .personal-timeline-detail-select[data-field="장소"]');
  const selectedPlace=String(activePlaceSelect?.value||'').trim();
  const selectedCity=resolveScheduleCityContext(selectedPlace).city;
  if(selectedCity) return selectedCity;
  const upcomingReport=getAllPersonalTimelineGeneratedReports()[0];
  const upcomingPlace=String(upcomingReport?.detail?.장소||'').trim();
  const upcomingCity=resolveScheduleCityContext(upcomingPlace).city;
  if(upcomingCity) return upcomingCity;
  if(currentMexicoStadiumKey&&mexicoStadiums[currentMexicoStadiumKey]){
    return mexicoStadiums[currentMexicoStadiumKey].city;
  }
  return resolveScheduleCityContext(headerLocalClockState.place).city||String(headerLocalClockState.place||'').trim();
}
function resolveHeaderLocalClockContext(){
  const fallbackTimeZone=headerLocalClockState.fallbackTimeZone;
  const resolvedCity=resolveActiveHeaderClockCity();
  if(headerLocalClockState.mode===headerClockModes.device){
    const deviceTimeZone=getDeviceTimeZone();
    return {
      label:'휴대폰시각',
      timeZone:deviceTimeZone||fallbackTimeZone,
      sourceLabel:resolvedCity||deviceTimeZone||'휴대폰 기준'
    };
  }
  const cityContext=resolveScheduleCityContext(resolvedCity);
  const city=cityContext.city||resolvedCity;
  if(city){
    headerLocalClockState.place=city;
  }
  return {
    label:'현지시각',
    timeZone:cityContext.timeZone||fallbackTimeZone,
    sourceLabel:city ? `${city} 기준` : '현지 기준'
  };
}
function setHeaderLocalClockMode(mode=''){
  headerLocalClockState.mode=mode===headerClockModes.device ? headerClockModes.device : headerClockModes.venue;
  updateHeaderTimes();
}
function setHeaderLocalClockPlace(place=''){
  const nextPlace=String(place||'').trim();
  if(nextPlace){
    headerLocalClockState.place=resolveScheduleCityContext(nextPlace).city||nextPlace;
  }
  updateHeaderTimes();
}
function updateHeaderTimes(){
  const localPlaceEl=document.getElementById('headerLocalTimePlace');
  const localLabelEl=document.getElementById('headerLocalTimeLabel');
  const localEl=document.getElementById('headerLocalTime');
  const koreaEl=document.getElementById('headerKoreaTime');
  if(!localEl||!koreaEl) return;
  const localContext=resolveHeaderLocalClockContext();
  if(localPlaceEl){
    localPlaceEl.textContent=localContext.sourceLabel.replace(' 기준','');
  }
  if(localLabelEl){
    localLabelEl.textContent=localContext.label;
  }
  localEl.textContent=formatHeaderClock(localContext.timeZone);
  localEl.title=localContext.sourceLabel;
  koreaEl.textContent=formatHeaderClock('Asia/Seoul');
  koreaEl.title='대한민국 기준';
  updatePersonalTimelineNavigatorTimeLabel();
}
function startHeaderTimeTicker(){
  updateHeaderTimes();
  if(typeof window==='undefined'||headerTimeTimerId!==null) return;
  headerTimeTimerId=window.setInterval(updateHeaderTimes, 30000);
}
function updateHeaderCountdown(){
  const countdownEl=document.getElementById('headerCountdown');
  if(!countdownEl) return;
  const numberEl=countdownEl.querySelector('.header-countdown-number');
  if(!numberEl) return;
  const displayState=getWorldCupCountdownDisplayState();
  numberEl.innerHTML=renderHeaderCountdownDisplay(displayState.value, displayState.prefix);
  countdownEl.setAttribute('aria-label', `월드컵 개막 ${displayState.prefix}${displayState.value}`);
}
function isMobileViewport(){
  return typeof window!=='undefined'&&window.matchMedia('(max-width: 768px)').matches;
}
function getDesktopTabStackIds(){
  return ['newsTabStack','bracketTabStack','mexicoStadiumTabStack'];
}
function getMobilePanelIds(){
  return ['newsCol','newsBroadcasterCol','bracketStageCol','groupCol','groupASquadCol','equipmentUserCol','mexicoStadiumCol','mexicoStadiumSectionCol','detailCol'];
}
function getVisibleMobilePanels(){
  return getMobilePanelIds().map(id=>document.getElementById(id)).filter(panel=>panel&&!panel.classList.contains('hidden'));
}
function getVisibleMobileModalCount(){
  const modalIds=['timelineModal','newsEditorModal','squadInjuryModal','mexicoStadiumEditorModal','equipmentEditorModal','equipmentCarnetViewerModal','equipmentCarnetExportModal','equipmentFileStorageViewerModal'];
  return modalIds.reduce((count, id)=>{
    const modal=document.getElementById(id);
    return count + (modal&&!modal.classList.contains('hidden') ? 1 : 0);
  }, 0);
}
function getMobileNavigationDepth(){
  return isMobileViewport() ? getVisibleMobilePanels().length + getVisibleMobileModalCount() : 0;
}
function updateMobileSubviewPanels(){
  getMobilePanelIds().forEach(id=>document.getElementById(id)?.classList.remove('mobile-hidden-panel'));
  if(!isMobileViewport()) return;
  const visiblePanels=getVisibleMobilePanels();
  const detailVisible=visiblePanels.some(panel=>panel.id==='detailCol');
  if(detailVisible){
    visiblePanels.filter(panel=>panel.id!=='detailCol').forEach(panel=>panel.classList.add('mobile-hidden-panel'));
    return;
  }
  const newsYearVisible=visiblePanels.some(panel=>panel.id==='newsCol');
  const newsBroadcasterVisible=visiblePanels.some(panel=>panel.id==='newsBroadcasterCol');
  if(newsYearVisible&&newsBroadcasterVisible){
    visiblePanels.filter(panel=>panel.id!=='newsCol'&&panel.id!=='newsBroadcasterCol').forEach(panel=>panel.classList.add('mobile-hidden-panel'));
    return;
  }
  visiblePanels.slice(0,-1).forEach(panel=>panel.classList.add('mobile-hidden-panel'));
}
function getMobileSubviewTitle(){
  const detailCol=document.getElementById('detailCol');
  const detailTitle=document.getElementById('detailTitle')?.textContent?.trim();
  if(detailCol&&!detailCol.classList.contains('hidden')&&!detailCol.classList.contains('mobile-hidden-panel')&&detailTitle) return detailTitle;
  const activeItem=document.querySelector('.column:not(.hidden):not(.mobile-hidden-panel) .item.active');
  if(activeItem){
    const itemText=activeItem.textContent.trim();
    if(itemText) return itemText;
  }
  const activeMenu=document.querySelector('.sidebar .menu.active');
  return activeMenu?.textContent.trim()||'메뉴';
}
function updateMobileSubviewBar(){
  const bar=document.getElementById('mobileSubviewBar');
  const title=document.getElementById('mobileSubviewTitle');
  if(!bar||!title) return;
  const hasOpenSubview=getVisibleMobilePanels().length>0;
  const shouldShow=isMobileViewport()&&hasOpenSubview;
  bar.classList.toggle('hidden', !shouldShow);
  if(shouldShow){
    title.textContent=getMobileSubviewTitle();
  }
  syncMobileSubviewActions();
}
function syncMobileSubviewActions(){
  const specialBtn=document.getElementById('mobileSpecialReportToggleBtn');
  if(!specialBtn) return;
  const bar=document.getElementById('mobileSubviewBar');
  const shouldShow=isMobileViewport()
    && !!bar
    && !bar.classList.contains('hidden')
    && !!document.getElementById('newsProgrammingMenu')?.classList.contains('active');
  specialBtn.classList.toggle('hidden', !shouldShow);
  specialBtn.style.display=shouldShow?'':'none';
  specialBtn.classList.toggle('is-active', shouldShow&&isNewsProgrammingSpecialComposerOpen);
  specialBtn.setAttribute('aria-expanded', shouldShow&&isNewsProgrammingSpecialComposerOpen?'true':'false');
  specialBtn.textContent=isNewsProgrammingSpecialComposerOpen?'특보 닫기':'특보';
}
const MOBILE_HISTORY_GUARD_KEY='__worldcupMobileGuard';
let mobileHistoryGuardInitialized=false;
let mobileHistoryHandlingPop=false;
let mobileHistoryDepth=0;
function closeMobileOverlayModalIfOpen(){
  const closers=[
    {id:'timelineModal', close:closeTimelineModal},
    {id:'newsEditorModal', close:closeNewsEditorModal},
    {id:'squadInjuryModal', close:closeSquadInjuryModal},
    {id:'mexicoStadiumEditorModal', close:closeMexicoStadiumEditorModal},
    {id:'equipmentEditorModal', close:closeEquipmentEditorModal},
    {id:'equipmentCarnetViewerModal', close:closeEquipmentCarnetViewerModal},
    {id:'equipmentCarnetExportModal', close:closeEquipmentCarnetExportModal},
    {id:'equipmentFileStorageViewerModal', close:closeEquipmentFileStorageViewerModal}
  ];
  for(const entry of closers){
    const modal=document.getElementById(entry.id);
    if(modal&&!modal.classList.contains('hidden')){
      entry.close();
      updateMobileHeaderReportBoardVisibility();
      return true;
    }
  }
  return false;
}
function syncMobileHistoryState(){
  if(typeof window==='undefined'||!isMobileViewport()||!mobileHistoryGuardInitialized||mobileHistoryHandlingPop) return;
  const nextDepth=getMobileNavigationDepth();
  if(nextDepth<=mobileHistoryDepth){
    mobileHistoryDepth=nextDepth;
    return;
  }
  for(let depth=mobileHistoryDepth+1;depth<=nextDepth;depth+=1){
    try{
      window.history.pushState({[MOBILE_HISTORY_GUARD_KEY]:true,depth},'',window.location.href);
    }catch(error){
      console.warn('mobile history state push failed', error);
      break;
    }
  }
  mobileHistoryDepth=nextDepth;
}
function goMobileHomeView(){
  clearDetailExtras();
  hideAllPanels();
  clearAllActive();
  currentMexicoStadiumKey='';
  currentMexicoStadiumSectionKey='';
  updateHeaderTimes();
  updateMobileHeaderReportBoardVisibility();
}
function handleMobileInternalBackNavigation(){
  if(!isMobileViewport()) return false;
  if(closeMobileOverlayModalIfOpen()) return true;
  if(getVisibleMobilePanels().length){
    goBackMobileSubview();
    return true;
  }
  goMobileHomeView();
  return true;
}
function pushMobileHistoryGuard(){
  if(typeof window==='undefined'||!isMobileViewport()) return;
  try{
    const nextState={...(window.history.state&&typeof window.history.state==='object'?window.history.state:{}),[MOBILE_HISTORY_GUARD_KEY]:true,depth:0};
    window.history.pushState(nextState,'',window.location.href);
  }catch(error){
    console.warn('mobile history guard push failed', error);
  }
}
function ensureMobileHistoryGuard(){
  if(typeof window==='undefined'||mobileHistoryGuardInitialized) return;
  mobileHistoryGuardInitialized=true;
  try{
    const baseState={...(window.history.state&&typeof window.history.state==='object'?window.history.state:{}),[MOBILE_HISTORY_GUARD_KEY]:true,depth:0};
    window.history.replaceState(baseState,'',window.location.href);
  }catch(error){
    console.warn('mobile history state replace failed', error);
  }
  pushMobileHistoryGuard();
  mobileHistoryDepth=getMobileNavigationDepth();
  window.addEventListener('popstate', event=>{
    if(!isMobileViewport()) return;
    const targetDepth=event.state&&event.state[MOBILE_HISTORY_GUARD_KEY]&&typeof event.state.depth==='number'
      ? Math.max(0, event.state.depth)
      : 0;
    mobileHistoryHandlingPop=true;
    let safety=12;
    while(getMobileNavigationDepth()>targetDepth&&safety>0){
      if(!handleMobileInternalBackNavigation()) break;
      safety-=1;
    }
    mobileHistoryDepth=getMobileNavigationDepth();
    mobileHistoryHandlingPop=false;
    if(targetDepth===0&&mobileHistoryDepth===0){
      pushMobileHistoryGuard();
    }
  });
}
function goBackMobileSubview(){
  const visiblePanels=getVisibleMobilePanels();
  if(!visiblePanels.length) return;
  const lastPanel=visiblePanels[visiblePanels.length-1];
  if(lastPanel.id==='detailCol'){
    if(currentMexicoStadiumKey&&currentMexicoStadiumSectionKey&&isMobileViewport()){
      currentMexicoStadiumSectionKey='';
      clearDetailExtras();
      renderMexicoStadiumDetail(currentMexicoStadiumKey);
      updateHeaderTimes();
      updateMobileHeaderReportBoardVisibility();
      return;
    }
    clearDetailExtras();
  }
  lastPanel.classList.add('hidden');
  if(!getVisibleMobilePanels().length){
    clearAllActive();
  }
  updateMobileHeaderReportBoardVisibility();
}
function updateMobileHeaderReportBoardVisibility(){
  if(typeof document==='undefined'||!document.body) return;
  const hasOpenSubview=getVisibleMobilePanels().length>0;
  updateMobileSubviewPanels();
  document.body.classList.toggle('mobile-subview-open', isMobileViewport()&&hasOpenSubview);
  updateMobileSubviewBar();
  syncMobileHistoryState();
  if(isMobileViewport()&&hasOpenSubview){
    clearHeaderReportBoardAnimation();
  }else if(isMobileViewport()&&!hasOpenSubview){
    window.requestAnimationFrame(updateHeaderReportBoard);
  }
}
function hideAllPanels(){
  getDesktopTabStackIds().forEach(id=>document.getElementById(id)?.classList.add('hidden'));
  getMobilePanelIds().forEach(id=>document.getElementById(id).classList.add('hidden'));
  updateMobileHeaderReportBoardVisibility();
}
function clearAllActive(){['newsMenu','bracketMenu','groupASquadMenu','equipmentMenu','personalTimelineMenu','mexicoStadiumMenu','mapMenu','newsProgrammingMenu'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove('active');});document.querySelectorAll('.item').forEach(el=>el.classList.remove('active'));}
function getActualScrollContainer(){
  const candidates=[
    document.querySelector('.main-content'),
    document.querySelector('.content-area'),
    document.querySelector('.tab-content'),
    document.querySelector('.panel-content'),
    document.querySelector('.timeline-content'),
    document.querySelector('.schedule-page'),
    document.querySelector('.content-main'),
    document.querySelector('.content-shell'),
    document.querySelector('.container'),
    document.scrollingElement
  ].filter(Boolean);
  for(const el of candidates){
    if(el===document.scrollingElement) continue;
    const style=window.getComputedStyle(el);
    const canScroll=/(auto|scroll|overlay)/.test(style.overflowY||'')&&el.scrollHeight>el.clientHeight+1;
    if(canScroll) return el;
  }
  return document.scrollingElement||document.documentElement;
}
function isDocumentScrollContainer(container){
  return !container||container===document.body||container===document.documentElement||container===document.scrollingElement;
}
function shouldSkipPanelScroll(panel, offset=16){
  if(!panel) return true;
  const container=getActualScrollContainer();
  const panelRect=panel.getBoundingClientRect();
  if(isDocumentScrollContainer(container)){
    return Math.abs(panelRect.top-offset)<=40;
  }
  const containerRect=container.getBoundingClientRect();
  return Math.abs((panelRect.top-containerRect.top)-offset)<=40;
}
function scrollPanelToTop(panel, offset=16){
  if(!panel||panel.classList?.contains('hidden')||shouldSkipPanelScroll(panel, offset)) return;
  const container=getActualScrollContainer();
  const panelRect=panel.getBoundingClientRect();
  if(isDocumentScrollContainer(container)){
    const currentTop=window.pageYOffset||document.documentElement.scrollTop||0;
    const targetTop=currentTop+panelRect.top-offset;
    window.scrollTo({top:Math.max(0, targetTop), behavior:'smooth'});
    return;
  }
  const containerRect=container.getBoundingClientRect();
  const targetTop=container.scrollTop+(panelRect.top-containerRect.top)-offset;
  container.scrollTo({top:Math.max(0, targetTop), behavior:'smooth'});
}
function afterTabRenderedScroll(panel, offset=16){
  if(!panel) return;
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      scrollPanelToTop(panel, offset);
    });
  });
}
function scrollSectionToTop(targetEl, options={}){
  const {offset=16}=options;
  afterTabRenderedScroll(targetEl, offset);
}
function getActiveContentStartTarget(fallbackSelector=''){
  if(fallbackSelector){
    const fallback=document.querySelector(fallbackSelector);
    if(fallback&&!fallback.classList.contains('hidden')) return fallback;
  }
  return document.querySelector('#detailCol:not(.hidden)')
    || document.querySelector('.tab-stack:not(.hidden) .column:not(.hidden)')
    || document.querySelector('#desktopTabPane > .column:not(.hidden)')
    || document.querySelector('.content-main');
}
function focusPanelStart(panelSelector='', options={}){
  scrollSectionToTop(getActiveContentStartTarget(panelSelector), options);
}
function getScheduleCardStartPanel(){
  return document.querySelector('.personal-timeline-item.is-open .personal-timeline-card')
    || document.querySelector('.personal-timeline-item.is-open .personal-timeline-column-shared')
    || document.querySelector('.shared-schedule-card')
    || document.querySelector('.schedule-board-card')
    || document.querySelector('.schedule-panel')
    || document.querySelector('.personal-timeline-card')
    || document.querySelector('#detailCol:not(.hidden)');
}
function focusScheduleCardStart(offset=16){
  afterTabRenderedScroll(getScheduleCardStartPanel(), offset);
}
function clearDetailExtras(){
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  const detailTitleActions=document.getElementById('detailTitleActions');
  resetPersonalTimelineEndEditorState();
  if(personalTimelineStickyMonthCleanup){
    personalTimelineStickyMonthCleanup();
    personalTimelineStickyMonthCleanup=null;
  }
  cancelTimelineSelection();
  closeTimelineModal();
  closeNewsEditorModal();
  closeSquadInjuryModal();
  closeMexicoStadiumEditorModal();
  closeEquipmentEditorModal();
  closeEquipmentCarnetViewerModal();
  closeEquipmentCarnetExportModal();
  closeEquipmentFileStorageViewerModal();
  closeTimelineGalleryModal();
  hideTimelineTooltip();
  document.body.classList.remove('timeline-modal-open');
  document.body.classList.remove('news-editor-modal-open');
  document.onmouseup=null;
  if(detailTitleActions) detailTitleActions.innerHTML='';
  detailCol.classList.remove('detail-title-hidden');
  detailCol.classList.remove('timeline-mode');
  detailCol.classList.remove('personal-timeline-mode');
  detailCol.classList.remove('personal-timeline-gallery-mode');
  detailCol.classList.remove('mexico-stadium-mode');
  detailTable.parentElement.classList.remove('timeline-card');
  detailTable.parentElement.classList.remove('personal-timeline-card');
  detailTable.parentElement.classList.remove('timeline-gallery-shell-card');
  detailTable.parentElement.classList.remove('mobile-table-scroll-card');
  detailTable.parentElement.classList.remove('equipment-table-wrapper');
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

function renderNewsExportBar(){
  return `<div id="newsExportBar" class="news-export-bar"><button type="button" class="section-title-action-btn export-action-btn news-export-btn" onclick="exportAllExcel()">전체 내보내기</button></div>`;
}
function renderMobileNewsMenu(){
  if(!isMobileViewport()) return;
  const panel=document.getElementById('newsCol');
  if(!panel) return;
  panel.innerHTML=`${NEWS_YEAR_ORDER.map(year=>{const meta=NEWS_YEAR_META[year];return `<div class="news-mobile-year-block"><div class="item news-year-item ${currentNewsYear===year?'active':''}" aria-label="${escapeHtml(meta.aria)}"><span class="news-year-frame"><img class="news-year-logo" src="${meta.logo}" alt="${escapeHtml(meta.aria)} 로고"></span></div><div class="news-mobile-broadcasters">${NEWS_BROADCASTERS.map(broadcaster=>`<div class="item broadcaster-item broadcaster-item-${broadcaster.toLowerCase()} ${currentNewsYear===year&&currentNewsBroadcaster===broadcaster?'active':''}" onclick="openNewsDetail('${year}','${broadcaster}', this)" aria-label="${escapeHtml(broadcaster)}"><span class="broadcaster-frame">${renderNewsBroadcasterCiMarkup(broadcaster)}</span></div>`).join('')}</div></div>`;}).join('')}${renderNewsExportBar()}`;
}
function renderMapPanel(){
  clearDetailExtras();
  document.getElementById('detailTitle').textContent='';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailCol').classList.add('detail-title-hidden');
  document.getElementById('detailTable').className='data-table simple-info-table map-panel-table';
  renderCache.mapPanel=renderMapPanelHtml();
  document.getElementById('detailTable').innerHTML=renderCache.mapPanel;
  document.getElementById('detailCol').classList.remove('hidden');
  setTimeout(initPlaceMap, 0);
  setTimeout(initPlacePreviewMap, 0);
}
function renderNewsProgrammingPanel(){
  clearDetailExtras();
  document.getElementById('detailTitle').textContent='';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailCol').classList.add('detail-title-hidden');
  document.getElementById('detailTable').className='data-table simple-info-table news-programming-table';
  renderCache.newsProgrammingPanel=renderNewsProgrammingPanelHtml();
  document.getElementById('detailTable').innerHTML=renderCache.newsProgrammingPanel;
  document.getElementById('detailCol').classList.remove('hidden');
}
function showMapSubTab(tabKey='region'){
  currentMapSubTab=tabKey==='lodging'?'lodging':'region';
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function setMapActionMode(mode='write'){
  currentMapActionMode=mode==='edit'?'edit':'write';
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function clearMapActionMode(){
  currentMapActionMode='';
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function openMapSectionComposer(sectionKey){
  const normalized=sectionKey==='lodging'?'lodging':'region';
  currentMapSubTab=normalized;
  mapSectionComposerState[normalized]=true;
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function clearMapSectionComposer(sectionKey){
  const normalized=sectionKey==='lodging'?'lodging':'region';
  mapSectionComposerState[normalized]=false;
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
  }
}
function rerenderNewsProgrammingPanelIfActive(){
  if(document.getElementById('newsProgrammingMenu')?.classList.contains('active')){
    renderNewsProgrammingPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function toggleMain(){const stack=document.getElementById('newsTabStack');const panel=document.getElementById('newsCol');const broadcasterPanel=document.getElementById('newsBroadcasterCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){stack?.classList.remove('hidden');panel.classList.remove('hidden');document.getElementById('newsMenu').classList.add('active');if(isMobileViewport()){renderMobileNewsMenu();broadcasterPanel.classList.add('hidden');}}updateMobileHeaderReportBoardVisibility();if(willOpen)focusPanelStart('#newsCol');}
function toggleBracket(){const stack=document.getElementById('bracketTabStack');const panel=document.getElementById('bracketStageCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){stack?.classList.remove('hidden');panel.classList.remove('hidden');document.getElementById('bracketMenu').classList.add('active');}updateMobileHeaderReportBoardVisibility();if(willOpen)focusPanelStart('#bracketStageCol');}
function toggleMapPanel(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('mapMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('mapMenu').classList.add('active');
    renderMapPanel();
  }
  updateMobileHeaderReportBoardVisibility();
  if(willOpen)focusPanelStart('#detailCol');
}
function toggleNewsProgramming(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('newsProgrammingMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('newsProgrammingMenu').classList.add('active');
    renderNewsProgrammingPanel();
  }
  updateMobileHeaderReportBoardVisibility();
  if(willOpen)focusPanelStart('#detailCol');
}
function toggleGroupASquads(){
  const panel=document.getElementById('groupASquadCol');
  const willOpen=panel.classList.contains('hidden');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('groupASquadMenu').classList.add('active');
    panel.classList.remove('hidden');
  }
  updateMobileHeaderReportBoardVisibility();
  if(willOpen)focusPanelStart('#groupASquadCol');
}
function showGroupASquad(key, el){
  document.querySelectorAll('#groupASquadCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentSquadKey=key;
  squadState[key].filter='ALL';
  squadState[key].page=1;
  renderSquad(key);
  focusPanelStart('#detailCol');
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
  updateMobileHeaderReportBoardVisibility();
  if(willOpen)focusPanelStart(isMobileViewport()?'#equipmentUserCol':'#detailCol');
}
function togglePersonalTimeline(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('personalTimelineMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('personalTimelineMenu').classList.add('active');
    renderTimelineSchedule('personal');
    ensureTimelineExportButton();
    applyMobileTimelineAStructure();
    focusScheduleCardStart(16);
  }
  updateMobileHeaderReportBoardVisibility();
}
function toggleMexicoStadium(){
  const stack=document.getElementById('mexicoStadiumTabStack');
  const panel=document.getElementById('mexicoStadiumCol');
  const willOpen=panel.classList.contains('hidden');
  hideAllPanels();
  clearAllActive();
  currentMexicoStadiumKey='';
  if(willOpen){
    stack?.classList.remove('hidden');
    document.getElementById('mexicoStadiumMenu').classList.add('active');
    panel.classList.remove('hidden');
  }
  updateHeaderTimes();
  updateMobileHeaderReportBoardVisibility();
  if(willOpen)focusPanelStart('#mexicoStadiumCol');
}

function showNewsYear(year, el){currentNewsYear=year;currentNewsBroadcaster='';document.querySelectorAll('#newsCol .item').forEach(n=>n.classList.remove('active'));document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');document.getElementById('newsTabStack')?.classList.remove('hidden');document.getElementById('newsBroadcasterCol').classList.remove('hidden');document.getElementById('detailCol').classList.add('hidden');updateMobileHeaderReportBoardVisibility();focusPanelStart('#newsBroadcasterCol');}
function activateBroadcaster(el, broadcaster){currentNewsBroadcaster=broadcaster;document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');renderNewsTable(currentNewsYear, broadcaster);updateMobileHeaderReportBoardVisibility();focusPanelStart('#detailCol');}
function openNewsDetail(year, broadcaster){currentNewsYear=year;currentNewsBroadcaster=broadcaster;if(isMobileViewport()) renderMobileNewsMenu();renderNewsTable(year, broadcaster);updateMobileHeaderReportBoardVisibility();focusPanelStart('#detailCol');}
function getNewsBroadcasterLogoPath(broadcaster){
  const map={KBS:'assets/news-ci-kbs-clean.png',MBC:'assets/news-ci-mbc-clean.png',SBS:'assets/news-ci-sbs-clean.png'};
  return map[broadcaster]||'';
}
function renderNewsBroadcasterCiMarkup(broadcaster, extraClass=''){
  const key=String(broadcaster||'').toLowerCase();
  const className=`broadcaster-ci broadcaster-ci-${key}${extraClass?` ${extraClass}`:''}`;
  const src=getNewsBroadcasterLogoPath(broadcaster);
  return `<img class="${className}" src="${src}" alt="${escapeHtml(broadcaster)} 로고">`;
}
function renderNewsDetailTitle(year, broadcaster){
  return `<span class="news-detail-title"><span class="news-detail-title-year">${escapeHtml(year)}</span>${renderNewsBroadcasterCiMarkup(broadcaster,'news-detail-title-ci')}</span>`;
}
function buildNewsLinkCell(link){
  if(!link) return '<span class="news-muted">-</span>';
  if(link==='#') return '<a class="news-link" href="#" onclick="return false;">원문</a>';
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
function renderNewsToolbar(year, broadcaster){
  const key=getNewsEditorKey(year, broadcaster);
  const hasEntries=getNewsEntries(year, broadcaster).length>0;
  const isEditMode=currentNewsEditingKey===key;
  const isDeleteMode=currentNewsDeletingKey===key;
  return `<div class="toolbar news-toolbar"><button type="button" class="toolbar-btn news-toolbar-btn" onclick="openNewsEditorModal('${year}','${broadcaster}')">작성</button><button type="button" class="toolbar-btn news-toolbar-btn${isEditMode?' active':''}" onclick="toggleNewsEditMode('${year}','${broadcaster}')"${hasEntries?'':' disabled'}>수정</button><button type="button" class="toolbar-btn news-toolbar-btn${isDeleteMode?' active':''}" onclick="toggleNewsDeleteMode('${year}','${broadcaster}')"${hasEntries?'':' disabled'}>삭제</button></div>`;
}
function getNewsDateInputValue(date=''){
  const normalized=normalizeNewsDate(date);
  return /^\d{4}\.\d{2}\.\d{2}$/.test(normalized) ? normalized.replace(/\./g,'-') : '';
}
function parseNewsDateInput(value='', fallbackYear=''){
  const raw=String(value||'').trim();
  if(/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw.replace(/-/g,'.');
  return normalizeNewsDate(raw, fallbackYear);
}
function ensureNewsEditorModal(){
  if(document.getElementById('newsEditorModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="newsEditorModal" class="news-editor-modal hidden"><div class="news-editor-modal-backdrop" onclick="closeNewsEditorModal()"></div><div class="news-editor-modal-panel" role="dialog" aria-modal="true" aria-labelledby="newsEditorModalTitle"><div class="news-editor-modal-header"><h3 id="newsEditorModalTitle">뉴스 항목 작성</h3><button type="button" class="news-editor-modal-close" onclick="closeNewsEditorModal()" aria-label="닫기">×</button></div><p id="newsEditorModalMeta" class="news-editor-modal-meta"></p><div class="news-editor-form"><label class="news-editor-field"><span>날짜</span><input id="newsEditorDate" type="date" class="news-editor-input"></label><label class="news-editor-field"><span>제목/프로그램</span><input id="newsEditorTitle" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>링크</span><input id="newsEditorLink" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>주요분석</span><textarea id="newsEditorAnalysis" class="news-editor-textarea"></textarea></label></div><div class="news-editor-modal-actions"><button type="button" class="news-editor-modal-btn" onclick="closeNewsEditorModal()">취소</button><button type="button" class="news-editor-modal-btn primary" onclick="saveNewsEditorModal()">저장</button></div></div></div>`);
  const modal=document.getElementById('newsEditorModal');
  modal.addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeNewsEditorModal();
    }
  });
}
function openNewsEditorModal(year, broadcaster, entryIndex=-1){
  ensureNewsEditorModal();
  const entries=getNewsEntries(year, broadcaster);
  const currentEntry=entryIndex>=0 ? entries[entryIndex]||null : null;
  pendingNewsEditorContext={year, broadcaster, entryIndex};
  document.getElementById('newsEditorModalTitle').textContent=entryIndex>=0 ? '뉴스 항목 수정' : '뉴스 항목 작성';
  document.getElementById('newsEditorModalMeta').textContent=`${year} ${broadcaster}`;
  document.getElementById('newsEditorDate').value=getNewsDateInputValue(currentEntry?.date||'');
  document.getElementById('newsEditorTitle').value=currentEntry?.title||'';
  document.getElementById('newsEditorLink').value=currentEntry?.link||'';
  document.getElementById('newsEditorAnalysis').value=currentEntry?.analysis||'';
  document.body.classList.add('news-editor-modal-open');
  document.getElementById('newsEditorModal').classList.remove('hidden');
  syncMobileHistoryState();
  document.getElementById('newsEditorTitle').focus();
}
function closeNewsEditorModal(){
  const modal=document.getElementById('newsEditorModal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('news-editor-modal-open');
  pendingNewsEditorContext=null;
  syncMobileHistoryState();
}
function saveNewsEditorModal(){
  if(!pendingNewsEditorContext) return;
  const {year, broadcaster, entryIndex}=pendingNewsEditorContext;
  const entries=[...getNewsEntries(year, broadcaster)];
  const previousEntry=entryIndex>=0 ? entries[entryIndex]||null : null;
  const nextEntry=normalizeNewsEditorEntry({
    id:previousEntry?.id,
    date:parseNewsDateInput(document.getElementById('newsEditorDate').value, year),
    title:document.getElementById('newsEditorTitle').value,
    link:document.getElementById('newsEditorLink').value,
    analysis:document.getElementById('newsEditorAnalysis').value
  }, year);
  if(!nextEntry) return;
  if(entryIndex>=0&&entries[entryIndex]){
    entries[entryIndex]=nextEntry;
  }else{
    entries.push(nextEntry);
  }
  setNewsEntries(year, broadcaster, entries);
  closeNewsEditorModal();
  renderNewsTable(year, broadcaster);
}
function toggleNewsEditMode(year, broadcaster){
  const key=getNewsEditorKey(year, broadcaster);
  if(currentNewsDeletingKey===key) currentNewsDeletingKey='';
  currentNewsEditingKey=currentNewsEditingKey===key ? '' : key;
  renderNewsTable(year, broadcaster);
}
function toggleNewsDeleteMode(year, broadcaster){
  const key=getNewsEditorKey(year, broadcaster);
  if(currentNewsEditingKey===key) currentNewsEditingKey='';
  currentNewsDeletingKey=currentNewsDeletingKey===key ? '' : key;
  renderNewsTable(year, broadcaster);
}
function deleteNewsEntryAt(year, broadcaster, entryIndex){
  const entries=[...getNewsEntries(year, broadcaster)];
  if(!entries[entryIndex]) return;
  entries.splice(entryIndex,1);
  setNewsEntries(year, broadcaster, entries);
  if(!entries.length){
    const key=getNewsEditorKey(year, broadcaster);
    if(currentNewsEditingKey===key) currentNewsEditingKey='';
    if(currentNewsDeletingKey===key) currentNewsDeletingKey='';
  }
  renderNewsTable(year, broadcaster);
}
function renderNewsTable(year,broadcaster){
  clearDetailExtras();
  currentNewsYear=year;
  currentNewsBroadcaster=broadcaster;
  const entries=getNewsEntries(year, broadcaster);
  document.getElementById('detailTitle').innerHTML=renderNewsDetailTitle(year, broadcaster);
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table news-table';
  document.getElementById('detailTable').insertAdjacentHTML('beforebegin', renderNewsToolbar(year, broadcaster));
  const key=getNewsEditorKey(year, broadcaster);
  const isEditMode=currentNewsEditingKey===key;
  const isDeleteMode=currentNewsDeletingKey===key;
  const colGroup=`<colgroup>${isEditMode||isDeleteMode?'<col class="news-col-action">':''}<col class="news-col-date"><col class="news-col-title"><col class="news-col-link"><col class="news-col-analysis"></colgroup>`;
  const header=`<thead><tr>${isEditMode||isDeleteMode?'<th></th>':''}<th>날짜</th><th>제목 / 프로그램</th><th>링크</th><th>주요분석</th></tr></thead>`;
  const body=entries.length
    ? entries.map((entry, entryIndex)=>{
        const actionCell=isEditMode
          ? `<td class="news-action-cell"><button type="button" class="news-row-edit-btn" onclick="openNewsEditorModal('${year}','${broadcaster}',${entryIndex})">수정</button></td>`
          : isDeleteMode
            ? `<td class="news-action-cell"><button type="button" class="news-row-delete-btn" onclick="deleteNewsEntryAt('${year}','${broadcaster}',${entryIndex})">삭제</button></td>`
            : '';
        const dateText=escapeHtml(entry.date||'-');
        const titleText=escapeHtml(entry.title||'-');
        const analysisText=escapeHtml(entry.analysis||'-').replace(/ \/ /g,'<br>');
        return `<tr>${actionCell}<td>${dateText}</td><td>${titleText}</td><td class="news-link-cell">${buildNewsLinkCell(entry.link)}</td><td>${analysisText}</td></tr>`;
      }).join('')
    : `<tr><td class="news-empty" colspan="${isEditMode||isDeleteMode?5:4}">해당 연도 데이터가 아직 비어 있습니다.</td></tr>`;
  document.getElementById('detailTable').innerHTML=`${colGroup}${header}<tbody>${body}</tbody>`;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}

function normalizeSquadInjuryValue(value=''){
  const normalized=String(value||'').trim();
  return normalized||'-';
}
function ensureSquadPlayerMeta(player){
  if(!player.__baseKey) player.__baseKey=String(player.name||'').trim();
  if(!player.__defaults){
    player.__defaults={
      position:String(player.position||'').trim(),
      number:String(player.number??'').trim(),
      name:String(player.name||'').trim(),
      photo:String(player.photo||'').trim(),
      club:String(player.club||'').trim(),
      age:String(player.age??'').trim(),
      injury:normalizeSquadInjuryValue(player.injury)
    };
  }
  return player;
}
function getSquadPlayerEntryKey(squadKey, playerBaseKey){
  return `${squadKey}::${playerBaseKey}`;
}
function readSquadInjuryRaw(){
  const storages=getTimelineStorageAreas();
  for(const storage of storages){
    const raw=storage.getItem(SQUAD_INJURY_STORAGE_KEY);
    if(raw) return raw;
  }
  if(typeof window==='undefined'||!window.name) return '';
  try{
    const payload=JSON.parse(window.name);
    return typeof payload?.[SQUAD_INJURY_WINDOW_NAME_KEY]==='string' ? payload[SQUAD_INJURY_WINDOW_NAME_KEY] : '';
  }catch(error){
    return '';
  }
}
function writeSquadInjuryRaw(raw){
  const storages=getTimelineStorageAreas();
  storages.forEach(storage=>storage.setItem(SQUAD_INJURY_STORAGE_KEY, raw));
  if(typeof window==='undefined') return;
  let payload={};
  if(window.name){
    try{
      payload=JSON.parse(window.name);
    }catch(error){
      payload={};
    }
  }
  payload[SQUAD_INJURY_WINDOW_NAME_KEY]=raw;
  try{
    window.name=JSON.stringify(payload);
  }catch(error){
    window.name='';
  }
  scheduleSharedStateSyncWrite(SQUAD_INJURY_STORAGE_KEY, raw);
}
function normalizeSquadPlayerEntryValue(entry, player){
  ensureSquadPlayerMeta(player);
  if(typeof entry==='string'){
    return {
      position:player.__defaults.position,
      number:player.__defaults.number,
      name:player.__defaults.name,
      photo:player.__defaults.photo,
      club:player.__defaults.club,
      age:player.__defaults.age,
      injury:normalizeSquadInjuryValue(entry)
    };
  }
  return {
    position:String(entry?.position ?? player.__defaults.position).trim() || player.__defaults.position,
    number:String(entry?.number ?? player.__defaults.number).trim(),
    name:String(entry?.name ?? player.__defaults.name).trim() || player.__defaults.name,
    photo:String(entry?.photo ?? player.__defaults.photo).trim(),
    club:String(entry?.club ?? player.__defaults.club).trim() || player.__defaults.club,
    age:String(entry?.age ?? player.__defaults.age).trim(),
    injury:normalizeSquadInjuryValue(entry?.injury ?? player.__defaults.injury)
  };
}
function applySquadPlayerEntry(player, entry){
  player.position=entry.position;
  player.number=entry.number;
  player.name=entry.name;
  player.photo=entry.photo;
  player.club=entry.club;
  player.age=entry.age;
  player.injury=entry.injury;
}
function applySquadInjuryEntries(){
  Object.entries(squads).forEach(([squadKey, players])=>{
    players.forEach(player=>{
      ensureSquadPlayerMeta(player);
      const entryKey=getSquadPlayerEntryKey(squadKey, player.__baseKey);
      if(Object.prototype.hasOwnProperty.call(squadInjuryEntries, entryKey)){
        applySquadPlayerEntry(player, normalizeSquadPlayerEntryValue(squadInjuryEntries[entryKey], player));
      }
    });
  });
}
function ensureSquadInjuryEntries(){
  if(hasLoadedSquadInjuryEntries) return;
  hasLoadedSquadInjuryEntries=true;
  Object.values(squads).forEach(players=>players.forEach(ensureSquadPlayerMeta));
  const raw=readSquadInjuryRaw();
  if(raw){
    try{
      const parsed=JSON.parse(raw);
      if(parsed&&typeof parsed==='object'){
        Object.entries(parsed).forEach(([key, value])=>{
          squadInjuryEntries[key]=value;
        });
      }
    }catch(error){}
  }
  applySquadInjuryEntries();
}
function saveSquadInjuryEntries(){
  writeSquadInjuryRaw(JSON.stringify(squadInjuryEntries));
}
function invalidateSquadViews(){
  renderCache.squadViews=Object.create(null);
}
function findSquadPlayer(squadKey, playerBaseKey){
  return (squads[squadKey]||[]).find(player=>ensureSquadPlayerMeta(player).__baseKey===playerBaseKey)||null;
}
function hasSquadPlayerCustomEntry(squadKey, playerBaseKey){
  ensureSquadInjuryEntries();
  return Object.prototype.hasOwnProperty.call(squadInjuryEntries, getSquadPlayerEntryKey(squadKey, playerBaseKey));
}
function setSquadPlayerEntry(squadKey, playerBaseKey, entry){
  ensureSquadInjuryEntries();
  const player=findSquadPlayer(squadKey, playerBaseKey);
  if(!player) return;
  const normalized=normalizeSquadPlayerEntryValue(entry, player);
  squadInjuryEntries[getSquadPlayerEntryKey(squadKey, playerBaseKey)]={...normalized};
  applySquadPlayerEntry(player, normalized);
  if(normalized.photo){
    playerPhotoCache[playerBaseKey]=normalized.photo;
  }else{
    delete playerPhotoCache[playerBaseKey];
  }
  invalidateSquadViews();
  saveSquadInjuryEntries();
}
function resetSquadPlayerEntry(squadKey, playerBaseKey){
  ensureSquadInjuryEntries();
  const player=findSquadPlayer(squadKey, playerBaseKey);
  if(!player) return;
  const defaults=ensureSquadPlayerMeta(player).__defaults;
  delete squadInjuryEntries[getSquadPlayerEntryKey(squadKey, playerBaseKey)];
  applySquadPlayerEntry(player, {...defaults});
  delete playerPhotoCache[playerBaseKey];
  invalidateSquadViews();
  saveSquadInjuryEntries();
}
function ensureSquadInjuryModal(){
  if(document.getElementById('squadInjuryModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="squadInjuryModal" class="news-editor-modal hidden"><div class="news-editor-modal-backdrop" onclick="closeSquadInjuryModal()"></div><div class="news-editor-modal-panel" role="dialog" aria-modal="true" aria-labelledby="squadInjuryModalTitle"><div class="news-editor-modal-header"><h3 id="squadInjuryModalTitle">선수 정보 작성</h3><button type="button" class="news-editor-modal-close" onclick="closeSquadInjuryModal()" aria-label="닫기">×</button></div><p id="squadInjuryModalMeta" class="news-editor-modal-meta"></p><div class="news-editor-form"><label class="news-editor-field"><span>포지션</span><input id="squadPlayerPosition" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>등번호</span><input id="squadPlayerNumber" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>선수</span><input id="squadPlayerName" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>선수사진 첨부</span><input id="squadPlayerPhotoFile" type="file" accept="image/*" class="news-editor-input"></label><div class="news-editor-field"><span>선수사진 미리보기</span><div id="squadPlayerPhotoPreview" class="squad-player-photo-preview"><span class="photo-placeholder">공식 프로필</span></div></div><label class="news-editor-field"><span>소속팀</span><input id="squadPlayerClub" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>나이</span><input id="squadPlayerAge" type="text" class="news-editor-input"></label><label class="news-editor-field"><span>부상이력</span><textarea id="squadInjuryInput" class="news-editor-textarea"></textarea></label></div><div class="news-editor-modal-actions"><button type="button" class="news-editor-modal-btn" onclick="closeSquadInjuryModal()">취소</button><button type="button" class="news-editor-modal-btn primary" onclick="saveSquadInjuryModal()">저장</button></div></div></div>`);
  document.getElementById('squadInjuryModal').addEventListener('keydown', event=>{
    if(event.key==='Escape'){
      closeSquadInjuryModal();
    }
  });
  document.getElementById('squadPlayerPhotoFile').addEventListener('change', async event=>{
    const file=event.target.files?.[0];
    if(!file||!pendingSquadInjuryContext) return;
    pendingSquadInjuryContext.photoData=await resizeSquadPlayerPhotoFile(file);
    renderSquadPlayerPhotoPreview(pendingSquadInjuryContext.photoData);
    event.target.value='';
  });
}
function resizeSquadPlayerPhotoFile(file){
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=()=>{
      const image=new Image();
      image.onload=()=>{
        const targetWidth=74;
        const targetHeight=94;
        const canvas=document.createElement('canvas');
        canvas.width=targetWidth;
        canvas.height=targetHeight;
        const context=canvas.getContext('2d');
        if(!context){
          resolve(String(reader.result||''));
          return;
        }
        context.fillStyle='#eef1f7';
        context.fillRect(0,0,targetWidth,targetHeight);
        const scale=Math.max(targetWidth/image.width,targetHeight/image.height);
        const drawWidth=image.width*scale;
        const drawHeight=image.height*scale;
        const dx=(targetWidth-drawWidth)/2;
        const dy=(targetHeight-drawHeight)/2;
        context.drawImage(image, dx, dy, drawWidth, drawHeight);
        resolve(canvas.toDataURL('image/jpeg',0.9));
      };
      image.onerror=()=>resolve(String(reader.result||''));
      image.src=String(reader.result||'');
    };
    reader.onerror=()=>resolve('');
    reader.readAsDataURL(file);
  });
}
function renderSquadPlayerPhotoPreview(photoUrl=''){
  const preview=document.getElementById('squadPlayerPhotoPreview');
  if(!preview) return;
  if(photoUrl){
    preview.innerHTML=`<img class="player-photo player-photo-official" src="${photoUrl}" alt="선수사진 미리보기">`;
  }else{
    preview.innerHTML='<span class="photo-placeholder">공식 프로필</span>';
  }
}
function openSquadInjuryModal(squadKey, playerBaseKey){
  ensureSquadInjuryEntries();
  ensureSquadInjuryModal();
  const player=findSquadPlayer(squadKey, playerBaseKey);
  if(!player) return;
  pendingSquadInjuryContext={squadKey, playerBaseKey, photoData:String(player.photo||'').trim()};
  const hasCustom=hasSquadPlayerCustomEntry(squadKey, playerBaseKey);
  document.getElementById('squadInjuryModalTitle').textContent=hasCustom ? '선수 정보 수정' : '선수 정보 작성';
  document.getElementById('squadInjuryModalMeta').textContent=`${squadState[squadKey]?.title||''} · ${player.name}`;
  document.getElementById('squadPlayerPosition').value=player.position||'';
  document.getElementById('squadPlayerNumber').value=String(player.number??'');
  document.getElementById('squadPlayerName').value=player.name||'';
  document.getElementById('squadPlayerPhotoFile').value='';
  renderSquadPlayerPhotoPreview(pendingSquadInjuryContext.photoData);
  document.getElementById('squadPlayerClub').value=player.club||'';
  document.getElementById('squadPlayerAge').value=String(player.age??'');
  document.getElementById('squadInjuryInput').value=player.injury&&player.injury!=='-' ? player.injury : '';
  document.body.classList.add('news-editor-modal-open');
  document.getElementById('squadInjuryModal').classList.remove('hidden');
  syncMobileHistoryState();
  document.getElementById('squadPlayerPosition').focus();
}
function closeSquadInjuryModal(){
  const modal=document.getElementById('squadInjuryModal');
  if(modal) modal.classList.add('hidden');
  document.body.classList.remove('news-editor-modal-open');
  const photoInput=document.getElementById('squadPlayerPhotoFile');
  if(photoInput) photoInput.value='';
  pendingSquadInjuryContext=null;
  syncMobileHistoryState();
}
function saveSquadInjuryModal(){
  if(!pendingSquadInjuryContext) return;
  const {squadKey, playerBaseKey}=pendingSquadInjuryContext;
  setSquadPlayerEntry(squadKey, playerBaseKey, {
    position:document.getElementById('squadPlayerPosition').value,
    number:document.getElementById('squadPlayerNumber').value,
    name:document.getElementById('squadPlayerName').value,
    photo:pendingSquadInjuryContext.photoData||'',
    club:document.getElementById('squadPlayerClub').value,
    age:document.getElementById('squadPlayerAge').value,
    injury:document.getElementById('squadInjuryInput').value
  });
  closeSquadInjuryModal();
  renderSquad(squadKey);
}
function deleteSquadInjury(squadKey, playerBaseKey){
  resetSquadPlayerEntry(squadKey, playerBaseKey);
  renderSquad(squadKey);
}
function renderSquadInjuryCell(squadKey, player){
  const baseKey=ensureSquadPlayerMeta(player).__baseKey;
  const injuryText=escapeHtml(normalizeSquadInjuryValue(player.injury));
  const openCall=`openSquadInjuryModal(${JSON.stringify(squadKey)}, ${JSON.stringify(baseKey)})`;
  const deleteCall=`deleteSquadInjury(${JSON.stringify(squadKey)}, ${JSON.stringify(baseKey)})`;
  const hasCustom=hasSquadPlayerCustomEntry(squadKey, baseKey);
  const actions=hasCustom
    ? `<span class="squad-injury-actions"><button type="button" class="squad-injury-btn squad-injury-edit-btn" onclick='${openCall}'>수정</button><button type="button" class="squad-injury-btn squad-injury-delete-btn" onclick='${deleteCall}'>삭제</button></span>`
    : `<span class="squad-injury-actions"><button type="button" class="squad-injury-btn squad-injury-write-btn" onclick='${openCall}'>작성</button></span>`;
  return `<div class="squad-injury-cell"><span class="squad-injury-text">${injuryText}</span>${actions}</div>`;
}

function getGroupRankSelectionState(groupKey=''){
  const key=String(groupKey||'').trim().toUpperCase();
  if(!key) return Object.create(null);
  if(!groupRankSelections[key]) groupRankSelections[key]=Object.create(null);
  return groupRankSelections[key];
}
function getGroupTeamRank(groupKey='', teamName=''){
  return getGroupRankSelectionState(groupKey)[String(teamName||'').trim()]||'';
}
function getGroupRankSlotTeam(groupKey='', rank=''){
  const normalizedRank=String(rank||'').trim();
  return (groupData[groupKey]||[]).find(team=>getGroupTeamRank(groupKey, team.name)===normalizedRank)||null;
}
function getGroupTeamStandingMetrics(team){
  const standing=team?.standing&&typeof team.standing==='object' ? team.standing : null;
  return {
    points:Number(standing?.points??team?.points??0),
    goalDifference:Number(standing?.goalDifference??team?.goalDifference??0),
    goalsFor:Number(standing?.goalsFor??team?.goalsFor??0),
    fairPlay:Number(standing?.fairPlay??team?.fairPlay??0)
  };
}
function getThirdPlaceTeams(groups=groupData){
  return Object.keys(groups||{}).sort().flatMap(groupKey=>{
    const team=(groups[groupKey]||[]).find(entry=>getGroupTeamRank(groupKey, entry.name)==='3');
    if(!team) return [];
    const metrics=getGroupTeamStandingMetrics(team);
    return [{
      group:groupKey,
      team:team.name,
      code:team.code,
      coach:team.coach,
      rankInGroup:3,
      points:metrics.points,
      goalDifference:metrics.goalDifference,
      goalsFor:metrics.goalsFor,
      fairPlay:metrics.fairPlay
    }];
  });
}
function sortThirdPlaceTeams(thirdPlaceTeams=[]){
  return [...thirdPlaceTeams].sort((a,b)=>{
    if(b.points!==a.points) return b.points-a.points;
    if(b.goalDifference!==a.goalDifference) return b.goalDifference-a.goalDifference;
    if(b.goalsFor!==a.goalsFor) return b.goalsFor-a.goalsFor;
    if(b.fairPlay!==a.fairPlay) return b.fairPlay-a.fairPlay;
    return String(a.group||'').localeCompare(String(b.group||''));
  }).map((team, index)=>({
    ...team,
    overallRank:index+1
  }));
}
function getQualifiedThirdPlaceTeams(sortedTeams=[]){
  return sortedTeams.slice(0,8).map(team=>({
    ...team,
    qualifiedThird:true,
    eliminated:false
  }));
}
function getEliminatedThirdPlaceTeams(sortedTeams=[]){
  return sortedTeams.slice(8).map(team=>({
    ...team,
    qualifiedThird:false,
    eliminated:true
  }));
}
function getRound32ThirdPlaceSlotDescriptors(){
  return (knockoutTemplates.round32||[]).map(([match])=>{
    const firstSpace=match.indexOf(' ');
    const matchNum=firstSpace===-1?match:match.slice(0,firstSpace);
    const matchText=firstSpace===-1?'':match.slice(firstSpace+1);
    const thirdMatch=matchText.match(/([A-L](?:\/[A-L])*)조 3위/);
    if(!thirdMatch) return null;
    return {
      matchNum,
      token:thirdMatch[0],
      allowedGroups:thirdMatch[1].split('/')
    };
  }).filter(Boolean);
}
function assignQualifiedThirdPlaceTeamsToSlots(qualifiedTeams=[], slotDescriptors=[]){
  const teamNodes=qualifiedTeams.map(team=>({
    team,
    slotKeys:slotDescriptors.filter(slot=>slot.allowedGroups.includes(team.group)).map(slot=>slot.matchNum)
  })).sort((a,b)=>{
    if(a.slotKeys.length!==b.slotKeys.length) return a.slotKeys.length-b.slotKeys.length;
    if(a.team.overallRank!==b.team.overallRank) return a.team.overallRank-b.team.overallRank;
    return a.team.group.localeCompare(b.team.group);
  });
  const descriptorIndexMap=new Map(slotDescriptors.map((slot,index)=>[slot.matchNum,index]));
  const nodeByGroup=new Map(teamNodes.map(node=>[node.team.group,node]));
  const slotAssignments=Object.create(null);
  function tryAssign(node, visited){
    const orderedSlots=[...node.slotKeys].sort((a,b)=>(descriptorIndexMap.get(a)??0)-(descriptorIndexMap.get(b)??0));
    for(const slotKey of orderedSlots){
      if(visited.has(slotKey)) continue;
      visited.add(slotKey);
      const assignedTeam=slotAssignments[slotKey];
      if(!assignedTeam){
        slotAssignments[slotKey]=node.team;
        return true;
      }
      const assignedNode=nodeByGroup.get(assignedTeam.group);
      if(assignedNode&&tryAssign(assignedNode, visited)){
        slotAssignments[slotKey]=node.team;
        return true;
      }
    }
    return false;
  }
  teamNodes.forEach(node=>tryAssign(node, new Set()));
  return slotAssignments;
}
function updateThirdPlaceRankingState(){
  const thirdPlaceTeams=getThirdPlaceTeams(groupData);
  const sortedTeams=sortThirdPlaceTeams(thirdPlaceTeams);
  const qualifiedTeams=getQualifiedThirdPlaceTeams(sortedTeams);
  const eliminatedTeams=getEliminatedThirdPlaceTeams(sortedTeams);
  const slotDescriptors=getRound32ThirdPlaceSlotDescriptors();
  const slotAssignments=assignQualifiedThirdPlaceTeamsToSlots(qualifiedTeams, slotDescriptors);
  thirdPlaceRankingState.thirdPlaceRanking=sortedTeams.map(team=>({
    ...team,
    qualifiedThird:team.overallRank<=8,
    eliminated:team.overallRank>8,
    statusLabel:''
  }));
  thirdPlaceRankingState.qualifiedThirdPlaceTeams=qualifiedTeams;
  thirdPlaceRankingState.eliminatedThirdPlaceTeams=eliminatedTeams;
  thirdPlaceRankingState.qualifiedThirdPlaceGroups=qualifiedTeams.map(team=>team.group);
  thirdPlaceRankingState.thirdPlaceSlotDescriptors=slotDescriptors;
  thirdPlaceRankingState.thirdPlaceSlotAssignments=slotAssignments;
  return thirdPlaceRankingState;
}
function buildGroupRankControls(groupKey='', teamName=''){
  const selectedRank=getGroupTeamRank(groupKey, teamName);
  const buttons=[
    ['1','1위'],
    ['2','2위'],
    ['3','3위'],
    ['4','4위']
  ].map(([rankValue,label])=>`<button type="button" class="group-rank-btn${selectedRank===rankValue?' is-active':''}" data-group-key="${escapeHtml(groupKey)}" data-team-name="${escapeHtml(teamName)}" data-rank-value="${rankValue}" aria-pressed="${selectedRank===rankValue?'true':'false'}">${label}</button>`).join('');
  const thirdPlaceBadge=selectedRank==='3' ? '<span class="group-rank-third-status">조 3위 간 성적</span>' : '';
  const eliminatedBadge='';
  return `<div class="group-rank-controls" role="group" aria-label="${escapeHtml(`${groupKey}조 ${teamName} 순위 선택`)}">${buttons}${thirdPlaceBadge}${eliminatedBadge}</div>`;
}
function buildGroupTableView(groupKey=''){
  const data=groupData[groupKey]||[];
  const matches=groupMatches[groupKey]||[];
  const header='<colgroup><col class="group-col-team"><col class="group-col-coach"><col class="group-col-rank"><col class="group-col-placement"></colgroup><thead><tr><th>팀</th><th>감독</th><th>랭킹</th><th>순위</th></tr></thead>';
  const body=`<tbody>${data.map(team=>{
    const flag=getFlag(team.code);
    const flagHtml=flag?`<img class="flag-icon" src="${flag}" alt="${team.name} flag" loading="lazy">`:'';
    const selectedRank=getGroupTeamRank(groupKey, team.name);
    return `<tr class="group-team-row${selectedRank==='4'?' is-eliminated':''}"><td class="group-team-cell"><div class="flag-cell">${flagHtml}<span class="group-team-name">${team.name}</span></div></td><td class="group-coach-cell">${team.coach}</td><td class="group-rank-cell">${team.rank}</td><td class="group-placement-cell">${buildGroupRankControls(groupKey, team.name)}</td></tr>`;
  }).join('')}</tbody>`;
  const matchSection=matches.length?`<div class="group-match-wrap"><h3 class="group-match-title">조별리그 경기</h3><div class="table-card"><table class="data-table schedule-match-table group-schedule-match-table"><tbody>${matches.map(match=>{const homeFlag=getFlag(match.homeCode);const awayFlag=getFlag(match.awayCode);const homeFlagHtml=homeFlag?`<img class="flag-icon" src="${homeFlag}" alt="${match.home} flag" loading="lazy">`:'';const awayFlagHtml=awayFlag?`<img class="flag-icon" src="${awayFlag}" alt="${match.away} flag" loading="lazy">`:'';return renderScheduleMatchRow(match.number, `<div class="vs-cell"><span class="team-side">${homeFlagHtml}<span>${match.home}</span></span><span>vs</span><span class="team-side"><span>${match.away}</span>${awayFlagHtml}</span></div>`, match.date, match.time, match.stadium);}).join('')}</tbody></table></div></div>`:'';
  return {tableHtml:header+body,matchSection};
}
function formatSignedNumber(value){
  const number=Number(value||0);
  return number>0 ? `+${number}` : `${number}`;
}
function renderThirdPlaceStatusBadge(team){
  const badgeClass=team.qualifiedThird ? 'is-qualified' : 'is-eliminated';
  const label='';
  if(!label) return '';
  return `<span class="third-place-status-badge ${badgeClass}">${label}</span>`;
}
function renderThirdPlaceRankingTable(){
  clearDetailExtras();
  currentBracketStage='thirdPlaceRanking';
  updateThirdPlaceRankingState();
  const rankingItems=thirdPlaceRankingState.thirdPlaceRanking;
  const incompleteMessage=rankingItems.length<12 ? '3위 팀 데이터가 아직 모두 확정되지 않았습니다.' : '';
  document.getElementById('detailTitle').textContent='조별 3위 랭킹';
  document.getElementById('detailSubtitle').textContent=incompleteMessage;
  document.getElementById('detailTable').className='data-table third-place-ranking-table';
  document.getElementById('detailTable').parentElement.classList.add('mobile-table-scroll-card');
  if(!rankingItems.length){
    document.getElementById('detailTable').innerHTML='<thead><tr><th>안내</th></tr></thead><tbody><tr><td class="third-place-empty">아직 3위로 지정된 팀이 없습니다.</td></tr></tbody>';
    document.getElementById('detailCol').classList.remove('hidden');
    updateMobileHeaderReportBoardVisibility();
    return;
  }
  document.getElementById('detailTable').innerHTML=`<colgroup><col class="third-place-col-rank"><col class="third-place-col-group"><col class="third-place-col-team"><col class="third-place-col-points"><col class="third-place-col-goal-diff"><col class="third-place-col-goals"><col class="third-place-col-fair-play"><col class="third-place-col-status"></colgroup><thead><tr><th>순위</th><th>조</th><th>팀</th><th>승점</th><th>골득실</th><th>득점</th><th>페어플레이</th><th>상태</th></tr></thead><tbody>${rankingItems.map(team=>{const flag=getFlag(team.code);const flagHtml=flag?`<img class="flag-icon" src="${flag}" alt="${escapeHtml(team.team)} flag" loading="lazy">`:'';return `<tr class="third-place-row${team.qualifiedThird?' is-qualified':' is-eliminated'}"><td>${team.overallRank}</td><td>${team.group}조</td><td class="third-place-team-cell"><div class="flag-cell">${flagHtml}<span>${escapeHtml(team.team)}</span></div></td><td>${team.points}</td><td>${formatSignedNumber(team.goalDifference)}</td><td>${team.goalsFor}</td><td>${team.fairPlay}</td><td>${renderThirdPlaceStatusBadge(team)}</td></tr>`;}).join('')}</tbody>`;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}
function renderKnockoutTeamLabel(team){
  if(!team) return '';
  const flag=getFlag(team.code);
  const flagHtml=flag ? `<img class="flag-icon knockout-flag-icon" src="${flag}" alt="${escapeHtml(team.name)} flag" loading="lazy">` : '';
  return `<span class="knockout-slot-team">${flagHtml}<span>${escapeHtml(team.name)}</span></span>`;
}
function renderKnockoutThirdPlaceSlotLabel(slotDescriptor){
  const assignedTeam=thirdPlaceRankingState.thirdPlaceSlotAssignments[slotDescriptor.matchNum]||null;
  if(assignedTeam){
    return `<span class="knockout-slot-label is-filled is-third-place" data-match-num="${escapeHtml(slotDescriptor.matchNum)}">${renderKnockoutTeamLabel({name:assignedTeam.team, code:assignedTeam.code})}</span>`;
  }
  return `<span class="knockout-slot-label is-third-place" data-match-num="${escapeHtml(slotDescriptor.matchNum)}">${escapeHtml(slotDescriptor.token)}</span>`;
}
function renderKnockoutSlotLabel(groupKey='', rank=''){
  const assignedTeam=getGroupRankSlotTeam(groupKey, rank);
  const label=assignedTeam ? assignedTeam.name : `${groupKey}조 ${rank}위`;
  const content=assignedTeam ? renderKnockoutTeamLabel(assignedTeam) : escapeHtml(label);
  return `<span class="knockout-slot-label${assignedTeam?' is-filled':''}" data-group-key="${escapeHtml(groupKey)}" data-rank-slot="${escapeHtml(rank)}">${content}</span>`;
}
function updateRoundOf32WithThirdPlaceTeams(){
  return updateThirdPlaceRankingState();
}
function buildKnockoutMatchLabel(matchNum='', matchText=''){
  let resolvedText=String(matchText||'').replace(/([A-L])조\s([12])위/g, (_, groupKey, rank)=>renderKnockoutSlotLabel(groupKey, rank));
  const thirdPlaceSlot=thirdPlaceRankingState.thirdPlaceSlotDescriptors.find(slot=>slot.matchNum===matchNum);
  if(thirdPlaceSlot){
    resolvedText=resolvedText.replace(thirdPlaceSlot.token, renderKnockoutThirdPlaceSlotLabel(thirdPlaceSlot));
  }
  return resolvedText;
}
function getGroupMenuItem(groupKey=''){
  return Array.from(document.querySelectorAll('#groupCol .item')).find(node=>node.textContent.trim()===`Group ${groupKey}`)||null;
}
function applyGroupRankSelection(groupKey='', teamName='', rankValue=''){
  const normalizedGroupKey=String(groupKey||'').trim().toUpperCase();
  const normalizedTeamName=String(teamName||'').trim();
  const normalizedRank=String(rankValue||'').trim();
  if(!normalizedGroupKey||!normalizedTeamName||!['1','2','3','4'].includes(normalizedRank)) return;
  const state=getGroupRankSelectionState(normalizedGroupKey);
  if(state[normalizedTeamName]===normalizedRank) return;
  const duplicateTeamName=Object.keys(state).find(name=>name!==normalizedTeamName&&state[name]===normalizedRank);
  if(duplicateTeamName){
    delete state[duplicateTeamName];
    delete state[normalizedTeamName];
    return;
  }
  state[normalizedTeamName]=normalizedRank;
}
function handleGroupRankButtonClick(button){
  if(!button) return;
  const groupKey=String(button.dataset.groupKey||'').trim().toUpperCase();
  const teamName=String(button.dataset.teamName||'').trim();
  const rankValue=String(button.dataset.rankValue||'').trim();
  if(!groupKey||!teamName||!rankValue) return;
  applyGroupRankSelection(groupKey, teamName, rankValue);
  updateThirdPlaceRankingState();
  showGroup(groupKey, getGroupMenuItem(groupKey));
  if(currentBracketStage==='thirdPlaceRanking'){
    renderThirdPlaceRankingTable();
  }else if(currentBracketStage==='round32'){
    renderKnockoutTable('round32');
  }
}
function showBracketStage(stage, el){
  document.querySelectorAll('#bracketStageCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  currentBracketStage=stage;
  document.getElementById('bracketTabStack')?.classList.remove('hidden');
  document.getElementById('detailCol').classList.add('hidden');
  if(stage==='group'){
    document.getElementById('groupCol').classList.remove('hidden');
    updateMobileHeaderReportBoardVisibility();
    return;
  }
  document.getElementById('groupCol').classList.add('hidden');
  if(stage==='thirdPlaceRanking'){
    renderThirdPlaceRankingTable();
    updateMobileHeaderReportBoardVisibility();
    return;
  }
  renderKnockoutTable(stage);
  updateMobileHeaderReportBoardVisibility();
}
function renderScheduleMatchRow(number, mainHtml, date, time, stadium, rowClass=''){
  const local=kstToLocal(date,time);
  const normalizedRowClass=String(rowClass||'').trim();
  const rowClassName=normalizedRowClass ? `schedule-match-row ${normalizedRowClass}` : 'schedule-match-row';
  return `<tr class="${rowClassName}"><td class="schedule-match-number-cell"><span class="group-match-number">${number}</span></td><td class="schedule-match-main-cell">${mainHtml}<div class="match-meta">날짜: 현지 ${local.date} / ${date}</div><div class="match-meta">시간: 현지 ${local.time} / ${time}</div><div class="match-meta">경기장: ${stadium}</div></td><td class="schedule-stadium-cell">${renderScheduleStadiumMedia(stadium)}</td></tr>`;
}
function renderKnockoutTable(stage){
  clearDetailExtras();
  currentBracketStage=stage;
  updateRoundOf32WithThirdPlaceTeams();
  const stageNames={round32:'32강',round16:'16강',quarterfinal:'8강',semifinal:'4강',final:'결승'};
  document.getElementById('detailTitle').textContent=stageNames[stage]||'';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table schedule-match-table knockout-match-table';
  const rows=knockoutTemplates[stage]||[];
  document.getElementById('detailTable').innerHTML=`<tbody>${rows.map(([match])=>{const firstSpace=match.indexOf(' ');const matchNum=firstSpace===-1?match:match.slice(0,firstSpace);const matchText=firstSpace===-1?'':match.slice(firstSpace+1);const resolvedMatchText=stage==='round32'?buildKnockoutMatchLabel(matchNum, matchText):escapeHtml(matchText);const info=knockoutSchedule[matchNum]||{date:'-',time:'-',stadium:'-'};return renderScheduleMatchRow(matchNum, `<div class="match-text">${resolvedMatchText}</div>`, info.date, info.time, info.stadium);}).join('')}</tbody>`;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}

function showGroup(groupKey, el){
  document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentGroupKey=groupKey;
  currentBracketStage='group';
  const view=buildGroupTableView(groupKey);
  document.getElementById('detailTitle').textContent=`Group ${groupKey}`;
  document.getElementById('detailSubtitle').textContent='';
  clearDetailExtras();
  document.getElementById('detailTable').className='data-table group-table';
  document.getElementById('detailTable').innerHTML=view.tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('afterend',view.matchSection);
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}

function findTournamentTeamMetaByName(teamName=''){
  const normalizedName=String(teamName||'').trim();
  if(!normalizedName) return null;
  return Object.entries(groupData).flatMap(([groupKey, teams])=>teams.map((team, sourceIndex)=>({
    ...team,
    group:groupKey,
    sourceIndex
  }))).find(team=>team.name===normalizedName)||null;
}
function buildTournamentTeamRef(teamLike, extra={}){
  if(!teamLike) return null;
  const fallbackMeta=findTournamentTeamMetaByName(teamLike.name||teamLike.team||'');
  return {
    name:String(teamLike.name||teamLike.team||fallbackMeta?.name||'').trim(),
    code:String(teamLike.code||fallbackMeta?.code||'').trim(),
    group:String(teamLike.group||fallbackMeta?.group||'').trim(),
    rankInGroup:Number(teamLike.rankInGroup??0)||0,
    fifaRank:Number(teamLike.fifaRank??teamLike.rank??fallbackMeta?.rank??0)||0,
    coach:String(teamLike.coach||fallbackMeta?.coach||'').trim(),
    ...extra
  };
}
function normalizeMatchScoreValue(value){
  if(value===null||value===undefined||value==='') return null;
  const number=Number(value);
  return Number.isFinite(number) ? number : null;
}
function getGroupMatchResult(match){
  const homeScore=normalizeMatchScoreValue(match?.homeScore ?? match?.home_score ?? match?.score?.home ?? match?.score?.homeScore);
  const awayScore=normalizeMatchScoreValue(match?.awayScore ?? match?.away_score ?? match?.score?.away ?? match?.score?.awayScore);
  const homeFairPlay=Number(match?.homeFairPlay ?? match?.home_fair_play ?? match?.fairPlay?.home ?? 0) || 0;
  const awayFairPlay=Number(match?.awayFairPlay ?? match?.away_fair_play ?? match?.fairPlay?.away ?? 0) || 0;
  return {
    homeScore,
    awayScore,
    homeFairPlay,
    awayFairPlay,
    isPlayed:homeScore!==null&&awayScore!==null
  };
}
function hasSeedStandingData(team){
  if(!team?.standing||typeof team.standing!=='object') return false;
  return ['points','goalDifference','goalsFor','played','won','drawn','lost','goalsAgainst','fairPlay'].some(key=>team.standing[key]!==undefined&&team.standing[key]!==null);
}
function calculateGroupStandings(groupKey=''){
  const teams=(groupData[groupKey]||[]).map((team, sourceIndex)=>({
    group:groupKey,
    name:team.name,
    code:team.code,
    coach:team.coach,
    fifaRank:Number(team.rank||0),
    sourceIndex,
    played:0,
    won:0,
    drawn:0,
    lost:0,
    goalsFor:0,
    goalsAgainst:0,
    goalDifference:0,
    points:0,
    fairPlay:0,
    rankInGroup:0
  }));
  const standingsByName=new Map(teams.map(team=>[team.name, team]));
  let hasResolvedMatch=false;
  (groupMatches[groupKey]||[]).forEach(match=>{
    const result=getGroupMatchResult(match);
    if(!result.isPlayed) return;
    const home=standingsByName.get(match.home);
    const away=standingsByName.get(match.away);
    if(!home||!away) return;
    hasResolvedMatch=true;
    home.played+=1;
    away.played+=1;
    home.goalsFor+=result.homeScore;
    home.goalsAgainst+=result.awayScore;
    away.goalsFor+=result.awayScore;
    away.goalsAgainst+=result.homeScore;
    home.fairPlay+=result.homeFairPlay;
    away.fairPlay+=result.awayFairPlay;
    if(result.homeScore>result.awayScore){
      home.won+=1;
      home.points+=3;
      away.lost+=1;
    }else if(result.homeScore<result.awayScore){
      away.won+=1;
      away.points+=3;
      home.lost+=1;
    }else{
      home.drawn+=1;
      away.drawn+=1;
      home.points+=1;
      away.points+=1;
    }
  });
  const hasSeedData=!hasResolvedMatch&&teams.some(hasSeedStandingData);
  if(hasSeedData){
    teams.forEach(team=>{
      const standing=(groupData[groupKey]||[]).find(entry=>entry.name===team.name)?.standing||{};
      team.played=Number(standing.played??standing.matchesPlayed??team.played)||0;
      team.won=Number(standing.won??standing.wins??team.won)||0;
      team.drawn=Number(standing.drawn??standing.draws??team.drawn)||0;
      team.lost=Number(standing.lost??standing.losses??team.lost)||0;
      team.goalsFor=Number(standing.goalsFor??standing.gf??team.goalsFor)||0;
      team.goalsAgainst=Number(standing.goalsAgainst??standing.ga??team.goalsAgainst)||0;
      team.goalDifference=Number(standing.goalDifference??standing.gd??(team.goalsFor-team.goalsAgainst))||0;
      team.points=Number(standing.points??team.points)||0;
      team.fairPlay=Number(standing.fairPlay??team.fairPlay)||0;
    });
  }else{
    teams.forEach(team=>{
      team.goalDifference=team.goalsFor-team.goalsAgainst;
    });
  }
  const sortedTeams=[...teams].sort((a,b)=>{
    if(b.points!==a.points) return b.points-a.points;
    if(b.goalDifference!==a.goalDifference) return b.goalDifference-a.goalDifference;
    if(b.goalsFor!==a.goalsFor) return b.goalsFor-a.goalsFor;
    if(b.fairPlay!==a.fairPlay) return b.fairPlay-a.fairPlay;
    return a.sourceIndex-b.sourceIndex;
  }).map((team, index)=>({
    ...team,
    rankInGroup:index+1
  }));
  return {
    items:sortedTeams,
    isReady:hasResolvedMatch||hasSeedData
  };
}
function calculateAllGroupStandings(){
  tournamentState.groupStandings=Object.create(null);
  tournamentState.groupStandingsReady=Object.create(null);
  Object.keys(groupData).forEach(groupKey=>{
    const {items, isReady}=calculateGroupStandings(groupKey);
    tournamentState.groupStandings[groupKey]=items;
    tournamentState.groupStandingsReady[groupKey]=isReady;
  });
  return tournamentState.groupStandings;
}
function getGroupStandings(groupKey=''){
  if(!tournamentState.groupStandings[groupKey]){
    calculateAllGroupStandings();
  }
  return tournamentState.groupStandings[groupKey]||[];
}
function isGroupStandingReady(groupKey=''){
  if(tournamentState.groupStandingsReady[groupKey]===undefined){
    calculateAllGroupStandings();
  }
  return Boolean(tournamentState.groupStandingsReady[groupKey]);
}
function getGroupTeamRank(groupKey='', teamName=''){
  const standing=getGroupStandings(groupKey).find(item=>item.name===String(teamName||'').trim());
  return standing ? String(standing.rankInGroup) : '';
}
function getGroupRankSlotTeam(groupKey='', rank=''){
  const standing=getGroupStandings(groupKey).find(item=>item.rankInGroup===Number(rank));
  return standing ? buildTournamentTeamRef(standing) : null;
}
function getThirdPlaceTeams(groups=groupData){
  calculateAllGroupStandings();
  return Object.keys(groups||{}).sort().flatMap(groupKey=>{
    if(!isGroupStandingReady(groupKey)) return [];
    const standing=getGroupStandings(groupKey).find(item=>item.rankInGroup===3);
    if(!standing) return [];
    return [{
      group:groupKey,
      team:standing.name,
      code:standing.code,
      coach:standing.coach,
      rankInGroup:3,
      points:standing.points,
      goalDifference:standing.goalDifference,
      goalsFor:standing.goalsFor,
      fairPlay:standing.fairPlay
    }];
  });
}
function sortThirdPlaceTeams(thirdPlaceTeams=[]){
  return [...thirdPlaceTeams].sort((a,b)=>{
    if(b.points!==a.points) return b.points-a.points;
    if(b.goalDifference!==a.goalDifference) return b.goalDifference-a.goalDifference;
    if(b.goalsFor!==a.goalsFor) return b.goalsFor-a.goalsFor;
    if(b.fairPlay!==a.fairPlay) return b.fairPlay-a.fairPlay;
    return String(a.group||'').localeCompare(String(b.group||''));
  }).map((team, index)=>({
    ...team,
    overallRank:index+1
  }));
}
function getQualifiedThirdPlaceTeams(sortedTeams=[]){
  return sortedTeams.slice(0,8).map(team=>({
    ...team,
    qualifiedThird:true,
    eliminated:false
  }));
}
function getEliminatedThirdPlaceTeams(sortedTeams=[]){
  return sortedTeams.slice(8).map(team=>({
    ...team,
    qualifiedThird:false,
    eliminated:true
  }));
}
function getRound32ThirdPlaceSlotDescriptors(){
  return (knockoutTemplates.round32||[]).map(([match])=>{
    const firstSpace=match.indexOf(' ');
    const matchNum=firstSpace===-1?match:match.slice(0,firstSpace);
    const matchText=firstSpace===-1?'':match.slice(firstSpace+1);
    const thirdMatch=matchText.match(/([A-L](?:\/[A-L])*)조 3위/);
    if(!thirdMatch) return null;
    return {
      matchNum,
      token:thirdMatch[0],
      allowedGroups:thirdMatch[1].split('/')
    };
  }).filter(Boolean);
}
function assignQualifiedThirdPlaceTeamsToSlots(qualifiedTeams=[], slotDescriptors=[]){
  const teamNodes=qualifiedTeams.map(team=>({
    team,
    slotKeys:slotDescriptors.filter(slot=>slot.allowedGroups.includes(team.group)).map(slot=>slot.matchNum)
  })).sort((a,b)=>{
    if(a.slotKeys.length!==b.slotKeys.length) return a.slotKeys.length-b.slotKeys.length;
    if(a.team.overallRank!==b.team.overallRank) return a.team.overallRank-b.team.overallRank;
    return a.team.group.localeCompare(b.team.group);
  });
  const descriptorIndexMap=new Map(slotDescriptors.map((slot,index)=>[slot.matchNum,index]));
  const nodeByGroup=new Map(teamNodes.map(node=>[node.team.group,node]));
  const slotAssignments=Object.create(null);
  function tryAssign(node, visited){
    const orderedSlots=[...node.slotKeys].sort((a,b)=>(descriptorIndexMap.get(a)??0)-(descriptorIndexMap.get(b)??0));
    for(const slotKey of orderedSlots){
      if(visited.has(slotKey)) continue;
      visited.add(slotKey);
      const assignedTeam=slotAssignments[slotKey];
      if(!assignedTeam){
        slotAssignments[slotKey]=node.team;
        return true;
      }
      const assignedNode=nodeByGroup.get(assignedTeam.group);
      if(assignedNode&&tryAssign(assignedNode, visited)){
        slotAssignments[slotKey]=node.team;
        return true;
      }
    }
    return false;
  }
  teamNodes.forEach(node=>tryAssign(node, new Set()));
  return slotAssignments;
}
function updateThirdPlaceRankingState(){
  calculateAllGroupStandings();
  const thirdPlaceTeams=getThirdPlaceTeams(groupData);
  const sortedTeams=sortThirdPlaceTeams(thirdPlaceTeams);
  const qualifiedTeams=getQualifiedThirdPlaceTeams(sortedTeams);
  const eliminatedTeams=getEliminatedThirdPlaceTeams(sortedTeams);
  const slotDescriptors=getRound32ThirdPlaceSlotDescriptors();
  const slotAssignments=assignQualifiedThirdPlaceTeamsToSlots(qualifiedTeams, slotDescriptors);
  thirdPlaceRankingState.thirdPlaceRanking=sortedTeams.map(team=>({
    ...team,
    qualifiedThird:team.overallRank<=8,
    eliminated:team.overallRank>8,
    statusLabel:''
  }));
  thirdPlaceRankingState.qualifiedThirdPlaceTeams=qualifiedTeams;
  thirdPlaceRankingState.eliminatedThirdPlaceTeams=eliminatedTeams;
  thirdPlaceRankingState.qualifiedThirdPlaceGroups=qualifiedTeams.map(team=>team.group);
  thirdPlaceRankingState.thirdPlaceSlotDescriptors=slotDescriptors;
  thirdPlaceRankingState.thirdPlaceSlotAssignments=slotAssignments;
  tournamentState.thirdPlaceRanking=thirdPlaceRankingState.thirdPlaceRanking;
  tournamentState.qualifiedThirdPlaceTeams=qualifiedTeams;
  tournamentState.eliminatedThirdPlaceTeams=eliminatedTeams;
  return thirdPlaceRankingState;
}
function buildRoundOf32(){
  tournamentState.roundOf32Matches=buildKnockoutStageMatches('round32');
  return tournamentState.roundOf32Matches;
}
function getThirdPlaceOverallRank(groupKey='', teamName=''){
  const normalizedGroupKey=String(groupKey||'').trim().toUpperCase();
  const normalizedTeamName=String(teamName||'').trim();
  if(!normalizedGroupKey||!normalizedTeamName) return 0;
  const target=thirdPlaceRankingState.thirdPlaceRanking.find(team=>team.group===normalizedGroupKey&&team.team===normalizedTeamName);
  return Number(target?.overallRank||0)||0;
}
function getThirdPlaceRankingEntry(groupKey='', teamName=''){
  const normalizedGroupKey=String(groupKey||'').trim().toUpperCase();
  const normalizedTeamName=String(teamName||'').trim();
  if(!normalizedGroupKey||!normalizedTeamName) return null;
  return thirdPlaceRankingState.thirdPlaceRanking.find(team=>team.group===normalizedGroupKey&&team.team===normalizedTeamName)||null;
}
function getGroupPlacementStateClass(standing){
  if(!standing) return 'group-state-eliminated';
  if(standing.rankInGroup<=2) return 'group-state-qualified';
  if(standing.rankInGroup===3){
    const thirdPlaceEntry=getThirdPlaceRankingEntry(standing.group, standing.name);
    return thirdPlaceEntry?.qualifiedThird ? 'group-state-qualified' : 'group-state-eliminated';
  }
  return 'group-state-eliminated';
}
function buildGroupStandingCell(standing){
  const rankBadge=`<span class="group-standing-rank-badge is-rank-${standing.rankInGroup}"><span class="group-standing-rank-number">${standing.rankInGroup}</span><span class="group-standing-rank-suffix">위</span></span>`;
  let detailLabel='';
  let resultLabel='';
  let summaryStateClass=' is-eliminated';
  if(standing.rankInGroup<=2){
    summaryStateClass=' is-qualified';
    resultLabel='';
  }else if(standing.rankInGroup===3){
    const thirdPlaceEntry=getThirdPlaceRankingEntry(standing.group, standing.name);
    const overallRank=Number(thirdPlaceEntry?.overallRank||0)||0;
    const isQualifiedThird=Boolean(thirdPlaceEntry?.qualifiedThird);
    summaryStateClass=isQualifiedThird ? ' is-qualified' : ' is-eliminated';
    detailLabel=`<span class="group-rank-third-status">전체 3위랭킹 ${overallRank||'-'}위</span>`;
    resultLabel='';
  }
  return `<div class="group-standing-summary${summaryStateClass}"><span class="group-standing-rank-slot">${rankBadge}</span>${detailLabel}${resultLabel}</div>`;
}
function renderGroupMatchMainHtml(match){
  const homeFlag=getFlag(match.homeCode);
  const awayFlag=getFlag(match.awayCode);
  const homeFlagHtml=homeFlag?`<img class="flag-icon" src="${homeFlag}" alt="${match.home} flag" loading="lazy">`:'';
  const awayFlagHtml=awayFlag?`<img class="flag-icon" src="${awayFlag}" alt="${match.away} flag" loading="lazy">`:'';
  const result=getGroupMatchResult(match);
  const scoreHtml=result.isPlayed?`<span class="match-score-chip">${result.homeScore} - ${result.awayScore}</span>`:'';
  return `<div class="vs-cell"><span class="team-side">${homeFlagHtml}<span>${match.home}</span></span>${scoreHtml||'<span>vs</span>'}<span class="team-side"><span>${match.away}</span>${awayFlagHtml}</span></div>`;
}
function buildGroupTableView(groupKey=''){
  const standings=getGroupStandings(groupKey);
  const matches=groupMatches[groupKey]||[];
  updateThirdPlaceRankingState();
  const header='<colgroup><col class="group-col-team"><col class="group-col-played"><col class="group-col-won"><col class="group-col-drawn"><col class="group-col-lost"><col class="group-col-goals-for"><col class="group-col-goals-against"><col class="group-col-goal-diff"><col class="group-col-points"><col class="group-col-placement"></colgroup><thead><tr><th>팀</th><th>경기수</th><th>승</th><th>무</th><th>패</th><th>득점</th><th>실점</th><th>골득실</th><th>승점</th><th>순위</th></tr></thead>';
  const body=`<tbody>${standings.map(team=>{
    const flag=getFlag(team.code);
    const flagHtml=flag?`<img class="flag-icon" src="${flag}" alt="${team.name} flag" loading="lazy">`:'';
    const placementStateClass=getGroupPlacementStateClass(team);
    return `<tr class="group-team-row ${placementStateClass}${team.rankInGroup===4?' is-eliminated':''}"><td class="group-team-cell"><div class="flag-cell">${flagHtml}<span class="group-team-name">${team.name}</span></div></td><td class="group-stat-cell">${team.played}</td><td class="group-stat-cell">${team.won}</td><td class="group-stat-cell">${team.drawn}</td><td class="group-stat-cell">${team.lost}</td><td class="group-stat-cell">${team.goalsFor}</td><td class="group-stat-cell">${team.goalsAgainst}</td><td class="group-stat-cell">${formatSignedNumber(team.goalDifference)}</td><td class="group-stat-cell group-points-cell">${team.points}</td><td class="group-placement-cell ${placementStateClass}">${buildGroupStandingCell(team)}</td></tr>`;
  }).join('')}</tbody>`;
  const matchSection=matches.length?`<div class="group-match-wrap"><h3 class="group-match-title">조별리그 경기</h3><div class="table-card"><table class="data-table schedule-match-table group-schedule-match-table"><tbody>${matches.map(match=>renderScheduleMatchRow(match.number, renderGroupMatchMainHtml(match), match.date, match.time, match.stadium)).join('')}</tbody></table></div></div>`:'';
  return {tableHtml:header+body,matchSection};
}
function renderThirdPlaceStatusBadge(team){
  const badgeClass=team.qualifiedThird ? 'is-qualified' : 'is-eliminated';
  const label='';
  if(!label) return '';
  return `<span class="third-place-status-badge ${badgeClass}">${label}</span>`;
}
function renderThirdPlaceRankingTable(){
  clearDetailExtras();
  currentBracketStage='thirdPlaceRanking';
  updateThirdPlaceRankingState();
  const rankingItems=thirdPlaceRankingState.thirdPlaceRanking;
  const totalReadyGroups=Object.keys(groupData).filter(groupKey=>isGroupStandingReady(groupKey)).length;
  const incompleteMessage='';
  document.getElementById('detailTitle').textContent='조별 3위 랭킹';
  document.getElementById('detailSubtitle').textContent=incompleteMessage;
  document.getElementById('detailTable').className='data-table third-place-ranking-table';
  if(!rankingItems.length){
    document.getElementById('detailTable').innerHTML='<thead><tr><th>안내</th></tr></thead><tbody><tr><td class="third-place-empty">아직 자동 집계 가능한 3위 팀 데이터가 없습니다.</td></tr></tbody>';
    document.getElementById('detailCol').classList.remove('hidden');
    updateMobileHeaderReportBoardVisibility();
    return;
  }
  document.getElementById('detailTable').innerHTML=`<colgroup><col class="third-place-col-rank"><col class="third-place-col-group"><col class="third-place-col-team"><col class="third-place-col-points"><col class="third-place-col-goal-diff"><col class="third-place-col-goals"><col class="third-place-col-fair-play"><col class="third-place-col-status"></colgroup><thead><tr><th>순위</th><th>조</th><th>팀</th><th>승점</th><th>골득실</th><th>득점</th><th>페어플레이</th><th>상태</th></tr></thead><tbody>${rankingItems.map(team=>{const flag=getFlag(team.code);const flagHtml=flag?`<img class="flag-icon" src="${flag}" alt="${escapeHtml(team.team)} flag" loading="lazy">`:'';return `<tr class="third-place-row${team.qualifiedThird?' is-qualified':' is-eliminated'}"><td>${team.overallRank}</td><td>${team.group}조</td><td class="third-place-team-cell"><div class="flag-cell">${flagHtml}<span>${escapeHtml(team.team)}</span></div></td><td>${team.points}</td><td>${formatSignedNumber(team.goalDifference)}</td><td>${team.goalsFor}</td><td>${team.fairPlay}</td><td>${renderThirdPlaceStatusBadge(team)}</td></tr>`;}).join('')}</tbody>`;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}
function renderKnockoutTeamLabel(team){
  if(!team) return '';
  const resolvedTeam=buildTournamentTeamRef(team);
  const flag=getFlag(resolvedTeam.code);
  const flagHtml=flag ? `<img class="flag-icon knockout-flag-icon" src="${flag}" alt="${escapeHtml(resolvedTeam.name)} flag" loading="lazy">` : '';
  return `${flagHtml}<span>${escapeHtml(resolvedTeam.name)}</span>`;
}
function getKnockoutResultEntry(matchNum=''){
  return knockoutResultState[String(matchNum||'').trim()]||{};
}
function getKnockoutStateMatch(matchNum=''){
  const normalizedMatchNum=String(matchNum||'').trim();
  const allMatches=[
    ...(tournamentState.roundOf32Matches||[]),
    ...(tournamentState.roundOf16Matches||[]),
    ...(tournamentState.quarterFinalMatches||[]),
    ...(tournamentState.semiFinalMatches||[])
  ];
  if(tournamentState.thirdPlaceMatch) allMatches.push(tournamentState.thirdPlaceMatch);
  if(tournamentState.finalMatch) allMatches.push(tournamentState.finalMatch);
  return allMatches.find(match=>match.matchNum===normalizedMatchNum)||null;
}
function resolveKnockoutToken(matchNum='', token=''){
  const normalizedToken=String(token||'').trim();
  const directSlotMatch=normalizedToken.match(/^([A-L])조\s([12])위$/);
  if(directSlotMatch){
    return getGroupRankSlotTeam(directSlotMatch[1], directSlotMatch[2]);
  }
  const thirdPlaceSlot=thirdPlaceRankingState.thirdPlaceSlotDescriptors.find(slot=>slot.matchNum===matchNum&&slot.token===normalizedToken);
  if(thirdPlaceSlot){
    return buildTournamentTeamRef(thirdPlaceRankingState.thirdPlaceSlotAssignments[matchNum]||null);
  }
  const winnerMatch=normalizedToken.match(/^승자\s+(M\d+)$/);
  if(winnerMatch){
    return buildTournamentTeamRef(getKnockoutStateMatch(winnerMatch[1])?.winner||null);
  }
  const loserMatch=normalizedToken.match(/^패자\s+(M\d+)$/);
  if(loserMatch){
    return buildTournamentTeamRef(getKnockoutStateMatch(loserMatch[1])?.loser||null);
  }
  return null;
}
function resolveKnockoutOutcome(matchNum='', homeTeam=null, awayTeam=null){
  const result=getKnockoutResultEntry(matchNum);
  const explicitWinnerName=String(result.winnerName||result.winner||'').trim();
  let winner=null;
  let loser=null;
  const homeScore=normalizeMatchScoreValue(result.homeScore ?? result.home_score ?? result.score?.home);
  const awayScore=normalizeMatchScoreValue(result.awayScore ?? result.away_score ?? result.score?.away);
  if(explicitWinnerName){
    if(homeTeam&&homeTeam.name===explicitWinnerName){
      winner=homeTeam;
      loser=awayTeam;
    }else if(awayTeam&&awayTeam.name===explicitWinnerName){
      winner=awayTeam;
      loser=homeTeam;
    }else{
      winner=buildTournamentTeamRef({name:explicitWinnerName});
    }
  }else if(homeTeam&&awayTeam&&homeScore!==null&&awayScore!==null&&homeScore!==awayScore){
    winner=homeScore>awayScore ? homeTeam : awayTeam;
    loser=homeScore>awayScore ? awayTeam : homeTeam;
  }
  return {winner, loser, homeScore, awayScore};
}
function buildKnockoutStageMatches(stage=''){
  return (knockoutTemplates[stage]||[]).map(([match])=>{
    const firstSpace=match.indexOf(' ');
    const matchNum=firstSpace===-1?match:match.slice(0, firstSpace);
    const matchText=firstSpace===-1?'':match.slice(firstSpace+1);
    const [homeToken='', awayToken='']=matchText.split(/\s+vs\s+/);
    const homeTeam=resolveKnockoutToken(matchNum, homeToken);
    const awayTeam=resolveKnockoutToken(matchNum, awayToken);
    const outcome=resolveKnockoutOutcome(matchNum, homeTeam, awayTeam);
    return {
      stage,
      matchNum,
      matchText,
      homeToken,
      awayToken,
      homeTeam,
      awayTeam,
      winner:outcome.winner,
      loser:outcome.loser,
      homeScore:outcome.homeScore,
      awayScore:outcome.awayScore
    };
  });
}
function propagateBracketWinners(){
  buildRoundOf32();
  tournamentState.roundOf16Matches=buildKnockoutStageMatches('round16');
  tournamentState.quarterFinalMatches=buildKnockoutStageMatches('quarterfinal');
  tournamentState.semiFinalMatches=buildKnockoutStageMatches('semifinal');
  const finalStageMatches=buildKnockoutStageMatches('final');
  tournamentState.thirdPlaceMatch=finalStageMatches.find(match=>match.matchNum==='M103')||null;
  tournamentState.finalMatch=finalStageMatches.find(match=>match.matchNum==='M104')||null;
  return tournamentState;
}
function updateFinalAndThirdPlace(){
  if(!tournamentState.finalMatch&&!tournamentState.thirdPlaceMatch){
    propagateBracketWinners();
  }
  return {
    thirdPlaceMatch:tournamentState.thirdPlaceMatch,
    finalMatch:tournamentState.finalMatch
  };
}
function refreshTournamentAutomationState(){
  calculateAllGroupStandings();
  updateThirdPlaceRankingState();
  propagateBracketWinners();
  return {
    groupStandings:tournamentState.groupStandings,
    thirdPlaceRanking:tournamentState.thirdPlaceRanking,
    qualifiedThirdPlaceTeams:tournamentState.qualifiedThirdPlaceTeams,
    roundOf32Matches:tournamentState.roundOf32Matches,
    roundOf16Matches:tournamentState.roundOf16Matches,
    quarterFinalMatches:tournamentState.quarterFinalMatches,
    semiFinalMatches:tournamentState.semiFinalMatches,
    thirdPlaceMatch:tournamentState.thirdPlaceMatch,
    finalMatch:tournamentState.finalMatch
  };
}
function updateRoundOf32WithThirdPlaceTeams(){
  const state=refreshTournamentAutomationState();
  return {
    thirdPlaceRanking:state.thirdPlaceRanking,
    qualifiedThirdPlaceTeams:state.qualifiedThirdPlaceTeams,
    roundOf32Matches:state.roundOf32Matches
  };
}
function buildKnockoutResolvedTokenLabel(matchNum='', token=''){
  const normalizedToken=String(token||'').trim();
  const directSlotMatch=normalizedToken.match(/^([A-L])조\s([12])위$/);
  if(directSlotMatch){
    return renderKnockoutSlotLabel(directSlotMatch[1], directSlotMatch[2]);
  }
  const thirdPlaceSlot=thirdPlaceRankingState.thirdPlaceSlotDescriptors.find(slot=>slot.matchNum===matchNum&&slot.token===normalizedToken);
  if(thirdPlaceSlot){
    return renderKnockoutThirdPlaceSlotLabel(thirdPlaceSlot);
  }
  const team=resolveKnockoutToken(matchNum, normalizedToken);
  if(team){
    return `<span class="knockout-slot-label is-filled">${renderKnockoutTeamLabel(team)}</span>`;
  }
  return `<span class="knockout-slot-label">${escapeHtml(normalizedToken)}</span>`;
}
function buildKnockoutMatchLabel(matchNum='', matchText=''){
  const [homeToken='', awayToken='']=String(matchText||'').split(/\s+vs\s+/);
  if(!awayToken){
    return `<div class="match-text">${escapeHtml(matchText)}</div>`;
  }
  return `<div class="vs-cell"><span class="team-side">${buildKnockoutResolvedTokenLabel(matchNum, homeToken)}</span><span>vs</span><span class="team-side">${buildKnockoutResolvedTokenLabel(matchNum, awayToken)}</span></div>`;
}
function renderKnockoutTable(stage){
  clearDetailExtras();
  currentBracketStage=stage;
  updateRoundOf32WithThirdPlaceTeams();
  const stageNames={round32:'32강',round16:'16강',quarterfinal:'8강',semifinal:'4강',final:'결승'};
  document.getElementById('detailTitle').textContent=stageNames[stage]||'';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table schedule-match-table knockout-match-table';
  const rows=knockoutTemplates[stage]||[];
  document.getElementById('detailTable').innerHTML=`<tbody>${rows.map(([match])=>{const firstSpace=match.indexOf(' ');const matchNum=firstSpace===-1?match:match.slice(0,firstSpace);const matchText=firstSpace===-1?'':match.slice(firstSpace+1);const info=knockoutSchedule[matchNum]||{date:'-',time:'-',stadium:'-'};const rowClass=stage==='final'?(matchNum==='M104'?'knockout-final-row':matchNum==='M103'?'knockout-third-place-row':''):'';return renderScheduleMatchRow(matchNum, buildKnockoutMatchLabel(matchNum, matchText), info.date, info.time, info.stadium, rowClass);}).join('')}</tbody>`;
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
}
function showGroup(groupKey, el){
  document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentGroupKey=groupKey;
  currentBracketStage='group';
  const view=buildGroupTableView(groupKey);
  document.getElementById('detailTitle').textContent=`Group ${groupKey}`;
  document.getElementById('detailSubtitle').textContent='';
  clearDetailExtras();
  document.getElementById('detailTable').className='data-table group-table';
  document.getElementById('detailTable').parentElement.classList.add('mobile-table-scroll-card');
  document.getElementById('detailTable').innerHTML=view.tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('afterend',view.matchSection);
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}
function showBracketStage(stage, el){
  document.querySelectorAll('#bracketStageCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('#groupCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentBracketStage=stage;
  document.getElementById('bracketTabStack')?.classList.remove('hidden');
  document.getElementById('detailCol').classList.add('hidden');
  if(stage==='group'){
    document.getElementById('groupCol').classList.remove('hidden');
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#groupCol');
    return;
  }
  document.getElementById('groupCol').classList.add('hidden');
  if(stage==='thirdPlaceRanking'){
    renderThirdPlaceRankingTable();
    updateMobileHeaderReportBoardVisibility();
    focusPanelStart('#detailCol');
    return;
  }
  renderKnockoutTable(stage);
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}
function getGroupMatchByNumber(matchNum=''){
  const normalizedMatchNum=String(matchNum||'').trim();
  for(const [groupKey, matches] of Object.entries(groupMatches)){
    const match=(matches||[]).find(entry=>entry.number===normalizedMatchNum);
    if(match) return {groupKey, match};
  }
  return null;
}
function rerenderTournamentViews(){
  if(currentBracketStage==='group'&&currentGroupKey){
    showGroup(currentGroupKey, getGroupMenuItem(currentGroupKey));
    return;
  }
  if(currentBracketStage==='thirdPlaceRanking'){
    renderThirdPlaceRankingTable();
    return;
  }
  if(currentBracketStage&&currentBracketStage!=='group'){
    renderKnockoutTable(currentBracketStage);
  }
}
function setGroupMatchResult(matchNum, result={}){
  const entry=getGroupMatchByNumber(matchNum);
  if(!entry) return false;
  Object.assign(entry.match, result||{});
  rerenderTournamentViews();
  return true;
}
function setKnockoutMatchResult(matchNum, result={}){
  const normalizedMatchNum=String(matchNum||'').trim();
  if(!normalizedMatchNum) return false;
  knockoutResultState[normalizedMatchNum]={
    ...(knockoutResultState[normalizedMatchNum]||{}),
    ...(result||{})
  };
  rerenderTournamentViews();
  return true;
}
if(typeof window!=='undefined'){
  window.setGroupMatchResult=setGroupMatchResult;
  window.setKnockoutMatchResult=setKnockoutMatchResult;
}

function renderSquadPlayerCell(player){
  const baseKey=ensureSquadPlayerMeta(player).__baseKey;
  const customPhoto=String(player.photo||'').trim();
  const photoDataAttr=customPhoto ? ` data-photo-url="${escapeHtml(customPhoto)}"` : '';
  return `<div class="player-cell"><span class="player-photo-shell" data-player-key="${escapeHtml(baseKey)}" data-player-name="${escapeHtml(player.name)}"${photoDataAttr}><span class="photo-placeholder">공식 프로필</span></span><span class="player-name-text">${player.name}</span></div>`;
}

async function fetchWikipediaPlayerPhoto(name){
  const lookupName=getPlayerPhotoAliases()[name]||name;
  const title=getPlayerPhotoTitles()[lookupName]||getPlayerPhotoTitles()[name];
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
  const lookupName=getPlayerPhotoAliases()[name]||name;
  const officialUrl=getPlayerPhotoSources()[lookupName]||getPlayerPhotoSources()[name];
  if(officialUrl){
    playerPhotoCache[name]=officialUrl;
    return officialUrl;
  }
  const fallbackUrl=await fetchWikipediaPlayerPhoto(lookupName);
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
    const displayName=shell.dataset.playerName||'선수';
    const customPhotoUrl=String(shell.dataset.photoUrl||'').trim();
    const photoKey=shell.dataset.playerKey||displayName;
    const photoUrl=customPhotoUrl||await fetchPlayerPhoto(photoKey);
    if(!document.body.contains(shell)) return;
    if(photoUrl){
      shell.innerHTML=`<img class="player-photo player-photo-official" src="${photoUrl}" alt="${displayName} 대표팀 공식 프로필 사진" loading="lazy" referrerpolicy="no-referrer">`;
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
  ensureSquadInjuryEntries();
  currentSquadKey=key;
  const state=squadState[key];
  const squad=squads[key];
  const filtered=state.filter==='ALL'?squad:squad.filter(p=>p.position===state.filter);
  const isMobile=isMobileViewport();
  const pageSize=Math.max(filtered.length,1);
  const totalPages=Math.max(1,Math.ceil(filtered.length/pageSize));
  if(isMobile){
    state.page=1;
  }
  state.page=Math.min(totalPages,Math.max(1,state.page));
  const rows=filtered.slice((state.page-1)*pageSize,state.page*pageSize);
  const cacheKey=`${key}:${state.filter}:${state.page}:${pageSize}`;
  document.getElementById('detailTitle').textContent=state.title;
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table squad-table';
  if(!renderCache.squadViews[cacheKey]){
    renderCache.squadViews[cacheKey]={
      tableHtml:`<colgroup><col class="squad-col-position"><col class="squad-col-number"><col class="squad-col-player"><col class="squad-col-club"><col class="squad-col-age"><col class="squad-col-injury"></colgroup><thead><tr><th>포지션</th><th>등번호</th><th>선수</th><th>소속팀</th><th>나이</th><th>최근 부상이력</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${p.position}</td><td>${p.number}</td><td>${renderSquadPlayerCell(p)}</td><td>${p.club}</td><td>${p.age}</td><td>${renderSquadInjuryCell(key, p)}</td></tr>`).join('')}</tbody>`,
      toolbarHtml:`<div class="toolbar">${['ALL','GK','DF','MF','FW'].map(pos=>`<button class="toolbar-btn ${state.filter===pos?'active':''}" onclick="setSquadFilter('${key}','${pos}')">${pos==='ALL'?'전체':pos}</button>`).join('')}</div>`,
      paginationHtml:`<div class="pagination"><button class="page-btn" onclick="changeSquadPage('${key}',-1)" ${state.page===1?'disabled':''}>이전</button><span>${state.page} / ${totalPages}</span><button class="page-btn" onclick="changeSquadPage('${key}',1)" ${state.page===totalPages?'disabled':''}>다음</button></div>`
    };
  }
  document.getElementById('detailTable').innerHTML=renderCache.squadViews[cacheKey].tableHtml;
  document.getElementById('detailTable').insertAdjacentHTML('beforebegin',renderCache.squadViews[cacheKey].toolbarHtml);
  document.getElementById('detailCol').classList.remove('hidden');
  scheduleSquadPhotoHydration();
  updateMobileHeaderReportBoardVisibility();
}
function setSquadFilter(key, filter){squadState[key].filter=filter;squadState[key].page=1;renderSquad(key);}
function changeSquadPage(key, delta){squadState[key].page+=delta;renderSquad(key);}

function renderEquipment(){
  clearDetailExtras();
  ensureEquipmentEditorEntries();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  document.getElementById('equipmentUserCol').classList.remove('hidden');
  if(isMobileViewport()){
    document.getElementById('detailCol').classList.add('hidden');
    updateMobileHeaderReportBoardVisibility();
    return;
  }
  renderEquipmentSharedDetail();
  updateMobileHeaderReportBoardVisibility();
}

function renderEquipmentSharedDetail(){
  currentEquipmentMode='shared';
  currentEquipmentUser='';
  const detailTable=document.getElementById('detailTable');
  document.getElementById('equipmentSharedTab')?.classList.add('active');
  document.getElementById('detailTitle').innerHTML=renderEquipmentTitle('shared');
  document.getElementById('detailSubtitle').innerHTML=isMobileViewport() ? '' : renderEquipmentSharedTvuIndicatorHtml();
  detailTable.className='data-table equipment-table';
  if(!renderCache.equipmentSharedTable){
    renderCache.equipmentSharedTable=renderEquipmentSummaryTable();
  }
  detailTable.innerHTML=renderCache.equipmentSharedTable;
  detailTable.parentElement.classList.add('equipment-table-wrapper');
  document.getElementById('detailCol').classList.remove('hidden');
  updateEquipmentSharedTvuIndicators();
}
function renderEquipmentCarnetDetail(){
  currentEquipmentMode='carnet';
  currentEquipmentUser='';
  loadEquipmentCarnetEntries();
  const detailTable=document.getElementById('detailTable');
  document.getElementById('equipmentCarnetTab')?.classList.add('active');
  document.getElementById('detailTitle').innerHTML=renderEquipmentCarnetTitle();
  document.getElementById('detailSubtitle').textContent='';
  detailTable.className='data-table carnet-list-table';
  detailTable.parentElement.classList.remove('equipment-table-wrapper');
  renderCache.equipmentCarnetPanel=renderEquipmentCarnetPanelHtml();
  detailTable.innerHTML=renderCache.equipmentCarnetPanel;
  document.getElementById('detailCol').classList.remove('hidden');
  if(isEquipmentCarnetComposerOpen){
    window.setTimeout(()=>document.getElementById('equipmentCarnetTitleInput')?.focus(), 0);
  }
}
function openEquipmentCarnetComposer(){
  isEquipmentCarnetDeleteMode=false;
  equipmentCarnetSelectedIds.clear();
  isEquipmentCarnetComposerOpen=true;
  if(currentEquipmentMode==='carnet'){
    renderEquipmentCarnetDetail();
    updateMobileHeaderReportBoardVisibility();
  }
}
function closeEquipmentCarnetComposer(){
  isEquipmentCarnetComposerOpen=false;
  if(currentEquipmentMode==='carnet'){
    renderEquipmentCarnetDetail();
    updateMobileHeaderReportBoardVisibility();
  }
}
function showEquipmentShared(el){
  currentEquipmentMode='shared';
  currentEquipmentUser='';
  isEquipmentCarnetComposerOpen=false;
  isEquipmentFileStorageComposerOpen=false;
  isEquipmentFileStorageDeleteMode=false;
  equipmentFileStorageSelectedIds.clear();
  if(isMobileViewport()){
    clearDetailExtras();
    ensureEquipmentEditorEntries();
    renderEquipmentSharedDetail();
  }else{
    renderEquipment();
  }
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}
function showEquipmentCarnet(el){
  currentEquipmentMode='carnet';
  currentEquipmentUser='';
  isEquipmentFileStorageComposerOpen=false;
  isEquipmentFileStorageDeleteMode=false;
  equipmentFileStorageSelectedIds.clear();
  clearDetailExtras();
  ensureEquipmentEditorEntries();
  renderEquipmentCarnetDetail();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}

function showEquipmentPersonal(user, el){
  currentEquipmentMode='personal';
  currentEquipmentUser=user;
  isEquipmentCarnetComposerOpen=false;
  isEquipmentFileStorageComposerOpen=false;
  isEquipmentFileStorageDeleteMode=false;
  equipmentFileStorageSelectedIds.clear();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(!el){
    el=Array.from(document.querySelectorAll('#equipmentUserCol .item')).find(item=>item.textContent.trim()===user)||null;
  }
  if(el) el.classList.add('active');
  clearDetailExtras();
  ensureEquipmentEditorEntries();
  document.getElementById('detailTitle').innerHTML=renderEquipmentTitle('personal', user);
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table equipment-table';
  if(!renderCache.equipmentPersonalTables[user]){
    renderCache.equipmentPersonalTables[user]=renderPersonalEquipmentTable(user);
  }
  document.getElementById('detailTable').innerHTML=renderCache.equipmentPersonalTables[user];
  document.getElementById('detailTable').parentElement.classList.add('equipment-table-wrapper');
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
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
  ensureTimelineExportButton();
  applyMobileTimelineAStructure();
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
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}

function renderStadiumFigure(stadium){
  return `<div class="group-match-wrap"><figure class="stadium-figure"><img class="stadium-photo" src="${stadium.imagePath}" alt="${stadium.imageAlt}" loading="lazy"><figcaption class="stadium-caption"><span>${stadium.imageCaption}</span><a class="stadium-source-link" href="${stadium.sourceUrl}" target="_blank" rel="noreferrer">${stadium.sourceLabel}</a></figcaption></figure></div>`;
}

function renderStadiumSlot(){
  return '<div class="group-match-wrap"><figure class="stadium-figure"><div class="stadium-slot">단면 사진 자리</div></figure></div>';
}

function renderMexicoStadiumInlineSections(stadiumKey, activeSectionKey=''){
  const keys=['route','conferenceRoom','mixedZone','ground','shooting','playerArrival'];
  return `<div class="mexico-stadium-inline-sections">${keys.map(sectionKey=>`<div class="item ${activeSectionKey===sectionKey?'active':''}" onclick="showMexicoStadiumSection('${sectionKey}', this)">${mexicoStadiumSections[sectionKey]||sectionKey}</div>`).join('')}</div>`;
}

function renderMexicoStadiumDetail(stadiumKey, sectionKey=''){
  ensureMexicoStadiumEditorEntries();
  const stadium=mexicoStadiums[stadiumKey];
  if(!stadium) return;
  const detailCol=document.getElementById('detailCol');
  const section=sectionKey?stadium.sections[sectionKey]:null;
  const rows=getMexicoStadiumRows(stadiumKey, sectionKey);
  const cacheKey=`${stadium.title}:${sectionKey||'root'}`;
  document.getElementById('detailTitle').innerHTML=renderMexicoStadiumTitle(stadiumKey, sectionKey);
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table mexico-stadium-table';
  if(!renderCache.mexicoStadiumDetails[cacheKey]){
    renderCache.mexicoStadiumDetails[cacheKey]={
      tableHtml:`<colgroup><col class="mexico-stadium-col-label"><col class="mexico-stadium-col-value"></colgroup><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody>${rows.map(([label,value])=>`<tr><td>${label}</td><td>${value}</td></tr>`).join('')}</tbody>`,
      extraHtml:section?renderMexicoStadiumMediaGallery(stadiumKey, sectionKey):renderStadiumFigure(stadium)
    };
  }
  document.getElementById('detailTable').innerHTML=renderCache.mexicoStadiumDetails[cacheKey].tableHtml;
  const extraHtml=isMobileViewport()&&!section ? `${renderCache.mexicoStadiumDetails[cacheKey].extraHtml}${renderMexicoStadiumInlineSections(stadiumKey, sectionKey)}` : renderCache.mexicoStadiumDetails[cacheKey].extraHtml;
  document.getElementById('detailTable').insertAdjacentHTML('afterend',extraHtml);
  detailCol.classList.add('mexico-stadium-mode');
  detailCol.classList.remove('hidden');
}

function showMexicoStadium(key, el){
  const stadium=mexicoStadiums[key];
  document.querySelectorAll('#mexicoStadiumCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('#mexicoStadiumSectionCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.mexico-stadium-inline-sections .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentMexicoStadiumKey=key;
  currentMexicoStadiumSectionKey='';
  clearDetailExtras();
   document.getElementById('mexicoStadiumTabStack')?.classList.remove('hidden');
  document.getElementById('mexicoStadiumSectionCol').classList.toggle('hidden', isMobileViewport());
  renderMexicoStadiumDetail(key);
  updateHeaderTimes();
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
}

function showMexicoStadiumSection(sectionKey, el){
  if(!currentMexicoStadiumKey) return;
  document.querySelectorAll('#mexicoStadiumSectionCol .item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.mexico-stadium-inline-sections .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  document.getElementById('mexicoStadiumTabStack')?.classList.remove('hidden');
  currentMexicoStadiumSectionKey=sectionKey;
  clearDetailExtras();
  renderMexicoStadiumDetail(currentMexicoStadiumKey, sectionKey);
  updateHeaderTimes();
  updateMobileHeaderReportBoardVisibility();
  focusPanelStart('#detailCol');
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
  console.assert(typeof updateHeaderReportBoard==='function','updateHeaderReportBoard should be defined');
  console.assert(typeof buildPersonalTimelineReportText==='function','buildPersonalTimelineReportText should be defined');
  console.assert(typeof getThirdPlaceTeams==='function','getThirdPlaceTeams should be defined');
  console.assert(typeof renderThirdPlaceRankingTable==='function','renderThirdPlaceRankingTable should be defined');
  console.assert(Array.isArray(timelineRows)&&timelineRows.length===10,'Timeline rows should exist');
  console.assert(Array.isArray(timelineEditableRows)&&timelineEditableRows.length===10,'Editable timeline rows should exist');
  console.assert(personalTimelineDetailFields.length===5,'Personal timeline detail fields should exist');
  console.assert(teamTimelineRows[0].label==='대한민국'&&teamTimelineRows[3].label==='체코','Team timeline row ordering should exist');
  console.assert(personalTimelineRows[0].label==='영상취재팀 공동'&&personalTimelineRows[6].label==='정재우','Personal timeline row ordering should exist');
  console.assert(timelineOfficialTeamSchedules['대한민국'][0].label.includes('vs 체코'),'Korea official timeline should include opponent');
  console.assert(timelineOfficialTeamSchedules['멕시코'][1].label.includes('vs 대한민국'),'Mexico official timeline should include opponent');
  console.assert(timelineOfficialTeamSchedules['남아공'][2].label.includes('대한민국'),'South Africa official timeline should include opponent');
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
  console.assert(document.querySelector('.news-detail-title-ci.broadcaster-ci-kbs')!==null,'News detail CI title should render');
  console.assert(document.querySelectorAll('.news-table tbody tr').length===getNewsEntries('2022','KBS').length,'News rows should match current news entries');
  console.assert(importedNewsData['2022'].SBS.every(item=>item.date&&item.date.startsWith('2022.')),'SBS news dates should be filled from official publish dates');
  toggleGroupASquads();
  console.assert(!document.getElementById('groupASquadCol').classList.contains('hidden'),'Group A squad panel should open');
  showGroupASquad('korea', document.querySelector('#groupASquadCol .item'));
  console.assert(document.getElementById('detailTitle').textContent==='대한민국 선수단','Group A squad detail should render');
  console.assert(document.getElementById('detailTable').classList.contains('squad-table'),'Group A squad table class should render');
  console.assert(document.querySelector('.player-photo-shell')!==null,'Squad player photo shell should render');
  toggleEquipment();
  console.assert(!document.getElementById('equipmentUserCol').classList.contains('hidden'),'Equipment user panel should open');
  console.assert(document.getElementById('detailTitle').textContent==='장비종합현황','Equipment panel should render');
  showEquipmentPersonal('박재현', document.querySelector('#equipmentUserCol .item'));
  console.assert(document.getElementById('detailTitle').textContent==='박재현 개인장비','Equipment personal detail should render');
  togglePersonalTimeline();
  console.assert(document.getElementById('detailTitle').textContent==='일정타임라인','Personal timeline detail should render');
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

function initializeNewsProgrammingPersistence(){
  loadTicker();
  loadNewsProgrammingState();
  ensureNewsProgrammingLocalPersistenceLoaded();
  renderAllBoards();
}

initializeNewsProgrammingPersistence();
updateHeaderCountdown();
updateHeaderReportBoard();
startHeaderTimeTicker();
ensureMobileHistoryGuard();
if(typeof window!=='undefined'){
  window.initMap=initMap;
  document.addEventListener('DOMContentLoaded', initializeNewsProgrammingPersistence);
  document.addEventListener('DOMContentLoaded', initUserSelect);
  document.addEventListener('DOMContentLoaded', loadSchedules);
  document.addEventListener('DOMContentLoaded', subscribeRealtime);
  document.addEventListener('DOMContentLoaded', applyMobileTimelineAStructure);
  window.addEventListener('load', initSharedStateSync);
  window.addEventListener('focus', fetchSharedStateSnapshot);
  window.addEventListener('resize', updateMobileHeaderReportBoardVisibility);
  window.addEventListener('resize', ensureMobileHistoryGuard);
  window.addEventListener('resize', applyMobileTimelineAStructure);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState==='visible'){
      fetchSharedStateSnapshot();
    }
  });
}
updateMobileHeaderReportBoardVisibility();
console.log("DEPLOY CHECK: 2026-04-16-vercel-static-final-03");
// deploy refresh 2026-04-16
// deploy refresh 2026-04-16-pages-fix-01
// deploy refresh 2026-04-16-vercel-static-final-03
