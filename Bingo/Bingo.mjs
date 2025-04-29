"use strict";

// Funksjon for å generere et bingokort med egendefinert tekst
export function generateCustomBingoCard(textValues) {
    if (textValues.length < 25) {
        throw new Error("Du må ha minst 25 tekstverdier for å fylle bingokortet.");
    }

    // Fyll bingokortet med tekstverdier i rekkefølge
    const card = [];
    for (let row = 0; row < 5; row++) {
        const rowValues = textValues.slice(row * 5, row * 5 + 5);
        card.push(rowValues);
    }

    // Sett midtruten til "FREE"
    card[2][2] = "FREE";

    return card;
}