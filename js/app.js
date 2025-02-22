window.addEventListener('resize', setVh);
const c_MAX_MOBILE_WIDTH = 500;

var cash = $("#cash");
var netWorth = $("#net-worth");

// projects
var projectsPanel = $("#projectsPanel");
var makeCoinworldAccountBtn = $("#makeAccount");
var legalPanel = $("#legalPanel");
var makeRobBtn = $("#makeRob");
var quitWork = $("#quitWork");
var createXBtn = $("#createX");
var nftRedesignAction = $("#nftRedesignAction");
var learnEngagementBtn = $("#learnEngagement");
var learnApologiesBtn = $("#learnApologies");
var makeStockIndicatorBtn = $("#makeStockIndicator");
var coinworldBuyLimit1 = $("#coinworldBuyLimit1");
var coinworldBuyLimit2 = $("#coinworldBuyLimit2");
var coinworldBuyLimit3 = $("#coinworldBuyLimit3");
var makeShitcoin = $("#makeShitcoin");
var makeAccountNFT = $("#makeAccountNFT");
var engagementBotBtn = $("#engagementBotBtn");
var teamUpWithCelebAction1 = $("#teamUpWithCelebAction1");
var teamUpWithCelebAction2 = $("#teamUpWithCelebAction2");
var teamUpWithCelebAction3 = $("#teamUpWithCelebAction3");
var teamUpWithCelebAction4 = $("#teamUpWithCelebAction4");
var teamUpWithCelebAction5 = $("#teamUpWithCelebAction5");
var getIntoPol1 = $("#getIntoPoliticsAction1");
var getIntoPol2 = $("#getIntoPoliticsAction2");
var getIntoPol3 = $("#getIntoPoliticsAction3");
var getIntoPol4 = $("#getIntoPoliticsAction4");
var getIntoPol5 = $("#getIntoPoliticsAction5");
var getRealAction = $("#getRealAction");
var dieAction = $("#dieAction");
var fleeAction = $("#fleeAction");

const projectPriceTuples = [
    [2500, makeStockIndicatorBtn],
    [15, makeCoinworldAccountBtn],
    [150, makeAccountNFT],
    [100, makeShitcoin],
    [500, nftRedesignAction],
    [5000, engagementBotBtn],
    [CELEB_1_FEE, teamUpWithCelebAction1],
    [CELEB_2_FEE, teamUpWithCelebAction2],
    [CELEB_3_FEE, teamUpWithCelebAction3],
    [CELEB_4_FEE, teamUpWithCelebAction4],
    [CELEB_5_FEE, teamUpWithCelebAction5],
    [POL_1_FEE, getIntoPol1],
    [POL_2_FEE, getIntoPol2],
    [POL_3_FEE, getIntoPol3],
    [POL_4_FEE, getIntoPol4],
    [POL_5_FEE, getIntoPol5],
];

// robinhood
var robinhoodPanel = $("#robinhoodPanel");
var robinHoodNVDA = $("#robinHoodNVDA");
var robinHoodTSLA = $("#robinHoodTSLA");
var robinHoodGME = $("#robinHoodGME");
var robSuspensionMessage = $("#robSuspensionMessage");
var stockIndicatorDiv = $("#stockindicator");
var buyNVDA = $("#buyNVDA");
var buyGME = $("#buyGME");
var buyTSLA = $("#buyTSLA");
var cancelRob = $("#cancelRob");
var dontCancelRob = $("#dontCancelRob");

// work
var workPanel = $("#workPanel");
var lowWarning = $("#lowWarning");
var midWarning = $("#midWarning");
var highWarning = $("#highWarning");
var restartWorkBtn = $("#restartWorkBtn");
var workProgress = $("#work-progress");

// legal
var lawsuitHolder = $("#lawsuitHolder");
var lawyerCountSpan = $("#lawyerCountSpan");
var plusLawyerBtn = $("#plusLawyerBtn");
var minusLawyerBtn = $("#minusLawyerBtn");
var legalAttacks = $("#legalAttacks");

// prepper
var prepPanel = $("#prepPanel");
var prepAssetsHolder = $("#prepAssetsHolder");
var prepBuyGold = $("#prepBuyGold");
var prepBuySecurity = $("#prepBuySecurity");
var prepBuyLong = $("#prepBuyLong");
var prepBuyArt = $("#prepBuyArt");
var prepBuyBunker = $("#prepBuyBunker");
var prepBuyRanch = $("#prepBuyRanch");
var prepBuyPlane = $("#prepBuyPlane");
var prepBuyCompound1 = $("#prepBuyCompound1");
var prepBuyYacht = $("#prepBuyYacht");
var prepBuyCompound2 = $("#prepBuyCompound2");

// socials
var socialsPanel = $("#socialsPanel");
var twitterTL = $("#twitterTL");
var tweetBtn = $("#twitterBtn");
var tweetCrazyBtn = $("#tweetCrazyBtn");
var twitterTableBody = $("#twitterTL tbody");
var popularityProgress = $("#popularity-progress");

var twitterOptionFieldRegular = $("#twitterOptionFieldRegular");
var twitterOptionFieldPumpMy = $("#twitterOptionPumpMy");
var twitterOptionFieldEngagement = $("#twitterOptionFieldEngagement");
var twitterOptionFieldPumpCoins = $("#twitterOptionFieldPumpCoins");
var twitterOptionFieldApologize = $("#twitterOptionFieldApologize");
var twitterOptionApologize = $("#twitterOptionFieldApologize");

//coinworld
var coinWorldPanel = $("#coinWorldPanel");
var coins_held_div = $("#coins_held_div");
var coins_circulating_div = $("#coins_circulating_div");
var coins_value_div = $("#coins_value_div");
var shitHolder = $("#shitHolder");
var myShit = $("#myShit");

// nftland
var nftPanel = $("#nftPanel");
var mintNFT = $("#mintNFT");
var nftStack = $("#nftStack");
var nftPriceRange = $('#nftPriceRange');
var nftVibrancyRange = $('#nftVibrancyRange');
var nftCurveRange = $('#nftCurveRange');
var nftCurveRangeField = $('#nftCurveRangeField');
var nftPriceLabel = $('#nftPriceLabel');

// debug
var debugContainer = $("#debug");
var demandDebug = $("#demandDebug");
var popularityDebug = $("#popularityDebug");
var crypto_market_popularity_debug = $("#crypto_market_popularity_debug");


const path = document.getElementById("graph-line");
var points = [];
const maxPoints = 250;
let x = 0;


function getRandFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setVh() {
    let vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function roundFloat(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

function finishGame() {
    const timeStr = gState.currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      })
    $("#storyContent").html("You made it to " + timeStr + ". You did not get lunch.")
    $("#story_option_1").hide();
    $("#story_option_2").hide();

    $("#particles-js").show();
    if (!gState.showingPidge) {
        window.pJSDom[0].pJS.fn.modes.pushParticles(1);
        window.pJSDom[0].pJS.particles.move.speed = 30;
    }
}

function colorChange(promptID) {
    let color1 = c_ORIGINAL_BG_COLORS[0];
    let color2 = c_ORIGINAL_BG_COLORS[1];
    if (promptID in c_NODE_TO_BG_COLORS) {
        color1 = c_NODE_TO_BG_COLORS[promptID][0];
        color2 = c_NODE_TO_BG_COLORS[promptID][1];
    }
    if (document.documentElement.style.getPropertyValue("--bg_gradient_color_1") != color1) {
        document.documentElement.style.setProperty('--bg_gradient_color_1', color1);
    }
    if (document.documentElement.style.getPropertyValue("--bg_gradient_color_2") != color2) {
        document.documentElement.style.setProperty('--bg_gradient_color_2', color2);
    }
}

function suitNameUsed(s) {
    for (const [key, value] of Object.entries(lawsuitsObj)) {
        if (value.name === s) {
            return true;
        }
    }    
    return false;
}

function getUniqueLawsuitName() {
    var suitName = getRandFromArr(LAWSUIT_NAMES);
    while (suitNameUsed(suitName)) {
        suitName = getRandFromArr(LAWSUIT_NAMES);
    }
    return suitName;
}

function politicalLegalSavesLawsuit() {
    return Math.random() < politicalLegalHelp;
}

function makeLawsuit() {
    if (!legalProblemsStarted) {
        startLegalProblems();
    }
    if (politicalLegalSavesLawsuit()) {
        return;
    }
    if (Object.keys(lawsuitsObj).length > MAX_LAWSUITS) return;
    let lawsuitName = getUniqueLawsuitName();
    let lawsuitID = Math.random().toString(36).substring(8);
    const lawsuitAmt = Math.max(1000 * parseInt((bank_worth/1000) * Math.random() * 0.7), 10000);

    lawsuitsObj[lawsuitID] = {
        name: lawsuitName,
        originalTotal: lawsuitAmt,
        amtRemaining: lawsuitAmt,
    }

    var lawsuit = `<div class="lawsuit freshLawsuit" id="lawsuit_${lawsuitID}"><span>${lawsuitName}</span><span id="lawsuitAmt_${lawsuitID}">\$${formatNumber(lawsuitAmt, 0)}</span></div>`;
    lawsuitHolder.append(lawsuit);
}

