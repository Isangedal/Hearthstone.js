module.exports = {
    name: "Dredge Test",
    stats: [1, 1],
    desc: "Dredge.",
    mana: 1,
    tribe: "Beast",
    class: "Neutral",
    rarity: "Free",
    set: "Legacy",

    battlecry(plr, game) {
        game.functions.dredge();
    }
}