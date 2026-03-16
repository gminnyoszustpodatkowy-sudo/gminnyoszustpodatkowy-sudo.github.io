const timezones = new Map([
    ["America/Anchorage", "Alaska Time Zone (AKST/AKDT)"],
    ["America/Puerto_Rico", "Atlantic Standart Time (AST)"],
    ["America/Halifax", "Atlantic Time Zone (AST/ADT)"],
    ["Australia/North", "Australian Central Standart Time (ACST)"],
    ["Australia/South", "Australian Central Time Zone (ACST/ACDT)"],
    ["Australia/Brisbane", "Australian Eastern Standart Time (AEST)"],
    ["Australia/Canberra", "Australian Eastern Time Zone (AEST/AEDT)"],
    ["Australia/West", "Australian Western Standart Time (AWST)"],
    ["America/Chicago", "Central Standart Time (CST)"],
    ["Africa/Khartoum", "Central Africa Time (CAT)"],
    ["Africa/Tunis", "Central European Summer Time (CEST)"],
    ["CET", "Central European Time (CET/CEST)"],
    ["Asia/Shanghai", "China Standart Time (CST)"],
    ["Pacific/Guam", "Chammoro Time Zone (ChST)"],
    ["America/Costa_Rica", "Central Standart Time (CST)"],
    ["Asia/Makassar", "Central Indonesian Time (WITA)"],
    ["America/Chicago", "Central Time Zone (CST/CDT)"],
    ["Africa/Dar_es_Salaam", "East Africa Time (EAT)"],
    ["Europe/Kaliningrad", "Eastern European Time (EET)"],
    ["Europe/Tallinn", "Eastern European Standart Time (EET/EEST)"],
    ["America/Jamaica", "Eastern Standart Time (EST)"],
    ["America/Detroit", "Eastern Time Zone (EST/EDT)"],
    ["Asia/Jayapura", "Eastern Indonesian Time (WIT)"],
    ["Etc/GMT", "Greenwich Mean Time (GMT)"],
    ["GB", "Greenwich Mean T./British Summer T. (GMT/BST)"],
    ["Eire", "Greenwich Mean T./Irish Standart T. (GMT/IST)"],
    ["Asia/Hong_Kong", "Hong Kong Time (HKT)"],
    ["Pacific/Honolulu", "Hawaii-Aleutian Standart Time (HST)"],
    ["America/Adak", "Hawaii-Aleutian Time Zone (HST/HDT)"],
    ["Asia/Kolkata", "Indian Standart Time (IST)"],
    ["Israel", "Israel Time Zone (IST/IDT)"],
    ["Asia/Tokyo", "Japan Standart Time (JST)"],
    ["Asia/Seoul", "Korean Standart Time (KST)"],
    ["America/Denver", "Mountain Time Zone (MST/MDT)"],
    ["America/Phoenix", "Mountain Standart Time (MST)"],
    ["Europe/Moscow", "Moscow Time (MSK)"],
    ["Canada/Newfoundland", "Newfoundland Time Zone (NST/NDT)"],
    ["Pacific/Auckland", "New Zealand Standart Time (NZST/NZDT)"],
    ["Asia/Karachi", "Pakistan Standart Time (PKT)"],
    ["America/Los_Angeles", "Pacific Time Zone (PST/PDT)"],
    ["Asia/Manila", "Philiphine Standart Time (PST)"],
    ["Pacific/Pago_Pago", "Samoa Standart Time (SST)"],
    ["Africa/Johannesburg", "South Africa Standart Time (SAST)"],
    ["Etc/UTC", "Universal Time Zone (UTC)"],
    ["Africa/Lagos", "West Africa Time (WAT)"],
    ["WET", "Western European Time (WET/WEST)"],
    ["Asia/Jakarta", "Western Indonesian Time (WIB)"]
]);
const zones = new Map([
    ["Etc/GMT+12", "GMT -12"],
    ["Etc/GMT+11", "GMT -11"],
    ["Etc/GMT+10", "GMT -10"],
    ["Etc/GMT+9", "GMT -9"],
    ["Etc/GMT+8", "GMT -8"],
    ["Etc/GMT+7", "GMT -7"],
    ["Etc/GMT+6", "GMT -6"],
    ["Etc/GMT+5", "GMT -5"],
    ["Etc/GMT+4", "GMT -4"],
    ["Etc/GMT+3", "GMT -3"],
    ["Etc/GMT+2", "GMT -2"],
    ["Etc/GMT+1", "GMT -1"],
    ["Etc/GMT-0", "GMT +0"],
    ["Etc/GMT-1", "GMT +1"],
    ["Etc/GMT-2", "GMT +2"],
    ["Etc/GMT-3", "GMT +3"],
    ["Etc/GMT-4", "GMT +4"],
    ["Etc/GMT-5", "GMT +5"],
    ["Etc/GMT-6", "GMT +6"],
    ["Etc/GMT-7", "GMT +7"],
    ["Etc/GMT-8", "GMT +8"],
    ["Etc/GMT-9", "GMT +9"],
    ["Etc/GMT-10", "GMT +10"],
    ["Etc/GMT-11", "GMT +11"],
    ["Etc/GMT-12", "GMT +12"],
    ["Etc/GMT-13", "GMT +13"],
    ["Etc/GMT-14", "GMT +14"],
]);
const countrys = new Map([
    ["Asia/Kabul", "Afganistan"],
    ["Europe/Tirane", "Albania"],
    ["Africa/Algiers", "Algieria"],
    ["Europe/Andorra", "Andorra"],
    ["Africa/Luanda", "Angola"],
    ["America/Anguilla", "Anguilla"],

    ["Antarctica/South_Pole", "Antarktyda"],
    ["Antarctica/South_Pole", "Biegun Południowy"],
    ["Antarctica/Casey", "Casey (Antarktyda)"],
    ["Antarctica/Davis", "Davis (Antarktyda)"],
    ["Antarctica/DumontDUrville", "Dumont-d'Urville (Antarktyda)"],
    ["Antarctica/McMurdo", "McMurdo (Antarktyda)"],
    ["Antarctica/Rothera", "Rothera (Antarktyda)"],
    ["Antarctica/Syowa", "Syowa (Antarktyda)"],
    ["Antarctica/Troll", "Troll (Antarktyda)"],
    ["Antarctica/Vostok", "Wostok (Antarktyda)"],
    ["Antarctica/Macquarie", "Wyspa Macquarie (Antarktyda)"],

    ["America/Antigua", "Antigua"],
    ["Asia/Riyadh", "Arabia Saudyjska"],
    ["Asia/Yerevan", "Armenia"],
    ["America/Buenos_Aires", "Argentyna"],
    ["America/Aruba", "Aruba"],

    ["Australia/Sydney", "Australia"],
    ["Australia/Adelaide", "Adelajda (Australia)"],
    ["Australia/Brisbane", "Brisbane (Australia)"],
    ["Australia/Broken_Hill", "Broken Hill (Australia)"],
    ["Australia/Darwin", "Darwin (Australia)"],
    ["Australia/Eucla", "Eucla (Australia)"],
    ["Australia/Hobart", "Hobart (Australia)"],
    ["Australia/Lindeman", "Lindeman (Australia)"],
    ["Australia/Melbourne", "Melbourne (Australia)"],
    ["Australia/Perth", "Perth (Australia)"],
    ["Australia/Sydney", "Sydney (Australia)"],
    ["Australia/Lord_Howe", "Wyspa Lord Howe (Australia)"],
    ["Pacific/Norfolk", "Wyspa Norfolk (Australia)"],

    ["Europe/Vienna", "Austria"],
    ["Asia/Baku", "Azerbejdżan"],
    ["America/Nassau", "Bahamy"],
    ["Asia/Bahrain", "Bahrain"],
    ["Asia/Dhaka", "Bangladesz"],
    ["America/Barbados", "Barbados"],
    ["Europe/Brussels", "Belgia"],
    ["America/Belize", "Belize"],
    ["Africa/Porto-Novo", "Benin"],
    ["Atlantic/Bermuda", "Bermudy"],
    ["Europe/Minsk", "Białoruś"],
    ["Asia/Yangon", "Birma"],
    ["America/La_Paz", "Boliwia"],
    ["Europe/Sarajevo", "Bośnia i Hercegowina"],
    ["Africa/Gaborone", "Botswana"],

    ["America/Brasilia", "Brazylia"],
    ["America/Brasilia", "Brazylia"],
    ["America/Araguaina", "Araguaína (Brazylia)"],
    ["America/Campo_Grande", "Campo Grande (Brazylia)"],
    ["America/Eirunepe", "Eirunepe (Brazylia)"],
    ["America/Rio_Branco", "Rio Branco (Brazylia)"],
    ["America/Sao_Paulo", "Sao Paulo (Brazylia)"],

    ["Asia/Brunei", "Brunei Darussalam"],
    ["Indian/Chagos", "Brytyjskie Terytorium Oceanu Indyjskiego"],
    ["America/Tortola", "Brytyjskie Wyspy Dziewicze"],
    ["Europe/Sofia", "Bułgaria"],
    ["Africa/Ouagadougou", "Burkina Faso"],
    ["Africa/Bujumbura", "Burundi"],
    ["Asia/Thimphu", "Butan"],

    ["America/Santiago", "Chile"],
    ["America/Punta_Arenas", "Punta Arenas (Chile)"],

    ["Asia/Shanghai", "Chiny"],
    ["Asia/Shanghai", "Chiny"],
    ["Asia/Hong_Kong", "Hong Kong (Chiny)"],
    ["Asia/Macau", "Makau (Chiny)"],
    ["Asia/Urumqi", "Urumczi (Chiny)"],

    ["America/Curacao", "Curaçao"],
    ["Asia/Nicosia", "Cypr"],
    ["Africa/Ndjamena", "Czad"],
    ["Europe/Podgorica", "Czarnogóra"],
    ["Europe/Prague", "Czechy"],
    ["Europe/Copenhagen", "Dania"],
    ["Pacific/Wake", "Dalekie Wyspy Mniejsze Stanów Zjednoczonych"],
    ["Africa/Lubumbashi", "Demokratyczna Republika Konga"],
    ["America/Dominica", "Dominika"],
    ["America/Santo_Domingo", "Dominikana"],
    ["Africa/Cairo", "Egipt"],
    ["America/Guayaquil", "Ekwador"],
    ["Europe/Tallinn", "Estonia"],
    ["Africa/Mbabane", "Eswatini"],
    ["Atlantic/Stanley", "Falklandy"],
    ["Pacific/Fiji", "Fidżi"],
    ["Asia/Manila", "Filipiny"],

    ["Europe/Helsinki", "Finlandia"],
    ["Europe/Mariehamn", "Wyspy Alandzkie (Finlandia)"],

    ["Europe/Paris", "Francja"],
    ["Africa/Libreville", "Gabon"],
    ["Africa/Banjul", "Gambia"],
    ["Atlantic/South_Georgia", "Georgia Południowa i Sandwich Południowy"],
    ["Africa/Accra", "Ghana"],
    ["Europe/Gibraltar", "Gibraltar"],
    ["Europe/Athens", "Grecja"],
    ["America/Grenada", "Grenada"],

    ["America/Nuuk", "Grenlandia"],
    ["America/Nuuk", "Grenlandia"],
    ["America/Danmarkshavn", "Danmarkshavn (Grenlandia)"],
    ["America/Thule", "Thule (Grenlandia)"],

    ["Asia/Tbilisi", "Gruzja"],
    ["Pacific/Guam", "Guam"],
    ["Europe/Guernsey", "Guernsey"],
    ["America/Guyana", "Gujana"],
    ["America/Cayenne", "Gujana Francuska"],
    ["America/Guadeloupe", "Gwadelupa"],
    ["America/Guatemala", "Gwatemala"],
    ["Africa/Conakry", "Gwinea"],
    ["Africa/Bissau", "Gwinea Bissau"],
    ["Africa/Malabo", "Gwinea Równikowa"],
    ["America/Port-au-Prince", "Haiti"],
    ["Pacific/Honolulu", "Hawaje"],
    ["Europe/Madrid", "Hiszpania"],
    ["Europe/Amsterdam", "Holandia"],
    ["America/Kralendijk", "Holandia Karaibska"],
    ["America/Tegucigalpa", "Honduras"],
    ["Asia/Kolkata", "Indie"],
    ["Asia/Baghdad", "Irak"],
    ["Asia/Tehran", "Iran"],
    ["Europe/Dublin", "Irlandia"],

    ["Asia/Jakarta", "Indonezja"],
    ["Asia/Jayapura", "Dżajapura (Indonezja)"],
    ["Asia/Makassar", "Makassar (Indonezja)"],
    ["Asia/Pontianak", "Pontianak (Indonezja)"],

    ["Atlantic/Reykjavik", "Islandia"],
    ["Asia/Jerusalem", "Izrael"],
    ["America/Jamaica", "Jamajka"],
    ["Asia/Tokyo", "Japonia"],
    ["Asia/Aden", "Jemen"],
    ["Europe/Jersey", "Jersey"],
    ["Asia/Amman", "Jordania"],
    ["Asia/Phnom_Penh", "Kambodża"],

    ["Asia/Qatar", "Katar"],

    ["America/Toronto", "Kanada"],
    ["America/Edmonton", "Edmonton - AB (CA)"],
    ["America/Iqaluit", "Iqaluit - NU (CA)"],
    ["America/Halifax", "Halifax - NS (CA)"],
    ["America/Regina", "Regina - SK (CA)"],
    ["America/St_Johns", "St. John's - NL (CA)"],
    ["America/Toronto", "Toronto"],
    ["America/Vancouver", "Vancouver - BC (CA)"],
    ["America/Whitehorse", "Whitehorse - YT (CA)"],
    ["America/Winnipeg", "Winnipeg - MB (CA)"],

    ["Asia/Almaty", "Kazachstan"],
    ["Asia/Bishkek", "Kirgistan"],

    ["Pacific/Tarawa", "Kiribati"],
    ["Pacific/Tarawa", "Tarawa"],
    ["Pacific/Enderbury", "Enderbury (Kiribati)"],
    ["Pacific/Kanton", "Kanton (Kiribati)"],
    ["Pacific/Kiritimati", "Kiritimati (Kiribati)"],

    ["America/Bogota", "Kolumbia"],
    ["Indian/Comoro", "Komory"],
    ["Asia/Seoul", "Korea Południowa"],
    ["Asia/Pyongyang", "Korea Północna"],

    ["Pacific/Pohnpei", "Mikronezja"],
    ["Pacific/Kosrae", "Kosrae (Mikronezja)"],
    ["Pacific/Chuuk", "Chuuk (Mikronezja)"],

    ["America/Costa_Rica", "Kostaryka"],
    ["America/Havana", "Kuba"],
    ["Asia/Kuwait", "Kuwejt"],
    ["Asia/Vientiane", "Laos"],
    ["Africa/Maseru", "Lesotho"],
    ["Asia/Beirut", "Liban"],
    ["Africa/Monrovia", "Liberia"],
    ["Africa/Tripoli", "Libia"],
    ["Europe/Vaduz", "Liechtenstein"],
    ["Europe/Vilnius", "Litwa"],
    ["Europe/Luxembourg", "Luksemburg"],
    ["Europe/Riga", "Łotwa"],
    ["Europe/Skopje", "Macedonia Północna"],
    ["Indian/Antananarivo", "Madagaskar"],
    ["Atlantic/Madeira", "Madera"],
    ["Indian/Mayotte", "Majotta"],
    ["Africa/Blantyre", "Malawi"],
    ["Indian/Maldives", "Malediwy"],
    ["Asia/Kuala_Lumpur", "Malezja"],
    ["Africa/Bamako", "Mali"],
    ["Europe/Malta", "Malta"],
    ["Pacific/Saipan", "Mariany Północne"],
    ["America/Martinique", "Martynika"],
    ["Africa/Nouakchott", "Mauretania"],
    ["Indian/Mauritius", "Mauritius"],

    ["America/Mexico_City", "Meksyk"],
    ["America/Mexico_City", "Meksyk"],
    ["America/Cancun", "Cancun - QR (MX)"],
    ["America/Chihuahua", "Chihuahua - CH (MX)"],
    ["America/Matamoros", "Matamoros - TM (MX)"],
    ["America/Mazatlan", "Mazatlan - SN (MX)"],
    ["America/Tijuana", "Tijuana - BCA (MX)"],

    ["Pacific/Midway", "Midway"],
    ["Europe/Chisinau", "Mołdawia"],
    ["Europe/Monaco", "Monako"],
    ["Asia/Ulaanbaatar", "Mongolia"],
    ["America/Montserrat", "Montserrat"],
    ["Africa/Maputo", "Mozambik"],
    ["Africa/Windhoek", "Namibia"],
    ["Pacific/Nauru", "Nauru"],
    ["Asia/Kathmandu", "Nepal"],
    ["Africa/Niamey", "Niger"],
    ["Africa/Lagos", "Nigeria"],
    ["America/Managua", "Nikaragua"],
    ["Pacific/Niue", "Niue"],
    ["America/Noronha", "Noronha"],
    ["Europe/Oslo", "Norwegia"],
    ["Pacific/Noumea", "Nowa Kaledonia"],
    ["Pacific/Auckland", "Nowa Zelandia"],
    ["Asia/Muscat", "Oman"],
    ["Asia/Karachi", "Pakistan"],
    ["Pacific/Palau", "Palau"],
    ["Asia/Gaza", "Palestyna"],
    ["America/Panama", "Panama"],
    ["America/Asuncion", "Paragwaj"],
    ["America/Lima", "Peru"],
    ["Pacific/Pitcairn", "Pitcairn"],

    ["Pacific/Papeete", "Polinezja Francuska"],
    ["Pacific/Marquesas", "Polinezja Francuska (Markizy)"],
    ["Pacific/Gambier", "Polinezja Francuska (WG)"],
    ["Pacific/Tahiti", "Polinezja Francuska (WTubuai)"],

    ["Europe/Warsaw", "Polska"],

    ["Pacific/Port_Moresby", "Papua-Nowa Gwinea"],
    ["Pacific/Bougainville", "Bougainville (Papua-Nowa Gwinea)"],

    ["America/Puerto_Rico", "Portoryko"],

    ["Europe/Lisbon", "Portugalia"],
    ["Atlantic/Azores", "Azory (Portugalia)"],

    ["Africa/Johannesburg", "Republika Południowej Afryki"],
    ["Atlantic/Cape_Verde", "Republika Zielonego Przylądka"],
    ["Indian/Reunion", "Reunion"],

    ["Europe/Moscow", "Rosja"],
    ["Asia/Anadyr", "Anadyr"],
    ["Europe/Astrakhan", "Astrachań (Rosja)"],
    ["Asia/Barnaul", "Barnauł (Rosja)"],
    ["Asia/Chita", "Czyta (Rosja)"],
    ["Asia/Irkutsk", "Irkuck (Rosja)"],
    ["Asia/Yakutsk", "Jakuck (Rosja)"],
    ["Asia/Yekaterinburg", "Jekaterynburg (Rosja)"],
    ["Asia/Kamchatka", "Kamczatka (Rosja)"],
    ["Europe/Kaliningrad", "Królewiec (Rosja)"],
    ["Asia/Krasnoyarsk", "Krasnojarsk (Rosja)"],
    ["Europe/Kirov", "Kirow (Rosja)"],
    ["Asia/Magadan", "Magadan (Rosja)"],
    ["Europe/Moscow", "Moskwa"],
    ["Asia/Novokuznetsk", "Nowokuznieck (Rosja)"],
    ["Asia/Novosibirsk", "Nowosybirsk (Rosja)"],
    ["Asia/Omsk", "Omsk (Rosja)"],
    ["Asia/Sakhalin", "Sachalin (Rosja)"],
    ["Europe/Samara", "Samara (Rosja)"],
    ["Europe/Saratov", "Saratów (Rosja)"],
    ["Asia/Srednekolymsk", "Sriedniekołymsk (Rosja)"],
    ["Asia/Tomsk", "Tomsk (Rosja)"],
    ["Europe/Ulyanovsk", "Uljanowsk (Rosja)"],
    ["Asia/Ust-Nera", "Ust'-Niera (Rosja)"],
    ["Asia/Vladivostok", "Władywostok (Rosja)"],
    ["Europe/Volgograd", "Wołgograd (Rosja)"],

    ["Europe/Bucharest", "Rumunia"],
    ["Africa/Kigali", "Rwanda"],
    ["America/St_Kitts", "Saint Kitts i Nevis"],
    ["America/St_Lucia", "Saint Lucia"],
    ["America/Marigot", "Saint Martin"],
    ["America/St_Vincent", "Saint Vincent i Grenadyny"],
    ["America/El_Salvador", "Salwador"],
    ["Pacific/Apia", "Samoa"],
    ["Pacific/Pago_Pago", "Samoa Amerykańskie"],
    ["Europe/San_Marino", "San Marino"],
    ["Africa/Dakar", "Senegal"],
    ["Europe/Belgrade", "Serbia"],
    ["Indian/Mahe", "Seszele"],
    ["Africa/Freetown", "Sierra Leone"],
    ["Asia/Singapore", "Singapur"],
    ["America/Lower_Princes", "Sint Maarten"],
    ["Europe/Bratislava", "Słowacja"],
    ["Europe/Ljubljana", "Słowenia"],
    ["Asia/Colombo", "Sri Lanka"],

    ["America/New_York", "Stany Zjednoczone"],
    ["America/Anchorage", "Anchorage"],
    ["America/Adak", "Zachodnie Aleuty"],
    ["America/Chicago", "Chicago"],
    ["America/Denver", "Denver"],
    ["America/Detroit", "Detroit"],
    ["America/Los_Angeles", "Los Angeles"],
    ["America/New_York", "Nowy Jork"],
    ["America/Phoenix", "Phoenix"],

    ["Africa/Khartoum", "Sudan"],
    ["Africa/Juba", "Sudan Południowy"],
    ["Arctic/Longyearbyen", "Svalbard"],
    ["Europe/Simferopol", "Krym"],
    ["Asia/Damascus", "Syria"],
    ["Europe/Zurich", "Szwajcaria"],
    ["Europe/Stockholm", "Szwecja"],
    ["Atlantic/St_Helena", "Święta Helena"],
    ["Asia/Dushanbe", "Tadżykistan"],
    ["Asia/Bangkok", "Tajlandia"],
    ["Asia/Taipei", "Tajwan"],
    ["Indian/Kerguelen", "Francuskie Terytoria Południowe i Arktyczne"],
    ["Asia/Dili", "Timor Wschodni"],
    ["Africa/Lome", "Togo"],
    ["Pacific/Fakaofo", "Tokelau"],
    ["Pacific/Tongatapu", "Tonga"],
    ["Asia/Istanbul", "Turcja"],
    ["Asia/Ashgabat", "Turkmenistan"],
    ["America/Grand_Turk", "Turks i Caicos"],
    ["Pacific/Funafuti", "Tuwalu"],
    ["Europe/Kyiv", "Ukraina"],
    ["America/Montevideo", "Urugwaj"],
    ["Asia/Tashkent", "Uzbekistan"],
    ["Pacific/Wallis", "Wallis i Futuna"],
    ["Pacific/Efate", "Wanuatu"],
    ["Europe/Vatican", "Watykan"],
    ["America/Caracas", "Wenezuela"],
    ["Europe/Budapest", "Węgry"],
    ["Europe/London", "Wielka Brytania"],
    ["Asia/Ho_Chi_Minh", "Wietnam"],
    ["Europe/Rome", "Włochy"],
    ["America/Miquelon", "Wspólnota Terytorialna Saint Pierre i Miquelon"],
    ["America/St_Barthelemy", "Wspólnota Saint-Barthélemy"],
    ["Africa/Abidjan", "Wybrzeże Kości Słoniowej"],
    ["Indian/Christmas", "Wyspa Bożego Narodzenia"],
    ["Europe/Isle_of_Man", "Wyspa Man"],
    ["Pacific/Easter", "Wyspa Wielkanocna"],
    ["Pacific/Chatham", "Wyspy Chatham"],
    ["Pacific/Rarotonga", "Wyspy Cooka"],
    ["America/St_Thomas", "Wyspy Dziewicze"],
    ["Pacific/Galapagos", "Wyspy Galapagos"],
    ["America/Cayman", "Wyspy Kajmana"],
    ["Atlantic/Canary", "Wyspy Kanaryjskie"],
    ["Indian/Cocos", "Wyspy Kokosowe"],
    ["Pacific/Kwajalein", "Wyspy Marshalla"],
    ["Atlantic/Faroe", "Wyspy Owcze"],
    ["Pacific/Guadalcanal", "Wyspy Salomona"],
    ["Africa/Sao_Tome", "Wyspy Świętego Tomasza i Książęca"],
    ["Africa/Lusaka", "Zambia"],
    ["Africa/Harare", "Zimbabwe"],
    ["Asia/Dubai", "Zjednoczone Emiraty Arabskie"]
]);