function makeCoinWorld() {
    coinworld_sub = true;
    bank_worth -= 15.00;

    setCash();
    makeCoinworldAccountBtn.hide();
    coinWorldPanel.show();
    // autoboyShit.show();
    coinsShowing = true;
}

makeCoinworldAccountBtn.click(function() {
    makeCoinWorld();
    coinworldBuyLimit1.show();
    addShit();
});

makeStockIndicatorBtn.click(function() {
    bank_worth -= 2500;
    setCash();
    stockIndicatorDiv.show();
    makeStockIndicatorBtn.hide();
});

function teamUpWithCeleb(popularityGain, celebTweet) {
    paintNextTweet(celebTweet, parseInt(Math.random() * 100 * popularityGain));
    popularity += popularityGain;
}

teamUpWithCelebAction1.click(function() {
    teamUpWithCelebAction1.hide();
    bank_worth -= CELEB_1_FEE;
    my_nft_boost += 0.001;
    setCash();
    teamUpWithCeleb(2, "I'm teaming up with TikTok prankster K.J. Seter, our NFT's takin' over! Buy here: 82xuQkP4jlkWiDFiuz3SOO.");
});

teamUpWithCelebAction2.click(function() {
    teamUpWithCelebAction2.hide();
    bank_worth -= CELEB_2_FEE;
    setCash();
    popularity_cap += 5;
    console.log("todo boost my own coin if that's in the tewet");
    teamUpWithCeleb(3, "RT Simon Baker: I am teaming up with $SHIT, let's shit on that thing! Buy here: 82xuQkP4jlkWiDFiuz3SOO.");
});

teamUpWithCelebAction3.click(function() {
    teamUpWithCelebAction3.hide();
    bank_worth -= CELEB_3_FEE;
    setCash();
    popularity_cap += 10;
    console.log("todo boost my own coin if that's in the tewet");    
    teamUpWithCeleb(5, "RT Christina Hendricks: I am MAD MEN about $SHIT! BUY NOW vvvv 82xuQkP4jlkWiDFiuz3SOO.");
});

teamUpWithCelebAction4.click(function() {
    teamUpWithCelebAction4.hide();
    bank_worth -= CELEB_4_FEE;
    setCash();
    popularity_cap += 15;
    console.log("todo boost my own coin if that's in the tewet");    
    teamUpWithCeleb(7, "RT Joe Jonas: Don't be a sucker, buy $SHIT like me! I'm HODLING for the long term! Buy here: 82xuQkP4jlkWiDFiuz3SOO.");
});

teamUpWithCelebAction5.click(function() {
    teamUpWithCelebAction5.hide();
    bank_worth -= CELEB_5_FEE;
    setCash();
    popularity_cap += 20;
    console.log("todo boost my own coin if that's in the tewet");    
    teamUpWithCeleb(10, "RT Cristiano Ronaldo: I'm not retiring just yet...I am teaming up with $SHIT! This is NOT a scam and I am NOT hacked. Buy here: 82xuQkP4jlkWiDFiuz3SOO.");
});

getIntoPol1.click(function() {
    getIntoPol1.hide();
    bank_worth -= POL_1_FEE;
    politicalLegalHelp = 0.01;
    setCash();
});

getIntoPol2.click(function() {
    getIntoPol2.hide();
    bank_worth -= POL_2_FEE;
    politicalLegalHelp = 0.10;
    setCash();
});

getIntoPol3.click(function() {
    getIntoPol3.hide();
    bank_worth -= POL_3_FEE;
    politicalLegalHelp = 0.35;
    setCash();
});

getIntoPol4.click(function() {
    getIntoPol4.hide();
    bank_worth -= POL_4_FEE;
    politicalLegalHelp = 0.70;
    getIntoPol5.show();
    alreadyGotPol5 = true;    
    setCash();
});

function collapseIncrement() {
    popularity -= 0.5;
    popularity = Math.max(0, popularity);
    crypto_market_popularity -= 0.0001;
    if (crypto_market_popularity < 0.90) {
        legalPanel.hide();
    }
    crypto_market_popularity = Math.max(crypto_market_popularity, 0.01);
}

getIntoPol5.click(function() {
    getIntoPol5.hide();
    bank_worth -= POL_5_FEE;
    politicalLegalHelp = 1.0;    
    clearLawsuits();
    $("#lawyerOptions").hide();
    legalAttacks.show();
    setCash();
    societalCollapseInterval = setInterval(collapseIncrement, 300);
});

learnEngagementBtn.click(function() {
    learnEngagementBtn.hide();
    $("#twitterRadioEngagement").prop("checked", true);
    $('#twitterRadioEngagement').attr("disabled", null);
});

engagementBotBtn.click(function() {
    engagementBotBtn.hide();
    bank_worth -= 5000;
    setCash();
    engagementBotInterval = setInterval(makeEngagementBotTweet, 1300);
});

learnApologiesBtn.click(function() {
    learnApologiesBtn.hide();
    twitterOptionApologize.show();
});

// autoboyShit.click(function() {
//     default_shit_buy_quantity = 1;
//     autoboyShit.hide();
//     twitterOptionFieldPumpCoins.show();
// });

nftRedesignAction.click(function() {
    bank_worth -= 500.00;
    setCash();
    nft_eyes = true;
    nftRedesignAction.hide();
    // nftCurveRangeField.css('display', 'flex');
    popularity++;
});


function popBestNft(nftId) {
    nfts_ordered_by_true_value = nfts_ordered_by_true_value.filter(nft => nft.value !== nftId);
    $(`#${nftId}`).remove();
}

// simulates nft market. you fix the nft price, demand fluctuates
// and may be enough to buy one
function refreshNFTSales() {
    if (nfts_ordered_by_true_value.length === 0) return;

    // best nft
    var bestNft = nfts_ordered_by_true_value[0];
    var nft_demand_calculated = bestNft.key * popularity*popularity * crypto_market_popularity;
    if (decideIfSale(nft_demand_calculated, nft_price)) {
        bank_worth += nft_price;
        setCash();
        popBestNft(bestNft.value)
        nfts_sold++;
        if (nfts_sold === 10) {
            nftRedesignAction.show();
        } else if (nfts_sold === 50) {
            my_nft_boost += 0.0003;
        } else if (nfts_sold === 100) {
            my_nft_boost += 0.001;
        } else if (nfts_sold === 200) {
            my_nft_boost += 0.005;
        }
        if (nft_price > 5000) {
            my_nft_boost -= 0.00003; // can't sell them for millions forever dawg..
            my_nft_boost = Math.max(0.0001, my_nft_boost);
        }
    }
}

function makeNFTAccount() {
    nftPanel.show();
    makeAccountNFT.hide();
    mintNFT.show();
    bank_worth -= 150.00;
    setCash();
    setTimeout(function() {
        teamUpWithCelebAction1.show();
    }, 60000);
    // $("#kikiInput").prop("checked", true);
}

// NFT Land
makeAccountNFT.click(function() {
    makeNFTAccount();
});

function insertSorted(list, newItem) {
    let index = list.findIndex(item => item.key < newItem.key);
    if (index === -1) {
        list.push(newItem);
    } else {
        list.splice(index, 0, newItem);
    }
}

function decideIfSale(demand, price) {
    return (demand * Math.random()) > price;
}

function getNftValue() {
    let baseValue = 10 * Math.random();
    if (nft_vibrancy === 62) {
        baseValue *= 30;
    } else if (nft_vibrancy > 90) {
        baseValue *= 2;
    } else if (nft_vibrancy > 70) {
        baseValue *= 10;
    } else if (nft_vibrancy > 50) {
        baseValue *= 5;
    } else if (nft_vibrancy > 20) {
        baseValue *= 2;
    }
    if (nft_eyes) {
        baseValue *= 50;
    }
    return baseValue * my_nft_boost;
}

