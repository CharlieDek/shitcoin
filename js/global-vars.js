function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

var debug = false;
var phase = 0;
var global_ticks = 0;
var globalIntervalTickSpeed = 16.7;

var bank_worth = 1032.84;
var coins_held = 0.0;
var coin_value = 0.0;
var coins_in_supply = 0.0;
var coinworld_sub = false;
var rob_btn_shown = false;
var quit_btn_shown = false;
var total_tweets = 0;
var workInterval = 1900;
var emptyEmailIndices = new Set(Array.from({ length: 33 }, (_, i) => i));
var unrespondedEmailIndices = new Set();

// key dynamic globals
const usedStories = new Set();
var popularity = 0.1;
var popularity_fluctuation = 0.01;
var crypto_market_popularity = 1.0;
var crypto_market_going_up = true;
var lifetimeMaxCash = 0;

// collapse
var barriers;
var loseMoneyInterval;
var cashGone = false;
var societalCollapseInterval;
var collapseTicks = 0;
const MAX_PARTICLES = 2000;

// legal
var num_boosts_used = 0;
var mistrust_popularity = 0.0  // mistrust is a down-pressure on popularity, welcomes lawsuits, and can be alleviated
const BIG_ENOUGH_TO_SUE = 350000;
var legalProblemsStarted = false;

// prep
var goldValue = 5000;
var longResearchCounter = 0;
var goldCounter = 0;
var artCounter = 0;
var bunkerCounter = 0;
var planeCounter = 0;
var nzCounter = 0;

// work
var refreshWorkInterval;

// robinhood
var refreshRobTickSpeed = 1500;
var gme_holdings = 0;
var tsla_holdings = 0;
var nvda_holdings = 0;
var gme_valuation = getRandomNumber(1, 5);
var tsla_valuation = getRandomNumber(10, 20);
var nvda_valuation = getRandomNumber(30, 50);
var totalRobBuys = 0;
var totalRobSales = 0;
var increasedRobBuyLimitShown = false;
var robBuyAmt = 1;
var rob_going_up = true;
var refreshRobinhoodInterval;
var timeToCancelRob = false;

// nftland
var nft_vibrancy = 10;
var nft_eyes = false
var nft_hat = true;
var nfts_ordered_by_true_value = [];
var nft_price = 1;
const minNFTPrice = 0.01;
const maxNFTPrice = 1000000.0;
var my_nft_boost = 0.0001;
var nfts_sold = 0;
var nftSaleRecords = new Object();
const DEPTH_STEP = 150;

// cash triggers
var alreadyGotReal = false;
var alreadyGotCompound = false;
var alreadyGotPol1 = false;
var alreadyGotPol2 = false;
var alreadyGotPol3 = false;
var alreadyGotPol4 = false;
var alreadyGotPol5 = false;
var alreadyGotSecurity = false;
var alreadyShowedCeleb2 = false;
var alreadyShowedCeleb3 = false;
var alreadyShowedCeleb4 = false;
var alreadyShowedCeleb5 = false;

const CELEB_1_FEE = 1150;
const CELEB_2_FEE = 15000;
const CELEB_3_FEE = 60000;
const CELEB_4_FEE = 750000;
const CELEB_5_FEE = 37000000;

const POL_1_FEE = 500000;
const POL_2_FEE = 1500000;
const POL_3_FEE = 3600000;
const POL_4_FEE = 150000000;
const POL_5_FEE = 5000000000;

// coinworld
var shitCache = {
    containers: new Object(),
    valuations: new Object(),
    buyBtns: new Object(),
};
var myShitPriceFloor = 0.01;
var shitCoins = new Object();
const MY_SHIT_BUY_ID = "buyShit_MINE";
const MY_SHIT_VALUE_ID = "shitValuation_MINE";
var myShitCreated = false;
var my_shitcoin_crashes = 0;
var myShitCoin = {
    goingUp: true,
    price: 0.01,
    name: "$SHIT",
    chanceToDrop: 0.99955,
    boost: 0.0,
    quantity: 1,
    lifetimeMinted: 1
}

// legal
const legalRefreshTickSpeed = 2501;
var LAWYER_RATE = 1000;
var politicalLegalHelp = 0.0;
var legalProblemsDone = false;
var legalRefreshInterval;
var numLawyers = 0;
const MAX_LAWYERS = 21;
const MAX_LAWSUITS = 7;
var lawsuitsObj = new Object();
var attacksObj = new Object();
const LAWSUIT_NAMES = [
    "W.D. TEXAS",
    "S.D. TEXAS",
    "P.A. SUP",
    "N.D. OHIO",
    "S.E.C.",
    "C.F.P.B.",
    "F.T.C. II",
    "C.F.T.C. II",
    "LI V CoinWorld",
    "SABIN V $SHIT",
    "LINSKY V $SHIT",
    "A.G. NY",
];
const ATTACK_NAMES = [
    "$SHIT V S.E.C.",
    "$SHIT V CA",
    "$SHIT V NY",
    "$SHIT V Pitt",
    "$SHIT V Sabin",
    "$SHIT v NFTLand",
    "$SHIT V Lu",
    "$SHIT V DI",
    "$SHIT V Coinzy",
    "$SHIT V C.F.P.B.",
];

