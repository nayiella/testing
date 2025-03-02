function toggleBio() {
    let bio = document.getElementById("bioSection");
    let facts = document.querySelector(".div-3");

    if (bio.classList.contains("show")) {
        bio.classList.remove("show");
        facts.classList.remove("show");
        setTimeout(() => {
            bio.style.visibility = "hidden";
            facts.style.visibility = "hidden";
            bio.style.opacity = "0";
            facts.style.opacity = "0";
        }, 500); // Delay agar efek animasi tetap terlihat sebelum menghilang
    } else {
        bio.style.visibility = "visible";
        facts.style.visibility = "visible";
        setTimeout(() => {
            bio.classList.add("show");
            facts.classList.add("show");
            bio.style.opacity = "1";
            facts.style.opacity = "1";
        }, 10); // Sedikit delay agar transisi berjalan lancar
    }
}

// Galeri Foto dengan Navigasi Next & Previous
let imageIndex = 0;
let imageSources = [
    "https://nayiella.github.io/image/photo-1.jpg",
    "https://nayiella.github.io/image/photo-2.jpg",
    "https://nayiella.github.io/image/photo-3.jpg",
    "https://nayiella.github.io/image/photo-4.jpg",
    "https://nayiella.github.io/image/photo-5.jpg",
    "https://nayiella.github.io/image/photo-6.jpg"
];

function updateGallery() {
    document.getElementById("galleryImage").src = imageSources[imageIndex];
}

function prevImage() {
    imageIndex = (imageIndex - 1 + imageSources.length) % imageSources.length;
    updateGallery();
}

function nextImage() {
    imageIndex = (imageIndex + 1) % imageSources.length;
    updateGallery();
}

window.onload = function () {
    updateGallery();
    document.getElementById("bioSection").style.visibility = "hidden";
    document.querySelector(".div-3").style.visibility = "hidden";
    document.getElementById("bioSection").style.opacity = "0";
    document.querySelector(".div-3").style.opacity = "0";
};