module.exports = {
    name: "Cast On Draw Test",
    desc: "Casts When Drawn: Gain 1 Mana Crystal this turn only.",
    mana: 0,
    class: "Neutral",
    rarity: "Free",
    set: "Core",

    castondraw(plr, game) {
        plr.mana += 1;
    }
}