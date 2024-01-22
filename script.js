function showRandomText(card) {
    const texts = [
        "Hello this is valkyrie",
        "when life gives you lemons make lemonade",
        "when you fell back in your life you gotta rise up baby",
        "if any problem, tell that your mom..",
        
    ];

    const randomText = texts[Math.floor(Math.random() * texts.length)];

    card.querySelector('.card-content h2').innerText = randomText;
}