function makeNFTRoundness() {
    let shapeType = ["square", "parallelogram", "triangle", "oval"][Math.floor(Math.random() * 4)];
    var cornerRoundness = 1;
    var kikiBobo = $('input[name="kiki-bobo-option"]:checked').attr('id');
    if (kikiBobo === "boboInput") {
        cornerRoundness = 40;
        if (shapeType === "parallelogram") {
            shapeType = "oval";
        }
    }    
    let color = `hsl(${Math.random() * 360}, ${nft_vibrancy}%, 50%)`;
  
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.classList.add("nft-svg");    
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");
  
    let shape;
    
    // Scale cornerRoundness (1-100) to a reasonable pixel radius (e.g., 0 to 40)
    let radius = (cornerRoundness - 1) * 60 / 99; // Maps 1->0, 100->40
  
    if (shapeType === "square") {
      shape = document.createElementNS(svgNS, "rect");
      shape.setAttribute("x", "10");
      shape.setAttribute("y", "10");
      shape.setAttribute("width", "80");
      shape.setAttribute("height", "80");
      shape.setAttribute("rx", radius);
      shape.setAttribute("ry", radius);
      
      let angle = Math.random() * 90 - 45;
      shape.setAttribute("transform", `rotate(${angle},50,50)`);
      
    } else if (shapeType === "parallelogram") {
      let offset = Math.floor(Math.random() * 41) - 20;
      let points = `10,10 90,10 ${90 + offset},90 ${10 + offset},90`;
      
      if (radius > 0) {
        shape = document.createElementNS(svgNS, "path");
        // Define four corners
        let ax = 10, ay = 10;                // Top-left
        let bx = 90, by = 10;                // Top-right
        let cx = 90 + offset, cy = 90;       // Bottom-right
        let dx = 10 + offset, dy = 90;       // Bottom-left
        
        // Points along each side (10% and 90% along)
        let abStartX = ax + 0.1 * (bx - ax), abStartY = ay + 0.1 * (by - ay);
        let abEndX = ax + 0.9 * (bx - ax), abEndY = ay + 0.9 * (by - ay);
        let bcStartX = bx + 0.1 * (cx - bx), bcStartY = by + 0.1 * (cy - by);
        let bcEndX = bx + 0.9 * (cx - bx), bcEndY = by + 0.9 * (cy - by);
        let cdStartX = cx + 0.1 * (dx - cx), cdStartY = cy + 0.1 * (dy - cy);
        let cdEndX = cx + 0.9 * (dx - cx), cdEndY = cy + 0.9 * (dy - cy);
        let daStartX = dx + 0.1 * (ax - dx), daStartY = dy + 0.1 * (ay - dy);
        let daEndX = dx + 0.9 * (ax - dx), daEndY = dy + 0.9 * (ay - dy);
        
        let pathD = `
          M ${abStartX},${abStartY}
          L ${abEndX},${abEndY}
          Q ${bx},${by} ${bcStartX},${bcStartY}
          L ${bcEndX},${bcEndY}
          Q ${cx},${cy} ${cdStartX},${cdStartY}
          L ${cdEndX},${cdEndY}
          Q ${dx},${dy} ${daStartX},${daStartY}
          L ${daEndX},${daEndY}
          Q ${ax},${ay} ${abStartX},${abStartY}
          Z`;
        shape.setAttribute("d", pathD);
      } else {
        shape = document.createElementNS(svgNS, "polygon");
        shape.setAttribute("points", points);
      }
      
    } else if (shapeType === "triangle") {
      let shiftLeft = Math.floor(Math.random() * 21) - 10;
      let shiftRight = Math.floor(Math.random() * 21) - 10;
      let points = `50,10 ${10 + shiftLeft},90 ${90 + shiftRight},90`;
      
      if (radius > 0) {
        shape = document.createElementNS(svgNS, "path");
        // Define three corners
        let ax = 50, ay = 10;                   // Top
        let bx = 90 + shiftRight, by = 90;      // Bottom-right
        let cx = 10 + shiftLeft, cy = 90;       // Bottom-left
        
        // Points along each side
        let abStartX = ax + 0.1 * (bx - ax), abStartY = ay + 0.1 * (by - ay);
        let abEndX = ax + 0.9 * (bx - ax), abEndY = ay + 0.9 * (by - ay);
        let bcStartX = bx + 0.1 * (cx - bx), bcStartY = by + 0.1 * (cy - by);
        let bcEndX = bx + 0.9 * (cx - bx), bcEndY = by + 0.9 * (cy - by);
        let caStartX = cx + 0.1 * (ax - cx), caStartY = cy + 0.1 * (ay - cy);
        let caEndX = cx + 0.9 * (ax - cx), caEndY = cy + 0.9 * (ay - cy);
        
        let pathD = `
          M ${abStartX},${abStartY}
          L ${abEndX},${abEndY}
          Q ${bx},${by} ${bcStartX},${bcStartY}
          L ${bcEndX},${bcEndY}
          Q ${cx},${cy} ${caStartX},${caStartY}
          L ${caEndX},${caEndY}
          Q ${ax},${ay} ${abStartX},${abStartY}
          Z`;
        shape.setAttribute("d", pathD);
      } else {
        shape = document.createElementNS(svgNS, "polygon");
        shape.setAttribute("points", points);
      }
      
    } else if (shapeType === "oval") {
      let rx = Math.random() * 22 + 26;
      let ry = Math.random() * 22 + 26;
      shape = document.createElementNS(svgNS, "ellipse");
      shape.setAttribute("cx", "50");
      shape.setAttribute("cy", "50");
      shape.setAttribute("rx", rx);
      shape.setAttribute("ry", ry);
    }
    
    shape.setAttribute("fill", color);
    shape.setAttribute("stroke", "none"); // Prevent any outline
    svg.appendChild(shape);
    if (nft_eyes) {
        // Base positions for the left and right eyes
        let baseLeftEye = { x: 43, y: 35 };
        let baseRightEye = { x: 57, y: 35 };
    
        // Add slight random offsets to the eye positions (range: ±5 pixels)
        let leftEyeX = baseLeftEye.x + (Math.random() * 10 - 5);
        let leftEyeY = baseLeftEye.y + (Math.random() * 10 - 5);
        let rightEyeX = baseRightEye.x + (Math.random() * 10 - 5);
        let rightEyeY = baseRightEye.y + (Math.random() * 10 - 5);
    
        let leftEyeOuter = document.createElementNS(svgNS, "circle");
        leftEyeOuter.setAttribute("cx", leftEyeX);
        leftEyeOuter.setAttribute("cy", leftEyeY);
        leftEyeOuter.setAttribute("r", "4");
        leftEyeOuter.setAttribute("fill", "white");
    
        let leftEyeInner = document.createElementNS(svgNS, "circle");
        leftEyeInner.setAttribute("cx", leftEyeX);
        leftEyeInner.setAttribute("cy", leftEyeY);
        leftEyeInner.setAttribute("r", "2");
        leftEyeInner.setAttribute("fill", "black");
    
        let rightEyeOuter = document.createElementNS(svgNS, "circle");
        rightEyeOuter.setAttribute("cx", rightEyeX);
        rightEyeOuter.setAttribute("cy", rightEyeY);
        rightEyeOuter.setAttribute("r", "4");
        rightEyeOuter.setAttribute("fill", "white");
    
        let rightEyeInner = document.createElementNS(svgNS, "circle");
        rightEyeInner.setAttribute("cx", rightEyeX);
        rightEyeInner.setAttribute("cy", rightEyeY);
        rightEyeInner.setAttribute("r", "2");
        rightEyeInner.setAttribute("fill", "black");
    
        // Append eyes so they appear on top of the shape
        svg.appendChild(leftEyeOuter);
        svg.appendChild(leftEyeInner);
        svg.appendChild(rightEyeOuter);
        svg.appendChild(rightEyeInner);
    }

    // get random string for nft id and add id to svg before pushing to stack
    let nftID = Math.random().toString(36).substring(7);
    svg.setAttribute("id", nftID);
    let nftValue = getNftValue();
    nftStack.append(svg);
    insertSorted(nfts_ordered_by_true_value, { key: nftValue, value: nftID});
}

