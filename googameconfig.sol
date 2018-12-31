pragma solidity ^0.4.0;

contract GooGameConfig {

    mapping(uint256 => Unit) private unitInfo;
    mapping(uint256 => Upgrade) private upgradeInfo;
    mapping(uint256 => Rare) private rareInfo;

    uint256 public currentNumberOfUnits = 16;
    uint256 public currentNumberOfUpgrades = 477; 
    uint256 public currentNumberOfRares = 2;

    uint256 public productionUnitEnd = 9;
    uint256 public soldierUnitEnd = 47;

    address public owner;
    address public allowedConfigModifier;

    struct Unit {
        uint256 unitId;
        uint256 baseGooCost;
        uint256 gooCostIncreaseHalf; // Halfed to make maths slightly less (cancels a 2 out)
        uint256 tronCost;
        uint256 baseGooProduction;

        uint256 attackValue;
        uint256 defenseValue;
        uint256 gooStealingCapacity;
        bool unitSellable; // Rare units (from raffle) not sellable
    }

    struct Upgrade {
        uint256 upgradeId;
        uint256 gooCost;
        uint256 tronCost;
        uint256 upgradeClass;
        uint256 unitId;
        uint256 upgradeValue;
        uint256 prerequisiteUpgrade;
    }

    struct Rare {
        uint256 rareId;
        uint256 tronCost;
        uint256 rareClass;
        uint256 unitId;
        uint256 rareValue;
    }

    // Constructor
    function GooGameConfig() public {
        owner = msg.sender;

        rareInfo[1] = Rare(1, 5000 trx, 1, 1, 40); // 40 = +400%
        rareInfo[2] = Rare(2, 5000 trx, 0, 2, 35); // +35

        unitInfo[1] = Unit(1, 0, 10, 0, 2, 0, 0, 0, true);
        unitInfo[2] = Unit(2, 100, 50, 0, 5, 0, 0, 0, true);
        unitInfo[3] = Unit(3, 0, 0, 100 trx, 1000, 0, 0, 0, true);
        unitInfo[4] = Unit(4, 200, 100, 0, 10, 0, 0, 0, true);
        unitInfo[5] = Unit(5, 500, 250, 0, 20, 0, 0, 0, true);
        unitInfo[6] = Unit(6, 1000, 500, 0, 40, 0, 0, 0, true);
        unitInfo[7] = Unit(7, 0, 1000, 500 trx, 5000, 0, 0, 0, true);
        unitInfo[8] = Unit(8, 1500, 750, 0, 60, 0, 0, 0, true);
        unitInfo[9] = Unit(9, 0, 0, 100000 trx, 500000, 0, 0, 0, false); // First secret rare unit from raffle (unsellable)

        unitInfo[40] = Unit(40, 50, 25, 0, 0, 10, 10, 10000, true);
        unitInfo[41] = Unit(41, 100, 50, 0, 0, 1, 25, 500, true);
        unitInfo[42] = Unit(42, 0, 0, 100 trx, 0, 200, 10, 50000, true);
        unitInfo[43] = Unit(43, 250, 125, 0, 0, 25, 1, 15000, true);
        unitInfo[44] = Unit(44, 500, 250, 0, 0, 20, 40, 5000, true);
        unitInfo[45] = Unit(45, 0, 2500, 200 trx, 0, 0, 0, 100000, true);
        //unitInfo[46] = Unit(46, 750, 375, 0, 0, 40, 20, 60000, true); CENTURION
        unitInfo[47] = Unit(47, 0, 0, 100000 trx, 0, 20000, 10000, 10000000, false); // Second secret rare unit from raffle (unsellable)
    }

    function setConfigSetupContract(address schema) external {
        require(msg.sender == owner);
        allowedConfigModifier = schema;
    }

    function addUpgrade(uint256 id, uint256 goo, uint256 tron, uint256 class, uint256 unit, uint256 value, uint256 prereq) external {
        require(msg.sender == allowedConfigModifier);
        upgradeInfo[id] = Upgrade(id, goo, tron, class, unit, value, prereq);
    }

    function addUnit(uint256 id, uint256 goo, uint256 gooIncreaseHalf, uint256 tron, uint256 production, uint256 attack, uint256 defense, uint256 stealing, bool sellable) external {
        require(msg.sender == allowedConfigModifier);
        unitInfo[id] = Unit(id, goo, gooIncreaseHalf, tron, production, attack, defense, stealing, sellable);
    }

    function addRare(uint256 id, uint256 tron, uint256 class, uint256 unit, uint256 value) external {
        require(msg.sender == allowedConfigModifier);
        rareInfo[id] = Rare(id, tron, class, unit, value);
    }

    function setConstants(uint256 numUnits, uint256 numUpgrades, uint256 numRares, uint256 lastProductionId, uint256 lastSoldierId) external {
        require(msg.sender == allowedConfigModifier);
        currentNumberOfUnits = numUnits;
        currentNumberOfUpgrades = numUpgrades;
        currentNumberOfRares = numRares;
        productionUnitEnd = lastProductionId;
        soldierUnitEnd = lastSoldierId;
    }

    function getGooCostForUnit(uint256 unitId, uint256 existing, uint256 amount) public constant returns (uint256) {
        Unit storage unit = unitInfo[unitId];
        if (amount == 1) { // 1
            if (existing == 0) {
                return unit.baseGooCost;
            } else {
                return unit.baseGooCost + (existing * unit.gooCostIncreaseHalf * 2);
            }
        } else if (amount > 1) {
            uint256 existingCost;
            if (existing > 0) { // Gated by unit limit
                existingCost = (unit.baseGooCost * existing) + (existing * (existing - 1) * unit.gooCostIncreaseHalf);
            }

            existing = SafeMath.add(existing, amount);
            return SafeMath.add(SafeMath.mul(unit.baseGooCost, existing), SafeMath.mul(SafeMath.mul(existing, (existing - 1)), unit.gooCostIncreaseHalf)) - existingCost;
        }
    }

    function getWeakenedDefensePower(uint256 defendingPower) external constant returns (uint256) {
        return defendingPower / 2;
    }

    function validRareId(uint256 rareId) external constant returns (bool) {
        return rareInfo[rareId].rareId == rareId;
    }

    function unitSellable(uint256 unitId) external constant returns (bool) {
        return unitInfo[unitId].unitSellable;
    }

    function unitTronCost(uint256 unitId) external constant returns (uint256) {
        return unitInfo[unitId].tronCost;
    }

    function unitGooProduction(uint256 unitId) external constant returns (uint256) {
        return unitInfo[unitId].baseGooProduction;
    }

    function unitAttack(uint256 unitId) external constant returns (uint256) {
        return unitInfo[unitId].attackValue;
    }

    function unitDefense(uint256 unitId) external constant returns (uint256) {
        return unitInfo[unitId].defenseValue;
    }

    function unitStealingCapacity(uint256 unitId) external constant returns (uint256) {
        return unitInfo[unitId].gooStealingCapacity;
    }

    function rareStartPrice(uint256 rareId) external constant returns (uint256) {
        return rareInfo[rareId].tronCost;
    }

    function upgradeGooCost(uint256 upgradeId) external constant returns (uint256) {
        return upgradeInfo[upgradeId].gooCost;
    }

    function upgradeTronCost(uint256 upgradeId) external constant returns (uint256) {
        return upgradeInfo[upgradeId].tronCost;
    }

    function upgradeClass(uint256 upgradeId) external constant returns (uint256) {
        return upgradeInfo[upgradeId].upgradeClass;
    }

    function upgradeUnitId(uint256 upgradeId) external constant returns (uint256) {
        return upgradeInfo[upgradeId].unitId;
    }

    function upgradeValue(uint256 upgradeId) external constant returns (uint256) {
        return upgradeInfo[upgradeId].upgradeValue;
    }

    function productionUnitIdRange() external constant returns (uint256, uint256) {
        return (1, productionUnitEnd);
    }

    function battleUnitIdRange() external constant returns (uint256, uint256) {
        return (40, soldierUnitEnd);
    }

    function upgradeIdRange() external constant returns (uint256, uint256) {
        return (1, currentNumberOfUpgrades);
    }

    function rareIdRange() external constant returns (uint256, uint256) {
        return (1, currentNumberOfRares);
    }

    function getUpgradeInfo(uint256 upgradeId) external constant returns (uint256, uint256, uint256, uint256, uint256, uint256) {
        return (upgradeInfo[upgradeId].gooCost, upgradeInfo[upgradeId].tronCost, upgradeInfo[upgradeId].upgradeClass,
        upgradeInfo[upgradeId].unitId, upgradeInfo[upgradeId].upgradeValue, upgradeInfo[upgradeId].prerequisiteUpgrade);
    }

    function getRareInfo(uint256 rareId) external constant returns (uint256, uint256, uint256) {
        return (rareInfo[rareId].rareClass, rareInfo[rareId].unitId, rareInfo[rareId].rareValue);
    }

    function getUnitInfo(uint256 unitId, uint256 existing, uint256 amount) external constant returns (uint256, uint256, uint256, uint256) {
        return (unitInfo[unitId].unitId, unitInfo[unitId].baseGooProduction, getGooCostForUnit(unitId, existing, amount), SafeMath.mul(unitInfo[unitId].tronCost, amount));
    } 

    function getCurrentNumberOfUnits() external constant returns (uint256) {
        return currentNumberOfUnits;
    }
    
    function getCurrentNumberOfUpgrades() external constant returns (uint256) {
        return currentNumberOfUpgrades;
    }
    
    function getCurrentNumberOfRares() external constant returns (uint256) {
        return currentNumberOfRares;
    }
    
}


library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}
