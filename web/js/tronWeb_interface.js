var contractAddr = "TMbtaxgjAqEwp6Z6UyGw9mctE4A9TDRFk7";
var gooContract;

function getGameInfo(callback){
    this.gooContract.getGameInfo().call().then(result => {
        callback(result);
    });
}

function buyGooUnits(unitId, amount){
    this.gooContract.buyBasicUnit(unitId,amount).send();
}

function buyTrxUnits(unitId, amount, trx){
    this.gooContract.buyTronUnit(unitId,amount).send({callValue: trx});
}

function buyUpgrade2(upgradeId, trx){
    this.gooContract.buyUpgrade(upgradeId).send({callValue: trx});
}

function fundGooResearch(gooAmt) {
    this.gooContract.fundGooResearch(gooAmt).send();
}

function attackPlayer(address,callback) {
    this.gooContract.attackPlayer(address).send().then(result => {
        callback(result);
    });
}

function getPlayerRefs(address,callback) {
    this.gooContract.getPlayerRefs(address).call().then(result => {
        callback(result);
    });
}

function playerRefBonus(address,callback) {
    this.gooContract.playerRefBonus(address).call().then(result => {
        callback(result);
    });
}

function getPlayersBattleStats(address, callback) {
    this.gooContract.getPlayersBattleStats(address).call().then(result => {
        callback(result);
    });
}


function viewUnclaimedResearchDividends(callback) {
    this.gooContract.viewUnclaimedResearchDividends().call().then(result => {
        callback(result);
    }).catch((err) => {
        callback([0,0,0]);
    });
}

function viewUnclaimedDepositDividends(callback) {
    this.gooContract.viewUnclaimedDepositDividends().call().then(result => {
        callback(result);
    }).catch((err) => {
        callback([0,0,0]);
    });
}

function withdrawTron(ref,rs1,rs2,gs1,gs2) {
    this.gooContract.withdrawTron(ref,rs1,rs2,gs1,gs2).send();
}

function getLatestUnitRaffleInfo(callback) {
    this.gooContract.getLatestUnitRaffleInfo().call().then(result => {
        callback(result);
    });
}

function buyUnitRaffleTicket(gooAmt) {
    this.gooContract.buyUnitRaffleTicket(gooAmt).send();
}
