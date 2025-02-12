window.addEventListener('resize', setVh);
const c_MAX_MOBILE_WIDTH = 500;

var cash = $("#cash");
var netWorth = $("#net-worth");

var makeAccountBtn = $("#makeAccount");
var makeRobBtn = $("#makeRob");
var projectsPanel = $("#projectsPanel");
var workPanel = $("#workPanel");
var quitWork = $("#quitWork");
var createXBtn = $("#createX");
var nftRedesignAction = $("#nftRedesignAction");

// robinhood
var robinhoodPanel = $("#robinhoodPanel");
var robinHoodNVDA = $("#robinHoodNVDA");
var robinHoodTSLA = $("#robinHoodTSLA");
var robinHoodGME = $("#robinHoodGME");
var buyNVDA = $("#buyNVDA");
var buyGME = $("#buyGME");
var buyTSLA = $("#buyTSLA");
var cancelRob = $("#cancelRob");
var dontCancelRob = $("#dontCancelRob");

// work
var lowWarning = $("#lowWarning");
var midWarning = $("#midWarning");
var highWarning = $("#highWarning");

// socials
var socialsPanel = $("#socialsPanel");
var twitterTL = $("#twitterTL");
var tweetBtn = $("#twitterBtn");
var tweetCrazyBtn = $("#tweetCrazyBtn");
var twitterTableBody = $("#twitterTL tbody");

//coinworld
var coinWorldPanel = $("#coinWorldPanel");
var makeShitcoin = $("#makeShitcoin");
var coins_held_div = $("#coins_held_div");
var coins_circulating_div = $("#coins_circulating_div");
var coins_value_div = $("#coins_value_div");
var shitHolder = $("#shitHolder");

// nftland
var makeAccountNFT = $("#makeAccountNFT");
var nftPanel = $("#nftPanel");
var vibrancy_input = $('input[type="range"]');
var mintNFT = $("#mintNFT");
var nftStack = $("#nftStack");
var nftPriceRange = $('#nftPriceRange');
var nftVibrancyRange = $('#nftVibrancyRange');
var nftPriceLabel = $('#nftPriceLabel');

// debu
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

function makeCoinWorld() {
    coinworld_sub = true;
    bank_worth -= 15.00;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
    makeAccountBtn.hide();
    coinWorldPanel.show();
}

makeAccountBtn.click(function() {
    makeCoinWorld();
    makeAccountNFT.show();    
});


nftRedesignAction.click(function() {
    bank_worth -= 500.00;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
    nft_eyes = true;
    nftRedesignAction.hide();
});


function popBestNft(nftId) {
    // pop from front of nfts_ordered_by_true_value
    nfts_ordered_by_true_value = nfts_ordered_by_true_value.filter(nft => nft.value !== nftId);
    // delete from nft holder div
    $(`#${nftId}`).remove();
}

// simulates nft market. you fix the nft price, demand fluctuates
// and may be enough to buy one
function refreshNFTSales() {
    if (nfts_ordered_by_true_value.length === 0) return;
    // best nft
    var bestNft = nfts_ordered_by_true_value[0];
    var nft_demand_calculated = bestNft.key * popularity * crypto_market_popularity * my_nft_boost
    if (decideIfSale(nft_demand_calculated, nft_price)) {
        console.log("sold at: " + nft_price);
        bank_worth += nft_price;
        bank_worth = roundFloat(bank_worth, 2);
        setCash();
        popBestNft(bestNft.value)
    }
}

