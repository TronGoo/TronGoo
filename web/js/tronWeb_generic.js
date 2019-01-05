// import BigNumber from "bignumber.js";

var BigNumber;

// class Scripts {

function getEpochSeconds() {
return Math.floor(new Date().getTime() / 1000);
}

function getEpochMillis() {
return new Date().getTime();
}

function getRandomInt(generator, mod) { // 9 = [0-8]
return generator.nextInt() % mod;
}

function round(bigNumber, decimals) {
if (bigNumber.decimalPlaces() > decimals) {
    return bigNumber.toFixed(decimals);
} else {
    return bigNumber;
}
}

function formatNumber(value, defaultDecimals) {
if (!value || value == "?") {
    return value;
}

if (value.gte(1000000000000)) {
    return this.round(value.times(0.000000000001), 2) + "T";
} else if (value.gte(1000000000)) {
    return this.round(value.times(0.000000001), 2) + "B";
} else if (value.gte(1000000)) {
    return this.round(value.times(0.000001), 2) + "M";
} else if (value.gte(1000)) {
    return this.round(value.times(0.001), 1) + "K";
} else if (defaultDecimals != null) {
    return this.round(value, defaultDecimals).toString();
}
return this.round(value, 0).toString();
}

function getGooCostForUnit(unitId, existing, amount) {
const baseGooCost = this.getBaseGooCost(unitId);
const gooCostIncreaseHalf = this.getGooCostIncreaseHalf(unitId);

if (amount == 1) { // 1
    if (existing == 0) {
        return baseGooCost;
    } else {
        // return existing.times(gooCostIncreaseHalf).times(2).plus(baseGooCost);
        return existing * gooCostIncreaseHalf * 2 + baseGooCost;
    }
} else if (amount > 1) {
    var existingCost = 0;
    if (existing > 0) {
        // existingCost = existing.times(baseGooCost).plus(existing.times(gooCostIncreaseHalf).times(existing.minus(1)));
        existingCost = (existing * baseGooCost) + (existing * gooCostIncreaseHalf) * (existing - 1);
    }

    existing = existing + amount;
    // var newCost = existing.times(baseGooCost).plus(existing.times(gooCostIncreaseHalf).times(existing.minus(1)));
    var newCost = (existing * baseGooCost) + (existing * gooCostIncreaseHalf) * (existing -1);
    return newCost - existingCost;
} else if (amount == 0){
    return 0;
}
return baseGooCost;
}

function getProductionIncrease(unitId, upgrades, rares, id) {
if (!upgrades) {
    return 0;
}

var increase = 0;
if (unitId == 1) {
    if (upgrades[0]) {
        increase += 0.1;
    }
    if (upgrades[1]) {
        increase += 0.2;
    }
    if (upgrades[2]) {
        increase += 0.1;
    }
    if (upgrades[3]) {
        increase += 0.1;
    }
    if (upgrades[4]) {
        increase += 0.2;
    }
    if (upgrades[5]) {
        increase += 0.1;
    }
    if (upgrades[226]) {
        increase += 0.1;
    }
    if (upgrades[292]) {
        increase += 0.2;
    }
    if (upgrades[293]) {
        increase += 0.2;
    }
    if (upgrades[294]) {
        increase += 0.2;
    }
} else if (unitId == 2) {
    if (upgrades[15]) {
        increase += 0.2;
    }
    if (upgrades[16]) {
        increase += 0.4;
    }
    if (upgrades[17]) {
        increase += 0.2;
    }
    if (upgrades[18]) {
        increase += 0.2;
    }
    if (upgrades[19]) {
        increase += 0.4;
    }
    if (upgrades[20]) {
        increase += 0.2;
    }
    if (upgrades[229]) {
        increase += 0.2;
    }
    if (upgrades[298]) {
        increase += 0.4;
    }
    if (upgrades[299]) {
        increase += 0.4;
    }
    if (upgrades[300]) {
        increase += 0.4;
    }
} else if (unitId == 3) {
    if (upgrades[30]) {
        increase += 0.5;
    }
    if (upgrades[31]) {
        increase += 1;
    }
    if (upgrades[32]) {
        increase += 0.5;
    }
    if (upgrades[33]) {
        increase += 0.5;
    }
    if (upgrades[34]) {
        increase += 2;
    }
    if (upgrades[35]) {
        increase += 0.5;
    }
    if (upgrades[232]) {
        increase += 0.5;
    }
    if (upgrades[304]) {
        increase += 3;
    }
    if (upgrades[305]) {
        increase += 1;
    }
    if (upgrades[306]) {
        increase += 1;
    }
} else if (unitId == 4) {
    if (upgrades[268]) {
        increase += 0.8;
    }
    if (upgrades[45]) {
        increase += 0.4;
    }
    if (upgrades[46]) {
        increase += 0.8;
    }
    if (upgrades[47]) {
        increase += 0.4;
    }
    if (upgrades[48]) {
        increase += 0.4;
    }
    if (upgrades[49]) {
        increase += 0.8;
    }
    if (upgrades[50]) {
        increase += 0.4;
    }
    if (upgrades[235]) {
        increase += 0.4;
    }
    if (upgrades[310]) {
        increase += 0.8;
    }
    if (upgrades[311]) {
        increase += 0.8;
    }
    if (upgrades[312]) {
        increase += 0.8;
    }
} else if (unitId == 5) {
    if (upgrades[270]) {
        increase += 1.2;
    }
    if (upgrades[60]) {
        increase += 0.6;
    }
    if (upgrades[61]) {
        increase += 1.2;
    }
    if (upgrades[62]) {
        increase += 0.6;
    }
    if (upgrades[63]) {
        increase += 0.6;
    }
    if (upgrades[64]) {
        increase += 1.2;
    }
    if (upgrades[65]) {
        increase += 0.6;
    }
    if (upgrades[238]) {
        increase += 0.6;
    }
    if (upgrades[316]) {
        increase += 1.2;
    }
    if (upgrades[317]) {
        increase += 1.2;
    }
    if (upgrades[318]) {
        increase += 1.2;
    }
} else if (unitId == 6) {
    if (upgrades[272]) {
        increase += 1.6;
    }
    if (upgrades[75]) {
        increase += 0.8;
    }
    if (upgrades[76]) {
        increase += 1.6;
    }
    if (upgrades[77]) {
        increase += 0.8;
    }
    if (upgrades[78]) {
        increase += 0.8;
    }
    if (upgrades[79]) {
        increase += 1.6;
    }
    if (upgrades[80]) {
        increase += 0.8;
    }
    if (upgrades[241]) {
        increase += 0.8;
    }
    if (upgrades[322]) {
        increase += 1.6;
    }
    if (upgrades[323]) {
        increase += 1.6;
    }
    if (upgrades[324]) {
        increase += 1.6;
    }
} else if (unitId == 7) {
    if (upgrades[90]) {
        increase += 2.5;
    }
    if (upgrades[91]) {
        increase += 5;
    }
    if (upgrades[92]) {
        increase += 2.5;
    }
    if (upgrades[93]) {
        increase += 2.5;
    }
    if (upgrades[94]) {
        increase += 10;
    }
    if (upgrades[95]) {
        increase += 2.5;
    }
    if (upgrades[244]) {
        increase += 2.5;
    }
    if (upgrades[328]) {
        increase += 15;
    }
    if (upgrades[329]) {
        increase += 5;
    }
    if (upgrades[330]) {
        increase += 5;
    }
} else if (unitId == 8) {
    if (upgrades[274]) {
        increase += 2;
    }
    if (upgrades[105]) {
        increase += 1;
    }
    if (upgrades[106]) {
        increase += 2;
    }
    if (upgrades[107]) {
        increase += 1;
    }
    if (upgrades[108]) {
        increase += 1;
    }
    if (upgrades[109]) {
        increase += 2;
    }
    if (upgrades[110]) {
        increase += 1;
    }
    if (upgrades[247]) {
        increase += 1;
    }
    if (upgrades[334]) {
        increase += 2;
    }
    if (upgrades[335]) {
        increase += 2;
    }
    if (upgrades[336]) {
        increase += 2;
    }
} else if (unitId == 10) {
    if (upgrades[340]) {
        increase += 3;
    }
    if (upgrades[341]) {
        increase += 1.5;
    }
    if (upgrades[342]) {
        increase += 3;
    }
    if (upgrades[343]) {
        increase += 1.5;
    }
    if (upgrades[344]) {
        increase += 1.5;
    }
    if (upgrades[345]) {
        increase += 3;
    }
    if (upgrades[346]) {
        increase += 1.5;
    }
    if (upgrades[347]) {
        increase += 1.5;
    }
    if (upgrades[348]) {
        increase += 3;
    }
    if (upgrades[349]) {
        increase += 3;
    }
    if (upgrades[350]) {
        increase += 3;
    }
} else if (unitId == 11) {
    if (upgrades[366]) {
        increase += 5;
    }
    if (upgrades[367]) {
        increase += 2.5;
    }
    if (upgrades[368]) {
        increase += 5;
    }
    if (upgrades[369]) {
        increase += 2.5;
    }
    if (upgrades[370]) {
        increase += 2.5;
    }
    if (upgrades[371]) {
        increase += 5;
    }
    if (upgrades[372]) {
        increase += 2.5;
    }
    if (upgrades[373]) {
        increase += 2.5;
    }
    if (upgrades[374]) {
        increase += 5;
    }
    if (upgrades[375]) {
        increase += 5;
    }
    if (upgrades[376]) {
        increase += 5;
    }
} else if (unitId == 12) {
    if (upgrades[392]) {
        increase += 8;
    }
    if (upgrades[393]) {
        increase += 4;
    }
    if (upgrades[394]) {
        increase += 8;
    }
    if (upgrades[395]) {
        increase += 4;
    }
    if (upgrades[396]) {
        increase += 4;
    }
    if (upgrades[397]) {
        increase += 8;
    }
    if (upgrades[398]) {
        increase += 4;
    }
    if (upgrades[399]) {
        increase += 4;
    }
    if (upgrades[400]) {
        increase += 8;
    }
    if (upgrades[401]) {
        increase += 8;
    }
    if (upgrades[402]) {
        increase += 8;
    }
} else if (unitId == 13) {
    if (upgrades[436]) {
        increase += 12;
    }
    if (upgrades[437]) {
        increase += 6;
    }
    if (upgrades[438]) {
        increase += 12;
    }
    if (upgrades[439]) {
        increase += 6;
    }
    if (upgrades[440]) {
        increase += 6;
    }
    if (upgrades[441]) {
        increase += 12;
    }
    if (upgrades[442]) {
        increase += 6;
    }
    if (upgrades[443]) {
        increase += 6;
    }
    if (upgrades[444]) {
        increase += 12;
    }
    if (upgrades[445]) {
        increase += 12;
    }
    if (upgrades[446]) {
        increase += 12;
    }
}

if (rares && id) {
    if (rares[1] == id.toLowerCase() && unitId == 2) {
        increase += 3.5;
    } else if (rares[6] == id.toLowerCase() && unitId == 10) {
        increase += 60;
    } else if (rares[9] == id.toLowerCase() && unitId == 11) {
        increase += 100;
    }
}

return new BigNumber(String(increase));
}

function getProductionMultiplier(unitId, upgrades, rares, id) {
var multiplier = 1;
if (!upgrades) {
    return new BigNumber(multiplier);
}

if (unitId == 1) {
    if (upgrades[6]) {
        multiplier += 0.5;
    }
    if (upgrades[7]) {
        multiplier += 1;
    }
    if (upgrades[8]) {
        multiplier += 0.5;
    }
    if (upgrades[9]) {
        multiplier += 0.5;
    }
    if (upgrades[10]) {
        multiplier += 1;
    }
    if (upgrades[11]) {
        multiplier += 1;
    }
    if (upgrades[227]) {
        multiplier += 1;
    }
    if (upgrades[295]) {
        multiplier += 1;
    }
    if (upgrades[296]) {
        multiplier += 0.5;
    }
    if (upgrades[297]) {
        multiplier += 0.5;
    }
} else if (unitId == 2) {
    if (upgrades[21]) {
        multiplier += 0.5;
    }
    if (upgrades[22]) {
        multiplier += 1;
    }
    if (upgrades[23]) {
        multiplier += 0.5;
    }
    if (upgrades[24]) {
        multiplier += 0.5;
    }
    if (upgrades[25]) {
        multiplier += 1;
    }
    if (upgrades[26]) {
        multiplier += 1;
    }
    if (upgrades[230]) {
        multiplier += 1;
    }
    if (upgrades[301]) {
        multiplier += 1;
    }
    if (upgrades[302]) {
        multiplier += 1;
    }
    if (upgrades[303]) {
        multiplier += 1;
    }
} else if (unitId == 3) {
    if (upgrades[36]) {
        multiplier += 0.5;
    }
    if (upgrades[37]) {
        multiplier += 1;
    }
    if (upgrades[38]) {
        multiplier += 0.5;
    }
    if (upgrades[39]) {
        multiplier += 0.5;
    }
    if (upgrades[40]) {
        multiplier += 1.5;
    }
    if (upgrades[41]) {
        multiplier += 1;
    }
    if (upgrades[233]) {
        multiplier += 1;
    }
    if (upgrades[307]) {
        multiplier += 2;
    }
    if (upgrades[308]) {
        multiplier += 1;
    }
    if (upgrades[309]) {
        multiplier += 1;
    }
} else if (unitId == 4) {
    if (upgrades[269]) {
        multiplier += 1;
    }
    if (upgrades[51]) {
        multiplier += 0.5;
    }
    if (upgrades[52]) {
        multiplier += 1;
    }
    if (upgrades[53]) {
        multiplier += 0.5;
    }
    if (upgrades[54]) {
        multiplier += 0.5;
    }
    if (upgrades[55]) {
        multiplier += 1;
    }
    if (upgrades[56]) {
        multiplier += 1;
    }
    if (upgrades[236]) {
        multiplier += 1;
    }
    if (upgrades[313]) {
        multiplier += 1;
    }
    if (upgrades[314]) {
        multiplier += 1;
    }
    if (upgrades[315]) {
        multiplier += 1;
    }
} else if (unitId == 5) {
    if (upgrades[271]) {
        multiplier += 1;
    }
    if (upgrades[66]) {
        multiplier += 0.5;
    }
    if (upgrades[67]) {
        multiplier += 1;
    }
    if (upgrades[68]) {
        multiplier += 0.5;
    }
    if (upgrades[69]) {
        multiplier += 0.5;
    }
    if (upgrades[70]) {
        multiplier += 1;
    }
    if (upgrades[71]) {
        multiplier += 1;
    }
    if (upgrades[239]) {
        multiplier += 1;
    }
    if (upgrades[319]) {
        multiplier += 1;
    }
    if (upgrades[320]) {
        multiplier += 1;
    }
    if (upgrades[321]) {
        multiplier += 1;
    }
} else if (unitId == 6) {
    if (upgrades[273]) {
        multiplier += 1;
    }
    if (upgrades[81]) {
        multiplier += 0.5;
    }
    if (upgrades[82]) {
        multiplier += 1;
    }
    if (upgrades[83]) {
        multiplier += 0.5;
    }
    if (upgrades[84]) {
        multiplier += 0.5;
    }
    if (upgrades[85]) {
        multiplier += 1;
    }
    if (upgrades[86]) {
        multiplier += 1;
    }
    if (upgrades[242]) {
        multiplier += 1;
    }
    if (upgrades[325]) {
        multiplier += 1;
    }
    if (upgrades[326]) {
        multiplier += 1;
    }
    if (upgrades[327]) {
        multiplier += 1;
    }
} else if (unitId == 7) {
    if (upgrades[96]) {
        multiplier += 0.5;
    }
    if (upgrades[97]) {
        multiplier += 1;
    }
    if (upgrades[98]) {
        multiplier += 0.5;
    }
    if (upgrades[99]) {
        multiplier += 0.5;
    }
    if (upgrades[100]) {
        multiplier += 1.5;
    }
    if (upgrades[101]) {
        multiplier += 1;
    }
    if (upgrades[245]) {
        multiplier += 1;
    }
    if (upgrades[331]) {
        multiplier += 2;
    }
    if (upgrades[332]) {
        multiplier += 1;
    }
    if (upgrades[333]) {
        multiplier += 1;
    }
} else if (unitId == 8) {
    if (upgrades[275]) {
        multiplier += 1;
    }
    if (upgrades[111]) {
        multiplier += 0.5;
    }
    if (upgrades[112]) {
        multiplier += 1;
    }
    if (upgrades[113]) {
        multiplier += 0.5;
    }
    if (upgrades[114]) {
        multiplier += 0.5;
    }
    if (upgrades[115]) {
        multiplier += 1;
    }
    if (upgrades[116]) {
        multiplier += 1;
    }
    if (upgrades[248]) {
        multiplier += 1;
    }
    if (upgrades[337]) {
        multiplier += 1;
    }
    if (upgrades[338]) {
        multiplier += 1;
    }
    if (upgrades[339]) {
        multiplier += 1;
    }
} else if (unitId == 10) {
    if (upgrades[351]) {
        multiplier += 1;
    }
    if (upgrades[352]) {
        multiplier += 0.5;
    }
    if (upgrades[353]) {
        multiplier += 1;
    }
    if (upgrades[354]) {
        multiplier += 0.5;
    }
    if (upgrades[355]) {
        multiplier += 0.5;
    }
    if (upgrades[356]) {
        multiplier += 1;
    }
    if (upgrades[357]) {
        multiplier += 1;
    }
    if (upgrades[358]) {
        multiplier += 1;
    }
    if (upgrades[359]) {
        multiplier += 1;
    }
    if (upgrades[360]) {
        multiplier += 1;
    }
    if (upgrades[361]) {
        multiplier += 1;
    }
} else if (unitId == 11) {
    if (upgrades[377]) {
        multiplier += 1;
    }
    if (upgrades[378]) {
        multiplier += 0.5;
    }
    if (upgrades[379]) {
        multiplier += 1;
    }
    if (upgrades[380]) {
        multiplier += 0.5;
    }
    if (upgrades[381]) {
        multiplier += 0.5;
    }
    if (upgrades[382]) {
        multiplier += 1;
    }
    if (upgrades[383]) {
        multiplier += 1;
    }
    if (upgrades[384]) {
        multiplier += 1;
    }
    if (upgrades[385]) {
        multiplier += 1;
    }
    if (upgrades[386]) {
        multiplier += 1;
    }
    if (upgrades[387]) {
        multiplier += 1;
    }
} else if (unitId == 12) {
    if (upgrades[403]) {
        multiplier += 1;
    }
    if (upgrades[404]) {
        multiplier += 0.5;
    }
    if (upgrades[405]) {
        multiplier += 1;
    }
    if (upgrades[406]) {
        multiplier += 0.5;
    }
    if (upgrades[407]) {
        multiplier += 0.5;
    }
    if (upgrades[408]) {
        multiplier += 1;
    }
    if (upgrades[409]) {
        multiplier += 1;
    }
    if (upgrades[410]) {
        multiplier += 1;
    }
    if (upgrades[411]) {
        multiplier += 1;
    }
    if (upgrades[412]) {
        multiplier += 1;
    }
    if (upgrades[413]) {
        multiplier += 1;
    }
} else if (unitId == 13) {
    if (upgrades[447]) {
        multiplier += 1;
    }
    if (upgrades[448]) {
        multiplier += 0.5;
    }
    if (upgrades[449]) {
        multiplier += 1;
    }
    if (upgrades[450]) {
        multiplier += 0.5;
    }
    if (upgrades[451]) {
        multiplier += 0.5;
    }
    if (upgrades[452]) {
        multiplier += 1;
    }
    if (upgrades[453]) {
        multiplier += 1;
    }
    if (upgrades[454]) {
        multiplier += 1;
    }
    if (upgrades[455]) {
        multiplier += 1;
    }
    if (upgrades[456]) {
        multiplier += 1;
    }
    if (upgrades[457]) {
        multiplier += 1;
    }
}

if (rares && id) {
    if (rares[0] == id.toLowerCase() && unitId == 1) {
        multiplier += 4;
    } else if (rares[3] == id.toLowerCase() && unitId == 8) {
        multiplier += 5;
    } else if (rares[5] == id.toLowerCase() && unitId == 3) {
        multiplier += 250;
    } else if (rares[8] == id.toLowerCase() && unitId == 4) {
        multiplier += 6;
    } else if (rares[10] == id.toLowerCase() && unitId == 5) {
        multiplier += 7;
    }
}

return new BigNumber(String(multiplier));
}

