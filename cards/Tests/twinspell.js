module.exports = {
    name: "Twinspell Test",
    type: "Spell",
    desc: "Gain 1 Mana Crystal this turn only. Twinspell.",
    mana: 0,
    class: "Neutral",
    rarity: "Free",
    set: "Core",
    keywords: ["Twinspell"],

    cast(plr, game) {
        plr.mana += 1;
        game.functions.spellDmg(game.functions.selectTarget(`Deal ${game.functions.accountForSpellDmg(2)} damage.`), 2)
    }
}