function makeNFT() {
    let shapeType = ["square", "parallelogram", "triangle", "oval"][Math.floor(Math.random() * 4)];
    let color = `hsl(${Math.random() * 360}, ${nft_vibrancy}%, 50%)`;
  
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.classList.add("nft-svg");    
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");
  
    let shape;
    
    if (shapeType === "square") {
      // Create a square (using a <rect>) then apply a random rotation
      shape = document.createElementNS(svgNS, "rect");
      shape.setAttribute("x", "10");
      shape.setAttribute("y", "10");
      shape.setAttribute("width", "80");
      shape.setAttribute("height", "80");
      
      // Random rotation between -45 and 45 degrees about the center (50,50)
      let angle = Math.random() * 90 - 45;
      shape.setAttribute("transform", `rotate(${angle},50,50)`);
      
    } else if (shapeType === "parallelogram") {
      // Build a parallelogram as a polygon.
      // Define the top edge as a straight line from (10,10) to (90,10).
      // For the bottom edge, shift both points by the same random offset.
      let offset = Math.floor(Math.random() * 41) - 20; // random offset in [-20, 20]
      let points = `10,10 90,10 ${90 + offset},90 ${10 + offset},90`;
      shape = document.createElementNS(svgNS, "polygon");
      shape.setAttribute("points", points);
    } else if (shapeType === "triangle") {
      // Create a triangle as a polygon.
      // Start with a base triangle: (50,10), (10,90), (90,90)
      // Then randomly shift the bottom corners a little.
      let shiftLeft = Math.floor(Math.random() * 21) - 10;  // shift in [-10, 10]
      let shiftRight = Math.floor(Math.random() * 21) - 10;
      let points = `50,10 ${10 + shiftLeft},90 ${90 + shiftRight},90`;
      shape = document.createElementNS(svgNS, "polygon");
      shape.setAttribute("points", points);
    } else if (shapeType === "oval") {
        let rx = Math.random() * 22 + 26;
        let ry = Math.random() * 22 + 26;
        shape = document.createElementNS(svgNS, "ellipse");
        shape.setAttribute("cx", "50");
        shape.setAttribute("cy", "50");
        shape.setAttribute("rx", rx);
        shape.setAttribute("ry", ry);
    }
    shape.setAttribute("fill", color);
    svg.appendChild(shape);

    if (nft_eyes) {
        // Base positions for the left and right eyes
        let baseLeftEye = { x: 43, y: 35 };
        let baseRightEye = { x: 57, y: 35 };
    
        // Add slight random offsets to the eye positions (range: ±5 pixels)
        let leftEyeX = baseLeftEye.x + (Math.random() * 10 - 5);
        let leftEyeY = baseLeftEye.y + (Math.random() * 10 - 5);
        let rightEyeX = baseRightEye.x + (Math.random() * 10 - 5);
        let rightEyeY = baseRightEye.y + (Math.random() * 10 - 5);
    
        let leftEyeOuter = document.createElementNS(svgNS, "circle");
        leftEyeOuter.setAttribute("cx", leftEyeX);
        leftEyeOuter.setAttribute("cy", leftEyeY);
        leftEyeOuter.setAttribute("r", "4");
        leftEyeOuter.setAttribute("fill", "white");
    
        let leftEyeInner = document.createElementNS(svgNS, "circle");
        leftEyeInner.setAttribute("cx", leftEyeX);
        leftEyeInner.setAttribute("cy", leftEyeY);
        leftEyeInner.setAttribute("r", "2");
        leftEyeInner.setAttribute("fill", "black");
    
        let rightEyeOuter = document.createElementNS(svgNS, "circle");
        rightEyeOuter.setAttribute("cx", rightEyeX);
        rightEyeOuter.setAttribute("cy", rightEyeY);
        rightEyeOuter.setAttribute("r", "4");
        rightEyeOuter.setAttribute("fill", "white");
    
        let rightEyeInner = document.createElementNS(svgNS, "circle");
        rightEyeInner.setAttribute("cx", rightEyeX);
        rightEyeInner.setAttribute("cy", rightEyeY);
        rightEyeInner.setAttribute("r", "2");
        rightEyeInner.setAttribute("fill", "black");
    
        // Append eyes so they appear on top of the shape
        svg.appendChild(leftEyeOuter);
        svg.appendChild(leftEyeInner);
        svg.appendChild(rightEyeOuter);
        svg.appendChild(rightEyeInner);
    }

    // get random string for nft id and add id to svg before pushing to stack
    let nftID = Math.random().toString(36).substring(7);
    svg.setAttribute("id", nftID);
    let nftValue = getNftValue();
    nftStack.append(svg);
    insertSorted(nfts_ordered_by_true_value, { key: nftValue, value: nftID});
}

mintNFT.click(function() {
    makeNFTRoundness();
});

function updateNftPricePerInput() {
    let rangeValue = parseFloat(nftPriceRange.val());
    let new_price = minNFTPrice * Math.pow((maxNFTPrice / minNFTPrice), (rangeValue - 1) / 99);
    if (new_price > 10.0) {
        new_price = roundFloat(new_price, 0);
    } else if (new_price > 5.0) {
        new_price = roundFloat(new_price, 1);
    } else {
        new_price = roundFloat(new_price, 2);
    }
    nftPriceLabel.text(`$${new_price}`);
    nft_price = new_price;
}

nftPriceRange.on('input', function () {
    updateNftPricePerInput();
});

nftVibrancyRange.on('input', function () {
    let vibrancy = $(this).val();
    nft_vibrancy = vibrancy;
});

// ROBINHOOD
makeRobBtn.click(function() {
    refreshRobinhoodInterval = setInterval(refreshRob, refreshRobTickSpeed);
    robinhoodPanel.show();
    makeRobBtn.hide();
    makeStockIndicatorBtn.show();    
});

createXBtn.click(function() {
    twitterOptionFieldRegular.show();
    twitterOptionFieldEngagement.show();
    // $("#twitterRadioRegular").prop("checked", true);    
    socialsPanel.show();
    createXBtn.hide();
});

function endWork() {
    clearInterval(refreshWorkInterval);
    refreshWorkInterval = null;
    workPanel.hide();
    quitWork.hide();
    if (!nftPanel.is(':visible')) makeAccountNFT.show();
}

function restartWork() {
    restartWorkBtn.hide();
    emptyEmailIndices = new Set(Array.from({ length: 33 }, (_, i) => i));
    unrespondedEmailIndices = new Set();        
    setProgressPercent();
    $(".workItem").html("");
    $(".workWarning").hide();
    refreshWorkInterval = setInterval(refreshWork, workInterval);
    workPanel.show();
    quitWork.show();

}

quitWork.click(function() {
    endWork();
});

restartWorkBtn.click(function() {
    restartWork();
});


function shitNameUsed(s) {
    for (const [key, value] of Object.entries(shitCoins)) {
        if (value.name === s) {
            return true;
        }
    }    
    return false;
}

function getUniqueShitName() {
    var shitName = getRandFromArr(shitNameArr);
    while (shitNameUsed(shitName)) {
        shitName = getRandFromArr(shitNameArr);        
    }
    return shitName;
}

function addShit() {
    let value = roundFloat(Math.random() * 5, 2);
    let shitName = getUniqueShitName();
    let newID = Math.random().toString(36).substring(8);
    let quantity = 0;
    let total_buy_amt = (value * default_shit_buy_quantity) / 100;
    if (total_buy_amt < bank_worth) {
        quantity = default_shit_buy_quantity;
    }
    bank_worth -= total_buy_amt;
    shitCoins[newID] = {
        goingUp: true,
        price: value,
        name: shitName,
        chanceToDrop: 0.99955,
        coinUniqueBonus: 0.1,
        boost: 0.0,
        quantity: quantity
    }
    // Create the new div element
    var formattedValue = formatShitValue(value * quantity);
    var newDiv = $(`<div class="coin-container" id="shitContainer_${newID}"><span class="coinValuation" id="shitValuation_${newID}">\$${formattedValue}</span><div tabindex="0" class="btn coinBtn" id="buyShit_${newID}">${shitName}</div></div>`);
    shitHolder.append(newDiv);
    shitCache.buyBtns[newID] = $(`#buyShit_${newID}`);
    shitCache.containers[newID] = $(`#shitContainer_${newID}`);
    shitCache.valuations[newID] = $(`#shitValuation_${newID}`);

    setCash();
}

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return getRandFromArr(keys);
}

function getTopValueKey(obj) {
    const keys = Object.keys(obj);
    var topValue = 0.0;
    var topKey = null;
    for (let i = 0; i < keys.length; i++) {
        let currValue = obj[keys[i]].price * obj[keys[i]].quantity;
        if (currValue > topValue) {
            topValue = currValue;
            topKey = keys[i];
        }
    }
    if (!topKey) {
        topKey = getRandFromArr(keys);
    }
    return topKey;
}

function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  }

function removeShit(shitID) {
    shitCache.containers[shitID].remove();

    delete shitCoins[shitID];

    delete shitCache.buyBtns[shitID];
    delete shitCache.containers[shitID];
    delete shitCache.valuations[shitID];

    if (isEmpty(shitCoins)) {
        addShit();
    }
}

function boostCoin(shitID, boosterPopularity) {
    num_boosts_used++;
    shitCoins[shitID].boost += boosterPopularity*boosterPopularity;
    shitCoins[shitID].chanceToDrop -= 0.00004;
}

function boostMyCoin(boosterPopularity) {
    num_boosts_used++;
    myShitCoin.boost += boosterPopularity*boosterPopularity;
    myShitCoin.chanceToDrop -= 0.00005;
}

function sellCoin(id_str) {
    if (shitCoins[id_str].price <= 0) {
        return;
    }
    var sell_payout = (shitCoins[id_str].quantity * shitCoins[id_str].price) / 100;
    bank_worth += sell_payout;
    setCash();
    if ((sell_payout > 500000) && !politicalLegalSavesLawsuit()) {
        makeLawsuit();
    }
    shitCoins[id_str].chanceToDrop -= 0.00005;
    shitCoins[id_str].quantity = 0;
    paintShit(id_str, 0, 0);
}

function sellMyCoin() {
    var sell_payout = (myShitCoin.quantity * myShitCoin.price) / 100;
    bank_worth += sell_payout;
    setCash();
    if ((sell_payout > 500000) && !politicalLegalSavesLawsuit()) {
        makeLawsuit();
    }
    console.log("todo lower price when u sell ur own coin");
    myShitCoin.quantity = 0;
    paintShit("MINE", 0, 0);
}

$(document).on('click', '.coinValuation', function () {
    let full_id_str = $(this).attr("id");
    if (full_id_str === MY_SHIT_VALUE_ID) {
        sellMyCoin();
    } else {
        sellCoin(full_id_str.slice(14));        
    }
});

