document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    let clickCount = 0;
    const texts = ['really?', 'u sure?', 'u fr?', 'for sure?', 'Okay!😔'];

    noButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action to keep the button functional
        if (clickCount < 5) {
            clickCount++;
            noButton.style.transform = `scale(${1 + clickCount * 0.2})`;
            noButton.querySelector('.no').textContent = texts[clickCount - 1];
            if (window.innerWidth > 768) {
                yesButton.style.transform = 'translateX(-50px)'; // Move the YES button to the left
            }
        }
    });
});
