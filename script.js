document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const txt = document.getElementById('txt');
    let clickCount = 0;
    const texts = ['really?', 'u sure?', 'u fr?', 'for sure?', 'deadass?', 'nahh 😭', 'brooo💀', 'you sure?', 'say less 😤', 'ight then…', 'whatever😒', 'lmao ok', 'omg 😭', 'woww', 'aight cool', 'u serious?', 'sheesshhh', 'ok ig😔'];

    noButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action to keep the button functional
        if (clickCount < 18) {
            clickCount++;
            yesButton.style.transform = `scale(${1 + clickCount * 0.2})`;
            noButton.querySelector('.no').textContent = texts[clickCount - 1];
            if (window.innerWidth > 768) {
                noButton.style.transform = 'translateX(200px)'; // Move the YES button to the left
                txt.style.transform = 'translateY(-100px)';
            }
        }
    });
});