function getUpgradedGooProduction(unitId, upgrades, rares, id) {
const baseGoo = String(this.getBaseGooProduction(unitId));
return new BigNumber(baseGoo).plus(this.getProductionIncrease(unitId, upgrades, rares, id)).times(this.getProductionMultiplier(unitId, upgrades, rares, id));
}

function getAttackIncrease(unitId, upgrades, rares, id) {
if (!upgrades) {
    return 0;
}

var increase = 0;
if (unitId == 40) {
    if (upgrades[120]) {
        increase += 5;
    }
    if (upgrades[121]) {
        increase += 20;
    }
    if (upgrades[122]) {
        increase += 5;
    }
    if (upgrades[123]) {
        increase += 5;
    }
    if (upgrades[124]) {
        increase += 20;
    }
    if (upgrades[125]) {
        increase += 5;
    }
    if (upgrades[250]) {
        increase += 5;
    }
} else	if (unitId == 42) {
    if (upgrades[150]) {
        increase += 10;
    }
    if (upgrades[151]) {
        increase += 50;
    }
    if (upgrades[152]) {
        increase += 10;
    }
    if (upgrades[153]) {
        increase += 10;
    }
    if (upgrades[154]) {
        increase += 100;
    }
    if (upgrades[155]) {
        increase += 20;
    }
    if (upgrades[256]) {
        increase += 20;
    }
} else if (unitId == 43) {
    if (upgrades[165]) {
        increase += 5;
    }
    if (upgrades[166]) {
        increase += 25;
    }
    if (upgrades[167]) {
        increase += 5;
    }
    if (upgrades[168]) {
        increase += 5;
    }
    if (upgrades[169]) {
        increase += 25;
    }
    if (upgrades[170]) {
        increase += 10;
    }
    if (upgrades[259]) {
        increase += 10;
    }
}

if (rares && id) {
    if (rares[2] == id.toLowerCase() && unitId == 40) {
        increase += 60;
    }
}

return new BigNumber(String(increase));
}

function getAttackMultiplier(unitId, upgrades, rares, id) {
var multiplier = 1;
if (!upgrades) {
    return new BigNumber(multiplier);
}

if (unitId == 42) {
    if (upgrades[156]) {
        multiplier += 0.5;
    }
    if (upgrades[157]) {
        multiplier += 1;
    }
    if (upgrades[158]) {
        multiplier += 0.5;
    }
    if (upgrades[159]) {
        multiplier += 0.5;
    }
    if (upgrades[160]) {
        multiplier += 1.5;
    }
    if (upgrades[161]) {
        multiplier += 1;
    }
    if (upgrades[257]) {
        multiplier += 1;
    }
} else if (unitId == 44) {
    if (upgrades[180]) {
        multiplier += 0.5;
    }
    if (upgrades[181]) {
        multiplier += 1;
    }
    if (upgrades[182]) {
        multiplier += 0.5;
    }
    if (upgrades[183]) {
        multiplier += 0.5;
    }
    if (upgrades[184]) {
        multiplier += 1;
    }
    if (upgrades[185]) {
        multiplier += 1;
    }
    if (upgrades[262]) {
        multiplier += 1;
    }
} else if (unitId == 46) {
    if (upgrades[210]) {
        multiplier += 0.5;
    }
    if (upgrades[211]) {
        multiplier += 1;
    }
    if (upgrades[212]) {
        multiplier += 0.5;
    }
    if (upgrades[213]) {
        multiplier += 0.5;
    }
    if (upgrades[214]) {
        multiplier += 1;
    }
    if (upgrades[215]) {
        multiplier += 1;
    }
    if (upgrades[276]) {
        multiplier += 1;
    }
}

return new BigNumber(String(multiplier));
}

function getUpgradedAttack(unitId, upgrades) {
const baseAttack = String(this.getBaseAttack(unitId));
return this.formatNumber(new BigNumber(baseAttack).plus(this.getAttackIncrease(unitId, upgrades)).times(this.getAttackMultiplier(unitId, upgrades)));
}

function getDefenseIncrease(unitId, upgrades, rares, id) {
if (!upgrades) {
    return 0;
}

var increase = 0;
if (unitId == 40) {
    if (upgrades[126]) {
        increase += 5;
    }
    if (upgrades[127]) {
        increase += 20;
    }
    if (upgrades[128]) {
        increase += 5;
    }
    if (upgrades[129]) {
        increase += 5;
    }
    if (upgrades[130]) {
        increase += 20;
    }
    if (upgrades[131]) {
        increase += 5;
    }
    if (upgrades[251]) {
        increase += 5;
    }
} else if (unitId == 41) {
    if (upgrades[135]) {
        increase += 5;
    }
    if (upgrades[136]) {
        increase += 20;
    }
    if (upgrades[137]) {
        increase += 5;
    }
    if (upgrades[138]) {
        increase += 5;
    }
    if (upgrades[139]) {
        increase += 20;
    }
    if (upgrades[140]) {
        increase += 5;
    }
    if (upgrades[253]) {
        increase += 5;
    }
}

return new BigNumber(String(increase));
}

function getDefenseMultiplier(unitId, upgrades, rares, id) {
var multiplier = 1;
if (!upgrades) {
    return new BigNumber(multiplier);
}

if (unitId == 41) {
    if (upgrades[141]) {
        multiplier += 0.5;
    }
    if (upgrades[142]) {
        multiplier += 1;
    }
    if (upgrades[143]) {
        multiplier += 0.5;
    }
    if (upgrades[144]) {
        multiplier += 0.5;
    }
    if (upgrades[145]) {
        multiplier += 1;
    }
    if (upgrades[146]) {
        multiplier += 1;
    }
    if (upgrades[254]) {
        multiplier += 1;
    }
} else if (unitId == 44) {
    if (upgrades[186]) {
        multiplier += 0.5;
    }
    if (upgrades[187]) {
        multiplier += 1;
    }
    if (upgrades[188]) {
        multiplier += 0.5;
    }
    if (upgrades[189]) {
        multiplier += 0.5;
    }
    if (upgrades[190]) {
        multiplier += 1;
    }
    if (upgrades[191]) {
        multiplier += 1;
    }
    if (upgrades[263]) {
        multiplier += 1;
    }
} else if (unitId == 46) {
    if (upgrades[216]) {
        multiplier += 0.5;
    }
    if (upgrades[217]) {
        multiplier += 1;
    }
    if (upgrades[218]) {
        multiplier += 0.5;
    }
    if (upgrades[219]) {
        multiplier += 0.5;
    }
    if (upgrades[220]) {
        multiplier += 1;
    }
    if (upgrades[221]) {
        multiplier += 1;
    }
    if (upgrades[277]) {
        multiplier += 1;
    }
}

if (rares && id) {
    if (rares[7] == id.toLowerCase() && unitId == 41) {
        increase += 4;
    }
}

return new BigNumber(String(multiplier));
}

function getUpgradedDefense(unitId, upgrades) {
const baseAttack = String(this.getBaseDefense(unitId));
return this.formatNumber(new BigNumber(baseAttack).plus(this.getDefenseIncrease(unitId, upgrades)).times(this.getDefenseMultiplier(unitId, upgrades)));
}

function getStealingIncrease(unitId, upgrades, rares, id) {
if (!upgrades) {
    return 0;
}

var increase = 0;
if (unitId == 40) {
    if (upgrades[278]) {
        increase += 10000;
    }
} else if (unitId == 41) {
    if (upgrades[280]) {
        increase += 5000;
    }
} else if (unitId == 42) {
    if (upgrades[282]) {
        increase += 50000;
    }
} else if (unitId == 43) {
    if (upgrades[171]) {
        increase += 1000;
    }
    if (upgrades[172]) {
        increase += 10000;
    }
    if (upgrades[173]) {
        increase += 2000;
    }
    if (upgrades[174]) {
        increase += 3000;
    }
    if (upgrades[175]) {
        increase += 10000;
    }
    if (upgrades[176]) {
        increase += 4000;
    }
    if (upgrades[260]) {
        increase += 10000;
    }
    if (upgrades[285]) {
        increase += 5000;
    }
} else if (unitId == 44) {
    if (upgrades[286]) {
        increase += 10000;
    }
} else if (unitId == 45) {
    if (upgrades[195]) {
        increase += 10000;
    }
    if (upgrades[196]) {
        increase += 25000;
    }
    if (upgrades[197]) {
        increase += 10000;
    }
    if (upgrades[198]) {
        increase += 10000;
    }
    if (upgrades[199]) {
        increase += 50000;
    }
    if (upgrades[200]) {
        increase += 15000;
    }
    if (upgrades[265]) {
        increase += 50000;
    }
    if (upgrades[288]) {
        increase += 50000;
    }
} else if (unitId == 46) {
    if (upgrades[290]) {
        increase += 20000;
    }
}

return new BigNumber(String(increase));
}

function getStealingMultiplier(unitId, upgrades, rares, id) {
var multiplier = 1;
if (!upgrades) {
    return new BigNumber(multiplier);
}

if (unitId == 40) {
    if (upgrades[279]) {
        multiplier += 0.5;
    }
} else if (unitId == 41) {
    if (upgrades[281]) {
        multiplier += 0.5;
    }
} else if (unitId == 42) {
    if (upgrades[283]) {
        multiplier += 0.5;
    }
} else if (unitId == 43) {
    if (upgrades[284]) {
        multiplier += 0.5;
    }
} else if (unitId == 44) {
    if (upgrades[287]) {
        multiplier += 0.5;
    }
} else if (unitId == 45) {
    if (upgrades[201]) {
        multiplier += 0.5;
    }
    if (upgrades[202]) {
        multiplier += 1;
    }
    if (upgrades[203]) {
        multiplier += 0.5;
    }
    if (upgrades[204]) {
        multiplier += 0.5;
    }
    if (upgrades[205]) {
        multiplier += 1.5;
    }
    if (upgrades[206]) {
        multiplier += 1;
    }
    if (upgrades[266]) {
        multiplier += 1;
    }
    if (upgrades[289]) {
        multiplier += 0.5;
    }
} else if (unitId == 46) {
    if (upgrades[291]) {
        multiplier += 0.5;
    }
}

if (rares && id) {
    if (rares[4] == id.toLowerCase() && unitId == 43) {
        multiplier += 4;
    }
}

return new BigNumber(String(multiplier));
}

function getUpgradedStealingRaw(unitId, upgrades) {
const baseAttack = String(this.getBaseStealing(unitId));
return new BigNumber(baseAttack).plus(this.getStealingIncrease(unitId, upgrades)).times(this.getStealingMultiplier(unitId, upgrades));
}

function getUpgradedStealing(unitId, upgrades) {
const baseAttack = String(this.getBaseStealing(unitId));
return this.formatNumber(new BigNumber(baseAttack).plus(this.getStealingIncrease(unitId, upgrades)).times(this.getStealingMultiplier(unitId, upgrades)));
}

function getBaseGooProduction(unitId) {
if (unitId == 1) {
    return 0.2;
} else if (unitId == 2) {
    return 0.5;
} else if (unitId == 3) {
    return 100;
} else if (unitId == 4) {
    return 1;
} else if (unitId == 5) {
    return 2;
} else if (unitId == 6) {
    return 4;
} else if (unitId == 7) {
    return 500;
} else if (unitId == 8) {
    return 6;
} else if (unitId == 9) {
    return 50000;
} else if (unitId == 10) {
    return 8;
} else if (unitId == 11) {
    return 10;
} else if (unitId == 12) {
    return 12;
} else if (unitId == 13) {
    return 16;
} else {
    return 0;
}
}

function getBaseGooCost(unitId) {
if (unitId == 1) {
    return 0;
} else if (unitId == 2) {
    return 100;
} else if (unitId == 3) {
    return 0;
} else if (unitId == 4) {
    return 200;
} else if (unitId == 5) {
    return 500;
} else if (unitId == 6) {
    return 1000;
} else if (unitId == 7) {
    return 0;
} else if (unitId == 8) {
    return 1500;
} else if (unitId == 10) {
    return 2000;
} else if (unitId == 11) {
    return 3000;
} else if (unitId == 12) {
    return 5000;
} else if (unitId == 13) {
    return 8000;
} else if (unitId == 40) {
    return 50;
} else if (unitId == 41) {
    return 100;
} else if (unitId == 42) {
    return 0;
} else if (unitId == 43) {
    return 250;
} else if (unitId == 44) {
    return 500;
} else if (unitId == 45) {
    return 0;
} else if (unitId == 46) {
    return 750;
}
return 0;
}

function getTrxCostForUnit(unitId) {
if (unitId == 3) {
    return 100;
} else if (unitId == 7) {
    return 500;
} else if (unitId == 42) {
    return 100;
} else if (unitId == 45) {
    return 200;
}
return 0;
}

function getGooCostIncreaseHalf(unitId) {
if (unitId == 1) {
    return 10;
} else if (unitId == 2) {
    return 50;
} else if (unitId == 3) {
    return 0;
} else if (unitId == 4) {
    return 100;
} else if (unitId == 5) {
    return 250;
} else if (unitId == 6) {
    return 500;
} else if (unitId == 7) {
    return 0;
} else if (unitId == 8) {
    return 750;
} else if (unitId == 10) {
    return 1000;
} else if (unitId == 11) {
    return 1500;
} else if (unitId == 12) {
    return 2500;
} else if (unitId == 13) {
    return 4000;
} else if (unitId == 40) {
    return 25;
} else if (unitId == 41) {
    return 50;
} else if (unitId == 42) {
    return 0;
} else if (unitId == 43) {
    return 125;
} else if (unitId == 44) {
    return 250;
} else if (unitId == 45) {
    return 0;
} else if (unitId == 46) {
    return 375;
}
return 0;
}

function getUnitStats(unitId, upgrades) {
if (unitId == 45) {
    return '<span class="goo">' + this.getUpgradedStealing(unitId, upgrades) + '</span> Steal';
} else {
    return '<span class="text-warning">' + this.getUpgradedAttack(unitId, upgrades) + '</span> Att. | <span class="text-info">' + this.getUpgradedDefense(unitId, upgrades) + '</span> Def. | <span class="goo">' + this.getUpgradedStealing(unitId, upgrades) + '</span> Steal';
}
}

function getTotalUnitStats(unitId, upgrades, numUnits) {
if (unitId == 45) {
    return '<span class="goo">' + this.formatNumber(new BigNumber(this.getUpgradedStealingRaw(unitId, upgrades) * numUnits)) + '</span> Steal';
} else {
    return '<span class="text-warning">' + this.formatNumber(new BigNumber(this.getUpgradedAttack(unitId, upgrades)*numUnits)) + '</span> Att. | <span class="text-info">' + this.formatNumber(new BigNumber(this.getUpgradedDefense(unitId, upgrades)*numUnits)) + '</span> Def. | <span class="goo">' + this.formatNumber(new BigNumber((this.getUpgradedStealingRaw(unitId, upgrades) * numUnits))) + '</span> Steal';
}
}

function getBaseAttack(unitId) {
if (unitId == 40) {
    return 10;
} else if (unitId == 41) {
    return 1;
} else if (unitId == 42) {
    return 200;
} else if (unitId == 43) {
    return 25;
} else if (unitId == 44) {
    return 20;
} else if (unitId == 45) {
    return 0;
} else if (unitId == 46) {
    return 40;
} else if (unitId == 47) {
    return 20000;
} else {
    return 0;
}
}

function getBaseDefense(unitId) {
if (unitId == 40) {
    return 10;
} else if (unitId == 41) {
    return 25;
} else if (unitId == 42) {
    return 10;
} else if (unitId == 43) {
    return 1;
} else if (unitId == 44) {
    return 40;
} else if (unitId == 45) {
    return 0;
} else if (unitId == 46) {
    return 20;
} else if (unitId == 47) {
    return 10000;
} else {
    return 0;
}
}

function getBaseStealing(unitId) {
if (unitId == 40) {
    return 1000;
} else if (unitId == 41) {
    return 50;
} else if (unitId == 42) {
    return 5000;
} else if (unitId == 43) {
    return 1500;
} else if (unitId == 44) {
    return 500;
} else if (unitId == 45) {
    return 10000;
} else if (unitId == 46) {
    return 6000;
} else if (unitId == 47) {
    return 10000000;
} else {
    return 0;
}
}

function getUnitImage(unitId) {
if (unitId == 1) {
    return "internkitty.png";
} else if (unitId == 2) {
    return "graduategerbil.png";
} else if (unitId == 3) {
    return "labrat.png";
} else if (unitId == 4) {
    return "phdduck.png";
} else if (unitId == 5) {
    return "penguinprofessor.png";
} else if (unitId == 6) {
    return "biochembadger.png";
} else if (unitId == 7) {
    return "madhare.png";
} else if (unitId == 8) {
    return "hamsterwheel.png";
} else if (unitId == 9) {
    return "shrimpfarmer.png";
} else if (unitId == 10) {
    return "pharmacistpig.png";
} else if (unitId == 11) {
    return "barnowl.png";
} else if (unitId == 12) {
    return "drkoala.png";
} else if (unitId == 13) {
    return "sciencepanda.png";
} else if (unitId == 40) {
    return "soldierkitty.png";
} else if (unitId == 41) {
    return "knightkitty.png";
} else if (unitId == 42) {
    return "archerkitty.png";
} else if (unitId == 43) {
    return "firekitty.png";
} else if (unitId == 44) {
    return "macekitty.png";
} else if (unitId == 45) {
    return "baggagekitty.png";
} else if (unitId == 46) {
    return "centurionkitty.png";
} else if (unitId == 47) {
    return "piratekitty.png";
} else {
    return "internkitty.png";
}
}