// NFT Land
makeAccountNFT.click(function() {
    nftPanel.show();
    makeAccountNFT.hide();
    bank_worth -= 150.00;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
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
    if (nft_vibrancy > 90) {
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
    return baseValue;
}

function makeNFT() {
    // Choose a shape type: square, parallelogram, or triangle, or circle
    // let shapeType = ["square", "parallelogram", "triangle"][Math.floor(Math.random() * 3)];
    let shapeType = ["square", "parallelogram", "triangle", "oval"][Math.floor(Math.random() * 4)];
    
    // Use the vibrancy variable (assumed to be 0-100) in the saturation value.
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
    makeNFT();
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
    nftPriceLabel.text(`NFT Price: $${new_price}`);
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
    refreshRobinhoodInterval = setInterval(refreshRob, 2000);    
    robinhoodPanel.show();
    makeRobBtn.hide();
});

createXBtn.click(function() {
    socialsPanel.show();
    createXBtn.hide();
});

function endWork() {
    clearInterval(refreshWorkInterval);
    workPanel.hide();
    quitWork.hide();
    makeAccountBtn.show();
}

quitWork.click(function() {
    endWork();
});



function addShit() {
    // name: make sure it's not currently in use
    let value = roundFloat(Math.random() * 5, 2);
    let shitName = "$SHIT"
    let newID = Math.random().toString(36).substring(8);
    shitCoins[newID] = {
        goingUp: true,
        price: value,
        name: shitName,
        chanceToDrop: 0.99965,
        coinUniqueBonus: Math.random()
    }
    // Create the new div element
    var newDiv = $(`<div class="rob-container" id="shitContainer_${newID}"><span class="coinValuation" id="shitValuation_${newID}">\$${value}</span><button class="coinBtn" id="buyShit_${newID}">${shitName}</button></div></div>`);
    shitHolder.append(newDiv);
}

function removeShit(shitID) {
    delete shitCoins[shitID];
    $(`#shitContainer_${shitID}`).remove();
}

function boostCoin(shitID) {
    console.log(popularity);
    shitCoins[shitID].coinUniqueBonus += (popularity/10.0);
    console.log(shitCoins[shitID].chanceToDrop);
    shitCoins[shitID].chanceToDrop -= 0.0001;
}

$(document).on('click', '.coinValuation', function () {
    let id_str = $(this).attr("id").slice(14);
    console.log(id_str);
    boostCoin(id_str);
});

makeAccountBtn.click(function() {
    makeCoinWorld();
    makeAccountNFT.show();    
});


function refreshShit(shitID, shitDict) {
    // Get the coin's current state from our global object.
    var goingUp = shitDict.goingUp;
    var coinUniqueBonus = shitDict.coinUniqueBonus;

    // Flip the coin's state with very low probabilities.
    var r = Math.random();
    if (goingUp && r > shitDict.chanceToDrop) {   // When going up, small chance to flip down
        console.log("v")
        goingUp = false;
    } else if (!goingUp && r < 0.0003) {  // When falling, small chance to flip up
        console.log("^")
        goingUp = true;
    }

    var newPrice;
    if (goingUp) {
        // Define a growth rate that depends on the current price.
        // When extremely cheap, grow very slowly.
        // Once the price passes a threshold, ramp up the growth rate.
        var growthRate;
        growthRate = 0.0001 + 0.0003 * coinUniqueBonus;
        newPrice = (shitDict.price * 1000 * (1 + growthRate)) / 1000;
    } else {
        // When going down, use a higher decline rate to simulate a fast crash.
        var declineRate = 0.05 + 0.1 * coinUniqueBonus;
        newPrice = shitDict.price * (1 - declineRate);
    }

    // If the new price is below our floor, remove the coin.
    if (newPrice < 0.01) {
        removeShit(shitID);
    } else {
        shitCoins[shitID].goingUp = goingUp;
        shitCoins[shitID].price = newPrice;
        $(`#shitValuation_${shitID}`).html(newPrice.toFixed(2));
    }

}

function refreshShit1(shitID, shitDict) {
    var goingUp = shitCoins[shitID].goingUp;
    var coinUniqueBonus = shitCoins[shitID].coinUniqueBonus;
    var curr_delta = 3*coinUniqueBonus;
    if (!goingUp) {
        curr_delta *= -3;
    }
    var r = Math.random();
    if (goingUp && r > 0.9995) {
        console.log("flip")
        goingUp = false;
    } else if (!goingUp && r < 0.0016) {
        goingUp = true;
        console.log("flip up")
    }

    var newPrice = roundFloat(shitDict.price+curr_delta, 2);
    if (newPrice < 0.01) {
        removeShit(shitID);
    } else {
        shitCoins[shitID].goingUp = goingUp;
        shitCoins[shitID].price = newPrice;
        $(`#shitValuation_${shitID}`).html(newPrice);
    }
}


function refreshCoinPanel() {
    for (const [key, value] of Object.entries(shitCoins)) {
        refreshShit(key, value);
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
    coins_held = 10000;
    coin_value = .00003

    coins_circulating_div.show();
    coins_held_div.show();
    coins_value_div.show();
    $('.content-stat-div').css("display", "flex");


    makeShitcoin.hide();
    refreshCoinPanel();

    bank_worth -= 100.00;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();    
}

makeShitcoin.click(function() {
    makeMyShitcoin();
});

buyGME.click(function() {
    if (bank_worth < gme_valuation) {
        return;
    }
    bank_worth -= gme_valuation;
    gme_holdings += 1;
    bank_worth = roundFloat(bank_worth, 2);
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
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
    setRob();
});

buyNVDA.click(function() {
    if (bank_worth < nvda_valuation) {
        return;
    }
    bank_worth -= nvda_valuation;
    nvda_holdings += 1;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
    setRob();
});

robinHoodGME.click(function() {
    robinHoodGME.html("$0.00");
    var totalValue = gme_holdings * gme_valuation;
    bank_worth += totalValue;
    bank_worth = roundFloat(bank_worth, 2);
    setCash();
    gme_holdings = 0.00;
});

robinHoodTSLA.click(function() {
    robinHoodTSLA.html("$0.00");
    var totalValue = tsla_holdings * tsla_valuation;
    bank_worth += totalValue;
    bank_worth = roundFloat(bank_worth, 2);    
    setCash();
    tsla_holdings = 0.00;
});

robinHoodNVDA.click(function() {
    robinHoodNVDA.html("$0.00");
    var totalValue = nvda_holdings * nvda_valuation;
    bank_worth += totalValue;
    bank_worth = roundFloat(bank_worth, 2);    
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
    if ($(this).html() == "Account settings") {
        cancelRob.html("Cancel account");
        dontCancelRob.html("(Exit)");
        dontCancelRob.show();
    } else if ($(this).html() == "Cancel account") {
        cancelRob.html("Really?")
        dontCancelRob.html("Don't cancel");
    } else if ($(this).html() == "Really?") {
        cancelRob.html("Really really?")
        dontCancelRob.html("Free trial");
    } else if ($(this).html() == "Really really?") {
        cancelRob.html("Yes, cancel.")
        cancelRob.css("font-size", "6px");
        dontCancelRob.html("Pause account");
    } else if ($(this).html() == "Yes, cancel.") {
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

function setNetWorth() {
    var my_coin_value = coin_value * coins_held;
    var calculated_worth = (bank_worth + my_coin_value).toFixed(2);
    netWorth.html(`Net worth: \$${calculated_worth}`);
}

function setCash() {
    // todo disable everything that u don't have enough cash for
    // if (gme_valuation > bank_worth) {
    //     buyGME.prop("disabled", true);
    // } else {
    //     buyGME.prop("disabled", false);        
    // }
    // if (tsla_valuation > bank_worth)  {
    //     buyTSLA.prop("disabled", true);
    // } else {
    //     buyTSLA.prop("disabled", false);        
    // }
    // if (nvda_valuation > bank_worth) {
    //     buyNVDA.prop("disabled", true);
    // } else {
    //     buyNVDA.prop("disabled", false);        
    // }
    cash.html(`Cash: \$${bank_worth}`);
}

function refreshRob() {
    const percent_today = getRandomNumber(.01, .05);
    var market_direction = 1;
    if (!rob_going_up) {
        market_direction = -1;
    }
    var gme_diff_today = market_direction * (gme_valuation * percent_today);
    var tsla_diff_today = market_direction * (tsla_valuation * percent_today);
    var nvda_diff_today = market_direction * (nvda_valuation * percent_today);

    if (getRandomNumber(0, 1) < 0.25) {
        gme_valuation -= gme_diff_today;
    } else {
        gme_valuation += gme_diff_today;
    }
    if (getRandomNumber(0, 1) < 0.35) {
        nvda_valuation -= nvda_diff_today;
    } else {
        nvda_valuation += nvda_diff_today;
    }
    if (getRandomNumber(0, 1) < 0.10) {
        tsla_valuation -= tsla_diff_today;
    } else {
        tsla_valuation += tsla_diff_today;
    }

    if (getRandomNumber(0, 1) > 0.95) {
        rob_going_up = !rob_going_up;
    }
    setRob();
}

function setRob() {
    gme_value = (gme_holdings * gme_valuation).toFixed(2);
    robinHoodGME.html(`\$${gme_value}`);
    tsla_value = (tsla_holdings * tsla_valuation).toFixed(2);
    robinHoodTSLA.html(`\$${tsla_value}`);
    nvda_value = (nvda_holdings * nvda_valuation).toFixed(2);
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
    $("#work-progress").css("width", `${percent_filled}%`);
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

// TWITTER
function makeNewTweet() {
    total_tweets += 1;
    if (!rob_btn_shown && total_tweets > 3) {
        makeRobBtn.show();
        rob_btn_shown = true;
    }
    if (phase === 0) {
        var celebStr = "";
        const randomTweet = getRandFromArr(phase_1_tweets);
        return randomTweet + " " + celebStr;
    } else if (phase === 1) {
        for (let i = 0; i < getRandomNumber(0, 3); i++) {
            const randomCeleb = getRandFromArr(most_popular_tweeters);
            celebStr += " " + randomCeleb;
        }
        const randomTweet = getRandFromArr(phase_1_tweets);
        return randomTweet + " " + celebStr;
    }
}

function addTweet() {
    // push tweet to top of table
    const newTweet = makeNewTweet();
    const likes = parseInt(popularity * getRandomNumber(1, 2));
    if (phase > 0) {
        popularity += likes / 150;
        popularity = roundFloat(popularity, 5);
    }
    const newRow = `<tr><td>${likes}</td><td>${newTweet}</td></tr>`;
    twitterTableBody.prepend(newRow);

    const tableLength = $("#twitterTL tbody tr:last").index();
    if (tableLength > max_tweets) {
        $("#twitterTL tbody tr:last").remove();
    }
}

tweetBtn.click(function() {
    addTweet();
});

function advancePhase() {
    phase += 1;
    if (phase === 1) {
        popularity_fluctuation = 0.1;

    }
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
}

function refreshCryptoPopularity() {
    let rand_today = Math.random();
    const percent_today = rand_today / 100;
    var up_or_down = 1*crypto_up_bonus;
    if (!crypto_market_going_up) {
        up_or_down = -1;
    }
    crypto_market_popularity += up_or_down * (crypto_market_popularity * percent_today);
    if (crypto_market_popularity < 0.1) {
        crypto_market_popularity = 0.1;
    }

    if (crypto_market_going_up && getRandomNumber(0, 1) > 0.995) {
        crypto_market_going_up = false;
    } else if (!crypto_market_going_up && getRandomNumber(0, 1) > 0.9945) {
        crypto_market_going_up = true;
    }
}

function refreshDebug() {
    popularityDebug.html(`popularity ${popularity.toFixed(2)}`);
    let goingUp = "^"
    if (!crypto_market_going_up) {
        goingUp = "v";
    }
    crypto_market_popularity_debug.html(` ${goingUp} crypto market: ${crypto_market_popularity.toFixed(2)}`);
}

function globalRefresh() {
    global_ticks++;

    refreshCryptoPopularity();
    refreshPopularity();
    refreshNFTSales();
    refreshCoinPanel();
    if (debug) {
        refreshDebug();
    }    
}



function startGame() {
    setCash();
    setRob();
    refreshWork();
    updateNftPricePerInput();

    globalQuickInterval = setInterval(globalRefresh, globalIntervalTickSpeed);
    // refreshWorkInterval = setInterval(refreshWork, workInterval); // TODO uncomment
    // createXBtn.show(); // TODO uncomment
    // projectsPanel.show(); // TODO uncomment
    // workPanel.show(); // TODO uncomment

    // rob testing
    // robinhoodPanel.show();

    // social testing
    // socialsPanel.show();

    // coinworld testing
    makeCoinWorld(); // TODO remove
    addShit();
    // makeThatShitcoin(); // TODO remove


    // nft testing
    // makeAccountNFT.show(); // TODO remove
    // nftPanel.show();
    // nftRedesignAction.show();
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