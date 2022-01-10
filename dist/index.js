"use strict";
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["block"] = "\u2666";
    Color["plum"] = "\u2663";
    Color["king"] = "\uD83C\uDCCF";
    Color["sKing"] = "\uD83C\uDCCF";
})(Color || (Color = {}));
var Numb;
(function (Numb) {
    Numb["one"] = "A";
    Numb["two"] = "2";
    Numb["three"] = "3";
    Numb["four"] = "4";
    Numb["five"] = "5";
    Numb["six"] = "6";
    Numb["seven"] = "7";
    Numb["eight"] = "8";
    Numb["nine"] = "9";
    Numb["ten"] = "10";
    Numb["eleven"] = "J";
    Numb["twelve"] = "Q";
    Numb["thirteen"] = "K";
    Numb["king"] = "\u5927\u738B";
    Numb["sKing"] = "\u5C0F\u738B";
})(Numb || (Numb = {}));
function createCard() {
    const colors = Object.values(Color);
    const numbs = Object.values(Numb);
    let card = [];
    for (let i = 0; i < numbs.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (colors[j] === Color.king) {
                if (numbs[i] === Numb.king) {
                    card.push({ color: colors[j], numb: numbs[i] });
                }
                continue;
            }
            if (colors[j] === Color.sKing) {
                if (numbs[i] === Numb.sKing) {
                    card.push({ color: colors[j], numb: numbs[i] });
                }
                continue;
            }
            card.push({ color: colors[j], numb: numbs[i] });
        }
    }
    return card;
}
function printCard(card) {
    let result = "\n";
    card.forEach((c, i) => {
        result += c.numb + c.color;
        result += "\t";
        if ((i + 1) % 9 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
printCard(createCard());