var lifetimeCoinworldBuys = 0.0;
var coinsShowing = false;
var buyLimit1Used = false;
var buyLimit2Used = false;
var buyLimit3Used = false;
const UNLOCK_LIFETIME_I_BUY = 5;
const UNLOCK_LIFETIME_II_BUY = 3000;
const UNLOCK_LIFETIME_III_BUY = 50000;

var default_shit_buy_quantity = 1;
var coinworld_buy_amt = 3;
const shitNameArr = [
    "$ASS",
    "$ASS2",
    "$QQQQ",
    "$SCAM",
    "$MEME",
    "$RICH",
    "$HIGH",
    "$LOKO",
    "$FARM",
    "$PNZI",
    "$ZEN3",
    "$BONK",
    "$8008",
    "$DOEG",
    "$PUMP",
    "$RUG",
    "$KITE",
    "$MARK",
    "$GOAT",
];

//twitter
var popularity_cap = 25;
const most_popular_tweeters = ["@elonmusk", "@BarackObama", "@Cristiano", "@justinbieber", "@rihanna", "@katyperry", "@narendramodi", "@realDonaldTrump", "@taylorswift13", "@NASA", "@ladygaga", "@YouTube", "@KimKardashian", "@EllenDeGeneres", "@X", "@BillGates", "@selenagomez", "@imVkohli", "@neymarjr", "@cnnbrk", "@CNN", "@jtimberlake", "@PMOIndia", "@nytimes", "@espn", "@britneyspears", "@shakira", "@KingJames", "@ChampionsLeague", "@ddlovato", "@realmadrid", "@BBCBreaking", "@FCBarcelona", "@jimmyfallon", "@SrBachchan", "@BTS_twt", "@NBA", "@akshaykumar", "@MileyCyrus", "@BeingSalmanKhan", "@premierleague", "@bts_bighit", "@iamsrk", "@JLo", "@SportsCenter", "@BrunoMars", "@Oprah", "@BBCWorld", "@sachin_rt", "@NiallOfficial"];
const max_tweets = 40;
const phase_1_tweets = [
    'twitter is so funny hahah',
    'mkay gnight all c u tmrw',
    'food is lowkey goated when being hungry is the vibe',
    'i have to grind harder this year lol',
    '@cristiano Ill buy one lol',
    'opportunity be knockin\'!',
    'grind now, shine later',
    'i like  twitter! u guys are so funny',
    'shoulder hurts so bad from the gym lmao',
    'does anyone know if robinhood is still doing their premium free trial?',
    'who else feels like getting in the shower is like a warm bath',
    'should I start a robinhood lul',
    'anyone else puts on nvda?',
    'Opportunities don’t happen, you create them.',
    'i keep forgettin how much i really like  twitter lol'
];
const engagement_tweets = [
    "Tipping is such a scam! Who else thinks we should never tip again?",
    "Wow, what an awesome video! I have never watched a video like that.",
    "What do people call bread where you're from?",
    "Poor people should low key die! DM if you agree!",
    "Without googling, name a movie that needs a sequel!",
    "I just got bird flu should I go to MOVIE?!",
    "A WITCH WILL CURSE YOU IF YOU DONT LIKE THIS POST! SHARE TO SPREAD AWARENESS.",
    "where i'm from if you ask someone to take off their shoes they'll shoot you dead! who else?",
    "vaccines are a scam!",
    "What do kids these days get WRONG?",
    "I BET NOBODY CAN TELL ME WHAT THEIR FIRST ALCOHOL DRINK WAS",
    "WOULD YOU HOLD THE DOOR FOR HITELR???",
    "all men need to hear this vvv!",
    "am i the only one who thinks stealing is ok?",
    "cheerleading is more of a sport than golf!",
    "Which one of these does NOT belong in a soup?? vvv",
    "What's your most WOKE opinion?",
];
const apology_tweets = [
    "I am so sorry for the consequences that my actions have caused, and for my part in those actions.",
]
const pump_tweet_functions = [
    (coin_name) => `${coin_name} is going crazy!`,
    (coin_name) => `${coin_name} is Him right now!`,
    (coin_name) => `${coin_name} going to the MOON! DM for special offer...`,
    (coin_name) => `Blown away by the support for ${coin_name}! I love this community.`,
    (coin_name) => `${coin_name} CRUSHING THE COMPETITION, but so much more to do #timetobuild #letsdothis`,
    (coin_name) => `INSANE growth on ${coin_name} rn.`,
    (coin_name) => `${coin_name} is such a bargain rn omg i just bought like \$5,000 and it's way up`,
    (coin_name) => `who else just made %5000 today with ${coin_name}!? so awesome`,
];
var engagementBotInterval;