const select = document.querySelector("#timezone");
/*
let usGroup = new Map([
    ["America/Anchorage", "Anchorage"],
    ["America/Adak", "Zachodnie Aleuty"],
    ["America/Chicago", "Chicago"],
    ["America/Denver", "Denver"],
    ["America/Detroit", "Detroit"],
    ["America/Los_Angeles", "Los Angeles"],
    ["America/New_York", "Nowy Jork"],
    ["America/Phoenix", "Phoenix"]
]);
let caGroup = new Map([
    ["America/Edmonton", "Edmonton - AB (CA)"],
    ["America/Iqaluit", "Iqaluit - NU (CA)"],
    ["America/Halifax", "Halifax - NS (CA)"],
    ["America/Regina", "Regina - SK (CA)"],
    ["America/St_Johns", "St. John's - NL (CA)"],
    ["America/Toronto", "Toronto"],
    ["America/Vancouver", "Vancouver - BC (CA)"],
    ["America/Whitehorse", "Whitehorse - YT (CA)"],
    ["America/Winnipeg", "Winnipeg - MB (CA)"]
]);
let mxGroup = new Map([
    ["America/Mexico_City", "Meksyk"],
    ["America/Cancun", "Cancun - QR (MX)"],
    ["America/Chihuahua", "Chihuahua - CH (MX)"],
    ["America/Matamoros", "Matamoros - TM (MX)"],
    ["America/Mazatlan", "Mazatlan - SN (MX)"],
    ["America/Tijuana", "Tijuana - BCA (MX)"]
]);
let kiGroup = new Map([
    ["Pacific/Tarawa", "Tarawa"],
    ["Pacific/Enderbury", "Enderbury (Kiribati)"],
    ["Pacific/Kanton", "Kanton (Kiribati)"],
    ["Pacific/Kiritimati", "Kiritimati (Kiribati)"]
]);
let ruGroup = new Map([
    ["Asia/Anadyr", "Anadyr"],
    ["Europe/Astrakhan", "Astrachań (Rosja)"],
    ["Asia/Barnaul", "Barnauł (Rosja)"],
    ["Asia/Chita", "Czyta (Rosja)"],
    ["Asia/Irkutsk", "Irkuck (Rosja)"],
    ["Asia/Yakutsk", "Jakuck (Rosja)"],
    ["Asia/Yekaterinburg", "Jekaterynburg (Rosja)"],
    ["Asia/Kamchatka", "Kamczatka (Rosja)"],
    ["Europe/Kaliningrad", "Królewiec (Rosja)"],
    ["Asia/Krasnoyarsk", "Krasnojarsk (Rosja)"],
    ["Europe/Kirov", "Kirow (Rosja)"],
    ["Asia/Magadan", "Magadan (Rosja)"],
    ["Europe/Moscow", "Moskwa"],
    ["Asia/Novokuznetsk", "Nowokuznieck (Rosja)"],
    ["Asia/Novosibirsk", "Nowosybirsk (Rosja)"],
    ["Asia/Omsk", "Omsk (Rosja)"],
    ["Asia/Sakhalin", "Sachalin (Rosja)"],
    ["Europe/Samara", "Samara (Rosja)"],
    ["Europe/Saratov", "Saratów (Rosja)"],
    ["Asia/Srednekolymsk", "Sriedniekołymsk (Rosja)"],
    ["Asia/Tomsk", "Tomsk (Rosja)"],
    ["Europe/Ulyanovsk", "Uljanowsk (Rosja)"],
    ["Asia/Ust-Nera", "Ust'-Niera (Rosja)"],
    ["Asia/Vladivostok", "Władywostok (Rosja)"],
    ["Europe/Volgograd", "Wołgograd (Rosja)"]
]);
let anGroup = new Map([
    ["Antarctica/South_Pole", "Antarktyda"],
    ["Antarctica/Casey", "Casey (Antarktyda)"],
    ["Antarctica/Davis", "Davis (Antarktyda)"],
    ["Antarctica/DumontDUrville", "Dumont-d'Urville (Antarktyda)"],
    ["Antarctica/McMurdo", "McMurdo (Antarktyda)"],
    ["Antarctica/Rothera", "Rothera (Antarktyda)"],
    ["Antarctica/Syowa", "Syowa (Antarktyda)"],
    ["Antarctica/Troll", "Troll (Antarktyda)"],
    ["Antarctica/Vostok", "Wostok (Antarktyda)"],
    ["Antarctica/Macquarie", "Wyspa Macquarie (Antarktyda)"]
]);
let brGroup = new Map([
    ["America/Brasilia", "Brazylia"],
    ["America/Araguaina", "Araguaína (Brazylia)"],
    ["America/Campo_Grande", "Campo Grande (Brazylia)"],
    ["America/Eirunepe", "Eirunepe (Brazylia)"],
    ["America/Rio_Branco", "Rio Branco (Brazylia)"],
    ["America/Sao_Paulo", "Sao Paulo (Brazylia)"]
]);
let auGroup = new Map([
    ["Australia/Adelaide", "Adelajda (Australia)"],
    ["Australia/Brisbane", "Brisbane (Australia)"],
    ["Australia/Broken_Hill", "Broken Hill (Australia)"],
    ["Australia/Darwin", "Darwin (Australia)"],
    ["Australia/Eucla", "Eucla (Australia)"],
    ["Australia/Hobart", "Hobart (Australia)"],
    ["Australia/Lindeman", "Lindeman (Australia)"],
    ["Australia/Melbourne", "Melbourne (Australia)"],
    ["Australia/Perth", "Perth (Australia)"],
    ["Australia/Sydney", "Australia"],
    ["Australia/Lord_Howe", "Wyspa Lord Howe (Australia)"],
    ["Pacific/Norfolk", "Wyspa Norfolk (Australia)"]
]);
let chGroup = new Map([
    ["Asia/Shanghai", "Chiny"],
    ["Asia/Hong_Kong", "Hong Kong (Chiny)"],
    ["Asia/Macau", "Makau (Chiny)"],
    ["Asia/Urumqi", "Urumczi (Chiny)"]
]);
let grGroup = new Map([
    ["America/Nuuk", "Grenlandia"],
    ["America/Danmarkshavn", "Danmarkshavn (Grenlandia)"],
    ["America/Thule", "Thule (Grenlandia)"]
]);
let xGroup = null;

for (const [timezone, name] of countrys) {

    switch (name) {
        case "Stany Zjednoczone":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(usGroup);
            continue;
        case "Kanada":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(caGroup);
            continue;
        case "Meksyk":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(mxGroup);
            continue;
        case "Brazylia":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(brGroup);
            continue;
        case "Rosja":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(ruGroup);
            continue;
        case "Antarktyda":
            usGroup = document.createElement("optgroup");
            usGroup.label = name;
            select.appendChild(anGroup);
            continue;
    }

    const option = document.createElement("option");
    option.value = timezone;
    option.textContent = name;

    // if (usGroup && timezone.startsWith("America/")) {
        // usGroup.appendChild(option);
    // } else {
        // select.appendChild(option);
    // }
}*/

const optionc = document.createElement("option");
optionc.textContent = 'Kraje';
optionc.disabled = true;
select.appendChild(optionc);

countrys.forEach((text, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
});

const optiont = document.createElement("option");
optiont.textContent = 'Czasy';
optiont.disabled = true;
select.appendChild(optiont);

timezones.forEach((text, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;

    if (value === "Etc/UTC") option.selected = true;

    select.appendChild(option);
});
const optionz = document.createElement("option");
optionz.textContent = 'Strefy czasowe';
optionz.disabled = true;
select.appendChild(optionz);
zones.forEach((text, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
});