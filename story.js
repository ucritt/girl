const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Fungsi untuk mengarahkan ke WhatsApp dengan pesan
yesBtn.addEventListener('click', () => {
    window.location.href = "https://wa.me/6281210626736?text=Yes,%20I%20love%20you%20too!";
});

noBtn.addEventListener('click', () => {
    let randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