function getUnitName(unitId) {
if (unitId == 1) {
    return "Intern Kitties";
} else if (unitId == 2) {
    return "Graduate Gerbils";
} else if (unitId == 3) {
    return "Lab Rats";
} else if (unitId == 4) {
    return "PhD. Ducks";
} else if (unitId == 5) {
    return "Prof. Penguin";
} else if (unitId == 6) {
    return "Biochem. Badgers";
} else if (unitId == 7) {
    return "Mad Hares";
} else if (unitId == 8) {
    return "Hamster Wheels";
} else if (unitId == 9) {
    return "Farmer Shrimp";
} else if (unitId == 10) {
    return "Pharmacist Piggy";
} else if (unitId == 11) {
    return "Barn Owl";
} else if (unitId == 12) {
    return "Dean Dr. Koala";
} else if (unitId == 13) {
    return "Science Panda";
} else if (unitId == 40) {
    return "Soldier Kitty";
} else if (unitId == 41) {
    return "Knight Kitty";
} else if (unitId == 42) {
    return "Archer Kitty";
} else if (unitId == 43) {
    return "Fire Kitty";
} else if (unitId == 44) {
    return "Mace Kitty";
} else if (unitId == 45) {
    return "Baggage Kitty";
} else if (unitId == 46) {
    return "Centurion Kitty";
} else if (unitId == 47) {
    return "Black Whiskers";
} else {
    return "??";
}
}

function getUpgradeId(index, unitId, upgrades) {
if (!upgrades) {
    return 0;
}

if (unitId == 1) {
    if (index == 0) {
        if (!upgrades[0]) {
            return 1;
        } else if (!upgrades[1]) {
            return 2;
        } else if (!upgrades[2]) {
            return 3;
        } else if (!upgrades[3]) {
            return 4;
        } else if (!upgrades[4]) {
            return 5;
        } else if (!upgrades[5]) {
            return 6;
        } else if (!upgrades[226]) {
            return 227;
        }
    } else if (index == 1) {
        if (!upgrades[6]) {
            return 7;
        } else if (!upgrades[7]) {
            return 8;
        } else if (!upgrades[8]) {
            return 9;
        } else if (!upgrades[9]) {
            return 10;
        } else if (!upgrades[10]) {
            return 11;
        } else if (!upgrades[11]) {
            return 12;
        } else if (!upgrades[227]) {
            return 228;
        }
    } else if (index == 2) {
        if (!upgrades[463]) {
            return 464;
        } else if (!upgrades[12]) {
            return 13;
        } else if (!upgrades[13]) {
            return 14;
        } else if (!upgrades[14]) {
            return 15;
        } else if (!upgrades[228]) {
            return 229;
        }
    }
}
if (unitId == 2) {
    if (index == 0) {
        if (!upgrades[15]) {
            return 16;
        } else if (!upgrades[16]) {
            return 17;
        } else if (!upgrades[17]) {
            return 18;
        } else if (!upgrades[18]) {
            return 19;
        } else if (!upgrades[19]) {
            return 20;
        } else if (!upgrades[20]) {
            return 21;
        } else if (!upgrades[229]) {
            return 230;
        }
    } else if (index == 1) {
        if (!upgrades[21]) {
            return 22;
        } else if (!upgrades[22]) {
            return 23;
        } else if (!upgrades[23]) {
            return 24;
        } else if (!upgrades[24]) {
            return 25;
        } else if (!upgrades[25]) {
            return 26;
        } else if (!upgrades[26]) {
            return 27;
        } else if (!upgrades[230]) {
            return 231;
        }
    } else if (index == 2) {
        if (!upgrades[464]) {
            return 465;
        } else if (!upgrades[27]) {
            return 28;
        } else if (!upgrades[28]) {
            return 29;
        } else if (!upgrades[29]) {
            return 30;
        } else if (!upgrades[231]) {
            return 232;
        }
    }
}
if (unitId == 3) {
    if (index == 0) {
        if (!upgrades[30]) {
            return 31;
        } else if (!upgrades[31]) {
            return 32;
        } else if (!upgrades[32]) {
            return 33;
        } else if (!upgrades[33]) {
            return 34;
        } else if (!upgrades[34]) {
            return 35;
        } else if (!upgrades[35]) {
            return 36;
        } else if (!upgrades[232]) {
            return 233;
        }
    } else if (index == 1) {
        if (!upgrades[36]) {
            return 37;
        } else if (!upgrades[37]) {
            return 38;
        } else if (!upgrades[38]) {
            return 39;
        } else if (!upgrades[39]) {
            return 40;
        } else if (!upgrades[40]) {
            return 41;
        } else if (!upgrades[41]) {
            return 42;
        } else if (!upgrades[233]) {
            return 234;
        }
    } else if (index == 2) {
        if (!upgrades[465]) {
            return 466;
        } else if (!upgrades[42]) {
            return 43;
        } else if (!upgrades[43]) {
            return 44;
        } else if (!upgrades[44]) {
            return 45;
        } else if (!upgrades[234]) {
            return 235;
        }
    }
}
if (unitId == 4) {
    if (index == 0) {
        if (!upgrades[268]) {
            return 269;
        } else if (!upgrades[45]) {
            return 46;
        } else if (!upgrades[46]) {
            return 47;
        } else if (!upgrades[47]) {
            return 48;
        } else if (!upgrades[48]) {
            return 49;
        } else if (!upgrades[49]) {
            return 50;
        } else if (!upgrades[50]) {
            return 51;
        } else if (!upgrades[235]) {
            return 236;
        }
    } else if (index == 1) {
        if (!upgrades[269]) {
            return 270;
        } else if (!upgrades[51]) {
            return 52;
        } else if (!upgrades[52]) {
            return 53;
        } else if (!upgrades[53]) {
            return 54;
        } else if (!upgrades[54]) {
            return 55;
        } else if (!upgrades[55]) {
            return 56;
        } else if (!upgrades[56]) {
            return 57;
        } else if (!upgrades[236]) {
            return 237;
        }
    } else if (index == 2) {
        if (!upgrades[466]) {
            return 467;
        } else if (!upgrades[57]) {
            return 58;
        } else if (!upgrades[58]) {
            return 59;
        } else if (!upgrades[59]) {
            return 60;
        } else if (!upgrades[237]) {
            return 238;
        }
    }
}
if (unitId == 5) {
    if (index == 0) {
        if (!upgrades[270]) {
            return 271;
        } else if (!upgrades[60]) {
            return 61;
        } else if (!upgrades[61]) {
            return 62;
        } else if (!upgrades[62]) {
            return 63;
        } else if (!upgrades[63]) {
            return 64;
        } else if (!upgrades[64]) {
            return 65;
        } else if (!upgrades[65]) {
            return 66;
        } else if (!upgrades[238]) {
            return 239;
        }
    } else if (index == 1) {
        if (!upgrades[271]) {
            return 272;
        } else if (!upgrades[66]) {
            return 67;
        } else if (!upgrades[67]) {
            return 68;
        } else if (!upgrades[68]) {
            return 69;
        } else if (!upgrades[69]) {
            return 70;
        } else if (!upgrades[70]) {
            return 71;
        } else if (!upgrades[71]) {
            return 72;
        } else if (!upgrades[239]) {
            return 240;
        }
    } else if (index == 2) {
        if (!upgrades[467]) {
            return 468;
        } else if (!upgrades[72]) {
            return 73;
        } else if (!upgrades[73]) {
            return 74;
        } else if (!upgrades[74]) {
            return 75;
        } else if (!upgrades[240]) {
            return 241;
        }
    }
}
if (unitId == 6) {
    if (index == 0) {
        if (!upgrades[272]) {
            return 273;
        } else if (!upgrades[75]) {
            return 76;
        } else if (!upgrades[76]) {
            return 77;
        } else if (!upgrades[77]) {
            return 78;
        } else if (!upgrades[78]) {
            return 79;
        } else if (!upgrades[79]) {
            return 80;
        } else if (!upgrades[80]) {
            return 81;
        } else if (!upgrades[241]) {
            return 242;
        }
    } else if (index == 1) {
        if (!upgrades[273]) {
            return 274;
        } else if (!upgrades[81]) {
            return 82;
        } else if (!upgrades[82]) {
            return 83;
        } else if (!upgrades[83]) {
            return 84;
        } else if (!upgrades[84]) {
            return 85;
        } else if (!upgrades[85]) {
            return 86;
        } else if (!upgrades[86]) {
            return 87;
        } else if (!upgrades[242]) {
            return 243;
        }
    } else if (index == 2) {
        if (!upgrades[468]) {
            return 469;
        } else if (!upgrades[87]) {
            return 88;
        } else if (!upgrades[88]) {
            return 89;
        } else if (!upgrades[89]) {
            return 90;
        } else if (!upgrades[243]) {
            return 244;
        }
    }
}
if (unitId == 7) {
    if (index == 0) {
        if (!upgrades[90]) {
            return 91;
        } else if (!upgrades[91]) {
            return 92;
        } else if (!upgrades[92]) {
            return 93;
        } else if (!upgrades[93]) {
            return 94;
        } else if (!upgrades[94]) {
            return 95;
        } else if (!upgrades[95]) {
            return 96;
        } else if (!upgrades[244]) {
            return 245;
        }
    } else if (index == 1) {
        if (!upgrades[96]) {
            return 97;
        } else if (!upgrades[97]) {
            return 98;
        } else if (!upgrades[98]) {
            return 99;
        } else if (!upgrades[99]) {
            return 100;
        } else if (!upgrades[100]) {
            return 101;
        } else if (!upgrades[101]) {
            return 102;
        } else if (!upgrades[245]) {
            return 246;
        }
    } else if (index == 2) {
        if (!upgrades[469]) {
            return 470;
        } else if (!upgrades[102]) {
            return 103;
        } else if (!upgrades[103]) {
            return 104;
        } else if (!upgrades[104]) {
            return 105;
        } else if (!upgrades[246]) {
            return 247;
        }
    }
}
if (unitId == 8) {
    if (index == 0) {
        if (!upgrades[274]) {
            return 275;
        } else if (!upgrades[105]) {
            return 106;
        } else if (!upgrades[106]) {
            return 107;
        } else if (!upgrades[107]) {
            return 108;
        } else if (!upgrades[108]) {
            return 109;
        } else if (!upgrades[109]) {
            return 110;
        } else if (!upgrades[110]) {
            return 111;
        } else if (!upgrades[247]) {
            return 248;
        }
    } else if (index == 1) {
        if (!upgrades[275]) {
            return 276;
        } else if (!upgrades[111]) {
            return 112;
        } else if (!upgrades[112]) {
            return 113;
        } else if (!upgrades[113]) {
            return 114;
        } else if (!upgrades[114]) {
            return 115;
        } else if (!upgrades[115]) {
            return 116;
        } else if (!upgrades[116]) {
            return 117;
        } else if (!upgrades[248]) {
            return 249;
        }
    } else if (index == 2) {
        if (!upgrades[470]) {
            return 471;
        } else if (!upgrades[117]) {
            return 118;
        } else if (!upgrades[118]) {
            return 119;
        } else if (!upgrades[119]) {
            return 120;
        } else if (!upgrades[249]) {
            return 250;
        }
    }
}
if (unitId == 10) {
    if (index == 0) {
        if (!upgrades[340]) {
            return 341;
        } else if (!upgrades[341]) {
            return 342;
        } else if (!upgrades[342]) {
            return 343;
        } else if (!upgrades[343]) {
            return 344;
        } else if (!upgrades[344]) {
            return 345;
        } else if (!upgrades[345]) {
            return 346;
        } else if (!upgrades[346]) {
            return 347;
        } else if (!upgrades[347]) {
            return 348;
        } else if (!upgrades[348]) {
            return 349;
        } else if (!upgrades[349]) {
            return 350;
        } else if (!upgrades[350]) {
            return 351;
        }
    } else if (index == 1) {
        if (!upgrades[351]) {
            return 352;
        } else if (!upgrades[352]) {
            return 353;
        } else if (!upgrades[353]) {
            return 354;
        } else if (!upgrades[354]) {
            return 355;
        } else if (!upgrades[355]) {
            return 356;
        } else if (!upgrades[356]) {
            return 357;
        } else if (!upgrades[357]) {
            return 358;
        } else if (!upgrades[358]) {
            return 359;
        } else if (!upgrades[359]) {
            return 360;
        } else if (!upgrades[360]) {
            return 361;
        } else if (!upgrades[361]) {
            return 362;
        }
    } else if (index == 2) {
        if (!upgrades[362]) {
            return 363;
        } else if (!upgrades[363]) {
            return 364;
        } else if (!upgrades[364]) {
            return 365;
        } else if (!upgrades[365]) {
            return 366;
        } else if (!upgrades[426]) {
            return 427;
        }
    }
}
if (unitId == 11) {
    if (index == 0) {
        if (!upgrades[366]) {
            return 367;
        } else if (!upgrades[367]) {
            return 368;
        } else if (!upgrades[368]) {
            return 369;
        } else if (!upgrades[369]) {
            return 370;
        } else if (!upgrades[370]) {
            return 371;
        } else if (!upgrades[371]) {
            return 372;
        } else if (!upgrades[372]) {
            return 373;
        } else if (!upgrades[373]) {
            return 374;
        } else if (!upgrades[374]) {
            return 375;
        } else if (!upgrades[375]) {
            return 376;
        } else if (!upgrades[376]) {
            return 377;
        }
    } else if (index == 1) {
        if (!upgrades[377]) {
            return 378;
        } else if (!upgrades[378]) {
            return 379;
        } else if (!upgrades[379]) {
            return 380;
        } else if (!upgrades[380]) {
            return 381;
        } else if (!upgrades[381]) {
            return 382;
        } else if (!upgrades[382]) {
            return 383;
        } else if (!upgrades[383]) {
            return 384;
        } else if (!upgrades[384]) {
            return 385;
        } else if (!upgrades[385]) {
            return 386;
        } else if (!upgrades[386]) {
            return 387;
        } else if (!upgrades[387]) {
            return 388;
        }
    } else if (index == 2) {
        if (!upgrades[388]) {
            return 389;
        } else if (!upgrades[389]) {
            return 390;
        } else if (!upgrades[390]) {
            return 391;
        } else if (!upgrades[391]) {
            return 392;
        } else if (!upgrades[427]) {
            return 428;
        }
    }
}
if (unitId == 12) {
    if (index == 0) {
        if (!upgrades[392]) {
            return 393;
        } else if (!upgrades[393]) {
            return 394;
        } else if (!upgrades[394]) {
            return 395;
        } else if (!upgrades[395]) {
            return 396;
        } else if (!upgrades[396]) {
            return 397;
        } else if (!upgrades[397]) {
            return 398;
        } else if (!upgrades[398]) {
            return 399;
        } else if (!upgrades[399]) {
            return 400;
        } else if (!upgrades[400]) {
            return 401;
        } else if (!upgrades[401]) {
            return 402;
        } else if (!upgrades[402]) {
            return 403;
        }
    } else if (index == 1) {
        if (!upgrades[403]) {
            return 404;
        } else if (!upgrades[404]) {
            return 405;
        } else if (!upgrades[405]) {
            return 406;
        } else if (!upgrades[406]) {
            return 407;
        } else if (!upgrades[407]) {
            return 408;
        } else if (!upgrades[408]) {
            return 409;
        } else if (!upgrades[409]) {
            return 410;
        } else if (!upgrades[410]) {
            return 411;
        } else if (!upgrades[411]) {
            return 412;
        } else if (!upgrades[412]) {
            return 413;
        } else if (!upgrades[413]) {
            return 414;
        }
    } else if (index == 2) {
        if (!upgrades[414]) {
            return 415;
        } else if (!upgrades[415]) {
            return 416;
        } else if (!upgrades[416]) {
            return 417;
        } else if (!upgrades[417]) {
            return 418;
        } else if (!upgrades[428]) {
            return 429;
        }
    }
}
if (unitId == 13) {
    if (index == 0) {
        if (!upgrades[436]) {
            return 437;
        } else if (!upgrades[437]) {
            return 438;
        } else if (!upgrades[438]) {
            return 439;
        } else if (!upgrades[439]) {
            return 440;
        } else if (!upgrades[440]) {
            return 441;
        } else if (!upgrades[441]) {
            return 442;
        } else if (!upgrades[442]) {
            return 443;
        } else if (!upgrades[443]) {
            return 444;
        } else if (!upgrades[444]) {
            return 445;
        } else if (!upgrades[445]) {
            return 446;
        } else if (!upgrades[446]) {
            return 447;
        }
    } else if (index == 1) {
        if (!upgrades[447]) {
            return 448;
        } else if (!upgrades[448]) {
            return 449;
        } else if (!upgrades[449]) {
            return 450;
        } else if (!upgrades[450]) {
            return 451;
        } else if (!upgrades[451]) {
            return 452;
        } else if (!upgrades[452]) {
            return 453;
        } else if (!upgrades[453]) {
            return 454;
        } else if (!upgrades[454]) {
            return 455;
        } else if (!upgrades[455]) {
            return 456;
        } else if (!upgrades[456]) {
            return 457;
        } else if (!upgrades[457]) {
            return 458;
        }
    } else if (index == 2) {
        if (!upgrades[458]) {
            return 459;
        } else if (!upgrades[459]) {
            return 460;
        } else if (!upgrades[460]) {
            return 461;
        } else if (!upgrades[461]) {
            return 462;
        } else if (!upgrades[462]) {
            return 463;
        }
    }
}
if (unitId == 40) {
    if (index == 0) {
        if (!upgrades[120]) {
            return 121;
        } else if (!upgrades[278]) {
            return 279;
        } else if (!upgrades[121]) {
            return 122;
        } else if (!upgrades[122]) {
            return 123;
        } else if (!upgrades[123]) {
            return 124;
        } else if (!upgrades[124]) {
            return 125;
        } else if (!upgrades[125]) {
            return 126;
        } else if (!upgrades[250]) {
            return 251;
        }
    } else if (index == 1) {
        if (!upgrades[126]) {
            return 127;
        } else if (!upgrades[279]) {
            return 280;
        } else if (!upgrades[127]) {
            return 128;
        } else if (!upgrades[128]) {
            return 129;
        } else if (!upgrades[129]) {
            return 130;
        } else if (!upgrades[130]) {
            return 131;
        } else if (!upgrades[131]) {
            return 132;
        } else if (!upgrades[251]) {
            return 252;
        }
    } else if (index == 2) {
        if (!upgrades[471]) {
            return 472;
        } else if (!upgrades[132]) {
            return 133;
        } else if (!upgrades[133]) {
            return 134;
        } else if (!upgrades[134]) {
            return 135;
        } else if (!upgrades[252]) {
            return 253;
        }
    }
}
if (unitId == 41) {
    if (index == 0) {
        if (!upgrades[135]) {
            return 136;
        } else if (!upgrades[280]) {
            return 281;
        } else if (!upgrades[136]) {
            return 137;
        } else if (!upgrades[137]) {
            return 138;
        } else if (!upgrades[138]) {
            return 139;
        } else if (!upgrades[139]) {
            return 140;
        } else if (!upgrades[140]) {
            return 141;
        } else if (!upgrades[253]) {
            return 254;
        }
    } else if (index == 1) {
        if (!upgrades[141]) {
            return 142;
        } else if (!upgrades[281]) {
            return 282;
        } else if (!upgrades[142]) {
            return 143;
        } else if (!upgrades[143]) {
            return 144;
        } else if (!upgrades[144]) {
            return 145;
        } else if (!upgrades[145]) {
            return 146;
        } else if (!upgrades[146]) {
            return 147;
        } else if (!upgrades[254]) {
            return 255;
        }
    } else if (index == 2) {
        if (!upgrades[472]) {
            return 473;
        } else if (!upgrades[147]) {
            return 148;
        } else if (!upgrades[148]) {
            return 149;
        } else if (!upgrades[149]) {
            return 150;
        } else if (!upgrades[255]) {
            return 256;
        }
    }
}
if (unitId == 42) {
    if (index == 0) {
        if (!upgrades[150]) {
            return 151;
        } else if (!upgrades[282]) {
            return 283;
        } else if (!upgrades[151]) {
            return 152;
        } else if (!upgrades[152]) {
            return 153;
        } else if (!upgrades[153]) {
            return 154;
        } else if (!upgrades[154]) {
            return 155;
        } else if (!upgrades[155]) {
            return 156;
        } else if (!upgrades[256]) {
            return 257;
        }
    } else if (index == 1) {
        if (!upgrades[156]) {
            return 157;
        } else if (!upgrades[283]) {
            return 284;
        } else if (!upgrades[157]) {
            return 158;
        } else if (!upgrades[158]) {
            return 159;
        } else if (!upgrades[159]) {
            return 160;
        } else if (!upgrades[160]) {
            return 161;
        } else if (!upgrades[161]) {
            return 162;
        } else if (!upgrades[257]) {
            return 258;
        }
    } else if (index == 2) {
        if (!upgrades[473]) {
            return 474;
        } else if (!upgrades[162]) {
            return 163;
        } else if (!upgrades[163]) {
            return 164;
        } else if (!upgrades[164]) {
            return 165;
        } else if (!upgrades[258]) {
            return 259;
        }
    }
}
if (unitId == 43) {
    if (index == 0) {
        if (!upgrades[165]) {
            return 166;
        } else if (!upgrades[284]) {
            return 285;
        } else if (!upgrades[166]) {
            return 167;
        } else if (!upgrades[167]) {
            return 168;
        } else if (!upgrades[168]) {
            return 169;
        } else if (!upgrades[169]) {
            return 170;
        } else if (!upgrades[170]) {
            return 171;
        } else if (!upgrades[259]) {
            return 260;
        }
    } else if (index == 1) {
        if (!upgrades[171]) {
            return 172;
        } else if (!upgrades[285]) {
            return 286;
        } else if (!upgrades[172]) {
            return 173;
        } else if (!upgrades[173]) {
            return 174;
        } else if (!upgrades[174]) {
            return 175;
        } else if (!upgrades[175]) {
            return 176;
        } else if (!upgrades[176]) {
            return 177;
        } else if (!upgrades[260]) {
            return 261;
        }
    } else if (index == 2) {
        if (!upgrades[474]) {
            return 475;
        } else if (!upgrades[177]) {
            return 178;
        } else if (!upgrades[178]) {
            return 179;
        } else if (!upgrades[179]) {
            return 180;
        } else if (!upgrades[261]) {
            return 262;
        }
    }
}
if (unitId == 44) {
    if (index == 0) {
        if (!upgrades[180]) {
            return 181;
        } else if (!upgrades[286]) {
            return 287;
        } else if (!upgrades[181]) {
            return 182;
        } else if (!upgrades[182]) {
            return 183;
        } else if (!upgrades[183]) {
            return 184;
        } else if (!upgrades[184]) {
            return 185;
        } else if (!upgrades[185]) {
            return 186;
        } else if (!upgrades[262]) {
            return 263;
        }
    } else if (index == 1) {
        if (!upgrades[186]) {
            return 187;
        } else if (!upgrades[287]) {
            return 288;
        } else if (!upgrades[187]) {
            return 188;
        } else if (!upgrades[188]) {
            return 189;
        } else if (!upgrades[189]) {
            return 190;
        } else if (!upgrades[190]) {
            return 191;
        } else if (!upgrades[191]) {
            return 192;
        } else if (!upgrades[263]) {
            return 264;
        }
    } else if (index == 2) {
        if (!upgrades[475]) {
            return 476;
        } else if (!upgrades[192]) {
            return 193;
        } else if (!upgrades[193]) {
            return 194;
        } else if (!upgrades[194]) {
            return 195;
        } else if (!upgrades[264]) {
            return 265;
        }
    }
}
if (unitId == 45) {
    if (index == 0) {
        if (!upgrades[195]) {
            return 196;
        } else if (!upgrades[288]) {
            return 289;
        } else if (!upgrades[196]) {
            return 197;
        } else if (!upgrades[197]) {
            return 198;
        } else if (!upgrades[198]) {
            return 199;
        } else if (!upgrades[199]) {
            return 200;
        } else if (!upgrades[200]) {
            return 201;
        } else if (!upgrades[265]) {
            return 266;
        }
    } else if (index == 1) {
        if (!upgrades[201]) {
            return 202;
        } else if (!upgrades[289]) {
            return 290;
        } else if (!upgrades[202]) {
            return 203;
        } else if (!upgrades[203]) {
            return 204;
        } else if (!upgrades[204]) {
            return 205;
        } else if (!upgrades[205]) {
            return 206;
        } else if (!upgrades[206]) {
            return 207;
        } else if (!upgrades[266]) {
            return 267;
        }
    } else if (index == 2) {
        if (!upgrades[476]) {
            return 477;
        } else if (!upgrades[207]) {
            return 208;
        } else if (!upgrades[208]) {
            return 209;
        } else if (!upgrades[209]) {
            return 210;
        } else if (!upgrades[267]) {
            return 268;
        }
    }
}
if (unitId == 46) {
    if (index == 0) {
        if (!upgrades[210]) {
            return 211;
        } else if (!upgrades[290]) {
            return 291;
        } else if (!upgrades[211]) {
            return 212;
        } else if (!upgrades[212]) {
            return 213;
        } else if (!upgrades[213]) {
            return 214;
        } else if (!upgrades[214]) {
            return 215;
        } else if (!upgrades[215]) {
            return 216;
        } else if (!upgrades[276]) {
            return 277;
        }
    } else if (index == 1) {
        if (!upgrades[216]) {
            return 217;
        } else if (!upgrades[291]) {
            return 292;
        } else if (!upgrades[217]) {
            return 218;
        } else if (!upgrades[218]) {
            return 219;
        } else if (!upgrades[219]) {
            return 220;
        } else if (!upgrades[220]) {
            return 221;
        } else if (!upgrades[221]) {
            return 222;
        } else if (!upgrades[277]) {
            return 278;
        }
    } else if (index == 2) {
        if (!upgrades[222]) {
            return 223;
        } else if (!upgrades[223]) {
            return 224;
        } else if (!upgrades[224]) {
            return 225;
        } else if (!upgrades[225]) {
            return 226;
        } else if (!upgrades[435]) {
            return 436;
        }
    }
}
return 0;
}