function buyCoin(shitID, quantity) {
    let transactionTotal = (quantity * shitCoins[shitID].price) / 100;
    if (transactionTotal > bank_worth) {
        return;
    }
    bank_worth -= transactionTotal;
    lifetimeCoinworldBuys += transactionTotal;
    if ((!buyLimit1Used) && lifetimeCoinworldBuys > (UNLOCK_LIFETIME_I_BUY/2)) {
        coinworldBuyLimit1.show();
        if ((!buyLimit1Used) && lifetimeCoinworldBuys > UNLOCK_LIFETIME_I_BUY) {
            coinworldBuyLimit1.attr("disabled", null);
            buyLimit1Used = true;
        }
    } else if ((!buyLimit2Used) && lifetimeCoinworldBuys > (UNLOCK_LIFETIME_II_BUY/2)) {
        coinworldBuyLimit2.show();
        if ((!buyLimit2Used) && lifetimeCoinworldBuys > UNLOCK_LIFETIME_II_BUY) {
            coinworldBuyLimit2.attr("disabled", null);
            buyLimit2Used = true;
        }
    } else if ((!buyLimit3Used) && lifetimeCoinworldBuys > (UNLOCK_LIFETIME_III_BUY/2)) {
        coinworldBuyLimit3.show();
        if ((!buyLimit3Used) && lifetimeCoinworldBuys > UNLOCK_LIFETIME_III_BUY) {
            coinworldBuyLimit3.attr("disabled", null);
            buyLimit3Used = true;
        }
    }

    shitCoins[shitID].quantity += quantity;
    setCash();

    paintShit(shitID, shitCoins[shitID].price, shitCoins[shitID].quantity);
}

function buyMyCoin() {
    myShitCoin.quantity += coinworld_buy_amt;
    paintShit("MINE", myShitCoin.price, myShitCoin.quantity);
}

$(document).on('click', '.coinBtn', function () {
    let full_id = $(this).attr("id");
    if (full_id === MY_SHIT_BUY_ID) {
        buyMyCoin();
    } else {
        let id_str = full_id.slice(8);
        buyCoin(id_str, coinworld_buy_amt);
    }
});


function paintShit(shitID, price, quantity) {
    shitCache.valuations[shitID].html(`\$${formatShitValue(price*quantity)}`);
}


function refreshShit(shitID, shitDict) {
    // Get the coin's current state from our global object.
    var goingUp = shitDict.goingUp;
    var coinUniqueBonus = shitDict.coinUniqueBonus;

    // Flip the coin's state with very low probabilities.
    var r = Math.random();
    if (goingUp && r > shitDict.chanceToDrop) {   // When going up, small chance to flip down
        goingUp = false;
    } else if (!goingUp && r < 0.0003) {  // When falling, small chance to flip up
        goingUp = true;
    }

    var newPrice;
    if (goingUp) {
        var growthRate;
        growthRate = 0.0002 + 0.0005 * coinUniqueBonus;
        newPrice = ((shitDict.price * 1000 * (1 + growthRate)) / 1000) + shitDict.boost;
    } else {
        var declineRate = 0.018 + 0.1 * coinUniqueBonus;
        newPrice = shitDict.price * (1 - declineRate);
    }
    if ( (0.50 < r) && (r < 0.52)) {
        newPrice = shitDict.price*2 - newPrice;
    }

    // random boost from someone else
    if ( (0.30 < r) && (r < 0.3015)) {
        boostCoin(shitID, coinUniqueBonus+0.5);
    }

    newPrice *= crypto_market_popularity;

    // If the new price is below our floor, remove the coin.
    if (newPrice < 0.01) {
        removeShit(shitID);
    } else {
        shitCoins[shitID].goingUp = goingUp;
        shitCoins[shitID].price = newPrice;
        paintShit(shitID, newPrice, shitDict.quantity);

        if (shitDict.boost > 0.1) {
            shitDict.boost -= 0.1;
        } else {
            shitDict.boost = 0.0;
        }
    }
}

function refreshMyShit() {
    // Get the coin's current state from our global object.
    var goingUp = myShitCoin.goingUp;
    var coinUniqueBonus = popularity / 100;

    // Flip the coin's state with very low probabilities.
    var r = Math.random();
    if (goingUp && r > myShitCoin.chanceToDrop) {
        goingUp = false;
    } else if (!goingUp && r < 0.0003) {
        goingUp = true;
    }

    var newPrice;
    if (goingUp) {
        var growthRate;
        growthRate = 0.0002 + 0.0005 * coinUniqueBonus;
        newPrice = ((myShitCoin.price * 1000 * (1 + growthRate)) / 1000) + myShitCoin.boost;
    } else {
        var declineRate = 0.018 + 0.1 * coinUniqueBonus;
        newPrice = myShitCoin.price * (1 - declineRate);
    }
    if ( (0.50 < r) && (r < 0.52)) {
        newPrice = myShitCoin.price*2 - newPrice;
    }

    newPrice *= crypto_market_popularity;    
    if (newPrice < 0.01) {
        newPrice = 0.01;
        myShitCoin.chanceToDrop = 0.99954,
        myShitCoin.boost = 0.0;
        my_shitcoin_crashes++;
        myShitCoin.goingUp = true;
    } else {
        myShitCoin.goingUp = goingUp;
        myShitCoin.price = newPrice;
        paintShit("MINE", newPrice, myShitCoin.quantity);

        if (myShitCoin.boost > 0.1) {
            myShitCoin.boost -= 0.1;
        } else {
            myShitCoin.boost = 0.0;
        }
    }
}

coinworldBuyLimit1.click(function() {
    coinworld_buy_amt = 1000;
    coinworldBuyLimit1.hide();
    makeShitcoin.show();
});

coinworldBuyLimit2.click(function() {
    coinworld_buy_amt = 10000;
    coinworldBuyLimit2.hide();
});

coinworldBuyLimit3.click(function() {
    coinworld_buy_amt = 100000;
    coinworldBuyLimit3.hide();
});

function refreshCoinPanel() {
    if (myShitCreated) {
        refreshMyShit();
    }
    for (const [key, value] of Object.entries(shitCoins)) {
        refreshShit(key, value);
        if (key in shitCoins) {
            const valueToClick = (coinworld_buy_amt * shitCoins[key].price) / 100;
            enable_disable_btn_against_cash(shitCache.buyBtns[key], valueToClick);
        }
    }


    // coins_held_div.html(`${coins_held.toLocaleString()}`);
    // if (coins_value_div > 1000) {
        // coins_value_div.html(`\$${coin_value.toLocaleString()}`);
    // } else {
        // coins_value_div.html(`\$${coin_value}`);
    // }

    // const y = Math.random() * 100 + 25; // Random value within bounds
    // points.push(`${x},${y}`);
    // if (points.length > maxPoints) {
    //     points.shift();
    //     x = 0;
    //     points = [];
        
    // }
    // path.setAttribute("d", "M" + points.join(" "));
    // x = (x + 1) % 300; // Wrap around for smooth motion

}

function makeMyShitcoin() {
    shitCache.valuations["MINE"] = $(`#shitValuation_MINE`);
    shitCache.buyBtns["MINE"] = $(`#buyShit_MINE`);

    coins_held = 10000;
    coin_value = .00003

    coins_circulating_div.show();
    coins_held_div.show();
    coins_value_div.show();
    $('.content-stat-div').css("display", "flex");
    myShit.show();

    makeShitcoin.hide();
    refreshCoinPanel();

    bank_worth -= 100.00;
    myShitCreated = true;

    twitterOptionFieldPumpMy.show();
    twitterOptionFieldRegular.hide();

    setCash();    
}

makeShitcoin.click(function() {
    makeMyShitcoin();
});

buyGME.click(function() {
    // bank_worth += 3000000; // ah cool cheat
    // setCash(); // ah cool cheat

    if (bank_worth < gme_valuation) {
        return;
    }
    bank_worth -= gme_valuation;
    gme_holdings += 1;

    setCash();
    setRob();
});

buyTSLA.click(function() {
    if (!quit_btn_shown) {
        quit_btn_shown = true;
        if (workPanel.is(":visible")) {
            quitWork.show();
        }
    }
    if (bank_worth < tsla_valuation) {
        return;
    }
    bank_worth -= tsla_valuation;
    tsla_holdings += 1;

    setCash();
    setRob();
});

buyNVDA.click(function() {
    if (bank_worth < nvda_valuation) {
        return;
    }
    bank_worth -= nvda_valuation;
    nvda_holdings += 1;

    setCash();
    setRob();
});

robinHoodGME.click(function() {
    robinHoodGME.html("$0.00");
    var totalValue = gme_holdings * gme_valuation;
    bank_worth += totalValue;

    setCash();
    gme_holdings = 0.00;
});

robinHoodTSLA.click(function() {
    robinHoodTSLA.html("$0.00");
    var totalValue = tsla_holdings * tsla_valuation;
    bank_worth += totalValue;
    setCash();
    tsla_holdings = 0.00;
});

