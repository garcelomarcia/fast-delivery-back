import { IUser } from "../interfaces/IUser";
import { User } from "../models";

const users: IUser[] = [
  {
    name: "Administrador",
    lastname: "Administrador",
    email: "admin@admin.com",
    address: "672 Haas Parkway",
    phone: "3648104729",
    password: "admin",
    status: "active",
    isAdmin: true
  },

  {
    name: "Tanitansy",
    lastname: "Crookshank",
    email: "user@user.com",
    address: "672 Haas Parkway",
    phone: "3648104729",
    password: "123456",
    status: "active"
  },
  {
    name: "Harald",
    lastname: "De la Barre",
    email: "hdelabarre1@ihg.com",
    address: "527 Granby Point",
    phone: "2046728611",
    password: "kP3/NCzM",
    status: "inactive"
  },
  {
    name: "Stacee",
    lastname: "Nowakowska",
    email: "snowakowska2@cdc.gov",
    address: "52903 Ryan Avenue",
    phone: "4715203236",
    password: "gS5=n6!hgn~bx#",
    status: "active"
  },
  {
    name: "Jordanna",
    lastname: "Farmloe",
    email: "jfarmloe3@booking.com",
    address: "6 Spenser Circle",
    phone: "7231360801",
    password: "pT7*O&\\rh",
    status: "active"
  },
  {
    name: "Charline",
    lastname: "Lavington",
    email: "clavington4@uol.com.br",
    address: "82 Farragut Park",
    phone: "6914341148",
    password: "fA1>4i%aQrC=b",
    status: "active"
  },
  {
    name: "Gray",
    lastname: "Ruston",
    email: "gruston5@house.gov",
    address: "2811 1st Terrace",
    phone: "5876180713",
    password: "fC6++<UqJul0Xy",
    status: "active"
  },
  {
    name: "Blinni",
    lastname: "Fronczak",
    email: "bfronczak6@about.com",
    address: "938 Thierer Alley",
    phone: "9806817861",
    password: "eT9!>%x9.1=Io3",
    status: "inactive"
  },
  {
    name: "Si",
    lastname: "Keller",
    email: "skeller7@army.mil",
    address: "718 5th Lane",
    phone: "9598600248",
    password: "dN9<6$.wz",
    status: "active"
  },
  {
    name: "Page",
    lastname: "Rickell",
    email: "prickell8@amazon.de",
    address: "670 Linden Alley",
    phone: "6087899643",
    password: "fP3~tAB2=p<a",
    status: "active"
  },
  {
    name: "Karney",
    lastname: "Mabley",
    email: "kmabley9@time.com",
    address: "403 Cascade Circle",
    phone: "2849303895",
    password: 'sK3*fHC"u2Azb',
    status: "active"
  },
  {
    name: "Lucienne",
    lastname: "Ferries",
    email: "lferriesa@thetimes.co.uk",
    address: "08204 Thompson Terrace",
    phone: "9077032246",
    password: "rQ4.03E<nW=",
    status: "inactive"
  },
  {
    name: "Cecil",
    lastname: "Thickpenny",
    email: "cthickpennyb@istockphoto.com",
    address: "5 Sycamore Parkway",
    phone: "9163748155",
    password: "cR5?OQY*7e>S1<z",
    status: "inactive"
  },
  {
    name: "Bearnard",
    lastname: "Albert",
    email: "balbertd@who.int",
    address: "6 Arizona Crossing",
    phone: "9527261358",
    password: 'cC7+)_PXzi"jd2',
    status: "active"
  },
  {
    name: "Pammie",
    lastname: "Feirn",
    email: "pfeirne@intel.com",
    address: "795 Talmadge Place",
    phone: "4074272420",
    password: "fV2>XgGt9",
    status: "inactive"
  },
  {
    name: "Jannel",
    lastname: "Baroch",
    email: "jbarochf@desdev.cn",
    address: "38 Oak Way",
    phone: "4484356059",
    password: "vS6%}4>k/c",
    status: "active"
  },
  {
    name: "Lucais",
    lastname: "Georgeson",
    email: "lgeorgesong@addthis.com",
    address: "4059 Veith Terrace",
    phone: "8805534421",
    password: "mD5>wf7\\%",
    status: "active"
  },
  {
    name: "Tate",
    lastname: "Gerald",
    email: "tgeraldh@ebay.com",
    address: "57 Fremont Plaza",
    phone: "8571182558",
    password: "sT5,!z=qh",
    status: "active"
  },
  {
    name: "Harlie",
    lastname: "Heal",
    email: "hheali@wiley.com",
    address: "545 Buhler Point",
    phone: "1366969377",
    password: "jI6${QscrBY",
    status: "active"
  },
  {
    name: "Correy",
    lastname: "Goodered",
    email: "cgooderedj@latimes.com",
    address: "556 Mifflin Lane",
    phone: "8119016109",
    password: "aO9)Cjjfbt\\x",
    status: "inactive"
  },
  {
    name: "Adria",
    lastname: "Jeffes",
    email: "ajeffesk@msn.com",
    address: "092 7th Lane",
    phone: "7241273474",
    password: "xW1,6T@w?4F",
    status: "inactive"
  },
  {
    name: "Tobi",
    lastname: "Penreth",
    email: "tpenrethl@biblegateway.com",
    address: "6 Kipling Center",
    phone: "2495210006",
    password: "xH0$pnc&8)tO!",
    status: "inactive"
  },
  {
    name: "Steffi",
    lastname: "Tregidga",
    email: "stregidgam@goo.ne.jp",
    address: "79330 Scofield Place",
    phone: "7001360660",
    password: "uG3,g1B!i",
    status: "active"
  },
  {
    name: "Jo",
    lastname: "Braidford",
    email: "jbraidfordn@hc360.com",
    address: "153 Talisman Street",
    phone: "1688213037",
    password: "eT6`q9?E80h~EJ",
    status: "inactive"
  },
  {
    name: "Ulrica",
    lastname: "Bilham",
    email: "ubilhamo@soundcloud.com",
    address: "98 Scoville Hill",
    phone: "1036295911",
    password: 'nK5!7B",pizsl6',
    status: "active"
  },
  {
    name: "Eartha",
    lastname: "Quinney",
    email: "equinneyp@networksolutions.com",
    address: "63839 Algoma Court",
    phone: "9166310310",
    password: "eY0$},ow",
    status: "active"
  },
  {
    name: "Vikky",
    lastname: "Ioselevich",
    email: "vioselevichq@foxnews.com",
    address: "378 Marcy Pass",
    phone: "8216995513",
    password: "oA4.pN|1}RaPE8NJ",
    status: "inactive"
  },
  {
    name: "Merrick",
    lastname: "Iglesia",
    email: "miglesiar@earthlink.net",
    address: "886 Redwing Place",
    phone: "6889735775",
    password: "xM7.obzPNT",
    status: "active"
  },
  {
    name: "Uriah",
    lastname: "Paulou",
    email: "upaulous@ebay.com",
    address: "796 Fair Oaks Court",
    phone: "5784275523",
    password: "qK6'eQk2|fa",
    status: "inactive"
  },
  {
    name: "Elaina",
    lastname: "Lambillion",
    email: "elambilliont@bbc.co.uk",
    address: "15 Algoma Circle",
    phone: "5148143968",
    password: "iP1*9iH>llj05*s",
    status: "inactive"
  },
  {
    name: "Brant",
    lastname: "Gaynesford",
    email: "bgaynesfordu@abc.net.au",
    address: "8006 Eastwood Hill",
    phone: "5115831096",
    password: "uA0')/{t0RcR4}(a",
    status: "active"
  },
  {
    name: "Bondy",
    lastname: "Houlaghan",
    email: "bhoulaghanv@wufoo.com",
    address: "79268 Dawn Way",
    phone: "1208507856",
    password: "cT9*c/TaJV",
    status: "inactive"
  },
  {
    name: "Lanna",
    lastname: "Kesby",
    email: "lkesbyw@stanford.edu",
    address: "9 Derek Terrace",
    phone: "8709411099",
    password: "cV4{!}Zhq",
    status: "inactive"
  },
  {
    name: "Robin",
    lastname: "Trew",
    email: "rtrewx@arizona.edu",
    address: "505 Twin Pines Hill",
    phone: "5287947871",
    password: 'aB0@5HzP~"',
    status: "active"
  },
  {
    name: "Lonee",
    lastname: "Behling",
    email: "lbehlingy@upenn.edu",
    address: "2448 Schurz Avenue",
    phone: "2176923719",
    password: 'mK7=.h"AJu@J8',
    status: "active"
  },
  {
    name: "Cyril",
    lastname: "Exrol",
    email: "cexrolz@mashable.com",
    address: "2 Manufacturers Way",
    phone: "4243078535",
    password: "hS5~kIjcO",
    status: "inactive"
  },
  {
    name: "Masha",
    lastname: "Kennford",
    email: "mkennford10@plala.or.jp",
    address: "5335 Karstens Circle",
    phone: "4064878724",
    password: "dF5!wdP!sz!0_D+",
    status: "inactive"
  },
  {
    name: "Brew",
    lastname: "Chalfont",
    email: "bchalfont11@bloomberg.com",
    address: "515 Donald Avenue",
    phone: "7317502020",
    password: "wA7`vn6IO+`e?0",
    status: "active"
  },
  {
    name: "Hilarius",
    lastname: "Banat",
    email: "hbanat12@deviantart.com",
    address: "2 Buell Plaza",
    phone: "4592237046",
    password: "nQ5!Aa{9",
    status: "active"
  },
  {
    name: "Kassandra",
    lastname: "Neward",
    email: "kneward13@businessweek.com",
    address: "8 3rd Junction",
    phone: "5911827499",
    password: "kK0/OM*ch",
    status: "inactive"
  },
  {
    name: "Sande",
    lastname: "Hotton",
    email: "shotton14@amazon.co.uk",
    address: "00492 Waxwing Circle",
    phone: "8411532940",
    password: "iC1<pvyW",
    status: "inactive"
  },
  {
    name: "Conroy",
    lastname: "Turnpenny",
    email: "cturnpenny15@wikimedia.org",
    address: "7135 Warrior Alley",
    phone: "9605328779",
    password: "mQ3|No96F&7",
    status: "inactive"
  },
  {
    name: "Padgett",
    lastname: "Bullent",
    email: "pbullent16@vinaora.com",
    address: "926 8th Point",
    phone: "9757683167",
    password: "bX3*oOy3sq",
    status: "inactive"
  },
  {
    name: "Shauna",
    lastname: "Tommeo",
    email: "stommeo17@vinaora.com",
    address: "617 Banding Trail",
    phone: "3502331521",
    password: "rP8?XuId/ffb*OP",
    status: "inactive"
  },
  {
    name: "Tait",
    lastname: "Challinor",
    email: "tchallinor18@gov.uk",
    address: "0577 Commercial Point",
    phone: "1056621655",
    password: "aI6)2p*Zln*N\\",
    status: "inactive"
  },
  {
    name: "Konrad",
    lastname: "Dayne",
    email: "kdayne19@icq.com",
    address: "38441 Shopko Center",
    phone: "8178784647",
    password: 'tM1{"F0SK',
    status: "active"
  },
  {
    name: "Lilias",
    lastname: "Latham",
    email: "llatham1a@e-recht24.de",
    address: "2 School Court",
    phone: "2842283377",
    password: "gC4=duzlKzP",
    status: "active"
  },
  {
    name: "Aurilia",
    lastname: "Girvan",
    email: "agirvan1b@skype.com",
    address: "4 Hollow Ridge Plaza",
    phone: "4944116282",
    password: "dT1+od4RLf+x'q",
    status: "inactive"
  },
  {
    name: "Olympia",
    lastname: "Stoltz",
    email: "ostoltz1c@cbslocal.com",
    address: "960 Dryden Hill",
    phone: "1627130194",
    password: "sR1{z__NT.lB%wC",
    status: "active"
  },
  {
    name: "Marisa",
    lastname: "Jenney",
    email: "mjenney1d@opera.com",
    address: "36 Blaine Terrace",
    phone: "9164434130",
    password: "nQ4.%m&ZK*x_$*",
    status: "inactive"
  },
  {
    name: "Hali",
    lastname: "Lomb",
    email: "hlomb1e@skype.com",
    address: "8 Grasskamp Center",
    phone: "7293617593",
    password: "vD4.Rrcm0f",
    status: "inactive"
  },
  {
    name: "Fawne",
    lastname: "Temby",
    email: "ftemby1f@europa.eu",
    address: "869 Heath Terrace",
    phone: "7199405754",
    password: "fC4&+(QsfS",
    status: "active"
  },
  {
    name: "Tudor",
    lastname: "Mandell",
    email: "tmandell1g@toplist.cz",
    address: "6887 American Ash Terrace",
    phone: "4215824060",
    password: "cN4\\uKlh'6|+{vib",
    status: "active"
  },
  {
    name: "Rosana",
    lastname: "Lorriman",
    email: "rlorriman1h@last.fm",
    address: "575 Talisman Circle",
    phone: "6431343235",
    password: "mE0{p5*~",
    status: "inactive"
  },
  {
    name: "Dorotea",
    lastname: "Wickstead",
    email: "dwickstead1i@oaic.gov.au",
    address: "5728 Center Place",
    phone: "2361247607",
    password: "oM6~E+r~fx#i'?_p",
    status: "inactive"
  },
  {
    name: "Albertina",
    lastname: "Teodorski",
    email: "ateodorski1j@hostgator.com",
    address: "6 Forest Circle",
    phone: "6821012723",
    password: "lB6~VEm6(0x2OTX",
    status: "active"
  },
  {
    name: "Bartolemo",
    lastname: "Fenby",
    email: "bfenby1k@webmd.com",
    address: "60 Badeau Avenue",
    phone: "7584435297",
    password: "iO3%ML&r",
    status: "active"
  },
  {
    name: "Moritz",
    lastname: "Bransgrove",
    email: "mbransgrove1l@hc360.com",
    address: "5 Bay Lane",
    phone: "7029610726",
    password: "fO4}6i=x/BN!F",
    status: "active"
  },
  {
    name: "Perry",
    lastname: "Haglinton",
    email: "phaglinton1m@odnoklassniki.ru",
    address: "55 Huxley Terrace",
    phone: "3899678196",
    password: "tJ8?4VXUV",
    status: "active"
  },
  {
    name: "Garrett",
    lastname: "Vinden",
    email: "gvinden1n@marketwatch.com",
    address: "697 Debs Alley",
    phone: "7569260254",
    password: "kD3?pdeg+w?JFDd",
    status: "active"
  },
  {
    name: "Saw",
    lastname: "Gaunter",
    email: "sgaunter1o@typepad.com",
    address: "946 Northfield Plaza",
    phone: "5321193523",
    password: "sA8?o,U%`bs5&rKl",
    status: "active"
  },
  {
    name: "Rosalind",
    lastname: "Cagan",
    email: "rcagan1p@mit.edu",
    address: "3691 Village Street",
    phone: "9588564287",
    password: 'nI6==XhaUD="',
    status: "inactive"
  },
  {
    name: "Korrie",
    lastname: "Yurchenko",
    email: "kyurchenko1q@theguardian.com",
    address: "631 Ridgeway Junction",
    phone: "7024535589",
    password: "nL6<_>Ii{q&pF",
    status: "inactive"
  },
  {
    name: "Chilton",
    lastname: "Silverlock",
    email: "csilverlock1r@meetup.com",
    address: "4 Hovde Court",
    phone: "8167483081",
    password: "oS2)6GsGR",
    status: "inactive"
  },
  {
    name: "Madison",
    lastname: "Tiptaft",
    email: "mtiptaft1s@github.com",
    address: "885 Tennyson Plaza",
    phone: "6523985187",
    password: 'cF3"Y6x!',
    status: "inactive"
  },
  {
    name: "Alva",
    lastname: "Leyre",
    email: "aleyre1t@1688.com",
    address: "0 Leroy Avenue",
    phone: "4513451396",
    password: "lJ3.xr&>uA",
    status: "inactive"
  },
  {
    name: "Thorny",
    lastname: "Dilrew",
    email: "tdilrew1u@google.co.uk",
    address: "24282 Dwight Trail",
    phone: "9636667860",
    password: "nI9}N&)rDk7@Q",
    status: "active"
  },
  {
    name: "Filbert",
    lastname: "McCurley",
    email: "fmccurley1v@nba.com",
    address: "55890 Trailsway Plaza",
    phone: "9517000063",
    password: 'kI5~&B"}n',
    status: "inactive"
  },
  {
    name: "Mercie",
    lastname: "Ginsie",
    email: "mginsie1w@histats.com",
    address: "6490 School Pass",
    phone: "6052885239",
    password: "oL2$|z1/l",
    status: "inactive"
  },
  {
    name: "Noach",
    lastname: "Mersh",
    email: "nmersh1x@ameblo.jp",
    address: "007 Calypso Plaza",
    phone: "2934451324",
    password: "eQ6/7m/>XWRW1iE!",
    status: "inactive"
  },
  {
    name: "Daffie",
    lastname: "Prickett",
    email: "dprickett1y@unicef.org",
    address: "376 Shoshone Avenue",
    phone: "9931661343",
    password: "xW1+9_@eiV&JcM",
    status: "active"
  },
  {
    name: "Elyse",
    lastname: "Oman",
    email: "eoman1z@icq.com",
    address: "9800 Randy Junction",
    phone: "9489325847",
    password: 'gN8"VEUtpV3Wm',
    status: "active"
  },
  {
    name: "Randall",
    lastname: "McPake",
    email: "rmcpake20@cisco.com",
    address: "06871 Londonderry Drive",
    phone: "1863801508",
    password: "nF1|,.yEG6F8RIjf",
    status: "inactive"
  },
  {
    name: "Johnnie",
    lastname: "Benallack",
    email: "jbenallack21@jimdo.com",
    address: "02 Prairie Rose Hill",
    phone: "9253468391",
    password: "qP4#8=Gn",
    status: "active"
  },
  {
    name: "Kaine",
    lastname: "Wincott",
    email: "kwincott22@barnesandnoble.com",
    address: "0 5th Road",
    phone: "5889113295",
    password: "cT3'`xK\\=3W=!jIB",
    status: "inactive"
  },
  {
    name: "Sydel",
    lastname: "Baselli",
    email: "sbaselli23@list-manage.com",
    address: "9 Roth Alley",
    phone: "9819009320",
    password: "qL9\\N&f/",
    status: "inactive"
  },
  {
    name: "Robbi",
    lastname: "Lorain",
    email: "rlorain24@cam.ac.uk",
    address: "00736 Milwaukee Lane",
    phone: "4241006430",
    password: "aC9&qCC`LYZB",
    status: "inactive"
  },
  {
    name: "Kearney",
    lastname: "Ferriere",
    email: "kferriere25@wsj.com",
    address: "20 Old Gate Alley",
    phone: "3806386315",
    password: "nY1!3YS\\|aT",
    status: "inactive"
  },
  {
    name: "Porter",
    lastname: "McGrorty",
    email: "pmcgrorty26@facebook.com",
    address: "33 Blaine Lane",
    phone: "8049468648",
    password: "cO0>fUnz=aW",
    status: "active"
  },
  {
    name: "Rahal",
    lastname: "Doxey",
    email: "rdoxey27@reverbnation.com",
    address: "222 Lighthouse Bay Plaza",
    phone: "8013619647",
    password: "oR9#ln2D`iW",
    status: "active"
  }
];

export default async function createAllUsers() {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    await User.create(user);
  }
  console.log("users create ok");
}

export { createAllUsers };