function getGooCostForUpgrade(upgradeId) {
// new upgrades 1
var fiftyK = [466,470,474,477];
if (fiftyK.indexOf(upgradeId) > -1) {
    return 50000;
}
// new upgrades 2
var fiveHundredK = [472,473,475,476];
if (fiveHundredK.indexOf(upgradeId) > -1) {
    return 500000;
}
if (upgradeId == 1) {
    return 500;
} else if (upgradeId == 3) {
    return 20000;
} else if (upgradeId == 4) {
    return 500000;
} else if (upgradeId == 6) {
    return 15000000;
} else if (upgradeId == 7) {
    return 1000;
} else if (upgradeId == 9) {
    return 50000;
} else if (upgradeId == 10) {
    return 2500000;
} else if (upgradeId == 12) {
    return 100000000;
} else if (upgradeId == 16) {
    return 2500;
} else if (upgradeId == 18) {
    return 100000;
} else if (upgradeId == 19) {
    return 5000000;
} else if (upgradeId == 21) {
    return 250000000;
} else if (upgradeId == 22) {
    return 5000;
} else if (upgradeId == 24) {
    return 250000;
} else if (upgradeId == 25) {
    return 10000000;
} else if (upgradeId == 27) {
    return 500000000;
} else if (upgradeId == 31) {
    return 5000;
} else if (upgradeId == 33) {
    return 250000;
} else if (upgradeId == 34) {
    return 10000000;
} else if (upgradeId == 36) {
    return 500000000;
} else if (upgradeId == 37) {
    return 5000;
} else if (upgradeId == 39) {
    return 250000;
} else if (upgradeId == 40) {
    return 10000000;
} else if (upgradeId == 42) {
    return 500000000;
} else if (upgradeId == 43) {
    return 500000;
} else if (upgradeId == 44) {
    return 5000000;
} else if (upgradeId == 45) {
    return 50000000;
} else if (upgradeId == 46) {
    return 7500;
} else if (upgradeId == 48) {
    return 250000;
} else if (upgradeId == 49) {
    return 10000000;
} else if (upgradeId == 51) {
    return 500000000;
} else if (upgradeId == 52) {
    return 10000;
} else if (upgradeId == 54) {
    return 500000;
} else if (upgradeId == 55) {
    return 15000000;
} else if (upgradeId == 57) {
    return 500000000;
} else if (upgradeId == 61) {
    return 15000;
} else if (upgradeId == 63) {
    return 600000;
} else if (upgradeId == 64) {
    return 20000000;
} else if (upgradeId == 66) {
    return 750000000;
} else if (upgradeId == 67) {
    return 20000;
} else if (upgradeId == 69) {
    return 750000;
} else if (upgradeId == 70) {
    return 25000000;
} else if (upgradeId == 72) {
    return 1000000000;
} else if (upgradeId == 76) {
    return 25000;
} else if (upgradeId == 78) {
    return 800000;
} else if (upgradeId == 79) {
    return 30000000;
} else if (upgradeId == 81) {
    return 1200000000;
} else if (upgradeId == 82) {
    return 30000;
} else if (upgradeId == 84) {
    return 1000000;
} else if (upgradeId == 85) {
    return 40000000;
} else if (upgradeId == 87) {
    return 1500000000;
} else if (upgradeId == 91) {
    return 35000;
} else if (upgradeId == 93) {
    return 1200000;
} else if (upgradeId == 94) {
    return 50000000;
} else if (upgradeId == 96) {
    return 2000000000;
} else if (upgradeId == 97) {
    return 40000;
} else if (upgradeId == 99) {
    return 1500000;
} else if (upgradeId == 100) {
    return 60000000;
} else if (upgradeId == 102) {
    return 2500000000;
} else if (upgradeId == 103) {
    return 500000;
} else if (upgradeId == 104) {
    return 5000000;
} else if (upgradeId == 105) {
    return 50000000;
} else if (upgradeId == 106) {
    return 50000;
} else if (upgradeId == 108) {
    return 2000000;
} else if (upgradeId == 109) {
    return 75000000;
} else if (upgradeId == 111) {
    return 3000000000;
} else if (upgradeId == 112) {
    return 75000;
} else if (upgradeId == 114) {
    return 4000000;
} else if (upgradeId == 115) {
    return 100000000;
} else if (upgradeId == 117) {
    return 4000000000;
} else if (upgradeId == 121) {
    return 1000;
} else if (upgradeId == 123) {
    return 50000;
} else if (upgradeId == 124) {
    return 2000000;
} else if (upgradeId == 126) {
    return 50000000;
} else if (upgradeId == 127) {
    return 2500;
} else if (upgradeId == 129) {
    return 100000;
} else if (upgradeId == 130) {
    return 4000000;
} else if (upgradeId == 132) {
    return 100000000;
} else if (upgradeId == 133) {
    return 5000000;
} else if (upgradeId == 136) {
    return 2500;
} else if (upgradeId == 138) {
    return 100000;
} else if (upgradeId == 139) {
    return 4000000;
} else if (upgradeId == 141) {
    return 100000000;
} else if (upgradeId == 142) {
    return 5000;
} else if (upgradeId == 144) {
    return 150000;
} else if (upgradeId == 145) {
    return 5000000;
} else if (upgradeId == 147) {
    return 120000000;
} else if (upgradeId == 148) {
    return 5000000;
} else if (upgradeId == 151) {
    return 5000;
} else if (upgradeId == 153) {
    return 150000;
} else if (upgradeId == 154) {
    return 5000000;
} else if (upgradeId == 156) {
    return 120000000;
} else if (upgradeId == 157) {
    return 7500;
} else if (upgradeId == 159) {
    return 200000;
} else if (upgradeId == 160) {
    return 7500000;
} else if (upgradeId == 162) {
    return 150000000;
} else if (upgradeId == 163) {
    return 500000;
} else if (upgradeId == 164) {
    return 5000000;
} else if (upgradeId == 165) {
    return 50000000;
} else if (upgradeId == 166) {
    return 7500;
} else if (upgradeId == 168) {
    return 200000;
} else if (upgradeId == 169) {
    return 7500000;
} else if (upgradeId == 171) {
    return 150000000;
} else if (upgradeId == 172) {
    return 10000;
} else if (upgradeId == 174) {
    return 250000;
} else if (upgradeId == 175) {
    return 8000000;
} else if (upgradeId == 177) {
    return 160000000;
} else if (upgradeId == 178) {
    return 5000000;
} else if (upgradeId == 181) {
    return 10000;
} else if (upgradeId == 183) {
    return 250000;
} else if (upgradeId == 184) {
    return 8000000;
} else if (upgradeId == 186) {
    return 160000000;
} else if (upgradeId == 187) {
    return 15000;
} else if (upgradeId == 189) {
    return 400000;
} else if (upgradeId == 190) {
    return 10000000;
} else if (upgradeId == 192) {
    return 200000000;
} else if (upgradeId == 193) {
    return 5000000;
} else if (upgradeId == 196) {
    return 25000;
} else if (upgradeId == 198) {
    return 500000;
} else if (upgradeId == 199) {
    return 10000000;
} else if (upgradeId == 201) {
    return 250000000;
} else if (upgradeId == 202) {
    return 50000;
} else if (upgradeId == 204) {
    return 1000000;
} else if (upgradeId == 205) {
    return 50000000;
} else if (upgradeId == 207) {
    return 2000000000;
} else if (upgradeId == 208) {
    return 500000;
} else if (upgradeId == 209) {
    return 5000000;
} else if (upgradeId == 210) {
    return 50000000;
} else if (upgradeId == 211) {
    return 50000;
} else if (upgradeId == 213) {
    return 750000;
} else if (upgradeId == 214) {
    return 12000000;
} else if (upgradeId == 216) {
    return 300000000;
} else if (upgradeId == 217) {
    return 75000;
} else if (upgradeId == 219) {
    return 1000000;
} else if (upgradeId == 220) {
    return 15000000;
} else if (upgradeId == 222) {
    return 500000000;
} else if (upgradeId == 223) {
    return 50000000;
} else if (upgradeId == 227) {
    return 750000000;
} else if (upgradeId == 228) {
    return 5000000000;
} else if (upgradeId == 230) {
    return 10000000000;
} else if (upgradeId == 231) {
    return 15000000000;
} else if (upgradeId == 233) {
    return 15000000000;
} else if (upgradeId == 234) {
    return 20000000000;
} else if (upgradeId == 235) {
    return 500000000;
} else if (upgradeId == 236) {
    return 15000000000;
} else if (upgradeId == 237) {
    return 20000000000;
} else if (upgradeId == 238) {
    return 5000000000;
} else if (upgradeId == 239) {
    return 25000000000;
} else if (upgradeId == 240) {
    return 30000000000;
} else if (upgradeId == 242) {
    return 35000000000;
} else if (upgradeId == 243) {
    return 40000000000;
} else if (upgradeId == 245) {
    return 45000000000;
} else if (upgradeId == 246) {
    return 50000000000;
} else if (upgradeId == 247) {
    return 500000000;
} else if (upgradeId == 248) {
    return 55000000000;
} else if (upgradeId == 249) {
    return 60000000000;
} else if (upgradeId == 251) {
    return 1000000000;
} else if (upgradeId == 252) {
    return 2000000000;
} else if (upgradeId == 254) {
    return 3000000000;
} else if (upgradeId == 255) {
    return 5000000000;
} else if (upgradeId == 257) {
    return 5000000000;
} else if (upgradeId == 258) {
    return 7500000000;
} else if (upgradeId == 259) {
    return 500000000;
} else if (upgradeId == 260) {
    return 7500000000;
} else if (upgradeId == 261) {
    return 10000000000;
} else if (upgradeId == 263) {
    return 10000000000;
} else if (upgradeId == 264) {
    return 15000000000;
} else if (upgradeId == 266) {
    return 20000000000;
} else if (upgradeId == 267) {
    return 50000000000;
} else if (upgradeId == 268) {
    return 500000000;
} else if (upgradeId == 277) {
    return 50000000000;
} else if (upgradeId == 278) {
    return 75000000000;
} else if (upgradeId == 279) {
    return 250000;
} else if (upgradeId == 280) {
    return 500000;
} else if (upgradeId == 281) {
    return 50000;
} else if (upgradeId == 282) {
    return 100000;
} else if (upgradeId == 283) {
    return 500000;
} else if (upgradeId == 284) {
    return 750000;
} else if (upgradeId == 285) {
    return 500000;
} else if (upgradeId == 286) {
    return 750000;
} else if (upgradeId == 287) {
    return 750000;
} else if (upgradeId == 288) {
    return 1000000;
} else if (upgradeId == 289) {
    return 250000;
} else if (upgradeId == 290) {
    return 750000;
} else if (upgradeId == 291) {
    return 1000000;
} else if (upgradeId == 292) {
    return 2000000;
} else if (upgradeId == 294) {
    return 50000000000;
} else if (upgradeId == 295) {
    return 500000000000;
} else if (upgradeId == 297) {
    return 100000000000;
} else if (upgradeId == 298) {
    return 1000000000000;
} else if (upgradeId == 300) {
    return 75000000000;
} else if (upgradeId == 301) {
    return 750000000000;
} else if (upgradeId == 303) {
    return 125000000000;
} else if (upgradeId == 304) {
    return 1250000000000;
} else if (upgradeId == 306) {
    return 50000000000;
} else if (upgradeId == 307) {
    return 500000000000;
} else if (upgradeId == 309) {
    return 100000000000;
} else if (upgradeId == 310) {
    return 1000000000000;
} else if (upgradeId == 312) {
    return 100000000000;
} else if (upgradeId == 313) {
    return 1000000000000;
} else if (upgradeId == 315) {
    return 150000000000;
} else if (upgradeId == 316) {
    return 1500000000000;
} else if (upgradeId == 318) {
    return 150000000000;
} else if (upgradeId == 319) {
    return 1500000000000;
} else if (upgradeId == 321) {
    return 200000000000;
} else if (upgradeId == 322) {
    return 2000000000000;
} else if (upgradeId == 324) {
    return 200000000000;
} else if (upgradeId == 325) {
    return 2000000000000;
} else if (upgradeId == 327) {
    return 300000000000;
} else if (upgradeId == 328) {
    return 3000000000000;
} else if (upgradeId == 330) {
    return 250000000000;
} else if (upgradeId == 331) {
    return 2500000000000;
} else if (upgradeId == 333) {
    return 350000000000;
} else if (upgradeId == 334) {
    return 3500000000000;
} else if (upgradeId == 336) {
    return 300000000000;
} else if (upgradeId == 337) {
    return 3000000000000;
} else if (upgradeId == 339) {
    return 500000000000;
} else if (upgradeId == 340) {
    return 5000000000000;
} else if (upgradeId == 342) {
    return 100000;
} else if (upgradeId == 344) {
    return 4000000;
} else if (upgradeId == 345) {
    return 150000000;
} else if (upgradeId == 347) {
    return 7500000000;
} else if (upgradeId == 348) {
    return 200000000000;
} else if (upgradeId == 350) {
    return 5000000000000;
} else if (upgradeId == 351) {
    return 75000000000000;
} else if (upgradeId == 353) {
    return 150000;
} else if (upgradeId == 355) {
    return 6000000;
} else if (upgradeId == 356) {
    return 200000000;
} else if (upgradeId == 358) {
    return 10000000000;
} else if (upgradeId == 359) {
    return 300000000000;
} else if (upgradeId == 361) {
    return 7500000000000;
} else if (upgradeId == 362) {
    return 100000000000000;
} else if (upgradeId == 368) {
    return 200000;
} else if (upgradeId == 370) {
    return 8000000;
} else if (upgradeId == 371) {
    return 300000000;
} else if (upgradeId == 373) {
    return 15000000000;
} else if (upgradeId == 374) {
    return 400000000000;
} else if (upgradeId == 376) {
    return 10000000000000;
} else if (upgradeId == 377) {
    return 125000000000000;
} else if (upgradeId == 379) {
    return 300000;
} else if (upgradeId == 381) {
    return 12000000;
} else if (upgradeId == 382) {
    return 400000000;
} else if (upgradeId == 384) {
    return 20000000000;
} else if (upgradeId == 385) {
    return 600000000000;
} else if (upgradeId == 387) {
    return 15000000000000;
} else if (upgradeId == 388) {
    return 150000000000000;
} else if (upgradeId == 394) {
    return 500000;
} else if (upgradeId == 396) {
    return 20000000;
} else if (upgradeId == 397) {
    return 600000000;
} else if (upgradeId == 399) {
    return 30000000000;
} else if (upgradeId == 400) {
    return 1000000000000;
} else if (upgradeId == 402) {
    return 25000000000000;
} else if (upgradeId == 403) {
    return 250000000000000;
} else if (upgradeId == 405) {
    return 750000;
} else if (upgradeId == 407) {
    return 30000000;
} else if (upgradeId == 408) {
    return 1000000000;
} else if (upgradeId == 410) {
    return 40000000000;
} else if (upgradeId == 411) {
    return 1250000000000;
} else if (upgradeId == 413) {
    return 30000000000000;
} else if (upgradeId == 414) {
    return 300000000000000;
} else if (upgradeId == 421) {
    return 50000000000;
} else if (upgradeId == 425) {
    return 50000000000;
} else if (upgradeId == 432) {
    return 50000000000;
} else if (upgradeId == 435) {
    return 50000000000;
} else if (upgradeId == 438) {
    return 1000000;
} else if (upgradeId == 440) {
    return 40000000;
} else if (upgradeId == 441) {
    return 1200000000;
} else if (upgradeId == 443) {
    return 50000000000;
} else if (upgradeId == 444) {
    return 1500000000000;
} else if (upgradeId == 446) {
    return 30000000000000;
} else if (upgradeId == 447) {
    return 300000000000000;
} else if (upgradeId == 449) {
    return 1250000;
} else if (upgradeId == 451) {
    return 50000000;
} else if (upgradeId == 452) {
    return 1500000000;
} else if (upgradeId == 454) {
    return 60000000000;
} else if (upgradeId == 455) {
    return 2000000000000;
} else if (upgradeId == 457) {
    return 35000000000000;
} else if (upgradeId == 458) {
    return 350000000000000;
}
return 0;
}

