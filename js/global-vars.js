function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

var debug = false;
var phase = 0;
var global_ticks = 0;
var globalIntervalTickSpeed = 9;
// globalIntervalTickSpeed = 1000; // TODO remove

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
var popularity = 0.1;
var popularity_fluctuation = 0.01;
var crypto_market_popularity = 1.0;
var crypto_market_going_up = true;
var crypto_up_bonus = 1.0;

// work
refreshWorkInterval = null;

// robinhood
var gme_holdings = 0;
var tsla_holdings = 0;
var nvda_holdings = 0;
var gme_valuation = getRandomNumber(1, 5);
var tsla_valuation = getRandomNumber(10, 20);
var nvda_valuation = getRandomNumber(30, 50);
var rob_going_up = false;
refreshRobinhoodInterval = null;

// nftworld
var nft_vibrancy = 10;
var nft_eyes = false;
var nfts_ordered_by_true_value = [];
var nft_price = 1;
const minNFTPrice = 0.01;
const maxNFTPrice = 1000000.0;
var my_nft_boost = 0.0003;

// coinworld
var shitCoins = new Object();

//twitter
const most_popular_tweeters = ["@elonmusk", "@BarackObama", "@Cristiano", "@justinbieber", "@rihanna", "@katyperry", "@narendramodi", "@realDonaldTrump", "@taylorswift13", "@NASA", "@ladygaga", "@YouTube", "@KimKardashian", "@EllenDeGeneres", "@X", "@BillGates", "@selenagomez", "@imVkohli", "@neymarjr", "@cnnbrk", "@CNN", "@jtimberlake", "@PMOIndia", "@nytimes", "@espn", "@britneyspears", "@shakira", "@KingJames", "@ChampionsLeague", "@ddlovato", "@realmadrid", "@BBCBreaking", "@FCBarcelona", "@jimmyfallon", "@SrBachchan", "@BTS_twt", "@NBA", "@akshaykumar", "@MileyCyrus", "@BeingSalmanKhan", "@premierleague", "@bts_bighit", "@iamsrk", "@JLo", "@SportsCenter", "@BrunoMars", "@Oprah", "@BBCWorld", "@sachin_rt", "@NiallOfficial"];
const max_tweets = 20;
const phase_1_tweets = [
    'twitter is so funny hahah',
    'mkay gnight all c u tmrw',
    'food is lowkey goated when being hungry is the vibe',
    'i have to grind harder this year lol',
    '@cristiano Ill buy one lol',
    'i like  twitter',
    'shoulder hurts so bad from the gym lmao',
    'does anyone know if robinhood is still doing their premium free trial?',
    'who else feels like getting in the shower is like a warm bath',
    'should I start a robinhood lul',
    'anyone else puts on nvda?',
    'i keep forgettin how much i really like  twitter lol'
];


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

var gState = {
    "currChosen": null,
    "snackChosen": "cup of tap water",
    "playerName": "Unnamed Employee",
    "resto": "Land Of Plenty",
    "showingPidge": false,
    "currentTime": new Date("2024-12-04T12:50:00"),
    "pathsTaken": new Set()
};