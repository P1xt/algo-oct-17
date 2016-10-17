var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var solutions = require('./solutions.js');

suite
    .add('multJacksonBates', function () {
        solutions.multJacksonBates(10, 23);
        solutions.multJacksonBates(20, 78);
        solutions.multJacksonBates(100, 2318);
        solutions.multJacksonBates(10000, 23331668);
        solutions.multJacksonBates(45678, 486804150);
    })
    .add('multkevcomedia', function () {
        solutions.multkevcomedia(10, 23);
        solutions.multkevcomedia(20, 78);
        solutions.multkevcomedia(100, 2318);
        solutions.multkevcomedia(10000, 23331668);
        solutions.multkevcomedia(45678, 486804150);
    })
    .add('multSalasy', function () {
        solutions.multSalasy(10, 23);
        solutions.multSalasy(20, 78);
        solutions.multSalasy(100, 2318);
        solutions.multSalasy(10000, 23331668);
        solutions.multSalasy(45678, 486804150);
    })
    .add('multnickolaos77', function () {
        solutions.multnickolaos77(10, 23);
        solutions.multnickolaos77(20, 78);
        solutions.multnickolaos77(100, 2318);
        solutions.multnickolaos77(10000, 23331668);
        solutions.multnickolaos77(45678, 486804150);
    })
    .add('multMichealhall', function () {
        solutions.multMichealhall(10, 23);
        solutions.multMichealhall(20, 78);
        solutions.multMichealhall(100, 2318);
        solutions.multMichealhall(10000, 23331668);
        solutions.multMichealhall(45678, 486804150);
    })
    .add('multDarklake', function () {
        solutions.multDarklake(10, 23);
        solutions.multDarklake(20, 78);
        solutions.multDarklake(100, 2318);
        solutions.multDarklake(10000, 23331668);
        solutions.multDarklake(45678, 486804150);
    })
    .add('multBenGitter', function () {
        solutions.multBenGitter(10, 23);
        solutions.multBenGitter(20, 78);
        solutions.multBenGitter(100, 2318);
        solutions.multBenGitter(10000, 23331668);
        solutions.multBenGitter(45678, 486804150);
    })
    .add('multjv88899', function () {
        solutions.multjv88899(10, 23);
        solutions.multjv88899(20, 78);
        solutions.multjv88899(100, 2318);
        solutions.multjv88899(10000, 23331668);
        solutions.multjv88899(45678, 486804150);
    })
    .add('multsimmco', function () {
        solutions.multsimmco(10, 23);
        solutions.multsimmco(20, 78);
        solutions.multsimmco(100, 2318);
        solutions.multsimmco(10000, 23331668);
        solutions.multsimmco(45678, 486804150);
    })
    .add('multJohnL3', function () {
        solutions.multJohnL3(10, 23);
        solutions.multJohnL3(20, 78);
        solutions.multJohnL3(100, 2318);
        solutions.multJohnL3(10000, 23331668);
        solutions.multJohnL3(45678, 486804150);
    })
    .add('multForesterr', function () {
        solutions.multForesterr(10, 23);
        solutions.multForesterr(20, 78);
        solutions.multForesterr(100, 2318);
        solutions.multForesterr(10000, 23331668);
        solutions.multForesterr(45678, 486804150);
    })
    .add('multFrustrated_Coder', function () {
        solutions.multFrustrated_Coder(10, 23);
        solutions.multFrustrated_Coder(20, 78);
        solutions.multFrustrated_Coder(100, 2318);
        solutions.multFrustrated_Coder(10000, 23331668);
        solutions.multFrustrated_Coder(45678, 486804150);
    })
    .add('multcomputerluca', function () {
        solutions.multcomputerluca(10, 23);
        solutions.multcomputerluca(20, 78);
        solutions.multcomputerluca(100, 2318);
        solutions.multcomputerluca(10000, 23331668);
        solutions.multcomputerluca(45678, 486804150);
    })
    .add('multbrew95', function () {
        solutions.multbrew95(10, 23);
        solutions.multbrew95(20, 78);
        solutions.multbrew95(100, 2318);
        solutions.multbrew95(10000, 23331668);
        solutions.multbrew95(45678, 486804150);
    })
    .add('multthanhacun', function () {
        solutions.multthanhacun(10, 23);
        solutions.multthanhacun(20, 78);
        solutions.multthanhacun(100, 2318);
        solutions.multthanhacun(10000, 23331668);
        solutions.multthanhacun(45678, 486804150);
    })
    .add('multVelenir', function () {
        solutions.multVelenir(10, 23);
        solutions.multVelenir(20, 78);
        solutions.multVelenir(100, 2318);
        solutions.multVelenir(10000, 23331668);
        solutions.multVelenir(45678, 486804150);
    })
    .add('multslocodemonkey', function () {
        solutions.multslocodemonkey(10, 23);
        solutions.multslocodemonkey(20, 78);
        solutions.multslocodemonkey(100, 2318);
        solutions.multslocodemonkey(10000, 23331668);
        solutions.multslocodemonkey(45678, 486804150);
    })
    .add('multIdyR17', function () {
        solutions.multIdyR17(10, 23);
        solutions.multIdyR17(20, 78);
        solutions.multIdyR17(100, 2318);
        solutions.multIdyR17(10000, 23331668);
        solutions.multIdyR17(45678, 486804150);
    })
    .add('multOmegga', function () {
        solutions.multOmegga(10, 23);
        solutions.multOmegga(20, 78);
        solutions.multOmegga(100, 2318);
        solutions.multOmegga(10000, 23331668);
        solutions.multOmegga(45678, 486804150);
    })
    .add('multGSquirrel', function () {
        solutions.multGSquirrel(10, 23);
        solutions.multGSquirrel(20, 78);
        solutions.multGSquirrel(100, 2318);
        solutions.multGSquirrel(10000, 23331668);
        solutions.multGSquirrel(45678, 486804150);
    })
    .add('multimtoobose', function () {
        solutions.multimtoobose(10, 23);
        solutions.multimtoobose(20, 78);
        solutions.multimtoobose(100, 2318);
        solutions.multimtoobose(10000, 23331668);
        solutions.multimtoobose(45678, 486804150);
    })
    .add('multvector2016', function () {
        solutions.multvector2016(10, 23);
        solutions.multvector2016(20, 78);
        solutions.multvector2016(100, 2318);
        solutions.multvector2016(10000, 23331668);
        solutions.multvector2016(45678, 486804150);
    })
    .add('multIsaacAbrahamson', function () {
        solutions.multIsaacAbrahamson(10, 23);
        solutions.multIsaacAbrahamson(20, 78);
        solutions.multIsaacAbrahamson(100, 2318);
        solutions.multIsaacAbrahamson(10000, 23331668);
        solutions.multIsaacAbrahamson(45678, 486804150);
    })
    .add('multGouldie', function () {
        solutions.multGouldie(10, 23);
        solutions.multGouldie(20, 78);
        solutions.multGouldie(100, 2318);
        solutions.multGouldie(10000, 23331668);
        solutions.multGouldie(45678, 486804150);
    })
    .add('multTattomoosa', function () {
        solutions.multTattomoosa(10, 23);
        solutions.multTattomoosa(20, 78);
        solutions.multTattomoosa(100, 2318);
        solutions.multTattomoosa(10000, 23331668);
        solutions.multTattomoosa(45678, 486804150);
    })
    .add('multHyperSprite', function () {
        solutions.multHyperSprite(10, 23);
        solutions.multHyperSprite(20, 78);
        solutions.multHyperSprite(100, 2318);
        solutions.multHyperSprite(10000, 23331668);
        solutions.multHyperSprite(45678, 486804150);
    })
    .add('multtsaulon', function () {
        solutions.multtsaulon(10, 23);
        solutions.multtsaulon(20, 78);
        solutions.multtsaulon(100, 2318);
        solutions.multtsaulon(10000, 23331668);
        solutions.multtsaulon(45678, 486804150);
    })
    .add('multJasil1414', function () {
        solutions.multJasil1414(10, 23);
        solutions.multJasil1414(20, 78);
        solutions.multJasil1414(100, 2318);
        solutions.multJasil1414(10000, 23331668);
        solutions.multJasil1414(45678, 486804150);
    })
    .add('multBLK1010', function () {
        solutions.multBLK1010(10, 23);
        solutions.multBLK1010(20, 78);
        solutions.multBLK1010(100, 2318);
        solutions.multBLK1010(10000, 23331668);
        solutions.multBLK1010(45678, 486804150);
    })
    .add('multpkmn9060', function () {
        solutions.multpkmn9060(10, 23);
        solutions.multpkmn9060(20, 78);
        solutions.multpkmn9060(100, 2318);
        solutions.multpkmn9060(10000, 23331668);
        solutions.multpkmn9060(45678, 486804150);
    })
    .add('multnawazishali', function () {
        solutions.multnawazishali(10, 23);
        solutions.multnawazishali(20, 78);
        solutions.multnawazishali(100, 2318);
        solutions.multnawazishali(10000, 23331668);
        solutions.multnawazishali(45678, 486804150);
    })
    .add('multNp463', function () {
        solutions.multNp463(10, 23);
        solutions.multNp463(20, 78);
        solutions.multNp463(100, 2318);
        solutions.multNp463(10000, 23331668);
        solutions.multNp463(45678, 486804150);
    })
    .add('multYankeeDK', function () {
        solutions.multYankeeDK(10, 23);
        solutions.multYankeeDK(20, 78);
        solutions.multYankeeDK(100, 2318);
        solutions.multYankeeDK(10000, 23331668);
        solutions.multYankeeDK(45678, 486804150);
    })
    .add('multMistaTwist', function () {
        solutions.multMistaTwist(10, 23);
        solutions.multMistaTwist(20, 78);
        solutions.multMistaTwist(100, 2318);
        solutions.multMistaTwist(10000, 23331668);
        solutions.multMistaTwist(45678, 486804150);
    })
    .add('multa402539', function () {
        solutions.multa402539(10, 23);
        solutions.multa402539(20, 78);
        solutions.multa402539(100, 2318);
        solutions.multa402539(10000, 23331668);
        solutions.multa402539(45678, 486804150);
    })
    .add('multTsvetkovT', function () {
        solutions.multTsvetkovT(10, 23);
        solutions.multTsvetkovT(20, 78);
        solutions.multTsvetkovT(100, 2318);
        solutions.multTsvetkovT(10000, 23331668);
        solutions.multTsvetkovT(45678, 486804150);
    })
    .add('multShanthiKarunakaran', function () {
        solutions.multShanthiKarunakaran(10, 23);
        solutions.multShanthiKarunakaran(20, 78);
        solutions.multShanthiKarunakaran(100, 2318);
        solutions.multShanthiKarunakaran(10000, 23331668);
        solutions.multShanthiKarunakaran(45678, 486804150);
    })
    .add('multZackWard', function () {
        solutions.multZackWard(10, 23);
        solutions.multZackWard(20, 78);
        solutions.multZackWard(100, 2318);
        solutions.multZackWard(10000, 23331668);
        solutions.multZackWard(45678, 486804150);
    })
    .add('multjoelpeyton', function () {
        solutions.multjoelpeyton(10, 23);
        solutions.multjoelpeyton(20, 78);
        solutions.multjoelpeyton(100, 2318);
        solutions.multjoelpeyton(10000, 23331668);
        solutions.multjoelpeyton(45678, 486804150);
    })
    .add('multLee182', function () {
        solutions.multLee182(10, 23);
        solutions.multLee182(20, 78);
        solutions.multLee182(100, 2318);
        solutions.multLee182(10000, 23331668);
        solutions.multLee182(45678, 486804150);
    })
    .add('multAnourian', function () {
        solutions.multAnourian(10, 23);
        solutions.multAnourian(20, 78);
        solutions.multAnourian(100, 2318);
        solutions.multAnourian(10000, 23331668);
        solutions.multAnourian(45678, 486804150);
    })
    .add('multIronPike', function () {
        solutions.multIronPike(10, 23);
        solutions.multIronPike(20, 78);
        solutions.multIronPike(100, 2318);
        solutions.multIronPike(10000, 23331668);
        solutions.multIronPike(45678, 486804150);
    })
    .add('multayiemba', function () {
        solutions.multayiemba(10, 23);
        solutions.multayiemba(20, 78);
        solutions.multayiemba(100, 2318);
        solutions.multayiemba(10000, 23331668);
        solutions.multayiemba(45678, 486804150);
    })
    .add('multSabryRagab', function () {
        solutions.multSabryRagab(10, 23);
        solutions.multSabryRagab(20, 78);
        solutions.multSabryRagab(100, 2318);
        solutions.multSabryRagab(10000, 23331668);
        solutions.multSabryRagab(45678, 486804150);
    })
    .add('multmpontus', function () {
        solutions.multmpontus(10, 23);
        solutions.multmpontus(20, 78);
        solutions.multmpontus(100, 2318);
        solutions.multmpontus(10000, 23331668);
        solutions.multmpontus(45678, 486804150);
    })
    .add('multsilgarth', function () {
        solutions.multsilgarth(10, 23);
        solutions.multsilgarth(20, 78);
        solutions.multsilgarth(100, 2318);
        solutions.multsilgarth(10000, 23331668);
        solutions.multsilgarth(45678, 486804150);
    })
    .add('multanalistamarcio', function () {
        solutions.multanalistamarcio(10, 23);
        solutions.multanalistamarcio(20, 78);
        solutions.multanalistamarcio(100, 2318);
        solutions.multanalistamarcio(10000, 23331668);
        solutions.multanalistamarcio(45678, 486804150);
    })
    .add('multbhattmayur26', function () {
        solutions.multbhattmayur26(10, 23);
        solutions.multbhattmayur26(20, 78);
        solutions.multbhattmayur26(100, 2318);
        solutions.multbhattmayur26(10000, 23331668);
        solutions.multbhattmayur26(45678, 486804150);
    })
    .add('multDavidrfreeman', function () {
        solutions.multDavidrfreeman(10, 23);
        solutions.multDavidrfreeman(20, 78);
        solutions.multDavidrfreeman(100, 2318);
        solutions.multDavidrfreeman(10000, 23331668);
        solutions.multDavidrfreeman(45678, 486804150);
    })
    .add('multEphopper', function () {
        solutions.multEphopper(10, 23);
        solutions.multEphopper(20, 78);
        solutions.multEphopper(100, 2318);
        solutions.multEphopper(10000, 23331668);
        solutions.multEphopper(45678, 486804150);
    })
    .add('multNostalgieCamarade', function () {
        solutions.multNostalgieCamarade(10, 23);
        solutions.multNostalgieCamarade(20, 78);
        solutions.multNostalgieCamarade(100, 2318);
        solutions.multNostalgieCamarade(10000, 23331668);
        solutions.multNostalgieCamarade(45678, 486804150);
    })
    .add('multpaulo101977', function () {
        solutions.multpaulo101977(10, 23);
        solutions.multpaulo101977(20, 78);
        solutions.multpaulo101977(100, 2318);
        solutions.multpaulo101977(10000, 23331668);
        solutions.multpaulo101977(45678, 486804150);
    })
    .add('multhit1st', function () {
        solutions.multhit1st(10, 23);
        solutions.multhit1st(20, 78);
        solutions.multhit1st(100, 2318);
        solutions.multhit1st(10000, 23331668);
        solutions.multhit1st(45678, 486804150);
    })
    .add('mult79man', function () {
        solutions.mult79man(10, 23);
        solutions.mult79man(20, 78);
        solutions.mult79man(100, 2318);
        solutions.mult79man(10000, 23331668);
        solutions.mult79man(45678, 486804150);
    })
    .add('multjoshuaalm', function () {
        solutions.multjoshuaalm(10, 23);
        solutions.multjoshuaalm(20, 78);
        solutions.multjoshuaalm(100, 2318);
        solutions.multjoshuaalm(10000, 23331668);
        solutions.multjoshuaalm(45678, 486804150);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
