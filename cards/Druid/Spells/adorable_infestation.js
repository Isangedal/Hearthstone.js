module.exports = {
    name: "Adorable Infestation",
    type: "Spell",
    desc: "Give a minion +1/+1. Summon a 1/1 Cub. Add a Cub to your hand.",
    mana: 1,
    class: "Druid",
    rarity: "Rare",
    set: "Voyage to the Sunken City",

    cast(plr, game, card) {
        let target = game.functions.selectTarget("Give a minion +1/+1.", true, null, "minion");

        if (target) {
            target.addStats(1, 1);
        }

        game.playMinion(new game.Minion("Marsuul Cub", plr), plr);

        plr.hand.push(new game.Minion("Marsuul Cub", plr));
    }
}