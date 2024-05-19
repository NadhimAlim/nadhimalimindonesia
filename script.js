const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// hamburgermenu

const menu = document.getElementById("menu-icon"); 
const navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-menu-active'); 
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-menu-active'); 
    navlist.classList.remove('active');
}

// tombol follow me

const followBtns = document.querySelectorAll(".h-btn"); // Memilih semua tombol dengan kelas "h-btn"
const followCountDisplay = document.getElementById("follow-count");

let followCount = 0;

followBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Menghentikan perilaku default dari tautan
        
        followCount++; // Menambah jumlah pengikut setiap kali tombol diklik
        followCountDisplay.textContent = ` ${followCount} Pengikut`;
    });
});





// hallo nama saya
const textElement1 = document.getElementById("typed-text-1");
const textElement2 = document.getElementById("typed-text-2");
const textContent1 = "I' am ";
const textContent2 = "Nadhim Alim";
let index1 = 0;
let index2 = 0;

function typeWriter1() {
    if (index1 < textContent1.length) {
        textElement1.textContent += textContent1.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 100); // Waktu penundaan antara setiap karakter (dalam milidetik)
    }
}

function typeWriter2() {
    if (index2 < textContent2.length) {
        textElement2.textContent += textContent2.charAt(index2);
        index2++;
        setTimeout(typeWriter2, 100); // Waktu penundaan antara setiap karakter (dalam milidetik)
    }
}

// Memanggil fungsi mengetik sendiri saat halaman dimuat
window.onload = function() {
    typeWriter1(); // Mulai mengetik teks pertama
    setTimeout(typeWriter2, textContent1.length * 100); // Mulai mengetik teks kedua setelah teks pertama selesai
};




const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable certain key combinations
document.addEventListener('keydown', event => {
    // Disable F12 key
    if (event.key === 'F12') {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }
});


