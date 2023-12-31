

document.addEventListener('DOMContentLoaded', function() {
    const diceButtons = document.querySelectorAll('.dice__button');
    const resultElement = document.querySelector('.dice__result');
    const historyList = document.querySelector('.history-list');
    const modifierInput = document.getElementById('modifierInput');
    const modifierButtons = document.querySelectorAll('.modifier__button');

    diceButtons.forEach(button => {
        button.addEventListener('click', function() {
            rollDice(this.dataset.sides);
        });
    });

    modifierButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modifier = parseInt(button.dataset.modifier);
            const currentModifier = parseInt(modifierInput.value) || 0;
            modifierInput.value = currentModifier + modifier;
        });
    });

    function rollDice(sides) {
        const modifier = parseInt(modifierInput.value) || 0;
        const result = Math.floor(Math.random() * sides) + 1 + modifier;

        addToHistory(`D${sides} + ${modifier} - Resultado: ${result}`);

        resultElement.textContent = result;
        resultElement.classList.add('roll-animation');

        setTimeout(() => {
            resultElement.classList.remove('roll-animation');
        }, 1000);
    }

    function addToHistory(result) {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        historyList.appendChild(listItem);
    }
    const clearHistoryBtn = document.getElementById('clear-history');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', function() {
            historyList.innerHTML = '';
        });
    }
});
