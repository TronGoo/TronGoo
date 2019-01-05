var tronWeb;
var waiting = 0;
var currentAddr;
async function main(){

    if (typeof(window.tronWeb) === 'undefined') {
        console.log('Waiting for tronWeb...');
        waiting +=1;
        if (waiting == 5) {
            $("#tronWebModal").modal("hide");
			$("#noTronWebModal").modal("show");
        }
        setTimeout(main, 1000);
    } else {
        tronWeb = window.tronWeb;
        gooContract = await tronWeb.contract().at(contractAddr);
        BigNumber = tronWeb.BigNumber;
        currentAddr = tronWeb.defaultAddress['base58'];
        setTimeout(function(){
            $("#tronWebModal").modal("hide");
            $("#noTronWebModal").modal("hide");
        }, 2000);
        setInterval(function(){
            mainLoop();
        }, 2000);
    }
}

// var time = result[0].toNumber() * 1000;
// var totalPot = result[1].toNumber() / wei;
// var totalProduction = result[2].toNumber();
// var nextSnapshot = result[3].toNumber();
// var goo = result[4].toNumber();
// var ether = result[5].toNumber() / wei;
// var gooProduction = result[6].toNumber();
// var units = result[7];
// var upgrades = result[8];

var modalShown = false;

var gooUpdating = false;
var leaderboardLoaded = false;
var lbPos = [0,4];
var playerGoo = 0;
var lastTime = 0;
var gooProduction = 0;
var walletBal = 0;

var totalAttack = 0;
var totalDefense = 0;
var totalSteal = 0;
var battleCooldown = 0;

var refNum = 0;
var refBonus = 0;

var researchSnapshots = [0,0];
var depositSnapshots = [0,0];
var researchRewards = 0;
var depositRewards = 0;

var unitRaffleEnd = 0;
var unitRaffleId = 0;
var unitRaffleTicketsBought = 0;
var unitRaffleWinner;
var unitRaffleTicketThatWon;

var gameInfo;

// var snapshotCountdown;
var nextSnapshot;
var nextPotSnapshot;
var countdownsUpdating = false;