function getTrxCostForUpgrade(upgradeId) {
return getUnconvertedTrxCost(upgradeId)*10000;
// didn't want to make any manual editing mistakes :thinking:
}

function getUnconvertedTrxCost(upgradeId) {

// new upgrades
if (upgradeId == 464 || upgradeId == 465) {
    return 0.002; // 20 trx
}
if (upgradeId == 467 || upgradeId == 468) {
    return 0.002;
}
if (upgradeId == 469 || upgradeId == 471) {
    return 0.002;
}

if (upgradeId == 2) {
    return 0.1;
}
if (upgradeId == 5) {
    return 0.1;
}
if (upgradeId == 8) {
    return 0.1;
}
if (upgradeId == 11) {
    return 0.1;
}
if (upgradeId == 13) {
    return 0.1;
}
if (upgradeId == 14) {
    return 0.2;
}
if (upgradeId == 15) {
    return 0.5;
}

if (upgradeId == 17) {
    return 0.1;
}
if (upgradeId == 20) {
    return 0.1;
}
if (upgradeId == 23) {
    return 0.1;
}
if (upgradeId == 26) {
    return 0.1;
}
if (upgradeId == 28) {
    return 0.1;
}
if (upgradeId == 29) {
    return 0.2;
}
if (upgradeId == 30) {
    return 0.5;
}

if (upgradeId == 32) {
    return 0.1;
}
if (upgradeId == 35) {
    return 0.2;
}
if (upgradeId == 38) {
    return 0.1;
}
if (upgradeId == 41) {
    return 0.2;
}

if (upgradeId == 47) {
    return 0.1;
}
if (upgradeId == 50) {
    return 0.1;
}
if (upgradeId == 53) {
    return 0.1;
}
if (upgradeId == 56) {
    return 0.1;
}
if (upgradeId == 58) {
    return 0.1;
}
if (upgradeId == 59) {
    return 0.2;
}
if (upgradeId == 60) {
    return 0.5;
}

if (upgradeId == 62) {
    return 0.1;
}
if (upgradeId == 65) {
    return 0.1;
}
if (upgradeId == 68) {
    return 0.1;
}
if (upgradeId == 71) {
    return 0.1;
}
if (upgradeId == 73) {
    return 0.1;
}
if (upgradeId == 74) {
    return 0.2;
}
if (upgradeId == 75) {
    return 0.5;
}

if (upgradeId == 77) {
    return 0.1;
}
if (upgradeId == 80) {
    return 0.1;
}
if (upgradeId == 83) {
    return 0.1;
}
if (upgradeId == 86) {
    return 0.1;
}
if (upgradeId == 88) {
    return 0.1;
}
if (upgradeId == 89) {
    return 0.2;
}
if (upgradeId == 90) {
    return 0.5;
}

if (upgradeId == 92) {
    return 0.1;
}
if (upgradeId == 95) {
    return 0.2;
}
if (upgradeId == 98) {
    return 0.1;
}
if (upgradeId == 101) {
    return 0.2;
}

if (upgradeId == 107) {
    return 0.1;
}
if (upgradeId == 110) {
    return 0.1;
}
if (upgradeId == 113) {
    return 0.1;
}
if (upgradeId == 116) {
    return 0.1;
}
if (upgradeId == 118) {
    return 0.1;
}
if (upgradeId == 119) {
    return 0.2;
}
if (upgradeId == 120) {
    return 0.5;
}

if (upgradeId == 122) {
    return 0.1;
}
if (upgradeId == 125) {
    return 0.1;
}
if (upgradeId == 128) {
    return 0.1;
}
if (upgradeId == 131) {
    return 0.1;
}
if (upgradeId == 134) {
    return 0.1;
}
if (upgradeId == 135) {
    return 0.2;
}

if (upgradeId == 137) {
    return 0.1;
}
if (upgradeId == 140) {
    return 0.1;
}
if (upgradeId == 143) {
    return 0.1;
}
if (upgradeId == 146) {
    return 0.1;
}
if (upgradeId == 149) {
    return 0.1;
}
if (upgradeId == 150) {
    return 0.2;
}

if (upgradeId == 152) {
    return 0.1;
}
if (upgradeId == 155) {
    return 0.2;
}
if (upgradeId == 158) {
    return 0.1;
}
if (upgradeId == 161) {
    return 0.2;
}

if (upgradeId == 167) {
    return 0.1;
}
if (upgradeId == 170) {
    return 0.1;
}
if (upgradeId == 173) {
    return 0.1;
}
if (upgradeId == 176) {
    return 0.1;
}
if (upgradeId == 179) {
    return 0.1;
}
if (upgradeId == 180) {
    return 0.2;
}

if (upgradeId == 182) {
    return 0.1;
}
if (upgradeId == 185) {
    return 0.1;
}
if (upgradeId == 188) {
    return 0.1;
}
if (upgradeId == 191) {
    return 0.1;
}
if (upgradeId == 194) {
    return 0.1;
}
if (upgradeId == 195) {
    return 0.2;
}

if (upgradeId == 197) {
    return 0.1;
}
if (upgradeId == 200) {
    return 0.2;
}
if (upgradeId == 203) {
    return 0.1;
}
if (upgradeId == 206) {
    return 0.2;
}

if (upgradeId == 212) {
    return 0.1;
}
if (upgradeId == 215) {
    return 0.1;
}
if (upgradeId == 218) {
    return 0.1;
}
if (upgradeId == 221) {
    return 0.1;
}
if (upgradeId == 224) {
    return 0.1;
}
if (upgradeId == 225) {
    return 0.2;
}
if (upgradeId == 226) {
    return 0.5;
}
if (upgradeId == 229) {
    return 0.5;
}
if (upgradeId == 232) {
    return 0.5;
}
if (upgradeId == 241) {
    return 0.5;
}
if (upgradeId == 244) {
    return 0.5;
}
if (upgradeId == 250) {
    return 0.5;
}
if (upgradeId == 253) {
    return 0.5;
}
if (upgradeId == 256) {
    return 0.5;
}
if (upgradeId == 262) {
    return 0.5;
}
if (upgradeId == 265) {
    return 0.5;
}
if (upgradeId == 269) {
    return 0.02;
}
if (upgradeId == 270) {
    return 0.02;
}
if (upgradeId == 271) {
    return 0.02;
}
if (upgradeId == 272) {
    return 0.02;
}
if (upgradeId == 273) {
    return 0.05;
}
if (upgradeId == 274) {
    return 0.05;
}
if (upgradeId == 275) {
    return 0.05;
}
if (upgradeId == 276) {
    return 0.05;
}

if (upgradeId == 293) {
    return 0.1;
}
if (upgradeId == 296) {
    return 0.1;
}
if (upgradeId == 299) {
    return 0.1;
}
if (upgradeId == 302) {
    return 0.1;
}
if (upgradeId == 305) {
    return 0.3;
}
if (upgradeId == 308) {
    return 0.3;
}
if (upgradeId == 311) {
    return 0.1;
}
if (upgradeId == 314) {
    return 0.1;
}
if (upgradeId == 317) {
    return 0.1;
}
if (upgradeId == 320) {
    return 0.1;
}
if (upgradeId == 323) {
    return 0.1;
}
if (upgradeId == 326) {
    return 0.1;
}
if (upgradeId == 329) {
    return 0.3;
}
if (upgradeId == 332) {
    return 0.3;
}
if (upgradeId == 335) {
    return 0.1;
}
if (upgradeId == 338) {
    return 0.1;
}

if (upgradeId == 341) {
    return 0.01;
}
if (upgradeId == 343) {
    return 0.1;
}
if (upgradeId == 346) {
    return 0.1;
}
if (upgradeId == 349) {
    return 0.1;
}
if (upgradeId == 352) {
    return 0.01;
}
if (upgradeId == 354) {
    return 0.1;
}
if (upgradeId == 357) {
    return 0.1;
}
if (upgradeId == 360) {
    return 0.1;
}
if (upgradeId == 363) {
    return 0.1;
}
if (upgradeId == 364) {
    return 0.2;
}
if (upgradeId == 365) {
    return 0.5;
}
if (upgradeId == 366) {
    return 0.5;
}

if (upgradeId == 367) {
    return 0.01;
}
if (upgradeId == 369) {
    return 0.1;
}
if (upgradeId == 372) {
    return 0.1;
}
if (upgradeId == 375) {
    return 0.1;
}
if (upgradeId == 378) {
    return 0.01;
}
if (upgradeId == 380) {
    return 0.1;
}
if (upgradeId == 383) {
    return 0.1;
}
if (upgradeId == 386) {
    return 0.1;
}
if (upgradeId == 389) {
    return 0.1;
}
if (upgradeId == 390) {
    return 0.2;
}
if (upgradeId == 391) {
    return 0.5;
}
if (upgradeId == 392) {
    return 0.5;
}

if (upgradeId == 393) {
    return 0.01;
}
if (upgradeId == 395) {
    return 0.1;
}
if (upgradeId == 398) {
    return 0.1;
}
if (upgradeId == 401) {
    return 0.1;
}
if (upgradeId == 404) {
    return 0.01;
}
if (upgradeId == 406) {
    return 0.1;
}
if (upgradeId == 409) {
    return 0.1;
}
if (upgradeId == 412) {
    return 0.1;
}
if (upgradeId == 415) {
    return 0.1;
}
if (upgradeId == 416) {
    return 0.2;
}
if (upgradeId == 417) {
    return 0.5;
}
if (upgradeId == 418) {
    return 0.5;
}

if (upgradeId == 419) {
    return 0.5;
}
if (upgradeId == 420) {
    return 0.5;
}
if (upgradeId == 422) {
    return 0.5;
}
if (upgradeId == 423) {
    return 0.5;
}
if (upgradeId == 424) {
    return 0.5;
}
if (upgradeId == 426) {
    return 0.5;
}
if (upgradeId == 427) {
    return 0.5;
}
if (upgradeId == 428) {
    return 0.5;
}
if (upgradeId == 429) {
    return 0.5;
}
if (upgradeId == 430) {
    return 0.5;
}
if (upgradeId == 431) {
    return 0.5;
}
if (upgradeId == 433) {
    return 0.5;
}
if (upgradeId == 434) {
    return 0.5;
}
if (upgradeId == 436) {
    return 0.5;
}

if (upgradeId == 437) {
    return 0.01;
}
if (upgradeId == 439) {
    return 0.1;
}
if (upgradeId == 442) {
    return 0.1;
}
if (upgradeId == 445) {
    return 0.1;
}
if (upgradeId == 448) {
    return 0.01;
}
if (upgradeId == 450) {
    return 0.1;
}
if (upgradeId == 453) {
    return 0.1;
}
if (upgradeId == 456) {
    return 0.1;
}
if (upgradeId == 459) {
    return 0.1;
}
if (upgradeId == 460) {
    return 0.2;
}
if (upgradeId == 461) {
    return 0.5;
}
if (upgradeId == 462) {
    return 0.5;
}
if (upgradeId == 463) {
    return 0.5;
}
return 0;
}

