import { Color, Numb } from "./enum";
import { Card } from "./type";

export function createCard(): Card {
    const colors = Object.values(Color);
    const numbs = Object.values(Numb);
    let card: Card = []
    for (let i = 0; i < numbs.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if(colors[j] === Color.king ){
                if(numbs[i] === Numb.king){
                    card.push({ color: colors[j], numb: numbs[i] });
                }
                continue;
            }
            if(colors[j] === Color.sKing){
                if(numbs[i] === Numb.sKing){
                    card.push({ color: colors[j], numb: numbs[i] });
                }
                continue;
            }
            if(numbs[i] === Numb.sKing || numbs[i] === Numb.king){
                continue;
            }
            card.push({ color: colors[j], numb: numbs[i] });
        }
    }
    return card
}


export function printCard(card: Card): void {
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