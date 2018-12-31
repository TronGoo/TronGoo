pragma solidity ^0.4.0;

interface GooGameConfigInterface {
    function addUpgrade(uint256 id, uint256 goo, uint256 tron, uint256 class, uint256 unit, uint256 value, uint256 prereq) external;
    function setConstants(uint256 numUnits, uint256 numUpgrades, uint256 numRares, uint256 lastProductionId, uint256 lastSoldierId) external;
}

contract GameConfigSetup {

    GooGameConfigInterface gameConfig;
    
    constructor(address configAddress)
        public
    {
        gameConfig = GooGameConfigInterface(configAddress);
    }

    function addUnit1Upgrades() {
        gameConfig.addUpgrade(1, 500, 0, 0, 1, 1, 0);
        gameConfig.addUpgrade(2, 0, 1000 trx, 0, 1, 2, 1);
        gameConfig.addUpgrade(3, 20000, 0, 0, 1, 1, 2);
        gameConfig.addUpgrade(4, 500000, 0, 0, 1, 1, 3);
        gameConfig.addUpgrade(5, 0, 1000 trx, 0, 1, 2, 4);
        gameConfig.addUpgrade(6, 15000000, 0, 0, 1, 1, 5);
        gameConfig.addUpgrade(227, 750000000, 0, 0, 1, 1, 6);

        gameConfig.addUpgrade(7, 1000, 0, 1, 1, 5, 0);
        gameConfig.addUpgrade(8, 0, 1000 trx, 1, 1, 10, 7);
        gameConfig.addUpgrade(9, 50000, 0, 1, 1, 5, 8);
        gameConfig.addUpgrade(10, 2500000, 0, 1, 1, 5, 9);
        gameConfig.addUpgrade(11, 0, 1000 trx, 1, 1, 10, 10);
        gameConfig.addUpgrade(12, 100000000, 0, 1, 1, 10, 11);
        gameConfig.addUpgrade(228, 5000000000, 0, 1, 1, 10, 12);

        gameConfig.addUpgrade(464, 0, 20 trx, 8, 1, 99, 0);
        gameConfig.addUpgrade(13, 0, 1000 trx, 8, 1, 999, 464);
        gameConfig.addUpgrade(14, 0, 2000 trx, 8, 1, 9999, 13);
        gameConfig.addUpgrade(15, 0, 5000 trx, 8, 1, 99999, 14);
        gameConfig.addUpgrade(229, 0, 5000 trx, 8, 1, 999999, 15);
    }


    function addUnit2Upgrades() {
        gameConfig.addUpgrade(16, 2500, 0, 0, 2, 2, 0);
        gameConfig.addUpgrade(17, 0, 1000 trx, 0, 2, 4, 16);
        gameConfig.addUpgrade(18, 100000, 0, 0, 2, 2, 17);
        gameConfig.addUpgrade(19, 5000000, 0, 0, 2, 2, 18);
        gameConfig.addUpgrade(20, 0, 1000 trx, 0, 2, 4, 19);
        gameConfig.addUpgrade(21, 250000000, 0, 0, 2, 2, 20);
        gameConfig.addUpgrade(230, 10000000000, 0, 0, 2, 2, 21);

        gameConfig.addUpgrade(22, 5000, 0, 1, 2, 5, 0);
        gameConfig.addUpgrade(23, 0, 1000 trx, 1, 2, 10, 22);
        gameConfig.addUpgrade(24, 250000, 0, 1, 2, 5, 23);
        gameConfig.addUpgrade(25, 10000000, 0, 1, 2, 5, 24);
        gameConfig.addUpgrade(26, 0, 1000 trx, 1, 2, 10, 25);
        gameConfig.addUpgrade(27, 500000000, 0, 1, 2, 10, 26);
        gameConfig.addUpgrade(231, 15000000000, 0, 1, 2, 10, 27);

        gameConfig.addUpgrade(465, 0, 20 trx, 8, 2, 99, 0);
        gameConfig.addUpgrade(28, 0, 1000 trx, 8, 2, 999, 465);
        gameConfig.addUpgrade(29, 0, 2000 trx, 8, 2, 9999, 28);
        gameConfig.addUpgrade(30, 0, 5000 trx, 8, 2, 99999, 29);
        gameConfig.addUpgrade(232, 0, 5000 trx, 8, 2, 999999, 30);
    }


    function addUnit3Upgrades() {
        gameConfig.addUpgrade(31, 5000, 0, 0, 3, 5, 0);
        gameConfig.addUpgrade(32, 0, 1000 trx, 0, 3, 10, 31);
        gameConfig.addUpgrade(33, 250000, 0, 0, 3, 5, 32);
        gameConfig.addUpgrade(34, 10000000, 0, 0, 3, 5, 33);
        gameConfig.addUpgrade(35, 0, 2000 trx, 0, 3, 20, 34);
        gameConfig.addUpgrade(36, 500000000, 0, 0, 3, 5, 35);
        gameConfig.addUpgrade(233, 15000000000, 0, 0, 3, 5, 36);

        gameConfig.addUpgrade(37, 5000, 0, 1, 3, 5, 0);
        gameConfig.addUpgrade(38, 0, 1000 trx, 1, 3, 10, 37);
        gameConfig.addUpgrade(39, 250000, 0, 1, 3, 5, 38);
        gameConfig.addUpgrade(40, 10000000, 0, 1, 3, 5, 39);
        gameConfig.addUpgrade(41, 0, 2000 trx, 1, 3, 15, 40);
        gameConfig.addUpgrade(42, 500000000, 0, 1, 3, 10, 41);
        gameConfig.addUpgrade(234, 20000000000, 0, 1, 3, 10, 42);

        gameConfig.addUpgrade(466, 500000, 0, 8, 3, 99, 0);
        gameConfig.addUpgrade(43, 5000000, 0, 8, 3, 999, 466);
        gameConfig.addUpgrade(44, 50000000, 0, 8, 3, 9999, 43);
        gameConfig.addUpgrade(45, 500000000, 0, 8, 3, 99999, 44);
        gameConfig.addUpgrade(235, 5000000000, 0, 8, 3, 999999, 45);
    }


    function addUnit4Upgrades() {
        gameConfig.addUpgrade(269, 0, 200 trx, 0, 4, 8, 0);
        gameConfig.addUpgrade(46, 7500, 0, 0, 4, 4, 269);
        gameConfig.addUpgrade(47, 0, 1000 trx, 0, 4, 8, 46);
        gameConfig.addUpgrade(48, 250000, 0, 0, 4, 4, 47);
        gameConfig.addUpgrade(49, 10000000, 0, 0, 4, 4, 48);
        gameConfig.addUpgrade(50, 0, 1000 trx, 0, 4, 8, 49);
        gameConfig.addUpgrade(51, 500000000, 0, 0, 4, 4, 50);
        gameConfig.addUpgrade(236, 15000000000, 0, 0, 4, 4, 51);
        gameConfig.addUpgrade(237, 20000000000, 0, 1, 4, 10, 57);

        gameConfig.addUpgrade(270, 0, 200 trx, 1, 4, 10, 0);
        gameConfig.addUpgrade(52, 10000, 0, 1, 4, 5, 270);
        gameConfig.addUpgrade(53, 0, 1000 trx, 1, 4, 10, 52);
        gameConfig.addUpgrade(54, 500000, 0, 1, 4, 5, 53);
        gameConfig.addUpgrade(55, 15000000, 0, 1, 4, 5, 54);
        gameConfig.addUpgrade(56, 0, 1000 trx, 1, 4, 10, 55);
        gameConfig.addUpgrade(57, 500000000, 0, 1, 4, 10, 56);
        gameConfig.addUpgrade(237, 20000000000, 0, 1, 4, 10, 57);

        gameConfig.addUpgrade(467, 0, 20 trx, 8, 4, 99, 0);
        gameConfig.addUpgrade(58, 0, 1000 trx, 8, 4, 999, 467);
        gameConfig.addUpgrade(59, 0, 2000 trx, 8, 4, 9999, 58);
        gameConfig.addUpgrade(60, 0, 5000 trx, 8, 4, 99999, 59);
        gameConfig.addUpgrade(238, 0, 5000 trx, 8, 4, 999999, 60);
    }


    function addUnit5Upgrades() {
        gameConfig.addUpgrade(271, 0, 200 trx, 0, 5, 12, 0);
        gameConfig.addUpgrade(61, 15000, 0, 0, 5, 6, 271);
        gameConfig.addUpgrade(62, 0, 1000 trx, 0, 5, 12, 61);
        gameConfig.addUpgrade(63, 600000, 0, 0, 5, 6, 62);
        gameConfig.addUpgrade(64, 20000000, 0, 0, 5, 6, 63);
        gameConfig.addUpgrade(65, 0, 1000 trx, 0, 5, 12, 64);
        gameConfig.addUpgrade(66, 750000000, 0, 0, 5, 6, 65);
        gameConfig.addUpgrade(239, 25000000000, 0, 0, 5, 6, 66);

        gameConfig.addUpgrade(272, 0, 200 trx, 1, 5, 10, 0);
        gameConfig.addUpgrade(67, 20000, 0, 1, 5, 5, 272);
        gameConfig.addUpgrade(68, 0, 1000 trx, 1, 5, 10, 67);
        gameConfig.addUpgrade(69, 750000, 0, 1, 5, 5, 68);
        gameConfig.addUpgrade(70, 25000000, 0, 1, 5, 5, 69);
        gameConfig.addUpgrade(71, 0, 1000 trx, 1, 5, 10, 70);
        gameConfig.addUpgrade(72, 1000000000, 0, 1, 5, 10, 71);
        gameConfig.addUpgrade(240, 30000000000, 0, 1, 5, 10, 72);

        gameConfig.addUpgrade(468, 0, 20 trx, 8, 5, 99, 0);
        gameConfig.addUpgrade(73, 0, 1000 trx, 8, 5, 999, 468);
        gameConfig.addUpgrade(74, 0, 2000 trx, 8, 5, 9999, 73);
        gameConfig.addUpgrade(75, 0, 5000 trx, 8, 5, 99999, 74);
        gameConfig.addUpgrade(241, 0, 5000 trx, 8, 5, 999999, 75);
    }


    function addUnit6Upgrades() {
        gameConfig.addUpgrade(273, 0, 500 trx, 0, 6, 16, 0);
        gameConfig.addUpgrade(76, 25000, 0, 0, 6, 8, 273);
        gameConfig.addUpgrade(77, 0, 1000 trx, 0, 6, 16, 76);
        gameConfig.addUpgrade(78, 800000, 0, 0, 6, 8, 77);
        gameConfig.addUpgrade(79, 30000000, 0, 0, 6, 8, 78);
        gameConfig.addUpgrade(80, 0, 1000 trx, 0, 6, 16, 79);
        gameConfig.addUpgrade(81, 1200000000, 0, 0, 6, 8, 80);
        gameConfig.addUpgrade(242, 35000000000, 0, 0, 6, 8, 81);

        gameConfig.addUpgrade(274, 0, 500 trx, 1, 6, 10, 0);
        gameConfig.addUpgrade(82, 30000, 0, 1, 6, 5, 274);
        gameConfig.addUpgrade(83, 0, 1000 trx, 1, 6, 10, 82);
        gameConfig.addUpgrade(84, 1000000, 0, 1, 6, 5, 83);
        gameConfig.addUpgrade(85, 40000000, 0, 1, 6, 5, 84);
        gameConfig.addUpgrade(86, 0, 1000 trx, 1, 6, 10, 85);
        gameConfig.addUpgrade(87, 1500000000, 0, 1, 6, 10, 86);
        gameConfig.addUpgrade(243, 40000000000, 0, 1, 6, 10, 87);

        gameConfig.addUpgrade(469, 0, 20 trx, 8, 6, 99, 0);
        gameConfig.addUpgrade(88, 0, 1000 trx, 8, 6, 999, 469);
        gameConfig.addUpgrade(89, 0, 2000 trx, 8, 6, 9999, 88);
        gameConfig.addUpgrade(90, 0, 5000 trx, 8, 6, 99999, 89);
        gameConfig.addUpgrade(244, 0, 5000 trx, 8, 6, 999999, 90);
    }


    function addUnit7Upgrades() {
        gameConfig.addUpgrade(91, 35000, 0, 0, 7, 25, 0);
        gameConfig.addUpgrade(92, 0, 1000 trx, 0, 7, 50, 91);
        gameConfig.addUpgrade(93, 1200000, 0, 0, 7, 25, 92);
        gameConfig.addUpgrade(94, 50000000, 0, 0, 7, 25, 93);
        gameConfig.addUpgrade(95, 0, 2000 trx, 0, 7, 100, 94);
        gameConfig.addUpgrade(96, 2000000000, 0, 0, 7, 25, 95);
        gameConfig.addUpgrade(245, 45000000000, 0, 0, 7, 25, 96);

        gameConfig.addUpgrade(97, 40000, 0, 1, 7, 5, 0);
        gameConfig.addUpgrade(98, 0, 1000 trx, 1, 7, 10, 97);
        gameConfig.addUpgrade(99, 1500000, 0, 1, 7, 5, 98);
        gameConfig.addUpgrade(100, 60000000, 0, 1, 7, 5, 99);
        gameConfig.addUpgrade(101, 0, 2000 trx, 1, 7, 15, 100);
        gameConfig.addUpgrade(102, 2500000000, 0, 1, 7, 10, 101);
        gameConfig.addUpgrade(246, 50000000000, 0, 1, 7, 10, 102);

        gameConfig.addUpgrade(470, 500000, 0, 8, 7, 99, 0);
        gameConfig.addUpgrade(103, 5000000, 0, 8, 7, 999, 470);
        gameConfig.addUpgrade(104, 50000000, 0, 8, 7, 9999, 103);
        gameConfig.addUpgrade(105, 500000000, 0, 8, 7, 99999, 104);
        gameConfig.addUpgrade(247, 5000000000, 0, 8, 7, 999999, 105);
    }


    function addUnit8Upgrades() {
        gameConfig.addUpgrade(275, 0, 500 trx, 0, 8, 20, 0);
        gameConfig.addUpgrade(106, 50000, 0, 0, 8, 10, 275);
        gameConfig.addUpgrade(107, 0, 1000 trx, 0, 8, 20, 106);
        gameConfig.addUpgrade(108, 2000000, 0, 0, 8, 10, 107);
        gameConfig.addUpgrade(109, 75000000, 0, 0, 8, 10, 108);
        gameConfig.addUpgrade(110, 0, 1000 trx, 0, 8, 20, 109);
        gameConfig.addUpgrade(111, 3000000000, 0, 0, 8, 10, 110);
        gameConfig.addUpgrade(248, 55000000000, 0, 0, 8, 10, 111);

        gameConfig.addUpgrade(276, 0, 500 trx, 1, 8, 10, 0);
        gameConfig.addUpgrade(112, 75000, 0, 1, 8, 5, 276);
        gameConfig.addUpgrade(113, 0, 1000 trx, 1, 8, 10, 112);
        gameConfig.addUpgrade(114, 4000000, 0, 1, 8, 5, 113);
        gameConfig.addUpgrade(115, 100000000, 0, 1, 8, 5, 114);
        gameConfig.addUpgrade(116, 0, 1000 trx, 1, 8, 10, 115);
        gameConfig.addUpgrade(117, 4000000000, 0, 1, 8, 10, 116);
        gameConfig.addUpgrade(249, 60000000000, 0, 1, 8, 10, 117);

        gameConfig.addUpgrade(471, 0, 20 trx, 8, 8, 99, 0);
        gameConfig.addUpgrade(118, 0, 1000 trx, 8, 8, 999, 471);
        gameConfig.addUpgrade(119, 0, 2000 trx, 8, 8, 9999, 118);
        gameConfig.addUpgrade(120, 0, 5000 trx, 8, 8, 99999, 119);
        gameConfig.addUpgrade(250, 0, 5000 trx, 8, 8, 999999, 120);
    }


    function addUnit40Upgrades() {
        gameConfig.addUpgrade(121, 1000, 0, 2, 40, 5, 0);
        gameConfig.addUpgrade(279, 250000, 0, 6, 40, 10000, 121);
        gameConfig.addUpgrade(122, 0, 1000 trx, 2, 40, 20, 279);
        gameConfig.addUpgrade(123, 50000, 0, 2, 40, 5, 122);
        gameConfig.addUpgrade(124, 2000000, 0, 2, 40, 5, 123);
        gameConfig.addUpgrade(125, 0, 1000 trx, 2, 40, 20, 124);
        gameConfig.addUpgrade(126, 50000000, 0, 2, 40, 5, 125);
        gameConfig.addUpgrade(251, 1000000000, 0, 2, 40, 5, 126);

        gameConfig.addUpgrade(127, 2500, 0, 4, 40, 5, 0);
        gameConfig.addUpgrade(280, 500000, 0, 7, 40, 5, 127);
        gameConfig.addUpgrade(128, 0, 1000 trx, 4, 40, 20, 280);
        gameConfig.addUpgrade(129, 100000, 0, 4, 40, 5, 128);
        gameConfig.addUpgrade(130, 4000000, 0, 4, 40, 5, 129);
        gameConfig.addUpgrade(131, 0, 1000 trx, 4, 40, 20, 130);
        gameConfig.addUpgrade(132, 100000000, 0, 4, 40, 5, 131);
        gameConfig.addUpgrade(252, 2000000000, 0, 4, 40, 5, 132);

        gameConfig.addUpgrade(472, 5000000, 0, 8, 40, 99, 0);
        gameConfig.addUpgrade(133, 50000000, 0, 8, 40, 999, 472);
        gameConfig.addUpgrade(134, 0, 1000 trx, 8, 40, 9999, 133);
        gameConfig.addUpgrade(135, 0, 2000 trx, 8, 40, 99999, 134);
        gameConfig.addUpgrade(253, 0, 5000 trx, 8, 40, 999999, 135);
    }


    function addUnit41Upgrades() {
        gameConfig.addUpgrade(136, 2500, 0, 4, 41, 5, 0);
        gameConfig.addUpgrade(281, 50000, 0, 6, 41, 5000, 136);
        gameConfig.addUpgrade(137, 0, 1000 trx, 4, 41, 20, 281);
        gameConfig.addUpgrade(138, 100000, 0, 4, 41, 5, 137);
        gameConfig.addUpgrade(139, 4000000, 0, 4, 41, 5, 138);
        gameConfig.addUpgrade(140, 0, 1000 trx, 4, 41, 20, 139);
        gameConfig.addUpgrade(141, 100000000, 0, 4, 41, 5, 140);
        gameConfig.addUpgrade(254, 3000000000, 0, 4, 41, 5, 141);

        gameConfig.addUpgrade(142, 5000, 0, 5, 41, 5, 0);
        gameConfig.addUpgrade(282, 100000, 0, 7, 41, 5, 142);
        gameConfig.addUpgrade(143, 0, 1000 trx, 5, 41, 10, 282);
        gameConfig.addUpgrade(144, 150000, 0, 5, 41, 5, 143);
        gameConfig.addUpgrade(145, 5000000, 0, 5, 41, 5, 144);
        gameConfig.addUpgrade(146, 0, 1000 trx, 5, 41, 10, 145);
        gameConfig.addUpgrade(147, 120000000, 0, 5, 41, 10, 146);
        gameConfig.addUpgrade(255, 5000000000, 0, 5, 41, 10, 147);

        gameConfig.addUpgrade(473, 5000000, 0, 8, 41, 99, 0);
        gameConfig.addUpgrade(148, 50000000, 0, 8, 41, 999, 473);
        gameConfig.addUpgrade(149, 0, 1000 trx, 8, 41, 9999, 148);
        gameConfig.addUpgrade(150, 0, 2000 trx, 8, 41, 99999, 149);
        gameConfig.addUpgrade(256, 0, 5000 trx, 8, 41, 999999, 150);
    }


    function addUnit42Upgrades() {
        gameConfig.addUpgrade(151, 5000, 0, 2, 42, 10, 0);
        gameConfig.addUpgrade(283, 500000, 0, 6, 42, 50000, 151);
        gameConfig.addUpgrade(152, 0, 1000 trx, 2, 42, 50, 283);
        gameConfig.addUpgrade(153, 150000, 0, 2, 42, 10, 152);
        gameConfig.addUpgrade(154, 5000000, 0, 2, 42, 10, 153);
        gameConfig.addUpgrade(155, 0, 2000 trx, 2, 42, 100, 154);
        gameConfig.addUpgrade(156, 120000000, 0, 2, 42, 20, 155);
        gameConfig.addUpgrade(257, 5000000000, 0, 2, 42, 20, 156);

        gameConfig.addUpgrade(157, 7500, 0, 3, 42, 5, 0);
        gameConfig.addUpgrade(284, 750000, 0, 7, 42, 5, 157);
        gameConfig.addUpgrade(158, 0, 1000 trx, 3, 42, 10, 284);
        gameConfig.addUpgrade(159, 200000, 0, 3, 42, 5, 158);
        gameConfig.addUpgrade(160, 7500000, 0, 3, 42, 5, 159);
        gameConfig.addUpgrade(161, 0, 2000 trx, 3, 42, 15, 160);
        gameConfig.addUpgrade(162, 150000000, 0, 3, 42, 10, 161);
        gameConfig.addUpgrade(258, 7500000000, 0, 3, 42, 10, 162);

        gameConfig.addUpgrade(474, 500000, 0, 8, 42, 99, 0);
        gameConfig.addUpgrade(163, 5000000, 0, 8, 42, 999, 474);
        gameConfig.addUpgrade(164, 50000000, 0, 8, 42, 9999, 163);
        gameConfig.addUpgrade(165, 500000000, 0, 8, 42, 99999, 164);
        gameConfig.addUpgrade(259, 5000000000, 0, 8, 42, 999999, 165);
    }


    function addUnit43Upgrades() {
        gameConfig.addUpgrade(166, 7500, 0, 2, 43, 5, 0);
        gameConfig.addUpgrade(285, 500000, 0, 7, 43, 5, 166);
        gameConfig.addUpgrade(167, 0, 1000 trx, 2, 43, 25, 285);
        gameConfig.addUpgrade(168, 200000, 0, 2, 43, 5, 167);
        gameConfig.addUpgrade(169, 7500000, 0, 2, 43, 5, 168);
        gameConfig.addUpgrade(170, 0, 1000 trx, 2, 43, 25, 169);
        gameConfig.addUpgrade(171, 150000000, 0, 2, 43, 10, 170);
        gameConfig.addUpgrade(260, 7500000000, 0, 2, 43, 10, 171);

        gameConfig.addUpgrade(172, 10000, 0, 6, 43, 1000, 0);
        gameConfig.addUpgrade(286, 750000, 0, 6, 43, 5000, 172);
        gameConfig.addUpgrade(173, 0, 1000 trx, 6, 43, 10000, 286);
        gameConfig.addUpgrade(174, 250000, 0, 6, 43, 2000, 173);
        gameConfig.addUpgrade(175, 8000000, 0, 6, 43, 3000, 174);
        gameConfig.addUpgrade(176, 0, 1000 trx, 6, 43, 10000, 175);
        gameConfig.addUpgrade(177, 160000000, 0, 6, 43, 4000, 176);
        gameConfig.addUpgrade(261, 10000000000, 0, 6, 43, 10000, 177);

        gameConfig.addUpgrade(475, 5000000, 0, 8, 43, 99, 0);
        gameConfig.addUpgrade(178, 50000000, 0, 8, 43, 999, 475);
        gameConfig.addUpgrade(179, 0, 1000 trx, 8, 43, 9999, 178);
        gameConfig.addUpgrade(180, 0, 2000 trx, 8, 43, 99999, 179);
        gameConfig.addUpgrade(262, 0, 5000 trx, 8, 43, 999999, 180);
    }


    function addUnit44Upgrades() {
        gameConfig.addUpgrade(181, 10000, 0, 3, 44, 5, 0);
        gameConfig.addUpgrade(287, 750000, 0, 6, 44, 10000, 181);
        gameConfig.addUpgrade(182, 0, 1000 trx, 3, 44, 10, 287);
        gameConfig.addUpgrade(183, 250000, 0, 3, 44, 5, 182);
        gameConfig.addUpgrade(184, 8000000, 0, 3, 44, 5, 183);
        gameConfig.addUpgrade(185, 0, 1000 trx, 3, 44, 10, 184);
        gameConfig.addUpgrade(186, 160000000, 0, 3, 44, 10, 185);
        gameConfig.addUpgrade(263, 10000000000, 0, 3, 44, 10, 186);

        gameConfig.addUpgrade(187, 15000, 0, 5, 44, 5, 0);
        gameConfig.addUpgrade(288, 1000000, 0, 7, 44, 5, 187);
        gameConfig.addUpgrade(188, 0, 1000 trx, 5, 44, 10, 288);
        gameConfig.addUpgrade(189, 400000, 0, 5, 44, 5, 188);
        gameConfig.addUpgrade(190, 10000000, 0, 5, 44, 5, 189);
        gameConfig.addUpgrade(191, 0, 1000 trx, 5, 44, 10, 190);
        gameConfig.addUpgrade(192, 200000000, 0, 5, 44, 10, 191);
        gameConfig.addUpgrade(264, 15000000000, 0, 5, 44, 10, 192);

        gameConfig.addUpgrade(476, 5000000, 0, 8, 44, 99, 0);
        gameConfig.addUpgrade(193, 50000000, 0, 8, 44, 999, 476);
        gameConfig.addUpgrade(194, 0, 1000 trx, 8, 44, 9999, 193);
        gameConfig.addUpgrade(195, 0, 2000 trx, 8, 44, 99999, 194);
        gameConfig.addUpgrade(265, 0, 5000 trx, 8, 44, 999999, 195);
    }


    function addUnit45Upgrades() {
        gameConfig.addUpgrade(196, 25000, 0, 6, 45, 10000, 0);
        gameConfig.addUpgrade(289, 250000, 0, 6, 45, 50000, 196);
        gameConfig.addUpgrade(197, 0, 1000 trx, 6, 45, 25000, 289);
        gameConfig.addUpgrade(198, 500000, 0, 6, 45, 10000, 197);
        gameConfig.addUpgrade(199, 10000000, 0, 6, 45, 10000, 198);
        gameConfig.addUpgrade(200, 0, 2000 trx, 6, 45, 50000, 199);
        gameConfig.addUpgrade(201, 250000000, 0, 6, 45, 15000, 200);
        gameConfig.addUpgrade(266, 20000000000, 0, 6, 45, 50000, 201);

        gameConfig.addUpgrade(202, 50000, 0, 7, 45, 5, 0);
        gameConfig.addUpgrade(290, 750000, 0, 7, 45, 5, 202);
        gameConfig.addUpgrade(203, 0, 1000 trx, 7, 45, 10, 290);
        gameConfig.addUpgrade(204, 1000000, 0, 7, 45, 5, 203);
        gameConfig.addUpgrade(205, 50000000, 0, 7, 45, 5, 204);
        gameConfig.addUpgrade(206, 0, 2000 trx, 7, 45, 15, 205);
        gameConfig.addUpgrade(207, 2000000000, 0, 7, 45, 10, 206);
        gameConfig.addUpgrade(267, 50000000000, 0, 7, 45, 10, 207);

        gameConfig.addUpgrade(477, 500000, 0, 8, 45, 99, 0);
        gameConfig.addUpgrade(208, 5000000, 0, 8, 45, 999, 477);
        gameConfig.addUpgrade(209, 50000000, 0, 8, 45, 9999, 208);
        gameConfig.addUpgrade(210, 500000000, 0, 8, 45, 99999, 209);
        gameConfig.addUpgrade(268, 5000000000, 0, 8, 45, 999999, 210);
    }
    

    function updateConstants(uint256 numUnits, uint256 numUpgrades, uint256 numRares, uint256 lastProductionId, uint256 lastSoldierId) external {
        gameConfig.setConstants(numUnits, numUpgrades, numRares, lastProductionId, lastSoldierId);
    }

}