function getUpgradeText(upgradeId) {
var newCapUpgrades = [464,465,466,467,468,469,470,471,472,473,474,475,476,477];
if (newCapUpgrades.indexOf(upgradeId) > -1) {
    return "99 Max Units";
}
if (upgradeId == 1) {
    return "+0.1 Base Prod.";
} else if (upgradeId == 2) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 3) {
    return "+0.1 Base Prod.";
} else if (upgradeId == 4) {
    return "+0.1 Base Prod.";
} else if (upgradeId == 5) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 6) {
    return "+0.1 Base Prod.";
} else if (upgradeId == 227) {
    return "+0.1 Base Prod.";
} else if (upgradeId == 293) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 294) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 295) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 7) {
    return "+50% Prod.";
} else if (upgradeId == 8) {
    return "+100% Prod.";
} else if (upgradeId == 9) {
    return "+50% Prod.";
} else if (upgradeId == 10) {
    return "+50% Prod.";
} else if (upgradeId == 11) {
    return "+100% Prod.";
} else if (upgradeId == 12) {
    return "+100% Prod.";
} else if (upgradeId == 228) {
    return "+100% Prod.";
} else if (upgradeId == 296) {
    return "+100% Prod.";
} else if (upgradeId == 297) {
    return "+50% Prod.";
} else if (upgradeId == 298) {
    return "+50% Prod.";
} else if (upgradeId == 13) {
    return "999 Max Units";
} else if (upgradeId == 14) {
    return "9999 Max Units";
} else if (upgradeId == 15) {
    return "99,999 Max Units";
} else if (upgradeId == 229) {
    return "999,999 Max Units";
} else if (upgradeId == 419) {
    return "9,999,999 Max Units";
} else if (upgradeId == 16) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 17) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 18) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 19) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 20) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 21) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 230) {
    return "+0.2 Base Prod.";
} else if (upgradeId == 299) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 300) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 301) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 22) {
    return "+50% Prod.";
} else if (upgradeId == 23) {
    return "+100% Prod.";
} else if (upgradeId == 24) {
    return "+50% Prod.";
} else if (upgradeId == 25) {
    return "+50% Prod.";
} else if (upgradeId == 26) {
    return "+100% Prod.";
} else if (upgradeId == 27) {
    return "+100% Prod.";
} else if (upgradeId == 231) {
    return "+100% Prod.";
} else if (upgradeId == 302) {
    return "+100% Prod.";
} else if (upgradeId == 303) {
    return "+100% Prod.";
} else if (upgradeId == 304) {
    return "+100% Prod.";
} else if (upgradeId == 28) {
    return "999 Max Units";
} else if (upgradeId == 29) {
    return "9999 Max Units";
} else if (upgradeId == 30) {
    return "99,999 Max Units";
} else if (upgradeId == 232) {
    return "999,999 Max Units";
} else if (upgradeId == 420) {
    return "9,999,999 Max Units";
} else if (upgradeId == 31) {
    return "+0.5 Base Prod.";
} else if (upgradeId == 32) {
    return "+1 Base Prod.";
} else if (upgradeId == 33) {
    return "+0.5 Base Prod.";
} else if (upgradeId == 34) {
    return "+0.5 Base Prod.";
} else if (upgradeId == 35) {
    return "+2 Base Prod.";
} else if (upgradeId == 36) {
    return "+0.5 Base Prod.";
} else if (upgradeId == 233) {
    return "+0.5 Base Prod.";
} else if (upgradeId == 305) {
    return "+3 Base Prod.";
} else if (upgradeId == 306) {
    return "+1 Base Prod.";
} else if (upgradeId == 307) {
    return "+3 Base Prod.";
} else if (upgradeId == 37) {
    return "+50% Prod.";
} else if (upgradeId == 38) {
    return "+100% Prod.";
} else if (upgradeId == 39) {
    return "+50% Prod.";
} else if (upgradeId == 40) {
    return "+50% Prod.";
} else if (upgradeId == 41) {
    return "+150% Prod.";
} else if (upgradeId == 42) {
    return "+100% Prod.";
} else if (upgradeId == 234) {
    return "+100% Prod.";
} else if (upgradeId == 308) {
    return "+200% Prod.";
} else if (upgradeId == 309) {
    return "+100% Prod.";
} else if (upgradeId == 310) {
    return "+100% Prod.";
} else if (upgradeId == 43) {
    return "999 Max Units";
} else if (upgradeId == 44) {
    return "9999 Max Units";
} else if (upgradeId == 45) {
    return "99,999 Max Units";
} else if (upgradeId == 235) {
    return "990,999 Max Units";
} else if (upgradeId == 421) {
    return "9,999,999 Max Units";
} else if (upgradeId == 269) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 46) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 47) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 48) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 49) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 50) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 51) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 236) {
    return "+0.4 Base Prod.";
} else if (upgradeId == 311) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 312) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 313) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 270) {
    return "+100% Prod.";
} else if (upgradeId == 52) {
    return "+50% Prod.";
} else if (upgradeId == 53) {
    return "+100% Prod.";
} else if (upgradeId == 54) {
    return "+50% Prod.";
} else if (upgradeId == 55) {
    return "+50% Prod.";
} else if (upgradeId == 56) {
    return "+100% Prod.";
} else if (upgradeId == 57) {
    return "+100% Prod.";
} else if (upgradeId == 237) {
    return "+100% Prod.";
} else if (upgradeId == 314) {
    return "+100% Prod.";
} else if (upgradeId == 315) {
    return "+100% Prod.";
} else if (upgradeId == 316) {
    return "+100% Prod.";
} else if (upgradeId == 58) {
    return "999 Max Units";
} else if (upgradeId == 59) {
    return "9999 Max Units";
} else if (upgradeId == 60) {
    return "99,999 Max Units";
} else if (upgradeId == 238) {
    return "999,999 Max Units";
} else if (upgradeId == 422) {
    return "9,999,999 Max Units";
} else if (upgradeId == 271) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 61) {
    return "+0.6 Base Prod.";
} else if (upgradeId == 62) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 63) {
    return "+0.6 Base Prod.";
} else if (upgradeId == 64) {
    return "+0.6 Base Prod.";
} else if (upgradeId == 65) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 66) {
    return "+0.6 Base Prod.";
} else if (upgradeId == 239) {
    return "+0.6 Base Prod.";
} else if (upgradeId == 317) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 318) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 319) {
    return "+1.2 Base Prod.";
} else if (upgradeId == 272) {
    return "+100% Prod.";
} else if (upgradeId == 67) {
    return "+50% Prod.";
} else if (upgradeId == 68) {
    return "+100% Prod.";
} else if (upgradeId == 69) {
    return "+50% Prod.";
} else if (upgradeId == 70) {
    return "+50% Prod.";
} else if (upgradeId == 71) {
    return "+100% Prod.";
} else if (upgradeId == 72) {
    return "+100% Prod.";
} else if (upgradeId == 240) {
    return "+100% Prod.";
} else if (upgradeId == 320) {
    return "+100% Prod.";
} else if (upgradeId == 321) {
    return "+100% Prod.";
} else if (upgradeId == 322) {
    return "+100% Prod.";
} else if (upgradeId == 73) {
    return "999 Max Units";
} else if (upgradeId == 74) {
    return "9999 Max Units";
} else if (upgradeId == 75) {
    return "99,999 Max Units";
} else if (upgradeId == 241) {
    return "999,999 Max Units";
} else if (upgradeId == 423) {
    return "9,999,999 Max Units";
} else if (upgradeId == 273) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 76) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 77) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 78) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 79) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 80) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 81) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 242) {
    return "+0.8 Base Prod.";
} else if (upgradeId == 323) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 324) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 325) {
    return "+1.6 Base Prod.";
} else if (upgradeId == 274) {
    return "+100% Prod.";
} else if (upgradeId == 82) {
    return "+50% Prod.";
} else if (upgradeId == 83) {
    return "+100% Prod.";
} else if (upgradeId == 84) {
    return "+50% Prod.";
} else if (upgradeId == 85) {
    return "+50% Prod.";
} else if (upgradeId == 86) {
    return "+100% Prod.";
} else if (upgradeId == 87) {
    return "+100% Prod.";
} else if (upgradeId == 243) {
    return "+100% Prod.";
} else if (upgradeId == 326) {
    return "+100% Prod.";
} else if (upgradeId == 327) {
    return "+100% Prod.";
} else if (upgradeId == 328) {
    return "+100% Prod.";
} else if (upgradeId == 88) {
    return "999 Max Units";
} else if (upgradeId == 89) {
    return "9999 Max Units";
} else if (upgradeId == 90) {
    return "99,999 Max Units";
} else if (upgradeId == 244) {
    return "999,999 Max Units";
} else if (upgradeId == 424) {
    return "9,999,999 Max Units";
} else if (upgradeId == 91) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 92) {
    return "+5 Base Prod.";
} else if (upgradeId == 93) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 94) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 95) {
    return "+10 Base Prod.";
} else if (upgradeId == 96) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 245) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 329) {
    return "+15 Base Prod.";
} else if (upgradeId == 330) {
    return "+5 Base Prod.";
} else if (upgradeId == 331) {
    return "+5 Base Prod.";
} else if (upgradeId == 97) {
    return "+50% Prod.";
} else if (upgradeId == 98) {
    return "+100% Prod.";
} else if (upgradeId == 99) {
    return "+50% Prod.";
} else if (upgradeId == 100) {
    return "+50% Prod.";
} else if (upgradeId == 101) {
    return "+150% Prod.";
} else if (upgradeId == 102) {
    return "+100% Prod.";
} else if (upgradeId == 246) {
    return "+100% Prod.";
} else if (upgradeId == 332) {
    return "+200% Prod.";
} else if (upgradeId == 333) {
    return "+100% Prod.";
} else if (upgradeId == 334) {
    return "+100% Prod.";
} else if (upgradeId == 103) {
    return "999 Max Units";
} else if (upgradeId == 104) {
    return "9999 Max Units";
} else if (upgradeId == 105) {
    return "99,999 Max Units";
} else if (upgradeId == 247) {
    return "999,999 Max Units";
} else if (upgradeId == 425) {
    return "9,999,999 Max Units";
} else if (upgradeId == 275) {
    return "+2 Base Prod.";
} else if (upgradeId == 106) {
    return "+1 Base Prod.";
} else if (upgradeId == 107) {
    return "+2 Base Prod.";
} else if (upgradeId == 108) {
    return "+1 Base Prod.";
} else if (upgradeId == 109) {
    return "+1 Base Prod.";
} else if (upgradeId == 110) {
    return "+2 Base Prod.";
} else if (upgradeId == 111) {
    return "+1 Base Prod.";
} else if (upgradeId == 248) {
    return "+1 Base Prod.";
} else if (upgradeId == 335) {
    return "+2 Base Prod.";
} else if (upgradeId == 336) {
    return "+2 Base Prod.";
} else if (upgradeId == 337) {
    return "+2 Base Prod.";
} else if (upgradeId == 276) {
    return "+100% Prod.";
} else if (upgradeId == 112) {
    return "+50% Prod.";
} else if (upgradeId == 113) {
    return "+100% Prod.";
} else if (upgradeId == 114) {
    return "+50% Prod.";
} else if (upgradeId == 115) {
    return "+50% Prod.";
} else if (upgradeId == 116) {
    return "+100% Prod.";
} else if (upgradeId == 117) {
    return "+100% Prod.";
} else if (upgradeId == 249) {
    return "+100% Prod.";
} else if (upgradeId == 338) {
    return "+100% Prod.";
} else if (upgradeId == 339) {
    return "+100% Prod.";
} else if (upgradeId == 340) {
    return "+100% Prod.";
} else if (upgradeId == 118) {
    return "999 Max Units";
} else if (upgradeId == 119) {
    return "9999 Max Units";
} else if (upgradeId == 120) {
    return "99,999 Max Units";
} else if (upgradeId == 250) {
    return "999,999 Max Units";
} else if (upgradeId == 426) {
    return "9,999,999 Max Units";
} else if (upgradeId == 341) {
    return "+3 Base Prod.";
} else if (upgradeId == 342) {
    return "+1.5 Base Prod.";
} else if (upgradeId == 343) {
    return "+3 Base Prod.";
} else if (upgradeId == 344) {
    return "+1.5 Base Prod.";
} else if (upgradeId == 345) {
    return "+1.5 Base Prod.";
} else if (upgradeId == 346) {
    return "+3 Base Prod.";
} else if (upgradeId == 347) {
    return "+1.5 Base Prod.";
} else if (upgradeId == 348) {
    return "+1.5 Base Prod.";
} else if (upgradeId == 349) {
    return "+3 Base Prod.";
} else if (upgradeId == 350) {
    return "+3 Base Prod.";
} else if (upgradeId == 351) {
    return "+3 Base Prod.";
} else if (upgradeId == 352) {
    return "+100% Prod.";
} else if (upgradeId == 353) {
    return "+50% Prod.";
} else if (upgradeId == 354) {
    return "+100% Prod.";
} else if (upgradeId == 355) {
    return "+50% Prod.";
} else if (upgradeId == 356) {
    return "+50% Prod.";
} else if (upgradeId == 357) {
    return "+100% Prod.";
} else if (upgradeId == 358) {
    return "+100% Prod.";
} else if (upgradeId == 359) {
    return "+100% Prod.";
} else if (upgradeId == 360) {
    return "+100% Prod.";
} else if (upgradeId == 361) {
    return "+100% Prod.";
} else if (upgradeId == 362) {
    return "+100% Prod.";
} else if (upgradeId == 363) {
    return "999 Max Units";
} else if (upgradeId == 364) {
    return "9999 Max Units";
} else if (upgradeId == 365) {
    return "99,999 Max Units";
} else if (upgradeId == 366) {
    return "999,999 Max Units";
} else if (upgradeId == 427) {
    return "9,999,999 Max Units";
} else if (upgradeId == 367) {
    return "+5 Base Prod.";
} else if (upgradeId == 368) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 369) {
    return "+5 Base Prod.";
} else if (upgradeId == 370) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 371) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 372) {
    return "+5 Base Prod.";
} else if (upgradeId == 373) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 374) {
    return "+2.5 Base Prod.";
} else if (upgradeId == 375) {
    return "+5 Base Prod.";
} else if (upgradeId == 376) {
    return "+5 Base Prod.";
} else if (upgradeId == 377) {
    return "+5 Base Prod.";
} else if (upgradeId == 378) {
    return "+100% Prod.";
} else if (upgradeId == 379) {
    return "+50% Prod.";
} else if (upgradeId == 380) {
    return "+100% Prod.";
} else if (upgradeId == 381) {
    return "+50% Prod.";
} else if (upgradeId == 382) {
    return "+50% Prod.";
} else if (upgradeId == 383) {
    return "+100% Prod.";
} else if (upgradeId == 384) {
    return "+100% Prod.";
} else if (upgradeId == 385) {
    return "+100% Prod.";
} else if (upgradeId == 386) {
    return "+100% Prod.";
} else if (upgradeId == 387) {
    return "+100% Prod.";
} else if (upgradeId == 388) {
    return "+100% Prod.";
} else if (upgradeId == 389) {
    return "999 Max Units";
} else if (upgradeId == 390) {
    return "9999 Max Units";
} else if (upgradeId == 391) {
    return "99,999 Max Units";
} else if (upgradeId == 392) {
    return "999,999 Max Units";
} else if (upgradeId == 428) {
    return "9,999,999 Max Units";
} else if (upgradeId == 393) {
    return "+8 Base Prod.";
} else if (upgradeId == 394) {
    return "+4 Base Prod.";
} else if (upgradeId == 395) {
    return "+8 Base Prod.";
} else if (upgradeId == 396) {
    return "+4 Base Prod.";
} else if (upgradeId == 397) {
    return "+4 Base Prod.";
} else if (upgradeId == 398) {
    return "+8 Base Prod.";
} else if (upgradeId == 399) {
    return "+4 Base Prod.";
} else if (upgradeId == 400) {
    return "+4 Base Prod.";
} else if (upgradeId == 401) {
    return "+8 Base Prod.";
} else if (upgradeId == 402) {
    return "+8 Base Prod.";
} else if (upgradeId == 403) {
    return "+8 Base Prod.";
} else if (upgradeId == 404) {
    return "+100% Prod.";
} else if (upgradeId == 405) {
    return "+50% Prod.";
} else if (upgradeId == 406) {
    return "+100% Prod.";
} else if (upgradeId == 407) {
    return "+50% Prod.";
} else if (upgradeId == 408) {
    return "+50% Prod.";
} else if (upgradeId == 409) {
    return "+100% Prod.";
} else if (upgradeId == 410) {
    return "+100% Prod.";
} else if (upgradeId == 411) {
    return "+100% Prod.";
} else if (upgradeId == 412) {
    return "+100% Prod.";
} else if (upgradeId == 413) {
    return "+100% Prod.";
} else if (upgradeId == 414) {
    return "+100% Prod.";
} else if (upgradeId == 415) {
    return "999 Max Units";
} else if (upgradeId == 416) {
    return "9999 Max Units";
} else if (upgradeId == 417) {
    return "99,999 Max Units";
} else if (upgradeId == 418) {
    return "999,999 Max Units";
} else if (upgradeId == 429) {
    return "9,999,999 Max Units";
} else if (upgradeId == 437) {
    return "+12 Base Prod.";
} else if (upgradeId == 438) {
    return "+6 Base Prod.";
} else if (upgradeId == 439) {
    return "+12 Base Prod.";
} else if (upgradeId == 440) {
    return "+6 Base Prod.";
} else if (upgradeId == 441) {
    return "+6 Base Prod.";
} else if (upgradeId == 442) {
    return "+12 Base Prod.";
} else if (upgradeId == 443) {
    return "+6 Base Prod.";
} else if (upgradeId == 444) {
    return "+6 Base Prod.";
} else if (upgradeId == 445) {
    return "+12 Base Prod.";
} else if (upgradeId == 446) {
    return "+12 Base Prod.";
} else if (upgradeId == 447) {
    return "+12 Base Prod.";
} else if (upgradeId == 448) {
    return "+100% Prod.";
} else if (upgradeId == 449) {
    return "+50% Prod.";
} else if (upgradeId == 450) {
    return "+100% Prod.";
} else if (upgradeId == 451) {
    return "+50% Prod.";
} else if (upgradeId == 452) {
    return "+50% Prod.";
} else if (upgradeId == 453) {
    return "+100% Prod.";
} else if (upgradeId == 454) {
    return "+100% Prod.";
} else if (upgradeId == 455) {
    return "+100% Prod.";
} else if (upgradeId == 456) {
    return "+100% Prod.";
} else if (upgradeId == 457) {
    return "+100% Prod.";
} else if (upgradeId == 458) {
    return "+100% Prod.";
} else if (upgradeId == 459) {
    return "999 Max Units";
} else if (upgradeId == 460) {
    return "9999 Max Units";
} else if (upgradeId == 461) {
    return "99,999 Max Units";
} else if (upgradeId == 462) {
    return "999,999 Max Units";
} else if (upgradeId == 463) {
    return "9,999,999 Max Units";
} else if (upgradeId == 121) {
    return "+5 Attack";
} else if (upgradeId == 279) {
    return "+10k Stealing";
} else if (upgradeId == 122) {
    return "+20 Attack";
} else if (upgradeId == 123) {
    return "+5 Attack";
} else if (upgradeId == 124) {
    return "+5 Attack";
} else if (upgradeId == 125) {
    return "+20 Attack";
} else if (upgradeId == 126) {
    return "+5 Attack";
} else if (upgradeId == 251) {
    return "+5 Attack";
} else if (upgradeId == 127) {
    return "+5 Defense";
} else if (upgradeId == 280) {
    return "+50% Stealing";
} else if (upgradeId == 128) {
    return "+20 Defense";
} else if (upgradeId == 129) {
    return "+5 Defense";
} else if (upgradeId == 130) {
    return "+5 Defense";
} else if (upgradeId == 131) {
    return "+20 Defense";
} else if (upgradeId == 132) {
    return "+5 Defense";
} else if (upgradeId == 252) {
    return "+5 Defense";
} else if (upgradeId == 133) {
    return "999 Max Units";
} else if (upgradeId == 134) {
    return "9999 Max Units";
} else if (upgradeId == 135) {
    return "99,999 Max Units";
} else if (upgradeId == 253) {
    return "999,999 Max Units";
} else if (upgradeId == 430) {
    return "9,999,999 Max Units";
} else if (upgradeId == 136) {
    return "+5 Defense";
} else if (upgradeId == 281) {
    return "+5k Stealing";
} else if (upgradeId == 137) {
    return "+20 Defense";
} else if (upgradeId == 138) {
    return "+5 Defense";
} else if (upgradeId == 139) {
    return "+5 Defense";
} else if (upgradeId == 140) {
    return "+20 Defense";
} else if (upgradeId == 141) {
    return "+5 Defense";
} else if (upgradeId == 254) {
    return "+5 Defense";
} else if (upgradeId == 142) {
    return "+50% Defense";
} else if (upgradeId == 282) {
    return "+50% Stealing";
} else if (upgradeId == 143) {
    return "+100% Defense";
} else if (upgradeId == 144) {
    return "+50% Defense";
} else if (upgradeId == 145) {
    return "+50% Defense";
} else if (upgradeId == 146) {
    return "+100% Defense";
} else if (upgradeId == 147) {
    return "+100% Defense";
} else if (upgradeId == 255) {
    return "+100% Defense";
} else if (upgradeId == 148) {
    return "999 Max Units";
} else if (upgradeId == 149) {
    return "9999 Max Units";
} else if (upgradeId == 150) {
    return "99,999 Max Units";
} else if (upgradeId == 256) {
    return "999,999 Max Units";
} else if (upgradeId == 431) {
    return "9,999,999 Max Units";
} else if (upgradeId == 151) {
    return "+10 Attack";
} else if (upgradeId == 283) {
    return "+50k Stealing";
} else if (upgradeId == 152) {
    return "+50 Attack";
} else if (upgradeId == 153) {
    return "+10 Attack";
} else if (upgradeId == 154) {
    return "+10 Attack";
} else if (upgradeId == 155) {
    return "+100 Attack";
} else if (upgradeId == 156) {
    return "+20 Attack";
} else if (upgradeId == 257) {
    return "+20 Attack";
} else if (upgradeId == 157) {
    return "+50% Attack";
} else if (upgradeId == 284) {
    return "+50% Stealing";
} else if (upgradeId == 158) {
    return "+100% Attack";
} else if (upgradeId == 159) {
    return "+50% Attack";
} else if (upgradeId == 160) {
    return "+50% Attack";
} else if (upgradeId == 161) {
    return "+150% Attack";
} else if (upgradeId == 162) {
    return "+100% Attack";
} else if (upgradeId == 258) {
    return "+100% Attack";
} else if (upgradeId == 163) {
    return "999 Max Units";
} else if (upgradeId == 164) {
    return "9999 Max Units";
} else if (upgradeId == 165) {
    return "99,999 Max Units";
} else if (upgradeId == 259) {
    return "999,999 Max Units";
} else if (upgradeId == 432) {
    return "9,999,999 Max Units";
} else if (upgradeId == 166) {
    return "+5 Attack";
} else if (upgradeId == 285) {
    return "+50% Stealing";
} else if (upgradeId == 167) {
    return "+25 Attack";
} else if (upgradeId == 168) {
    return "+5 Attack";
} else if (upgradeId == 169) {
    return "+5 Attack";
} else if (upgradeId == 170) {
    return "+25 Attack";
} else if (upgradeId == 171) {
    return "+10 Attack";
} else if (upgradeId == 260) {
    return "+10 Attack";
} else if (upgradeId == 172) {
    return "+1k Stealing";
} else if (upgradeId == 286) {
    return "+5k Stealing";
} else if (upgradeId == 173) {
    return "+10k Stealing";
} else if (upgradeId == 174) {
    return "+2k Stealing";
} else if (upgradeId == 175) {
    return "+3k Stealing";
} else if (upgradeId == 176) {
    return "+10k Stealing";
} else if (upgradeId == 177) {
    return "+4k Stealing";
} else if (upgradeId == 261) {
    return "+10k Stealing";
} else if (upgradeId == 178) {
    return "999 Max Units";
} else if (upgradeId == 179) {
    return "9999 Max Units";
} else if (upgradeId == 180) {
    return "99,999 Max Units";
} else if (upgradeId == 262) {
    return "999,999 Max Units";
} else if (upgradeId == 433) {
    return "9,999,999 Max Units";
} else if (upgradeId == 181) {
    return "+50% Attack";
} else if (upgradeId == 287) {
    return "+10k Stealing";
} else if (upgradeId == 182) {
    return "+100% Attack";
} else if (upgradeId == 183) {
    return "+50% Attack";
} else if (upgradeId == 184) {
    return "+50% Attack";
} else if (upgradeId == 185) {
    return "+100% Attack";
} else if (upgradeId == 186) {
    return "+100% Attack";
} else if (upgradeId == 263) {
    return "+100% Attack";
} else if (upgradeId == 187) {
    return "+50% Defense";
} else if (upgradeId == 288) {
    return "+50% Stealing";
} else if (upgradeId == 188) {
    return "+100% Defense";
} else if (upgradeId == 189) {
    return "+50% Defense";
} else if (upgradeId == 190) {
    return "+50% Defense";
} else if (upgradeId == 191) {
    return "+100% Defense";
} else if (upgradeId == 192) {
    return "+100% Defense";
} else if (upgradeId == 264) {
    return "+100% Defense";
} else if (upgradeId == 193) {
    return "999 Max Units";
} else if (upgradeId == 194) {
    return "9999 Max Units";
} else if (upgradeId == 195) {
    return "99,999 Max Units";
} else if (upgradeId == 265) {
    return "999,999 Max Units";
} else if (upgradeId == 434) {
    return "9,999,999 Max Units";
} else if (upgradeId == 196) {
    return "+10k Stealing";
} else if (upgradeId == 289) {
    return "+50k Stealing";
} else if (upgradeId == 197) {
    return "+25k Stealing";
} else if (upgradeId == 198) {
    return "+10k Stealing";
} else if (upgradeId == 199) {
    return "+10k Stealing";
} else if (upgradeId == 200) {
    return "+50k Stealing";
} else if (upgradeId == 201) {
    return "+15k Stealing";
} else if (upgradeId == 266) {
    return "+50k Stealing";
} else if (upgradeId == 202) {
    return "+50% Stealing";
} else if (upgradeId == 290) {
    return "+50% Stealing";
} else if (upgradeId == 203) {
    return "+100% Stealing";
} else if (upgradeId == 204) {
    return "+50% Stealing";
} else if (upgradeId == 205) {
    return "+50% Stealing";
} else if (upgradeId == 206) {
    return "+150% Stealing";
} else if (upgradeId == 207) {
    return "+100% Stealing";
} else if (upgradeId == 267) {
    return "+100% Stealing";
} else if (upgradeId == 208) {
    return "999 Max Units";
} else if (upgradeId == 209) {
    return "9999 Max Units";
} else if (upgradeId == 210) {
    return "99,999 Max Units";
} else if (upgradeId == 268) {
    return "999,999 Max Units";
} else if (upgradeId == 435) {
    return "9,999,999 Max Units";
} else if (upgradeId == 211) {
    return "+50% Attack";
} else if (upgradeId == 291) {
    return "+20k Stealing";
} else if (upgradeId == 212) {
    return "+100% Attack";
} else if (upgradeId == 213) {
    return "+50% Attack";
} else if (upgradeId == 214) {
    return "+50% Attack";
} else if (upgradeId == 215) {
    return "+100% Attack";
} else if (upgradeId == 216) {
    return "+100% Attack";
} else if (upgradeId == 277) {
    return "+100% Attack";
} else if (upgradeId == 217) {
    return "+50% Defense";
} else if (upgradeId == 292) {
    return "+50% Stealing";
} else if (upgradeId == 218) {
    return "+100% Defense";
} else if (upgradeId == 219) {
    return "+50% Defense";
} else if (upgradeId == 220) {
    return "+50% Defense";
} else if (upgradeId == 221) {
    return "+100% Defense";
} else if (upgradeId == 222) {
    return "+100% Defense";
} else if (upgradeId == 278) {
    return "+100% Defense";
} else if (upgradeId == 223) {
    return "999 Max Units";
} else if (upgradeId == 224) {
    return "9999 Max Units";
} else if (upgradeId == 225) {
    return "99,999 Max Units";
} else if (upgradeId == 226) {
    return "999,999 Max Units";
} else if (upgradeId == 436) {
    return "9,999,999 Max Units";
}

