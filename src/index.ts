type Card = NormalCard[]

type Color = "♠" | "♥" | "♣" | "♦" | "🃏" | "🃏";

type NormalCard = {
    color: Color
    numb: number | string
}


function createCard(): Card {
    const colors: Color[] = ["♠", "♥", "♣", "♦"]
    let card: Card = []
    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (i === 1) {
                card.push({ color: colors[j], numb: "A" }); continue;
            }
            if (i === 11) {
                card.push({ color: colors[j], numb: "J" }); continue;
            }
            if (i === 12) {
                card.push({ color: colors[j], numb: "Q" }); continue;
            }
            if (i === 13) {
                card.push({ color: colors[j], numb: "K" }); continue;
            }
            card.push({ color: colors[j], numb: i });
        }
    }
    card.push({ color: "🃏", numb: "小王" })
    card.push({ color: "🃏", numb: "大王" })
    return card
}


function printCard(card: Card): void {
    let result = "\n";
    card.forEach((c, i) => {
        result += c.numb + c.color
        result += "\t";
        if ((i + 1) % 9 === 0) {
            result += "\n"
        }
    })
    console.log(result);

}

printCard(createCard());