robinHoodNVDA.click(function() {
    robinHoodNVDA.html("$0.00");
    var totalValue = nvda_holdings * nvda_valuation;
    bank_worth += totalValue;
    setCash();
    nvda_holdings = 0.00;
});

dontCancelRob.click(function() {
    cancelRob.css("font-size", "11px");    
    cancelRob.html("Account settings");
    dontCancelRob.hide();
    if ($(this).html() == "Free money") {
        bank_worth += 100;
        setCash();
    }    
});

cancelRob.click(function() {
    if (timeToCancelRob) {
        robinhoodPanel.hide();
        return;
    }
    if ($(this).html() == "Account settings") {
        cancelRob.html("Cancel account");
        dontCancelRob.html("(Exit)");
        dontCancelRob.show();
    } else if ($(this).html() == "Cancel account") {
        cancelRob.html("Confirm")
        dontCancelRob.html("Don't cancel");
    } else if ($(this).html() == "Confirm") {
        cancelRob.html("Confirm cancel")
        dontCancelRob.html("Free trial");
    } else if ($(this).html() == "Confirm cancel") {
        cancelRob.html("Confirmation")
        cancelRob.css("font-size", "6px");
        dontCancelRob.html("Pause account");
    } else if ($(this).html() == "Confirmation") {
        cancelRob.html("Cancel now")
        cancelRob.css("font-size", "11px");
        dontCancelRob.html("Free money");
    } else if ($(this).html() == "Cancel now") {
        cancelRob.html("SERVER ERROR, TRY LATER")
        dontCancelRob.hide();
    } else if ($(this).html() == "SERVER ERROR, TRY LATER") {
        cancelRob.html("Account settings")
    }

});


plusLawyerBtn.click(function() {
    if (numLawyers < MAX_LAWYERS) {
        numLawyers++;
        lawyerCountSpan.html(numLawyers);
        minusLawyerBtn.attr("disabled", null);
    }
    if (numLawyers === MAX_LAWYERS) {
        plusLawyerBtn.attr("disabled", "disabled");
    } else {
        plusLawyerBtn.attr("disabled", null);
    }
});

minusLawyerBtn.click(function() {
    if (numLawyers > 0) {
        numLawyers--;
        lawyerCountSpan.html(numLawyers);
        plusLawyerBtn.attr("disabled", null);        
    }
    if (numLawyers === 0) {
        minusLawyerBtn.attr("disabled", "disabled");
    } else {
        minusLawyerBtn.attr("disabled", null);
    }

});

function setNetWorth() {
    var my_coin_value = coin_value * coins_held;
    var calculated_worth = (bank_worth + my_coin_value).toFixed(2);
    netWorth.html(`Net worth: \$${calculated_worth}`);
}