return "??";
}

function getNumUnitsCanAfford(unitId, existing, goo, tron, upgrades) {
var start = 10;
var lastCantAfford = -1;
var lastCanAfford = -1;
var cost;
const maxCapacity = this.getMaxUnitsCap(unitId, upgrades);

// while (start > 0 && existing.plus(lastCanAfford).lt(maxCapacity) && (lastCantAfford < 0 || lastCanAfford < 0)) {
while (start > 0 && (existing+lastCanAfford < maxCapacity) && (lastCantAfford < 0 || lastCanAfford < 0)) {
    cost = this.getGooCostForUnit(unitId, existing, start);
    if (goo < cost) {
        lastCantAfford = start;
        lastCanAfford = -1;
        start--;
    } else {
        lastCanAfford = start;
        start += 50;
    }
}

const tronCost = this.getTrxCostForUnit(unitId);
if (tronCost > 0) {
    const canAffordWithTron = Math.floor(tron / tronCost);
    if (lastCanAfford > canAffordWithTron) {
        lastCanAfford = canAffordWithTron;
    }
}

if (start == 0) {
    return 0;
} else if (existing + lastCanAfford > maxCapacity) {
    return new BigNumber(maxCapacity) - existing;
} else {
    return lastCanAfford;
}
}

function getMaxUnitsCap(unitId, upgrades) {
if (!upgrades) {
    return 9;
}

if (unitId == 1) {
    if (upgrades[418]) {
        return 9999999;
    } else if (upgrades[228]) {
        return 999999;
    } else if (upgrades[14]) {
        return 99999;
    } else if (upgrades[13]) {
        return 9999;
    } else if (upgrades[12]) {
        return 999;
    } else if (upgrades[463]) {
        return 99;
    }
} else if (unitId == 2) {
    if (upgrades[419]) {
        return 9999999;
    } else if (upgrades[231]) {
        return 999999;
    } else if (upgrades[29]) {
        return 99999;
    } else if (upgrades[28]) {
        return 9999;
    } else if (upgrades[27]) {
        return 999;
    } else if (upgrades[464]) {
        return 99;
    }
} else if (unitId == 3) {
    if (upgrades[420]) {
        return 9999999;
    } else if (upgrades[234]) {
        return 999999;
    } else if (upgrades[44]) {
        return 99999;
    } else if (upgrades[43]) {
        return 9999;
    } else if (upgrades[42]) {
        return 999;
    } else if (upgrades[465]) {
        return 99;
    }
} else if (unitId == 4) {
    if (upgrades[421]) {
        return 9999999;
    } else if (upgrades[237]) {
        return 999999;
    } else if (upgrades[59]) {
        return 99999;
    } else if (upgrades[58]) {
        return 9999;
    } else if (upgrades[57]) {
        return 999;
    } else if (upgrades[466]) {
        return 99;
    }
} else if (unitId == 5) {
    if (upgrades[422]) {
        return 9999999;
    } else if (upgrades[240]) {
        return 999999;
    } else if (upgrades[74]) {
        return 99999;
    } else if (upgrades[73]) {
        return 9999;
    } else if (upgrades[72]) {
        return 999;
    } else if (upgrades[467]) {
        return 99;
    }
} else if (unitId == 6) {
    if (upgrades[423]) {
        return 9999999;
    } else if (upgrades[243]) {
        return 999999;
    } else if (upgrades[89]) {
        return 99999;
    } else if (upgrades[88]) {
        return 9999;
    } else if (upgrades[87]) {
        return 999;
    } else if (upgrades[468]) {
        return 99;
    }
} else if (unitId == 7) {
    if (upgrades[424]) {
        return 9999999;
    } else if (upgrades[246]) {
        return 999999;
    } else if (upgrades[104]) {
        return 99999;
    } else if (upgrades[103]) {
        return 9999;
    } else if (upgrades[102]) {
        return 999;
    } else if (upgrades[469]) {
        return 99;
    }
} else if (unitId == 8) {
    if (upgrades[425]) {
        return 9999999;
    } else if (upgrades[249]) {
        return 999999;
    } else if (upgrades[119]) {
        return 99999;
    } else if (upgrades[118]) {
        return 9999;
    } else if (upgrades[117]) {
        return 999;
    } else if (upgrades[470]) {
        return 99;
    }
} else if (unitId == 10) {
    if (upgrades[426]) {
        return 9999999;
    } else if (upgrades[365]) {
        return 999999;
    } else if (upgrades[364]) {
        return 99999;
    } else if (upgrades[363]) {
        return 9999;
    } else if (upgrades[362]) {
        return 999;
    }
} else if (unitId == 11) {
    if (upgrades[427]) {
        return 9999999;
    } else if (upgrades[391]) {
        return 999999;
    } else if (upgrades[390]) {
        return 99999;
    } else if (upgrades[389]) {
        return 9999;
    } else if (upgrades[388]) {
        return 999;
    }
} else if (unitId == 12) {
    if (upgrades[428]) {
        return 9999999;
    } else if (upgrades[417]) {
        return 999999;
    } else if (upgrades[416]) {
        return 99999;
    } else if (upgrades[415]) {
        return 9999;
    } else if (upgrades[414]) {
        return 999;
    }
} else if (unitId == 13) {
    if (upgrades[462]) {
        return 9999999;
    } else if (upgrades[461]) {
        return 999999;
    } else if (upgrades[460]) {
        return 99999;
    } else if (upgrades[459]) {
        return 9999;
    } else if (upgrades[458]) {
        return 999;
    }
} else if (unitId == 40) {
    if (upgrades[429]) {
        return 9999999;
    } else if (upgrades[252]) {
        return 999999;
    } else if (upgrades[134]) {
        return 99999;
    } else if (upgrades[133]) {
        return 9999;
    } else if (upgrades[132]) {
        return 999;
    } else if (upgrades[471]) {
        return 99;
    }
} else if (unitId == 41) {
    if (upgrades[430]) {
        return 9999999;
    } else if (upgrades[255]) {
        return 999999;
    } else if (upgrades[149]) {
        return 99999;
    } else if (upgrades[148]) {
        return 9999;
    } else if (upgrades[147]) {
        return 999;
    } else if (upgrades[472]) {
        return 99;
    }
} else if (unitId == 42) {
    if (upgrades[431]) {
        return 9999999;
    } else if (upgrades[258]) {
        return 999999;
    } else if (upgrades[164]) {
        return 99999;
    } else if (upgrades[163]) {
        return 9999;
    } else if (upgrades[162]) {
        return 999;
    } else if (upgrades[473]) {
        return 99;
    }
} else if (unitId == 43) {
    if (upgrades[432]) {
        return 9999999;
    } else if (upgrades[261]) {
        return 999999;
    } else if (upgrades[179]) {
        return 99999;
    } else if (upgrades[178]) {
        return 9999;
    } else if (upgrades[177]) {
        return 999;
    } else if (upgrades[474]) {
        return 99;
    }
} else if (unitId == 44) {
    if (upgrades[433]) {
        return 9999999;
    } else if (upgrades[264]) {
        return 999999;
    } else if (upgrades[194]) {
        return 99999;
    } else if (upgrades[193]) {
        return 9999;
    } else if (upgrades[192]) {
        return 999;
    } else if (upgrades[475]) {
        return 99;
    }
} else if (unitId == 45) {
    if (upgrades[434]) {
        return 9999999;
    } else if (upgrades[267]) {
        return 999999;
    } else if (upgrades[209]) {
        return 99999;
    } else if (upgrades[208]) {
        return 9999;
    } else if (upgrades[207]) {
        return 999;
    } else if (upgrades[476]) {
        return 99;
    }
} else if (unitId == 46) {
    if (upgrades[435]) {
        return 9999999;
    } else if (upgrades[225]) {
        return 999999;
    } else if (upgrades[224]) {
        return 99999;
    } else if (upgrades[223]) {
        return 9999;
    } else if (upgrades[222]) {
        return 999;
    }
}
return 9;
}

function getNumAvailableUpgrades(index, unitId) {
if (unitId == 1) {
    if (index == 0) {
        return 7;
    } else if (index == 1) {
        return 7;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 2) {
    if (index == 0) {
        return 7;
    } else if (index == 1) {
        return 7;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 3) {
    if (index == 0) {
        return 7;
    } else if (index == 1) {
        return 7;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 4) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 5) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 6) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 7) {
    if (index == 0) {
        return 7;
    } else if (index == 1) {
        return 7;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 8) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 10) {
    if (index == 0) {
        return 11;
    } else if (index == 1) {
        return 11;
    } else if (index == 2) {
        return 6;
    }
} else if (unitId == 11) {
    if (index == 0) {
        return 11;
    } else if (index == 1) {
        return 11;
    } else if (index == 2) {
        return 6;
    }
} else if (unitId == 12) {
    if (index == 0) {
        return 11;
    } else if (index == 1) {
        return 11;
    } else if (index == 2) {
        return 6;
    }
} else if (unitId == 13) {
    if (index == 0) {
        return 11;
    } else if (index == 1) {
        return 11;
    } else if (index == 2) {
        return 6;
    }
} else if (unitId == 40) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 41) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 42) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 43) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 44) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 45) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
} else if (unitId == 46) {
    if (index == 0) {
        return 8;
    } else if (index == 1) {
        return 8;
    } else if (index == 2) {
        return 5;
    }
}
return 0;
}

