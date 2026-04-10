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
const SQUAD_INJURY_STORAGE_KEY = 'worldcup-guide-squad-injury-v1';
const SQUAD_INJURY_WINDOW_NAME_KEY = '__worldcupGuideSquadInjury__';
const MEXICO_STADIUM_EDITOR_STORAGE_KEY = 'worldcup-guide-mexico-stadium-editor-v1';
const MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY = '__worldcupGuideMexicoStadiumEditor__';
const EQUIPMENT_EDITOR_STORAGE_KEY = 'worldcup-guide-equipment-editor-v1';
const EQUIPMENT_EDITOR_WINDOW_NAME_KEY = '__worldcupGuideEquipmentEditor__';
const MAP_LOCATION_PIN_STORAGE_KEY = 'worldcup-guide-map-location-pins-v1';
const MAP_LOCATION_PIN_WINDOW_NAME_KEY = '__worldcupGuideMapLocationPins__';
let hasLoadedNewsEditorEntries = false;
let hasLoadedNewsProgrammingState = false;
let hasLoadedNewsProgrammingLocalPersistence = false;
let hasLoadedSquadInjuryEntries = false;
let hasLoadedMexicoStadiumEditorEntries = false;
let hasLoadedEquipmentEditorEntries = false;
let hasLoadedMapLocationPinEntries = false;
let currentNewsBroadcaster = '';
let currentSquadKey = '';
let currentGroupKey = '';
let currentBracketStage = '';
let currentEquipmentMode = 'shared';
let currentEquipmentUser = '';
let isEquipmentCarnetComposerOpen = false;
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
const MAP_LOCATION_PIN_CATEGORIES = [
  {value:'restaurant', label:'식당', tone:'restaurant'},
  {value:'lodging', label:'숙소', tone:'lodging'},
  {value:'stadium', label:'경기장 관련', tone:'stadium'},
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
    const dateA=a.date||'9999.99.99';
    const dateB=b.date||'9999.99.99';
    if(dateA!==dateB) return dateA.localeCompare(dateB);
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
    return `<span class="section-title-row"><span>${escapeHtml(titleText)}</span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="${isEditing?`addPersonalEquipmentRow('${escapeHtml(user)}')`:`beginPersonalEquipmentEditing('${escapeHtml(user)}')`}">작성</button><button type="button" class="section-title-action-btn${isEditing?'':' is-disabled'}" onclick="handlePersonalEquipmentSave('${escapeHtml(user)}')" ${isEditing?'':'disabled'}>저장</button><button type="button" class="section-title-action-btn delete${isEditing?'':' is-disabled'}" onclick="deletePersonalEquipmentRows('${escapeHtml(user)}')" ${isEditing?'':'disabled'}>삭제</button></span></span>`;
  }
  const isEditing=isEquipmentSummaryEditMode();
  return `<span class="section-title-row"><span>${escapeHtml(titleText)}</span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="${isEditing?'void(0)':'beginEquipmentSummaryEditing()'}" ${isEditing?'disabled':''}>작성</button><button type="button" class="section-title-action-btn${isEditing?'':' is-disabled'}" onclick="handleEquipmentSummarySave()" ${isEditing?'':'disabled'}>저장</button><button type="button" class="section-title-action-btn delete${isEditing?'':' is-disabled'}" onclick="deleteSelectedEquipmentSummaryRows()" ${isEditing?'':'disabled'}>삭제</button></span></span>`;
}
function renderEquipmentTableColgroup(mode){
  return '<colgroup><col class="equipment-col-name"><col class="equipment-col-model"><col class="equipment-col-maker"><col class="equipment-col-serial"><col class="equipment-col-qty"><col class="equipment-col-note"><col class="equipment-col-user"></colgroup>';
}
function renderEquipmentUserSelect(selectedValue='', attributes='', className='equipment-user-select'){
  const normalizedSelected=String(selectedValue||'').trim();
  const normalizedAttributes=String(attributes||'').trim();
  const attributeText=normalizedAttributes ? ` ${normalizedAttributes}` : '';
  return `<select class="${escapeHtml(className)}"${attributeText}><option value="">선택</option>${EQUIPMENT_SHARED_USERS.map(name=>`<option value="${escapeHtml(name)}"${name===normalizedSelected?' selected':''}>${escapeHtml(name)}</option>`).join('')}</select>`;
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
  return `<span class="section-title-row"><span>까르네 목록</span><span class="section-title-actions"><button type="button" class="section-title-action-btn" onclick="openEquipmentCarnetComposer()">작성</button><button type="button" class="section-title-action-btn delete" onclick="closeEquipmentCarnetComposer()">삭제</button></span></span>`;
}
function renderEquipmentCarnetPanelHtml(){
  const composerHtml=isEquipmentCarnetComposerOpen?`<div class="carnet-list-composer"><div class="carnet-list-composer-title">까르네 작성 준비</div><p class="carnet-list-composer-description">추후 까르네 입력 폼을 이 영역에 연결할 수 있습니다.</p></div>`:'';
  return `<tbody><tr><td class="carnet-list-cell"><section class="carnet-list-panel" aria-label="까르네 목록"><header class="carnet-list-header"><h3 class="carnet-list-title">까르네 목록</h3><p class="carnet-list-description">등록된 까르네 정보를 여기에 정리합니다.</p></header>${composerHtml}<div class="carnet-list-body"><div class="carnet-list-placeholder">추후 표 또는 카드 목록을 이 영역에 추가할 수 있습니다.</div></div></section></td></tr></tbody>`;
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
      placeholderName:'예: 메인 경기장 북문 식당',
      placeholderLocation:'예: 경기장 북문 도보 5분 / Av. Example 123',
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
  const raw=readNewsProgrammingRaw();
  if(!raw){
    ensureNewsProgrammingLocalPersistenceLoaded();
    currentNewsProgrammingMemoDrafts={...currentNewsProgrammingSavedMemos};
    return;
  }
  try{
    const parsed=JSON.parse(raw);
    const nextSavedMemos={};
    if(parsed?.savedMemos&&typeof parsed.savedMemos==='object'){
      Object.entries(parsed.savedMemos).forEach(([key, value])=>{
        const normalizedKey=String(key||'').trim();
        if(!normalizedKey) return;
        nextSavedMemos[normalizedKey]=String(value||'').trim();
      });
    }
    currentNewsProgrammingSavedMemos=nextSavedMemos;
    currentNewsProgrammingMemoDrafts={...nextSavedMemos};
    newsProgrammingSpecialEntries=Array.isArray(parsed?.specialEntries)
      ? parsed.specialEntries.map((entry, index)=>normalizeNewsProgrammingSpecialEntry(entry, index)).filter(Boolean)
      : [];
    if(parsed?.filters&&typeof parsed.filters==='object'){
      currentNewsProgrammingFilters={
        date:String(parsed.filters.date||currentNewsProgrammingFilters.date||getTodayTimelineKey()).trim()||getTodayTimelineKey(),
        liveOnly:Boolean(parsed.filters.liveOnly)
      };
    }
    ensureNewsProgrammingLocalPersistenceLoaded();
  }catch(error){
    console.warn('[news-programming] load failed', error);
    currentNewsProgrammingSavedMemos={};
    currentNewsProgrammingMemoDrafts={};
    newsProgrammingSpecialEntries=[];
    ensureNewsProgrammingLocalPersistenceLoaded();
  }
}
function saveNewsProgrammingState(){
  loadNewsProgrammingState();
  const payload={
    savedMemos:currentNewsProgrammingSavedMemos,
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
      date:currentNewsProgrammingFilters.date,
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
    return Object.entries(parsed).reduce((acc, [key, value])=>{
      const normalizedKey=String(key||'').trim();
      if(!normalizedKey) return acc;
      acc[normalizedKey]=String(value||'').trim();
      return acc;
    }, {});
  }catch(error){
    console.warn('[news-programming] programming memo load failed', error);
    return {};
  }
}
function saveProgrammingMemos(nextMemos=currentNewsProgrammingSavedMemos){
  if(typeof window==='undefined'||!window.localStorage) return;
  const normalized=Object.entries(nextMemos||{}).reduce((acc, [key, value])=>{
    const normalizedKey=String(key||'').trim();
    if(!normalizedKey) return acc;
    acc[normalizedKey]=String(value||'').trim();
    return acc;
  }, {});
  window.localStorage.setItem(PROGRAMMING_MEMOS_STORAGE_KEY, JSON.stringify(normalized));
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
  const categoryOptions=MAP_LOCATION_PIN_CATEGORIES.map(item=>`<option value="${escapeHtml(item.value)}"${(editingEntry?.category||'restaurant')===item.value?' selected':''}>${escapeHtml(item.label)}</option>`).join('');
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
  const category=getMapLocationPinCategoryMeta(categorySelect?.value||'restaurant').value;
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
  }
}
function renderMapSectionPanel(sectionKey){
  const sectionMeta=sectionKey==='lodging'
    ? {title:'숙소정보', description:'', uploadLabel:'숙소 사진 업로드', formLabel:'숙소 정보 작성 준비'}
    : {title:'지역정보', description:'', uploadLabel:'지역 사진 업로드', formLabel:'지역 정보 작성 준비'};
  const isComposerOpen=!!mapSectionComposerState[sectionKey];
  const composerHtml=isComposerOpen?`<div class="simple-form-card"><div class="simple-form-title">${escapeHtml(sectionMeta.formLabel)}</div><div class="simple-form-grid"><label class="simple-form-field"><span class="simple-form-label">기본 메모</span><textarea class="simple-form-input simple-form-textarea" placeholder="${escapeHtml(sectionMeta.description)}"></textarea></label>${renderUploadField(`map-${sectionKey}-photo`, sectionMeta.uploadLabel)}</div></div>`:'';
  const descriptionHtml=sectionMeta.description?`<p class="simple-info-subdescription">${escapeHtml(sectionMeta.description)}</p>`:'';
  const locationPinSectionHtml=renderMapLocationPinSection(sectionKey);
  return `<section class="simple-info-subpanel${currentMapSubTab===sectionKey?' is-active':''}" data-map-section="${escapeHtml(sectionKey)}"><header class="simple-info-subheader"><div><h4 class="simple-info-subtitle">${escapeHtml(sectionMeta.title)}</h4>${descriptionHtml}</div></header>${composerHtml}${locationPinSectionHtml}<div class="simple-info-body"><div class="simple-info-placeholder">${escapeHtml(sectionMeta.title)} 관련 카드, 표, 위치 정보를 이 영역에 추가할 수 있습니다.</div></div></section>`;
}
function renderMapPanelHtml(){
  loadMapLocationPinEntries();
  const tabsHtml=`<div class="simple-subtabs" role="tablist" aria-label="MAP 하위탭"><button type="button" class="item simple-subtab${currentMapSubTab==='region'?' active':''}" role="tab" aria-selected="${currentMapSubTab==='region'?'true':'false'}" onclick="showMapSubTab('region')">지역정보</button><button type="button" class="item simple-subtab${currentMapSubTab==='lodging'?' active':''}" role="tab" aria-selected="${currentMapSubTab==='lodging'?'true':'false'}" onclick="showMapSubTab('lodging')">숙소정보</button></div>`;
  const activeSectionHtml=currentMapSubTab==='lodging'?renderMapSectionPanel('lodging'):renderMapSectionPanel('region');
  return `<tbody><tr><td class="simple-info-cell"><section class="simple-info-panel simple-info-panel-map" aria-label="MAP">${tabsHtml}${activeSectionHtml}</section></td></tr></tbody>`;
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
  return `${normalized.replace(/-/g,'/')} (${weekNames[baseDate.getDay()]})`;
}
function getProgrammingDateTimeLabel(){
  const localTime=formatHeaderClock('America/Mexico_City');
  const koreaTime=formatHeaderClock('Asia/Seoul');
  return `현지시각 ${localTime} / 한국시각 ${koreaTime}`;
}
function normalizeNewsProgrammingMemoText(value=''){
  return String(value||'').replace(/\s+/g,' ').trim();
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
      isSpecialEntry:false
    };
  }).filter(Boolean);
  const specialItems=newsProgrammingSpecialEntries
    .map(item=>({
      programKey:'특보',
      memo:normalizeNewsProgrammingMemoText(item?.memo||''),
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
    track.innerHTML=`<div class="header-report-board-page"><div class="header-report-board-row header-report-board-row-marquee"><div class="header-report-board-line"><div class="header-report-board-inline-marquee"><div class="header-report-board-inline-marquee-track${speedClassAttr}">${renderedMarkup}</div></div></div></div></div>`;
    return;
  }
  const normalized=String(text||'').trim()||' ';
  const repeatedText=`${normalized}   •   ${normalized}`;
  const renderedText=allowHtml ? repeatedText : escapeHtml(repeatedText);
  track.innerHTML=`<div class="header-report-board-page"><div class="header-report-board-row header-report-board-row-marquee"><div class="header-report-board-line"><div class="header-report-board-inline-marquee"><div class="header-report-board-inline-marquee-track"><span class="header-report-board-inline-marquee-copy">${renderedText}</span><span class="header-report-board-inline-marquee-copy" aria-hidden="true">${renderedText}</span></div></div></div></div></div>`;
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
  return Object.keys(personalTimelineDetailSelections)
    .sort()
    .filter(dateKey=>!isPastTimelineDateKey(dateKey))
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
  return getAllUpcomingScheduleTickerEntries()
    .map(formatScheduleTickerItem)
    .filter(Boolean);
}
function getNoticeBoardItems(){
  return getNewsProgrammingMemoTickerSourceItems()
    .map(item=>{
      const normalizedProgram=String(item?.programKey||item?.title||'').trim();
      const normalizedMemo=normalizeNewsProgrammingMemoText(item?.memo||'');
      if(!normalizedProgram||!normalizedMemo) return '';
      return `<span class="board-label-tag">${escapeHtml(normalizedProgram)}</span> ${escapeHtml(normalizedMemo)}`;
    })
    .filter(Boolean);
}
function renderScheduleBoard(){
  const track=document.getElementById('headerScheduleBoardTrack');
  if(!track) return;
  const items=getScheduleBoardItems();
  if(!items.length){
    track.innerHTML='';
    track.classList.remove('is-animated');
    return;
  }
  track.classList.add('is-animated');
  renderHeaderProgrammingTickerLine(track, '', {allowHtml:true, items, speedClass:'schedule-speed'});
}
function renderNoticeBoard(){
  const track=document.getElementById('headerNoticeBoardTrack');
  if(!track) return;
  const items=getNoticeBoardItems();
  if(!items.length){
    track.innerHTML='';
    track.classList.remove('is-animated');
    return;
  }
  track.classList.add('is-animated');
  renderHeaderProgrammingTickerLine(track, '', {allowHtml:true, items, speedClass:'notice-speed'});
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
  return `<tbody><tr><td class="simple-info-cell"><section id="newsProgrammingPanel" class="simple-info-panel news-programming-panel" aria-label="방송 편성표"><section class="news-programming-shell"><div class="programming-date-nav" id="programmingDateNav"><button type="button" id="programmingPrevDayBtn" class="date-nav-arrow" aria-label="전날로 이동" onclick="shiftNewsProgrammingViewDate(-1)">‹</button><div class="programming-date-nav-center"><div id="programmingDateLabel" class="programming-date-label">${escapeHtml(dateLabel)}</div><div id="programmingTimeLabel" class="programming-time-label">${escapeHtml(timeLabel)}</div></div><button type="button" id="programmingNextDayBtn" class="date-nav-arrow" aria-label="다음날로 이동" onclick="shiftNewsProgrammingViewDate(1)">›</button></div>${renderNewsProgrammingSpecialComposer()}${filteredItems}</section></section></td></tr></tbody>`;
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
const personalTimelineDetailFieldOptions = {
  시간:Array.from({length:16},(_,index)=>{
    const hour=String(index+9).padStart(2,'0');
    return `${hour}:00`;
  }),
  장소:['에스타디오 과달라하라','에스타디오 몬테레이'],
  취재기자:['전영희','온누리','홍지용','오선민','이예원','이은진'],
  TVU:['1번','2번','3번','4번','5번','6번'],
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
const HEADER_REPORT_BOARD_RECENT_STORAGE_KEY = 'worldcup-guide-header-report-board-recent-v1';
const HEADER_REPORT_BOARD_RECENT_WINDOW_NAME_KEY = '__worldcupGuideHeaderReportBoardRecent__';
const SHARED_STATE_SYNC_SUPABASE_URL = 'https://dwujummgbntrtvmldqmz.supabase.co';
const SHARED_STATE_SYNC_SUPABASE_ANON_KEY = 'sb_publishable_LlbUjDMb1BFXZtuBuNqVcg_DM0MTX8l';
const SHARED_STATE_SYNC_TABLE = 'shared_state';
const SHARED_STATE_SYNC_REGISTRY = {
  [NEWS_EDITOR_STORAGE_KEY]: {windowNameKey: NEWS_EDITOR_WINDOW_NAME_KEY},
  [NEWS_PROGRAMMING_STORAGE_KEY]: {windowNameKey: NEWS_PROGRAMMING_WINDOW_NAME_KEY},
  [SQUAD_INJURY_STORAGE_KEY]: {windowNameKey: SQUAD_INJURY_WINDOW_NAME_KEY},
  [MEXICO_STADIUM_EDITOR_STORAGE_KEY]: {windowNameKey: MEXICO_STADIUM_EDITOR_WINDOW_NAME_KEY},
  [EQUIPMENT_EDITOR_STORAGE_KEY]: {windowNameKey: EQUIPMENT_EDITOR_WINDOW_NAME_KEY},
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
const sharedStatePendingWrites = new Map();
const HEADER_REPORT_BOARD_RECENT_DURATION_MS = 5 * 60 * 1000;
const TIMELINE_KIMJINGWANG_GUIDELINE_CLEANUP_KEY = '__worldcupGuideCleanupKimJingwangGuidelineV1__';
const personalTimelineDetailFields = ['시간','장소','취재기자','TVU','업무내용'];
const personalTimelineTaskReportLabels = {
  경기취재:'경기 취재',
  외곽취재:'외곽 취재',
  라이브연결:'라이브 연결'
};
const personalTimelineTvuLabelMap = {
  '1번':'TVU 1번 TRS 0001',
  '2번':'TVU 2번 TRS 0002',
  '3번':'TVU 3번 TRS 0003',
  '4번':'TVU 4번 TRS 0004',
  '5번':'TVU 5번 TRS 0005',
  '6번':'TVU 6번 TRS 0006'
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
const NEWS_YEAR_META = {
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
  currentNewsProgrammingFilters={
    date:getTodayTimelineKey(),
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
  clearObjectEntries(equipmentEditorEntries);
  renderCache.equipmentSharedTable='';
  renderCache.equipmentPersonalTables=Object.create(null);
  equipmentSummaryEditMode=false;
  personalEquipmentEditModes=Object.create(null);
  equipmentEditDraftRows=null;
  equipmentState=[];
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
  hasLoadedHeaderReportBoardRecentMarks=false;
  clearObjectEntries(personalTimelineSharedEntries);
  clearObjectEntries(personalTimelineDetailSelections);
  clearObjectEntries(headerReportBoardRecentMarks);
}
function resetSharedStateSyncCaches(changedKeys=[]){
  const changed=new Set(changedKeys);
  if(changed.has(NEWS_EDITOR_STORAGE_KEY)) resetNewsEditorSyncState();
  if(changed.has(NEWS_PROGRAMMING_STORAGE_KEY)) resetNewsProgrammingSyncState();
  if(changed.has(SQUAD_INJURY_STORAGE_KEY)) resetSquadSyncState();
  if(changed.has(MEXICO_STADIUM_EDITOR_STORAGE_KEY)) resetMexicoStadiumSyncState();
  if(changed.has(EQUIPMENT_EDITOR_STORAGE_KEY)) resetEquipmentSyncState();
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
  if((changed.has(EQUIPMENT_EDITOR_STORAGE_KEY)||timelineChanged)&&isSharedStateMenuActive('equipmentMenu')){
    if(isSharedStatePanelVisible('detailCol')){
      if(currentEquipmentMode==='personal'&&currentEquipmentUser){
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
      renderTimelineSchedule(currentTimelineView);
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
  if(sharedStateSyncDisabled||typeof window==='undefined'||!window.supabase?.createClient) return null;
  if(sharedStateSyncClient) return sharedStateSyncClient;
  try{
    sharedStateSyncClient=window.supabase.createClient(SHARED_STATE_SYNC_SUPABASE_URL, SHARED_STATE_SYNC_SUPABASE_ANON_KEY);
  }catch(error){
    disableSharedStateSync(error);
    return null;
  }
  return sharedStateSyncClient;
}
async function flushPendingSharedStateWrites(){
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
      window.setTimeout(flushPendingSharedStateWrites, 120);
    }
  }
}
function scheduleSharedStateSyncWrite(storageKey, raw=''){
  if(sharedStateSyncDisabled||!SHARED_STATE_SYNC_REGISTRY[storageKey]) return;
  sharedStatePendingWrites.set(storageKey, String(raw??''));
  if(sharedStateSyncReady){
    flushPendingSharedStateWrites();
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
function renderPersonalTimelineSummaryLine(item){
  const desktopText=escapeHtml(item.text);
  const mobileLines=buildPersonalTimelineMobileReportLines(item);
  const mobileText=mobileLines.map(line=>`<span class="personal-timeline-summary-text-mobile-line">${escapeHtml(line)}</span>`).join('');
  return `<div class="personal-timeline-summary-line"><span class="personal-timeline-summary-text personal-timeline-summary-text-desktop">${desktopText}</span><span class="personal-timeline-summary-text personal-timeline-summary-text-mobile">${mobileText}</span><button type="button" class="personal-timeline-summary-delete" data-date-key="${item.dateKey}" data-person="${escapeHtml(item.name)}" data-entry-index="${item.entryIndex}">삭제</button></div>`;
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
        const sanitizedEntries=entries.map(entry=>{
          if(!entry||typeof entry!=='object') return null;
          const sanitizedFields=Object.create(null);
          personalTimelineDetailFields.forEach(field=>{
            if(typeof entry[field]!=='string') return;
            const text=entry[field].trim();
            if(text) sanitizedFields[field]=text;
          });
          return Object.keys(sanitizedFields).length ? sanitizedFields : null;
        }).filter(Boolean);
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
  if(field==='TVU') return personalTimelineTvuLabelMap[option]||option;
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
    }).filter(item=>item.isUpcoming);
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
      <span class="equipment-user-tvu" data-tvu="2번">TVU 2번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="3번">TVU 3번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="4번">TVU 4번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="5번">TVU 5번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
      <span class="equipment-user-tvu" data-tvu="6번">TVU 6번<span class="equipment-user-bulb" aria-hidden="true"></span></span>
    </span>
  </div>`;
}
function updateEquipmentSharedTvuIndicators(){
  if(typeof document==='undefined') return;
  const reports=getAllPersonalTimelineGeneratedReports();
  const activeTvus=new Set(
    reports
      .map(item=>String(item.detail?.TVU||'').trim())
      .filter(Boolean)
  );
  const activeTvuByName=new Map(
    reports.map(item=>[item.name, String(item.detail?.TVU||'').trim()])
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
  const text=String(value||'').trim();
  if(text){
    nextValues[field]=text;
  }else{
    delete nextValues[field];
  }
  savePersonalTimelineDetailSelectionBatch(dateKey, name, nextValues);
}
function renderPersonalTimelineSummaryBoard(dateKey){
  const items=getPersonalTimelineGeneratedReportsForDate(dateKey);
  const lines=items.map(renderPersonalTimelineSummaryLine).join('');
  return `<div class="personal-timeline-summary-board${items.length?'':' is-empty'}" data-summary-board-date="${dateKey}">${lines}</div>`;
}
function updatePersonalTimelineSummaryBoard(item, dateKey){
  if(!item||!dateKey) return;
  const board=item.querySelector('.personal-timeline-summary-board');
  if(!board) return;
  const items=getPersonalTimelineGeneratedReportsForDate(dateKey);
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
  const hasGeneratedReport=getPersonalTimelineGeneratedReportsForDate(dateKey).length>0;
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
    const text=String(detailValues?.[field]||'').trim();
    if(text) normalized[field]=text;
  });
  if(Object.keys(normalized).length){
    normalized._savedAt=Date.now();
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
  const saveResult=savePersonalTimelineDetailSelectionBatch(dateKey, personName, collectPersonalTimelineRowValues(row));
  if(saveResult?.didAppendNew&&saveResult.entryIndex>=0){
    markHeaderReportBoardRecentItem(buildPersonalTimelineGeneratedReportId(dateKey, personName, saveResult.entryIndex));
    updateHeaderReportBoard();
  }
  setPersonalTimelineRowDirty(row, false);
  const item=row.closest('.personal-timeline-item');
  updatePersonalTimelineSummaryBoard(item, dateKey);
  if(item){
    const hasTimelineAssignment=timelineViews.personal.rows.some(timelineRow=>Boolean(getTimelineLabel(timelineRow.label, dateKey)));
    const hasGeneratedReport=getPersonalTimelineGeneratedReportsForDate(dateKey).length>0;
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
function renderPersonalTimelineTopbar(){
  return `<div class="personal-timeline-topbar"><div class="personal-timeline-topbar-main"><span class="personal-timeline-month-sticky"></span><div class="personal-timeline-quick-actions"><button type="button" class="personal-timeline-quick-btn" data-timeline-action="top">맨 위로</button><button type="button" class="personal-timeline-quick-btn" data-timeline-action="today">오늘로</button></div></div></div>`;
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
  const placeholderSelected=!selectedValue ? ' selected' : '';
  const optionHtml=options.map(option=>`<option value="${escapeHtml(option)}"${selectedValue===option?' selected':''}>${escapeHtml(getPersonalTimelineOptionLabel(field, option))}</option>`).join('');
  return `<option value=""${placeholderSelected}>${field}</option>${optionHtml}`;
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
  return `<div class="personal-timeline-person-list" data-active-person="${escapeHtml(activeName)}">${tabsHtml}${personalTimelineMemberNames.map(name=>renderPersonalTimelinePersonRow(name, dateKey)).join('')}${renderPersonalTimelineSummaryBoard(dateKey)}</div>`;
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
  return `${month}월 ${day}일 (${weekNames[date.getDay()]})`;
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
  const updateStickyMonth=()=>updatePersonalTimelineDisplayedMonth(detailCol, list);
  const onScroll=()=>window.requestAnimationFrame(updateStickyMonth);
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
  const {behavior='smooth'}=options;
  const detailCol=target.closest('#detailCol')||document.getElementById('detailCol');
  const list=target.closest('.personal-timeline-list')
    || detailCol?.querySelector('.personal-timeline-list')
    || document.querySelector('.personal-timeline-list');
  const container=getPersonalTimelineScrollContainer(list);
  if(container===window){
    const top=Math.max(0, window.scrollY + target.getBoundingClientRect().top - getPersonalTimelineWindowOffset());
    window.scrollTo({top, behavior});
    return;
  }
  const topbar=detailCol?.querySelector('.personal-timeline-topbar');
  const topbarHeight=topbar ? topbar.getBoundingClientRect().height : 0;
  const top=container.scrollTop + (target.getBoundingClientRect().top - container.getBoundingClientRect().top) - topbarHeight - 12;
  container.scrollTo({top:Math.max(0, top), behavior});
}
function scrollPersonalTimelineToTop(options={}){
  const detailCol=document.getElementById('detailCol');
  const list=detailCol?.querySelector('.personal-timeline-list');
  if(!list) return;
  const items=getPersonalTimelineItems(list);
  if(!items.length) return;
  const activeMonth=getActivePersonalTimelineMonth(detailCol, items);
  const target=findPersonalTimelineMonthStartTarget(items, activeMonth);
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
  detailTable.insertAdjacentHTML('afterend',`${renderPersonalTimelineTopbar()}<div class="personal-timeline-mobile-nav"><button type="button" class="personal-timeline-mobile-nav-arrow personal-timeline-mobile-nav-prev" aria-label="이전 날짜">‹</button><div class="personal-timeline-mobile-nav-center"><span class="personal-timeline-mobile-nav-label"></span><button type="button" class="personal-timeline-mobile-nav-calendar" aria-label="날짜 선택"><span class="personal-timeline-mobile-nav-calendar-icon" aria-hidden="true"></span><span class="sr-only">날짜 선택</span></button><input type="date" class="personal-timeline-mobile-nav-picker" aria-label="날짜 선택"></div><button type="button" class="personal-timeline-mobile-nav-arrow personal-timeline-mobile-nav-next" aria-label="다음 날짜">›</button></div><div class="personal-timeline-list">${renderPersonalTimelineMonthGroups(dates, view.rows)}</div>`);
  const list=detailCol.querySelector('.personal-timeline-list');
  if(list){
    let personalTimelineScrollTimer=null;
    list.onmouseover=event=>{
      const trigger=event.target.closest('.personal-timeline-rail');
      if(!trigger||!list.contains(trigger)) return;
      const item=trigger.closest('.personal-timeline-item');
      if(item) updatePersonalTimelineHoverWave(list, item);
    };
    list.onmouseout=event=>{
      const trigger=event.target.closest('.personal-timeline-rail');
      if(!trigger||!list.contains(trigger)) return;
      const related=event.relatedTarget;
      if(related&&trigger.contains(related)) return;
      const nextTrigger=related&&typeof related.closest==='function'?related.closest('.personal-timeline-rail'):null;
      if(nextTrigger&&list.contains(nextTrigger)) return;
      updatePersonalTimelineHoverWave(list, null);
    };
    list.onmouseleave=()=>{
      updatePersonalTimelineHoverWave(list, null);
    };
    list.onchange=event=>{
      const select=event.target.closest('.personal-timeline-detail-select');
      if(!select||!list.contains(select)) return;
      setPersonalTimelineRowDirty(select.closest('.personal-timeline-person-row'), true);
      if(select.dataset.field==='장소'){
        updateHeaderTimes();
      }
    };
    list.onclick=event=>{
      event.stopPropagation();
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
          updatePersonalTimelineSummaryBoard(item, dateKey);
          syncPersonalTimelinePersonRowFromSavedState(item, dateKey, personName);
          updatePersonalTimelineItemEntryState(item, dateKey);
          if(item) item.classList.add('is-open');
          updateHeaderTimes();
        }
        return;
      }
      const trigger=event.target.closest('.personal-timeline-rail');
      const item=event.target.closest('.personal-timeline-item');
      if(!trigger||!item||!list.contains(item)) return;
      const wasOpen=item.classList.contains('is-open');
      if(!wasOpen) setPersonalTimelineOpenItem(list, item);
    };
    list.querySelectorAll('.personal-timeline-person-list').forEach(personList=>{
      const activeName=personList.dataset.activePerson||'';
      if(activeName){
        activatePersonalTimelinePersonTab(personList, activeName);
      }
    });
    const mobilePrevButton=detailCol.querySelector('.personal-timeline-mobile-nav-prev');
    const mobileNextButton=detailCol.querySelector('.personal-timeline-mobile-nav-next');
    const mobileCalendarButton=detailCol.querySelector('.personal-timeline-mobile-nav-calendar');
    const mobilePickerInput=detailCol.querySelector('.personal-timeline-mobile-nav-picker');
    if(mobilePrevButton){
      mobilePrevButton.onclick=event=>{
        event.stopPropagation();
        const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
        const currentIndex=Math.max(0, items.findIndex(item=>item.classList.contains('is-open')));
        const nextItem=items[Math.max(0, currentIndex-1)];
        if(nextItem) setPersonalTimelineOpenItem(list, nextItem);
      };
    }
    if(mobileNextButton){
      mobileNextButton.onclick=event=>{
        event.stopPropagation();
        const items=Array.from(list.querySelectorAll('.personal-timeline-item'));
        const currentIndex=Math.max(0, items.findIndex(item=>item.classList.contains('is-open')));
        const nextItem=items[Math.min(items.length-1, currentIndex+1)];
        if(nextItem) setPersonalTimelineOpenItem(list, nextItem);
      };
    }
    if(mobileCalendarButton&&mobilePickerInput){
      mobileCalendarButton.onclick=event=>{
        event.stopPropagation();
        if(typeof mobilePickerInput.showPicker==='function'){
          mobilePickerInput.showPicker();
        }else{
          mobilePickerInput.click();
        }
      };
      mobilePickerInput.onchange=event=>{
        event.stopPropagation();
        const nextDateKey=String(mobilePickerInput.value||'').trim();
        if(nextDateKey){
          scrollPersonalTimelineToDate(nextDateKey, {behavior:'smooth'});
        }
      };
    }
    detailCol.querySelectorAll('.personal-timeline-quick-btn').forEach(button=>{
      button.onclick=event=>{
        event.stopPropagation();
        if(button.dataset.timelineAction==='top'){
          scrollPersonalTimelineToTop({behavior:'smooth'});
          return;
        }
        scrollPersonalTimelineToDate(getTodayTimelineKey(), {behavior:'smooth'});
      };
    });
    setupPersonalTimelineStickyMonth(detailCol);
    updatePersonalTimelineMobileNavigator(detailCol, list);
  }
  detailCol.onclick=event=>{
    if(event.target.closest('.personal-timeline-list, .personal-timeline-mobile-nav')) return;
    if(isMobileViewport()) return;
    detailCol.querySelectorAll('.personal-timeline-item.is-open').forEach(node=>node.classList.remove('is-open'));
    updatePersonalTimelineMobileNavigator(detailCol, list);
    if(list) updatePersonalTimelineHoverWave(list, null);
  };
  document.getElementById('detailCol').classList.remove('hidden');
  updateMobileHeaderReportBoardVisibility();
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
  const modalIds=['timelineModal','newsEditorModal','squadInjuryModal','mexicoStadiumEditorModal','equipmentEditorModal'];
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
    {id:'equipmentEditorModal', close:closeEquipmentEditorModal}
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
function clearDetailExtras(){
  const detailCol=document.getElementById('detailCol');
  const detailTable=document.getElementById('detailTable');
  const detailTitleActions=document.getElementById('detailTitleActions');
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
  hideTimelineTooltip();
  document.body.classList.remove('timeline-modal-open');
  document.body.classList.remove('news-editor-modal-open');
  document.onmouseup=null;
  if(detailTitleActions) detailTitleActions.innerHTML='';
  detailCol.classList.remove('timeline-mode');
  detailCol.classList.remove('mexico-stadium-mode');
  detailTable.parentElement.classList.remove('timeline-card');
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

function renderMobileNewsMenu(){
  if(!isMobileViewport()) return;
  const panel=document.getElementById('newsCol');
  if(!panel) return;
  panel.innerHTML=Object.entries(NEWS_YEAR_META).map(([year, meta])=>`<div class="news-mobile-year-block"><div class="item news-year-item ${currentNewsYear===year?'active':''}" aria-label="${escapeHtml(meta.aria)}"><span class="news-year-frame"><img class="news-year-logo" src="${meta.logo}" alt="${escapeHtml(meta.aria)} 로고"></span></div><div class="news-mobile-broadcasters">${NEWS_BROADCASTERS.map(broadcaster=>`<div class="item broadcaster-item broadcaster-item-${broadcaster.toLowerCase()} ${currentNewsYear===year&&currentNewsBroadcaster===broadcaster?'active':''}" onclick="openNewsDetail('${year}','${broadcaster}', this)" aria-label="${escapeHtml(broadcaster)}"><span class="broadcaster-frame">${renderNewsBroadcasterCiMarkup(broadcaster)}</span></div>`).join('')}</div></div>`).join('');
}
function renderMapPanel(){
  clearDetailExtras();
  document.getElementById('detailTitle').textContent='MAP';
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table simple-info-table map-panel-table';
  renderCache.mapPanel=renderMapPanelHtml();
  document.getElementById('detailTable').innerHTML=renderCache.mapPanel;
  document.getElementById('detailCol').classList.remove('hidden');
}
function renderNewsProgrammingPanel(){
  clearDetailExtras();
  document.getElementById('detailTitle').textContent='방송 편성표';
  document.getElementById('detailSubtitle').textContent='';
  const detailTitleActions=document.getElementById('detailTitleActions');
  if(detailTitleActions){
    detailTitleActions.innerHTML=`<button type="button" id="specialReportToggleBtn" class="section-title-action-btn news-programming-special-toggle${isNewsProgrammingSpecialComposerOpen?' is-active':''}" aria-expanded="${isNewsProgrammingSpecialComposerOpen?'true':'false'}" onclick="toggleNewsProgrammingSpecialComposer()">${isNewsProgrammingSpecialComposerOpen?'특보 닫기':'특보'}</button>`;
  }
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
  }
}
function setMapActionMode(mode='write'){
  currentMapActionMode=mode==='edit'?'edit':'write';
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function clearMapActionMode(){
  currentMapActionMode='';
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function openMapSectionComposer(sectionKey){
  const normalized=sectionKey==='lodging'?'lodging':'region';
  currentMapSubTab=normalized;
  mapSectionComposerState[normalized]=true;
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function clearMapSectionComposer(sectionKey){
  const normalized=sectionKey==='lodging'?'lodging':'region';
  mapSectionComposerState[normalized]=false;
  if(document.getElementById('mapMenu')?.classList.contains('active')){
    renderMapPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function rerenderNewsProgrammingPanelIfActive(){
  if(document.getElementById('newsProgrammingMenu')?.classList.contains('active')){
    renderNewsProgrammingPanel();
    updateMobileHeaderReportBoardVisibility();
  }
}
function toggleMain(){const stack=document.getElementById('newsTabStack');const panel=document.getElementById('newsCol');const broadcasterPanel=document.getElementById('newsBroadcasterCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){stack?.classList.remove('hidden');panel.classList.remove('hidden');document.getElementById('newsMenu').classList.add('active');if(isMobileViewport()){renderMobileNewsMenu();broadcasterPanel.classList.add('hidden');}}updateMobileHeaderReportBoardVisibility();}
function toggleBracket(){const stack=document.getElementById('bracketTabStack');const panel=document.getElementById('bracketStageCol');const willOpen=panel.classList.contains('hidden');hideAllPanels();clearAllActive();if(willOpen){stack?.classList.remove('hidden');panel.classList.remove('hidden');document.getElementById('bracketMenu').classList.add('active');}updateMobileHeaderReportBoardVisibility();}
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
}
function showGroupASquad(key, el){
  document.querySelectorAll('#groupASquadCol .item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  currentSquadKey=key;
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
  updateMobileHeaderReportBoardVisibility();
}
function togglePersonalTimeline(){
  const detailCol=document.getElementById('detailCol');
  const willOpen=detailCol.classList.contains('hidden')||!document.getElementById('personalTimelineMenu').classList.contains('active');
  hideAllPanels();
  clearAllActive();
  if(willOpen){
    document.getElementById('personalTimelineMenu').classList.add('active');
    renderTimelineSchedule('personal');
    requestAnimationFrame(()=>scrollPersonalTimelineToDate(getTodayTimelineKey()));
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
}

function showNewsYear(year, el){currentNewsYear=year;currentNewsBroadcaster='';document.querySelectorAll('#newsCol .item').forEach(n=>n.classList.remove('active'));document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');document.getElementById('newsTabStack')?.classList.remove('hidden');document.getElementById('newsBroadcasterCol').classList.remove('hidden');document.getElementById('detailCol').classList.add('hidden');updateMobileHeaderReportBoardVisibility();}
function activateBroadcaster(el, broadcaster){currentNewsBroadcaster=broadcaster;document.querySelectorAll('#newsBroadcasterCol .item').forEach(n=>n.classList.remove('active'));el.classList.add('active');renderNewsTable(currentNewsYear, broadcaster);updateMobileHeaderReportBoardVisibility();}
function openNewsDetail(year, broadcaster){currentNewsYear=year;currentNewsBroadcaster=broadcaster;if(isMobileViewport()) renderMobileNewsMenu();renderNewsTable(year, broadcaster);updateMobileHeaderReportBoardVisibility();}
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
  document.getElementById('equipmentCarnetTab')?.classList.add('active');
  document.getElementById('detailTitle').innerHTML=renderEquipmentCarnetTitle();
  document.getElementById('detailSubtitle').textContent='';
  document.getElementById('detailTable').className='data-table carnet-list-table';
  renderCache.equipmentCarnetPanel=renderEquipmentCarnetPanelHtml();
  document.getElementById('detailTable').innerHTML=renderCache.equipmentCarnetPanel;
  document.getElementById('detailCol').classList.remove('hidden');
}
function openEquipmentCarnetComposer(){
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
}
function showEquipmentCarnet(el){
  currentEquipmentMode='carnet';
  currentEquipmentUser='';
  clearDetailExtras();
  ensureEquipmentEditorEntries();
  renderEquipmentCarnetDetail();
  document.querySelectorAll('#equipmentUserCol .item').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  updateMobileHeaderReportBoardVisibility();
}

function showEquipmentPersonal(user, el){
  currentEquipmentMode='personal';
  currentEquipmentUser=user;
  isEquipmentCarnetComposerOpen=false;
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
  updateMobileHeaderReportBoardVisibility();
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
  document.addEventListener('DOMContentLoaded', initializeNewsProgrammingPersistence);
  window.addEventListener('load', initSharedStateSync);
  window.addEventListener('focus', fetchSharedStateSnapshot);
  window.addEventListener('resize', updateMobileHeaderReportBoardVisibility);
  window.addEventListener('resize', ensureMobileHistoryGuard);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState==='visible'){
      fetchSharedStateSnapshot();
    }
  });
}
updateMobileHeaderReportBoardVisibility();