const c_ORIGINAL_BG_COLORS = ["#f5f5f57d", "#7a7a7a1f"];

const c_NODE_TO_BG_COLORS = {
    "b0c5788a": ["#bf4b0d1f", "#1616161f"], // outside it's grayish orange
    "9416aa41": ["#dddcdc7d", "#7a7a7a33"], // ears pop slightly
    "669b4898": ["#c3c1c17d", "#5050502b"], // down and down
    "197c3f0d": ["#a1a0a07d", "#5050507a"], // you come to a door
    "2a94f01a": ["#dddcdc7d", "#7a7a7a33"], // push door open to pigeon room
    "5e290813": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "0339628f": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "1e846b88": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "df9a02cb": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "03a981ae": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "df9a02cb": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "fddbf933": ["#dddcdc7d", "#7a7a7a33"], // pigeon room
    "0798ff8d": ["#a1a0a07d", "#5050507a"], // back to stairwell for texting
    "35027d82": ["#a1a0a07d", "#5050507a"], // deeper than pigeon
    "6d615190": ["#a1a0a07d", "#5050507a"], // pretty good
    "6d615190": ["#a1a0a07d", "#5050507a"], // pretty good
    "93f0ee81": ["#a1a0a07d", "#5050507a"], // ha ha
    "2f759a84": ["#a1a0a07d", "#505050"], // Here the lights are off
    "85c8059f": ["#f1b1977d", "#7e1d007a"], // You close your eyes.
    "fca5689a": ["#f1b1977d", "#7e1d007a"], // Without opening your eyes
    "fca5689a": ["#f1b1977d", "#7e1d007a"], // Without opening your eyes
    "fc07148f": ["#6ab4d37d", "#d7a1ff"], // Colors flash
    "2543273f": ["#72e9ff7d", "#7d9de8"], // aquarium
    "7f277631": ["#7d9de8", "#72e9ff7d"], // aquarium
    "1c3f1bba": ["#72e9ff7d", "#7d9de8"], // aquarium
    "b57adee2": ["#ffeaea7d", "#8e7b7b1f"], // Rupert lvl1
    "369329cb": ["#ffc7c77d", "#7a555533"], // Rupert lvl2
    "55003df0": ["#e13232ab", "#b25e5e59"], // Rupert lvl3
    "42adca3c": ["#e10606e0", "#ff0000"], // Rupert lvl4
    "8ac276d7": ["#e10606e0", "#ff0000"], // Rupert lvl4
    
    "9ec2b4b5": ["#a63c0257", "#5b730721"], // air outside
    "afc42e0b": ["#a63c0257", "#5b730721"], // air outside
    "bd74f80b": ["#a63c0257", "#5b730721"], // air outside
    "a31aebee": ["#a63c0257", "#5b730721"], // air outside
    "20f2ad8a": ["#a63c0257", "#5b730721"], // air outside
    "6b997544": ["#a63c0257", "#5b730721"], // air outside
    "e8669c73": ["#a63c0257", "#5b730721"], // air outside
    "36aab077": ["#a63c0257", "#5b730721"], // air outside
    "88e5744b": ["#a63c0257", "#5b730721"], // air outside
    "6f6897b0": ["#a63c0257", "#5b730721"], // air outside
    "c66d8dc4": ["#a63c0257", "#5b730721"], // air outside
    "52278eb1": ["#62260570", "#3d4d064f"], // spots
    "a662aae1": ["#62260570", "#3d4d064f"], // spots
    "b345f92a": ["#1d0b0170", "#3d4d064f"], // spots
    
    
    "255da1f3": ["#a1a0a07d", "#505050"], // pipe room
    "3d6a765e": ["#a1a0a07d", "#505050"], // pipe room
    "b7ff9714": ["#a1a0a07d", "#505050"], // pipe room
    
    "0a2128ec": ["#1a439866", "#0e265cb5"], // swimming in pipes
    "07095290": ["#1a439866", "#0e265cb5"], // swimming in pipes
    
    "bbb9f75a": ["#003cba75", "#1295eab5"], // swimming in river
    "51510163": ["#003cba75", "#1295eab5"], // swimming in river
    
    "6541c623": ["#000d2775", "#065588b5"], // swimming in deeper river
    "4c282d1e": ["#fe27ff1c", "#7d9de8"], // submarine garden
};