function formatNumber(num, decimalPlaces = 2) {
    return Number(num).toLocaleString('en-US', { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
}

function formatShitValue(num) {
    if (num < 100) {
        return Number(num/100).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    } else {
        return formatNumber(num/100);
    }
}

function formatToInt(num) {
    return Number(num).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function enable_disable_btn_against_cash(btn, valueToClick) {
    if (valueToClick > bank_worth) {
        if (!btn.attr("disabled")) btn.attr("disabled", "disabled");
    } else {
        if (btn.attr("disabled")) btn.attr("disabled", null);
    }
}

prepBuyGold.click(function(){
    bank_worth -= 5000;
    prepAssetsHolder.append(
        '<object data="img/prep_gold.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuySecurity.click(function(){
    bank_worth -= 15000;
    prepAssetsHolder.append(
        '<object data="img/prep_security.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyLong.click(function(){
    bank_worth -= 23000;
    prepAssetsHolder.append(
        '<object data="img/prep_longevity.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyArt.click(function(){
    bank_worth -= 200000;
    prepAssetsHolder.append(
        '<object data="img/prep_art.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyBunker.click(function(){
    bank_worth -= 400000;
    prepAssetsHolder.append(
        '<object data="img/prep_bunker.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyRanch.click(function(){
    bank_worth -= 2000000;
    prepAssetsHolder.append(
        '<object data="img/prep_ranch.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyPlane.click(function(){
    bank_worth -= 20000000;
    prepAssetsHolder.append(
        '<object data="img/prep_plane.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyCompound1.click(function(){
    bank_worth -= 30000000;
    prepAssetsHolder.append(
        '<object data="img/prep_malibu.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyYacht.click(function(){
    bank_worth -= 75000000;
    prepAssetsHolder.append(
        '<object data="img/prep_yacht.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

prepBuyCompound2.click(function(){
    bank_worth -= 280000000;
    prepAssetsHolder.append(
        '<object data="img/prep_nz_2.svg" class="prepIcon" type="image/svg+xml"></object>'
    );
    setCash();
});

function enable_disable_prep_stuff() {
    enable_disable_btn_against_cash(prepBuyGold, 5000);
    enable_disable_btn_against_cash(prepBuySecurity, 15000);
    enable_disable_btn_against_cash(prepBuyLong, 23000);
    enable_disable_btn_against_cash(prepBuyArt, 200000);
    enable_disable_btn_against_cash(prepBuyBunker, 400000);
    enable_disable_btn_against_cash(prepBuyRanch, 2000000);
    enable_disable_btn_against_cash(prepBuyPlane, 20000000);
    enable_disable_btn_against_cash(prepBuyCompound1, 30000000);
    enable_disable_btn_against_cash(prepBuyYacht, 75000000);
    enable_disable_btn_against_cash(prepBuyCompound2, 280000000);
}

function enable_disable_btns_against_cash() {
    if (!timeToCancelRob) {
        enable_disable_btn_against_cash(buyGME, gme_valuation);
        enable_disable_btn_against_cash(buyTSLA, tsla_valuation);
        enable_disable_btn_against_cash(buyNVDA, nvda_valuation);
    }

    if (alreadyGotReal) {
        enable_disable_prep_stuff();
    }

    // iterate over shitCoins and enabledisable based on current buy amt
    for (const [key, value] of Object.entries(shitCoins)) {
        const valueToClick = (value.quantity * value.price) / 100;
        enable_disable_btn_against_cash(shitCache.buyBtns[key], valueToClick);
    }

    // iterate over actionBtns and enable/disable based on their cost
    projectPriceTuples.forEach(projectPriceTuple => {
        enable_disable_btn_against_cash(projectPriceTuple[1], projectPriceTuple[0]);
    });    

}

function setCash() {
    lifetimeMaxCash = Math.max(bank_worth, lifetimeMaxCash);
    let bank_str = formatNumber(bank_worth);
    enable_disable_btns_against_cash();
    cash.html(`Cash: \$${bank_str}`);
}

function refreshRob() {
    const percent_today = getRandomNumber(.01, .05);
    stockIndicatorDiv.removeClass("upMarket downMarket");

    var market_direction = 1;
    if (!rob_going_up) {
        market_direction = -1;
    }
    var gme_diff_today = market_direction * (gme_valuation * percent_today);
    var tsla_diff_today = market_direction * (tsla_valuation * percent_today);
    var nvda_diff_today = market_direction * (nvda_valuation * percent_today);

    if (Math.random() < 0.25) {
        gme_valuation -= gme_diff_today;
        gme_valuation = Math.max(gme_valuation, 0.1);
    } else {
        gme_valuation += gme_diff_today;
    }
    if (Math.random() < 0.35) {
        nvda_valuation -= nvda_diff_today;
        nvda_valuation = Math.max(nvda_valuation, 0.1);
    } else {
        nvda_valuation += nvda_diff_today;
    }
    if (Math.random() < 0.10) {
        tsla_valuation -= tsla_diff_today;
        tsla_valuation = Math.max(tsla_valuation, 0.1);
    } else {
        tsla_valuation += tsla_diff_today;
    }

    if (Math.random() > 0.95) {
        rob_going_up = !rob_going_up;
        if (!rob_going_up && Math.random() > 0.89) { // hacky way to make it go u more than down
            rob_going_up = true;
        } else {
            if (rob_going_up){
                stockIndicatorDiv.html("Market: ^");
                stockIndicatorDiv.addClass("upMarket");
            } else {
                stockIndicatorDiv.html("Market: v");
                stockIndicatorDiv.addClass("downMarket");
            }
        }
    }
    setRob();
    enable_disable_btn_against_cash(buyGME, gme_valuation);
    enable_disable_btn_against_cash(buyTSLA, tsla_valuation);
    enable_disable_btn_against_cash(buyNVDA, nvda_valuation);    
}

function setRob() {
    gme_value = formatNumber(gme_holdings * gme_valuation);
    robinHoodGME.html(`\$${gme_value}`);
    tsla_value = formatNumber(tsla_holdings * tsla_valuation);
    robinHoodTSLA.html(`\$${tsla_value}`);
    nvda_value = formatNumber(nvda_holdings * nvda_valuation);
    robinHoodNVDA.html(`\$${nvda_value}`);
}

function popRandomFromSet(set) {
    if (set.size === 0) {
        return undefined;
    }
    const array = Array.from(set);
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    set.delete(randomElement);
    return randomElement;
  }


function setProgressPercent() {
    var percent_filled = unrespondedEmailIndices.size * 3;
    if (percent_filled > 45) {
        lowWarning.show();
    }
    if (percent_filled > 65) {
        midWarning.show();
    }
    if (percent_filled > 75) {
        highWarning.show();
    }
    workProgress.css("width", `${percent_filled}%`);
}

function deleteSuit(suitID) {
    delete lawsuitsObj[suitID];
    $(`#lawsuit_${suitID}`).remove();
}

function paintSuit(suitID) {
    const amtRemaining = lawsuitsObj[suitID].amtRemaining;
    $(`#lawsuitAmt_${suitID}`).html(`\$${formatNumber(amtRemaining, 0)}`);
    $(`#lawsuit_${suitID}`).removeClass("freshLawsuit");
}

function legalRefresh() {
    if (numLawyers === 0) {
        for (const [suitID, suitObj] of Object.entries(lawsuitsObj)) {
            lawsuitsObj[suitID].amtRemaining += Math.min(1000, parseInt(lawsuitsObj[suitID].amtRemaining * .01));
            paintSuit(suitID);
        }
        return;
    }
    var legalCost = numLawyers * LAWYER_RATE;
    bank_worth -= legalCost;

    if (bank_worth < legalCost) {
        numLawyers = Math.max(parseInt(bank_worth / LAWYER_RATE), 0);
        lawyerCountSpan.html(numLawyers);
        if (numLawyers === 0) {
            minusLawyerBtn.attr("disabled", "disabled");            
        }
    }

    var lawyersRemaining = numLawyers;
    for (const [suitID, suitObj] of Object.entries(lawsuitsObj)) {
        var paymentAmt = suitObj.originalTotal/20;

        // our lawyers help get payments down
        var lawyerDiscountedAmt = paymentAmt;
        if (lawyersRemaining > 2) {
            lawyerDiscountedAmt /= 3;
            lawyersRemaining -= 3;
        } else if (lawyersRemaining > 0) {
            lawyerDiscountedAmt /= lawyersRemaining;
            lawyersRemaining = 0;
        }
        if (paymentAmt >= bank_worth) {
            if (suitObj.amtRemaining > bank_worth) {
                lawsuitsObj[suitID].amtRemaining -= bank_worth;
                paintSuit(suitID);
                bank_worth = 0;
            } else {
                bank_worth -= suitObj.amtRemaining;
                deleteSuit(suitID);
            }
        } else { // have enough to pay our tenth
            bank_worth -= lawyerDiscountedAmt;
            lawsuitsObj[suitID].amtRemaining -= parseInt(paymentAmt);
            paintSuit(suitID);
            if (lawsuitsObj[suitID].amtRemaining <= 1) {
                deleteSuit(suitID);                
            }
        }
    }
    setCash();
}

// work
function refreshWork() {
    newIndex = popRandomFromSet(emptyEmailIndices);
    if (newIndex !== undefined) {
        $(`#workItem${newIndex}`).html("email");
        bank_worth += 10;
        unrespondedEmailIndices.add(newIndex);
        setProgressPercent();
    } else {
        endWork();
    }
    setCash();
}

$(".workItem").click(
    function () {
        if ($(this).html() === "respond") {
            const currId = $(this).attr('id');
            const currIndex = parseInt(currId.substring(8));
            emptyEmailIndices.add(currIndex);
            unrespondedEmailIndices.delete(currIndex);
            $(this).html("");
            setProgressPercent();
        }
    }
);

$(".workItem").hover(
    function () {
        if ($(this).html() === "email") {
            $(this).html("respond");
        }
    },
    function () {
        if ($(this).html() === "respond") {
            $(this).html("email");
        }
    }
);

document.querySelectorAll('table.interactive').forEach(element => {
    element.addEventListener('click', (event) => {
      const highlightedClass = 'highlighted';
      const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
      const newlySelectedRow = event.composedPath().find(isRow);
      const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
      if(previouslySelectedRow){
        previouslySelectedRow.classList.toggle(highlightedClass);
      }

      if (newlySelectedRow) {
        newlySelectedRow.classList.toggle(highlightedClass);
      }
    })
  });


function paintNextTweet(tweetStr, likes) {
    const newRow = `<tr><td>${formatToInt(likes)}</td><td>${tweetStr}</td></tr>`;
    twitterTableBody.prepend(newRow);
    const tableLength = $("#twitterTL tbody tr:last").index();
    if (tableLength > max_tweets) {
        $("#twitterTL tbody tr:last").remove();
    }
    total_tweets++;
    if (!rob_btn_shown && total_tweets > 3) {
        makeRobBtn.show();
        rob_btn_shown = true;
    }
    if (total_tweets == 10) {
        learnEngagementBtn.show();
    }
    else if (total_tweets == 30) {
        learnEngagementBtn.attr("disabled", null);
    } else if (total_tweets == 75) {
        engagementBotBtn.show();
    }
}

function makeEngagementBotTweet() {
    addTweet("twitterRadioEngagement");
}

function addTweet(tweetType) {
    if (!tweetType) {
        var tweetType = $('input[name="twitter-option"]:checked').attr('id');
    }

    var likes = 0;
    var newTweet;
    if (tweetType === "twitterRadioRegular") {
        // tweet str
        newTweet = getRandFromArr(phase_1_tweets);

        // likes
        popularity += 0.01;
        likes = parseInt(popularity * getRandomNumber(1, 2));
        
    } else if (tweetType === "twitterRadioEngagement") {
        // tweet str
        let celebStr = "";
        for (let i = 0; i < getRandomNumber(0, 2); i++) {
            const randomCeleb = getRandFromArr(most_popular_tweeters);
            celebStr += " " + randomCeleb;
        }
        const randomTweet = getRandFromArr(engagement_tweets);
        newTweet = randomTweet + " " + celebStr;        

        // likes
        let randLikesCoeff = getRandomNumber(1, 80);
        if (Math.random() > 0.992) {
            randLikesCoeff = getRandomNumber(5000, 10000);
        }
        likes = parseInt(popularity * randLikesCoeff);
        if (popularity < popularity_cap) {
            popularity += Math.min(0.35, likes / 3000);
            popularity = roundFloat(popularity, 5);
            if (popularity > 15 && coinWorldPanel.is(':visible')) {
                twitterOptionFieldPumpCoins.show();                
            }
        }
    } else if (tweetType === "twitterRadioPumpCoins") {
        // tweet str
        let celebStr = "";
        for (let i = 0; i < getRandomNumber(0, 2); i++) {
            const randomCeleb = getRandFromArr(most_popular_tweeters);
            celebStr += " " + randomCeleb;
        }
        var shitID = getTopValueKey(shitCoins);
        const randomTweetTemplate = getRandFromArr(pump_tweet_functions);
        const randomTweet = randomTweetTemplate(shitCoins[shitID].name);
        newTweet = randomTweet + " " + celebStr;
        boostCoin(shitID, popularity/35.0);
        mistrust_popularity += 0.5;
        popularity -= 0.5;
        if ((lifetimeMaxCash > BIG_ENOUGH_TO_SUE) && Math.random() > 0.77) {
            makeLawsuit();
        }
        // likes
        let randLikesCoeff = getRandomNumber(1, 9);
        likes = parseInt(popularity * randLikesCoeff);

    } else if (tweetType === "twitterRadioPumpMy") {
        // tweet str
        let celebStr = "";
        for (let i = 0; i < getRandomNumber(0, 2); i++) {
            const randomCeleb = getRandFromArr(most_popular_tweeters);
            celebStr += " " + randomCeleb;
        }
        const randomTweetTemplate = getRandFromArr(pump_tweet_functions);
        const randomTweet = randomTweetTemplate("$SHIT");
        newTweet = randomTweet + " " + celebStr;
        boostMyCoin(popularity/35.0);
        mistrust_popularity += 1.0;
        popularity -= 3.0;
        if ((lifetimeMaxCash > BIG_ENOUGH_TO_SUE) && Math.random() > 0.55) {
            makeLawsuit();
        }

        // likes
        let randLikesCoeff = getRandomNumber(1, 9);
        likes = parseInt(popularity * randLikesCoeff);

    } else if (tweetType === "twitterRadioApologize") {
        newTweet = getRandFromArr(apology_tweets);
        let randLikesCoeff = getRandomNumber(30, 50);
        likes = parseInt(popularity * randLikesCoeff);
        mistrust_popularity -= 0.5;
        mistrust_popularity = Math.min(mistrust_popularity, 0);
    }

    paintNextTweet(newTweet, likes);

}

tweetBtn.click(function() {
    addTweet();
});


function setPopularityProgress() {
    var percent_filled = popularity;
    popularityProgress.css("width", `${percent_filled}%`);
}

function refreshPopularity() {
    if (Math.random() > 0.5) {
        popularity += popularity_fluctuation;
    } else {
        popularity -= popularity_fluctuation;
    }
    if (popularity < 0.1) {
        popularity = 0.1;
    }
    setPopularityProgress();
}

function refreshDebug() {
    popularityDebug.html(`popularity ${popularity.toFixed(2)}`);
    let goingUp = "^"
    if (!crypto_market_going_up) {
        goingUp = "v";
    }
    crypto_market_popularity_debug.html(` ${goingUp} crypto market: ${crypto_market_popularity.toFixed(2)}`);
}

function checkCashTriggers() {
    if (!coinworld_sub && ((lifetimeMaxCash > 3000) || (nfts_sold > 100))) {
        makeCoinworldAccountBtn.show();
    }
    if (!alreadyShowedCeleb2 && (lifetimeMaxCash > (CELEB_2_FEE / 2))) {
        teamUpWithCelebAction2.show();
        alreadyShowedCeleb2 = true;
    }
    if (!alreadyShowedCeleb3 && (lifetimeMaxCash > (CELEB_3_FEE / 2))) {
        teamUpWithCelebAction3.show();
        alreadyShowedCeleb3 = true;
    }
    if (!alreadyShowedCeleb4 && (lifetimeMaxCash > (CELEB_4_FEE / 2))) {
        teamUpWithCelebAction4.show();
        alreadyShowedCeleb4 = true;
    }
    if (!alreadyShowedCeleb5 && (lifetimeMaxCash > (CELEB_5_FEE / 2))) {
        teamUpWithCelebAction5.show();
        alreadyShowedCeleb5 = true;
    }

    if (!alreadyGotPol1 && (lifetimeMaxCash > (POL_1_FEE / 2))) {
        getIntoPol1.show();
        alreadyGotPol1 = true;
    }

    if (!alreadyGotPol2 && (lifetimeMaxCash > (POL_2_FEE / 2))) {
        getIntoPol2.show();
        alreadyGotPol2 = true;
    }

    if (!alreadyGotPol3 && (lifetimeMaxCash > (POL_3_FEE / 2))) {
        getIntoPol3.show();
        alreadyGotPol3 = true;
    }

    if (!alreadyGotPol4 && (lifetimeMaxCash > (POL_4_FEE / 2))) {
        getIntoPol4.show();
        alreadyGotPol4 = true;
    }

    if (!alreadyGotPol5 && (lifetimeMaxCash > (POL_5_FEE / 2))) {
        getIntoPol5.show();
        alreadyGotPol5 = true;
    }

    if (!alreadyGotReal && (lifetimeMaxCash > 10000000)) { // 10 mill, get real
        getRealAction.show();
        alreadyGotReal = true;
    }
}

function globalRefresh() {
    global_ticks++;

    if (global_ticks % 60 === 0) {
        checkCashTriggers();
    }    

    refreshPopularity();
    refreshNFTSales();
    if (coinsShowing) {
        refreshCoinPanel();
        if (Math.random() > 0.998 && Object.keys(shitCoins).length < 4) {
            addShit();
        }
    }

    if (bank_worth <= 50 && !refreshWorkInterval) {
        restartWorkBtn.show();
    }

    if (debug && global_ticks % 30 === 0) { // ~500ms
        refreshDebug();
    }
}

function suspendRobinhood() {
    clearInterval(refreshRobinhoodInterval);
    cancelRob.html("Cancel Account");
    buyGME.attr("disabled", "disabled");
    buyNVDA.attr("disabled", "disabled");
    buyTSLA.attr("disabled", "disabled");
    robSuspensionMessage.show();
    timeToCancelRob = true;
    setTimeout(function() {
        robinhoodPanel.hide();
    }, 60000);
}

function startLegalProblems() {
    legalPanel.show();
    suspendRobinhood();
    legalRefreshInterval = setInterval(legalRefresh, legalRefreshTickSpeed);
    legalProblemsStarted = true;    
}

function clearLawsuits() {
    clearInterval(legalRefreshInterval);
    lawsuitHolder.hide();
}

getRealAction.click(function() {
    alreadyGotReal = true;
    // twitterOptionFieldEngagement.hide(); // TODO: still need popularity when successful...
    getRealAction.hide();
    nftPanel.hide();
    prepPanel.show();
});

function goToLategame() {
    console.log("enter lategame mode, this is for testing");

    // social testing
    socialsPanel.show(); // TODO
    createXBtn.hide();
    twitterOptionFieldPumpCoins.show(); // TODO remove
    twitterOptionFieldEngagement.show();
    $('#twitterRadioEngagement').attr("disabled", null);    

    makeAccountNFT.remove();
    makeRobBtn.remove();
    createXBtn.remove();
    nftRedesignAction.remove();
    engagementBotBtn.remove();
    learnEngagementBtn.remove();

    // coinworld testing
    coinworld_buy_amt = 1000;    
    buyLimit1Used = true;
    makeCoinworldAccountBtn.show();
    makeCoinWorld(); // TODO remove
    addShit(); // TODO remove
    // coinworldBuyLimit1.show(); // TODO remove
    coinworldBuyLimit2.show(); // TODO remove
    // coinworldBuyLimit3.show(); // TODO remove
    makeMyShitcoin();

    refreshRobinhoodInterval = setInterval(refreshRob, refreshRobTickSpeed);
    robinhoodPanel.show();
    makeRobBtn.hide();
    stockIndicatorDiv.show();


    setCash();
    engagementBotInterval = setInterval(makeEngagementBotTweet, 1300);    

    // legal testing
    // bank_worth = 10000000; // TODO remove
    // coinworld_buy_amt = 1000; // TODO remove
    // setCash(); // TODO remove

    // nft testing
    // makeAccountNFT.show(); // TODO remove
    nftPanel.show(); // TODO remove
    nft_eyes = true;
    // nftRedesignAction.show(); // TODO remove

    endWork();
    popularity = 50; // TODO remove
    bank_worth = 30000;
    bank_worth = 15000000000;
    setCash();

}


function setDisplayPrices() {
    getIntoPoliticsAction1.append(`(\$${formatNumber(POL_1_FEE, 0)})`);
    getIntoPoliticsAction2.append(`(\$${formatNumber(POL_2_FEE, 0)})`);
    getIntoPoliticsAction3.append(`(\$${formatNumber(POL_3_FEE, 0)})`);
    getIntoPoliticsAction4.append(`(\$${formatNumber(POL_4_FEE, 0)})`);
    getIntoPoliticsAction5.append(`(\$${formatNumber(POL_5_FEE, 0)})`);

    teamUpWithCelebAction1.append(`(\$${formatNumber(CELEB_1_FEE, 0)})`);
    teamUpWithCelebAction2.append(`(\$${formatNumber(CELEB_2_FEE, 0)})`);
    teamUpWithCelebAction3.append(`(\$${formatNumber(CELEB_3_FEE, 0)})`);
    teamUpWithCelebAction4.append(`(\$${formatNumber(CELEB_4_FEE, 0)})`);
    teamUpWithCelebAction5.append(`(\$${formatNumber(CELEB_5_FEE, 0)})`);
}

function startGame() {
    setCash();
    setRob();
    refreshWork();
    updateNftPricePerInput();

    globalQuickInterval = setInterval(globalRefresh, globalIntervalTickSpeed);
    workPanel.show();
    refreshWorkInterval = setInterval(refreshWork, workInterval);
    createXBtn.show();
    projectsPanel.show();
    setDisplayPrices();

    // ============== TESTING ==============
    // goToLategame();
    
    // bank_worth = 3000000000;
    // setCash();
    // alreadyGotReal = true;
    // enable_disable_btns_against_cash();
    // prepPanel.show();
    // projectsPanel.show();

    // rob testing
    // makeRobBtn.show();

    // social testing
    // twitterOptionFieldRegular.show();
    // twitterOptionFieldEngagement.show();
    // socialsPanel.show(); // TODO
    // twitterOptionFieldPumpCoins.show(); // TODO remove

    // twitterOptionPump.show();
    // prepPanel.show();

    // coinworld testing
    // makeCoinworldAccountBtn.show();
    // makeCoinWorld(); // TODO remove
    // addShit(); // TODO remove
    // popularity = 80; // TODO remove
    // coinworldBuyLimit1.show(); // TODO remove
    // coinworldBuyLimit2.show(); // TODO remove
    // coinworldBuyLimit3.show(); // TODO remove
    // makeShitcoin.show(); // TODO remove

    // legal testing
    // bank_worth = 10000000; // TODO remove
    // coinworld_buy_amt = 1000; // TODO remove
    // setCash(); // TODO remove

    // makeThatShitcoin(); // TODO remove

    // nft testing
    // makeAccountNFT.show(); // TODO remove
    // nftPanel.show(); // TODO remove
    // makeNFTAccount();
    // nftRedesignAction.show(); // TODO remove

    debug = false;
    if (debug) {
        debugContainer.show();
    }
}

function init() {
    colorChange();
    setVh();
    startGame();
}

init();