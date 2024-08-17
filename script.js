document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('calculator-screen');
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', function(event) {
        const target = event.target;
        const value = target.value;

        if (!target.matches('button')) return;

        if (target.id === 'clear') {
            screen.value = '';
        } else if (value === '=') {
            try {
                screen.value = eval(screen.value) || '';
            } catch {
                screen.value = 'Error';
            }
        } else {
            screen.value += value;
        }
    });
});
