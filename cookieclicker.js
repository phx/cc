Game.popups=0;
Game.bakeryName = 'HACKER NOLAN';
Game.bakeryNameRefresh();
Game.RuinTheFun(1);
Game.cookies = Infinity;
Game.MaxSpecials();
Game.GetAllDebugs();
Game.Objects['Cursor'].amount = 9999;
Game.OpenSesame();
Game.PARTY = true;
Game.addClass("elderWrath");
Game.UpgradesById.forEach(function(e) {
    if (e.bought === 0) e.earn();
});