function getNumBoughtUpgrades(index, unitId, upgrades) {
if (!upgrades) {
    return 0;
}

if (unitId == 1) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[0]) + this.boughtUpgrade(upgrades[1]) + this.boughtUpgrade(upgrades[2]) + this.boughtUpgrade(upgrades[3]) + this.boughtUpgrade(upgrades[4]) + this.boughtUpgrade(upgrades[5]) + this.boughtUpgrade(upgrades[226]) + this.boughtUpgrade(upgrades[292]) + this.boughtUpgrade(upgrades[293]) + this.boughtUpgrade(upgrades[294]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[6]) + this.boughtUpgrade(upgrades[7]) + this.boughtUpgrade(upgrades[8]) + this.boughtUpgrade(upgrades[9]) + this.boughtUpgrade(upgrades[10]) + this.boughtUpgrade(upgrades[11]) + this.boughtUpgrade(upgrades[227]) + this.boughtUpgrade(upgrades[295]) + this.boughtUpgrade(upgrades[296]) + this.boughtUpgrade(upgrades[297]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[12]) + this.boughtUpgrade(upgrades[13]) + this.boughtUpgrade(upgrades[14]) + this.boughtUpgrade(upgrades[228]) + this.boughtUpgrade(upgrades[418]) + this.boughtUpgrade(upgrades[463]);
    }
} else if (unitId == 2) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[15]) + this.boughtUpgrade(upgrades[16]) + this.boughtUpgrade(upgrades[17]) + this.boughtUpgrade(upgrades[18]) + this.boughtUpgrade(upgrades[19]) + this.boughtUpgrade(upgrades[20]) + this.boughtUpgrade(upgrades[229]) + this.boughtUpgrade(upgrades[298]) + this.boughtUpgrade(upgrades[299]) + this.boughtUpgrade(upgrades[300]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[21]) + this.boughtUpgrade(upgrades[22]) + this.boughtUpgrade(upgrades[23]) + this.boughtUpgrade(upgrades[24]) + this.boughtUpgrade(upgrades[25]) + this.boughtUpgrade(upgrades[26]) + this.boughtUpgrade(upgrades[230]) + this.boughtUpgrade(upgrades[301]) + this.boughtUpgrade(upgrades[302]) + this.boughtUpgrade(upgrades[303]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[27]) + this.boughtUpgrade(upgrades[28]) + this.boughtUpgrade(upgrades[29]) + this.boughtUpgrade(upgrades[231]) + this.boughtUpgrade(upgrades[419]) + this.boughtUpgrade(upgrades[464]);
    }
} else if (unitId == 3) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[30]) + this.boughtUpgrade(upgrades[31]) + this.boughtUpgrade(upgrades[32]) + this.boughtUpgrade(upgrades[33]) + this.boughtUpgrade(upgrades[34]) + this.boughtUpgrade(upgrades[35]) + this.boughtUpgrade(upgrades[232]) + this.boughtUpgrade(upgrades[304]) + this.boughtUpgrade(upgrades[305]) + this.boughtUpgrade(upgrades[306]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[36]) + this.boughtUpgrade(upgrades[37]) + this.boughtUpgrade(upgrades[38]) + this.boughtUpgrade(upgrades[39]) + this.boughtUpgrade(upgrades[40]) + this.boughtUpgrade(upgrades[41]) + this.boughtUpgrade(upgrades[233]) + this.boughtUpgrade(upgrades[307]) + this.boughtUpgrade(upgrades[308]) + this.boughtUpgrade(upgrades[309]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[42]) + this.boughtUpgrade(upgrades[43]) + this.boughtUpgrade(upgrades[44]) + this.boughtUpgrade(upgrades[234]) + this.boughtUpgrade(upgrades[420]) + this.boughtUpgrade(upgrades[465]);
    }
} else if (unitId == 4) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[45]) + this.boughtUpgrade(upgrades[46]) + this.boughtUpgrade(upgrades[47]) + this.boughtUpgrade(upgrades[48]) + this.boughtUpgrade(upgrades[49]) + this.boughtUpgrade(upgrades[50]) + this.boughtUpgrade(upgrades[235]) + this.boughtUpgrade(upgrades[268]) + this.boughtUpgrade(upgrades[310]) + this.boughtUpgrade(upgrades[311]) + this.boughtUpgrade(upgrades[312]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[51]) + this.boughtUpgrade(upgrades[52]) + this.boughtUpgrade(upgrades[53]) + this.boughtUpgrade(upgrades[54]) + this.boughtUpgrade(upgrades[55]) + this.boughtUpgrade(upgrades[56]) + this.boughtUpgrade(upgrades[236]) + this.boughtUpgrade(upgrades[269]) + this.boughtUpgrade(upgrades[313]) + this.boughtUpgrade(upgrades[314]) + this.boughtUpgrade(upgrades[315]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[57]) + this.boughtUpgrade(upgrades[58]) + this.boughtUpgrade(upgrades[59]) + this.boughtUpgrade(upgrades[237]) + this.boughtUpgrade(upgrades[421]) + this.boughtUpgrade(upgrades[466]);
    }
} else if (unitId == 5) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[60]) + this.boughtUpgrade(upgrades[61]) + this.boughtUpgrade(upgrades[62]) + this.boughtUpgrade(upgrades[63]) + this.boughtUpgrade(upgrades[64]) + this.boughtUpgrade(upgrades[65]) + this.boughtUpgrade(upgrades[238]) + this.boughtUpgrade(upgrades[270]) + this.boughtUpgrade(upgrades[316]) + this.boughtUpgrade(upgrades[317]) + this.boughtUpgrade(upgrades[318]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[66]) + this.boughtUpgrade(upgrades[67]) + this.boughtUpgrade(upgrades[68]) + this.boughtUpgrade(upgrades[69]) + this.boughtUpgrade(upgrades[70]) + this.boughtUpgrade(upgrades[71]) + this.boughtUpgrade(upgrades[239]) + this.boughtUpgrade(upgrades[271]) + this.boughtUpgrade(upgrades[319]) + this.boughtUpgrade(upgrades[320]) + this.boughtUpgrade(upgrades[321]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[72]) + this.boughtUpgrade(upgrades[73]) + this.boughtUpgrade(upgrades[74]) + this.boughtUpgrade(upgrades[240]) + this.boughtUpgrade(upgrades[422]) + this.boughtUpgrade(upgrades[467]);
    }
} else if (unitId == 6) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[75]) + this.boughtUpgrade(upgrades[76]) + this.boughtUpgrade(upgrades[77]) + this.boughtUpgrade(upgrades[78]) + this.boughtUpgrade(upgrades[79]) + this.boughtUpgrade(upgrades[80]) + this.boughtUpgrade(upgrades[241]) + this.boughtUpgrade(upgrades[272]) + this.boughtUpgrade(upgrades[322]) + this.boughtUpgrade(upgrades[323]) + this.boughtUpgrade(upgrades[324]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[81]) + this.boughtUpgrade(upgrades[82]) + this.boughtUpgrade(upgrades[83]) + this.boughtUpgrade(upgrades[84]) + this.boughtUpgrade(upgrades[85]) + this.boughtUpgrade(upgrades[86]) + this.boughtUpgrade(upgrades[242]) + this.boughtUpgrade(upgrades[273]) + this.boughtUpgrade(upgrades[325]) + this.boughtUpgrade(upgrades[326]) + this.boughtUpgrade(upgrades[327]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[87]) + this.boughtUpgrade(upgrades[88]) + this.boughtUpgrade(upgrades[89]) + this.boughtUpgrade(upgrades[243]) + this.boughtUpgrade(upgrades[423]) + this.boughtUpgrade(upgrades[468]);
    }
} else if (unitId == 7) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[90]) + this.boughtUpgrade(upgrades[91]) + this.boughtUpgrade(upgrades[92]) + this.boughtUpgrade(upgrades[93]) + this.boughtUpgrade(upgrades[94]) + this.boughtUpgrade(upgrades[95]) + this.boughtUpgrade(upgrades[244]) + this.boughtUpgrade(upgrades[328]) + this.boughtUpgrade(upgrades[329]) + this.boughtUpgrade(upgrades[330]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[96]) + this.boughtUpgrade(upgrades[97]) + this.boughtUpgrade(upgrades[98]) + this.boughtUpgrade(upgrades[99]) + this.boughtUpgrade(upgrades[100]) + this.boughtUpgrade(upgrades[101]) + this.boughtUpgrade(upgrades[245]) + this.boughtUpgrade(upgrades[331]) + this.boughtUpgrade(upgrades[332]) + this.boughtUpgrade(upgrades[333]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[102]) + this.boughtUpgrade(upgrades[103]) + this.boughtUpgrade(upgrades[104]) + this.boughtUpgrade(upgrades[246]) + this.boughtUpgrade(upgrades[424]) + this.boughtUpgrade(upgrades[469]);
    }
} else if (unitId == 8) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[105]) + this.boughtUpgrade(upgrades[106]) + this.boughtUpgrade(upgrades[107]) + this.boughtUpgrade(upgrades[108]) + this.boughtUpgrade(upgrades[109]) + this.boughtUpgrade(upgrades[110]) + this.boughtUpgrade(upgrades[247]) + this.boughtUpgrade(upgrades[274]) + this.boughtUpgrade(upgrades[334]) + this.boughtUpgrade(upgrades[335]) + this.boughtUpgrade(upgrades[336]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[111]) + this.boughtUpgrade(upgrades[112]) + this.boughtUpgrade(upgrades[113]) + this.boughtUpgrade(upgrades[114]) + this.boughtUpgrade(upgrades[115]) + this.boughtUpgrade(upgrades[116]) + this.boughtUpgrade(upgrades[248]) + this.boughtUpgrade(upgrades[275]) + this.boughtUpgrade(upgrades[337]) + this.boughtUpgrade(upgrades[338]) + this.boughtUpgrade(upgrades[339]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[117]) + this.boughtUpgrade(upgrades[118]) + this.boughtUpgrade(upgrades[119]) + this.boughtUpgrade(upgrades[249]) + this.boughtUpgrade(upgrades[425]) + this.boughtUpgrade(upgrades[470]);
    }
} else if (unitId == 10) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[340]) + this.boughtUpgrade(upgrades[341]) + this.boughtUpgrade(upgrades[342]) + this.boughtUpgrade(upgrades[343]) + this.boughtUpgrade(upgrades[344]) + this.boughtUpgrade(upgrades[345]) + this.boughtUpgrade(upgrades[346]) + this.boughtUpgrade(upgrades[347]) + this.boughtUpgrade(upgrades[348]) + this.boughtUpgrade(upgrades[349]) + this.boughtUpgrade(upgrades[350]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[351]) + this.boughtUpgrade(upgrades[352]) + this.boughtUpgrade(upgrades[353]) + this.boughtUpgrade(upgrades[354]) + this.boughtUpgrade(upgrades[355]) + this.boughtUpgrade(upgrades[356]) + this.boughtUpgrade(upgrades[357]) + this.boughtUpgrade(upgrades[358]) + this.boughtUpgrade(upgrades[359]) + this.boughtUpgrade(upgrades[360]) + this.boughtUpgrade(upgrades[361]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[362]) + this.boughtUpgrade(upgrades[363]) + this.boughtUpgrade(upgrades[364]) + this.boughtUpgrade(upgrades[365]) + this.boughtUpgrade(upgrades[426]);
    }
} else if (unitId == 11) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[366]) + this.boughtUpgrade(upgrades[367]) + this.boughtUpgrade(upgrades[368]) + this.boughtUpgrade(upgrades[369]) + this.boughtUpgrade(upgrades[370]) + this.boughtUpgrade(upgrades[371]) + this.boughtUpgrade(upgrades[372]) + this.boughtUpgrade(upgrades[373]) + this.boughtUpgrade(upgrades[374]) + this.boughtUpgrade(upgrades[375]) + this.boughtUpgrade(upgrades[376]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[377]) + this.boughtUpgrade(upgrades[378]) + this.boughtUpgrade(upgrades[379]) + this.boughtUpgrade(upgrades[380]) + this.boughtUpgrade(upgrades[381]) + this.boughtUpgrade(upgrades[382]) + this.boughtUpgrade(upgrades[383]) + this.boughtUpgrade(upgrades[384]) + this.boughtUpgrade(upgrades[385]) + this.boughtUpgrade(upgrades[386]) + this.boughtUpgrade(upgrades[387]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[388]) + this.boughtUpgrade(upgrades[389]) + this.boughtUpgrade(upgrades[390]) + this.boughtUpgrade(upgrades[391]) + this.boughtUpgrade(upgrades[427]);
    }
} else if (unitId == 12) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[392]) + this.boughtUpgrade(upgrades[393]) + this.boughtUpgrade(upgrades[394]) + this.boughtUpgrade(upgrades[395]) + this.boughtUpgrade(upgrades[396]) + this.boughtUpgrade(upgrades[397]) + this.boughtUpgrade(upgrades[398]) + this.boughtUpgrade(upgrades[399]) + this.boughtUpgrade(upgrades[400]) + this.boughtUpgrade(upgrades[401]) + this.boughtUpgrade(upgrades[402]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[403]) + this.boughtUpgrade(upgrades[404]) + this.boughtUpgrade(upgrades[405]) + this.boughtUpgrade(upgrades[406]) + this.boughtUpgrade(upgrades[407]) + this.boughtUpgrade(upgrades[408]) + this.boughtUpgrade(upgrades[409]) + this.boughtUpgrade(upgrades[410]) + this.boughtUpgrade(upgrades[411]) + this.boughtUpgrade(upgrades[412]) + this.boughtUpgrade(upgrades[413]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[414]) + this.boughtUpgrade(upgrades[415]) + this.boughtUpgrade(upgrades[416]) + this.boughtUpgrade(upgrades[417]) + this.boughtUpgrade(upgrades[428]);
    }
} else if (unitId == 13) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[436]) + this.boughtUpgrade(upgrades[437]) + this.boughtUpgrade(upgrades[438]) + this.boughtUpgrade(upgrades[439]) + this.boughtUpgrade(upgrades[440]) + this.boughtUpgrade(upgrades[441]) + this.boughtUpgrade(upgrades[442]) + this.boughtUpgrade(upgrades[443]) + this.boughtUpgrade(upgrades[444]) + this.boughtUpgrade(upgrades[445]) + this.boughtUpgrade(upgrades[446]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[447]) + this.boughtUpgrade(upgrades[448]) + this.boughtUpgrade(upgrades[449]) + this.boughtUpgrade(upgrades[450]) + this.boughtUpgrade(upgrades[451]) + this.boughtUpgrade(upgrades[452]) + this.boughtUpgrade(upgrades[453]) + this.boughtUpgrade(upgrades[454]) + this.boughtUpgrade(upgrades[455]) + this.boughtUpgrade(upgrades[456]) + this.boughtUpgrade(upgrades[457]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[458]) + this.boughtUpgrade(upgrades[459]) + this.boughtUpgrade(upgrades[460]) + this.boughtUpgrade(upgrades[461]) + this.boughtUpgrade(upgrades[462]);
    }
} else if (unitId == 40) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[120]) + this.boughtUpgrade(upgrades[278]) + this.boughtUpgrade(upgrades[121]) + this.boughtUpgrade(upgrades[122]) + this.boughtUpgrade(upgrades[123]) + this.boughtUpgrade(upgrades[124]) + this.boughtUpgrade(upgrades[125]) + this.boughtUpgrade(upgrades[250]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[126]) + this.boughtUpgrade(upgrades[279]) + this.boughtUpgrade(upgrades[127]) + this.boughtUpgrade(upgrades[128]) + this.boughtUpgrade(upgrades[129]) + this.boughtUpgrade(upgrades[130]) + this.boughtUpgrade(upgrades[131]) + this.boughtUpgrade(upgrades[251]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[132]) + this.boughtUpgrade(upgrades[133]) + this.boughtUpgrade(upgrades[134]) + this.boughtUpgrade(upgrades[252]) + this.boughtUpgrade(upgrades[429]) + this.boughtUpgrade(upgrades[471]);
    }
} else if (unitId == 41) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[135]) + this.boughtUpgrade(upgrades[280]) + this.boughtUpgrade(upgrades[136]) + this.boughtUpgrade(upgrades[137]) + this.boughtUpgrade(upgrades[138]) + this.boughtUpgrade(upgrades[139]) + this.boughtUpgrade(upgrades[140]) + this.boughtUpgrade(upgrades[253]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[141]) + this.boughtUpgrade(upgrades[281]) + this.boughtUpgrade(upgrades[142]) + this.boughtUpgrade(upgrades[143]) + this.boughtUpgrade(upgrades[144]) + this.boughtUpgrade(upgrades[145]) + this.boughtUpgrade(upgrades[146]) + this.boughtUpgrade(upgrades[254]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[147]) + this.boughtUpgrade(upgrades[148]) + this.boughtUpgrade(upgrades[149]) + this.boughtUpgrade(upgrades[255]) + this.boughtUpgrade(upgrades[430]) + this.boughtUpgrade(upgrades[472]);
    }
} else if (unitId == 42) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[150]) + this.boughtUpgrade(upgrades[282]) + this.boughtUpgrade(upgrades[151]) + this.boughtUpgrade(upgrades[152]) + this.boughtUpgrade(upgrades[153]) + this.boughtUpgrade(upgrades[154]) + this.boughtUpgrade(upgrades[155]) + this.boughtUpgrade(upgrades[256]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[156]) + this.boughtUpgrade(upgrades[283]) + this.boughtUpgrade(upgrades[157]) + this.boughtUpgrade(upgrades[158]) + this.boughtUpgrade(upgrades[159]) + this.boughtUpgrade(upgrades[160]) + this.boughtUpgrade(upgrades[161]) + this.boughtUpgrade(upgrades[257]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[162]) + this.boughtUpgrade(upgrades[163]) + this.boughtUpgrade(upgrades[164]) + this.boughtUpgrade(upgrades[258]) + this.boughtUpgrade(upgrades[431]) + this.boughtUpgrade(upgrades[473]);
    }
} else if (unitId == 43) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[165]) + this.boughtUpgrade(upgrades[284]) + this.boughtUpgrade(upgrades[166]) + this.boughtUpgrade(upgrades[167]) + this.boughtUpgrade(upgrades[168]) + this.boughtUpgrade(upgrades[169]) + this.boughtUpgrade(upgrades[170]) + this.boughtUpgrade(upgrades[259]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[171]) + this.boughtUpgrade(upgrades[285]) + this.boughtUpgrade(upgrades[172]) + this.boughtUpgrade(upgrades[173]) + this.boughtUpgrade(upgrades[174]) + this.boughtUpgrade(upgrades[175]) + this.boughtUpgrade(upgrades[176]) + this.boughtUpgrade(upgrades[260]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[177]) + this.boughtUpgrade(upgrades[178]) + this.boughtUpgrade(upgrades[179]) + this.boughtUpgrade(upgrades[261]) + this.boughtUpgrade(upgrades[432]) + this.boughtUpgrade(upgrades[474]);
    }
} else if (unitId == 44) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[180]) + this.boughtUpgrade(upgrades[286]) + this.boughtUpgrade(upgrades[181]) + this.boughtUpgrade(upgrades[182]) + this.boughtUpgrade(upgrades[183]) + this.boughtUpgrade(upgrades[184]) + this.boughtUpgrade(upgrades[185]) + this.boughtUpgrade(upgrades[262]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[186]) + this.boughtUpgrade(upgrades[287]) + this.boughtUpgrade(upgrades[187]) + this.boughtUpgrade(upgrades[188]) + this.boughtUpgrade(upgrades[189]) + this.boughtUpgrade(upgrades[190]) + this.boughtUpgrade(upgrades[191]) + this.boughtUpgrade(upgrades[263]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[192]) + this.boughtUpgrade(upgrades[193]) + this.boughtUpgrade(upgrades[194]) + this.boughtUpgrade(upgrades[264]) + this.boughtUpgrade(upgrades[433]) + this.boughtUpgrade(upgrades[475]);
    }
} else if (unitId == 45) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[195]) + this.boughtUpgrade(upgrades[288]) + this.boughtUpgrade(upgrades[196]) + this.boughtUpgrade(upgrades[197]) + this.boughtUpgrade(upgrades[198]) + this.boughtUpgrade(upgrades[199]) + this.boughtUpgrade(upgrades[200]) + this.boughtUpgrade(upgrades[265]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[201]) + this.boughtUpgrade(upgrades[289]) + this.boughtUpgrade(upgrades[202]) + this.boughtUpgrade(upgrades[203]) + this.boughtUpgrade(upgrades[204]) + this.boughtUpgrade(upgrades[205]) + this.boughtUpgrade(upgrades[206]) + this.boughtUpgrade(upgrades[266]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[207]) + this.boughtUpgrade(upgrades[208]) + this.boughtUpgrade(upgrades[209]) + this.boughtUpgrade(upgrades[267]) + this.boughtUpgrade(upgrades[434]) + this.boughtUpgrade(upgrades[476]);
    }
} else if (unitId == 46) {
    if (index == 0) {
        return this.boughtUpgrade(upgrades[210]) + this.boughtUpgrade(upgrades[290]) + this.boughtUpgrade(upgrades[211]) + this.boughtUpgrade(upgrades[212]) + this.boughtUpgrade(upgrades[213]) + this.boughtUpgrade(upgrades[214]) + this.boughtUpgrade(upgrades[215]) + this.boughtUpgrade(upgrades[276]);
    } else if (index == 1) {
        return this.boughtUpgrade(upgrades[216]) + this.boughtUpgrade(upgrades[291]) + this.boughtUpgrade(upgrades[217]) + this.boughtUpgrade(upgrades[218]) + this.boughtUpgrade(upgrades[219]) + this.boughtUpgrade(upgrades[220]) + this.boughtUpgrade(upgrades[221]) + this.boughtUpgrade(upgrades[277]);
    } else if (index == 2) {
        return this.boughtUpgrade(upgrades[222]) + this.boughtUpgrade(upgrades[223]) + this.boughtUpgrade(upgrades[224]) + this.boughtUpgrade(upgrades[225]) + this.boughtUpgrade(upgrades[435]);
    }
}
return 0;
}

function boughtUpgrade(upgradeOwned) {
if (upgradeOwned) {
    return 1;
} else {
    return 0;
}
}

// }

// export default Scripts;