function mainLoop() {
    
    if (tronWeb.defaultAddress['base58'] !== currentAddr) {
        location.reload();
    }
    
    getPlayerRefs(currentAddr, function(result) {
        refNum = result;
    });
    playerRefBonus(currentAddr, function(result) {
        refBonus = result;
    });
    
    viewUnclaimedResearchDividends(function(result) {
        if (result[0] !== 0) {
            researchRewards = result[0].toNumber();
            researchSnapshots[0] = result[1].toNumber();
            researchSnapshots[1] = result[2].toNumber();
        }
    });
    
    viewUnclaimedDepositDividends(function(result) {
        if (result[0] !== 0) {
            depositRewards = result[0].toNumber();
            depositSnapshots[0] = result[1].toNumber();
            depositSnapshots[1] = result[2].toNumber();
        }
    });
    
    getPlayersBattleStats(currentAddr, function(result) {
        totalAttack = result[0].toNumber();
        totalDefense = result[1].toNumber();
        totalSteal = result[2].toNumber();
        battleCooldown = result[3].toNumber();
    });
    
    getLatestUnitRaffleInfo(function(result) {
        unitRaffleEnd = result[0].toNumber();
        unitRaffleId = result[1].toNumber();
        unitRaffleTicketsBought = result[2].toNumber();
        unitRaffleWinner = result[3];
        unitRaffleTicketThatWon = result[4].toNumber();
        //unitRaffleProd
        //unitRaffleTimer
        //unitRaffleTotalTickets
        if (document.getElementById('unitRaffleProd') !== null) {
            document.getElementById('unitRaffleProd').textContent = translateQuantity(getBaseGooProduction(unitRaffleId),1);
            if (unitRaffleEnd > getEpochSeconds()) {
                // raffle is active
                $('#unitRaffleOverlay').hide();
                document.getElementById('unitRaffleTotalTickets').textContent = translateQuantity(unitRaffleTicketsBought,0);
            } else {
                $('#unitRaffleOverlay').show();
            }
        }
    });
    
    if (activeTab.indexOf('referrals') > -1){
        document.getElementById('refLink').textContent = 'https://trongoo.io?ref=' + tronWeb.defaultAddress['base58'];
        document.getElementById('refNum').textContent = refNum;
        document.getElementById('refBonus').textContent = (tronWeb.fromSun(refBonus)*1).toFixed(2);
    }
    
    tronWeb.trx.getBalance(tronWeb.defaultAddress['base58']).then(result => {
        walletBal = result;
        document.getElementById('playerWallet').textContent = (tronWeb.fromSun(result)*1).toFixed(2);
    });
    
    getGameInfo(function(result){
        gameInfo = result;
        // var time = result[0].times(1000);
        lastTime = gameInfo[0] * 1000;
        gooProduction = gameInfo[7].toNumber() / 100;
        playerGoo = gameInfo[6].toNumber();
        
        nextSnapshot = gameInfo[5];
        nextPotSnapshot = gameInfo[10];
        // snapshotCountdown = nextSnapshot - getEpochSeconds();
        var units = gameInfo[8];
        var upgrades = gameInfo[9];
        
        document.getElementById('playerRewards').textContent = translateQuantity(tronWeb.fromSun(researchRewards+depositRewards),1);
        
        // close modal if open and player owns a kitty
        if (($("#freeModal").data('bs.modal') || {})._isShown && units[0] > 0) {
            $("#freeModal").modal("hide");
        }
        
        if (document.getElementById('gooPotTrx') !== null) {
            var totalPot = tronWeb.fromSun(gameInfo[1]);
            var totalProduction = gameInfo[2].toNumber() / 100;
            var totalGooDeposited = gameInfo[3].toNumber();
            var gooDeposited = gameInfo[4].toNumber();
            
            //gooPotTrx, gooPotTotal, gooPotDeposit
            var dailyDepositPot = totalPot * 0.02;
            document.getElementById('gooPotTrx').textContent = translateQuantity(dailyDepositPot,1);
            document.getElementById('gooPotTotal').textContent = translateQuantity(totalGooDeposited,1);
            document.getElementById('gooPotDeposit').textContent = translateQuantity(gooDeposited,1);
            
            document.getElementById('num_globalProduction').textContent = translateQuantity(totalProduction);
            document.getElementById('num_globalResearchPot').textContent = translateQuantity(totalPot);
            document.getElementById('num_production').textContent = translateQuantity(gooProduction,2);
            
            var percentProduction = gooProduction / (totalProduction/100);
            
            var pcProdDisplay = translateQuantity(percentProduction,1);
            
            if  (percentProduction < 0.1) {
                pcProdDisplay = '<0.1';
            }
            
            document.getElementById('num_prodPercent').textContent = pcProdDisplay;
            // document.getElementById('num_ResearchPercent').textContent = translateQuantity(percentProduction,1);
            
            var dailyResearchPot = totalPot * 0.06;
            
            document.getElementById('num_DailyResearchPot').textContent = translateQuantity(dailyResearchPot);
            
            // console.log(percentProduction);
            // console.log(dailyResearchPot);
            var estEarnings =  (gooProduction / totalProduction) * dailyResearchPot;
            document.getElementById('estimateEarning').textContent = translateQuantity(estEarnings,1);
        }
        
        
        // do upgrades
        // index = 0 1 2
        // productionUnits
        var upgradeId;
        var unitId;
        var costStr;
        
        for (i=0; i<8; i++){
            
            unitId = productionUnits[String(i+1)]['id'];
            
            // get goo production - pretend rares is "false" temporarily	
            var unitProd = getUpgradedGooProduction(unitId, upgrades, false, false);
            $.observable(productionUnits[String(i+1)]).setProperty("description", 'Makes ' + String(unitProd.toFixed(2)) + ' Goo/s');
            
            // update unit amount
            $.observable(productionUnits[String(i+1)]).setProperty("numOwned", units[unitId-1]);
            
            // update max units
            $.observable(productionUnits[String(i+1)]).setProperty("maxOwned", getMaxUnitsCap(unitId, upgrades));
            
            // update unit total
            var totalProd = units[unitId-1] * unitProd;
            $.observable(productionUnits[String(i+1)]).setProperty("unitTotal", "Producing " + translateQuantity(totalProd,1) + " Goo/s");
            
            
            // update unit price
            if (activeTab.indexOf('production') > -1){
                var totalCost;
                var numUnits = document.getElementById('buyField'+unitId).value;
                if (numUnits == ''){
                    numUnits = 1;
                } else {
                    numUnits = parseInt(numUnits);
                }
                var trxCost = getTrxCostForUnit(unitId);
                if (trxCost == 0) {
                    totalCost = '<span class="goo">' + translateQuantity(getGooCostForUnit(unitId,units[unitId-1].toNumber(),numUnits),1) + ' Goo</span>';
                } else {
                    totalCost = '<span class="gold">' + translateQuantity(trxCost * numUnits,1) + ' TRX</span>';
                }
                if (productionUnits[String(i+1)]['numOwned'] == productionUnits[String(i+1)]['maxOwned']) {
                    totalCost = 'Maxed';
                }
                $.observable(productionUnits[String(i+1)]).setProperty("cost", totalCost);
            }
			
			var ownsUpgrade = false;
            
            // get upgrade id for index
            for (j=0; j<3; j++){
                upgradeId = getUpgradeId(j, unitId, upgrades);
                $.observable(productionUnits[String(i+1)]).setProperty("upgradeText" + String(j+1), getUpgradeText(upgradeId));
                var upgradeGooCost = getGooCostForUpgrade(upgradeId);
                var upgradeTrxCost = getTrxCostForUpgrade(upgradeId);
                if (upgradeGooCost > 0) {
                    costStr = '<span class="goo">' + translateQuantity(upgradeGooCost, 1) + ' Goo</span>';
                } else {
                    costStr = '<span class="gold">' + String(upgradeTrxCost) + ' TRX</span>';
                }
                $.observable(productionUnits[String(i+1)]).setProperty("upgradeCost" + String(j+1), costStr);
                
                // Can user afford upgrade
                var canAfford = false;
                if (playerGoo > upgradeGooCost && walletBal > upgradeTrxCost){
                    canAfford = true;
                }
                if (productionUnits[String(i+1)]['numOwned'] == 0){
                    canAfford = false;
                }
                
				// Does the user own any upgrade
				var boughtUpgrades = getNumBoughtUpgrades(j, unitId, upgrades);
				if (boughtUpgrades > 0){
					ownsUpgrade = true;
				}
				
                // Purchased / Available upgrades for each index
                $.observable(productionUnits[String(i+1)]).setProperty("upgradesAvailable" + String(j+1), getNumAvailableUpgrades(j, unitId));
				$.observable(productionUnits[String(i+1)]).setProperty("upgradesPurchased" + String(j+1), boughtUpgrades);
                
                if (productionUnits[String(i+1)]['upgradesAvailable'+String(j+1)] == productionUnits[String(i+1)]['upgradesPurchased'+String(j+1)]){
                    $.observable(productionUnits[String(i+1)]).setProperty("upgradeText" + String(j+1), 'Maxed');
                    canAfford = false;
                }
                $.observable(productionUnits[String(i+1)]).setProperty("upgrade" + String(j+1) + "Available", canAfford);	
            }
			
			// Display unit production - Gold when the user owns at least one upgrade
			if (ownsUpgrade){
				$.observable(productionUnits[String(i+1)]).setProperty("description", '<span class="gold">Makes ' + String(unitProd.toFixed(2)) + ' Goo/s</span>');
			} else {
				$.observable(productionUnits[String(i+1)]).setProperty("description", 'Makes ' + String(unitProd.toFixed(2)) + ' Goo/s');
			}
        }
        
        // barracksUnits
        // reset totals
        // totalAttack = 0;
        // totalDefense = 0;
        // totalSteal = 0;
        var count = 9;
        for (i=39; i<45; i++){
            
            unitId = barracksUnits[String(i+1)]['id'];
            
            $.observable(barracksUnits[String(i+1)]).setProperty("description", getUnitStats(unitId,upgrades));
            
            // update unit amount
			$.observable(barracksUnits[String(i+1)]).setProperty("numOwned", units[count]);
            
            // totalAttack += (getUpgradedAttack(unitId, upgrades) * units[count]);
            // totalDefense += (getUpgradedDefense(unitId, upgrades) * units[count]);
            // totalSteal += (getUpgradedStealingRaw(unitId, upgrades) * units[count]);  
            
            $.observable(barracksUnits[String(i+1)]).setProperty("unitTotal", getTotalUnitStats(unitId,upgrades,units[count]));
            
            // update max units
			$.observable(barracksUnits[String(i+1)]).setProperty("maxOwned", getMaxUnitsCap(unitId, upgrades));
            
            // update unit price
            if (activeTab.indexOf('barracks') > -1){
                var totalCost;
                var numUnits = document.getElementById('buyField'+unitId).value;
                if (numUnits == ''){
                    numUnits = 1;
                } else {
                    numUnits = parseInt(numUnits);
                }
                var trxCost = getTrxCostForUnit(unitId);
                if (trxCost == 0) {
                    totalCost = '<span class="goo">' + translateQuantity(getGooCostForUnit(unitId,units[count].toNumber(),numUnits),1) + ' Goo</span>';
                } else {
                    totalCost = '<span class="gold">' + translateQuantity(trxCost * numUnits,1) + ' TRX</span>';
                }
                if (barracksUnits[String(i+1)]['numOwned'] == barracksUnits[String(i+1)]['maxOwned']) {
                    totalCost = 'Maxed';
                }
                $.observable(barracksUnits[String(i+1)]).setProperty("cost", totalCost);
            }
            
            // get upgrade id for index
            for (j=0; j<3; j++){
                upgradeId = getUpgradeId(j, unitId, upgrades);
				
				var upgradeText = getUpgradeText(upgradeId);
				// console.log(upgradeText);
				
				if (~upgradeText.indexOf("% Stealing"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/steal_percentage.png');
				}
				else if (~upgradeText.indexOf("% Attack"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/attack_percentage.png');
				}
				else if (~upgradeText.indexOf("% Defense"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/def_percentage.png');
				}
				else if (~upgradeText.indexOf("Stealing"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/steal_plus.png');
				}
				else if (~upgradeText.indexOf("Attack"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/attack_plus.png');
				}
				else if (~upgradeText.indexOf("Defense"))
				{
					$.observable(barracksUnits[String(i+1)]).setProperty("upgradeImage" + String(j+1), 'img/def_plus.png');
				}
				
				$.observable(barracksUnits[String(i+1)]).setProperty("upgradeText" + String(j+1), getUpgradeText(upgradeId));
				
                var upgradeGooCost = getGooCostForUpgrade(upgradeId);
                var upgradeTrxCost = getTrxCostForUpgrade(upgradeId);
                if (upgradeGooCost > 0) {
                    costStr = '<span class="goo">' + translateQuantity(upgradeGooCost, 1) + ' Goo</span>';
                } else {
                    costStr = '<span class="gold">' + String(upgradeTrxCost) + ' TRX</span>';
                }
				$.observable(barracksUnits[String(i+1)]).setProperty("upgradeCost" + String(j+1), costStr);
                
                // Can user afford upgrade
                var canAfford = false;
                if (playerGoo > upgradeGooCost && walletBal > upgradeTrxCost){
                    canAfford = true;
                }
                if (barracksUnits[String(i+1)]['numOwned'] == 0){
                    canAfford = false;
                }
                
                // Purchased / Available upgrades for each index		
				$.observable(barracksUnits[String(i+1)]).setProperty("upgradesAvailable" + String(j+1), getNumAvailableUpgrades(j, unitId));
				$.observable(barracksUnits[String(i+1)]).setProperty("upgradesPurchased" + String(j+1), getNumBoughtUpgrades(j, unitId, upgrades));
                
                if (barracksUnits[String(i+1)]['upgradesAvailable'+String(j+1)] == barracksUnits[String(i+1)]['upgradesPurchased'+String(j+1)]){
                    $.observable(barracksUnits[String(i+1)]).setProperty("upgradeText" + String(j+1), 'Maxed');
                    canAfford = false;
                }
                $.observable(barracksUnits[String(i+1)]).setProperty("upgrade" + String(j+1) + "Available", canAfford);
            }
            count += 1;
        }
        if (activeTab.indexOf('battle') > -1){
            document.getElementById('totalAttk').textContent = translateQuantity(totalAttack,1);
            document.getElementById('totalDef').textContent = translateQuantity(totalDefense,1);
            document.getElementById('totalSteal').textContent = translateQuantity(totalSteal,1);
        }
        
        if (!gooUpdating) {
            updateGooFast();
        }
     
        if (!leaderboardLoaded) {
            loadLb();
            loadBl();
            leaderboardLoaded = true;
        }
        
        if (productionUnits[1]["numOwned"] < 1 && !modalShown) {
            $("#freeModal").modal("show");
            modalShown = true;
        }
    });
}

$.ajaxSetup({
    scriptCharset: "utf-8", //or "ISO-8859-1"
    contentType: "application/json; charset=utf-8"
});

var lbUrl = 'http://ethergoo.io/api/getTronGooLeaderboard';
var lbFull;
var lbFiltered;
var lbFilterSetting = false;
var lbRank = {};

// just an example ...
var blUrl = 'http://ethergoo.io/api/getTronAttackLog?player=';
var battleLog;

function loadLb() {
    $.getJSON('https://api.allorigins.ml/get?url=' + 
        encodeURIComponent(lbUrl) + '&callback=?',
        function (data) {
            lbFull = $.parseJSON(data.contents);
            filterLb();
            updateLb();
            console.log('Leaderboard loaded');
    })
}

function loadBl() {
    var url = blUrl + tronWeb.defaultAddress.hex.replace('41','0x');
    $.getJSON('https://api.allorigins.ml/get?url=' + 
        encodeURIComponent(url) + '&callback=?',
        function (data) {
            battleLog = $.parseJSON(data.contents);
            updateBl();
    })
}

function updateBl() {
    var battleEntries = [];
    var userAddr = tronWeb.defaultAddress.hex.replace('41','0x');
    for (i=0; i<battleLog.length; i++) {
        var newEntry = {};
        if (battleLog[i]['attacker'] == userAddr) {
            newEntry['address'] = tronWeb.address.fromHex(battleLog[i]['target'].replace('0x','41'));
            if (battleLog[i]['success'] == 'true'){
                newEntry['type'] = 'yourAttackSuccess';
            } else {
                newEntry['type'] = 'yourAttackFailed';
            }
        } else {
            newEntry['address'] = tronWeb.address.fromHex(battleLog[i]['attacker'].replace('0x','41'));
            if (battleLog[i]['success'] == 'true'){
                newEntry['type'] = 'enemyAttackSuccess';
            } else {
                newEntry['type'] = 'enemyAttackFailed';
            }
        }
        newEntry['stolen'] = translateQuantity(parseInt(battleLog[i]['gooStolen']),1);
        newEntry['url'] = 'https://tronscan.org/#/address/' + newEntry['address'];
        battleEntries.push(newEntry);
    }
    $.observable(battleLogEntries.entries).refresh(battleEntries);
}

function filterLb() {
    lbFiltered = [];
    for (i=0; i<lbFull.length; i++){
        if (lbFull[i]['defense'] < totalAttack){
            lbFiltered.push(lbFull[i]);
        }
        lbRank[lbFull[i]['player']] = String(i+1);
    }
}

function updateLb() {
    var item;
    for (i=0; i<5; i++) {
        var canAttack = false;
        if (typeof(lbFull[lbPos[0]+i]) !== 'undefined') {
            item = lbFull[lbPos[0]+i];
            if (document.getElementById('lbFilterCb') !== null){
                if (document.getElementById('lbFilterCb').checked && totalAttack > 0) {
                    item = lbFiltered[lbPos[0]+i];
                }
            }
            if (totalAttack > item['defense'] && tronWeb.address.fromHex(item['player'].replace('0x','41')) != tronWeb.defaultAddress.base58) {
                canAttack = true;
            }
            if (battleCooldown > getEpochSeconds()) {
                canAttack = false;
            }
            $.observable(lbEntries[String(i+1)]).setProperty("canAttack", canAttack);
            $.observable(lbEntries[String(i+1)]).setProperty("position", '#'+lbRank[item['player']]);
            $.observable(lbEntries[String(i+1)]).setProperty("address", tronWeb.address.fromHex(item['player'].replace('0x','41')));
            $.observable(lbEntries[String(i+1)]).setProperty("goo", translateQuantity(item['goo']));
            $.observable(lbEntries[String(i+1)]).setProperty("defense", translateQuantity(item['defense']));
        } else {
            $.observable(lbEntries[String(i+1)]).setProperty("canAttack", false);
            $.observable(lbEntries[String(i+1)]).setProperty("position", '-');
            $.observable(lbEntries[String(i+1)]).setProperty("address", '-');
            $.observable(lbEntries[String(i+1)]).setProperty("goo", '-');
            $.observable(lbEntries[String(i+1)]).setProperty("defense", '-');
        }
    }
}

function battleRefresh() {
    loadLb();
    loadBl();
}

function lbFirst() {
    if (lbPos[0] > 0) {
        lbPos[0] = 0;
        lbPos[1] = 4;
        updateLb();
    }
}

function lbNext() {
    lbPos[0] += 5;
    lbPos[1] += 5;
    updateLb();
}

function lbPrev() {
    if (lbPos[0] > 0) {
        lbPos[0] -= 5;
        lbPos[1] -= 5;
        updateLb();
    }
}

function attack(id) {
    attackPlayer(lbEntries[String(id)]['address'], function(result) {
        setTimeout(function() {
            tronWeb.getEventByTransactionID(result).then(ev => {
                console.log(ev);
                var userAddr = tronWeb.defaultAddress.hex.replace('41','0x');
                var item = ev[0]['result'];
                var newEntry = {};
                if (item['attacker'] == userAddr) {
                    newEntry['address'] = tronWeb.address.fromHex(item['target'].replace('0x','41'));
                    if (item['success']){
                        newEntry['type'] = 'yourAttackSuccess';
                    } else {
                        newEntry['type'] = 'yourAttackFailed';
                    }
                } else {
                    newEntry['address'] = tronWeb.address.fromHex(item['attacker'].replace('0x','41'));
                    if (item['success']){
                        newEntry['type'] = 'enemyAttackSuccess';
                    } else {
                        newEntry['type'] = 'enemyAttackFailed';
                    }
                }
                newEntry['stolen'] = translateQuantity(parseInt(item['gooStolen']),1);
                newEntry['url'] = 'https://tronscan.org/#/address/' + newEntry['address'];
                $("#battleResultModal").modal("show");
                var template = $.templates("#battleResultTmpl");
                template.link("#battleResultSection", newEntry);
            });
        }, 5000);
    });
}

function attPlayer(address){
    attackPlayer(address, function(result) {
        setTimeout(function() {
            tronWeb.getEventByTransactionID(result).then(ev => {
                console.log(ev);
                var userAddr = tronWeb.defaultAddress.hex.replace('41','0x');
                var item = ev[0]['result'];
                var newEntry = {};
                if (item['attacker'] == userAddr) {
                    newEntry['address'] = tronWeb.address.fromHex(item['target'].replace('0x','41'));
                    if (item['success']){
                        newEntry['type'] = 'yourAttackSuccess';
                    } else {
                        newEntry['type'] = 'yourAttackFailed';
                    }
                } else {
                    newEntry['address'] = tronWeb.address.fromHex(item['attacker'].replace('0x','41'));
                    if (item['success']){
                        newEntry['type'] = 'enemyAttackSuccess';
                    } else {
                        newEntry['type'] = 'enemyAttackFailed';
                    }
                }
                newEntry['stolen'] = translateQuantity(parseInt(item['gooStolen']),1);
                newEntry['url'] = 'https://tronscan.org/#/address/' + newEntry['address'];
                $("#battleResultModal").modal("show");
                var template = $.templates("#battleResultTmpl");
                template.link("#battleResultSection", newEntry);
            });
        }, 5000);
    });
}

function buyUnits(unitId) {
    var numUnits = document.getElementById('buyField'+unitId).value;
    var trxCost = getTrxCostForUnit(unitId);
    if (trxCost == 0) {
        buyGooUnits(unitId, numUnits);
    } else {
        buyTrxUnits(unitId, numUnits, tronWeb.toSun(trxCost)*numUnits);
    }
}

function buyUpgrade(unitId, index) {
    var upgradeId = getUpgradeId(index, unitId, gameInfo[9]);
    var upgradeTrxCost = tronWeb.toSun(getTrxCostForUpgrade(upgradeId));
    buyUpgrade2(upgradeId, upgradeTrxCost);
}

function maxUnits(unitId) {
    var current;
    if (unitId < 40) {
       current = productionUnits[unitId]['numOwned'].toNumber();
    } else {
       console.log(unitId);
       current = barracksUnits[unitId]['numOwned'].toNumber();
    }
    var maxNum = getNumUnitsCanAfford(unitId, current, gameInfo[6].toNumber(), tronWeb.fromSun(walletBal), gameInfo[9]);
    document.getElementById('buyField'+unitId).value = maxNum;
}

function maxDepositGoo() {
    document.getElementById('gooPotDepositAmt').value = gameInfo[6].toNumber();
}

function maxItemRaffleGoo() {
    document.getElementById('itemRaffleGoo').value = gameInfo[6].toNumber();
}

function maxUnitRaffleGoo() {
    document.getElementById('unitRaffleGoo').value = Math.floor((gameInfo[6].toNumber())/1000);
}

function buyUnitRaffleTickets() {
    var gooAmt = document.getElementById('unitRaffleGoo').value;
    if (gooAmt <= gameInfo[6].toNumber() && gooAmt > 0) {
        buyUnitRaffleTicket(gooAmt);
    }
}

function depositGoo() {
    var gooAmt = document.getElementById('gooPotDepositAmt').value;
    if (gooAmt <= gameInfo[6].toNumber() && gooAmt > 0) {
        fundGooResearch(gooAmt);
    }
}

function withdraw() {
    var ref = localStorage['ref'];
    if (!tronWeb.isAddress(localStorage['ref'])) {
        ref = currentAddr;
    }
    console.log(ref);
    withdrawTron(ref, researchSnapshots[0], researchSnapshots[1], depositSnapshots[0], depositSnapshots[1]);
}

function updateGooFast(){
    liveUpdateGoo();
    setTimeout(updateGooFast,100);
}

function liveUpdateGoo(){
    var timeNow = new Number(getEpochMillis());
    var liveGoo = playerGoo + Math.floor((timeNow - lastTime) * (gooProduction / 1000));
    document.getElementById('playerGoo').textContent = translateQuantity(liveGoo);
    if (document.getElementById('text_timer') !== null) {
        document.getElementById('text_timer').textContent = (nextSnapshot - getEpochSeconds()).toHHMMSS();
        document.getElementById('potTimer').textContent = (nextPotSnapshot - getEpochSeconds()).toHHMMSS();
    }
    if (document.getElementById('battleCooldown') !== null) {
        var cooldownTimer = battleCooldown.toHHMMSS();
        if (battleCooldown < getEpochSeconds()) {
			$("#battleCooldown").html('<span class="text-success">You are able to attack!</span>');
        } else {
			$("#battleCooldown").html('<span class="text-danger">Attack Cooldown: ' + ((battleCooldown - getEpochSeconds()).toHHMMSS()).substring(3) + '</span>');
        }
    }
    if (document.getElementById('unitRaffleTimer') !== null) {
        document.getElementById('unitRaffleTimer').textContent = (unitRaffleEnd - getEpochSeconds()).toHHMMSS();
    }
    
}

function translateQuantity(quantity,precision){
    quantity=Number(quantity);
    finalquantity=quantity;
    modifier='';

    if(quantity>=1000){
        modifier='K';
        finalquantity=quantity/1000;
    }
    
    if(quantity>=1000000){
        modifier='M';
        finalquantity=quantity/1000000;
    }
    if(quantity>=1000000000){
        modifier='B';
        finalquantity=quantity/1000000000;
    }
    if(quantity>=1000000000000){
        modifier='T';
        finalquantity=quantity/1000000000000;
    }
    if(precision == undefined){
        precision=0;
        if(finalquantity<10000){
            precision=1;
        }
        if(finalquantity<1000){
            precision=2;
        }
        if(finalquantity<100){
            precision=3;
        }
        if(finalquantity<10){
            precision=4;
        }
    }
    if(precision==0){
        finalquantity=Math.floor(finalquantity);
    }
    return finalquantity.toFixed(precision)+modifier;
}

Number.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (this < 0) {
        return '00:00:00';
    }
    return hours + ':' + minutes + ':' + seconds;
};

main();